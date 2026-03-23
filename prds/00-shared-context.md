# Shared Context: Nigerian B2B SaaS Product Suite

**Version:** 2.0 | March 2026 (Updated with unexplored data angles)

---

## 1. Market Backdrop

Nigerian businesses spend **N67-104T ($44-68B) annually** on workarounds to broken infrastructure, financial system friction, and regulatory complexity. This is not discretionary — it represents involuntary spending on generators, port demurrage, FX losses, late payment penalties, and compliance overhead that businesses must absorb to survive.

### Macro Diagnosis
**"Liquidity-constrained manufacturing recession with forward-looking optimism."** Businesses believe the worst is behind them (6-month forward CI: 52.8) but cannot yet act because FX, energy, and interest rate constraints remain binding. They want to EXPAND (index 54-81) but NOT HIRE (index 8-40) — a 20-40 point gap every month. MAN actual data confirms: -789 net jobs Q1-Q4 2025 despite positive expansion plans.

### Key Macro Indicators (2024-2025)
- **GDP:** ~$400B | **Population:** 220M+
- **Naira depreciation:** 40.9% in 2024 (N997→N1,535/$); further 25.3% in 2025 (N1,231→N1,544/$)
- **Lending rates:** 35.5% (up from 28.06%)
- **Grid collapses:** 12 in 2024
- **MSME credit access:** <5% access formal credit; Credit Access Index turned positive Aug 2025 (from -8.8 Feb → +9.2 Nov) but at punishing 35.5% rates = "survival borrowing"
- **Capacity utilization:** Crashed from 62% to 47.72% (Q2-Q4 2025)
- **Business closures:** 7.2M MSMEs shut down 2023-2024
- **Expansion vs hiring gap:** Expansion plans 54-81 index vs employment plans 8-40 = businesses want automation, not headcount
- **FX expectation bias:** Businesses consistently expect naira appreciation (index 9.8→29.7) while naira depreciated 25.3% — systematically wrong
- **Commercial paper:** N1.58T in H1 2025 (107% YoY) — businesses choosing CP at 15-25% over bank loans at 35.5%
- **Mobile connectivity:** 42% of 138.7M connections still on 2G; broadband subscriptions DECLINED June 2025 (price sensitivity)

### Validated Spending Pools
| Pain Point | Annual Spend/Loss | Source |
|-----------|------------------|-------|
| Power/generators | N22T ($14.3B) | MAN, LCCI |
| SME credit gap | N49.4T ($32.2B) unmet | IFC/World Bank |
| FX losses | N1.62T ($1.06B) | MAN member filings |
| Port/logistics | N1.2-1.8T ($800M-1.2B) | NPA, SEREC |
| Post-harvest losses | N3.5T ($2.3B) | Ministry of Agriculture |
| Tax complexity | 62 levies, N500K-5M penalties | LCCI, PwC |
| Payment failures | N75B (growing 42%/yr) | NIBSS |
| Digital fraud | N52.3B (196% spike) | NIBSS/CBN |
| HR/BPO outsourcing | N1.77T (12% CAGR) | Industry reports |
| Insurance premiums | N1.56T (56% YoY growth) | Nigerian Insurers Association |
| Maritime to foreign carriers | $7-9B annually | Industry reports |
| Commercial paper issuances | N1.58T H1 2025 (107% YoY) | FMDQ Exchange |
| Telecom OPEX | N5.85T (85% YoY increase) | NCC |
| Port congestion daily cost | $55M daily, N600B/month | NPA/LCCI |

### Regional Variance (Critical)
| Region | Nov CI | Trend | Manufacturing Capacity (Q1) |
|--------|:------:|-------|:---------------------------:|
| North-East | 52.7 | Strongest rise | N/A |
| South-West | 39.2 | Rise | 48.86% (lowest) |
| North-West | 39.1 | Moderate rise | N/A |
| North-Central | 33.3 | Moderate rise | N/A |
| South-South | 29.0 | Recovering | N/A |
| **South-East** | **18.7** | **Lowest every month** | **59.91% (highest)** |

