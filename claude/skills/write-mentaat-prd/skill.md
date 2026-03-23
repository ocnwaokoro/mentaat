---
name: write-mentaat-prd
description: Write a production-ready PRD for a Mentaat Technologies product. Combines the prd-authoring skill's structural rigor (FR/NFR, acceptance criteria, success metrics) with the thesis disruption framework (8 criteria, non-consumer targeting, value chain design). Use when creating any new product PRD for the Mentaat portfolio.
user_invocable: true
---

# Write Mentaat PRD

You are writing a production-ready Product Requirements Document for Mentaat Technologies LLC. Every PRD must satisfy TWO frameworks simultaneously:

1. **Structural quality** (from prd-authoring skill): specific, measurable, testable requirements with acceptance criteria
2. **Strategic alignment** (from thesis disruption framework): validated against the 8 disruption criteria with honest scoring

## Prerequisites — Read Before Writing

Load these files in order:

1. `prds/00-shared-context.md` — tech stack, UX principles, builder profile, scoring dimensions
2. `thesis-framework/framework/8-criteria-checklist.md` — the 8 disruption criteria
3. `thesis-framework/framework/market-entry-playbook.md` — market entry approach
4. `thesis-framework/framework/value-chain-design.md` — value chain thinking
5. `thesis-framework/framework/cost-structure-patterns.md` — cost structure models
6. `thesis-framework/nigeria-context/market-landscape.md` — consumer segments, non-consumption zones
7. `thesis-framework/nigeria-context/infrastructure-realities.md` — what exists and doesn't
8. `thesis-framework/nigeria-context/mnc-failure-patterns.md` — anti-patterns to avoid
9. `thesis-framework/case-studies/indomie-nigeria.md` — Tolaram lessons
10. `thesis-framework/validation/opportunity-catalog.md` — where this product sits in the stack

If rewriting an existing PRD, also read:
- The original PRD in `prds/` or `prds-v2/`
- The disruption analysis in `thesis-framework/validation/prd-analyses/`

## PRD Structure

Every Mentaat PRD must contain ALL of the following sections. Follow this exact structure.

### Section 1: Executive Summary
- Lead with the non-consumption story: who has NOTHING today?
- State the disruption type (new-market, low-end, or both)
- Name the data asset the product creates (the data layer is the real product)
- State the entry channel hierarchy (USSD → SMS → WhatsApp → Web → Desktop)
- State the 90-day target (customers, MRR, key milestone)
- Reference where this product sits in the Mentaat infrastructure stack (Layer 1/2/3/4)

### Section 2: Market Opportunity
- Quantified pain with sources (N amounts, percentages, growth rates)
- The zero: what percentage of the target segment currently has NOTHING?
- Why the pain is getting worse (naira depreciation, regulatory changes, etc.)
- Why existing solutions don't serve this segment
- Total addressable market with SAM and SOM
- Regional variance (reference South-East paradox, Lagos concentration, etc.)

### Section 3: Target Personas
- **Primary persona**: the non-consumer. The person who has literally nothing today. Name them, give them age/location/income/daily routine. This is who the disruption serves.
- **Secondary persona**: the upmarket graduation target. The person who will pay for the dashboard/premium tier.
- **Tertiary persona** (if applicable): the data buyer. The institution that will license the aggregated data.
- For each persona: decision trigger (what event makes them seek this product?)

### Section 4: Problem Deep Dive
- Step-by-step walkthrough of the current workflow (or lack thereof)
- What goes wrong at each step
- Quantified business impact of each failure mode
- The pull test: do people already spend money/effort on workarounds? (If yes = pull. If no = push risk.)

### Section 5: Solution Overview
- Solution stages (typically 3-5 stages from input to output)
- For each stage: what happens, what channel it uses (USSD/WhatsApp/Web), what data it creates
- Explicit statement of what the product sacrifices vs. premium alternatives ("deliberately worse but good enough")
- How the product improves iteratively (Phase 1 → Phase 2 → Phase 3)

### Section 6: Functional Requirements
From the prd-authoring skill. Each requirement must be:
- **Numbered** (FR1, FR2, FR3...)
- **Specific** (no vague language — "fast" must become "< 3 seconds")
- **Testable** (include acceptance criteria for each)

Format:
```
### FR1: [Feature Name]
- **Description**: What it does
- **Channel**: USSD / WhatsApp / Web / All
- **Inputs**: What the user provides
- **Outputs**: What the user receives
- **Acceptance Criteria**:
  - [ ] Criterion 1 (specific, measurable)
  - [ ] Criterion 2
  - [ ] Criterion 3
```

Group by MoSCoW priority: MUST (MVP), SHOULD (Month 2), COULD (Month 3+), WON'T (explicit exclusions with rationale).

### Section 7: Non-Functional Requirements
From the prd-authoring skill. Cover:
- **NFR1: Performance** — response times, load capacity (USSD must respond < 2s, web < 3s)
- **NFR2: Offline/Low-Bandwidth** — what works offline, sync behavior, data caching
- **NFR3: Security** — encryption, data handling, PCI/regulatory compliance
- **NFR4: Scalability** — concurrent users, data growth projections
- **NFR5: Accessibility** — USSD for 2G (42% of connections), SMS fallback, low-bandwidth pages (< 200KB)
- **NFR6: Regional** — multi-region support, language (English + Pidgin where applicable)

