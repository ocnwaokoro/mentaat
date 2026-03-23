---
name: implementation-plan
description: |
  This skill should be used when creating "implementation plan", "execution plan",
  or "development plan" for tickets. Provides best practices for creating plans
  suitable for autonomous development agents.
user-invocable: false
---

# Implementation Plan Skill

This skill provides shared patterns for creating implementation plans suitable for autonomous development agents like `/autopilot`.

**Referenced by:**
- `/refine-ticket` - When creating implementation plans for Linear tickets
- `/autopilot` - When generating or expanding execution plans

---

## Plan Philosophy

**Implementation plans must be detailed enough that an autonomous agent can execute them without asking clarifying questions.**

Plans should be:
- **Specific and actionable** - Exact file paths, method names, class names
- **Pattern-aware** - Reference existing codebase patterns with examples
- **Exhaustive** - List every file that needs modification
- **Self-contained** - All decisions resolved upfront, no ambiguities
- **Repo-aware** - Clearly indicate which repository each change belongs to (see Repository Structure below)

---

## Repository Structure and Codebase Exploration

For detailed information about:
- Multi-repository structure and paths
- Target repository determination
- Branch and worktree management
- Systematic codebase exploration procedures

See `.claude/skills/codebase-exploration/SKILL.md`.

**Quick reference for planning:** Read `.claude/skills/config.md` → Repositories table for repo names, paths, and default branches. Read `.claude/skills/tech-stack.md` for language, framework, and tooling per repo.

**For multi-repo tickets:** Clearly separate tasks by repo and prefix file paths with the repo name (e.g., `<repo-name>: path/to/file`).

---

## Dependency Checking

Before creating an implementation plan, check if the ticket has dependencies on other tickets.

### Validating Dependencies

**If the ticket lists dependencies** (e.g., "Dependencies: GRO-123, GRO-456"), validate each one:

1. Fetch dependency ticket details (via Linear MCP or user-provided information)
2. Check each dependency for:
   - **Status**: Completed, In Progress, or Backlog
   - **Has AC**: Does it have acceptance criteria?
   - **Has Plan**: Does it have an implementation plan?

### Dependency Requirements

**To proceed with planning:**
- ALL dependencies MUST have BOTH acceptance criteria AND implementation plans
- Dependencies do NOT need to be completed yet (can be In Progress or Backlog)
- The implementation plan assumes dependency work is already complete as described

**If ANY dependency lacks AC or plan:**
```
❌ Cannot Create Implementation Plan

This ticket depends on unfinished tickets that lack proper planning:

Missing AC and Plan:
- GRO-789: [summary] (Backlog)

Missing Plan only:
- GRO-456: [summary] (In Progress, Has AC ✓)

Required Actions:
1. Use /refine-ticket on each dependency to add AC and plans
2. Return to create this ticket's plan once dependencies are ready

Cannot proceed until all dependencies have well-defined AC and implementation plans.
```

### Using Dependency Plans

**When dependencies are properly planned:**
- Review the implementation plans from all dependency tickets
- **Assume all dependency features are already implemented** as described in their plans
- Use dependency implementation details as the foundation for this plan
- Reference dependency files, methods, classes, and patterns in tasks
- Example: "Use the `PromoCode#calculate_discount` method added in GRO-574 (line 45)"
- Example: "Call the `PromoCodeValidationService` created in GRO-576"

This allows sequential ticket planning without waiting for actual implementation.

---

## Technical Clarification Questions

**When the user is a codebase expert**, ask detailed technical questions to resolve ambiguities before finalizing the plan.

### Code Location Questions
- "I found similar logic in two different places — which is the correct location for this?"
- "Should this go in the existing module or a new one?"

### Pattern Questions
- "I see two different patterns for this — which should I follow?"
- "The existing tests use [pattern X] — should I follow that or use [pattern Y]?"

### Architecture Questions
- "Should this be a background job or inline processing?" (check tech-stack.md for job framework)
- "Should errors be caught and logged, or allowed to bubble up?"
- "Is there a preferred service/handler pattern for this domain?"

### Database Questions (if applicable per tech-stack.md)
- "Should this new column have a database-level NOT NULL constraint, or just model/schema validation?"
- "Should we add a database index for this query pattern?"
- "Should the foreign key have ON DELETE CASCADE or RESTRICT?"

### Authorization/Security Questions
- "Should the new action use the same auth pattern as existing actions?"
- "Should this endpoint require authentication or be public?"

**Goal:** Resolve ALL ambiguities before finalizing. The plan should be executable without follow-up questions.

---

## Plan Format Template

Use this structure for autonomous-development-ready plans. When writing to a Linear issue description, use a `## Implementation Plan` header followed by these subsections.

```markdown
### Overview
[1-2 sentences describing the technical approach]
[If multi-repo: note which repos are affected]

### Files to Modify

| Repo | File | Action | Changes |
|------|------|--------|---------|
| backend | `app/models/example.rb` | Modify | Add `filter_by_stage` scope, add `stage` validation |
| backend | `app/controllers/examples_controller.rb` | Modify | Add stage filter param to `index` action |
| backend | `spec/models/example_spec.rb` | Modify | Add specs for `filter_by_stage` scope |

**Note:** For single-repo tickets, the Repo column can be omitted.

### Database Changes (if applicable)

```ruby
# Migration: AddStageToExamples
add_column :examples, :stage, :string, null: false, default: 'pending'
add_index :examples, :stage
```

### Implementation Tasks

#### Task 1: Add `filter_by_stage` scope with specs
**Repo:** backend
**Files:** `app/queries/example_query.rb`, `spec/queries/example_query_spec.rb`
**Depends On:** -
**Acceptance Criteria:** AC-1

**Changes:**
- Add method `filter_by_stage(stage)` to `ExampleQuery` class
- Follow pattern from `filter_by_status` in same file (line ~45)
- Method signature: `def self.filter_by_stage(scope, stage)`

**Code Pattern to Follow:**
```ruby
# From app/queries/example_query.rb:45
def self.filter_by_status(scope, status)
  return scope if status.blank?
  scope.where(status: status)
