# PRD 21: BuildTrack — Construction Project Cost & Material Tracker

## 1. Executive Summary

BuildTrack is a construction project cost and material tracking platform built for Nigerian property developers, construction companies, and project managers who are flying blind on the most volatile cost environment in the country's history. Cement prices have surged 150%+ from N3,500 to N8,800-10,200 per bag in two years. Rebar, blocks, sand, granite, and diesel follow similar trajectories with daily fluctuations. A contractor who budgets a project in January may face 30-40% cost overruns by June — not from mismanagement but from material price inflation alone. Meanwhile, construction has the highest expansion outlook of any sector in the CBN's survey (80.8 index), driven by a 20-28M unit housing deficit requiring N21T (~$14B) in investment. Companies are building aggressively, but without tools to track what they are spending against what they planned. BuildTrack solves this: a project manager enters a project specification (building type, size, location, materials), the platform generates a material cost estimate using real-time price data, tracks actual procurement against budget, alerts on price movements that threaten the budget, optimizes procurement timing based on price trends, and generates investor/client progress reports that tie physical completion to financial spend. There is no Nigerian equivalent to Procore, PlanGrid, or BuilderTrend. The closest tools are Excel spreadsheets and WhatsApp groups where suppliers post daily prices. BuildTrack prices at N100-200K/month per active project or N50K/month for price tracking only, targeting construction companies and property developers who manage multiple concurrent projects. MVP ships in 4-6 weeks, with the material price database as the critical foundation that must be built first. The employment-expansion disconnect is highest in construction (80.8 expansion vs. ~35 employment index), meaning these companies want to grow without hiring — software that replaces manual cost tracking and reporting directly addresses this need.

## 2. Market Opportunity

**Construction is the most optimistic sector in Nigeria — and the most underserved by software.**

- **Housing deficit:** 20-28M unit deficit requiring N21T (~$14B) in investment. This is not a theoretical number — it represents actual unmet demand for residential, commercial, and industrial buildings. The deficit grows by an estimated 900,000 units annually as population outpaces construction.
- **Highest expansion outlook:** CBN Business Expectations Survey shows construction at 80.8 index — the highest of ALL sectors surveyed. Higher than manufacturing (54-60), services (45-55), and agriculture (50-60). Construction companies are the most bullish businesses in Nigeria.
- **Employment-expansion disconnect:** Construction's expansion index (80.8) vs. employment index (~35) represents the widest gap of any sector. These companies want to grow 2x but hire only 0.4x — they need software automation, not headcount.
- **Material price volatility:**
  - Cement: N3,500 → N8,800-10,200 (150%+ increase)
  - Rebar: significant increases tracking commodity and FX movements
  - Blocks: labor and cement cost passthrough
  - Sand/granite: transport cost increases (diesel prices)
  - Diesel: N300 → N1,200+ (300% increase, affects all material transport)
- **No software tooling:** The global construction technology market includes Procore ($10B+ market cap), PlanGrid (acquired by Autodesk for $875M), BuilderTrend, CoConstruct, and dozens of others. Nigeria has zero equivalent. Construction companies manage budgets in Excel, track material prices via WhatsApp group chats, and generate client reports manually.
- **Land title chaos:** Only 3% of Nigerians have valid land titles. N300B tied up in land disputes. While BuildTrack does not solve land title issues directly, title verification could be a premium add-on service that construction companies and property developers desperately need.
- **Foreign investment inflow:** The housing deficit is attracting foreign investors and development finance institutions. These investors require standardized project reporting — something Nigerian construction companies cannot currently produce without manual effort. BuildTrack's reporting module serves this need.

**The wedge:** Start with material price tracking (immediate value, no procurement change required), expand into project cost management (deeper integration into workflows), and eventually add construction financing and procurement marketplace features.

## 3. Target Persona

**Primary: The Project Manager at a Mid-Size Construction Company**

- **Company profile:** Construction company or property development firm, 30-200 employees, managing 3-10 concurrent projects, annual revenue N200M-2B. Builds residential estates (10-50 units), commercial buildings (office blocks, retail plazas), and industrial facilities (warehouses, factories). Based in Lagos (Lekki, Ikoyi, Ajah corridors), Abuja (rapidly expanding), Port Harcourt, or secondary cities experiencing construction booms.
- **Active projects:** 3-10 concurrent projects at various stages. Each project has a budget of N50M-500M for materials alone. Total material procurement across all projects: N500M-3B annually.
- **Material sourcing:** Uses 5-15 suppliers for key materials. Cement from Dangote (BUA, Lafarge as alternatives). Rebar from local steel rolling mills. Blocks from neighborhood block-making factories. Sand and granite from specific quarries/dredgers. Prices vary 10-30% between suppliers on any given day and fluctuate weekly.
- **Title:** Project Manager, Quantity Surveyor, Site Engineer, or Construction Manager. In smaller firms, the owner/MD manages costs directly.
- **Age:** 30-50. University educated (typically civil engineering, quantity surveying, or architecture). Uses Excel extensively for bills of quantities and cost tracking. Comfortable with basic technology but has never used construction management software. Shares project updates in WhatsApp groups with subcontractors and clients.
- **Pain frequency:** Material price checks happen daily (or should). Budget reconciliation happens weekly or monthly. Client/investor reports happen monthly or at milestones. All of this is manual.
- **Budget authority:** Can approve N100-200K/month for project tools. Larger subscriptions require MD/partner approval.
- **Decision trigger:** A project that went 40%+ over budget due to material price increases that were not tracked in real time. A client who demanded a detailed cost breakdown report and the PM spent 3 days creating it in Excel. A supplier who charged 20% above market rate because the PM did not have price benchmarks.

