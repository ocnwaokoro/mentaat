# PRD 18: VendorScore — B2B Business Verification & Credit Scoring

## 1. Executive Summary

VendorScore is a B2B credit scoring and business verification platform built for Nigerian companies that extend trade credit without any reliable way to assess counterparty risk. The platform ingests data from the Corporate Affairs Commission (CAC), court records, social signals, and optional Mono.co bank statement analysis to generate a composite credit score and risk rating for any Nigerian business. A wholesaler in Lagos currently decides whether to extend N10M in 30-day trade credit to a new customer based on a handshake, a referral from a friend, and a gut feeling — and then discovers three months later that the customer's CAC registration lapsed two years ago and they have two pending court judgments for unpaid debts. VendorScore replaces gut feel with data. Enter a business name or CAC registration number, and within minutes receive a comprehensive risk report: registration status, filing history, directorship network, litigation history, and — if the subject business consents — a bank statement analysis showing cash flow patterns, average balances, and payment regularity. The output is a 0-100 VendorScore with a letter grade (A through F) and a recommended credit limit. Credit bureaus cover only 13% of Nigerian adults and virtually zero SMEs. There is no Nigerian equivalent to Dun & Bradstreet, Experian Business, or Cortera. With 7.2 million businesses shutting down in 2023-2024 (some of which took supplier money with them), the N49.4 trillion SME credit gap, and a N75 billion failed payment market growing at 42% annually, the infrastructure for B2B credit assessment is not just missing — its absence is actively destroying value across the Nigerian economy. VendorScore fills this gap, starting with a per-report pricing model at N20-50K per lookup and scaling to N150K/month unlimited subscriptions for high-volume users. The MVP requires 6-8 weeks to build due to data source integration complexity, targets wholesalers and distributors in the Food/Beverage sector, and positions itself as the credit scoring infrastructure layer that enables invoice factoring, trade credit insurance, and B2B lending to eventually emerge in Nigeria.

## 2. Market Opportunity

**The credit information vacuum is the single biggest structural failure in Nigerian B2B commerce.**

- **Credit bureau coverage:** Only 13% of Nigerian adults are covered by any credit bureau. For businesses — especially the 41.5 million MSMEs that make up 96% of Nigerian enterprises — coverage is effectively zero. There is no centralized, accessible database of business creditworthiness.
- **SME credit gap:** N49.4 trillion ($32.2 billion) in unmet SME credit demand (IFC/World Bank). This gap exists not because lenders lack capital but because they lack information. No credit data means no credit decisions means no credit extended.
- **Failed payments:** N75 billion in failed payments annually, growing at 42% per year (NIBSS). A significant portion of these failures involve businesses extending trade credit to counterparties whose financial health they cannot verify.
- **Business closures:** 7.2 million MSMEs shut down in 2023-2024. When a business fails with outstanding trade credit obligations, its suppliers absorb the loss. Without credit scoring, suppliers cannot distinguish between businesses that are thriving and businesses that are months from collapse.
- **Trade credit as informal lending:** 60-90 day payment terms are standard in Nigerian B2B commerce. Every distributor extending terms is effectively making an unsecured loan. The total value of trade credit outstanding at any time across the Nigerian economy is estimated in the trillions of naira — all of it extended without credit assessment.
- **Invoice factoring absent:** Unlike mature markets where businesses can sell their receivables to factors at a discount, invoice factoring barely exists in Nigeria. The primary reason is the absence of credit scoring infrastructure — factors cannot price the risk of the underlying debtor.
- **Commercial paper explosion:** N1.58 trillion in commercial paper issuances in H1 2025 (107% YoY growth). Businesses are desperate for working capital and willing to pay 15-25% for it. Better credit scoring could unlock cheaper alternatives by reducing information asymmetry.
- **Expansion without hiring:** Businesses want to expand (index 54-81) but not hire (index 8-40). VendorScore automates credit assessment that currently requires sending a staff member to physically visit the customer's premises, talk to their neighbors, and check if the business looks "real."

**The wedge:** No Nigerian product aggregates CAC data, court records, and bank statement analysis into a single credit score for B2B decisions. CreditRegistry and CRC Credit Bureau focus on consumer lending. FirstCheck and YouVerify focus on KYC/identity, not creditworthiness. The B2B credit scoring market is entirely unserved.

## 3. Target Persona

**Primary: The Credit Controller at a Mid-Sized Wholesaler or Distributor**

- **Company profile:** Wholesaler or distributor in Food/Beverage, building materials, or industrial supplies. 30-500 employees. N50-500M/month in revenue ($33K-$325K/month). Extends 30-60 day trade credit to 100-500 active customers (retailers, sub-distributors, contractors).
- **Credit exposure:** At any given time, N50-200M outstanding in trade credit. New customers request credit terms within the first 2-3 orders. The pressure to extend credit is intense — competitors offer terms, and refusing means losing the sale.
- **Current process:** New customer requests credit terms. The credit controller calls the customer's references (who always say positive things), may visit the premises ("is this a real business or a container shop that will disappear?"), checks with industry contacts ("has anyone had trouble with this company?"), and makes a judgment call. The entire process is informal, unscalable, and takes 3-7 days.
- **Title:** Credit Controller, Credit Manager, Finance Manager, or — in smaller companies — the owner/MD personally.
- **Age:** 30-50. Experienced in the industry with strong personal networks. Uses Excel for tracking receivables. Has never seen a business credit report because they do not exist in Nigeria.
- **Pain frequency:** Every week brings new credit decisions. The pain spikes when a customer defaults on a large balance and the post-mortem reveals warning signs that were not visible: lapsed CAC registration, outstanding court judgments, a pattern of late bank settlements.
- **Budget authority:** Can approve N50-200K/month for tools that directly reduce bad debt losses. A single bad debt write-off of N5-20M easily justifies a year of VendorScore subscription.
- **Decision trigger:** A major bad debt event. A customer defaults on N10M+, the company discovers the customer had a history of defaults with other suppliers, and the MD asks "why didn't we know this before extending credit?"

