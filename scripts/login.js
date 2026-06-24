#!/usr/bin/env node
/**
 * Step 1: Log in once. Opens a visible browser; you log in on models.com.
 * Session is saved to auth.json (project root). Required before running crawl.
 */
import { chromium } from "playwright";
import { AUTH_FILE, BASE } from "../lib/config.js";

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  });

  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: "domcontentloaded", timeout: 60000 });

  console.log("Browser opened. Log in to models.com in the window.");
  console.log("When you're done, press Enter here to save the session and close.");
  await new Promise((resolve) => process.stdin.once("data", resolve));

  await context.storageState({ path: AUTH_FILE });
  console.log("Session saved to auth.json");
  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
