import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

export const BASE = "https://www.models.com";
export const BASE_ORIGIN = "https://www.models.com";
export const AUTH_FILE = path.join(ROOT, "auth.json");
export const SEED_FILE = path.join(ROOT, "..", "..", "models_urls.txt");

/**
 * Output directory for this run: output/YYYY-MM-DD (kebab-case date).
 * If OUT_BASE is set (e.g. /Volumes/Cargo/models.com), output goes under OUT_BASE/date.
 * @param {string} [dateStr] - Optional date like "2026-02-23". Default: today or OUT_DATE env.
 */
export function getOutputDir(dateStr) {
  const date = dateStr || process.env.OUT_DATE || new Date().toISOString().slice(0, 10);
  const base = process.env.OUT_BASE ? path.resolve(process.env.OUT_BASE) : path.join(ROOT, "output");
  return path.join(base, date);
}

export { ROOT };
