# Active Sprint

**Sprint:** 1 of 26
**Product:** PortPulse + Monorepo Foundation
**Dates:** Mar 24 - Apr 7, 2026
**Goal:** PortPulse MVP live with agent portal and importer dashboard

---

## This Sprint's Tasks

1. [ ] **Scaffold monorepo** — `npx create-turbo@latest mentaat`, configure pnpm workspaces, set up packages/core, packages/messaging, packages/data, packages/ui
2. [ ] **Supabase project** — create project, set up auth, create initial migration with shared tables (organizations, users, customers)
3. [ ] **PortPulse schema** — containers, milestones, agents, matches tables
4. [ ] **Agent registration flow** — free signup, profile, WhatsApp number verification
5. [ ] **Agent portal** — container list, milestone update interface, importer linking
6. [ ] **WhatsApp milestone webhook** — Fastify handler on Railway, Termii integration, agent confirms milestones via WhatsApp reply
7. [ ] **Importer dashboard** — container overview, milestone timeline, demurrage calculator, aging alerts
8. [ ] **Paystack billing** — importer subscription (N40K starter, N80K professional)
9. [ ] **Deploy** — Vercel (web app) + Railway (bot server), production environment
10. [ ] **Smoke test** — create test agent + test importer, track one container end-to-end

## Definition of Done (from PRD Section 16)

- [ ] 1 agent completes full registration via web portal
- [ ] 1 agent updates a milestone via WhatsApp
- [ ] 1 importer sees container timeline with demurrage calculation
- [ ] WhatsApp webhook processes messages in < 2s
- [ ] Paystack test payment succeeds
- [ ] App loads in < 3s on throttled 3G connection

## What I'm NOT Doing This Sprint

- BuildTrack (Sprint 2)
- VendorScore (Sprint 3)
- USSD platform (Sprint 4)
- Any product besides PortPulse
- Marketing, content, social media
- Pitch decks or investor outreach
