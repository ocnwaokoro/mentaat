---
name: end-day
description: Evening ritual that summarizes today's commits, task completion, decisions made, and prompts for end-of-day notes. On Fridays, shows weekly summary and checks success metrics.
---

# End Day

Evening close-out ritual for the solo founder. Summarizes the day's work and captures notes.

## Procedure

### 1. Gather data

Read these files (all paths relative to project root):
- `ACTIVE.md` — task list with completion status
- `DECISIONS.md` — check for any decisions dated today
- `SHIPPED.md` — current shipped list
- `STANDUP.md` — today's morning standup entry
- `.claude/skills/config.md` — Linear team/project values

### 2. Check git history

Run `git log --oneline --since="midnight"` to get today's commits. If no git repo exists, note "No git repo initialized yet."

Check for any tags created today: `git tag --list --sort=-creatordate` and filter for today's date.

### 3. Check Linear

Use Linear MCP tools to fetch current sprint ticket statuses (same approach as start-day). Compare with morning state if available from today's standup entry.

### 4. Determine if it's Friday

Check the current day of week. If Friday, set `IS_FRIDAY=true` for the weekly summary step.

### 5. Display dashboard

Print the following:

```
═══════════════════════════════════════════════════════════════
  Mentaat Technologies — Day End | YYYY-MM-DD
═══════════════════════════════════════════════════════════════

Today's commits:
  • [short hash] [message]
  • [short hash] [message]
  (or "No commits today")

Tasks completed today: X of Y total
  ✅ [newly completed tasks]

Decisions made today: X
  • [decision summary]
  (or "None")

───────────────────────────────────────────────────────────────
```

### 6. Friday: Invoke /retro (skip if not Friday)

If `IS_FRIDAY`:

**Do NOT run a manual weekly summary.** Instead, invoke the `/retro` skill which handles:
- Full weekly analysis (tasks, shipped items, leads, decisions)
- What worked / what didn't / what we learned (with evidence)
- Key metric check against PRD Section 16 success criteria
- Extraction of new rules → saved to memory for future builds
- Loom demo prompt
- Retrospective saved to `retros/` folder

The retro skill is the structured process retrospective. It replaces the ad-hoc Friday summary with an evidence-based analysis that feeds lessons back into the build process.

```
Invoke: /retro
```

After retro completes, continue with Step 7 (end-of-day notes).

### 7. Collect end-of-day notes

Use `AskUserQuestion`:

```
question: "End-of-day notes — what actually happened today? Anything to carry forward?"
header: "Day Close"
```

### 8. Update STANDUP.md

Append an addendum to today's standup entry:

```markdown
- End-of-day: [response]
- Commits: [count] ([brief summary])
```

### 9. Check for shipped items

If git tags were created today or the founder mentions shipping something, use `AskUserQuestion`:

```
question: "Looks like you may have shipped something today. Add an entry to SHIPPED.md?"
options: ["Yes, let me describe it", "No, nothing shipped"]
```

If yes, prompt for details and append to SHIPPED.md:

```markdown
## YYYY-MM-DD — [Product] — [What shipped]
- [Details from founder]
```

### 10. Show the ONE number and tomorrow's task

Read ACTIVE.md and the current product's PRD Section 16 to identify the single most important metric. Display it:

> **The number:** [metric name] = [current value] (target: [target value])

Then identify the next incomplete task from ACTIVE.md:

> **Tomorrow's first task:** [task name]

End with: "Good day. See you tomorrow."
