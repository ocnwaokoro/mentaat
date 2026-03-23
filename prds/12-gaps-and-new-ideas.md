# Gaps, New Ideas & Missed Opportunities

**Status:** COMPLETE
**Purpose:** Capture everything that fell through the cracks in the first 10 PRDs

---

## SECTION A: Potential New Standalone Products (Not Covered by PRDs 01-10)

### A1. VendorScore — B2B Business Verification & Credit Scoring

**The gap:** Credit bureaus cover only 13% of Nigerian adults. Businesses extending trade credit have no way to verify a new customer's creditworthiness. They rely on personal relationships and gut feel.

**What it does:** Enter a business name or CAC registration number → pull publicly available data (CAC registration status, filing history, directorship, court records) + request permission for bank statement analysis (Mono.co) → generate a credit score and risk rating for B2B trade credit decisions.

**Who pays:** Wholesalers, distributors, and manufacturers deciding whether to extend 30-60 day terms to new customers. Also: landlords, equipment lessors.

**Pricing:** N20-50K per report, or N150K/month for unlimited lookups.

**Why it matters:**
- N75B failed payment market — much of this is extending credit to bad payers
- 7.2M businesses shut down 2023-2024 — some of these took supplier money with them
- Invoice factoring (SupplyLink) needs credit scoring infrastructure to work
- No Nigerian equivalent to Dun & Bradstreet, Experian Business, or Cortera

**Skill fit:** HIGH — alternative data credit scoring is core ML/data science

**Could attach to:** PayMatch (score customers based on payment history), SupplyLink (score borrowers), CollectPro (prioritize collection by debtor risk)

**Standalone viability:** YES — if enough data sources are accessible. CAC data, court records, and Mono.co bank statements could form a minimum viable dataset.

---

### A2. ExitBridge — Multinational Vacancy Filler / Talent & Gap Marketplace

**The gap:** P&G, GSK (51 years), Unilever, Sanofi, Kimberly-Clark, Diageo all exiting Nigeria. They leave behind: (1) experienced staff now unemployed, (2) distribution gaps in specific product categories, (3) abandoned supplier relationships, (4) physical assets at distressed valuations.

**What it does:** Two-sided marketplace: (1) Nigerian professionals from exiting multinationals list their skills, industry contacts, and availability. (2) Nigerian businesses seeking experienced hires, distributorship opportunities, or supplier relationships browse and connect.

**Who pays:** Hiring businesses pay per-connection or monthly subscription. Recruiting agencies pay for verified talent listings.

**Pricing:** N50-100K per hire connection, or N200K/month for unlimited access.

**Why it matters:**
- 18,000 manufacturing jobs lost in 2024
- These are highly skilled professionals (trained by multinationals) available at local salary rates
- Distribution gaps = immediate revenue opportunity for Nigerian businesses that fill them
- Window is CLOSING — talent emigrates ("japa") if not absorbed quickly

**Skill fit:** MEDIUM — marketplace, not AI-heavy

**Standalone viability:** MAYBE — timing-dependent. The exit wave may slow. Could be a feature inside an HR/recruiting platform rather than standalone.

---

### A3. InsureMatch — SME Business Insurance Comparison & Procurement

**The gap:** Insurance penetration is 0.34% of population. N1.56T in premiums (56% growth) means the market is exploding but remains radically underserved. Businesses don't know what insurance they need, can't compare providers, and find the procurement process opaque.

**What it does:** Business enters profile (sector, size, assets, risks) → platform recommends required insurance types (fire, theft, cargo, liability, key-man) → pulls quotes from multiple insurers → compares coverage and price → facilitates purchase online.

**Who pays:** Insurance companies pay commission (15-25% of first-year premium is standard industry commission). Businesses pay nothing.

**Pricing:** Zero to the business. 15-25% commission from insurers per policy sold.

**Why it matters:**
- N1.56T market growing 56% YoY — fastest growing financial services segment
- 0.34% penetration means 99.66% of the market is untouched
- NAICOM (regulator) is actively pushing for increased penetration
- Businesses self-insure by default (generators for power, boreholes for water, security guards for safety) — proper insurance could replace some of these workarounds

**Skill fit:** MEDIUM — comparison engine, not heavy AI

**Could attach to:** GenTrack (generator/asset insurance), ClearFast (cargo/marine insurance), PayMatch (trade credit insurance)

