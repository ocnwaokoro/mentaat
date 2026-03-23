# Development Workflow Guide

Complete guide from project bootstrap through PRD to production-ready code.

All skills read from `config.md` (project settings) and `tech-stack.md` (codebase reality). Run the bootstrap stages once, then use the development lifecycle repeatedly.

**Global skills available (from ~/.claude/skills/):** Bencium UX design suite (controlled-ux-designer, innovative-ux-designer, impact-designer, code-conventions), design-audit, ui-design-core, ui-design-a11y, typography, human-architect-mindset, vanity-engineering-review. Superpowers suite (brainstorming, TDD, writing-plans, executing-plans, systematic-debugging, code-review, etc.) loaded via plugin.

---

## Mentaat Daily Workflow (Start Here)

```
MORNING:
  /start-day                        → Dashboard, standup, pick task

BUILDING (two modes):

  Mode A — Full pipeline (new product):
    /build-product <product-name>   → Orchestrates everything:
      Phase 0:    Read PRD, confirm
      Phase 0.5:  Preprocess PRD into build spec
      Phase 0.75: Prototype — uses Bencium UX skills for design,
                  design-audit + ui-design-a11y for audit passes
                  (HTML for apps/*, USSDify for bots/*)
      Phase 1:    Scaffold in monorepo
      Phase 2:    Create Linear tickets via /prd
      Phase 2.5:  Refine top tickets via /refine-ticket
      Phase 3:    GitHub remote setup
      Phase 4:    Build via /autopilot (ticket by ticket)
                  Uses superpowers:TDD, superpowers:writing-plans,
                  superpowers:verification-before-completion
      Phase 5:    PR review (superpowers:requesting-code-review)
                  + deploy
      (Asks approval at each checkpoint — auto-advances between)

  Mode B — Individual ticket (continuing work):
    /refine-ticket MNT-X            → Add AC + implementation plan
    /autopilot MNT-X                → Branch → TDD → commit → PR
    /pr-feedback                    → Address review comments
    /ready-for-review               → Mark PR ready

EVENING:
  /end-day                          → Log what happened, update files
  (Fridays: /end-day invokes /retro → structured retrospective)
```

**How tickets get created:**
- Sprint 1 tickets (MNT-1 to MNT-7) already exist in Linear
- Future sprints: `/build-product <name>` creates tickets from PRDs automatically
- Or manually: `/prd prds-v2/<file>.md` parses a PRD into Linear tickets
- Individual tickets: `/linear-tickets` for bugs, chores, or ad-hoc features

**How tickets get refined:**
- `/build-product` auto-refines the top 3-5 tickets during Phase 2.5
- Or manually: `/refine-ticket MNT-X` adds AC + implementation plan to any ticket
- `/autopilot` requires a refined ticket (with implementation plan) — it will tell you to run `/refine-ticket` first if the plan is missing

**Design & quality skills used throughout:**
- `superpowers:brainstorming` — before any creative work
- `bencium-controlled-ux-designer` or `bencium-innovative-ux-designer` — during prototype phase
- `design-audit` — audit pass on prototypes before production code
- `ui-design-a11y` — accessibility audit pass (WCAG 2.1 AA)
- `superpowers:test-driven-development` — during /autopilot implementation
- `superpowers:verification-before-completion` — before claiming anything is done
- `superpowers:systematic-debugging` — when tests fail
- `superpowers:requesting-code-review` — before merging
- `/retro` — weekly retrospective that saves lessons to memory

---

