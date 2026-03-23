---
name: refine-ticket
description: Refine a Linear ticket by adding acceptance criteria and/or implementation plans. Non-technical users can add acceptance criteria and exit. Technical users can continue to create detailed implementation plans suitable for /autopilot. Triggers include "refine ticket", "prepare ticket for engineering", "add acceptance criteria", or mentions of refining Linear tickets.
---

# /refine-ticket - Ticket Refinement

Refine a Linear ticket by clarifying requirements, generating acceptance criteria, and optionally creating a detailed implementation plan.

**Flow:**
1. Fetch ticket and check for existing AC/plan
2. If no AC exists → immediately create acceptance criteria
3. If AC exists → show Action Menu to revise AC, create/revise plan, or exit
4. After plan creation → optionally launch `/autopilot` for autonomous development

## Invocation

```
/refine-ticket TICKET-ID
/refine-ticket              # Will prompt for ticket ID
```

## Linear Integration

This skill uses the Linear MCP server for all ticket operations. See `.claude/skills/linear/SKILL.md` for full Linear documentation.

**Available Linear MCP tools used by this skill:**
- `mcp__linear-server__get_issue` - Fetch ticket details
- `mcp__linear-server__update_issue` - Update ticket description
- `mcp__linear-server__create_comment` - Add comments to tickets
- `mcp__linear-server__list_issue_labels` - Check available labels

**Description format convention:** AC and implementation plans are stored as structured sections within the Linear issue description using markdown headers:
- `## Acceptance Criteria` - Contains the acceptance criteria
- `## Implementation Plan` - Contains the implementation plan
- Original description content is preserved above these sections

## Repository Structure

For detailed information about the project's repository structure, target repository determination, and codebase exploration procedures, see `.claude/skills/codebase-exploration/SKILL.md`.

**Quick reference:** Read `.claude/skills/config.md` → Repositories table for repo names, paths, and default branches.

Determine target repo by checking ticket labels, then title, then asking the user if unclear.

---

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────┐
│ Stage 1: Fetch Ticket & Route                                │
│   • Get Linear ticket details via MCP                       │
│   • Extract existing AC and implementation plan             │
│   • Route based on current state                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   No AC exists? ──────────► Go directly to Stage 2          │
│                                                              │
│   AC exists? ─────────────► Show Action Menu:               │
│                              • Revise acceptance criteria   │
│                              • Create/Revise impl plan      │
│                              • Exit                         │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│ Stage 2: Requirements Clarification                          │
│   • Ask clarifying questions about the requirements         │
│   • Focus on user value, edge cases, and success criteria   │
├─────────────────────────────────────────────────────────────┤
│ Stage 3: Generate Acceptance Criteria                        │
│   • Transform requirements into clear acceptance criteria   │
│   • Present for review and approval                         │
│   • Update Linear ticket ──────────► Return to Action Menu  │
├─────────────────────────────────────────────────────────────┤
│ Stage 4: Codebase Exploration (Technical)                    │
│   • Search codebase for relevant patterns and files         │
│   • Identify technical constraints and dependencies         │
├─────────────────────────────────────────────────────────────┤
│ Stage 5: Implementation Planning (Technical)                 │
│   • Create detailed implementation plan for autonomous dev  │
│   • Update Linear ticket                                    │
│   • ⚠️ CHECKPOINT: Start /autopilot, or exit? │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Philosophy: Two Phases, Two Audiences

### Phase 1: Acceptance Criteria (Non-Technical)

See `.claude/skills/acceptance-criteria/SKILL.md` for full documentation on:
- AC philosophy and audience (stakeholders, product reviewers)
- Format template (Given/When/Then, Requirements, Edge Cases, Out of Scope)
- Quality checklist for testable, business-language criteria
- Linear formatting guidelines

### Phase 2: Implementation Plan (Technical - Optional)

See `.claude/skills/implementation-plan/SKILL.md` for full documentation on:
- Plan philosophy and audience (autonomous development agents)
- Plan format template (Overview, Files to Modify, Tasks, Testing Strategy, Risks)
- Codebase exploration guidance and prompt templates
- Technical clarification question patterns
- Task structure rules (vertical slices)
- Plan quality checklist
- Good vs bad examples

**The user is assumed to be a deep codebase expert** who can answer technical questions about architecture, patterns, and implementation preferences.

---

## Stage 1: Fetch Ticket

### 1.1 Get Ticket ID

If ticket ID was not provided as an argument, use AskUserQuestion:
```
Question: "What Linear ticket should I help you refine?"
Header: "Ticket ID"
Options:
  - Label: "Enter ticket ID", Description: "e.g., TICKET-123 (use prefix from config.md)"
```

