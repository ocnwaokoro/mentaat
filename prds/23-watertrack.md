# PRD 23: WaterTrack — Borehole & Water Infrastructure Management

## 1. Executive Summary

WaterTrack is a utility management tool for Nigerian businesses that self-provision their water supply through boreholes, tanker deliveries, and water treatment systems. More than 95% of Nigerian businesses cannot rely on municipal water — they drill boreholes costing N150K-4M, schedule tanker deliveries at N10-50K per trip, and manage water treatment and storage infrastructure with zero visibility into total cost, consumption patterns, or maintenance schedules. This represents a "hidden billions" spending pool estimated at N100-500B annually, yet no software exists to help businesses track, optimize, or benchmark their water costs. WaterTrack lets facility managers log borehole maintenance events, schedule water quality testing, track tanker delivery costs and frequencies, monitor consumption by department or building, and benchmark their per-liter cost against peers in the same city and sector. The product is intentionally simple — closer to a maintenance scheduling and cost tracking tool than an enterprise resource planner. It can ship in 1-2 weeks as pure CRUD with analytics, requires zero third-party integrations, and prices at N20,000-40,000/month. However, the honest assessment is that WaterTrack faces a fundamental challenge: water cost tracking alone is unlikely to justify a standalone subscription for most businesses. The pain exists but is not acute enough to drive software purchasing behavior at scale. WaterTrack is more viable as a feature within GenTrack (which already tracks generator/energy infrastructure costs for the same buyer persona — the facility manager) than as a standalone product.

## 2. Market Opportunity

**Water is Nigeria's second-biggest infrastructure workaround after power.**

- **Self-provisioning is universal:** 95%+ of Nigerian businesses drill boreholes or purchase water from tanker trucks. Municipal water supply is functionally non-existent for most commercial properties. This is not a Lagos problem — it is nationwide.
- **Borehole investment:** A single borehole costs N150K-4M depending on depth, location, and water table conditions. Many businesses operate 2-5 boreholes across their facilities. These are capital assets with ongoing maintenance requirements (pump replacement, casing repair, water treatment chemical replenishment) but no systematic tracking.
- **Hidden billions:** Water infrastructure spending across Nigerian businesses is estimated at N100-500B annually. This includes borehole drilling, maintenance, tanker deliveries, water treatment, storage tanks, and pumping energy costs. The wide range reflects how poorly tracked this spending is — nobody aggregates it.
- **Tanker delivery market:** In cities with deep water tables or poor borehole yields (parts of Lagos Island, Abuja central, Lekki), businesses rely on tanker deliveries costing N10-50K per trip, with frequencies ranging from daily to weekly. A mid-size hotel or hospital can spend N200K-1M/month on tanker water alone.
- **Water quality risk:** Borehole water quality varies significantly and can deteriorate without warning. Heavy metals, coliform contamination, and salinity issues are common. Businesses that serve food or beverages, operate hospitals, or house workers must test water regularly — but most do not because there is no system to schedule and track testing.
- **Same buyer as GenTrack:** The facility manager or admin manager who manages generators is almost always the same person managing boreholes and water supply. This is the same decision-maker, same budget, same procurement cycle.
- **Energy-water nexus:** Boreholes require pumping energy. In businesses already spending heavily on diesel generators, the water pumping cost is buried inside the generator fuel cost. Separating water-related energy costs from general energy costs could reveal optimization opportunities.

**The wedge:** Absolutely nothing exists in this space. No Nigerian or international tool specifically addresses business water infrastructure management. Even facility management platforms (which are rare in Nigeria) treat water as an afterthought. The opportunity is completely uncontested.

**The challenge:** Uncontested markets can signal either untapped opportunity or insufficient willingness to pay. In this case, the concern is the latter — water tracking is a "nice to have" rather than a "must have" for most businesses. Unlike generator costs (which are massive, volatile, and directly impact production), water costs are relatively stable and predictable. There is less urgency to optimize.

## 3. Target Persona

**Primary: The Facility Manager at a Hotel, Hospital, or Food Processing Company**

