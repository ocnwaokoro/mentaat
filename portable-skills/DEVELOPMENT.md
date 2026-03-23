# Skill Development Guide

This guide documents best practices for creating and maintaining skills in this project.

---

## Before Creating or Modifying Skills

**CRITICAL:** Always inspect all existing skills before creating new ones or modifying existing ones. This ensures:
- Logic is properly factored (no duplication)
- Shared patterns are consolidated into background knowledge skills
- Skills reference each other appropriately

```bash
# List all skills
ls -la .claude/skills/*/SKILL.md

# Search for related content
grep -r "pattern-you-need" .claude/skills/
```

---

## When to Extract Content into Skills

### Extract to a skill when:
- Content is **domain-specific** (Linear, GitHub, database constraints)
- Content is **referenced by multiple skills** (review criteria, implementation plans)
- Content is **>50 lines** and self-contained
- Content needs to be **kept in sync** across multiple places

### Keep in CLAUDE.md when:
- Content is **project-wide context** (architecture, module structure)
- Content is **always needed** (code style, commit message format)
- Content is **brief** (<20 lines) and foundational
- Content is **setup/commands** (how to run the app, tests)

---

## Skill Types

### User-Invocable Skills
- Invoked with `/skill-name`
- Have a clear entry point and workflow
- Produce visible output or take action

**Examples:** `/autopilot`, `/linear-branch`, `/ready-for-review`

**Frontmatter:**
```yaml
---
name: skill-name
description: Brief description shown in skill list
---
```

### Background Knowledge Skills
- NOT directly invokable by users (hidden from `/` menu)
- Provide shared knowledge/patterns for other skills
- Claude can auto-load them when relevant based on description trigger phrases

**Examples:** `linear`, `codebase-exploration`, `implementation-plan`

**Frontmatter:**
```yaml
---
name: skill-name
description: |
  This skill should be used when the user mentions "trigger phrase 1",
  "trigger phrase 2", or works with [domain]. Provides [what it offers].
user-invocable: false
---
```

### Official Frontmatter Fields

