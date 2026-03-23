---
name: codebase-exploration
description: Internal skill providing reusable codebase exploration patterns for multi-repository projects. This skill is NOT user-invocable - it's designed to be referenced by other skills (refine-ticket, autopilot, implementation-plan) that need to explore codebases systematically. Contains repository structure, worktree management, and exploration procedures.
---

# Codebase Exploration

This skill provides standardized patterns for exploring the project codebase when creating implementation plans, refining tickets, or performing autonomous development. It is designed to be referenced by other skills, not invoked directly by users.

## Repository Structure

**Read `.claude/skills/config.md` → Repositories table** for the canonical list of repos, paths, and default branches.

**Read `.claude/skills/tech-stack.md`** for language, framework, test runner, and build commands per repo.

**New branches** must always be created from the latest version of each repo's default branch (as defined in config.md).

### Determining the Target Repository

When working with a ticket or task, identify which repo(s) are affected using this priority order:

1. **Check labels:** If the ticket has a label matching a repo name from config.md, use that repo.
2. **Check title:** If no matching label, scan the ticket title for repo-related keywords. See `.claude/skills/pr-review/references/repo_patterns.md` for keyword → repo mapping (these keywords should also align with tech-stack.md).
3. **Ask the user:** If neither label nor title indicates the repo, use AskUserQuestion. Build the options dynamically from the config.md Repositories table:
   ```
   Question: "Which repository does this work apply to?"
   Header: "Repository"
   Options:
     # Generate one option per repo in config.md:
     - Label: "<Repo Name>", Description: "<Description> (<Path>, default branch: <Default Branch>)"
     # Always include:
     - Label: "Multiple", Description: "This work spans more than one repo - I'll specify"
   ```

**Note:** Work may span multiple repos (e.g., a new API endpoint + frontend UI). In that case, exploration and planning should clearly separate concerns by repo and note the correct default branch for each.

---

## Codebase Exploration Workflow

### Step 1: Determine Codebase Context

**Before exploring the codebase, determine which code state to use.**

The target repo (`TARGET_REPO`) and its default branch (`DEFAULT_BRANCH`) should be determined using the process above. Look up the path and default branch from config.md Repositories table.

#### 1a. Check Current Branch

Navigate to the target repo and check the current branch:

```bash
cd [TARGET_REPO_PATH]
git rev-parse --abbrev-ref HEAD
```

#### 1b. If Already on Default Branch

If the current branch matches `DEFAULT_BRANCH`, fetch and update:

```bash
git fetch origin [DEFAULT_BRANCH]
git merge origin/[DEFAULT_BRANCH] --ff-only  # Only if clean, otherwise use current state
```

Then proceed to Step 2 (Explore Relevant Code).

#### 1c. If on a Feature Branch

Use AskUserQuestion to determine which codebase state to use:

```
Question: "The [TARGET_REPO] repo is on branch [CURRENT_BRANCH]. Which codebase state should I use for exploration?"
Header: "Code context"
Options:
  - Label: "origin/[DEFAULT_BRANCH] (Recommended)", Description: "Use latest [DEFAULT_BRANCH] code - best for most work"
  - Label: "Current branch", Description: "Use [CURRENT_BRANCH] - for long-running feature branch work"
```

**If user chooses origin/[DEFAULT_BRANCH]:**

Fetch latest and find or create a worktree:

```bash
cd [TARGET_REPO_PATH]
git fetch origin [DEFAULT_BRANCH]
git worktree list
```

Look for an existing worktree on the default branch. The output format is:
```
/path/to/worktree  <commit-sha>  [branch-name]
```

**If a matching worktree exists:** Note the path and use it for exploration. Store it in `WORKTREE_PATH`.

**If no matching worktree exists:** Create one. Read the project name from config.md to build the path:

```bash
git worktree add /tmp/<project-name>-[TARGET_REPO]-[DEFAULT_BRANCH] origin/[DEFAULT_BRANCH]
```

Store the path as `WORKTREE_PATH`.

**Note:** All tickets share a single worktree per repo to avoid accumulating ticket-specific worktrees.

**If user chooses current branch:**

Proceed with exploration in `[TARGET_REPO_PATH]`. No worktree setup needed.

#### 1d. Multi-Repo Work

