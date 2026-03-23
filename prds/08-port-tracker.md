# PRD 08: PortPulse — Port Dwell Time Tracker for Nigerian Importers

**Version:** 1.0 | March 2026
**Status:** Draft
**Depends on:** [00-shared-context.md](./00-shared-context.md)

---

## 1. Executive Summary

Nigerian ports are the most expensive in West Africa to operate through, and the single largest controllable cost is dwell time — the days a container sits at the port between arrival and exit. At Apapa port, average dwell time is 21 days (vs. 4-7 days in efficient ports), costing importers N120-140K per container per day in demurrage and storage charges. Importers have zero visibility into where their containers are in the clearing process, cannot benchmark their clearing agents' performance, and discover cost overruns only when the final bill arrives. PortPulse gives importers real-time tracking of container dwell time, clearing milestone progress, agent performance benchmarks, and cost projection alerts — transforming port operations from a black box into a managed process.

**Target:** 25 paying customers within 90 days = ~$6.5-10K MRR.

---

## 2. Market Opportunity

### The Port Tax

Nigeria's ports function as an involuntary tax on every imported good. The inefficiency is not accidental — it is structural, and it creates enormous, quantifiable costs that importers absorb.

### Quantified Pain

| Metric | Value | Source |
|--------|-------|--------|
| Average dwell time at Apapa | 21 days | NPA / SEREC Reports |
| Best-practice benchmark | 4-7 days | Global port averages |
| Demurrage cost | N120-140K/container/day | Shipping line schedules |
| Average excess dwell (vs. benchmark) | 14-17 days | Calculated |
| Cost per container of excess dwell | N1.68-2.38M ($1,100-1,550) | Calculated |
| Total port/logistics annual cost | N1.2-1.8T ($800M-1.2B) | NPA, SEREC |
| Containers through Lagos ports annually | ~1.8M TEUs | NPA Statistics |
| Import-dependent businesses in Nigeria | ~50,000+ active importers | CAC Registry |

### Why Importers Cannot Solve This Today

1. **No real-time tracking system:** The NPA (Nigerian Ports Authority) provides no digital container tracking that importers can access. Status updates come via phone calls to clearing agents who may not be truthful about progress.
2. **Clearing agent opacity:** Clearing agents are the intermediary between importers and the port. They handle customs documentation, inspections, and physical clearance. Importers cannot verify agent claims ("your container is waiting for inspection") against reality.
3. **Demurrage compounds silently:** Importers often do not know their exact demurrage exposure until the container exits the port. By then, bills of N2-5M per container are common — and non-negotiable.
4. **No performance benchmarking:** An importer using Agent A has no way to know that Agent B clears similar cargo 5 days faster on average. Agents compete on relationships, not measurable performance.

### Why Now

1. **NPA digitization efforts:** The Nigerian Ports Authority has been piloting digital systems (ISPS, Eto booking system) that create data trails. These are imperfect but represent new data availability.
2. **Shipping line portals:** Maersk, MSC, and CMA CGM now offer online container tracking that shows vessel arrival and discharge events. This data was previously unavailable digitally.
3. **Terminal operator systems:** APM Terminals (Apapa) and Onne port operators have introduced digital gate pass systems that create timestamped events.
4. **Importer frustration at peak:** With the naira's 40.9% depreciation, every dollar of demurrage now costs 41% more in naira terms. The pain has never been more acute.

### Total Addressable Market

- **Active importers handling 5+ containers/month:** ~8,000-12,000 businesses
- **Average excess demurrage per importer per month:** N5-25M
- **Willingness to pay for cost reduction tool:** High (N40-60K/month vs. millions in savings)
- **SAM:** ~5,000 importers with regular container volumes
- **SOM (Year 1):** 50-100 customers at N40-60K/month = N24-72M ($15.6-46.8K) ARR

---

## 3. Target Persona

### Primary: Ade — Import Manager

| Attribute | Detail |
|-----------|--------|
| **Title** | Import Manager / Logistics Manager / Procurement Manager |
| **Company** | Mid-size manufacturer, distributor, or trading company |
| **Revenue** | N50-500M/month |
| **Import volume** | 5-30 containers/month |
| **Location** | Lagos (proximity to Apapa/Tin Can ports) |
| **Age** | 35-55 |
| **Education** | BSc/HND, possibly CILT certified |
| **Tools today** | Excel, phone calls, WhatsApp groups with agents |
| **Pain frequency** | Daily — checking container status is a full-time job |
| **Decision authority** | Can approve N50-100K/month operational tools |

