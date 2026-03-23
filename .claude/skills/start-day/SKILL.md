---
name: start-day
description: Morning ritual that shows sprint status, yesterday's standup, roadmap milestone, Linear tickets, leads needing follow-up, and recent decisions. Prompts for today's standup entry.
---

# Start Day

Morning orientation ritual for the solo founder. Produces a dashboard then collects today's standup.

## Procedure

### 1. Gather data

Read these files (all paths relative to project root):
- `ACTIVE.md` — sprint number, product, dates, task list (checked/unchecked)
- `STANDUP.md` — find the most recent entry (yesterday or last working day)
- `ROADMAP.md` — find the current milestone and its target date
- `DECISIONS.md` — extract the last 3 decisions
- `leads.csv` — parse for any row where `next_action` date is today or earlier
- `.claude/skills/config.md` — get Linear Team and Linear Project values

### 2. Check Linear

Use the Linear MCP tools to fetch tickets for the current sprint:
- Call `mcp__linear__list_issues` filtered to the team/project from config.md
- Categorize each ticket as Todo, In Progress, or Done using `mcp__linear__get_issue_status`
- If config.md has no Linear Team set, skip this step and note "Linear not configured"

### 3. Calculate dates

- Days remaining in sprint = sprint end date minus today
- Days until current milestone = milestone target date minus today

### 4. Display dashboard

Print the following (substitute real values):

```
═══════════════════════════════════════════════════════════════
  Mentaat Technologies — Day Start | YYYY-MM-DD
═══════════════════════════════════════════════════════════════

Sprint: N | Product: [name] | Days left: X
Milestone: [name] | Target: [date] | X days away

Tasks (from ACTIVE.md):
  ✅ [completed task]
  🔄 [in progress task — if any Linear ticket is "In Progress"]
  ⬜ [todo task]

Linear tickets:
  [status emoji] [ticket ID] — [title]
  (or "Linear not configured" / "No tickets found")

Leads needing follow-up:
  📞 [name] — [product] — due [date]
  (or "No follow-ups due")

Last 3 decisions:
  • [date] — [summary]
  • [date] — [summary]
  • [date] — [summary]

Yesterday's standup:
  Yesterday: [text]
  Today: [text]
  Blocked: [text]
  (or "No standup entry found for yesterday")

───────────────────────────────────────────────────────────────
```

### 5. Collect today's standup

Use `AskUserQuestion` to prompt the founder:

```
question: "What's your standup for today?"
header: "Daily Standup"
```

Guide them to answer three lines:
- **Yesterday:** What did you actually accomplish?
- **Today:** What will you work on?
- **Blocked:** Anything in the way?

### 6. Append standup to STANDUP.md

Add today's entry at the bottom of STANDUP.md in this format:

```markdown
## YYYY-MM-DD
- Yesterday: [response]
- Today: [response]
- Blocked: [response]
```

### 7. Recommend first task

Identify the highest-priority incomplete task from ACTIVE.md (first unchecked item in the numbered list). Present it:

> **Recommended first task:** [task name]
>
> Ready to start? Should I run `/build-product` or `/autopilot` on this?

Use `AskUserQuestion` with options:
- "Run /build-product on [task]"
- "Run /autopilot on [task]"
- "I'll pick my own task"
- "Just the dashboard, thanks"

If the founder picks one of the first two, invoke the corresponding skill.
