---
name: pr-review
description: Review a pull request for code quality, bugs, security, and performance issues. Can be run locally or via the Claude PR Assistant GitHub workflow. Use when the user wants to "review this PR", "code review", "check PR quality", or perform a comprehensive code review. Analyzes all changed files against the comprehensive coding standards checklist, posts inline comments on specific issues, creates a summary comment with severity-based grouping, and uses GitHub's review API to approve or request changes based on issue severity.
---

# PR Review

## Overview

Perform comprehensive code reviews on GitHub pull requests using the project's coding standards. **Read `.claude/skills/tech-stack.md`** to understand the stack for each repo, and use the review checklist in `references/pr-code-review-checklist.md` for stack-specific patterns. Analyzes code for quality, bugs, security vulnerabilities, and performance issues. Posts inline comments on specific problems and creates a summary review with severity-based grouping (CRITICAL, HIGH, MEDIUM, LOW).

## Workflow

### 1. Identify the Pull Request

**If not already known, ask the user for:**
- PR number, OR
- Current branch name (will find PR from branch)

### 2. Fetch PR Details

Use `gh` CLI to get PR information:

```bash
# If PR number is known
gh pr view <PR_NUMBER> --json number,title,body,headRefName,baseRefName,files,url

# If using current branch
BRANCH=$(git branch --show-current)
gh pr view $BRANCH --json number,title,body,headRefName,baseRefName,files,url
```

### 3. Get Changed Files and Diff

Fetch the full diff for all changed files:

```bash
gh pr diff <PR_NUMBER>
```

Also get the list of changed files with their status:

```bash
gh pr diff <PR_NUMBER> --name-only
```

### 4. Load Review Checklist

Read the comprehensive review checklist from [references/pr-code-review-checklist.md](references/pr-code-review-checklist.md). This checklist covers:

1. Scope & Focus
2. Architecture & Design (SOLID principles)
3. Backend (Ruby on Rails) conventions
4. Frontend (React + TypeScript) conventions
5. Testing requirements
6. Code Quality & Linting
7. Dependencies
8. Environment Safety
9. Performance Issue Detection (with severity levels)
10. Bug & Race Condition Detection (with severity levels)
11. Review Process

### 5. Analyze Changed Files

For each changed file, systematically check for issues:

**Backend Files (.rb files):**
- Section 3: Backend conventions (controllers, models, services, Jbuilder)
- Section 9.1-9.3: Performance issues (N+1 queries, unbounded queries, missing indexes, Sidekiq)
- Section 10.1-10.3: Bugs and race conditions (TOCTOU, callbacks, idempotency)
- Section 10.5: Money & payment bugs

**Frontend Files (.tsx, .ts, .jsx, .js files):**
- Section 4: Frontend conventions (component design, TypeScript, state management)
- Section 9.4-9.6: React performance (re-renders, virtualization, bundle size)
- Section 10.6-10.7: React bugs (stale closures, effect dependencies, race conditions)