### Section 8: Key Screens & UX
- For web apps: screen-by-screen description with layout, key elements, interactions
- For WhatsApp bots: conversation flows with example messages and responses
- For USSD: menu trees with character limits (182 chars per screen, 5-7 screens per session)
- Follow UX principles from shared context (P1-P11)

### Section 9: Technical Architecture
- Stack table (layer → technology → rationale)
- Database schema (core tables with types and relationships)
- Integration architecture (which APIs, webhook flows)
- Offline architecture (what's cached, sync strategy)
- USSD/WhatsApp webhook flow (if applicable)

### Section 10: Data Asset Strategy
**This section is unique to Mentaat PRDs.** Every product creates data. Document:
- What data this product generates that didn't exist before
- How this data feeds other Mentaat products (cross-product data flows)
- Who would license this aggregated data and at what price
- Privacy/anonymization approach (individual data is private, aggregate data is licensable)

### Section 11: Value Chain Design
From the thesis framework. Document:
- What infrastructure this product builds that doesn't exist
- Which of the 4 pillars apply (resource commitment, cross-market knowledge, value-chain coordination, transferability)
- What externalities the product creates beyond its core function
- How infrastructure built for this product serves other products

### Section 12: Pricing & Unit Economics
- Pricing tiers with feature breakdown
- Free tier (if applicable) — must be genuinely useful, not crippled
- Unit economics table: infrastructure cost, cost per customer, CAC, LTV, LTV:CAC
- Revenue targets by milestone (Month 1, 3, 6, 12)
- Break-even analysis
- The cost structure test: is this fundamentally different from incumbents, or just cheaper?

### Section 13: Go-to-Market: First 10 Customers
- Channels ranked by disruption alignment (non-consumer channels first, LinkedIn last)
- For each channel: target volume, expected conversion, specific outreach approach
- Cross-sell from existing Mentaat products (if applicable)
- USSD/WhatsApp distribution channels before web-based marketing
- Channel summary table

### Section 14: Risks & Mitigations
- Minimum 6 risks, each with: likelihood, impact, specific mitigations
- Must include: trust risk, data quality risk, competition risk, infrastructure risk
- Must include Nigeria-specific risks (connectivity, currency, regulatory)

### Section 15: Constraints & Assumptions
From prd-authoring skill:
- **Constraints**: tech stack, budget ($0-5K), solo founder, NYC-based, timeline
- **Assumptions**: explicitly stated, each one testable
- **Out of Scope**: explicit list with rationale for each exclusion

### Section 16: Success Criteria
From prd-authoring skill. Two tiers:

**Launch Criteria (ship when ALL are met):**
- [ ] Specific, measurable criteria (e.g., "5 beta users complete full workflow")
- [ ] Each criterion testable

**Success Metrics (3 months post-launch):**
- [ ] Revenue target
- [ ] User/customer count
- [ ] Key product metric (match rate, score accuracy, etc.)
- [ ] Data asset metric (records created, signals collected)

### Section 17: Build-or-Skip Scorecard
From shared context. 8 dimensions, weighted, scored 1-10 with rationale. Composite score determines build priority.

### Section 18: Disruption Self-Assessment
Score the product against all 8 criteria from `thesis-framework/framework/8-criteria-checklist.md`. For each:
- Rating: Strong fit / Partial fit / No fit
- 2-3 sentence justification with specific evidence

State overall score: X/8 strong fit, X/8 partial, X/8 gaps.

Flag if any of the 3 non-negotiable criteria (1: overlooked segment, 3: market foothold, 7: non-consumption → growth) score below "Strong fit" — and explain what would need to change.

### Section 19: MNC Anti-Pattern Check
Check against the 6 failure patterns from `thesis-framework/nigeria-context/mnc-failure-patterns.md`. Flag any matches. If none, state why.

---

## Quality Checklist (Run Before Finalizing)

Before saving the PRD, verify:

- [ ] Every FR has numbered acceptance criteria
- [ ] Every NFR has a specific, measurable threshold
- [ ] Success criteria are all quantified (no "improve" or "better")
- [ ] No vague language ("fast" → "< 3s", "many" → "500+", "good" → specific metric)
- [ ] Primary persona is a non-consumer (has nothing today), not an underserved consumer
- [ ] Entry channel hierarchy starts from USSD/WhatsApp, not web
- [ ] Data asset strategy is documented (what data, who buys it, how it feeds other products)
- [ ] Pricing includes a free or ultra-low tier for the non-consumer
- [ ] 8-criteria self-assessment is honest (partial/no fit is acceptable — lying is not)
- [ ] GTM channels prioritize non-consumer access over LinkedIn outreach
- [ ] Out of scope is explicit
- [ ] Constraints include: solo founder, NYC, $0-5K, bootstrapped

## Output

Write the complete PRD to `prds-v2/XX-productname.md` where XX is the next available number. Match the format and depth of existing v2 PRDs (01-portpulse.md through 06-kasabook.md).
