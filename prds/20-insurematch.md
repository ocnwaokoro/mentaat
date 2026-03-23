# PRD 20: InsureMatch — SME Business Insurance Comparison & Procurement

## 1. Executive Summary

InsureMatch is a business insurance comparison and procurement platform that helps Nigerian SMEs discover, compare, and purchase insurance policies they never knew they needed. Nigeria's insurance penetration sits at 0.34% of the population — meaning 99.66% of the market is untouched — while gross premiums hit N1.56T in 2024 with 56% year-over-year growth, making insurance the fastest-growing financial services segment in the country. The problem is not that businesses reject insurance; it is that the procurement process is opaque, fragmented, and requires expertise most SMEs do not have. A factory owner in Ikeja knows he needs fire coverage but has no idea which of the 50+ licensed insurers offers the best terms, what other risks (cargo, liability, key-man) he should be covering, or how to evaluate policy exclusions that could void his claim. InsureMatch solves this: a business enters its profile (sector, size, assets, location, risk factors), the platform recommends relevant insurance types, pulls live quotes from partner insurers, presents a side-by-side comparison of coverage, exclusions, and price, and facilitates online purchase — all in under 15 minutes. The business pays nothing. InsureMatch earns 15-25% commission from insurers on every policy sold, which is the standard industry commission structure. The platform attaches naturally to GenTrack (generator and asset insurance), ClearFast (cargo and marine insurance), and PayMatch (trade credit insurance), creating embedded insurance opportunities across the product suite. PolicyBazaar in India proved this exact model at scale, raising over $1B and reaching a $6B valuation. Nigeria's market is at an earlier stage with even lower penetration, making the timing ideal. MVP ships in 4-6 weeks, with insurer partnership onboarding as the critical path item. First revenue follows the first policy sale — no subscription required, no upfront cost to the business, no capital at risk.

## 2. Market Opportunity

**Nigeria's insurance market is a paradox: explosive growth from a near-zero base.**

- **Insurance penetration:** 0.34% of the population has any form of insurance coverage. Developed markets exceed 20%. This is not a gap — it is a greenfield opportunity measured in hundreds of trillions of naira.
- **Gross premiums:** N1.56T in 2024, growing 56% year-over-year. This is the fastest growth rate of any financial services segment in Nigeria, outpacing payments (42% growth in failed payments alone), lending, and banking.
- **Total industry assets:** N3.9T with 46.1% growth — insurers are well-capitalized and actively seeking distribution channels.
- **Regulatory tailwind:** NAICOM (National Insurance Commission) is actively pushing for increased penetration. The regulator wants more Nigerians insured, which means favorable treatment for distribution platforms that expand the market rather than just redistribute existing customers.
- **Self-insurance trap:** Nigerian businesses spend billions annually on self-insurance workarounds — generators (N22T market) replace power insurance, boreholes replace water supply insurance, security guards replace theft/liability insurance. Proper insurance could replace or supplement some of these workarounds at a fraction of the cost.
- **The awareness gap:** Most Nigerian SMEs cannot name three types of business insurance beyond fire coverage. They do not know they need product liability insurance, key-man insurance, business interruption insurance, or professional indemnity. The first company to educate and sell simultaneously wins the market.
- **Proven global model:** PolicyBazaar (India) raised $1B+ and reached a $6B valuation with the insurance comparison model. Compare the Market (UK), GoCompare (UK), and Policygenius (US) have all built substantial businesses on the same mechanic. Nigeria has zero equivalent platforms for B2B insurance comparison.
- **Commercial paper signal:** N1.58T in commercial paper issuances (107% YoY growth) shows businesses are sophisticated enough to use financial instruments. They are not avoiding insurance out of financial illiteracy — they are avoiding it because the procurement experience is broken.

**The wedge:** No comprehensive B2B insurance comparison platform exists in Nigeria. Insurers sell through agents who represent one or two companies, not the market. Businesses cannot compare without calling 10 different agents. InsureMatch becomes the single entry point.

## 3. Target Persona

**Primary: The Operations Director / Managing Director at a Mid-Size Manufacturer**

- **Company profile:** Manufacturing company (food/beverage, textiles, furniture, building materials), 50-500 employees, N50-500M/month revenue. Operates factories with heavy equipment, warehouses with inventory, and a fleet of delivery vehicles. Located in Lagos (Ikeja, Ikorodu industrial areas), Port Harcourt, Kano, or Nnewi/Aba manufacturing clusters.
- **Current insurance status:** Has mandatory insurance only — typically third-party motor insurance (required by law) and possibly fire insurance on mortgaged property (required by bank). Does not have comprehensive asset insurance, product liability, cargo/transit insurance, business interruption, or key-man insurance. Has never evaluated whether their fire policy actually covers their risk (it probably does not — many policies have exclusions that void claims for common Nigerian scenarios like generator-caused fires).
- **Title:** Managing Director, Operations Director, General Manager, or Factory Manager. In larger companies, the CFO handles insurance procurement. In smaller ones, the MD does it personally or delegates to an admin assistant.
- **Age:** 35-55. Business experienced but insurance illiterate. Makes financial decisions based on relationships and trust, not spreadsheet analysis. Relies on a single insurance agent (often a personal contact or family friend) who may not be showing them the best options.
- **Insurance budget:** Currently spending N500K-5M/year on insurance. Underinsured by 5-20x relative to actual risk exposure. Does not know this.
- **Decision trigger:** A fire, flood, theft, or equipment failure that causes N10M+ in uninsured losses. A customer lawsuit with no liability coverage. A factory shutdown with no business interruption insurance. Or simply an audit that reveals gaping coverage gaps. The trigger is almost always a loss event — InsureMatch's job is to reach them before the loss.
- **Communication:** WhatsApp for business decisions. Prefers a human to explain complex financial products, which is why insurance agents still dominate. InsureMatch must feel like a knowledgeable advisor, not a faceless comparison engine.