### 1.2 Fetch Linear Ticket Information

Use the Linear MCP tool to fetch the ticket:

```
mcp__linear-server__get_issue(id: "TICKET-ID")
```

**Fallback:** If the MCP call fails (e.g., Linear MCP not connected), see `references/error-handling.md` for error handling procedures.

**Extract from the response:**
- `TICKET_SUMMARY`: The issue title
- `TICKET_TYPE`: Labels or issue type (bug, feature, etc.)
- `TICKET_DESCRIPTION`: The issue description (markdown)
- `EXISTING_AC`: Content under `## Acceptance Criteria` header in the description (if present)
- `EXISTING_PLAN`: Content under `## Implementation Plan` header in the description (if present)

**Detecting existing refinement:** Parse the issue description for `## Acceptance Criteria` and `## Implementation Plan` markdown headers. If these sections exist and have content below them, they are considered present.

### 1.2.1 Determine Target Repository

After fetching the ticket, determine the target repo using the procedure in `.claude/skills/codebase-exploration/SKILL.md` → "Determining the Target Repository":
1. Check the issue labels for `backend`, `frontend`, or `infrastructure`
2. Check the issue title for those keywords
3. Ask the user if unclear

Store the result as `TARGET_REPO` (e.g., `backend`) and `DEFAULT_BRANCH` (e.g., `staging`). This will be used in Stage 4 for codebase exploration and in Stage 5 for the implementation plan.

### 1.2.2 Check Ticket Dependencies

If the ticket has dependencies listed (e.g., "Dependencies: GRO-123, GRO-456"), fetch and analyze each dependency ticket:

```
mcp__linear-server__get_issue(id: "DEPENDENCY-TICKET-ID")
```

For each dependency, extract:
- **Status**: Is it completed, in progress, or backlog?
- **Has AC**: Does it have `## Acceptance Criteria` section?
- **Has Plan**: Does it have `## Implementation Plan` section?

**Store as:** `DEPENDENCIES` list with status, AC, and plan information for each.

**Dependency Impact:**
- **For AC creation (Stage 2-3)**: Dependencies do NOT block AC creation. Show a warning if dependencies are unfinished, but proceed with AC creation.
- **For implementation planning (Stage 5)**: Dependencies MUST have both AC and implementation plans. If any dependency lacks these, cannot create implementation plan for this ticket.

### 1.3 Present Current State

Display to the user:
```
═══════════════════════════════════════════════════════════════
Linear Ticket: TICKET-ID
═══════════════════════════════════════════════════════════════
Summary: [ticket title]
Type: [labels / issue type]
Target Repo: [TARGET_REPO] (default branch: [DEFAULT_BRANCH])

Description:
[description content, excluding AC and Plan sections]

Dependencies: [None / Show list if present]
[If dependencies exist, show status for each:
  ✓ GRO-123 (Completed) - Has AC ✓, Has Plan ✓
  ⚠️ GRO-456 (In Progress) - Has AC ✓, Has Plan ✗
  ❌ GRO-789 (Backlog) - Has AC ✗, Has Plan ✗
]

───────────────────────────────────────────────────────────────
Acceptance Criteria: [Present / None]
[Show existing content if present]

Implementation Plan: [Present / None]
[Show existing content if present]
═══════════════════════════════════════════════════════════════
```

**If unfinished dependencies exist:**
- Display warning: "⚠️ This ticket has unfinished dependencies. You can create acceptance criteria now, but implementation planning will be blocked until dependencies have both AC and implementation plans."

### 1.4 Route Based on Current State

**If NO acceptance criteria exist:** Proceed directly to Stage 2 (Requirements Clarification) to create AC.

**If acceptance criteria exist:** Show the Action Menu.

### 1.5 Action Menu

Display when AC exists (after initial load or after any update):

```
Question: "What would you like to do with this ticket?"
Header: "Action"
Options:
  - Label: "View AC", Description: "Display the current acceptance criteria"
  - Label: "View Plan", Description: "Display the current implementation plan"  # only if plan exists
  - Label: "Revise AC", Description: "Update the existing acceptance criteria"
  - Label: "Create Plan", Description: "Add an implementation plan"             # only if NO plan exists
  - Label: "Revise Plan", Description: "Update the existing implementation plan" # only if plan exists
  - Label: "Exit", Description: "Done - no more changes needed"
```

**Conditional options based on plan existence:**
- **No plan exists:** Show "Create Plan", hide "View Plan" and "Revise Plan"
- **Plan exists:** Show "View Plan" and "Revise Plan", hide "Create Plan"

Based on the user's choice:

- **View AC**:
  1. Display the existing acceptance criteria in full
  2. Return to the Action Menu (Section 1.5)

