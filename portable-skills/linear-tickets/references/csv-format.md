# Linear CSV Import Format

## Column Headers

```
"ID","Team","Title","Description","Status","Estimate","Priority","Project ID","Project","Creator","Assignee","Labels","Cycle Number","Cycle Name","Cycle Start","Cycle End","Created","Updated","Started","Triaged","Completed","Canceled","Archived","Due Date","Parent issue","Initiatives","Project Milestone ID","Project Milestone","SLA Status","Roadmaps"
```

## Required Fields for New Tickets

| Column | Value | Notes |
|--------|-------|-------|
| ID | `<PREFIX>-XXXX` | Incremental from last Linear ticket (prefix from config.md) |
| Team | `<from config.md>` | Always |
| Title | Ticket title | Prefixed with area: `Backend -`, `Frontend -`, `Infrastructure -` |
| Description | Markdown body | See Description Format below |
| Status | `Backlog` | Default for new tickets |
| Estimate | Empty or number | Story points |
| Priority | `High`, `Medium`, `Low`, `No priority`, `Urgent` | |
| Project | `<from config.md>` | Current project |
| Parent issue | `GRO-XXX` or empty | For sub-tasks |
| Project Milestone ID | UUID or empty | Get from Linear API |
| Project Milestone | Milestone name | Must match Linear milestone |

## Leave Empty for New Tickets

Project ID, Creator, Assignee, Labels, Cycle Number, Cycle Name, Cycle Start, Cycle End, Created, Updated, Started, Triaged, Completed, Canceled, Archived, Due Date, Initiatives, SLA Status, Roadmaps.

## Description Format (Markdown inside CSV)

```markdown
### Description

[Detailed description of the ticket]

### Acceptance Criteria

- [ ] Criterion 1
- [ ] Criterion 2

### Technical Requirements

- Requirement 1
- Requirement 2

### Definition of Done

- [ ] Code reviewed
- [ ] Tests passing

### Dependencies

GRO-XXX, GRO-YYY (or "None")
```

## CSV Example Row

```csv
"GRO-600","Groupr","Backend - Create pickup locations database schema","### Description\n\nCreate the database schema for pickup locations.\n\n### Acceptance Criteria\n\n- [ ] Create migration\n- [ ] Add model\n\n### Dependencies\nNone","Backlog",,"High","","MVP Launch","","","","","","","","","","","","","","","","","","","Pickup Location Management","",""
```

## Important Notes

- Wrap all field values in double quotes
- Escape internal quotes by doubling them: `""quoted text""`
- Newlines in descriptions use `\n` (literal newline inside quoted field)
- Empty fields: `""` or just `,`
- Milestone ID is optional when Milestone name is provided (Linear resolves by name)