**Secondary: Landlords and Equipment Lessors**

Commercial property landlords verifying prospective tenants. Equipment leasing companies assessing lessee creditworthiness. Both make large financial commitments (N5-50M) based on limited information.

**Priority sectors:** Food/Beverage (63.24% capacity utilization, stable demand, active trade credit culture), building materials/construction (80.8 expansion index, highest growth outlook), and industrial supplies. Avoid Electrical/Electronics (28% capacity — approaching shutdown).

## 4. Problem Deep Dive

**The current workflow for B2B credit decisions in Nigeria:**

**Step 1: Credit Request**
A new customer places their second or third order and asks for credit terms: "We'd like to take N20M in stock on 60-day terms." The sales team, eager to close the deal, pressures the finance team to approve quickly. The customer provides a CAC certificate (which may be outdated), a reference letter from another supplier (which may be fabricated), and a bank reference letter (which confirms the account exists but says nothing about balances or payment patterns).

**Step 2: Manual Due Diligence**
The credit controller begins a manual investigation that typically includes:
- **CAC verification:** Visit the CAC website (which is frequently down) or pay a lawyer N20-50K to do a physical search at the CAC office in Abuja. Result: confirmation that the company was registered, its directors, and its filing status. This tells you the company exists but nothing about its financial health.
- **Physical visit:** Send someone to the customer's premises. Is the warehouse full or empty? How many staff? Does the business look operational? This is subjective, time-consuming, and only tells you what the customer wants you to see.
- **Reference calls:** Call the references the customer provided. These are pre-screened to give positive feedback. Calling industry contacts who were NOT provided as references yields more honest information but requires a personal network in the same industry.
- **Bank reference letter:** Request from the customer's bank. The bank confirms the account is active and may provide a vague statement like "the account has been satisfactorily conducted." No balances, no transaction patterns, no overdraft history.
- **Gut feel:** After 3-7 days of the above, the credit controller makes a judgment call based on incomplete information, personal impression, and risk appetite.

**Step 3: What Goes Wrong**

- **Information gaps:** The credit controller cannot see court judgments against the business, cannot verify whether the CAC registration is current, cannot see whether the business pays its other suppliers on time, and cannot assess cash flow health.
- **Fraud and misrepresentation:** Businesses present outdated CAC certificates, fabricate reference letters, and use impressive-looking premises that are rented for show. Without independent verification, these deceptions are difficult to detect.
- **Slow decisions:** The 3-7 day due diligence process delays sales. Competitors who make faster (but less informed) credit decisions win the customer. The pressure to skip due diligence is constant.
- **No ongoing monitoring:** Even if the initial credit decision was sound, the customer's financial health can deteriorate. There is no system to monitor changes in registration status, new court filings, or declining payment patterns. The credit controller only discovers problems when payments stop.
- **Concentration risk:** Without systematic tracking, a company may not realize that 40% of its credit exposure is concentrated in three customers until one of them defaults.

**Step 4: Business Impact**

- **Bad debt losses:** Nigerian wholesalers and distributors typically write off 3-8% of revenue annually as bad debt. For a N500M/month business, that is N180-480M per year in direct losses.
- **Informal credit rationing:** Because they cannot assess risk, many businesses simply refuse credit to all new customers, losing sales to competitors who are willing to take the risk. This is the worst outcome — value destroyed on both sides.
- **Cash flow pressure:** Bad debts force businesses into emergency borrowing at 35.5% interest rates to cover the gap, creating a cascading financial crisis.
- **Relationship damage:** When a supplier must pursue a defaulting customer, the confrontation damages business relationships and reputation in a market where reputation is everything.
- **Industry-wide distrust:** The absence of credit information creates a low-trust equilibrium where businesses transact cautiously, extend less credit than optimal, and leave growth opportunities on the table.

## 5. Solution Overview

VendorScore is a web-based B2B credit scoring platform that aggregates multiple data sources to generate a composite creditworthiness score for any Nigerian business. The system operates in four stages:

**1. Business Identification**
The user enters a business name, CAC registration number, or director name. VendorScore searches its database and, if the business has been queried before, returns a cached report with the last-updated date. For new lookups, the system initiates data collection from all available sources.

**2. Multi-Source Data Collection**
The platform pulls data from multiple sources in parallel:
- **CAC Registry:** Registration status (active, inactive, struck off), date of incorporation, registered address, nature of business, authorized share capital, annual filing compliance history, and director/shareholder information.
- **Court Records:** Civil litigation history from state and federal high courts — outstanding judgments, pending suits, winding-up petitions, debt recovery actions. Scraped from court registries and legal databases.
- **Director Network Analysis:** Cross-reference directors against other businesses they direct. Flag directors with a history of business failures, litigation, or regulatory sanctions. Map the director network to reveal connections to high-risk entities.
- **Social & Web Signals:** Business presence on Google Maps, social media activity, website status, industry directory listings, news mentions. Absence of digital presence for a business claiming significant revenue is a red flag.
- **Bank Statement Analysis (Optional, Consent-Based):** If the subject business provides consent, VendorScore connects to their bank accounts via Mono.co to analyze: average monthly balances, cash flow volatility, revenue trends, payment regularity to suppliers, overdraft usage, and bounce/return rates.