**Secondary: Insurance Brokers and Agents**

- Licensed insurance intermediaries who currently represent 1-3 insurers. InsureMatch can serve as their back-end comparison tool, giving them access to the full market without individually partnering with every insurer. Brokers earn their commission through InsureMatch while providing better service to their clients.

**Priority sectors:** Food/Beverage manufacturers (63.24% capacity, highest stability, can afford premiums). Construction companies (80.8 expansion index — actively acquiring assets that need coverage). Avoid Electrical/Electronics (28% capacity, approaching shutdown).

## 4. Problem Deep Dive

**The current insurance procurement experience, step by step:**

**Step 1: Trigger Event**
A business realizes it might need insurance. This realization is almost always reactive — a neighboring factory burned down, a truck carrying N20M of goods was hijacked, a key employee died and the business nearly collapsed. Occasionally, a bank requires insurance as a loan condition. Proactive insurance shopping is extremely rare among Nigerian SMEs.

**Step 2: Finding an Agent**
The MD asks their network: "Do you know a good insurance person?" This produces a single agent, typically tied to one or two insurance companies. The agent is incentivized to sell the products of their principal insurer, not to find the best coverage for the client. There is no equivalent of "shopping around" because there is no easy way to compare across insurers.

**Step 3: Needs Assessment (Usually Skipped)**
A thorough insurance needs assessment would evaluate: all physical assets and their replacement value, revenue exposure to business interruption, liability exposure from products/services, key employee dependency, cargo/transit risks, professional indemnity needs, and regulatory compliance requirements. In practice, the agent asks "what do you want to insure?" and the MD says "the factory." The agent writes a fire policy. Everything else goes uncovered.

**Step 4: Quote and Purchase**
The agent provides a single quote from their insurer. The MD has no benchmark for whether the price is competitive, whether the coverage limits are adequate, or whether the exclusions contain hidden traps. Common problems:
- **Underinsurance:** Factory worth N500M insured for N100M. In the event of a claim, the insurer invokes the "average clause" and pays only 20% of the loss.
- **Exclusion traps:** Fire policy excludes fires caused by electrical faults — the #1 cause of factory fires in Nigeria. Generator-caused fires may be excluded entirely.
- **Sum insured stagnation:** Policy renewed annually at the same sum insured while naira depreciates 25-40% per year, making the coverage worth less every year.
- **Missing coverage types:** No business interruption coverage means the business gets a check for the physical damage but nothing for the months of lost revenue during reconstruction.

**Step 5: Claims (Where the Real Pain Lives)**
When a loss occurs, the business discovers their coverage is inadequate, excluded, or both. Claims processing takes 3-12 months. Documentation requirements are onerous and unfamiliar. The business feels cheated, reinforces the cultural narrative that "insurance is a scam," and tells every other business owner they know. This negative word-of-mouth is the single biggest barrier to insurance penetration growth.

**Step 6: Business Impact of Being Uninsured**

- **Total loss events:** A factory fire with no insurance is a business-ending event. No recovery possible.
- **Cargo losses:** Goods in transit worth N10-50M per shipment. One hijacking or accident without marine/cargo insurance wipes out months of profit.
- **Liability exposure:** Product defect, customer injury on premises, or environmental incident — without liability insurance, the business pays from operating capital.
- **Key-man risk:** If the founder/MD dies or is incapacitated, the business has no financial buffer to survive the transition. Key-man insurance provides that buffer.
- **Opportunity cost of self-insurance:** Money spent on generators, boreholes, and security guards is money that could be deployed more productively if proper insurance transferred some of that risk.

## 5. Solution Overview

InsureMatch is a web-based insurance comparison and procurement platform that guides Nigerian businesses from risk awareness to policy purchase in a single session. The system operates in five stages:

**1. Business Risk Profiling**
The business enters their profile through a guided wizard: sector/industry, number of employees, location(s), annual revenue range, physical assets (factory, warehouse, office, vehicles, equipment), nature of goods/services, existing insurance policies (if any). The wizard uses conditional logic — a manufacturer sees questions about raw materials and production equipment; a logistics company sees questions about fleet size and cargo values; a retailer sees questions about inventory and foot traffic. Profile completion takes 5-8 minutes.

