# PRD 22: JapaShield — Brain Drain Risk Assessment & Retention Tool

## 1. Executive Summary

JapaShield is an HR intelligence platform that helps Nigerian employers identify, quantify, and prevent employee emigration ("japa") before it happens. Nigeria is hemorrhaging its most skilled workers at an unprecedented rate — 3.68 million people emigrated in just two years, including 15,000 doctors, 42,000 nurses, and 5,000+ university lecturers annually. The University of Lagos lost 60% of its academic staff. The doctor-to-patient ratio has collapsed to 1:9,083, nearly double the WHO's already-modest benchmark of 1:6,000. Employers know this is happening but have no systematic way to assess which employees are at risk, what it would cost to retain them versus replace them, or what interventions actually work. JapaShield fills this gap. An HR director uploads their employee roster with basic data — role, tenure, salary, age, skill category — and the platform scores each employee's flight risk using a predictive model trained on emigration patterns, salary benchmarking against international offers, and sector-specific attrition data. For each high-risk employee, JapaShield generates a retention cost-benefit analysis: the cost of a competitive retention package (salary adjustment, benefits enhancement, career development investment) versus the cost of replacement (recruitment, training, lost productivity, institutional knowledge loss — typically 6-12 months of salary). The platform recommends specific interventions ranked by cost-effectiveness and tracks whether implemented interventions reduce attrition. The MVP ships in 3-4 weeks, targets HR departments at hospitals, universities, and tech companies with 50-500 employees, and prices at N75,000-150,000/month — a fraction of the cost of losing even one senior employee.

## 2. Market Opportunity

**The brain drain is not a slow leak. It is a rupture.**

- **Scale of emigration:** 3.68 million Nigerians emigrated in just two years. This is not a marginal trend — it represents a structural workforce collapse across critical sectors.
- **Intent to leave:** 69% of Nigerians aged 18-35 are willing to relocate abroad. This is not aspiration in the abstract; the infrastructure to emigrate (recruitment agencies, visa pathways, diaspora networks) is now industrialized.
- **Healthcare crisis:** 15,000 doctors emigrated in 2024-2025. 42,000 nurses left. The doctor-patient ratio of 1:9,083 means the healthcare system is approaching a point where retaining any doctor is an existential question for a hospital.
- **Academic collapse:** The University of Lagos lost 60% of its staff. 5,000+ lecturers leave Nigeria annually. Universities are losing their ability to train the next generation, creating a compounding talent deficit.
- **Economic cost:** $11 billion in annual losses from digital skills gaps alone. The total economic cost including healthcare, education, engineering, and professional services is multiples higher.
- **Salary arbitrage:** Nigerian professionals face a 3-7x salary gap compared to international offers. A doctor earning N3-5M/year ($2,000-3,300) can earn N10-20M ($6,500-13,000) in the UK or UAE. A software engineer earning N5-8M ($3,200-5,200) can earn N15-30M ($10,000-20,000) remotely for an international firm.
- **Replacement cost:** Replacing a senior employee in Nigeria costs 6-12 months of their salary when accounting for recruitment, onboarding, training, productivity ramp-up, and institutional knowledge loss. For a senior doctor, that is N1.5-5M. For a university professor, N2-6M. For a tech lead, N3-10M.
- **Expand without hiring context:** The CBN business expansion-employment gap (expansion index 54-81 vs. employment 8-40) is partly driven by emigration fear — businesses are reluctant to invest in staff development when 69% of young employees may leave. JapaShield addresses this directly by making retention investments data-driven.

**The wedge:** No tool exists that quantifies japa risk at the employee level. HR departments rely on gut feeling and exit interviews (which happen too late). International HR analytics platforms (Visier, Workday) do not model emigration as a risk factor and are priced for Fortune 500 companies. JapaShield is the first purpose-built tool for the Nigerian brain drain problem.

## 3. Target Persona

**Primary: The HR Director at a Private Hospital or University**

- **Organization profile:** Private hospital (100-1,000 beds), federal/state university, or private university. 200-2,000 employees. Annual payroll of N500M-5B ($325K-3.25M). Located in Lagos, Abuja, Port Harcourt, Ibadan, or Enugu.
- **Current crisis:** Has lost 5-20 senior staff to emigration in the past 12 months. Each departure triggers a cascade: remaining staff absorb workload, morale drops, more people start exploring opportunities abroad.
- **Title:** HR Director, Director of Medical Services, Dean of Faculty, or Head of People Operations. In smaller organizations, the MD or Provost handles retention personally.
- **Age:** 35-55. Uses basic HR software (or Excel) for payroll and leave tracking. Has never used a predictive analytics tool. Comfortable with dashboards but not data science.
- **Pain frequency:** Resignation letters arrive weekly. The HR director spends significant time in reactive mode — counter-offering after someone has already accepted an international offer (too late, 80%+ still leave).
- **Budget authority:** Can approve N100-300K/month for HR tools. Larger investments require board or management approval but are justifiable against replacement costs.
- **Decision trigger:** The moment a critical specialist (a consultant surgeon, a department head, a lead researcher) submits their resignation and the organization realizes it has no succession plan and no data on who might be next.

**Secondary: The VP of People at a Nigerian Tech Company**

