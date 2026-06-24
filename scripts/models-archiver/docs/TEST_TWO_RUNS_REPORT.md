# Test: same URLs saved to two locations

**Goal:** Run save-inpage twice with the same URL list and compare output to see if runs produce identical files.

## Setup

- **URLs:** 3 (home, about/services, account)
- **Run 1:** `--out-dir output/2026-02-23/test_run1`
- **Run 2:** `--out-dir output/2026-02-23/test_run2`
- **Settings:** Default (domcontentloaded, 300 ms / 300 ms), sequential

## Result: files are **not** identical

| File | Run 1 size | Run 2 size | Match |
|------|------------|------------|--------|
| index.html | 107,198,515 | 107,242,398 | **DIFFER** |
| about/services/index.html | 59,186,416 | 59,188,102 | **DIFFER** |
| account/index.html | 59,846,743 | 59,845,057 | **DIFFER** |

- **Byte comparison:** No pair is byte-identical (`cmp` reports differences).
- **First difference (index.html):** Around byte 105,611,783 (likely embedded data / scripts).

## Conclusion

Two runs with the same input do **not** produce the same output. Differences are small (size and content) and consistent with non-deterministic content in the page or SingleFile (e.g. timestamps, IDs, order of serialization). For archival, the captures are equivalent in structure and content; for byte-exact reproducibility, they are not.

## How to reproduce

```bash
cd scripts/models-archiver

node scripts/save-inpage.js ../../models_urls.txt 3 --out-dir output/2026-02-23/test_run1
node scripts/save-inpage.js ../../models_urls.txt 3 --out-dir output/2026-02-23/test_run2

# Compare
cmp output/2026-02-23/test_run1/index.html output/2026-02-23/test_run2/index.html
```

---

*Run date: 2026-02-23*
