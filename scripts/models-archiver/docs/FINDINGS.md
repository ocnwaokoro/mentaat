# Models.com archiver – findings

Summary of what works for reliably saving models.com pages as single HTML files with correct styling and site-like directory structure.

---

## 1. Capture method that works

**Use in-page SingleFile capture (`save-inpage.js`), not CDP-only capture.**

- **Problem:** Saving from “outside” (Playwright + `pageToSingleFile` / CDP) often captured the page before CSS and JS had fully run (e.g. CSS-in-JS, lazy-loaded styles). Result: empty or wrong styles, “funky” state.
- **Solution:** Inject SingleFile into the page **before** navigation, then load the URL, scroll, wait, and call **`window.singlefile.getPageData()` inside the page**. The snapshot is taken in the same context as the live page, so all applied styles and DOM are included.

**Script:** `node scripts/save-inpage.js [urlsFile] [limit]`

---

## 2. Headed browser

- **Always run with a visible (headed) browser** (`headless: false`). The site uses a security/bot check; headless often gets the “verifying you are not a bot” page instead of the real content.
- Both `save.js` and `save-inpage.js` are set to launch a headed browser every time.

---

## 3. Load and scroll before capture

To avoid capturing a half-loaded page:

1. **Navigate** with `waitUntil: "load"`.
2. **Wait ~5s** after load so initial JS/CSS run.
3. **Scroll to the bottom** in steps (e.g. 300px), **stay at bottom ~2s** so lazy content and CSS-in-JS run, then scroll back to top.
4. **Wait ~5s** after scroll.
5. **Then** run the capture (in-page `getPageData()` or, for `save.js`, freeze CSS + inline computed styles + `pageToSingleFile`).

`scrollFullPageScript()` in `lib/utils.js` does the scroll; both save scripts use it.

---

## 4. Styling on models.com

- Inspections showed **0** `<link rel="stylesheet">` and **2** `<style>` tags (~20k chars) after load + scroll → styles are injected (e.g. CSS-in-JS), not only from external stylesheets.
- **Freezing CSS** (collecting `document.styleSheets` + `<style>` into one tag) and **inlining computed styles** help when using the CDP path (`save.js`). For the in-page path (`save-inpage.js`), SingleFile serializes the live DOM and styles as-is.

---

## 5. Output layout: directory tree

Saved HTML is written under **`output/YYYY-MM-DD/`** in a **path that mirrors the site**:

- `https://www.models.com/about/services/` → `output/2026-02-23/about/services/index.html`
- `https://www.models.com/company/masthead.html` → `output/2026-02-23/company/masthead.html`
- `https://www.models.com/mdx/some-article` → `output/2026-02-23/mdx/some-article.html`

`lib/utils.js` exposes **`urlToDirPath(url)`** for this mapping; `save-inpage.js` (and optionally `save.js`) use it and create subdirs with `mkdirSync(..., { recursive: true })`.

---

## 6. Auth and session

- Log in once (e.g. `npm run login` or `npm run auto-login`); session is stored in **`auth.json`** (gitignored).
- Crawl, crawl-tree, and save scripts load **`storageState: auth.json`** so requests use the same cookies/session.

---

## 7. Site tree from first crawl

**The first (and every) crawl produces the site tree.** No separate step is needed. When you run `npm run crawl` or `HEADED=1 node scripts/crawl.js [maxUrls]`, the script writes:

- **`output/<date>/url_list.txt`** – discovered URLs (one per line, deduplicated).
- **`output/<date>/site-tree.json`** – site hierarchy as JSON.
- **`output/<date>/site-tree.txt`** – same hierarchy in human-readable text.

So a single crawl both discovers URLs and documents the site tree. Use `crawl-then-save.sh` to run crawl then save in one go; Phase 1 is the crawl (url list + site tree), Phase 2 is save-inpage.

---

## 8. Recommended workflow

1. **Login:** `npm run login` (or auto-login), complete sign-in, press Enter to save `auth.json`.
2. **Crawl (if you need a URL list):** `npm run crawl` or `npm run crawl:headed` → `output/<date>/url_list.txt` and `site-tree.json` + `site-tree.txt`.
3. **Save pages:**  
   - **Best:** `node scripts/save-inpage.js output/<date>/url_list.txt [limit]`  
   - Or use a custom URL list: `node scripts/save-inpage.js path/to/urls.txt [limit]`  
   Saved HTML goes under `output/<date>/` in the dir-tree structure above.

---

## 9. Memory strategy (long save runs)

To avoid memory buildup over 1000+ pages:

