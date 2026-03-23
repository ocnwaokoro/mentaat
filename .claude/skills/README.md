# Claude Code Skills — Full Development Workflow

A portable, config-driven skill system for Claude Code that takes you from PRD to production. Stack-agnostic — configure once, use everywhere.

## Quick Start

```bash
# 1. Copy the skills folder into your project
cp -R portable-skills/ your-project/.claude/skills/

# 2. Copy the example settings
cp portable-skills/settings.json.example your-project/.claude/settings.json
cp portable-skills/settings.local.json.example your-project/.claude/settings.local.json

# 3. Start Claude Code in your project directory, then run:
/project-setup          # Answer questions about your project → generates config.md
/tech-stack             # Scans your repos → generates tech-stack.md

# 4. You're ready. Full workflow:
/prd path/to/prd.md     # PRD → tickets with AC + test strategies
/refine-ticket TICKET-1  # Add implementation plan
/autopilot TICKET-1      # Autonomous TDD implementation → draft PR
/pr-feedback             # Apply reviewer feedback + fix CI
/ready-for-review        # Mark PR ready, transition Linear ticket
```

## Architecture

```
config.md (human decisions — project, repos, Linear, Sentry, conventions)
    |
    v
/project-setup ──writes──> config.md
    |
    v
/tech-stack ──scans repos──> tech-stack.md (languages, frameworks, commands)
    |
    v
ALL OTHER SKILLS read config.md + tech-stack.md
    (no hardcoded stack values anywhere)
```

### Two Config Files, Two Purposes

| File | Source | Contains | Changes When |
|------|--------|----------|--------------|
| `config.md` | `/project-setup` (Q&A) | Project name, repos, Linear team/prefix/project, GitHub org, Sentry config, branch strategy, conventions | You reorg, change tools, or start a new project phase |
| `tech-stack.md` | `/tech-stack` (codebase scan) | Languages, frameworks, test runners, linters, build commands, Docker services, monitoring | You add dependencies, change tooling, or update your stack |

Every skill that previously hardcoded things like `bundle exec rspec`, `gropupr/backend`, or `GRO-123` now reads from these two files.

## Full Workflow

```
BOOTSTRAP (once per project)
  /project-setup  →  config.md
  /tech-stack     →  tech-stack.md

DEVELOPMENT LIFECYCLE (repeat per feature)
  /prd            →  PRD → Linear tickets with AC + test mapping + Sentry tasks
  /refine-ticket  →  Add implementation plan (codebase-aware)
  /autopilot      →  TDD implementation → draft PR
  /pr-feedback    →  Fix CI + reviewer comments (repeatable)
  /ready-for-review → Mark PR ready, move ticket to "In Review"
  Manual merge    →  Ticket auto-closes

MAINTENANCE
  /tech-stack --refresh   →  Re-scan after stack changes
  /project-setup --update →  Update config after reorg
```

### Traceability Chain

Every test traces back to a business need:

```
PRD Requirement → Acceptance Criterion → Test Case → Actual Test File
    (/prd)          (/refine-ticket)     (/prd)      (/autopilot)
```

`/pr-review` checks the chain: every AC must have a corresponding test.

## Skill Reference

### Bootstrap Skills

| Skill | Command | Purpose |
|-------|---------|---------|
| **project-setup** | `/project-setup` | Q&A to build config.md — repos, Linear, GitHub, Sentry, conventions |
| **tech-stack** | `/tech-stack` | Scan codebase and generate tech-stack.md from reality |

### Development Skills

| Skill | Command | Purpose |
|-------|---------|---------|
| **prd** | `/prd <file>` | Parse PRD → generate Linear tickets with AC, test strategy, Sentry tasks |
| **linear-tickets** | `/linear-tickets` | Create tickets from requirements/ folder (features, bugs, chores) |
| **refine-ticket** | `/refine-ticket ID` | Add acceptance criteria + implementation plan to a ticket |
| **autopilot** | `/autopilot ID` | Autonomous TDD implementation: branch → code → tests → draft PR |
| **linear-branch** | `/linear-branch ID` | Create a branch from a Linear ticket |

### Review & Release Skills

| Skill | Command | Purpose |
|-------|---------|---------|
| **pr-review** | `/pr-review` | Comprehensive code review against coding standards |
| **pr-feedback** | `/pr-feedback` | Fetch and apply reviewer feedback + CI fixes |
| **ready-for-review** | `/ready-for-review` | Mark draft PR as ready, transition ticket to "In Review" |
| **release-pr** | `/release-pr` | Create versioned release PR (staging → main) |

### Background Knowledge (not user-invocable)

| Skill | Purpose | Used By |
|-------|---------|---------|
| **config.md** | Project settings — all skills read this | Everything |
| **tech-stack.md** | Auto-generated stack doc | autopilot, pr-feedback, pr-review, implementation-plan, prd |
| **codebase-exploration** | Patterns for multi-repo exploration | autopilot, refine-ticket, implementation-plan |
| **implementation-plan** | Plan format, quality checklist, task structure | autopilot, refine-ticket |
| **acceptance-criteria** | AC writing patterns and quality checklist | refine-ticket, prd |
| **linear** | Linear MCP reference | All Linear-interacting skills |
| **gh-cli** | GitHub CLI reference | pr-review, pr-feedback, release-pr, ready-for-review |

