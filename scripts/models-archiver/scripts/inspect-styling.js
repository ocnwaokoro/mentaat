#!/usr/bin/env node
/**
 * Open one URL, scroll to bottom (so everything loads), then report how styling is done:
 * stylesheet count, <link> and <style> tags, and whether styles are in JS.
 * Run: node scripts/inspect-styling.js [url]
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { AUTH_FILE, getOutputDir } from "../lib/config.js";
import { scrollFullPageScript } from "../lib/utils.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "https://www.models.com/about/services/";

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ...(fs.existsSync(AUTH_FILE) && { storageState: AUTH_FILE }),
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(20000);

  await page.goto(url, { waitUntil: "load", timeout: 25000 });
  await page.waitForTimeout(2000);
  await page.evaluate(scrollFullPageScript());
  await page.waitForTimeout(3000);

  const info = await page.evaluate(() => {
    const linkStyles = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map((l) => ({
      href: l.href,
      sheet: l.sheet ? (l.sheet.cssRules ? l.sheet.cssRules.length : "no rules") : "no sheet",
    }));
    const styleTags = document.querySelectorAll("style");
    const styleTagCount = styleTags.length;
    const styleTagLengths = Array.from(styleTags).map((s) => s.textContent.length);
    const totalStyleLength = styleTagLengths.reduce((a, b) => a + b, 0);
    return {
      linkStylesheets: linkStyles.length,
      linkHrefs: linkStyles.map((l) => l.href),
      styleTagCount,
      totalStyleChars: totalStyleLength,
      styleTagLengths: styleTagLengths.slice(0, 20),
      bodyClasses: document.body.className,
      sampleComputed: document.body ? window.getComputedStyle(document.body).display : null,
    };
  });

  await browser.close();

  const outDir = getOutputDir();
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "styling-inspect.json");
  fs.writeFileSync(outPath, JSON.stringify(info, null, 2), "utf8");
  console.log("Styling info written to", outPath);
  console.log("Stylesheet links:", info.linkStylesheets);
  console.log("Style tags:", info.styleTagCount, "total chars:", info.totalStyleChars);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
