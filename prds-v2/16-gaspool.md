# PRD 16: GasPool — Bulk LPG Group Purchasing for Market Clusters

## 1. Executive Summary

Over 70% of Nigerian households cook with firewood, kerosene, or charcoal. Not inferior gas. Not underfilled cylinders. Nothing — zero access to clean cooking fuel. A woman in Ajegunle burning firewood in a smoky kitchen, a market trader in Aba using kerosene that costs N800/liter, a family in Kano spending 30-40% of household income on dirty fuel that causes respiratory disease, house fires, and deforestation — all non-consumers of LPG, not because the product does not exist, but because the smallest available purchase unit (3kg cylinder refill at N3,000-4,500) is too expensive as a single transaction for a household earning N50-80K/month.

This is the poverty premium in its purest form. Small LPG cylinders cost N1,200-1,500/kg. Bulk LPG costs N700-900/kg. The people who can least afford to overpay are paying 40-70% more per kilogram because they cannot afford to buy in volume. The distribution system was never built to serve them.

GasPool does not fix LPG distribution. It eliminates the poverty premium by aggregating demand.

A coordinator at a market cluster or residential compound registers a buying group via USSD. Members contribute weekly — N500, N800, N1,000 — toward a bulk LPG order. When the pool reaches the minimum bulk order threshold (typically 50-100kg), delivery is triggered from a bulk LPG supplier. Each member receives their share at 20-30% below retail price. The coordinator earns a small facilitation fee. The supplier gets a guaranteed bulk order with a single delivery point. Everyone wins except the poverty premium.

This is a new-market disruption with a low-end component. New-market because these households are non-consumers of LPG — they have literally never purchased it. Low-end because the product itself (LPG) exists, but the purchase mechanism (bulk group buying) creates access at a price point the individual market cannot offer.

The data asset is the real product: weekly contribution patterns, household energy consumption, payment reliability, and geographic demand density. This is the first structured dataset on low-income Nigerian household energy purchasing behavior. No one has it. Energy companies, microfinance institutions, carbon credit programs, and government energy subsidy planners would all license this data.

**Entry channel:** USSD (primary) → SMS (confirmations/alerts) → WhatsApp (coordinator management, future). No web. No app. 42% of Nigeria's mobile connections are 2G. The target demographic skews even higher toward feature phones.

**90-day target:** 30 active buying groups, 500+ participating households, N2M+ in monthly bulk gas orders, first commission revenue by Month 2.

**Infrastructure layer:** Layer 2 (business tool with physical logistics component). Runs on the USSD Business Toolkit Platform (Foundation layer). Generates Layer 1 data (household energy consumption patterns) that feeds Layer 4 data products.

---

## 2. Market Opportunity

**Nigeria's household energy market is defined by forced non-consumption of clean cooking fuel.**

This is not a market share fight between gas brands. The overwhelming majority of low-income households have never purchased LPG. The opportunity is not redistribution — it is creation of millions of first-time LPG buyers.

### The Numbers

- **LPG penetration:** Less than 30% of Nigerian households use LPG as primary cooking fuel. In rural areas, penetration drops below 10%. Over 100 million Nigerians cook with firewood, kerosene, or charcoal daily.
- **Poverty premium:** A 3kg LPG cylinder refill costs N3,500-4,500 at retail (N1,167-1,500/kg). Bulk LPG costs N700-900/kg from wholesale suppliers. Low-income households pay 40-70% more per kilogram than bulk buyers.
- **Kerosene cost:** N800-1,200/liter. A household spending N5,000/month on kerosene could get equivalent cooking energy from LPG at N3,000-3,500/month via bulk purchasing — a 30-40% savings while switching to a cleaner, safer fuel.
- **Health impact:** WHO estimates 93,000 Nigerians die annually from household air pollution caused by solid fuel cooking. Respiratory disease from indoor smoke is the #1 killer of children under 5 in sub-Saharan Africa.
- **Deforestation:** Nigeria loses 3.7% of its forest cover annually — one of the highest rates globally — driven substantially by firewood harvesting for cooking.
- **Government push:** The Nigerian LPG Expansion Implementation Plan (NLPG-EIP) targets 13.7 million metric tons of LPG consumption by 2030 (from ~1 million MT currently). The government actively wants more Nigerians using LPG.
- **Existing infrastructure:** Over 5,000 LPG retail outlets exist nationally, plus hundreds of bulk LPG depots. The supply exists. The last-mile aggregation mechanism does not.
- **PayGo precedent:** M-KOPA (Kenya), d.light, and BBOXX proved that group/pooled energy purchasing works at scale in East Africa. PayGo solar reached millions of non-consumers by restructuring the purchase unit. GasPool applies the same principle to cooking fuel.

### The Wedge

No one aggregates LPG demand at the neighborhood/market cluster level. Bulk LPG suppliers sell to retailers who sell at full markup to individuals. The coordinator-mediated group purchase — a model that already exists informally in savings circles (ajo/esusu) — has never been applied to energy purchasing. GasPool formalizes what Nigerians already do (pool money through coordinators) and applies it to what they need most (affordable cooking fuel).

### Non-Consumption Framing

We are not competing for the 30% who already buy LPG. We are enabling the 70%+ who have nothing — who burn firewood, who inhale kerosene fumes, who spend disproportionate income on dirty fuel because the minimum viable LPG purchase is too expensive as a single transaction. Every GasPool order creates first-time LPG users. This is market creation, not redistribution.

This is the Indomie parallel: Tolaram did not compete for existing fast-food customers. They created 200 million noodle eaters who had never seen the product before. GasPool creates LPG consumers who have never owned a gas cylinder.

### Total Addressable Market

- **TAM:** 40+ million households currently using firewood/kerosene as primary cooking fuel. At N3,000-5,000/month per household, the clean cooking fuel market is N1.44-2.4T ($936M-$1.56B) annually in household spending that currently goes to dirty alternatives.
- **SAM:** 10 million urban/peri-urban low-income households in clusters dense enough for bulk delivery — approximately N360-600B ($234-390M) annually.
- **SOM (Year 1):** 5,000 households across 200 buying groups in Lagos, Port Harcourt, and Aba — approximately N180-300M ($117-195K) in annual gas orders, generating N9-18M ($5.8-11.7K) in commission revenue.

### Regional Variance

- **Lagos:** Highest concentration of low-income residential clusters. Ajegunle, Mushin, Ikorodu — dense population, many market clusters, strong kerosene usage. Start here.
- **South-East (Aba, Onitsha, Nnewi):** Manufacturing clusters with market areas. Highest manufacturing capacity (59.91%) despite lowest business confidence (18.7). Workers in these clusters are the target households.
- **South-South (Port Harcourt):** Oil-producing region with paradoxically high kerosene usage among low-income populations. Family network available for validation.
- **North (Kano, Kaduna):** Massive firewood usage. Enormous potential but requires different distribution approach due to lower urban density.

---

## 3. Target Personas

### Primary Persona: Mama Ngozi — The Kerosene-Dependent Market Trader (The True Non-Consumer)

**Who:** Low-income woman running a small food stall or petty trading business in a Lagos market cluster. Lives in a face-me-I-face-you compound with 8-12 other families in Ajegunle or Mushin.

- **Age:** 32. Mother of three children (ages 3, 7, 11).
- **Location:** Ajegunle, Lagos. Lives in a single room in a shared compound. Cooks in a shared outdoor kitchen area.
- **Income:** N50-80K/month from her pepper soup stall in Ajegunle market.
- **Current cooking fuel:** Kerosene stove. Spends N4,000-6,000/month on kerosene. Supplements with firewood when kerosene prices spike. The children cough from smoke exposure. The kerosene stove has caused two small fires in the compound in the past year.
- **LPG awareness:** Knows LPG exists — sees it in "better" neighborhoods. Has never purchased a cylinder. Believes it is "for rich people." Has heard it is dangerous (explosion fears, largely myth-based). Does not know how much it actually costs per month if purchased in bulk.
- **Financial behavior:** Contributes N2,000/week to a savings circle (ajo) managed by a woman in the market. Pays for everything in cash or via mobile money. Has a feature phone (Nokia), not a smartphone. Uses USSD for airtime purchase and mobile money transfers.
- **Decision trigger:** If someone she trusts — the ajo coordinator, the market women's leader, a neighbor — says "we are pooling money for gas, it is cheaper than kerosene, and safer," she will join. She will not seek this out independently. The pull is the price savings communicated through a trusted intermediary.

**Why this persona matters for disruption:** This is the non-consumer that LPG retailers will never serve individually. The per-transaction value (N1,500-3,000 for a small cylinder) is too low. The education effort is too high. The delivery logistics to a market cluster are unattractive for a single customer. But 20-40 Mama Ngozis pooling money together create a N60,000-120,000 bulk order that any supplier will happily deliver — at a 20-30% discount.

