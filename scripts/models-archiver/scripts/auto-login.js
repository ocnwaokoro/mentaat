#!/usr/bin/env node
/**
 * Open models.com, open the login UI, and optionally start "Continue with Google"
 * or fill email/password. Session is saved to auth.json when you're done.
 *
 * Selectors (from find-login-selectors.js):
 *   - Login button:  button:has-text("Login")  or  button:has-text("LOGIN")
 *   - Login/account: https://www.models.com/account/  (or same after clicking Login)
 *   - Continue with Google: a:has-text("Google")  href=https://models.com/auth/social/google
 *   - Email input: input[type="email"] or input[name="email"]
 *   - Password input: input[type="password"] or input[name="password"]
 *
 * Usage:
 *   node scripts/auto-login.js              # Open login UI, you complete in browser, then press Enter to save
 *   node scripts/auto-login.js --google     # Click "Continue with Google" then you complete OAuth
 *   node scripts/auto-login.js --email      # Fill email/password from .env (MODELS_EMAIL, MODELS_PASSWORD)
 */
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

import { chromium } from "playwright";
import fs from "fs";
import readline from "readline";
import { BASE, AUTH_FILE } from "../lib/config.js";

async function main() {
  const doGoogle = process.argv.includes("--google");
  const doEmail = process.argv.includes("--email");
  const email = process.env.MODELS_EMAIL;
  const password = process.env.MODELS_PASSWORD;

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();
  page.setDefaultTimeout(15000);

  await page.goto(BASE, { waitUntil: "load", timeout: 20000 });
  await page.waitForTimeout(2000);

  // Open login: click the Login button (or go to /account/)
  const loginBtn = page.locator('button:has-text("Login"), button:has-text("LOGIN")').first();
  if ((await loginBtn.count()) > 0 && (await loginBtn.isVisible())) {
    await loginBtn.click();
    await page.waitForTimeout(2000);
  } else {
    await page.goto(BASE + "/account/", { waitUntil: "load", timeout: 15000 });
    await page.waitForTimeout(2000);
  }

  if (doGoogle) {
    const googleBtn = page.locator('a:has-text("Google")').first();
    if ((await googleBtn.count()) > 0 && (await googleBtn.isVisible())) {
      await googleBtn.click();
      console.log("Clicked Continue with Google. Complete sign-in in the browser, then press Enter here.");
    } else {
      console.log("Google button not found. Complete login in the browser, then press Enter.");
    }
  } else if (doEmail && email && password) {
    await page.fill('input[name="email"], input[type="email"]', email);
    await page.fill('input[name="password"], input[type="password"]', password);
    const submit = page.locator('button[type="submit"], input[type="submit"], button:has-text("Sign in"), button:has-text("Log in")').first();
    if ((await submit.count()) > 0 && (await submit.isVisible())) {
      await submit.click();
      await page.waitForTimeout(5000);
      // If we're still on account page or see "My Account", assume logged in and save
      const url = page.url();
      const hasMyAccount = await page.locator('text=My Account').isVisible().catch(() => false);
      if (hasMyAccount || url.includes("/account") || !url.includes("/auth/")) {
        await context.storageState({ path: AUTH_FILE });
        console.log("Session saved to auth.json");
        await browser.close();
        return;
      }
    }
    console.log("Submitted email/password. If 2FA or error, complete in browser, then press Enter.");
  } else {
    console.log("Login UI opened. Log in in the browser (e.g. Continue with Google), then press Enter here to save session.");
  }

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise((resolve) => rl.question("Press Enter when you're logged in to save auth.json... ", resolve));
  rl.close();

  await context.storageState({ path: AUTH_FILE });
  console.log("Saved to auth.json");
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