**3. Credit Scoring Engine**
The scoring engine is an ML model (gradient-boosted decision tree, initially rule-based with transition to ML as data accumulates) that weights the input variables and produces:
- **VendorScore (0-100):** Composite credit score. 80-100 = A (Low Risk), 60-79 = B (Moderate Risk), 40-59 = C (Elevated Risk), 20-39 = D (High Risk), 0-19 = F (Do Not Extend Credit).
- **Recommended Credit Limit:** Based on the score and available financial data, a suggested maximum credit exposure in naira.
- **Risk Flags:** Specific warnings — lapsed registration, active court judgments, director linked to failed businesses, declining cash flow, etc.
- **Confidence Level:** How much data was available for the score. A score based on all five data sources carries higher confidence than one based only on CAC data.

**4. Report Delivery & Monitoring**
Reports are delivered as interactive web pages with Excel export and PDF download options. Users can set up monitoring alerts: if any data point changes for a scored business (new court filing, CAC status change, director change), VendorScore sends a WhatsApp or email alert. This transforms a point-in-time credit check into ongoing portfolio monitoring.

## 6. MVP Feature Set (MoSCoW)

### MUST Have — Week 1-6

These features define the minimum product that delivers value on day one.

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Business search | Search by business name or CAC number | Fuzzy name matching; exact CAC number lookup; return top 5 matches with registration details |
| CAC data integration | Pull registration status, incorporation date, directors, filing history | Real-time or cached CAC data; display active/inactive/struck-off status; show last filing date |
| Court records search | Search civil court records for judgments and pending cases | Search by business name and director names; display case type, amount, status, court, date |
| Director network mapping | Show all businesses linked to each director | Cross-reference director names across CAC database; flag directors with multiple failed businesses |
| Rule-based scoring engine | Generate VendorScore (0-100) with letter grade | Weighted scoring across available data points; clear breakdown of score components; recommended credit limit |
| Risk flag system | Highlight specific risk indicators | Flags for: lapsed registration, overdue filings, active litigation, director risk, no digital presence |
| Report generation | Comprehensive credit report with all findings | Web-based report with sections for each data source; PDF export; Excel export of key data tables |
| User authentication | Email + password login with organization accounts | Supabase Auth; organization-level data isolation; usage tracking per organization |
| Pay-per-report billing | Charge per report via Paystack | N20-50K per report based on depth; Paystack checkout flow; receipt generation |

### SHOULD Have — Week 7-10

These features significantly enhance value but are not required for first customer delivery.

| Feature | Description |
|---------|-------------|
| Mono.co bank statement analysis | With subject consent, analyze bank statements for cash flow scoring |
| Monitoring alerts | WhatsApp/email alerts when data changes for a previously scored business |
| Portfolio dashboard | View all scored businesses, aggregate risk exposure, concentration analysis |
| Bulk lookup | Upload CSV of business names/CAC numbers for batch processing |
| Score history | Track how a business's VendorScore changes over time |
| Subscription billing | N150K/month unlimited lookups plan via Paystack recurring |

### COULD Have — Month 3-4

| Feature | Description |
|---------|-------------|
| API access | REST API for integrating VendorScore into ERP/accounting systems |
| Industry benchmarks | Compare a business's score against sector averages |
| ML scoring model | Transition from rule-based to gradient-boosted model as training data accumulates |
| WhatsApp bot interface | Query a business score via WhatsApp message (send CAC number, receive score summary) |
| Payment behavior network | Aggregate anonymized payment data from PayMatch/CollectPro users to build a payment behavior database |
| USSD score lookup | Dial *XXX# → enter CAC number → receive score and grade via SMS. Reaches 2G users |

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Consumer credit scoring | Different market, different data sources, regulated differently |
| Lending or credit issuance | VendorScore provides information, not capital. Future fintech layer |
| Debt collection | Separate business (CollectPro territory) |
| Guaranteed accuracy | Scores are advisory. Legal disclaimer prominent on every report |
| International business scoring | Nigeria-only for now. West Africa expansion is a future play |

## 7. Key Screens & UX

### Design Principles

- **Numbers forward:** VendorScore, credit limit recommendation, and key risk flags visible immediately. No clicking through to find the answer to "should I extend credit to this business?"
- **Traffic light simplicity:** Green (A-B, extend credit), Yellow (C, proceed with caution), Red (D-F, do not extend). The credit controller needs a clear signal, not a data dump.
- **Excel muscle memory:** Every data table exports to Excel. The credit report should look like something the credit controller would present to their MD — professional, formatted, printable.
- **Offline-aware:** Cache previously generated reports in IndexedDB. Credit controllers reviewing their portfolio during a site visit with poor connectivity should still access cached scores.

### Screen 1: Search & Lookup

The primary screen. Clean search bar at center, prominent like Google.

- **Search input:** Business name or CAC registration number. Auto-complete suggestions as user types (from previously scored businesses and CAC database index).
- **Recent lookups:** Below the search bar, a list of the user's 10 most recent lookups with score, grade, and date.
- **Quick stats:** Sidebar showing: total lookups this month, reports remaining (for per-report plans), portfolio risk summary.

### Screen 2: Credit Report

The core deliverable. Single-page scrollable report with clear sections:

**Header:**
- Business name, CAC number, date of incorporation
- VendorScore: large circular gauge (0-100) with letter grade and color (green/yellow/red)
- Recommended credit limit: bold naira amount
- Confidence level: percentage based on data source availability
- "Last updated" timestamp

**Section A — Registration & Compliance:**
- CAC registration status (active/inactive/struck off) with badge
- Date of incorporation, registered address, nature of business
- Annual filing history: table of years with filed/not-filed status
- Authorized and paid-up share capital

