#!/usr/bin/env node
/**
 * Save pages by injecting SingleFile BEFORE navigation, then loading, scrolling,
 * and calling getPageData() inside the page. Captures the exact state after full load.
 *
 * Usage: node save-inpage.js <urlsFile> [limit] [--parallel N] [--out-dir PATH] [--browsers B] [--tabs T]
 *   Always runs in a visible (headed) browser.
 *   --out-dir PATH: write HTML to this directory (e.g. /Volumes/Cargo/models.com).
 *   --browsers B: number of browser windows (default 1).
 *   --tabs T: tabs per browser (default same as --parallel). Total workers = B × T.
 */
import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { pathToFileURL } from "url";
import { fileURLToPath } from "url";
import { AUTH_FILE, getOutputDir } from "../lib/config.js";
import { normalizeUrl, urlToDirPath, scrollFullPageScript } from "../lib/utils.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function getSingleFileBundle() {
  const bundlePath = path.join(__dirname, "..", "node_modules", "playwright-single-file", "dist", "lib", "vendor", "single-file-bundle.js");
  if (!fs.existsSync(bundlePath)) throw new Error("SingleFile bundle not found at " + bundlePath);
  const bundle = await import(pathToFileURL(bundlePath).href);
  return { script: bundle.script, hookScript: bundle.hookScript, zipScript: bundle.zipScript };
}

function initSingleFileInPage() {
  return `
  (function() {
    if (typeof singlefile === "undefined") return;
    singlefile.init({
      fetch: function(url, options) {
        return fetch(url, options).then(function(r) {
          return r.arrayBuffer().then(function(buf) {
            return {
              arrayBuffer: function() { return buf; },
              headers: r.headers,
              status: r.status
            };
          });
        });
      }
    });
  })();
  `;
}

function parseArgv() {
  const argv = process.argv.slice(2);
  const getVal = (key) => {
    const i = argv.indexOf(key);
    return i !== -1 && argv[i + 1] && /^\d+$/.test(argv[i + 1]) ? parseInt(argv[i + 1], 10) : null;
  };
  const parallel = getVal("--parallel") ?? 1;
  const browsers = getVal("--browsers") ?? 1;
  const tabs = getVal("--tabs") ?? (browsers > 1 ? 4 : parallel);
  const outDirIdx = argv.indexOf("--out-dir");
  const outDirArg = outDirIdx !== -1 && argv[outDirIdx + 1] ? argv[outDirIdx + 1] : null;
  const positional = argv.filter((a, i) => {
    if (["--parallel", "--out-dir", "--browsers", "--tabs"].includes(a)) return false;
    if (i > 0 && ["--parallel", "--out-dir", "--browsers", "--tabs"].includes(argv[i - 1])) return false;
    return true;
  });
  const totalWorkers = Math.min(browsers * tabs, 16);
  return { positional, parallel, outDirArg, browsers, tabsPerBrowser: tabs, totalWorkers };
}