- **Organization profile:** Tech company or fintech with 50-500 employees. Engineering-heavy workforce where every developer is a recruitment target for international remote work.
- **Current situation:** Competes with international remote salaries. Has lost engineers to Andela, international remote roles, or direct emigration. Spends N5-15M per senior engineering hire in recruitment and onboarding.
- **Unique pain:** Tech workers can "japa" without physically leaving — they quietly take remote international jobs while still nominally employed, or they moonlight internationally before fully transitioning. The risk signals are subtler.

**Priority sectors:** Healthcare (highest urgency, measurable crisis), academia (institutional collapse), tech companies (highest per-employee replacement cost). Avoid manufacturing (lower-skilled roles where emigration risk is lower and replacement is easier).

## 4. Problem Deep Dive

**The current workflow, step by step:**

**Step 1: Denial Phase**
Most organizations do not proactively track emigration risk. HR departments monitor general attrition rates but do not distinguish between domestic job changes and international emigration. The organization knows people are leaving for abroad but treats each departure as an isolated event rather than a systemic pattern. There is no early warning system.

**Step 2: The Resignation Surprise**
A critical employee — a consultant cardiologist who has been with the hospital for 8 years, or a professor who leads three research programs — submits a resignation letter. They have already accepted an offer abroad. They are giving the standard 1-3 months notice. The HR director scrambles.

**Step 3: The Reactive Counter-Offer**
HR attempts a counter-offer. But they have no data on what competitive retention would look like. They guess at a salary increase (typically 20-30%) without knowing that the international offer represents a 3-7x salary gap. The counter-offer fails 80%+ of the time because it is too little, too late, and does not address non-salary factors (career development, work environment, family considerations, political stability concerns).

**Step 4: The Replacement Scramble**
With 1-3 months notice, the organization must find a replacement. For specialized roles (cardiologist, structural engineering professor, senior software architect), the domestic talent pool is already depleted by previous emigration waves. Recruitment takes 3-9 months. During the gap, remaining staff absorb the workload, quality suffers, and the risk of cascade departures increases.

**Step 5: The Hidden Costs**
What organizations fail to calculate:

- **Direct recruitment cost:** Agency fees (15-25% of annual salary for specialized roles), advertising, interview time, relocation support for replacement hires.
- **Training and onboarding:** 3-6 months for the replacement to reach full productivity. In healthcare, credentialing alone can take months.
- **Institutional knowledge loss:** The departing employee takes relationships, process knowledge, research continuity, and mentorship capacity that cannot be transferred in a notice period.
- **Cascade effect:** Every departure signals to remaining staff that emigration is viable and perhaps advisable. One departure often triggers 2-3 more within 6 months.
- **Service degradation:** Hospitals lose accreditation for specialties. Universities lose program accreditation. Tech companies delay product launches. Revenue impact is real but unmeasured.
- **Morale cost:** Surviving staff face increased workload, delayed promotions (the person above them left but the organization cannot afford to promote), and a creeping sense that staying in Nigeria is the wrong career move.

**Step 6: The Cycle Repeats**
Without systematic intervention, the same pattern repeats. Each cycle depletes the organization further. Universities that lose 60% of staff cannot recover through one-off counter-offers — they need a structural retention strategy informed by data.

**What is missing:**
- No predictive model for which employees are likely to leave
- No salary benchmarking against international offers (not just domestic competitors)
- No cost-benefit framework for retention investments
- No tracking of whether retention interventions actually work
- No visibility into cascade risk (if Person A leaves, who follows?)

## 5. Solution Overview

JapaShield is a web-based HR intelligence platform that transforms brain drain from a surprise crisis into a manageable, data-driven risk. The system operates in four stages:

**1. Employee Risk Profiling**
HR uploads an employee roster (CSV or manual entry) with basic fields: name, role/title, department, hire date, salary, age, highest qualification, and skill category. The system enriches each profile with risk signals derived from publicly available data patterns:

- **Demographic risk:** Age 25-40 (peak emigration window), unmarried or early-career, English-speaking profession with international transferability.
- **Skill scarcity premium:** Roles in high-demand international categories (healthcare, software engineering, data science, nursing, accounting with ICAN/ACCA qualification) score higher risk.
- **Salary gap analysis:** Current salary compared to international benchmarks for the same role. A 5x gap is a stronger pull factor than a 2x gap.
- **Tenure pattern:** Employees with 3-7 years experience are highest risk — enough experience to be internationally competitive, not so senior that relocation is impractical.
- **Sector-specific signals:** Healthcare workers in cities with active NHS or Gulf state recruitment drives. Tech workers in roles where remote international work is common.

Each employee receives a Flight Risk Score (0-100) with a breakdown of contributing factors.

**2. International Salary Benchmarking**
For each role in the organization, JapaShield maintains benchmarks against international salary offers in key destination countries (UK, USA, Canada, UAE, Saudi Arabia, Germany, Australia). Data sources include published salary surveys, recruitment agency data, and diaspora community inputs. The platform shows:

- Current Nigerian salary vs. international median for the same role
- The "gap multiplier" (e.g., 4.2x for a senior software engineer, 5.8x for a consultant physician)
- What a "competitive retention salary" would be — not matching international offers (impossible for most Nigerian employers) but closing the gap enough to shift the decision calculus when combined with non-salary factors

**3. Retention Cost-Benefit Engine**
For each high-risk employee, the platform generates a financial analysis:

