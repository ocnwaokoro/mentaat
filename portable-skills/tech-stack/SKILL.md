---
name: tech-stack
description: Discover and document the project's tech stack by scanning the actual codebase. Generates tech-stack.md from reality — languages, frameworks, test runners, linters, build tools, infrastructure, and monitoring. Use when the user says "scan tech stack", "generate tech stack", "document stack", "what's our stack", or after running /project-setup. Re-run anytime to keep tech-stack.md aligned with the codebase.
---

# /tech-stack - Codebase-Driven Tech Stack Discovery

Scan the actual codebase and generate `.claude/skills/tech-stack.md` from what's really there. No guessing, no hand-writing — the doc reflects the repo.

## Invocation

```
/tech-stack
/tech-stack --repo backend    # Scan only one repo
/tech-stack --refresh         # Re-scan and update existing doc
```

## Prerequisites

- `.claude/skills/config.md` must exist with at least the Repositories table filled in.
- If config.md is empty or missing, prompt: "Run `/project-setup` first to configure your project."

---

## Stage 1: Read Config

Read `.claude/skills/config.md` and extract the repository table. For each repo, note:
- Name, Path, Default Branch, Description

If `--repo` flag is passed, filter to just that repo.

---

## Stage 2: Scan Each Repository

For each repo in config, run the discovery probes below. Use the Explore agent for thorough scanning when needed. **All findings must come from actual files — never infer or assume.**

### 2.1 Language & Runtime Detection

Check for version/config files:

```bash
# Per repo — run from repo path
cat .ruby-version .python-version .nvmrc .node-version .go-version .tool-versions 2>/dev/null
cat Dockerfile 2>/dev/null | grep -i "^FROM\|ARG.*VERSION"
```

| File Found | Stack Signal |
|---|---|
| `Gemfile` | Ruby |
| `package.json` | Node.js / JavaScript / TypeScript |
| `go.mod` | Go |
| `Cargo.toml` | Rust |
| `pyproject.toml` / `requirements.txt` / `Pipfile` | Python |
| `pom.xml` / `build.gradle` | Java/Kotlin |
| `mix.exs` | Elixir |
| `*.csproj` / `*.sln` | .NET / C# |

### 2.2 Framework Detection

```bash
# Ruby frameworks
grep -l "rails" Gemfile 2>/dev/null && echo "Rails"
grep -l "sinatra" Gemfile 2>/dev/null && echo "Sinatra"

# JS/TS frameworks
grep -E "\"(next|nuxt|react|vue|angular|svelte|remix|astro|express|fastify|nestjs|hono)\"" package.json 2>/dev/null

# Python frameworks
grep -E "(django|flask|fastapi|starlette)" requirements.txt pyproject.toml 2>/dev/null

# Go frameworks
grep -E "(gin|echo|fiber|chi)" go.mod 2>/dev/null
```

Also check for:
- `tsconfig.json` → TypeScript
- `next.config.*` → Next.js
- `vite.config.*` → Vite
- `webpack.config.*` → Webpack
- `config/routes.rb` → Rails routing

### 2.3 Database & Data Layer

```bash
# Database config files
cat config/database.yml 2>/dev/null
cat docker-compose*.yml 2>/dev/null | grep -A5 "image:.*postgres\|image:.*mysql\|image:.*mongo\|image:.*redis\|image:.*sqlite"

# ORM / DB libraries
grep -E "(activerecord|sequel|pg|mysql2|mongoid|prisma|drizzle|typeorm|sequelize|sqlalchemy|diesel|gorm)" Gemfile package.json go.mod requirements.txt pyproject.toml Cargo.toml 2>/dev/null

# Migration tools
ls db/migrate/ 2>/dev/null && echo "Rails migrations"
ls prisma/migrations/ 2>/dev/null && echo "Prisma migrations"
ls alembic/ 2>/dev/null && echo "Alembic migrations"
```

### 2.4 Test Framework Detection

