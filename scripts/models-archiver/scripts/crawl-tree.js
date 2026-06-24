#!/usr/bin/env node
/**
 * Visit each URL from a list, extract links, and write to output/<date>/:
 *   url-to-links.json, site-tree.json, site-tree.txt
 *
 * Usage: node crawl-tree.js [urls.txt]
 */
import { chromium } from "playwright";
import path from "path";
import fs from "fs";
import { AUTH_FILE, SEED_FILE, getOutputDir } from "../lib/config.js";
import {
  normalizeUrl,
  pathSegments,
  extractLinks,
  setInTree,
  treeToText,
} from "../lib/utils.js";

const DEFAULT_URL_LIST = "url_list.txt";

async function main() {
  const outDir = getOutputDir();
  fs.mkdirSync(outDir, { recursive: true });

  let urlListPath = process.argv[2];
  if (!urlListPath) {
    const urlList = path.join(outDir, "url_list.txt");
    const discovered = path.join(outDir, "discovered_urls.txt");
    urlListPath = fs.existsSync(urlList) ? urlList : (fs.existsSync(discovered) ? discovered : SEED_FILE);
  }
  if (!fs.existsSync(urlListPath)) {
    console.error("No URL list. Usage: node crawl-tree.js [urls.txt]");
    process.exit(1);
  }

  const urls = fs
    .readFileSync(urlListPath, "utf8")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean)
    .map(normalizeUrl)
    .filter(Boolean);
  const uniqueUrls = [...new Set(urls)];

  console.log("Visiting", uniqueUrls.length, "URLs and extracting links...\n");

  const urlToLinks = {};
  const allUrls = new Set(uniqueUrls);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ...(fs.existsSync(AUTH_FILE) && { storageState: AUTH_FILE }),
    ignoreHTTPSErrors: true,
    viewport: { width: 1280, height: 800 },
  });

  const page = await context.newPage();
  page.setDefaultTimeout(30000);
  page.setDefaultNavigationTimeout(45000);

  for (let i = 0; i < uniqueUrls.length; i++) {
    const url = uniqueUrls[i];
    const short = url.slice(0, 55) + (url.length > 55 ? "…" : "");
    process.stdout.write(`[${i + 1}/${uniqueUrls.length}] ${short}\n`);

    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 20000 });
      await page.waitForTimeout(2000);
      const links = await extractLinks(page);
      const normalized = links.map(normalizeUrl).filter(Boolean);
      urlToLinks[url] = [...new Set(normalized)];
      normalized.forEach((u) => allUrls.add(u));
    } catch (e) {
      urlToLinks[url] = [];
      console.warn("  failed:", e.message);
    }
  }

  await browser.close();

  const tree = {};
  for (const u of allUrls) {
    setInTree(tree, pathSegments(u), u);
  }

  fs.writeFileSync(
    path.join(outDir, "url-to-links.json"),
    JSON.stringify(urlToLinks, null, 2),
    "utf8"
  );
  fs.writeFileSync(
    path.join(outDir, "site-tree.json"),
    JSON.stringify(tree, null, 2),
    "utf8"
  );
  fs.writeFileSync(
    path.join(outDir, "site-tree.txt"),
    treeToText(tree).join("\n") + "\n",
    "utf8"
  );

  console.log("\nDone. Output in", outDir);
  console.log("  url-to-links.json  site-tree.json  site-tree.txt");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