- **Cost of Retention:** Recommended salary adjustment + benefits enhancement + career development investment, annualized. Includes specific interventions: housing allowance increase, international conference sponsorship, study leave policy, performance bonuses, equity/profit-sharing where applicable.
- **Cost of Replacement:** Recruitment fees + vacancy period cost (revenue loss or locum/contractor cost) + onboarding and training + productivity ramp-up + institutional knowledge loss estimate. Typically 6-12 months of salary.
- **Net Retention ROI:** Cost of replacement minus cost of retention = the financial case for investing in keeping the employee.
- **Break-even analysis:** How long must the retained employee stay to justify the retention investment?

**4. Intervention Tracking & Analytics**
When the organization implements a retention intervention (salary increase, new benefit, promotion, development program), the platform tracks outcomes:

- Did the employee stay? For how long?
- Did the intervention affect flight risk scores for peer employees (positive spillover)?
- Which intervention types have the highest retention success rate by role category?
- Organization-wide dashboard: total employees at risk, total retention investment, estimated replacement costs avoided, attrition trend over time.

## 6. MVP Feature Set (MoSCoW)

### MUST Have — Week 1-3

These features define the minimum product that delivers value on day one.

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Employee roster upload (CSV) | Bulk upload employee data with column mapping | Support CSV with flexible columns; map to: name, role, department, hire date, salary, age, skill category |
| Employee manual entry | Add individual employees via form | Form with validation; dropdown for skill category and department |
| Flight Risk Score | Algorithmic risk scoring based on profile signals | Score 0-100 per employee; breakdown by factor (age, salary gap, skill type, tenure); sortable list view |
| Risk dashboard | Organization-level view of emigration risk | Total employees by risk category (High/Medium/Low); risk distribution by department; trend over time |
| International salary benchmarks | Compare employee salaries against international offers | Benchmarks for UK, USA, Canada, UAE for top 20 Nigerian emigration roles; gap multiplier display |
| Cost-of-replacement calculator | Per-employee replacement cost estimate | Factor in recruitment cost, vacancy cost, training cost, knowledge loss; output total and monthly equivalent |
| Retention vs. replacement comparison | Side-by-side financial analysis | Show retention investment options vs. replacement cost; net ROI; break-even timeline |
| Excel export | Export risk reports, salary benchmarks, and cost analyses | One-click export on every data screen; formatted headers, naira formatting |
| User authentication | Email + password login with organization accounts | Supabase Auth; invite HR team members; organization-level data isolation |

### SHOULD Have — Week 4-5

These features significantly enhance value but are not required for first customer delivery.

| Feature | Description |
|---------|-------------|
| Retention intervention tracker | Log interventions (salary increase, benefits, promotion) per employee; track outcome |
| Department risk heatmap | Visual heatmap showing risk concentration by department |
| Cascade risk modeling | Flag employees likely to leave if a specific colleague departs |
| WhatsApp/email alerts | Notify HR when an employee's risk score changes significantly |
| Peer benchmarking (anonymized) | Compare organization's retention metrics against anonymized industry averages |
| Custom risk weights | Allow HR to adjust risk factor weights based on organizational context |

### COULD Have — Month 2

| Feature | Description |
|---------|-------------|
| Integration with payroll systems | Pull salary data automatically from common Nigerian payroll platforms |
| Retention playbook library | Pre-built intervention templates by role category with success rate data |
| Board-ready reports | Formatted PDF reports for board presentations on talent risk |
| Candidate market scan | Show availability (or scarcity) of replacement candidates for high-risk roles |
| TaxGuard integration | Pull employee and salary data from TaxGuard if customer uses both products |
| Anonymous employee sentiment survey | Short pulse surveys to validate or adjust algorithmic risk scores with employee self-reported data |

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Real-time social media monitoring | Privacy concerns; legally complex; unreliable signal |
| Direct employee-facing features | JapaShield is an HR tool, not an employee self-service platform. Employee-facing features create trust issues |
| Recruitment / job posting | Plenty of tools do this; JapaShield is about retention, not recruitment |
| Visa or immigration tracking | Out of scope; different buyer and use case |
| Salary disbursement or payroll | Not a payroll tool; integrates with payroll for data only |

## 7. Key Screens & UX

### Design Principles

- **Numbers forward:** Naira amounts dominate every screen — cost of risk, cost of retention, cost of replacement. The HR director should see money at every turn because that is what gets board approval for retention budgets.
- **Traffic light simplicity:** Red (high risk, act now), yellow (medium risk, monitor), green (low risk). No ambiguity. Every employee, every department, every metric maps to a color.
- **Confidential by design:** This is sensitive data. Session timeouts after 15 minutes of inactivity. No employee names in notification text. Export files are password-protected by default.
- **Board-ready outputs:** Every view can be exported as a formatted document suitable for presenting to hospital boards, university senates, or company leadership teams.

### Screen 1: Risk Dashboard

The landing screen after login. Three large KPI cards across the top:

- **Employees at High Risk:** Count of employees with flight risk score above 70. Large font, bold, red background. Example: "34 employees (12% of workforce)"
- **Estimated Replacement Exposure:** Total cost if all high-risk employees left. Red. Example: "N487,000,000"
- **Retention Investment Gap:** Total recommended retention investment minus current actual spending. Orange. Example: "N62,000,000/year needed"