## Workflow Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOOTSTRAP (run once per project)              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  0a. PROJECT SETUP         → /project-setup                     │
│      └─ Q&A → generates config.md                               │
│                                                                  │
│  0b. TECH STACK DISCOVERY  → /tech-stack                        │
│      └─ Scans repos → generates tech-stack.md                   │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                    DEVELOPMENT LIFECYCLE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. PRD → TICKETS          → /prd <file-or-url>                 │
│     ├─ Parse PRD into features                                  │
│     ├─ Generate tickets with AC + test strategy                 │
│     ├─ Map Sentry integration needs                             │
│     └─ Create in Linear + save to requirements/                 │
│                                                                  │
│  2. REFINE TICKET          → /refine-ticket TICKET-ID           │
│     ├─ Add/revise Acceptance Criteria (AC)                      │
│     └─ Add Implementation Plan (codebase-aware)                 │
│                                                                  │
│  3. IMPLEMENT              → /autopilot TICKET-ID               │
│     ├─ Creates branch                                           │
│     ├─ TDD: tests from AC → code to pass them                  │
│     └─ Creates draft PR                                         │
│                                                                  │
│  4. REVIEW & ITERATE       → /pr-feedback (repeat as needed)    │
│     ├─ Fetch CI failures + reviewer comments                    │
│     ├─ Apply fixes                                              │
│     └─ Push updates                                             │
│                                                                  │
│  5. READY FOR REVIEW       → /ready-for-review                  │
│     ├─ Mark PR as ready                                         │
│     └─ Transition ticket to "In Review"                         │
│                                                                  │
│  6. MERGE & RELEASE        → Manual merge + /release-pr         │
│     ├─ Final approval + merge                                   │
│     ├─ Ticket auto-closes                                       │
│     └─ /release-pr when ready to deploy                         │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│                    MAINTENANCE                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  /tech-stack --refresh     → Re-scan after stack changes        │
│  /project-setup --update   → Update config after reorg          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Traceability Chain

Every test traces back to a business need:

```
PRD Requirement → Acceptance Criterion → Test Case → Actual Test
    (/prd)          (/refine-ticket)     (/prd)      (/autopilot)
```

`/pr-review` verifies the chain: every AC has a test, every test maps to an AC.

---

## Stage 1: Create Ticket

**Goal:** Generate Linear tickets from requirements documentation.

### When to Use

- You have new features, bugs, or chores to track
- Requirements are documented in the `requirements/` folder
- You need structured tickets for sprint planning

### Prerequisites

- Requirements defined in `requirements/` folder:
  - **Features**: `requirements/features/<feature-name>/` (epic with multiple tickets)
  - **Bugs**: `requirements/fixes/` (single tickets)
  - **Chores**: `requirements/chores/` (single tickets)

### Command

```bash
/linear-tickets
```

### What Happens

1. **Scans requirements folder** for new or updated requirements
2. **Creates Linear tickets** with proper structure:
   - Feature epics with subtasks
   - Bug tickets with reproduction steps
   - Chore tickets with clear objectives
3. **Links tickets** to correct project/milestone
4. **Assigns default labels** (Backend, Frontend, etc.)

### Output

```
✅ Tickets Created
- GRO-123: Feature - User authentication (Epic)
  - GRO-124: Backend - Create user model
  - GRO-125: Frontend - Login form component
- GRO-126: Bug - Fix null pointer in checkout flow
```

### Next Step

→ **Stage 2: Refine Ticket** for each ticket created

---

## Stage 2: Refine Ticket

**Goal:** Add acceptance criteria and implementation plans to make tickets ready for development.

### When to Use

- Ticket exists but lacks clear requirements
- You need to define what "done" means
- You're preparing tickets for autonomous development

### Prerequisites

- Ticket exists in Linear (from Stage 1 or created manually)
- You have product/stakeholder knowledge to define requirements

### Command

```bash
/refine-ticket GRO-123
```

### Workflow

#### Phase 1: Acceptance Criteria (Non-Technical)

**For:** Product managers, stakeholders, anyone defining requirements

1. **Fetch ticket** - Retrieves ticket details from Linear
2. **Check dependencies** - Shows any blocking tickets
3. **Ask clarifying questions** - Interactive Q&A to understand requirements:
   - User context: Who needs this? What problem does it solve?
   - Functional requirements: What should happen?
   - Edge cases: What could go wrong?
   - Success criteria: How do we know it's done?
   - Scope: What's explicitly NOT included?
