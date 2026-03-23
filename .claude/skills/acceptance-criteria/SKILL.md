---
name: acceptance-criteria
description: |
  This skill should be used when creating "acceptance criteria", "AC", or
  "requirements" for tickets. Provides best practices for creating criteria
  suitable for stakeholder and product review.
user-invocable: false
---

# Acceptance Criteria Skill

This skill provides shared patterns for creating acceptance criteria suitable for stakeholder and product review.

**Referenced by:**
- `/refine-ticket` - When creating acceptance criteria for Linear tickets
- Other skills that need to generate user-facing requirements

---

## AC Philosophy

**Acceptance criteria are written for stakeholders and product reviewers, not engineers.**

Acceptance criteria should be:
- **Clear and testable** - Each criterion has an unambiguous pass/fail determination
- **Written in user/business language** - No code, no file paths, no technical jargon
- **Focused on outcomes** - What the user can do, what they see, what happens
- **Verifiable by non-engineers** - QA and product can confirm criteria are met

**Questions during AC generation should be product-focused:**
- Who is the user? What problem does this solve?
- What should happen when X? What's the error behavior?
- What's in scope vs out of scope?

---

## AC Format Template

Use this structure for stakeholder-ready acceptance criteria:

```markdown
### Given/When/Then Format (preferred for behavior-focused criteria)
- **Given** [precondition]
  **When** [action]
  **Then** [expected outcome]

### Requirements
- [Specific testable requirement]
- [Another specific requirement]

### Edge Cases
- [Edge case handling requirement]
- [Error state requirement]

### Out of Scope
- [Explicitly excluded item]
- [Related work for future tickets]
```

**Note:** When writing AC as a section within a Linear issue description, use a `## Acceptance Criteria` header followed by the subsections above. Start directly with the subsections (### level) under the main header.

---

## AC Quality Checklist

Before finalizing acceptance criteria, verify:

- [ ] Each criterion is testable (pass/fail determination is clear)
- [ ] Written in user/business language, not technical jargon
- [ ] Independent (can be verified in isolation)
- [ ] Complete (covers happy path and key edge cases)
- [ ] Sized appropriately (not too granular, not too broad)

**Keep it human-readable:**
- Focus on WHAT needs to happen, not HOW it will be implemented
- Avoid overly specific technical details (file names, method names, exact SQL queries)
- Keep criteria scannable - reviewers should quickly understand what success looks like
- Implementation details can be figured out during development
- Aim for clarity over comprehensiveness - too many specific details make review difficult

---

## Linear Formatting Guidelines

When updating Linear issue descriptions with acceptance criteria:

1. **Use a `## Acceptance Criteria` header** - This creates a clear section within the issue description
2. **Start subsections at ### level** - Begin with `### Given/When/Then Format` or `### Requirements` under the main header
3. **Use markdown formatting** - Bold, bullets, code blocks, and task lists all render natively in Linear's markdown editor

---

## Good vs Bad Examples

### Testability

**Good:**
- "Given a user is on the search results page, when they click the 'Export' button, then a CSV file downloads containing all visible results"
- "Error messages display within 2 seconds of form submission"

**Bad:**
- "The export feature works correctly"
- "Error handling is implemented"

### Business Language

**Good:**
- "Users can filter the report by date range using a calendar picker"
- "The confirmation email includes the order number and estimated delivery date"

**Bad:**
- "Add a `filter_by_date_range` scope to the Report model"
- "Send email via SendGrid API with order_id and delivery_estimate fields"

### Outcome Focus

**Good:**
- "Users see a warning banner when a document is more than 90 days old"
- "Applicants cannot submit the form until all required fields are completed"

**Bad:**
- "Add validation to check document age"
- "Implement form validation logic"

### Scope Clarity

**Good:**
```markdown
### Out of Scope
- Bulk export functionality (separate ticket GRO-456)
- Export format options other than CSV (future enhancement)
```

**Bad:**
- (No out of scope section - leads to scope creep)
- "Future enhancements will be added later" (vague)

---

## Question Categories for AC Gathering

When gathering requirements to write AC, focus on these categories:

### User Context
- Who is the primary user of this feature?
- What problem does this solve for them?
- What is the user's current workaround (if any)?

### Functional Requirements
- What should happen when [trigger event]?
- What information needs to be displayed/collected?
- Are there different behaviors for different user types or states?

### Edge Cases
- What happens if [error condition]?
- What happens if the user [unusual action]?
- Are there any limits or constraints (max items, time limits, etc.)?

### Success Criteria
- How will we know this is working correctly?
- What metrics should improve?
- What user feedback would indicate success?

### Scope
- What is explicitly NOT included in this work?
- Are there related features that should be addressed separately?

---

## Requirements Gathering Workflow

When creating acceptance criteria from a ticket or user request, follow this iterative process:

### Step 1: Analyze the Request

Before asking questions, analyze what's provided:
- What is the core user need or problem being solved?
- What is ambiguous or underspecified?
- What edge cases might exist?
- What does "done" look like for this work?

**For bug tickets:** Review the full description carefully. Bug tickets often contain reproduction steps, expected vs actual behavior, and other details that inform acceptance criteria.

### Step 2: Ask Clarifying Questions

Use AskUserQuestion to gather missing information. Questions should be:
- **Product-focused**: About user value, behavior, and outcomes
- **Non-technical**: No implementation details or code questions
- **Actionable**: Each question should help define acceptance criteria

Use the question categories above (User Context, Functional Requirements, Edge Cases, Success Criteria, Scope) to guide your questions.

### Step 3: Iterate Until Clear

Continue asking questions until:
- All major requirements are understood
- Edge cases are identified
- Success criteria are clear
- Scope boundaries are defined

Generally aim for 2-4 rounds of questions for efficiency. Simple tickets may need fewer rounds, while complex tickets may need more. Note any remaining ambiguities for engineering to resolve.

### Step 4: Draft Acceptance Criteria

Transform the gathered requirements into clear acceptance criteria using the AC Format Template above. Validate against the AC Quality Checklist.

---

## Review and Approval Process

After drafting acceptance criteria, present them for stakeholder review:

### Present for Review

Display the drafted criteria and use AskUserQuestion:
```
Question: "I've drafted acceptance criteria based on our discussion. Are these correct and complete?"
Header: "Review AC"
Options:
  - Label: "Approve", Description: "These criteria accurately capture the requirements"
  - Label: "Modify", Description: "I need to make changes or additions"
  - Label: "Start over", Description: "Let's re-discuss the requirements"
```

### Handle Modifications

**If "Modify" is chosen:**
- Ask what specific changes are needed
- Update the criteria based on feedback
- Present again for approval
- Repeat until approved

**If "Start over" is chosen:**
- Return to Step 2 (Ask Clarifying Questions)
- Gather requirements again with fresh perspective

### Finalization

Once approved, the acceptance criteria are ready to be stored (e.g., added to a Linear ticket, document, or plan).