```bash
# Test configs
ls .rspec spec/ 2>/dev/null && echo "RSpec"
ls jest.config.* vitest.config.* 2>/dev/null
ls pytest.ini pyproject.toml 2>/dev/null | xargs grep -l "pytest" 2>/dev/null
ls *_test.go 2>/dev/null && echo "Go test"

# Test dependencies
grep -E "(rspec|minitest|shoulda|factory_bot|faker)" Gemfile 2>/dev/null
grep -E "(jest|vitest|mocha|cypress|playwright|testing-library)" package.json 2>/dev/null
grep -E "(pytest|unittest|hypothesis)" requirements.txt pyproject.toml 2>/dev/null
```

### 2.5 Linter & Formatter Detection

```bash
# Config files
ls .rubocop.yml .eslintrc* .prettierrc* .stylelintrc* biome.json .golangci.yml rustfmt.toml .flake8 pyproject.toml 2>/dev/null
# Check pyproject.toml for ruff/black/isort
grep -E "\[tool\.(ruff|black|isort|mypy|pylint)\]" pyproject.toml 2>/dev/null
```

### 2.6 Build & Run Commands

```bash
# package.json scripts
cat package.json 2>/dev/null | grep -A 50 '"scripts"' | head -60

# Makefile targets
cat Makefile 2>/dev/null | grep "^[a-zA-Z_-]*:" | head -20

# Procfile
cat Procfile 2>/dev/null

# Docker
ls Dockerfile docker-compose*.yml 2>/dev/null
cat docker-compose*.yml 2>/dev/null | grep -E "container_name:|command:" | head -20
```

### 2.7 Frontend Libraries (if applicable)

```bash
# UI libraries
grep -E "(chakra|tailwind|material-ui|ant-design|radix|shadcn|bootstrap|styled-components|emotion)" package.json 2>/dev/null

# State management
grep -E "(redux|zustand|jotai|recoil|mobx|pinia|vuex)" package.json 2>/dev/null

# Data fetching
grep -E "(react-query|tanstack|swr|apollo|urql|axios|ky)" package.json 2>/dev/null

# Date handling
grep -E "(dayjs|moment|date-fns|luxon)" package.json 2>/dev/null

# Router
grep -E "(react-router|next|nuxt|vue-router)" package.json 2>/dev/null
```

### 2.8 Background Jobs & Queue

```bash
grep -E "(sidekiq|resque|delayed_job|good_job|solid_queue)" Gemfile 2>/dev/null
grep -E "(bull|bullmq|agenda|bee-queue)" package.json 2>/dev/null
grep -E "(celery|dramatiq|rq|huey)" requirements.txt pyproject.toml 2>/dev/null
cat docker-compose*.yml 2>/dev/null | grep -E "redis|rabbitmq|kafka" | head -10
```

### 2.9 Infrastructure & Deployment

```bash
# CI/CD
ls .github/workflows/*.yml 2>/dev/null
ls .gitlab-ci.yml .circleci/config.yml Jenkinsfile buildspec.yml 2>/dev/null

# Infrastructure as code
ls *.tf terraform/ 2>/dev/null && echo "Terraform"
ls pulumi/ Pulumi.yaml 2>/dev/null && echo "Pulumi"
ls cdk.json 2>/dev/null && echo "AWS CDK"
ls serverless.yml 2>/dev/null && echo "Serverless Framework"

# Cloud provider signals
grep -rE "(aws|gcp|azure|google-cloud|cloud-run|ecs|lambda|app-engine)" docker-compose*.yml Dockerfile *.tf .github/workflows/*.yml 2>/dev/null | head -10

# Container orchestration
ls k8s/ kubernetes/ 2>/dev/null && echo "Kubernetes"
ls fly.toml 2>/dev/null && echo "Fly.io"
ls render.yaml 2>/dev/null && echo "Render"
ls railway.json 2>/dev/null && echo "Railway"
```

### 2.10 Monitoring & Error Tracking

```bash
# Sentry
grep -rE "(sentry|@sentry)" package.json Gemfile requirements.txt pyproject.toml go.mod 2>/dev/null
ls sentry.properties 2>/dev/null
grep -r "Sentry.init\|sentry_sdk\|sentry-ruby" --include="*.rb" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.py" -l 2>/dev/null | head -5

# Other monitoring
grep -E "(datadog|newrelic|bugsnag|rollbar|honeybadger)" Gemfile package.json requirements.txt 2>/dev/null
```

---