### Secondary Persona: Coordinator Blessing — The Market Women's Leader (The Enabler)

**Who:** Established market woman who already coordinates informal activities — savings circles, bulk food purchases, market association dues. She is the trusted intermediary who makes GasPool work.

- **Age:** 45. Has been in Ajegunle market for 20 years.
- **Role:** Already manages an ajo group of 30 women. Coordinates bulk purchases of wholesale ingredients (palm oil, crayfish, pepper) for market members.
- **Phone:** Android smartphone. Active on WhatsApp. Also comfortable with USSD.
- **Motivation:** Earns a facilitation fee (N100-200 per member per order cycle) for coordinating the group. Currently earns N3,000-6,000/month from ajo coordination. GasPool adds another N3,000-6,000/month. More importantly, she gains status as the person who "brought gas to the market."
- **Decision trigger:** When she sees that GasPool coordination earns her money and increases her influence in the market, she will actively recruit members. She is the distribution channel.

### Tertiary Persona: The Data Buyer — Energy Companies, Carbon Credit Programs, Government

**Who:** Shell, TotalEnergies, NLNG (Nigerian LNG), carbon credit registries, World Bank energy access programs, and the Nigerian government's LPG Expansion Implementation Plan office.

- **What they want:** Structured data on low-income household energy consumption patterns — fuel type, monthly spend, willingness to switch, geographic density, purchase frequency. This data does not exist in any structured form today.
- **Decision trigger:** When GasPool has 10,000+ households with 6+ months of purchasing data, this becomes the most granular household energy consumption dataset in West Africa. Worth N10-30M annually in licensing fees.

---

## 4. Problem Deep Dive

### Why 70%+ Have Nothing (Clean Cooking Fuel)

The problem is not that LPG does not exist in Nigeria. It is that the purchase mechanism was designed for middle-class households buying full cylinders, not for low-income households who need cooking fuel in affordable increments.

**Step 0: The Poverty Premium Trap (Where Most Households Are Stuck)**

A 12.5kg LPG cylinder refill costs N10,000-15,000. For a household earning N50-80K/month, this is 12-30% of monthly income in a single transaction. They cannot afford it, even though the per-month cost of LPG (N3,000-5,000/month) would be less than what they spend on kerosene (N4,000-6,000/month). The barrier is not the monthly cost — it is the lump-sum purchase size.

This is identical to the PayGo solar insight: poor households were paying more for kerosene (monthly) than solar would cost (monthly), but they could not afford the upfront cost of a solar panel. PayGo solved this by restructuring the purchase into daily micro-payments. GasPool solves it by restructuring LPG into weekly micro-contributions that aggregate into bulk orders.

**Step 1: No Cylinder Ownership**

Most non-consuming households do not own an LPG cylinder. A new 12.5kg cylinder costs N18,000-25,000. A 6kg cylinder costs N12,000-18,000. Even a 3kg cylinder costs N8,000-12,000. This is a one-time cost that creates a permanent barrier. Without a cylinder, you cannot buy gas. Without money for a cylinder, you never enter the LPG market.

**Step 2: No Nearby Refill Point for Small Quantities**

LPG refill plants are not evenly distributed. Low-income neighborhoods may have only one refill point serving thousands of households, with long queues and inconsistent supply. The friction of carrying a cylinder 2-3km, waiting 30-60 minutes, and carrying it back discourages adoption even for those who could afford it.

**Step 3: Fear and Misinformation**

LPG explosion stories (often exaggerated or involving improper equipment) circulate widely. Households that have used kerosene for decades view gas as dangerous. This fear is a barrier that individual marketing cannot overcome — but community-level adoption can. When 20 women in a market cluster all switch to gas simultaneously, the social proof eliminates the fear barrier.

**Step 4: What Goes Wrong Without Clean Fuel**

- **Health:** 93,000 annual deaths from household air pollution. Chronic respiratory disease. Children are most affected.
- **Cost:** Kerosene at N800-1,200/liter costs N4,000-6,000/month per household — 8-12% of income spent on the most expensive-per-unit cooking fuel available.
- **Safety:** Kerosene stove fires are a leading cause of residential fires in Lagos. Firewood cooking in enclosed spaces causes burns and structural fires.
- **Time:** Collecting firewood consumes 2-4 hours daily in peri-urban and rural areas, predominantly women's and children's time.
- **Deforestation:** 3.7% annual forest cover loss, driven substantially by fuel wood harvesting.

### The Pull Test

Do people already spend money on cooking fuel? Yes — N4,000-6,000/month on kerosene, or equivalent time/money on firewood and charcoal. This is involuntary spending. Would they switch to a cheaper, cleaner alternative if it were available at the right purchase increment? The PayGo solar precedent (millions of customers in East Africa) and informal bulk-buying behavior in Nigerian markets (women already pool money for wholesale ingredient purchases) both say yes. This is pull, not push. The product is not "you should use gas" — it is "gas is cheaper than kerosene when you buy together, and here is how."

---

## 5. Solution Overview

GasPool is a USSD-based group purchasing platform that aggregates LPG demand from low-income market clusters and residential compounds, triggers bulk orders when pools reach threshold, and delivers gas at 20-30% below retail prices.

### Stage 1: Group Registration (USSD)

A coordinator dials *XXX# and registers a buying group. Inputs: coordinator name, phone number, market/compound name, location (state/LGA), estimated group size. The coordinator receives a group code via SMS (e.g., "GP-AJE-0042"). Members join by dialing *XXX# and entering the group code.

**Channel:** USSD (primary), SMS (confirmation)
**Data created:** Coordinator registry, group membership, geographic cluster mapping

### Stage 2: Weekly Contributions (USSD/Mobile Money)

Members contribute weekly via USSD-triggered mobile money transfer or airtime deduction. Minimum contribution: N500/week. Each contribution is logged and confirmed via SMS to both member and coordinator. The coordinator can check pool status via USSD at any time: total contributed, number of members, amount remaining to trigger order.

**Channel:** USSD (contribution trigger), Mobile Money/Airtime (payment), SMS (confirmations)
**Data created:** Contribution patterns, payment reliability scores, household energy budgets

### Stage 3: Bulk Order Trigger

When pool reaches minimum order threshold (e.g., 50kg — approximately N35,000-45,000 at bulk price), the coordinator is notified via SMS and confirms the order via USSD. GasPool aggregates orders from multiple groups in the same geographic area to maximize bulk discount.

**Channel:** USSD (coordinator confirmation), SMS (notification)
**Data created:** Demand density by geography, order frequency patterns, seasonal demand variation

### Stage 4: Delivery and Distribution

GasPool dispatches bulk LPG from a verified wholesale supplier to the coordinator's location (market cluster or compound). The coordinator distributes to members based on their contribution amounts. Each member's allocation is confirmed via SMS.

**Channel:** SMS (delivery notification and allocation confirmation)
**Data created:** Delivery logistics data, supplier performance, fulfillment rates

### Stage 5: Repeat and Growth

The pool resets after delivery. Members can adjust contribution amounts. Coordinator recruits new members. Consistent contributors build a "reliability score" that can unlock access to cylinder ownership programs (pay-as-you-go cylinder purchase) and other financial products.

**What GasPool deliberately sacrifices vs. premium alternatives:**
- No app — USSD only. Looks primitive compared to PayGo solar apps with Bluetooth-connected devices.
- No smart metering — no IoT device on the cylinder. Just manual distribution by the coordinator.
- No individual delivery — gas goes to the coordinator, not door-to-door. Members must collect from a single point.
- No instant purchase — members wait until the pool fills. Could be 1-4 weeks depending on group size and contribution speed.

**These sacrifices are deliberate.** The target customer does not have a smartphone, does not want a connected device, cannot afford individual delivery, and is willing to wait because the alternative (kerosene at full price) is what they are doing already. GasPool is "worse" than Kopagas or PayGo smart cylinder solutions — but it works for non-consumers on feature phones contributing N500/week.

### Iteration Path

- **Phase 1 (Months 1-3):** USSD group purchasing, manual supplier coordination, SMS confirmations. Prove demand in 2-3 Lagos market clusters.
- **Phase 2 (Months 4-6):** Automated supplier matching, multi-group order aggregation across geographic areas, coordinator performance scoring, expand to Port Harcourt and Aba.
- **Phase 3 (Months 7-12):** Pay-as-you-go cylinder ownership program (contributors with 6+ months of reliable payments can buy a cylinder in installments). Carbon credit partnerships (verified fuel-switching data). Energy consumption data licensing.
- **Phase 4 (Year 2):** WhatsApp layer for coordinators (order management, group communication). Expand to charcoal-to-gas transition in Northern markets. Partnership with NLNG/government LPG expansion programs.

