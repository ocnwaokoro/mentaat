---
name: prd
description: Transform a Product Requirements Document into actionable Linear tickets with acceptance criteria, test strategies, and implementation readiness. Use when the user says "process PRD", "PRD to tickets", "break down PRD", "import requirements", provides a PRD file/URL, or wants to go from product spec to development-ready tickets. Reads config.md and tech-stack.md to align output with the actual project.
---

# /prd - PRD to Development Pipeline

Transform a Product Requirements Document into development-ready Linear tickets with acceptance criteria, test strategies mapped to real AC, and Sentry error tracking considerations — all aligned with the actual tech stack and project config.

## Invocation

```
/prd <path-to-prd>
/prd <url>
/prd                    # Will prompt for PRD source
```

## Prerequisites

- `.claude/skills/config.md` must exist (run `/project-setup` if not)
- `.claude/skills/tech-stack.md` should exist (run `/tech-stack` if not — skill will warn but continue)
- Linear MCP connected (for ticket creation)

---

## Flow Overview

```
1. Ingest PRD (file, URL, or pasted)
2. Load config.md + tech-stack.md
3. Parse PRD into features, user stories, requirements
4. Map requirements → repos (using config)
5. Identify Sentry/monitoring needs
6. Generate ticket breakdown with AC + test mapping
7. Review with user
8. Create tickets in Linear
9. Save to requirements/ folder
10. Offer next steps: /refine-ticket or /autopilot
```

---

## Stage 1: Ingest PRD

### 1.1 Determine Source

If no argument provided, ask:

```
Question: "Where is the PRD?"
Header: "PRD Source"
Options:
  - Label: "Local file", Description: "Path to a markdown, PDF, or text file"
  - Label: "URL", Description: "Link to a Google Doc, Notion page, Confluence, etc."
  - Label: "Paste it", Description: "I'll paste the content directly"
```

### 1.2 Read the PRD

- **Local file**: Use Read tool. Supports `.md`, `.txt`, `.pdf`.
- **URL**: Use WebFetch to retrieve content. Parse HTML to extract main content.
- **Pasted**: Accept from user's next message.

### 1.3 Store Raw PRD

Save the raw PRD for traceability:

```
requirements/prds/<feature-name-or-date>.md
```

---

## Stage 2: Load Project Context

Read and parse:

1. **`.claude/skills/config.md`** — project name, repos, Linear config, Sentry config, conventions
2. **`.claude/skills/tech-stack.md`** — languages, frameworks, test runners, commands per repo

If tech-stack.md doesn't exist:

```
⚠️ No tech-stack.md found. Ticket creation will proceed but implementation
details (test commands, file paths, framework patterns) will be generic.

Run /tech-stack first for better results.
```

---

## Stage 3: Parse PRD

Extract structured information from the PRD:

### 3.1 Core Extraction

| Element | What to extract |
|---------|----------------|
| **Product vision** | The "why" — problem being solved, target users |
| **Features** | Distinct capabilities being added |
| **User stories** | As a [user], I want [action], so that [value] |
| **Functional requirements** | Specific behaviors, rules, constraints |
| **Non-functional requirements** | Performance, security, scalability, accessibility |
| **UI/UX requirements** | Screens, flows, design references |
| **Data requirements** | New data models, fields, relationships |
| **Integration requirements** | APIs, third-party services, webhooks |
| **Success metrics** | How to measure if this works |
| **Out of scope** | Explicitly excluded items |
| **Open questions** | Unresolved decisions in the PRD |

### 3.2 Identify Ambiguities

Flag anything in the PRD that is:
- Vague ("improve performance", "better UX")
- Contradictory
- Missing detail needed for implementation
- Dependent on undecided design/architecture choices

Present ambiguities to the user before proceeding:

```
Question: "I found some areas in the PRD that need clarification before I can create precise tickets. Can we resolve these?"
Header: "PRD Clarifications"
```

Ask focused questions per ambiguity. Reference the specific PRD section.

---

## Stage 4: Map to Repos and Stack

