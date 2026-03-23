# PRD: VendorScore — B2B Credit Infrastructure for Nigerian Commerce

**Version:** 2.0 | March 2026
**Disruption Score:** 6/8 strong fit, 2/8 partial fit, 0/8 gaps
**Status:** Production-ready specification

---

## 1. Executive Summary

Nigerian businesses extend trillions of naira in trade credit every month based on gut feel, handshakes, and physical premises visits. There is no Nigerian equivalent to Dun & Bradstreet. Credit bureaus cover 13% of adults and virtually zero SMEs. The result: 3-8% annual bad debt write-offs, N75B in failed payments growing 42%/yr, and an N49.4T SME credit gap that exists not because lenders lack capital but because they lack information.

VendorScore fills this structural void. But this is not a "credit scoring tool." It is the infrastructure that lets Nigerian businesses **expand without hiring a credit team -- extend credit to 3x more customers safely.** A wholesaler who currently refuses all new credit requests (because she cannot assess risk) loses sales to competitors willing to gamble. VendorScore lets her say yes more often, with data behind every decision.

The product aggregates CAC registration data, court records, social signals, director network analysis, and optional Mono.co bank statement analysis to produce a 0-100 VendorScore, letter grade (A-F), recommended credit limit, and confidence level. Day-1 scores will carry 30-49% confidence based on CAC status and social signals alone. We position this honestly: **a 40% confidence score is infinitely more than zero, which is what the market has today.**

VendorScore is the credit infrastructure layer that enables downstream financial products across the suite: VendorScore + PayMatch = scored trade credit with automated reconciliation. VendorScore + CollectPro = risk-prioritized collection. VendorScore + SupplyLink = credit-scored invoice factoring. Every product in the portfolio becomes more valuable with credit scoring underneath it.

Pricing starts at N5-10K for VendorScore Lite (CAC status + social signals), N20K for a Basic Report, N50K for a Full Report with bank analysis, and N150K/month for unlimited subscriptions. The MVP ships in 10-12 weeks with a fallback plan: launch with CAC + social signals only at week 8, add court records and bank analysis post-launch.

---

## 2. Market Opportunity

### The Credit Information Vacuum

The single biggest structural failure in Nigerian B2B commerce is the absence of credit information.

- **Credit bureau coverage:** 13% of adults. For the 41.5M MSMEs that make up 96% of Nigerian enterprises, coverage is effectively zero. No centralized, accessible database of business creditworthiness exists.
- **SME credit gap:** N49.4T ($32.2B) in unmet demand (IFC/World Bank). The gap exists because lenders lack information, not capital.
- **Failed payments:** N75B annually, growing 42%/yr (NIBSS). A significant portion involves businesses extending trade credit to counterparties whose financial health they cannot verify.
- **Business closures:** 7.2M MSMEs shut down 2023-2024. When they fail with outstanding trade credit obligations, suppliers absorb the loss with no warning.
- **Trade credit as informal lending:** 60-90 day payment terms are standard. Every distributor extending terms is making an unsecured loan. Trillions outstanding, all extended without credit assessment.
- **Invoice factoring absent:** Cannot exist without credit scoring infrastructure. Factors cannot price the risk of the underlying debtor.
- **Commercial paper explosion:** N1.58T in H1 2025 (107% YoY). Businesses paying 15-25% for working capital. Better credit scoring unlocks cheaper alternatives.
- **Expansion-hiring gap:** Businesses want to expand (index 54-81) but not hire (index 8-40). VendorScore automates credit assessment that currently requires sending staff to physically visit customer premises.

### The South-East Paradox Opportunity

The most compelling go-to-market angle lies in a regional contradiction:

| Region | Business Confidence Index | Manufacturing Capacity |
|--------|:------------------------:|:---------------------:|
| South-West | 39.2 | 48.86% (lowest) |
| South-East | **18.7 (lowest every month)** | **59.91% (highest)** |

The South-East manufacturing clusters (Nnewi, Aba, Onitsha) have the highest capacity utilization in Nigeria but the lowest business confidence. This means manufacturing is performing well, but the broader business environment -- including access to credit -- is constrained by regional risk perceptions, insecurity, and sit-at-home disruptions.

Suppliers in Lagos and Port Harcourt routinely refuse credit to South-East businesses based on regional bias, not objective data. VendorScore can unlock credit flow to this underserved region by providing objective, data-driven assessments that counter subjective risk perceptions. A business in Nnewi with active CAC registration, no court judgments, verified Google Maps presence, and a 5-year operating history deserves credit regardless of what region it sits in. VendorScore makes that case with data.

### The Competitive Vacuum

No Nigerian product aggregates CAC data, court records, and bank statement analysis into a single B2B credit score.

| Existing Player | What They Do | What They Do NOT Do |
|----------------|-------------|-------------------|
| CreditRegistry | Consumer credit bureau | B2B trade credit scoring |
| CRC Credit Bureau | Consumer credit bureau | B2B trade credit scoring |
| FirstCheck | KYC/identity verification | Creditworthiness assessment |
| YouVerify | KYC/identity verification | Creditworthiness assessment |

The B2B credit scoring market is entirely unserved. This is a new-market disruption -- creating a category that does not exist, not displacing an incumbent.

---

## 3. Target Personas

### Primary: The Credit Controller at a Mid-Sized Wholesaler/Distributor

- **Company profile:** Wholesaler or distributor in Food/Beverage, building materials, or industrial supplies. 30-500 employees. N50-500M/month revenue. Extends 30-60 day trade credit to 100-500 active customers.
- **Credit exposure:** N50-200M outstanding at any time. New customers request credit terms within the first 2-3 orders. Pressure to extend is intense -- competitors offer terms, refusing means losing the sale.
- **Current process:** Calls customer references (pre-screened to say positive things), visits premises (subjective), checks with industry contacts (requires personal network), requests a bank reference letter (vague and unhelpful), makes a gut-feel judgment. Takes 3-7 days.
- **Title:** Credit Controller, Credit Manager, Finance Manager, or the owner/MD personally.
- **Age:** 30-50. Experienced, uses Excel for receivables tracking. Has never seen a business credit report because they do not exist in Nigeria.
- **Pain frequency:** Weekly. Spikes when a customer defaults on N10M+ and the post-mortem reveals warning signs that were invisible: lapsed CAC, outstanding court judgments, declining cash flow.
- **Budget authority:** N50-200K/month for tools that reduce bad debt. A single N5-20M write-off justifies a year of subscription.
- **Decision trigger:** A major bad debt event. The MD asks "why didn't we know this before?"
- **Positioning that resonates:** "Extend credit to 3x more customers without hiring a credit team."

### Secondary: The Smaller Trader (VendorScore Lite Target)

- **Company profile:** Market trader, small wholesaler, or shop owner. 2-15 employees. N5-50M/month revenue. Extends N1-5M in credit on handshakes.
- **Current process:** Relies entirely on personal relationships and market reputation. No documentation, no verification, no process.
- **Pain:** Loses N500K-2M/year on bad debts from customers who disappear. Cannot afford N20-50K per credit check. Makes credit decisions at the market, not at a desk.
- **Technology:** Feature phone or low-end smartphone. WhatsApp user. May not have reliable internet access.
- **What they need:** Dial *XXX#, enter a business name or phone number, get a basic score via SMS. N5-10K per lookup. Simple, fast, works on any phone.
- **Market size:** This is the true non-consuming segment -- millions of traders who have never used any form of credit assessment and never will at N20-50K per report. VendorScore Lite at N5-10K is the "deliberately worse but good enough" product for the mass market.

