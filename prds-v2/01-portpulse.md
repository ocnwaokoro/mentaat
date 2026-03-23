# PRD 01: PortPulse — Port Dwell Intelligence Platform for Nigerian Trade

**Version:** 2.0 | March 2026
**Status:** Production-Ready Draft
**Priority:** Highest (7/8 Disruption Score)
**Depends on:** [00-shared-context.md](../prds/00-shared-context.md)

---

## 1. Executive Summary

PortPulse enters a market where the current alternative is nothing. No Nigerian importer has access to digital container tracking. No clearing agent has a professional tool to manage their portfolio. No government agency can produce reliable port dwell analytics. The entire market — importers, agents, freight forwarders, port authorities — is non-consuming. This is a pure new-market disruption.

Nigerian ports are the most expensive in West Africa to operate through, and the single largest controllable cost is dwell time — the days a container sits at the port between arrival and exit. At Apapa port, average dwell time is 21 days (vs. 4-7 days in efficient ports), costing importers N120-140K per container per day in demurrage and storage charges. Port congestion costs Nigeria $55M daily — N600B/month in aggregate economic drag. Importers have zero visibility into where their containers are in the clearing process, cannot benchmark their clearing agents' performance, and discover cost overruns only when the final bill arrives.

PortPulse's deliberately manual approach is not a limitation — it is the design. By building the data layer through human updates from clearing agents and importers, PortPulse creates the tracking infrastructure that the Nigerian port system lacks. The data layer is the real product: over time, PortPulse will generate the most comprehensive dataset on Nigerian port operations ever assembled by a private company. This port intelligence — dwell analytics by cargo type, agent performance benchmarks, congestion patterns, seasonal trends — is strategically valuable to importers, government agencies, trade finance providers, and cargo insurers.

The go-to-market is agent-first: clearing agents get a free professional tool (the Agent Portal) that makes them better at their job. Agents bring their importer clients, who pay for analytics and alerts. The ANLCA (Association of Nigerian Licensed Customs Agents) is the primary distribution partnership, with the potential to onboard thousands of agents simultaneously. Each agent brings 5-15 importer clients. Each importer may use 2-3 agents, expanding the network. The two-sided flywheel turns human updates into institutional data, and institutional data into competitive advantage.

**Target:** 30 paying importer customers + 50 active agents within 90 days = ~N1.5-2.5M MRR (~$1,000-1,600).

---

## 2. Market Opportunity

### The Port Tax

Nigeria's ports function as an involuntary tax on every imported good. The inefficiency is not accidental — it is structural, and it creates enormous, quantifiable costs that importers absorb. This is the N1.2-1.8T ($800M-1.2B) annual spending pool from shared context — and it is growing as naira depreciation makes every dollar of demurrage more expensive.

### Quantified Pain

| Metric | Value | Source |
|--------|-------|--------|
| Average dwell time at Apapa | 21 days | NPA / SEREC Reports |
| Best-practice benchmark | 4-7 days | Global port averages |
| Demurrage cost | N120-140K/container/day | Shipping line schedules |
| Average excess dwell (vs. benchmark) | 14-17 days | Calculated |
| Cost per container of excess dwell | N1.68-2.38M ($1,100-1,550) | Calculated |
| Total port/logistics annual cost | N1.2-1.8T ($800M-1.2B) | NPA, SEREC |
| Daily national port congestion cost | $55M / N600B per month | NPA/LCCI |
| Containers through Lagos ports annually | ~1.8M TEUs | NPA Statistics |
| Active importers in Nigeria | ~50,000+ | CAC Registry |
| ANLCA-registered clearing agents | ~3,000+ | ANLCA |
| Maritime payments to foreign carriers | $7-9B annually | Industry reports |

### Why the Pain is Getting Worse

With the naira's 40.9% depreciation in 2024 and a further 25.3% in 2025, every dollar of demurrage now costs 66%+ more in naira terms than it did two years ago. An importer paying N130K/day in demurrage in 2023 is now paying the naira equivalent of what used to be N215K/day in purchasing power terms. The demand for cost visibility has never been more acute.

### Why Importers Cannot Solve This Today

1. **No real-time tracking system:** The NPA provides no digital container tracking that importers can access. Status updates come via phone calls to clearing agents who may not be truthful about progress.
2. **Clearing agent opacity:** Clearing agents are the intermediary between importers and the port. They handle customs documentation, inspections, and physical clearance. Importers cannot verify agent claims ("your container is waiting for inspection") against reality.
3. **Demurrage compounds silently:** Importers often do not know their exact demurrage exposure until the container exits the port. By then, bills of N2-5M per container are common — and non-negotiable.
4. **No performance benchmarking:** An importer using Agent A has no way to know that Agent B clears similar cargo 5 days faster on average. Agents compete on relationships, not measurable performance.

### Why Clearing Agents Cannot Solve This Today

5. **No professional tools:** The 3,000+ clearing agents registered with ANLCA operate with phone contacts, memory, and WhatsApp messages. They have no portfolio management system, no performance tracking, and no way to prove their competitiveness to prospective importer clients. A clearing agent managing 30-50 containers across multiple importers at Apapa and Tin Can has no system — just a mental map and a phone.
6. **Credibility gap:** When an agent tells a prospective client "I clear containers in 16 days on average," there is no data to back the claim. The best-performing agents have no way to differentiate from the worst. This hurts good agents and protects bad ones.
7. **Communication burden:** Agents spend hours daily fielding calls from importers asking "where is my container?" — the same question, repeated across 8-12 clients, multiple times a day. A system that proactively pushes status updates would reclaim hours of their time.

### Why Now

1. **NPA digitization efforts:** The Nigerian Ports Authority has been piloting digital systems (ISPS, Eto booking system) that create data trails. These are imperfect but represent new data availability.
2. **Shipping line portals:** Maersk, MSC, and CMA CGM now offer online container tracking that shows vessel arrival and discharge events. This data was previously unavailable digitally.
3. **Terminal operator systems:** APM Terminals (Apapa) and Onne port operators have introduced digital gate pass systems that create timestamped events.
4. **Importer frustration at peak:** Naira depreciation amplifies every day of excess dwell time.
5. **WhatsApp Business API maturity:** Termii and similar providers now offer reliable WhatsApp Business API access in Nigeria, making WhatsApp-first workflows viable for business tools.

### Total Addressable Market

**Importers (Paying Customers):**
- Active importers handling 5+ containers/month: ~8,000-12,000 businesses
- Small importers handling 1-3 containers/month: ~15,000-25,000 businesses (free tier targets)
- Average excess demurrage per mid-size importer per month: N5-25M
- SAM: ~5,000 mid-size importers with regular container volumes + ~15,000 small importers
- SOM (Year 1): 100-200 paying customers at N40-120K/month + 500+ free-tier users

**Clearing Agents (Free Users / Distribution Channel):**
- ANLCA-registered agents: ~3,000+
- Independent/unregistered agents: estimated 2,000-5,000 additional
- Each agent serves 5-15 importer clients on average
- SOM (Year 1): 200-500 active agents on free portal

