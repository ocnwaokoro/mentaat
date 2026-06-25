# Feedly-Inspo — Current State Audit

> Snapshot of the site **as crawled/converted**, before any of our changes.
> Captured 2026-06-24. Dev server: `cd feedly-react && npm run dev` → http://localhost:5173/
> Screenshots: `.screens/<page>-{desktop,mobile}.png` (gitignored). Desktop 1440×900, mobile 390×844.

## Stack
Vite 5 + React 18 + react-router-dom 7 + Tailwind 3. Pages are crawled SingleFile HTML
captures (`html/`) converted into `feedly-react/src/pages/<name>/`. Each page has its own
large `styles.css` (Feedly's original CSS, 3–4k lines) and `pageHtml.js` (raw HTML string).

## Site tree (routes)

```
/                 homepage      ✅ real React components (Header, Main, Tile, LogoSection, Footer)
/threat-intel     threat-intel  ⚠️  raw HTML via dangerouslySetInnerHTML
/market-intel     market-intel  ⚠️  raw HTML via dangerouslySetInnerHTML
/news-reader      news-reader   ⚠️  raw HTML via dangerouslySetInnerHTML
/app-pro          app-pro       ⚠️  raw HTML via dangerouslySetInnerHTML  (pricing page)
/sign-in          sign-in       ⚠️  raw HTML via dangerouslySetInnerHTML  (inline styles only)
```

Only `/` is "done" per the conversion process in `feedly-react/docs/`. The other five render
correctly-ish but are raw HTML injection, not components.

## Content map

| Route | Type | Key content (top → bottom) |
|---|---|---|
| `/` | Landing | Header (logo, nav: Threat Intelligence · Market Intelligence · News Reader, Log in) · 3 product tiles (Threat Intelligence / Market Intelligence / News Reader, each w/ Get Started + Learn More) · trusted-by logo strip (Verizon, Airbus, Openfields, RBS, Delta Dental, River Cap, Canada Media Fund) · footer (Products / Resources / Downloads / Learn More) |
| `/threat-intel` | Product landing | Hero "Increase threat coverage / Be the first to know about emerging threats" · trusted-by · source grid (Government, News Outlets, Security Blogs, Vulnerability DBs, Vendor Advisories, Social Media) · sections: Collect relevant intel · Automatically extract actionable intelligence · Synthesize articles into deliverables · testimonial + "72% faster" · Quickly review CVEs/malware/actors · Identify & monitor new TTPs · Create & send daily cyber briefs · Instantly share insights · "See Feedly TI in action" use-case cards · final CTA · footer |
| `/market-intel` | Product landing | Hero "Outsmart the competition…" · trusted-by (agenus, Danone, Verizon, Airbus, Openfields…) · "3–5x faster" stat · "Reduce your blind spots" source grid · sections: Find actionable industry intelligence (AI Feeds) · Emerging Trends Dashboard · 360° view of key companies · Synthesize with Ask AI · Auto-export facts to spreadsheets · Automated Newsletters · no-code integrations · footer |
| `/news-reader` | Product landing | Hero "Take control of your news feed" · "Loved by millions of readers" testimonials (Jason Hirschhorn, Brad Feld, Tina Roth Eisenberg) · sections: Follow all your sources (RSS) · Follow newsletters · Add Google News feeds · testimonial · Save articles (Boards) · Easily search · Read anywhere (iOS/Android) · Privacy by default · final CTA · footer |
| `/app-pro` | Pricing | Left rail "Personalize your Feedly" + Get Started / Log In · 3 pricing cards: Pro ($6/mo) · Pro+ ($8.25/mo, Save 30%) · Enterprise (contact) · per-tier feature checklists |
| `/sign-in` | Auth | "Welcome back to Feedly" · Sign in with Google / Email / Apple / Enterprise SSO · "other ways to log in" · "Sign up" |

## Desktop vs mobile

> ⚠️ Capture caveat: the headless Chrome used here **clamps window width to ~500px minimum**,
> so the "mobile" column was verified at ~500px, not 390px. Desktop verified at true 1440px.

| Route | Desktop (1440) | Narrow (~500) | Notes |
|---|:---:|:---:|---|
| `/` | ✅ | ✅ | Fully responsive — tiles stack, nav collapses, footer stacks. The reference standard. |
| `/threat-intel` | ✅ | ✅ | Renders correctly. Hero + section images all load (verified in DOM). |
| `/market-intel` | ✅ | ✅ | Renders correctly. |
| `/news-reader` | ✅ | ✅ | Renders correctly. |
| `/app-pro` | ✅ | ❌ | **Not responsive (REAL bug).** App-shell layout: absolute `.Leftnav` (~320px) + `.FeedlyFrame__body` inline `margin-left:320px` + `.ProPage__hero` min-width:992px. At narrow widths it clips instead of reflowing. Needs a proper responsive treatment (a first CSS-patch attempt was reverted as unsatisfactory). |
| `/sign-in` | ✅ | ✅ | Functional both widths (inline styles). Plain/top-anchored, not centered. |

## Known issues to address (when we start work)
1. **5 of 6 pages are raw HTML** (`dangerouslySetInnerHTML`), not components. Per the agreed plan we convert these to pixel-perfect React components in order: threat-intel → market-intel → news-reader → app-pro → sign-in.
2. **`/app-pro` is not responsive** — confirmed real. App-shell fixed-width layout, clipped below 992px. Needs a proper responsive treatment (a first CSS-patch attempt was reverted).
3. **`/sign-in`** has only inline styles (no `styles.css` of substance); plain presentation.

## NOT issues (investigated & cleared)
- **"Blank desktop heroes / missing section images" — FALSE ALARM.** This was a *screenshot
  capture-timing artifact*, not a rendering bug. Pages use `loading="lazy"` images; the first
  full-page screenshots were taken before lazy images loaded/decoded, capturing blank space.
  Verified in the live DOM at 1440px: **0 of 29 visible images are broken**; hero images
  (`threat-intel-6.png`, `-7.png`) load at naturalWidth 3036. The user was right — everything is there.
- The only genuinely empty-`src` images are SingleFile's **hidden duplicate (mobile) variants**
  (`sf-hidden`, `display:none`, 0×0) — they never render, so no visual impact.
- The apparent "page repeats at the bottom" in tall full-page screenshots is also a **screenshot
  artifact**, not duplicated DOM. Each hero phrase occurs exactly once in source HTML.

## State saved
Initial commit pushed to private repo **github.com/ocnwaokoro/feedly-inspo** (`master`) before
any edits. `node_modules/`, `dist/`, `.vite/`, `.screens/` are gitignored.
