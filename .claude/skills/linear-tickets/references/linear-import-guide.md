# linear-import CLI Guide

## Prerequisites

- `linear-import` CLI installed globally (`npm install -g linear-import`)
- `$LINEAR_API_TOKEN` environment variable set

## Step-by-Step Import Process

Run from inside the feature folder containing `technical_tasks_import.csv`:

```bash
cd requirements/features/<feature-name>
```

### 1. Print and store the API token

```bash
echo $LINEAR_API_TOKEN
```

Store the printed value in memory for the next step.

### 2. Run linear-import

```bash
linear-import
```

### 3. Interactive Prompts (answer in order)

| Prompt | Answer |
|--------|--------|
| `Input your Linear API key` | Paste the `$LINEAR_API_TOKEN` value |
| `Which service would you like to import from?` | Select **Linear (CSV export)** |
| `Select your exported CSV file of Linear issues` | Select **technical_tasks_import.csv** |
| `Do you want to create a new team for imported issues? (Y/n)` | Type **n**, press Enter |
| `Import into team:` | Select the team from config.md |
| `Do you want to import to a specific project? (Y/n)` | Type **Y**, press Enter |
| `Import into project:` | Select the project from config.md |
| `Do you want to assign these issues to yourself? (Y/n)` | Type **n**, press Enter |

### 4. Monitor

Keep the terminal open and monitor until import completes. The CLI will show progress for each ticket being created.

## Important Notes

- Only use for features with multiple tickets (>1 ticket)
- Single bugs and chores should be created directly via Linear MCP `create_issue`
- The CSV must follow the exact Linear export format (see csv-format.md)
- After import, verify tickets appear in Linear under the correct milestone