**Migration Files (db/migrate/*.rb):**
- Section 3.2: Migration requirements (comments, indexes, reversibility)
- Section 9.1.9: Heavy migrations without batching

**Test Files (*_spec.rb, *.test.tsx):**
- Section 5: Testing requirements

**All Files:**
- Section 1: Scope & Focus
- Section 2: Architecture & Design
- Section 6: Code Quality & Linting
- Section 8: Environment Safety
- Section 10.8: Security bugs

### 6. Classify Issues by Severity

Use [references/severity-guide.md](references/severity-guide.md) to classify each issue:

- **CRITICAL**: Data loss, security breaches, payment errors, production outages
- **HIGH**: Incorrect behavior, performance degradation under normal usage
- **MEDIUM**: Inefficiency, edge case bugs, code quality issues
- **LOW**: Suggestions for improvement

### 7. Post Inline Comments

For each issue found, post an inline comment on the specific line of code:

```bash
gh pr review <PR_NUMBER> --comment --body "INLINE_COMMENT_BODY"
```

**Comment format:**
```
[SEVERITY:LEVEL] - Section X.X.X - [Issue Title]

[Description of the issue]

[Explanation of why this is a problem]

[Suggested fix or pattern to follow]
```

**Example:**
```
PERF:HIGH - Section 9.1.1 - N+1 Query

The code is accessing `order.user.name` inside a loop without eager loading the user association. This will trigger one SQL query per order.

Use `Order.includes(:user)` to eager load the association before the loop:

\`\`\`ruby
orders = Order.includes(:user).where(status: 'pending')
orders.each { |o| puts o.user.name }
\`\`\`
```

### 8. Create Summary Comment

After posting all inline comments, create a comprehensive summary comment:

```bash
gh pr comment <PR_NUMBER> --body "$(cat <<'EOF'
## Code Review Summary

### ❌ Critical Issues (X)
[List of critical issues with line references]

### ⚠️ High Priority Issues (X)
[List of high priority issues with line references]

### 📝 Medium Priority Issues (X)
[List of medium priority issues with line references]

### 💡 Suggestions (X)
[List of suggestions]

### ✅ What Went Well
[Positive feedback on good patterns observed]

---

**Review Decision:** [APPROVE | REQUEST CHANGES | COMMENT]

**Blocking Issues:** [X Critical, X High, X Medium]

See inline comments for details on each issue.
EOF
)"
```

### 9. Submit Review Decision

Based on the blocking criteria from severity-guide.md, submit the appropriate review:

**REQUEST CHANGES (blocking) if:**
- Any CRITICAL severity issues exist
- 3+ HIGH severity issues exist
- 5+ MEDIUM severity issues exist

```bash
gh pr review <PR_NUMBER> --request-changes --body "Found blocking issues. See summary comment and inline comments for details."
```

**APPROVE if:**
- No blocking issues
- All checks passed
- Code meets quality standards

```bash
gh pr review <PR_NUMBER> --approve --body "Code looks good! ✅"
```

**COMMENT (approve with suggestions) if:**
- Only LOW or few MEDIUM severity issues
- Non-blocking feedback

```bash
gh pr review <PR_NUMBER> --comment --body "Looks good overall with some suggestions. See inline comments."
```

## GitHub Actions Integration

When running in a GitHub Actions workflow, the skill should:

1. **Trigger on:** PR marked as "ready for review" or comment containing `/review`
2. **Checkout:** PR branch and base branch for comparison
3. **Run Review:** Execute the full workflow above
4. **Block Merge:** If REQUEST CHANGES is submitted, the PR cannot be merged until issues are resolved

**Environment Variables Needed:**
- `GITHUB_TOKEN`: For gh CLI authentication
- `PR_NUMBER`: Pull request number from GitHub Actions context

## Key Patterns to Detect

### Performance Issues (PERF)

**Backend:**
- N+1 queries (accessing associations in loops without `includes`)
- `Model.all` without pagination
- Missing indexes on foreign keys and WHERE columns
- Expensive operations in request cycle (synchronous API calls)
- Unbounded job enqueueing

**Frontend:**
- Unstable references causing re-renders (missing `useMemo`/`useCallback`)
- Large lists without virtualization
- Expensive computations without `useMemo`
- Importing entire libraries instead of specific functions

### Bug Patterns (BUG)

**Backend:**
- `find_or_create_by` without unique constraint (race condition)
- Read-then-write without locking (TOCTOU)
- Missing transactions for multi-step operations
- Non-atomic counter updates
- Non-idempotent Sidekiq jobs
- Float arithmetic for currency

**Frontend:**
- Stale closures in useEffect (missing dependencies)
- Infinite re-render loops
- Missing cleanup in useEffect
- Using array index as `key`
- Unhandled promise rejections

### Security Issues (SEC)

- Mass assignment of sensitive fields
- Insecure Direct Object References (IDOR)
- Missing authorization checks
- Hardcoded secrets or API keys
- JWT tokens in localStorage without XSS protection
- SQL injection vulnerabilities

## Common Review Scenarios

### Scenario 1: New Feature PR

Focus on:
- Section 1: Changes are scoped to the ticket
- Section 2: Architecture follows SOLID principles
- Section 5: Tests cover the new functionality
- Performance patterns specific to the feature

### Scenario 2: Bug Fix PR

Focus on:
- Section 1: Fix is minimal and scoped
- Root cause is addressed, not symptoms
- Tests added to prevent regression
- No unintended side effects

### Scenario 3: Refactoring PR

Focus on:
- Section 2: Code organization improves
- No behavior changes (tests still pass)
- DRY principles applied
- File sizes reduced if over 200-300 lines

### Scenario 4: Migration PR

Focus on:
- Section 3.2: Column comments, indexes, reversibility
- Section 9.1.9: Batching for large data changes
- No breaking changes without coordination

## Tips for Effective Reviews

1. **Read the full diff first** - Understand the overall change before diving into details
2. **Check the most critical sections first** - Security, payments, race conditions
3. **Look for patterns** - If you find one N+1 query, look for others
4. **Provide examples** - Show the correct pattern, don't just point out the problem
5. **Be specific** - Reference section numbers from the checklist
6. **Balance criticism with praise** - Always include "What Went Well" section
7. **Consider context** - Small PRs deserve quick reviews; large PRs need thorough analysis

## Dependencies

This skill uses:
- **gh-cli**: For all GitHub PR operations
- **references/pr-code-review-checklist.md**: Comprehensive review standards
- **references/severity-guide.md**: Issue classification and blocking criteria