## Stage 3: Generate tech-stack.md

Build the document from scan results. Structure:

```markdown
---
description: |
  Auto-generated tech stack documentation. Created by /tech-stack.
  Re-run /tech-stack to update. All skills reference this for
  stack-specific commands, patterns, and conventions.
generated: <ISO 8601 timestamp>
alwaysApply: true
---

# Tech Stack

> Auto-generated by `/tech-stack` on <date>. Re-run to update.

## Stack Summary

| Repo | Language | Framework | Database | Test Runner | Linter |
|------|----------|-----------|----------|-------------|--------|
| ... | ... | ... | ... | ... | ... |

## <Repo Name>

### Language & Runtime
- Language: <detected>
- Version: <from version file>
- Runtime: <Node/Ruby/Python/Go version>

### Framework
- Framework: <detected>
- Key libraries: <top dependencies relevant to development>

### Database
- Primary: <detected>
- ORM/Driver: <detected>
- Migration tool: <detected>

### Testing
- Test runner: <detected>
- Test command: `<actual command from scripts/Makefile>`
- Test libraries: <detected>
- Test directory: <detected path>

### Linting & Formatting
- Linter: <detected>
- Lint command: `<actual command>`
- Formatter: <detected>
- Format command: `<actual command>`

### Build & Run
- Dev command: `<from scripts>`
- Build command: `<from scripts>`
- Docker service: `<container name if dockerized>`
- Docker exec prefix: `<e.g., docker exec container-name>`

### Background Jobs
- Queue system: <detected or "None">
- Job framework: <detected or "None">

### Frontend Libraries (if applicable)
- UI framework: <detected>
- State management: <detected>
- Data fetching: <detected>
- Date library: <detected>
- Router: <detected>

### Monitoring
- Error tracking: <detected or "Not configured">
- Sentry DSN location: <if found>
- Init file: <if found>

## Infrastructure

### CI/CD
- Platform: <detected>
- Config: <path to config>
- Key workflows: <list>

### Deployment
- Provider: <detected>
- IaC tool: <detected or "None">
- Container: <Docker/Podman/None>

### Services (from docker-compose)
| Service | Image | Purpose |
|---------|-------|---------|
| ... | ... | ... |

## Commands Quick Reference

> Used by /autopilot, /pr-feedback, and /pr-review.

| Action | Repo | Command |
|--------|------|---------|
| Run tests | <repo> | `<actual command>` |
| Run linter | <repo> | `<actual command>` |
| Type check | <repo> | `<actual command>` |
| Build | <repo> | `<actual command>` |
| Dev server | <repo> | `<actual command>` |
| Format | <repo> | `<actual command>` |
```

---

## Stage 4: Validate and Present

Display the generated doc to the user. Highlight anything that couldn't be detected:

```
Scan complete. Results:

✅ Detected: Ruby 3.2, Rails 7.1, PostgreSQL, RSpec, RuboCop
✅ Detected: TypeScript 5.3, React 18, Vite, Vitest, ESLint
⚠️ Could not detect: Sentry project slug for frontend
⚠️ Could not detect: Background job framework

Please review and fill in any gaps.
```

Use AskUserQuestion:
```
Question: "Tech stack doc looks accurate?"
Header: "Review"
Options:
  - Label: "Save", Description: "Write tech-stack.md"
  - Label: "Edit", Description: "I need to correct something"
  - Label: "Re-scan", Description: "I made changes, scan again"
```

---

## Stage 5: Save and Advise

Write to `.claude/skills/tech-stack.md`.

Display next steps:

```
tech-stack.md saved.

All skills now reference this for:
  - Test commands (/autopilot, /pr-feedback)
  - Lint/type-check commands (/autopilot, /pr-feedback)
  - Review patterns (/pr-review)
  - File conventions (/implementation-plan)
  - Docker commands (/pr-feedback)

Re-run /tech-stack anytime your stack changes.
```

---

## Refresh Mode (`--refresh`)

When re-running on an existing tech-stack.md:

1. Read current tech-stack.md
2. Re-scan all repos
3. Diff: show what changed since last scan
4. Present changes for approval
5. Update only changed sections

This keeps the doc aligned without losing manual edits to sections the scan can't detect.
