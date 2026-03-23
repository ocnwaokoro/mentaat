# Ticket File Templates

## Epic_Summary.md

```markdown
# [Feature Name] - Epic Summary

## Overview

[1-2 paragraph description of the feature, its purpose, and value to users]

## Business Value

### User Experience
- [Bullet points on UX improvements]

### Technical Excellence
- [Bullet points on technical benefits]

## Technical Components

### Backend
- [Numbered list of backend components]

### Frontend
- [Numbered list of frontend components]

### Integration Points
- [External services, APIs, or system integrations]

## User Journey

### For [User Type]:
1. Step 1
2. Step 2
3. ...

## Benefits

### For Users:
- [Benefits]

### For the Business:
- [Benefits]
```

## Technical_Tasks.md

```markdown
# [Feature Name] - Technical Tasks

## Important Context

**Existing Codebase Integration:** [Describe how this feature integrates with the existing codebase, what models/components already exist that this feature extends]

## GRO-XXX: [Area] - [Short Title]

**Epic:** [Feature Name]
**Priority:** High | Medium | Low
**Story Points:** N

### Description
[Detailed description]

### Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

### Technical Requirements
- Requirement 1
- Requirement 2

### Dependencies
GRO-YYY, GRO-ZZZ (or "None")

---

## GRO-XXX+1: [Area] - [Next Ticket Title]

[Repeat pattern...]
```

## Folder Structure

```
requirements/
├── features/
│   └── feature-name/           # kebab-case
│       ├── Epic_Summary.md
│       ├── Technical_Tasks.md
│       └── technical_tasks_import.csv
├── bugs/
│   └── bug-description.md      # Single markdown file per bug
└── chores/
    └── chore-description.md    # Single markdown file per chore
```