### Tertiary: Landlords and Equipment Lessors

Commercial property landlords verifying prospective tenants. Equipment leasing companies assessing lessee creditworthiness. Both make large financial commitments (N5-50M) based on limited information.

### Priority Sectors

| Sector | Capacity | Rationale |
|--------|:--------:|-----------|
| Food/Beverage | 63.24% | **Target first** -- highest capacity, inelastic demand, active trade credit culture, can afford software |
| Building Materials | N/A | 80.8 expansion index, highest growth outlook, heavy credit use |
| Furniture | 60.95% | Import substitution beneficiary, growing |
| Textiles | 57.36% | Surviving despite 4x energy cost increase |
| **Avoid:** Electrical/Electronics | 28.00% | Collapsed -46.8%, approaching shutdown |

---

## 4. Problem Deep Dive

### The Current Workflow for B2B Credit Decisions

**Step 1: Credit Request.** A new customer places their second or third order and asks for credit terms: "We'd like to take N20M in stock on 60-day terms." Sales pressures finance to approve quickly. The customer provides a CAC certificate (possibly outdated), a reference letter (possibly fabricated), and a bank reference letter (confirms the account exists, says nothing useful).

**Step 2: Manual Due Diligence.**
- **CAC verification:** Visit the CAC website (frequently down) or pay a lawyer N20-50K for a physical search in Abuja. Result: the company exists. Nothing about financial health.
- **Physical visit:** Send someone to the premises. Is the warehouse full or empty? How many staff? Subjective, time-consuming, shows only what the customer wants you to see.
- **Reference calls:** Pre-screened references always say positive things. Non-provided references require personal networks in the same industry.
- **Bank reference letter:** "The account has been satisfactorily conducted." No balances, no patterns, no overdraft history.
- **Gut feel:** After 3-7 days, a judgment call based on incomplete information.

**Step 3: What Goes Wrong.**
- Cannot see court judgments, cannot verify current CAC status, cannot see payment behavior with other suppliers, cannot assess cash flow health
- Businesses present outdated certificates, fabricate references, rent impressive premises for show
- 3-7 day process delays sales; competitors who decide faster win the customer
- No ongoing monitoring -- deterioration discovered only when payments stop
- No visibility into concentration risk across the portfolio

**Step 4: Business Impact.**
- **Bad debt losses:** 3-8% of revenue annually. For N500M/month businesses: N180-480M/year.
- **Informal credit rationing:** Many businesses refuse ALL credit to new customers because they cannot assess risk. This is the worst outcome -- value destroyed on both sides, sales lost to competitors willing to gamble.
- **Cash flow pressure:** Bad debts force emergency borrowing at 35.5% interest rates, creating cascading crises.
- **Industry-wide distrust:** Low-trust equilibrium where businesses extend less credit than optimal, leaving growth on the table.

### The Smaller Trader's Version

At Aba market, a building materials wholesaler gets a new customer: "I'll take N3M of cement on 30-day terms." The wholesaler has no CAC number, no reference letters, no bank verification process. She asks around -- "Does anyone know this person?" If someone vouches, she extends credit. If the customer defaults, she absorbs the loss silently. She has lost N1.5M this year to three customers who took goods and disappeared. She has stopped extending credit to anyone she does not personally know, which means she is losing 20-30% of potential sales.

She would pay N5-10K to check a business's basic legitimacy before extending N3M in goods -- if such a service existed, and if she could access it from her phone at the market.

---

## 5. Solution Overview

VendorScore is a web-based (with USSD fallback) B2B credit scoring platform that aggregates multiple data sources to generate a composite creditworthiness score for any Nigerian business. The system operates in four stages:

### Stage 1: Business Identification

The user enters a business name, CAC registration number, or director name. VendorScore searches its database and, if previously queried, returns a cached report with last-updated date. For new lookups, the system initiates data collection from all available sources.

### Stage 2: Multi-Source Data Collection

The platform pulls data from multiple sources in parallel:

- **CAC Registry:** Registration status (active/inactive/struck off), incorporation date, registered address, nature of business, authorized share capital, filing compliance history, director/shareholder information.
- **Court Records:** Civil litigation history from state and federal high courts -- outstanding judgments, pending suits, winding-up petitions, debt recovery actions. Initially Lagos and Abuja only, expanding incrementally.
- **Director Network Analysis:** Cross-reference directors across businesses. Flag directors with histories of failure, litigation, or sanctions. Map connections to high-risk entities.
- **Social & Web Signals:** Google Maps listing, social media activity, website status, industry directory listings, news mentions. Absence of digital presence for a business claiming significant revenue is a red flag.
- **Bank Statement Analysis (Optional, Consent-Based):** Via Mono.co -- average monthly balances, cash flow volatility, revenue trends, payment regularity, overdraft usage, bounce/return rates.

### Stage 3: Credit Scoring Engine

Rule-based engine (MVP) transitioning to gradient-boosted decision tree as data accumulates. Produces:

- **VendorScore (0-100):** Composite credit score. 80-100 = A (Low Risk), 60-79 = B (Moderate Risk), 40-59 = C (Elevated Risk), 20-39 = D (High Risk), 0-19 = F (Do Not Extend Credit).
- **Recommended Credit Limit:** Based on score and available financial data, a suggested maximum exposure in naira, adjusted for FX-driven cost inflation (a limit safe at N1,200/$ may need revision at N1,544/$).
- **Risk Flags:** Specific warnings -- lapsed registration, active judgments, director linked to failed businesses, declining cash flow.
- **Confidence Level:** Honestly communicates how much data was available. Prominently displayed.

### Stage 4: Report Delivery, Monitoring & USSD Access

Reports delivered as interactive web pages with Excel export and PDF download. Monitoring alerts via WhatsApp/email when data changes for scored businesses. USSD access for field-based credit decisions -- credit controller dials *XXX#, enters business name, receives score summary via SMS.

---

## 6. Data Infrastructure

This section honestly addresses VendorScore's core challenge: reliable data sourcing in Nigeria. The scoring engine and UX are straightforward engineering. Getting reliable, continuously updated data feeds from Nigerian government systems is the hard part.

### Day 1: What We Launch With

| Data Source | Availability | Method | Confidence Contribution |
|------------|:------------:|--------|:-----------------------:|
| CAC basic data | Available | Web scraping + cached database | Low-Medium |
| Google Maps / social signals | Available | Google Places API, social media APIs | Low |
| Digital presence (website, directories) | Available | Web crawling | Low |

**Day-1 reality:** Most VendorScore reports will be based on 2 data sources, producing confidence levels of 30-49%. We position this honestly on every report: "This score is based on limited public data. Confidence: 38%. A 38% confidence score is infinitely more than zero, which is what you have today."