**2. Insurance Needs Assessment (AI-Powered)**
Based on the business profile, InsureMatch generates a personalized insurance recommendation: which types of insurance the business needs (fire/property, burglary/theft, cargo/marine, public liability, product liability, business interruption, key-man/life, professional indemnity, money insurance, fidelity guarantee, machinery breakdown), what sum insured is appropriate for each type, and a risk priority score indicating which coverage to buy first given a limited budget. The assessment includes an "insurance gap analysis" showing current coverage vs. recommended coverage. This education component is the key differentiator — businesses discover risks they did not know they had.

**3. Multi-Insurer Quote Engine**
For each recommended insurance type, InsureMatch requests quotes from partner insurers via API or email-to-API bridge (for insurers without APIs, which is most of them initially). Quotes include: premium amount, coverage limits, key exclusions, deductible/excess amounts, claims process overview, insurer financial strength rating, and customer review scores (if available). The system normalizes these into a comparable format.

**4. Side-by-Side Comparison**
Comparison tables show all quotes for each insurance type, ranked by InsureMatch's "value score" (a composite of price, coverage breadth, exclusion fairness, insurer reliability, and claims payment speed). Key exclusions are highlighted in red. Coverage gaps between policies are flagged. The interface makes it obvious which policy offers the best value, not just the lowest price.

**5. Purchase & Policy Management**
The business selects policies and purchases directly through the platform. Payment via Paystack (card, bank transfer, USSD). Policy documents are stored in the platform. Renewal reminders are sent 30 days before expiry via WhatsApp. Sum insured adjustments are recommended annually based on naira depreciation and asset changes. Claims filing is guided through a step-by-step process with document checklist.

## 6. MVP Feature Set (MoSCoW)

### MUST Have — Week 1-4

These features define the minimum product that delivers value on day one.

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Business profile wizard | Guided entry of business details, assets, and risk factors | Sector-specific questions; conditional logic; saves progress; completes in <8 minutes |
| Insurance needs assessment | AI-generated recommendation of insurance types needed | Shows 3-7 recommended insurance types per business; includes sum insured suggestion and priority ranking |
| Insurance gap analysis | Visual comparison of current coverage vs. recommended | Shows covered vs. uncovered risks; quantifies exposure in naira; "risk score" out of 100 |
| Quote request engine | Send quote requests to partner insurers based on business profile | Support minimum 5 insurers at launch; handle API and email-based quote flows |
| Quote comparison table | Side-by-side comparison of quotes per insurance type | Columns: premium, coverage limit, key exclusions, deductible, insurer rating; sortable by any column |
| Policy purchase flow | End-to-end purchase via Paystack | Card, bank transfer, USSD payment options; confirmation email/WhatsApp with policy number |
| Policy document storage | Store purchased policies with key details extracted | Searchable by type, insurer, expiry date; PDF download; one-click Excel export of policy summary |
| Renewal reminders | WhatsApp/SMS alerts 30 days before policy expiry | Configurable reminder schedule; includes renewal quote comparison |
| User authentication | Email + phone login with business accounts | Supabase Auth; OTP verification; organization-level data isolation |

### SHOULD Have — Week 5-8

These features significantly enhance value but are not required for first policy sale.

| Feature | Description |
|---------|-------------|
| Claims filing guide | Step-by-step claims process with document checklist per insurer and policy type |
| Sum insured adjustment tool | Annual recommendation to adjust coverage based on naira depreciation and asset changes |
| Broker/agent portal | Dashboard for insurance intermediaries to manage client portfolios through InsureMatch |
| WhatsApp bot for quotes | Business sends key details via WhatsApp → receives comparison and purchase link |
| Insurance education content | Short explainers on each insurance type: what it covers, why you need it, real Nigerian case studies |
| Dashboard with portfolio view | Summary of all active policies, total coverage, upcoming renewals, premium spend history |

### COULD Have — Month 3

| Feature | Description |
|---------|-------------|
| Embedded insurance APIs | APIs for GenTrack, ClearFast, PayMatch to offer insurance at point of need |
| Claims tracking | Track claim status from filing to payment with insurer integration |
| Industry benchmarking | "Companies like yours typically have X coverage" — peer comparison to drive upselling |
| Fleet management integration | Auto-generate vehicle insurance needs from fleet data |
| USSD insurance status check | Dial *XXX# to check policy status, renewal dates, or file a claim notification |
| Bulk policy management | For businesses with 10+ policies: bulk renewal, consolidated billing, master dashboard |

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Underwriting / risk assessment | We are a distribution platform, not an insurer; leave underwriting to licensed insurers |
| Claims adjudication | Regulatory complexity; claims decisions remain with insurers |
| Personal insurance (auto, health, life) | B2B focus only; personal insurance is a different market with different distribution |
| Insurer back-office tools | We serve the buyer side; insurer operations are out of scope |
| Direct policy issuance | Must work through licensed insurers; InsureMatch is a broker/aggregator, not an insurer |

## 7. Key Screens & UX

### Design Principles