4. **Draft acceptance criteria** - Transforms requirements into testable criteria
5. **Review and approve** - Present for stakeholder approval
6. **Update Linear** - Adds AC to ticket description

**Result:** Ticket has clear `## Acceptance Criteria` section

#### Phase 2: Implementation Plan (Technical)

**For:** Engineers creating detailed implementation plans

7. **Action Menu** appears after AC is added:
   ```
   What would you like to do with this ticket?
   - View AC
   - Create Plan  ← Choose this
   - Exit
   ```

8. **Dependency validation** - Checks blocking tickets:
   - ✅ **Pass**: All dependencies have AC + Plan OR are completed
   - ❌ **Fail**: Some dependencies lack AC/Plan → Must refine those first

9. **Codebase exploration** - Systematically explores:
   - Existing patterns and conventions
   - Files that need modification
   - Database schema changes
   - API integrations
   - Test patterns

10. **Technical clarification** - Asks expert questions:
    - Code location: Where should this go?
    - Patterns: Which existing pattern to follow?
    - Architecture: Service object or inline?
    - Database: Constraints and indexes?
    - Authorization: Who can access this?

11. **Create implementation plan** - Generates detailed plan:
    - Overview of approach
    - Files to modify table
    - Vertical-slice tasks (each with implementation + tests)
    - Testing strategy
    - Risks and mitigations

12. **Update Linear** - Adds plan to ticket description

**Result:** Ticket has both `## Acceptance Criteria` and `## Implementation Plan` sections

### Decision Points

**Q: Can I create AC if dependencies are unfinished?**
✅ **Yes** - AC creation is always allowed (shows warning)

**Q: Can I create implementation plan if dependencies are unfinished?**
❌ **No** - All dependencies must have AC + Plan first

**Q: What if I only need AC, not a plan?**
✅ **Exit after Phase 1** - Plan is optional (but required for /autopilot)

### Output Example

```
✅ Ticket Refinement Complete

Ticket: GRO-123 - Add user authentication
Linear URL: https://linear.app/groupr/issue/GRO-123

Updates Made:
  ✓ Acceptance Criteria added (8 criteria)
  ✓ Implementation Plan added (5 tasks)

Next Steps:
  1. Review plan with team
  2. Resolve any questions
  3. Ready for /autopilot or manual development
```

### Next Step

→ **Stage 3: Implement** using /autopilot

---

## Stage 3: Implement with Autopilot

**Goal:** Autonomous code implementation from branch creation to draft PR.

### When to Use

- Ticket has complete AC and Implementation Plan
- You want autonomous, hands-off development
- Ticket dependencies are completed or fully planned

### Prerequisites

- ✅ Ticket has `## Acceptance Criteria`
- ✅ Ticket has `## Implementation Plan`
- ✅ All dependencies are either:
  - Completed and merged, OR
  - Have both AC and implementation plans
- ✅ You're on a clean working tree

### Command

```bash
/autopilot GRO-123
```

### Workflow

#### Pre-Flight Safety Check (MANDATORY)

1. **Branch safety check** - Uses AskUserQuestion:
   ```
   Where should I create the feature branch?
   - Current branch (main/staging)     ← Safe if clean
   - Create worktree                   ← Safe isolation
   - Existing branch                   ← Use existing work
   ```

2. **Working tree validation** - Checks for uncommitted changes

#### Autonomous Execution

3. **Fetch ticket** - Gets ticket details via Linear MCP

4. **Verify implementation plan** - Ensures plan exists and is detailed

5. **Check dependencies** - Validates all blocking tickets:
   - ✅ **Pass**: All completed OR have AC + Plan
   - ❌ **Fail**: Shows error with options:
     - Refine blocking tickets with /refine-ticket
     - Create new ticket with /linear-tickets
     - Exit autopilot

