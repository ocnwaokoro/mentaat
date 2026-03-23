---
name: retro
description: Run a process retrospective after completing a sprint, shipping a product, or finishing a major development phase. Captures what worked, what didn't, and why — then saves actionable rules to memory so future builds benefit. Triggered by /end-day on Fridays, or manually via "/retro". Use when a sprint ends, a product ships, or a significant build phase completes.
---

# /retro — Process Retrospective

Structured analysis of what worked and what didn't in the last development period. Produces actionable rules that get saved to memory and influence future builds.

Inspired by `docs/process/what-produced-this-success.md` from the PayMatch build.

## When to Run

- **Automatically:** `/end-day` invokes this on Fridays (weekly retro)
- **Manually:** After shipping a product, completing a sprint, or finishing a major phase
- **After failures:** When something went wrong and you want to capture why

## Inputs

The skill gathers data from multiple sources — the user doesn't need to prepare anything.

## Workflow

### Step 1: Gather Evidence

Read these files and sources automatically:

```
STANDUP.md        → daily logs for the period
DECISIONS.md      → decisions made and their reasoning
SHIPPED.md        → what actually shipped
ACTIVE.md         → what was planned vs what happened
leads.csv         → customer interactions
git log --since   → actual commits and code changes
Linear tickets    → planned vs completed vs carried over
```

### Step 2: Analyze

For each area, assess:

**Velocity:**
- Tasks planned vs completed this period
- Tickets carried over (and why)
- Unplanned work that appeared

**Quality:**
- Did the prototype-first workflow run? Did it catch issues?
- Any bugs found after shipping?
- Any decisions that had to be reversed?

**Process:**
- Which skills were used? Which were skipped?
- Did the build sequence match the plan?
- Where did time actually go vs where it was supposed to go?

**Customer:**
- Leads contacted this period
- Feedback received
- Any change in understanding of the customer

### Step 3: Present Retrospective

Display via this format:

```
═══════════════════════════════════════════════════════════════
  Mentaat Retrospective | [period: date range]
  Product: [current product]
═══════════════════════════════════════════════════════════════

What Shipped:
  • [item 1]
  • [item 2]

What Worked:
  ✓ [thing that went well — with evidence]
  ✓ [thing that went well — with evidence]

What Didn't Work:
  ✗ [thing that went wrong — with evidence]
  ✗ [thing that went wrong — with evidence]

What We Learned:
  💡 [insight that changes future behavior]
  💡 [insight that changes future behavior]

Decisions Made:
  • [count] decisions logged in DECISIONS.md
  • Key decision: [most impactful one]

Velocity:
  Planned: [X] tasks | Completed: [Y] | Carried: [Z]
  Unplanned work: [description if any]

───────────────────────────────────────────────────────────────
```

### Step 4: Extract Rules

Ask the user via AskUserQuestion:

```
Question: "Based on this retro, are there any new rules or lessons to save for future builds?"
Header: "Process Rules"
Options:
  - Label: "Yes, save a rule", Description: "I'll describe what to remember"
  - Label: "The retro captured it", Description: "No additional rules needed"
  - Label: "Skip", Description: "Nothing worth saving this time"
```

**If "Yes":**
1. Ask user to describe the rule
2. Save as a feedback memory file with:
   - The rule itself
   - **Why:** what happened that produced this lesson
   - **How to apply:** when/where this rule kicks in
3. Update MEMORY.md index

**If "The retro captured it":**
- Check if any "What We Learned" items should become feedback memories
- Propose specific items and ask user to confirm

### Step 5: Save Retrospective

Append the retro to a running file:

```bash
# Append to retros/ folder
retros/YYYY-MM-DD-[product].md
```

This creates a history of retrospectives that can be reviewed when starting similar work in the future.

### Step 6: Update Process

If any rules were saved, check if they should update existing skills:

- New prototype rule? → Update `/build-product` Phase 0.75
- New testing rule? → Update relevant PRD NFRs
- New GTM learning? → Update the product's PRD GTM section
- New workflow change? → Update CLAUDE.md working principles

Ask before making any changes: "Should I update [skill/file] with this new rule?"

## Quality Checklist

- [ ] Evidence gathered from all sources (not just memory)
- [ ] "What Worked" has at least 1 item with evidence
- [ ] "What Didn't Work" is honest (empty is suspicious)
- [ ] Rules are actionable (not "try harder" — specific, when/where/how)
- [ ] Retro saved to file for future reference
