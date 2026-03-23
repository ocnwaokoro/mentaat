---
name: linear-branch
description: Create a git branch from a Linear ticket. Use when the user asks to create a branch for a Linear ticket or start work on a Linear issue.
---

# Linear Branch Creator

This skill helps create git branches from Linear tickets following the team's naming convention.

## Linear Integration

For advanced Linear operations (MCP tools, issue management), see `.claude/skills/linear/SKILL.md`.

## Branch Naming Convention

Branch names follow the pattern: `TICKETID_short_description`

Requirements:
- Use the Linear ticket ID as-is (e.g., GRO-3045, GRO-820)
- Create a short, meaningful description from the ticket title
- Use underscores to separate words in the description
- Limit the description to use no more than 3 underscores total
- Use lowercase for the description part
- Keep it concise but descriptive

Examples:
- `GRO-3045_claude_md_precommit` (from "add CLAUDE.md, pre-commit-fix agent")
- `GRO-820_update_promo_cap` (from "Update Blue Owl promo cap exception")
- `GRO-2855_pdf_doc_state` (from "Adding new pdf document state of information")
- `GRO-3110_followup_status_broadcast` (from "Only broadcast follow up status change when status actually changed")

## Instructions

When the user asks to create a branch for a Linear ticket:

1. **Fetch Linear Ticket Information and Current User**

   Try these methods in order until one succeeds:

   **Option A: Linear MCP Tools (Preferred)**
   Use `mcp__linear-server__get_issue` to fetch the ticket details by ID.

   Also fetch the current authenticated user:
   ```
   mcp__linear-server__get_user with query "me"
   ```

   **Option B: Ask the User**
   If MCP tools are not available, ask the user to provide the ticket summary.

