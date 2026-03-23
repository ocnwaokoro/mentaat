---
name: pr-feedback
description: Address pull request review feedback and CI failures by fetching PR comments, checking CI status, filtering actionable items, applying fixes, and committing changes. Use when the user wants to "address PR feedback", "fix PR comments", "fix CI failures", "fix failing tests", "apply reviewer suggestions", or work on PR review feedback. Accepts PR number/URL (for direct processing), Linear ticket ID (for context-aware processing), or branch name (with repository selection). Handles multi-repository projects (backend, frontend, infrastructure).
---

# PR Feedback

## Overview

Automatically address pull request review feedback and CI failures by:
1. Fetching CI check status and parsing error logs
2. Fetching reviewer comments (both general and inline code comments)
3. Prioritizing feedback (Critical: CI failures and security issues → Important: requested changes → Nice-to-have: style suggestions)
4. Applying fixes for all feedback items
5. Running tests locally to verify fixes
6. Committing and pushing changes
7. Verifying CI checks pass after push

**Flexible Input Options:**
- **PR Number/URL**: Provide GitHub PR number (#123) or full URL for direct processing
- **Linear Ticket ID**: Provide Linear ticket ID (from config.md prefix) for context-aware PR discovery
- **Branch Name**: Provide git branch name with repository selection to find associated PR

Works across multiple repositories (backend, frontend, infrastructure).

## Workflow

### 1. Determine Input Type

Ask the user what information they have using `AskUserQuestion`:

```
Question: "What information do you have to identify the PR?"
Header: "PR Identification"
Options:
  - Label: "PR Number or URL", Description: "I have a GitHub PR number (e.g., #123) or full PR URL"
  - Label: "Linear Ticket ID", Description: "I have a Linear ticket ID (e.g., GRO-599)"
  - Label: "Branch Name", Description: "I have a git branch name"
```

**Handle user selection:**

- **PR Number or URL**: Ask the user for the PR number or URL, then proceed to Section 2 (Process PR Directly)
- **Linear Ticket ID**: Ask for the ticket ID, then proceed to Section 3 (Fetch Linear Ticket)
- **Branch Name**: Ask for the branch name and repository, then proceed to Section 4 (Find PR by Branch)

### 2. Process PR Directly (from PR Number/URL)

When the user provides a PR number or URL:

**If URL provided:**
Parse the URL to extract owner, repo, and PR number:
```bash
# URL format: https://github.com/owner/repo/pull/123
# Extract: owner="owner", repo="repo", pr_number=123
```

**If PR number provided:**
Determine the repository context:
- If already in a repository directory (backend/frontend/infrastructure), use current repo
- Otherwise, ask the user which repository (backend, frontend, or infrastructure)

**Verify the PR exists:**
```bash
cd <repository_directory>
gh pr view <PR_NUMBER> --json number,title,url,headRefName
```

Once PR is verified, skip directly to **Section 5 (Fetch CI Status and Failures)**.

### 3. Fetch Linear Ticket (from Linear Ticket ID)

Use the `linear` skill to fetch the ticket details:

```
Use mcp__linear-server__get_issue with the ticket ID
```

Examine the ticket to determine which repository(ies) are affected. See [references/repo_patterns.md](references/repo_patterns.md) for guidance on identifying repositories from ticket tags and title.

**If multiple repositories are affected:**
- List all affected repositories to the user
- Ask which repository's PR they want to address first
- Process one repository at a time

**For the selected repository:**
- Change to the appropriate repository directory:
  - Backend: `cd backend`
  - Frontend: `cd frontend`
  - Infrastructure: `cd infrastructure`

Then proceed to **Section 4 (Find PR by Current Branch)**.

### 4. Find PR by Branch

**If coming from Linear Ticket (Section 3):**
Try to find PR using the current branch:

```bash
# Get current branch
BRANCH=$(git branch --show-current)

# Find PR by branch
gh pr list --head "$BRANCH" --json number,title,url
```

**If PR found**: Proceed to Section 5 (Fetch CI Status and Failures)

**If no PR found**: Ask the user for the PR number, verify it, then proceed to Section 5

**If coming from user-provided branch name (Section 1):**
Ask the user which repository. **Build options from config.md → Repositories table:**

```
Question: "Which repository is this branch in?"
Header: "Repository"
Options:
  # Generate one option per repo from config.md:
  - Label: "<Repo Name>", Description: "<Description> (<Path>)"
```

Then find the PR using the branch name:

```bash
cd <repository_directory>

# Find PR by branch name
gh pr list --head "<BRANCH_NAME>" --json number,title,url
```

**If PR found**: Proceed to Section 5 (Fetch CI Status and Failures)

**If no PR found**: Display error message:
```
❌ No PR found for branch "<BRANCH_NAME>" in <repository>

Please verify:
  1. The branch name is correct
  2. A PR has been created for this branch
  3. The branch has been pushed to remote
```

Ask if they want to try a different branch name or switch to PR number/Linear ticket input.

### 5. Fetch CI Status and Failures

Check the status of all CI/CD checks for the PR:

```bash
gh pr checks <PR_NUMBER>
```

**Parse the output to identify:**
- ✅ Passing checks (ignore these)
- ❌ Failing checks (critical - must fix)
- ⏳ Pending checks (wait or skip)

**For each failing check:**

1. **Get the full check logs:**
```bash
gh pr checks <PR_NUMBER> --watch
# Or for specific check:
gh run view <RUN_ID> --log-failed
```

2. **Parse common error patterns:**

**Backend (RSpec/Rubocop):**
- Test failures: Extract spec file path, line number, failure message
- Rubocop violations: Extract file path, line number, offense description
- Example patterns:
  ```
  Failure/Error: expect(user.valid?).to be true
  rspec ./spec/models/user_spec.rb:25
  ```

**Frontend (Vitest/ESLint/TypeScript):**
- Test failures: Extract test name, file path, assertion failures
- ESLint errors: Extract file path, line number, rule violation
- TypeScript errors: Extract file path, line number, type error
- Build failures: Extract file path and error message
- Example patterns:
  ```
  FAIL src/components/UserProfile.test.tsx
  TypeError: Cannot read property 'name' of undefined

  error TS2339: Property 'foo' does not exist on type 'User'
  src/components/UserProfile.tsx(42,10)
  ```

**Infrastructure (Terraform):**
- Validation errors: Extract resource, error message
- Format errors: Extract file path

3. **Create structured CI failure items:**

For each CI failure, create a feedback item with:
- **Type**: `ci-failure`
- **Priority**: `critical` (always highest priority)
- **Check name**: Name of the failing check (e.g., "Backend Tests", "Frontend Lint")
- **Error summary**: Brief description of what failed
- **File path**: Where the error occurred (if applicable)
- **Line number**: Specific line (if applicable)
- **Full error**: Complete error message/stack trace
- **Suggested fix**: Based on error type (e.g., "Fix failing test", "Fix type error", "Fix linting violation")

**If no CI failures:** Proceed to Section 6 (Fetch PR Comments)

**If CI failures exist:** These will be included in the feedback list alongside reviewer comments and addressed first (highest priority).

### 6. Fetch PR Comments

Retrieve all comments from the PR:

```bash
gh pr view <PR_NUMBER> --json comments --jq '.comments[] | {author: .author.login, body: .body, createdAt: .createdAt}'
```

Also fetch review comments (inline code comments):

```bash
gh api repos/:owner/:repo/pulls/<PR_NUMBER>/comments --jq '.[] | {author: .user.login, body: .body, path: .path, line: .line, createdAt: .created_at}'
```

### 7. Filter and Prioritize Feedback

Combine CI failures (from Section 5) and reviewer comments (from Section 6) into a unified feedback list.

#### Filter Comments

Apply filtering logic to reviewer comments:

**Filter out:**
- Comments where the author is the PR author (these are notes/context for reviewers)
- Comments starting with common note patterns:
  - "Note:"
  - "FYI:"
  - "Context:"
  - "Background:"
  - "For context:"
  - "Just noting:"

**Keep:**
- All other comments from reviewers
- Comments requesting changes
- Suggestions and questions from reviewers

#### Prioritize Feedback

Group all feedback items by priority:

**🔴 Critical (address first):**
- All CI failures (tests, lint, type errors, build failures)
- Security issues flagged by reviewers
- Blocking bugs identified in review

**🟡 Important (address second):**
- Requested changes from reviewers
- Functionality issues
- Logic errors

**🟢 Nice-to-have (address last):**
- Style suggestions
- Refactoring recommendations
- Documentation improvements

Present the prioritized feedback summary to the user:

```
═══════════════════════════════════════════════════════════════
PR Feedback Summary - GRO-XXX
═══════════════════════════════════════════════════════════════
PR: #123 - Feature title

🔴 Critical Issues (3):
  1. [CI] Backend Tests - 2 failing specs
     spec/models/user_spec.rb:25
     spec/controllers/auth_controller_spec.rb:18

  2. [CI] Frontend Lint - 1 ESLint error
     src/components/UserProfile.tsx:42

  3. [security] SQL injection risk in query builder
     app/models/user.rb:56

🟡 Requested Changes (2):
  4. [logic] Handle null email in validation
     app/models/user.rb:18

  5. [test] Add request spec for invalid credentials
     spec/requests/auth_spec.rb

🟢 Style Suggestions (1):
  6. [refactor] Extract validation logic to separate method
     app/models/user.rb:20-25
═══════════════════════════════════════════════════════════════
```

### 8. Address Feedback

Work through feedback items **in priority order** (Critical → Important → Nice-to-have).

#### For CI Failures

1. **Read the error logs** - Understand what's failing and why
2. **Locate the problem** - Find the file and line causing the failure
3. **Analyze the root cause** - Determine the fix needed:
   - **Test failure**: Fix the code or update the test if behavior changed
   - **Lint error**: Fix the style violation
   - **Type error**: Fix the type mismatch or add proper types
   - **Build error**: Fix the syntax or import issue
4. **Apply the fix** - Make the necessary changes
5. **Verify locally** - Run the same check locally to confirm it passes
6. **Re-run CI** - After pushing, verify the check passes on GitHub

**Common CI fix patterns:**

- **Failing test**: Read the test, understand the expectation, fix the implementation
- **Linter violation**: Use the lint auto-fix command from tech-stack.md, or fix manually
- **Type error**: Add proper types, fix type mismatches, update interfaces
- **Build failure**: Fix syntax errors, resolve import issues, update dependencies

#### For Reviewer Comments

1. **Read the context** - Understand the file and code being referenced
2. **Analyze the feedback** - Determine what change is being requested
3. **Implement the fix** - Make the necessary code changes
4. **Verify the change** - Ensure it addresses the comment appropriately

Work through feedback systematically. For complex feedback, ask the user for clarification if needed.

### 9. Test Changes

Before committing, run appropriate tests based on the repository. **Read `.claude/skills/tech-stack.md` → Commands Quick Reference** for the exact test, lint, and build commands per repo.

```bash
# For each repo — use commands from tech-stack.md:
<test command for this repo>
<lint command for this repo>
<type-check command for this repo, if applicable>
<build command for this repo, if applicable>
```

**Important:** Ensure ALL checks that were previously failing now pass. If tests/lint/type-check still fail, fix the issues before proceeding.

### 10. Commit and Push

Create a single commit with all feedback-addressed changes:

```bash
git add .
git commit -m "<TICKET-ID> Address PR feedback

- [Brief description of changes made]
- [Another change if applicable]
"
git push
```

**Important:** Follow the commit format from `.claude/skills/config.md` → Conventions:
- Always include the ticket ID (using prefix from config.md)
- Add a short description of the changes
- Follow the Co-Authored-By convention from config.md

**Note:** Pushing will trigger CI checks to run again. Monitor the checks to ensure they pass.

### 11. Verify CI Passes

After pushing, verify that CI checks now pass:

```bash
gh pr checks <PR_NUMBER>
```

**If checks pass:** ✅ All done! Proceed to Section 12.

**If checks still fail:**
- Review the new error logs
- Apply additional fixes
- Repeat from Section 8 until all checks pass

### 12. Confirm Completion

Inform the user that the feedback has been addressed and changes have been pushed. Provide a summary of:
- Number of CI failures fixed
- Number of reviewer comments addressed
- Files modified
- Commit hash
- CI status (all checks passing)

**Example output:**
```
✅ PR Feedback Applied - GRO-123

Fixes Applied:
  ✓ Fixed 2 failing backend tests
  ✓ Fixed 1 ESLint error in UserProfile.tsx
  ✓ Added password hashing with bcrypt
  ✓ Added validation for null email

Files Modified: 5 files
Commit: abc1234

CI Status: All checks passing ✅

PR Updated: https://github.com/groupr/backend/pull/789
```

If there are remaining PRs in other repositories, ask if they want to process those next.

## Multiple PR Handling

When a Linear ticket affects multiple repositories:

1. Process one repository at a time
2. Ask the user which repository to handle first
3. Complete the full workflow for one PR before moving to the next
4. After completing one PR, ask if they want to continue with another

## Resources

### references/repo_patterns.md

Patterns for determining which repository (backend, frontend, infrastructure) a Linear ticket affects based on:
- Linear ticket tags
- Keywords in ticket title
- Default behavior when unclear

## Dependencies

This skill integrates with:
- **linear skill**: For fetching ticket details and context
- **gh-cli**: For all GitHub PR operations
- MCP Linear Server: For Linear API access