**Section B — Directors & Shareholders:**
- Table of current directors: name, appointment date, other directorships
- Risk flags per director: failed businesses, litigation involvement, sanctions
- Network visualization: simple node graph showing director connections to other businesses

**Section C — Litigation & Court Records:**
- Table of cases: case number, court, plaintiff, amount, status (pending/judgment/settled)
- Summary: total number of cases, total amount in dispute, any active judgments

**Section D — Bank Statement Analysis (if available):**
- Average monthly balance (trailing 6 months)
- Cash flow trend: bar chart of monthly inflows vs outflows
- Payment regularity score: how consistently does the business pay its obligations on time
- Bounce/return rate: frequency of failed debits
- Revenue trend: increasing, stable, or declining

**Section E — Digital Presence & Social Signals:**
- Google Maps listing: exists/verified/not found
- Website: active/inactive/not found
- Social media: active profiles with last activity date
- News mentions: recent articles (positive/negative/neutral)

**Footer:**
- Score breakdown: horizontal bar chart showing contribution of each data source to the final score
- Disclaimer: "This report is advisory and based on available public data. VendorScore does not guarantee accuracy or completeness."
- Action buttons: "Download PDF," "Export to Excel," "Set Up Monitoring," "Share Report"

### Screen 3: Portfolio Dashboard

For subscription users managing multiple credit relationships.

**Header KPIs:**
- Total credit exposure across all scored businesses
- Average portfolio VendorScore
- Number of businesses by risk grade (A/B/C/D/F)
- Alerts requiring attention (score changes, new court filings)

**Main table:** All scored businesses with columns: Business Name, VendorScore, Grade, Credit Limit, Last Updated, Alerts. Sortable and filterable. Click to open full report.

**Risk concentration chart:** Pie chart showing credit exposure by risk grade. Bar chart showing top 10 exposures by business.

**Export:** One-click Excel export of entire portfolio with all scores, grades, and key data points. Formatted for management reporting.

### Screen 4: Monitoring & Alerts

**Alert feed:** Chronological list of changes detected for monitored businesses:
- "ABC Trading Ltd — New court filing detected (Debt recovery, N5.2M)"
- "XYZ Enterprises — CAC status changed from Active to Inactive"
- "MNO Distributors — VendorScore dropped from 72 to 58 (Cash flow decline)"

**Alert configuration:**
- Toggle monitoring on/off per business
- Choose alert channels: in-app, email, WhatsApp, SMS
- Set threshold: alert only when score drops below a configured level

### Screen 5: Settings & Billing

- Organization profile: company name, industry, credit policy defaults
- Team management: invite users, set roles (admin, analyst, viewer)
- Billing: current plan, usage this month, upgrade/downgrade, payment history
- API keys: for subscription users with API access
- Credit policy templates: configure default credit limits by score grade

## 8. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router, Server Components) | Fast initial load via SSR; marketing pages benefit from SEO; React ecosystem |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development, consistent design system, professional report layouts |
| Backend | Next.js API Routes + Server Actions | Single deployment, background jobs via Vercel Cron for data pipeline |
| Database | Supabase PostgreSQL | Managed Postgres with full-text search for business name matching; built-in auth; generous free tier |
| Auth | Supabase Auth | Email/password, organization-level RLS policies, role-based access |
| File Storage | Supabase Storage | Generated PDF reports, uploaded documents for manual verification |
| Data Pipeline | Node.js workers + Vercel Cron | Scheduled scraping and data refresh jobs; queue-based processing for report generation |
| CAC Integration | Web scraping + cached database | Scrape CAC public portal; cache results in Supabase; refresh on lookup if stale >30 days |
| Court Records | Web scraping + manual data entry | Scrape available court registries (Lagos, Abuja FCT); supplement with manual data sourcing partnerships |
| Bank Data | Mono.co API | Nigerian open banking leader; bank statement retrieval with customer consent; transaction categorization |
| Scoring Engine | TypeScript rule engine (MVP) → Python ML model (v2) | Start with weighted rules; transition to gradient-boosted trees as labeled data accumulates |
| Payments | Paystack | Per-report checkout and subscription billing in NGN |
| Messaging | WhatsApp Business API (via Termii) + Resend (email) | Monitoring alerts via WhatsApp and email |
| PDF Generation | @react-pdf/renderer or Puppeteer | Generate downloadable credit reports as formatted PDFs |
| Excel Export | xlsx (SheetJS) library | Formatted Excel exports of reports and portfolio data |
| Offline Storage | IndexedDB via idb library | Cache generated reports locally for offline access |
| Hosting | Vercel (frontend + API) + Supabase (database + storage) | Free/cheap tiers for MVP; auto-scaling for growth |
| Monitoring | Sentry (errors) + PostHog (analytics) | Error tracking essential for data pipeline reliability; PostHog for product analytics |

### Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  industry text,
  plan text CHECK (plan IN ('per_report', 'monthly_unlimited', 'enterprise')),
  reports_remaining integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
)

-- Users
users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  org_id uuid REFERENCES organizations,
  role text CHECK (role IN ('admin', 'analyst', 'viewer')),
  full_name text,
  created_at timestamptz DEFAULT now()
)

-- Businesses (the subjects being scored)
businesses (
  id uuid PRIMARY KEY,
  cac_number text UNIQUE,
  name text NOT NULL,
  aliases text[],
  registered_address text,
  nature_of_business text,
  date_of_incorporation date,
  cac_status text CHECK (cac_status IN ('active', 'inactive', 'struck_off', 'unknown')),
  authorized_share_capital decimal(15,2),
  paid_up_share_capital decimal(15,2),
  last_filing_date date,
  filing_history jsonb,
  digital_presence jsonb,
  data_last_updated timestamptz,
  created_at timestamptz DEFAULT now()
)