**Standalone viability:** YES — insurance comparison is a proven model globally (PolicyBazaar in India raised $1B+, Compare in UK). Commission-based = zero capital needed.

---

### A4. BuildTrack — Construction Project Cost & Material Tracker

**The gap:** 20-28M unit housing deficit requiring N21T. Cement prices surged 150%+ (N3,500 to N8,800-10,200). Only 3% of Nigerians have valid land titles. Construction sector has HIGHEST expansion outlook (80.8 index in CBN survey) but material cost volatility kills budgets.

**What it does:** Construction project manager enters project spec → platform tracks material prices in real-time (cement, rebar, blocks, sand) across suppliers → alerts on price movements → optimizes procurement timing → tracks actual spend vs budget → generates investor/client progress reports.

**Who pays:** Construction companies (N100-200K/month), property developers, project managers.

**Pricing:** N100-200K/month per active project, or N50K/month for price tracking only.

**Why it matters:**
- Construction sector highest expansion outlook (80.8) — they're building
- Material price volatility (cement 150%+ increase) makes budgeting impossible
- No Nigerian equivalent to Procore, PlanGrid, or BuilderTrend
- Land title verification could be a premium add-on (N300B tied up in disputes)

**Skill fit:** MEDIUM — price tracking + analytics, some ML for price forecasting

**Standalone viability:** YES — construction is the most optimistic sector in the data, actively expanding, and has no software tooling.

---

### A5. JapaShield — Brain Drain Risk Assessment & Retention Tool

**The gap:** 3.68M Nigerians emigrated in 2 years. 69% of 18-35 year olds willing to relocate. 15,000 doctors, 42,000 nurses, 5,000+ lecturers emigrating. University of Lagos lost 60% of staff. Salary gap: 3-7x international vs Nigeria.

**What it does:** HR tool that (1) identifies flight-risk employees based on profile signals (age, skill type, salary vs market, tenure), (2) benchmarks salaries against international offers in their field, (3) recommends retention interventions (salary adjustment, benefits, career development), (4) calculates cost-of-replacement vs cost-of-retention for each employee.

**Who pays:** HR departments at hospitals, universities, tech companies, professional services firms — anyone losing key staff to emigration.

**Pricing:** N75-150K/month for companies with 50-500 employees.

**Why it matters:**
- $11B annual loss from digital skills gaps
- Doctor-patient ratio: 1:9,083 (WHO recommends 1:6,000)
- Replacing a senior employee costs 6-12 months salary in Nigeria
- No tool specifically addresses the "japa" risk quantitatively

**Skill fit:** HIGH — predictive modeling, data analysis

**Could attach to:** TaxGuard (has employee/salary data already)

**Standalone viability:** MAYBE — novel concept but unproven category. Could be a powerful feature inside TaxGuard/PEO rather than standalone.

---

### A6. WaterTrack — Borehole & Water Infrastructure Management

**The gap:** 95%+ of businesses drill boreholes or buy water. Costs N150K-4M per borehole. Water infrastructure is in the research as "hidden billions" (N100-500B range) but got zero attention in any PRD.

**What it does:** Track borehole maintenance schedules, water quality testing dates, tanker delivery costs, consumption per department/floor → benchmark against peers → optimize procurement.

**Standalone viability:** LOW — too niche. Better as a utility-tracking feature inside GenTrack (which already tracks generator costs — add water as a second utility).

---

### A7. SecureOps — Lightweight Cybersecurity Compliance Checker

**The gap:** N52.3B in digital fraud (196% spike). 70% of companies hit by ransomware. CBN mandating cybersecurity audits for financial institutions. No accredited Nigerian university offers cybersecurity degrees. 3,759 attacks per week.

**What it does:** Automated security assessment: scan business's public-facing infrastructure (website, email config, cloud storage) → generate compliance report against CBN/NITDA requirements → prioritize vulnerabilities → provide remediation guides → track remediation progress.

**Who pays:** Fintechs (regulatory requirement), banks, any company processing payments.

**Pricing:** N100-200K per assessment, or N150K/month for continuous monitoring.

**Skill fit:** HIGH — you have CompTIA Security+ certification

**Standalone viability:** YES — regulatory mandate creates forced buyers. But requires deep cybersecurity expertise beyond certification level. Could start as assessment-only (lighter lift) and partner with security firms for remediation.

