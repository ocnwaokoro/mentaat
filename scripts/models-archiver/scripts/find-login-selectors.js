#!/usr/bin/env node
/**
 * One-off: open models.com, click Login, and print selectors for the login UI
 * so we can automate login in headless/Playwright. Run with: node scripts/find-login-selectors.js
 */
import { chromium } from "playwright";
import fs from "fs";
import { BASE, AUTH_FILE } from "../lib/config.js";

async function main() {
  const useAuth = process.argv.includes("--auth") && fs.existsSync(AUTH_FILE);
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    ...(useAuth && { storageState: AUTH_FILE }),
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  });
  if (!useAuth) console.log("Running without auth to capture login UI...\n");
  const page = await context.newPage();
  page.setDefaultTimeout(15000);

  await page.goto(BASE, { waitUntil: "load", timeout: 20000 });
  await page.waitForTimeout(3000);

  // Find and describe login entry points
  const loginSelectors = [
    'a[href*="account"]',
    'a[href*="login"]',
    'button:has-text("Login")',
    'button:has-text("LOGIN")',
    '[data-testid*="login"]',
    'a:has-text("Login")',
    'a:has-text("LOGIN")',
  ];

  const found = [];
  for (const sel of loginSelectors) {
    try {
      const el = page.locator(sel).first();
      if ((await el.count()) > 0) {
        const visible = await el.isVisible();
        const text = await el.textContent().catch(() => "");
        const href = await el.getAttribute("href").catch(() => null);
        found.push({ selector: sel, visible, text: text?.slice(0, 50), href });
      }
    } catch (e) {
      // skip
    }
  }
  console.log("Login entry points found:\n", JSON.stringify(found, null, 2));

  // Option A: click Login button
  const loginBtn = page.locator('button:has-text("Login"), button:has-text("LOGIN")').first();
  if ((await loginBtn.count()) > 0 && (await loginBtn.isVisible())) {
    await loginBtn.click();
    await page.waitForTimeout(3000);
  } else {
    // Option B: go directly to account page
    await page.goto(BASE + "/account/", { waitUntil: "load", timeout: 15000 });
    await page.waitForTimeout(3000);
  }

  const url = page.url();
  console.log("\nLogin/account URL:", url);

  // Find "Continue with Google" and other auth options
  const googleSelectors = [
    'a:has-text("Google")',
    'button:has-text("Google")',
    'a:has-text("Continue with Google")',
    '[data-provider="google"]',
    'a[href*="google"]',
    'a[href*="auth/google"]',
  ];
  for (const sel of googleSelectors) {
    const el = page.locator(sel).first();
    if ((await el.count()) > 0 && (await el.isVisible())) {
      const text = await el.textContent().catch(() => "");
      const href = await el.getAttribute("href").catch(() => null);
      console.log('Found Google login:', { selector: sel, text: text?.slice(0, 60), href: href?.slice(0, 100) });
      break;
    }
  }

  // List inputs (email/password) and key buttons
  const inputs = await page.evaluate(() => {
    const inps = document.querySelectorAll('input:not([type="hidden"])');
    return Array.from(inps).map((el) => ({
      type: el.type,
      name: el.name,
      id: el.id,
      placeholder: el.placeholder?.slice(0, 40),
    }));
  });
  console.log("\nForm inputs:", JSON.stringify(inputs, null, 2));

  console.log("\nClosing in 3s...");
  await page.waitForTimeout(3000);
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