-- Directors
directors (
  id uuid PRIMARY KEY,
  full_name text NOT NULL,
  date_of_birth date,
  nationality text,
  address text,
  created_at timestamptz DEFAULT now()
)

-- Business-Director relationship
business_directors (
  id uuid PRIMARY KEY,
  business_id uuid REFERENCES businesses,
  director_id uuid REFERENCES directors,
  role text,
  appointment_date date,
  resignation_date date,
  is_current boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)

-- Court Records
court_records (
  id uuid PRIMARY KEY,
  business_id uuid REFERENCES businesses,
  director_id uuid REFERENCES directors,
  case_number text,
  court_name text,
  case_type text CHECK (case_type IN ('debt_recovery', 'winding_up', 'breach_of_contract', 'fraud', 'other')),
  plaintiff text,
  defendant text,
  amount_in_dispute decimal(15,2),
  filing_date date,
  status text CHECK (status IN ('pending', 'judgment_for_plaintiff', 'judgment_for_defendant', 'settled', 'dismissed', 'unknown')),
  judgment_amount decimal(15,2),
  notes text,
  source text,
  created_at timestamptz DEFAULT now()
)

-- Bank Statement Analysis (consent-based)
bank_analyses (
  id uuid PRIMARY KEY,
  business_id uuid REFERENCES businesses,
  mono_account_id text,
  analysis_date date,
  avg_monthly_balance decimal(15,2),
  avg_monthly_inflow decimal(15,2),
  avg_monthly_outflow decimal(15,2),
  cash_flow_volatility decimal(5,2),
  payment_regularity_score decimal(5,2),
  bounce_rate decimal(5,2),
  revenue_trend text CHECK (revenue_trend IN ('increasing', 'stable', 'declining')),
  months_analyzed integer,
  raw_data_encrypted bytea,
  created_at timestamptz DEFAULT now()
)

-- Credit Scores
credit_scores (
  id uuid PRIMARY KEY,
  business_id uuid REFERENCES businesses,
  score integer CHECK (score BETWEEN 0 AND 100),
  grade text CHECK (grade IN ('A', 'B', 'C', 'D', 'F')),
  recommended_credit_limit decimal(15,2),
  confidence_level decimal(5,2),
  score_components jsonb,
  risk_flags text[],
  data_sources_used text[],
  model_version text,
  created_at timestamptz DEFAULT now()
)

-- Report Lookups (billing and audit trail)
report_lookups (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  user_id uuid REFERENCES users,
  business_id uuid REFERENCES businesses,
  score_id uuid REFERENCES credit_scores,
  report_type text CHECK (report_type IN ('basic', 'enhanced', 'full')),
  amount_charged decimal(10,2),
  payment_reference text,
  created_at timestamptz DEFAULT now()
)

-- Monitoring Alerts
monitoring_alerts (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  business_id uuid REFERENCES businesses,
  alert_type text CHECK (alert_type IN ('score_change', 'new_court_record', 'cac_status_change', 'director_change', 'filing_overdue')),
  severity text CHECK (severity IN ('high', 'medium', 'low')),
  message text NOT NULL,
  old_value text,
  new_value text,
  channel text CHECK (channel IN ('in_app', 'email', 'whatsapp', 'sms')),
  status text CHECK (status IN ('pending', 'sent', 'read')),
  created_at timestamptz DEFAULT now()
)

-- Monitoring Subscriptions
monitoring_subscriptions (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  business_id uuid REFERENCES businesses,
  alert_channels text[] DEFAULT '{in_app}',
  score_threshold integer,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)
```

### Scoring Engine Algorithm

```
For each business lookup:

  1. Data Collection (parallel):
     a. CAC Data → registration_score (0-25 points)
     b. Court Records → litigation_score (0-25 points)
     c. Director Network → director_score (0-20 points)
     d. Digital Presence → presence_score (0-10 points)
     e. Bank Analysis (if available) → financial_score (0-20 points)

  2. Registration Score (0-25):
     - Active registration: 15
     - Inactive/struck off: 0
     - Annual filings up to date: 5
     - Filings 1-2 years overdue: 2
     - Filings 3+ years overdue: 0
     - Incorporation age > 5 years: 3
     - Incorporation age 2-5 years: 2
     - Incorporation age < 2 years: 1
     - Adequate share capital for requested credit: 2

  3. Litigation Score (0-25):
     - No court records found: 20
     - Only settled/dismissed cases: 15
     - Pending cases, small amounts: 10
     - Active judgments against business: 0-5 (scaled by amount)
     - Winding-up petition: 0
     - Bonus for no records in 5+ year history: 5

  4. Director Score (0-20):
     - No directors linked to failed businesses: 15
     - Directors have long tenure at current business: 3
     - Directors linked to 1 failed business: 8
     - Directors linked to 2+ failed businesses: 0
     - Multiple current directorships (dilution risk): -2
     - Bonus for director with successful track record: 2

  5. Digital Presence Score (0-10):
     - Active website: 3
     - Google Maps listing (verified): 3
     - Active social media: 2
     - News mentions (positive): 2
     - No digital presence at all: 0 (red flag for businesses claiming significant revenue)

  6. Financial Score (0-20, only if bank data available):
     - Average monthly balance supports credit request: 8
     - Stable or growing revenue: 5
     - Payment regularity > 90%: 5
     - Low bounce rate (< 2%): 2
     - If no bank data: redistribute 20 points across other categories proportionally

  7. Composite Score = Sum of all component scores (0-100)
     - 80-100: Grade A (Low Risk) → Recommend full credit limit
     - 60-79: Grade B (Moderate Risk) → Recommend 60-80% of requested limit
     - 40-59: Grade C (Elevated Risk) → Recommend 30-50% or secured terms only
     - 20-39: Grade D (High Risk) → Recommend cash-only terms
     - 0-19: Grade F (Do Not Extend) → Recommend no credit relationship

  8. Confidence Level:
     - All 5 data sources: 90-100%
     - 4 data sources: 70-89%
     - 3 data sources: 50-69%
     - 2 data sources: 30-49%
     - 1 data source: 10-29%

  9. Recommended Credit Limit:
     - Grade A: Up to 30% of average monthly bank inflow (if available) or N10-50M default
     - Grade B: Up to 15% of monthly inflow or N5-20M default
     - Grade C: Up to 5% of monthly inflow or N1-5M default
     - Grade D-F: N0 (cash terms only)
