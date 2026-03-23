# PRD 05: GenTrack — Generator Cost Visibility Dashboard

**Version:** 1.0 | March 2026
**Status:** Draft
**Reference:** 00-shared-context.md (tech stack, UX principles, billing, scorecard)

---

## 1. Executive Summary

GenTrack is a web dashboard that gives Nigerian businesses true visibility into their generator operating costs. Companies input generator specs, log diesel purchases and runtime hours, and receive calculated cost-per-kWh figures, industry benchmarks, efficiency trends, maintenance alerts, and solar ROI projections.

The core insight is strategic: GenTrack does not sell solar or any alternative energy product. It sells **visibility** — the ability to see, for the first time, what self-generation actually costs per kilowatt-hour. That visibility naturally drives better decisions: load optimization, maintenance scheduling, fuel procurement negotiation, and — for many businesses — the realization that solar payback periods are shorter than assumed. Solar installers become a monetizable referral channel for qualified, data-informed leads.

**Target MRR:** $10K (30 paying customers at N40-75K/month)
**Time to MVP:** 2-3 weeks
**Time to Revenue:** 30-45 days post-launch

---

## 2. Market Problem

### The Invisible Cost Crisis

Nigerian businesses are bleeding money on self-generation, and most of them cannot quantify how much.

**Macro evidence:**
- Annual national spending on generators and fuel: **N22T ($14.3B)** (MAN, LCCI)
- Lagos MSMEs alone: **N5.3T** on power generation
- Manufacturers: **N1.11T** (up **42.3% YoY**)
- The national grid collapsed **12 times in 2024**
- Energy represents **28-40% of total production costs** for manufacturers
- Self-generation costs **2-4x the grid tariff**: N450-900/kWh vs. N206/kWh
- **86% of Nigerian companies** own at least one generator

**MAN data — energy spend by manufacturing sector:**

| Sector | Annual Energy Spend |
|--------|-------------------|
| Food & Beverages | N229.41B |
| Chemical & Pharmaceutical | N208.68B |
| Non-Metallic Mineral Products | N118.49B |

Q4 2025 energy cost breakdown: Diesel/Petrol N304.9B (45.1%), PHCN grid N179.4B (26.5%), Generators N127.7B (18.9%), Gas N64.6B (9.5%). Band A industrial electricity tariffs surged 200%+, making the grid MORE expensive and solar ROI calculations even more compelling.

**The data gap:** Despite these staggering figures, most businesses track diesel costs as a single line item — "fuel expense." They do not calculate cost per kWh. They cannot benchmark against peers. They cannot model alternatives. The CFO sees a growing expense line and asks questions that the facility manager cannot answer with data.

> *"Diesel is eating 35% of my expenses... if there were affordable solar, we'd jump at it."*
> — Bakery owner, Lagos

The quote reveals the real problem: businesses suspect they are overpaying, intuitively know alternatives exist, but lack the analytical framework to make the switch. GenTrack provides that framework.

### Why This Problem Persists

1. **No tool exists** for Nigerian generator cost tracking at the SME/mid-market level. Enterprise energy management systems (Schneider, Siemens) are priced for multinationals.
2. **Manual tracking is tedious.** Facilities track diesel purchases in notebooks or basic Excel sheets. Converting purchases + runtime hours into cost/kWh requires calculations most facility managers do not perform.
3. **Generator economics are opaque.** Load factor, fuel efficiency curves, maintenance intervals, and degradation over time are not intuitive. A 100 KVA generator running at 30% load is dramatically less efficient per kWh than one at 70% load, but operators rarely see this.
4. **No benchmark data exists.** Even if a company calculates its own cost/kWh, there is no reference point. Is N650/kWh good or bad for a food processing plant with 200 KVA capacity? Nobody knows.

---

## 3. Target Persona

### Primary: Adeola — Facility/Operations Manager

| Attribute | Detail |
|-----------|--------|
| **Title** | Facility Manager / Operations Manager / Plant Engineer |
| **Company** | Manufacturing firm or commercial complex |
| **Company size** | 50-500 employees |
| **Generators managed** | 1-5 units |
| **Location** | Lagos, Ogun, Rivers, Kano industrial estates |
| **Age** | 32-50 |
| **Education** | HND/BSc Engineering or Business |
| **Tech comfort** | Moderate — uses Excel for basic tracking, WhatsApp daily, some ERP exposure |

**Current workflow:**
- Receives diesel deliveries 1-3x per week, records quantities in a notebook or Excel
- Monitors generator runtime via panel hour meters (manual reading)
- Submits monthly fuel expense reports to finance (total naira spent, no kWh breakdown)
- Handles maintenance reactively — calls technician when something breaks
- Gets quarterly pressure from CFO: "Why is our diesel bill up 40%?"

