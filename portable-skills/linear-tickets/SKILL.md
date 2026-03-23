---
name: linear-tickets
description: >
  Create and manage Linear tickets from the requirements/ folder.
  Use when the user wants to "create tickets", "create linear tickets",
  "sync tickets", "create a feature", "create a bug", "create a chore",
  or manage the requirements folder structure. Handles features (multi-ticket
  epics with CSV import), bugs (single tickets), and chores (single tickets).
---

# Linear Tickets

**Read `.claude/skills/config.md`** for: Linear Team, Linear Prefix, Linear Project, and GitHub Org. All values below (team names, prefixes, project names) come from config.md.

Act as a technical lead. Define technical requirements, dependencies, and time estimates by seniority. Ticket definitions should include data modeling, business rules, and system architecture but NOT implementation details (no code snippets, specific method names, or line-by-line changes).

Use Linear MCP tools (see `/linear` skill) for all Linear API interactions.

## Entry Point

Present this menu via AskUserQuestion:

| Option | Description |
|--------|-------------|
| **Create new tickets** | Create feature, bug, or chore tickets |
| **Sync tickets** | Sync requirements/ folder with Linear milestones |
| **Exit** | Cancel |

---

## Create New Tickets

### Step 1: Select ticket type

Prompt user to choose: **Feature**, **Bug**, or **Chore**.

### Step 2: Get next available ID

Fetch the latest ticket ID from Linear:
```
list_issues(team: "<from config.md>", limit: 1, orderBy: "createdAt")
```
Extract the numeric part of the last ticket ID. All new tickets increment from there.

### Step 3: Route by type

#### Feature Flow

1. **Ask user** to describe the feature in detail (open prompt).
2. **Create folder** at `requirements/features/<feature-name>/` (kebab-case).
3. **Scan the codebase** using Glob/Grep/Read to identify:
   - Existing models, controllers, services, components affected
   - Database schema implications
   - API endpoints to create or modify
   - Frontend pages/components to create or modify
4. **Create milestone** in Linear for the feature:
   ```
   create_milestone(project: "<from config.md>", name: "<Titleized Feature Name>")
   ```
   Store the returned milestone ID.
5. **Draft tickets** as Technical_Tasks.md with incremental GRO-IDs. Each ticket follows the format in `references/ticket-templates.md`. Include:
   - Description, acceptance criteria, technical requirements
   - Dependencies between tickets (GRO-IDs)
   - Story point estimates
   - Priority (High/Medium/Low)
6. **Write Epic_Summary.md** following template in `references/ticket-templates.md`.
7. **Generate technical_tasks_import.csv** following the format in `references/csv-format.md`. Use the milestone name and ID from step 4.
8. **Import tickets** using `linear-import` CLI. Follow the exact steps in `references/linear-import-guide.md`.

#### Bug Flow

1. **Ask user** to describe:
   - What is the bug?
   - Steps to reproduce
   - Expected vs actual behavior
   - Relevant attachments (screenshots, videos)
2. **Create single markdown file** at `requirements/bugs/<bug-description>.md`.
3. **Create ticket in Linear** via MCP:
   ```
   create_issue(
     team: "<from config.md>",
     title: "<Bug Title>",
     description: "<markdown body>",
     project: "<from config.md>",
     milestone: "Fixes",
     priority: <user-specified or 2>
   )
   ```

#### Chore Flow

1. **Ask user** to describe the chore details and any relevant attachments.
2. **Create single markdown file** at `requirements/chores/<chore-description>.md`.
3. **Create ticket in Linear** via MCP:
   ```
   create_issue(
     team: "<from config.md>",
     title: "<Chore Title>",
     description: "<markdown body>",
     project: "<from config.md>",
     milestone: "Chores",
     priority: <user-specified or 3>
   )
   ```

---

## Sync Tickets

### Step 1: Select type to sync

Prompt user: **Features**, **Bugs**, or **Chores**.

### Step 2: Route by type

#### Sync Features

1. Fetch milestones from Linear for project "MVP Launch":
   ```
   list_milestones(project: "<from config.md>")
   ```
2. List folders in `requirements/features/`.
3. Compare: for each folder without a matching milestone (titleized folder name), create the milestone:
   ```
   create_milestone(project: "MVP Launch", name: "<Titleized Folder Name>")
   ```
4. Report which milestones were created and which already existed.

#### Sync Bugs / Chores

1. Prompt user for the **ticket ID** (GRO-XXXX).
2. Fetch ticket details from Linear:
   ```
   get_issue(id: "<ticket-id>")
   ```
3. Display the ticket details to the user for review.

---

## References

- **CSV format**: See `references/csv-format.md` for column headers, field values, and examples
- **File templates**: See `references/ticket-templates.md` for Epic_Summary.md and Technical_Tasks.md formats
- **Import CLI**: See `references/linear-import-guide.md` for step-by-step linear-import process

## Folder Structure

```
requirements/
├── features/<feature-name>/    # One folder per feature (kebab-case)
│   ├── Epic_Summary.md
│   ├── Technical_Tasks.md
│   └── technical_tasks_import.csv
├── bugs/                       # One .md file per bug
└── chores/                     # One .md file per chore
```