### Ade's Weekly Nightmare

- **Monday:** 12 containers currently at the port. Ade calls clearing agent for status on each. Agent says: "5 are at examination, 3 waiting for duty assessment, 2 ready for release, 2 just arrived." Ade writes this in Excel. He cannot verify any of it.
- **Wednesday:** Warehouse manager calls — where is the raw material container? Production will stop Friday without it. Ade calls agent again. "It's at examination, should be done tomorrow." (Agent said this last Wednesday too.)
- **Thursday:** Finance department gets a demurrage invoice for N4.8M on 3 containers that dwelled 34 days each. Ade had estimated 21 days. The extra 13 days cost N5.4M total. He has no documentation of why the delays occurred.
- **Friday:** MD asks: "Why are we spending more on demurrage than last quarter?" Ade pulls up his Excel tracker. The data is incomplete, inconsistent, and 2 weeks stale. He cannot answer the question.

### Secondary: Funke — Supply Chain Director

Larger company (N200M+/month imports). Manages 3-5 clearing agents across multiple ports. Needs comparative performance data to negotiate better rates and hold agents accountable. Currently makes agent decisions based on relationships and anecdotes, not data.

---

## 4. Problem Deep Dive

### Problem 1: Container Status is a Black Box

From the moment a container is discharged from a vessel at Apapa or Tin Can, the importer has near-zero visibility into its progress through the clearing pipeline:

```
Vessel Arrival → Discharge → Documentation → Customs Assessment →
Examination → Duty Payment → Release Order → Gate Out
```

Each step can take 1-7 days. Importers learn the status through phone calls to agents, who often report optimistic or inaccurate timelines. There is no independent verification.

**Cost of the problem:** Without real-time status, importers cannot intervene when delays occur. A container stuck at examination for 5 days (when it should take 1-2) is silently accumulating N120-140K/day in charges.

### Problem 2: Clearing Agent Accountability Gap

Clearing agents are paid a flat fee per container (N80-200K depending on cargo type). Their incentive is to process containers in order of their own convenience, not the importer's urgency. There is no penalty for slow processing and no performance data for the importer to use in negotiations.

**Data point:** Two agents clearing identical cargo types can differ by 7-12 days in average dwell time. The importer has no way to see this comparison without tracking every container over months — which no one does manually.

### Problem 3: Demurrage Cost Blindness

Demurrage charges are calculated by shipping lines based on the number of free days (typically 7-14) plus daily rates thereafter. Importers often do not compute their running demurrage exposure until the bill arrives. By then, the money is already spent.

**Example:** Container arrives Jan 15. Free days expire Jan 29. Demurrage at N130K/day begins. Container exits Feb 15. Demurrage = 17 days x N130K = N2.21M. If the importer had known on Day 10 that the free period was expiring with no examination scheduled, they could have escalated — potentially saving 5-7 days (N650K-910K).

### Problem 4: No Historical Analytics

When the CFO asks "how much did we spend on demurrage last quarter, and how does that compare to the previous quarter?" — there is no system to answer this. Everything is in scattered Excel files, agent invoices, and WhatsApp messages. Strategic decisions about which ports to use, which agents to employ, and which shipping lines to choose are made without data.

---

## 5. Solution Overview

### Core Value Proposition

"Know exactly where every container is, how much it is costing you per hour, and which clearing agent is actually earning their fee."

### How It Works

```
Enter Container Number + Vessel Name + Arrival Date
            ↓
PortPulse Tracks Dwell Time from Day 1
(User or agent updates milestones: discharged, docs submitted,
 assessment, examination, duty paid, release, gate out)
            ↓
Real-Time Dashboard Shows:
- Current dwell time per container
- Running demurrage cost
- Milestone progress (what stage, who is responsible)
            ↓
Alert Engine Triggers:
- "Free days expire in 2 days for Container MSKU1234567"
- "Container TCNU9876543 has been at examination for 5 days (avg: 2)"
            ↓
Agent Performance Analytics:
- Agent A: avg 18 days dwell | Agent B: avg 24 days dwell
- Agent A saves you N780K/container on average
            ↓
Quarterly Report:
- Total demurrage spend, trend, cost per container, agent comparison
```

