# PRD 06: CashFlow AI — Working Capital Forecasting for Nigerian SMEs

**Version:** 1.0 | March 2026
**Status:** Draft
**Depends on:** [00-shared-context.md](./00-shared-context.md)

---

## 1. Executive Summary

Nigerian SMEs operate in a cash-flow minefield. With lending rates at 35.5%, a N49.4T credit gap, and zero visibility into future liquidity, businesses make critical financial decisions — payroll, inventory purchases, supplier payments — based on gut feeling and bank balance checks. CashFlow AI connects to business bank accounts via Mono.co (or accepts CSV uploads), uses AI to categorize and pattern-match transactions, and generates 30/60/90-day cash flow forecasts with actionable alerts. The product turns a finance manager's morning "check the balance" ritual into a forward-looking decision tool that prevents shortfalls before they happen. Revenue comes from SaaS subscriptions (N75-150K/month) with a hidden second revenue stream: warm referrals to lending partners when the system detects a funding gap.

**Target:** 15 paying customers within 90 days = ~$10K MRR.

---

## 2. Market Opportunity

### The Credit Access Desert

Nigeria's Credit Access Index sits at **9.2 out of 100** — functionally zero. This means businesses cannot rely on credit lines, overdraft facilities, or quick-draw lending to smooth cash flow gaps. Every naira of working capital must be self-managed.

**VALIDATION:** Credit Access Index turned positive in August 2025 for the first time (from -8.8 in Feb to +9.2 in Nov), but at 35.5% lending rates. This is "survival borrowing" — businesses accessing credit because the alternative is shutdown. CashFlow AI helps businesses forecast needs 60-90 days early so they can access CHEAPER options (CP at 15-25% vs bank overdraft at 35.5%).

**Commercial paper as escape valve:** The commercial paper market exploded to N1.58T in H1 2025 (107% YoY growth). Businesses are choosing CP at 15-25% yields over bank loans at 35.5%. CashFlow AI with a CP timing recommendation module could save the average manufacturer N43.75M annually on N500M in financing (35.5% vs 18% = 17.5% savings).

**Inventory liquidity crisis:** Unsold inventory surged 87.5% to N2.14T — cash locked in goods that cannot be sold. Businesses need forecasting to navigate this liquidity crisis.

### Quantified Pain

| Metric | Value | Source |
|--------|-------|--------|
| SME credit gap | N49.4T ($32.2B) | IFC/World Bank |
| Businesses citing high interest as barrier | 67.2% | MAN Survey 2024 |
| Average lending rate | 35.5% | CBN, 2025 |
| MSMEs shut down (2023-2024) | 7.2M | SMEDAN |
| Capacity utilization crash | 62% → 47.72% | MAN Q2-Q4 2025 |
| Businesses using spreadsheets for forecasting | ~85% (est.) | Industry interviews |

### Why Now

1. **Mono.co maturity:** Nigerian open banking APIs now cover 20+ banks with reliable transaction data access. Two years ago this infrastructure did not exist at production quality.
2. **AI cost collapse:** GPT-4-class models can categorize Nigerian business transactions (messy descriptions, Pidgin references, abbreviations) at <$0.01 per 100 transactions. This was not economically viable 18 months ago.
3. **Desperation cycle:** With 7.2M closures and capacity utilization crashing, surviving SMEs are actively seeking tools to avoid becoming the next statistic. Cash management is the number one cited survival skill.
4. **Lender appetite:** Fintechs like FairMoney, Carbon, and Moniepoint are actively seeking qualified SME borrowers but lack distribution. A forecasting tool that identifies funding gaps is a natural referral channel.

### Total Addressable Market

- **SMEs with N10-50M/month revenue:** ~180,000 businesses (SMEDAN registry extrapolation)
- **Willingness to pay for financial tools:** 12-18% (based on Paystack/Moniepoint adoption curves)
- **SAM:** ~25,000 businesses
- **SOM (Year 1):** 50-100 customers at N75-150K/month = N45-180M ($29K-$117K) ARR

---

## 3. Target Persona

### Primary: Chidi — SME Finance Manager

