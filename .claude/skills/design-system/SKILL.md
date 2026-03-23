---
name: design-system
description: Extract design decisions from prototype HTML/CSS and generate a DESIGN.md file that serves as the single source of truth for building pixel-accurate screens. Use this skill whenever the user asks to "create a design system", "document the design", "write a DESIGN.md", "extract design tokens", "capture the design", or wants to ensure visual consistency across their app. Also trigger when the user has a prototype HTML file and wants to formalize its design decisions, or when starting implementation of new screens that need to match an existing prototype's look and feel.
---

# Design System Extraction

## What This Skill Does

This skill reads prototype HTML/CSS files and produces a `DESIGN.md` — a comprehensive design specification that any developer or autonomous agent can follow to build new screens that are visually identical to the prototype. The prototype is the source of truth. You are a design archaeologist: you extract and document what exists, you never invent.

## Why This Matters

Without a written design system, every new screen is a guess. Developers eyeball colors, pick arbitrary spacing, and drift from the original design. Agents building autonomously have no reference at all. A good DESIGN.md eliminates this — it turns implicit CSS decisions into explicit, reusable rules. The goal is that someone who has never seen the prototype can build a pixel-accurate screen just by reading the document.

## The Golden Rule

**Document only what exists in the prototype. Never add, improve, or suggest design decisions that aren't already present in the HTML/CSS.** If the prototype uses `12px` border-radius on cards, write `12px` — don't round to `16px` because it "looks better." If there's no dark mode, don't spec one. If the fonts are loaded from Google Fonts, document those fonts — don't substitute system fonts because they'd be "more performant." The DESIGN.md is a mirror of the prototype, not an editorial.

## Input

One or more prototype HTML files. These are typically self-contained files with inline `<style>` blocks. They may include:
- CSS custom properties (`:root` variables)
- Component styles
- Multiple screen/page states
- Responsive breakpoints
- JavaScript for interactions (useful for understanding animation/transition behavior)

## Extraction Process

Read the prototype HTML file(s) completely. Then systematically extract design decisions in this order:

### Phase 1: CSS Custom Properties

Start with the `:root` block. Extract every CSS variable — these are the design tokens. Categorize them:
- Color tokens (backgrounds, text colors, borders, semantic colors)
- Spacing tokens (if defined)
- Shadow tokens
- Font family tokens
- Radius tokens
- Any other custom properties

### Phase 2: Typography Audit

Scan every text-styling rule in the CSS. Build a complete type scale by collecting:
- Every unique `font-size` value and where it's used
- Every unique `font-weight` value and where it's used
- Every unique `font-family` value
- Special typographic features (`font-variant-numeric`, `letter-spacing`, `text-transform`, `line-height`)
- The relationship between font choice and content type (e.g., monospace for financial data)

### Phase 3: Color Mapping

Go beyond the token table. For each color, document its **semantic meaning** — what does this color communicate to the user? Look at:
- Which elements use each color
- Whether colors have light/dark tint pairs
- Status color patterns (success, warning, error, neutral)
- How the surface hierarchy works (how many levels, what distinguishes them)
- Any conditional coloring (e.g., aging report heat tints, confidence-based pill colors)

### Phase 4: Spacing and Layout

Extract the spatial structure:
- Page-level layout (max-width, padding, centering strategy)
- Grid patterns (`grid-template-columns`, gaps)
- Component internal padding patterns
- Margin patterns between sections
- Flex gap values
- Navigation height and positioning

### Phase 5: Component Inventory

For each distinct component type in the prototype, document:
- **What it looks like** (background, border, radius, shadow, padding)
- **Variants** (e.g., primary button vs outline button vs ghost button)
- **States** (default, hover, active, focus, disabled, accepted)
- **Content structure** (what goes inside it and in what order)

Common components to look for:
- Buttons (every variant)
- Cards (every variant)
- Tables (headers, rows, cells, alignment rules)
- Badges/pills (every color variant)
- Navigation (bar, tabs, active states, dropdowns)
- Inputs (text, search, range/slider, focus states)
- Upload zones / drop targets
- Progress indicators (bars, dots, segmented)
- List items (layout, dividers, content structure)
- Empty states
- Done/success states
- Modals/overlays

### Phase 6: Motion and Interaction

Scan for `transition`, `transform`, `animation`, and `@keyframes`:
- What properties transition and at what duration/easing
- Hover effects (lift, color change, shadow change)
- Entry/exit animations (slide, fade)
- Feedback animations (flash overlays, state changes)

### Phase 7: Icons

Look at SVG usage:
- Are icons inline SVGs or an icon library?
- What sizes are used?
- Stroke-based or fill-based?
- Stroke width?
- How are icon colors determined (semantic system or hardcoded)?

### Phase 8: Synthesize Do's and Don'ts