```

### Data Pipeline Architecture

```
Scheduled Jobs (Vercel Cron):
  - CAC data refresh: Daily scan of businesses with stale data (>30 days)
  - Court records scan: Weekly scrape of court registries for new filings
  - Monitoring checks: Daily comparison of current data vs last scored data
  - Alert dispatch: Real-time via Supabase Realtime + WhatsApp/email queue

On-Demand (User-Triggered):
  - New lookup: Parallel fetch from all sources → score → cache → deliver
  - Refresh request: Re-fetch all sources → re-score → compare to last score → alert if changed

Data Freshness:
  - CAC data: Refreshed on every lookup if >7 days old
  - Court records: Refreshed weekly (scraping is slow)
  - Bank data: Refreshed on demand with customer re-consent
  - Digital presence: Refreshed on every lookup (fast API calls)
```

### Offline Architecture

```
Cached locally (IndexedDB):
  - All previously generated reports for the organization
  - Portfolio summary and risk metrics
  - Alert history

Not cached (requires network):
  - New business lookups (require data pipeline)
  - Bank statement analysis (requires Mono.co API)
  - Alert sending (requires WhatsApp/email API)
  - Payment processing (requires Paystack)
```

## 9. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **Basic Report** | N20,000/report (~$13) | CAC data + court records + digital presence. No bank analysis. Suitable for quick checks on small credit decisions |
| **Full Report** | N50,000/report (~$33) | All data sources including Mono.co bank analysis (with subject consent). Full scoring model, recommended credit limit, director network |
| **Professional** | N150,000/month (~$98) | Unlimited lookups, portfolio dashboard, monitoring alerts, Excel/PDF exports, 3 users |
| **Enterprise** | N300,000/month (~$195) | Everything in Professional + API access, bulk upload, custom scoring weights, 10 users, dedicated support |
| **Founding Customer** | N75,000/month (~$49) | Professional plan features, locked for 12 months, limited to first 10 customers |

### Trial & Onboarding

- 3 free Basic Reports on signup — enough to demonstrate value on real businesses
- Onboarding call (20 min) included for every signup
- During onboarding, run a report on a business the customer already extends credit to, so they can validate accuracy against their own knowledge
- Trial-to-paid conversion target: 30% (lower than PayMatch due to higher price and longer consideration cycle)

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~$80 | Vercel Pro ($20) + Supabase Pro ($25) + Mono.co API (~$20) + scraping infra (~$15) |
| Cost per report | ~$2-5 | Mono.co API call (~$1-2) + compute + storage. Amortized scraping costs |
| CAC | $20-50 | LinkedIn outreach, industry events, content marketing |
| Monthly churn estimate | 3-5% | Lower than average — businesses with active credit portfolios need ongoing monitoring |
| Average retention | 18 months | Credit risk is a permanent concern; switching cost of rebuilding scored portfolio |
| LTV (Professional) | N2,700,000 (~$1,755) | N150K x 18 months |
| LTV:CAC ratio | 23:1 - 58:1 | Strong unit economics at scale |

### Revenue Targets

| Milestone | Timeline | Customers/Reports | MRR (NGN) | MRR (USD) |
|-----------|----------|-------------------|-----------|-----------|
| First paying customer | Week 8 | 1 subscription + 10 reports | N350,000 | ~$228 |
| Break-even | Month 3 | 5 subscriptions | N750,000 | ~$488 |
| Target | Month 6 | 15 subscriptions + 50 reports/month | N3,250,000 | ~$2,113 |
| Stretch | Month 12 | 40 subscriptions + 200 reports/month | N10,000,000 | ~$6,500 |

Break-even at 5 Professional subscribers (N750K/month covers infrastructure, data costs, and one contractor). Per-report revenue provides additional upside from occasional users.

## 10. Go-to-Market: First 10 Customers

### Channel 1: LinkedIn Direct Outreach to Credit Controllers

**Search strategy:** On LinkedIn, search for:
- Title: "Credit Controller" OR "Credit Manager" OR "Finance Manager" OR "Risk Manager"
- Location: Lagos, Port Harcourt, Kano, Abuja
- Industry: FMCG, Food & Beverages, Wholesale, Distribution, Building Materials, Manufacturing
- Company size: 50-500 employees

**Outreach sequence:**
1. Connection request with note: "Hi [Name], I'm building Nigeria's first B2B credit scoring tool — like Dun & Bradstreet but for Nigerian businesses. Would love to understand how you assess new customers requesting trade credit today."
2. If accepted: "Thanks for connecting. Quick question — what percentage of your receivables end up as bad debt each year? We're helping companies reduce that by 40-60% with data-driven credit scoring."
3. If interested: "I'd love to run a free report on one of your customers so you can see the data. Takes 5 minutes on a WhatsApp call. What's your number?"

**Target:** 80 connection requests → 25 accepts → 8 conversations → 4-5 demos → 2-3 customers.

### Channel 2: Family Network in Port Harcourt

Direct ask: "Do you know wholesalers or distributors who extend credit to their customers? I'm building a tool that helps them check if a new customer is creditworthy before giving them goods on credit."

**Target:** 5 warm introductions → 3-4 demos → 2 customers.

### Channel 3: PayMatch Cross-Sell

If PayMatch launches first and acquires customers, those same finance teams manage credit risk. PayMatch users who see high volumes of unmatched payments and bad debt are the ideal VendorScore customers. In-app promotion: "Tired of chasing bad payers? Check their creditworthiness before extending terms."

**Target:** 5 PayMatch customers → 3 VendorScore trials → 2 conversions.

### Channel 4: Manufacturers Association of Nigeria (MAN)

MAN members (manufacturers) extend trade credit to distributors and wholesalers. Present VendorScore at MAN meetings or distribute through MAN's newsletter.

**Target:** 20 outreach emails/calls → 5 conversations → 2-3 customers.

### Channel 5: Accounting Firms as Channel Partners

Accounting firms advising SME clients on credit management. Offer them a partner portal: they run reports for their clients, earn a 20% referral commission. One accounting firm with 20 SME clients = 20 potential VendorScore users.

**Target:** 10 accounting firms → 3 partnerships → 5-10 end customers over 6 months.

### Channel 6: Content Marketing — "Bad Debt Stories"

Publish anonymized case studies: "How a Lagos Distributor Lost N15M to a Customer Who Had 3 Court Judgments." Nigerian business owners share cautionary tales on WhatsApp and LinkedIn. Content drives inbound leads.

**Target:** 4 articles → 500+ views → 10 leads → 3 customers.

### Channel Summary

| Channel | Outreach Volume | Expected Demos | Expected Customers |
|---------|----------------|----------------|-------------------|
| LinkedIn | 80 | 4-5 | 2-3 |
| Family network | 5 | 3-4 | 2 |
| PayMatch cross-sell | 5 | 3 | 2 |
| MAN directory | 20 | 2-3 | 1-2 |
| Accounting partners | 10 firms | 5-8 | 3-5 |
| Content marketing | 4 articles | 3 | 1-2 |
| **Total** | **120+** | **20-26** | **11-16** |

## 11. Risks & Mitigations

### Risk 1: CAC Data Accessibility and Reliability

**Likelihood:** High. The CAC website is notoriously unreliable, frequently down, and does not provide a public API. Scraping may break with site changes.

**Impact:** Core data source unavailable. Reports cannot be generated without registration verification.

**Mitigations:**
- Build a persistent cache of every CAC record accessed. Once scraped, the data lives in our database permanently with a "last verified" date.
- Multiple scraping strategies: direct web scraping, headless browser automation, and manual data entry from CAC physical searches as fallback.
- Partner with legal tech companies (e.g., LawPavilion) that already aggregate CAC data and may offer API access.
- Price reports to cover the cost of manual CAC searches when automated methods fail.
- Display "data freshness" indicators on reports so users understand how current each data point is.

### Risk 2: Court Records Are Not Digitized

**Likelihood:** High. Most Nigerian court records exist only in physical registries. Digitized records are limited to Lagos and Abuja high courts, and even those are incomplete.

**Impact:** Litigation data — a critical scoring input — is unavailable for many businesses, reducing score accuracy and confidence.

**Mitigations:**
- Start with Lagos and Abuja courts (where most commercial litigation occurs) and expand coverage incrementally.
- Partner with law firms and legal data companies that maintain their own litigation databases.
- Build the scoring model to function without litigation data — reduce score confidence level rather than refusing to score.
- "No records found" is itself a data point when combined with other signals — a 20-year-old business with zero court records likely has a clean history.
- Long-term: invest in building the most comprehensive court records database as a proprietary asset.

### Risk 3: Businesses Refuse Mono.co Bank Statement Consent

**Likelihood:** Medium-High. The subject business must consent to share bank data. Many will refuse, especially if they know the data is being used to assess their creditworthiness.

**Impact:** Bank statement analysis — the most valuable data source — is unavailable for most lookups, reducing scoring accuracy.

**Mitigations:**
- Design the scoring model to work without bank data. CAC + court records + director network + digital presence provide a useful (if less precise) score.
- Position bank data sharing as beneficial to the subject: "A higher VendorScore means your suppliers extend better terms. Sharing your bank data improves your score."
- Offer a "self-service" option where businesses can proactively generate their own VendorScore to share with potential suppliers — like a portable credit report.
- Over time, build alternative data sources (payment behavior data from PayMatch users, trade reference networks) that reduce dependence on bank statements.

### Risk 4: Scoring Accuracy Concerns and Liability

**Likelihood:** Medium. Early scores will be based on limited data and rule-based heuristics, not proven ML models. Inaccurate scores could cause businesses to extend credit to bad risks or refuse credit to good ones.

**Impact:** Customer trust erosion, potential legal liability if credit decisions based on inaccurate scores lead to losses.

**Mitigations:**
- Prominent legal disclaimer on every report: "Advisory only. VendorScore is one input into credit decisions, not a guarantee."
- Display confidence levels prominently. A score with 30% confidence is clearly flagged as preliminary.
- Collect feedback: after every report, ask "Did this score match your experience with this business?" Use feedback to improve the model.
- Start with a conservative scoring approach — err on the side of lower scores (better to under-rate than over-rate early on).
- Track outcomes: when users report bad debts, correlate with the VendorScore at time of credit extension. Publish accuracy metrics once data is sufficient.

### Risk 5: Low Willingness to Pay for a Product That Did Not Previously Exist

**Likelihood:** Medium. Nigerian businesses have never paid for credit reports because they did not exist. The concept requires education.

**Impact:** Long sales cycles, price resistance, customers expecting free access.

**Mitigations:**
- 3 free reports on signup — let the product prove its value with real data the customer can verify.
- ROI calculator: "If VendorScore prevents one N5M bad debt per year, the subscription pays for itself 33x over."
- Per-report pricing as entry point — no subscription commitment required. Pay only when you need a score.
- Anchor to the cost of current alternatives: "A physical CAC search costs N30-50K and takes 5 days. A VendorScore report costs N20K and takes 5 minutes."
- Founding customer pricing at 50% discount to build reference customers and case studies.

### Risk 6: Data Source Integration Complexity Delays Launch

**Likelihood:** Medium-High. Integrating multiple unreliable data sources (CAC scraping, court records, Mono.co) is technically complex and time-consuming.

**Impact:** MVP takes 8-12 weeks instead of 6-8 weeks. Revenue delayed.

**Mitigations:**
- Launch MVP with CAC data + digital presence only (Week 4-5). Add court records and Mono.co in subsequent releases.
- Manual data entry as a bridge: for the first 50 reports, supplement automated scraping with manual research to ensure quality while automation is being built.
- Charge a premium for the "manual research" component during early stage — this is actually what lawyers charge N50K+ for today.
- Use the early revenue from basic reports to fund development of deeper data source integrations.

## 12. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 5 | 0.25 | Data source integrations (CAC scraping, court records, Mono.co) are complex and unreliable. MVP realistically requires 6-8 weeks, not the 2-4 week standard. Each data source is a mini-project with its own parsing, error handling, and caching requirements. |
| Time to Revenue | 15% | 5 | 0.75 | Need to build a functioning data pipeline before selling. Cannot charge for reports until the data quality is sufficient to be useful. First revenue likely at Week 8-10, not Week 4. Per-report pricing provides faster time-to-revenue than subscription but requires volume. |
| Market Size | 15% | 8 | 1.20 | Every B2B transaction in Nigeria involves credit risk assessment. N49.4T SME credit gap, N75B failed payment market, 41.5M MSMEs — the addressable market is massive. Credit scoring is a horizontal need across all industries, not limited to a single sector. |
| Competition | 10% | 8 | 0.80 | No Nigerian B2B credit scoring product exists. CreditRegistry and CRC focus on consumer. FirstCheck and YouVerify focus on KYC/identity. The gap is genuinely empty. However, banks and large enterprises have internal credit assessment teams that are potential future competitors. |
| Skill Fit | 15% | 8 | 1.20 | Alternative data credit scoring is core ML/data science. Building scoring models from heterogeneous data sources, feature engineering from unstructured data, and web scraping are strong skill matches. The transition from rule-based to ML scoring as data accumulates is a natural progression. |
| Capital Required | 10% | 7 | 0.70 | No working capital needed (unlike lending products). However, data access may cost — Mono.co API calls, potential CAC data partnerships, legal database subscriptions. Total estimated cost: $200-500 for MVP, $500-1,000/month at scale. Higher than pure-software products but still bootstrappable. |
| Buyer Clarity | 20% | 7 | 1.40 | Any business extending trade credit is a potential buyer — wholesalers, distributors, manufacturers, landlords, equipment lessors. The buyer is identifiable, but the category is new in Nigeria. Requires educating buyers that this product should exist before selling it to them. Not as sharp as "the finance manager doing reconciliation today" (PayMatch). |
| Fintech Upside | 10% | 9 | 0.90 | Credit scoring is the foundational infrastructure for B2B lending, invoice factoring, trade credit insurance, and supply chain finance. VendorScore's data and models become the rails on which financial products are built. This is the highest fintech-upside product in the portfolio — every lender needs credit scores. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.25 |
| Time to Revenue (15%) | 0.75 |
| Market Size (15%) | 1.20 |
| Competition (10%) | 0.80 |
| Skill Fit (15%) | 1.20 |
| Capital Required (10%) | 0.70 |
| Buyer Clarity (20%) | 1.40 |
| Fintech Upside (10%) | 0.90 |
| **TOTAL** | **7.20 / 10** |

### Verdict: BUILD (Second Priority)

A 7.20 composite score makes VendorScore a strong build, though not the first product to ship. The combination of massive market size (8, weighted 15%), zero competition (8, weighted 10%), and exceptional fintech upside (9, weighted 10%) makes this a compelling long-term play. The lower scores on Build Speed (5) and Time to Revenue (5) reflect the reality that data source integrations are complex and the product requires a functioning pipeline before it can generate revenue.

**Key decision factors:**
- This is the highest fintech-upside product in the portfolio — credit scoring is infrastructure for the entire Nigerian B2B financial ecosystem
- The data moat deepens with every report generated. Early entrant advantage is massive in credit scoring
- Build Speed and Time to Revenue are the weaknesses — plan for 6-8 weeks to first revenue, not 2-4
- Can bootstrap with manual data research and rule-based scoring, then invest in automation and ML as revenue grows
- Natural cross-sell from PayMatch (payment data informs credit scoring) and SupplyLink (invoice factoring needs credit scores)

**Go condition:** Begin development after PayMatch reaches 5 paying customers (Month 2-3). Use PayMatch revenue to fund VendorScore data pipeline development. Target first VendorScore paying customer by Month 4-5. Parallel-path the CAC scraper and Mono.co integration during PayMatch development to compress the timeline.