6. **Create feature branch** - Following naming convention (e.g., `rene/gro-123-add-user-authentication`)

7. **Execute implementation** - For each task in the plan:
   - **Write test first** (TDD approach)
   - **Run test** (expect failure)
   - **Write implementation** (make test pass)
   - **Run test** (expect success)
   - **Lint and type-check** (fix any issues)
   - **Commit** (task-specific commit message)
   - **Repeat** for next task

8. **Handle failures** - If test/lint/type-check fails:
   - Retry with fix
   - Retry up to N times
   - If still blocked, mark task as BLOCKED and continue

9. **Create draft PR** - When all tasks complete:
   - Push branch to remote
   - Create draft PR via `gh` CLI
   - Link PR to Linear ticket
   - Add implementation summary

### Execution Approach

Autopilot executes all tasks sequentially using a Test-Driven Development (TDD) approach:
- Tasks are implemented one at a time
- Task order respects dependencies defined in `Depends On` fields
- Each task follows the TDD cycle: write test → run test → implement → verify → commit
- Simple, predictable execution regardless of task count

### Output Example

```
═══════════════════════════════════════════════════════════════
✅ Autopilot Complete - GRO-123
═══════════════════════════════════════════════════════════════
Branch: rene/gro-123-add-user-authentication
Commits: 5 commits created

Tasks Completed:
  ✅ Task 1: Add User model with specs
  ✅ Task 2: Add authentication controller with specs
  ✅ Task 3: Add JWT token service with specs
  ✅ Task 4: Add login endpoint with request specs
  ✅ Task 5: Add authorization middleware with specs

Tests: 42 passing
Lint: All checks passed

Draft PR Created:
  https://github.com/groupr/backend/pull/789

Next Steps:
  1. Review the code and PR
  2. Address any CI failures
  3. Use /pr-feedback for reviewer comments
═══════════════════════════════════════════════════════════════
```

### Common Issues

**Issue:** "Cannot proceed - Unfinished dependencies"
**Solution:** Use /refine-ticket on blocking tickets to add AC + Plan

**Issue:** "Cannot proceed - No implementation plan found"
**Solution:** Use /refine-ticket to add implementation plan first

**Issue:** Tests keep failing
**Solution:** Autopilot will retry. If blocked, manual intervention needed.

### Next Step

→ **Stage 4: Review & Iterate** using /pr-feedback

---

## Stage 4: Review & Iterate with PR Feedback

**Goal:** Address reviewer feedback and iterate until PR is approved.

### When to Use

- Reviewer has added comments/feedback to your PR
- CI checks have failed
- Changes requested before approval

### Prerequisites

- Draft PR exists (from Stage 3 or manual creation)
- Reviewer has added feedback to PR
- Ticket is linked to PR in Linear

### Initial Review Process

**Important:** After /autopilot creates the draft PR, the **human supervising the AI workflow** (prompt engineer/team lead) should:

1. **Review the draft PR** - Examine the code changes, commits, and tests
2. **Leave comments in the PR** - Add suggestions, questions, or requested changes directly as PR comments
3. **Run /pr-feedback** - Process these initial comments and apply fixes

This initial review round ensures the implementation meets expectations before involving other reviewers.

**Subsequent rounds** of /pr-feedback will address:
- Comments from code review agents
- Feedback from other human engineers during official code review
- CI failures that occur after changes

### Command

```bash
/pr-feedback
```

**Note:** No need to specify ticket ID - it detects the ticket from your current context or asks you to select one.

### Workflow

#### Automatic Context Detection

1. **Find related ticket** - Checks:
   - Current branch name (e.g., `rene/gro-123-*` → GRO-123)
   - Linear tickets assigned to you
   - Recent activity

2. **Fetch PR** - Uses ticket context to find associated PR(s)

3. **Fetch feedback** - Gets all PR comments from GitHub:
   - Review comments
   - Inline code comments
   - Requested changes
   - Failing CI checks