- **Trust forward:** Insurance is a trust product. Display insurer logos, NAICOM registration numbers, financial strength ratings, and customer reviews prominently. Every screen communicates legitimacy.
- **Education integrated:** Do not assume the user knows what "business interruption insurance" means. Every insurance type has a one-line explainer and a "Learn more" link to a 2-minute case study.
- **Naira-first, risk-aware:** All premiums and coverage amounts in NGN. USD equivalent in smaller text. Risk exposure quantified in naira terms the business owner understands: "A fire could cost you N250M in damage and N180M in lost revenue over 6 months."
- **WhatsApp native:** Share comparison results, quotes, and policy documents directly to WhatsApp. The MD will forward to their board/partners for approval.

### Screen 1: Business Profile Wizard

A multi-step form presented as a guided conversation. Five steps:

1. **Your Business:** Company name, CAC number (optional), sector (dropdown with 15 sectors), sub-sector, years in operation, annual revenue range (bands, not exact figures).
2. **Your Locations:** Primary location (state, LGA), additional locations, type of premises (owned factory, rented office, warehouse, retail shop).
3. **Your Assets:** Physical assets checklist with estimated values — buildings, machinery/equipment, vehicles, inventory/stock, IT equipment, furniture. Slider for "rough estimate" to reduce friction.
4. **Your People:** Number of employees, number of key executives (whose loss would significantly impact the business), largest customer concentration (% of revenue from top customer).
5. **Your Current Insurance:** Which types do you currently have? (Checkboxes.) For each: insurer name, policy number, annual premium, expiry date. "None" is the most common answer.

Each step has a progress indicator. Can be saved and resumed. Takes 5-8 minutes total.

### Screen 2: Insurance Needs Dashboard

After profile completion, the user lands on their personalized insurance dashboard. Top section: **Risk Score** — a number out of 100 showing how well-protected the business is. Most businesses will score 10-20 out of 100 on first visit, creating urgency.

Below, a grid of insurance type cards. Each card shows:
- Insurance type name (e.g., "Fire & Property Insurance")
- One-line description ("Covers damage to your factory, equipment, and inventory from fire, flood, or storm")
- Status badge: "Covered" (green), "Recommended" (orange), or "Critical Gap" (red)
- Estimated premium range (e.g., "N850K - N1.2M/year")
- "Get Quotes" button

Cards ordered by priority: critical gaps first, then recommended, then already covered.

### Screen 3: Quote Comparison

When the user clicks "Get Quotes" on any insurance type, this screen shows:

**Header:** Insurance type name, recommended sum insured, brief explanation of why this coverage matters.

**Comparison table:** One column per insurer quote. Rows:
- Annual premium
- Coverage limit / sum insured
- Deductible / excess
- Key inclusions (green checkmarks)
- Key exclusions (red X marks — highlighted and bold)
- Claims process (average days to payment)
- Insurer rating (NAICOM financial strength)
- InsureMatch Value Score (composite ranking)
- "Select This Policy" button

**Highlight feature:** "Exclusion Alert" callouts. If a policy excludes a risk that is common in the user's sector (e.g., generator-caused fires for a manufacturer), a red banner warns: "This policy excludes fires caused by electrical equipment, which is the #1 cause of factory fires. Consider selecting a policy that includes this risk."

### Screen 4: Policy Portfolio

After purchasing, this becomes the user's home screen. A table of all active policies:
- Insurance type
- Insurer name
- Policy number
- Coverage amount
- Annual premium
- Start date / Expiry date
- Days until renewal
- Status (Active, Expiring Soon, Expired)

**KPI bar at top:**
- Total annual premium spend
- Total coverage amount
- Risk score (updated based on coverage)
- Number of policies expiring in next 30 days

**Actions:** Renew, file claim, download policy document, share via WhatsApp, export all to Excel.

### Screen 5: Claims Filing Guide

When a user needs to file a claim:

1. Select the policy type
2. Describe the incident (date, description, estimated loss)
3. Platform generates a document checklist specific to that insurer and policy type (police report, fire service report, photos, inventory list, etc.)
4. Upload documents
5. Submit to insurer via the platform
6. Track claim status with timeline view

## 8. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router, Server Components) | Fast initial load via SSR; SEO for insurance education content; React ecosystem |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development; clean, trustworthy design system |
| Backend | Next.js API Routes + Server Actions | Single deployment; no separate backend service |
| Database | Supabase PostgreSQL | Managed Postgres; built-in auth; Row Level Security for multi-tenant isolation; generous free tier |
| Auth | Supabase Auth | Email/password + OTP via SMS; organization-level RLS policies |
| File Storage | Supabase Storage | Policy documents, claim evidence, business profile attachments |
| AI/ML | OpenAI API or Anthropic API | Insurance needs assessment generation; natural language risk analysis from business profile |
| Payments | Paystack | Nigerian payments; card, bank transfer, USSD; handles premium collection on behalf of insurers |
| Messaging | WhatsApp Business API (via Termii) + SMS fallback | Renewal reminders, quote notifications, claims updates |
| Email | Resend | Policy confirmation emails, quote delivery, transactional communications |
| Excel Export | xlsx (SheetJS) library | Formatted exports of policy portfolios, comparison tables, claims records |
| Offline Storage | IndexedDB via idb library | Cache policy portfolio and profile data for offline viewing |
| Hosting | Vercel (frontend) + Supabase (backend) | Free tiers sufficient for MVP; auto-scaling for growth |
| Monitoring | Sentry (errors) + PostHog (product analytics) | Track funnel: profile → quotes → comparison → purchase; monitor error rates |

### Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  cac_number text,
  sector text NOT NULL,
  sub_sector text,
  state text NOT NULL,
  lga text,
  annual_revenue_band text,
  employee_count integer,
  years_in_operation integer,
  risk_score integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
)

-- Users
users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  org_id uuid REFERENCES organizations,
  role text CHECK (role IN ('admin', 'manager', 'viewer')),
  full_name text,
  phone text,
  created_at timestamptz DEFAULT now()
)

-- Business Assets
assets (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  asset_type text NOT NULL, -- 'building', 'machinery', 'vehicle', 'inventory', 'equipment'
  description text,
  estimated_value decimal(15,2),
  location text,
  created_at timestamptz DEFAULT now()
)

-- Insurance Recommendations
recommendations (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  insurance_type text NOT NULL, -- 'fire_property', 'burglary', 'cargo_marine', 'public_liability', etc.
  priority text CHECK (priority IN ('critical', 'recommended', 'optional')),
  recommended_sum_insured decimal(15,2),
  estimated_premium_low decimal(15,2),
  estimated_premium_high decimal(15,2),
  rationale text,
  status text CHECK (status IN ('gap', 'quoted', 'purchased', 'covered_elsewhere')),
  created_at timestamptz DEFAULT now()
)

-- Insurer Partners
insurers (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  naicom_registration text,
  financial_strength_rating text,
  api_type text CHECK (api_type IN ('rest_api', 'email_bridge', 'manual')),
  api_endpoint text,
  commission_rate decimal(5,2), -- percentage
  logo_url text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)

-- Quotes
quotes (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  recommendation_id uuid REFERENCES recommendations,
  insurer_id uuid REFERENCES insurers,
  insurance_type text NOT NULL,
  annual_premium decimal(15,2) NOT NULL,
  sum_insured decimal(15,2) NOT NULL,
  deductible decimal(15,2),
  key_inclusions text[],
  key_exclusions text[],
  policy_document_url text,
  valid_until date,
  value_score decimal(5,2), -- InsureMatch composite score
  status text CHECK (status IN ('pending', 'received', 'expired', 'selected', 'purchased')),
  created_at timestamptz DEFAULT now()
)

-- Purchased Policies
policies (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  quote_id uuid REFERENCES quotes,
  insurer_id uuid REFERENCES insurers,
  insurance_type text NOT NULL,
  policy_number text,
  annual_premium decimal(15,2) NOT NULL,
  sum_insured decimal(15,2) NOT NULL,
  start_date date NOT NULL,
  expiry_date date NOT NULL,
  policy_document_url text,
  status text CHECK (status IN ('active', 'expiring_soon', 'expired', 'cancelled', 'claimed')),
  commission_amount decimal(15,2), -- InsureMatch commission earned
  commission_status text CHECK (commission_status IN ('pending', 'invoiced', 'paid')),
  created_at timestamptz DEFAULT now()
)

-- Claims
claims (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  policy_id uuid REFERENCES policies,
  incident_date date NOT NULL,
  description text NOT NULL,
  estimated_loss decimal(15,2),
  documents text[], -- array of storage URLs
  status text CHECK (status IN ('draft', 'submitted', 'under_review', 'approved', 'paid', 'rejected')),
  insurer_claim_reference text,
  created_at timestamptz DEFAULT now()
)

-- Commission Tracking
commissions (
  id uuid PRIMARY KEY,
  policy_id uuid REFERENCES policies,
  insurer_id uuid REFERENCES insurers,
  commission_rate decimal(5,2),
  commission_amount decimal(15,2),
  status text CHECK (status IN ('earned', 'invoiced', 'paid')),
  paid_at timestamptz,
  created_at timestamptz DEFAULT now()
)

-- Renewal Reminders
reminders (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  policy_id uuid REFERENCES policies,
  channel text CHECK (channel IN ('whatsapp', 'sms', 'email')),
  message_text text NOT NULL,
  scheduled_at timestamptz,
  sent_at timestamptz,
  status text CHECK (status IN ('scheduled', 'sent', 'failed')),
  created_at timestamptz DEFAULT now()
)
```

### Insurer Integration Architecture

Most Nigerian insurers do not have APIs. The quote engine must handle three integration tiers:

**Tier 1 — API Integration (Target: 2-3 insurers)**
Direct REST API integration for real-time quote generation. InsureMatch sends business profile data → insurer API returns quote within seconds. Priority partners: Leadway, AXA Mansard, Custodian (most digitally advanced Nigerian insurers).

**Tier 2 — Email-to-API Bridge (Target: 5-8 insurers)**
InsureMatch generates a structured quote request email, sends to insurer's underwriting team, and parses the response email when it arrives. Turnaround: 2-24 hours. Automated email parsing extracts premium, coverage, and exclusions into the comparison table.

**Tier 3 — Manual Entry (Fallback)**
InsureMatch admin manually enters quotes received via phone or WhatsApp from insurers. Used during early days and for insurers who resist any digital integration.

### Offline Architecture

```
Online Flow:
  User completes profile → Saves to Supabase → Triggers quote requests →
  Quotes arrive (async) → WhatsApp notification → User compares and purchases