| Attribute | Detail |
|-----------|--------|
| **Title** | Finance Manager / CFO / Owner handling finances |
| **Company** | Manufacturing, wholesale, or services firm |
| **Revenue** | N10-50M/month (mid-market SME) |
| **Team size** | 20-150 employees |
| **Location** | Lagos, Abuja, Port Harcourt, Kano |
| **Age** | 32-50 |
| **Education** | BSc Accounting/Finance, possibly ICAN certified |
| **Tools today** | Excel, bank mobile apps, WhatsApp groups with suppliers |
| **Pain frequency** | Daily — checks bank balance every morning |
| **Decision authority** | Can approve N50-200K/month software spend |

### Chidi's Weekly Reality

- **Monday:** Checks bank balances across 2-3 accounts. Tries to remember what payments are due this week. Opens Excel to update a manual tracker that is already 2 weeks stale.
- **Wednesday:** Supplier calls demanding payment. Chidi thought they had until Friday. Scrambles to move money between accounts.
- **Friday:** Payroll is next week. Revenue collection from a major client is 12 days late. Chidi does not know whether to delay a supplier payment or take an expensive overdraft. Makes the decision based on instinct.

### Secondary: Ngozi — SME Owner

Same company profile, but the owner herself. Smaller firms (N10-20M/month) where the owner is the finance function. Less spreadsheet-savvy, more mobile-first. Needs even simpler UI. Willing to pay more for peace of mind because the business is her personal livelihood.

---

## 4. Problem Deep Dive

### Problem 1: Zero Forward Visibility

**Current state:** Business owners and finance managers check their bank balance as a proxy for financial health. A healthy balance today says nothing about whether they can make payroll in 18 days after three suppliers draw on outstanding invoices.

**Cost of the problem:** Businesses take emergency loans at 35.5%+ rates, delay supplier payments (damaging relationships and future credit terms), or miss growth opportunities (cannot commit to a large order because they cannot see whether cash will be available).

**Why existing solutions fail:**
- **Excel spreadsheets:** Manual, always stale, do not connect to live bank data. Require accounting expertise to maintain. Break when the person who built them leaves.
- **QuickBooks/Sage:** Designed for historical accounting, not forward-looking forecasting. Nigerian transaction categorization is poor. Expensive ($30-80/month) for what Nigerian SMEs need.
- **Bank dashboards:** Show balances and recent transactions. No forecasting. No categorization intelligence.

### Problem 2: Transaction Categorization Chaos

Nigerian bank transaction descriptions are notoriously messy: "TRF FRM CHUKWUEMEKA ENTERPRISES/NIP" tells you nothing about whether this is a client payment, a refund, or a personal transfer. Manual categorization in Excel takes hours weekly and is error-prone.

**AI opportunity:** LLMs can parse Nigerian transaction descriptions with contextual understanding — recognizing "DSTV" as a subscription, "NNPC" as fuel, company names as client payments — and learn from user corrections over time.

### Problem 3: No Alert System for Cash Shortfalls

When a shortfall is coming, the finance manager discovers it when the bank balance hits zero — not 14 days before when intervention was still possible. There is no early warning system.

**Impact:** The difference between "we need to collect from Client X this week" (proactive) and "we cannot make payroll" (crisis) is simply 14 days of advance notice.

### Problem 4: Lender Discovery is Broken

When an SME does need external financing, finding the right lender is a maze. Which fintech offers invoice financing vs. term loans? What are actual rates (not advertised rates)? What documentation is needed? SMEs spend days researching and applying to multiple lenders, often getting rejected because they applied to the wrong type.

**CashFlow AI opportunity:** The system already knows the business's cash flow patterns, revenue stability, and funding gap size. It can match to appropriate lenders and provide the lender with pre-qualified data (with user consent), increasing approval rates and reducing search time.

### Problem 5: Survival Borrowing at Punitive Rates

**Survival borrowing:** Businesses that previously relied on bank credit now pay 35.5%. Some are turning to commercial paper (15-25%), but mid-market companies lack access to CP markets. A forecasting tool that recommends the cheapest funding source per situation (CP vs bank vs factoring vs payment acceleration) delivers quantifiable savings.

### Problem 6: Regional Cash Flow Disruptions

**Regional cash flow volatility:** South-East businesses face periodic sit-at-home shutdowns that destroy cash flow predictability. Forecasting tools must account for regional disruption patterns.

---

## 5. Solution Overview

### Core Value Proposition

"See your cash future before it happens. CashFlow AI connects to your bank accounts, learns your business rhythm, and tells you — 30, 60, 90 days out — exactly when you will have too much cash, too little cash, or just enough."

### How It Works