#### Feedback Processing

4. **Filter actionable items** - Ignores:
   - Resolved comments
   - Informational comments (e.g., "Looks good!")
   - Duplicate comments

5. **Group by priority**:
   - 🔴 **Critical**: CI failures (tests, lint, type errors), security concerns, blocking bugs
   - 🟡 **Important**: Requested changes, functionality issues
   - 🟢 **Nice-to-have**: Style suggestions, optimizations

6. **Present feedback summary**:
   ```
   ═══════════════════════════════════════════════════════════════
   PR Feedback Summary - GRO-123
   ═══════════════════════════════════════════════════════════════
   PR: #789 - Add user authentication

   🔴 Critical Issues (3):
     1. [CI] Backend Tests - 2 failing specs
        spec/models/user_spec.rb:25
        spec/controllers/auth_controller_spec.rb:18

     2. [CI] Frontend Lint - 1 ESLint error
        src/components/UserProfile.tsx:42

     3. [security] Password should be hashed before storage
        app/models/user.rb:15

   🟡 Requested Changes (2):
     4. [bug] Handle null email in validation
        app/models/user.rb:18

     5. [test] Add request spec for invalid credentials
        spec/requests/auth_spec.rb

   🟢 Style Suggestions (1):
     6. [refactor] Extract validation logic to separate method
        app/models/user.rb:20-25
   ═══════════════════════════════════════════════════════════════
   ```

#### Apply Fixes

7. **For each feedback item**:
   - Read the relevant code
   - Understand the issue
   - Apply the fix
   - Run tests to verify
   - Commit with descriptive message

8. **Commit strategy**:
   - One commit per logical fix
   - Clear commit messages referencing feedback
   - Example: `GRO-123 Fix: Hash password before storage (PR feedback)`

9. **Push updates**:
   ```bash
   git push origin rene/gro-123-add-user-authentication
   ```

10. **Update PR** - GitHub automatically updates the PR with new commits

#### Output

```
✅ PR Feedback Applied - GRO-123

Fixes Applied:
  ✓ Fixed 2 failing backend tests
  ✓ Fixed 1 ESLint error in UserProfile.tsx
  ✓ Added password hashing with bcrypt
  ✓ Added validation for null email
  ✓ Extracted validation logic to UserValidator
  ✓ Added edge case test for empty password
  ✓ Added request spec for invalid credentials

Files Modified: 6 files
Commits: 1 new commit
CI Status: All checks passing ✅

PR Updated: https://github.com/groupr/backend/pull/789

Next Steps:
  1. Reviewer re-reviews the changes
  2. Repeat /pr-feedback if more feedback arrives
  3. Use /ready-for-review when ready for final approval
```

### Iteration Pattern

**Typical flow:**

1. Reviewer adds feedback → **Run /pr-feedback**
2. Apply fixes and push → PR updates automatically
3. Reviewer adds more feedback → **Run /pr-feedback again**
4. Apply more fixes and push → PR updates
5. Reviewer approves → **Move to Stage 5**

**Number of iterations:** Usually 1-3 rounds, sometimes more for complex changes

### Common Scenarios

**Scenario 1: Multiple reviewers**
- /pr-feedback aggregates all feedback from all reviewers
- Groups by priority across reviewers

**Scenario 2: Failing CI**
- /pr-feedback includes CI failures as critical items
- Fixes CI issues alongside code feedback

**Scenario 3: Conflicting feedback**
- /pr-feedback presents both pieces of feedback
- You decide how to resolve (or ask reviewers)

**Scenario 4: New commits since review**
- /pr-feedback shows only unresolved feedback
- Ignores comments on old code that's been changed

### Next Step

→ **Stage 5: Ready for Review** using /ready-for-review

---

## Stage 5: Ready for Review

**Goal:** Mark PR as ready for final approval and transition ticket to "In Review" status.

### When to Use

- All reviewer feedback has been addressed
- All tests are passing
- PR is ready for final approval

