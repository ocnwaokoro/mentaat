# CLAUDE.md — Mentaat Technologies Project Context

## Who

Obinna Nwaokoro, solo founder of **Mentaat Technologies LLC**.
- NYU Global Liberal Studies BA (2025); thesis on disruptive innovation as economic development strategy for Nigeria
- Based in NYC, cannot relocate. Family in Port Harcourt/Rivers State for on-the-ground validation and testing
- Skills: AI/ML, data science, Next.js/TypeScript, enterprise AI systems
- Bootstrapped ($0-5K budget)

## What Mentaat Technologies Is Building

A portfolio of interconnected B2B products for the Nigerian market, organized in an infrastructure stack:

```
Layer 4: DATA MONETIZATION — sell aggregated data to institutions (banks, insurers, government)
Layer 3: FINANCIAL PRODUCTS — InsureMatch, VendorScore, SupplyLink, built on Layer 2 data
Layer 2: BUSINESS TOOLS — PortPulse, BuildTrack, ClearFast, StockClear (revenue generators)
Layer 1: DATA COLLECTION — KasaBook, AjoTrust, RideBooks, MarketPass, SkillProof (invisible infra)
Foundation: USSD BUSINESS TOOLKIT PLATFORM — session mgmt, user accounts, SMS delivery
```

Fund top-down (Layer 2 revenue pays for Layer 1 development), build bottom-up (shared infra first).

- **6 v2 PRDs** are production-ready in `prds-v2/`
- **37 total opportunities** cataloged across 4 tiers (A: 6 ready, B: 11 high-conviction, C: 8 complex, D: 12 supporting)
- The `/validate-prd` skill validates any product idea against the thesis framework's 8 disruption criteria

## Build Order (12-Month Rollout)

| Month | Products | Milestone |
|-------|----------|-----------|
| 1 | PortPulse (8/8 disruption) + BuildTrack WhatsApp digest | First revenue within 30 days |
| 2 | BuildTrack SaaS + VendorScore Lite + USSD platform + KasaBook MVP | Multiple revenue streams |
| 3 | VendorScore full launch + ClearFast begins | Credit data layer forming |
| 4-6 | ClearFast + InsureMatch + Layer 1 expansion (AjoTrust, RideBooks) | Cross-sell to existing customers |
| 7-12 | Platform effects + data monetization (Layer 3-4) | Data products go live |

## Tech Stack

| Component | Technology | Notes |
|-----------|-----------|-------|
| Monorepo | Turborepo + pnpm | All products in one repo |
| Web apps | Next.js 14 (App Router, Server Components) | Deploy to Vercel |
| Bot server | Fastify | Deploy to Railway ($5/mo, always-on for USSD/WhatsApp) |
| Database | Supabase PostgreSQL | ONE project for all products |
| Auth | Supabase Auth | Email + phone/OTP |
| Payments | Paystack | NGN native |
| WhatsApp/SMS | Termii | WhatsApp Business API + SMS fallback |
| USSD | Africa's Talking | Works on all 138.7M connections incl. 42% on 2G |
| Bank data | Mono.co | Account aggregation |
| OCR | Tesseract.js + OpenAI Vision API | Document processing |
| Analytics | PostHog (free tier) | signup -> onboarding -> first value -> paid |

## Project Structure

```
prds-v2/                  — 6 production-ready disruption-aligned PRDs
  01-portpulse.md            PortPulse (8/8) — container tracking
  02-buildtrack.md           BuildTrack (6/8) — construction cost intelligence
  03-vendorscore.md          VendorScore (6/8) — B2B credit scoring
  04-insurematch.md          InsureMatch (7/8) — SME insurance enablement
  05-clearfast.md            ClearFast (6/8) — customs AI for clearing agents
  06-kasabook.md             KasaBook (8/8) — informal debt/sales tracker
prds/                     — Original v1 PRDs (17 products, mostly sustaining innovations)
  00-shared-context.md       Shared tech stack, market data, UX principles
thesis-framework/         — Disruptive innovation knowledge base
  framework/                 8-criteria checklist, market entry playbook, value chain design
  case-studies/              Indomie Nigeria, PWCB proposal
  nigeria-context/           Infrastructure, government leverage, MNC failure patterns
  validation/                PRD analyses, opportunity catalog, deep dive report
thesis/                   — Original thesis document
claude/skills/validate-prd/ — PRD validation skill
```

Market research files at project root (NIG BIZ SOURCE, market analysis, revenue strategies).

## Working Principles

1. **Validate before building.** Products are tested against 8 disruption criteria. Use `/validate-prd`. "Not disruptive" is not an insult -- sustaining innovations are valid but should be labeled correctly.
2. **The data layer is the real product.** Individual tools are collection mechanisms. Aggregate data (credit signals, price databases, port intelligence) is the long-term moat.
3. **USSD/WhatsApp are entry channels, web dashboards are the paid upgrade.** 42% of connections are 2G. The web-only market may be shrinking. Start with the most accessible format.
4. **One product per sprint.** No context-switching between products within a sprint.
5. **Build shared infra during the first product that needs it.** Every subsequent product gets it free.
6. **Revenue products (Tier A, Layer 2) fund data collection products (Layer 1).** Layer 1 creates the data that makes Layer 3-4 possible.
7. **Cross-sell every new product to existing customers.** The portfolio is interconnected by design.
8. **"Expand without hiring" positioning.** Businesses want to grow (index 54-81) but not hire (index 8-40). Position products as growth enablers, not efficiency tools.
9. **Region-aware, not one-size-fits-all.** South-East has highest manufacturing capacity but lowest confidence. Lagos has port congestion. North has agricultural seasonality.
10. **Offline-resilient, low-bandwidth (<200KB), Naira-first.** Every design decision accounts for Nigerian infrastructure realities.

## Key Documents to Read

| When you need... | Read this |
|-----------------|-----------|
| Product strategy & build order | `thesis-framework/validation/deep-dive-report.md` |
| Full opportunity set (37 products) | `thesis-framework/validation/opportunity-catalog.md` |
| A specific product PRD | `prds-v2/[product].md` |
| Disruption validation criteria | `thesis-framework/framework/8-criteria-checklist.md` |
| Nigeria market context | `thesis-framework/nigeria-context/` directory |
| Shared tech stack & UX principles | `prds/00-shared-context.md` |
| PRD review checklist | `thesis-framework/validation/prd-review-checklist.md` |
| What disqualifies an idea | `thesis-framework/validation/disqualification-criteria.md` |
