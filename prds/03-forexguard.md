# PRD 03: ForexGuard — FX Exposure Dashboard for Nigerian Importers & Manufacturers

**Version:** 1.0 | March 2026
**Status:** Draft
**Author:** Solo Founder
**Ref:** [00-shared-context.md](./00-shared-context.md)

---

## 1. Problem Statement

Nigerian manufacturers and importers are hemorrhaging money to foreign exchange volatility with zero visibility into their real-time exposure. In 2024 alone, documented manufacturer FX losses totaled **N1.62T ($1.06B)**, driven by a **40.9% naira depreciation** (N997 to N1,535/$). Individual corporate casualties were staggering: MTN Nigeria booked **N925B** in net foreign exchange losses; Nestle Nigeria recorded **N290B**. Finance costs across the manufacturing sector surged **1,345% in Q1 2024** compared to the prior year.

The pain is structural, not episodic. **92.5% of manufacturers** cite FX scarcity as a binding operational constraint (MAN Q4 2024 survey). Commercial banks have slashed dollar access — GTBank cut individual dollar purchase limits from **$1,500 to $100**. Letter of Credit payments, the backbone of import financing, dropped **57% year-over-year** as banks rationed dollar liquidity. Mid-market companies (50-500 employees) are hit hardest: too small for corporate treasury desks, too large to absorb losses without consequence.

Despite this, the vast majority of mid-market finance teams track FX exposure in **Excel spreadsheets** — if they track it at all. There is no Nigerian-focused tool that consolidates USD-denominated payables against NGN revenue streams, calculates real-time exposure, models depreciation scenarios, or alerts finance leaders when risk concentrations spike. CFOs are making board presentations about the single largest line-item destroying their margins using manually updated spreadsheets and gut instinct.

**The core insight:** FX exposure is not an "FX problem" — it is the #1 profitability problem for every Nigerian company with dollar-denominated costs. Yet it remains the least instrumented risk on the balance sheet.

### The Cognitive Bias Problem

- **Businesses expect appreciation because of:** government signaling, mean reversion bias, CBN intervention history, and survival optimism.
- **They are NOT hedging** because they expect rates to improve. The CBN exchange rate expectation index climbed from 9.8 to 29.7 through 2025 — businesses grew *more* confident in appreciation even as the naira *depreciated* 25.3%.
- **When depreciation continues, they face unexpected losses** (N1.62T documented in 2024) — losses they did not budget for, did not hedge against, and cannot recover from.
- **The worse the depreciation, the more they expect correction** — a self-reinforcing delusion. Each month of weakness convinces businesses that the "bottom" must be near, leading to even larger unhedged positions. This is the textbook definition of a cognitive bias that a data-driven tool can correct.

---

## 2. Target Persona

### Primary: The Mid-Market CFO / Finance Director

| Attribute | Detail |
|-----------|--------|
| **Title** | CFO, Finance Director, Head of Finance |
| **Company size** | 50-500 employees |
| **Revenue** | N500M-N5B ($325K-$3.25M) annually |
| **Industry** | Manufacturing, import/distribution, FMCG, pharmaceuticals, agro-processing |
| **USD exposure** | Regular payables for raw materials, machinery, spare parts, packaging |
| **Current tools** | Excel, sometimes ERP (SAP B1, Sage), WhatsApp groups for rate gossip |
| **Decision authority** | Signs off on operational tools under N500K/month without board approval |
| **Pain frequency** | Daily (rate monitoring), monthly (exposure reporting), quarterly (board reporting) |

### Psychographic Profile

- **Analytical and data-driven.** Trained as accountant or finance professional. Comfortable with dashboards and financial models. Does not need hand-holding on financial concepts.
- **Under pressure from board/investors.** Must justify FX strategy (or lack thereof) every quarter. Needs data to defend timing of USD purchases and pricing decisions.
- **Time-starved.** Spends 4-8 hours/week on manual FX tracking and scenario analysis that should take minutes.
- **Risk-averse but action-oriented.** Wants to hedge risk, not speculate. Will pay for a tool that reduces surprise losses and provides defensible audit trails.
- **Skeptical of fintech promises.** Has been burned by platforms that overpromise bank integration or dollar access. Values tools that work with manual input over tools that promise magical integrations.