### Key Design Decisions

1. **Manual milestone updates (MVP):** In the absence of reliable port APIs, milestones are updated by the user or their clearing agent (invited as a collaborator). This is deliberate — it creates a tracked record even without automation, and it makes agents accountable because updates are timestamped.
2. **Agent portal:** Clearing agents get a free, limited view. They can update milestone status for their assigned containers. This creates a shared source of truth and reduces the importer's phone calls. Agents adopt because it makes them look professional.
3. **Cost calculator as the hook:** Before even tracking containers, the landing page offers: "Enter your container count and average dwell time — see how much you are spending on demurrage." This immediate cost quantification drives conversions.
4. **Benchmarking as the moat:** As more importers use PortPulse, aggregate data on average dwell times by port, cargo type, and clearing agent creates industry benchmarks that no individual importer could generate alone.

---

## 6. MVP Feature Set

### Phase 1: Core Tracking (Weeks 1-2)

| Feature | Priority | Description |
|---------|----------|-------------|
| Container registration | P0 | Enter container number, vessel, arrival date, agent, cargo type |
| Milestone tracker | P0 | Update milestones: discharged, docs, assessment, exam, duty, release, gate out |
| Dwell time calculator | P0 | Auto-calculate days since arrival, days at each milestone |
| Demurrage calculator | P0 | Running cost based on shipping line rates (configurable per container) |
| Free days countdown | P0 | Alert when free days are expiring |
| Container dashboard | P0 | All active containers: status, dwell days, running cost, next milestone |
| Alert system | P0 | WhatsApp/SMS alerts for: free days expiring, abnormal dwell, cost threshold |
| Excel export | P0 | Export container tracking data and cost report |

### Phase 2: Agent & Analytics (Weeks 3-4)

| Feature | Priority | Description |
|---------|----------|-------------|
| Agent portal | P1 | Agents update milestones via mobile-friendly portal (free access) |
| Agent performance dashboard | P1 | Avg dwell time per agent, cost per container, comparison chart |
| Historical analytics | P1 | Monthly/quarterly trends: total demurrage, avg dwell, cost per container |
| Multi-port support | P1 | Track containers across Apapa, Tin Can, Onne, Rivers ports |
| Cargo type benchmarks | P1 | Compare your dwell time to averages for same cargo type |
| Document upload | P1 | Attach Bill of Lading, customs forms, duty receipts per container |

### Phase 3: Intelligence Layer (Weeks 5-8)

| Feature | Priority | Description |
|---------|----------|-------------|
| Delay prediction | P2 | Based on historical data, predict expected clearance date for new containers |
| Cost optimization alerts | P2 | "Switching from Agent A to Agent B for food imports would save ~N950K/month" |
| Shipping line comparison | P2 | Compare free day allowances and demurrage rates across shipping lines |
| Port congestion indicator | P2 | Aggregate data to show current port congestion levels |
| API for data integration | P2 | Allow customers to pull data into their ERP/accounting systems |

### Explicitly Out of Scope (MVP)

- Automated data from port/terminal systems (no reliable APIs exist yet)
- Customs documentation filing
- Duty payment processing
- Freight forwarding or booking
- Insurance processing

---

## 7. Key Screens & UX

### Screen 1: Container Dashboard (Home)

```
┌──────────────────────────────────────────┐
│  PortPulse                [+ Add Container] │
├──────────────────────────────────────────┤
│                                          │
│  Active Containers: 14                   │
│  Total Running Demurrage: N 4,280,000    │
│  ─────────────────────────────────────  │
│  Avg Dwell Time: 19 days                 │
│  Containers in Free Period: 3            │
│  Containers Accruing Charges: 11         │
│                                          │
│  ── ALERTS ──────────────────────────── │
│  🔴 MSKU1234567 — 28 days dwell, N2.1M  │
│     demurrage. At Examination for 8 days │
│  🟡 TCNU9876543 — Free days expire in    │
│     2 days. Status: Awaiting Assessment  │
│  🟡 CMAU4567890 — Agent has not updated  │
│     status in 5 days                     │
│                                          │
│  ── CONTAINER LIST ──────────────────── │
│  Container    | Agent    | Days | Cost   │
│  MSKU1234567  | ChiClear | 28   | N2.1M  │
│  TCNU9876543  | LagosLog | 12   | N0     │
│  CMAU4567890  | ChiClear | 22   | N1.04M │
│  HLCU7654321  | PortPro  | 15   | N130K  │
│  ...                                     │
│                                          │
│  [📊 Agent Comparison]  [📥 Export]       │
└──────────────────────────────────────────┘
```