**Expanded TAM (Years 2-3):**
- Clearing agents as SaaS customers (premium agent features): ~2,000 agents
- Freight forwarders: ~500 companies
- West African expansion (Ghana, Cote d'Ivoire, Senegal — identical port problems): 3-5x multiplier
- Government analytics contracts: NPA, Ministry of Transportation, NIMASA
- Trade finance data licensing: banks, insurance companies, development finance institutions

**Data Layer TAM (Strategic Asset):**
- Port dwell analytics as a data product: no comparable dataset exists
- Trade finance underwriting data: banks processing N2.5T+ in trade finance annually
- Cargo insurance pricing data: N1.56T insurance premium market (56% YoY growth)
- Supply chain verification data: enables invoice factoring and supply chain finance

---

## 3. Target Personas

### Primary (Phase 1): Chinedu — Clearing Agent

| Attribute | Detail |
|-----------|--------|
| **Title** | Licensed Customs Agent / Clearing Agent |
| **Organization** | Independent operator or small clearing firm (2-5 staff) |
| **Client base** | 8-15 importer clients |
| **Container volume** | 30-60 containers/month across all clients |
| **Location** | Lagos — operates between Apapa, Tin Can, and client offices |
| **Age** | 30-50 |
| **Education** | OND/HND, ANLCA member |
| **Tools today** | Phone contacts, WhatsApp, memory, paper notebook |
| **Phone** | Android (mid-range), often on 3G/4G but sometimes in low-connectivity port areas |
| **Pain frequency** | Hourly — fielding calls from importers asking "where is my container?" |
| **Income** | N80-200K per container cleared (N2.4-12M/month gross, variable) |

#### Chinedu's Daily Chaos

- **6 AM:** Heads to Apapa port. Has 8 containers to check on today across 5 different importers. His mental list: 3 at examination, 2 waiting for assessment, 2 just discharged, 1 ready for release.
- **8 AM:** Importer #1 calls — "What is happening with my machinery container?" Chinedu checks his WhatsApp history to remember the status. Tells the importer it should be examined today. He is not certain.
- **9 AM:** At the port, discovers the machinery container was actually examined yesterday but he missed the notification. Importer has been worrying for 24 hours unnecessarily.
- **11 AM:** Importer #3 calls. Then #5 calls. Then #1 calls again. Chinedu has spent 90 minutes on calls instead of physically clearing containers.
- **2 PM:** A new prospective importer asks for Chinedu's track record. "How fast do you clear containers?" Chinedu says "usually 16-18 days." He has no data. The prospective client has no way to verify. They go with whoever their friend recommends instead.
- **5 PM:** Chinedu realizes he forgot to follow up on Importer #4's duty assessment. That container has been sitting for 3 extra days. The importer will discover this when the demurrage bill arrives — and blame Chinedu.

#### Why Chinedu Adopts PortPulse (Free)

- **Immediate value:** Stops fielding repetitive status calls — importers check the dashboard or get WhatsApp updates instead
- **Professional credibility:** Can show prospective clients his tracked performance data ("my average clear time is 17 days — here is the data")
- **Portfolio management:** Sees all his containers across all clients in one view, with alerts when something needs attention
- **WhatsApp-native:** Updates milestones via WhatsApp message — no need to open a web app at the port
- **Zero cost:** Completely free. No catch. His importers pay; he does not.

#### Why Chinedu Brings Importers

- Chinedu tells his importer clients: "I now use PortPulse to track all your containers. You can see real-time status. Sign up for the importer dashboard — you will never need to call me for status again."
- This makes Chinedu look professional, reduces his call burden, and creates a paying customer for PortPulse
- **Each Chinedu brings 5-15 importers. Each importer pays N40-120K/month. Chinedu is both user and distribution channel.**

### Co-Primary (Phase 1): Ade — Import Manager

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

#### Ade's Weekly Nightmare

- **Monday:** 12 containers currently at the port. Ade calls clearing agent for status on each. Agent says: "5 are at examination, 3 waiting for duty assessment, 2 ready for release, 2 just arrived." Ade writes this in Excel. He cannot verify any of it.
- **Wednesday:** Warehouse manager calls — where is the raw material container? Production will stop Friday without it. Ade calls agent again. "It is at examination, should be done tomorrow." (Agent said this last Wednesday too.)
- **Thursday:** Finance department gets a demurrage invoice for N4.8M on 3 containers that dwelled 34 days each. Ade had estimated 21 days. The extra 13 days cost N5.4M total. He has no documentation of why the delays occurred.
- **Friday:** MD asks: "Why are we spending more on demurrage than last quarter?" Ade pulls up his Excel tracker. The data is incomplete, inconsistent, and 2 weeks stale. He cannot answer the question.

### Secondary: Funke — Supply Chain Director

Larger company (N200M+/month imports). Manages 3-5 clearing agents across multiple ports. Needs comparative performance data to negotiate better rates and hold agents accountable. Currently makes agent decisions based on relationships and anecdotes, not data.

### Tertiary (Phase 2+): Small Importer — Bola

| Attribute | Detail |
|-----------|--------|
| **Title** | Owner-operator |
| **Company** | Small trading company or retailer |
| **Import volume** | 1-3 containers/month |
| **Tools today** | WhatsApp messages to agent, hope |
| **Pain** | A single container stuck for 30 days can wipe out the profit margin on the entire shipment |
| **Price sensitivity** | Cannot justify N40K/month for a tracking tool — but desperately needs visibility |
| **PortPulse offer** | Free tier — track up to 3 containers/month, basic alerts. Upgrades when volume grows |

---

## 4. Problem Deep Dive

### Problem 1: Container Status is a Black Box

From the moment a container is discharged from a vessel at Apapa or Tin Can, the importer has near-zero visibility into its progress through the clearing pipeline:

```
Vessel Arrival -> Discharge -> Documentation -> Customs Assessment ->
Examination -> Duty Payment -> Release Order -> Gate Out
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

### Problem 5: Clearing Agents Have No Professional Tools

The 3,000+ clearing agents registered with ANLCA operate with phone contacts and memory. They have no portfolio management, no performance tracking, and no way to prove their competitiveness to prospective clients.

The best clearing agents in Lagos — those who consistently clear containers in 15-16 days — look identical to the worst agents who average 28 days. There is no marketplace, no rating system, no verifiable track record. Agents compete on personal relationships and word-of-mouth, not on demonstrated performance.

This problem compounds: importers cannot make informed agent selection decisions, so bad agents persist. Bad agents increase dwell times and costs across the system. The absence of performance data is not just an inconvenience — it is a structural market failure that keeps the entire port ecosystem inefficient.

**PortPulse's agent portal is not a feature — it is a standalone product for an overlooked segment.** It solves a genuine need that clearing agents have today, and it creates the data infrastructure that enables everything else.

### Problem 6: No Port Intelligence Exists

Nobody in Nigeria — not the NPA, not shipping lines, not research institutions — publishes reliable, granular, real-time data on port operations. Questions that should be answerable are not:

- What is the average dwell time at Apapa this month vs. last month?
- Which cargo types clear fastest? Which get stuck in examination?
- Is there a seasonal pattern to port congestion?
- How do dwell times at Tin Can compare to Apapa for the same cargo type?

This intelligence gap affects not just importers but also banks (trade finance risk assessment), insurers (cargo insurance pricing), government (port performance monitoring), and development agencies (infrastructure investment decisions).

**PortPulse will generate this data as a natural byproduct of its core tracking function.** Every milestone update from every agent and importer contributes to an aggregate intelligence layer that nobody else can produce.

---

## 5. Solution Overview

### Core Value Proposition

**For agents:** "Manage all your containers in one place. Stop fielding status calls. Prove your performance to clients."

**For importers:** "Know exactly where every container is, how much it is costing you per hour, and which clearing agent is actually earning their fee."

**For the ecosystem:** "PortPulse generates port intelligence that nobody else has — turning fragmented human updates into institutional data."

### How It Works — The Two-Sided System

```
AGENT SIDE (Free)                          IMPORTER SIDE (Paid)
─────────────────                          ───────────────────

Agent signs up (free)                      Importer signs up (paid tier)
        |                                          |
Agent adds containers                      Importer links to agent(s)
for each importer client                           |
        |                                  Dashboard shows:
Agent updates milestones                   - All containers across all agents
via WhatsApp or web portal                 - Running demurrage cost
        |                                  - Agent performance comparison
Timestamp captured                                 |
        |                                  Alert engine triggers:
Agent's portfolio view:                    - Free days expiring
- All containers across                    - Abnormal dwell times
  all clients                              - Cost thresholds exceeded
- Which need attention                     - Agent inactivity
- Performance stats                                |
                                           Quarterly analytics:
                                           - Demurrage trends
                                           - Agent benchmarks
                                           - Cargo type analysis
                                           - Port comparison

       DATA LAYER (The Real Product)
       ──────────────────────────────
       Every milestone update feeds into:
       - Port dwell analytics (aggregate)
       - Agent performance benchmarks (anonymized)
       - Cargo type clearing patterns
       - Port congestion indicators
       - Seasonal trend analysis
              |
       This data powers:
       - Trade finance risk assessment
       - Cargo insurance pricing
       - Government port monitoring
       - Published Port Intelligence Reports
```

### Key Design Decisions

1. **Manual milestone updates (Phase 1):** In the absence of reliable port APIs, milestones are updated by agents and importers. This is deliberate — it creates a tracked record even without automation, and it makes agents accountable because updates are timestamped. This "worse" approach (vs. automated GPS tracking) is good enough for a market that currently has nothing.

2. **Agent portal as co-equal Phase 1 product:** The agent portal is not a bolt-on feature for importers. It is a standalone product for clearing agents — a free professional tool that solves their real problems (portfolio management, status communication, credibility). Agents adopt because it makes them better at their job. Importers adopt because their agents are already on the platform.

3. **WhatsApp-first for agents:** Clearing agents live on WhatsApp and spend their days at port terminals with variable connectivity. The agent milestone update flow is WhatsApp-native: PortPulse sends a message with the container list, the agent replies with a number to update status. No web app required for the core workflow.

4. **Agents are free; importers pay:** The agent is the supply side of the data layer. Charging agents would reduce adoption and choke the data supply. The importer is the demand side — they pay for the analytics, alerts, and visibility that the agent data enables. This is the Google model: the product is free for the people who generate the data; the people who consume the analytics pay.

5. **Cost calculator as the hook:** Before even tracking containers, the landing page offers: "Enter your container count and average dwell time — see how much you are spending on demurrage." This immediate cost quantification drives importer conversions.

6. **Data layer as strategic asset:** As more agents and importers use PortPulse, aggregate data on dwell times by port, cargo type, and agent creates industry benchmarks that no individual actor could generate alone. This data is the moat, the future revenue engine, and the basis for fintech expansion.

7. **Free tier for small importers:** Importers with 1-3 containers/month get free access with basic tracking and alerts. This captures the long tail of small traders, feeds the data layer, and creates an upgrade path as their volume grows.

---

## 6. MVP Feature Set

### Phase 1A: Agent Portal + Core Tracking (Weeks 1-2)

| Feature | Priority | Description |
|---------|----------|-------------|
| **Agent signup and portal** | P0 | Agent signs up free with phone + OTP. Sees all containers assigned to them across all importer clients. Simple milestone update: tap container, tap milestone, confirm. |
| **WhatsApp milestone updates** | P0 | Agent receives daily WhatsApp message listing containers needing attention. Replies with number to update status. Example: "Container MSKU1234567 — Reply 1: Discharged, 2: Docs Submitted, 3: Assessment, 4: Examination, 5: Duty Paid, 6: Released, 7: Gate Out" |
| **Container registration** | P0 | Enter container number, vessel, arrival date, agent, cargo type |
| **Milestone tracker** | P0 | Track milestones: discharged, docs submitted, assessment, examination, duty payment, release order, gate out |
| **Dwell time calculator** | P0 | Auto-calculate days since arrival, days at each milestone |
| **Demurrage calculator** | P0 | Running cost based on shipping line rates (configurable per container) |
| **Free days countdown** | P0 | Alert when free days are expiring |
| **Container dashboard** | P0 | All active containers: status, dwell days, running cost, next milestone |
| **Alert system (WhatsApp + SMS)** | P0 | Alerts for: free days expiring, abnormal dwell, cost threshold, agent inactivity |
| **Excel export** | P0 | Export container tracking data and cost report |
| **Free tier** | P0 | Up to 3 active containers/month, basic alerts, single agent link — no charge |
| **Importer-agent linking** | P0 | Importer invites agent by phone number; agent sees importer's containers in their portal |

### Phase 1B: Agent Performance + Analytics (Weeks 3-4)

| Feature | Priority | Description |
|---------|----------|-------------|
| Agent performance dashboard | P1 | Avg dwell time per agent, cost per container, comparison chart |
| Agent portfolio view (agent side) | P1 | Agent sees their own performance stats, total containers managed, average clear time — data to show prospective clients |
| Historical analytics | P1 | Monthly/quarterly trends: total demurrage, avg dwell, cost per container |
| Multi-port support | P1 | Track containers across Apapa, Tin Can, Onne, Rivers ports |
| Cargo type benchmarks | P1 | Compare your dwell time to averages for same cargo type |
| Document upload | P1 | Attach Bill of Lading, customs forms, duty receipts per container |
| USSD container status check | P1 | Dial *XXX# to check container status and dwell time. Works on 2G. Critical for agents and importers in low-connectivity areas. |

### Phase 2: Intelligence Layer (Weeks 5-8)

| Feature | Priority | Description |
|---------|----------|-------------|
| Delay prediction | P2 | Based on historical data, predict expected clearance date for new containers |
| Cost optimization alerts | P2 | "Switching from Agent A to Agent B for food imports would save ~N950K/month" |
| Shipping line comparison | P2 | Compare free day allowances and demurrage rates across shipping lines |
| Port congestion indicator | P2 | Aggregate data to show current port congestion levels by port and terminal |
| Published Port Intelligence Report | P2 | Monthly anonymized report: average dwell times, congestion trends, cargo type patterns. Published on LinkedIn, shared in trade WhatsApp groups. Positions PortPulse as the data authority. |
| API for data integration | P2 | Allow customers to pull data into their ERP/accounting systems |

### Phase 3: Data Monetization + Fintech Foundation (Months 3-6)

| Feature | Priority | Description |
|---------|----------|-------------|
| Government dashboard | P3 | Anonymized aggregate analytics for NPA/Ministry of Transportation — offered free initially to build relationship, evolves to contract |
| Trade finance data API | P3 | Banks can verify container status for letter-of-credit processing. Reduces LC verification time and risk. Per-query or subscription pricing. |
| Insurance data partnership | P3 | Dwell time data informs cargo insurance pricing. Partnership with Nigerian insurers for risk-adjusted premiums. |
| Automated data ingestion | P3 | Shipping line website scraping for vessel arrival/discharge events. NPA vessel schedule integration. Terminal gate pass data where available. |
| Supply chain finance integration | P3 | Verified delivery data (gate-out confirmation) can serve as trigger for invoice factoring — integration point with trade finance platforms |
| Agent marketplace | P3 | Top-performing agents (verified by PortPulse data) featured to importers seeking agents. Agents pay for premium placement. |

### Explicitly Out of Scope (Phase 1)

- Automated data from port/terminal systems (no reliable APIs exist yet — this is Phase 3)
- Customs documentation filing
- Duty payment processing
- Freight forwarding or booking
- Insurance processing
- Agent-to-agent comparison visible to agents (agents see only their own data)

---

## 7. Key Screens & UX

### Screen 1: Container Dashboard (Importer Home)

```
+----------------------------------------------+
|  PortPulse                [+ Add Container]   |
+----------------------------------------------+
|                                               |
|  Active Containers: 14                        |
|  Total Running Demurrage: N 4,280,000         |
|  ───────────────────────────────────────────  |
|  Avg Dwell Time: 19 days                      |
|  Containers in Free Period: 3                 |
|  Containers Accruing Charges: 11              |
|                                               |
|  ── ALERTS ─────────────────────────────────  |
|  [!] MSKU1234567 — 28 days dwell, N2.1M       |
|      demurrage. At Examination for 8 days      |
|  [!] TCNU9876543 — Free days expire in         |
|      2 days. Status: Awaiting Assessment       |
|  [!] CMAU4567890 — Agent has not updated       |
|      status in 5 days                          |
|                                               |
|  ── CONTAINER LIST ─────────────────────────  |
|  Container    | Agent    | Days | Cost         |
|  MSKU1234567  | ChiClear | 28   | N2.1M        |
|  TCNU9876543  | LagosLog | 12   | N0           |
|  CMAU4567890  | ChiClear | 22   | N1.04M       |
|  HLCU7654321  | PortPro  | 15   | N130K        |
|  ...                                          |
|                                               |
|  [Agent Comparison]  [Export to Excel]         |
+----------------------------------------------+
```

### Screen 2: Container Detail

```
+----------------------------------------------+
|  Container: MSKU1234567                       |
|  Vessel: Maersk Sealand | Arrived: 21 Feb    |
|  Agent: ChiClear Logistics                    |
|  Cargo: Industrial Machinery (HS 8429)        |
+----------------------------------------------+
|                                               |
|  Dwell Time: 28 days | Demurrage: N2.1M       |
|  Free Days: 14 (expired 07 Mar)               |
|  Daily Rate: N130,000                          |
|                                               |
|  ── MILESTONE PROGRESS ────────────────────── |
|                                               |
|  [done] Vessel Arrived      21 Feb            |
|  [done] Discharged          23 Feb  (2 days)  |
|  [done] Docs Submitted      25 Feb  (2 days)  |
|  [done] Customs Assessment  01 Mar  (4 days)  |
|  [now]  Examination         Started 05 Mar    |
|         >> 16 days at this stage (avg: 3)     |
|  [ ]    Duty Payment        —                 |
|  [ ]    Release Order       —                 |
|  [ ]    Gate Out            —                 |
|                                               |
|  ── DEMURRAGE ACCUMULATION CHART ───────────  |
|  |         _______________/                    |
|  |        /                                    |
|  |_______/ Free period ends                    |
|  |______________________________               |
|  Day 1    Day 14    Day 21    Day 28           |
|                                               |
|  [Update Milestone]  [Call Agent]             |
|  [Documents]         [Export]                  |
+----------------------------------------------+
```

### Screen 3: Agent Performance Comparison (Importer View)

```
+----------------------------------------------+
|  Agent Performance (Last 6 Months)            |
+----------------------------------------------+
|                                               |
|  Agent        | Containers | Avg Dwell | Avg Cost |
|  ───────────────────────────────────────────  |
|  PortPro      | 34         | 16 days   | N260K   |
|  ChiClear     | 28         | 22 days   | N1.04M  |
|  LagosLog     | 19         | 18 days   | N520K   |
|                                               |
|  Estimated Annual Savings:                    |
|  If all containers cleared at PortPro's       |
|  rate: N 14,200,000 / year saved              |
|                                               |
|  [Bar chart comparing agents by dwell]        |
|  [Bar chart comparing agents by cost]         |
|                                               |
|  Breakdown by Cargo Type:                     |
|  Food/Agri: PortPro 14d | ChiClear 19d       |
|  Machinery: PortPro 18d | ChiClear 25d       |
|  Chemicals: LagosLog 16d | ChiClear 21d      |
|                                               |
|  [Export Full Report]                          |
+----------------------------------------------+
```

### Screen 4: Agent Portal — Portfolio View (Agent's View)

```
+----------------------------------------------+
|  PortPulse Agent                    Chinedu   |
+----------------------------------------------+
|                                               |
|  Your Containers: 38 active                   |
|  Needing Update: 7                            |
|  Your Avg Clear Time: 17 days                 |
|  ───────────────────────────────────────────  |
|                                               |
|  ── NEEDS ATTENTION ────────────────────────  |
|  [!] MSKU1234567 (Ade Imports)                |
|      At Examination — 8 days (avg: 3)         |
|      [Tap to Update Status]                   |
|  [!] CMAU4567890 (Zenith Trading)             |
|      No update in 5 days                      |
|      [Tap to Update Status]                   |
|                                               |
|  ── ALL CONTAINERS ─────────────────────────  |
|  Client          | Container   | Stage        |
|  Ade Imports     | MSKU1234567 | Examination  |
|  Ade Imports     | TCNU9876543 | Assessment   |
|  Zenith Trading  | CMAU4567890 | Docs         |
|  Beta Foods      | HLCU7654321 | Released     |
|  ...                                          |
|                                               |
|  ── YOUR PERFORMANCE ───────────────────────  |
|  Avg clear time (6 months): 17 days           |
|  Total containers cleared: 124                |
|  On-time rate: 78%                            |
|  [Share Performance Card]                     |
|                                               |
|  Note: You cannot see demurrage costs or      |
|  other agents' data.                          |
+----------------------------------------------+
```

### Screen 5: Agent WhatsApp Milestone Update Flow

```
PortPulse Bot (WhatsApp):
─────────────────────────
Good morning Chinedu. You have 7 containers
needing update:

1. MSKU1234567 (Ade Imports) — Examination
2. TCNU9876543 (Ade Imports) — Assessment
3. CMAU4567890 (Zenith Trading) — Docs
4. TRIU3456789 (Beta Foods) — Discharged
5. OOLU5678901 (Gamma Ltd) — Assessment
6. MSCU6789012 (Ade Imports) — Duty Payment
7. EISU7890123 (Delta Corp) — Examination

Reply with: [container #] [new status]
Example: "1 5" = Container 1 moved to Duty Paid

Status codes:
1=Discharged 2=Docs 3=Assessment
4=Examination 5=Duty Paid 6=Released 7=Gate Out

──────────────
Chinedu replies: "1 5"

PortPulse Bot:
Updated: MSKU1234567 moved to "Duty Paid"
Timestamp: 22 Mar 2026 09:14 AM
Ade Imports has been notified.

Remaining: 6 containers need update.
```

### Screen 6: Add Container (Simple Form)

- Container number (validated format: 4 letters + 7 digits)
- Vessel name (autocomplete from recent vessels)
- Arrival date
- Clearing agent (select from saved agents or add new by phone number)
- Cargo description + HS code (optional)
- Shipping line (select — auto-populates demurrage rate)
- Free days (auto-populated based on shipping line, editable)
- Daily demurrage rate (auto-populated, editable)
- Submit — container appears on dashboard immediately

### Screen 7: USSD Container Status Check

```
Dial *384*PPL#

Screen 1: Enter container number
> MSKU1234567

Screen 2:
MSKU1234567
Status: Examination
Dwell: 28 days
Demurrage: N2,100,000
Last update: 22 Mar 09:14

1. Check another
2. Exit
```

---

## 8. Technical Architecture

### System Architecture

```
+-------------------+     +----------------+
|  Next.js App       |---->| Supabase DB    |
|  (Vercel)          |     | (PostgreSQL)   |
|                    |     +-------+--------+
|  - Importer UI     |             |
|  - Agent Portal    |             |
+--------+-----------+     +-------+--------+
         |                 | Vercel Cron     |
         |                 | (Daily alerts,  |
         |                 |  demurrage calc)|
         |                 +-------+--------+
         |                         |
         +---> Termii (WhatsApp Business API + SMS)
         +---> Africa's Talking (USSD)
         +---> Paystack (subscription billing)
         +---> Resend (email reports)
         +---> Supabase Realtime (live milestone notifications)
```

### Data Model (Core Tables)

```sql
-- Business accounts (importers)
businesses (
  id UUID PRIMARY KEY,
  name VARCHAR NOT NULL,
  industry VARCHAR,
  import_volume_monthly INTEGER,
  primary_port VARCHAR,
  tier VARCHAR DEFAULT 'free', -- free, starter, professional, enterprise
  created_at TIMESTAMP,
  owner_user_id UUID REFERENCES auth.users
)

-- Clearing agents
agents (
  id UUID PRIMARY KEY,
  company_name VARCHAR,
  contact_name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  email VARCHAR,
  whatsapp VARCHAR,
  license_number VARCHAR, -- ANLCA license
  ports_served TEXT[], -- array of port names
  avg_dwell_time FLOAT, -- calculated, updated daily
  total_containers_tracked INTEGER DEFAULT 0,
  total_containers_cleared INTEGER DEFAULT 0,
  agent_user_id UUID REFERENCES auth.users, -- for portal access
  whatsapp_session_active BOOLEAN DEFAULT false,
  created_at TIMESTAMP
)

-- Containers
containers (
  id UUID PRIMARY KEY,
  business_id UUID REFERENCES businesses,
  agent_id UUID REFERENCES agents,
  container_number VARCHAR NOT NULL, -- validated format: 4 letters + 7 digits
  vessel_name VARCHAR,
  shipping_line_id UUID REFERENCES shipping_lines,
  cargo_description TEXT,
  hs_code VARCHAR,
  cargo_type VARCHAR, -- food, machinery, chemicals, textiles, etc.
  port VARCHAR DEFAULT 'Apapa',
  arrival_date DATE NOT NULL,
  discharge_date DATE,
  gate_out_date DATE,
  free_days INTEGER DEFAULT 14,
  daily_demurrage_rate NUMERIC DEFAULT 130000, -- NGN
  total_demurrage NUMERIC DEFAULT 0, -- calculated
  current_milestone VARCHAR DEFAULT 'vessel_arrived',
  status VARCHAR DEFAULT 'active', -- active, cleared, archived
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Milestones (events in the clearing process)
milestones (
  id UUID PRIMARY KEY,
  container_id UUID REFERENCES containers,
  milestone_type VARCHAR NOT NULL,
  -- Types: vessel_arrived, discharged, docs_submitted,
  -- customs_assessment, examination_start, examination_end,
  -- duty_payment, release_order, gate_out
  timestamp TIMESTAMP NOT NULL,
  updated_by_user_id UUID,
  updated_by_role VARCHAR, -- importer, agent
  update_channel VARCHAR, -- web, whatsapp, ussd
  notes TEXT,
  created_at TIMESTAMP
)

-- Shipping lines (demurrage rates)
shipping_lines (
  id UUID PRIMARY KEY,
  name VARCHAR NOT NULL,
  default_free_days INTEGER,
  demurrage_rate_per_day NUMERIC,
  currency VARCHAR DEFAULT 'NGN',
  last_updated TIMESTAMP
)

-- Alerts
alerts (
  id UUID PRIMARY KEY,
  container_id UUID REFERENCES containers,
  business_id UUID REFERENCES businesses,
  type VARCHAR NOT NULL,
  -- Types: free_days_expiring, abnormal_dwell, cost_threshold,
  -- agent_inactive, daily_summary
  message TEXT,
  status VARCHAR DEFAULT 'pending', -- pending, sent, acknowledged
  sent_via VARCHAR, -- whatsapp, sms, email, push
  sent_at TIMESTAMP,
  created_at TIMESTAMP
)

-- Demurrage cost log (daily snapshot for analytics)
demurrage_log (
  id UUID PRIMARY KEY,
  container_id UUID REFERENCES containers,
  date DATE NOT NULL,
  days_in_port INTEGER,
  days_chargeable INTEGER,
  daily_rate NUMERIC,
  cumulative_cost NUMERIC
)

-- Port intelligence (aggregate data, anonymized)
port_intelligence (
  id UUID PRIMARY KEY,
  port VARCHAR NOT NULL,
  period_start DATE,
  period_end DATE,
  avg_dwell_time FLOAT,
  median_dwell_time FLOAT,
  total_containers_tracked INTEGER,
  avg_dwell_by_cargo_type JSONB, -- { "food": 14.2, "machinery": 22.1, ... }
  congestion_indicator VARCHAR, -- low, medium, high, critical
  created_at TIMESTAMP
)

-- Agent-importer relationships
agent_business_links (
  id UUID PRIMARY KEY,
  agent_id UUID REFERENCES agents,
  business_id UUID REFERENCES businesses,
  status VARCHAR DEFAULT 'active', -- active, inactive
  linked_at TIMESTAMP
)
```

### Alert Engine (Cron Job — Runs Daily at 6 AM WAT)

1. **Free days expiring:** For each active container, calculate `arrival_date + free_days`. If expiration is within 3 days, send alert via WhatsApp (primary) + SMS (fallback).
2. **Abnormal dwell at milestone:** For each container, compare time at current milestone against average for that milestone + cargo type. If >2x average, send alert.
3. **Cost threshold:** If cumulative demurrage exceeds user-configured threshold (default: N1M), send alert.
4. **Agent inactivity:** If no milestone update from agent in 5+ days for an active container, send alert to importer.
5. **Daily summary (7 AM WAT):** WhatsApp digest to importers: total active containers, total running demurrage, top 3 actions needed.
6. **Agent morning prompt (6:30 AM WAT):** WhatsApp message to each active agent listing containers needing status updates (the WhatsApp milestone update flow from Screen 5).

### Agent Portal Architecture

- Separate Next.js route group: `/agent/[agentId]/...`
- Authentication: agent signs up with phone number + OTP (Supabase Auth)
- Agent sees only containers assigned to them (Row Level Security in Supabase)
- Agent can: update milestones, add notes, view their own performance stats, share performance card
- Agent cannot: see demurrage costs, see other agents' data, see importer analytics
- When agent updates a milestone, real-time notification to importer via Supabase Realtime + WhatsApp
- Agent performance stats calculated nightly by cron job (avg dwell time, total cleared, on-time rate)

### WhatsApp Integration Architecture (Termii)

```
Agent                    Termii WhatsApp          PortPulse Backend
  |                      Business API                    |
  |                           |                          |
  |  <-- Morning prompt ------+---- Cron generates ------+
  |      (container list)     |     agent message        |
  |                           |                          |
  |  -- Reply "1 5" --------->|---- Webhook fires ------>|
  |                           |                          |
  |                           |     Parse: container 1,  |
  |                           |     new status: duty_paid|
  |                           |     Update DB            |
  |                           |     Notify importer      |
  |  <-- Confirmation --------+---- Response sent -------+
  |      "Updated MSKU..."   |                          |
```

- Termii WhatsApp Business API handles message sending and receiving
- Webhook endpoint: `/api/whatsapp/webhook` receives inbound agent messages
- Parser extracts container reference and status code from free-text reply
- Fuzzy matching handles common variations ("1,5" or "1-5" or "container 1 duty paid")
- Fallback: if parser cannot interpret the message, reply with "I did not understand. Please reply in format: [number] [status]. Example: 1 5"

### USSD Architecture (Africa's Talking)

```
User dials *384*PPL#
        |
Africa's Talking USSD gateway
        |
POST /api/ussd/callback
        |
Session flow:
  Screen 1: "Enter container number"
  Screen 2: Status display (milestone, dwell time, demurrage)
  Screen 3: "Check another? 1=Yes 2=Exit"
```

- Africa's Talking manages USSD sessions
- Endpoint: `/api/ussd/callback` handles session state
- No authentication required — container number is the lookup key (public status check)
- Response formatted for USSD character limits (160 chars per screen)
- Works on all 138.7M mobile connections including 42% on 2G

### Data Sources (Current and Planned)

| Source | Data Available | Integration | Status |
|--------|---------------|-------------|--------|
| Manual entry (web) | All milestones | Direct UI | Phase 1 |
| Agent portal (web) | Milestone updates | Agent UI | Phase 1 |
| WhatsApp (agent) | Milestone updates | Termii webhook | Phase 1 |
| USSD (status check) | Read-only status | Africa's Talking | Phase 1B |
| Shipping line websites | Vessel arrival, discharge | Web scraping | Phase 2 |
| NPA vessel schedule | Expected arrival dates | Public data | Phase 2 |
| Terminal operator APIs | Gate events (if available) | API | Phase 3 |

### Offline Architecture

- All container data cached in IndexedDB on the importer's browser
- Milestone updates queued in localStorage if offline, synced when connection returns
- Agent portal designed for intermittent connectivity (common at port terminals)
- Optimistic UI: updates appear immediately, reconcile in background
- PWA manifest for "install to homescreen" — works offline for reading cached data
- Clear online/offline indicator in header

### Infrastructure Costs (Monthly Estimate)

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | $0 -> $20 | Free tier for MVP, Pro tier at scale |
| Supabase | $0 -> $25 | Free tier sufficient for first 100 customers |
| Termii | ~$50-100 | WhatsApp/SMS — ~2,000-5,000 messages/month (agent prompts + importer alerts) |
| Africa's Talking | ~$20-40 | USSD sessions — ~500-1,000/month |
| Resend | $0 | Free tier for email reports |
| **Total** | **~$70-185/month** | Low operating cost — profitable from customer #2 |

---

## 9. Pricing & Unit Economics

### Pricing Tiers

| Tier | Price (Monthly) | Target | Features |
|------|----------------|--------|----------|
| **Free** | N0 | 1-3 containers/month, small importers | Up to 3 active containers, 1 agent link, basic WhatsApp alerts, USSD status check |
| **Starter** | N40,000 (~$26) | 5-10 containers/month | Up to 15 active containers, 2 agent portals, demurrage tracking, Excel export, WhatsApp/SMS alerts |
| **Professional** | N60,000 (~$39) | 10-30 containers/month | Unlimited containers, 5 agent portals, agent comparison, historical analytics, PDF reports, cargo type benchmarks |
| **Enterprise** | N120,000 (~$78) | 30+ containers/month | Unlimited everything, multi-port, priority support, API access, custom demurrage rate tables, dedicated account manager (WhatsApp) |

**Agent portal: always free.** No tier, no limit, no catch.

### Unit Economics Per Customer

| Metric | Free | Starter | Professional | Enterprise |
|--------|------|---------|-------------|------------|
| Monthly revenue | N0 | N40,000 | N60,000 | N120,000 |
| Messaging costs | N500 | N2,000 | N5,000 | N10,000 |
| Infrastructure share | N500 | N1,500 | N2,000 | N3,000 |
| **Gross margin** | **-N1,000** | **N36,500 (91%)** | **N53,000 (88%)** | **N107,000 (89%)** |

Free tier cost is negligible at scale (N1,000/user/month) and generates data + upgrade pipeline.

### Value Proposition Math

For a Professional-tier customer importing 15 containers/month:
- **Current average excess dwell:** 14 days x 15 containers = 210 container-days
- **If PortPulse reduces excess dwell by just 2 days per container:** 30 container-days saved
- **At N130K/day demurrage:** N3,900,000 saved per month
- **PortPulse cost:** N60,000/month
- **ROI:** 65x return on investment

Even a 1-day improvement in average dwell time pays for PortPulse 30 times over. This makes the sales conversation easy.

### Revenue Projections

| Milestone | Paying Customers | Free Users | Active Agents | MRR (NGN) | MRR (USD) |
|-----------|-----------------|------------|---------------|-----------|-----------|
| Month 3 | 30 | 100 | 50 | N1,800,000 | ~$1,170 |
| Month 6 | 80 | 300 | 150 | N4,800,000 | ~$3,120 |
| Month 12 | 200 | 800 | 400 | N12,000,000 | ~$7,800 |
| Month 18 | 400 | 1,500 | 700 | N24,000,000 | ~$15,600 |
| Month 24 | 600 | 3,000 | 1,000 | N36,000,000+ | ~$23,400 |

### Path to $10K MRR

$10K MRR = ~N15.4M/month

**Route:** 250 paying customers at blended N62K/month. Achievable by Month 14-16 through agent-driven distribution.

### Future Revenue Streams (Phase 3+)

| Stream | Model | Estimated Revenue |
|--------|-------|-------------------|
| Port Intelligence Reports (premium) | Subscription: N200K/month for detailed analytics | N2-5M/month at 15-25 subscribers |
| Trade finance data API | Per-query: N5K per container verification | N1-3M/month at scale |
| Cargo insurance data partnership | Revenue share: 5-10% of premium reduction enabled | Variable — potentially N5-10M/month |
| Agent marketplace (premium placement) | N50-100K/month per agent | N2-5M/month at 50-100 agents |
| Government contracts (NPA analytics) | Project-based: N5-20M/contract | Variable |

---

## 10. Go-to-Market

### Phase 1: ANLCA Partnership + Agent Onboarding (Weeks 1-3)

This is the primary GTM strategy. Clearing agents are the distribution channel.

1. **ANLCA Partnership:**
   - Approach ANLCA (Association of Nigerian Licensed Customs Agents) with offer: "Free professional tool for all ANLCA members — portfolio management, performance tracking, client communication."
   - ANLCA endorsement gives instant credibility with 3,000+ registered agents
   - Offer to present at ANLCA monthly meetings in Lagos
   - Co-branded: "PortPulse for ANLCA Members" — shows institutional backing

2. **First 20 Agents (Manual Onboarding):**
   - Identify 20 active clearing agents through family network (Port Harcourt/Rivers), ANLCA directory, and LinkedIn
   - Personal WhatsApp outreach: "I built a free tool that helps clearing agents manage their containers and stop fielding status calls. Can I show you in 5 minutes?"
   - Walk each agent through signup and first WhatsApp milestone update
   - Goal: 20 agents onboarded in Week 2, each managing 15-40 containers

3. **Agent-to-Importer Conversion:**
   - Each agent tells their importer clients: "I now track your containers in PortPulse — sign up for the dashboard to see real-time status."
   - PortPulse sends a WhatsApp message to the importer on the agent's behalf: "Your clearing agent [name] has started tracking your containers in PortPulse. View your dashboard: [link]"
   - Goal: 20 agents bring 80-150 importers to trial, 25-40 convert to paid

4. **Goal:** 50 agents, 30 paying importers, 100 free-tier importers by end of Week 6

### Phase 2: Content + Demurrage Calculator (Weeks 4-8)

1. **Demurrage Cost Calculator (Landing Page Hook):**
   - Before even tracking containers, the landing page offers: "How much are you spending on demurrage? Enter your numbers."
   - Input: containers/month, average dwell time, shipping line
   - Output: "You are spending approximately N[X]M per month on excess demurrage. Here is how PortPulse reduces that."
   - Email capture for the calculation result

2. **Monthly Port Intelligence Report:**
   - Aggregate data (anonymized) on average dwell times, port congestion, cargo type patterns
   - Published as LinkedIn article and shared in import/export WhatsApp groups
   - Positions PortPulse as the data authority on Nigerian port operations
   - Free report drives inbound interest from importers and agents

3. **LinkedIn Series: "The True Cost of Demurrage":**
   - Weekly posts with calculations, case studies, and benchmarks
   - Target audience: import managers, logistics managers, MDs of manufacturing companies
   - Engagement drives demo requests

### Phase 3: Association & Community Partnerships (Months 3-6)

1. **MAN (Manufacturers Association of Nigeria):**
   - "PortPulse for MAN Members" — discounted pricing, co-branded
   - MAN members are heavy importers (raw materials, machinery, intermediate goods)
   - Present Port Intelligence Report at MAN quarterly meetings

2. **LCCI (Lagos Chamber of Commerce):**
   - Sponsor/present at LCCI trade events
   - Importers attend these events — direct access to decision-makers

3. **NACCIMA partnership:**
   - National chamber of commerce endorsement
   - Regional chapter distribution

4. **Family network (Port Harcourt):**
   - Oil & gas, manufacturing importers in Rivers State
   - Personal introductions for initial validation and testimonials

### Phase 4: Government Engagement (Months 6-12)

1. **NPA Data Partnership:**
   - Offer anonymized Port Intelligence data to NPA free of charge
   - "We have data on actual dwell times across 500+ containers/month. Here is what it shows about Apapa performance."
   - Builds relationship, regulatory goodwill, and potentially preferential data access in return
   - Goal: NPA sees PortPulse as private-sector ally for port transparency

2. **Ministry of Transportation:**
   - Port intelligence data supports policy decisions
   - PortPulse data can demonstrate the economic cost of port inefficiency more precisely than any government study

3. **World Bank / Development Finance:**
   - NiPHaST ($3.5B) and FINCLUDE ($500M) programs focus on trade facilitation
   - PortPulse data can serve as monitoring tool for port reform programs
   - Potential grant funding or procurement contracts

---

## 11. Government Data Strategy

This section is unique to PortPulse. The data PortPulse generates has strategic value beyond the core product.

### What PortPulse Knows That Nobody Else Knows

As PortPulse scales, it will accumulate:

1. **Real-time port congestion data:** Aggregate container counts by port, terminal, and milestone stage — updated daily by agent milestone reports
2. **Dwell time benchmarks by cargo type:** How long does food cargo take vs. machinery vs. chemicals? Which HS codes get stuck at examination?
3. **Seasonal patterns:** Does dwell time spike in December (holiday season)? During elections? During fuel scarcity?
4. **Agent performance data:** Which agents clear fastest? Is there correlation between agent and cargo type?
5. **Shipping line comparison:** Which lines offer more free days? Which have lower effective demurrage costs?
6. **Cost of inefficiency:** Quantified, granular, real-time — N[X]B in excess demurrage costs this month

No government agency, research institution, or private company in Nigeria can produce this data today.

### Strategic Value of This Data

| Stakeholder | What They Need | How PortPulse Provides It |
|-------------|---------------|--------------------------|
| NPA | Port performance monitoring | Anonymized dwell time trends by port/terminal |
| Ministry of Transportation | Policy evidence | Quantified cost of port inefficiency |
| Trade finance banks | LC risk assessment | Container status verification for letter-of-credit processing |
| Cargo insurers | Risk-adjusted pricing | Dwell time data by cargo type and port informs premium calculations |
| Development agencies (World Bank, AfDB) | Reform monitoring | Port performance metrics for infrastructure investment programs |
| Shipping lines | Nigerian port intelligence | How their containers perform relative to competitors at Nigerian ports |

### The Tolaram Lesson Applied

Tolaram built logistics infrastructure for noodles, and it became a standalone business (65% revenue from non-Tolaram clients). PortPulse builds data infrastructure for container tracking, and it becomes a standalone data product. The parallel is direct:

- **Tolaram:** Product (noodles) is simple. Infrastructure (logistics network) is the moat and the second business.
- **PortPulse:** Product (container tracking) is simple. Infrastructure (port intelligence data) is the moat and the second business.

The data layer is not a nice-to-have. It is the strategic reason PortPulse matters at a scale beyond its direct customer revenue.

---

## 12. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **Data entry fatigue** — agents stop updating milestones after initial enthusiasm | High | Critical | WhatsApp-first updates reduce friction (reply "1 5" instead of opening a web app). Daily morning prompt creates habit loop. Gamification: track update consistency, show agents their response rate. Make updates dead-simple (one-tap milestone advance on web, single reply on WhatsApp). Social pressure: importers can see "last updated" timestamp — agents who go dark look unprofessional. |
| 2 | **Agent resistance** — clearing agents refuse to use the portal because transparency threatens their information advantage | Medium | High | Position portal as professionalism tool, not surveillance. Good agents welcome transparency because it differentiates them from bad agents. ANLCA endorsement normalizes adoption. Start with progressive agents who see the competitive advantage. If agents refuse, the importer's pain is proven — they switch to agents who use PortPulse. Agents cannot see demurrage costs or other agents' data — the portal serves them, not just the importer. |
| 3 | **Inaccurate data** — manual updates are delayed or incorrect, eroding trust in the system | Medium | High | Cross-reference with shipping line vessel data (automated, Phase 2). Flag when manual updates conflict with known data points. Show "last updated" timestamps prominently. Eventually automate with terminal data (Phase 3). WhatsApp timestamps provide independent verification of when agent reported an update. |
| 4 | **Small market ceiling** — only ~5,000-10,000 regular importers in Nigeria | Medium | Medium | Free tier captures the long tail of small importers (15,000-25,000). Clearing agents are an additional user segment. Data monetization (trade finance, insurance) creates revenue beyond direct subscriptions. West African expansion (Ghana, Cote d'Ivoire have similar port problems) multiplies the market 3-5x. Government contracts add revenue without additional users. |
| 5 | **NPA builds a tracking system** — government digitizes and makes container tracking free | Low | High | NPA's track record on digital delivery is poor (Eto system still unreliable after 3 years). Even if NPA provides raw data, PortPulse adds analytics, agent comparison, cost calculation, alerts, and the agent professional tool layer. Become the analytics layer on top of NPA data — NPA data would actually strengthen PortPulse (automated data source). Proactive government engagement (Section 11) makes PortPulse a partner, not a competitor to NPA. |
| 6 | **Low willingness to pay** for a tracking tool from small/mid importers | Medium | Medium | Anchor on demurrage savings: "N60K/month vs. N3.9M in demurrage savings." Free tier eliminates adoption risk for small importers. The agent brings the importer (not cold outreach), so the importer already trusts the recommendation. ROI is so clear (65x) that budget approval is straightforward. |
| 7 | **Agent co-option** — PortPulse becomes too valuable to agents, who pressure for features that serve their interests over importers' | Low | Medium | Maintain the importer as the paying customer. Product decisions always serve the payer. Agent portal is deliberately limited (no cost data, no cross-agent comparison). If agents want premium features (client CRM, invoicing), offer them at a price — but never compromise importer transparency. |
| 8 | **WhatsApp API instability** — Termii or Meta changes WhatsApp Business API terms, pricing, or availability | Medium | Medium | SMS fallback for all critical communications. USSD as secondary channel. Web portal always available. Never depend on a single communication channel. Monitor Termii alternatives (Twilio, MessageBird) as backup providers. |
| 9 | **Data privacy concerns** — importers or agents worry about competitive data being exposed | Medium | Medium | Strict anonymization in all aggregate data products. Row Level Security in Supabase ensures users see only their own data. Agent performance data visible only to the importer who linked that agent — never published without consent. Government data always anonymized and aggregated. Clear privacy policy. |
| 10 | **Competitor copies the model** — a funded startup or global logistics platform builds Nigeria-specific tracking | Low-Medium | Medium | First-mover data advantage: PortPulse's historical data grows more valuable over time and cannot be replicated by a new entrant. Agent network is a distribution moat — switching costs for agents who have built their portfolio on PortPulse. ANLCA partnership creates institutional barrier. The data layer (port intelligence) is the moat, not the CRUD app. |

---

## 13. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|:---:|-----------|
| **Build Speed** | 9 | Core is CRUD — container entry, milestone updates, date math for dwell calculations. WhatsApp integration via Termii is straightforward (webhook + message send). Agent portal is a scoped-down version of the importer UI. USSD via Africa's Talking is templated. 2-3 weeks to full Phase 1. |
| **Time to Revenue** | 7 | Agent-first GTM means importers arrive pre-qualified (their agent is already on the platform). The demurrage cost calculator on the landing page quantifies value immediately. First paying customers within 30-45 days of agent onboarding. Faster than v1 estimate because agents bring importers to you. |
| **Market Size** | 7 | Direct importer market is bounded (~5,000-10,000 regular importers), but expanding the frame changes the math: 15,000-25,000 small importers (free tier -> upgrade), 3,000-5,000 clearing agents (free users, future paid features), data monetization (trade finance, insurance, government), and West African expansion (3-5x). The data layer TAM is larger than the subscription TAM. |
| **Competition** | 9 | No Nigeria-specific port dwell tracking tool exists. Global logistics platforms (Flexport, project44) do not serve Nigerian port realities. No clearing agent professional tool exists. The data layer (port intelligence) has no competitor. Total whitespace. |
| **Skill Fit** | 6 | Phase 1 is mostly CRUD/workflow with date math — underutilizes AI/ML skills. But Phase 2+ delay prediction, congestion modeling, and the intelligence layer leverage data science directly. WhatsApp NLP for milestone parsing uses AI. The data layer strategy aligns with the founder's data science background. |
| **Capital Required** | 10 | Near-zero infrastructure costs (~$70-185/month). No expensive data sources. Agent portal is free to operate (agents generate data, not cost). Bootstrappable with $0. |
| **Buyer Clarity** | 8 | ANLCA membership directory gives direct access to clearing agents. MAN and LCCI directories give access to importers. The agent-first GTM means the buyer (importer) comes to you through the agent — reducing cold outreach. Family network in Port Harcourt provides immediate validation contacts. Can name 20 agents and 30 importers to contact this week. |
| **Fintech Upside** | 7 | Significantly higher than v1 (was 4). Container tracking data has direct fintech applications: (1) trade finance — LC verification requires knowing where goods are, (2) cargo insurance — dwell time data informs risk-adjusted premium pricing, (3) supply chain finance — verified gate-out confirmation can trigger invoice factoring, (4) the N1.56T insurance premium market (56% YoY growth) is actively seeking better risk data. PortPulse data becomes an input layer for financial products. |

### Weighted Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Build Speed | 5% | 9 | 0.45 |
| Time to Revenue | 15% | 7 | 1.05 |
| Market Size | 15% | 7 | 1.05 |
| Competition | 10% | 9 | 0.90 |
| Skill Fit | 15% | 6 | 0.90 |
| Capital Required | 10% | 10 | 1.00 |
| Buyer Clarity | 20% | 8 | 1.60 |
| Fintech Upside | 10% | 7 | 0.70 |
| **TOTAL** | **100%** | | **7.65** |

### Verdict: BUILD FIRST (Priority #1)

PortPulse is the highest-priority product in the portfolio. It combines near-zero capital requirements with the strongest disruption characteristics (7/8 criteria), a clear agent-driven distribution strategy, and a data layer that creates strategic value far beyond direct subscription revenue. The agent-first GTM compresses time-to-revenue and creates a distribution flywheel that scales without proportional sales effort. Build this first.

---

## 14. 8-Criteria Disruption Self-Assessment

How PortPulse maps to each of the 8 criteria for disruptive innovation:

### Criterion 1: Targets Overlooked or Non-consuming Segments
**Rating: Strong Fit**

The entire market is non-consuming. No Nigerian importer has digital container tracking. No clearing agent has professional portfolio management tools. The non-consumption is total — not partial, not underserved, but zero. Within this universal non-consumption, the most overlooked segments are:

- **Clearing agents (3,000+ ANLCA members):** Zero professional tools. Operate on phone contacts and memory. No system exists for them. PortPulse's agent portal is the first product ever built for this segment.
- **Small importers (1-3 containers/month, ~15,000-25,000 businesses):** Cannot justify the cost of a logistics manager. A single container stuck for extra days can wipe out their margin. The free tier serves them.

By targeting agents as the primary Phase 1 user (not mid-size importers), PortPulse enters through the most overlooked segment — not the mainstream.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First
**Rating: Strong Fit**

The MVP is deliberately manual. Users and agents update milestones by hand via WhatsApp messages or a simple web form. There is no automated port API, no GPS tracking, no IoT sensors, no integration with terminal operating systems. An incumbent logistics tech company (Flexport, project44) would consider this "inferior" — a toy.

But for Nigerian importers and agents who currently have nothing — literally zero visibility — manual milestone tracking with demurrage calculations and WhatsApp alerts is radically better than the alternative (phone calls and hope). "Good enough" in the truest disruptive sense: it solves the core problem at a fraction of the cost.

The WhatsApp-first interface for agents (reply "1 5" to update a milestone) is simpler than any enterprise logistics tool. This is a feature, not a limitation.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold
**Rating: Strong Fit (Both Footholds)**

**New-market foothold:** There is no "port dwell tracking" category in Nigeria. No incumbent to displace. PortPulse creates a category that did not exist. This is the primary foothold.

**Low-end foothold:** Global logistics platforms (Flexport, project44, FourKites) charge $50K-500K/year for enterprise visibility solutions. PortPulse enters at N40-60K/month ($26-39) — 10-100x cheaper. These global platforms would find this manual, Nigeria-specific, low-price niche unattractive and unprofitable within their cost structure.

This dual foothold (both new-market AND low-end) is the strongest disruptive position — the same pattern as Indomie (cheaper than fast food AND a new food category).

### Criterion 4: Reimagines the Value Chain
**Rating: Strong Fit**

The agent portal is the key value chain innovation. By giving clearing agents a free tool, PortPulse transforms them from opaque intermediaries into transparent, accountable data contributors. This creates:

1. **A new distribution channel:** Agents bring importers (the paying customers). This is fundamentally different from how logistics software sells (enterprise sales team -> procurement).
2. **A shared data layer:** The importer-agent relationship moves from phone calls to timestamped, verifiable records.
3. **Network data effects:** Aggregate data across agents and importers creates industry benchmarks — a new information asset that no individual actor could generate.
4. **Future value chain extensions:** The data layer enables trade finance, insurance, and government analytics — none of which existed in this value chain before.

The Tolaram parallel: Tolaram's real innovation was not the noodle — it was the 1,000-distributor, 600,000-retailer network. PortPulse's real innovation is not the tracking app — it is the agent network that generates port intelligence data.

### Criterion 5: Prioritizes Scaling a Core Solution
**Rating: Strong Fit**

Phase 1 is tightly scoped: enter a container, track milestones (manually), calculate demurrage, get alerts. The agent portal is equally focused: see your containers, update status, view your performance.

Features like delay prediction, AI-based cost optimization, automated data ingestion, and the government dashboard are explicitly deferred to Phase 2-3. The Phase 1 goal is distribution: get 50+ agents onboarded, each bringing importers. Features come after reach.

This is the Indomie pattern: start with one flavor, achieve national distribution, then add Nigeria-specific variants.

### Criterion 6: Demands a Different Cost Structure
**Rating: Strong Fit**

Total infrastructure cost: ~$70-185/month. The product is profitable at N40K/month per customer with 91% gross margins. The free agent portal costs nearly nothing to operate (agents generate data, which is the product — they are not a cost center).

Global logistics platforms operate with enterprise sales teams, implementation consultants, complex integrations, and $50K+ annual contracts. PortPulse's cost structure makes it impossible for them to profitably serve this market — exactly the asymmetric economics that protect a disruptive entrant.

### Criterion 7: Converts Non-consumption into Growth
**Rating: Strong Fit**

Growth comes exclusively from converting non-consumers. Every Nigerian importer currently has zero digital container tracking. Every clearing agent has zero professional portfolio tools. PortPulse does not steal customers from a competitor — it creates tracking capability where none existed.

The aggregate data (port benchmarks, agent performance, congestion patterns) creates new economic value that did not exist before. Each new user improves the benchmark data for all users — a genuine network effect that expands the value of the category.

New economic activity follows: trade finance providers can underwrite with better data, insurers can price risk more accurately, government can monitor port performance, and the best clearing agents can win more business on merit instead of relationships alone.

### Criterion 8: Can Mature to Surpass Mainstream Offerings
**Rating: Strong Fit**

The maturation path is clear and credible:

- **Phase 1 (Now):** Manual tracking, WhatsApp-based. "Good enough."
- **Phase 2 (Months 3-6):** Automated data from shipping line websites. AI-based delay prediction. Published port intelligence. Better than anything available globally for Nigerian ports.
- **Phase 3 (Months 6-12):** Terminal operator integration. Trade finance data API. Insurance data partnerships. Government contracts. This is an intelligence platform, not a tracking tool.
- **Phase 4 (Year 2+):** West African expansion (Ghana, Cote d'Ivoire, Senegal). The same model applies to any opaque logistics process. PortPulse becomes the port intelligence layer for West Africa.

At maturity, PortPulse will have more granular, real-time data on Nigerian port operations than any government agency, shipping line, or global logistics platform. The manual start is what makes this possible — it builds the data layer from the ground up, in the exact areas where automated systems do not exist.

### Summary

| # | Criterion | Rating |
|---|-----------|--------|
| 1 | Overlooked segment | Strong Fit |
| 2 | "Worse" but good enough | Strong Fit |
| 3 | Market foothold | Strong Fit (Both) |
| 4 | Value chain reimagined | Strong Fit |
| 5 | Scale core solution | Strong Fit |
| 6 | Different cost structure | Strong Fit |
| 7 | Non-consumption to growth | Strong Fit |
| 8 | Can mature | Strong Fit |

**Overall: 8/8 Strong Fit. PortPulse is a textbook disruptive innovation.**

The one criterion that was partial in the original analysis (Criterion 1 — the mid-size importer target was mainstream, not overlooked) is now resolved by making clearing agents the primary Phase 1 target. Agents are the most overlooked segment in the Nigerian port ecosystem: they handle billions of naira in goods, serve thousands of importers, and have zero professional tools. PortPulse serves them first, for free, and they bring the paying customers.