### Priority Sectors

- **Food/Beverage:** 63.24% capacity utilization, N229.4B energy spend — large, active sector with heavy import dependence on raw materials and packaging. High volume of USD payables.
- **Chemicals/Pharmaceuticals:** 37.5% capacity but 70-75% import-dependent — highest FX sensitivity of any manufacturing sub-sector. Every naira movement hits their cost base disproportionately.
- **Avoid Electrical/Electronics:** 28% capacity utilization — too distressed to pay for SaaS tools, and shrinking operations mean shrinking FX exposure.

### Secondary Persona: Operations/Procurement Director

Manages the purchase orders that create USD exposure. Needs visibility into how FX movements affect landed costs for raw materials. May be the internal champion who brings ForexGuard to the CFO's attention.

---

## 3. Solution Overview

ForexGuard is a **web-based FX exposure dashboard** purpose-built for Nigerian businesses with USD-denominated payables. It provides:

1. **Exposure Tracking** — Centralized ledger of all USD payables and NGN receivables, organized by due date, vendor, and category. Replaces the scattered Excel sheets with a single source of truth.

2. **Real-Time FX Feed** — Live parallel market and CBN official rates, updated continuously. Shows the rate that matters (parallel market) alongside the rate on paper (official).

3. **Exposure Calculation Engine** — Automatically calculates total USD exposure, net exposure (payables minus any USD receivables), and naira-equivalent at current rates. Shows how exposure has changed over time.

4. **Scenario Modeling** — "What if naira depreciates 10% more?" Slider-based interface lets CFOs model 5%, 10%, 20%, 30% depreciation scenarios and see the immediate P&L impact in naira terms.

5. **Risk Alerts** — Configurable alerts when: total exposure exceeds threshold, a single vendor concentration exceeds limit, rate moves more than X% in 24 hours, or a payable due date is approaching during a historically volatile period.

6. **Timing Intelligence** — Historical pattern analysis showing best/worst months and weeks for USD purchases based on 3 years of rate data. Not predictive — descriptive. "In the last 3 years, the naira has weakened in January 87% of the time."

7. **Board-Ready Reports** — One-click PDF/Excel export of exposure summary, scenario analysis, and FX P&L impact. Formatted for board presentation with charts and commentary fields.

### What ForexGuard Is NOT (MVP)

- Not a trading platform. Does not execute FX transactions.
- Not a bank integration. Does not pull balances or transactions automatically.
- Not a hedging desk. Does not offer forward contracts or derivatives.
- Not an ERP. Does not manage invoices, purchase orders, or accounting.

These are all future possibilities, but the MVP is a **pure visibility and intelligence layer**.

---

## 4. Market Sizing

> **CRITICAL: CBN survey data shows businesses are SYSTEMATICALLY WRONG about FX direction. Exchange rate expectation index rose from 9.8 (Feb) to 29.7 (Nov) — growing confidence in naira appreciation — while naira actually DEPRECIATED 25.3% in the same period (N1,231→N1,544/$). This cognitive bias means businesses are NOT hedging, taking on unhedged FX commitments, and pricing products based on optimistic assumptions. ForexGuard corrects a documented, quantifiable error.**

### Total Addressable Market (TAM)

| Segment | Count | Avg. Annual FX Loss | Total |
|---------|-------|---------------------|-------|
| Large manufacturers (MAN members) | ~3,000 | N540M ($350K) | N1.62T ($1.06B) |
| Mid-market importers | ~15,000 | N50-200M ($33-130K) | N750B-N3T |
| Small importers/distributors | ~50,000 | N5-50M ($3.3-33K) | N250B-N2.5T |
| **Total documented FX losses** | | | **N1.62T+ ($1.06B+)** |

If ForexGuard can help a company reduce FX losses by even **5-10%**, the value delivered at the mid-market level is **N2.5M-N20M/year** ($1,600-$13,000) — far exceeding the subscription cost.

### Serviceable Addressable Market (SAM)

Mid-market manufacturers and importers with N500M-N5B revenue and regular USD payables:

- **Estimated count:** 5,000-8,000 companies
- **Willingness to pay:** N150-250K/month ($100-163)
- **SAM value:** N9B-N24B/year ($5.9M-$15.6M/year)