**The South-East Paradox:** Lowest business confidence BUT highest manufacturing capacity. Manufacturing clusters (Nnewi, Aba, Onitsha) perform well; broader service/informal economy devastated by insecurity and sit-at-home orders. Products must be region-aware, not one-size-fits-all.

### Manufacturing Subsector Divergence (Q4 2025 — Target Accordingly)
| Sector | Capacity | Energy Spend | Action |
|--------|:--------:|:-----------:|--------|
| Food/Beverage | 63.24% | N229.4B | **TARGET FIRST** — highest capacity, inelastic demand, can afford software |
| Furniture | 60.95% | N/A | Target — import substitution beneficiary |
| Textiles | 57.36% | N26.45B (4x increase) | Target — surviving despite energy surge, possible export play |
| Paper Products | ~50% | N/A | Neutral |
| Non-metallic Minerals | ~48% | N118.5B | Neutral — high energy but declining capacity |
| Metal Products | 39.48% | N/A | Caution — struggling |
| Chemicals/Pharma | 37.50% | N208.7B (doubled) | Caution — 70-75% import-dependent APIs |
| **Electrical/Electronics** | **28.00%** | N/A | **DO NOT TARGET — collapsed -46.8%, approaching shutdown** |

### Proof of Ability-to-Pay
- **Startup funding:** $3.0B across 404 deals (2020-2024)
- **Service provider revenues:** Moniepoint >$100M, Flutterwave ~$160M, Phillips Outsourcing $45M (validates outsource-over-hire preference driven by employment-expansion gap)
- **Government commitments:** World Bank $500M FINCLUDE, $3.5B NiPHaST
- **Top 97 SaaS companies:** $1.1B combined revenue, 69,600 customers
- **Commercial paper market:** N1.58T in H1 2025 (107% YoY) — businesses actively paying 15-25% for working capital, proving they'll pay for cash flow tools
- **Credit access expanding:** Index turned positive Aug 2025; Moniepoint expanding business lending, Kredete $22M raise — fintechs filling bank gaps
- **85% of graduates lack digital competencies** — businesses can't find qualified workers, driving demand for automation/software over hiring

---

## 2. Builder Profile

- **Role:** Solo founding engineer, AI Systems Architect
- **Location:** New York City (cannot relocate)
- **Skills:** AI/ML, data science, Next.js/TypeScript, enterprise AI systems
- **Network:** Family in Port Harcourt/Rivers State for validation/testing
- **Capital:** Bootstrapped ($0-5K)
- **Timeline:** First revenue in 30-60 days

---

## 3. Tech Stack

### Core
- **Framework:** Next.js 14+ (App Router, Server Components)
- **Language:** TypeScript (strict mode)
- **Database:** PostgreSQL via Supabase (free tier to start, auth included)
- **ORM:** Prisma
- **Hosting:** Vercel (free tier for MVP, auto-scaling later)
- **Auth:** Supabase Auth (email + phone/OTP for Nigerian users)

### Integrations (as needed per product)
- **Payments:** Paystack (Nigerian payments, Stripe-owned, NGN native)
- **SMS/WhatsApp:** Termii (Nigerian SMS API, WhatsApp Business API support)
- **USSD:** Africa's Talking (USSD session management, works on all 138.7M connections including 42% on 2G)
- **Email:** Resend (transactional)
- **File processing:** pdf-parse, tesseract.js (OCR), xlsx (Excel export)
- **AI/ML:** OpenAI API or Anthropic API for document processing, Claude for classification tasks
- **FX rates:** ExchangeRate-API or CBN published rates (scraped)
- **Bank data:** Mono.co (Nigerian bank account aggregation API)

### Infrastructure Principles
- Server-side rendering for fast first paint on slow connections
- Edge caching via Vercel for Nigerian CDN proximity
- Supabase Realtime for live updates without polling
- Progressive Web App (PWA) manifest for "install to homescreen"

---

## 4. UX Design Principles

### P1: "WhatsApp-Simple" Interaction Model
Nigerian business users live in WhatsApp. UI should feel familiar: chat-like notifications, single-action screens, green checkmark = done, red = problem. Minimize clicks to complete any task.