For work spanning multiple repos, repeat this process for each affected repo. Keep track of each repo's worktree path separately.

---

### Step 2: Explore Relevant Code

Use the Task tool with the Explore agent to systematically search the codebase. **Read tech-stack.md first** to understand what framework, ORM, test runner, and patterns to look for in this repo.

The exploration should identify:

**Existing Patterns:**
- Similar features or functionality already implemented
- File paths and line numbers of relevant code
- Patterns and conventions to follow
- Naming conventions and code organization

**Module Boundaries:**
- How components/modules are organized
- Dependencies between modules
- Public vs private interfaces

**Data Layer (if applicable per tech-stack.md):**
- Existing schema and migrations
- Model associations and validations
- Index requirements

**API Changes (if applicable):**
- Existing API endpoints and their patterns
- Request/response formats
- Authentication and authorization patterns

**Third-Party Integrations:**
- External services being used
- Integration patterns and error handling
- Configuration requirements

**Performance Considerations:**
- Query optimization patterns
- Caching strategies
- Async processing (check tech-stack.md for queue/job system)

**Testing Patterns (from tech-stack.md):**
- Test runner conventions and helpers
- Factory/fixture patterns
- Mock/stub patterns for external services

**Exploration Prompt Template:**

```
I need to understand the existing codebase patterns for implementing [FEATURE/TICKET].

Tech stack for this repo (from tech-stack.md): [LANGUAGE, FRAMEWORK, TEST RUNNER]

Please explore and document:

1. [SPECIFIC AREA 1] - e.g., "User model and authentication flow"
2. [SPECIFIC AREA 2] - e.g., "Payment processing integration"
3. [SPECIFIC AREA 3] - e.g., "Testing patterns and helpers"

For each finding, provide:
- File path and line numbers
- Key code snippets
- Patterns and conventions to follow

Search paths to check: [LIST RELEVANT PATHS]
```

If using a separate worktree, include the worktree path in the exploration prompt.

---

### Step 3: Document Findings

**File Path Conventions:**

Always report file paths relative to the target repo root, not absolute paths or worktree-specific paths.

**Multi-Repo Work:**

When work spans multiple repos, prefix file paths with the repo name for clarity:
- `<repo-name>: path/to/file`

**Include in Documentation:**
- File paths with line numbers
- Code snippets showing relevant patterns
- Naming conventions observed
- Dependencies identified
- Edge cases or gotchas discovered

---

## Usage Examples

### Example 1: Refine-Ticket Skill

When creating an implementation plan in the `refine-ticket` skill:

```markdown
## Stage 4: Codebase Exploration (Technical)

For detailed codebase exploration procedures, see `.claude/skills/codebase-exploration/SKILL.md`.

**In this context:**
1. Determine target repo from ticket labels/title (using config.md repos)
2. Use worktree if on feature branch (recommended for planning from default branch state)
3. Explore patterns relevant to the acceptance criteria
4. Document findings for implementation plan
```

### Example 2: Autopilot Skill

When implementing a ticket autonomously:

```markdown
## Codebase Exploration Phase

Before implementing, explore the codebase following `.claude/skills/codebase-exploration/SKILL.md`:
1. Determine target repo from ticket
2. If on feature branch, explore current branch state (no worktree needed)
3. Identify patterns and constraints
4. Proceed with implementation
```

### Example 3: Implementation-Plan Skill

When creating standalone implementation plans:

```markdown
## Exploration Guidance

See `.claude/skills/codebase-exploration/SKILL.md` for:
- Repository structure and branching conventions (from config.md)
- Worktree management for exploring default branch code
- Systematic exploration patterns (informed by tech-stack.md)
- File path reporting conventions
```

---

## Best Practices

1. **Always explore before planning** - Don't make assumptions about existing patterns
2. **Use worktrees for planning from default branch** - Keeps feature branch work isolated
3. **Document file paths with line numbers** - Makes it easy to verify patterns
4. **Follow existing conventions** - Consistency is more valuable than theoretical best practices
5. **Note edge cases and gotchas** - Surface potential issues early
6. **Test theories by reading code** - Don't assume; verify patterns by reading actual files
7. **Read tech-stack.md first** - Know the framework, test runner, and tools before exploring