### Serviceable Obtainable Market (SOM) — Year 1

- **Target:** 10-30 paying customers in first 6 months
- **MRR at 10 customers:** $1,000-$1,630/month ($10-16K MRR annualized to $120-196K ARR)
- **MRR at 30 customers:** $3,000-$4,890/month ($36-59K ARR)

### Pricing Rationale

- **N150,000/month ($100)** — Starter tier: up to 50 payable entries, 2 user seats, basic scenario modeling, email alerts.
- **N250,000/month ($163)** — Professional tier: unlimited entries, 5 user seats, advanced scenario modeling, WhatsApp/SMS alerts, board report templates, historical pattern analysis.
- **N500,000/month ($325)** — Enterprise tier (post-MVP): unlimited everything, API access, custom integrations, dedicated onboarding.

CFO-level tools command higher willingness to pay because (a) the buyer has budget authority, (b) the cost is trivial relative to the problem size, and (c) the tool produces board-visible output that justifies the spend politically.

---

## 5. Competitive Landscape

| Competitor | Description | Gap ForexGuard Fills |
|-----------|-------------|---------------------|
| **Excel spreadsheets** | Current "solution" for 90%+ of targets | No real-time rates, no scenario modeling, no alerts, error-prone, not collaborative |
| **Bloomberg Terminal** | Gold standard for FX data | N15M+/year ($10K+), overkill for mid-market, not Nigeria-focused, no payable tracking |
| **Kyriba / GTreasury** | Enterprise treasury management | $50K-$500K/year, 6-month implementation, designed for Fortune 500 |
| **SAP Treasury** | Module within SAP ERP | Requires full SAP deployment, N50M+ implementation |
| **Nairametrics / AbokiFX** | Rate tracking websites | Rate info only, no exposure calculation, no scenario modeling, no payable tracking |
| **Bank FX desks** | Relationship-based advisory | Conflict of interest (bank profits from spread), reactive not proactive, no dashboard |

**Competitive moat:** No existing tool combines (1) Nigerian parallel market rate awareness, (2) payable/receivable tracking by currency, (3) scenario modeling calibrated to naira-specific volatility patterns, and (4) mid-market pricing. The global treasury tools are priced and designed for multinationals. The local rate trackers are consumer-grade information tools. ForexGuard sits in the empty middle.

---

## 6. Feature Requirements (MVP)

### F1: Multi-Currency Payable/Receivable Ledger

**Priority:** P0 (Must Have)

| Element | Detail |
|---------|--------|
| **Description** | Manual entry interface for USD-denominated payables and NGN receivables. Each entry includes: vendor/customer name, currency, amount, due date, category (raw materials, equipment, services, other), and optional notes. |
| **Data model** | `payables` table: id, company_id, vendor_name, currency (USD/EUR/GBP/CNY), amount, due_date, category, status (pending/paid/overdue), created_at, updated_at. Mirrored `receivables` table for NGN income. |
| **Bulk entry** | CSV/Excel upload for companies with 50+ payables. Template downloadable from dashboard. Uses `xlsx` library for parsing. |
| **Validation** | Amount > 0, due date in future (warning if past), currency from allowed list, vendor name required. |
| **Status tracking** | Entries can be marked as paid (with actual rate paid) to build historical accuracy data. |

### F2: Live Exchange Rate Feed

**Priority:** P0 (Must Have)

| Element | Detail |
|---------|--------|
| **Data sources** | CBN official rate (scraped from CBN website, updated daily), parallel market rate (ExchangeRate-API + AbokiFX scraping as backup), NAFEM/I&E window rate. |
| **Update frequency** | Parallel market: every 15 minutes during trading hours (8am-6pm WAT). CBN official: once daily at 4pm WAT. |
| **Rate display** | Dashboard header shows: parallel rate, CBN rate, spread (%), 24hr change, 7-day change. |
| **Historical storage** | All rates stored in `exchange_rates` table with timestamp. Enables historical analysis back to data collection start + pre-loaded 3-year historical data. |
| **Multi-currency** | USD/NGN primary. EUR/NGN, GBP/NGN, CNY/NGN supported. Cross-rates derived from USD pairs. |
| **Rate alert** | Push notification (email + WhatsApp via Termii) when parallel rate moves more than user-configured threshold (default: 2%) in 24 hours. |