- **Workers:** Total workers are capped at **16** (e.g. `--browsers 2 --tabs 8` or `--browsers 4 --tabs 4`). Fewer workers = less browser/Chromium memory.
- **No HTML accumulation:** Each page is written to disk immediately; we do not hold full HTML in memory after writing.
- **Optional:** For very long runs (e.g. 2000+ URLs), you can split the URL list and run save-inpage in batches (e.g. first 500, then next 500), closing all browsers between runs to free memory. Example:
  ```bash
  head -500 output/<date>/url_list.txt > /tmp/batch1.txt
  tail -n +501 output/<date>/url_list.txt | head -500 > /tmp/batch2.txt
  node scripts/save-inpage.js /tmp/batch1.txt --out-dir /Volumes/Cargo/models.com --browsers 2 --tabs 8
  node scripts/save-inpage.js /tmp/batch2.txt --out-dir /Volumes/Cargo/models.com --browsers 2 --tabs 8
  ```
- **Node heap:** If Node itself grows (e.g. from logging or retained refs), you can run with `NODE_OPTIONS=--max-old-space-size=4096` to cap the heap.

---

## 10. Scripts reference

| Script              | Purpose |
|---------------------|--------|
| `save-inpage.js`    | Inject SingleFile before load, then capture in-page after scroll; **recommended** for correct styling. Writes HTML in dir tree. Headed. |
| `save.js`           | Load → scroll → style stability → freeze CSS → inline computed styles → `pageToSingleFile`. Headed. Can also be updated to use dir tree. |
| `inspect-styling.js`| One URL: load, scroll, then report stylesheet count and `<style>` info to `output/<date>/styling-inspect.json`. |

---

---

## 11. Duplicates in discovered URLs

**No duplicates:** The crawl keeps a `seen` set and only enqueues each normalized URL once; it writes **`url_list.txt`** as `[...new Set(seen)].sort()`. The save scripts (**save-inpage.js**, **save.js**) normalize each line and deduplicate with `[...new Set(urls)]` before processing, so even if the file had duplicates or trailing-slash variants, each URL is only saved once.

**Trailing-slash equivalence:** `normalizeUrl()` now strips a trailing slash from the path (e.g. `/db/advertising/` → `/db/advertising`), so the same page with and without a trailing slash is stored once. That avoids duplicate entries like `.../db/advertising` and `.../db/advertising/`.

---

## 12. Recommended fast preset (default)

**save-inpage.js** uses this by default (headed browser):

| Setting | Default | Env override |
|--------|---------|----------------|
| Navigation | `domcontentloaded` | `WAIT_UNTIL=load` for full load |
| Wait after load | 300 ms | `WAIT_AFTER_LOAD_MS` |
| Wait after scroll | 300 ms | `WAIT_AFTER_SCROLL_MS` |
| Scroll | 500 ms at bottom, 600 px step | (in utils `scrollFullPageScript`) |

So the page opens, we proceed as soon as the DOM is ready, wait 300 ms, scroll, wait 300 ms, then capture. On tested pages this yields a full capture in ~7–9 s per page. If a page is missing styles, use `WAIT_UNTIL=load` and/or increase the waits.

## 13. Output equivalence (test_run1 vs test_run2)

Two runs with the same URLs and settings produce **equivalent** but **not byte-identical** files: same document structure, same titles, same style blocks; size and embedded data (e.g. around byte 105M in index.html) differ slightly. **Recommendation:** Treat the fast in-page method as the standard: use default preset and `--parallel N` for full-site runs; accept run-to-run byte differences as normal.

## 14. Host in output path (2000+ unique files)

`urlToDirPath()` now prefixes the path with the hostname (dots → underscores) so different hosts don’t overwrite each other. Example: `https://www.models.com/about/services/` → `www_models_com/about/services/index.html`, `https://help.models.com/section/33/foo` → `help_models_com/section/33/foo.html`. That way a full crawl (2500+ URLs across www.models.com, help.models.com, etc.) produces 2000+ unique HTML files instead of ~140 when only the pathname was used.

## 15. Parallel extraction

Run multiple pages (tabs) at once to reduce total time:

```bash
node scripts/save-inpage.js output/<date>/url_list.txt 12 --parallel 3
```

This opens 3 tabs and processes URLs in parallel (as one tab finishes, it takes the next URL). Total wall-clock time is roughly (total_pages / concurrency) × time_per_page. Concurrency is capped at 8. See `docs/PARALLEL_REPORT.md` for a timing comparison.

---

*Last updated: 2026-02-23*
