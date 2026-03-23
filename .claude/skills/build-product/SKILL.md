---
name: build-product
description: >
  End-to-end product builder for Nigerian B2B SaaS products. Takes a PRD from
  /prds-v2/ and orchestrates the full pipeline: monorepo app scaffold → project setup →
  Linear project + tickets → brainstorming → implementation plan → build.
  All products live in one Turborepo monorepo at ~/Projects/mentaat.
  Use when the user says "build product", "build <product-name>", "launch product",
  "start building <name>", or wants to go from PRD to running code.
  ALWAYS requires explicit user approval before creating remote repos or writing any code.
---

# /build-product — PRD to Production Pipeline

Takes a PRD file and orchestrates the complete build pipeline for a Nigerian B2B SaaS product. All products share one Turborepo monorepo at ~/Projects/mentaat. Nothing ships to remote or gets built without explicit user approval.

## Invocation

```
/build-product <prd-file>            # e.g. /build-product prds-v2/01-portpulse.md
/build-product <product-name>        # e.g. /build-product PortPulse
/build-product                       # Interactive — shows menu of available PRDs
```

## Prerequisites

- `.claude/skills/` must contain portable skills (project-setup, prd, linear, etc.)
- Linear MCP connected
- GitHub CLI (`gh`) authenticated as `ocnwaokoro`
- PRD files in `/prds-v2/` folder

## Constants

```
GITHUB_USER=ocnwaokoro
GITHUB_ORG=ocnwaokoro
REPO_DIR=$HOME/Projects/mentaat
PRD_SOURCE=/Users/ocnwaokoro/Downloads/nig-$$$/prds-v2
```

---

## Pipeline Overview

```
PHASE 0: SELECT & CONFIRM
  → User picks PRD or provides product name
  → Display PRD summary + scorecard
  → User confirms: "Yes, build this one"

PHASE 1: SCAFFOLD (local only — no remote)
  → Check if ~/Projects/mentaat exists
  → If not: scaffold Turborepo monorepo with npx create-turbo@latest mentaat
  → If yes: create new app/bot/service in existing monorepo
  → Copy .claude/skills/ into repo (if first time)
  → Run /project-setup (generates config.md)
  → Run /tech-stack (generates tech-stack.md)
  → Create Next.js app or bot service in the appropriate path
  → ⏸️ CHECKPOINT: Show user the scaffolded app. Ask: "Approve app structure?"

PHASE 2: LINEAR SETUP
  → Create Linear project for this product
  → Run /prd <prd-file> to generate tickets from PRD
  → Run /refine-ticket on each ticket to add AC + implementation plans
  → ⏸️ CHECKPOINT: Show user the Linear tickets. Ask: "Approve ticket breakdown?"

PHASE 3: REMOTE SETUP (requires explicit approval)
  → Ask user: "Push to GitHub remote? (y/n)"
  → If yes and remote not set: gh repo create ocnwaokoro/mentaat --private --source=.
  → Push latest commits
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
  /build-product — Mentaat Technologies Product Builder
═══════════════════════════════════════════════════════════════

  Available PRDs (ranked by disruption score):

  #01 PortPulse       (8/8) — Container Tracking Intelligence
  #02 BuildTrack      (6/8) — Construction Cost Intelligence
  #03 VendorScore     (6/8) — B2B Credit Scoring
  #04 InsureMatch     (7/8) — SME Insurance Enablement
  #05 ClearFast       (6/8) — Customs AI for Clearing Agents
  #06 KasaBook        (8/8) — Informal Debt/Sales Tracker
  #07 USSD Platform   (—/8) — Session Mgmt, Accounts, SMS Delivery
  #08 StockClear      (—/8) — Wholesale Inventory Clearance
  #09 WasteMatch      (—/8) — Waste Collection Marketplace
  #10 AjoTrust        (—/8) — Rotating Savings Digitization
  #11 RideBooks       (—/8) — Transport Operator Bookkeeping
  #12 SkillProof      (—/8) — Artisan Skill Verification
  #13 MasterBook      (—/8) — Master Craftsman Business Mgmt
  #14 HarvestPrice    (—/8) — Agricultural Price Intelligence
  #15 MarketPass      (—/8) — Market Stall Digital Identity
  #16 GasPool         (—/8) — Cooking Gas Group Purchasing
  #17 PharmaDrop      (—/8) — Pharmacy Delivery Coordination

  Enter number or name to build:
═══════════════════════════════════════════════════════════════
```

### After selection — confirm:

1. Read the PRD file
2. Display: product name, one-line summary, target MRR, build time estimate, disruption scorecard
3. Ask via AskUserQuestion: **"Confirm: Build [Product Name]? This will create an app at ~/Projects/mentaat/apps/[slug]/ (or bots/[slug]/ or services/[slug]/). (y/n)"**
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