### F3: Exposure Calculation Engine

**Priority:** P0 (Must Have)

| Element | Detail |
|---------|--------|
| **Gross exposure** | Sum of all pending USD payables converted at current parallel market rate. |
| **Net exposure** | Gross exposure minus any USD receivables or USD cash holdings (manually entered). |
| **Exposure by time bucket** | Payables grouped by due date: 0-30 days, 31-60 days, 61-90 days, 90+ days. Each bucket shows USD amount and NGN equivalent. |
| **Concentration analysis** | Exposure by vendor (top 5 vendors as % of total), by category, and by time bucket. Flags if any single vendor exceeds 30% of total exposure. |
| **Trend chart** | Line chart showing total NGN exposure over last 30/60/90 days. Separates rate-driven changes from volume-driven changes. |
| **Auto-refresh** | Exposure recalculates automatically when rates update. Dashboard shows "last updated" timestamp. |

### F3.5: Expectation vs Reality Dashboard

**Priority:** P0 (Must Have)

| Element | Detail |
|---------|--------|
| **Description** | Shows the exchange rate the business assumed in their budget vs actual rate trajectory. Highlights the variance between budgeted assumptions and reality, translating the gap into concrete financial impact. |
| **Budget rate input** | During onboarding (or editable anytime), user enters their budgeted USD/NGN rate for the current fiscal year. |
| **Variance calculation** | Real-time display: "Your budget assumed N1,300/$. Actual is N1,544/$. This 18.8% variance increased your raw material costs by N75M this quarter." Dynamically recalculated as rates move and as payables are added/paid. |
| **Trend visualization** | Line chart showing budgeted rate (flat line) vs actual rate trajectory over time, with shaded area representing cumulative cost overrun. |
| **Cognitive bias callout** | Banner: "Nigerian businesses expected naira appreciation every month in 2025 (CBN expectation index: 9.8→29.7). The naira depreciated 25.3%. Are your 2026 budget assumptions based on data or hope?" |
| **Quarterly impact summary** | Table breaking down budget variance impact by quarter, by vendor, and by payable category. Exportable for board reporting. |

### F4: Scenario Modeling

**Priority:** P0 (Must Have)

| Element | Detail |
|---------|--------|
| **Interface** | Slider + numeric input for "What if naira depreciates X% from current rate?" Supports +5%, +10%, +20%, +30%, +50% scenarios and custom input. |
| **Output** | Table showing: current exposure (NGN), stressed exposure (NGN), incremental loss (NGN), incremental loss as % of annual revenue (user enters revenue during onboarding). |
| **Multi-scenario comparison** | Side-by-side view of up to 4 scenarios. Exportable as chart + table. |
| **Reverse scenario** | "At what rate does my FX loss exceed N__M?" Solves for the break-even rate. |
| **Time-bucketed stress** | Applies scenario only to payables due within selected time window (e.g., "What if naira depreciates 10% before my 30-day payables come due?"). |
| **Historical benchmark** | Shows where modeled rate falls relative to historical range. "A 20% depreciation would put the rate at N1,842/$, which is 8% above the all-time high of N1,705/$." |

### F5: Risk Alerts & Notifications

**Priority:** P1 (Should Have for MVP)

| Element | Detail |
|---------|--------|
| **Alert types** | (1) Rate movement exceeds threshold, (2) total exposure exceeds limit, (3) payable due date approaching (7-day, 3-day, 1-day), (4) vendor concentration exceeds threshold. |
| **Channels** | Email (Resend) primary. WhatsApp (Termii) for critical alerts. SMS (Termii) as fallback. |
| **Configuration** | User sets thresholds per alert type. Defaults: 2% rate move, N500M exposure ceiling, 7-day payable reminder, 30% vendor concentration. |
| **Quiet hours** | Configurable. Default: no alerts between 10pm-7am WAT. |
| **Alert log** | All sent alerts logged in-app with timestamp and delivery status. |

### F6: Timing Intelligence (Historical Patterns)

**Priority:** P1 (Should Have for MVP)