2. **Verify Assignment (Before Creating Branch)**

   Check the ticket's current assignee from step 1:

   - **If unassigned**: Continue (will assign after branch creation)
   - **If assigned to current user**: Continue (already yours)
   - **If assigned to someone else**: Use AskUserQuestion:
     > "TICKET-ID is currently assigned to [Other User]. Do you want to reassign it to yourself?"
     - Options: "Yes, reassign to me" / "No, abort"
     - If user declines: **Abort** - don't create the branch
     - If user confirms: Continue with branch creation
   - **If MCP tools fail** (can't fetch ticket or auth status): Use AskUserQuestion:
     > "Could not verify ticket assignment (Linear API error). Do you want to proceed anyway?"
     - Options: "Yes, proceed without Linear updates" / "No, abort"
     - If user declines: **Abort**
     - If user confirms: Continue, but skip all Linear updates in step 6

3. **Create Branch Name**
   - Take the ticket ID (preserve case, e.g., GRO-3045)
   - Convert the summary to a short description:
     - Remove articles (a, an, the) and common words
     - Use lowercase
     - Replace spaces with underscores
     - Keep it to 3-4 key words maximum (no more than 3 underscores)
   - Format: `TICKETID_short_description`

4. **Create the Branch** (skip confirmation unless name is ambiguous)

   Identify the target repository and its default branch:
   - `backend` / `frontend` → `staging`
   - `infrastructure` → `main`

   **Determine base branch** by checking the current branch:
   ```bash
   git branch --show-current
   ```

   - **If on `DEFAULT_BRANCH`** (e.g., `staging` or `main`):
     - Pull latest: `git pull origin DEFAULT_BRANCH`
     - Create branch: `git checkout -b BRANCH_NAME`

   - **If on any other branch** (`CURRENT_BRANCH`): Ask the user:
     > "Currently on `CURRENT_BRANCH`. Is this ticket a follow-up of the current branch's work?"
     - **Yes** → Create from current branch: `git checkout -b BRANCH_NAME`
     - **No** → Switch to default, update, then branch:
       ```bash
       git checkout DEFAULT_BRANCH
       git pull origin DEFAULT_BRANCH
       git checkout -b BRANCH_NAME
       ```

   Finally, push and set up upstream tracking:
   ```bash
   git push -u origin BRANCH_NAME
   ```
   Confirm the branch was created and pushed successfully with tracking configured.

5. **Display Ticket Context**
   After creating the branch, briefly summarize the ticket so the user has context:
   - Summary/title
   - Key details from description (if relevant)
   - Any files or code areas mentioned in the ticket

6. **Update Linear Status (Best Effort)**

   Skip this step entirely if the user chose "proceed without Linear updates" in step 2.

   a. **Assign to current user** (if needed):
      - Skip if already assigned to current user
      - Otherwise (unassigned or user confirmed reassignment):
        ```
        mcp__linear-server__update_issue with id "TICKET-ID" and assignee "me"
        ```

   b. **Transition to "In Progress"** (if not already):
      - Only if current status is not already "In Progress"
      - ```
        mcp__linear-server__update_issue with id "TICKET-ID" and state "In Progress"
        ```
      - If transition fails, continue silently (workflow may not support this status)

   c. **Report results:**
      - If assignment succeeded: "Assigned TICKET-ID to you"
      - If transition succeeded: "Moved TICKET-ID to In Progress"
      - If either failed or was skipped, don't report errors (silent failure)

## Worktree Mode (`--worktree`)

When invoked with `--worktree`, create a **git worktree** instead of switching branches. This keeps the current branch checked out (preserving skill definitions and in-progress work) while creating the feature branch in a separate directory.

### When to Use

Callers (e.g., `/autopilot`, `/running-start`) pass `--worktree` when they want to operate on a feature branch without leaving the current branch.

### Repository Default Branches

**Read `.claude/skills/config.md` → Repositories table** for the list of repos, paths, and default branches.

When creating worktrees, always use the correct default branch for the target repository as defined in config.md.

### Worktree Instructions

Replace **Step 4 (Create the Branch)** with the following when `--worktree` is passed:

1. Identify the target repository and its default branch (see table above). Let `DEFAULT_BRANCH` refer to the correct default branch for that repo (e.g., `staging` for backend/frontend, `main` for infrastructure).

2. Fetch the latest from origin:
   ```bash
   git -C ./REPO_PATH fetch origin DEFAULT_BRANCH
   ```

3. Determine the worktree path:
   ```
   WORKTREE=/tmp/autopilot-TICKET-ID
   ```
   (e.g., `/tmp/autopilot-GRO-3045`)

4. Create the worktree with a new branch based on `origin/DEFAULT_BRANCH`:
   ```bash
   git -C ./REPO_PATH worktree add /tmp/autopilot-TICKET-ID origin/DEFAULT_BRANCH -b BRANCH_NAME
   ```

5. Push the branch and set up upstream tracking:
   ```bash
   git -C /tmp/autopilot-TICKET-ID push -u origin BRANCH_NAME
   ```

6. Confirm the worktree was created and report the path to the caller:
   ```
   Worktree created at: /tmp/autopilot-TICKET-ID
   Branch: BRANCH_NAME (tracking origin/BRANCH_NAME, based on origin/DEFAULT_BRANCH)
   Current branch unchanged.
   ```

**All other steps remain the same** (Linear assign, transition, display context). The only difference is that a worktree is created instead of switching branches.

**Return value:** The worktree path (`/tmp/autopilot-TICKET-ID`) for downstream use by the caller.

### Worktree Cleanup

Callers are responsible for cleanup. To remove a worktree:
```bash
git worktree remove /tmp/autopilot-TICKET-ID
```

## Default Base Branch

Each repository has its own default branch — see `.claude/skills/config.md` → Repositories table. Always use the correct default branch for the target repo.

## Tips for Shortening Descriptions

- Focus on the core action and subject
- "Add new feature for X" → "add_x_feature"
- "Fix bug in Y component" → "fix_y_bug"
- "Update Z configuration" → "update_z_config"
- "Only broadcast X when Y" → "x_broadcast" or "x_when_y"
- Use common abbreviations when appropriate (config, auth, db, etc.)
- Prioritize clarity over brevity

## Troubleshooting

If Linear MCP tools return errors:
- Ensure the Linear MCP server is configured and running
- Check that your Linear API token is valid
- Try `mcp__linear-server__list_teams` to verify connectivity

If the ticket isn't found:
- Verify the ticket ID is correct (e.g., GRO-1234)
- Check if you have access to that Linear team/project
