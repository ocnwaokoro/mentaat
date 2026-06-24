# Plan: Converting the Remaining Pages (One by One)

We will apply the **exact same process** used for the homepage to each remaining HTML file. One page at a time, until each is perfect.

---

## Order of work

| Step | Page | Source file | Folder | When |
|------|------|-------------|--------|------|
| 1 | Homepage | Feedly： Track the topics… (7：07：05) | `pages/homepage` | ✅ **Done** |
| 2 | Threat Intelligence | Feedly Threat Intelligence… (7：08：00) | `pages/threat-intel` | Next |
| 3 | Market Intelligence | Feedly Market Intelligence… (7：08：19) | `pages/market-intel` | After 2 |
| 4 | News Reader | Feedly News Reader… (7：08：31) | `pages/news-reader` | After 3 |
| 5 | App / Pro | Feedly – Keep up with the topics… (7：08：50) | `pages/app-pro` | After 4 |
| 6 | Sign In | Feedly _ Sign In (7：52：58) | `pages/signin` | After 5 |

---

## Per-page workflow (repeat for 2–6)

For **each** of the remaining pages we will:

1. **Run the conversion script**
   - Input: the saved HTML path and the page name (e.g. `threat-intel`).
   - If the fragment is too short: find `<div id=__next>` and the line before `</next-route-announcer>` in the HTML, then run with `--lines=START,END`.

2. **Audit the HTML**
   - Open the generated `pageHtml.js` (or the saved HTML) and list:
     - Layout: root, app wrapper, content wrapper.
     - Header: structure, nav items, logo, CTAs.
     - Main: hero vs. sections vs. logo strip vs. quotes; any repeating blocks (tiles, cards, feature rows).
     - Footer: columns, link groups, legal row, social icons.
   - Note any shared patterns with the homepage (e.g. same footer, same header) that we might later refactor into shared components.

3. **Create `pages/<name>/components/`**
   - One component per major region (Header, Main, Footer).
   - Reusable sub-components for repeated blocks (e.g. Tile, Card, LogoSection, BigQuote, LinkColumn).

4. **Implement components**
   - Copy **exact class names** from the HTML into JSX.
   - Apply HTML→JSX rules (className, tabIndex, SVG props, style objects, stable ids).
   - Use asset paths from the script output (`/assets/<name>-N.ext`).
   - Extract copy and links into props or constants so the JSX stays clean.

5. **Compose Page.jsx**
   - Same hierarchy as the original: root → layout divs → Header, Main, Footer.
   - No `dangerouslySetInnerHTML`; only imports of the new components.

6. **Verify**
   - `npm run dev`: compare to the original page (layout, typography, images, spacing).
   - `npm run build`: clean build, no regressions.
   - Mark the page “done” and move to the next.

---

## What “perfect” means for each page

- **Structurally:** Same DOM hierarchy and nesting as the saved HTML (same wrappers, same order of sections).
- **Styling:** Same class names so the extracted `styles.css` applies without change; no missing or wrong classes.
- **Assets:** All images/fonts load from `public/assets/` with correct paths and alt text where relevant.
- **Content:** Same visible copy, links, and CTAs; no placeholders unless we explicitly choose them.
- **Code:** Real React only (no raw HTML injection); reusable components where it makes sense; stable, readable ids for accessibility.

---

## Where the process is written down

- **Full process and checklist:** `docs/CONVERSION-PROCESS.md`
- **This plan (order + per-page workflow):** `docs/REMAINING-PAGES-PLAN.md`

We will go through **Threat Intelligence** next, then **Market Intelligence**, then **News Reader**, then **App/Pro**, then **Sign In**, using this same process each time until they are all perfect.