Day-1 scores tell you: Is this business registered? Is the registration current? Do the directors exist? Does the business have a verifiable physical and digital presence? Is there any public red-flag information? This is already more than 99% of Nigerian B2B credit decisions use today.

### Month 1-3: Court Record Partnerships

| Data Source | Availability | Method | Cost |
|------------|:------------:|--------|:----:|
| Lagos High Court records | Partnership required | Data partnership with LawPavilion or direct registry arrangement | N500K-1M setup + ongoing |
| Abuja FCT High Court records | Partnership required | Same approach | N500K-1M setup |
| Federal High Court (commercial division) | Partnership required | Legal database subscription | N200-500K/yr |

Lagos and Abuja cover the majority of commercial litigation in Nigeria. We do not pretend that scraping court websites will work reliably. This requires human relationships, data-sharing agreements, and potentially manual data entry partnerships. Budget: N1.5-3M for court record infrastructure in the first 3 months.

**Fallback if partnerships are slow:** Launch without court records. Score confidence drops, but the product still delivers value. Add court records as they become available and notify users when their reports are enriched.

### Month 3-6: Expanding the Data Network

| Data Source | Availability | Method | Value |
|------------|:------------:|--------|:-----:|
| Port Harcourt court records | Partnership | Extend Lagos/Abuja model | Covers South-South commercial hub |
| Kano court records | Partnership | Extend model | Covers Northern commercial hub |
| Mono.co bank statement analysis | Available (consent-based) | API integration | Highest-value data source for scoring |
| Payment behavior network | Build internally | Aggregate anonymized data from PayMatch/CollectPro users | Proprietary data moat |

### Month 6-12: Proprietary Data Advantage

As VendorScore generates reports and the broader product suite (PayMatch, CollectPro, SupplyLink) accumulates transaction data, we begin building what no one else in Nigeria has: a proprietary payment behavior database. This is the long-term moat.

- Every PayMatch user who reconciles payments generates data about which businesses pay on time
- Every CollectPro user who tracks collections generates data about which businesses are difficult to collect from
- This anonymized, aggregated data feeds back into VendorScore, improving accuracy with each transaction

This is the Tolaram lesson applied to data: build the infrastructure that does not exist, then monetize it. The data network becomes its own business -- an API that banks, insurance companies, and investors use to assess Nigerian B2B credit risk.

### Data Freshness and Liability

**What happens when a report says "no court records found" but a recent judgment exists that the scraper missed?**

- Every report carries a prominent disclaimer: "This report is based on available public data as of [date]. VendorScore does not guarantee completeness. Absence of court records does not confirm absence of litigation."
- Confidence level explicitly accounts for data coverage gaps
- We display "data freshness" indicators per section (e.g., "CAC data verified: 3 days ago. Court records last checked: 12 days ago. Coverage: Lagos and Abuja courts only.")
- Long-term: explore professional indemnity insurance for the platform

---

## 7. Regulatory Positioning

### Is VendorScore a Credit Bureau?

This is an existential question that must be answered before launch.

**Our position:** VendorScore is a **business verification and risk assessment tool**, not a consumer credit bureau. It does not:
- Collect or report consumer credit data
- Receive data from lenders about individual borrowers
- Issue consumer credit reports as defined under CBN Credit Bureau regulations

VendorScore aggregates publicly available business registration data (CAC), publicly available court records, and publicly available digital presence information. Bank statement analysis is provided only with explicit consent from the subject business via Mono.co's regulated open banking framework.

**Legal basis:** The CBN's Credit Reporting Act 2017 and the CBN Guidelines for the Licensing, Operations and Regulation of Credit Bureaus in Nigeria define credit bureaus as entities that "collect credit information from credit providers" and provide "credit reports on borrowers." VendorScore does neither. It aggregates public data about businesses, not private credit data about borrowers.

**However:** If regulatory interpretation changes or the CBN determines that business credit scoring falls under credit bureau regulation, VendorScore will pursue CBN licensing. The product architecture is designed to be compliant -- data security, audit trails, dispute resolution processes, and accuracy standards are built in from day one.

**Required action before launch:** Engage a Nigerian fintech lawyer (budget N200-500K) to provide a formal legal opinion on this classification. This opinion becomes the foundation document for any regulatory discussions.

**NDPR Compliance:** VendorScore processes business data (not personal consumer data in most cases), but director information is personal data under the Nigeria Data Protection Regulation. NDPR compliance for director data collection, storage, and processing is required. Privacy impact assessment to be completed before launch.

---

## 8. MVP Feature Set (MoSCoW)

### MUST Have -- Week 1-8

These features define the minimum product that delivers value on day one.

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Business search | Search by business name or CAC number | Fuzzy name matching; exact CAC number lookup; return top 5 matches with registration details |
| CAC data integration | Pull registration status, incorporation date, directors, filing history | Real-time or cached CAC data; display active/inactive/struck-off status; show last filing date |
| Social & digital presence | Google Maps, website, social media activity, news mentions | Automated checks via APIs; display presence/absence with verification dates |
| Director network mapping | Show all businesses linked to each director | Cross-reference director names across CAC database; flag directors with multiple failed businesses |
| Rule-based scoring engine | Generate VendorScore (0-100) with letter grade | Weighted scoring across available data points; clear breakdown of score components; recommended credit limit; confidence level prominently displayed |
| Risk flag system | Highlight specific risk indicators | Flags for: lapsed registration, overdue filings, director risk, no digital presence |
| Report generation | Comprehensive credit report with all findings | Web-based report with sections per data source; PDF export; Excel export of key data tables |
| User authentication | Email + password login with organization accounts | Supabase Auth; organization-level data isolation; usage tracking per organization |
| Pay-per-report billing | Charge per report via Paystack | VendorScore Lite (N5-10K), Basic (N20K), tiered pricing via Paystack checkout |
| Confidence level display | Honest communication of data availability | Confidence percentage on every report with plain-language explanation of what data was and was not available |

### SHOULD Have -- Week 9-12

| Feature | Description |
|---------|-------------|
| Court records integration | Search civil court records for judgments and pending cases (Lagos and Abuja initially) |
| Mono.co bank statement analysis | With subject consent, analyze bank statements for cash flow scoring |
| **USSD score lookup** | **Dial *XXX# --> enter business name or CAC number --> receive score and grade via SMS. Format: "ABC Trading: VendorScore 62/100, Grade B, Suggested Limit N15M. Full report: app.vendorscore.ng/r/abc123"** |
| Monitoring alerts | WhatsApp/email alerts when data changes for a previously scored business |
| Portfolio dashboard | View all scored businesses, aggregate risk exposure, concentration analysis |
| Subscription billing | N150K/month unlimited lookups plan via Paystack recurring |
| VendorScore Lite tier | N5-10K CAC + social signals only lookups, no court records or bank analysis |

### COULD Have -- Month 4-6

