# Repository Determination Patterns

This reference helps identify which repository a ticket affects. **Repo names and paths come from `.claude/skills/config.md`.**

## Repository Tags

Linear tickets may have tags that explicitly indicate the affected repository. Match tag names against the repo names in config.md (case-insensitive).

## Title Keywords

If tags are not present, analyze the ticket title for keywords associated with each repo's stack. **Read `.claude/skills/tech-stack.md`** to know what technologies map to which repo.

### Common Keyword Patterns

These are starting points — the actual mapping depends on your tech-stack.md:

**Backend / API keywords:**
- API, database, migration, model, controller, endpoint
- Authentication, authorization
- Framework-specific terms (from tech-stack.md: e.g., Rails, Django, Express, etc.)
- ORM terms (from tech-stack.md: e.g., ActiveRecord, Prisma, SQLAlchemy, etc.)
- Job/queue terms (from tech-stack.md: e.g., Sidekiq, Celery, BullMQ, etc.)

**Frontend / UI keywords:**
- UI, component, page, form, dashboard, routing
- Framework-specific terms (from tech-stack.md: e.g., React, Vue, Angular, Svelte, etc.)
- Styling terms (from tech-stack.md: e.g., Tailwind, Chakra, SCSS, etc.)

**Infrastructure keywords:**
- Deployment, Docker, CI/CD, environment
- IaC terms (from tech-stack.md: e.g., Terraform, Pulumi, CDK, etc.)
- Cloud provider terms (from tech-stack.md: e.g., GCP, AWS, Azure, etc.)

## Default Behavior

If no clear indicators are found from tags or title:
1. Ask the user which repository to work with
2. Present the repo list from config.md as options