Per the [Claude Code skills spec](https://code.claude.com/docs/en/skills):

| Field | Required | Description |
|-------|----------|-------------|
| `name` | No | Display name (defaults to directory name). Lowercase, numbers, hyphens only. |
| `description` | Recommended | What the skill does and when to use it. Use third-person with trigger phrases. |
| `user-invocable` | No | Set to `false` to hide from `/` menu. Default: `true`. |
| `disable-model-invocation` | No | Set to `true` to prevent Claude from auto-loading. Default: `false`. |
| `context` | No | Set to `fork` to run in isolated subagent context. |
| `allowed-tools` | No | Restrict tools Claude can use when skill is active. |
| `argument-hint` | No | Hint shown during autocomplete (e.g., `[ticket-id]`). |

---

## Skill Structure

### File Location
```
.claude/skills/
├── skill-name/
│   └── SKILL.md          # Main skill file
├── another-skill/
│   ├── SKILL.md          # Main skill file
│   └── helper-script.rb  # Optional supporting files
└── DEVELOPMENT.md        # This guide
```

### SKILL.md Structure

```markdown
---
name: skill-name
description: Brief description with trigger phrases
user-invocable: false  # For background knowledge skills
---

# Skill Title

Brief overview of what this skill does.

## Section 1: Core Content

Main content organized logically.

## Section 2: Patterns/Examples

Code examples, patterns, checklists.

---

## Usage by Other Skills

How other skills should reference this one.
```

---

## Cross-Referencing Skills

### How to Reference Internal Skills

```markdown
## Database Constraints

See `.claude/skills/codebase-exploration/SKILL.md` for the full guide.
```

### When to Reference vs Duplicate

**Reference** (preferred):
- Content that may change independently
- Detailed patterns with many examples
- Content maintained by domain experts

**Inline** (acceptable):
- One-line rules or quick tips
- Content that won't change
- Critical rules that must always be visible

---

## Background Knowledge Skills

| Skill | Purpose | Used By |
|-------|---------|---------|
| `config.md` | Project config: repos, Linear, GitHub, Sentry, conventions | ALL skills |
| `tech-stack.md` | Auto-generated stack doc: languages, frameworks, commands | autopilot, pr-feedback, pr-review, implementation-plan, prd |
| `linear` | Linear MCP patterns, custom fields, ADF conversion | autopilot, refine-ticket, linear-branch, prd |
| `codebase-exploration` | Codebase exploration patterns for multi-repo projects | autopilot, refine-ticket, implementation-plan |
| `implementation-plan` | Plan structure and quality checklist | autopilot, refine-ticket |
| `acceptance-criteria` | AC writing best practices | refine-ticket, prd |

---

## Branch Safety for Skills That Make Changes

Skills that spawn agents to edit files, commit, or push MUST guard against operating on the wrong branch. This section is the **single source of truth** — individual skills reference this pattern rather than duplicating it.

### Mode Definitions

| Mode | WORKTREE_MODE | WORKTREE value | When to use |
|------|---------------|----------------|-------------|
| Branch | `branch` | repo root | Default — switch branches in place |
| Worktree | `worktree` | `/tmp/autopilot-TICKET-ID` | Work directly in the worktree directory |
| Remote worktree | `remote-worktree` | `/tmp/autopilot-TICKET-ID` | Skill development — stay in CWD, operate on worktree remotely |

**Behavioral difference:** In `worktree` mode, the agent `cd`s into the worktree and works from there. In `remote-worktree` mode, the agent stays in the current working directory and operates on the worktree via absolute paths and `git -C $WORKTREE`.

### Pre-Flight Branch Safety Check

**This is the canonical procedure. Skills MUST use AskUserQuestion — no auto-selection, even on master.**

1. Detect current branch:
```bash
git branch --show-current
```

2. **Always** present the user with a choice via AskUserQuestion:
```
AskUserQuestion(
  questions: [{
    question: "You're on branch [CURRENT_BRANCH]. How should I create the feature branch for TICKET-ID?",
    header: "Branch mode",
    options: [
      { label: "Switch branches", description: "Check out the new branch locally — will leave [CURRENT_BRANCH]" },
      { label: "Worktree", description: "Create a worktree at /tmp/autopilot-TICKET-ID — keeps your current branch unchanged" },
      { label: "Remote worktree (skill development)", description: "Same as local worktree, but operates without leaving your current working directory" }
    ],
    multiSelect: false
  }]
)
```

3. If "Switch branches" → `WORKTREE_MODE=branch`

4. If "Worktree" → `WORKTREE_MODE=worktree`

5. If "Remote worktree" → `WORKTREE_MODE=remote-worktree`

6. Record `WORKTREE_MODE` for downstream use.

### Branch Creation by Mode

- **`branch`:** Call `/linear-branch TICKET-ID`, then `WORKTREE=$(git rev-parse --show-toplevel)`
- **`worktree` or `remote-worktree`:** Call `/linear-branch TICKET-ID --worktree`, then `WORKTREE=/tmp/autopilot-TICKET-ID`

Save the worktree path to the plan file:
```markdown
## Worktree
Path: <value of $WORKTREE>
Mode: branch | worktree | remote-worktree
```

### Cleanup by Mode

- **`branch`:** No worktree cleanup needed.
- **`worktree` or `remote-worktree`:** `git worktree remove /tmp/autopilot-TICKET-ID`

### Skills Requiring This Check

- `/autopilot` — always ask before branch creation
- `/refine-ticket` — delegates to invoked skill (no direct check needed)

### Propagation to Subagents

Pass `WORKTREE` and `WORKTREE_MODE` in subagent prompts. In `worktree` mode, agents `cd` into the worktree and work from there. In `remote-worktree` mode, agents stay in CWD and use `$WORKTREE/path` and `git -C $WORKTREE` for all operations.

---

## Adding a New Skill

1. **Check existing skills** - Is there already a skill for this domain?
2. **Decide skill type** - User-invocable or internal?
3. **Create directory** - `.claude/skills/new-skill/SKILL.md`
4. **Write content** - Follow the structure above
5. **Add cross-references** - Update skills that should reference the new one
6. **Update CLAUDE.md** - If extracting content, replace with reference
7. **Update Confluence** - Keep the summary page in sync (see below)

---

## Context Compression Resilience

Long skills risk having their later sections pruned when the conversation approaches context limits. Claude Code automatically compresses prior messages, and skill content loaded early in the conversation is especially vulnerable. If a critical instruction only appears at the bottom of a 500+ line skill, it may not survive to be read when it matters most.

### Lessons learned

The `/autopilot` skill had a "Completion Gate" checklist at line ~630 of a ~800-line file requiring a mandatory final step. During real usage, context exhaustion from implementation caused this section to be compressed away, and the agent skipped the step entirely — silently producing an incomplete workflow.

### Guidelines

**Put critical gates at the top of the section they govern, not the bottom.** If Stage 3 has four mandatory steps, the checklist enforcing them should be a preamble the agent reads *before* starting Stage 3, not an afterword it might never reach.

**Keep skills concise.** Every line competes for context space. Remove:
- ASCII diagrams that duplicate section headers
- Step-by-step explanations of concepts the agent already knows (e.g., what TDD is)
- Standalone sections that repeat inline guidance (e.g., a separate "Error Recovery" section that restates what each subsection already covers)
- Tips, troubleshooting, and state management templates the agent can infer

**Front-load the most important instructions.** The top ~200 lines of a skill are the most durable. Place mandatory behaviors, autonomy boundaries, and completion requirements there. Put reference material (error templates, report formats) toward the bottom — these are less harmful to lose.

**Prefer delegation over prescription.** Instead of a 12-step protocol for team coordination, describe the desired outcome and let the agent use native capabilities (TaskList, task dependencies, worker autonomy). Shorter instructions survive compression better and leave room for the agent to adapt.

---

## Skill Quality Checklist

- [ ] Frontmatter includes name and description
- [ ] Background knowledge skills use `user-invocable: false`
- [ ] Description includes trigger phrases for auto-loading (third-person format)
- [ ] Content is self-contained (can be understood without other context)
- [ ] References to other skills use relative paths
- [ ] No duplication of content from other skills
- [ ] Code examples are tested and accurate
- [ ] "Usage by Other Skills" section included for background knowledge skills