### Screen 2: Container Detail

```
┌──────────────────────────────────────────┐
│  Container: MSKU1234567                  │
│  Vessel: Maersk Sealand | Arrived: 21 Feb │
│  Agent: ChiClear Logistics               │
│  Cargo: Industrial Machinery (HS 8429)   │
├──────────────────────────────────────────┤
│                                          │
│  Dwell Time: 28 days | Demurrage: N2.1M  │
│  Free Days: 14 (expired 07 Mar)          │
│  Daily Rate: N130,000                    │
│                                          │
│  ── MILESTONE PROGRESS ───────────────  │
│                                          │
│  ✅ Vessel Arrived      21 Feb           │
│  ✅ Discharged           23 Feb  (2 days) │
│  ✅ Docs Submitted       25 Feb  (2 days) │
│  ✅ Customs Assessment   01 Mar  (4 days) │
│  🔄 Examination          Started 05 Mar   │
│     ⚠ 16 days at this stage (avg: 3)    │
│  ⬜ Duty Payment         —               │
│  ⬜ Release Order         —               │
│  ⬜ Gate Out              —               │
│                                          │
│  ── DEMURRAGE ACCUMULATION CHART ─────  │
│  |         _______________/              │
│  |        /                              │
│  |_______/ Free period ends              │
│  |______________________________         │
│  Day 1    Day 14    Day 21    Day 28     │
│                                          │
│  [Update Milestone]  [Call Agent]        │
│  [📎 Documents]      [📥 Export]          │
└──────────────────────────────────────────┘
```

### Screen 3: Agent Performance Comparison

```
┌──────────────────────────────────────────┐
│  Agent Performance (Last 6 Months)       │
├──────────────────────────────────────────┤
│                                          │
│  Agent        | Containers | Avg Dwell | Avg Cost │
│  ─────────────────────────────────────  │
│  PortPro      | 34         | 16 days   | N260K   │
│  ChiClear     | 28         | 22 days   | N1.04M  │
│  LagosLog     | 19         | 18 days   | N520K   │
│                                          │
│  Estimated Annual Savings:               │
│  If all containers cleared at PortPro's  │
│  rate: N 14,200,000 / year saved         │
│                                          │
│  [Bar chart comparing agents by dwell]   │
│  [Bar chart comparing agents by cost]    │
│                                          │
│  Breakdown by Cargo Type:                │
│  Food/Agri: PortPro 14d | ChiClear 19d  │
│  Machinery: PortPro 18d | ChiClear 25d  │
│  Chemicals: LagosLog 16d | ChiClear 21d │
│                                          │
│  [📥 Export Full Report]                  │
└──────────────────────────────────────────┘
```

### Screen 4: Add Container (Simple Form)

- Container number (validated format: 4 letters + 7 digits)
- Vessel name (autocomplete from recent vessels)
- Arrival date
- Clearing agent (select from saved agents or add new)
- Cargo description + HS code (optional)
- Shipping line (select — auto-populates demurrage rate)
- Free days (auto-populated based on shipping line, editable)
- Daily demurrage rate (auto-populated, editable)
- Submit → container appears on dashboard immediately

### Screen 5: Agent Portal (Agent's View)

- List of containers assigned to this agent (across all PortPulse customers)
- Simple milestone update: tap container → tap current milestone → confirm
- Timestamp auto-captured
- Note field for explanations ("Waiting for NAFDAC inspection — not customs delay")
- No access to demurrage calculations or cost data
- No access to other agents' performance

---

## 8. Technical Architecture

### System Architecture