### Utility Skills

| Skill | Command | Purpose |
|-------|---------|---------|
| **implement-design** | `/implement-design` | Figma → production code (requires Figma MCP) |
| **skill-creator** | `/skill-creator` | Create, edit, evaluate, and optimize skills |

## File Structure

```
.claude/skills/
├── README.md                    # This file
├── config.md                    # Project config (generated by /project-setup)
├── tech-stack.md                # Tech stack doc (generated by /tech-stack)
├── WORKFLOW_GUIDE.md            # Full lifecycle documentation
├── DEVELOPMENT.md               # Skill authoring guide
│
├── project-setup/SKILL.md       # Bootstrap: Q&A → config.md
├── tech-stack/SKILL.md          # Bootstrap: scan → tech-stack.md
├── prd/SKILL.md                 # PRD → tickets pipeline
│
├── linear-tickets/              # Ticket creation
│   ├── SKILL.md
│   └── references/
│       ├── csv-format.md
│       ├── ticket-templates.md
│       └── linear-import-guide.md
│
├── refine-ticket/               # Ticket refinement (AC + plan)
│   ├── SKILL.md
│   └── references/
│       ├── conversation-style.md
│       └── error-handling.md
│
├── autopilot/SKILL.md           # Autonomous TDD implementation
├── linear-branch/SKILL.md       # Branch creation from ticket
│
├── pr-review/                   # Code review
│   ├── SKILL.md
│   └── references/
│       ├── pr-code-review-checklist.md
│       └── severity-guide.md
│
├── pr-feedback/                 # Apply review feedback
│   ├── SKILL.md
│   └── references/
│       └── repo_patterns.md
│
├── ready-for-review/SKILL.md    # Mark PR ready
├── release-pr/SKILL.md          # Release PR creation
│
├── acceptance-criteria/SKILL.md # AC patterns (background)
├── implementation-plan/SKILL.md # Plan patterns (background)
├── codebase-exploration/SKILL.md# Exploration patterns (background)
├── linear/SKILL.md              # Linear MCP reference (background)
├── gh-cli/SKILL.md              # GitHub CLI reference (background)
│
├── implement-design/SKILL.md    # Figma → code
└── skill-creator/               # Skill authoring tools
    ├── SKILL.md
    ├── scripts/
    ├── agents/
    └── ...
```

## How Skills Work in Claude Code

Skills are markdown files that extend Claude's capabilities within a project. They live in `.claude/skills/` and are loaded based on:

1. **User invocation** — typing `/skill-name` triggers the skill directly
2. **Auto-loading** — Claude reads the skill's `description` field and loads it when relevant to the conversation
3. **Cross-reference** — skills reference each other via relative paths (e.g., "see `.claude/skills/codebase-exploration/SKILL.md`")

### Skill Anatomy

```markdown
---
name: skill-name
description: When to use this skill. Include trigger phrases.
user-invocable: false  # Optional: hide from /slash menu
---

# Skill Title

Instructions Claude follows when the skill is active.
```

- **`name`** — identifier (lowercase, hyphens)
- **`description`** — tells Claude WHEN to load it (trigger phrases matter)
- **`user-invocable: false`** — for background knowledge skills that other skills reference

### Settings Files

- **`.claude/settings.json`** — project-level permissions (committed to git, shared with team)
- **`.claude/settings.local.json`** — local-only permissions (gitignored, personal)
- **`~/.claude/settings.json`** — global user settings

Permissions control which tools Claude can use autonomously (e.g., `Bash(git *)`, `Bash(npm run *)`). `/project-setup` generates recommended permissions based on your stack.

## Prerequisites

- **Claude Code CLI** installed and configured
- **Linear MCP server** connected (for ticket management skills)
- **GitHub CLI (`gh`)** authenticated (for PR skills)
- **Figma MCP server** (optional, for `/implement-design`)

## Adapting to a New Project

1. Copy the skills folder to your new project's `.claude/skills/`
2. Run `/project-setup` — it auto-detects repos, remotes, and integrations
3. Run `/tech-stack` — it scans your codebase and generates the stack doc
4. The `pr-code-review-checklist.md` may need manual adjustment for your stack's conventions (sections 3-6, 9-10 are the most stack-specific)
5. Everything else adapts automatically through config.md and tech-stack.md

## Superpowers Integration

These skills are designed to work alongside the Superpowers skill pack. Key integrations:

- **brainstorming** — fires before `/prd` or any creative feature work
- **writing-plans** — complements `/refine-ticket` implementation planning
- **executing-plans** — drives `/autopilot` execution with review checkpoints
- **test-driven-development** — the TDD discipline `/autopilot` follows
- **verification-before-completion** — ensures work is verified before claiming done
- **dispatching-parallel-agents** — enables parallel task execution in `/autopilot`
- **systematic-debugging** — used when `/autopilot` encounters test failures
- **code-reviewer** — complements `/pr-review` with deeper analysis

## Contributing / Editing Skills

See `DEVELOPMENT.md` for:
- Skill types (user-invocable vs background)
- Frontmatter fields and their meanings
- Cross-referencing patterns
- Context compression resilience guidelines
- Quality checklist for new skills
