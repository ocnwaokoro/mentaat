---
name: validate-prd
description: Validate a PRD or product idea against the disruptive innovation framework from Obinna's thesis. Scores against all 8 criteria, checks Nigeria-specific readiness, and flags gaps.
user_invocable: true
---

# Validate PRD Against Disruptive Innovation Framework

You are validating a PRD or product concept against the disruptive innovation framework derived from the thesis "Disruptive Innovation: The Path to Prosperity for Nations."

## Steps

1. **Load the framework files.** Read these files from the project directory:
   - `thesis-framework/framework/8-criteria-checklist.md` — the 8 criteria to score against
   - `thesis-framework/validation/prd-review-checklist.md` — the full review checklist
   - `thesis-framework/validation/disqualification-criteria.md` — fast filter for non-disruptive ideas
   - `thesis-framework/nigeria-context/mnc-failure-patterns.md` — anti-patterns to check
   - `thesis-framework/nigeria-context/infrastructure-realities.md` — infrastructure reality check
   - `thesis-framework/nigeria-context/government-leverage.md` — policy opportunity check

2. **Identify the PRD to validate.** If the user specified a PRD by name or path, read it. If the user described a product idea in conversation, use that. If unclear, ask.

3. **Run the disqualification filter first.** Check the idea against `disqualification-criteria.md`. If it's clearly not disruptive, say so — but note that the idea may still be valuable as a different type of innovation. Ask the user if they want to continue the analysis anyway.

4. **Score against all 8 criteria.** For each criterion in `8-criteria-checklist.md`:
   - Rate: **Strong fit**, **Partial fit**, **No fit**, or **Unknown**
   - Provide a 1-2 sentence justification
   - If Partial or No fit, suggest what would need to change

5. **Run the PRD review checklist.** Go through every checkbox in `prd-review-checklist.md`. Flag items that are missing or weak.

6. **Check for MNC failure patterns.** Compare the product strategy against `mnc-failure-patterns.md`. Flag any matches.

7. **Assess Nigeria readiness.** Using `infrastructure-realities.md` and `government-leverage.md`, evaluate:
   - What infrastructure does this product need that doesn't exist?
   - Is there a government engagement angle?
   - Is the business model resilient to Naira volatility?

8. **Produce the summary.** Use this format:

```
## Disruption Validation: [Product Name]

### Quick Filter
[Pass/Fail] — [1 sentence on why]

### 8 Criteria Score
| # | Criterion | Rating | Notes |
|---|-----------|--------|-------|
| 1 | Overlooked segment | [rating] | [notes] |
| 2 | "Worse" but good enough | [rating] | [notes] |
| 3 | Market foothold | [rating] | [notes] |
| 4 | Value chain reimagined | [rating] | [notes] |
| 5 | Scale core solution | [rating] | [notes] |
| 6 | Different cost structure | [rating] | [notes] |
| 7 | Non-consumption → growth | [rating] | [notes] |
| 8 | Can mature | [rating] | [notes] |

**Overall: X/8 strong fit, X/8 partial, X/8 gaps**

### MNC Anti-Pattern Check
[Any matches flagged]

### Nigeria Readiness
[Infrastructure, government, currency assessment]

### Critical Gaps
[Ranked list of what needs the most work]

### Recommendation
[Proceed / Revise / Rethink — with specific guidance]
```

## Important Notes
- Be honest, not encouraging. The value of this tool is in catching blind spots.
- "Not disruptive" is not an insult — many great businesses are sustaining innovations. Name it correctly.
- Always suggest what WOULD make the idea more disruptive, even if the current version isn't.
- Reference specific framework files when making recommendations so the user can dig deeper.