---

## 6. Functional Requirements

### MUST Have — MVP (Month 1)

### FR1: Group Registration via USSD
- **Description:** Coordinator registers a buying group by dialing *XXX# and entering group details.
- **Channel:** USSD
- **Inputs:** Coordinator name, phone number, market/compound name, state, LGA, estimated group size
- **Outputs:** Group code (SMS), confirmation message, coordinator account created
- **Acceptance Criteria:**
  - [ ] USSD session completes in 4 screens or fewer
  - [ ] Each screen contains 160 characters or fewer
  - [ ] Group code is unique, human-readable (format: GP-[3 letter location]-[4 digit number])
  - [ ] SMS confirmation sent to coordinator within 5 seconds of registration
  - [ ] Duplicate phone number detection prevents double registration as coordinator

### FR2: Member Enrollment via USSD
- **Description:** Member joins a group by dialing *XXX# and entering the group code shared by their coordinator.
- **Channel:** USSD
- **Inputs:** Member phone number (auto-detected), group code
- **Outputs:** SMS confirmation to member and coordinator, member added to group roster
- **Acceptance Criteria:**
  - [ ] Enrollment completes in 3 USSD screens or fewer
  - [ ] Invalid group code returns clear error message ("Group not found. Check code and try again.")
  - [ ] Coordinator receives SMS notification when new member joins
  - [ ] Member cannot join same group twice
  - [ ] Member can belong to only one active group at a time

### FR3: Weekly Contribution via USSD
- **Description:** Member initiates a contribution by dialing *XXX# and selecting "Contribute." Payment is processed via mobile money transfer or airtime deduction.
- **Channel:** USSD → Mobile Money (Paystack/OPay integration) or Airtime deduction
- **Inputs:** Contribution amount (minimum N500, maximum N5,000 per transaction)
- **Outputs:** SMS receipt to member, pool balance update, SMS to coordinator showing updated pool total
- **Acceptance Criteria:**
  - [ ] Contribution amount validated (minimum N500, increments of N100)
  - [ ] Payment confirmation SMS sent to member within 10 seconds of successful transaction
  - [ ] Pool balance updated in real-time and visible to coordinator via USSD
  - [ ] Failed payment returns clear error message with retry option
  - [ ] Contribution history stored and retrievable by member via USSD (last 5 contributions)

### FR4: Pool Status Check via USSD
- **Description:** Coordinator or member checks the current pool status: total contributed, number of contributing members, amount remaining to trigger bulk order.
- **Channel:** USSD
- **Inputs:** User phone number (auto-detected from USSD session)
- **Outputs:** Single USSD screen showing: pool total (NGN), member count, target amount, percentage to target
- **Acceptance Criteria:**
  - [ ] Status screen displays in under 2 seconds
  - [ ] All amounts displayed in NGN with no decimal places
  - [ ] Coordinator sees full group details; member sees only their contribution and pool total
  - [ ] Response fits within 182-character USSD screen limit

### FR5: Bulk Order Trigger and Confirmation
- **Description:** When pool reaches minimum threshold, coordinator receives SMS notification and confirms order via USSD. Order is placed with the assigned bulk LPG supplier.
- **Channel:** SMS (notification) → USSD (confirmation)
- **Inputs:** Coordinator confirmation (USSD menu selection)
- **Outputs:** Order confirmation SMS to coordinator and all members, order transmitted to supplier
- **Acceptance Criteria:**
  - [ ] SMS notification sent to coordinator within 60 seconds of pool reaching threshold
  - [ ] Coordinator must confirm within 48 hours or order is held (with daily SMS reminders)
  - [ ] All group members receive SMS confirming order placed, expected delivery window (24-72 hours), and their individual allocation in kg
  - [ ] Order details transmitted to supplier via SMS and logged in system
  - [ ] If coordinator does not confirm within 48 hours, system sends escalation SMS and holds funds

### FR6: Delivery Confirmation and Member Allocation
- **Description:** Upon delivery, coordinator confirms receipt via USSD. System calculates each member's allocation based on contributions and sends SMS confirmation.
- **Channel:** USSD (coordinator confirmation) → SMS (member allocations)
- **Inputs:** Coordinator confirms delivery received, enters actual quantity delivered
- **Outputs:** Member allocation SMS (kg received, amount paid, savings vs. retail), pool reset
- **Acceptance Criteria:**
  - [ ] Coordinator confirms delivery in 2 USSD screens (confirm receipt → enter quantity in kg)
  - [ ] System calculates each member's allocation proportional to their contribution
  - [ ] Member SMS shows: kg received, amount paid, retail price comparison, amount saved
  - [ ] Pool balance resets to zero after delivery confirmation
  - [ ] Discrepancy flag if delivered quantity differs from ordered quantity by >5%

### FR7: Supplier Management
- **Description:** Backend system for managing bulk LPG supplier relationships — registration, pricing, delivery area coverage, performance tracking.
- **Channel:** Admin backend (web-based for GasPool operations team)
- **Inputs:** Supplier details, bulk pricing tiers, delivery zones, contact information
- **Outputs:** Supplier assignment per group based on location, order routing, performance scores
- **Acceptance Criteria:**
  - [ ] Minimum 2 suppliers registered per delivery zone at launch
  - [ ] Supplier pricing stored and compared — system automatically selects lowest-cost verified supplier per zone
  - [ ] Supplier delivery performance tracked (on-time %, quantity accuracy, customer complaints)
  - [ ] Supplier with delivery accuracy below 90% flagged for review

### SHOULD Have — Month 2-3

### FR8: Coordinator Dashboard via SMS Reports
- **Description:** Weekly automated SMS report to coordinator summarizing group activity: total contributions, active members, inactive members (no contribution in 14+ days), next order projection.
- **Channel:** SMS
- **Acceptance Criteria:**
  - [ ] Report sent every Monday at 8am
  - [ ] Contains: active members, total contributed this cycle, projected order date, inactive member count
  - [ ] Fits within 2 SMS messages (320 characters)

### FR9: Member Contribution History
- **Description:** Member dials *XXX# to see their complete contribution history and total savings vs. retail price.
- **Channel:** USSD
- **Acceptance Criteria:**
  - [ ] Shows last 10 contributions with dates and amounts
  - [ ] Shows cumulative savings vs. retail ("You have saved N4,200 on gas through GasPool")
  - [ ] Shows reliability score (percentage of weeks with on-time contribution)

### FR10: Multi-Group Order Aggregation
- **Description:** System aggregates orders from multiple groups in the same geographic area into a single bulk order for deeper discounts.
- **Channel:** Backend automated
- **Acceptance Criteria:**
  - [ ] Groups within 5km radius automatically eligible for aggregation
  - [ ] Aggregated order triggers when combined volume exceeds 200kg
  - [ ] Per-unit price reduction of additional 5-10% passed to members
  - [ ] Individual group delivery timing not delayed by more than 24 hours due to aggregation

### FR11: Coordinator Facilitation Fee
- **Description:** Coordinator earns N100-200 per member per order cycle, automatically deducted from pool and paid via mobile money.
- **Channel:** Mobile Money (automated payout)
- **Acceptance Criteria:**
  - [ ] Fee displayed transparently to all members ("N150 coordinator fee included")
  - [ ] Payout processed within 24 hours of delivery confirmation
  - [ ] Coordinator sees cumulative earnings via USSD

### COULD Have — Month 4+

### FR12: Pay-As-You-Go Cylinder Program
- **Description:** Members with 6+ months of consistent contributions (reliability score > 80%) can purchase a gas cylinder in installments (N500/week for 20-30 weeks).
- **Channel:** USSD
- **Acceptance Criteria:**
  - [ ] Eligibility auto-calculated from contribution history
  - [ ] Installment plan displayed clearly before enrollment
  - [ ] Cylinder delivered after first installment; ownership transfers after final payment
  - [ ] Default handling: 3 missed payments triggers coordinator notification

### FR13: Carbon Credit Data Export
- **Description:** System generates verified fuel-switching reports (firewood/kerosene → LPG) for carbon credit programs.
- **Channel:** Admin backend (data export)
- **Acceptance Criteria:**
  - [ ] Per-household fuel-switching data exportable in standard carbon credit registry format
  - [ ] Baseline fuel usage estimated at registration; LPG consumption tracked per delivery
  - [ ] CO2 reduction calculated per household per month

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Smart cylinder metering / IoT | Adds N10-15K hardware cost per household — destroys the cost structure. Manual distribution via coordinator is good enough. |
| Smartphone app | Target demographic is 80%+ feature phone. USSD-only is deliberate. |
| Door-to-door delivery | Unit economics do not support individual delivery to low-income households. Coordinator-point delivery is the cost structure innovation. |
| LPG retail (selling gas directly) | GasPool is a demand aggregator, not a gas retailer. We do not own or store gas. Regulatory and safety complexity avoided. |
| Credit/lending for gas purchases | Phase 1 focuses on savings-based pooling. Lending introduces credit risk before payment behavior data exists. |

