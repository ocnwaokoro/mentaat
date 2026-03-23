---
name: project-setup
description: Bootstrap project configuration by gathering project specs and generating config.md. Use when starting a new project, onboarding to an existing project, or when the user says "setup project", "configure project", "initialize project", "bootstrap", or needs to update project configuration.
---

# /project-setup - Project Configuration Builder

Generate `.claude/skills/config.md` by gathering project specs interactively. This is the first skill to run on any new project — everything else depends on it.

## Invocation

```
/project-setup
/project-setup --update   # Re-run to update existing config
```

## Flow Overview

```
1. Detect existing state (config.md, repos, CLAUDE.md)
2. Gather project identity (name, org, Linear, GitHub)
3. Discover repositories (scan filesystem or ask)
4. Gather branch strategy and conventions
5. Detect integrations (Linear MCP, Figma MCP, Sentry, CI)
6. Build permissions list
7. Write config.md
8. Prompt: run /tech-stack to complete setup
```

---

## Stage 1: Detect Existing State

Check what already exists:

```bash
# Check for existing config
cat .claude/skills/config.md 2>/dev/null

# Check for CLAUDE.md (may have project context)
cat CLAUDE.md 2>/dev/null

# Check for common project indicators
ls -d */ 2>/dev/null
ls docker-compose*.yml 2>/dev/null
ls .github/ 2>/dev/null
```

**If config.md already has values filled in:**
- Show current config to user
- Ask what they want to update (or full re-run)
- Preserve values they don't change

**If starting fresh:** proceed to Stage 2.

---

## Stage 2: Project Identity

Use AskUserQuestion for each. Pre-fill from any detected context (CLAUDE.md, git remotes, package names).

### 2.1 Project Name

```
Question: "What is the project name?"
Header: "Project"
```

If a `package.json`, `Gemfile`, or similar exists in any subdirectory, suggest the name found there.

### 2.2 GitHub Organization

Detect from git remotes if possible:

```bash
git remote get-url origin 2>/dev/null
```

Parse org from URL. Confirm with user.

### 2.3 Linear Configuration

```
Question: "What is your Linear team name and ticket prefix?"
Header: "Linear"
```

If Linear MCP is available, try:
```
mcp__linear-server__list_teams
```
to auto-detect team name and prefix.

Also ask:
- Current Linear project name (e.g., "MVP Launch", "Sprint 1", "v2.0")

### 2.4 Sentry Configuration

```
Question: "Do you use Sentry for error monitoring?"
Header: "Sentry"
Options:
  - Label: "Yes", Description: "I'll provide org and project details"
  - Label: "Not yet", Description: "I plan to add it — include setup guidance"
  - Label: "No", Description: "We use something else or nothing"
```

If yes: ask for Sentry org slug. Per-repo Sentry projects will be gathered in Stage 3.

---

## Stage 3: Repository Discovery

### 3.1 Scan for Repositories

Look for repos by checking for `.git` directories, `package.json`, `Gemfile`, `go.mod`, `Cargo.toml`, `pyproject.toml`, `pom.xml`, etc. in immediate subdirectories:

```bash
# Find potential repos
for dir in */; do
  if [ -d "$dir/.git" ] || [ -f "$dir/package.json" ] || [ -f "$dir/Gemfile" ] || [ -f "$dir/go.mod" ] || [ -f "$dir/Cargo.toml" ] || [ -f "$dir/pyproject.toml" ]; then
    echo "$dir"
  fi
done

# Also check if root is a single repo
ls .git 2>/dev/null
```

### 3.2 Confirm and Enrich Each Repo

For each discovered repo (or if none found, ask the user), gather:

```
Question: "I found these directories that look like repositories. Confirm and add details:"
Header: "Repositories"
```

For each repo, determine:

| Field | How to detect |
|-------|---------------|
| Name | Directory name |
| Path | Relative path from project root |
| Default Branch | `git -C <path> symbolic-ref refs/remotes/origin/HEAD 2>/dev/null` or ask |
| GitHub Repo | Parse from `git -C <path> remote get-url origin` |
| Sentry Project | Ask if Sentry is enabled |
| Description | Infer from stack (e.g., "Rails API", "Next.js app") or ask |

**If the project is a monorepo** (single `.git` at root with multiple apps):
- Ask user to identify the app directories
- All share the same git remote but may have different paths

### 3.3 Handle Missing Repos

If the project doesn't have repos yet (greenfield):