**Secondary: The Individual Property Developer**

- Building personal or investment property (1-5 units). Budget of N30-200M. Manages the project personally or through an architect/foreman. Extremely price-sensitive to material costs. Wants to know: "Should I buy cement now or wait two weeks?" Currently gets price information from asking suppliers via WhatsApp or visiting block factories. N50K/month for price tracking only is the entry product for this persona.

**Priority sectors:** Residential construction (highest volume, driven by housing deficit). Commercial construction (office and retail, driven by business expansion). Avoid government/public sector construction (payment delays, political complexity).

## 4. Problem Deep Dive

**The current construction cost management workflow, step by step:**

**Step 1: Project Budgeting**
A quantity surveyor or project manager creates a Bill of Quantities (BOQ) at the start of a project. The BOQ lists every material needed (cement bags, tons of rebar, number of blocks, cubic meters of sand, etc.) with quantities and unit prices. The BOQ is created in Excel, usually based on prices obtained by calling 2-3 suppliers on the day the estimate is prepared. This becomes the project budget.

**The problem:** By the time construction begins (often 2-4 months later), material prices have changed significantly. A BOQ prepared in January with cement at N8,800/bag is obsolete by April when cement hits N10,200/bag. The budget is wrong before the first foundation is dug.

**Step 2: Material Price Monitoring**
During construction, the site engineer or foreman is responsible for tracking material prices. This typically means:
- Calling 3-5 suppliers before each purchase to get quotes
- Checking WhatsApp groups where suppliers and contractors share daily prices
- Visiting building material markets in person (Alaba, Trade Fair Complex in Lagos)
- Relying on word-of-mouth: "I heard Dangote increased cement yesterday"

**The problem:** No systematic price tracking. No historical data. No trend analysis. No ability to answer "should we buy 500 bags of cement now or will the price drop next week?" Procurement decisions are based on immediate need, not price optimization.

**Step 3: Procurement**
When materials are needed on site, the site engineer sends a request (often via WhatsApp message) to the project manager. The PM approves and either procures directly or instructs a procurement officer. Payment is made via bank transfer or sometimes cash. Receipts are kept in paper files, photographed on phones, or not kept at all.

**The problem:** No centralized procurement log. No comparison of actual purchase prices to budgeted prices. No tracking of which supplier consistently offers the best prices. No audit trail for cash purchases. Material theft and over-ordering are common and hard to detect.

**Step 4: Budget Tracking**
Budget tracking happens in Excel — when it happens at all. The quantity surveyor updates a cost sheet with actual expenditures, comparing them to the original BOQ. This update happens weekly at best, monthly in practice, and "when the client asks" in reality.

**The problem:** By the time the cost sheet is updated, the project may already be 20-30% over budget on certain line items. There is no early warning system. Budget overruns are discovered after the money is spent, not before. The PM cannot answer "how much have we spent on rebar this month vs. budget?" without hours of manual data compilation.

**Step 5: Client/Investor Reporting**
Clients and investors want regular updates: how much has been spent, what percentage of the project is complete, what is the projected total cost, and are there any budget variances. Creating these reports requires:
- Compiling actual spend from bank statements, receipts, and procurement logs
- Calculating percentage completion based on site progress
- Comparing actual vs. budgeted costs per line item
- Projecting remaining costs based on current prices (not budgeted prices)
- Formatting everything into a presentable report

**The problem:** This takes 1-3 days per project per report. A PM managing 5 projects who reports monthly spends 5-15 days per month just on reporting. The reports are often inaccurate because the underlying data (actual spend) is incomplete. Investors lose confidence when reports are late or inconsistent.

**Step 6: Business Impact**

- **Budget overruns:** 70-80% of Nigerian construction projects exceed their original budget, with material cost inflation being the primary driver. A 30% budget overrun on a N200M project is N60M in unexpected costs.
- **Cash flow crises:** Developers who pre-sold units at fixed prices face margin destruction when material costs spike. Some projects stall mid-construction because the developer runs out of money.
- **Supplier overpayment:** Without price benchmarks, PMs have no way to know if a supplier is charging above market rate. A 10% overpayment on N500M in annual material procurement is N50M wasted.
- **Investor distrust:** Late, inaccurate, or inconsistent project reports erode investor confidence, making it harder to raise capital for future projects.
- **Opportunity cost:** The 5-15 days per month spent on manual reporting and cost tracking is time not spent on project management, quality control, and business development.

## 5. Solution Overview

BuildTrack is a web-based platform that gives Nigerian construction professionals real-time material price intelligence, automated budget tracking, and one-click project reporting. The system operates in five stages:

**1. Material Price Database (Foundation Layer)**
BuildTrack maintains a real-time database of construction material prices across major Nigerian markets. Data sources: daily price surveys from supplier networks (initially manual via WhatsApp/phone outreach to 20-50 suppliers), crowdsourced pricing from platform users who report their actual purchase prices, and web scraping of published prices (Dangote, BUA published cement prices, LBIC steel prices). Prices are tracked at the market level (Lagos-mainland, Lagos-island, Abuja, Port Harcourt, etc.) with daily granularity for high-volume materials (cement, rebar, blocks) and weekly for lower-volume materials.