- **Company profile:** Hotel (50-300 rooms), private hospital (50-500 beds), food/beverage manufacturer, or large office complex. 50-500 employees. Located in Lagos, Abuja, Port Harcourt, Kano, or Ibadan. Uses 2-5 boreholes and/or receives 2-10 tanker deliveries per week.
- **Water spend:** N100K-1M/month on combined water infrastructure (borehole maintenance, tanker deliveries, water treatment, pumping energy). This is a significant but not dominant line item — typically 2-5% of facility operating costs.
- **Title:** Facility Manager, Admin Manager, Maintenance Manager, or Estate Manager. In smaller businesses, the general manager or owner handles this.
- **Age:** 30-50. Tracks water costs in a notebook or basic spreadsheet. Has never used any software for facility management. May not consider water cost tracking a software-worthy problem.
- **Pain frequency:** Tanker deliveries are the most frequent pain — scheduling, verifying delivery volumes, disputing charges, and managing multiple tanker suppliers. Borehole maintenance creates acute pain when a pump fails and operations are disrupted.
- **Budget authority:** Can approve N20-50K/month for operational tools. Water infrastructure spending is part of the facility budget, which is typically managed without sophisticated tracking.
- **Decision trigger:** A borehole pump failure that shuts down water supply for 2-3 days because nobody tracked the maintenance schedule. Or a tanker supplier dispute where the facility manager cannot prove how many deliveries were received last month.

**Secondary: The Property Developer or Estate Manager**

- **Company profile:** Manages a residential or commercial estate with shared water infrastructure. Needs to allocate water costs across tenants, track shared borehole usage, and manage maintenance for the estate.
- **Unique pain:** Cost allocation across tenants and dispute resolution when tenants believe they are overpaying for water services.

**Priority sectors:** Hotels and hospitality (high water consumption, quality matters), hospitals (water quality is clinical safety issue), food/beverage manufacturers (water is a production input — quality and cost directly impact product). Avoid general office buildings (water costs too low to justify software).

## 4. Problem Deep Dive

**The current workflow, step by step:**

**Step 1: Borehole Operations**
The business operates 1-5 boreholes across its property. Each borehole has a submersible pump, storage tank, and (sometimes) a treatment system (chlorination, filtration, reverse osmosis). The facility manager knows roughly when each borehole was drilled but may not have records of the last pump servicing, the water quality test results, or the borehole's yield over time. Boreholes are operated on a "run until failure" basis rather than a preventive maintenance schedule.

**Step 2: Tanker Deliveries**
When borehole output is insufficient (dry season, pump failure, increased demand), the facility manager calls tanker suppliers. Deliveries arrive in 5,000-33,000 liter trucks. The delivered volume is often disputed — the truck may claim 33,000 liters but deliver 25,000. There is no metering at delivery point in most cases. The facility manager relies on visual inspection of storage tank levels. Tanker suppliers are paid in cash or via bank transfer. Receipts are inconsistent — a handwritten note, a WhatsApp message, or nothing at all.

**Step 3: Cost Tracking (Barely)**
The facility manager records tanker payments in a notebook or Excel sheet. Borehole maintenance costs (pump repairs, chemical purchases, technician visits) are recorded sporadically. The total monthly water cost is a number the facility manager roughly knows but cannot precisely document. Year-over-year trends, seasonal patterns, and per-liter costs are not calculated.

**Step 4: Water Quality (Ignored)**
Borehole water should be tested quarterly for bacteria, heavy metals, pH, turbidity, and total dissolved solids. Most businesses test once (when the borehole is drilled) and never again — unless someone gets sick or a regulator visits. Hotels and hospitals have stronger incentives to test but still lack systematic scheduling. When a test is done, results are filed as a paper document and forgotten.

**Step 5: Consumption (Unknown)**
Most businesses do not meter water consumption by department, building, or floor. Total consumption is estimated from tank fill rates. When management asks "how much water do we use?" the answer is a guess. When a new building is added or occupancy increases, there is no data to plan for increased water demand.

**Step 6: What Goes Wrong**

- **Pump failure without warning:** A borehole pump that should have been serviced at 18 months fails at 24 months. Emergency replacement costs 2-3x scheduled maintenance. Operations are disrupted for 2-5 days.
- **Tanker fraud:** Suppliers overcharge, underdeliver, or invoice for phantom deliveries. Without systematic records, the facility manager cannot dispute effectively.
- **Water quality incidents:** Contaminated water reaches users because testing was not scheduled or results were lost. In a hospital, this is a patient safety issue. In a hotel, it is a reputation issue.
- **Budget overruns:** Water costs increase 30-50% in dry season but the facility budget does not account for seasonal variation because historical data is not analyzed.
- **Wasted spending:** Businesses continue buying tanker water at high cost for areas that could be served by a new borehole. The cost-benefit analysis of drilling an additional borehole versus continuing tanker deliveries is never done because the data does not exist.