**Pain points:**
- Cannot answer "what does our power actually cost per kWh?"
- Cannot prove to management that the generators are (or are not) running efficiently
- Has no data to support capital requests (new generator, solar installation, grid upgrade)
- Maintenance is reactive, not predictive — breakdowns cause production stoppages
- Spends time on manual reporting that nobody trusts anyway

**What success looks like:**
- Walks into CFO meeting with a dashboard showing cost/kWh trends, benchmarks, and efficiency metrics
- Flags a generator running at poor load factor before it becomes a cost crisis
- Presents a data-backed solar ROI case with projected payback period
- Gets maintenance alerts based on actual runtime hours, preventing breakdowns

**PRIMARY TARGET:** Food/Beverage manufacturers (63.24% capacity, N229.4B energy spend — highest of any sector, inelastic demand means they have revenue to pay for tools). **SECONDARY:** Textiles (57.36% capacity despite 4x energy increase from N6.97B to N26.45B — most dramatic cost surge, desperate for optimization). **DO NOT TARGET:** Electrical/Electronics (28% capacity, approaching shutdown).

### Secondary: The CFO / Finance Director

Does not use GenTrack directly but is the economic buyer. Sees the monthly/quarterly reports GenTrack generates. Cares about: total energy cost as percentage of revenue, trend direction, and whether capital investment in alternatives (solar, grid upgrade, newer generators) makes financial sense. Approves the subscription.

### Secondary: Solar Installation Companies

Not a user of the dashboard. A downstream beneficiary. When GenTrack users see their true cost/kWh and run the solar ROI calculator, some will want quotes. Solar companies pay referral fees for these qualified, data-informed leads.

---

## 4. Solution Overview

GenTrack is a web-based dashboard (responsive PWA) where businesses register their generators, log fuel and runtime data, and receive automated cost analysis, benchmarks, and maintenance alerts.

### Core Value Loop

```
Input: Generator specs + Diesel logs + Runtime hours
    |
    v
Processing: Cost/kWh calculation + Efficiency analysis
    |
    v
Output: Benchmarks + Trends + Maintenance alerts + Solar ROI
    |
    v
Action: Optimize load, schedule maintenance, evaluate solar, negotiate fuel
    |
    v
Result: Measurable cost savings → proves GenTrack value → retention
```

### What GenTrack Is NOT

- **Not a solar sales platform.** GenTrack is energy cost analytics. Solar ROI is one output, not the product.
- **Not an IoT system.** No hardware, no sensors, no automatic data capture (in MVP). Manual data entry only.
- **Not an energy marketplace.** Does not sell diesel, power, or equipment.
- **Not an enterprise EMS.** Does not do real-time power monitoring, demand response, or grid integration.

---

## 5. Key Features (Functional Requirements)

### F1: Generator Asset Registry

**Description:** Users register each generator with its specifications for accurate efficiency modeling.

**Data captured per generator:**
- Nickname / identifier (e.g., "Factory Gen 1")
- Make and model (searchable dropdown + manual entry)
- Rated capacity (KVA)
- Fuel type (diesel / petrol / gas)
- Purchase year
- Location / site assignment
- Fuel consumption rate at rated load (litres/hour, from manufacturer spec or user estimate)

**Behavior:**
- Support 1-20 generators per account
- Pre-populated database of common Nigerian generator models (Mikano, FG Wilson, Caterpillar, Perkins, Lister, Cummins, Jubaili Bros) with default fuel consumption rates
- Users can override defaults with observed consumption rates
- Each generator tagged to a site/location for multi-site businesses

**Priority:** Must Have (MVP)

---

### F2: Diesel Purchase Logging

**Description:** Users log each diesel purchase with date, quantity, cost, and assigned generator(s).

**Data captured per entry:**
- Date of purchase
- Quantity (litres)
- Total cost (NGN)
- Vendor / supplier (optional, for price tracking)
- Assigned to generator(s) or shared fuel tank
- Receipt photo upload (optional, for audit trail)

**Behavior:**
- Auto-calculates price per litre from total cost and quantity
- Flags anomalies: unusual price per litre vs. recent average, unusually large or small purchase
- Running total of fuel spend by period (weekly, monthly, quarterly, annual)
- Supports bulk entry (paste from Excel) and individual entry

**Priority:** Must Have (MVP)

---

### F3: Runtime Hour Logging

**Description:** Users log generator runtime hours periodically (daily, weekly, or per-shift).

**Data captured per entry:**
- Date
- Generator (from registry)
- Hour meter reading (cumulative) OR hours run that day/shift
- Estimated load percentage (optional — dropdown: Light <30%, Medium 30-60%, Heavy 60-80%, Full >80%)