After completing the extraction, review the full set of decisions and identify the **patterns** — the consistent choices that define this design's character. Then identify what's conspicuously **absent** — what the design deliberately avoids. These become the Do's and Don'ts.

Good Do's and Don'ts are:
- Specific enough to be actionable ("use JetBrains Mono for all monetary amounts" not "use appropriate fonts")
- Tied to a reason ("keep surface hierarchy flat — only two levels" not just "don't nest cards")
- Based on evidence from the prototype, not general best practices

## Output: DESIGN.md Structure

The output file must follow this exact 10-section structure. Every section is required. If the prototype doesn't have enough information for a section (e.g., no animations), write the section with a note that the prototype doesn't define this, rather than omitting the section.

```
# [Product Name] Design System

## 1. Overview & Creative North Star
## 2. Colors
## 3. Typography
## 4. Spacing & Layout
## 5. Corner Radii & Borders
## 6. Components
## 7. Shadows
## 8. Transitions & Animation
## 9. Icons
## 10. Do's and Don'ts
```

### Section 1: Overview & Creative North Star

Give the design a name — a short, evocative phrase that captures its visual personality. Then write 3-5 sentences describing what the design feels like, what it prioritizes, and what it rejects. This isn't marketing copy — it's a compass for future design decisions. Someone reading this should immediately understand whether a given UI choice fits or doesn't.

Derive this from the evidence: if the prototype uses minimal shadows, flat surfaces, and monospace numbers, the north star might be about clinical precision. If it uses warm colors and generous spacing, it might be about approachability. Read the CSS, don't project.

### Section 2: Colors

Three subsections:

**Palette** — A table of every color token with its hex value and role description. Format:

```
| Token | Hex | Role |
|-------|-----|------|
| `--token-name` | `#HEXVAL` | What this color is used for |
```

Include colors that appear as hardcoded hex values in the CSS but aren't in `:root` — give them descriptive names.

**Semantic Color Usage** — Bullet list explaining what each color family communicates. Be specific about where each color appears.

**Surface Hierarchy** — How many surface levels exist, what distinguishes them, and the rules for when to use each.

Include any domain-specific color patterns (e.g., aging report heat tints, confidence-level coloring).

### Section 3: Typography

Three subsections:

**Font Stack** — Every font family used, with its fallback chain and its role.

**Type Scale** — A table of every text style in the prototype:

```
| Element | Size | Weight | Font | Additional |
|---------|------|--------|------|------------|
```

The "Additional" column captures `line-height`, `letter-spacing`, `text-transform`, `font-variant-numeric`, alignment, color overrides — anything beyond size/weight/font.

**Typography Rules** — Bullet list of rules that govern font usage (e.g., "all monetary values use monospace", "uppercase labels always use 0.05em letter-spacing").

### Section 4: Spacing & Layout

Three subsections:

**Global Layout** — Page-level decisions: max-width, padding, nav height, centering.

**Spacing Scale** — A table of every recurring spacing value and where it's used:

```
| Usage | Value |
|-------|-------|
```

**Grid Patterns** — Every grid layout in the prototype with its column template and gap.

### Section 5: Corner Radii & Borders

Two subsections:

**Radius Scale** — Table mapping each element type to its border-radius.

**Border Rules** — Bullet list describing border styles, colors, and where each is used. Include focus rings and dashed borders.

### Section 6: Components

One subsection per component type. For each, document:
- Visual specs (background, border, radius, shadow, padding, font styles)
- All variants in a table where applicable
- State changes (hover, focus, active, disabled, accepted)
- Content structure

Minimum components to document (if present in prototype):
Buttons, Badges, Cards, Tables, Navigation, Inputs, Upload Zones, Progress Indicators, List Items, Empty/Done States.

### Section 7: Shadows

A table of every shadow value:

```
| Token | Value | Usage |
|-------|-------|-------|
```

Plus any rules about shadow usage (e.g., "never use pure black shadows").

### Section 8: Transitions & Animation

A table of every animated property:

```
| Element | Effect |
|---------|--------|
```

Include durations, easing functions, and what triggers each animation.

### Section 9: Icons

Document the icon approach:
- Format (inline SVG, icon library, image files)
- Size range
- Style (stroke vs fill, stroke width)
- Color rules (how icon colors relate to the semantic color system)

Table of icons if there are specific ones:

```
| Icon | Size | Context |
|------|------|---------|
```

### Section 10: Do's and Don'ts

Two subsections: **Do** and **Don't**. Each item starts with bold "Do" or "Don't" and states a specific, actionable rule. Aim for 5-8 items per subsection. Every item should be traceable to a pattern (or deliberate absence) in the prototype.

## Placement

Write the DESIGN.md file in the product's project root directory, alongside the prototype.

## Reference

See `/Users/ocnwaokoro/Projects/nig-biz/paymatch/DESIGN.md` for a complete example of the expected output. When in doubt about format or level of detail, match that file.