### Prerequisites

- Draft PR exists with all changes applied
- All feedback addressed
- CI checks passing

### Command

```bash
/ready-for-review
```

### Workflow

1. **Find PR** - Detects PR from:
   - Current branch
   - Linear ticket context
   - Recent activity

2. **Validate PR state**:
   - ✅ All CI checks passing
   - ✅ No unresolved review comments
   - ✅ No merge conflicts

3. **Mark PR as ready**:
   ```bash
   gh pr ready <PR-NUMBER>
   ```
   (Changes from "Draft" to "Ready for review")

4. **Transition Linear ticket**:
   ```
   Status: "In Progress" → "In Review"
   ```

5. **Notify reviewers** - GitHub automatically notifies assigned reviewers

### Output

```
✅ PR Ready for Review - GRO-123

PR: #789 - Add user authentication
Status: Draft → Ready for review

Linear Ticket: GRO-123
Status: In Progress → In Review

Reviewers notified:
  - @senior-dev
  - @tech-lead

Next Steps:
  1. Await final approval
  2. Address any last-minute feedback with /pr-feedback
  3. Merge when approved
```

### Next Step

→ **Stage 6: Merge & Complete**

---

## Stage 6: Merge & Complete

**Goal:** Final approval, merge, and ticket closure.

### When to Use

- PR has been approved by required reviewers
- All discussions resolved
- Ready to deploy to production

### Prerequisites

- ✅ PR marked as "Ready for review"
- ✅ Approved by required reviewers
- ✅ All CI checks passing
- ✅ No merge conflicts

### Workflow

**Manual Process** (typically done by reviewer or tech lead):

1. **Final review** - Reviewer does final check
2. **Approve PR** - Reviewer clicks "Approve" in GitHub
3. **Merge PR** - Options:
   - Squash and merge (recommended for feature tickets)
   - Merge commit (for epic branches)
   - Rebase and merge (for clean history)
4. **Delete branch** - GitHub offers to delete branch after merge
5. **Ticket auto-closes** - Linear automatically moves ticket to "Done" when PR merges

### Output

```
✅ PR Merged - GRO-123

PR: #789 - Add user authentication
Status: Approved → Merged
Branch: rene/gro-123-add-user-authentication → Deleted

Linear Ticket: GRO-123
Status: In Review → Done

Deployed to: staging (auto-deploy)

Celebration: 🎉 Great work!
```

---

## Quick Reference

### Command Cheat Sheet

| Stage | Command | Purpose |
|---|---|---|
| 1. Create | `/linear-tickets` | Create tickets from requirements |
| 2. Refine | `/refine-ticket GRO-123` | Add AC and implementation plan |
| 3. Implement | `/autopilot GRO-123` | Autonomous code implementation |
| 4. Iterate | `/pr-feedback` | Apply reviewer feedback |
| 5. Ready | `/ready-for-review` | Mark PR ready, move ticket to review |
| 6. Merge | Manual via GitHub | Final approval and merge |

### Dependency Checking Rules

| Skill | When | Blocks If |
|---|---|---|
| `/refine-ticket` | Creating AC | Never (shows warning) |
| `/refine-ticket` | Creating Plan | Deps lack AC + Plan |
| `/autopilot` | Starting work | Deps incomplete AND lack AC + Plan |

### Ticket States in Linear

```
Backlog → In Progress → In Review → Done
  ↑           ↑            ↑          ↑
  |           |            |          |
Create    /autopilot  /ready-for- PR merge
(/linear-  starts    review      (automatic)
tickets)
```

---

## Common Workflows

### Workflow A: Simple Feature (No Dependencies)