```
┌─────────────────┐     ┌──────────────┐
│  Next.js App     │────→│ Supabase DB  │
│  (Vercel)        │     │ (PostgreSQL) │
│                  │     └──────┬───────┘
│  - Importer UI   │            │
│  - Agent Portal   │           │
└───────┬──────────┘     ┌──────┴───────┐
        │                │ Vercel Cron   │
        │                │ (Daily alerts)│
        │                └──────┬───────┘
        │                       │
        ├──→ Termii (WhatsApp/SMS alerts)
        ├──→ Paystack (subscription billing)
        └──→ Resend (email reports)
```

### Data Model (Core Tables)

```sql
-- Business accounts (importers)
businesses (
  id, name, industry, import_volume_monthly,
  primary_port, created_at, owner_user_id
)

-- Clearing agents
agents (
  id, company_name, contact_name, phone, email,
  whatsapp, license_number, ports_served,
  avg_dwell_time, total_containers_tracked,
  agent_user_id (nullable — for portal access),
  created_at
)

-- Containers
containers (
  id, business_id, agent_id,
  container_number, vessel_name, shipping_line,
  cargo_description, hs_code, cargo_type,
  arrival_date, discharge_date, gate_out_date,
  free_days, daily_demurrage_rate,
  total_demurrage, current_milestone,
  status (active/cleared/archived),
  created_at
)

-- Milestones (events in the clearing process)
milestones (
  id, container_id, milestone_type,
  -- Types: vessel_arrived, discharged, docs_submitted,
  -- customs_assessment, examination_start, examination_end,
  -- duty_payment, release_order, gate_out
  timestamp, updated_by_user_id,
  updated_by_role (importer/agent),
  notes, created_at
)

-- Shipping lines (demurrage rates)
shipping_lines (
  id, name, default_free_days,
  demurrage_rate_per_day, currency,
  last_updated
)

-- Alerts
alerts (
  id, container_id, business_id,
  type (free_days_expiring/abnormal_dwell/cost_threshold/agent_inactive),
  message, status (pending/sent/acknowledged),
  sent_via, sent_at
)

-- Demurrage cost log (daily snapshot)
demurrage_log (
  id, container_id, date,
  days_in_port, days_chargeable,
  daily_rate, cumulative_cost
)
```

### Alert Engine (Cron Job — Runs Daily)

1. **Free days expiring:** For each active container, calculate `arrival_date + free_days`. If expiration is within 3 days, send alert.
2. **Abnormal dwell at milestone:** For each container, compare time at current milestone against average for that milestone + cargo type. If >2x average, send alert.
3. **Cost threshold:** If cumulative demurrage exceeds user-configured threshold (default: N1M), send alert.
4. **Agent inactivity:** If no milestone update from agent in 5+ days for an active container, send alert to importer.
5. **Daily summary:** At 7 AM, send WhatsApp digest: total active containers, total running demurrage, top 3 actions needed.

### Agent Portal Architecture

- Separate Next.js route group: `/agent/[agentId]/...`
- Authentication: agent signs up with phone number + OTP (Supabase Auth)
- Agent sees only containers assigned to them (Row Level Security in Supabase)
- Agent can: update milestones, add notes
- Agent cannot: see demurrage costs, see other agents' data, see importer's analytics
- When agent updates a milestone, real-time notification to importer via Supabase Realtime

### Data Sources (Current and Planned)

| Source | Data Available | Integration | Status |
|--------|---------------|-------------|--------|
| Manual entry | All milestones | Direct UI | MVP |
| Agent portal | Milestone updates | Agent UI | MVP |
| Shipping line websites | Vessel arrival, discharge | Web scraping (Phase 2) | Planned |
| NPA vessel schedule | Expected arrival dates | Public data | Phase 2 |
| Terminal operator APIs | Gate events (if available) | API | Phase 3 |

### Infrastructure Costs (Monthly Estimate)

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | $0 → $20 | Free tier for MVP |
| Supabase | $0 → $25 | Free tier sufficient |
| Termii | ~$30-60 | WhatsApp/SMS alerts (~1,000 messages/month) |
| Resend | $0 | Free tier |
| **Total** | **~$30-105/month** | Extremely low operating cost |

---

## 9. Pricing & Unit Economics

### Pricing Tiers