Below the KPIs:
- Donut chart: Employee distribution by risk tier (High / Medium / Low)
- Bar chart: Risk concentration by department (e.g., Surgery: 42% high-risk, Pediatrics: 18% high-risk)
- Table: Top 10 highest-risk employees with name, role, risk score, salary gap multiplier, and recommended action
- Trend line: Monthly attrition rate vs. new flight risk additions (trailing 12 months)

### Screen 2: Employee Risk List

Full-width table with columns: Name, Department, Role, Tenure, Current Salary, International Benchmark, Gap Multiplier, Flight Risk Score, Risk Tier, Last Review Date, Actions.

**Risk tier indicators:**
- Red badge: High risk (score 70-100) — immediate intervention recommended
- Yellow badge: Medium risk (score 40-69) — monitor and prepare retention plan
- Green badge: Low risk (score 0-39) — standard engagement sufficient

**Functionality:**
- Search bar: searches across name, role, and department
- Filters: risk tier, department, tenure range, salary range, skill category
- Sort by any column (default: flight risk score descending)
- Click any row to expand into the full employee risk profile
- Bulk actions: select multiple employees to generate a group retention analysis or export

### Screen 3: Employee Risk Profile (Detail View)

Single-employee deep dive. Top section shows:

- Employee name, role, department, tenure, current salary
- Flight Risk Score (large, color-coded) with trend arrow vs. last assessment
- Radar chart showing contribution of each risk factor (age, salary gap, skill demand, tenure, sector trend)

Middle section — Salary Benchmarking:
- Current salary: N4,200,000/year
- UK equivalent role: N18,500,000/year (4.4x)
- Canada equivalent role: N16,200,000/year (3.9x)
- UAE equivalent role: N14,800,000/year (3.5x)
- USA equivalent role: N22,000,000/year (5.2x)
- Visual bar chart showing the gap

Bottom section — Retention vs. Replacement:
- Two-column comparison card:
  - Left: "Cost to Retain" — Recommended salary adjustment (N1,200,000/year), benefits enhancement (N400,000/year), career development (N300,000/year) = Total N1,900,000/year
  - Right: "Cost to Replace" — Recruitment (N1,050,000), vacancy period (N2,100,000), training (N840,000), knowledge loss (N1,680,000) = Total N5,670,000
- ROI statement: "Retaining this employee saves N3,770,000 compared to replacement."
- Action buttons: "Create Retention Plan," "Schedule Review," "Export Report"

### Screen 4: Intervention Tracker

Table of all active retention interventions across the organization:

| Employee | Intervention | Date Implemented | Cost (Annual) | Status | Outcome |
|----------|-------------|-----------------|---------------|--------|---------|
| Dr. Adeyemi | 30% salary increase + conference budget | 2026-01-15 | N2,100,000 | Active | Retained (3 months) |
| Prof. Okafor | Research sabbatical + housing allowance | 2025-11-01 | N1,800,000 | Active | Retained (5 months) |
| Engr. Bello | Equity grant + remote work option | 2025-09-15 | N3,200,000 | Closed | Departed (left after 4 months) |

**KPIs at top:**
- Retention success rate: 72% (employees who received interventions and stayed 12+ months)
- Average retention investment per employee: N1,950,000/year
- Estimated replacement costs avoided: N38,400,000 (cumulative)

### Screen 5: Department Analysis

Department-level view showing:
- Department name, total headcount, high-risk count, percentage at risk
- Average salary gap multiplier for the department
- Recommended department-level retention budget
- Comparison against peer organizations (anonymized)
- Drill-down to individual employee risk profiles

Export: One-click generation of department risk report (Excel or PDF) suitable for department heads or board review.

## 8. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router, Server Components) | Fast initial load, SEO for marketing pages, React ecosystem |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development, consistent design system, professional look |
| Backend | Next.js API Routes + Server Actions | Single deployment, no separate backend service |
| Database | Supabase PostgreSQL | Managed Postgres, built-in auth, row-level security, generous free tier |
| Auth | Supabase Auth | Email/password, magic link, organization-level RLS policies |
| File Storage | Supabase Storage | Employee roster CSVs, exported reports |
| Salary Data | Static JSON + periodic manual updates | International salary benchmarks from published surveys; updated quarterly |
| Messaging | WhatsApp Business API (via Termii) + Resend (email) | Alert HR directors on risk score changes |
| Excel Export | xlsx (SheetJS) library | Formatted Excel exports with headers, naira formatting, multiple sheets |
| Charts | Recharts or Chart.js | Risk distribution, salary gap visualizations, trend lines |
| Hosting | Vercel (frontend) + Supabase (backend) | Free tiers sufficient for MVP; auto-scaling for growth |
| Monitoring | Sentry (errors) + Vercel Analytics (performance) | Essential for production debugging |

### Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  sector text CHECK (sector IN ('healthcare', 'academia', 'tech', 'professional_services', 'other')),
  employee_count integer,
  city text,
  state text,
  created_at timestamptz DEFAULT now()
)

-- Users (HR staff)
users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  org_id uuid REFERENCES organizations,
  role text CHECK (role IN ('admin', 'hr_manager', 'viewer')),
  full_name text,
  created_at timestamptz DEFAULT now()
)

-- Departments
departments (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  name text NOT NULL,
  head_name text,
  created_at timestamptz DEFAULT now()
)