Using config.md repo table and tech-stack.md:

### 4.1 Classify Each Requirement

For each feature/requirement, determine:
- Which repo(s) it affects (backend, frontend, infrastructure, etc.)
- What layer it touches (API, database, UI, background jobs, etc.)
- What existing patterns apply (from tech-stack.md)

### 4.2 Identify Cross-Cutting Concerns

Flag requirements that span multiple repos:
- "User can filter products" → backend (API endpoint) + frontend (filter UI)
- "Send email on signup" → backend (job + mailer) + possibly infrastructure (email service config)

These become multi-ticket features with explicit dependencies.

### 4.3 Sentry / Monitoring Requirements

For each feature, identify error paths that need monitoring:

- New API endpoints → need error capture
- New external integrations → need failure tracking
- New payment/financial flows → need transaction monitoring
- New user-facing forms → need client-side error boundaries

**Using config.md Sentry config:**
- If Sentry is configured: add Sentry integration tasks to relevant tickets
- If "Not yet": add setup tasks as prerequisite tickets
- If "No": skip but note monitoring gaps

---

## Stage 5: Generate Ticket Breakdown

### 5.1 Feature Decomposition

Break each PRD feature into tickets following these rules:

**Sizing:**
- Each ticket should be completable in 1-3 days
- If larger, decompose further
- If trivially small, combine with related work

**Ordering:**
- Data model / migration tickets first
- Backend logic second
- API endpoints third
- Frontend UI fourth
- Integration / glue last

**Dependencies:**
- Explicit `Dependencies: TICKET-1, TICKET-2` on each ticket
- No circular dependencies
- Minimize dependency chains (prefer parallelizable work)

### 5.2 Per-Ticket Structure

For each ticket, generate:

```markdown
## TICKET-TITLE

**Type:** Feature | Bug | Chore
**Repo:** <from config.md repo table>
**Priority:** High | Medium | Low
**Story Points:** <estimate>

### Description
<What and why, traced back to PRD section>

**PRD Reference:** <section/page of original PRD>

### Acceptance Criteria

<Generated using acceptance-criteria skill format>
<Each AC traces to a specific PRD requirement>

#### Given/When/Then
- **Given** [precondition from PRD]
  **When** [user action from PRD]
  **Then** [expected outcome from PRD]

#### Requirements
- [Specific testable requirement]

#### Edge Cases
- [From PRD or inferred]

#### Out of Scope
- [Explicitly excluded]

### Test Strategy

> Every AC maps to at least one test. Tests reference AC by ID.

| AC | Test Type | Test Description | Repo |
|----|-----------|-----------------|------|
| AC-1 | <unit/integration/e2e> | <what the test verifies> | <repo> |
| AC-2 | <unit/integration/e2e> | <what the test verifies> | <repo> |

**Test runner:** <from tech-stack.md>
**Test command:** `<from tech-stack.md>`

### Sentry Integration (if applicable)

- [ ] Error boundaries for new UI components
- [ ] Exception capture for new API endpoints
- [ ] Transaction monitoring for new flows
- [ ] Alert rules for critical paths

### Dependencies
<list or "None">
```

### 5.3 Epic Structure

If the PRD produces more than 3 tickets, wrap in an epic:

```
Epic: <PRD Feature Name>
├── TICKET-1: <Data model / migration>
├── TICKET-2: <Backend logic>
├── TICKET-3: <API endpoints>
├── TICKET-4: <Frontend UI>
├── TICKET-5: <Integration / Sentry>
└── TICKET-6: <E2E tests / smoke tests>
```

---

## Stage 6: Review with User

### 6.1 Present Summary

```
PRD Breakdown Complete

Feature: <PRD title>
Tickets: <N> tickets across <M> repos
Epic: <epic name>

Repos affected:
  - <repo1>: <N> tickets
  - <repo2>: <N> tickets

Ticket Overview:
  1. [repo] TITLE — <1-line summary> (depends on: -)
  2. [repo] TITLE — <1-line summary> (depends on: 1)
  3. [repo] TITLE — <1-line summary> (depends on: 1)
  ...

Sentry tasks: <N> tickets include monitoring setup
Test coverage: <N> test cases across all tickets
Open questions: <N> items need resolution
```