| Feature | Description |
|---------|-------------|
| Bulk lookup | Upload CSV of business names/CAC numbers for batch processing |
| Score history | Track how a business's VendorScore changes over time |
| API access | REST API for integrating VendorScore into ERP/accounting systems |
| Industry benchmarks | Compare a business's score against sector averages |
| ML scoring model | Transition from rule-based to gradient-boosted model as training data accumulates |
| WhatsApp bot interface | Query a business score via WhatsApp message |
| Payment behavior network | Aggregate anonymized payment data from PayMatch/CollectPro users |
| Self-service VendorScore | Businesses generate their own score to share with suppliers (portable credit report) |

### WON'T Have

| Feature | Rationale |
|---------|-----------|
| Consumer credit scoring | Different market, different regulation |
| Lending or credit issuance | VendorScore provides information, not capital |
| Debt collection | CollectPro territory |
| Guaranteed accuracy | Scores are advisory; legal disclaimer on every report |
| International scoring | Nigeria-only; West Africa is a future play |

---

## 9. Key Screens & UX

### Design Principles

- **Numbers forward:** VendorScore, credit limit, and risk flags visible immediately. No clicking through to find "should I extend credit?"
- **Traffic light simplicity:** Green (A-B, extend credit), Yellow (C, proceed with caution), Red (D-F, do not extend). Clear signal, not data dump.
- **Excel muscle memory:** Every data table exports to Excel. Report format suitable for presenting to an MD.
- **Offline-aware:** Cache previously generated reports in IndexedDB. Credit controllers reviewing portfolios during site visits with poor connectivity access cached scores.
- **Confidence-forward:** Never hide data limitations. If confidence is 35%, show it prominently with an explanation of what additional data would increase it.

### Screen 1: Search & Lookup

Primary screen. Clean search bar at center, prominent like Google.

- **Search input:** Business name or CAC registration number. Auto-complete from previously scored businesses and CAC database index.
- **Recent lookups:** 10 most recent with score, grade, date.
- **Quick stats sidebar:** Total lookups this month, reports remaining (per-report plans), portfolio risk summary.
- **VendorScore Lite badge:** Quick-check option for N5-10K -- "Just need a quick check? VendorScore Lite: CAC status + social signals."

### Screen 2: Credit Report

The core deliverable. Single-page scrollable report with clear sections.

**Header:**
- Business name, CAC number, date of incorporation
- VendorScore: large circular gauge (0-100) with letter grade and color (green/yellow/red)
- Recommended credit limit: bold naira amount (with note on FX adjustment date)
- Confidence level: percentage with plain-language explanation
- "Last updated" timestamp

**Section A -- Registration & Compliance:**
- CAC registration status with badge (active/inactive/struck off)
- Incorporation date, registered address, nature of business
- Filing history table: years with filed/not-filed status
- Share capital (authorized and paid-up)

**Section B -- Directors & Shareholders:**
- Director table: name, appointment date, other directorships
- Risk flags per director: failed businesses, litigation, sanctions
- Network visualization: simple node graph showing connections

**Section C -- Litigation & Court Records:**
- Case table: case number, court, plaintiff, amount, status
- Summary: total cases, total amount in dispute, active judgments
- Coverage note: "Court records checked: Lagos High Court, Abuja FCT High Court. Other jurisdictions not yet covered."

**Section D -- Bank Statement Analysis (if available):**
- Average monthly balance (trailing 6 months)
- Cash flow trend: bar chart of monthly inflows vs outflows
- Payment regularity score
- Bounce/return rate
- Revenue trend: increasing, stable, declining

**Section E -- Digital Presence & Social Signals:**
- Google Maps listing: exists/verified/not found
- Website: active/inactive/not found
- Social media: active profiles with last activity date
- News mentions: recent articles with sentiment

**Footer:**
- Score breakdown: horizontal bar chart showing contribution per data source
- Disclaimer: "This report is advisory and based on available public data. VendorScore does not guarantee accuracy or completeness. Absence of court records does not confirm absence of litigation."
- Action buttons: "Download PDF," "Export to Excel," "Set Up Monitoring," "Share Report"

### Screen 3: Portfolio Dashboard

For subscription users managing multiple credit relationships.

**Header KPIs:**
- Total credit exposure across all scored businesses
- Average portfolio VendorScore
- Businesses by risk grade (A/B/C/D/F)
- Alerts requiring attention

**Main table:** All scored businesses -- name, score, grade, credit limit, last updated, alerts. Sortable, filterable.

**Risk concentration chart:** Pie chart by risk grade. Bar chart of top 10 exposures.

**Export:** One-click Excel export of entire portfolio, formatted for management reporting.

### Screen 4: USSD Flow

For credit controllers in the field and smaller traders without reliable internet.

```
*XXX# --> Welcome to VendorScore
1. Check a business
2. My recent lookups
3. Buy credits

[1] --> Enter business name or CAC number
--> Searching... Please wait

SMS delivered:
"VendorScore Report
Business: ABC Trading Ltd
CAC: Active (since 2018)
Score: 62/100 | Grade B
Risk: Moderate
Suggested Limit: N15M
Confidence: 42%

Full report: app.vendorscore.ng/r/abc123
Cost: N5,000 (Lite) | N20,000 (Full)
Reply BUY FULL to upgrade"
```

Africa's Talking for USSD session management. SMS delivery of results works on every phone, including the 42% of connections on 2G.

### Screen 5: Settings & Billing

- Organization profile, industry, credit policy defaults
- Team management: invite users, set roles
- Billing: current plan, usage, upgrade/downgrade, payment history
- API keys for subscription users
- Credit policy templates: default credit limits by score grade
- Region setting: adjusts benchmarks and defaults

---

## 10. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router, Server Components) | Fast initial load via SSR; SEO for marketing pages |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development, professional report layouts |
| Backend | Next.js API Routes + Server Actions | Single deployment; Vercel Cron for data pipeline |
| Database | Supabase PostgreSQL | Full-text search for business name matching; built-in auth; generous free tier |
| Auth | Supabase Auth | Email/password, organization-level RLS, role-based access |
| File Storage | Supabase Storage | Generated PDF reports, uploaded documents |
| Data Pipeline | Node.js workers + Vercel Cron | Scheduled scraping and data refresh; queue-based report generation |
| CAC Integration | Web scraping + cached database | Scrape CAC portal; cache in Supabase; refresh if stale >30 days |
| Court Records | Partnership-based data feeds + manual entry | Data partnerships with LawPavilion or direct court registry arrangements |
| Bank Data | Mono.co API | Bank statement retrieval with customer consent |
| Scoring Engine | TypeScript rule engine (MVP) --> Python ML model (v2) | Weighted rules first; gradient-boosted trees as labeled data accumulates |
| Payments | Paystack | Per-report checkout and subscription billing in NGN |
| Messaging | Termii (WhatsApp + SMS) + Resend (email) | Alerts and USSD score delivery |
| USSD | Africa's Talking | USSD session management, works on all connections including 2G |
| PDF Generation | @react-pdf/renderer or Puppeteer | Downloadable formatted credit reports |
| Excel Export | xlsx (SheetJS) | Formatted exports for finance teams |
| Offline Storage | IndexedDB via idb library | Cache reports locally for offline access |
| Hosting | Vercel + Supabase | Free/cheap tiers for MVP; auto-scaling |
| Monitoring | Sentry (errors) + PostHog (analytics) | Error tracking for data pipeline reliability |

### Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  industry text,
  region text, -- lagos, port_harcourt, south_east, north, other
  plan text CHECK (plan IN ('lite', 'per_report', 'monthly_unlimited', 'enterprise')),
  reports_remaining integer DEFAULT 0,
  lite_credits_remaining integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
)

-- Users
users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  org_id uuid REFERENCES organizations,
  role text CHECK (role IN ('admin', 'analyst', 'viewer')),
  full_name text,
  phone text, -- for USSD/SMS access
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
  region text, -- for regional analytics
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
  court_jurisdiction text, -- lagos, abuja, port_harcourt, kano, etc.
  case_type text CHECK (case_type IN ('debt_recovery', 'winding_up', 'breach_of_contract', 'fraud', 'other')),
  plaintiff text,
  defendant text,
  amount_in_dispute decimal(15,2),
  filing_date date,
  status text CHECK (status IN ('pending', 'judgment_for_plaintiff', 'judgment_for_defendant', 'settled', 'dismissed', 'unknown')),
  judgment_amount decimal(15,2),
  notes text,
  source text,
  data_verified_date date,
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
  data_sources_missing text[], -- honest tracking of what was NOT available
  model_version text,
  fx_rate_at_scoring decimal(10,2), -- track naira rate at time of scoring
  created_at timestamptz DEFAULT now()
)

