---
name: ready-for-review
description: Mark a draft PR as ready for review and transition the Linear ticket to In Review status. Use when the user wants to mark a PR as ready for review or submit work for review.
---

# /ready-for-review - Mark PR Ready for Review

Mark a draft PR as ready for review and transition the associated Linear ticket to In Review status.

## Sub-repo Map

**Read `.claude/skills/config.md` → Repositories table** for the list of repos, paths, GitHub repo names, and default branches. Build the sub-repo map dynamically from that table.

## Execution Steps

### Step 1: Ask for Ticket ID

Use `AskUserQuestion` to ask the user for the Linear ticket ID (e.g., `GRO-1234`).

### Step 2: Fetch Ticket and Determine Sub-repo

Fetch the ticket using `mcp__linear-server__get_issue` with the provided ID.

**Determine sub-repo from labels first:**

Check the ticket's labels against repo names from config.md (case-insensitive).

**If no matching label, check the ticket title:**

Scan the title for stack-related keywords. See `.claude/skills/pr-review/references/repo_patterns.md` and `.claude/skills/tech-stack.md` for the keyword → repo mapping.

**If sub-repo still cannot be determined:**

Stop and use `AskUserQuestion` to ask:
> "Could not determine the sub-repo from the ticket labels or title. Which sub-repo does this ticket belong to? (backend / frontend / infrastructure)"

Use the user's answer to proceed.

### Step 3: Verify Branch in Sub-repo

In the determined sub-repo directory, get the current branch:

```bash
git -C ./<subrepo> branch --show-current
```

Check if the branch name starts with the ticket ID (e.g., `GRO-1234-some-description`).

- If branch matches: proceed with that branch name.
- If branch does NOT match: stop with error:
  > "The current branch in `<subrepo>` does not match ticket `TICKET-ID`. Expected a branch prefixed with `TICKET-ID`. Please switch to the correct branch and try again."

### Step 4: Find and Mark PR as Ready

Look up the PR for the matching branch:

```bash
gh pr list --head <branch-name> --repo <github-org-from-config>/<subrepo> --json number,url,isDraft
```

- If no PR found: stop with error "No PR found for branch `<branch-name>` in `<github-org-from-config>/<subrepo>`. Create one first."
- If PR is already ready (not a draft): warn "PR #XXXX is already marked ready for review." then continue to Step 5.
- If PR is a draft: mark it ready:

```bash
gh pr ready <PR_NUMBER> --repo <github-org-from-config>/<subrepo>
```

If the command fails, report the error and stop.

### Step 5: Transition Linear Ticket to In Review

```
mcp__linear-server__update_issue with id "TICKET-ID" and state "In Review"
```

If the transition fails, note it in output but do not treat as fatal.

### Step 6: Output Confirmation

```
Sub-repo:  <subrepo>
Branch:    <branch-name>
PR #XXXX marked ready for review.
Linear TICKET-ID transitioned to In Review.

PR URL: https://github.com/<github-org-from-config>/<subrepo>/pull/XXXX
```

If Linear transition failed:
```
Sub-repo:  <subrepo>
Branch:    <branch-name>
PR #XXXX marked ready for review.
Linear TICKET-ID transition attempted (may already be In Review or later).

PR URL: https://github.com/<github-org-from-config>/<subrepo>/pull/XXXX
```

## Edge Cases

| Scenario | Action |
|----------|--------|
| No labels and title gives no hints | Ask user which sub-repo via AskUserQuestion |
| Branch in sub-repo doesn't match ticket ID | Error: switch to correct branch first |
| No PR found for branch | Error: create PR first |
| PR already ready (not draft) | Warn but still transition Linear |
| Linear transition fails | Note in output, do not fail |
| `gh` CLI not authenticated | Report authentication error and stop |
| Linear MCP tools unavailable | Skip Linear transition, note in output |