| Element | Detail |
|---------|--------|
| **Analysis** | Monthly and weekly seasonality analysis of USD/NGN parallel rate over last 3 years. |
| **Display** | Heatmap showing average monthly rate change (%). Table showing "best" and "worst" months/weeks for USD purchases historically. |
| **Disclaimer** | Prominent disclaimer: "Historical patterns are not predictions. Past performance does not indicate future rates." |
| **Insight format** | "In the last 3 years, January has seen naira depreciation in 3 out of 3 years, averaging 4.7%. March has seen appreciation in 2 out of 3 years." |
| **Event overlay** | Marks major CBN policy changes, election periods, and oil price shocks on the timeline. |

### F7: Board Report Export

**Priority:** P1 (Should Have for MVP)

| Element | Detail |
|---------|--------|
| **Formats** | PDF (formatted report with charts) and XLSX (raw data with formatted headers). |
| **Contents** | Executive summary (auto-generated), exposure snapshot, scenario analysis, historical rate chart, top vendor concentrations, alerts triggered in period. |
| **Customization** | User can add commentary to each section before export. Company logo upload for branded reports. |
| **Scheduling** | Manual export for MVP. Post-MVP: auto-generate and email weekly/monthly. |

---

## 7. Technical Architecture

### Stack (per shared-context.md)

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14+ (App Router, Server Components), TypeScript |
| **Database** | PostgreSQL via Supabase |
| **ORM** | Prisma |
| **Auth** | Supabase Auth (email + OTP via Termii) |
| **Hosting** | Vercel |
| **Payments** | Paystack (NGN subscriptions) |
| **Charts** | Recharts (lightweight, SSR-compatible) or Chart.js |
| **PDF export** | @react-pdf/renderer or Puppeteer (server-side) |
| **Excel export** | xlsx library |
| **FX rates** | ExchangeRate-API (primary), CBN scraper (secondary), AbokiFX scraper (tertiary) |
| **Notifications** | Resend (email), Termii (WhatsApp + SMS) |
| **Cron jobs** | Vercel Cron (rate fetching every 15 min) |

### Data Model (Core Tables)

```
companies
  id, name, industry, annual_revenue_ngn, created_at

users
  id, company_id, email, phone, role (admin/viewer), created_at

payables
  id, company_id, vendor_name, currency, amount, ngn_equivalent_at_entry,
  rate_at_entry, due_date, category, status, paid_rate, paid_date, notes,
  created_at, updated_at

receivables
  id, company_id, customer_name, currency, amount, due_date, category,
  status, created_at, updated_at

exchange_rates
  id, currency_pair, rate_type (parallel/official/nafem), rate, source,
  fetched_at

alerts
  id, company_id, alert_type, threshold, channel, is_active, created_at

alert_log
  id, alert_id, company_id, message, channel, delivered_at, status

scenarios (saved)
  id, company_id, name, depreciation_pct, snapshot_data (JSONB), created_at
```

### Rate Fetching Architecture

1. **Vercel Cron** triggers `/api/rates/fetch` every 15 minutes (8am-6pm WAT), hourly outside trading hours.
2. Endpoint hits ExchangeRate-API for USD/NGN, EUR/NGN, GBP/NGN, CNY/NGN.
3. Falls back to CBN scraper if primary fails.
4. Stores rate in `exchange_rates` table.
5. Compares new rate to previous rate. If delta exceeds any company's alert threshold, enqueues alert via Supabase Realtime + Termii.
6. Dashboard subscribes to Supabase Realtime channel for live rate updates without polling.

### Performance Targets

| Metric | Target |
|--------|--------|
| Dashboard initial load | <2 seconds (SSR) |
| Scenario calculation | <500ms client-side |
| Rate update propagation | <5 seconds from fetch to UI |
| CSV upload (500 rows) | <3 seconds processing |
| PDF report generation | <10 seconds |
| Page weight | <200KB initial bundle |

---

## 8. User Flows

### Flow 1: Onboarding (3 steps, <3 minutes)

1. **Sign up** — Email + phone + OTP verification.
2. **Company profile** — Company name, industry (dropdown), annual revenue range (dropdown: N500M-1B, N1-2B, N2-5B, N5B+), primary import currencies (checkboxes, USD pre-selected).
3. **First payables entry** — Prompted to enter top 3 USD payables or upload CSV. Skip option available with sample data pre-loaded for demo.