**Behavior:**
- Accepts either cumulative hour meter readings (calculates delta) or daily/shift hours
- Validates entries: flags impossible readings (e.g., more than 24 hours in a day, hour meter going backward)
- Weekly reminder notification if no runtime data logged for 5+ days

**Priority:** Must Have (MVP)

---

### F4: Cost-per-kWh Calculation Engine

**Description:** The core analytical engine that transforms raw inputs into the metric that matters: what each kWh of self-generated power actually costs.

**Calculation model:**

```
Fuel Cost per kWh = (Litres consumed x Price per litre) / (kWh generated)

kWh generated = KVA rating x Power factor (0.8 default) x Load factor x Runtime hours

Total Cost per kWh = Fuel Cost + Maintenance allocation + Depreciation allocation
  - Maintenance allocation = Annual maintenance budget / Annual kWh (user-configurable)
  - Depreciation allocation = (Purchase price / Useful life years) / Annual kWh (optional)
```

**Outputs displayed:**
- Fuel-only cost per kWh (the primary, always-available metric)
- Fully-loaded cost per kWh (when maintenance and depreciation data provided)
- Cost per kWh trend over time (weekly, monthly)
- Comparison: your cost vs. grid tariff (N206/kWh Band A, adjustable for user's tariff band)
- Cost multiplier: "You pay X.Xx the grid tariff"

**Behavior:**
- Recalculates automatically when new fuel or runtime data is entered
- Handles shared fuel tanks by proportional allocation based on runtime hours and capacity
- Displays confidence indicator based on data completeness (e.g., "High confidence — daily runtime logs" vs. "Estimate — weekly runtime logs")

**Priority:** Must Have (MVP)

---

### F5: Industry Benchmarking

**Description:** Shows how the user's generator cost/kWh compares to anonymous aggregated data from other GenTrack users and published industry data.

**Benchmark categories:**
- By sector (Manufacturing, Hospitality, Retail, Commercial Office, Healthcare)
- By generator capacity range (<50 KVA, 50-200 KVA, 200-500 KVA, >500 KVA)
- By region (Lagos, South-South, South-East, North)
- Against grid tariff bands (Band A through E)

**Display:**
- Percentile ranking: "Your cost/kWh is higher than 72% of similar businesses"
- Visual gauge / bar chart showing user position relative to distribution
- MAN published averages by sector as fixed reference points

**Behavior:**
- Initial benchmarks seeded from MAN published data and industry reports
- As user base grows, benchmarks shift to actual anonymized GenTrack data
- Minimum 10 users in a category before showing peer benchmark (privacy threshold)

**Priority:** Must Have (MVP — initially seeded with published data)

---

### F6: Efficiency Trends & Alerts

**Description:** Time-series analysis of generator performance with automated alerts for degradation.

**Trend views:**
- Cost/kWh over time (line chart, selectable period)
- Fuel consumption rate trend (litres/hour at similar load levels)
- Runtime hours per week/month
- Total energy spend as percentage of user-entered revenue (optional)

**Automated alerts (push notification + email + optional SMS/WhatsApp):**
- Fuel consumption rate increasing >10% vs. 30-day average (possible maintenance issue)
- Cost/kWh rising >15% vs. previous month
- Diesel price spike >20% vs. 30-day average
- Generator approaching maintenance interval (see F7)

**Priority:** Should Have (MVP includes basic trend charts; alerts in v1.1)

---

### F7: Maintenance Scheduling

**Description:** Runtime-based maintenance reminders tied to manufacturer intervals and user-customizable schedules.

**Default maintenance schedule (customizable):**

| Interval | Service |
|----------|---------|
| Every 250 hours | Oil change, filter check |
| Every 500 hours | Oil + fuel filter replacement |
| Every 1,000 hours | Major service (belts, coolant, full inspection) |
| Every 3,000 hours | Overhaul assessment |

**Behavior:**
- Tracks cumulative runtime per generator from hour logs
- Shows countdown: "Generator A: 47 hours until next oil change"
- Sends alert when threshold is within 20 hours
- Logs completed maintenance (date, type, cost, vendor) — feeds into fully-loaded cost/kWh
- Maintenance cost tracking contributes to total cost of ownership analysis

**Priority:** Should Have (MVP includes basic hour countdown; full logging in v1.1)

---

### F8: Solar ROI Calculator

**Description:** Based on actual generator cost data, models the financial case for solar+battery installation.

**Inputs (auto-populated from user data + user-adjustable):**
- Current cost/kWh from generators (from F4)
- Average daily kWh consumption (from F3 + F4)
- Peak load (KVA) from generator registry
- Location (for solar irradiance data — Nigeria averages 4.5-6.5 kWh/m2/day)
- Desired solar coverage percentage (slider: 30%, 50%, 70%, 100%)

**Outputs:**
- Estimated solar system size (kWp) and battery capacity (kWh)
- Estimated installation cost range (using Nigerian market rates: N650K-1.2M per kWp installed)
- Monthly savings projection (current generator cost minus projected solar + residual generator cost)
- Simple payback period in months
- 10-year total cost of ownership comparison: generator-only vs. solar hybrid
- Net present value at user-selectable discount rate (default 20% for Nigeria)

**Behavior:**
- Updates dynamically as user adjusts coverage percentage slider
- Shows break-even chart (cumulative cost curves crossing)
- "Request quotes" button that captures user intent (future referral channel)
- Disclaimer: estimates only, actual quotes may vary

**Priority:** Must Have (MVP — simplified version with Nigerian average irradiance)

---

### F9: Multi-Location Comparison

**Description:** For businesses with multiple sites, compare generator performance and costs across locations.

**Views:**
- Side-by-side cost/kWh by location
- Total energy spend by location
- Efficiency ranking across sites
- Fuel price comparison by location (identifies cheapest diesel procurement)

**Behavior:**
- Requires 2+ sites configured in account
- Each site can have its own generators, fuel logs, and runtime logs
- Roll-up dashboard shows aggregate across all sites
- Drill-down into any site for detailed view

**Priority:** Should Have (v1.1 — single-site MVP is sufficient for launch)

---

### F10: Excel Export & Reporting

**Description:** One-click export of all data and reports to Excel format.

**Exportable reports:**
- Generator cost summary (monthly/quarterly)
- Diesel purchase history
- Runtime log history
- Maintenance schedule and history
- Cost/kWh trend data
- Solar ROI analysis summary
- Multi-location comparison table
- Executive summary (one-page PDF with key metrics — v1.2)

**Behavior:**
- Formatted XLSX with headers, number formatting, and chart-ready data tables
- Date range selector for all exports
- Per UX Principle P5: this is a first-class feature, not an afterthought

**Priority:** Must Have (MVP — basic exports; formatted reports in v1.1)

---

## 6. User Experience & User Flows

### Design Principles Applied

Per shared context UX principles:
- **P1 (WhatsApp-Simple):** Single-purpose screens. Log fuel = one screen, one form. No multi-step wizards for data entry.
- **P2 (Offline-Resilient):** All data entry cached to IndexedDB. Queue syncs on reconnect. Facility managers often log data at generator sites with poor connectivity.
- **P3 (Numbers-Forward):** Dashboard leads with cost/kWh in large bold text. Naira amounts prominent. Charts secondary.
- **P5 (Export Everything):** Every table has an export button.
- **P6 (Progressive Complexity):** Simple view shows 3 key metrics (cost/kWh, monthly spend, grid multiplier). "Show details" expands to full analysis.
- **P7 (Naira-First):** All costs in NGN. USD equivalent in gray where relevant.
- **P8 (Low-Bandwidth):** Target <200KB initial load. No heavy images. System fonts.

### Primary User Flows

**Flow 1: Onboarding (First-Time Setup)**
```
Sign Up (email + phone + business name)
  → OTP verification
  → "Add Your First Generator" screen
    → Select make/model from dropdown (or type manually)
    → Enter capacity (KVA), fuel type, purchase year
    → Save
  → "Log Your First Diesel Purchase"
    → Enter date, litres, cost
    → Assign to generator
  → "Log Runtime Hours"
    → Enter today's hour meter reading
  → Dashboard loads with first cost/kWh calculation
  → Total onboarding: <5 minutes
```

**Flow 2: Daily/Weekly Data Entry (Returning User)**
```
Open app → Dashboard (see current cost/kWh)
  → Tap "Log Fuel" → Enter quantity + cost → Save → Updated cost/kWh
  → Tap "Log Hours" → Enter reading → Save → Updated cost/kWh
  → <30 seconds per entry
```

**Flow 3: CFO Report Generation**
```
Dashboard → "Reports" tab
  → Select date range (this month / this quarter / custom)
  → Preview: cost/kWh trend, total spend, benchmark position
  → "Export to Excel" → Download formatted XLSX
  → <60 seconds from intent to file
```

**Flow 4: Solar ROI Exploration**
```
Dashboard → "Solar Calculator" tab
  → Auto-populated with actual cost data
  → Adjust coverage slider (50%, 70%, 100%)
  → See payback period update in real-time
  → "Request Quotes" (optional) → Capture lead
```

### Dashboard Layout (Primary Screen)

```
+--------------------------------------------------+
|  GenTrack              [+ Log Fuel] [+ Log Hours] |
+--------------------------------------------------+
|                                                    |
|  YOUR POWER COST          GRID TARIFF COMPARISON   |
|  ==================        =====================    |
|  N 687 /kWh               3.3x grid tariff         |
|  ▲ 4.2% vs last month     (Grid: N206/kWh)         |
|                                                    |
|  MONTHLY SPEND            EFFICIENCY SCORE          |
|  ==================        =====================    |
|  N 4,230,000              68/100                    |
|  Budget: N 4,500,000      "Room for improvement"    |
|                                                    |
+--------------------------------------------------+
|  [Cost Trend Chart - 6 month line graph]           |
+--------------------------------------------------+
|  GENERATORS              STATUS                    |
|  Factory Gen 1 (200KVA)  ● Running | N712/kWh     |
|  Factory Gen 2 (100KVA)  ○ Off     | N643/kWh     |
|  Office Gen (50KVA)      ● Running | N891/kWh     |
+--------------------------------------------------+
|  ALERTS                                            |
|  ⚠ Gen 1: Oil change due in 23 hours              |
|  ⚠ Diesel price up 18% vs 30-day avg              |
+--------------------------------------------------+
|  [View Solar ROI]  [Export Report]  [All Gens]     |
+--------------------------------------------------+
```

---

## 7. Technical Architecture

### Stack (per shared context)

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14+ (App Router, Server Components), TypeScript |
| Database | PostgreSQL via Supabase |
| ORM | Prisma |
| Hosting | Vercel |
| Auth | Supabase Auth (email + phone/OTP via Termii) |
| Payments | Paystack (NGN subscriptions) |
| Notifications | Termii (SMS/WhatsApp), Resend (email) |
| Excel export | xlsx library |
| Charts | Recharts (lightweight, SSR-compatible) |
| Offline | IndexedDB via idb library, service worker for PWA |

### Data Model (Core Entities)

```
Organization
  ├── id, name, industry_sector, employee_count
  ├── subscription_tier, subscription_status
  │
  ├── Sites[] (1:many)
  │     ├── id, name, address, region
  │     │
  │     ├── Generators[] (1:many)
  │     │     ├── id, nickname, make, model, capacity_kva
  │     │     ├── fuel_type, purchase_year, purchase_price
  │     │     ├── rated_fuel_consumption_lph
  │     │     ├── cumulative_runtime_hours
  │     │     ├── last_maintenance_type, last_maintenance_hours
  │     │     │
  │     │     ├── RuntimeLogs[] (1:many)
  │     │     │     ├── id, date, hours_reading, hours_delta
  │     │     │     └── estimated_load_percentage
  │     │     │
  │     │     └── MaintenanceLogs[] (1:many)
  │     │           ├── id, date, type, cost, vendor
  │     │           └── notes
  │     │
  │     └── FuelPurchases[] (1:many)
  │           ├── id, date, litres, total_cost_ngn
  │           ├── price_per_litre (calculated)
  │           ├── vendor_name
  │           ├── receipt_url
  │           └── allocated_generators[] (many:many with split %)
  │
  └── Users[] (1:many)
        ├── id, email, phone, name, role
        └── notification_preferences
```

### Calculation Pipeline

```
On new FuelPurchase or RuntimeLog:
  1. Recalculate fuel allocation per generator (if shared tank)
  2. For each generator with new data:
     a. Sum fuel consumed in period
     b. Sum runtime hours in period
     c. Estimate kWh = KVA × 0.8 (PF) × load_factor × hours
     d. Cost/kWh = fuel_cost / kWh_generated
     e. Store as DailyMetric snapshot
  3. Update rolling averages (7-day, 30-day, 90-day)
  4. Check alert thresholds
  5. If thresholds breached → queue notification
```

### API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/generators` | GET, POST | List/create generators |
| `/api/generators/[id]` | GET, PUT, DELETE | Generator CRUD |
| `/api/fuel-purchases` | GET, POST | List/create fuel logs |
| `/api/runtime-logs` | GET, POST | List/create runtime logs |
| `/api/maintenance-logs` | GET, POST | List/create maintenance logs |
| `/api/metrics/cost-per-kwh` | GET | Calculated cost/kWh with period params |
| `/api/metrics/benchmarks` | GET | Industry benchmarks for user's category |
| `/api/metrics/trends` | GET | Time-series trend data |
| `/api/solar-roi` | POST | Solar ROI calculation |
| `/api/reports/export` | GET | Excel export with date range params |
| `/api/sites` | GET, POST | Multi-site management |

### Offline Strategy

1. **Service worker** caches app shell and static assets
2. **IndexedDB** stores pending fuel purchases and runtime logs
3. On reconnection, queued entries sync via background fetch
4. Conflict resolution: server timestamp wins; user notified of any discrepancies
5. Dashboard shows "Last synced: X minutes ago" indicator

---

## 8. MVP Scope

### MVP (Weeks 1-3): Core Calculator + Dashboard

**Included:**
- User registration and onboarding (Supabase Auth + OTP)
- Generator registry (add/edit generators with specs)
- Manual diesel purchase logging (date, litres, cost)
- Manual runtime hour logging (date, hours, optional load estimate)
- Cost-per-kWh calculation engine (fuel-only, per generator and aggregate)
- Dashboard with key metrics: cost/kWh, monthly spend, grid tariff comparison
- Basic cost/kWh trend chart (last 30/90 days)
- Industry benchmarks (seeded from MAN published data)
- Simplified solar ROI calculator (inputs auto-populated from user data)
- Excel export of fuel logs, runtime logs, and cost summary
- Single-site support

**Excluded from MVP (deferred to v1.1+):**
- Multi-location comparison
- Maintenance scheduling and logging
- WhatsApp/SMS alerts (email only in MVP)
- Formatted executive PDF reports
- Receipt photo upload
- Bulk data import from Excel
- Referral lead capture for solar installers
- Water/borehole cost tracking: 95%+ of businesses self-provision water (N150K-4M per borehole). Add water as second utility alongside generators — same buyer (facility manager), same value prop (make invisible costs visible).
- USSD fuel log entry: facility staff dials *XXX# → enters diesel litres purchased → logged without needing internet. Critical for on-site staff at factories with poor connectivity.

### MVP Success Criteria

| Metric | Target | Timeline |
|--------|--------|----------|
| Completed onboarding (generator + first data entry) | 50 businesses | 30 days post-launch |
| Weekly active users (log data at least 1x/week) | 25 businesses | 45 days |
| Paid conversions | 10 businesses | 60 days |
| Data retention (>4 weeks of continuous logging) | 60% of active users | 60 days |
| Solar ROI calculator used | 30% of active users | 45 days |

---

## 9. Pricing & Business Model

### Tier Structure

| Tier | Price | Features |
|------|-------|----------|
| **Free (Calculator)** | N0 | One-time cost/kWh calculator. Enter generator specs + fuel data → get cost/kWh. No account required. No data saved. Lead capture. |
| **Starter** | N40,000/month | 1 site, up to 3 generators. Full dashboard, trend tracking, benchmarks, Excel export, solar ROI calculator. Email alerts. |
| **Professional** | N75,000/month | Up to 3 sites, 10 generators. Multi-location comparison. Maintenance scheduling. WhatsApp/SMS alerts. Priority support. |
| **Enterprise** | Custom (N150K+/month) | Unlimited sites/generators. API access. Custom benchmarks. Dedicated account manager. |

### Free Calculator as Lead Generation

The free one-time calculator serves as the primary top-of-funnel acquisition tool:
1. User finds GenTrack via search, LinkedIn, or referral
2. Enters generator specs and recent fuel/runtime data
3. Sees their cost/kWh for the first time — typically a jarring number (N500-900/kWh)
4. Sees the comparison to grid tariff — "You pay 3.5x the grid rate"
5. Prompt: "Track this over time. See if it's getting better or worse. Start free trial."
6. 14-day free trial of Starter tier (no credit card required, per shared context)

### Revenue Model

**Primary:** SaaS subscription revenue (NGN via Paystack)

**Secondary (future):**
- Solar installer referral fees: N50-100K per qualified lead that converts to installation
- Diesel supplier partnerships: featured pricing/delivery from vetted suppliers
- Aggregated anonymized benchmarking data for industry reports

### Revenue Targets

| Milestone | Customers | MRR (NGN) | MRR (USD) | Timeline |
|-----------|-----------|-----------|-----------|----------|
| Break-even | 10 Starter | N400K | ~$260 | Month 2-3 |
| Target | 20 Starter + 10 Pro | N1.55M | ~$1,000 | Month 4-5 |
| Scale | 30+ mixed | N2.4M+ | ~$1,560 | Month 6 |
| Stretch | 50 Starter + 20 Pro + 5 Enterprise | N4.75M+ | ~$3,100 | Month 9-12 |

Note: $10K MRR target (per brief) requires ~150 customers at blended rate or 30 customers at higher price points + referral revenue. Conservative path: reach $3-5K MRR from subscriptions, supplement with solar referral fees.

### Founding Customer Offer

Per shared context: 50% off first 3 months for first 20 paying customers. N20K/month for Starter, N37.5K/month for Professional. Creates urgency and rewards early adopters who provide feedback and case studies.

---

## 10. Go-to-Market Strategy

### Phase 1: Validation & First 10 Customers (Weeks 1-6)

**Channel: Industrial Estate Direct Outreach**

Target locations (in order of priority):
1. **Lagos:** Ikeja Industrial Estate, Apapa Industrial Estate, Ogba Industrial Estate, Lekki Free Trade Zone
2. **Ogun:** Sagamu Industrial Estate, Ota Industrial Estate (accessible from Lagos)
3. **Rivers:** Trans-Amadi Industrial Layout, Port Harcourt (family network)

**Outreach method:**
- Family/network in Port Harcourt visits Trans-Amadi industrial layout with a tablet showing the free calculator
- LinkedIn outreach to facility managers and operations directors at manufacturing companies
- WhatsApp Business messages to industrial estate associations (MAN state chapters)
- Cold email to companies listed in MAN directory (public)

**Hook message:**
> "Do you know what your generator power actually costs per kWh? Most manufacturers are paying N500-900/kWh without realizing it — that's 3-4x the grid rate. We built a free calculator. Takes 2 minutes. No signup required."

**Conversion flow:**
Free calculator → "Shocking, right?" → Free trial of dashboard → Demonstrate value over 14 days → Convert to paid

**Target Nnewi/Aba manufacturing clusters (South-East)** — despite lowest business confidence (CI 18.7), they have HIGHEST manufacturing capacity (59.91%). These clusters specialize in auto parts, plastics, textiles. They are producing but not optimistic — GenTrack helps them optimize the costs they're already bearing.

### Phase 2: Content & Community (Weeks 4-10)

- Publish monthly "Nigerian Generator Cost Index" — aggregated, anonymized benchmark data
- LinkedIn articles: "What Nigerian manufacturers actually pay for power" (data-driven, cite MAN figures)
- Partner with MAN state chapters for webinars on energy cost management
- Case studies from first 5-10 customers (with permission): "How [Company] discovered they were paying N780/kWh and reduced it to N520/kWh"

### Phase 3: Channel Partnerships (Months 3-6)

- **Solar installers:** Offer GenTrack as a pre-sales tool. "Before we quote you, let's see what you're actually spending." Solar companies recommend GenTrack to prospects. GenTrack sends qualified leads back.
- **Generator dealers/service companies:** Co-brand GenTrack as a value-add. "Buy a Mikano generator, get 3 months of GenTrack free."
- **Diesel suppliers:** Partner with Oando, Ardova, or independent distributors. "Track your fuel costs with GenTrack."
- **Business associations:** MAN, LCCI, NACCIMA — offer member discounts.

### Phase 4: Product-Led Growth (Months 6+)

- Referral program: existing customer refers another business → both get 1 month free
- Freemium viral loop: free calculator results include "Powered by GenTrack" branding
- SEO: target "generator cost Nigeria," "diesel generator cost per kWh," "solar vs generator Nigeria"

---

## 11. Risks & Mitigations

### Risk 1: Low Data Entry Compliance

**Risk:** Users sign up but stop logging fuel/runtime data after 1-2 weeks. Dashboard becomes stale and useless.

**Likelihood:** HIGH — this is the existential risk for any manual-input product.

**Mitigations:**
- Make data entry as fast as possible (<30 seconds per entry)
- Weekly push notification: "Log this week's diesel purchase" with one-tap entry
- Show value immediately: even one data point generates a cost/kWh figure
- Gamification: "Data completeness score" — users see percentage of days with logged data
- Future: integrate with diesel delivery companies for automated purchase logging
- Future: IoT hour meter readers (low-cost Bluetooth devices) for automated runtime capture

### Risk 2: Buyer Discovery Difficulty

**Risk:** Facility managers are not easily reachable via digital channels. They don't hang out on LinkedIn or search for SaaS tools.

**Likelihood:** MEDIUM-HIGH

**Mitigations:**
- On-ground outreach via family network in Port Harcourt (industrial estates)
- Target the CFO/Finance Director on LinkedIn — they feel the pain and can push adoption down
- Partner with MAN state chapters for distribution (credibility + access)
- Free calculator as a zero-friction entry point (shareable via WhatsApp)
- Solar installer partnerships bring built-in demand from their customer base

### Risk 3: "Excel Is Good Enough"

**Risk:** Prospect says "I already track this in Excel" (even though they almost certainly don't calculate cost/kWh).

**Likelihood:** MEDIUM

**Mitigations:**
- Lead with the benchmark comparison — Excel cannot tell you how you compare to peers
- Lead with the solar ROI calculator — Excel does not model this
- Lead with alerts — Excel does not send maintenance reminders
- Offer data import from existing Excel sheets to reduce switching friction
- Free calculator demonstrates the value gap vs. raw Excel tracking

### Risk 4: Pricing Sensitivity

**Risk:** N40-75K/month feels expensive for SMEs already struggling with costs.

**Likelihood:** MEDIUM

**Mitigations:**
- Free calculator establishes value before any payment conversation
- 14-day trial, no credit card required
- Founding customer discount (50% off, 3 months)
- ROI framing: "If GenTrack helps you reduce generator costs by just 5%, that's N200K+ monthly savings vs. N40K subscription"
- Usage-based tier for smallest businesses (future: pay per generator per month)

### Risk 5: Benchmark Data Accuracy

**Risk:** Early on, there are not enough users to generate meaningful peer benchmarks. Seeded data from MAN reports may feel generic.

**Likelihood:** MEDIUM

**Mitigations:**
- Be transparent: label benchmarks as "Industry average (MAN 2024)" vs. "GenTrack peer data"
- Grid tariff comparison is always accurate and always compelling (every generator user pays more than grid)
- Prioritize same-customer historical trends over peer comparison in early months
- Incentivize data sharing: "Contribute anonymized data → unlock detailed benchmarks"

### Risk 6: Solar Installer Referral Model Fails

**Risk:** Solar installers do not pay meaningful referral fees, or the lead volume is too low to matter.

**Likelihood:** MEDIUM — this is upside, not core business.

**Mitigation:** Treat referral revenue as bonus, not dependency. Core business model is subscription SaaS. Solar ROI calculator serves retention (keeps users engaged) even if referral revenue is zero.

---

## 12. Build-or-Skip Scorecard

| Dimension | Rating | Weight | Weighted | Rationale |
|-----------|--------|--------|----------|-----------|
| **Build Speed** | 9/10 | 5% | 0.45 | CRUD app with calculations. No external API dependencies. No AI/ML required for MVP. Standard Next.js + Supabase. 2-3 weeks to functional MVP. |
| **Time to Revenue** | 7/10 | 15% | 1.05 | Free calculator can launch in week 1. Paid dashboard in week 3. First paying customers realistic in 30-45 days. Requires on-ground outreach which adds latency vs. pure digital acquisition. |
| **Market Size** | 10/10 | 15% | 1.50 | N22T ($14.3B) annual generator/fuel spend. 86% of companies own generators. The TAM is essentially "every Nigerian business with a generator" — which is nearly all of them. |
| **Competition** | 9/10 | 10% | 0.90 | No known direct competitor in Nigeria for SME generator cost tracking. Enterprise EMS (Schneider, Siemens) serves multinationals only. Some solar companies offer basic calculators but not ongoing tracking. Wide open. |
| **Skill Fit** | 6/10 | 15% | 0.90 | Data visualization and calculations — solid match for full-stack skills. No AI/ML needed (core strength underutilized). Straightforward CRUD + charting. Does not leverage the builder's deepest differentiator (AI systems). |
| **Capital Required** | 9/10 | 10% | 0.90 | Fully bootstrappable. Supabase free tier, Vercel free tier, zero API costs. Only costs: domain (~$12/yr) and Termii SMS credits for OTP (~$20-50/month). Well within $0-5K constraint. |
| **Buyer Clarity** | 6/10 | 20% | 1.20 | Facility managers are identifiable (industrial estates, MAN directory) but not digitally reachable at scale. Requires on-ground outreach or partner channels. Cannot cold-email 100 prospects from NYC on day one — need local presence or partnerships. Family in PH helps significantly. |
| **Fintech Upside** | 6/10 | 10% | 0.60 | Moderate upside path: diesel procurement marketplace (become the payment layer for fuel), solar financing referrals (earn % of solar loan origination), equipment leasing data (generator replacement financing). Not a natural fintech product, but energy spend data is financially valuable. |

### Composite Score: **7.50 / 10**

### Verdict: BUILD — Strong Tier 1 Candidate

**Strengths:** Massive, clearly quantified market with zero direct competition. Fast to build, cheap to operate, and the free calculator creates a natural viral loop. The product sells itself once a business owner sees their true cost/kWh for the first time.

**Weaknesses:** Buyer discovery requires on-ground presence or partnerships — this is not a product that sells via Google Ads to digitally-native buyers. Manual data entry is a retention risk. The builder's strongest skills (AI/ML) are underutilized.

**Recommendation:** Build GenTrack as a Tier 1 product alongside other higher-skill-fit products. Launch the free calculator in week 1 as a lead generation tool while the full dashboard is in development. Use family network in Port Harcourt for initial validation at Trans-Amadi Industrial Layout. If 10+ businesses complete the free calculator and express interest in ongoing tracking within the first 2 weeks, proceed to paid dashboard launch. If not, pivot outreach strategy before investing further.

---

*This PRD references shared infrastructure, tech stack, UX principles, and billing patterns defined in [00-shared-context.md](./00-shared-context.md).*