```bash
# 1. Create ticket
/linear-tickets
# Output: GRO-123 created

# 2. Refine ticket
/refine-ticket GRO-123
# - Add AC (2-4 rounds of questions)
# - Create Plan (codebase exploration + planning)

# 3. Implement
/autopilot GRO-123
# - Creates branch, writes code, makes draft PR

# 4. Iterate (repeat as needed)
/pr-feedback
# - Reviewer adds feedback
# - Apply fixes, push updates

# 5. Ready for review
/ready-for-review
# - Mark PR ready, move ticket to review

# 6. Merge (manual)
# - Reviewer approves and merges
```

**Time estimate:** 30min-2hrs depending on complexity

---

### Workflow B: Feature with Dependencies

```bash
# 1. Create tickets (feature epic)
/linear-tickets
# Output: GRO-100 (epic), GRO-101, GRO-102, GRO-103 (subtasks)
# Dependencies: GRO-102 depends on GRO-101

# 2. Refine first ticket (no dependencies)
/refine-ticket GRO-101
# - Add AC + Plan
# - No blocking dependencies

# 3. Implement first ticket
/autopilot GRO-101
# - Completes successfully

# 4. Review first ticket
/pr-feedback
/ready-for-review
# - Merge GRO-101

# 5. Refine dependent ticket
/refine-ticket GRO-102
# - Dependency check: GRO-101 completed ✓
# - Uses GRO-101 plan as assumptions
# - Add AC + Plan

# 6. Implement dependent ticket
/autopilot GRO-102
# - Dependency check: GRO-101 completed ✓
# - Proceeds with implementation

# 7. Review and merge
/pr-feedback
/ready-for-review
# - Merge GRO-102
```

**Time estimate:** 1-4hrs depending on complexity

---

### Workflow C: Planning Without Implementation

```bash
# 1. Create ticket
/linear-tickets
# Output: GRO-123 created

# 2. Refine ticket (AC only)
/refine-ticket GRO-123
# - Add AC (non-technical)
# - Exit after Phase 1 (don't create plan)

# 3. Ticket ready for grooming/sprint planning
# - Product team reviews AC
# - Engineering estimates complexity
# - Engineering adds plan later when ready to implement

# 4. Later: Add implementation plan
/refine-ticket GRO-123
# - Select "Create Plan" from Action Menu
# - Add implementation plan

# 5. Implement manually or with /autopilot
# (same as Workflow A from step 3)
```

**Use case:** Sprint planning, backlog grooming

---

### Workflow D: Handling Blocked Dependencies

```bash
# 1. Attempt to implement
/autopilot GRO-125
# Output: ❌ Cannot proceed - Unfinished dependencies
#         GRO-123 (Backlog) - No AC, No Plan
#         GRO-124 (In Progress) - Has AC ✓, No Plan ✗

# 2. Choose: Refine blocking tickets
# Output: Please run:
#         /refine-ticket GRO-123
#         /refine-ticket GRO-124

# 3. Refine blocking tickets
/refine-ticket GRO-123  # Add AC + Plan
/refine-ticket GRO-124  # Add Plan (AC exists)

# 4. Now implement dependent ticket
/autopilot GRO-125
# Dependency check: All have AC + Plan ✓
# Proceeds with implementation
# Assumes GRO-123 and GRO-124 features are implemented
```

**Use case:** Epic features with clear dependencies

---

## Troubleshooting

### Issue: "Cannot create plan - dependencies lack AC/Plan"

**Cause:** Ticket depends on other tickets that aren't fully planned

**Solution:**
1. Run `/refine-ticket` on each blocking ticket
2. Add AC + Plan to each dependency
3. Return to original ticket and create plan

---

### Issue: "Autopilot fails with 'Unfinished dependencies'"

**Cause:** Dependencies are not completed AND lack planning

**Solution:**
- **Option A**: Complete blocking tickets first (implement, review, merge)
- **Option B**: Add AC + Plan to blocking tickets (enables planning)
- **Option C**: Remove dependency if not actually needed

---

### Issue: PR feedback keeps coming in multiple rounds

**Cause:** Normal iterative review process

**Solution:**
- Continue running `/pr-feedback` after each round
- Each round should have fewer items
- Typically resolves in 1-3 rounds