## 5. Solution Overview

WaterTrack is a web-based tool that gives facility managers complete visibility into their water infrastructure costs, maintenance schedules, quality compliance, and consumption patterns. The system operates in four modules:

**1. Asset Registry**
Register each water infrastructure asset: boreholes (location, depth, drilling date, pump type, storage tank capacity), tanker suppliers (name, contact, price per load, truck size), treatment systems (type, last service date, chemical inventory). Each asset has a maintenance schedule with automated reminders.

**2. Cost Tracking**
Log every water-related expense: tanker deliveries (supplier, volume, cost, date), borehole maintenance (type of work, cost, technician), treatment chemicals, pump energy costs, water quality tests. The system calculates total monthly water cost, cost per liter (estimated from tank volumes and delivery records), and trend analysis over time.

**3. Quality Management**
Schedule water quality tests for each borehole. Record test results (bacteria, pH, TDS, heavy metals) with pass/fail against WHO/SON (Standards Organisation of Nigeria) thresholds. Alert when a test is overdue or when results exceed safe limits. Maintain a quality compliance history for regulatory inspections.

**4. Analytics & Benchmarking**
Dashboard showing: total monthly water cost, cost per liter trend, seasonal consumption patterns, tanker vs. borehole cost breakdown, and (with enough users) anonymized benchmarking against peers in the same city and sector. Monthly cost-saving recommendations: "You spent N380K on tanker water last month. A new borehole at an estimated cost of N2.5M would pay for itself in 7 months."

## 6. MVP Feature Set (MoSCoW)

### MUST Have — Week 1-2

These features define the minimum product that delivers value on day one.

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Asset registry | Register boreholes, tanks, pumps, treatment systems, tanker suppliers | Form-based entry; fields for location, capacity, installation date, status |
| Tanker delivery logging | Record each tanker delivery with date, supplier, volume, cost | Quick-entry form; auto-calculate cost per liter; running monthly total |
| Maintenance scheduling | Set recurring maintenance dates for each asset | Calendar view; configurable intervals (weekly, monthly, quarterly, annual); SMS/WhatsApp reminder |
| Maintenance event logging | Record completed maintenance with cost, technician, description | Link to asset; attach photo of receipt; running maintenance cost per asset |
| Monthly cost dashboard | Total water cost, breakdown by category (tanker, maintenance, treatment, energy) | Auto-calculated from logged entries; month-over-month comparison; naira amounts prominent |
| Cost trend chart | 6-12 month chart of total water spending | Line chart with seasonal overlay; exportable |
| Excel export | Export all data to formatted Excel | One-click export on every screen; formatted headers, naira formatting |
| User authentication | Email + password login with organization accounts | Supabase Auth; invite team members; organization-level data isolation |

### SHOULD Have — Week 3-4

These features significantly enhance value but are not required for first customer delivery.

| Feature | Description |
|---------|-------------|
| Water quality test tracking | Schedule tests, record results, flag exceedances against WHO/SON limits |
| WhatsApp maintenance reminders | Push maintenance due alerts via WhatsApp |
| Supplier performance tracking | Track delivery reliability, pricing history, and disputes per tanker supplier |
| Borehole vs. tanker cost analysis | Calculate cost-per-liter comparison between borehole and tanker water |
| New borehole ROI calculator | Given tanker spending, estimate payback period for drilling a new borehole |
| Photo documentation | Attach photos to maintenance events, deliveries, and inspections |

### COULD Have — Month 2

| Feature | Description |
|---------|-------------|
| Peer benchmarking | Compare water costs against anonymized peers in same city/sector |
| Consumption estimation | Estimate consumption from tank fill rates and delivery volumes |
| Department allocation | Allocate water costs across departments or buildings based on estimated usage |
| GenTrack integration | Pull energy cost data to calculate water pumping costs separately from general power |
| Regulatory compliance report | Generate SON-compliant water quality report for inspection purposes |
| Multi-site management | Manage water infrastructure across multiple business locations from one account |

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| IoT sensor integration | Requires hardware; not a software-only play |
| Smart metering | Capital-intensive hardware deployment; different business model |
| Water billing / invoicing | Not a billing platform; focus on cost tracking and optimization |
| Municipal water connection management | Municipal water is unreliable and irrelevant for most commercial users |
| Borehole drilling services marketplace | Marketplace is a different product with different go-to-market |

