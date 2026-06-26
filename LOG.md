# Project Running Log — feedly-inspo

Running record of decisions and progress. Newest first. 🚩 = **flagged decision**
(load-bearing; change only deliberately).

---

## 🚩 Flagged decisions

| Date | Decision | Notes |
|------|----------|-------|
| 2026-06-26 | **Case studies are REAL; present as real work (anonymized for now)** | User confirmed they're based on real past work. IGNORE the other chats' "aspirational / representative engagements" guardrail. Names/logos still TBD; structure cards so they drop in. |
| 2026-06-26 | **Service pages: keep design, revise content only** | Do NOT gut the Feedly layouts (overrides the handoff plan's "strip to skeleton"). Preserve the beauty + design system; rewrite copy; map new narrative onto existing sections. |
| 2026-06-26 | **Keep Feedly images as the quality bar ("swag"); swap later via config** | Central `src/config/images.js` (tileImages, marqueeLogos, 77 service-page override stubs + `applyImageOverrides`). One-file swap, no markup edits. |
| 2026-06-26 | **Cut SaaS scaffolding** | Removed Pricing + Sign-in (retired hardcoded-green escapee). `/contact` added; header CTA → "Book a call". Marquee KEPT (user overrode "cut"; logos to be swapped). |
| 2026-06-25 | **Homepage tile titles** = Digital Products · Workflow Intelligence · Keystone Infrastructure | "Digital Products" chosen over "Web Technology" for a longer, balanced lead word. Captions are placeholders pending real copy (no em dashes). |
| 2026-06-25 | **Logo** = Mentaat "M" mark in blue `#009fec` + "Mentaat" wordmark in black | Single-path `currentColor` SVG; mark thickened. From `~/Desktop/mentaat`. |
| 2026-06-25 | **Service model** | Web tech (Digital Products) + AI consulting (Workflow Intelligence) are primary; Keystone Infrastructure = forward-deployed SWE for boutiques. |
| 2026-06-25 | **Primary buttons = punchy blue `#009fec`** (not deep-navy) | Flagged by user. Matches the "punchy accent" choice. Applied via override on `.BaseButton_importance--primary`. |
| 2026-06-25 | **Re-skin direction = Candidate B (full reconciliation)** | Accent blues + deep-navy darks + blue-tinted neutrals + recolored logo. (A = surgical accent-only was rejected as too subtle.) |
| 2026-06-25 | **Accent shade = `#009fec` (punchy/bright)** | Over Cornflower `#006DA4` (deeper) and `#589dce` (soft). |
| 2026-06-24 | **Build clean in Astro (SSG) for SEO** | Old React SPA shipped empty `#root`; Astro ships real static HTML. |
| 2026-06-24 | **Conversion fidelity = pixel-perfect first, then re-skin** | Preserve the design we like; re-skin via tokens later. |

---

## Log

### 2026-06-26 — Design-system rule + contact page
- **Rule locked (memory):** nothing gets built with bespoke CSS or new tokens; compose only from existing design-system components + tokens. (An earlier bespoke contact page was rejected as "ugly".)
- Added central **`src/config/site.js`** for all facts/placeholders (email, bookingUrl, contactFormAction, linkedin, location, legalName, domain=mentaat.com, ogImage). One-file swap.
- Brainstormed 3 contact iterations from real components (lean / lean+steps / dark Tile). **Chosen: dark Tile + 3-step reassurance.** Extended the shared `Tile` with an optional `steps` prop (renders via existing `Text` classes). `/contact` finalized; variant routes removed.

### 2026-06-25 — Brand applied + handoff produced
- Mentaat logo wired into nav + footer (blue mark, black wordmark, thickened, favicon swapped).
- Tile titles locked: Digital Products / Workflow Intelligence / Keystone Infrastructure.
- Wrote comprehensive handoff brief to `~/Downloads/mentaat-website-handoff-2026-06-25.md`:
  full site inventory (routes, all components + internals, every page section), palette,
  lead lines, company model, and migration questions (nav/footer/IA/content) for the other chat.
- **Next (after company-info chat answers):** build real nav + footer, fill page content, map the
  3 product pages → 3 services, decide fate of pricing/sign-in.

### 2026-06-25 — Color re-skin (phase: experimentation)
- Received two palettes: **deep blues** (Ink Black `#051720` · Deep Space Blue `#03273C`/`#003554` · Yale Blue `#004D74` · Cornflower Ocean `#006DA4`) and **Obsidian Chrome** neutrals (Onyx `#0A0A0A` · Blue Slate `#536878` · Alabaster Grey `#E5E4E2`).
- OKLCH analysis: both palettes share hue **232–242°** → reconcile cleanly. Palette 1 → brand/accent; Palette 2 → neutrals.
- Built generator scripts (culori, OKLCH hue-rotation + gamut clamp) in scratchpad. Candidates produced as swap-in files under `astro-site/src/styles/themes/`; previewed via `astro-site/src/styles/active-theme.css` (baseline `tokens.css` untouched).
- Candidate A (hue-rotate) → too subtle: revealed 3 **token escapees** (logo asset, sign-in's hardcoded green, dark-navy CTAs).
- Candidate B (full reconciliation) + punchy `#009fec` + blue buttons → **chosen look.**
- **Open / to-finish:** (1) fix sign-in hardcoded green; (2) proper recolored logo asset (currently a CSS `hue-rotate` hack); (3) bake `active-theme.css` into a named theme; (4) verify all 6 pages + prod build; (5) commit on `reskin` branch.

### 2026-06-24 — Checkpoint + design system
- Harvested **199 semantic tokens** into `astro-site/src/styles/tokens.css` (single source of truth; light+dark; responsive spacing).
- Rebuilt site in Astro: homepage fully componentized; 5 pages ported + token-deduped. 6 static pages, SEO-verified (real HTML + meta in source).
- Secured baseline: commit `5dd3046`, tag **`baseline-v1`**, pushed to private `github.com/ocnwaokoro/feedly-inspo`. Re-skin work on **`reskin`** branch. `git checkout baseline-v1` restores frozen source.

### 2026-06-24 — Audit + setup
- Created private repo `feedly-inspo`. Audited the captured Feedly clone (6 routes; homepage in React, 5 via raw HTML). Fixed/abandoned an app-pro responsive patch (reverted per user). See `SITE-AUDIT.md`.