Dashboard loads immediately after step 3 with exposure calculated.

### Flow 2: Daily Check-in (<30 seconds)

1. Open dashboard. Header shows current parallel rate, 24hr change, total exposure in NGN.
2. Glance at exposure trend chart and upcoming payable due dates.
3. Check if any alerts fired overnight (badge count on alerts icon).
4. Done. No action needed unless alert requires attention.

### Flow 3: Scenario Modeling for Board Prep (~5 minutes)

1. Navigate to Scenarios tab.
2. Select "New Scenario" — set depreciation to 10%, 20%, 30%.
3. Review side-by-side impact table: current vs. stressed exposure, incremental loss, % of revenue.
4. Add commentary to each scenario ("Management recommendation: accelerate Q2 USD purchases if rate stays below N1,600").
5. Click "Export Board Report" — PDF downloads with company logo, exposure summary, scenarios, and commentary.

### Flow 4: Adding New Payable (~30 seconds)

1. Click "+" button on payables list.
2. Enter: vendor, amount (USD), due date, category (dropdown).
3. Save. Dashboard instantly recalculates exposure.
4. If new payable pushes total exposure above alert threshold, in-app notification appears immediately.

### Flow 5: Marking Payable as Paid (~15 seconds)

1. Click payable row. Click "Mark as Paid."
2. Enter actual rate paid (pre-filled with current parallel rate).
3. System calculates realized gain/loss vs. rate at time of entry.
4. Payable moves to "Paid" tab. Historical accuracy data updated.

---

## 9. Go-to-Market Strategy

### Phase 1: Founder-Led Sales (Weeks 1-8)

**Channel: MAN (Manufacturers Association of Nigeria) Directory**

- MAN publishes a member directory with ~3,000 companies including contact information.
- Filter for mid-market manufacturers in Lagos, Ogun, Rivers, and Kano (top manufacturing states).
- Target list: 100 companies. Realistic contact rate: 30-40 CFOs/finance directors.

**Outreach Sequence:**

1. **LinkedIn connection request** to CFO/FD with personalized note referencing their company's industry and FX exposure.
2. **Email (Day 2):** "Your competitors lost N__B to FX last year. How much did [Company Name] lose?" Attach 1-page PDF showing industry FX loss benchmarks.
3. **WhatsApp follow-up (Day 5):** Brief voice note or text. WhatsApp is the business communication standard in Nigeria.
4. **Demo offer:** 15-minute screen share showing their industry's FX exposure modeled in ForexGuard.

**Sales hook based on documented bias:** *"Nigerian businesses expected naira appreciation every month in 2025 while it depreciated 25.3%. Your FX expectations have been wrong every month this year. Here's what it's costing you."* This hook works because it is empirically verifiable — CBN publishes the expectation index — and personally confronting without being adversarial.

**Secondary targets:** Textile manufacturers (57.36% capacity, survived despite 4x energy cost increase — likely benefiting from naira weakness on exports, need tools to optimize this advantage and manage the FX complexity of mixed import/export exposure).

**Conversion target:** 10 paying customers from first 100 contacts (10% conversion).

### Phase 2: Content & Community (Weeks 4-12)

- **Monthly "FX Exposure Report"** — Free PDF analyzing naira trends, sector-by-sector FX losses, and timing patterns. Distributed via LinkedIn, MAN networks, LCCI events. Establishes credibility and generates inbound leads.
- **WhatsApp broadcast list** — Weekly rate summary and exposure insights for subscribers. Soft CTA to ForexGuard dashboard.
- **CFO roundtable (virtual)** — Monthly 30-minute Zoom session: "Managing FX Risk in [Month] 2026." Invite 10-15 CFOs. Present ForexGuard data as the framing tool.

### Phase 3: Channel Partnerships (Months 3-6)

- **Accounting firms:** Partner with mid-tier firms (BDO, Grant Thornton, Mazars Nigeria) who advise manufacturers. Referral fee: 15% of first-year subscription.
- **Industry associations:** MAN, LCCI, NACCIMA. Offer member discount (20% off) in exchange for newsletter placement and event sponsorship.
- **ERP consultants:** SAP B1 and Sage partners who already sell to target companies. ForexGuard as a complementary tool.