- **View Plan**:
  1. Display the existing implementation plan in full
  2. Return to the Action Menu (Section 1.5)

- **Revise AC**:
  1. Display the existing acceptance criteria in full
  2. Ask: "What changes are needed to the acceptance criteria?" (free text)
  3. Make targeted modifications based on feedback, preserving unchanged parts
  4. Present updated AC for approval and update Linear
  5. Return to the Action Menu (Section 1.5)

- **Create Plan**:
  1. Do Stage 4 (Codebase Exploration)
  2. Create the implementation plan (Stage 5)
  3. Update Linear with the plan
  4. Ask about autonomous development (Section 5.5)
  5. If user declines: Return to the Action Menu

- **Revise Plan**:
  1. Display the existing implementation plan in full
  2. Ask: "What changes are needed to the implementation plan?" (free text)
  3. If major changes needed: Do Stage 4 (Codebase Exploration) first
  4. Make targeted modifications based on feedback, preserving unchanged parts
  5. Update Linear with the plan
  6. Ask about autonomous development (Section 5.5)
  7. If user declines: Return to the Action Menu

- **Exit**: Show Final Report and exit the skill

**Important:** When updating existing content, show it to the user first and ask what specifically needs to change. This handles cases where the content was edited externally (e.g., during grooming sessions).

---

## Stage 2: Requirements Clarification

Follow the requirements gathering workflow from `.claude/skills/acceptance-criteria/SKILL.md` → "Requirements Gathering Workflow":

1. **Analyze the ticket** - Understand core needs, ambiguities, edge cases
2. **Ask clarifying questions** - Use conversation style from `references/conversation-style.md`
3. **Iterate until clear** - 2-4 rounds typically, note remaining ambiguities

See the acceptance-criteria skill for detailed question categories and guidance.

---

## Stage 3: Generate Acceptance Criteria

### 3.1 Draft and Review

Follow the process from `.claude/skills/acceptance-criteria/SKILL.md`:
1. **Draft AC** using the format template and quality checklist
2. **Present for review** using the Review and Approval Process
3. **Handle modifications** until approved

### 3.2 Update Linear with Acceptance Criteria

Once approved, update the Linear issue description to include the acceptance criteria.

**Step 1: Build the updated description**

Construct the new description by combining:
1. The original description content (everything before `## Acceptance Criteria` if it existed, or the full original description)
2. A `## Acceptance Criteria` section with the approved AC content
3. The existing `## Implementation Plan` section (if one already exists, preserve it unchanged)

**Step 2: Update the Linear issue**

```
mcp__linear-server__update_issue(
  id: "TICKET-ID",
  description: "<full updated description with AC section>"
)
```