**2. Project Setup & BOQ Import**
The project manager creates a project in BuildTrack: project name, type (residential, commercial, industrial), location, size (square meters or number of units), start and end dates. They import or manually enter the Bill of Quantities — materials, quantities, and budgeted unit prices. BuildTrack immediately compares budgeted prices against current market prices, flagging any line items where the budgeted price is already outdated.

**3. Live Budget Dashboard**
A real-time dashboard shows each project's budget status. For every material line item: budgeted quantity, budgeted unit price, current market price, variance (percentage and naira), budgeted total cost, projected total cost (quantity x current market price), and actual spend to date. A traffic light system (green/yellow/red) highlights line items trending over budget. An aggregate project health score shows overall budget status.

**4. Procurement Tracking**
When materials are purchased, the PM logs the transaction: material type, quantity, unit price, supplier, date, receipt photo (optional). BuildTrack compares the purchase price to the market benchmark: "You paid N9,800/bag for cement. Market average today is N9,200/bag. You overpaid by 6.5%." Over time, supplier scorecards show which suppliers consistently deliver the best prices, reliability, and quality.

**5. Reporting Engine**
One-click generation of:
- **Budget variance report:** Actual vs. budgeted cost per line item, with explanations (price increase, quantity change, etc.)
- **Progress report:** Financial completion percentage (money spent / projected total) correlated with physical completion percentage
- **Material price report:** Price trends for key materials over the project duration
- **Investor/client report:** Branded PDF and Excel combining all of the above in a professional format

## 6. MVP Feature Set (MoSCoW)

### MUST Have — Week 1-4

These features define the minimum product that delivers value on day one.

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Material price database | Real-time prices for 10 core materials across 5 markets | Materials: cement, rebar (8mm, 12mm, 16mm), blocks (6", 9"), sand (sharp, plaster), granite, diesel. Markets: Lagos-mainland, Lagos-island, Abuja, PH, Kano. Updated daily for cement/rebar, 2-3x/week for others |
| Price alerts | Configurable alerts when material prices cross thresholds | Set alert: "Notify me when cement in Lagos exceeds N10,000/bag." Delivery via WhatsApp and SMS |
| Price history charts | Visual price trends for any material in any market | Line charts with 30/90/180/365 day views; downloadable as PNG; data exportable to Excel |
| Project creation & BOQ import | Create project and import Bill of Quantities | Manual entry form + CSV/Excel upload; map columns; support standard BOQ format |
| Live budget dashboard | Real-time budget vs. actual vs. market price comparison | Per line item: budgeted price, current market price, actual spend, variance; traffic light status; project health score |
| Procurement logging | Record material purchases with price and supplier | Form: material, quantity, unit price, supplier, date, receipt photo (optional); bulk import via CSV |
| Budget variance report | Actual vs. budget comparison with export | One-click Excel export; formatted with headers, conditional coloring, summary totals |
| User authentication | Email + phone login with organization accounts | Supabase Auth; OTP; organization-level data isolation; multi-user per organization |
| Excel export | Export any view to formatted Excel | Every data table, every report: one-click XLSX download |

### SHOULD Have — Week 5-8

These features significantly enhance value but are not required for first customer delivery.

| Feature | Description |
|---------|-------------|
| Investor/client report generator | Branded PDF report combining budget status, price trends, and progress narrative |
| Supplier scorecards | Track and compare supplier pricing, reliability, and delivery performance across projects |
| Price forecasting | ML-based 2-4 week price predictions for key materials using historical trends, FX movements, and seasonal patterns |
| Multi-project dashboard | Aggregate view across all projects: total budget, total spend, total variance, project-by-project health |
| WhatsApp daily price digest | Automated morning WhatsApp message with today's prices for subscribed materials and markets |
| Mobile-optimized procurement entry | Simplified mobile form for site engineers to log purchases from the construction site |

### COULD Have — Month 3

| Feature | Description |
|---------|-------------|
| Procurement marketplace | Connect PMs directly with verified suppliers for material ordering; earn transaction fee |
| Construction financing integration | Connect over-budget projects with construction lenders; earn referral fee |
| Quantity takeoff from plans | Upload architectural drawings → AI estimates material quantities (basic) |
| Material waste tracking | Compare materials delivered to site vs. materials in completed structure; flag potential theft or waste |
| USSD price check | Dial *XXX# → select material → get current market price via SMS. Reaches site foremen on 2G connections |
| Land title verification | Premium add-on: verify land ownership and title status via CAC and state registry data |

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Full project management (scheduling, Gantt charts) | Procore/MS Project territory; keep focus on cost tracking |
| BIM integration | Too complex for Nigerian market; virtually no BIM adoption among target customers |
| Subcontractor management | Labor is a separate problem from material cost tracking |
| Equipment tracking / fleet management | Adjacent problem; different buyer |
| Architectural design tools | Out of scope; complementary, not competitive |

## 7. Key Screens & UX

### Design Principles

- **Numbers forward:** Total budget, total spend, total variance — visible within 2 seconds of login. Every screen answers "how much money?" before anything else.
- **Traffic light simplicity:** Green = on budget. Yellow = trending over budget (5-15% variance). Red = over budget (>15% variance). No ambiguity. Site engineers and MDs both understand this instantly.
- **Offline-capable procurement:** Site engineers log purchases from construction sites where internet is unreliable. Procurement entry must work offline and sync when connected.
- **WhatsApp-ready reports:** Every report generates a shareable format that works in WhatsApp — PDF for formal reports, plain text summaries for quick updates.

### Screen 1: Market Prices Dashboard

The landing screen for price-tracking-only users and the reference panel for project managers. Layout:

**Header row:** Today's date, number of materials tracked, number of markets covered.