| Tier | Price (Monthly) | Target | Features |
|------|----------------|--------|----------|
| **Starter** | N40,000 (~$26) | 5-10 containers/month | Up to 15 active containers, 1 agent portal, basic alerts, Excel export |
| **Professional** | N60,000 (~$39) | 10-30 containers/month | Unlimited containers, 5 agent portals, agent comparison, historical analytics, PDF reports |
| **Enterprise** | N120,000 (~$78) | 30+ containers/month | Unlimited everything, multi-port, priority support, API access, custom demurrage rate tables |

### Unit Economics Per Customer

| Metric | Starter | Professional |
|--------|---------|-------------|
| Monthly revenue | N40,000 | N60,000 |
| Messaging costs | N2,000 | N5,000 |
| Infrastructure share | N1,500 | N2,000 |
| **Gross margin** | **N36,500 (91%)** | **N53,000 (88%)** |

### Value Proposition Math

For a Professional-tier customer importing 15 containers/month:
- **Current average excess dwell:** 14 days x 15 containers = 210 container-days
- **If PortPulse reduces excess dwell by just 2 days per container:** 30 container-days saved
- **At N130K/day demurrage:** N3,900,000 saved per month
- **PortPulse cost:** N60,000/month
- **ROI:** 65x return on investment

Even a 1-day improvement in average dwell time pays for PortPulse 30 times over. This makes the sales conversation easy.

### Revenue Projections

| Milestone | Customers | Mix | MRR (NGN) | MRR (USD) |
|-----------|-----------|-----|-----------|-----------|
| Month 3 | 25 | 15 Starter, 10 Professional | N1,200,000 | ~$780 |
| Month 6 | 60 | 30 Starter, 25 Professional, 5 Enterprise | N3,300,000 | ~$2,145 |
| Month 12 | 150 | 60 Starter, 70 Professional, 20 Enterprise | N9,000,000 | ~$5,850 |
| Month 18 | 300 | Blended | N18,000,000+ | ~$11,700 |

### Path to $10K MRR

$10K MRR = ~N15.4M/month

**Route:** 200 customers at blended N77K/month. Achievable by Month 14-16. Slower path to $10K MRR than some products due to lower price point — volume is required.

---

## 10. Go-to-Market

### Phase 1: Validation (Weeks 1-2)

1. **Target:** Import managers at manufacturing and trading companies in Lagos
2. **Outreach:**
   - MAN (Manufacturers Association) — members are heavy importers
   - ANLCA (Association of Nigerian Licensed Customs Agents) — clearing agents as channel
   - LinkedIn: "Import Manager" OR "Logistics Manager" + Lagos
   - Family network in Port Harcourt (oil & gas, manufacturing importers)
3. **Hook:** Free demurrage cost calculator on landing page: "How much are you spending on demurrage? Enter your numbers."
4. **Goal:** 15 demo calls, 8 trial signups

### Phase 2: Agent-as-Channel Strategy (Weeks 3-6)

This is the unique GTM insight for PortPulse:

1. **Approach top 5 clearing agents** in Lagos. Offer them free PortPulse agent portals.
2. **Value to agents:** "Your clients are going to demand transparency. Be the first agent to offer it. Use PortPulse to prove your performance."
3. **Agent refers importers:** "We track every container in PortPulse — you can see real-time status. Sign up for the importer dashboard."
4. **Viral loop:** Each agent brings 5-10 importer clients. Each importer may use 2-3 agents, expanding the agent network.

### Phase 3: Content & Community (Months 2-4)

1. **Monthly "Port Intelligence Report"** — aggregate data (anonymized) on average dwell times, port congestion, best-performing shipping lines. Published on LinkedIn and shared in import/export WhatsApp groups. Positions PortPulse as the data authority.
2. **LinkedIn series:** "The True Cost of Demurrage" — weekly posts with calculations and case studies
3. **LCCI/MAN events:** Present the Port Intelligence Report at chamber of commerce events. Importers attend these.

### Phase 4: Association Partnerships (Months 4-8)

1. **MAN partnership:** "PortPulse for MAN Members" — discounted pricing, co-branded. MAN promotes to 3,000+ member companies.
2. **NACCIMA partnership:** National chamber of commerce endorsement
3. **Customs broker partnerships:** Offer API to customs brokerage software companies

