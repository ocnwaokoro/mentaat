# Repository Determination Patterns

This reference helps identify which repository (backend, frontend, or infrastructure) a Linear ticket affects.

## Repository Tags

Linear tickets may have tags that explicitly indicate the affected repository:

- `backend` → backend repository
- `frontend` → frontend repository
- `infrastructure` → infrastructure repository
- `infra` → infrastructure repository (alias)

## Title Keywords

If tags are not present, analyze the ticket title for these keywords:

### Backend Keywords
- API
- database
- migration
- model
- controller
- endpoint
- authentication
- authorization
- Rails
- Ruby
- PostgreSQL
- Redis
- Sidekiq

### Frontend Keywords
- UI
- component
- React
- TypeScript
- Vite
- Chakra
- frontend
- interface
- dashboard
- form
- page
- routing

### Infrastructure Keywords
- deployment
- Docker
- Terraform
- GCP
- Cloud Run
- infrastructure
- CI/CD
- environment

## Default Behavior

If no clear indicators are found from tags or title:
1. Ask the user which repository to work with
2. Provide a list of possible repositories based on ticket context