end
```

**Tests:**
- `spec/queries/example_query_spec.rb`: Add context for `filter_by_stage`
- Test cases: nil stage (returns all), valid stage (filters), invalid stage (raises)

#### Task 2: Add stage filter to controller
**Repo:** backend
**Files:** `app/controllers/examples_controller.rb`, `spec/requests/examples_spec.rb`
**Depends On:** 1
**Acceptance Criteria:** AC-2

**Changes:**
[Continue with same level of detail...]

### Testing Strategy

**Unit Tests:**
- `spec/models/example_spec.rb`: [specific test cases]
- `spec/queries/example_query_spec.rb`: [specific test cases]

**Integration Tests:**
- `spec/requests/examples_spec.rb`: [specific scenarios]

**Manual Verification:**
- [Specific steps to verify functionality]

### Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| [Risk description] | [How to handle] |

### Open Questions (Resolved)
[Questions asked and answered during planning - for reference]
```

---

## Task Structure Rules

Each task MUST be a **vertical slice** containing both implementation AND tests:

**Bad (horizontal layers):**
- Task 1: Add model methods
- Task 2: Add specs for model methods

**Good (vertical slices):**
- Task 1: Add `filter_by_stage` scope with specs
- Task 2: Add stage parameter to controller with request specs

### Task Format

Each task includes a lightweight `Depends On:` line (task numbers, or `-` for none) and a `Files:` field listing ALL files it modifies. For multi-repo tickets, include a `Repo:` field.

```markdown
#### Task 1: Add `filter_by_stage` scope with specs
**Repo:** backend
**Files:** `app/queries/example_query.rb`, `spec/queries/example_query_spec.rb`
**Depends On:** -
**Acceptance Criteria:** AC-1

#### Task 2: Add stage filter to controller
**Repo:** backend
**Files:** `app/controllers/examples_controller.rb`, `spec/requests/examples_spec.rb`
**Depends On:** 1
**Acceptance Criteria:** AC-2
```

`Depends On` is only needed when a task consumes interfaces/methods created by another task but doesn't share modified files. Tasks that share files are implicitly sequential.

---

## Plan Quality Checklist

Before finalizing a plan, verify:

### Completeness
- [ ] Every file that needs modification is listed
- [ ] Every task includes specific file paths
- [ ] Test files are identified for each change
- [ ] Database changes include migration details
- [ ] Target repo is identified for each task (if multi-repo)

### Specificity
- [ ] Method names and signatures are specified
- [ ] Code patterns include file paths and line numbers
- [ ] Migration includes column types, constraints, indexes
- [ ] Test cases are described, not just "add tests"

### Pattern References
- [ ] Existing patterns are referenced with examples
- [ ] Code snippets show the pattern to follow
- [ ] File paths are repository-relative (not absolute)

### Vertical Slicing
- [ ] Every task includes both implementation AND test changes
- [ ] No task is "just tests" or "just implementation"
- [ ] Each task's `Files:` field lists ALL files it modifies
- [ ] `Depends On` captures logical dependencies where tasks don't share files

### Autonomy
- [ ] No ambiguous decisions remain
- [ ] All technical questions have been answered
- [ ] An agent could execute this without asking questions

---

## Good vs Bad Examples

### File References

**Good:**
- "Add `filter_by_stage` scope to `Docket` model following pattern from `filter_by_status` scope at line 87"
- "Update `DocketsController#index` to accept `stage` param and pass to `DocketQuery.filter_by_stage`"

**Bad:**
- "Add a filter method to the model"
- "Update the controller to handle the new parameter"

### Code Patterns

**Good:**
```
**Code Pattern to Follow:**
# From app/queries/docket_query.rb:45
def self.filter_by_status(scope, status)
  return scope if status.blank?
  scope.where(status: status)
end
```

**Bad:**
- "Follow the existing pattern"
- "Use the same approach as similar filters"

### Database Changes

**Good:**
```ruby
# Migration: AddStageIndexToDockets
add_index :dockets, :stage, where: "status = 'active'"
```

**Bad:**
- "Add an index if needed"
- "Consider adding a database index"

### Test Specifications

**Good:**
- "Add specs in `spec/models/docket_spec.rb` under existing `describe '.by_status'` context"
- "Test cases: nil stage (returns all), valid stage (filters correctly), invalid stage (raises ArgumentError)"

**Bad:**
- "Add appropriate tests"
- "Make sure to test the new functionality"

---

## Execution Plan Extensions (for /autopilot)

When creating plans for direct execution (not just Linear storage), add:

### Status Tracking
```markdown
## Status: PLANNING | IN_PROGRESS | COMPLETED | BLOCKED

### Task 1: [Title]
**Status:** 🔄 IN PROGRESS | ✅ COMPLETED | ⚠️ BLOCKED
**Commit:** [hash when completed]
```

### Ticket Context
```markdown
## Ticket Details
- **Type:** [bug/feature/chore]
- **Summary:** [Brief summary]
- **Repo:** [target repo]
- **Branch:** [branch_name]

## Problem Statement
[1-2 paragraphs explaining what needs to be done and why]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
```

### Out of Scope
```markdown
## Out of Scope
- [What this ticket does NOT include]
- [Related work for future tickets]
```