```
Question: "No repositories detected. Is this a new project that needs repo setup?"
Header: "Repos"
Options:
  - Label: "Yes - I'll describe the architecture", Description: "Tell me what repos/services you plan to have"
  - Label: "I have repos elsewhere", Description: "I'll provide git URLs to clone"
  - Label: "Single repo", Description: "This directory is the repo"
```

---

## Stage 4: Branch Strategy

### 4.1 Detect Current Strategy

```bash
# Check for common branch patterns across repos
for dir in <repo_paths>; do
  git -C "$dir" branch -r 2>/dev/null | head -20
done
```

Look for: `main`, `master`, `staging`, `develop`, `release/*` branches.

### 4.2 Confirm with User

```
Question: "What branching strategy do you use?"
Header: "Branches"
Options:
  - Label: "GitHub Flow", Description: "Feature branches → main (simple)"
  - Label: "GitFlow", Description: "Feature → develop → release → main"
  - Label: "Staging Flow", Description: "Feature → staging → main (current detection)"
  - Label: "Trunk-based", Description: "Short-lived branches → main, feature flags"
  - Label: "Custom", Description: "I'll describe it"
```

### 4.3 Branch Naming

```
Question: "What branch naming convention do you use?"
Header: "Branch names"
Options:
  - Label: "{TICKET}_{description}", Description: "e.g., GRO-123_add_auth"
  - Label: "{user}/{ticket}-{description}", Description: "e.g., rene/gro-123-add-auth"
  - Label: "feature/{ticket}-{description}", Description: "e.g., feature/gro-123-add-auth"
  - Label: "Custom", Description: "I'll describe the pattern"
```

### 4.4 Commit Format

```
Question: "What commit message format do you use?"
Header: "Commits"
Options:
  - Label: "{TICKET} Description", Description: "e.g., GRO-123 Add user auth"
  - Label: "Conventional Commits", Description: "e.g., feat(auth): add login flow"
  - Label: "Free-form with ticket", Description: "Include ticket ID, no strict format"
  - Label: "Custom", Description: "I'll describe the format"
```

---

## Stage 5: Integration Detection

### 5.1 Linear MCP

Test connectivity:
```
mcp__linear-server__list_teams
```

Record: connected/not connected.

### 5.2 Figma MCP

Check if Figma MCP tools are available. Record status.

### 5.3 CI/CD

```bash
# Detect CI platform
ls .github/workflows/*.yml 2>/dev/null && echo "GitHub Actions"
ls .gitlab-ci.yml 2>/dev/null && echo "GitLab CI"
ls .circleci/config.yml 2>/dev/null && echo "CircleCI"
ls Jenkinsfile 2>/dev/null && echo "Jenkins"
```

### 5.4 Sentry

If Sentry was confirmed in Stage 2, check for existing SDK setup:

```bash
# Check for Sentry in dependencies
grep -r "sentry" */package.json */Gemfile */go.mod */requirements.txt 2>/dev/null
```

---

## Stage 6: Build Permissions

Based on discovered stack, build the recommended `allow` list for `settings.json`:

```
For each repo:
  - Detect test runner → add Bash permission (e.g., "Bash(bundle exec *)", "Bash(npm run *)")
  - Detect build tool → add permission
  - Detect linter → add permission
```

Always include:
```json
["Write", "Edit", "Bash(git *)", "Bash(mkdir *)", "Bash(rm *)"]
```

Present to user for approval before writing.

---

## Stage 7: Write Config

Populate `.claude/skills/config.md` with all gathered values using the template structure defined in that file.

**Display the generated config to the user for final review.**

Use AskUserQuestion:
```
Question: "Config looks good?"
Header: "Review"
Options:
  - Label: "Save", Description: "Write config.md"
  - Label: "Edit", Description: "I want to change something"
  - Label: "Cancel", Description: "Don't save"
```

---

## Stage 8: Next Steps

After saving config.md, display:

```
Config saved to .claude/skills/config.md

Next steps:
  1. Run /tech-stack to scan your codebase and generate tech-stack.md
  2. Run /prd with your PRD document to generate tickets
  3. Or jump into /refine-ticket if you already have tickets

Your workflow is now:
  /project-setup → /tech-stack → /prd → /refine-ticket → /autopilot → /pr-feedback → /ready-for-review
```

---

## Update Mode (`--update`)

When re-running on an existing config:

1. Read current config.md
2. Show current values
3. Ask which section to update (or "re-scan repos")
4. Only modify requested sections
5. Preserve everything else

This is useful when:
- Adding a new repo
- Changing Linear project (new sprint/phase)
- Adding Sentry to a repo
- Updating branch strategy