```
Connect Bank Accounts (Mono.co) or Upload CSV
            ↓
AI Categorizes Every Transaction
(Revenue, Payroll, Rent, Suppliers, Tax, Utilities, etc.)
            ↓
Pattern Engine Identifies Recurring Flows
(Client X pays ~N2.5M every 3rd week of the month)
            ↓
Forecast Engine Projects 30/60/90 Days
(Expected inflows, confirmed outflows, projected balance)
            ↓
Alert Engine Watches for Shortfalls
("In 22 days, projected balance drops to -N1.8M")
            ↓
Recommendation Engine Suggests Actions
("Collect N3.2M from Client X (14 days overdue)" or
 "FairMoney offers invoice financing at 4.2%/month for your profile")
```

### Key Design Decisions

1. **Bank connection first, CSV as fallback:** Mono.co provides live data. CSV upload serves businesses whose banks are not yet on Mono or who prefer manual control. Both paths lead to the same categorization and forecasting engine.
2. **AI categorization with human override:** The system auto-categorizes but lets users correct. Corrections train a per-business model that improves over time. This is the moat — category accuracy improves with usage.
3. **Conservative forecasting:** Default forecasts assume late payments arrive 7 days after expected date. Users can adjust optimism level. Better to over-warn than under-warn.
4. **Lender referrals are opt-in:** The system never shares data without explicit consent. When a shortfall is detected, it offers: "Would you like to see financing options for this gap?" This keeps trust high and conversion genuine.

---

## 6. MVP Feature Set

### Phase 1: Core Forecasting (Weeks 1-3)

| Feature | Priority | Description |
|---------|----------|-------------|
| Bank account connection | P0 | Mono.co integration for top 10 Nigerian banks |
| CSV upload | P0 | Upload bank statements (Excel/CSV) with column mapping |
| AI transaction categorization | P0 | Auto-categorize into 15-20 business categories using LLM |
| Category override | P0 | User corrects categories; system learns |
| Cash flow dashboard | P0 | Current balance, 30-day forecast chart, key metrics |
| 30/60/90-day forecast | P0 | Projected daily balance based on recurring patterns |
| Shortfall alerts | P0 | WhatsApp/SMS alert when projected balance goes negative |
| Excel export | P0 | Export categorized transactions and forecast to XLSX |

### Phase 2: Intelligence Layer (Weeks 4-5)