-- Report Lookups (billing and audit trail)
report_lookups (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  user_id uuid REFERENCES users,
  business_id uuid REFERENCES businesses,
  score_id uuid REFERENCES credit_scores,
  report_type text CHECK (report_type IN ('lite', 'basic', 'enhanced', 'full')),
  access_channel text CHECK (access_channel IN ('web', 'ussd', 'whatsapp', 'api')),
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

-- USSD Sessions
ussd_sessions (
  id uuid PRIMARY KEY,
  phone_number text NOT NULL,
  session_id text UNIQUE, -- Africa's Talking session ID
  user_id uuid REFERENCES users,
  state text, -- current menu state
  query text, -- business name or CAC number entered
  result_business_id uuid REFERENCES businesses,
  result_score_id uuid REFERENCES credit_scores,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
)
```

### Scoring Engine Algorithm

```
For each business lookup:

  1. Data Collection (parallel):
     a. CAC Data --> registration_score (0-25 points)
     b. Court Records --> litigation_score (0-25 points)
     c. Director Network --> director_score (0-20 points)
     d. Digital Presence --> presence_score (0-10 points)
     e. Bank Analysis (if available) --> financial_score (0-20 points)

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
     - 80-100: Grade A (Low Risk) --> Recommend full credit limit
     - 60-79: Grade B (Moderate Risk) --> Recommend 60-80% of requested limit
     - 40-59: Grade C (Elevated Risk) --> Recommend 30-50% or secured terms only
     - 20-39: Grade D (High Risk) --> Recommend cash-only terms
     - 0-19: Grade F (Do Not Extend) --> Recommend no credit relationship

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
     - All limits tagged with FX rate at time of calculation

  10. VendorScore Lite (simplified):
     - Uses only Registration Score (0-25) + Digital Presence Score (0-10)
     - Scaled to 0-100 for consistency
     - Confidence level: 15-30% (honestly communicated)
     - No credit limit recommendation (insufficient data)
     - Provides: CAC status, registration age, digital presence check, basic risk flags
```

### Data Pipeline Architecture

```
Scheduled Jobs (Vercel Cron):
  - CAC data refresh: Daily scan of businesses with stale data (>30 days)
  - Court records sync: Weekly pull from partnership data feeds (Lagos, Abuja)
  - Monitoring checks: Daily comparison of current data vs last scored data
  - Alert dispatch: Real-time via Supabase Realtime + WhatsApp/email/SMS queue

On-Demand (User-Triggered):
  - New lookup: Parallel fetch from all sources --> score --> cache --> deliver
  - Refresh request: Re-fetch --> re-score --> compare --> alert if changed
  - USSD lookup: Fetch from cache or initiate new lookup --> deliver via SMS

Data Freshness:
  - CAC data: Refreshed on every lookup if >7 days old
  - Court records: Refreshed weekly via partnership feeds
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
  - Alert sending (requires WhatsApp/email/SMS API)
  - Payment processing (requires Paystack)
  - USSD sessions (require Africa's Talking)
```

---

## 11. Product Suite Integration

VendorScore is not a standalone product. It is the **credit infrastructure layer** that makes every other product in the suite more valuable.

### VendorScore + PayMatch = Scored Trade Credit with Automated Reconciliation

PayMatch users reconcile payments and track receivables. With VendorScore integration:
- Before extending new credit terms, the finance manager checks VendorScore without leaving PayMatch
- Unmatched payments are flagged with the counterparty's VendorScore -- a D-rated business with an unmatched N5M payment gets escalated faster than an A-rated one
- PayMatch payment data feeds back into VendorScore, improving score accuracy with real payment behavior

### VendorScore + CollectPro = Risk-Prioritized Collection

CollectPro manages debt collection workflows. With VendorScore integration:
- Collection priority is automatically set by VendorScore grade: D/F scores get immediate, aggressive collection; A/B scores get patient follow-up
- VendorScore data enriches collection files with director information, other business interests, and asset indicators
- Collection outcomes feed back into VendorScore as payment behavior data

### VendorScore + SupplyLink = Credit-Scored Invoice Factoring

SupplyLink enables supply chain finance. With VendorScore integration:
- Invoice factors can price risk using VendorScore -- an invoice from an A-rated debtor gets factored at 3-5%, a C-rated debtor at 10-15%
- This is the product combination that makes invoice factoring possible in Nigeria for the first time. Factors need credit scores to price risk; VendorScore provides them.
- SupplyLink transaction data feeds back into VendorScore

### The Data Network Effect

Each product in the suite generates transaction data. Anonymized and aggregated, this data creates a proprietary payment behavior database that no competitor can replicate without building the same multi-product suite. This is the compounding data moat:

```
PayMatch payment reconciliation data
  + CollectPro collection outcome data
  + SupplyLink factoring transaction data
  = Proprietary payment behavior network
  = VendorScore accuracy improves
  = More users trust VendorScore
  = More products adopted
  = More data generated
  = Flywheel
```

---

## 12. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **VendorScore Lite** | N5,000-10,000/lookup (~$3-7) | CAC status + social signals + basic score. No court records, no bank analysis. USSD or web. For smaller traders making N1-5M credit decisions |
| **Basic Report** | N20,000/report (~$13) | CAC + court records + digital presence. No bank analysis. For quick checks on moderate credit decisions |
| **Full Report** | N50,000/report (~$33) | All data sources including Mono.co bank analysis (with consent). Full scoring model, recommended credit limit, director network |
| **Professional** | N150,000/month (~$98) | Unlimited lookups (Basic + Full), portfolio dashboard, monitoring alerts, Excel/PDF exports, 3 users |
| **Enterprise** | N300,000/month (~$195) | Professional + API access, bulk upload, custom scoring weights, 10 users, dedicated support |
| **Founding Customer** | N75,000/month (~$49) | Professional features, locked for 12 months, limited to first 10 customers |

### Trial & Onboarding

- 3 free Basic Reports on signup (enough to demonstrate value on real businesses)
- 1 free VendorScore Lite lookup via USSD on first dial
- Onboarding call (20 min) for every web signup
- During onboarding, run a report on a business the customer already extends credit to -- validate accuracy against their own knowledge
- Trial-to-paid conversion target: 30%

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~$80-120 | Vercel Pro ($20) + Supabase Pro ($25) + Mono.co API (~$20) + Africa's Talking USSD/SMS (~$15-35) + court record partnerships (~$50-100 amortized) |
| Cost per Lite report | ~$0.50-1 | Cached CAC data + API calls for social signals. Minimal compute |
| Cost per Full report | ~$2-5 | Mono.co API (~$1-2) + compute + storage + amortized scraping/partnership costs |
| CAC (customer acquisition) | $20-50 | LinkedIn outreach, content marketing, family network |
| Monthly churn estimate | 3-5% | Businesses with active credit portfolios need ongoing monitoring |
| Average retention | 18 months | Credit risk is permanent; switching cost of rebuilding scored portfolio |
| LTV (Professional) | N2,700,000 (~$1,755) | N150K x 18 months |
| LTV (Lite user, recurring) | N120,000-240,000 (~$78-156) | N10K x 1-2 lookups/month x 12 months |
| LTV:CAC ratio | 23:1 - 58:1 | Strong unit economics |

### Revenue Targets

| Milestone | Timeline | Customers/Reports | MRR (NGN) | MRR (USD) |
|-----------|----------|-------------------|-----------|-----------|
| First paying customer | Week 10-12 | 1 subscription + 10 reports + 20 Lite lookups | N450,000 | ~$293 |
| Break-even | Month 4 | 5 subscriptions + Lite volume | N900,000 | ~$585 |
| Target | Month 8 | 15 subscriptions + 50 reports + 100 Lite/month | N3,750,000 | ~$2,438 |
| Stretch | Month 14 | 40 subscriptions + 200 reports + 500 Lite/month | N12,500,000 | ~$8,125 |

Break-even at 5 Professional subscribers + moderate Lite volume. Per-report and Lite revenue provide additional upside from occasional and smaller users.

---

## 13. Regional Go-to-Market Strategy

### Phase 1: Lagos (Month 1-3)

**Why first:** 40-50% of workaround spending. Highest concentration of wholesalers and distributors. Best CAC and court data availability (Lagos High Court has the most digitized records). Largest pool of Food/Beverage distributors (primary target sector).

**Channels:**
- LinkedIn outreach to credit controllers at Lagos-based wholesalers and distributors (80 connection requests)
- MAN Lagos chapter meetings and newsletter
- Accounting firm partnerships (Lagos has the highest concentration of SME-serving firms)
- Content marketing: "Bad Debt Stories" from Lagos business community

**Target:** 5-8 paying customers.

### Phase 2: Port Harcourt (Month 3-5)

**Why second:** Family connections for validation and testing. Rivers State commercial hub. Active oil & gas service company ecosystem with heavy trade credit usage. Port Harcourt court records partnership expands data coverage.

**Channels:**
- Family network warm introductions (5+ connections to wholesalers/distributors)
- Oil & gas service company ecosystem (these businesses extend large credit lines to subcontractors)
- Cross-sell from any PayMatch users in Port Harcourt

**Target:** 3-5 paying customers.

### Phase 3: South-East Manufacturing Cluster (Month 5-8)

**Why third -- and why this is the breakthrough opportunity:** Aba, Nnewi, and Onitsha represent Nigeria's highest manufacturing capacity (59.91%) but lowest business confidence (18.7). This paradox creates the highest-value use case for VendorScore.

**The problem VendorScore solves here:** Lagos and Port Harcourt suppliers routinely refuse credit to South-East businesses based on regional risk perception, not data. A manufacturer in Nnewi with a 10-year track record, active CAC registration, and no court judgments gets denied credit because "the South-East is risky." VendorScore provides objective data that counters this bias.

**The positioning:** "Don't lose sales to the South-East's N[X]B manufacturing sector because of perception. VendorScore gives you the data to extend credit safely -- or the data to confirm your concerns. Either way, you're making decisions on facts, not feelings."

**Channels:**
- Direct outreach to South-East manufacturers who need to demonstrate creditworthiness to Lagos/PH suppliers
- "Self-service VendorScore" positioning: businesses generate their own score to share with skeptical suppliers
- Aba/Nnewi trade associations and chambers of commerce
- USSD-first approach for market traders in Aba (lower smartphone penetration)

**Target:** 5-10 paying customers (mix of South-East businesses wanting to prove creditworthiness and Lagos/PH suppliers wanting to assess South-East counterparties).

### Phase 4: Northern Expansion (Month 8-12)

Kano (commercial capital of the North), Kaduna, and Abuja. Expand court record coverage to Northern jurisdictions. Different industries (agriculture, textiles, wholesale trade).

### GTM Channel Summary

| Channel | Volume | Expected Demos | Expected Customers |
|---------|--------|----------------|-------------------|
| LinkedIn (Lagos focus) | 80 | 4-5 | 2-3 |
| Family network (Port Harcourt) | 5+ | 3-4 | 2 |
| PayMatch cross-sell | 5 | 3 | 2 |
| MAN directory | 20 | 2-3 | 1-2 |
| Accounting firm partners | 10 firms | 5-8 | 3-5 |
| Content marketing ("Bad Debt Stories") | 4 articles | 3 | 1-2 |
| South-East outreach | 20 | 5-8 | 3-5 |
| USSD/Lite (market traders) | Organic | N/A | 10-20 Lite users |
| **Total** | **140+** | **25-34** | **14-21 (web) + 10-20 Lite** |

---

## 14. Development Timeline

### Realistic Timeline: 10-12 Weeks to MVP

The original 6-8 week estimate underestimated data source integration complexity in the Nigerian context. CAC API (if one exists) may require partnership negotiation. Court record sourcing requires human relationships. Mono.co integration requires testing across multiple banks with different data formats.

### Week 1-2: Foundation

- Supabase project setup (database, auth, storage)
- Next.js project with Tailwind + shadcn/ui
- User authentication flow (email + OTP)
- Organization management and multi-tenancy
- Core database schema deployment

### Week 3-4: CAC Integration & Search

- CAC web scraping engine with multiple strategies (direct scrape, headless browser, cached database)
- Business search with fuzzy name matching
- Director extraction and cross-referencing
- Persistent caching layer with freshness tracking

### Week 5-6: Social Signals & Scoring Engine

- Google Maps/Places API integration
- Website and social media presence checking
- News mention aggregation
- Rule-based scoring engine (registration + digital presence)
- VendorScore Lite report generation
- Confidence level calculation and display

### Week 7-8: Report & Billing -- FALLBACK LAUNCH POINT

- Full credit report UI (all sections, even if some say "data not yet available")
- PDF generation and Excel export
- Paystack integration (per-report + Lite billing)
- **If court records and Mono.co are not ready, launch here with CAC + social signals only.** VendorScore Lite is the product. Basic and Full reports are "coming soon."

### Week 9-10: Court Records & Bank Analysis

- Court record data feed integration (Lagos, Abuja partnerships)
- Mono.co bank statement analysis
- Full scoring engine with all data sources
- Upgrade Lite reports to Basic/Full when additional data becomes available

### Week 11-12: USSD, Monitoring & Polish

- Africa's Talking USSD integration
- SMS score delivery
- Monitoring alerts (WhatsApp + email)
- Portfolio dashboard
- Subscription billing
- Load testing, security audit, launch prep

### Fallback Plan

If data source partnerships take longer than expected:

1. **Week 8: Launch VendorScore Lite** -- CAC + social signals only. N5-10K per lookup. Honest 30-40% confidence levels. Delivers value by answering: "Is this business real? Is the registration current? Do the directors check out?"
2. **Post-launch: Add court records** as partnerships are finalized. Notify existing users that their reports have been enriched.
3. **Post-launch: Add Mono.co** integration. Offer as optional upgrade for higher-confidence scores.

This approach follows the Indomie playbook: ship the simplest version that solves the core problem, achieve distribution, then add depth.

---

## 15. Risks & Mitigations

### Risk 1: CAC Data Accessibility and Reliability

**Likelihood:** High. The CAC website is notoriously unreliable, frequently down, with no public API.

**Impact:** Core data source unavailable. Reports cannot be generated without registration verification.

**Mitigations:**
- Persistent cache of every CAC record accessed. Once scraped, data lives permanently with a "last verified" date.
- Multiple strategies: direct web scraping, headless browser automation, manual data entry as fallback.
- Partner with legal tech companies (LawPavilion) that already aggregate CAC data.
- Price reports to cover manual CAC search costs when automation fails.
- Display "data freshness" indicators so users understand currency of each data point.

### Risk 2: Court Records Are Not Digitized

**Likelihood:** High. Most Nigerian court records exist only in physical registries. Digitized records limited to Lagos and Abuja, and even those are incomplete.

**Impact:** Litigation data unavailable for many businesses, reducing score accuracy.

**Mitigations:**
- Start with Lagos and Abuja (majority of commercial litigation). Expand incrementally.
- Partnership model, not scraping model. Budget N1.5-3M for data partnerships.
- Scoring model functions without litigation data -- reduces confidence level rather than refusing to score.
- "No records found" displayed with coverage caveat: "Court records checked: Lagos and Abuja High Courts only."
- Long-term: build the most comprehensive court records database as a proprietary asset.

### Risk 3: Businesses Refuse Mono.co Consent

**Likelihood:** Medium-High. Subject business must consent to share bank data.

**Impact:** Bank analysis -- most valuable data source -- unavailable for most lookups.

**Mitigations:**
- Scoring model works without bank data. CAC + court records + director network + digital presence provide a useful score.
- Position sharing as beneficial: "A higher VendorScore means better terms from suppliers."
- Self-service option: businesses proactively generate their own score to share with suppliers (portable credit report).
- Build alternative data sources (payment behavior data from suite products) to reduce bank statement dependence.

### Risk 4: Scoring Accuracy and Liability

**Likelihood:** Medium. Early scores based on limited data and rule-based heuristics.

**Impact:** Customer trust erosion; potential legal liability.

**Mitigations:**
- Prominent legal disclaimer on every report.
- Confidence levels prominently displayed. A 30% confidence score is clearly flagged as preliminary.
- Feedback collection: "Did this score match your experience?" to improve the model.
- Conservative scoring approach -- err on the side of lower scores.
- Track outcomes: correlate VendorScores with reported bad debts. Publish accuracy metrics when data is sufficient.

### Risk 5: Willingness to Pay for a New Category

**Likelihood:** Medium. Nigerian businesses have never paid for credit reports because they did not exist.

**Impact:** Long sales cycles, price resistance.

**Mitigations:**
- 3 free reports on signup. Let data speak.
- ROI calculator: "One N5M bad debt prevented = 100x the cost of a VendorScore report."
- VendorScore Lite at N5-10K removes price objection for smaller decisions.
- Anchor to current alternatives: "A physical CAC search costs N30-50K and takes 5 days. VendorScore: N20K, 5 minutes."
- Founding customer pricing at 50% discount to build reference accounts.

### Risk 6: Regulatory Classification as Credit Bureau

**Likelihood:** Low-Medium. CBN could interpret business credit scoring as credit bureau activity.

**Impact:** Would require CBN licensing, significantly increasing compliance costs and timeline.

**Mitigations:**
- Legal opinion from Nigerian fintech lawyer before launch (N200-500K budgeted).
- Product architecture designed for compliance readiness: data security, audit trails, dispute resolution, accuracy standards.
- Position as "business verification" not "credit bureau" in all marketing and legal documents.
- If regulatory classification changes, pursue CBN licensing proactively.
- Maintain relationships with fintech regulatory bodies (CBN Innovation Office).

### Risk 7: FX-Driven Credit Limit Obsolescence

**Likelihood:** High. Naira volatility means a credit limit safe at N1,200/$ may be inadequate at N1,544/$.

**Impact:** Recommended credit limits become misleading as naira depreciates.

**Mitigations:**
- Tag every credit limit with the FX rate at time of calculation.
- Display FX-adjusted limits where the underlying business has import exposure.
- Monitoring alerts when FX movements exceed thresholds that would materially affect outstanding credit limits.
- Scoring engine recalculates limits on refresh, incorporating current FX rates.

### Risk 8: Data Source Integration Delays

**Likelihood:** Medium-High. Integrating multiple unreliable data sources is technically complex.

**Impact:** MVP takes 10-12 weeks instead of target. Revenue delayed.

**Mitigations:**
- Fallback launch plan at week 8 with CAC + social signals only (VendorScore Lite).
- Manual data entry as bridge for first 50 reports.
- Revenue from Lite reports funds development of deeper integrations.
- Court record partnerships pursued in parallel with engineering work, not sequentially.

---

## 16. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 4 | 0.20 | Realistically 10-12 weeks with data source complexity. Each source is a mini-project. Fallback plan (Lite at week 8) mitigates somewhat. |
| Time to Revenue | 15% | 5 | 0.75 | Need functioning data pipeline before selling. First revenue at week 10-12, or week 8 with Lite fallback. Per-report and Lite pricing provides faster path than subscription. |
| Market Size | 15% | 8 | 1.20 | Every B2B transaction involves credit risk. N49.4T credit gap, N75B failed payments, 41.5M MSMEs. Horizontal need across all industries. |
| Competition | 10% | 8 | 0.80 | No Nigerian B2B credit scoring product exists. Consumer credit bureaus and KYC players do not serve this market. |
| Skill Fit | 15% | 8 | 1.20 | Alternative data credit scoring is core ML/data science. Feature engineering from heterogeneous data, web scraping, scoring model development all strong skill matches. |
| Capital Required | 10% | 6 | 0.60 | Data partnerships (court records) cost N1.5-3M. Mono.co API costs per call. Legal opinion N200-500K. Total: $500-2,000 for MVP, higher than pure software. Still bootstrappable but at the edge. |
| Buyer Clarity | 20% | 7 | 1.40 | Any credit-extending business is a buyer. Identifiable but category is new -- requires education. VendorScore Lite expands buyer pool to smaller traders. |
| Fintech Upside | 10% | 9 | 0.90 | Credit scoring is foundational infrastructure for B2B lending, invoice factoring, trade credit insurance, supply chain finance. Highest fintech-upside product in the portfolio. |
| **TOTAL** | **100%** | | **7.05 / 10** |

### Verdict: BUILD (Second Priority)

A 7.05 composite score reflects the reality of data infrastructure challenges while confirming VendorScore as a compelling long-term play. The combination of massive market (8), zero competition (8), and exceptional fintech upside (9) makes this the most strategically important product in the portfolio. Build Speed and Capital Required scores are lower than the v1 assessment because we are being honest about court record partnership costs and realistic timelines.

**Go condition:** Begin development after PayMatch reaches 5 paying customers (Month 2-3). Use PayMatch revenue to fund VendorScore data pipeline development. Target first VendorScore paying customer by Month 4-5. Parallel-path court record partnerships and Mono.co integration during PayMatch development.

---

## 17. 8-Criteria Disruption Self-Assessment

| # | Criterion | Rating | Assessment |
|---|-----------|--------|------------|
| 1 | **Targets overlooked or non-consuming segments** | **Strong fit** | Credit bureaus serve 13% of adults, virtually zero SMEs. There is no Nigerian B2B credit scoring product. The 41.5M MSMEs and their trade credit counterparties are non-consumers of credit information. VendorScore Lite extends this further to millions of smaller traders who have never used any form of credit assessment. The South-East manufacturing cluster is doubly underserved -- high capacity, zero credit infrastructure. |
| 2 | **Appears deliberately "worse" but good enough** | **Strong fit** | Day-1 VendorScore runs on CAC data and social signals only. Confidence levels of 30-49%. This is "worse" than a comprehensive Dun & Bradstreet report by any measure. But it is infinitely better than the current alternative of nothing. A 40% confidence score based on verified CAC status, director network analysis, and digital presence is more than what any Nigerian wholesaler uses today. VendorScore Lite at N5-10K is the deliberately worse, mass-market product. |
| 3 | **Gains traction via foothold** | **Strong fit** | New-market foothold. Creating a category that does not exist in Nigeria. No direct incumbent to displace. Entry at N5-50K per report is affordable relative to N5-20M bad debt losses. Consumer credit bureaus (CreditRegistry, CRC) serve a different market and would likely view B2B trade credit scoring as too fragmented and low-margin. |
| 4 | **Reimagines the value chain** | **Partial fit** | The data aggregation pipeline (CAC scraping, court record partnerships, Mono.co integration, social signal analysis) is a new data supply chain. However, the court record challenge is real -- this is not just a scraping exercise but a multi-year infrastructure build requiring human relationships and data partnerships. The value chain innovation is genuine but the execution risk on data sourcing is the product's biggest vulnerability. Following the Tolaram lesson: build the infrastructure that does not exist. |
| 5 | **Prioritizes scaling core solution** | **Strong fit** | MVP is deliberately simple: search, score, report. VendorScore Lite is even simpler: search, basic check, SMS result. Feature roadmap (monitoring, portfolio dashboard, API, ML model, USSD) is sequenced after core value delivery. Pay-per-report model allows single-use adoption before subscription commitment. USSD access prioritizes distribution breadth over product depth. |
| 6 | **Demands a different cost structure** | **Partial fit** | Software-based (scraping + Supabase + Vercel) is fundamentally cheaper than traditional credit bureau operations (data-sharing agreements, regulatory licenses, physical presence). But court record partnership costs, Mono.co API fees, and data quality assurance require ongoing investment that is not zero. N5-10K Lite pricing is viable because it uses only cached/free data sources. The cost structure is different from incumbents but the data acquisition costs need careful management. Pattern match: Volume over margin -- N5K x millions of lookups is the long-term model. |
| 7 | **Converts non-consumption into growth** | **Strong fit** | Total addressable market expands because VendorScore exists. Invoice factoring cannot emerge without credit scoring. Trade credit insurance cannot be priced without credit data. The N49.4T SME credit gap exists partly because credit information does not exist. Filling the information gap unlocks credit flow. South-East manufacturers gain access to credit currently denied by regional bias. Growth comes from people who previously had nothing, not from stealing share. |
| 8 | **Can mature to surpass mainstream offerings** | **Strong fit** | Clear maturation path: rule-based scoring (MVP) to ML model (v2) to proprietary payment behavior network (data from PayMatch/CollectPro/SupplyLink users). As data accumulates, scores become more accurate, creating a compounding data advantage. Product matures upmarket to serve banks, insurance companies, and investors needing Nigerian B2B credit data. The payment behavior network -- aggregating actual transaction data from suite products -- would eventually provide better data than traditional credit bureaus that rely on lender self-reporting. |

**Overall: 6/8 strong fit, 2/8 partial fit, 0/8 gaps.**

The two partial fits (value chain, cost structure) both relate to the same underlying challenge: data acquisition in Nigeria is hard and costs real money. This is acknowledged and planned for. Neither is a disqualifying weakness -- they are execution challenges, not conceptual misalignments.

The non-negotiable criteria (1, 3, 7) are all strong fits. VendorScore targets genuine non-consumption, enters via a new-market foothold, and its growth comes from converting non-consumers into first-time users of credit information.

---

## 18. Strategic Position Summary

VendorScore is the credit infrastructure layer for Nigerian commerce. It is not a standalone credit scoring tool -- it is the foundation that enables downstream financial products (invoice factoring, trade credit insurance, B2B lending) to emerge in Nigeria for the first time.

**The Tolaram parallel:** Indomie's real innovation was not the noodle -- it was the value chain (factories, power, logistics, retail network). VendorScore's real innovation is not the scoring algorithm -- it is the data infrastructure (CAC integration, court record partnerships, payment behavior network). The score is simple. The system that produces it is the moat.

**The honest pitch:** "Today you make credit decisions based on gut feel, physical visits, and reference calls from people your customer hand-picked. VendorScore gives you a data-driven score in minutes instead of days. Our day-1 scores carry 30-49% confidence because Nigerian business data infrastructure is incomplete. But 40% confidence is infinitely more than zero. As we add court records, bank analysis, and payment behavior data, confidence rises. You get better scores every month. And you can extend credit to 3x more customers safely, without hiring a credit team."

**The South-East unlock:** VendorScore's most powerful narrative is in the South-East paradox. The region with Nigeria's highest manufacturing capacity is starved of credit because of subjective risk perceptions. VendorScore provides objective data. This is not just a product feature -- it is an economic unlocking mechanism. If VendorScore can demonstrate that South-East manufacturers are objectively creditworthy, it does not just sell software. It redirects credit flow to Nigeria's most productive manufacturing region.

**Data moat timeline:**
- Month 1-6: Commodity data (CAC, social signals, court records). Anyone could build this.
- Month 6-12: Proprietary data begins (payment behavior from suite products). Competitors would need to build the same multi-product suite.
- Month 12-24: Data network effects. Each new user makes every existing user's scores more accurate. This is the defensible moat.