async function main() {
  const parsed = parseArgv();
  const { positional, outDirArg } = parsed;
  const baseOutDir = outDirArg ? path.resolve(process.cwd(), outDirArg) : getOutputDir();
  const outDir = baseOutDir;
  fs.mkdirSync(outDir, { recursive: true });

  let urlsPath = positional[0];
  if (!urlsPath) {
    const outDirForList = getOutputDir();
    const urlList = path.join(outDirForList, "url_list.txt");
    const discovered = path.join(outDirForList, "discovered_urls.txt");
    urlsPath = fs.existsSync(urlList) ? urlList : (fs.existsSync(discovered) ? discovered : null);
  }
  if (!urlsPath || !fs.existsSync(urlsPath)) {
    console.error("Usage: node save-inpage.js <urlsFile> [limit] [--parallel N] [--out-dir PATH] [--browsers B] [--tabs T]");
    process.exit(1);
  }

  let urls = fs
    .readFileSync(urlsPath, "utf8")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((u) => normalizeUrl(u))
    .filter(Boolean);
  urls = [...new Set(urls)];
  const limitArg = positional[1];
  const limit = limitArg && /^\d+$/.test(limitArg) ? parseInt(limitArg, 10) : null;
  if (limit != null && limit > 0) urls = urls.slice(0, limit);
  if (urls.length === 0) {
    console.error("URL list is empty.");
    process.exit(1);
  }

  const { script, hookScript, zipScript } = await getSingleFileBundle();
  const waitAfterLoadMs = parseInt(process.env.WAIT_AFTER_LOAD_MS || "300", 10);
  const waitAfterScrollMs = parseInt(process.env.WAIT_AFTER_SCROLL_MS || "300", 10);
  const waitUntil = process.env.WAIT_UNTIL === "load" ? "load" : "domcontentloaded";
  const scrollOpts = { atBottomMs: 500, step: 600 };

  const contextOptions = {
    ...(fs.existsSync(AUTH_FILE) && { storageState: AUTH_FILE }),
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 800 },
  };

  const numBrowsers = Math.max(1, parsed.browsers);
  const tabsPerBrowser = parsed.tabsPerBrowser ?? parsed.parallel;
  const totalWorkers = Math.min(numBrowsers * tabsPerBrowser, 16);
  const concurrency = numBrowsers === 1 ? Math.max(1, Math.min(parsed.parallel, 8)) : totalWorkers;

  const initScript =
    hookScript +
    "\n" +
    script +
    "\nif (typeof singlefile !== 'undefined') window.singlefile = singlefile;\n" +
    initSingleFileInPage();

  async function saveOne(page, url, index) {
    const relativePath = urlToDirPath(url);
    const outPath = path.join(outDir, relativePath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    try {
      await page.goto(url, { waitUntil, timeout: 30000 });
      await page.waitForTimeout(waitAfterLoadMs);
      await page.evaluate(scrollFullPageScript(scrollOpts));
      await page.waitForTimeout(waitAfterScrollMs);
      const content = await page.evaluate(
        async (arg) => {
          const { zipScript: zip, opts = {} } = arg;
          if (typeof window.singlefile === "undefined" || !window.singlefile.getPageData) {
            throw new Error("SingleFile not available in page");
          }
          const data = await window.singlefile.getPageData({
            zipScript: zip,
            compressContent: false,
            removeScripts: false,
            removeHidden: false,
            removeUnusedStyles: false,
            removeUnusedFonts: false,
            ...opts,
          });
          return typeof data.content === "string" ? data.content : new TextDecoder().decode(data.content);
        },
        { zipScript, opts: {} }
      );
      fs.writeFileSync(outPath, content, "utf8");
      return { index, url, ok: true };
    } catch (e) {
      return { index, url, ok: false, message: e.message };
    }
  }

  const allPages = [];
  const browsersToClose = [];

  if (numBrowsers === 1 && concurrency === 1) {
    const browser = await chromium.launch({ headless: false });
    browsersToClose.push(browser);
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();
    page.setDefaultTimeout(60000);
    page.setDefaultNavigationTimeout(60000);
    await page.addInitScript({ content: initScript });
    for (let i = 0; i < urls.length; i++) {
      process.stdout.write(`[${i + 1}/${urls.length}] ${urls[i].slice(0, 50)}... `);
      const r = await saveOne(page, urls[i], i);
      console.log(r.ok ? "OK" : "FAIL " + r.message);
    }
    await page.close();
  } else {
    for (let b = 0; b < numBrowsers; b++) {
      const browser = await chromium.launch({ headless: false });
      browsersToClose.push(browser);
      const context = await browser.newContext(contextOptions);
      for (let t = 0; t < tabsPerBrowser; t++) {
        const p = await context.newPage();
        p.setDefaultTimeout(60000);
        p.setDefaultNavigationTimeout(60000);
        await p.addInitScript({ content: initScript });
        allPages.push(p);
      }
    }
    const workerCount = Math.min(allPages.length, 16);
    const pages = allPages.slice(0, workerCount);
    let nextIndex = 0;
    async function worker(p) {
      while (true) {
        const i = nextIndex++;
        if (i >= urls.length) return;
        const url = urls[i];
        process.stdout.write(`[${i + 1}/${urls.length}] ${url.slice(0, 50)}... `);
        const r = await saveOne(p, url, i);
        console.log(r.ok ? "OK" : "FAIL " + r.message);
      }
    }
    await Promise.all(pages.map((p) => worker(p)));
    for (const p of allPages) await p.close();
  }

  for (const browser of browsersToClose) await browser.close();
  console.log(`Saved to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
