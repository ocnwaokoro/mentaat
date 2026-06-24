# Feedly HTML → Real React Conversion Process

This document describes the process used to convert a SingleFile-saved Feedly HTML page from **dangerouslySetInnerHTML** (raw HTML string) into **actual React components** with the same structure, class names, and styling. The goal is a perfect 1:1 visual and structural match, with maintainable JSX.

---

## Process (what we did for the homepage)

### 1. Run the conversion script (one-time per page)

From repo root:

```bash
node scripts/html-to-react.js "../path/to/saved.html" <page-name> [--lines=START,END]
```

- Creates `src/pages/<page-name>/` with: `styles.css`, `pageHtml.js`, `Page.jsx`, `index.js`
- Extracts assets to `public/assets/<page-name>-*.{png,webp,svg,woff2}`
- For Next.js pages with `#__next`, use `--lines=START,END` if the auto-extracted fragment is too short

**Result:** You have a working page via `dangerouslySetInnerHTML` and the correct CSS + assets in place.

### 2. Inspect the structure

- Open `pageHtml.js` (or the saved HTML) and identify the **main regions**:
  - Root: `#__next` (or equivalent)
  - Layout wrappers (e.g. `app_site--homepage__E5h5V`, `Layout_layout__u6BrU`, `Layout_content__q1d4E`)
  - **Header** (nav, logo, primary CTA)
  - **Main** (hero, tiles, sections, logo strip, etc.)
  - **Footer** (columns, links, legal, social)

- Note **repeating patterns** (e.g. product tiles, logo slides, link groups) so they become reusable components.

### 3. Create the component folder

```text
src/pages/<page-name>/components/
```

We will add one component per major region or repeating block.

### 4. Build components (exact class names + JSX)

For each region:

1. **Copy the exact class names** from the original HTML into JSX. Use `className="..."` with the full string so `styles.css` keeps working.
2. **Convert HTML → JSX rules:**
   - `class` → `className`
   - `tabindex` → `tabIndex`
   - `for` → `htmlFor` (on `<label>`)
   - `style="key: value"` → `style={{ key: value }}` or `style={{ '--css-var': value }}`
   - SVG: `fill-rule` → `fillRule`, `clip-rule` → `clipRule`
   - Boolean attributes: `aria-hidden` → `aria-hidden={true}` or omit when true
   - Fix unquoted attributes (e.g. `href=https://...` → `href="https://..."`)
3. **Extract dynamic bits** into props (e.g. tile title, description, hrefs, image src/alt).
4. **Replace base64 or placeholders** with asset paths: `/assets/<page-name>-N.ext` (or keep `asset-*` if you didn’t re-run the script).
5. **Stable IDs for a11y:** Replace React-style dynamic ids (e.g. `:R5jdm:`) with readable, stable ids (e.g. `footer-products`) for `id` and `aria-labelledby`.

### 5. Reusable building blocks

- **Repeating sections** (e.g. three product tiles) → one component (e.g. `Tile.jsx`) with props.
- **Lists** (e.g. logos, footer links) → map over a data array; keep the same wrapper classes and structure.

### 6. Compose the page

- **Page.jsx** imports `styles.css` and all section components.
- Renders the **same DOM hierarchy** as the original: root div → layout divs → Header, Main, Footer (or equivalent).
- No `dangerouslySetInnerHTML`; only real React elements.

### 7. Verify

- Run `npm run dev` and compare to the original saved HTML in a browser (layout, fonts, colors, images).
- Run `npm run build` and fix any lint/compile errors.
- Optionally keep `pageHtml.js` for reference or delete it once the React version is approved.

---

## Checklist (per page)

Use this for each of the remaining files:

- [ ] Run conversion script → `src/pages/<name>/` exists with `styles.css`, `pageHtml.js`, `Page.jsx`, `index.js`
- [ ] Confirm assets in `public/assets/` and correct paths in components
- [ ] Identify structure: Header, Main (and sub-sections), Footer (and sub-sections)
- [ ] Create `src/pages/<name>/components/`
- [ ] Implement Header (same classes, JSX-safe attributes, asset paths)
- [ ] Implement Main and any sub-components (Tiles, Sections, LogoSection, etc.)
- [ ] Implement Footer (columns, links, legal, social; stable ids)
- [ ] Compose Page.jsx (layout wrappers + Header + Main + Footer)
- [ ] Remove or stop using `dangerouslySetInnerHTML` and `pageHtml.js` in the page
- [ ] Visual/build verification and any tweaks for “perfect” match

---

## Files to convert (one by one)

| # | Saved HTML file | Page name (folder) | Notes |
|---|-----------------|--------------------|--------|
| 1 | Feedly： Track the topics and trends that matter to you (2_24_2026 7：07：05 AM).html | **homepage** | ✅ Done (Header, Main with Tiles + LogoSection, Footer) |
| 2 | Feedly Threat Intelligence： Collect, analyze, and share actionable intelligence (2_24_2026 7：08：00 AM).html | threat-intel | Next.js-style; likely `#__next`, hero, sections, footer. May need `--lines`. |
| 3 | Feedly Market Intelligence： Gain the full view of your competition and industry trends (2_24_2026 7：08：19 AM).html | market-intel | Next.js-style; hero, logo strip, BigQuote, landing sections, footer. |
| 4 | Feedly News Reader： Take control of your newsfeed (2_24_2026 7：08：31 AM).html | news-reader | Next.js-style; similar landing layout. |
| 5 | Feedly – Keep up with the topics and trends you care about (2_24_2026 7：08：50 AM).html | app-pro | Different (app view / logged-in); structure may differ. |
| 6 | Feedly _ Sign In (2_24_2026 7：52：58 AM).html | signin | Body-only; `#container`, auth buttons, no `#__next`. Simpler. |

Order: go through **2 → 3 → 4 → 5 → 6** one by one. For each, we will follow the same process as the homepage so the result is perfect and consistent.
