# Models.com archiver

Login, crawl models.com, and save each page as a single HTML file. All **output** is written to a single folder per run: **`output/YYYY-MM-DD/`** (kebab-case date).

## Layout

```
models-archiver/
├── lib/                    # shared config and utils
│   ├── config.js
│   └── utils.js
├── scripts/                 # runnable scripts
│   ├── login.js
│   ├── crawl.js
│   ├── crawl-tree.js
│   ├── save.js
│   ├── import-auth.js
│   └── get-sitemap.sh
├── export-session-for-console.js   # paste in browser to export session
├── auth.json                # session (gitignored)
├── output/                  # all output (gitignored)
│   └── 2026-02-23/         # one dir per day
│       ├── url_list.txt       # plain URL list (one per line)
│       ├── site-tree.json     # site hierarchy (JSON)
│       ├── site-tree.txt      # site hierarchy (text)
│       └── *.html
├── package.json
└── README.md
```

## Prerequisites

- Node.js 20+
- `npm install` then `npx playwright install chromium` (first time only)

## Commands

| Command | Description |
|--------|-------------|
| `npm run login` | Open browser; log in on models.com; session saved to `auth.json`. |
| `npm run import-auth -- exported-session.json` | Build `auth.json` from console-exported session. |
| `npm run get-sitemap` | Create `output/YYYY-MM-DD/` and copy seed URL list into it. |
| `npm run crawl` | Crawl from seed; write `output/<date>/url_list.txt` and `site-tree.json` + `site-tree.txt`. Uses a 4s wait after each page so JS can render. |
| `npm run crawl:headed` | Same, but with a **visible** browser (often needed to get past Cloudflare and to see real links). |
| `npm run crawl-tree` | Visit each URL, extract links; write `url-to-links.json`, `site-tree.json`, `site-tree.txt` into `output/<date>/`. |
| `npm run save` | Save each URL as single HTML in `output/<date>/`. |

All data (discovered URLs, site tree, saved HTML) goes into **`output/YYYY-MM-DD/`** for the current date. Use the same date for a run by setting env if needed (scripts use today by default).

## 1. Log in once

**Option A (recommended)**  
`npm run login` → browser opens → log in (e.g. “Continue with Google”) → press Enter in terminal. Full session (including HttpOnly cookies) is saved to `auth.json`.

**Option A′ (automated open + save)**  
`npm run auto-login` opens the site, clicks the **Login** button, and waits for you to complete sign-in (e.g. “Continue with Google”) in the same window; press Enter to save `auth.json`. Use `npm run auto-login -- --google` to also click “Continue with Google” so you only complete the OAuth flow. Login UI selectors were found by `npm run find-login` (no auth) and are in `scripts/auto-login.js` and `scripts/find-login-selectors.js`.

**Option B**  
Already logged in elsewhere: paste `export-session-for-console.js` into the DevTools console on models.com, copy the printed JSON into `exported-session.json`, then run `npm run import-auth -- exported-session.json`. HttpOnly cookies are not available to the console, so this may not be enough.

## 2. Crawl / tree / save

- **`npm run crawl`** – Discovers URLs from seed (`models_urls.txt` at repo root), writes **`url_list.txt`** (plain URL list) and **`site-tree.json`** + **`site-tree.txt`** (site hierarchy) in `output/<date>/`.
- **`npm run crawl-tree`** – Visits each URL in `url_list.txt` (or a file you pass), extracts links, writes `url-to-links.json`, `site-tree.json`, `site-tree.txt` in `output/<date>/`.
- **`npm run save`** – Reads `output/<date>/url_list.txt` (or seed/list you pass), saves each page as a single HTML file in `output/<date>/`.

**Full site (2000+ pages):** Run a headed crawl to discover URLs, then save. Use `--out-dir` to write to a specific path (e.g. `/Volumes/Cargo/models.com`). Use multiple browsers × tabs for speed; **do not close any browser window** until the save finishes.

```bash
# 1) Discover 2500 URLs (if needed; headed, ~5 min)
HEADED=1 node scripts/crawl.js 2500

# 2) Save all to a directory (e.g. external volume). Multiple browsers × tabs = more workers.
node scripts/save-inpage.js output/$(date +%Y-%m-%d)/url_list.txt \
  --out-dir /Volumes/Cargo/models.com \
  --browsers 2 --tabs 4
```

- `--out-dir PATH` – write HTML under `PATH` (e.g. `/Volumes/Cargo/models.com`).
- `--browsers B` – number of browser windows (default 1).
- `--tabs T` – tabs per browser (default 4 when using `--browsers`). Total workers = B × T (capped at 16).

**First crawl output:** The crawl (Phase 1) writes **`url_list.txt`**, **`site-tree.json`**, and **`site-tree.txt`** into `output/<date>/`. The site tree documents the discovered hierarchy; no separate tree pass is required.

**Memory:** Workers write each page to disk immediately (no accumulation of HTML in memory). Use 16 workers (e.g. `--browsers 2 --tabs 8`) to limit browser memory. For very long runs, see `docs/FINDINGS.md` (memory strategy).

Saved HTML is under `<out-dir>/<host>/<path>` (e.g. `www_models_com/about/services/index.html`).

You only need to log in once; after that, crawl, crawl-tree, and save run with your session.