-- Employees
employees (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  department_id uuid REFERENCES departments,
  full_name text NOT NULL,
  role_title text NOT NULL,
  skill_category text CHECK (skill_category IN (
    'medical_doctor', 'nurse', 'pharmacist', 'medical_specialist',
    'academic_lecturer', 'researcher', 'professor',
    'software_engineer', 'data_scientist', 'product_manager', 'designer',
    'accountant', 'lawyer', 'engineer_civil', 'engineer_mechanical',
    'general_admin', 'other'
  )),
  hire_date date NOT NULL,
  current_salary decimal(15,2) NOT NULL,
  currency text DEFAULT 'NGN',
  age integer,
  highest_qualification text,
  marital_status text,
  flight_risk_score decimal(5,2) DEFAULT 0,  -- 0.00 to 100.00
  risk_tier text CHECK (risk_tier IN ('high', 'medium', 'low')),
  last_assessed_at timestamptz,
  status text CHECK (status IN ('active', 'departed', 'on_leave')) DEFAULT 'active',
  departure_date date,
  departure_reason text,  -- 'emigration', 'domestic_move', 'retirement', 'other'
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
)

-- Salary Benchmarks (reference data)
salary_benchmarks (
  id uuid PRIMARY KEY,
  skill_category text NOT NULL,
  experience_level text CHECK (experience_level IN ('junior', 'mid', 'senior', 'specialist')),
  country text NOT NULL,  -- 'NG', 'UK', 'US', 'CA', 'AE', 'SA', 'DE', 'AU'
  median_salary_usd decimal(12,2) NOT NULL,
  salary_range_low_usd decimal(12,2),
  salary_range_high_usd decimal(12,2),
  source text,
  last_updated date NOT NULL,
  created_at timestamptz DEFAULT now()
)

-- Risk Assessments (history)
risk_assessments (
  id uuid PRIMARY KEY,
  employee_id uuid REFERENCES employees,
  org_id uuid REFERENCES organizations,
  flight_risk_score decimal(5,2) NOT NULL,
  risk_tier text NOT NULL,
  factor_age_score decimal(5,2),
  factor_salary_gap_score decimal(5,2),
  factor_skill_demand_score decimal(5,2),
  factor_tenure_score decimal(5,2),
  factor_sector_trend_score decimal(5,2),
  replacement_cost_estimate decimal(15,2),
  retention_cost_estimate decimal(15,2),
  assessed_at timestamptz DEFAULT now()
)

-- Retention Interventions
interventions (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  employee_id uuid REFERENCES employees,
  intervention_type text CHECK (intervention_type IN (
    'salary_increase', 'bonus', 'housing_allowance', 'transport_allowance',
    'conference_sponsorship', 'study_leave', 'promotion', 'equity_grant',
    'flexible_work', 'remote_work', 'career_development', 'mentorship',
    'research_funding', 'sabbatical', 'other'
  )),
  description text,
  annual_cost decimal(15,2) NOT NULL,
  date_implemented date NOT NULL,
  status text CHECK (status IN ('active', 'completed', 'cancelled')),
  outcome text CHECK (outcome IN ('retained', 'departed', 'pending')),
  outcome_date date,
  notes text,
  created_by uuid REFERENCES users,
  created_at timestamptz DEFAULT now()
)
```

### Flight Risk Scoring Algorithm

```
For each employee:
  1. Age Factor (0-20 points):
     - Age 25-30: 20 (peak emigration window)
     - Age 31-35: 18
     - Age 36-40: 14
     - Age 41-45: 8
     - Age 46-50: 4
     - Age 50+: 2

  2. Salary Gap Factor (0-30 points):
     - Gap multiplier ≥ 6x: 30
     - Gap multiplier 5-6x: 27
     - Gap multiplier 4-5x: 24
     - Gap multiplier 3-4x: 20
     - Gap multiplier 2-3x: 14
     - Gap multiplier < 2x: 6

  3. Skill Demand Factor (0-25 points):
     - Medical specialists, software engineers, data scientists: 25
     - General practitioners, nurses, pharmacists: 22
     - Lecturers, researchers, accountants (ACCA/ICAN): 18
     - Civil/mechanical engineers, lawyers: 14
     - General admin, non-transferable roles: 5

  4. Tenure Factor (0-15 points):
     - 3-5 years (enough experience, still mobile): 15
     - 5-7 years: 13
     - 1-3 years: 10
     - 7-10 years: 8
     - 10+ years: 4
     - < 1 year: 6

  5. Sector Trend Factor (0-10 points):
     - Healthcare (active international recruitment campaigns): 10
     - Tech (remote work enabling silent emigration): 9
     - Academia (global demand for PhDs): 7
     - Professional services (accounting, law — some transferability): 5
     - Other: 3

  Composite Score = Sum of all factors (0-100)

  Risk Tier:
    - 70-100: High (red)
    - 40-69: Medium (yellow)
    - 0-39: Low (green)

  Replacement Cost Estimate:
    - Junior (< 3 years): 6 months salary
    - Mid (3-7 years): 9 months salary
    - Senior (7+ years): 12 months salary
    - Specialist (medical consultants, professors, tech leads): 12-18 months salary
```

### Offline Architecture

```
Online Flow:
  User action → Optimistic UI update → API call → Supabase →
  Realtime broadcast → Other HR team members see update