---

### Issue: CI checks failing after PR feedback applied

**Cause:** Fix introduced new issues or test failures

**Solution:**
1. Check CI logs for specific failures
2. Fix failing tests/lint locally
3. Run tests locally before pushing
4. Push fixes
5. Run `/pr-feedback` again if needed

---

### Issue: Merge conflicts during PR review

**Cause:** Other PRs merged while yours was in review

**Solution:**
1. Pull latest from default branch (staging/main)
2. Rebase your branch: `git rebase origin/staging`
3. Resolve conflicts
4. Run tests to ensure everything still works
5. Force push: `git push --force-with-lease`
6. PR updates automatically

---

## Best Practices

### 1. Ticket Creation

✅ **Do:**
- Group related work into feature epics
- Include clear problem statements
- Link related tickets

❌ **Don't:**
- Create giant monolithic tickets
- Skip requirement documentation
- Create tickets without context

---

### 2. Ticket Refinement

✅ **Do:**
- Ask clarifying questions upfront
- Define clear scope boundaries
- Create detailed implementation plans
- Check dependencies before planning

❌ **Don't:**
- Assume implementation details
- Skip edge case discussions
- Create plans without exploring codebase
- Ignore dependencies

---

### 3. Implementation

✅ **Do:**
- Trust the implementation plan
- Write tests first (TDD)
- Commit frequently with clear messages
- Let autopilot run fully

❌ **Don't:**
- Interrupt autopilot mid-execution
- Skip pre-flight safety check
- Ignore test failures
- Mix manual and automated work

---

### 4. PR Feedback

✅ **Do:**
- Address feedback promptly
- Run `/pr-feedback` after each review round
- Fix critical issues first
- Test thoroughly before pushing

❌ **Don't:**
- Cherry-pick which feedback to address
- Push untested fixes
- Ignore style/minor feedback
- Get defensive about suggestions

---

### 5. Code Review

✅ **Do:**
- Review promptly (within 24 hours)
- Be specific in feedback
- Link to relevant docs/examples
- Approve when satisfied

❌ **Don't:**
- Nitpick style excessively
- Request changes without explanation
- Block on personal preferences
- Approve without actually reviewing

---

## Advanced Topics

### Parallel Development

**Scenario:** Multiple developers working on same epic

**Approach:**
1. Create all tickets upfront with `/linear-tickets`
2. Refine tickets together (define dependencies)
3. Assign independent tickets to different developers
4. Use dependency tracking to prevent conflicts
5. Merge in dependency order

---

### Long-Running Feature Branches

**Scenario:** Epic feature spanning multiple tickets

**Approach:**
1. Create epic branch (e.g., `feature/user-authentication`)
2. Create sub-tickets (GRO-101, GRO-102, etc.)
3. Branch from epic for each ticket:
   ```bash
   git checkout feature/user-authentication
   git checkout -b rene/gro-101-user-model
   ```
4. Merge sub-tickets into epic branch
5. Merge epic branch to staging when complete

---

### Hotfixes

**Scenario:** Critical bug needs immediate fix

**Approach:**
1. Create bug ticket: `/linear-tickets` (from `requirements/fixes/`)
2. Skip detailed refinement if urgent
3. Manual implementation (faster than autopilot for tiny fixes)
4. Quick review cycle
5. Merge to production immediately
6. Backport to staging if needed

---

## Summary

This workflow ensures:
- ✅ **Clear requirements** - AC defines success criteria
- ✅ **Detailed plans** - Implementation plans guide development
- ✅ **Autonomous execution** - Autopilot handles implementation
- ✅ **Quality reviews** - PR feedback ensures code quality
- ✅ **Proper sequencing** - Dependencies prevent conflicts
- ✅ **Full traceability** - Linear tracks entire lifecycle

**Key Principle:** Each stage builds on the previous one, creating a smooth flow from idea to production.