## Phase 0.75: Prototype (MANDATORY — format varies by product type)

**Source:** `what-produced-this-success.md` from PayMatch — first build failed without prototyping; second succeeded with it.

### Determine prototype type from app path:

**`apps/*` products** (web dashboards): → HTML prototype
**`bots/*` products** (USSD/WhatsApp): → Interactive simulator
**`services/*` products** (platform): → Both

### For `apps/*` — HTML Prototype

```bash
mkdir -p "$REPO_DIR/prototypes"
# Create prototypes/<product-slug>.html — zero-dependency, single-file visual reference
```

Build every key screen in one HTML file with inline CSS. Zero dependencies. Iterate by editing text and refreshing browser. Must show:
- Primary user flow end-to-end
- Key screens from PRD "Key Screens & UX" section
- Mobile-responsive (Nigerian users primarily on mobile)

Then:
1. **Competitive analysis** — generate alternative via AI tool or research 2-3 competitors. Cherry-pick best of both.
2. **Extract DESIGN.md** — run `/design-system` on the prototype. Every color, font, spacing, component comes from the working prototype, not invented in the abstract.
3. **Scope review** — grade every feature against PRD MoSCoW. Cut anything not MUST. Stub SHOULD items.
4. **Human-first design review** — for any feature that makes decisions on behalf of the user, ask: "Who is accountable when it's wrong?" If the user, the system suggests — it doesn't decide.
5. **Audit passes** — design audit + accessibility audit (WCAG 2.1 AA) on prototype before production.
6. **Update PRD** — after prototype is validated, update the PRD to match what was actually built.

### For `bots/*` — Interactive Simulator

Use existing tools instead of building custom simulators:

