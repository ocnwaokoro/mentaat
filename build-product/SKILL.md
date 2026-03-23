---
name: build-product
description: >
  End-to-end product builder for Nigerian B2B SaaS products. Takes a PRD from
  /prds/ and orchestrates the full pipeline: repo creation → project setup →
  Linear project + tickets → brainstorming → implementation plan → build.
  Use when the user says "build product", "build <product-name>", "launch product",
  "start building <name>", or wants to go from PRD to running code. Each product
  gets its own local repo. ALWAYS requires explicit user approval before creating
  remote repos or writing any code.
---

# /build-product — PRD to Production Pipeline

Takes a PRD file and orchestrates the complete build pipeline for a Nigerian B2B SaaS product. Each product gets its own well-named local git repo. Nothing ships to remote or gets built without explicit user approval.

## Invocation

```
/build-product <prd-file>            # e.g. /build-product prds/01-paymatch.md
/build-product <product-name>        # e.g. /build-product PayMatch
/build-product                       # Interactive — shows menu of available PRDs
```

## Prerequisites

- `.claude/skills/` must contain portable skills (project-setup, prd, linear, etc.)
- Linear MCP connected
- GitHub CLI (`gh`) authenticated as `ocnwaokoro`
- PRD files in `/prds/` folder

## Constants

```
GITHUB_USER=ocnwaokoro
GITHUB_ORG=ocnwaokoro
REPO_BASE=$HOME/Projects/nig-biz
PRD_SOURCE=/Users/ocnwaokoro/Downloads/nig-$$$/prds
```

---

## Pipeline Overview

```
PHASE 0: SELECT & CONFIRM
  → User picks PRD or provides product name
  → Display PRD summary + scorecard
  → User confirms: "Yes, build this one"

PHASE 1: SCAFFOLD (local only — no remote)
  → Create local repo: ~/Projects/nig-biz/<product-slug>/
  → git init
  → Copy .claude/skills/ into repo
  → Run /project-setup (generates config.md)
  → Run /tech-stack (generates tech-stack.md)
  → Create Next.js project with shared stack from 00-shared-context.md
  → ⏸️ CHECKPOINT: Show user the scaffolded repo. Ask: "Approve repo structure?"

PHASE 2: LINEAR SETUP
  → Create Linear project for this product
  → Run /prd <prd-file> to generate tickets from PRD
  → Run /refine-ticket on each ticket to add AC + implementation plans
  → ⏸️ CHECKPOINT: Show user the Linear tickets. Ask: "Approve ticket breakdown?"

PHASE 3: REMOTE SETUP (requires explicit approval)
  → Ask user: "Create GitHub remote repo? (y/n)"
  → If yes: gh repo create <org>/<product-slug> --private --source=.
  → Push initial scaffold commit
  → If no: stay local only

PHASE 4: BUILD (requires explicit approval)
  → Ask user: "Start building? Which ticket first?"
  → Run /autopilot on approved ticket
  → Each ticket: branch → TDD → commit → PR (draft)
  → ⏸️ CHECKPOINT after each ticket: "Review PR? Continue to next ticket?"

PHASE 5: REVIEW & SHIP
  → Run /pr-review on completed PRs
  → Fix any issues
  → /ready-for-review when approved
```

---

## Phase 0: Select & Confirm

### If no argument provided — show menu:

```
═══════════════════════════════════════════════════════════════
  /build-product — Nigerian B2B SaaS Builder
═══════════════════════════════════════════════════════════════

  Available PRDs (ranked by composite score):

  #1  PayMatch      (8.25) — Invoice-to-Payment Matching
  #2  ForexGuard    (7.70) — FX Exposure Dashboard
  #3  ClearFast     (7.75) — Customs Documentation AI
  #4  CashFlow AI   (7.10) — Working Capital Forecasting
  #5  TaxGuard      (7.15) — Tax Compliance Automation
  #6  CollectPro    (7.00) — B2B Debt Collection
  #7  GenTrack      (6.75) — Generator Cost Dashboard
  #8  PortPulse     (6.60) — Port Dwell Time Tracker
  #9  SupplyLink    (6.10) — Supply Chain Finance
  #10 FreightCompare(5.65) — Logistics Rate Comparison
  --- New Ideas ---
  #18 VendorScore          — B2B Credit Scoring
  #19 ExitBridge           — Multinational Exit Marketplace
  #20 InsureMatch          — Insurance Comparison
  #21 BuildTrack           — Construction Cost Tracker
  #22 JapaShield           — Brain Drain Risk Tool
  #23 WaterTrack           — Water Infrastructure Mgmt
  #24 SecureOps            — Cybersecurity Compliance

  Enter number or name to build:
═══════════════════════════════════════════════════════════════
```