### Pricing & Packaging for Launch

| Tier | Monthly (NGN) | Monthly (USD) | Features |
|------|---------------|---------------|----------|
| **Starter** | N150,000 | ~$100 | 50 payable entries, 2 users, basic scenarios, email alerts |
| **Professional** | N250,000 | ~$163 | Unlimited entries, 5 users, advanced scenarios, WhatsApp alerts, board reports, timing intelligence |
| **Founding Customer** | 50% off any tier for 3 months | | Early adopters who provide feedback and case study permission |

**14-day free trial. No credit card required.**

---

## 10. Success Metrics & Milestones

### Launch Criteria (Week 3)

- [ ] Dashboard loads in <2 seconds with live rate data
- [ ] User can enter, edit, and delete payables/receivables
- [ ] CSV/Excel bulk upload processes 500 rows in <3 seconds
- [ ] Exposure calculation updates within 5 seconds of rate change
- [ ] Scenario modeling produces results in <500ms for 4 simultaneous scenarios
- [ ] PDF board report exports correctly with charts and commentary
- [ ] Email and WhatsApp alerts fire within 60 seconds of threshold breach
- [ ] Paystack subscription billing active for Starter and Professional tiers

### 30-Day Metrics

| Metric | Target |
|--------|--------|
| Signed-up companies | 20+ |
| Completed onboarding (entered 3+ payables) | 12+ |
| Paying customers (post-trial) | 5+ |
| MRR | N750K-N1.25M ($490-$815) |
| Weekly active users | 70%+ of paying customers |
| Average session duration | >3 minutes |

### 60-Day Metrics

| Metric | Target |
|--------|--------|
| Paying customers | 10+ |
| MRR | N1.5M-N2.5M ($980-$1,630) |
| Trial-to-paid conversion | >25% |
| NPS (paying customers) | >40 |
| Board report exports per customer | >1/month |
| Churn (monthly) | <5% |

### 90-Day Metrics

| Metric | Target |
|--------|--------|
| Paying customers | 20-30 |
| MRR | N3M-N7.5M ($1,960-$4,890) |
| Revenue | Tracking toward $10-16K MRR annualized |
| Referral rate | >20% of new customers from referrals |
| Feature requests logged | 50+ (validates engagement) |

### North Star Metric

**Total USD exposure tracked on the platform (cumulative).** This measures both adoption (more companies) and depth of use (more payables entered). Target: **$50M in tracked exposure by Day 90** (implies ~20 mid-market companies with average $2.5M in USD payables).

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| **Rate data source becomes unreliable or gets blocked** | Medium | High | Three-source redundancy (ExchangeRate-API, CBN scraper, AbokiFX). Alert to founder if all sources fail. Manual rate entry as ultimate fallback. |
| **CFO sales cycle exceeds 6 weeks** | High | Medium | Offer extended 30-day trial for qualified prospects. Provide ROI calculator showing FX losses vs. subscription cost. Target procurement/operations as secondary entry point. |
| **Users don't enter payable data consistently** | Medium | High | CSV bulk upload reduces friction. Weekly email reminder: "You have X payables with no due date update." Gamify completeness with "Exposure Accuracy Score." |
| **CBN policy change stabilizes naira, reducing urgency** | Low | High | Reposition as "treasury visibility" tool, not just "FX crisis" tool. Add multi-currency support, cash flow forecasting. The need for exposure tracking persists even in stable rate environments. |
| **Large competitor (Flutterwave, Mono) enters space** | Low | Medium | They target developers and consumers, not CFOs. ForexGuard's value is domain-specific workflow (payable tracking, scenario modeling, board reports), not just rate data. Deepen CFO workflow integration before a generalist can pivot. |
| **Data security concern from finance teams** | Medium | Medium | Supabase row-level security. SOC 2 compliance roadmap shared with prospects. No bank credentials stored. All data is user-entered (no API connections to bank accounts in MVP). |
| **Parallel market rate becomes illegal to publish** | Low | High | Offer "custom rate" input field where users enter their own observed rate. Tool calculates exposure at whatever rate the user specifies. Shifts legal risk to user's own rate observation. |

---

## 12. Build-or-Skip Scorecard