---

## 7. Non-Functional Requirements

### NFR1: Performance
- USSD session response time: < 2 seconds per screen transition
- SMS delivery: < 10 seconds for transactional messages (contribution confirmation, delivery notification)
- Pool balance calculation: real-time, < 1 second
- System supports 500 concurrent USSD sessions at launch, scaling to 5,000 within 6 months
- Bulk order threshold check runs within 500ms of each contribution

### NFR2: Offline/Low-Bandwidth
- All critical functions (registration, contribution, status check) operate via USSD — no internet connection required
- SMS confirmations serve as offline-readable receipts
- Contribution history cached on server side; retrievable via USSD at any time
- System tolerates intermittent USSD session drops — partial sessions resume from last completed screen
- No data loss if USSD session times out mid-transaction; contribution either completes fully or does not process

### NFR3: Security
- Contribution transactions use mobile money provider's security layer (PIN verification at payment step)
- Coordinator cannot access individual member contribution amounts — only pool total and member count
- Member phone numbers not shared between groups or with suppliers
- All financial transaction logs encrypted at rest (AES-256)
- Coordinator identity verified via OTP at registration
- Fraud detection: flag if single phone number attempts to join 3+ groups or coordinator creates 5+ groups within 24 hours

### NFR4: Scalability
- Architecture supports 1,000 active groups (25,000 members) within 12 months
- Database handles 50,000 contribution transactions per month at Year 1 scale
- Supplier routing algorithm handles 100+ suppliers across 10+ delivery zones
- Group aggregation engine processes multi-group order matching for up to 50 groups per zone

### NFR5: Accessibility
- USSD menus work on any phone (2G feature phones, smartphones, all networks — MTN, Airtel, Glo, 9mobile)
- All USSD text in English; Pidgin English option for Lagos/South-South groups
- SMS messages use plain language — no abbreviations or jargon
- All amounts displayed in whole naira (no kobo)
- USSD menu structure: maximum 5 screens per session, maximum 3 options per screen

### NFR6: Regional
- Support for all 36 states + FCT at database level; launch in Lagos, Rivers, Abia
- LPG pricing varies by state — system stores per-state bulk pricing from suppliers
- Delivery zone mapping covers all LGAs within launch states
- Coordinator and member language preference stored (English or Pidgin)

---

## 8. Key Screens & UX

GasPool has no web screens. The entire product is USSD menus and SMS messages.

### USSD Menu Tree