The description is markdown, so all formatting is preserved natively:
- Headings (##, ###)
- Bold and italic text
- Bullet and numbered lists
- Task lists (checkboxes)
- Code blocks
- Links
- Horizontal rules (---)

### 3.3 Return to Action Menu

After updating acceptance criteria, return to the Action Menu (Section 1.5) so the user can:
- Create or revise the implementation plan
- Exit if done

This keeps the flow simple - AC creation always returns to the menu rather than having a separate checkpoint.

---

## Stage 4: Codebase Exploration (Technical)

For detailed codebase exploration procedures, see `.claude/skills/codebase-exploration/SKILL.md`.

**In this context:**

1. **Determine codebase context** - Follow the workflow in the codebase-exploration skill to:
   - Check current branch in the target repo
   - Use worktree if on feature branch (recommended for planning from default branch state)
   - Proceed with exploration

2. **Explore relevant code** - Use the Task tool with the Explore agent to systematically search for:
   - Existing patterns and conventions
   - Database schema and migrations
   - API endpoints and integrations
   - Testing patterns
   - Similar features already implemented

3. **Document findings** - Follow file path conventions (relative to repo root, prefixed with repo name for multi-repo work)

See `.claude/skills/implementation-plan/SKILL.md` → "Codebase Exploration" and "Exploration Outputs to Capture" for detailed exploration prompt templates and outputs to document.

---

## Stage 5: Implementation Planning (Technical)

### 5.0 Validate Dependencies

Before creating an implementation plan, check the `DEPENDENCIES` list from Stage 1.2.2:

**If ANY dependency lacks BOTH acceptance criteria AND implementation plan:**
```
═══════════════════════════════════════════════════════════════
❌ Cannot Create Implementation Plan
═══════════════════════════════════════════════════════════════
This ticket depends on unfinished tickets that lack proper planning:

Missing AC and Plan:
- GRO-789: [Ticket summary] (Status: Backlog)

Missing Plan only:
- GRO-456: [Ticket summary] (Status: In Progress, Has AC ✓)

Required Actions:
1. Use /refine-ticket on each dependency to add AC and plans
2. Return here once dependencies are fully planned

Cannot proceed with implementation planning until dependencies are ready.
═══════════════════════════════════════════════════════════════
```

Return to Action Menu or exit.

**If ALL dependencies have BOTH AC and implementation plans:**
Proceed to create the implementation plan. Assume all dependency features are already implemented as described in their plans. Use dependency plans as the foundation for this ticket's implementation.

### 5.1 Create Implementation Plan

Based on the acceptance criteria and codebase exploration, create a detailed implementation plan using the format template and task structure rules from `.claude/skills/implementation-plan/SKILL.md`.

**If this ticket has dependencies:**
- Review the implementation plans from all dependency tickets
- Assume all dependency features are already implemented as described in their plans
- Use dependency implementation details as the foundation for this plan
- Reference dependency files, methods, and patterns in this ticket's tasks
- Example: "Use the `PromoCode#calculate_discount` method added in GRO-574"

**Key requirements:**
- Use the plan format template from the implementation-plan skill
- Follow vertical-slice task structure (each task includes implementation AND tests)
- Include `Repo:` field on each task for multi-repo tickets
- Validate against the plan quality checklist before finalizing

### 5.2 Technical Clarification Questions

**The user is assumed to be a deep expert in the codebase.**

See `.claude/skills/implementation-plan/SKILL.md` → "Technical Clarification Questions" for question patterns covering: Code Location, Pattern, Architecture, Database, and Authorization/Security questions.

**Goal:** Resolve ALL ambiguities before finalizing. The plan should be executable by an autonomous agent without asking follow-up questions.

### 5.3 Present Plan for Review

Display a summary of the implementation plan and use AskUserQuestion:
```
Question: "I've created an implementation plan. Would you like to review it before I update the Linear ticket?"
Header: "Review Plan"
Options:
  - Label: "Update Linear", Description: "Add the implementation plan to the ticket (Recommended)"
  - Label: "Review first", Description: "Let me see the full plan before updating"
  - Label: "Skip plan", Description: "Don't add an implementation plan"
```

### 5.4 Update Linear with Implementation Plan

Update the Linear issue description to include the implementation plan.

**Step 1: Build the updated description**

Construct the new description by combining:
1. The original description content (everything before `## Acceptance Criteria`)
2. The `## Acceptance Criteria` section (preserve existing AC unchanged)
3. A `## Implementation Plan` section with the plan content

Use the plan format template from `.claude/skills/implementation-plan/SKILL.md` → "Plan Format Template" for the structure of the `## Implementation Plan` section (Overview, Files to Modify, Implementation Tasks, Testing Strategy, Risks and Mitigations).

**Step 2: Update the Linear issue**

```
mcp__linear-server__update_issue(
  id: "TICKET-ID",
  description: "<full updated description with AC and Plan sections>"
)
```

Storing AC and implementation plan as structured sections in the description allows:
- Clear separation between description, acceptance criteria, and implementation plan
- Anyone on the team to edit it during grooming sessions
- Native markdown rendering in Linear's UI
- Easy parsing by autonomous development agents

### 5.5 Autonomous Development Checkpoint

After the implementation plan is saved to Linear, ask if the user wants to proceed with automated development:

```
Question: "Implementation plan saved. Would you like to start autonomous development?"
Header: "Start development"
Options:
  - Label: "/autopilot (experimental)", Description: "Team-based parallel execution with zero interaction"
  - Label: "No, return to menu", Description: "Return to Action Menu for additional changes"
  - Label: "Exit", Description: "Done - ticket is ready for manual development"
```

The invoked skill handles its own pre-flight branch safety check (see `.claude/skills/DEVELOPMENT.md`).

**For /autopilot specifically:** Also verify the plan has tasks with `Files:` fields (required for autopilot execution) before invoking.

**If user chooses "No, return to menu":**
- Return to the Action Menu (Section 1.5)

**If user chooses "Exit":**
- Proceed to Final Report and exit

---

## Final Report

Display completion summary:

```
═══════════════════════════════════════════════════════════════
✅ Ticket Refinement Complete
═══════════════════════════════════════════════════════════════
Ticket: TICKET-ID - [Summary]
Linear URL: [issue URL from get_issue response]

Updates Made:
  ✓ Acceptance Criteria added to ticket description
  ✓ Implementation Plan added to ticket description

Acceptance Criteria: [X] criteria defined
Implementation Steps: [Y] steps identified
Questions for Engineering: [Z] items flagged

Next Steps:
  1. Engineering reviews the implementation plan
  2. Resolve flagged engineering questions
  3. Ticket is ready for sprint planning
═══════════════════════════════════════════════════════════════
```