Offline Flow:
  User action → Optimistic UI update → Queue in IndexedDB →
  [When online] → Sync queue to Supabase → Resolve conflicts →
  Update local cache

Cached locally (IndexedDB):
  - Employee roster with risk scores
  - Department summaries
  - Active interventions
  - Salary benchmark data (static, updated quarterly)

Not cached (requires network):
  - File uploads (CSV)
  - Risk score recalculation (server-side)
  - WhatsApp/email alert sending
  - New user authentication
```

## 9. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **Standard** | N75,000/month (~$49) | Up to 100 employees, flight risk scoring, salary benchmarks, replacement cost calculator, 3 users, Excel export, email support |
| **Professional** | N150,000/month (~$98) | Up to 500 employees, all Standard features plus intervention tracking, department analytics, cascade risk modeling, WhatsApp alerts, 10 users, priority support |
| **Founding Customer** | N37,500/month (~$24) | Professional plan features, locked for 12 months, limited to first 10 customers |

### Enterprise Add-On

Organizations with 500+ employees: custom pricing starting at N250,000/month. Includes dedicated onboarding, custom salary benchmark research for niche roles, and quarterly retention strategy review calls.

### Trial & Onboarding

- 14-day free trial on Professional plan, no credit card required
- Onboarding call (30 min) included for every trial signup
- Upload employee roster during onboarding call to demonstrate risk scores immediately
- Trial-to-paid conversion target: 30% (lower than PayMatch due to new category education required)

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~$40 | Vercel Pro ($20) + Supabase Pro ($25) — no third-party API dependencies |
| Cost per customer | ~$3/month | At 15 customers, infrastructure cost / customer count |
| CAC | $50-150 | LinkedIn outreach + conference attendance + content marketing (new category requires more education) |
| Monthly churn estimate | 4-6% | Retention tools have natural stickiness — hard to stop once you see risk scores |
| Average retention | 14 months | Once embedded in HR workflow, switching cost is high |
| LTV (Standard) | N1,050,000 (~$680) | N75K x 14 months |
| LTV (Professional) | N2,100,000 (~$1,365) | N150K x 14 months |
| LTV:CAC ratio | 5:1 - 14:1 | Favorable but requires higher CAC than simpler products due to category creation |

### Revenue Targets

| Milestone | Timeline | Customers | MRR (NGN) | MRR (USD) |
|-----------|----------|-----------|-----------|-----------|
| First paying customer | Week 6 | 1 | N37,500 | ~$24 |
| Break-even | Month 3 | 5 | N375,000 | ~$244 |
| Target | Month 4 | 10 | N1,000,000 | ~$650 |
| Stretch | Month 8 | 25 | N3,000,000 | ~$1,950 |

Break-even at 5 customers on founding pricing. At full pricing, break-even requires 3 customers. Revenue ramp is slower than workflow tools because JapaShield creates a new category and requires buyer education.

## 10. Go-to-Market: First 10 Customers

### Channel 1: Hospital HR Directors via LinkedIn

**Search strategy:** On LinkedIn, search for:
- Title: "HR Director" OR "Director Human Resources" OR "Head of People" OR "Director Medical Services" OR "Chief Medical Officer"
- Location: Lagos, Abuja, Port Harcourt, Ibadan
- Industry: Hospital & Health Care, Higher Education
- Company size: 200-5,000 employees

**Outreach sequence:**
1. Connection request with note: "Hi [Name], I'm building a tool that helps Nigerian hospitals quantify and prevent staff emigration. Given the scale of doctor and nurse losses to japa, I'd love to understand how your organization approaches retention today."
2. If accepted, message: "Thanks for connecting. Quick question — do you currently have visibility into which staff members are most likely to emigrate in the next 12 months? We're building a risk-scoring tool that quantifies this and compares the cost of retention vs. replacement."
3. If interested: "Happy to show you a 15-minute demo. I can score your workforce risk profile in real-time during the call. What's your WhatsApp number?"

**Target:** 80 connection requests → 25 accepts → 8 conversations → 4 demos → 2 customers.

### Channel 2: Healthcare Conferences & HR Events

Nigeria has active healthcare management and HR professional associations:
- Healthcare Federation of Nigeria events
- CIPM (Chartered Institute of Personnel Management) conferences
- AOHN (Association of Hospital Administrators of Nigeria) meetings

Present a 10-minute talk or distribute a one-page brief: "The N487M question: What is your hospital's japa exposure?" with a free risk assessment offer.

**Target:** 2 events → 15 contacts → 5 demos → 2-3 customers.

### Channel 3: University Registrars and HR Departments

Direct outreach to private universities (more budget flexibility than federal universities) and well-funded federal universities:
- Covenant University, Babcock University, Pan-Atlantic University, Afe Babalola University (private)
- University of Lagos, University of Ibadan, Ahmadu Bello University (federal — larger but slower procurement)

**Script:** "We built a tool that scores each faculty member's emigration risk and calculates whether it's cheaper to retain them or replace them. Given that UNILAG lost 60% of staff, we think every Nigerian university needs this data. Can we run a free assessment for your institution?"

**Target:** 15 outreach emails → 6 conversations → 3 demos → 1-2 customers.

### Channel 4: Tech Company VP of People

Direct outreach to HR leaders at Nigerian tech companies and fintechs:
- Paystack, Flutterwave, Moniepoint, Interswitch, Andela (large)
- SystemSpecs, Kuda, PiggyVest, Cowrywise, Bamboo (mid-size)

**Angle:** "Your engineers are your most expensive asset and the most likely to leave. JapaShield quantifies the financial risk of your team's emigration exposure and recommends data-driven retention strategies."

**Target:** 20 outreach messages → 8 conversations → 4 demos → 2 customers.

### Channel 5: Content Marketing / Thought Leadership

Publish data-driven articles on LinkedIn and Medium:
- "The True Cost of Losing a Nigerian Doctor to Japa: A Financial Analysis"
- "Which Nigerian Tech Roles Have the Highest Emigration Risk in 2026?"
- "Why Counter-Offers Fail 80% of the Time — And What Works Instead"

Each article includes a CTA for a free organizational risk assessment. This is a slower channel but builds credibility for a new category.

**Target:** 3 articles → 500+ views each → 10 inbound inquiries → 3 demos → 1-2 customers.

### Channel 6: Family Network in Port Harcourt

Ask family members for introductions to hospital administrators, university staff, or HR professionals in Rivers State.

**Target:** 5 warm introductions → 3 demos → 1-2 customers.

### Channel Summary

| Channel | Outreach Volume | Expected Demos | Expected Customers |
|---------|----------------|----------------|-------------------|
| LinkedIn (Hospital HR) | 80 | 4 | 2 |
| Healthcare/HR conferences | 15 | 5 | 2-3 |
| University outreach | 15 | 3 | 1-2 |
| Tech company HR | 20 | 4 | 2 |
| Content marketing | 10 (inbound) | 3 | 1-2 |
| Family network | 5 | 3 | 1-2 |
| **Total** | **145** | **22** | **9-13** |

## 11. Risks & Mitigations

### Risk 1: Creating a New Category Requires Extensive Buyer Education

**Likelihood:** High. No Nigerian HR department currently budgets for "emigration risk software." The concept does not exist in their procurement vocabulary.

**Impact:** Long sales cycles, low trial conversion, customers not understanding the value proposition quickly enough.

**Mitigations:**
- Lead with money, not concepts. Do not say "flight risk assessment tool." Say "we calculate that losing your top 10 doctors will cost you N560M in replacement costs. Here's how to prevent it for N1.8M/year."
- Free risk assessment as the entry point — upload your roster, see your risk profile for free. The data sells the product.
- Anchor to a known pain: "You lost 8 doctors last year. How much did that cost you? We prevent the next 8 from leaving."
- Target organizations that have already experienced significant losses — they do not need education, they need a solution.

### Risk 2: Salary Benchmark Data Is Difficult to Source and Maintain

**Likelihood:** High. International salary data for Nigerian-equivalent roles across multiple countries requires aggregation from diverse sources, and data can become stale quickly.

**Impact:** Inaccurate benchmarks undermine trust in the platform's recommendations.

**Mitigations:**
- Start with the top 20 most-emigrated roles (doctors, nurses, software engineers, accountants, lecturers) in the top 5 destination countries. This covers 80%+ of use cases.
- Source from publicly available salary surveys (Glassdoor, Indeed, Payscale, NHS pay scales, UAE healthcare salary guides) — these are published and free.
- Mark benchmark currency date and confidence level. "UK NHS Consultant Salary: updated March 2026, high confidence" vs. "UAE Private Hospital: updated September 2025, medium confidence."
- Allow customers to input offers their departing employees received — this builds a proprietary benchmark database over time.
- Update benchmarks quarterly as a manual process initially; automate with web scraping later.

### Risk 3: Sensitive Employee Data Creates Privacy and Trust Concerns

**Likelihood:** High. Employees scored as "high flight risk" might feel targeted, surveilled, or discriminated against if data leaks or is misused.

**Impact:** Organizational backlash, employee distrust, potential legal challenges.

**Mitigations:**
- JapaShield is an HR-only tool. Employees never see their own flight risk scores. This is positioned as organizational planning data, not individual surveillance.
- Data access is restricted by role — only HR admin can see individual scores; department heads see aggregated department data only.
- Session timeouts, audit logs, and no employee names in external notifications.
- Terms of service explicitly prohibit using JapaShield data for termination decisions or discrimination.
- Encryption at rest (AES-256) and in transit (TLS 1.3). SOC 2 roadmap communicated.

### Risk 4: Organizations May Not Act on Risk Data

**Likelihood:** Medium-High. Knowing which employees are at risk is valuable only if the organization has the budget and willingness to invest in retention. Many Nigerian employers face genuine budget constraints.

**Impact:** Customers see the risk data but cannot afford interventions, leading to frustration and churn.

**Mitigations:**
- Include low-cost intervention recommendations alongside salary increases. Career development, flexible work, recognition programs, and conference sponsorship are cheaper than salary bumps and often equally effective.
- Frame the ROI aggressively: "You cannot afford NOT to retain this person. Replacement costs N5.7M. Retention costs N1.9M. The math is clear."
- Provide tiered intervention recommendations: "If budget is N500K, do X. If budget is N2M, do Y. If budget is N5M, do Z."
- Success stories from early adopters showing concrete savings.

### Risk 5: TaxGuard Cannibalization — Better as a Feature Than a Product

**Likelihood:** Medium. If TaxGuard gains traction and already has employee salary data, JapaShield's core functionality could be a premium feature within TaxGuard rather than a standalone product.

**Impact:** Standalone JapaShield struggles to justify a separate subscription when TaxGuard could add a "Retention Risk" tab.

**Mitigations:**
- Build JapaShield standalone first to validate the category and pricing. If it works, it proves the feature is valuable enough to monetize.
- If JapaShield and TaxGuard both gain traction, offer a bundle discount. Customers using both products get a 20% discount on the combined subscription.
- Keep the integration light — JapaShield can import data from TaxGuard but does not depend on it.
- If standalone fails, fold JapaShield into TaxGuard as a premium add-on (N50K/month uplift). Either path creates value.

### Risk 6: Flight Risk Scores May Be Inaccurate Without Employee Self-Reported Data

**Likelihood:** Medium. The algorithm uses demographic and salary signals, not employee intentions. A 28-year-old doctor earning below international benchmarks might have no intention of leaving (family ties, personal preference), while a 45-year-old professor with lower algorithmic risk might be actively applying for UK positions.

**Impact:** False positives (wasting retention budget on employees who were never going to leave) and false negatives (missing employees who actually leave).

**Mitigations:**
- Clearly communicate that flight risk scores are probabilistic, not deterministic. "34% of employees matching this profile emigrate within 24 months" is the framing, not "this employee will leave."
- The anonymous sentiment survey (COULD Have feature) calibrates algorithmic scores with real employee data over time.
- Track prediction accuracy: when employees depart, compare their pre-departure risk score to improve the model.
- Allow HR to manually override scores based on their own knowledge ("I know this person is not leaving — their spouse has a business here").

## 12. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 6 | 0.30 | Core risk scoring algorithm is straightforward, but salary benchmark data collection requires manual research across multiple countries and roles. Employee roster CRUD is simple. Dashboard and visualizations add time. Realistic MVP in 3-4 weeks. |
| Time to Revenue | 15% | 5 | 0.75 | Selling a new category to HR departments requires education. HR procurement cycles are longer than finance team purchases. First paying customer likely 6-8 weeks from launch, not 4 weeks. Buyer needs convincing that the problem is solvable with software. |
| Market Size | 15% | 6 | 0.90 | The $11B brain drain cost is enormous, but the addressable market for an HR assessment tool is a small fraction. Target buyers are hospitals (800+ private hospitals), universities (200+), and tech companies (500+). At N100K/month average, 1,500 potential customers = N1.8B/year TAM. Meaningful but not massive. |
| Competition | 10% | 9 | 0.90 | Nobody does this. International HR analytics platforms (Visier, Workday) do not model emigration risk. No Nigerian competitor exists. This is a genuinely novel concept. First-mover advantage is real but also means category creation risk. |
| Skill Fit | 15% | 8 | 1.20 | Predictive risk scoring, data analysis, salary benchmarking, and cost modeling are core AI/data science skills. The algorithm is more statistics than ML initially, scaling to ML with enough departure data. Full-stack build is standard Next.js + Supabase. |
| Capital Required | 10% | 9 | 0.90 | Pure software with no third-party API dependencies for core functionality. Salary benchmarks sourced from free public data. Total cost under $500 for first 3 months. No hardware, no data licenses, no partnerships required for MVP. |
| Buyer Clarity | 20% | 6 | 1.20 | HR directors at hospitals and universities are identifiable and findable on LinkedIn. But HR departments are fragmented — procurement decisions are slow, budgets are tight, and the concept of "emigration risk software" does not exist in their vocabulary yet. The buyer is clear but the sales motion is harder than selling to finance teams. |
| Fintech Upside | 10% | 4 | 0.40 | Limited financial services angle. Could evolve into retention insurance (pay premiums against key-person departure) or integrate with lending products (staff retention as a credit quality signal), but these are distant and speculative. This is fundamentally an HR tool, not a fintech wedge. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.30 |
| Time to Revenue (15%) | 0.75 |
| Market Size (15%) | 0.90 |
| Competition (10%) | 0.90 |
| Skill Fit (15%) | 1.20 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 1.20 |
| Fintech Upside (10%) | 0.40 |
| **TOTAL** | **6.55 / 10** |

### Verdict: CONDITIONAL BUILD

A 6.55 composite score places JapaShield in the "interesting but risky" territory. The standout strengths are zero competition (9), low capital requirement (9), and strong skill fit (8). The weaknesses are slow time to revenue (5), moderate buyer clarity (6), and limited fintech upside (4).

**Key decision factors:**
- This is a category-creation play. It will take longer to generate revenue than workflow tools (PayMatch, TaxGuard) because HR departments do not yet know they need this.
- The financial case for individual customers is compelling (N5.7M replacement cost vs. N1.9M retention investment) but selling the concept requires education.
- Best positioned as a second or third product — build after establishing revenue and credibility with a workflow tool like PayMatch or TaxGuard, then use the existing customer base for cross-sell.
- Could be validated faster as a TaxGuard add-on feature before spinning out as standalone.

**Go condition:** Do not build first. Build after PayMatch or TaxGuard reaches 10+ paying customers. Validate demand with a free "Brain Drain Risk Assessment" PDF report service (manually generated) offered to existing customers. If 5+ organizations request the assessment and express willingness to pay for ongoing monitoring, then build the full product. Timeline: Month 4-6.