## 7. Key Screens & UX

### Design Principles

- **Logbook simplicity:** WaterTrack should feel like a digital version of the notebook the facility manager already uses. Quick data entry, minimal fields, no complexity.
- **WhatsApp-simple:** Single-action screens. Log a delivery in 4 taps. Schedule a maintenance event in 3 taps. The facility manager is often entering data from the field (next to a borehole, during a tanker delivery).
- **Numbers forward:** Total monthly water cost, cost per liter, and maintenance budget remaining are visible on every screen. The facility manager should always know "how much am I spending on water?"
- **Mobile-first:** Facility managers are rarely at a desk. The interface must work perfectly on a phone screen. Large touch targets, minimal scrolling, landscape-friendly for charts.

### Screen 1: Dashboard

The landing screen after login. Three KPI cards across the top:

- **Total Water Cost This Month:** Sum of all tanker deliveries, maintenance events, and treatment costs. Large font, bold, blue. Example: "N487,000"
- **Tanker Deliveries This Month:** Count and total volume. Example: "8 deliveries / 184,000 liters"
- **Maintenance Due:** Count of overdue or upcoming maintenance events (next 7 days). Orange badge if overdue. Example: "2 overdue / 1 upcoming"

Below the KPIs:
- Bar chart: Monthly water cost (trailing 6 months) broken down by category (tanker, maintenance, treatment)
- Quick action buttons: "Log Delivery," "Log Maintenance," "Schedule Test"
- Table: Upcoming maintenance and testing events for the next 30 days

### Screen 2: Asset Registry

List view of all water infrastructure assets. Each card shows:
- Asset type icon (borehole, tank, pump, treatment system)
- Name/label (e.g., "Borehole 1 — Main Building," "Overhead Tank — Block B")
- Status: Active (green), Maintenance Due (yellow), Offline (red)
- Last maintenance date and next scheduled date
- Total lifetime cost (maintenance + repairs)

Click any asset to see its full history: installation details, all maintenance events, cost history, and water quality test results (for boreholes).

"Add Asset" button opens a form with fields appropriate to the asset type.

### Screen 3: Delivery Log

Full-width table with columns: Date, Supplier, Volume (liters), Cost (N), Cost/Liter, Borehole/Source, Delivery Note, Actions.

**Functionality:**
- Search and filter by date range, supplier, cost range
- Sort by any column
- Running totals at the bottom: total volume, total cost, average cost per liter
- "Log Delivery" button opens a quick-entry form: supplier (dropdown from registered suppliers), volume, cost, date, optional note/photo
- Supplier comparison view: side-by-side cost per liter across all suppliers

### Screen 4: Maintenance Calendar

Calendar view (month/week) showing:
- Scheduled maintenance events (blue)
- Overdue maintenance events (red, pulsing)
- Completed maintenance events (green checkmark)
- Water quality test due dates (purple)

Click any event to view details or log completion. "Schedule Maintenance" button opens a form to set recurring or one-time maintenance tasks.

### Screen 5: Cost Analytics

Full analytics view with:
- Line chart: Total monthly water cost (12-month trailing)
- Stacked bar: Cost breakdown by category (tanker, borehole maintenance, treatment, energy)
- Pie chart: Cost distribution across suppliers
- Table: Cost per liter by month (showing seasonal variation)
- Comparison card: "You spend N[X]/liter on tanker water vs. N[Y]/liter from boreholes. Estimated annual savings from one additional borehole: N[Z]."
- Export: One-click Excel export of the full cost analysis

## 8. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router, Server Components) | Fast initial load, React ecosystem |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development, mobile-responsive out of the box |
| Backend | Next.js API Routes + Server Actions | Single deployment, no separate backend |
| Database | Supabase PostgreSQL | Managed Postgres, built-in auth, realtime, generous free tier |
| Auth | Supabase Auth | Email/password, magic link, organization-level RLS |
| File Storage | Supabase Storage | Maintenance photos, delivery receipts |
| Messaging | Termii (SMS) + WhatsApp Business API | Maintenance reminders, overdue alerts |
| Excel Export | xlsx (SheetJS) library | Formatted Excel exports |
| Charts | Recharts | Cost trends, category breakdowns, calendar views |
| Hosting | Vercel (frontend) + Supabase (backend) | Free tiers sufficient for MVP |
| Monitoring | Sentry (errors) + Vercel Analytics | Production debugging |

### Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  sector text,
  city text,
  state text,
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