| Feature | Priority | Description |
|---------|----------|-------------|
| Receivables tracker | P1 | Expected payments from clients based on historical patterns |
| Scenario modeling | P1 | "What if Client X pays 2 weeks late?" toggle |
| Multi-account view | P1 | Consolidated view across 2-3 bank accounts |
| Monthly cash flow report | P1 | Auto-generated PDF report for board/investors |
| Lender referral module | P1 | When shortfall detected, show matched lending options |
| Financing source comparison | P1 | When forecast shows shortfall, display options ranked by all-in cost (CP at 18%, fintech at 25%, bank at 35.5%, emergency overdraft at 40%+). Earn referral commission on funded loans. |
| Bank charges tracking | P1 | Include banking fees as a cost category in forecasts and flag when charges spike unexpectedly (Sept 2025 saw Bank Charges jump to #1 constraint nationwide). |

### Phase 3: Growth Features (Weeks 6-8)

| Feature | Priority | Description |
|---------|----------|-------------|
| Budget vs. actual tracking | P2 | Set monthly budgets per category, track variance |
| Team access | P2 | Invite accountant or co-founder with read-only access |
| API for accountants | P2 | Accountants manage multiple client dashboards |
| Vendor payment scheduling | P2 | Suggest optimal payment dates based on cash position |
| USSD daily balance alert | P2 | Business receives SMS each morning with projected cash position for the day. Reaches 42% of connections on 2G. |

### Explicitly Out of Scope (MVP)

- Actual payment processing (use Paystack separately)
- Invoicing (use existing invoicing tools)
- Full accounting/bookkeeping (not competing with QuickBooks)
- Inventory management
- Multi-currency forecasting (Naira only for MVP)

---

## 7. Key Screens & UX

### Screen 1: Onboarding (3 steps)

**Step 1: Connect Your Bank**
- Prominent "Connect with Mono" button (branded, trusted)
- Alternative: "Upload Bank Statement (CSV/Excel)" link below
- Copy: "We read your transactions. We never move money. Bank-level security."

**Step 2: Review Categories**
- Show last 30 days of transactions, auto-categorized
- Color-coded: green (revenue), red (expenses), gray (transfers)
- User taps any row to change category from dropdown
- Progress bar: "87% categorized automatically — review the rest"

**Step 3: Set Alert Preferences**
- Toggle: WhatsApp alerts / SMS alerts / Email alerts
- Threshold: "Alert me when projected balance drops below N___"
- Default: N500,000 (adjustable)

### Screen 2: Dashboard (Home Screen)

```
┌─────────────────────────────────────────┐
│  CashFlow AI              [Settings ⚙]  │
├─────────────────────────────────────────┤
│                                         │
│  Current Balance          N 12,450,000  │
│  ──────────────────────────────────────│
│  30-Day Forecast          N  8,200,000  │
│  60-Day Forecast          N 14,100,000  │
│  90-Day Forecast          N 11,300,000  │
│                                         │
│  [====== Cash Flow Chart (30 days) ===] │
│  |    /\      /\                        │
│  |   /  \    /  \    /\                 │
│  |  /    \  /    \  /  \               │
│  | /      \/      \/    \              │
│  |/________________________\___         │
│  --- Alert Zone (red below N500K) ---   │
│                                         │
│  ⚠ WARNING: Day 22 — Balance drops to  │
│    N380,000. Action needed.             │
│  [View Details]  [See Lending Options]  │
│                                         │
│  ── This Week ──────────────────────── │
│  Expected In:    N 3,200,000            │
│  Expected Out:   N 4,800,000            │
│  Net:           -N 1,600,000            │
│                                         │
│  [📊 Full Report]  [📥 Export Excel]    │
└─────────────────────────────────────────┘
```

### Screen 3: Transaction Feed

- Chronological list of all transactions
- Each row: Date | Description | Amount | Category (tag)
- Tap category tag to change it
- Filter by: category, date range, amount range
- Search bar for description text
- Running balance column on right side

### Screen 4: Forecast Detail

- Interactive chart showing projected balance over 30/60/90 days
- Hover/tap any day to see: expected inflows, expected outflows, projected balance
- Red zone highlighted below user's alert threshold
- Toggle: "Optimistic / Realistic / Conservative" forecast modes
- List below chart: "Key assumptions" — which recurring payments are expected when

### Screen 5: Shortfall Alert Detail

- When user taps an alert (in-app or from WhatsApp link):
  - "Your projected balance drops to N380,000 on April 12"
  - "This is N120,000 below your alert threshold"
  - **Recommended actions:**
    1. "Collect N3.2M from Dangote Cement (14 days overdue)" [Send Reminder]
    2. "Delay Vendor ABC payment by 7 days (saves N1.8M cash)" [Schedule]
    3. "Explore short-term financing" [View Options]
  - Financing options (if user opts in): FairMoney, Carbon, Moniepoint — rates, terms, estimated approval likelihood

### Screen 6: Lender Marketplace (Phase 2)

- Shows 3-5 matched lenders based on business profile
- Each card: Lender name, product type (invoice financing, term loan, overdraft), rate range, approval time, minimum requirements
- "Apply" button pre-fills application with CashFlow AI data (with user consent)
- Status tracker once applied: Submitted → Under Review → Approved/Declined

---

## 8. Technical Architecture

### System Architecture

```
┌─────────────┐     ┌──────────────┐     ┌────────────────┐
│  Next.js App │────→│ Supabase DB  │────→│ Forecast Engine │
│  (Vercel)    │     │ (PostgreSQL) │     │ (Edge Function) │
└──────┬───────┘     └──────────────┘     └────────────────┘
       │                    ↑
       │              ┌─────┴──────┐
       │              │ Mono.co    │  ← Bank data sync
       │              │ Webhook    │
       │              └────────────┘
       │
       ├──→ OpenAI API (transaction categorization)
       ├──→ Termii (WhatsApp/SMS alerts)
       ├──→ Paystack (subscription billing)
       └──→ Resend (email reports)
```

### Data Model (Core Tables)

```sql
-- Business accounts
businesses (
  id, name, industry, monthly_revenue_range,
  alert_threshold_ngn, forecast_optimism_level,
  created_at, owner_user_id
)

-- Connected bank accounts
bank_connections (
  id, business_id, mono_account_id, bank_name,
  account_number_masked, last_sync_at, status
)

-- Raw transactions (from Mono or CSV)
transactions (
  id, business_id, bank_connection_id,
  date, description_raw, amount, type (credit/debit),
  balance_after, category_id, category_confidence,
  is_user_corrected, created_at
)

-- Transaction categories
categories (
  id, name, type (revenue/expense/transfer),
  is_recurring_default, icon, color
)

-- Recurring pattern detection
recurring_patterns (
  id, business_id, category_id, counterparty_name,
  avg_amount, std_deviation, avg_interval_days,
  next_expected_date, confidence_score
)

-- Forecast snapshots
forecasts (
  id, business_id, generated_at, forecast_date,
  projected_inflows, projected_outflows,
  projected_balance, confidence_level,
  optimism_mode (conservative/realistic/optimistic)
)

-- Alerts
alerts (
  id, business_id, type (shortfall/collection/recommendation),
  forecast_date, projected_balance, threshold,
  message, status (pending/sent/acknowledged),
  sent_via (whatsapp/sms/email), sent_at
)

-- Lender referrals (Phase 2)
lender_referrals (
  id, business_id, lender_id, funding_gap_amount,
  status (shown/clicked/applied/approved/declined),
  commission_amount, created_at
)
```

### AI Categorization Pipeline

1. **Input:** Raw transaction description from bank (e.g., "TRF FRM CHUKWUEMEKA NTR ENT/NIP/REF12345")
2. **Pre-processing:** Strip reference numbers, normalize whitespace, extract amount patterns
3. **LLM classification:** Send batch of 50 transactions to OpenAI with business context prompt:
   - "You are categorizing Nigerian business bank transactions. Categories: [list]. This business is in [industry]. Previous corrections: [list]. Classify each transaction."
4. **Confidence scoring:** LLM returns category + confidence (0-1). Transactions below 0.7 confidence flagged for user review.
5. **Learning loop:** User corrections stored. After 10 corrections for a pattern (e.g., "CHUKWUEMEKA" = Supplier Payment), the system auto-applies without LLM call. Reduces API costs over time.
6. **Cost:** ~$0.005 per transaction batch. 500 transactions/month per business = ~$0.05/month per customer. Negligible.

### Forecast Algorithm

1. **Identify recurring patterns:** Cluster transactions by counterparty + category. Detect periodicity (weekly, biweekly, monthly, quarterly).
2. **Calculate expected timing:** For each recurring flow, compute average interval and standard deviation. Next expected date = last occurrence + average interval.
3. **Apply confidence decay:** Longer forecast horizons get wider confidence bands. 30-day forecast is high confidence; 90-day is directional.
4. **Overlay known events:** User can mark one-time expected payments (e.g., "Client Y owes N5M by April 15").
5. **Generate daily projected balance:** Starting from current balance, add/subtract expected flows for each day.
6. **Conservative mode:** Delays all expected inflows by 7 days, accelerates all expected outflows by 3 days. This is the default — better to be pleasantly surprised than caught off guard.

### Mono.co Integration

- **Connection flow:** OAuth 2.0 via Mono Connect Widget (embedded in Next.js)
- **Data sync:** Mono Transactions API — pull last 90 days on initial connection, then webhook-triggered incremental sync daily
- **Supported banks:** Access, GTBank, UBA, Zenith, First Bank, Stanbic, Fidelity, Sterling, Wema, FCMB (covers ~85% of SME banking)
- **Fallback:** CSV upload with intelligent column mapping (auto-detects date, amount, description columns from major bank export formats)

### Infrastructure Costs (Monthly Estimate)

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | $0 → $20 | Free tier for MVP, Pro when traffic grows |
| Supabase | $0 → $25 | Free tier (500MB DB, 50K auth users) |
| Mono.co | N5,000/account connected | ~N75K/month at 15 customers |
| OpenAI API | ~$5-15 | Transaction categorization batches |
| Termii | ~$20-40 | WhatsApp/SMS alerts |
| Resend | $0 | Free tier (3K emails/month) |
| **Total** | **~$60-150/month** | Scales linearly with customers |

---

## 9. Pricing & Unit Economics

### Pricing Tiers

| Tier | Price (Monthly) | Target | Features |
|------|----------------|--------|----------|
| **Starter** | N75,000 (~$49) | N10-25M/month businesses | 1 bank account, 30-day forecast, basic alerts, Excel export |
| **Growth** | N150,000 (~$98) | N25-50M/month businesses | 3 bank accounts, 90-day forecast, scenario modeling, monthly PDF report, priority support |
| **Enterprise** | Custom | N50M+/month businesses | Unlimited accounts, API access, accountant portal, custom integrations |

### Unit Economics Per Customer

| Metric | Starter | Growth |
|--------|---------|--------|
| Monthly revenue | N75,000 | N150,000 |
| Mono.co cost | N5,000 | N15,000 |
| AI/API costs | N2,000 | N5,000 |
| SMS/WhatsApp | N3,000 | N5,000 |
| **Gross margin** | **N65,000 (87%)** | **N125,000 (83%)** |

### Revenue Projections

| Milestone | Customers | Mix | MRR (NGN) | MRR (USD) |
|-----------|-----------|-----|-----------|-----------|
| Month 3 | 15 | 10 Starter, 5 Growth | N1,500,000 | ~$975 |
| Month 6 | 40 | 25 Starter, 15 Growth | N4,125,000 | ~$2,680 |
| Month 12 | 100 | 55 Starter, 35 Growth, 10 Enterprise | N13,375,000+ | ~$8,700 |
| Month 18 | 200 | Blended | N25,000,000+ | ~$16,250 |

### Hidden Revenue: Lender Referral Commissions

When CashFlow AI detects a funding gap and the user opts into financing recommendations:
- **Referral fee:** 0.5-2% of loan amount disbursed (standard fintech affiliate rate in Nigeria)
- **Average loan size:** N5-20M
- **Commission per referral:** N25,000-400,000
- **Conversion estimate:** 5% of users with shortfall alerts convert to loan application → 2% funded
- **At 200 users:** ~10 funded loans/month = N250K-4M additional monthly revenue

This second revenue stream could equal or exceed SaaS revenue by Month 18 without any additional product work — it emerges naturally from the forecasting engine.

**Hidden revenue stream: Lender referral commission.** If CashFlow AI routes a business to a N5M loan via fintech partner, earn 1-3% = N50-150K per referral. With 15 customers, even 2 referrals/month at N75K = N150K/month additional revenue — potentially exceeding SaaS revenue.

### Path to $10K MRR

$10K MRR = ~N15.4M/month

**Route A (SaaS only):** 100 customers at blended N154K/month — achievable by Month 10-12
**Route B (SaaS + referrals):** 60 customers + 5-8 funded loan referrals/month — achievable by Month 8-10

---

## 10. Go-to-Market

### Phase 1: Validation (Weeks 1-2)

1. **Build landing page** with waitlist form. Key message: "Stop guessing your cash flow. See 90 days ahead."
2. **Target 50 SMEs** through:
   - Family network in Port Harcourt (manufacturing, trading companies)
   - LinkedIn outreach to Nigerian finance managers (search: "Finance Manager" + Lagos/Abuja/PH)
   - LCCI (Lagos Chamber of Commerce) member directory
   - MAN (Manufacturers Association of Nigeria) member list
3. **Offer:** "Join our founding cohort — 50% off for 3 months + direct access to the founder"
4. **Goal:** 20 waitlist signups, 5 demo calls, 3 verbal commitments

### Phase 2: Founder-Led Sales (Weeks 3-6)

1. **Personal demos** via Zoom/Google Meet. 30-minute format:
   - "Show me your bank statement" (CSV upload during call)
   - Live categorization demo — "Look, it already knows this is payroll"
   - Show forecast: "Based on your last 3 months, here is what April looks like"
   - Close: "N75,000/month with 14-day free trial. Cancel anytime."
2. **WhatsApp group** for founding customers — direct support, feedback, feature requests
3. **Referral incentive:** "Refer another business, get 1 month free"

### Phase 3: Content + Community (Months 2-4)

1. **Weekly LinkedIn posts:** "5 signs your business will have a cash crisis next month" — practical, data-driven content targeting Nigerian finance professionals
2. **Monthly webinar:** "Cash Flow Masterclass for Nigerian SMEs" — free, educational, soft product demo at end
3. **Partnership with accounting firms:** Offer accountant dashboard (Phase 2 feature) — accountants recommend CashFlow AI to their clients
4. **LCCI/MAN event sponsorship:** Presence at chamber of commerce events, manufacturing association meetings

### Phase 4: Channel Partnerships (Months 4-8)

1. **Mono.co co-marketing:** CashFlow AI as a showcase customer for Mono's open banking APIs
2. **Paystack merchant referrals:** Paystack merchants who process N10M+/month are ideal customers
3. **Lender partnerships:** FairMoney, Carbon, Moniepoint — they refer borrowers to CashFlow AI for cash management; CashFlow AI refers users to them for financing. Circular value.

---

## 11. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **Mono.co API reliability** — bank connections drop, data gaps | High | High | CSV upload as permanent fallback. Cache all synced data locally. Show "last synced" timestamp prominently. Retry logic with exponential backoff. |
| 2 | **AI categorization errors** damage trust | Medium | High | Ship with mandatory review step in onboarding. Show confidence scores. Make correction dead-simple (one tap). Measure accuracy weekly; target >90% in Month 1, >95% by Month 3. |
| 3 | **Forecast inaccuracy** causes bad decisions | Medium | Critical | Default to conservative mode. Show confidence bands, not point estimates. Disclaimer: "Forecasts are projections, not guarantees." Track forecast vs. actual accuracy and display it. |
| 4 | **Data privacy concerns** prevent bank connection | Medium | High | SOC 2 compliance roadmap. Clear data policy: "We read, never write. We never move money." Mono.co's own security certifications as trust signal. Option to disconnect anytime with full data deletion. |
| 5 | **SMEs unwilling to pay N75K/month** for a forecasting tool | Medium | High | Anchor on cost of one emergency loan (35.5% interest on N5M = N147K/month). ROI framing: "CashFlow AI costs less than one week of emergency borrowing interest." Offer annual discount. |
| 6 | **Low engagement after signup** — users check once, forget | Medium | Medium | WhatsApp alerts drive re-engagement automatically. Weekly "Cash Flow Digest" email with 3 key numbers. Monday morning push notification: "Here is your week ahead." |
| 7 | **Competitor entry** from Mono.co or bank apps adding forecasting | Low | High | Speed to market + AI categorization accuracy as moat. Lender referral network as switching cost. User-specific learning models that improve with usage — hard to replicate without historical data. |
| 8 | **Regulatory risk** around bank data aggregation | Low | Medium | Mono.co handles regulatory compliance for data access. CashFlow AI is a read-only analytics layer. Monitor CBN open banking framework developments. |

---

## 12. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|:---:|-----------|
| **Build Speed** | 6 | Mono.co integration + AI categorization pipeline adds complexity. MVP in 3-4 weeks, not 2. |
| **Time to Revenue** | 6 | Requires data connection + categorization accuracy before value is clear. Not instant gratification. |
| **Market Size** | 9 | N49.4T credit gap. Every SME with a bank account is a potential customer. Massive TAM. |
| **Competition** | 5 | Some overlap with accounting tools (QuickBooks, Wave). No Nigeria-specific AI cash forecasting tool yet, but the space will attract entrants. |
| **Skill Fit** | 9 | AI/ML categorization is core skill. Data pipeline design, pattern recognition, LLM prompt engineering — all in wheelhouse. |
| **Capital Required** | 8 | Mono.co costs are per-connection (~N5K/account). AI API costs negligible. Bootstrappable, but Mono costs scale with customers. |
| **Buyer Clarity** | 6 | Finance managers are identifiable but "forecasting tool" is a harder sell than "solve this specific painful problem." Requires education. |
| **Fintech Upside** | 9 | Lender referral marketplace is a natural evolution. Could become the data layer for SME credit scoring. Huge fintech potential. |

### Weighted Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Build Speed | 5% | 6 | 0.30 |
| Time to Revenue | 15% | 6 | 0.90 |
| Market Size | 15% | 9 | 1.35 |
| Competition | 10% | 5 | 0.50 |
| Skill Fit | 15% | 9 | 1.35 |
| Capital Required | 10% | 8 | 0.80 |
| Buyer Clarity | 20% | 6 | 1.20 |
| Fintech Upside | 10% | 9 | 0.90 |
| **TOTAL** | **100%** | | **7.30** |

### Verdict: BUILD (Priority Tier 2)

CashFlow AI scores well on market size, skill fit, and fintech upside, but buyer clarity and competition drag it down slightly. The lender referral revenue stream is the secret weapon — it transforms a SaaS tool into a fintech distribution channel. Recommended as a second or third product, built after a simpler, faster-to-revenue product establishes cashflow and credibility.
