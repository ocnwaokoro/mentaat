# Parallel extraction report

Same 6 URLs saved with the **recommended fast preset** (domcontentloaded, 300 ms / 300 ms). One run sequential, one with 3 tabs in parallel.

## Test setup

- **URLs:** 6 (home, about/services, account, activism, agencies, agencies/Modeling)
- **Preset:** Default (domcontentloaded, 300 ms after load, 300 ms after scroll)
- **Browser:** Headed Chromium
- **Machine:** Single run each; times include full browser lifecycle

## Results

| Mode        | Total time | Time per URL (avg) | Notes        |
|------------|------------|--------------------|--------------|
| Sequential | **36.3 s** | ~6.1 s             | 1 tab        |
| Parallel 3 | **19.1 s** | ~3.2 s             | 3 tabs       |

**Speedup:** 36.3 / 19.1 ≈ **1.9×** (theoretical max with 3 workers would be 3×; overhead and last batch explain the gap).

## Conclusion

- Parallel extraction works and cuts total time for multi-page runs.
- With `--parallel 3`, 6 pages finished in about half the time of sequential.
- For larger runs (e.g. 30+ URLs), use `--parallel 3` or `--parallel 4` to keep total time down while avoiding too many open tabs.

## How to run

```bash
# Sequential (default)
node scripts/save-inpage.js output/2026-02-23/discovered_urls.txt 20

# Parallel (3 tabs)
node scripts/save-inpage.js output/2026-02-23/url_list.txt 20 --parallel 3
```

---

*Run date: 2026-02-23*