**Main Menu (*XXX#):**
```
Welcome to GasPool
1. Join a Group
2. Contribute to Pool
3. Check Pool Status
4. My Account
```
(64 characters — well within 182-character limit)

**Screen 1.1: Join a Group**
```
Enter your group code
(Get code from your coordinator)
```
(53 characters)

**Screen 1.2: Join Confirmation**
```
Join GasPool group [GROUP NAME]
in [LOCATION]?
1. Yes, join
2. Cancel
```
(~60 characters)

**Screen 1.3: Join Success (SMS sent)**
```
Welcome to [GROUP NAME]!
You will receive SMS updates.
Contribute via *XXX# > option 2
```
(~75 characters)

**Screen 2.1: Contribute**
```
Enter amount to contribute
(Minimum N500)
```
(39 characters)

**Screen 2.2: Confirm Contribution**
```
Contribute N[AMOUNT] to [GROUP NAME]?
You will be charged via [PAYMENT METHOD]
1. Confirm
2. Cancel
```
(~90 characters)

**Screen 3.1: Pool Status (Member View)**
```
[GROUP NAME] Pool Status
Total: N[AMOUNT] of N[TARGET]
Members: [X] contributing
Your total: N[YOUR_AMOUNT]
[XX]% to next order
```
(~120 characters)

**Screen 3.1c: Pool Status (Coordinator View)**
```
[GROUP NAME] Pool Status
Total: N[AMOUNT] / N[TARGET]
Active: [X] members
Inactive: [Y] members
Est. order: [DATE]
1. View members
2. Back
```
(~130 characters)

**Screen 4.1: My Account**
```
GasPool Account
Groups: [GROUP NAME]
Total contributed: N[AMOUNT]
Total saved: N[SAVED] vs retail
Reliability: [XX]%
1. Contribution history
2. Leave group
```
(~140 characters)

**Coordinator Registration Flow (*XXX*1#):**
```
Screen 1: "Register as GasPool Coordinator"
Screen 2: "Enter your market/compound name"
Screen 3: "Select state" (numbered list)
Screen 4: "Enter estimated group size"
Screen 5: "Your group code is GP-XXX-XXXX.
          Share this code with members.
          You will earn N150 per member per order."
```
(5 screens, each under 182 characters)

### SMS Message Templates

**Contribution Confirmation (to member):**
```
GasPool: N[AMT] received. Pool total: N[TOTAL] ([XX]% to order). Your total this cycle: N[YOUR_TOTAL]. Ref: GP[XXXXXX]
```
(~120 characters — fits in 1 SMS)

**Order Triggered (to coordinator):**
```
GasPool: Your pool has reached N[TOTAL]! Confirm bulk order? Dial *XXX# > My Account > Confirm Order. Order expires in 48hrs.
```
(~125 characters)

**Delivery Notification (to member):**
```
GasPool: Your gas is ready for collection at [LOCATION]. Your share: [X.X]kg. You paid N[AMT]. Retail price would be N[RETAIL]. You saved N[SAVED]!
```
(~145 characters — fits in 1 SMS)

### UX Principles Applied

- **P1 (WhatsApp-Simple):** USSD is even simpler than WhatsApp. Single-digit selection. No typing beyond amounts.
- **P3 (Numbers-Forward):** Every screen leads with naira amounts — contribution, pool total, savings.
- **P6 (Progressive Complexity):** Members see 4 options. Coordinators see additional management options. Nobody is overwhelmed.
- **P7 (Naira-First):** All amounts in NGN. No USD references — irrelevant for this persona.
- **P9 (USSD/SMS Fallback):** USSD is not the fallback. It is the primary channel. SMS is the confirmation layer.

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| USSD Gateway | Africa's Talking | USSD session management across all Nigerian telcos; handles 2G connections; proven at scale in East/West Africa |
| SMS Gateway | Termii | Nigerian SMS API; delivery receipts; competitive per-SMS pricing |
| Payment Processing | Paystack / OPay | Mobile money collection; USSD-triggered payments; NGN native |
| Backend | Node.js (Express) on Vercel Serverless | Lightweight; handles USSD webhook callbacks; auto-scaling |
| Database | Supabase PostgreSQL | Managed Postgres; Row Level Security for group data isolation; free tier for MVP |
| Admin Dashboard | Next.js 14 | Internal operations dashboard for supplier management, group monitoring, order routing |
| Monitoring | PostHog (analytics) + Sentry (errors) | Track contribution rates, order frequency, member retention; error alerting |
| Background Jobs | Vercel Cron / Supabase Edge Functions | Weekly coordinator reports, order aggregation checks, inactive member alerts |

### Database Schema (Core Tables)

```sql
-- Coordinators
coordinators (
  id uuid PRIMARY KEY,
  phone text UNIQUE NOT NULL,
  name text NOT NULL,
  state text NOT NULL,
  lga text NOT NULL,
  verified boolean DEFAULT false,
  total_groups integer DEFAULT 0,
  total_facilitation_earned decimal(12,2) DEFAULT 0,
  created_at timestamptz DEFAULT now()
)

-- Buying Groups
groups (
  id uuid PRIMARY KEY,
  code text UNIQUE NOT NULL, -- GP-AJE-0042
  coordinator_id uuid REFERENCES coordinators,
  name text NOT NULL, -- "Ajegunle Main Market Group"
  state text NOT NULL,
  lga text NOT NULL,
  location_description text, -- "Behind Union Bank, Ajegunle Market"
  member_count integer DEFAULT 0,
  pool_balance decimal(12,2) DEFAULT 0,
  order_threshold decimal(12,2) NOT NULL, -- minimum amount to trigger order
  status text CHECK (status IN ('active', 'ordering', 'delivered', 'suspended')),
  delivery_zone_id uuid REFERENCES delivery_zones,
  created_at timestamptz DEFAULT now()
)

-- Members
members (
  id uuid PRIMARY KEY,
  phone text NOT NULL,
  name text,
  group_id uuid REFERENCES groups,
  total_contributed decimal(12,2) DEFAULT 0,
  total_orders integer DEFAULT 0,
  reliability_score decimal(5,2) DEFAULT 0, -- % of weeks with on-time contribution
  cylinder_owner boolean DEFAULT false,
  joined_at timestamptz DEFAULT now(),
  UNIQUE(phone, group_id)
)

-- Contributions
contributions (
  id uuid PRIMARY KEY,
  member_id uuid REFERENCES members,
  group_id uuid REFERENCES groups,
  amount decimal(12,2) NOT NULL,
  payment_method text CHECK (payment_method IN ('mobile_money', 'airtime', 'bank_transfer')),
  payment_reference text,
  status text CHECK (status IN ('pending', 'confirmed', 'failed', 'refunded')),
  cycle_id uuid REFERENCES order_cycles,
  created_at timestamptz DEFAULT now()
)

-- Order Cycles
order_cycles (
  id uuid PRIMARY KEY,
  group_id uuid REFERENCES groups,
  target_amount decimal(12,2),
  collected_amount decimal(12,2) DEFAULT 0,
  status text CHECK (status IN ('collecting', 'threshold_reached', 'confirmed', 'ordered', 'delivered', 'cancelled')),
  supplier_id uuid REFERENCES suppliers,
  order_quantity_kg decimal(8,2),
  delivery_date timestamptz,
  coordinator_confirmed_at timestamptz,
  delivery_confirmed_at timestamptz,
  facilitation_fee decimal(10,2),
  commission_amount decimal(10,2),
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz
)

-- Suppliers
suppliers (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL,
  state text NOT NULL,
  delivery_zones text[], -- array of delivery_zone codes
  bulk_price_per_kg decimal(8,2), -- current wholesale price
  minimum_order_kg decimal(8,2),
  delivery_fee decimal(10,2),
  performance_score decimal(5,2) DEFAULT 100,
  total_orders integer DEFAULT 0,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)

-- Delivery Zones
delivery_zones (
  id uuid PRIMARY KEY,
  code text UNIQUE NOT NULL,
  state text NOT NULL,
  lga text NOT NULL,
  area_description text,
  active_suppliers integer DEFAULT 0,
  active_groups integer DEFAULT 0
)

-- Member Allocations (per delivery)
allocations (
  id uuid PRIMARY KEY,
  cycle_id uuid REFERENCES order_cycles,
  member_id uuid REFERENCES members,
  contribution_amount decimal(12,2),
  allocated_kg decimal(8,2),
  retail_equivalent decimal(12,2), -- what this would cost at retail
  savings decimal(12,2), -- retail_equivalent - contribution_amount
  collected boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
)
```

### USSD Webhook Flow

```
Member dials *XXX# →
  Africa's Talking sends POST to /api/ussd/callback →
    Server reads sessionId, phoneNumber, text →
    Identifies user (coordinator or member) →
    Routes to appropriate menu handler →
    Returns response text + CON (continue) or END (terminate)

Contribution flow:
  Menu selection "2" →
    Prompt for amount →
    Validate (min N500) →
    Initiate Paystack/OPay mobile money charge →
    On success webhook: update pool balance, send SMS →
    On failure webhook: send failure SMS, offer retry
```

### Integration Architecture

```
Africa's Talking ←→ Backend (USSD sessions)
Termii ←→ Backend (SMS delivery)
Paystack/OPay ←→ Backend (payment collection, coordinator payouts)
Supabase ←→ Backend (data persistence, real-time pool balance)
PostHog ←→ Backend (event tracking: registrations, contributions, orders)
```

### Offline Architecture

GasPool is inherently offline-resilient because USSD operates over the voice/signaling channel, not data. Members need zero internet connectivity. The system is online by design for the demographic that has no internet access.

**What requires network (backend):**
- USSD session processing (handled by telco infrastructure)
- Payment processing (handled by payment provider infrastructure)
- SMS delivery (handled by SMS gateway)

**What is cached/stored server-side:**
- All contribution history
- Pool balances
- Member profiles and reliability scores
- Supplier pricing and availability

---

## 10. Data Asset Strategy

**This section documents the real product — the data GasPool creates that did not exist before.**

### What Data GasPool Generates

1. **Household energy consumption patterns:** Weekly contribution amounts directly correlate with household cooking fuel demand. No structured dataset on low-income Nigerian household energy purchasing behavior exists today.
2. **Payment reliability data:** Weekly contribution consistency creates a financial behavior profile for individuals who have zero formal financial history. 6 months of GasPool contributions is a stronger creditworthiness signal than any existing data source for this demographic.
3. **Geographic demand density:** Cluster-by-cluster mapping of LPG demand in low-income areas. This tells LPG suppliers exactly where to build retail infrastructure — data they currently do not have.
4. **Fuel-switching behavior:** Tracking households that transition from kerosene/firewood to LPG creates verified fuel-switching data for carbon credit programs — a directly monetizable dataset.
5. **Coordinator network mapping:** The coordinator registry is a map of trusted community intermediaries — the most valuable distribution network for any product targeting low-income Nigerian households.

### How This Data Feeds Other Mentaat Products

- **KasaBook:** Payment reliability scores from GasPool contributions feed into KasaBook's informal financial behavior tracking, strengthening credit-scoring datasets.
- **AjoTrust:** GasPool's group contribution mechanics are structurally identical to savings circles. Data patterns from GasPool validate and enhance AjoTrust's savings circle documentation models.
- **VendorScore:** Supplier performance data (delivery accuracy, pricing consistency) feeds VendorScore's business reliability database.
- **InsureMatch:** Households transitioning to LPG are candidates for property/contents insurance — GasPool identifies first-time candidates for household insurance products.

### Who Would License This Data

| Buyer | Data Product | Estimated Value |
|-------|-------------|-----------------|
| LPG companies (NLNG, TotalEnergies, Shell) | Geographic demand density maps, household consumption volumes | N5-15M/year |
| Carbon credit registries (Gold Standard, Verra) | Verified fuel-switching data per household | N10-30M/year at scale |
| Microfinance institutions | Payment reliability scores for unbanked individuals | N2-5M/year |
| Government (LPG Expansion Plan office) | Adoption patterns, regional demand, barrier analysis | N3-8M/year |
| Development organizations (World Bank, GIZ) | Household energy access data, impact measurement | N2-5M/year |

### Privacy/Anonymization

- Individual contribution data is private — never shared with third parties at the individual level.
- Aggregate data (average consumption per cluster, demand density per LGA, contribution reliability distributions) is licensable after anonymization.
- Members consent to anonymized data use at registration (clear, plain-language USSD screen).
- Coordinator identity is never shared with data buyers.

---

## 11. Value Chain Design

### What Infrastructure GasPool Builds That Does Not Exist

1. **Demand aggregation layer for low-income energy purchasing:** No mechanism exists to aggregate LPG demand at the neighborhood level. GasPool creates this.
2. **Coordinator network:** A registry of trusted community intermediaries capable of managing group purchases. This network has value far beyond gas — it is the last-mile distribution channel for any product targeting low-income market clusters.
3. **Bulk-to-retail bridge for LPG:** Currently, bulk LPG flows from depots to retailers who apply 40-70% markup. GasPool creates a direct bulk-to-consumer channel that bypasses the retail markup.

### Four Pillars Application

| Pillar | Application |
|--------|-------------|
| **Resource Commitment** | Investment in USSD platform infrastructure, supplier relationships, and coordinator training. These are assets, not costs — the coordinator network and supplier database serve every future product targeting this demographic. |
| **Cross-Market Knowledge Transfer** | PayGo solar (M-KOPA, d.light) proved demand aggregation for energy works in East Africa. GasPool transfers the pooled purchasing model from solar to cooking fuel, adapted for Nigeria's USSD-dominant connectivity and existing savings circle (ajo) culture. |
| **Value-Chain Coordination** | GasPool tightly coordinates the chain from household contribution → pool aggregation → supplier order → delivery → distribution. Each link is managed digitally. Fragmented, uncoordinated individual purchases are replaced by a system. |
| **Transferability** | The coordinator network built for LPG purchasing can distribute any product that benefits from group buying — water purification, household solar, cooking equipment. The USSD group purchasing infrastructure serves any pooled payment use case. |

### Externalities Beyond Core Function

- **Health improvement:** Reduced household air pollution as households switch from kerosene/firewood to LPG.
- **Deforestation reduction:** Less firewood demand from participating households.
- **Coordinator income:** New income stream for market women who become GasPool coordinators — typically N3,000-6,000/month in facilitation fees.
- **Financial inclusion data:** Payment reliability scores from weekly contributions create financial histories for people who have never had one — enabling access to microfinance, insurance, and other formal financial products.
- **Supplier efficiency:** Bulk orders with guaranteed demand reduce supplier logistics costs, potentially lowering wholesale prices further.

---

## 12. Pricing & Unit Economics

### Pricing Model

GasPool charges zero to members. Revenue comes from the margin between bulk wholesale price and per-unit delivery price, plus supplier volume incentives.

| Revenue Stream | Rate | Basis |
|---------------|------|-------|
| **Bulk-to-group margin** | N100-200/kg | Difference between bulk price (N700-900/kg) and delivered-to-group price (N900-1,000/kg). Members still save 20-30% vs. retail (N1,200-1,500/kg). |
| **Supplier volume bonus** | 2-5% of order value | Negotiated volume incentive for guaranteed recurring orders |
| **Coordinator fee pass-through** | N0 (coordinator fee is separate) | Coordinator fee comes from pool, not from GasPool margin |
| **Data licensing (Phase 2)** | N10-30M/year at scale | Anonymized demand density, consumption patterns, fuel-switching data |
| **Carbon credit revenue (Phase 3)** | $5-15/tonne CO2 equivalent | Verified fuel-switching from kerosene/firewood to LPG |

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Average group size | 25 members | Target for sustainable pool dynamics |
| Average contribution per member per cycle | N2,000-3,000 | 3-4 weeks of N500-800 weekly contributions |
| Average pool order | N50,000-75,000 (60-85kg) | 25 members x N2,000-3,000 average contribution |
| GasPool commission per order | N6,000-12,000 | N100-150/kg margin x 60-85kg |
| Orders per group per month | 1-2 | Depends on contribution speed and group size |
| Revenue per group per month | N6,000-24,000 | 1-2 orders x N6,000-12,000 commission |
| Platform infrastructure cost | ~$30/month | Vercel ($0-20) + Supabase ($0-25) + Africa's Talking USSD (~$5) + Termii SMS (~$5) |
| USSD cost per session | N4-8 | Africa's Talking pricing; borne by platform, not user |
| SMS cost per message | N3-4 | Termii pricing; ~10 SMS per order cycle per group |
| CAC per group | ~N2,000-5,000 | Coordinator incentive + onboarding SMS costs |
| LTV per group (12 months) | N72,000-288,000 | 12-24 orders x N6,000-12,000 |
| LTV:CAC ratio | 14:1 - 58:1 | Highly favorable |

### Revenue Targets

| Milestone | Timeline | Active Groups | Monthly Commission (NGN) | Monthly (USD) |
|-----------|----------|---------------|--------------------------|---------------|
| Pilot launch | Month 1 | 5 | N30,000-120,000 | ~$20-78 |
| Traction | Month 3 | 30 | N180,000-720,000 | ~$117-468 |
| Break-even | Month 4 | 50 | N300,000-1,200,000 | ~$195-780 |
| Scale | Month 6 | 100 | N600,000-2,400,000 | ~$390-1,560 |
| Target | Month 12 | 300 | N1,800,000-7,200,000 | ~$1,170-4,680 |

### Break-Even Analysis

At ~$30/month infrastructure cost, break-even requires approximately 3-5 active groups generating 1 order per month each. This is achievable within Month 1-2 of pilot operations.

### Cost Structure Test

This is fundamentally different from incumbents — not just cheaper:
- **LPG retailers** require physical retail locations with storage tanks, staff, and safety equipment. Their cost structure demands the 40-70% markup to survive.
- **GasPool** has zero physical infrastructure. The coordinator is an existing community role, not a hired employee. The USSD platform costs $30/month. The cost structure enables profitability at a price point that would bankrupt a retail outlet.
- This is Pattern 1 (Volume Over Margin) from the cost structure framework: thin margin per transaction, massive potential volume across millions of non-consuming households.

---

## 13. Go-to-Market: First 10 Customers (Groups)

### Channel 1: Market Women's Associations in Lagos (Most Disruptive)

Market women already organize group purchases for wholesale ingredients. The pitch is simple: "You already pool money for palm oil in bulk. Do the same for cooking gas. Your members save 20-30%. You earn N150 per member per order."

**Specific targets:**
- Ajegunle Main Market Women's Association
- Mushin Market Traders Association
- Ikorodu Market Women's Cooperative

**Approach:** In-person visit via Port Harcourt family network connection to Lagos contacts. Identify the most influential coordinator in each market. Sign up one coordinator → she recruits her existing group members.

**Target:** 3 market associations → 3 coordinator sign-ups → 60-75 members → 3 active groups

### Channel 2: Residential Compound Caretakers in Lagos

Face-me-I-face-you compounds in Ajegunle, Mushin, and Oshodi have compound managers/caretakers who already coordinate shared expenses (security, generator fuel, water). Add gas to the list.

**Approach:** USSD-based outreach — SMS blast to numbers in target LGAs: "Save 20-30% on cooking gas. Pool with your neighbors. Dial *XXX# or text GAS to XXXXX."

**Target:** 5 compounds → 5 coordinator sign-ups → 50-80 members → 5 active groups

### Channel 3: Church/Mosque Women's Groups

Religious institutions are the strongest trust networks in low-income Nigerian communities. Women's fellowships in churches and women's groups in mosques already pool money for welfare activities.

**Approach:** Contact women's fellowship leaders through family network. Offer GasPool as a welfare initiative — "Help your members save N1,000-2,000/month on cooking fuel."

**Target:** 2 church/mosque groups → 2 coordinator sign-ups → 40-60 members → 2 active groups

### Channel 4: Existing AjoTrust/KasaBook Coordinators (Cross-Sell)

If AjoTrust or KasaBook have active coordinators, they are the perfect GasPool coordinator candidates — they already manage group financial coordination via USSD.

**Approach:** SMS/USSD notification to existing coordinators: "Your group members can now save on cooking gas through GasPool. Add gas purchasing to your group activities."

**Target:** 5 cross-sell coordinator sign-ups → 75-125 members → 5 active groups

### Channel 5: Radio Advertising (Pidgin English)

Community radio stations in Lagos (e.g., Radio Lagos, Eko FM) reach the exact demographic. 30-second spots in Pidgin: "Gas dey expensive? No wahala! Join GasPool, buy gas with your market people, save 20-30%. Dial *XXX#."

**Target:** Radio spots drive 20-30 USSD dial-ins → 10 coordinator registrations → 5 become active groups

### Channel Summary

| Channel | Priority | Outreach Volume | Expected Groups | Expected Members |
|---------|----------|----------------|-----------------|------------------|
| Market associations | 1 | 3 markets | 3 | 60-75 |
| Residential compounds | 2 | SMS to 500+ | 5 | 50-80 |
| Church/mosque groups | 3 | 5 contacts | 2 | 40-60 |
| Cross-sell from suite | 4 | 20 coordinators | 5 | 75-125 |
| Radio advertising | 5 | 2-week campaign | 5 | 50-75 |
| **Total** | | | **20** | **275-415** |

---

## 14. Risks & Mitigations

### Risk 1: Coordinator Fraud — Collecting Contributions and Disappearing

**Likelihood:** Medium-High. Wherever money is pooled through an intermediary, the intermediary can abscond. This is the most existential risk for GasPool.

**Impact:** Members lose contributions. Trust collapses. Negative word-of-mouth kills adoption across the community.

**Mitigations:**
- Contributions go to a GasPool escrow account, NOT the coordinator's personal account. The coordinator never touches the money.
- All transactions confirmed via SMS to both member and coordinator — transparent, auditable trail.
- Coordinator cannot withdraw funds — only trigger a bulk order that results in gas delivery.
- Coordinator reliability scoring: track order completion rate, member complaints, group retention.
- For launch: start with coordinators who already manage successful ajo/esusu groups — proven trust track record.

### Risk 2: LPG Supply Disruption or Price Volatility

**Likelihood:** Medium-High. Nigeria experiences periodic LPG supply shortages. Prices fluctuate 15-30% seasonally and are affected by naira depreciation (LPG is partially imported).

**Impact:** Pool reaches threshold but gas is unavailable or priced higher than expected. Members receive less gas than anticipated. Savings promise is broken.

**Mitigations:**
- Maintain relationships with minimum 2 suppliers per delivery zone — if one is out of stock, route to backup.
- Lock in price at order confirmation, not at contribution time. Pool target adjusts dynamically based on current bulk pricing.
- Transparent pricing: members see current bulk price per kg via USSD before contributing. No hidden surprises.
- Build 2-week price buffer into pool target calculations.
- Long-term: negotiate forward contracts with major LPG suppliers for price stability.

### Risk 3: Low Contribution Consistency — Pools Never Reach Threshold

**Likelihood:** Medium. Low-income households have irregular cash flow. A week with no income means no contribution. If too many members skip too many weeks, the pool never fills.

**Impact:** Groups stall. Members lose patience. Coordinators abandon the platform.

**Mitigations:**
- Set achievable thresholds: start with small groups (15-20 members) and low thresholds (50kg) so pools fill faster.
- Allow variable contribution amounts — members contribute what they can each week, not a fixed amount.
- Coordinator weekly SMS report shows pool progress — social pressure within the group encourages consistency.
- Inactive member alerts after 14 days of no contribution — coordinator can follow up personally.
- If pool does not fill within 6 weeks, offer partial order option (deliver whatever quantity the pool can afford).

### Risk 4: Cylinder Ownership Barrier

**Likelihood:** High. Members who do not own a gas cylinder cannot use delivered LPG. A new cylinder costs N12,000-25,000 — unaffordable as a lump sum for the target demographic.

**Impact:** GasPool delivers gas but members have nothing to put it in. Adoption stalls.

**Mitigations:**
- Phase 1: target groups where at least 50% of members already own cylinders (peri-urban areas, former kerosene users who have experimented with gas).
- Phase 1 alternative: coordinator holds 2-3 shared cylinders for the group, members borrow and return.
- Phase 2 (Month 4+): pay-as-you-go cylinder program — N500/week installments for 20-30 weeks. Cylinder delivered after first payment, ownership transfers after final payment.
- Partner with cylinder manufacturers for bulk discount on group purchases.

### Risk 5: Safety Incidents Blamed on GasPool

**Likelihood:** Low-Medium. LPG incidents (leaks, fires) happen occasionally, usually due to faulty regulators or improper handling. If an incident occurs in a GasPool household, the platform may be blamed.

**Impact:** Reputational destruction. Regulatory scrutiny. Community-level rejection.

**Mitigations:**
- Partner only with DPR-licensed (now NUPRC-licensed) LPG suppliers — verified safety compliance.
- Include basic safety information in registration SMS and delivery SMS: "Always check for leaks. Turn off cylinder when not in use."
- Coordinators receive basic LPG safety training (via SMS series and phone call with GasPool team).
- GasPool does not handle, store, or transport gas — the supplier does. Liability stays with the licensed supplier.
- Disclaimer in terms: GasPool is a purchasing aggregator, not a gas retailer or distributor.

### Risk 6: Telco/USSD Cost Increases

**Likelihood:** Medium. Africa's Talking USSD session costs could increase. Telcos could impose surcharges.

**Impact:** Per-transaction costs rise, eroding thin margins.

**Mitigations:**
- Minimize USSD sessions per transaction (4-5 screens max).
- Use SMS for non-interactive communication (status updates, delivery notifications) — cheaper than USSD sessions.
- Negotiate volume pricing with Africa's Talking as transaction volume grows.
- Build SMS-only fallback: members text contribution amounts to a short code. Less interactive but cheaper.

### Risk 7: Naira Depreciation Erodes Member Savings

**Likelihood:** High. Naira depreciated 40.9% in 2024 and 25.3% in 2025. LPG prices are partially dollar-denominated (imported component).

**Impact:** Bulk LPG price rises faster than kerosene alternatives, reducing the savings proposition.

**Mitigations:**
- GasPool's value proposition is relative: as long as bulk pricing is 20-30% below retail, the savings hold regardless of absolute price level.
- If retail prices rise, the absolute savings per kilogram actually increase (30% of N1,500/kg > 30% of N1,200/kg).
- Transparent pricing via USSD — members always see current price before contributing.
- Diversify supplier base to include domestic-only LPG sources (less exposed to FX).

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot physically coordinate supplier relationships or coordinator onboarding in person. Must rely on family network in Port Harcourt and remote coordinator onboarding via phone/SMS.
- **Budget: $0-5K:** USSD platform, SMS costs, and initial coordinator incentives must fit within budget. No capital for LPG inventory, cylinder purchases, or physical infrastructure.
- **Tech stack:** USSD via Africa's Talking, SMS via Termii, payments via Paystack/OPay, backend on Vercel + Supabase. No custom hardware, no IoT.
- **Timeline:** MVP in 3-4 weeks. First active group within 4-6 weeks. First delivery within 6-8 weeks.
- **Regulatory:** GasPool is a purchasing aggregator, not an LPG retailer or distributor. No DPR/NUPRC license required for aggregation. All physical gas handling is done by licensed suppliers.

### Assumptions (Each Testable)

1. **Market women coordinators will adopt USSD-based group management.** Test: 3 coordinator sign-ups within Week 2. If coordinators reject USSD, test SMS-only workflow.
2. **Members will contribute N500+/week consistently.** Test: 70%+ weekly contribution rate across first 3 groups in Month 1. If below 50%, lower minimum contribution to N200.
3. **Bulk LPG suppliers will sell at 20-30% below retail for group orders of 50-100kg.** Test: Price quotes from 3 suppliers in Lagos before launch. If discount is <15%, increase minimum order threshold to 100-200kg.
4. **At least 50% of initial group members own gas cylinders.** Test: Registration survey question. If <30%, fast-track pay-as-you-go cylinder program.
5. **Coordinator facilitation fee (N100-200/member/order) is sufficient motivation.** Test: Coordinator retention after first 3 order cycles. If coordinators drop off, increase fee or add performance bonuses.
6. **USSD session costs are sustainable at N4-8/session with current margin structure.** Test: Calculate cost-per-order including all USSD sessions and SMS messages after first 10 orders. If cost exceeds N3,000 per order, optimize session count.

### Out of Scope

| Exclusion | Rationale |
|-----------|-----------|
| LPG storage, transport, or retail | GasPool is a demand aggregator, not a gas company. Physical handling is done by licensed suppliers. Regulatory and safety complexity avoided entirely. |
| Smartphone app | Target demographic is 80%+ feature phone. USSD-only is deliberate and aligned with accessibility mandate. |
| Individual home delivery | Unit economics do not support individual delivery to low-income households at N2,000-3,000 order values. Coordinator-point delivery is the cost structure innovation. |
| Consumer lending / credit for gas | Phase 1 is savings-based pooling. Lending introduces credit risk before payment behavior data exists. Pay-as-you-go cylinder program is deferred to Phase 2. |
| Cooking equipment sales | GasPool facilitates gas purchasing, not appliance sales. Stove/burner procurement is the member's responsibility. |
| Rural markets outside top 3 states | Launch in Lagos, Rivers, Abia only. Rural Northern Nigeria requires different logistics and longer-distance delivery. Deferred to Phase 4. |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] USSD menu tree functional on all 4 Nigerian telcos (MTN, Airtel, Glo, 9mobile)
- [ ] Group registration, member enrollment, and contribution flow complete end-to-end in < 5 minutes
- [ ] Payment integration (Paystack or OPay) processes N500+ contributions with SMS confirmation in < 10 seconds
- [ ] At least 2 verified bulk LPG suppliers registered in Lagos delivery zone with confirmed pricing
- [ ] 5 beta groups (50+ total members) registered and contributing
- [ ] First pool reaches threshold and delivery is triggered

### Success Metrics (3 Months Post-Launch)

- [ ] **Revenue:** N500,000+ in cumulative commission from bulk gas orders
- [ ] **Groups:** 30+ active buying groups
- [ ] **Members:** 500+ participating households
- [ ] **Orders:** 50+ bulk orders completed
- [ ] **Contribution consistency:** 65%+ of members contribute in any given week
- [ ] **Savings delivered:** Average member saves 20%+ vs. retail LPG price
- [ ] **Data asset:** 500+ household energy consumption profiles with 8+ weeks of contribution history
- [ ] **Coordinator retention:** 80%+ of coordinators complete 3+ order cycles
- [ ] **NPS:** Net Promoter Score of 40+ among members (measured via SMS survey)

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 8 | 0.40 | USSD menu tree + payment integration + SMS notifications. Core MVP in 2-3 weeks. No complex AI, no web UI for end users. Supplier onboarding is the critical path. |
| Time to Revenue | 15% | 7 | 1.05 | First revenue from first bulk order delivery — could be Week 4-6. No insurer partnerships, no approval processes. Just aggregate demand and place an order. Faster revenue path than most products in the portfolio. |
| Market Size | 15% | 9 | 1.35 | 40+ million non-consuming households. N1.4-2.4T annual spending on dirty cooking fuel that could shift to LPG. Government actively pushing LPG adoption (NLPG-EIP). Carbon credit market adds another revenue layer. |
| Competition | 10% | 8 | 0.80 | No USSD-based group LPG purchasing platform exists in Nigeria. PayGo gas companies (Kopagas, etc.) target higher-income segments with smart cylinders. No one is aggregating low-income demand via community coordinators. |
| Skill Fit | 15% | 5 | 0.75 | Core is USSD/SMS integration and payment processing — straightforward engineering. Does not leverage AI/ML or data science skills in Phase 1. Data asset strategy in Phase 2-3 better leverages core skills. |
| Capital Required | 10% | 9 | 0.90 | Entire platform runs on USSD + SMS + mobile money — infrastructure cost < $50/month. No inventory, no physical assets, no hardware. $0-5K budget is more than sufficient. |
| Buyer Clarity | 20% | 6 | 1.20 | Cannot LinkedIn-outreach to market women in Ajegunle. Requires in-person coordinator recruitment or community radio. Family network provides initial access. Less clear outreach path than B2B products. |
| Fintech Upside | 10% | 7 | 0.70 | Contribution reliability data creates credit-scoring signals for unbanked populations. Pay-as-you-go cylinder financing is a lending product. Carbon credit monetization. Data licensing to energy companies. Multiple fintech evolution paths. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.40 |
| Time to Revenue (15%) | 1.05 |
| Market Size (15%) | 1.35 |
| Competition (10%) | 0.80 |
| Skill Fit (15%) | 0.75 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 1.20 |
| Fintech Upside (10%) | 0.70 |
| **TOTAL** | **7.15 / 10** |

### Verdict: BUILD (Secondary Priority)

A 7.15 composite reflects an enormous non-consumption opportunity (9 on Market Size) with minimal capital requirements (9) and fast revenue path (7), tempered by moderate skill fit (5 — USSD engineering is not the founder's sweet spot but is learnable) and less clear buyer outreach (6 — requires community-level recruitment rather than digital outreach).

**Key decision factors:**
- 70%+ non-consumption of clean cooking fuel is a massive market creation opportunity
- Zero capital at risk — platform cost < $50/month
- Revenue starts with the first bulk order delivery (Week 4-6)
- Government alignment (NLPG-EIP) creates regulatory tailwind
- Carbon credit revenue adds a second monetization layer unique in the portfolio
- Coordinator network becomes a distribution asset for all future products targeting low-income households

**Go condition:** Build USSD platform in Weeks 1-3. Recruit first 3 coordinators in Lagos via family network by Week 3. First pool contributions by Week 4. First delivery by Week 6. Scale to 30 groups by Month 3.

---

## 18. Disruption Self-Assessment: 8-Criteria Checklist

| # | Criterion | Rating | Evidence |
|---|-----------|--------|----------|
| 1 | **Targets overlooked or non-consuming segments** | **Strong fit** | 70%+ of Nigerian households have never purchased LPG. They are non-consumers of clean cooking fuel — burning firewood, kerosene, and charcoal because the minimum LPG purchase unit is unaffordable as a single transaction. The target persona (Mama Ngozi in Ajegunle) has never owned a gas cylinder and does not believe gas is "for people like her." Incumbent LPG retailers have zero interest in this segment — the per-transaction value is too low, the locations too fragmented. |
| 2 | **Appears deliberately "worse" but good enough** | **Strong fit** | Compared to PayGo smart cylinder solutions (Kopagas, BBOXX Gas) with IoT metering, smartphone apps, and individual delivery, GasPool is inferior on every feature dimension. No app. No smart metering. No individual delivery. Members must collect gas from the coordinator. But GasPool works on a feature phone, costs zero for hardware, and requires only N500/week to participate. It is "worse" by every metric except the ones that matter to non-consumers: accessibility, affordability, and zero upfront cost. |
| 3 | **Gains traction via low-end or new-market foothold** | **Strong fit** | Both footholds apply simultaneously. New-market: these households have never purchased LPG — GasPool creates first-time buyers. Low-end: LPG exists but is priced out of reach for individual low-income purchases — GasPool's group purchasing makes it 20-30% cheaper. This is the Indomie dual foothold: cheaper than existing options (kerosene) AND a new category for the target segment (gas via group buying). |
| 4 | **Reimagines the value chain** | **Strong fit** | GasPool eliminates the retail layer entirely. Instead of: Bulk depot → Retailer (40-70% markup) → Individual consumer, the chain becomes: Bulk depot → GasPool aggregation → Coordinator → Members. The coordinator is not a hired employee — she is an existing community role (ajo coordinator, market leader) repurposed for energy distribution. This is a new distribution channel that did not exist before. |
| 5 | **Prioritizes scaling a core solution** | **Strong fit** | The core product is brutally simple: USSD menu, weekly contributions, bulk order when threshold is reached, gas delivered. No features beyond this in Phase 1. No app, no dashboard, no analytics for end users. Maximum distribution breadth (every feature phone in Nigeria can access it) with minimum product depth. Features (carbon credits, cylinder financing, coordinator dashboards) come after reaching 100+ groups. |
| 6 | **Demands a different cost structure** | **Strong fit** | GasPool has zero physical infrastructure. No retail location. No storage tanks. No delivery fleet. No staff (coordinators are community members earning facilitation fees, not employees). Platform cost: < $50/month. Incumbent LPG retailers require physical locations with N5-20M in setup costs, staff, safety equipment, and storage tanks. GasPool cannot be replicated by adding a feature to a retail operation — it is a fundamentally different business model. |
| 7 | **Converts non-consumption into growth** | **Strong fit** | Every GasPool delivery creates first-time LPG users. The total LPG market expands with every member who switches from kerosene or firewood. Growth comes entirely from non-consumers — GasPool does not steal customers from existing LPG retailers. The government's NLPG-EIP targets exactly this kind of market expansion. At scale, GasPool creates coordinator jobs, supplier demand, and a data asset — growth that did not exist before. |
| 8 | **Can mature to surpass mainstream offerings** | **Partial fit** | The maturation path is clear: group purchasing → pay-as-you-go cylinder ownership → coordinator as last-mile delivery agent → data-driven demand forecasting for suppliers → carbon credit monetization. Over time, GasPool's demand aggregation data could make it the most efficient LPG distribution channel in low-income markets. However, it is unlikely to surpass premium smart-cylinder solutions for higher-income consumers — the products serve fundamentally different segments. GasPool may always remain a "good enough" solution for the bottom of the pyramid, rather than maturing upmarket. |

**Overall: 7/8 strong fit, 1/8 partial fit, 0/8 gaps**

**Non-negotiable criteria check:** Criteria 1 (strong), 3 (strong), 7 (strong) — all three non-negotiable criteria are met with strong fit.

**Note on Criterion 8:** The partial rating is honest. GasPool's maturation path is toward deeper penetration of the low-income segment (more groups, more regions, more products via the coordinator network) rather than moving upmarket to compete with smart-cylinder solutions. This is acceptable — not every disruption must move upmarket. Some disruptions create and dominate entirely new market segments. The Indomie model: Indomie never moved "upmarket" to compete with fine dining. It created and dominated a category of its own.

---

## 19. MNC Anti-Pattern Check

| Pattern | Match? | Assessment |
|---------|--------|------------|
| **1. Phantom Middle Class** | **No match** | GasPool explicitly targets the base of the pyramid — households earning N50-80K/month. There is no middle-class assumption in the model. Revenue comes from volume (hundreds of groups), not high-value individual customers. |
| **2. Push, Don't Pull** | **No match** | People already spend N4,000-6,000/month on kerosene. GasPool offers the same cooking capacity at 20-30% less cost via group purchasing. This is not "you should use gas" (push) — it is "gas is cheaper than kerosene when you buy together" (pull). The pull is verified by existing behavior: market women already pool money for wholesale purchases. |
| **3. Infrastructure Entitlement** | **No match** | GasPool assumes no existing infrastructure. No internet (USSD only). No logistics fleet (suppliers deliver). No formal banking (mobile money). No smartphone (feature phone). The product is designed around infrastructure absence, not despite it. |
| **4. Imported Management** | **No match** | Coordinators are existing community leaders — market women, compound managers, fellowship leaders. They are not hired, trained, or managed by GasPool in a top-down fashion. They adopt GasPool because it earns them money and status. The founder is NYC-based but does not impose imported management — the coordinator network is self-organizing. |
| **5. Blame and Exit** | **No match** | The $30/month infrastructure cost means there is no "exit" pressure. GasPool can operate at minimal scale indefinitely. There is no investor pressure to hit revenue targets that would trigger an exit. Bootstrapped, patient capital. |
| **6. Premium Positioning in a Value Market** | **No match** | GasPool is the value proposition — 20-30% below retail LPG. No premium tier. No upsell. No "enterprise plan." The entire product exists to deliver the lowest possible per-kg gas price to the lowest-income households. |

**Result: 0/6 anti-pattern matches.** GasPool is designed from the ground up for the Nigerian base-of-pyramid market reality. The USSD-only, coordinator-mediated, zero-infrastructure model is the opposite of every MNC failure pattern documented in the framework.