**Price ticker:** Horizontal scrolling ticker showing today's prices for the 5 most-watched materials, with green/red arrows indicating daily change. Similar to a stock market ticker.

**Material grid:** Cards for each tracked material. Each card shows:
- Material name and specification (e.g., "Cement — Dangote 50kg bag")
- Current price in user's selected market
- Daily change (naira and percentage, color-coded)
- 30-day mini sparkline chart
- "Set Alert" button
- "View Details" link to full price history

**Market selector:** Dropdown to switch between markets (Lagos-mainland, Lagos-island, Abuja, PH, Kano). Prices update immediately.

**Price comparison table:** Full-width table showing all materials x all markets. Allows comparison of cement prices across all 5 markets in one view. Highlights the cheapest and most expensive market for each material.

### Screen 2: Project Dashboard

After selecting a project, the user sees the project-level cost overview.

**Header:** Project name, status (active/paused/completed), start date, days elapsed, estimated completion.

**Four KPI cards:**
- **Total Budget:** Sum of all BOQ line items at budgeted prices. Example: "N185,000,000"
- **Projected Cost:** Sum of remaining quantities x current market price + actual spend to date. Red if >110% of budget. Example: "N221,400,000 (+19.7%)"
- **Actual Spend to Date:** Sum of all logged procurement. Example: "N92,300,000"
- **Budget Remaining:** Budget minus actual spend. With a secondary line showing projected remaining vs. budgeted remaining. Example: "N92,700,000 budget / N129,100,000 projected"

**Budget health bar:** Horizontal progress bar showing actual spend vs. budget vs. projected total. Color transitions from green to yellow to red as projected total exceeds budget.

**Line item table:** Scrollable table with one row per BOQ material:
- Material name
- Budgeted quantity / Remaining quantity
- Budgeted unit price / Current market price
- Price variance (%)
- Budgeted total / Projected total / Actual spend
- Status (green/yellow/red circle)

Click any row to expand: see individual purchase records, supplier breakdown, and price trend for that material.

### Screen 3: Procurement Log

A transaction-level view of all material purchases across a project.

**Add Purchase button:** Opens a form — material (dropdown from BOQ), quantity, unit price, supplier (dropdown or new), date, receipt photo (camera capture on mobile), notes.

**Transaction table:** Chronological list of all purchases:
- Date
- Material
- Quantity
- Unit price
- Total cost
- Supplier
- Market benchmark price (on that date)
- Variance from benchmark (%)
- Receipt (thumbnail if photo attached)

**Filters:** Material type, supplier, date range, over/under benchmark.

**Supplier summary:** Below the table, a card per supplier showing: total spend, number of transactions, average variance from benchmark, reliability notes. Suppliers ranked by overall value.

### Screen 4: Price Alerts Configuration

**Active alerts table:** List of configured alerts:
- Material + Market
- Alert condition ("Price exceeds N10,000/bag")
- Delivery channel (WhatsApp, SMS, email)
- Status (active/paused)
- Last triggered date

**Add Alert form:**
- Select material
- Select market
- Set condition: above/below/changes by threshold
- Set delivery: WhatsApp, SMS, or email
- Optional: set expiry date for the alert

**Alert history:** Log of all triggered alerts with the price at trigger time.

### Screen 5: Report Generator

**Report type selector:**
- Budget Variance Report
- Project Progress Report
- Material Price Report
- Investor/Client Report (combines all above)

**Configuration for each report:**
- Project (or all projects)
- Date range
- Include/exclude sections
- Branding: upload company logo for investor reports

**Output options:**
- Excel (XLSX) — formatted with conditional formatting, charts, and summary sheets
- PDF — professionally laid out, ready for printing or emailing
- WhatsApp summary — plain text with key metrics, formatted for WhatsApp forwarding

**Preview:** Full preview before download. Editable notes/narrative section for context.

## 8. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router, Server Components) | SSR for fast first paint on construction site cellular connections; SEO for price content |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development; clean dashboard design |
| Backend | Next.js API Routes + Server Actions | Single deployment; no separate backend service |
| Database | Supabase PostgreSQL | Managed Postgres; built-in auth; time-series price data storage; Row Level Security |
| Auth | Supabase Auth | Email/password + OTP; organization-level data isolation |
| File Storage | Supabase Storage | Receipt photos, project documents, generated reports |
| Charts | Recharts or Chart.js | Price trend visualizations, budget charts, sparklines |
| AI/ML | OpenAI API or custom model (future) | Price forecasting using historical trends, FX rates, and seasonal patterns |
| Messaging | WhatsApp Business API (via Termii) + SMS fallback | Price alerts, daily digests, report delivery |
| Email | Resend | Report delivery, transactional notifications |
| PDF Generation | @react-pdf/renderer or Puppeteer | Investor/client report PDF generation with charts and formatting |
| Excel Export | xlsx (SheetJS) library | Formatted Excel reports with multiple sheets, conditional formatting, charts |
| Offline Storage | IndexedDB via idb library | Cache procurement entries offline; sync when connected |
| Payments | Paystack | Subscription billing in NGN |
| Hosting | Vercel (frontend) + Supabase (backend) | Free tiers for MVP; auto-scaling for growth |
| Monitoring | Sentry (errors) + PostHog (analytics) | Track funnel: signup → first project → first procurement log → conversion to paid |

### Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  type text CHECK (type IN ('construction_company', 'developer', 'individual', 'architect')),
  state text,
  created_at timestamptz DEFAULT now()
)