### P2: Offline-Resilient by Default
Every data entry caches to localStorage/IndexedDB. Syncs when connection returns. Never lose user work. Show clear online/offline indicator in header. Use optimistic UI updates — show success immediately, reconcile in background.

### P3: Numbers-Forward Dashboards
Lead with naira amounts (savings, costs, exposure, risk). Big bold numbers at top. Charts are secondary. Every dashboard answers "how much money?" within 2 seconds of loading.

### P4: SMS/WhatsApp as First-Class Channels
Critical alerts must reach users outside the app. WhatsApp Business API (via Termii) + SMS fallback for: deadlines, payments received, status changes, risk alerts. Users configure which alerts they want.

### P5: Export Everything to Excel
Every table, every report: one-click CSV/XLSX export. Nigerian finance teams live in Excel. This is the single most important adoption feature. Use xlsx library for formatted exports with headers.

### P6: Progressive Complexity
Simple view by default (3-5 key metrics). "Show details" expands for power users. Settings hidden behind gear icon. Onboarding = 3 screens max. Never overwhelm on first load.

### P7: Naira-First, Dollar-Aware
All amounts display in NGN by default. USD equivalent in smaller gray text where relevant. Date format: DD/MM/YYYY (Nigerian standard). Phone format: +234 prefix.

### P8: Low-Bandwidth Pages
Target <200KB initial page load. SSR via Next.js for fast first paint. Skeleton loading states for dynamic content. No heavy images. System fonts only (no web font downloads). Lazy-load non-critical components.

### P9: USSD/SMS Fallback for Critical Functions
42% of 138.7M mobile connections are 2G — they CANNOT access web apps. Critical functions (payment status check, deadline alerts, balance alerts, collection reminders) MUST have USSD (*XXX#) or SMS fallback. This is not optional — it's half the market. Use Africa's Talking API for USSD session management. Broadband subscriptions DECLINED in June 2025 from price sensitivity — the web-only market may be shrinking.

### P10: Region-Aware Design
South-East (Nnewi, Aba) has different constraints than South-West (Lagos). Products targeting manufacturers must account for sit-at-home disruptions (South-East), port congestion (South-West), and agricultural seasonality (North). Allow users to set their region; adjust defaults, benchmarks, and alerts accordingly.

### P11: "Expand Without Hiring" Positioning
The employment-expansion disconnect (expansion index 54-81 vs employment 8-40) means businesses want to grow WITHOUT adding headcount. Every product should be positioned as "grow 50% without hiring" rather than "efficiency tool." This is the value prop that sells — 62 taxes/levies make each hire 18%+ more expensive, and 69% of young workers want to emigrate.

---

## 5. Common Infrastructure (Shared Across Products)

### Authentication Flow
1. Sign up with email + business name + phone number
2. OTP verification via SMS (Termii)
3. Simple onboarding wizard (3 steps max, product-specific)
4. Dashboard as home screen

### Billing
- Paystack subscription billing (NGN)
- 14-day free trial (no credit card required)
- Monthly billing only for MVP (annual later)
- "Founding customer" discount: 50% off first 3 months

### Analytics (Internal)
- PostHog (free tier) for product analytics
- Track: signup → onboarding complete → first value moment → conversion to paid
- Weekly email digest of key metrics to founder

### Support
- In-app chat widget (Crisp free tier)
- WhatsApp Business number for support
- FAQ/help center built as Next.js pages (no external tool)

---

## 6. Build-or-Skip Scorecard Dimensions

Each PRD ends with standardized ratings (1-10) across 8 dimensions:

| Dimension | What It Measures | Weight |
|-----------|-----------------|--------|
| Build Speed | MVP solo in 2-4 weeks? | 5% |
| Time to Revenue | Days from launch to first paying customer | 15% |
| Market Size | Total addressable market | 15% |
| Competition | How empty is the space? (10 = no competitors) | 10% |
| Skill Fit | Match to AI/data science skills | 15% |
| Capital Required | Bootstrappable with $0-5K? | 10% |
| Buyer Clarity | Can you name 10 companies to call this week? | 20% |
| Fintech Upside | Can this evolve into lending/payments layer? | 10% |

**Composite = weighted average out of 10. Higher = build first.**