### After selection — confirm:

1. Read the PRD file
2. Display: product name, one-line summary, target MRR, build time estimate, scorecard
3. Ask via AskUserQuestion: **"Confirm: Build [Product Name]? This will create a local repo at ~/Projects/nig-biz/[slug]/. (y/n)"**
4. STOP if user says no

---

## Phase 0.5: PRD Preprocessing

Our PRDs have 12 sections. Only some map to code tasks. Split the PRD into two documents before feeding to `/prd`:

### Build Spec (feeds into /prd → Linear tickets)

Extract and restructure these sections into `docs/BUILD_SPEC.md`:

```markdown
# [Product Name] — Build Specification

## Overview
[From Executive Summary — first paragraph only, product description]

## Target User
[From Target Persona — role, company size, digital literacy, key workflow]

## MVP Features (MoSCoW)
[From MVP Feature Set — MUST/SHOULD/COULD/WON'T, verbatim]

## Key Screens & UX Flows
[From Key Screens & UX — screen descriptions, interaction flows]

## Technical Architecture
[From Technical Architecture — data model, API routes, integrations, caching]

## Testing Strategy
[From 14-test-plan.md — product-specific test cases]
```

### Context Doc (goes into Linear project description + repo docs/)

These sections stay as reference, NOT turned into tickets:

```
docs/MARKET_CONTEXT.md:
  - Market Opportunity (quantified pain, spending data)
  - Pricing & Unit Economics
  - Go-to-Market (first 10 customers)
  - Risks & Mitigations
  - Build-or-Skip Scorecard
  - Relevant sections from 00-shared-context.md
```

### Why This Matters

`/prd` expects buildable requirements. If we feed it "N22T annual power market" it will try to create a ticket for it. The preprocessing ensures only code-relevant content reaches the ticket generator.

---

## Phase 1: Scaffold Local Repo

### 1.1 Create directory and initialize

```bash
PRODUCT_SLUG=$(echo "<product-name>" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
REPO_DIR="$HOME/Projects/nig-biz/$PRODUCT_SLUG"
mkdir -p "$REPO_DIR"
cd "$REPO_DIR"
git init
```

### 1.2 Copy skills and shared context

```bash
cp -R /Users/ocnwaokoro/Downloads/nig-$$$/.claude "$REPO_DIR/.claude"
cp /Users/ocnwaokoro/Downloads/nig-$$$/prds/00-shared-context.md "$REPO_DIR/docs/"
cp /Users/ocnwaokoro/Downloads/nig-$$$/prds/<prd-file> "$REPO_DIR/docs/PRD.md"
```

### 1.3 Initialize Next.js project

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

### 1.4 Install shared dependencies

From 00-shared-context.md tech stack:
```bash
npm install @supabase/supabase-js prisma @prisma/client
npm install xlsx pdf-parse
npm install -D vitest @playwright/test
```

### 1.5 Run project-setup

