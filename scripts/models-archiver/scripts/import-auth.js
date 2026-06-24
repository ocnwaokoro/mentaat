#!/usr/bin/env node
/**
 * Build auth.json from a session exported in the browser console.
 * Usage: node import-auth.js [exported-session.json]
 */
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { AUTH_FILE } from "../lib/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  let raw;
  const input = process.argv[2];
  if (input && input !== "-") {
    raw = fs.readFileSync(path.isAbsolute(input) ? input : path.resolve(__dirname, "..", input), "utf8");
  } else {
    raw = await new Promise((resolve) => {
      let s = "";
      process.stdin.setEncoding("utf8");
      process.stdin.on("data", (c) => { s += c; });
      process.stdin.on("end", () => resolve(s));
    });
  }

  const data = JSON.parse(raw);
  const cookies = Array.isArray(data.cookies) ? data.cookies : [];
  const origins = Array.isArray(data.origins) ? data.origins : [];

  const state = {
    cookies: cookies.map((c) => ({
      name: c.name,
      value: c.value,
      domain: c.domain || "",
      path: c.path ?? "/",
      expires: c.expires ?? -1,
      httpOnly: !!c.httpOnly,
      secure: !!c.secure,
      sameSite: c.sameSite ?? "Lax",
    })),
    origins: origins.map((o) => ({
      origin: o.origin,
      localStorage: Array.isArray(o.localStorage) ? o.localStorage : [],
      sessionStorage: Array.isArray(o.sessionStorage) ? o.sessionStorage : [],
    })),
  };

  fs.writeFileSync(AUTH_FILE, JSON.stringify(state, null, 2), "utf8");
  console.log("Wrote auth.json (%d cookies, %d origins). Try: npm run crawl", state.cookies.length, state.origins.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