-- Users
users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  org_id uuid REFERENCES organizations,
  role text CHECK (role IN ('admin', 'manager', 'site_engineer', 'viewer')),
  full_name text,
  phone text,
  created_at timestamptz DEFAULT now()
)

-- Materials Master
materials (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  specification text, -- e.g., "Dangote 50kg bag", "12mm Turkish"
  category text NOT NULL, -- 'cement', 'rebar', 'blocks', 'sand', 'granite', 'diesel', etc.
  unit text NOT NULL, -- 'bag', 'ton', 'piece', 'trip', 'litre'
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)

-- Markets
markets (
  id uuid PRIMARY KEY,
  name text NOT NULL, -- 'Lagos-Mainland', 'Lagos-Island', 'Abuja', 'Port Harcourt', 'Kano'
  state text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)

-- Material Prices (time-series)
material_prices (
  id uuid PRIMARY KEY,
  material_id uuid REFERENCES materials,
  market_id uuid REFERENCES markets,
  price decimal(12,2) NOT NULL,
  price_date date NOT NULL,
  source text CHECK (source IN ('survey', 'crowdsourced', 'published', 'scraped')),
  confidence text CHECK (confidence IN ('high', 'medium', 'low')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(material_id, market_id, price_date, source)
)

-- Projects
projects (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  name text NOT NULL,
  project_type text CHECK (project_type IN ('residential', 'commercial', 'industrial', 'infrastructure', 'mixed')),
  location_state text,
  location_lga text,
  market_id uuid REFERENCES markets, -- default market for price comparisons
  total_budget decimal(15,2),
  start_date date,
  estimated_end_date date,
  status text CHECK (status IN ('planning', 'active', 'paused', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now()
)

-- Bill of Quantities (BOQ line items)
boq_items (
  id uuid PRIMARY KEY,
  project_id uuid REFERENCES projects,
  material_id uuid REFERENCES materials,
  description text, -- custom description beyond material name
  budgeted_quantity decimal(12,3) NOT NULL,
  budgeted_unit_price decimal(12,2) NOT NULL,
  budgeted_total decimal(15,2) GENERATED ALWAYS AS (budgeted_quantity * budgeted_unit_price) STORED,
  sort_order integer,
  created_at timestamptz DEFAULT now()
)

-- Suppliers
suppliers (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  name text NOT NULL,
  phone text,
  whatsapp text,
  location text,
  materials_supplied text[], -- array of material categories
  rating decimal(3,1), -- 1.0 to 5.0, calculated from transactions
  notes text,
  created_at timestamptz DEFAULT now()
)

-- Procurement (actual purchases)
procurement (
  id uuid PRIMARY KEY,
  project_id uuid REFERENCES projects,
  boq_item_id uuid REFERENCES boq_items,
  material_id uuid REFERENCES materials,
  supplier_id uuid REFERENCES suppliers,
  quantity decimal(12,3) NOT NULL,
  unit_price decimal(12,2) NOT NULL,
  total_cost decimal(15,2) GENERATED ALWAYS AS (quantity * unit_price) STORED,
  purchase_date date NOT NULL,
  market_benchmark_price decimal(12,2), -- market price on that date for comparison
  receipt_url text, -- photo in Supabase Storage
  notes text,
  logged_by uuid REFERENCES users,
  synced boolean DEFAULT true, -- false if entered offline and not yet synced
  created_at timestamptz DEFAULT now()
)

-- Price Alerts
price_alerts (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES users,
  material_id uuid REFERENCES materials,
  market_id uuid REFERENCES markets,
  condition text CHECK (condition IN ('above', 'below', 'change_pct')),
  threshold decimal(12,2) NOT NULL, -- price threshold or percentage
  channel text CHECK (channel IN ('whatsapp', 'sms', 'email')),
  active boolean DEFAULT true,
  last_triggered_at timestamptz,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now()
)

-- Alert History
alert_history (
  id uuid PRIMARY KEY,
  alert_id uuid REFERENCES price_alerts,
  triggered_price decimal(12,2),
  triggered_at timestamptz DEFAULT now(),
  delivery_status text CHECK (delivery_status IN ('sent', 'failed'))
)

-- Generated Reports
reports (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  project_id uuid REFERENCES projects,
  report_type text CHECK (report_type IN ('budget_variance', 'progress', 'price', 'investor')),
  file_url text, -- stored PDF/Excel in Supabase Storage
  generated_at timestamptz DEFAULT now(),
  generated_by uuid REFERENCES users
)
```

### Price Data Collection Architecture

The material price database is the core asset. Collection operates in three tiers:

**Tier 1 — Manual Survey Network (Launch)**
Recruit 5-10 price surveyors across 5 markets (one per market). Each surveyor calls 3-5 suppliers daily and reports prices via a WhatsApp bot or simple web form. Cost: N50-100K/month per surveyor (N250-500K/month total). This is the highest-cost component of the MVP and the most critical. Surveyors are typically young graduates or market associates who already have supplier relationships.

**Tier 2 — Crowdsourced Pricing (Month 2+)**
Every procurement entry by a BuildTrack user includes the purchase price, material, market, and date. Aggregated and anonymized, this becomes a crowdsourced price feed. As the user base grows, this supplements and eventually replaces manual surveys. Incentive: users who log procurements get access to more granular price data.

**Tier 3 — Automated Collection (Month 3+)**
Scrape published prices from cement manufacturers (Dangote, BUA, Lafarge publish ex-factory prices). Monitor LBIC steel price indices. Track diesel prices from NNPC/published sources. Build API integrations with willing suppliers or material marketplaces.

### Offline Architecture

```
Online Flow:
  User logs procurement → Saves to Supabase → Updates budget dashboard →
  Checks against market benchmark → Alerts if overpaying

Offline Flow (critical for construction sites):
  User logs procurement → Saves to IndexedDB → Shows in local dashboard →
  [When online] → Syncs to Supabase → Fetches latest prices →
  Recalculates benchmarks → Updates alerts

Cached locally (IndexedDB):
  - All project BOQ items and budget data
  - Last 30 days of material prices for selected markets
  - All procurement records for active projects
  - Supplier list
  - Pending alerts

Not cached (requires network):
  - New price data (fetched on sync)
  - Report generation (requires server-side processing)
  - Receipt photo uploads (queued for upload)
  - Real-time price alerts (depend on server-side price monitoring)
```

## 9. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **Price Watch** | N50,000/month (~$33) | Material price tracking for all markets, price alerts (up to 10), price history charts, daily WhatsApp price digest, Excel export |
| **Project Pro** | N150,000/month (~$98) per active project | Everything in Price Watch + project creation, BOQ import, live budget dashboard, procurement logging, budget variance reports, supplier scorecards, 5 users |
| **Enterprise** | N100,000/month (~$65) per project (min 5 projects) | Everything in Project Pro + investor report generator, multi-project dashboard, unlimited users, branded reports, priority support |
| **Founding Customer** | N75,000/month (~$49) per project | Project Pro features, locked for 12 months, limited to first 10 customers |

### Trial & Onboarding

- 14-day free trial of Project Pro, no credit card required
- Price Watch tier has a 7-day free trial (lower commitment = shorter trial)
- Onboarding: guided project setup during trial; import BOQ on first session to demonstrate value
- Trial-to-paid conversion target: 35%

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~$150 | Vercel Pro ($20) + Supabase Pro ($25) + Termii ($10) + Price surveyors ($100 = N150K) |
| Cost per customer | ~$10/month | At 15 customers, infrastructure + surveyor cost / customer count |
| CAC | $0-30 | LinkedIn outreach, industry events, content marketing |
| Monthly churn estimate | 5-8% | Project-based churn: customers leave when projects complete, return when new projects start |
| Average customer lifetime | 10-14 months | Average construction project duration + re-engagement for next project |
| Average revenue per customer | N150K/month | Weighted average across tiers (some Price Watch, most Project Pro) |
| LTV | N1.5-2.1M (~$975-1,365) | N150K x 10-14 months |
| LTV:CAC ratio | 32:1 - 46:1 | Strong unit economics despite surveyor costs |

### Revenue Targets

| Milestone | Timeline | Customers | MRR (NGN) | MRR (USD) |
|-----------|----------|-----------|-----------|-----------|
| First paying customer | Week 4 | 1 | N50-150K | ~$33-98 |
| Cover surveyor costs | Month 2 | 3 | N300K | ~$195 |
| Break-even | Month 3 | 8 | N800K | ~$520 |
| Target | Month 4 | 15 | N1.8M | ~$1,170 |
| Stretch | Month 8 | 30 | N4M | ~$2,600 |

Break-even at 8 customers covers: infrastructure ($50) + surveyors ($100) + tools ($10) = ~$160/month. At N150K/customer average, 8 customers = N1.2M = ~$780, covering all costs with margin.

## 10. Go-to-Market: First 10 Customers

### Channel 1: LinkedIn Direct Outreach to Construction Professionals

**Search strategy:** LinkedIn Sales Navigator:
- Title: "Project Manager" OR "Quantity Surveyor" OR "Site Engineer" OR "Construction Manager" OR "Property Developer"
- Location: Lagos, Abuja, Port Harcourt
- Industry: Construction, Real Estate, Building Materials
- Company size: 11-200 employees

**Outreach sequence:**
1. Connection request: "Hi [Name], I'm building a tool that tracks construction material prices in real-time and helps PMs manage project budgets. Would love to hear how you currently track cement and rebar prices."
2. If accepted: "Thanks for connecting. Quick question — what would it be worth to know that cement prices are about to jump 15% before your competitors find out? We're building exactly that. Happy to show you."
3. If interested: "Let me send you today's prices for your market — free, no signup needed. If you find it useful, I'll walk you through the full project tracking tool. What's your WhatsApp?"

**Target:** 100 connection requests → 30 accepts → 15 conversations → 8 demos → 4-5 customers.

### Channel 2: Family Network in Port Harcourt

Direct introductions to property developers and construction companies in Port Harcourt / Rivers State. Construction is booming in PH — new residential estates and commercial projects everywhere. "I built a tool that tracks building material prices daily and helps you manage project budgets. It's free for 14 days. Can I set up your current project?"

**Target:** 5 introductions → 4 demos → 2-3 customers.

### Channel 3: Building Material Markets

Physically visit (via Port Harcourt family) or send a rep to building material markets and construction supply clusters. Meet project managers and site engineers who are actively buying materials. Offer: "Let me show you how much you overpaid for cement last month compared to the market average."

**Target:** 10 contacts → 6 demos → 2-3 customers.

### Channel 4: Real Estate Developer Associations

Lagos Real Estate Developers Association, Nigeria Institution of Estate Surveyors and Valuers (NIESV), Nigerian Institute of Quantity Surveyors (NIQS). These professional associations host regular events and maintain member directories. Offer to present: "How Material Price Volatility Is Killing Your Margins — And What to Do About It."

**Target:** 1-2 events → 15 attendees → 8 conversations → 3-4 customers.

### Channel 5: Free Daily Price WhatsApp Broadcast

Create a WhatsApp broadcast list (or WhatsApp Channel) that sends daily material prices for Lagos and Abuja. Free to join. No signup required. This builds an audience of construction professionals who check prices daily. After 2 weeks of consistent value, upsell: "Want to track these prices against your project budget? Try BuildTrack free for 14 days."

**Target:** 50 subscribers in month 1 → 15 engaged daily users → 5-8 trial signups → 3-4 customers.

### Channel 6: Content Marketing on LinkedIn

Publish weekly content:
- "This Week in Nigerian Building Materials: Cement Up 8%, Rebar Down 3%"
- "Why Your Construction Budget Is Already Wrong (And How to Fix It)"
- "The N50M Question: How Material Price Tracking Saved This Lagos Developer"
- Infographics: material price trends, market comparisons

**Target:** Build authority over 3-6 months; generate 3-5 inbound leads per month by month 4.

### Channel Summary

| Channel | Outreach Volume | Expected Demos | Expected Customers |
|---------|----------------|----------------|-------------------|
| LinkedIn outreach | 100 | 8 | 4-5 |
| Family network | 5 | 4 | 2-3 |
| Material markets | 10 | 6 | 2-3 |
| Association events | 15 | 3-4 | 2-3 |
| WhatsApp broadcast | 50 | 5-8 | 3-4 |
| Content / inbound | — | 2-3 | 1-2 |
| **Total** | **180** | **28-33** | **14-20** |

## 11. Risks & Mitigations

### Risk 1: Material Price Data Collection Is Expensive and Unreliable

**Likelihood:** High. Manual price surveys require human effort, are prone to errors, and create ongoing costs (N250-500K/month for surveyors). Prices vary by supplier, negotiation, quantity, and relationship — there is no single "market price."

**Impact:** Inaccurate price data undermines the core value proposition. If users discover prices in BuildTrack do not match their experience, trust collapses.

**Mitigations:**
- Start with 3 markets, not 5. Lagos-Mainland, Abuja, and Port Harcourt cover the majority of target customers. Add markets as revenue supports more surveyors.
- Cross-validate: each price point requires confirmation from 2+ sources (survey + crowdsourced + published)
- Display confidence levels: "High confidence" (3+ sources), "Medium" (2 sources), "Low" (1 source). Transparency builds trust even when data is imperfect.
- Accelerate crowdsourced pricing by making procurement entry easy and showing users how their data improves the platform's accuracy for everyone
- Published cement prices (Dangote, BUA) are reliable benchmarks; use these as anchors and show market premiums/discounts relative to published prices

### Risk 2: Construction Companies Resist Software Adoption

**Likelihood:** High. Construction is one of the least digitized industries globally, and Nigerian construction is even less digitized. Site engineers are comfortable with WhatsApp and Excel, not SaaS platforms.

**Impact:** Low trial-to-paid conversion. Users find the product interesting but do not integrate it into their workflow.

**Mitigations:**
- Lead with price tracking (passive value — just look at prices) before pushing project management (active workflow change)
- WhatsApp-first engagement: daily price digest via WhatsApp requires zero behavior change. Users get value by reading a WhatsApp message they already check hourly.
- Excel export on everything — the output goes into their existing Excel workflows
- Mobile-first procurement entry: site engineers can log a purchase in under 30 seconds on their phone, like sending a WhatsApp message
- Do not try to replace their process; augment it. "Keep using Excel for your BOQ. Upload it to BuildTrack. We update the prices for you."

### Risk 3: Project-Based Churn

**Likelihood:** High. Construction projects have finite durations (6-24 months). When a project ends, the customer may not have another project immediately, leading to cancellation.

**Impact:** High churn rates (possibly 8-12% monthly) that make it difficult to build stable recurring revenue.

**Mitigations:**
- Price Watch tier (N50K/month) retains customers between projects. Construction professionals always want material price data, even without an active project.
- Multi-project pricing encourages customers to add all concurrent projects, increasing stickiness
- Historical data becomes more valuable over time — price trends, supplier scorecards, and procurement patterns from past projects inform future projects
- Seasonal re-engagement campaigns: contact churned customers at start of construction season (dry season, typically October-April) with updated market data

### Risk 4: Suppliers and Manufacturers Resist Price Transparency

**Likelihood:** Medium. Some suppliers benefit from price opacity — they charge different prices to different customers based on relationships and negotiation leverage. A transparent price database threatens this.

**Impact:** Suppliers pressure surveyors not to share prices. Manufacturers (Dangote, BUA) could restrict access to published pricing.

**Mitigations:**
- Anonymous pricing: never reveal which supplier quoted which price. Display only market averages, ranges, and trends.
- Frame as beneficial to good suppliers: "Your prices are competitive. BuildTrack will send you more customers." Suppliers with genuinely good prices benefit from transparency.
- Crowdsourced data cannot be blocked — it comes from buyer-side reporting, not supplier cooperation
- Published ex-factory prices are already public; market premiums are the value-add

### Risk 5: Free WhatsApp Price Groups Already Exist

**Likelihood:** Medium. Informal WhatsApp groups where contractors share daily material prices are common. Why pay for BuildTrack when you can get prices for free in WhatsApp?

**Impact:** The price tracking tier (N50K/month) gets undercut by free alternatives. Users stick with WhatsApp groups.

**Mitigations:**
- WhatsApp groups are noisy, unstructured, and unreliable — prices are self-reported with no verification, arrive at random times, and get buried in conversation. BuildTrack is structured, verified, and searchable.
- Historical data and trend analysis cannot exist in WhatsApp. "Cement has risen 12% in the last 6 weeks" is insight that WhatsApp groups cannot provide.
- Price alerts based on thresholds are not possible in WhatsApp
- Project budget integration — connecting prices to your actual projects — is the moat. WhatsApp prices are observation; BuildTrack prices are actionable intelligence.
- Offer the WhatsApp digest for free to the first 50 subscribers as a lead magnet; monetize through project tracking upgrade

### Risk 6: Price Forecasting Is Inaccurate

**Likelihood:** Medium. Nigerian material prices are influenced by FX movements, government policy (cement import bans, excise duties), manufacturer production decisions, and seasonal demand — many of which are unpredictable.

**Impact:** If price forecasts are wrong, users lose trust in the platform's intelligence capabilities.

**Mitigations:**
- Position forecasts as "trends and scenarios," not predictions. "Based on current trends, cement may reach N11,000 by June" vs. "cement will be N11,000 in June."
- Show confidence intervals, not point estimates
- Start with simple trend extrapolation (3-month moving average) before attempting ML-based forecasting
- Publish forecast accuracy metrics transparently: "Our 30-day cement forecast was within 5% accuracy 72% of the time"
- Price forecasting is a SHOULD-have, not a MUST-have. Launch without it; add when enough historical data exists (3-6 months minimum)

## 12. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 6 | 0.30 | Platform code (dashboards, BOQ import, procurement logging) is standard CRUD with charts. However, the material price database requires establishing a surveyor network before launch, which adds 2-4 weeks. Total MVP timeline: 5-7 weeks. |
| Time to Revenue | 15% | 6 | 0.90 | Price Watch tier can generate revenue quickly — just price data and alerts. Project tracking requires more onboarding. First revenue realistic at Week 4-5 if price database is ready. Slower than pure-software plays because data collection has a ramp-up period. |
| Market Size | 15% | 8 | 1.20 | N21T housing deficit is the headline number. Construction sector's 80.8 expansion index means money is being deployed. Material procurement for a single mid-size construction company is N500M-3B annually. Even the price tracking SaaS alone addresses hundreds of companies. |
| Competition | 10% | 8 | 0.80 | Literally nothing exists for Nigerian construction cost management. No Procore, no PlanGrid, no BuilderTrend, not even a basic material price tracking tool. WhatsApp groups are the only "competition." This is a rare true greenfield. |
| Skill Fit | 15% | 6 | 0.90 | Data collection, dashboards, price analytics, and basic ML forecasting align with data science and full-stack skills. However, the price surveyor network management and construction domain knowledge are new territories. Not as strong a fit as pure data/AI products. |
| Capital Required | 10% | 9 | 0.90 | Pure software with one notable cost: price surveyors at N250-500K/month. This is significant relative to $0 infrastructure costs but still well within bootstrapping range. Could start with fewer surveyors and fewer markets to reduce initial cost. |
| Buyer Clarity | 20% | 7 | 1.40 | Construction companies and property developers are identifiable via LinkedIn, professional associations (NIQS, NIESV), and physical presence at building material markets. The project manager / quantity surveyor is the user. However, the sales cycle may be consultative — construction companies are not actively searching for software. |
| Fintech Upside | 10% | 6 | 0.60 | Construction financing (bridge loans for cost overruns) and material procurement financing (buy-now-pay-later for building materials) are real opportunities. However, the path from cost tracking to financial services is longer than for payments-adjacent products. Supply chain financing for material suppliers is possible but requires banking partnerships. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.30 |
| Time to Revenue (15%) | 0.90 |
| Market Size (15%) | 1.20 |
| Competition (10%) | 0.80 |
| Skill Fit (15%) | 0.90 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 1.40 |
| Fintech Upside (10%) | 0.60 |
| **TOTAL** | **7.00 / 10** |

### Verdict: BUILD (Secondary Priority)

A 7.00 composite score reflects a strong market opportunity (8 on Market Size, 8 on Competition) with a genuine absence of competition in a sector that is actively expanding. The buyer clarity (7, weighted 20%) is solid — construction professionals are findable and have clear pain around material costs. Capital requirements remain low (9) despite the surveyor cost.

**Key decision factors:**
- Construction is the most optimistic sector in the CBN data — these businesses are spending money and actively need cost management tools
- Zero competition means first-mover advantage is real and durable. No Nigerian product even attempts this.
- The price database is both the biggest build challenge and the biggest moat — once established, it is extremely difficult for competitors to replicate
- The WhatsApp daily price digest is a brilliant lead magnet that costs almost nothing to distribute and creates daily engagement
- Surveyor costs (N250-500K/month) are the main risk relative to other $0-infrastructure products in the suite

**Trade-off vs. other products:** BuildTrack scores lower than PayMatch (8.25) on Skill Fit and Time to Revenue because the price database introduces a data-collection dependency that pure software products do not have. However, it scores higher on Competition (8 vs. 7) because the space is truly empty. It is best built as a second or third product when the surveyor network cost is justified by revenue from earlier products.

**Go condition:** Begin building the price database (surveyor recruitment) in Month 2 alongside initial product development. Launch the free WhatsApp price digest in Week 3 to build audience. Launch Price Watch tier in Week 5. Launch Project Pro in Week 7. Target first paying customer by Week 5 (Price Watch) or Week 8 (Project Pro). 10 customers by Day 120.