-- Water Assets (boreholes, tanks, pumps, treatment systems)
water_assets (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  asset_type text CHECK (asset_type IN ('borehole', 'storage_tank', 'pump', 'treatment_system', 'other')),
  name text NOT NULL,  -- e.g., "Borehole 1 - Main Building"
  location_description text,
  installation_date date,
  -- Borehole-specific
  depth_meters decimal(8,2),
  yield_liters_per_hour decimal(10,2),
  -- Tank-specific
  capacity_liters decimal(12,2),
  -- Pump-specific
  pump_type text,
  power_rating_kw decimal(8,2),
  -- Treatment-specific
  treatment_type text,  -- 'chlorination', 'filtration', 'reverse_osmosis', 'uv', 'other'
  --
  status text CHECK (status IN ('active', 'maintenance', 'offline', 'decommissioned')) DEFAULT 'active',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
)

-- Tanker Suppliers
tanker_suppliers (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  name text NOT NULL,
  phone text,
  whatsapp text,
  truck_capacity_liters decimal(10,2),
  price_per_load decimal(12,2),
  price_per_liter decimal(8,4),
  rating integer CHECK (rating BETWEEN 1 AND 5),
  notes text,
  created_at timestamptz DEFAULT now()
)

-- Tanker Deliveries
tanker_deliveries (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  supplier_id uuid REFERENCES tanker_suppliers,
  delivery_date date NOT NULL,
  volume_liters decimal(10,2) NOT NULL,
  cost decimal(12,2) NOT NULL,
  currency text DEFAULT 'NGN',
  cost_per_liter decimal(8,4),  -- auto-calculated
  storage_tank_id uuid REFERENCES water_assets,
  receipt_photo text,  -- storage reference
  notes text,
  logged_by uuid REFERENCES users,
  created_at timestamptz DEFAULT now()
)

-- Maintenance Events
maintenance_events (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  asset_id uuid REFERENCES water_assets,
  event_type text CHECK (event_type IN (
    'pump_service', 'pump_replacement', 'tank_cleaning', 'pipe_repair',
    'treatment_chemical', 'filter_replacement', 'electrical_repair',
    'borehole_flushing', 'general_inspection', 'other'
  )),
  description text,
  cost decimal(12,2),
  currency text DEFAULT 'NGN',
  technician_name text,
  technician_phone text,
  event_date date NOT NULL,
  photos text[],  -- array of storage references
  logged_by uuid REFERENCES users,
  created_at timestamptz DEFAULT now()
)

-- Maintenance Schedules (recurring)
maintenance_schedules (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  asset_id uuid REFERENCES water_assets,
  event_type text NOT NULL,
  interval_days integer NOT NULL,  -- e.g., 90 for quarterly
  last_completed date,
  next_due date NOT NULL,
  reminder_days_before integer DEFAULT 7,
  reminder_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
)

-- Water Quality Tests
water_quality_tests (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  asset_id uuid REFERENCES water_assets,  -- which borehole
  test_date date NOT NULL,
  lab_name text,
  ph decimal(4,2),
  tds_ppm decimal(8,2),  -- total dissolved solids
  turbidity_ntu decimal(8,2),
  coliform_cfu decimal(8,2),  -- bacteria count
  iron_mg_l decimal(8,4),
  lead_mg_l decimal(8,6),
  arsenic_mg_l decimal(8,6),
  fluoride_mg_l decimal(8,4),
  overall_status text CHECK (overall_status IN ('pass', 'fail', 'marginal')),
  report_file text,  -- storage reference to lab report
  notes text,
  logged_by uuid REFERENCES users,
  created_at timestamptz DEFAULT now()
)
```

### Offline Architecture

```
Online Flow:
  User action → Optimistic UI update → API call → Supabase

Offline Flow:
  User action → Optimistic UI update → Queue in IndexedDB →
  [When online] → Sync queue to Supabase

Cached locally (IndexedDB):
  - Asset registry
  - Tanker supplier list
  - Recent deliveries and maintenance events (last 3 months)
  - Maintenance schedule with due dates

Not cached (requires network):
  - Photo uploads
  - Analytics calculations (server-side aggregation)
  - WhatsApp/SMS reminders
  - New user authentication

