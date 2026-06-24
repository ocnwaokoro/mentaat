#!/usr/bin/env node
/**
 * Crawl models.com (using saved session). Discovers links and writes
 * all discovered URLs to output/<date>/url_list.txt and site tree to site-tree.json + site-tree.txt.
 *
 * With --save: also save each visited page as a single HTML file (SingleFile) into output/<date>/.
 * Use --save 10 to crawl but only save the first 10 pages (for testing).
 *
 * Usage: node crawl.js [maxUrls] [maxDepth] [--save [limit]]
 *   Use HEADED=1 to run a visible browser (helps get past Cloudflare and JS-heavy pages).
 */
import { chromium } from "playwright";
import { pageToSingleFile } from "playwright-single-file";
import path from "path";
import fs from "fs";
import { AUTH_FILE, SEED_FILE, BASE, getOutputDir } from "../lib/config.js";
import { normalizeUrl, pathSegments, setInTree, treeToText, extractLinks, urlToFilename, scrollFullPageScript, getInlineComputedStylesScript } from "../lib/utils.js";

const argv = process.argv.slice(2);
const saveIdx = argv.indexOf("--save");
const savePages = saveIdx !== -1;
const saveLimit = savePages && argv[saveIdx + 1] && /^\d+$/.test(argv[saveIdx + 1])
  ? parseInt(argv[saveIdx + 1], 10)
  : null;
const maxUrls = Number.parseInt(argv[0], 10) || 2000;
const maxDepth = Number.isNaN(Number.parseInt(argv[1], 10)) ? 3 : Number.parseInt(argv[1], 10);
const headed = process.env.HEADED === "1" || process.env.HEADED === "true";
const waitAfterLoadMs = parseInt(process.env.WAIT_MS || "4000", 10);

async function main() {
  if (!fs.existsSync(AUTH_FILE)) {
    console.error("Run npm run login first to create auth.json");
    process.exit(1);
  }

  const outDir = getOutputDir();
  fs.mkdirSync(outDir, { recursive: true });
  const urlListFile = path.join(outDir, "url_list.txt");
  const siteTreeJsonFile = path.join(outDir, "site-tree.json");
  const siteTreeTxtFile = path.join(outDir, "site-tree.txt");

  let seedUrls = [];
  if (fs.existsSync(SEED_FILE)) {
    seedUrls = fs.readFileSync(SEED_FILE, "utf8").split("\n").map((s) => s.trim()).filter(Boolean);
  }
  if (seedUrls.length === 0) seedUrls = [BASE];

  const seen = new Set();
  const queue = seedUrls
    .map((u) => ({ url: normalizeUrl(u), depth: 0 }))
    .filter((e) => e.url && !seen.has(e.url) && (seen.add(e.url), true));

  const browser = await chromium.launch({ headless: !headed });
  const context = await browser.newContext({
    storageState: AUTH_FILE,
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 800 },
    userAgent: headed
      ? undefined
      : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  const page = await context.newPage();
  page.setDefaultTimeout(30000);
  page.setDefaultNavigationTimeout(60000);

  let savedCount = 0;

  while (queue.length > 0 && seen.size < maxUrls) {
    if (saveLimit != null && savedCount >= saveLimit) break;

    const { url, depth } = queue.shift();
    if (depth > maxDepth) continue;

    process.stdout.write(`\rCrawl ${seen.size}/${maxUrls} (depth ${depth}) ${url.slice(0, 50)}...`);

    try {
      await page.goto(url, { waitUntil: "load", timeout: 25000 });
      await page.waitForTimeout(waitAfterLoadMs);
      const links = await extractLinks(page);

      if (savePages && (saveLimit == null || savedCount < saveLimit)) {
        try {
          await page.evaluate(scrollFullPageScript());
          await page.waitForTimeout(2500);
          await page.evaluate(getInlineComputedStylesScript());
          const { content } = await pageToSingleFile(page, {
            removeScripts: false,
            compressHTML: false,
            removeHidden: false,
          });
          const name = urlToFilename(url);
          fs.writeFileSync(path.join(outDir, name), content, "utf8");
          savedCount++;
          process.stdout.write(`\rCrawl ${seen.size}/${maxUrls} saved ${savedCount}${saveLimit ? `/${saveLimit}` : ""} ${url.slice(0, 40)}...`);
        } catch (saveErr) {
          console.warn("\nsave failed:", saveErr.message);
        }
      }

      for (const href of links) {
        const norm = normalizeUrl(href);
        if (!norm || seen.has(norm)) continue;
        seen.add(norm);
        queue.push({ url: norm, depth: depth + 1 });
      }
    } catch (e) {
      // skip failed pages
    }
  }

  await browser.close();

  const sorted = [...new Set(seen)].sort();
  fs.writeFileSync(urlListFile, sorted.join("\n") + "\n", "utf8");
  console.log(`\nDone. ${sorted.length} unique URLs written to ${urlListFile}`);

  const tree = {};
  for (const u of sorted) {
    setInTree(tree, pathSegments(u), u);
  }
  fs.writeFileSync(siteTreeJsonFile, JSON.stringify(tree, null, 2), "utf8");
  fs.writeFileSync(siteTreeTxtFile, treeToText(tree).join("\n") + "\n", "utf8");
  console.log(`Site tree written to ${siteTreeJsonFile} and ${siteTreeTxtFile}`);

  if (savePages && savedCount > 0) {
    console.log(`Saved ${savedCount} pages as single HTML to ${outDir}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
