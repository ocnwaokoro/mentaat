#!/usr/bin/env node
/**
 * Save each URL as a single HTML file into output/<date>/.
 *
 * Usage: node save.js [urlsFile] [limit] [--no-scripts]
 *   limit: optional max number of pages to save (default: all).
 *   --no-scripts: strip scripts from saved HTML so content stays visible when
 *     opened offline (avoids membership-gated content being hidden by React/auth JS).
 */
import { chromium } from "playwright";
import { pageToSingleFile } from "playwright-single-file";
import path from "path";
import fs from "fs";
import { AUTH_FILE, SEED_FILE, getOutputDir } from "../lib/config.js";
import { normalizeUrl, urlToDirPath, scrollFullPageScript, waitForStyleStabilityScript, freezeAllStylesScript, getInlineComputedStylesScript } from "../lib/utils.js";

function parseArgs(argv) {
  const args = argv.slice(2);
  const noScripts = args.includes("--no-scripts");
  const positional = args.filter((a) => a !== "--no-scripts");
  const urlsPath = positional[0] || null;
  const limitRaw = positional[1];
  const limit = limitRaw != null && /^\d+$/.test(limitRaw) ? parseInt(limitRaw, 10) : null;
  return { urlsPath, limit, noScripts };
}

async function main() {
  const outDir = getOutputDir();
  fs.mkdirSync(outDir, { recursive: true });

  const { urlsPath: urlsPathArg, limit, noScripts } = parseArgs(process.argv);
  let urlsPath = urlsPathArg;
  if (!urlsPath) {
    const urlList = path.join(outDir, "url_list.txt");
    const discovered = path.join(outDir, "discovered_urls.txt");
    urlsPath = fs.existsSync(urlList) ? urlList : (fs.existsSync(discovered) ? discovered : SEED_FILE);
  }
  if (!fs.existsSync(urlsPath)) {
    console.error("No URL list. Run crawl first or pass a file: node save.js <file>");
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
  if (limit != null && limit > 0) urls = urls.slice(0, limit);
  if (urls.length === 0) {
    console.error("URL list is empty.");
    process.exit(1);
  }

  if (noScripts) process.stdout.write("(saving with scripts removed so content stays visible when opened)\n");

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    ...(fs.existsSync(AUTH_FILE) && { storageState: AUTH_FILE }),
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 800 },
  });

  const page = await context.newPage();
  page.setDefaultTimeout(30000);
  page.setDefaultNavigationTimeout(45000);

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const relativePath = urlToDirPath(url);
    const outPath = path.join(outDir, relativePath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    process.stdout.write(`[${i + 1}/${urls.length}] ${url.slice(0, 50)}... `);

    try {
      await page.goto(url, { waitUntil: "load", timeout: 30000 });
      await page.waitForTimeout(5000);
      await page.evaluate(scrollFullPageScript());
      await page.waitForTimeout(5000);
      await page.evaluate(waitForStyleStabilityScript());
      const frozen = await page.evaluate(freezeAllStylesScript());
      if (frozen > 0) process.stdout.write(`[css ${frozen}] `);
      const inlined = await page.evaluate(getInlineComputedStylesScript());
      if (inlined > 0) process.stdout.write(`[inline ${inlined}] `);
      const { content } = await pageToSingleFile(page, {
        removeScripts: noScripts,
        compressHTML: false,
        removeHidden: false,
        removeUnusedStyles: false,
        removeUnusedFonts: false,
        loadDeferredImagesMaxIdleTime: 3000,
      });
      fs.writeFileSync(outPath, content, "utf8");
      console.log("OK");
    } catch (e) {
      console.log("FAIL", e.message);
    }
  }

  await browser.close();
  console.log(`Saved to ${outDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