---

## SECTION B: Missed Data Points & Unexplored Angles

### B1. The September 2025 Anomaly
CBN survey showed "Bank Charges" suddenly jumped to #1 constraint in September (70.8) from bottom tier in all other months. This was never explained. If banks changed fee structures in September, there's an opportunity in fee comparison/optimization tools.

**Potential product:** BankCompare — help businesses compare actual banking costs across Nigerian banks and optimize their banking relationships.

### B2. The South-East Collapse
South-East CI crashed from 23.5 to 18.7 in one month (Oct→Nov) while South-South improved 23.3→29.0. This was flagged but never investigated. If insecurity is the cause, there may be demand for:
- Business continuity planning software
- Inventory/asset relocation coordination tools
- Risk-adjusted expansion planning (already partially in ForexGuard territory)

### B3. Capacity Utilization → Production Scheduling
Capacity crashed from 62% to 47.72%. Businesses running at half capacity. But nobody builds production scheduling software for Nigerian manufacturers. If the bottleneck is coordination (not just power/FX), a lightweight production scheduler could help manufacturers run closer to capacity.

### B4. Commercial Paper Market Explosion
N1.58T in H1 2025 (107% growth). Businesses are issuing commercial paper at record rates to bridge cash gaps. This suggests demand for:
- CP issuance platform for mid-market companies (currently only blue-chips access this market)
- Short-term investment marketplace connecting CP issuers to investors

### B5. The 42% of Connections Still on 2G
Research shows 42% of mobile connections are still 2G. This means any product targeting broad Nigerian SME adoption MUST have USSD or SMS fallback — not just web/mobile app. Products that crack the USSD interface for financial tools could reach a much larger market.

### B6. Maritime Spending: $7-9B to Foreign Ship Owners
Nigeria pays $7-9B annually to foreign shipping lines. Zero software tools for Nigerian importers to compare shipping rates, track vessels, or negotiate freight. This is upstream of ClearFast (customs) and could be a natural expansion.

### B7. The "Informal Economy" Digitization Gap
80-90% of FMCG retail is informal (open markets, kiosks). Sabi and OmniRetail are digitizing this but focused on e-commerce/ordering. Nobody is building:
- Simple bookkeeping for market traders (Khatabook model from India — 10M+ users)
- Digital receipt/record keeping for cash-heavy businesses
- Informal lending circle (esusu/ajo) management software

These could be massive volume plays at low price points.

---

## SECTION C: Cross-Cutting Themes That Apply to Multiple Products

### C1. WhatsApp-as-Platform
Every product should have a WhatsApp bot interface for critical functions. Not as a nice-to-have — as a PRIMARY interface for certain users. Nigerian business communication is 80%+ WhatsApp. Products that work INSIDE WhatsApp (not just send notifications via WhatsApp) will have dramatically higher adoption.

**Implication:** Build a shared WhatsApp Business API integration layer that all products can use. This becomes infrastructure, not a feature.

### C2. The "Excel Enhancer" Positioning
Every PRD mentions Excel export. But the deeper insight is: don't position as "replace Excel." Position as "make Excel better." Nigerian finance teams will never abandon Excel. Build tools that FEED better data into their existing Excel workflows.

**Implication:** Consider building Excel add-ins or Google Sheets integrations alongside web apps.

### C3. Accountant-as-Channel
The research mentions accounting firms managing compliance for 10-50 clients each. This is the highest-leverage distribution channel for TaxGuard, PayMatch, CashFlow AI, and ForexGuard. One accountant = 10-50 business customers.

**Implication:** Build a "partner portal" that accountants use to manage all their clients from one dashboard. Accountant gets free access; their clients pay. This is the QuickBooks ProAdvisor model.

### C4. The Data Moat
Every product generates proprietary data that becomes more valuable over time:
- PayMatch → payment behavior data (who pays on time, who doesn't)
- ClearFast → HS code accuracy data, clearance time benchmarks
- ForexGuard → FX exposure patterns across industries
- GenTrack → energy cost benchmarks by sector/location
- TaxGuard → compliance patterns, common errors

This data can be monetized as benchmarking reports, sold to investors/researchers, or used to improve AI models. The data moat should be designed from day one — capture everything, anonymize, aggregate.