Offline is especially important for WaterTrack because
facility managers often log data at the borehole or
during a delivery — locations with poor connectivity.
```

## 9. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **Basic** | N20,000/month (~$13) | Up to 5 assets, tanker delivery logging, maintenance scheduling, cost dashboard, 2 users, Excel export |
| **Pro** | N40,000/month (~$26) | Unlimited assets, all Basic features plus water quality tracking, supplier performance analytics, cost benchmarking, WhatsApp reminders, 5 users |
| **Founding Customer** | N10,000/month (~$7) | Pro plan features, locked for 12 months, limited to first 10 customers |

### As GenTrack Add-On (Recommended Path)

| Add-on | Price | Includes |
|--------|-------|---------|
| **Water Module** | +N15,000/month (~$10) | Added to GenTrack subscription; all WaterTrack features integrated into the GenTrack dashboard |

This pricing is more realistic — a facility manager already paying N50-100K/month for GenTrack (generator tracking) is far more likely to add N15K for water tracking than to purchase a separate N20-40K subscription for water alone.

### Trial & Onboarding

- 14-day free trial, no credit card required
- Self-serve onboarding — add your first borehole and log your first tanker delivery in under 5 minutes
- No onboarding call needed (product is simple enough for self-service)
- Trial-to-paid conversion target: 20-25% (lower than workflow tools due to "nice-to-have" perception)

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~$30 | Vercel free tier + Supabase free tier + Termii SMS (~$5/month) |
| Cost per customer | ~$2/month | At 15 customers |
| CAC | $10-30 | Same channels as GenTrack (facility manager outreach) |
| Monthly churn estimate | 8-12% | Higher churn than critical workflow tools — water tracking is easier to deprioritize |
| Average retention | 8 months | Lower stickiness than financial tools |
| LTV (Basic) | N160,000 (~$104) | N20K x 8 months |
| LTV (Pro) | N320,000 (~$208) | N40K x 8 months |
| LTV:CAC ratio | 3:1 - 10:1 | Acceptable but thin at the lower end |

### Revenue Targets

| Milestone | Timeline | Customers | MRR (NGN) | MRR (USD) |
|-----------|----------|-----------|-----------|-----------|
| First paying customer | Week 4 | 1 | N10,000 | ~$7 |
| Break-even | Month 2 | 5 | N100,000 | ~$65 |
| Target | Month 3 | 15 | N300,000 | ~$195 |
| Stretch | Month 6 | 30 | N750,000 | ~$488 |

Revenue potential is limited by low price point and smaller addressable market. At 30 customers paying an average of N25K/month, WaterTrack generates N750K/month — meaningful but not transformative. The GenTrack add-on path is more attractive: 30 GenTrack customers adding the water module at N15K = N450K/month incremental revenue with zero incremental CAC.

## 10. Go-to-Market: First 10 Customers

### Channel 1: GenTrack Cross-Sell (Primary)

If GenTrack is already built and has paying customers, WaterTrack's fastest path to market is as a GenTrack add-on. Email or WhatsApp every GenTrack customer: "We added water infrastructure tracking — boreholes, tanker deliveries, maintenance scheduling. Same dashboard you already use. N15K/month add-on. Try it free for 14 days."

**Target:** 10 GenTrack customers approached → 6 activate trial → 4 convert.

### Channel 2: Hotel & Hospitality Managers

Hotels are high-water-consumption businesses with professional facility management. Search for:
- Title: "Facility Manager" OR "Maintenance Manager" OR "Operations Manager"
- Industry: Hospitality, Hotels
- Location: Lagos, Abuja, Port Harcourt

**Outreach:** "How much does your hotel spend on water each month? Most hotel facility managers we talk to say they don't know the exact number. WaterTrack gives you that visibility — track tanker deliveries, borehole maintenance, and water quality in one place."

**Target:** 30 outreach messages → 10 conversations → 5 demos → 2-3 customers.

### Channel 3: Hospital Administrators

Hospitals have strict water quality requirements and high consumption. Same outreach as hotels, targeting hospital admin/facility managers.

**Target:** 20 outreach messages → 6 conversations → 3 demos → 1-2 customers.

### Channel 4: Food & Beverage Manufacturers

Water is a production input for food/beverage manufacturers. Quality matters for regulatory compliance (NAFDAC). Facility managers at food companies are motivated by both cost tracking and quality compliance documentation.

**Target:** 15 outreach messages → 5 conversations → 3 demos → 1-2 customers.

### Channel 5: Property & Estate Managers

Companies managing commercial or residential estates with shared water infrastructure need cost allocation and maintenance tracking across multiple tenants.

**Target:** 10 outreach messages → 4 conversations → 2 demos → 1 customer.

### Channel 6: Family Network in Port Harcourt

Ask family for introductions to hotel managers, hospital admins, or facility managers in Rivers State.

**Target:** 5 warm introductions → 3 demos → 1-2 customers.

### Channel Summary

| Channel | Outreach Volume | Expected Demos | Expected Customers |
|---------|----------------|----------------|-------------------|
| GenTrack cross-sell | 10 | 6 | 4 |
| Hotel facility managers | 30 | 5 | 2-3 |
| Hospital administrators | 20 | 3 | 1-2 |
| Food/beverage manufacturers | 15 | 3 | 1-2 |
| Property/estate managers | 10 | 2 | 1 |
| Family network | 5 | 3 | 1-2 |
| **Total** | **90** | **22** | **10-14** |

## 11. Risks & Mitigations

### Risk 1: Insufficient Willingness to Pay for Water Tracking

**Likelihood:** High. Water costs are a known but accepted business expense. Unlike generator costs (which are massive and volatile), water costs are relatively stable and predictable. Businesses may not see enough value in tracking water costs to justify a monthly subscription.

**Impact:** Low conversion rates, high churn, inability to reach meaningful revenue.

**Mitigations:**
- Price extremely low (N20K/month) to reduce the decision threshold. At $13/month, the bar for perceived value is low.
- Lead with the tanker fraud angle: "Are your tanker suppliers delivering the full volume you're paying for? WaterTrack helps you verify." This is a more immediate pain point than general cost tracking.
- Lead with the maintenance failure angle: "When was your borehole pump last serviced? If it fails, you're offline for 3-5 days. WaterTrack prevents that."
- If standalone fails to gain traction within 60 days, pivot to GenTrack add-on exclusively.

### Risk 2: Better as a GenTrack Feature Than a Standalone Product

**Likelihood:** Very High. The same buyer (facility manager) is already the target for GenTrack. Water infrastructure management is conceptually similar to generator management — asset tracking, maintenance scheduling, cost logging. Splitting this into a separate product creates two subscriptions, two logins, and two onboarding processes for the same person.

**Impact:** Market confusion, lower adoption than if bundled, inefficient go-to-market.

**Mitigations:**
- Build WaterTrack as a modular codebase that can exist standalone OR as a GenTrack module.
- If GenTrack exists: launch WaterTrack as a GenTrack add-on from day one. Do not launch standalone.
- If GenTrack does not exist yet: build WaterTrack standalone but design the database and UI to be merge-compatible with GenTrack when it ships.
- Track metrics separately: if the water module drives GenTrack upgrades, it is creating value even if it does not generate standalone revenue.

### Risk 3: Data Entry Burden

**Likelihood:** Medium-High. WaterTrack requires manual logging of every tanker delivery, every maintenance event, and every water quality test. Facility managers are busy and may not consistently log data.

**Impact:** Incomplete data leads to inaccurate analytics and reduced perceived value. The tool becomes "another thing I have to update" rather than a useful dashboard.

**Mitigations:**
- Make data entry as fast as possible: 4 taps to log a delivery (supplier, volume, cost, save). Pre-fill supplier and volume from last delivery.
- WhatsApp-based logging (future): forward a tanker delivery receipt photo to a WhatsApp number and the system logs it automatically using OCR.
- Weekly reminder: "You haven't logged any deliveries this week. Tap here to catch up." Gentle nudge without nagging.
- Value accrues over time: the cost analytics and trends become more valuable with each month of data. Reinforce this during onboarding.

### Risk 4: Water Quality Data Complexity

**Likelihood:** Medium. Water quality test results contain multiple parameters (pH, TDS, coliform, heavy metals) that require understanding to interpret. Facility managers may not know what the numbers mean.

**Impact:** Water quality tracking becomes an unused feature because users cannot interpret results.

**Mitigations:**
- Simple pass/fail display against SON/WHO standards. Green = safe, red = unsafe, yellow = marginal. No requirement for the user to understand chemistry.
- Plain-language explanations: "pH 6.2 — slightly acidic but within safe range" or "Coliform 15 CFU/100ml — EXCEEDS safe limit. Contact water treatment specialist."
- Pre-built remediation suggestions for common issues (e.g., high coliform = chlorination needed, high TDS = RO filtration recommended).

### Risk 5: Low Revenue Ceiling

**Likelihood:** High. At N20-40K/month, WaterTrack needs many customers to generate meaningful revenue. The addressable market (businesses with significant water infrastructure spending that would pay for tracking software) is smaller than other products in the portfolio.

**Impact:** WaterTrack generates revenue but never reaches a scale that justifies ongoing development and support as a standalone product.

**Mitigations:**
- Accept that WaterTrack is a portfolio product, not a flagship product. Its value is in expanding the GenTrack value proposition, not in standalone revenue.
- Use WaterTrack data to identify upsell opportunities: businesses spending heavily on tanker water could be referred to borehole drilling companies (referral fee) or water treatment providers (partnership).
- Aggregate water cost data across customers to create industry benchmark reports (monetizable as content or consulting).

## 12. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 8 | 0.40 | Pure CRUD application with basic analytics. No external API integrations required. Simple database schema. Functional MVP in 1-2 weeks. This is one of the easiest products in the portfolio to build. |
| Time to Revenue | 15% | 5 | 0.75 | Easy to build does not mean easy to sell. Facility managers need convincing that water tracking is worth a monthly subscription. The pain is real but not urgent enough to drive fast purchasing decisions. 6-8 weeks to first paying customer as standalone; 2-3 weeks as GenTrack add-on. |
| Market Size | 15% | 4 | 0.60 | The N100-500B water infrastructure market is large in aggregate, but the addressable market for tracking software is a small slice. At N30K/month average, even 1,000 customers = N360M/year. Realistic early market is hundreds of customers, not thousands. Limited by low willingness to pay for water tracking alone. |
| Competition | 10% | 9 | 0.90 | Nothing exists. No Nigerian or international tool specifically addresses business water infrastructure management. Completely uncontested. However, uncontested may signal insufficient market demand rather than untapped opportunity. |
| Skill Fit | 15% | 4 | 0.60 | Basic CRUD and analytics. No AI/ML component. No complex algorithms. This underutilizes the builder's AI/data science capabilities. Any competent full-stack developer could build this. It does not leverage the builder's competitive advantage. |
| Capital Required | 10% | 10 | 1.00 | Absolute minimum cost. No third-party APIs, no data sources, no partnerships. Pure software on free tiers. Under $100 total cost to launch. |
| Buyer Clarity | 20% | 5 | 1.00 | Facility managers are findable but the value proposition is weaker than for financial tools. "Track your water costs" does not create the same urgency as "track who owes you money" or "avoid tax penalties." The buyer exists but may not prioritize this purchase. |
| Fintech Upside | 10% | 2 | 0.20 | Virtually no financial services angle. Water infrastructure data does not naturally lead to lending, payments, or insurance products. The only remote connection is equipment financing for borehole drilling, which is a stretch. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.40 |
| Time to Revenue (15%) | 0.75 |
| Market Size (15%) | 0.60 |
| Competition (10%) | 0.90 |
| Skill Fit (15%) | 0.60 |
| Capital Required (10%) | 1.00 |
| Buyer Clarity (20%) | 1.00 |
| Fintech Upside (10%) | 0.20 |
| **TOTAL** | **5.45 / 10** |

### Verdict: SKIP AS STANDALONE — BUILD AS GENTRACK MODULE

A 5.45 composite score is the lowest in the portfolio and firmly in "skip" territory as a standalone product. While the product is cheap and easy to build (Capital Required: 10, Build Speed: 8), it fails on the dimensions that matter most: Buyer Clarity (5, weighted 20%), Time to Revenue (5, weighted 15%), Market Size (4, weighted 15%), and Skill Fit (4, weighted 15%). The fintech upside (2) effectively eliminates the platform play that makes other products in the portfolio exciting.

**Key decision factors:**
- WaterTrack does not warrant a standalone product, standalone subscription, or standalone go-to-market effort.
- The same functionality is 3-5x more valuable as a module inside GenTrack, where it deepens the relationship with an existing buyer (facility manager), increases GenTrack's ARPU by N15K/month, and requires zero incremental customer acquisition cost.
- Building WaterTrack standalone would consume 1-2 weeks of development time that is better spent on higher-scoring products.
- The builder's AI/data science skills are completely underutilized by a basic CRUD tracking tool.

**Go condition:** Do not build standalone. When GenTrack reaches 10+ paying customers, add a "Water Infrastructure" module as a SHOULD Have feature in GenTrack's roadmap. Allocate 3-5 days of development. Price as a N15K/month add-on. Validate with existing GenTrack customers before investing further.