---

## 11. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **Data entry fatigue** — users stop updating milestones after initial enthusiasm | High | Critical | Agent portal shifts burden to agents (who are on the ground). Daily WhatsApp prompt: "3 containers need status update." Gamification: track update consistency. Make updates dead-simple (one-tap milestone advance). |
| 2 | **Agent resistance** — clearing agents refuse to use the portal (transparency threatens them) | Medium | High | Position portal as professionalism tool, not surveillance. Good agents welcome transparency (differentiator). Start with progressive agents. If agents refuse, the importer's pain is proven — they switch to agents who use PortPulse. |
| 3 | **Inaccurate data** — manual updates are delayed or incorrect, eroding trust | Medium | High | Cross-reference with shipping line vessel data (automated). Flag when manual updates conflict with known data points. Show "last updated" timestamps prominently. Eventually automate with terminal data. |
| 4 | **Small market ceiling** — only ~5,000-10,000 regular importers in Nigeria | Medium | Medium | Expand to clearing agent SaaS (manage all client containers), freight forwarder tools, and port authority analytics. West African expansion (Ghana, Cote d'Ivoire have similar port issues). |
| 5 | **NPA builds a tracking system** — government digitizes and makes tracking free | Low | High | NPA's track record on digital delivery is poor (Eto system still unreliable after 3 years). Even if NPA provides raw data, PortPulse adds analytics, agent comparison, cost calculation, and alerts. Become the analytics layer on top of NPA data. |
| 6 | **Low willingness to pay** for a tracking tool | Medium | Medium | Anchor on demurrage savings: "N60K/month vs. N3.9M in demurrage savings." Free tier for 3 containers (hook), paid for more. ROI is so clear that budget approval is straightforward. |

---

## 12. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|:---:|-----------|
| **Build Speed** | 9 | Core is CRUD — container entry, milestone updates, simple date math for dwell calculations. No integrations required for MVP. 1.5-2 weeks. |
| **Time to Revenue** | 6 | Value is clear but requires containers to actually be in port (can't demo with fake data as compellingly). First revenue depends on import cycle timing. |
| **Market Size** | 6 | Nigerian importers are a defined, limited market (~5,000-10,000 regular importers). Good niche but ceiling is visible without geographic expansion. |
| **Competition** | 8 | No Nigeria-specific port dwell tracking tool exists. Global logistics platforms (Flexport, project44) do not serve Nigerian port realities. Clear whitespace. |
| **Skill Fit** | 5 | Mostly CRUD/workflow with date math. AI/ML skills underutilized until Phase 3 (delay prediction). Not the best use of the founder's core competencies. |
| **Capital Required** | 10 | Near-zero infrastructure costs. No expensive data sources. No API fees. Bootstrappable with $0. |
| **Buyer Clarity** | 7 | Import managers at manufacturing/trading companies are identifiable. MAN and ANLCA membership directories exist. But reaching the right person (import manager vs. MD vs. procurement) requires targeting. |
| **Fintech Upside** | 4 | Limited direct fintech evolution. Could evolve into trade finance (letters of credit management) but that is a different product. Port data is valuable but not inherently financial. |

### Weighted Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Build Speed | 5% | 9 | 0.45 |
| Time to Revenue | 15% | 6 | 0.90 |
| Market Size | 15% | 6 | 0.90 |
| Competition | 10% | 8 | 0.80 |
| Skill Fit | 15% | 5 | 0.75 |
| Capital Required | 10% | 10 | 1.00 |
| Buyer Clarity | 20% | 7 | 1.40 |
| Fintech Upside | 10% | 4 | 0.40 |
| **TOTAL** | **100%** | | **6.60** |

### Verdict: CONSIDER (Priority Tier 3)

PortPulse is the easiest product to build (highest Build Speed) and has near-zero capital requirements, but it scores lowest on Skill Fit and Fintech Upside. The market is a clear, bounded niche — great for a lifestyle business, less compelling for a venture-scale outcome. The agent-as-channel GTM strategy is clever and could drive rapid adoption, but the path to $10K MRR is slower due to the lower price point. Best suited as a quick side build or as a product to validate while building a more complex, higher-value product in parallel.