### 6.2 Get Approval

```
Question: "How does this breakdown look?"
Header: "Review"
Options:
  - Label: "Create tickets", Description: "Create all tickets in Linear"
  - Label: "Adjust", Description: "I want to change the breakdown"
  - Label: "Just save locally", Description: "Save to requirements/ but don't create in Linear"
  - Label: "Cancel", Description: "Start over"
```

**If "Adjust":** Ask what to change, modify, and re-present.

---

## Stage 7: Create Tickets in Linear

### 7.1 Get Next Available ID

```
mcp__linear-server__list_issues(team: "<from config.md>", limit: 1, orderBy: "createdAt")
```

Extract numeric part of last ticket ID. Increment from there.

### 7.2 Create Epic/Milestone (if applicable)

```
mcp__linear-server__create_milestone(
  project: "<from config.md>",
  name: "<Feature Name>"
)
```

### 7.3 Create Each Ticket

For each ticket in dependency order:

```
mcp__linear-server__create_issue(
  team: "<from config.md>",
  title: "<Repo> - <Title>",
  description: "<full ticket markdown with AC, test strategy, sentry tasks>",
  project: "<from config.md>",
  milestone: "<epic milestone>",
  priority: <mapped priority>
)
```

### 7.4 Save to Requirements Folder

```
requirements/features/<feature-name>/
├── Epic_Summary.md          # From PRD summary
├── Technical_Tasks.md       # All tickets with full detail
├── technical_tasks_import.csv  # If using CSV import
└── source_prd.md            # Original PRD for traceability
```

---

## Stage 8: Completion Report

```
PRD Pipeline Complete

PRD: <title>
Tickets Created: <N>
Epic: <name> (<Linear URL>)

Created Tickets:
  ✅ PREFIX-101: [repo] Title (High)
  ✅ PREFIX-102: [repo] Title (High, depends on 101)
  ✅ PREFIX-103: [repo] Title (Medium)
  ...

Test Coverage:
  <N> acceptance criteria
  <N> mapped test cases
  <N> repos with test strategies

Sentry Integration:
  <N> tickets include monitoring tasks

Files Saved:
  requirements/features/<name>/Epic_Summary.md
  requirements/features/<name>/Technical_Tasks.md
  requirements/features/<name>/source_prd.md

Next Steps:
  1. /refine-ticket PREFIX-101  → Add implementation plan (first ticket)
  2. /autopilot PREFIX-101      → Start autonomous development
  3. Review epic in Linear: <URL>
```

---

## AC-to-Test Traceability

This is a core guarantee of the `/prd` skill. Every ticket maintains a traceable chain:

```
PRD Requirement → Acceptance Criterion → Test Case → Actual Test File
     (source)         (what)              (how)       (where)
```

- **PRD Reference** on each ticket traces back to the source requirement
- **AC IDs** (AC-1, AC-2, ...) are assigned per ticket
- **Test Strategy table** maps each AC to a specific test type and description
- **`/autopilot`** uses the Test Strategy table during TDD to write tests that match AC
- **`/pr-review`** checks that every AC has a corresponding test in the PR

This closes the loop: tests exist because requirements exist, and you can trace any test back to the business need that created it.

---

## Handling PRDs of Different Quality

### Well-structured PRD (has user stories, requirements, wireframes)
- Direct extraction, minimal clarification needed
- Focus on technical decomposition

### Rough PRD (bullet points, meeting notes, ideas)
- More clarification rounds in Stage 3
- Help user formalize requirements before ticketing
- May need to draft AC collaboratively

### Single-line PRD ("add user authentication")
- Treat as a brainstorming prompt
- Ask structured questions to build out the feature
- Generate a mini-PRD first, then proceed to ticketing

In all cases, the output is the same: structured tickets with AC, test mapping, and Sentry considerations.