- **USSD flows:** Use [USSDify](https://app.ussdify.com/) to build and test USSD menu trees visually. Free tier. Or use [USSD Flow Mock](https://jaxolotl.github.io/ussd-flow-mock/) for quick browser-based testing with JSON-defined flows.
- **WhatsApp flows:** Use [Meta Developer Hub sandbox](https://business.whatsapp.com/developers/developer-hub) with test numbers. Or create a simple HTML chat simulator (one file, hardcoded responses) for pre-code validation.
- **Both:** Verify every USSD screen is within 182-char limit. Read flows aloud: "Would the primary persona understand this?"

Then:
1. **Test all paths** — happy path, error cases, edge cases (wrong input, timeout, re-entry)
2. **Scope review** — same as above, grade against MoSCoW
3. **Update PRD** — if flows changed during prototyping

### CHECKPOINT (both types)

```
  ✓ Prototype/simulator created and tested
  ✓ Competitive analysis complete (apps/* only)
  ✓ DESIGN.md extracted (apps/* only)
  ✓ Scope reviewed against PRD
  ✓ All flows validated

  Review the prototype. Does this match the product? (y/n)
```

**STOP and wait for user approval. Do NOT proceed to production code without approved prototype.**

---

## Phase 1: Scaffold in Monorepo

### 1.1 Check if monorepo exists

```bash
REPO_DIR="$HOME/Projects/mentaat"

if [ ! -d "$REPO_DIR" ]; then
  # First product — scaffold the Turborepo monorepo
  cd "$HOME/Projects"
  npx create-turbo@latest mentaat --pm pnpm
  cd "$REPO_DIR"
  git init
  # Create shared package directories
  mkdir -p packages/core packages/messaging packages/data packages/ui packages/ussd-engine
  mkdir -p apps bots services/bot-server
fi
```

### 1.2 Determine app path from slug mapping

```bash
PRODUCT_SLUG=$(echo "<product-name>" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
# Look up APP_PATH from the Product Slug Mapping table below
# e.g., portpulse → apps/portpulse, kasabook → bots/kasabook, ussd-platform → services/bot-server
APP_PATH="$REPO_DIR/<app-path-from-table>"
mkdir -p "$APP_PATH"
```

### 1.3 Create Next.js app (for apps/* products)

```bash
cd "$REPO_DIR"
npx create-next-app@latest apps/$PRODUCT_SLUG --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

For bots/* products, scaffold a lightweight Fastify service instead of Next.js.
For services/bot-server, scaffold or update the shared USSD/WhatsApp handler service.

### 1.4 Copy skills and shared context (first time only)

```bash
if [ ! -d "$REPO_DIR/.claude" ]; then
  cp -R /Users/ocnwaokoro/Downloads/nig-$$$/.claude "$REPO_DIR/.claude"
fi
cp /Users/ocnwaokoro/Downloads/nig-$$$/prds/00-shared-context.md "$REPO_DIR/docs/"
cp /Users/ocnwaokoro/Downloads/nig-$$$/prds-v2/<prd-file> "$APP_PATH/docs/PRD.md"
```

### 1.5 Install shared dependencies

From 00-shared-context.md tech stack:
```bash
cd "$REPO_DIR"
pnpm install @supabase/supabase-js prisma @prisma/client
pnpm install xlsx pdf-parse
pnpm install -D vitest @playwright/test
```

### 1.6 Run project-setup (first time only)

Invoke `/project-setup` skill with pre-filled values:
- **Name:** Mentaat Technologies
- **Linear Team:** Mentaat
- **GitHub Org:** ocnwaokoro
- **Default Branch:** main
- **Branch Naming:** `MNT-{number}_{short_description}`

### 1.7 Run tech-stack

Invoke `/tech-stack` to generate tech-stack.md from the scaffolded codebase.

### 1.8 CHECKPOINT

```
═══════════════════════════════════════════════════════════════
  ✓ Monorepo exists: ~/Projects/mentaat/
  ✓ App scaffolded: ~/Projects/mentaat/<app-path>/
  ✓ Next.js initialized with TypeScript + Tailwind (or Fastify for bots)
  ✓ Skills copied (if first product)
  ✓ config.md generated
  ✓ tech-stack.md generated
  ✓ PRD copied to <app-path>/docs/PRD.md

  Approve this app structure before proceeding? (y/n)
═══════════════════════════════════════════════════════════════
```

**STOP and wait for user approval.**

---

## Phase 2: Linear Setup

### 2.1 Create Linear Project for This Product

All products live under the single Mentaat team. Use Linear MCP:

```
mcp__linear__list_teams  → find the Mentaat team
mcp__linear__get_team    → confirm team exists

Create a project under the Mentaat team:
  Project Name: [Product Name] MVP
  Description: From MARKET_CONTEXT.md — executive summary + scorecard
  Target Date: 4-8 weeks from today (based on PRD build time estimate)
```

### 2.2 Process Build Spec into Tickets

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
  Push to GitHub remote?

  A) Yes — push to: ocnwaokoro/mentaat
  B) No — stay local for now

  You can always push later with:
  cd ~/Projects/mentaat && git push
═══════════════════════════════════════════════════════════════
```

### 3.2 If approved

```bash
cd "$REPO_DIR"
# If remote doesn't exist yet:
gh repo create ocnwaokoro/mentaat --private --source=. --push
# If remote already exists:
git push
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

| PRD # | Product | Slug | App Path |
|-------|---------|------|----------|
| 01 | PortPulse | portpulse | apps/portpulse |
| 02 | BuildTrack | buildtrack | apps/buildtrack |
| 03 | VendorScore | vendorscore | apps/vendorscore |
| 04 | InsureMatch | insurematch | apps/insurematch |
| 05 | ClearFast | clearfast | apps/clearfast |
| 06 | KasaBook | kasabook | bots/kasabook |
| 07 | USSD Platform | ussd-platform | services/bot-server |
| 08 | StockClear | stockclear | apps/stockclear |
| 09 | WasteMatch | wastematch | bots/wastematch |
| 10 | AjoTrust | ajotrust | bots/ajotrust |
| 11 | RideBooks | ridebooks | bots/ridebooks |
| 12 | SkillProof | skillproof | bots/skillproof |
| 13 | MasterBook | masterbook | bots/masterbook |
| 14 | HarvestPrice | harvestprice | bots/harvestprice |
| 15 | MarketPass | marketpass | bots/marketpass |
| 16 | GasPool | gaspool | bots/gaspool |
| 17 | PharmaDrop | pharmadrop | apps/pharmadrop |

## Shared Packages

| Package | Path | Purpose |
|---------|------|---------|
| core | packages/core | Shared types, utils, constants |
| messaging | packages/messaging | WhatsApp/SMS via Termii |
| data | packages/data | Supabase client, Prisma schema, shared queries |
| ui | packages/ui | Shared React components (shadcn/ui based) |
| ussd-engine | packages/ussd-engine | USSD session management, menu builder |

## Key Rules

1. **NEVER create remote repos without explicit user approval**
2. **NEVER write code without explicit user approval**
3. **NEVER push to remote without explicit user approval**
4. **All products share one Turborepo monorepo at ~/Projects/mentaat**
5. **All apps share the same .claude/skills/, tech stack, and shared packages**
6. **Pipeline can be paused and resumed at any checkpoint**
7. **User can skip any phase** (e.g., skip Linear, skip remote)