Invoke `/project-setup` skill with pre-filled values:
- **Name:** [Product Name]
- **Linear Team:** (from user's Linear workspace)
- **GitHub Org:** (from user's GitHub)
- **Default Branch:** main
- **Branch Naming:** `{PREFIX}_{short_description}`

### 1.6 Run tech-stack

Invoke `/tech-stack` to generate tech-stack.md from the scaffolded codebase.

### 1.7 CHECKPOINT

```
═══════════════════════════════════════════════════════════════
  ✓ Local repo created: ~/Projects/nig-biz/<slug>/
  ✓ Next.js initialized with TypeScript + Tailwind
  ✓ Skills copied
  ✓ config.md generated
  ✓ tech-stack.md generated
  ✓ PRD copied to docs/PRD.md

  Approve this repo structure before proceeding? (y/n)
═══════════════════════════════════════════════════════════════
```

**STOP and wait for user approval.**

---

## Phase 2: Linear Setup

### 2.1 Create Linear Team for This Product

Each product gets its own Linear team. Use Linear MCP:

```
mcp__linear__list_teams  → check if team already exists
mcp__linear__get_team    → if exists, use it

If not exists:
  Team Name: [Product Name]
  Team Key: [SLUG in uppercase, e.g., PAYMATCH, FOREXGUARD]
  Description: [First line of Executive Summary]
```

### 2.2 Create Linear Project Under the Team

Use Linear MCP to create a project under the new team:
- **Name:** [Product Name] MVP
- **Description:** From MARKET_CONTEXT.md — executive summary + scorecard
- **Target Date:** 4-8 weeks from today (based on PRD build time estimate)

### 2.3 Process Build Spec into Tickets

Invoke `/prd docs/BUILD_SPEC.md` (NOT the full PRD) which will:
1. Parse the PRD into features and requirements
2. Generate ticket breakdown with acceptance criteria
3. Map to the repo
4. Create tickets in Linear under the project

### 2.3 Refine top-priority tickets

For the first 3-5 tickets (MVP MUST-have features), invoke `/refine-ticket` to add:
- Detailed acceptance criteria (Given/When/Then)
- Implementation plan suitable for /autopilot
- Test strategy

### 2.4 CHECKPOINT

```
═══════════════════════════════════════════════════════════════
  ✓ Linear project created: [Product Name]
  ✓ [N] tickets created from PRD
  ✓ Top [M] tickets refined with AC + implementation plans

  Review tickets in Linear and approve before proceeding.
  Linear project URL: [url]

  Approve ticket breakdown? (y/n)
═══════════════════════════════════════════════════════════════
```

**STOP and wait for user approval.**

---

## Phase 3: Remote Setup

### 3.1 Ask permission

```
═══════════════════════════════════════════════════════════════
  Create GitHub remote repository?

  A) Yes — create private repo: <org>/<product-slug>
  B) No — stay local for now

  You can always push later with:
  gh repo create <org>/<product-slug> --private --source=.
═══════════════════════════════════════════════════════════════
```

### 3.2 If approved

```bash
gh repo create <org>/$PRODUCT_SLUG --private --source=. --push
```

### 3.3 If declined

Skip. Repo stays local. User can push later.

---

## Phase 4: Build

### 4.1 Ask permission

```
═══════════════════════════════════════════════════════════════
  Ready to start building.

  Tickets ready for /autopilot:
  1. [TICKET-ID] — [Title] (estimated: X hours)
  2. [TICKET-ID] — [Title] (estimated: X hours)
  3. [TICKET-ID] — [Title] (estimated: X hours)

  Start building? Which ticket first? (enter number or 'skip')
═══════════════════════════════════════════════════════════════
```

### 4.2 For each approved ticket

1. Invoke `/autopilot TICKET-ID`
2. Autopilot handles: branch → TDD → implement → test → commit → PR
3. After PR created, CHECKPOINT:

```
  ✓ PR created: [PR URL]
  Continue to next ticket? (y/review/stop)
```

- **continue:** Move to next ticket
- **review:** Invoke `/pr-review` on the PR first
- **stop:** Pause pipeline, user will resume later

---

## Phase 5: Review & Ship

When all MVP tickets are complete:

1. Run `/pr-review` on all open PRs
2. Fix flagged issues
3. Ask user: "Mark PRs as ready for review?"
4. If yes: `/ready-for-review` on each PR
5. Merge approved PRs to main
6. Deploy to Vercel (if configured)

---

## Product Slug Mapping

| PRD # | Product | Slug | Repo Name |
|-------|---------|------|-----------|
| 01 | PayMatch | paymatch | nig-biz/paymatch |
| 02 | TaxGuard | taxguard | nig-biz/taxguard |
| 03 | ForexGuard | forexguard | nig-biz/forexguard |
| 04 | ClearFast | clearfast | nig-biz/clearfast |
| 05 | GenTrack | gentrack | nig-biz/gentrack |
| 06 | CashFlow AI | cashflow-ai | nig-biz/cashflow-ai |
| 07 | CollectPro | collectpro | nig-biz/collectpro |
| 08 | PortPulse | portpulse | nig-biz/portpulse |
| 09 | SupplyLink | supplylink | nig-biz/supplylink |
| 10 | FreightCompare | freightcompare | nig-biz/freightcompare |
| 18 | VendorScore | vendorscore | nig-biz/vendorscore |
| 19 | ExitBridge | exitbridge | nig-biz/exitbridge |
| 20 | InsureMatch | insurematch | nig-biz/insurematch |
| 21 | BuildTrack | buildtrack | nig-biz/buildtrack |
| 22 | JapaShield | japashield | nig-biz/japashield |
| 23 | WaterTrack | watertrack | nig-biz/watertrack |
| 24 | SecureOps | secureops | nig-biz/secureops |

## Key Rules

1. **NEVER create remote repos without explicit user approval**
2. **NEVER write code without explicit user approval**
3. **NEVER push to remote without explicit user approval**
4. **Each product gets its own isolated repo** — no monorepo
5. **All repos share the same .claude/skills/ and tech stack**
6. **Pipeline can be paused and resumed at any checkpoint**
7. **User can skip any phase** (e.g., skip Linear, skip remote)