Offline Flow:
  User browses profile → Reads from IndexedDB cache →
  Views existing policies and renewals → Queues any actions →
  [When online] → Syncs to Supabase

Cached locally (IndexedDB):
  - Business profile and asset data
  - All purchased policies with key details
  - Renewal calendar
  - Insurance education content

Not cached (requires network):
  - Quote requests (require insurer communication)
  - Policy purchases (require payment processing)
  - Claims filing (require document upload)
  - New quote comparisons
```

## 9. Pricing & Unit Economics

### Pricing Model

InsureMatch charges zero to the business. Revenue comes entirely from insurer commissions.

| Revenue Stream | Rate | Basis |
|---------------|------|-------|
| **First-year commission** | 15-25% | Of annual premium paid by business. Standard industry rate for insurance intermediaries. Rate varies by insurance type (motor ~15%, fire ~20%, marine ~25%). |
| **Renewal commission** | 5-10% | Of annual premium on policy renewals. Lower than first-year but recurring. |
| **Portfolio management fee** | N50K/month (future) | For businesses with 5+ policies managed through InsureMatch. Optional premium service. |

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Average annual premium per SME | N2-5M | Mid-size manufacturer with 3-5 policy types |
| Average first-year commission | N500K-1M | 20% of N2.5-5M average premium |
| Average renewal commission | N150-350K | 7% of N2.5-5M average premium |
| Customer acquisition cost | N0-20K | Content marketing, LinkedIn outreach, insurer referrals |
| Platform infrastructure cost | ~$50/month | Vercel Pro ($20) + Supabase Pro ($25) + Termii (~$5) |
| Cost per policy sale | ~N5K | Platform costs amortized across sales |
| LTV (3-year retention) | N800K-1.7M | First-year commission + 2 years renewal commission |
| LTV:CAC ratio | 40:1 - 85:1 | Exceptionally favorable due to commission model |

### Revenue Targets

| Milestone | Timeline | Policies Sold | Monthly Commission (NGN) | Monthly (USD) |
|-----------|----------|---------------|--------------------------|---------------|
| First policy sale | Month 2 | 1 | N100-250K (one-time) | ~$65-163 |
| Traction | Month 3 | 5 cumulative | N500K-1.25M | ~$325-813 |
| Break-even | Month 4 | 10 cumulative | N1M-2.5M | ~$650-1,625 |
| Target | Month 6 | 30 cumulative | N2M-4M (inc. renewals) | ~$1,300-2,600 |
| Scale | Month 12 | 100 cumulative | N5M-10M | ~$3,250-6,500 |

Note: Commission revenue is lumpy (earned at point of sale and renewal), not smooth monthly recurring. Cash flow planning must account for this.

## 10. Go-to-Market: First 10 Customers

### Channel 1: Insurer Partnership Development (Pre-Launch Critical Path)

Before any business can purchase a policy, InsureMatch needs insurer partners. Target the top 5 most digitally progressive insurers:

1. **Leadway Assurance** — largest non-life insurer, innovation-friendly
2. **AXA Mansard** — global brand, API-ready
3. **Custodian Insurance** — strong SME portfolio
4. **AIICO Insurance** — broad product range
5. **Cornerstone Insurance** — growing mid-market focus

**Pitch:** "We will bring you customers you cannot reach today. 99.66% of the market is uninsured. We educate businesses on their insurance needs and present your quotes alongside competitors. You pay us only when we sell a policy — standard commission rates. Zero upfront cost to you."

**Target:** Signed agreements with 3-5 insurers within 4-6 weeks of outreach.

### Channel 2: Cross-Sell from Existing Product Suite

Every GenTrack user has generators and equipment worth N10-100M that should be insured. Every ClearFast user ships cargo that needs marine insurance. Every PayMatch user extends trade credit that needs credit insurance. Embedded insurance prompts within these products drive qualified leads to InsureMatch.

**Target:** 20 cross-sell leads → 10 quote sessions → 5 policy sales in first 3 months.

### Channel 3: LinkedIn Outreach to MDs and Operations Directors

**Search strategy:** LinkedIn Sales Navigator:
- Title: "Managing Director" OR "Operations Director" OR "Factory Manager" OR "General Manager"
- Location: Lagos, Port Harcourt, Kano, Nnewi, Aba
- Industry: Manufacturing, Food Production, Construction, Logistics
- Company size: 50-500 employees

**Outreach message:** "Hi [Name], quick question — what would happen to your business if your factory burned down tonight? Most Nigerian manufacturers are insured at 20% of their actual risk. We built a free tool that assesses your insurance gaps in 5 minutes. Would you like to try it?"

**Target:** 100 connection requests → 25 accepts → 15 conversations → 8 profile completions → 3-5 policy sales.

### Channel 4: Family Network in Port Harcourt

Direct introductions to manufacturing and trading companies in Port Harcourt / Rivers State. "I built a platform that helps businesses compare insurance quotes and find coverage gaps. It's completely free — the insurers pay us. Can I show you your risk assessment?"

**Target:** 5 introductions → 4 profile completions → 2-3 policy sales.

### Channel 5: Manufacturers Association of Nigeria (MAN)

MAN members are ideal InsureMatch customers — they have assets, they face risks, and the association provides access to member directories. Offer to present at a MAN chapter meeting: "The Insurance Gap: Why 80% of Nigerian Manufacturers Are One Fire Away from Closing."

**Target:** 1 MAN presentation → 15 attendees → 8 profile completions → 3-4 policy sales.

### Channel 6: Insurance Education Content (Long-Term)

Publish content on LinkedIn and WhatsApp channels:
- "The 5 Insurance Types Every Nigerian Manufacturer Needs"
- "What Your Fire Insurance Policy Probably Does NOT Cover"
- "How Naira Depreciation Is Silently Destroying Your Insurance Coverage"
- "Case Study: The Ikeja Factory Fire That Cost N500M — And Could Have Been Prevented for N3M/Year"

**Target:** Build authority over 6 months; generate inbound leads at 5-10 per month by month 6.

### Channel Summary

| Channel | Outreach Volume | Expected Profiles | Expected Policy Sales |
|---------|----------------|-------------------|----------------------|
| Cross-sell from suite | 20 | 10 | 5 |
| LinkedIn outreach | 100 | 8 | 3-5 |
| Family network | 5 | 4 | 2-3 |
| MAN presentation | 15 | 8 | 3-4 |
| Content / inbound | — | 5 | 2-3 |
| **Total** | **140** | **35** | **15-20** |

## 11. Risks & Mitigations

### Risk 1: Insurer Partnerships Take Too Long to Establish

**Likelihood:** High. Insurance companies are bureaucratic. Partnership agreements require legal review, commission negotiations, and technical integration. This could delay launch by months.

**Impact:** No insurers = no product. InsureMatch cannot generate revenue without at least 3 insurer partners.

**Mitigations:**
- Start with one progressive insurer (Leadway or AXA Mansard) for a pilot. Do not wait for five.
- Begin as a licensed insurance broker — this gives legal authority to intermediate and collect commissions without individual insurer partnerships
- Use Tier 3 (manual entry) integration initially — no API needed. Manually request and enter quotes via email/WhatsApp
- Offer insurers a zero-risk trial: "Give us 30 days. We send you 10 qualified leads. If none convert, no obligations."
- Leverage NAICOM's push for penetration — position InsureMatch as aligned with the regulator's agenda

### Risk 2: Businesses Do Not Trust Online Insurance Purchase

**Likelihood:** High. Insurance already suffers from trust issues in Nigeria ("insurance is a scam"). Adding a digital intermediary adds another layer of distrust.

**Impact:** Businesses complete the profile and view quotes but refuse to purchase through the platform, preferring to call the insurer directly (cutting InsureMatch out of the commission).

**Mitigations:**
- Display NAICOM registration prominently (InsureMatch must be registered as a broker or agent)
- Show insurer logos, registration numbers, and financial strength ratings on every quote
- Offer "call to complete" option — user views comparison online, then speaks with an InsureMatch advisor to finalize. Human touch for high-value decisions
- Testimonials and case studies from early adopters
- Track "platform bypass" rate — if users are viewing quotes and buying directly from insurers, consider switching to a lead-gen fee model instead of pure commission

### Risk 3: Regulatory Complexity

**Likelihood:** Medium-High. Insurance distribution is regulated by NAICOM. Operating as an aggregator/broker requires licensing. Regulations may restrict how quotes are displayed or compared.

**Impact:** Legal action, fines, or forced shutdown if operating without proper licensing.

**Mitigations:**
- Obtain insurance broker license from NAICOM before launch (estimated 2-3 months, N500K-1M cost)
- Alternatively, partner with a licensed broker initially and operate under their license (revenue share)
- Engage insurance law firm for compliance review of platform design and comparison methodology
- Build relationship with NAICOM as a market development partner, not a disruptor

### Risk 4: Low Average Premium Per Customer

**Likelihood:** Medium. Small businesses may only need one or two low-premium policies (e.g., N200-500K/year motor insurance), making the commission per sale too small to sustain the business.

**Impact:** Revenue per customer is insufficient. Need hundreds of customers to reach meaningful revenue.

**Mitigations:**
- Target mid-size manufacturers (N50-500M revenue) who need 3-7 policy types with combined premiums of N2-5M+
- Insurance needs assessment drives upselling — show the business all their coverage gaps, not just the one they came for
- Focus on high-commission insurance types (marine, liability, property) rather than low-commission types (motor)
- Bundle discounts from insurers for businesses purchasing multiple policies through InsureMatch

### Risk 5: Claims Experience Damages Reputation

**Likelihood:** Medium. When a business files a claim and the insurer delays or denies payment, the business blames InsureMatch — even though InsureMatch has no control over claims adjudication.

**Impact:** Negative word-of-mouth undermines the entire platform. Businesses tell their network "InsureMatch sold me useless insurance."

**Mitigations:**
- Vet insurer partners on claims payment history before onboarding. Refuse to work with insurers known for claims avoidance
- Set clear expectations during purchase: explain exactly what is and is not covered, highlight exclusions explicitly
- Provide claims filing support (document checklist, submission tracking) to improve claim success rates
- Publish insurer claims payment statistics transparently on the platform
- Advocate on behalf of the business during claims disputes — this builds extraordinary loyalty and differentiation

### Risk 6: Commission Model Creates Cash Flow Gaps

**Likelihood:** Medium. Commissions are earned at point of sale and renewal (annually), not monthly. A month with no policy sales = zero revenue.

**Impact:** Unpredictable cash flow makes it difficult to plan and invest in growth.

**Mitigations:**
- Build a pipeline of businesses at various stages (profile → quotes → comparison → decision) so policy sales are distributed over time
- Negotiate monthly commission payments from insurers rather than annual lump sums
- Introduce portfolio management fee (N50K/month) for businesses with 5+ policies as a recurring revenue stream
- Cross-sell across the product suite to smooth revenue

## 12. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 6 | 0.30 | Platform UI is straightforward comparison engine. However, insurer partnership onboarding is the bottleneck — legal agreements, commission terms, and integration (even manual) take 4-8 weeks. Total time to functional MVP with live quotes: 6-8 weeks. |
| Time to Revenue | 15% | 5 | 0.75 | Revenue requires insurer partnerships AND a completed policy sale. Even with fast platform build, the first commission arrives only after an insurer partner is signed and a business purchases a policy. Realistic first revenue: Month 2-3. |
| Market Size | 15% | 9 | 1.35 | N1.56T gross premiums growing 56% YoY with 0.34% penetration. This is arguably the largest untapped financial services opportunity in Nigeria. Total addressable market is measured in trillions of naira. Even 0.1% market share = N1.56B in premiums = N300-400M in commissions annually. |
| Competition | 10% | 7 | 0.70 | No comprehensive B2B insurance comparison platform in Nigeria. Curacel and MyInsurance.ng exist but focus on personal insurance or insurer back-office. Traditional agents are fragmented and represent single insurers. The gap is clear but the InsurTech space is attracting attention. |
| Skill Fit | 15% | 5 | 0.75 | Comparison engine and business profiling are standard web development. Insurance needs assessment leverages AI. However, the value creation is more business development (insurer partnerships) than engineering. Success depends more on relationship-building than code. |
| Capital Required | 10% | 9 | 0.90 | Commission model means zero capital needed for inventory, lending, or float. Platform infrastructure costs are minimal ($50/month). The only meaningful cost is broker licensing (N500K-1M) which can be deferred by partnering with a licensed broker. |
| Buyer Clarity | 20% | 7 | 1.40 | Every business with physical assets needs insurance — the total market is enormous. However, the buyer is not actively searching for insurance (unlike PayMatch where they are actively suffering from reconciliation pain). Requires education-first sales, which is slower. Can name 10 target companies but the sales cycle is consultative, not transactional. |
| Fintech Upside | 10% | 8 | 0.80 | Insurance → InsurTech → embedded insurance across the product suite. Embedding insurance at point-of-need (generator purchase → insurance offer, cargo shipment → marine insurance offer, new hire → key-man insurance offer) is the long-term vision. Insurance data also feeds credit scoring and risk assessment products. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.30 |
| Time to Revenue (15%) | 0.75 |
| Market Size (15%) | 1.35 |
| Competition (10%) | 0.70 |
| Skill Fit (15%) | 0.75 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 1.40 |
| Fintech Upside (10%) | 0.80 |
| **TOTAL** | **6.95 / 10** |

### Verdict: BUILD (Secondary Priority)

A 6.95 composite score reflects a genuinely massive market opportunity (9 on Market Size, weighted 15%) constrained by slower time-to-revenue (5, weighted 15%) and moderate skill fit (5, weighted 15%). The commission model eliminates capital risk (9 on Capital Required), and every business with assets is a potential buyer (7 on Buyer Clarity, weighted 20%). The fintech upside (8) is strong — embedded insurance across the product suite creates a compounding revenue layer.

**Key decision factors:**
- The market is enormous and almost entirely untouched — this is a once-in-a-generation opportunity
- The commission model means zero capital at risk — downside is limited to time invested
- Insurer partnership development is the critical path and cannot be parallelized with coding
- Best built as a second or third product after establishing credibility with an initial SaaS product (PayMatch or similar)
- Cross-sell from existing products provides warm leads that dramatically shorten the sales cycle

**Go condition:** Begin insurer partnership outreach in Month 1 (while building other products). Start platform development in Month 2 once at least one insurer agreement is signed. Target first policy sale by Month 3. Scale through embedded insurance in the product suite by Month 6.