| Dimension | Rating (1-10) | Weight | Weighted | Rationale |
|-----------|---------------|--------|----------|-----------|
| **Build Speed** | 8 | 5% | 0.40 | Dashboard + CRUD + rate feed + scenario math. 2-3 weeks for a data-science-oriented solo dev. No complex integrations. Chart libraries and export tools are mature. |
| **Time to Revenue** | 6 | 15% | 0.90 | 4-6 weeks. CFO sales cycle is longer than ops manager cycle. Mitigated by urgency of FX losses and low price point. Founding customer discount accelerates. |
| **Market Size** | 9 | 15% | 1.35 | N1.62T ($1.06B) in documented losses. Every importer and manufacturer with USD payables is a prospect. 5,000-8,000 mid-market companies in SAM. |
| **Competition** | 9 | 10% | 0.90 | No Nigerian-focused mid-market FX exposure tool exists. Global treasury tools are 100x the price. Rate tracking sites don't do exposure calculation. Genuine whitespace. |
| **Skill Fit** | 9 | 15% | 1.35 | Core data science: time series analysis, scenario modeling, statistical pattern detection, data visualization. This is what a data scientist builds naturally. |
| **Capital Required** | 9 | 10% | 0.90 | $0-5K bootstrappable. Supabase free tier, Vercel free tier, ExchangeRate-API free tier (1,500 requests/month), Termii pay-per-message. No infrastructure cost until significant scale. |
| **Buyer Clarity** | 7 | 20% | 1.40 | CFOs are identifiable via MAN directory, LinkedIn, and industry events. Harder to reach cold than ops managers, but highly motivated once engaged. Can name 50+ target companies today. |
| **Fintech Upside** | 9 | 10% | 0.90 | Natural evolution path: (1) FX hedging marketplace connecting companies with forward contract providers, (2) multi-currency treasury management, (3) trade finance/LC facilitation, (4) FX payment execution. Platform becomes the system of record for corporate FX activity. |

### Composite Score: **8.10 / 10**

### Verdict: **BUILD — High Priority**

ForexGuard scores exceptionally on skill fit, market size, and competition. The primary risk factor is the CFO sales cycle (longer than operational tools), but the severity and visibility of the FX problem partially offsets this — CFOs are actively looking for solutions, not being convinced they have a problem. The fintech upside is among the highest in the portfolio: an FX exposure dashboard is a natural entry point to becoming the corporate FX operating system for Nigerian mid-market.

**Recommended sequencing:** Build ForexGuard in weeks 3-5 after launching the first Tier 1 product (which proves the tech stack, payment flow, and GTM motion). Use the first product's revenue and learnings to accelerate ForexGuard's launch.

---

## Appendix A: Key Data Sources

| Data Point | Value | Source |
|-----------|-------|--------|
| Manufacturer FX losses (2024) | N1.62T ($1.06B) | MAN member financial filings |
| Naira depreciation (2024) | 40.9% (N997 to N1,535/$) | CBN, parallel market tracking |
| MTN FX losses | N925B | MTN Nigeria 2024 annual report |
| Nestle FX losses | N290B | Nestle Nigeria 2024 annual report |
| Finance cost surge | 1,345% YoY (Q1 2024) | MAN sectoral analysis |
| FX scarcity as constraint | 92.5% of manufacturers | MAN CEO Confidence Index Q4 2024 |
| GTBank dollar limit cut | $1,500 to $100 | GTBank customer notice, media reports |
| LC payment decline | 57% YoY drop | CBN trade data |

## Appendix B: Post-MVP Roadmap

| Phase | Timeline | Features |
|-------|----------|----------|
| **V1.1** | Month 2 | Bank statement CSV import (auto-parse payables), multi-company dashboard for holding companies |
| **V1.2** | Month 3 | API integration with Mono.co for automatic bank balance pulls, ERP data connectors (SAP B1, Sage) |
| **V2.0** | Month 4-6 | FX hedging marketplace (connect companies with forward contract providers), natural hedging suggestions (match USD payables with USD receivables) |
| **V3.0** | Month 6-12 | Multi-currency treasury dashboard, cash flow forecasting with AI, trade finance/LC facilitation, FX payment execution partnership with licensed dealer |
