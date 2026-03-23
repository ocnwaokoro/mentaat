# Decisions Log

Append-only record of significant technical and strategic decisions with reasoning.

---

## 2026-03-22 — Architecture
- Chose Turborepo monorepo over separate repos per product. Shared packages (auth, messaging, data, UI) across all products. Separate repos would mean duplicated code and painful data integration.
- Chose Fastify on Railway for USSD/WhatsApp bot server instead of Vercel serverless. USSD sessions need < 2s response; Vercel cold starts are 1-3s. Railway is always-on at $5/month.
- One Supabase project for all products. Cross-product data queries (VendorScore reading KasaBook data) are database joins, not API calls between services.
- Chose Africa's Talking for USSD over building custom. AT handles telco integration, session management, and shortcode registration. No reason to build this ourselves.
