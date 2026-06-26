# Mentaat — Design Decisions (living record)

Critical visual choices, documented with the **options we actually rendered** (not just
the winner), so we can revisit them deliberately later. This is expected to change:
**not every page must be uniform, and there is always room for improvement.**

**Status key:** 🔒 current choice · 🔄 open to revisit. *Everything here is revisitable.*
**House rule:** all UI is composed from the **existing design-system components + tokens**, never bespoke CSS.
**See also:** `LOG.md` (chronological decision log), screenshots in `docs/decisions/`.

---

## Contact page · 2026-06-26 · 🔒 (revisitable)

**Question:** How should `/contact` look, using existing components only?

**Options rendered (real components, live screenshots):**

| Option | What it is | Built from | Screenshot |
|---|---|---|---|
| A · Lean | Badge + Heading + Text + Button, left-aligned | homepage vocab | `docs/decisions/contact-A-lean.png` |
| B · Lean + steps | A, plus a 3-step "what happens next" | + `Text`/`Flex` | `docs/decisions/contact-B-steps.png` |
| C · Dark Tile | the homepage's signature dark Tile, repurposed | the `Tile` component | `docs/decisions/contact-C-darkTile.png` |

**Chosen:** **C + B's 3-step** — the dark Tile with the 3 steps inside it. → `docs/decisions/contact-CHOSEN.png`

**Why:** it reuses the site's signature dark Tile (instant cohesion, premium feel) and the
3-step encodes the "no pitch, no pressure" trust beat. Zero bespoke CSS.

**Build note:** extended the shared `Tile` with an optional `steps` prop (renders via existing
`Text` classes); homepage tiles unaffected.

**Open items:** the card image is a placeholder (swappable via `images.js`); copy may evolve.

---

## Brand foundations (locked earlier — detail in `LOG.md`)

Reference: `docs/decisions/homepage-current.png`

- **Palette** 🔒 — punchy blue accent `#009fec` + deep navies + subtly blue-tinted neutrals (OKLCH reconciliation of the two supplied palettes).
- **Logo** 🔒 — Mentaat "M" mark in brand blue + "Mentaat" wordmark in black; thickened mark.
- **Homepage tile titles** 🔒 — Digital Products · Workflow Intelligence · Keystone Infrastructure.
- **Tile captions** 🔄 — placeholders pending final copy (no em dashes; operator-to-owner voice).

---

## The method (how every entry above gets made)

1. Brainstorm directions for the element.
2. Render each as a **real, composed-from-components** page on the dev site.
3. Screenshot and compare side by side.
4. Pick, document here (options + choice + why), implement, log it.

Pending elements to run through this: **nav, footer, homepage hero + work band, the 3 service
pages (content only, design kept), Work, About.**
