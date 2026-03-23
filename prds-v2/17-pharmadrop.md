# PRD 17: PharmaDrop — Rural Pharmacy Last-Mile Supply Chain

## 1. Executive Summary

Over 60% of Nigerians get their healthcare from patent medicine vendors (PMVs) and community pharmacies — not hospitals, not clinics, not doctors. There are approximately 200,000 PMVs across Nigeria, the majority in rural and peri-urban areas, serving as the de facto primary healthcare system for 120+ million people. These PMVs have no supply chain.

A PMV operator in Ondo State who needs to restock antimalarials, antibiotics, and ORS packets has exactly one option: close the shop for 1-2 days, travel 3-5 hours to the state capital, visit 4-6 wholesalers in person, negotiate prices, buy whatever they can carry, and travel back. The round trip costs N10,000-25,000 in transport, 1-2 days of lost revenue (N5,000-15,000/day), and the risk of buying substandard or counterfeit medicines from unverified wholesalers. Meanwhile, patients in the community cannot access basic medicines because the PMV is restocking — or worse, because the PMV ran out of stock and has not yet made the trip.

This is not because pharmaceutical distribution does not exist in Nigeria. Large distributors (Emzor, Chi Pharmaceuticals, May & Baker) maintain warehouses in state capitals and major cities. The product exists. The problem is that no distribution channel reaches the last mile — no one delivers to a PMV in a town of 5,000 people accessible by a single-lane road 45 minutes from the nearest city. The supply chain was never built to reach them.

PharmaDrop does not fix pharmaceutical distribution. It builds the last mile that was never constructed.

A PMV sends a drug order list via SMS or USSD — paracetamol 500mg x 200 tabs, amoxicillin 250mg x 100 caps, ORS sachets x 50. A regional hub operator (based in the state capital) aggregates orders from 50-100 PMVs in the surrounding area, procures medicines in bulk from NAFDAC-verified wholesalers at 15-25% below the prices PMVs would pay individually, and dispatches orders via existing commercial transport — the buses, minivans, and motorcycles that already run daily routes to every town in the state. The PMV receives medicines in 24-72 hours instead of making a 2-day personal trip. The cost savings from bulk procurement more than offset the delivery fee.

This is a new-market disruption with a low-end component. New-market because these rural PMVs are non-consumers of reliable pharmaceutical supply chain — they have literally nothing resembling a supply chain today. Low-end because pharmaceutical distribution exists for urban pharmacies and hospitals, but GasPool creates access at a service level and price point the existing system never offered to rural operators.

mPharma (Ghana, $65M raised) and Shelf Life (Kenya) proved pharmaceutical distribution works in Africa — but neither targets the rural last-mile PMV specifically. They serve urban pharmacies that already have some supply chain access. PharmaDrop goes where no one goes.

The data asset is the foundation: real-time rural drug demand patterns by geography, seasonal disease trends (malaria peaks, waterborne illness patterns), supply chain pricing data, and PMV purchasing behavior. This is the first structured dataset on rural Nigerian pharmaceutical demand. No one has it — not NAFDAC, not the Federal Ministry of Health, not the WHO. Pharmaceutical manufacturers, public health agencies, and epidemiological researchers would all license this data.

**Entry channel:** SMS/USSD (PMV ordering) → Desktop (hub operator order management dashboard). No smartphone app for PMVs — most rural PMV operators use feature phones.

**90-day target:** 1 regional hub operating, 50 PMVs placing orders, 200+ orders fulfilled, first commission revenue by Month 2.

**Infrastructure layer:** Layer 2 (business tool with physical logistics component). USSD component runs on the USSD Business Toolkit Platform (Foundation layer). Hub operator dashboard runs on Next.js. Generates Layer 1 data (rural drug demand patterns) and Layer 4 data products (disease surveillance, market intelligence for pharma manufacturers).

---

## 2. Market Opportunity

**Nigeria's rural pharmaceutical supply chain is defined by complete absence.**

This is not a logistics optimization problem. There is no supply chain to optimize. Rural PMVs operate with zero systematic procurement, zero delivery infrastructure, zero price transparency, and zero quality assurance on their incoming stock. The opportunity is not improvement — it is creation.

### The Numbers

- **PMVs in Nigeria:** Approximately 200,000 patent medicine vendors, the majority in rural and peri-urban areas. PMVs outnumber pharmacies roughly 5:1. They are the primary point of healthcare access for 60%+ of the population.
- **Healthcare access gap:** Only 35,000 physicians serve 220M+ Nigerians (1 per 6,300 people vs. WHO recommendation of 1 per 1,000). Hospitals and clinics are concentrated in state capitals and urban centers. For rural populations, the PMV is the healthcare system.
- **Current procurement cost:** A PMV spending N200,000/month on medicines spends an additional N15,000-30,000/month on procurement trips (transport, food, accommodation, shop closure). This is a 7.5-15% overhead that adds zero value.
- **Counterfeit risk:** WHO estimates 17% of medicines in Nigeria are substandard or falsified. Rural PMVs buying from unverified wholesalers face the highest counterfeit exposure. A single counterfeit antimalarial can kill a child.
- **Stockout frequency:** Rural PMVs experience stockouts on essential medicines 40-60% of the time. When a PMV is out of chloroquine or amoxicillin, the patient either goes without treatment, travels hours to a larger town, or buys from an unlicensed street vendor.
- **Market size:** Total pharmaceutical sales in Nigeria exceeded N1.2T ($780M) in 2024, growing 18-25% annually. Rural PMVs represent an estimated 30-40% of total drug sales by volume (mostly low-cost essential medicines), or N360-480B ($234-312M).
- **Proven models:** mPharma (Ghana, $65M raised, 9 African countries) and Shelf Life (Kenya) proved that pharmaceutical distribution platforms work in Africa. Neither targets the rural last-mile. Field Intelligence (Nigeria, $6.4M raised) focuses on inventory financing for urban pharmacies. The rural PMV remains unserved.
- **NAFDAC regulatory support:** NAFDAC actively combats counterfeit medicines. A platform that sources exclusively from verified wholesalers and creates a traceable supply chain aligns directly with NAFDAC's mandate.

### The Wedge

No aggregated ordering and delivery service exists for rural PMVs. Each PMV procures independently — spending days traveling, paying premium individual prices, and accepting whatever quality they find. PharmaDrop's wedge is the aggregation: 50-100 PMV orders combined into bulk procurement from verified wholesalers, with delivery via existing commercial transport. The PMV gets better prices, verified quality, and 24-72 hour delivery without leaving the shop.

### Non-Consumption Framing

We are not competing for urban pharmacy supply chain contracts. We are enabling the 200,000 PMVs — and the 120+ million patients they serve — who have no supply chain at all. Every PharmaDrop order creates reliable pharmaceutical access where none existed. This is not redistribution of existing distribution capacity — it is creation of a new last-mile channel.

This is the Indomie parallel: Tolaram did not compete for existing food distribution customers. They built a distribution network that reached 600,000 retail points that no one else could reach. PharmaDrop builds a pharmaceutical distribution network that reaches PMVs no existing distributor serves.

### Total Addressable Market

- **TAM:** 200,000 PMVs purchasing N360-480B ($234-312M) in medicines annually. Assuming PharmaDrop captures 10-15% commission on orders, the addressable commission pool is N36-72B ($23-47M).
- **SAM:** 50,000 rural and peri-urban PMVs in Southern Nigeria (higher density, better road access) — approximately N90-120B ($58-78M) in annual purchases, or N9-18B ($5.8-11.7M) in commission.
- **SOM (Year 1):** 200 PMVs across 2 states, averaging N150,000/month in orders — approximately N360M ($234K) in annual order volume, generating N36-54M ($23-35K) in commission.

### Regional Variance

- **South-West (Ondo, Ogun, Ekiti):** Dense PMV networks, relatively good road infrastructure, close to Lagos wholesale market. Start here for pilot.
- **South-East (Anambra, Imo, Abia):** Strong trading culture, Onitsha is a major pharmaceutical wholesale hub. But sit-at-home disruptions create supply chain unreliability that PharmaDrop could solve.
- **South-South (Rivers, Edo, Delta):** Oil-producing states with rural communities that have money but poor infrastructure. High willingness to pay for reliable supply.
- **North (Kano, Kaduna):** Largest pharmaceutical consumption (malaria prevalence) but more challenging logistics. Phase 2.

---

## 3. Target Personas

### Primary Persona: Mr. Okafor — The Rural Patent Medicine Vendor (The True Non-Consumer)

**Who:** Operates a patent medicine store in a town of 3,000-8,000 people in Ondo State, approximately 90 minutes from Akure (state capital). He is the only source of medicines for 2-3 surrounding villages.

- **Age:** 48. Has been a PMV for 18 years.
- **Education:** Secondary school graduate. Completed the PCN-required PMV training program.
- **Shop:** A single-room shop on the town's main road. Carries 60-100 essential medicines: antimalarials, antibiotics, pain relief, cough medicines, ORS, vitamins, antihypertensives, blood tonics, eye drops, wound care.
- **Monthly revenue:** N150,000-250,000 in medicine sales. Net profit margin: 25-35%.
- **Current procurement:** Every 2-3 weeks, closes shop for 1-2 days, takes a bus to Akure (N2,000-3,000 round trip, 3 hours each way), visits 3-5 wholesalers, buys N80,000-150,000 in medicines, carries them back in bags and boxes on the bus. Total procurement trip cost: N15,000-25,000 (transport + food + lost revenue). Trip takes 8-14 hours.
- **Pain points:** (1) Stockouts between trips — patients come for amoxicillin and he has none, so they go without or travel to the next town. (2) Price uncertainty — no way to compare wholesaler prices without physically visiting each one. (3) Counterfeit risk — he cannot verify medicine authenticity from unfamiliar wholesalers. (4) Capital tied up in excess inventory — buys too much of slow-moving items and too little of fast-moving ones because he cannot restock quickly.
- **Phone:** Nokia feature phone. Uses USSD for airtime and mobile money. Has a basic Android phone (wife's) that he occasionally uses for WhatsApp. Primarily operates via calls and SMS.
- **Decision trigger:** If someone offers to deliver verified medicines to his shop at prices equal to or better than what he pays in Akure, with 24-72 hour delivery, he will switch immediately. The pull is obvious: same or better prices, no trip cost, no shop closure, no stockout risk. He does not need to be convinced of the value — the value is self-evident.

**Why this persona matters for disruption:** This is the non-consumer of pharmaceutical supply chain that major distributors will never serve individually. The order value (N80-150K) is too small. The location is too remote. The delivery logistics are unattractive. But 50-100 Mr. Okafors aggregated into a single procurement run represent N4-15M in monthly orders — a volume that any wholesaler will prioritize, and a delivery route that commercial transport already covers.

### Secondary Persona: Hub Operator Funke — The Regional Distribution Manager (The Upmarket Target)

**Who:** A pharmacist or pharmaceutical entrepreneur in the state capital (Akure, Ondo State) who operates the PharmaDrop regional hub. She aggregates orders, manages procurement from verified wholesalers, and coordinates dispatch.

- **Age:** 35. BSc Pharmacy from University of Lagos. PCN-licensed pharmacist.
- **Location:** Akure, Ondo State. Rents a small warehouse/office space.
- **Current work:** Runs a mid-size pharmacy in Akure. Looking for additional income streams. Has existing relationships with 5-8 pharmaceutical wholesalers.
- **Phone/tech:** Android smartphone, laptop. Active on WhatsApp. Comfortable with web dashboards.
- **Motivation:** Earns 5-8% margin on aggregated orders that flow through her hub. At 50 PMVs ordering N150K/month each, she processes N7.5M/month in orders and earns N375,000-600,000/month — more than her pharmacy income.
- **Decision trigger:** When she sees the math: aggregate orders from 50 PMVs, buy in bulk at 15-25% discount, dispatch via existing transport, pocket the spread minus delivery costs. The economics are immediately compelling.
- **What she needs from PharmaDrop:** A dashboard that aggregates PMV orders, shows inventory availability and pricing from wholesalers, generates purchase orders, tracks deliveries, and manages PMV accounts.

### Tertiary Persona: The Data Buyer — Pharma Manufacturers, Public Health Agencies

**Who:** Pharmaceutical manufacturers (Emzor, Fidson, May & Baker), NAFDAC, the Federal Ministry of Health, WHO Nigeria, Malaria Consortium, and epidemiological researchers.

- **What they want:** Granular, real-time data on drug demand by geography — what medicines are being ordered, where, how often, and in what volumes. This data does not exist for rural Nigeria. NAFDAC's pharmacovigilance system covers hospitals and registered pharmacies, not PMVs.
- **Decision trigger:** When PharmaDrop has 6+ months of order data from 200+ PMVs across multiple states, this becomes the most granular rural drug demand dataset in West Africa.
- **Value:** N10-50M annually in data licensing, research partnerships, and epidemiological consulting.

---

## 4. Problem Deep Dive

### Why 200,000 PMVs Have No Supply Chain

The problem is not that pharmaceutical distribution does not exist in Nigeria. It is that the distribution system was built to serve urban pharmacies and hospitals with large, regular orders — not rural PMVs with small, irregular orders in remote locations.

**Step 0: Invisible to Distributors (Where Most PMVs Are Stuck)**

Major pharmaceutical distributors (Emzor Distribution, Chi Pharmaceuticals, Swiss Pharma) maintain sales forces that visit pharmacies and hospitals in state capitals and major cities. They do not have sales reps covering towns of 3,000-8,000 people accessible by single-lane roads. The PMV in rural Ondo is invisible to the distribution system. No rep has ever visited. No catalog has ever been sent. No price list has ever been offered. The supply chain simply does not extend to them.

**Step 1: The Procurement Trip**

When the PMV's stock runs low, he closes the shop and travels to the state capital. This trip typically involves:
- 3-5 hours of bus travel each way (N2,000-3,000 round trip)
- Visiting 3-6 different wholesalers because no single wholesaler carries everything he needs
- Negotiating prices individually at each wholesaler — no standardized pricing
- Carrying purchased medicines in bags and boxes on the return bus
- Total time: 8-14 hours minimum, often requiring an overnight stay (N2,000-5,000 for accommodation)

**Step 2: Price Opacity**

The PMV has zero price transparency. He does not know:
- Whether the price he is paying at Wholesaler A is competitive vs. Wholesaler B
- Whether the same medicine costs 30% less from a different supplier in the same market
- Whether prices have changed since his last visit
- Whether there are volume discounts he could access if his order were larger

He is a price-taker, paying whatever each wholesaler quotes, with no leverage and no comparison capability.

**Step 3: Quality Risk**

The PMV cannot verify medicine authenticity. He trusts his regular wholesalers based on relationship, not on verification. But:
- WHO estimates 17% of medicines in Nigeria are substandard or falsified
- Counterfeit antimalarials and antibiotics are the highest-risk categories — and the most commonly purchased
- NAFDAC registration numbers can be faked on packaging
- The PMV has no way to check batch numbers, expiry dates systematically, or recall notices
- A single counterfeit medicine can kill a patient and destroy the PMV's reputation in the community

**Step 4: Stockout Impact**

Between procurement trips (2-3 weeks), the PMV frequently runs out of high-demand medicines:
- Antimalarials (artesunate-amodiaquine, artemether-lumefantrine) during malaria season
- Antibiotics (amoxicillin, metronidazole) for common infections
- ORS sachets during diarrheal disease outbreaks
- Basic pain relief (paracetamol, ibuprofen)

When a patient arrives and the medicine is out of stock, the patient has three options:
1. Travel 1-3 hours to the nearest town with another PMV or pharmacy
2. Go without treatment (common for "mild" symptoms — which can become fatal)
3. Buy from an unlicensed street vendor (counterfeit risk)

**Step 5: Capital Inefficiency**

Because restocking is difficult and infrequent, the PMV over-orders some items (tying up capital in slow-moving stock) and under-orders others (causing stockouts). He has no demand forecasting, no inventory management system, and no way to adjust orders dynamically based on what is actually selling.

**Quantified Business Impact:**
- **Lost revenue from stockouts:** N20,000-50,000/month in turned-away patients (10-25% of potential revenue)
- **Procurement trip costs:** N15,000-30,000/month (7.5-15% of revenue)
- **Capital tied up in excess inventory:** N50,000-100,000 at any given time in slow-moving stock
- **Counterfeit risk:** One counterfeit incident = potential community trust destruction, regulatory action, criminal liability

### The Pull Test

Do PMVs already spend money on procurement? Yes — N15,000-30,000/month plus 1-2 days of lost revenue. Would they pay for a service that eliminates the trip, provides better prices, and guarantees quality? The answer is self-evident. The pull is not "you should use a supply chain" — it is "your medicines arrive at your shop in 24-72 hours at prices as good or better than Akure, from NAFDAC-verified wholesalers, and you never close your shop again." No convincing required.

---

## 5. Solution Overview

PharmaDrop is a SMS/USSD ordering system paired with a regional hub model that aggregates rural PMV demand, procures from verified wholesalers, and delivers via existing commercial transport.

### Stage 1: PMV Registration and Order Placement (SMS/USSD)

A PMV dials *XXX# or sends an SMS with their drug order list. Registration happens on first use: name, shop name, location (town, LGA, state), phone number. Orders are a simple list: drug name, quantity. The system recognizes common abbreviations and brand names: "para 500 x200" = paracetamol 500mg x 200 tablets.

**Channel:** SMS (primary for orders — allows longer lists), USSD (registration, status checks)
**Data created:** PMV registry, order history, demand patterns by geography

### Stage 2: Hub Aggregation and Procurement

The hub operator receives aggregated orders on a web dashboard. Orders from 50-100 PMVs are consolidated into a single procurement list. The dashboard shows: quantity needed per item, current wholesaler pricing, recommended procurement allocation across wholesalers, total order value.

The hub operator places bulk orders with 3-5 NAFDAC-verified wholesalers. Bulk pricing is 15-25% below what individual PMVs would pay at retail. The hub operator's margin comes from the spread between bulk procurement price and the per-PMV delivery price.

**Channel:** Desktop web dashboard (hub operator)
**Data created:** Wholesale pricing database, supplier reliability scores, bulk discount tiers

### Stage 3: Order Packing and Dispatch

The hub operator packs individual PMV orders from the bulk procurement. Each package is labeled with PMV name, destination town, and contents manifest. Packages are dispatched via existing commercial transport — the passenger buses, minivans, and motorcycle couriers that already run daily routes from the state capital to every town in the state. The hub operator pays the transport operator a fixed fee per package (N500-2,000 depending on size and distance).

**Channel:** Physical logistics (commercial transport)
**Data created:** Delivery route mapping, transport cost database, fulfillment times

### Stage 4: Delivery Confirmation and Payment

The PMV receives their package at the town's transport terminal (motor park) or via motorcycle courier to the shop. The PMV confirms receipt via SMS or USSD. Payment is either cash-on-delivery (collected by transport operator) or prepaid via mobile money.

**Channel:** SMS/USSD (confirmation), Mobile Money (payment)
**Data created:** Delivery confirmation data, payment behavior, order accuracy feedback

### Stage 5: Reorder and Relationship Building

PharmaDrop tracks each PMV's order history and sends proactive restock reminders via SMS: "You last ordered amoxicillin 250mg 3 weeks ago. Reorder? Reply YES to send same quantity." Over time, the system learns each PMV's ordering patterns and suggests optimized stock levels.

**What PharmaDrop deliberately sacrifices vs. premium alternatives:**
- No refrigerated delivery — cold chain medicines (vaccines, insulin) are excluded from Phase 1. Focus on ambient-temperature essential medicines.
- No same-day delivery — 24-72 hours via commercial transport, not motorcycle-on-demand like urban pharmacy delivery apps.
- No inventory management software for PMVs — the PMV sends an SMS list, not a POS-integrated reorder. Manual, simple, works on any phone.
- No direct manufacturer relationships — PharmaDrop buys from wholesalers, not manufacturers. Simpler, faster, no minimum order requirements.

**These sacrifices are deliberate.** Rural PMVs do not need cold chain (they do not stock vaccines). They do not need same-day delivery (they currently restock every 2-3 weeks). They do not need POS software (they track inventory in a notebook). PharmaDrop is "worse" than mPharma or Field Intelligence — but it works for a PMV with a feature phone in a town of 5,000 people.

### Iteration Path

- **Phase 1 (Months 1-3):** SMS ordering, single hub (Akure, Ondo State), delivery via commercial transport, manual hub operations. Prove demand with 50 PMVs.
- **Phase 2 (Months 4-8):** Hub operator dashboard v2 (automated aggregation, wholesaler price comparison, delivery tracking). Second hub (Benin City, Edo State). PMV restock reminders based on order history. NAFDAC batch tracking.
- **Phase 3 (Months 9-18):** Automated demand forecasting for hub operators. Inventory financing (hub extends short-term credit to PMVs based on order history). Partnership with pharmaceutical manufacturers for direct supply. Disease surveillance data product.
- **Phase 4 (Year 2+):** Hub network across 6+ states. Cold chain capability for vaccines and insulin. Integration with public health programs (malaria drug distribution via PMV network). Franchise model for hub operators.

---

## 6. Functional Requirements

### MUST Have — MVP (Month 1)

### FR1: PMV Registration via USSD
- **Description:** PMV registers on first use by dialing *XXX# and entering shop details.
- **Channel:** USSD
- **Inputs:** PMV name, shop name, town, LGA, state, phone number
- **Outputs:** Registration confirmation SMS, unique PMV code (PD-[STATE]-[4 digits])
- **Acceptance Criteria:**
  - [ ] Registration completes in 5 USSD screens or fewer
  - [ ] Each screen contains 160 characters or fewer
  - [ ] PMV code is unique and human-readable
  - [ ] SMS confirmation sent within 5 seconds
  - [ ] Duplicate phone number detection prevents re-registration (directs to existing account)

### FR2: Medicine Order via SMS
- **Description:** PMV sends an SMS with their drug order list to PharmaDrop's short code. System parses the list and returns a quote.
- **Channel:** SMS
- **Inputs:** SMS containing drug names and quantities (free-text format, e.g., "para 500 x200, amoxi 250 x100, ORS x50")
- **Outputs:** Parsed order confirmation SMS with line items, prices per item, total cost, estimated delivery date
- **Acceptance Criteria:**
  - [ ] System recognizes 100+ common drug names, brand names, and abbreviations (paracetamol/para/panadol, amoxicillin/amoxi/amoxil, etc.)
  - [ ] Unrecognized items flagged with "Item not found — please clarify" message
  - [ ] Quote SMS sent within 2 minutes of order receipt
  - [ ] Quote includes per-item price, total cost, delivery fee, and estimated delivery window (24-72 hours)
  - [ ] PMV confirms order by replying "YES" or rejects with "NO"
  - [ ] Order confirmation stored and forwarded to hub operator dashboard

### FR3: Medicine Order via USSD (Alternative)
- **Description:** PMV places an order by selecting from a USSD menu of common medicine categories.
- **Channel:** USSD
- **Inputs:** Category selection (e.g., Antimalarials, Antibiotics, Pain Relief, ORS/Rehydration), specific drug selection, quantity
- **Outputs:** Order summary USSD screen, confirmation SMS
- **Acceptance Criteria:**
  - [ ] Medicine catalog organized into 8-10 categories with 10-15 items per category
  - [ ] Quantity entry accepts numeric input
  - [ ] Order session completes in 6 screens or fewer
  - [ ] "Reorder last order" shortcut available after first order
  - [ ] Cart functionality: add multiple items before confirming

### FR4: Hub Operator Order Dashboard (Web)
- **Description:** Web-based dashboard showing all incoming PMV orders, aggregated procurement list, wholesaler pricing, and dispatch tracking.
- **Channel:** Desktop web (Next.js)
- **Inputs:** Hub operator login (email + password)
- **Outputs:** Aggregated order view, procurement worksheet, dispatch checklist
- **Acceptance Criteria:**
  - [ ] Dashboard loads in < 3 seconds on 3G connection
  - [ ] Shows all pending orders from registered PMVs, sortable by date, PMV location, and order value
  - [ ] Aggregates all pending orders into a single procurement list (total quantity needed per medicine)
  - [ ] Shows wholesale price per item from each registered wholesaler
  - [ ] Generates printable procurement worksheet for market visits
  - [ ] Dispatch checklist with per-PMV packing list
  - [ ] Order status tracking: received → procured → packed → dispatched → delivered
  - [ ] One-click Excel export of all orders, procurement lists, and financial summaries

### FR5: Delivery Confirmation via SMS/USSD
- **Description:** PMV confirms receipt of medicines. Hub operator marks delivery as complete.
- **Channel:** SMS (PMV confirmation) or USSD
- **Inputs:** PMV replies "RECEIVED" to delivery notification SMS, or dials *XXX# and confirms
- **Outputs:** Delivery marked complete in dashboard, PMV receives receipt SMS with order summary
- **Acceptance Criteria:**
  - [ ] Delivery notification SMS sent to PMV when package dispatched (includes expected arrival time)
  - [ ] PMV confirmation triggers dashboard update within 30 seconds
  - [ ] If PMV does not confirm within 48 hours, system sends reminder SMS
  - [ ] Receipt SMS includes: items received, amounts paid, order reference number
  - [ ] Discrepancy reporting: PMV can reply "ISSUE" to flag missing/damaged items

### FR6: Payment Processing
- **Description:** PMV pays for order via mobile money (prepaid) or cash-on-delivery via transport operator.
- **Channel:** Mobile Money (Paystack/OPay) or Cash
- **Inputs:** Mobile money payment via USSD or cash collection confirmation from hub operator
- **Outputs:** Payment confirmation SMS to PMV, payment recorded in dashboard
- **Acceptance Criteria:**
  - [ ] Mobile money payment option presented in order confirmation SMS
  - [ ] Cash-on-delivery tracked via hub operator dashboard (manual entry when transport operator returns cash)
  - [ ] Payment status visible in dashboard: paid, pending, cash-collected
  - [ ] No order dispatched until payment confirmed (prepaid) or marked as COD
  - [ ] Monthly statement SMS sent to PMV: total ordered, total paid, outstanding balance

### FR7: Wholesaler Registry
- **Description:** Hub operator registers and manages verified wholesalers with pricing, NAFDAC status, and product catalog.
- **Channel:** Desktop web dashboard
- **Inputs:** Wholesaler name, NAFDAC registration number, address, contact, product list with pricing
- **Outputs:** Wholesaler database with price comparison, NAFDAC verification status
- **Acceptance Criteria:**
  - [ ] Only NAFDAC-registered wholesalers can be added (registration number required)
  - [ ] Price per item stored and compared across wholesalers
  - [ ] Dashboard recommends lowest-cost wholesaler per item
  - [ ] Pricing updated manually by hub operator (frequency: weekly)
  - [ ] Wholesaler performance tracked: fill rate, pricing consistency, delivery speed

### SHOULD Have — Month 2-3

### FR8: Restock Reminder SMS
- **Description:** Based on order history, system sends proactive restock reminders to PMVs.
- **Channel:** SMS
- **Acceptance Criteria:**
  - [ ] Reminder triggered when estimated days-to-stockout reaches 5 days (based on average order frequency)
  - [ ] Reminder includes last order items and quantities: "Time to restock? Your last order: para 500 x200, amoxi 250 x100. Reply REORDER to place same order."
  - [ ] PMV can reply "REORDER" to instantly re-place the previous order
  - [ ] Reminders suppressed for 7 days after an order is placed

### FR9: PMV Order History via USSD
- **Description:** PMV checks order history, spending, and savings via USSD.
- **Channel:** USSD
- **Acceptance Criteria:**
  - [ ] Shows last 5 orders with dates and amounts
  - [ ] Shows total savings vs. estimated individual procurement cost ("You have saved N45,000 on procurement trips this year")
  - [ ] Shows "Your most ordered items" (top 5 medicines by frequency)

### FR10: Delivery Route Optimization
- **Description:** Dashboard suggests optimal packing and dispatch grouping based on transport routes.
- **Channel:** Desktop web dashboard
- **Acceptance Criteria:**
  - [ ] PMVs grouped by transport route (e.g., all PMVs along the Akure-Ondo-Ore road)
  - [ ] Estimated transport cost per route displayed
  - [ ] Dispatch batching: orders going the same direction packed and dispatched together
  - [ ] Transport operator contact and schedule stored per route

### FR11: NAFDAC Batch Tracking
- **Description:** Hub operator logs batch numbers and expiry dates of procured medicines. PMVs receive batch info via SMS.
- **Channel:** Desktop web (input) → SMS (delivery to PMV)
- **Acceptance Criteria:**
  - [ ] Batch number and expiry date logged per item per procurement batch
  - [ ] PMV delivery SMS includes batch numbers for traceability
  - [ ] Dashboard flags medicines within 6 months of expiry
  - [ ] Recall notices: if NAFDAC recalls a batch, system identifies all PMVs who received it and sends SMS alert

### COULD Have — Month 4+

### FR12: Inventory Financing for PMVs
- **Description:** PMVs with 6+ months of consistent order history can receive short-term credit (7-14 day payment terms on orders).
- **Channel:** SMS/USSD (application), Dashboard (approval)
- **Acceptance Criteria:**
  - [ ] Eligibility auto-calculated from order history (6+ orders, 90%+ on-time payment)
  - [ ] Credit limit set at 50% of average monthly order value
  - [ ] Repayment via mobile money with SMS reminders at 7 and 14 days
  - [ ] Default flagged at 21 days; credit suspended

### FR13: Disease Surveillance Data Export
- **Description:** System generates aggregate reports on drug demand patterns by geography for public health agencies.
- **Channel:** Admin dashboard (data export)
- **Acceptance Criteria:**
  - [ ] Antimalarial orders aggregated by LGA and month — shows malaria seasonality patterns
  - [ ] ORS orders correlated with waterborne disease outbreaks by geography
  - [ ] Antibiotic demand patterns by region
  - [ ] All reports anonymized (no PMV identification)
  - [ ] Export in CSV/Excel format compatible with WHO and FMOH reporting standards

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Cold chain delivery | Vaccines and insulin require refrigerated transport that does not exist on commercial routes. Excluded until dedicated cold chain partnerships are established (Phase 4). |
| Direct-to-patient delivery | PharmaDrop serves PMVs, not end patients. The PMV is the last-mile retailer. Adding B2C delivery creates regulatory complexity (pharmacy licensing) and destroys unit economics. |
| Prescription verification | PMVs in Nigeria dispense most medicines without prescriptions (legally, for OTC and PMV-approved categories). Prescription verification adds friction without regulatory requirement for PMV-eligible medicines. |
| Smartphone app for PMVs | Target demographic is feature-phone-dominant. SMS/USSD is deliberate. A WhatsApp ordering channel may be added in Phase 2 for PMVs who have smartphones. |
| Manufacturing or compounding | PharmaDrop is a supply chain platform, not a pharmaceutical manufacturer. All medicines sourced from existing NAFDAC-verified wholesalers. |
| Controlled substances | Schedule 1 and 2 drugs (opioids, etc.) excluded entirely due to regulatory complexity and diversion risk. PMVs are not licensed to dispense controlled substances. |

---

## 7. Non-Functional Requirements

### NFR1: Performance
- SMS order parsing: < 2 minutes from receipt to quote SMS sent
- USSD session response time: < 2 seconds per screen transition
- Hub dashboard page load: < 3 seconds on 3G connection
- Dashboard search/filter operations: < 1 second response time
- System supports 200 concurrent PMVs and 5 hub operators at launch, scaling to 2,000 PMVs and 20 hubs within 12 months

### NFR2: Offline/Low-Bandwidth
- PMV-facing functions operate entirely via SMS/USSD — zero internet required for PMVs
- Hub dashboard implements offline-first architecture: order data cached in IndexedDB, syncs when online
- Dashboard works on intermittent 3G connection — no data loss if connection drops mid-update
- Printable procurement worksheets generated server-side and cached — hub operator can print and go to market even if internet fails
- All critical hub functions (view orders, mark as dispatched, record payment) work offline with sync-on-reconnect

### NFR3: Security
- NAFDAC wholesaler verification numbers stored and validated at registration
- Hub operator authentication: email + OTP (Supabase Auth)
- PMV identity verified via phone number + OTP on first registration
- Medicine batch tracking data encrypted at rest (AES-256)
- Hub operator cannot see other hubs' data (Row Level Security)
- Financial transaction logs immutable — no retroactive editing of payment records
- PMV phone numbers and order history not shared between hubs or with third parties without consent

### NFR4: Scalability
- Architecture supports 20 hubs and 2,000 PMVs within 12 months
- SMS parsing engine handles 1,000 inbound order SMS per day
- Database handles 50,000 order line items per month at Year 1 scale
- Wholesaler pricing database supports 5,000+ medicine SKUs
- Dashboard supports concurrent access by 5 users per hub

### NFR5: Accessibility
- SMS ordering works on any phone (feature phone, smartphone, all networks)
- USSD menus work on 2G connections — critical for rural areas with limited infrastructure
- Drug names accepted in multiple formats: brand name (Panadol), generic name (paracetamol), abbreviation (para), with common misspellings handled
- All SMS messages in English; Pidgin English alternative for select messages
- Dashboard designed for low-bandwidth: < 200KB initial page load, system fonts, skeleton loading

### NFR6: Regional
- Support for all 36 states at database level; launch in Ondo and Edo states
- Medicine pricing varies by state — system stores per-hub pricing
- Transport route mapping covers major and minor roads in launch states
- Disease surveillance data tagged by state, LGA, and town

---

## 8. Key Screens & UX

### PMV-Facing: SMS and USSD

**SMS Order Flow:**

PMV sends SMS to PharmaDrop short code:
```
para 500 x200
amoxi 250 x100
ORS x50
flagyl 400 x100
eye drops x20
```

PharmaDrop responds (within 2 minutes):
```
PharmaDrop Order #PD12345
1. Paracetamol 500mg x200: N4,800
2. Amoxicillin 250mg x100: N7,200
3. ORS sachets x50: N3,500
4. Metronidazole 400mg x100: N5,600
5. Chloramphenicol eye drops x20: N6,000
Total: N27,100
Delivery: N1,500
GRAND TOTAL: N28,600
Delivery: 24-48hrs
Reply YES to confirm or EDIT to change
```

PMV replies: `YES`

PharmaDrop confirms:
```
Order #PD12345 confirmed!
Pay N28,600 via mobile money:
*737*1*[ACCOUNT]*28600#
Or pay cash on delivery.
Delivery ETA: Wed Mar 25
Questions? Call 0801XXXXXXX
```

**USSD Menu Tree (*XXX#):**

```
Welcome to PharmaDrop
1. Place Order
2. Reorder Last Order
3. Check Order Status
4. My Account
```

**Screen 1.1: Place Order — Category Selection**
```
Select category:
1. Antimalarials
2. Antibiotics
3. Pain Relief
4. ORS/Rehydration
5. Vitamins
6. Blood Pressure
7. Cough/Cold
8. More categories
```

**Screen 1.2: Drug Selection (e.g., Antibiotics)**
```
Antibiotics:
1. Amoxicillin 250mg
2. Amoxicillin 500mg
3. Metronidazole 400mg
4. Ciprofloxacin 500mg
5. Erythromycin 250mg
6. Cotrimoxazole
7. More
```

**Screen 1.3: Quantity**
```
Amoxicillin 250mg
Enter quantity (tablets):
```

**Screen 1.4: Cart**
```
Your order:
1. Amoxi 250mg x100: N7,200
2. Para 500mg x200: N4,800
Total: N12,000 + N1,500 delivery
1. Add more items
2. Confirm order
3. Cancel
```

**Screen 3.1: Order Status**
```
Order #PD12345
Status: DISPATCHED
Dispatched: Mar 24, 2pm
Via: ABC Transport, Akure-Ondo
Expected: Mar 25, 10am
Package ref: PKG-4521
```

### Hub Operator Dashboard (Desktop Web)

**Screen 1: Dashboard Home**

Top bar: Hub name | Location | Date | Logged in as: [Operator name]

KPI cards row:
- Pending Orders: [X] | Total value: N[amount]
- Orders This Week: [X] | Revenue: N[amount]
- Active PMVs: [X] | New This Month: [X]
- Fulfillment Rate: [XX]%

Below: Two-column layout:
- **Left (60%):** Pending orders table
  - Columns: Order # | PMV Name | Town | Items | Value | Received | Status | Actions
  - Sort by: Date (default), Value, Location
  - Bulk action: "Generate Procurement List" (combines all selected orders into a single buying list)
- **Right (40%):** Quick actions
  - "Generate Procurement Worksheet" (printable PDF)
  - "View Today's Dispatches"
  - "SMS All PMVs" (broadcast)
  - "Add Wholesaler Prices"

**Screen 2: Procurement Worksheet**

Table showing aggregated demand:
| Medicine | Total Qty Needed | Wholesaler A Price | Wholesaler B Price | Best Price | Recommended Supplier | Total Cost |
|----------|:---:|:---:|:---:|:---:|---|:---:|

Bottom: Total procurement cost | Estimated margin | Print button | Export to Excel

**Screen 3: Dispatch Management**

Table showing orders ready to dispatch:
| Order # | PMV | Town | Transport Route | Package Weight | Transport Cost | Status | Actions |
|---------|-----|------|-----------------|:-:|:-:|--------|---------|

Actions: "Mark as Packed" → "Mark as Dispatched" (enters transport operator name and departure time) → "Mark as Delivered" (when PMV confirms)

Group by transport route: all orders going the same direction in a single dispatch group.

**Screen 4: PMV Directory**

Table of all registered PMVs:
| PMV Code | Name | Shop Name | Town | LGA | State | Total Orders | Monthly Avg | Last Order | Payment Status |

Click on PMV: detailed order history, payment history, restock frequency, most-ordered items.

**Screen 5: Financial Summary**

| Metric | This Month | Last Month | Trend |
|--------|:---:|:---:|:---:|
| Total Order Value | N[X] | N[X] | [arrow] |
| Procurement Cost | N[X] | N[X] | |
| Delivery Costs | N[X] | N[X] | |
| Gross Margin | N[X] | N[X] | |
| PMVs Served | [X] | [X] | |
| Orders Fulfilled | [X] | [X] | |
| Avg Order Value | N[X] | N[X] | |

Export all financial data to Excel (one-click XLSX download).

### UX Principles Applied

- **P1 (WhatsApp-Simple):** SMS ordering is even simpler than WhatsApp — just text a list. No menus, no buttons, no navigation.
- **P2 (Offline-Resilient):** PMV-side is entirely offline-capable (SMS/USSD). Hub dashboard caches data locally.
- **P3 (Numbers-Forward):** Dashboard leads with naira amounts. PMVs see prices in every SMS.
- **P5 (Export Everything to Excel):** Hub operator can export every table to XLSX. Procurement worksheets, financial summaries, PMV directories.
- **P6 (Progressive Complexity):** PMVs see only SMS messages. Hub operators see full dashboard. Complexity increases only for users who need it.
- **P8 (Low-Bandwidth):** Dashboard under 200KB initial load. SMS/USSD is zero-bandwidth.
- **P9 (USSD/SMS First):** PMV-facing product is SMS/USSD only. Desktop is for hub operators only.
- **P10 (Region-Aware):** Medicine pricing, transport routes, and demand patterns vary by state. System stores per-hub regional data.

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| SMS Gateway | Termii | Nigerian SMS API; inbound SMS parsing; delivery receipts; short code support |
| USSD Gateway | Africa's Talking | USSD session management for registration and status checks |
| SMS Parsing | Node.js custom parser + OpenAI API | Parse free-text drug orders into structured data; handle abbreviations, brand names, misspellings |
| Frontend (Hub Dashboard) | Next.js 14 (App Router, SSR) | Fast initial load; server-side rendering for low-bandwidth; React ecosystem |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development; clean, professional dashboard |
| Backend | Next.js API Routes + Server Actions | Single deployment; handles SMS webhooks, USSD callbacks, dashboard API |
| Database | Supabase PostgreSQL | Managed Postgres; Row Level Security for multi-hub isolation; free tier for MVP |
| Auth | Supabase Auth | Email + OTP for hub operators; phone-based identity for PMVs |
| Payment Processing | Paystack / OPay | Mobile money collection from PMVs; payout to hub operators |
| File Storage | Supabase Storage | Procurement worksheets (PDF), NAFDAC certificates, order receipts |
| Excel Export | xlsx (SheetJS) library | Formatted exports of procurement lists, financial reports, PMV directories |
| Offline Storage | IndexedDB via idb library | Dashboard offline caching for orders, PMV data, pricing |
| Background Jobs | Vercel Cron / Supabase Edge Functions | Restock reminders, order aggregation, weekly reports |
| Monitoring | PostHog (analytics) + Sentry (errors) | Track order flow funnel, SMS delivery rates, dashboard usage |
| Hosting | Vercel (frontend/backend) + Supabase (database) | Free tiers for MVP; auto-scaling |

### Database Schema (Core Tables)

```sql
-- Hub Operators
hubs (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  state text NOT NULL,
  lga text NOT NULL,
  city text NOT NULL,
  operator_name text NOT NULL,
  operator_phone text NOT NULL,
  operator_email text,
  pcn_license_number text, -- Pharmacists Council of Nigeria license
  warehouse_address text,
  active_pmvs integer DEFAULT 0,
  total_orders_processed integer DEFAULT 0,
  total_order_value decimal(15,2) DEFAULT 0,
  created_at timestamptz DEFAULT now()
)

-- Patent Medicine Vendors
pmvs (
  id uuid PRIMARY KEY,
  code text UNIQUE NOT NULL, -- PD-OND-0042
  hub_id uuid REFERENCES hubs,
  name text NOT NULL,
  shop_name text,
  phone text UNIQUE NOT NULL,
  town text NOT NULL,
  lga text NOT NULL,
  state text NOT NULL,
  transport_route text, -- e.g., "Akure-Ondo-Ore road"
  total_orders integer DEFAULT 0,
  total_spend decimal(15,2) DEFAULT 0,
  avg_order_value decimal(12,2) DEFAULT 0,
  payment_reliability_score decimal(5,2) DEFAULT 100,
  credit_eligible boolean DEFAULT false,
  credit_limit decimal(12,2) DEFAULT 0,
  registered_at timestamptz DEFAULT now(),
  last_order_at timestamptz
)

-- Medicine Catalog
medicines (
  id uuid PRIMARY KEY,
  generic_name text NOT NULL,
  brand_names text[], -- ["Panadol", "Emzor Paracetamol"]
  abbreviations text[], -- ["para", "pcm"]
  dosage text NOT NULL, -- "500mg"
  form text NOT NULL, -- "tablet", "capsule", "sachet", "drops", "syrup"
  category text NOT NULL, -- "antimalarial", "antibiotic", "pain_relief", etc.
  unit text NOT NULL, -- "tablet", "capsule", "sachet", "bottle"
  nafdac_approved boolean DEFAULT true,
  controlled boolean DEFAULT false,
  requires_cold_chain boolean DEFAULT false,
  active boolean DEFAULT true
)

-- Wholesalers
wholesalers (
  id uuid PRIMARY KEY,
  hub_id uuid REFERENCES hubs,
  name text NOT NULL,
  nafdac_registration text NOT NULL,
  address text,
  phone text NOT NULL,
  contact_person text,
  product_categories text[],
  reliability_score decimal(5,2) DEFAULT 100,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)

-- Wholesaler Pricing
wholesaler_prices (
  id uuid PRIMARY KEY,
  wholesaler_id uuid REFERENCES wholesalers,
  medicine_id uuid REFERENCES medicines,
  price_per_unit decimal(10,2) NOT NULL, -- price per tablet/capsule/sachet
  pack_size integer, -- how many per pack
  pack_price decimal(10,2), -- price per pack
  min_order_qty integer DEFAULT 1,
  last_verified timestamptz DEFAULT now(),
  verified_by uuid REFERENCES hubs
)

-- Orders
orders (
  id uuid PRIMARY KEY,
  order_number text UNIQUE NOT NULL, -- PD12345
  pmv_id uuid REFERENCES pmvs,
  hub_id uuid REFERENCES hubs,
  status text CHECK (status IN (
    'received', 'quoted', 'confirmed', 'procuring',
    'packed', 'dispatched', 'delivered', 'cancelled', 'issue_reported'
  )),
  order_channel text CHECK (order_channel IN ('sms', 'ussd')),
  total_items integer,
  subtotal decimal(12,2),
  delivery_fee decimal(10,2),
  total decimal(12,2),
  procurement_cost decimal(12,2), -- what hub paid to wholesalers
  margin decimal(12,2), -- total - procurement_cost - delivery_fee
  payment_method text CHECK (payment_method IN ('mobile_money', 'cash_on_delivery')),
  payment_status text CHECK (payment_status IN ('pending', 'paid', 'partial', 'overdue')),
  transport_operator text,
  transport_reference text,
  dispatched_at timestamptz,
  delivered_at timestamptz,
  pmv_confirmed_at timestamptz,
  created_at timestamptz DEFAULT now()
)

-- Order Line Items
order_items (
  id uuid PRIMARY KEY,
  order_id uuid REFERENCES orders,
  medicine_id uuid REFERENCES medicines,
  quantity integer NOT NULL,
  unit_price decimal(10,2) NOT NULL, -- price charged to PMV
  procurement_price decimal(10,2), -- price paid to wholesaler
  total decimal(12,2),
  batch_number text,
  expiry_date date,
  wholesaler_id uuid REFERENCES wholesalers
)

-- Transport Routes
transport_routes (
  id uuid PRIMARY KEY,
  hub_id uuid REFERENCES hubs,
  route_name text NOT NULL, -- "Akure-Ondo-Ore"
  towns text[], -- ordered list of towns on this route
  transport_operator text,
  operator_phone text,
  departure_times text[], -- ["6am", "10am", "2pm"]
  base_delivery_fee decimal(10,2),
  per_km_fee decimal(8,2),
  active boolean DEFAULT true
)

-- Aggregated Procurement Lists
procurement_lists (
  id uuid PRIMARY KEY,
  hub_id uuid REFERENCES hubs,
  generated_at timestamptz DEFAULT now(),
  order_ids uuid[], -- orders included in this procurement run
  total_procurement_value decimal(12,2),
  status text CHECK (status IN ('generated', 'procuring', 'complete')),
  completed_at timestamptz
)

-- Procurement List Items
procurement_items (
  id uuid PRIMARY KEY,
  list_id uuid REFERENCES procurement_lists,
  medicine_id uuid REFERENCES medicines,
  total_quantity integer NOT NULL,
  recommended_wholesaler_id uuid REFERENCES wholesalers,
  estimated_cost decimal(12,2),
  actual_cost decimal(12,2),
  actual_wholesaler_id uuid REFERENCES wholesalers,
  batch_number text,
  expiry_date date
)
```

### SMS Parsing Architecture

```
Inbound SMS (Termii webhook) →
  POST /api/sms/incoming →
    1. Identify sender (lookup PMV by phone number)
    2. If new sender → trigger registration flow
    3. If known PMV → parse order text:
       a. Tokenize by line breaks and commas
       b. For each token, match against medicine catalog:
          - Exact match on generic_name
          - Fuzzy match on brand_names and abbreviations
          - OpenAI API fallback for unrecognized items (classify into catalog)
       c. Extract quantity (regex: x\d+ or \d+ after drug name)
    4. Generate quote (lookup current pricing per hub)
    5. Send quote SMS via Termii
    6. Wait for confirmation reply (YES/NO/EDIT)
    7. On YES → create order record → notify hub dashboard
```

### Integration Architecture

```
Termii ←→ Backend (SMS inbound/outbound, order flow)
Africa's Talking ←→ Backend (USSD sessions for registration, status)
Paystack/OPay ←→ Backend (mobile money payments from PMVs)
Supabase ←→ Backend (data persistence, RLS, real-time dashboard updates)
OpenAI API ←→ Backend (SMS drug name parsing for unrecognized items)
PostHog ←→ Backend (funnel tracking: registration → first order → repeat order)
Vercel Cron ←→ Backend (restock reminders, weekly reports)
```

### Offline Architecture

```
PMV Side (always offline-capable):
  SMS order → Termii → Backend → SMS response
  USSD session → Africa's Talking → Backend → USSD response
  Zero internet dependency for PMVs.

Hub Dashboard (offline-resilient):
  Online: Real-time order feed, wholesaler pricing, live dispatch tracking
  Offline (IndexedDB cache):
    - Current pending orders list
    - PMV directory with contact details
    - Medicine catalog with last-known pricing
    - Procurement worksheet (generated and cached)
    - Dispatch checklist
  Sync: Background sync when connection resumes; conflict resolution: server wins for order status, local wins for notes/edits
```

---

## 10. Data Asset Strategy

**This section documents the real product — the data PharmaDrop creates that did not exist before.**

### What Data PharmaDrop Generates

1. **Rural drug demand by geography:** What medicines are being ordered, in what quantities, from which towns, how often. No structured dataset on rural Nigerian pharmaceutical demand exists today. NAFDAC tracks manufacturer output and urban pharmacy sales. PMV-level data is invisible.
2. **Disease surveillance proxy data:** Drug orders are a real-time proxy for disease prevalence. Antimalarial order spikes in a specific LGA indicate a malaria outbreak — 2-4 weeks before formal health surveillance systems detect it (which often never detect it in rural areas at all).
3. **Pharmaceutical pricing database:** Wholesale prices per medicine per region, updated weekly. No transparent pricing database exists for the Nigerian pharmaceutical market. This data has value to regulators, manufacturers, and health economists.
4. **PMV purchasing behavior:** Order frequency, average order value, payment reliability, product mix. This creates a financial behavior profile for a segment with zero formal financial data — enabling inventory financing and credit products.
5. **Supply chain performance data:** Delivery times, fulfillment rates, wholesaler reliability scores. This data tells pharmaceutical manufacturers which regions are underserved and where they should invest in distribution.
6. **Counterfeit detection signals:** If orders for a specific medicine spike while other indicators do not change, it may indicate a counterfeit batch circulating in the market (patients returning because the first course did not work). This is a novel pharmacovigilance signal.

### How This Data Feeds Other Mentaat Products

- **VendorScore:** Wholesaler reliability data from PharmaDrop feeds VendorScore's business trust database.
- **InsureMatch:** PMVs are businesses with assets (inventory, equipment) that need insurance. PharmaDrop identifies PMV operators for InsureMatch cross-sell.
- **KasaBook:** PMV purchasing data creates a financial behavior profile for micro-entrepreneurs with zero formal records — feeding KasaBook's informal business tracking.
- **BuildTrack:** Pharmaceutical pricing data mirrors construction material pricing data — both are commodity price databases for different sectors, using similar collection and licensing models.

### Who Would License This Data

| Buyer | Data Product | Estimated Value |
|-------|-------------|-----------------|
| Pharmaceutical manufacturers (Emzor, Fidson, May & Baker) | Demand by geography, product mix, pricing intelligence | N10-25M/year |
| NAFDAC | Drug quality surveillance signals, counterfeit detection | N5-15M/year (or government partnership) |
| Federal Ministry of Health / WHO | Disease surveillance proxy data (malaria, diarrheal disease, respiratory infection) | N5-20M/year |
| Public health programs (Malaria Consortium, GAVI, Global Fund) | Vaccine/drug distribution planning for rural areas | N5-10M/year |
| Health economists / researchers | Pharmaceutical access and pricing studies | N2-5M/year |
| Microfinance institutions | PMV creditworthiness data for inventory financing | N3-8M/year |

### Privacy/Anonymization

- Individual PMV order data is private — never shared with third parties at the PMV level without consent.
- Aggregate data (antimalarial demand per LGA, average pricing per state, stockout frequency by region) is licensable after anonymization.
- PMVs consent to anonymized data use at registration (clear SMS message during sign-up).
- Disease surveillance data shared with public health agencies is always aggregate (LGA level minimum), never individual PMV level.
- Pharmaceutical manufacturer data never includes individual PMV identity or exact location (town level only, not shop address).

---

## 11. Value Chain Design

### What Infrastructure PharmaDrop Builds That Does Not Exist

1. **Last-mile pharmaceutical delivery channel:** No systematic delivery mechanism exists between state capital wholesalers and rural PMVs. PharmaDrop creates this by layering on existing commercial transport infrastructure.
2. **Demand aggregation for rural health products:** No one aggregates rural pharmaceutical demand. PharmaDrop's hub model turns 50-100 small individual orders into a single bulk procurement, creating buying power that rural PMVs have never had.
3. **Quality-verified supply channel for rural medicines:** By sourcing exclusively from NAFDAC-verified wholesalers and tracking batch numbers, PharmaDrop creates the first quality-controlled pharmaceutical supply chain for rural Nigeria.
4. **Regional hub operator network:** The hub operator model creates a new class of pharmaceutical entrepreneur — pharmacists in state capitals who earn income by serving rural PMVs that no existing distributor reaches.

### Four Pillars Application

| Pillar | Application |
|--------|-------------|
| **Resource Commitment** | Investment in SMS parsing engine, hub operator dashboard, medicine catalog, and wholesaler database. The medicine catalog (drug names, abbreviations, brand mappings) is a data asset that no competitor has built. Transport route mapping for pharmaceutical delivery is new infrastructure. |
| **Cross-Market Knowledge Transfer** | mPharma (Ghana) and Shelf Life (Kenya) proved pharmaceutical distribution platforms work in Africa. PharmaDrop transfers the hub-and-spoke model but adapts it for the rural last-mile: SMS/USSD ordering instead of app-based, commercial transport instead of dedicated fleet, hub operator as independent entrepreneur instead of employed warehouse manager. |
| **Value-Chain Coordination** | PharmaDrop tightly coordinates: PMV order → hub aggregation → wholesaler procurement → packing → transport dispatch → PMV delivery → payment. Each link is tracked digitally. The fragmented, individual procurement trips are replaced by a coordinated system. |
| **Transferability** | The hub-and-spoke model with commercial transport dispatch works for any product category that rural retailers need — agricultural inputs, veterinary medicines, building materials, consumer goods. The transport route database and hub operator network serve future products targeting rural retail. |

### Externalities Beyond Core Function

- **Patient health outcomes:** Reduced stockouts mean patients in rural communities access essential medicines when they need them. This is a direct health intervention disguised as a logistics business.
- **Counterfeit reduction:** Quality-verified supply chain reduces exposure to counterfeit medicines — saving lives.
- **Hub operator employment:** Each hub operator is a new pharmaceutical entrepreneur earning N300,000-600,000/month. Scale to 20 hubs = 20 new quality jobs.
- **Disease surveillance:** Drug demand data creates an early-warning system for disease outbreaks in areas with no formal health surveillance. Public health agencies can intervene earlier.
- **Pharmaceutical market intelligence:** Pricing and demand data helps manufacturers understand rural markets they have never measured — potentially leading to products designed for rural demand patterns.
- **Transport operator income:** Regular delivery contracts create steady income for commercial transport operators on rural routes.

---

## 12. Pricing & Unit Economics

### Pricing Model

PMVs pay a per-order delivery fee plus a small markup on medicine prices. The markup is lower than what they would pay at retail, so the PMV saves money even with the delivery fee. Revenue comes from the margin between bulk procurement and per-PMV pricing.

| Revenue Stream | Rate | Basis |
|---------------|------|-------|
| **Bulk-to-PMV margin** | 10-15% markup on procurement cost | Hub buys at wholesale (15-25% below PMV retail), sells to PMV at 5-10% below what PMV would pay individually. The 10-15% spread is the revenue. |
| **Delivery fee** | N1,000-2,500 per order | Covers commercial transport cost (N500-2,000) with a margin |
| **Hub operator share** | 5-8% of order value | Hub operator keeps the majority of the margin; PharmaDrop earns a platform fee |
| **PharmaDrop platform fee** | 2-5% of order value | PharmaDrop's share of the transaction, charged to hub operator |
| **Data licensing (Phase 2)** | N10-50M/year at scale | Disease surveillance, demand intelligence, pricing data |
| **Inventory financing interest (Phase 3)** | 3-5% for 7-14 day terms | PMV credit based on order history |

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Average PMV order value | N25,000-50,000 | 15-30 essential medicine items |
| Orders per PMV per month | 2-3 | Replaces bi-weekly procurement trip |
| Monthly order value per PMV | N50,000-150,000 | 2-3 orders x N25,000-50,000 |
| Bulk procurement discount | 15-25% below retail | Volume pricing from verified wholesalers |
| Hub operator margin per order | N2,500-5,000 | 10-15% of order value |
| PharmaDrop platform fee per order | N500-1,500 | 2-5% of order value |
| Delivery cost per order | N500-2,000 | Commercial transport, varies by distance |
| PMV savings per order vs. self-procurement | N3,000-8,000 | Lower medicine prices + no travel cost + no shop closure |
| Platform infrastructure cost | ~$70/month | Vercel ($20) + Supabase ($25) + Termii ($10) + Africa's Talking ($5) + OpenAI API ($10) |
| CAC per PMV | ~N2,000-5,000 | SMS outreach + registration incentive |
| LTV per PMV (12 months) | N6,000-18,000 | Platform fee x 24-36 orders/year |
| LTV:CAC ratio | 3:1 - 9:1 | Moderate — improves with retention and order frequency |

### Revenue Targets

| Milestone | Timeline | Active PMVs | Monthly Platform Revenue (NGN) | Monthly (USD) |
|-----------|----------|-------------|-------------------------------|---------------|
| Pilot launch | Month 1 | 10 | N5,000-15,000 | ~$3-10 |
| First hub operational | Month 2 | 30 | N15,000-45,000 | ~$10-29 |
| Traction | Month 3 | 50 | N25,000-75,000 | ~$16-49 |
| Break-even | Month 5 | 100 | N50,000-150,000 | ~$32-97 |
| Second hub | Month 6 | 150 | N75,000-225,000 | ~$49-146 |
| Target | Month 12 | 300 | N150,000-450,000 | ~$97-292 |

Note: These are PharmaDrop platform fees only. Hub operators earn 3-5x more per order. The platform economics are thin in Phase 1 — the real revenue comes from data licensing (Phase 2) and inventory financing (Phase 3).

### Break-Even Analysis

At ~$70/month infrastructure cost, break-even requires approximately 50-100 active PMVs placing 2+ orders per month. This is achievable by Month 4-5 with one hub operating.

### Cost Structure Test

This is fundamentally different from incumbents — not just cheaper:
- **Large pharmaceutical distributors** (Emzor Distribution, Swiss Pharma) maintain warehouses, dedicated delivery fleets, and sales forces. Their cost structure requires N500K+ monthly orders per customer to justify service — which is why they serve hospitals and urban pharmacies, not rural PMVs.
- **PharmaDrop** has zero physical infrastructure. The hub operator is an independent entrepreneur, not an employee. Transport is commercial (existing buses and motorcycles), not dedicated fleet. SMS/USSD replaces sales reps. The cost structure enables profitability on N25,000 orders from a town of 5,000 people — a transaction that would cost a traditional distributor more to fulfill than the margin would cover.
- This is Pattern 3 (Build Infrastructure, Then Monetize It) combined with Pattern 1 (Volume Over Margin): build the hub network and medicine catalog as infrastructure, then monetize via platform fees on high-volume, low-margin transactions plus data licensing.

---

## 13. Go-to-Market: First 10 Customers (PMVs)

### Channel 1: Hub Operator as Distribution Channel (Most Disruptive)

The hub operator IS the go-to-market strategy. Find one pharmacist in Akure who wants to earn N300,000-600,000/month by serving rural PMVs. She becomes the face of PharmaDrop. She recruits PMVs through her existing professional network and pharmaceutical market relationships.

**Specific target:** Contact the Pharmaceutical Society of Nigeria (PSN) Ondo State chapter. Identify 2-3 pharmacists interested in a distribution business. The pitch: "You already know every wholesaler in Akure. You already have the relationships. PharmaDrop gives you a system to aggregate orders from 50-100 rural PMVs and earn 10-15% margin on every order — without building a warehouse or buying a truck."

**Target:** 1 hub operator signed → she recruits 20 PMVs from her network in first 4 weeks.

### Channel 2: PMV Association Outreach

The National Association of Patent Proprietary Medicine Dealers (NAPPMED) has state and LGA chapters. Present at a chapter meeting: "Stop closing your shop for 2 days to travel to Akure. Send an SMS, get your medicines delivered in 24-72 hours at better prices. From NAFDAC-verified wholesalers only."

**Approach:** Contact NAPPMED Ondo State chairman via phone. Request a 10-minute presentation slot at the next chapter meeting.

**Target:** 1 NAPPMED meeting → 30 attendees → 15 register → 10 place first order within 2 weeks.

### Channel 3: SMS Blast to PMVs in Target LGAs

Obtain or compile a list of PMVs in target LGAs (available from NAPPMED directories, PCN registration records, or manual compilation via field contacts). Send targeted SMS: "Tired of traveling to Akure for medicines? PharmaDrop delivers NAFDAC-verified drugs to your shop in 24-72hrs. Better prices, no travel. Dial *XXX# to register."

**Approach:** SMS blast via Termii to 200-300 PMV phone numbers in Ondo State.

**Target:** 300 SMS → 50 dial USSD → 20 register → 10 place first order.

### Channel 4: Family Network in Rivers State

For the second hub (Phase 2), family network in Port Harcourt provides direct introductions to pharmacists and PMV operators in Rivers and surrounding states.

**Target:** 3 introductions → 1 hub operator → she recruits 15 PMVs.

### Channel 5: Wholesaler Partnerships as Reverse Distribution

Approach wholesalers in Akure with a proposition: "We will send you bulk orders from 50-100 PMVs that you currently do not serve. Your revenue goes up. Your per-unit cost stays the same. All you need to do is pack orders for pickup." The wholesaler becomes an active referrer — telling visiting PMVs: "Next time, order through PharmaDrop and we'll deliver."

**Target:** 3 wholesaler partnerships → each refers 5 PMVs → 15 new PMV sign-ups.

### Channel Summary

| Channel | Priority | Outreach Volume | Expected PMV Sign-ups | Expected First Orders |
|---------|----------|----------------|----------------------|----------------------|
| Hub operator network | 1 | 1 operator | 20 | 15 |
| NAPPMED meeting | 2 | 30 attendees | 15 | 10 |
| SMS blast | 3 | 300 SMS | 20 | 10 |
| Family network (Phase 2) | 4 | 3 contacts | 15 | 10 |
| Wholesaler referrals | 5 | 3 wholesalers | 15 | 8 |
| **Total** | | | **85** | **53** |

---

## 14. Risks & Mitigations

### Risk 1: NAFDAC Regulatory Scrutiny

**Likelihood:** Medium. PharmaDrop facilitates pharmaceutical distribution. NAFDAC may classify the hub operator as a pharmaceutical distributor requiring additional licensing beyond a pharmacy license.

**Impact:** Regulatory action, fines, or shutdown if hub operates without proper licensing.

**Mitigations:**
- Hub operators must hold PCN (Pharmacists Council of Nigeria) licenses — they are already licensed to handle medicines.
- PharmaDrop does not handle, store, or distribute medicines directly — the hub operator does. PharmaDrop is a technology platform.
- Source exclusively from NAFDAC-registered wholesalers — creates a more traceable supply chain than what PMVs currently use.
- Position PharmaDrop as aligned with NAFDAC's mandate: reducing counterfeits, improving traceability, strengthening the supply chain. Proactively engage NAFDAC as a partner.
- Legal review of pharmaceutical distribution regulations before launch.

### Risk 2: Hub Operator Reliability

**Likelihood:** Medium. The entire model depends on the hub operator performing consistently: aggregating orders, procuring correctly, packing accurately, dispatching on time. One unreliable hub operator can destroy trust with 50-100 PMVs.

**Impact:** PMVs receive wrong medicines, wrong quantities, late deliveries, or no delivery at all. Trust collapses. PMVs revert to self-procurement.

**Mitigations:**
- Hub operator selection criteria: PCN license, existing wholesaler relationships, warehouse/office space, demonstrated reliability.
- Performance tracking: fulfillment rate, order accuracy, delivery time, PMV satisfaction (SMS feedback).
- Minimum performance thresholds: below 85% fulfillment rate triggers review; below 75% triggers hub operator replacement.
- Multiple hub operator candidates per region — ready to activate backup if primary operator underperforms.
- Standard operating procedures documented and provided to hub operators.

### Risk 3: Commercial Transport Unreliability

**Likelihood:** Medium-High. Commercial buses and minivans have irregular schedules, break down, and may lose or damage packages. Medicines require careful handling.

**Impact:** Delayed deliveries, damaged medicines, lost orders. PMVs lose confidence in the delivery channel.

**Mitigations:**
- Package medicines in sturdy, labeled boxes with "FRAGILE - MEDICINES" markings.
- Establish relationships with 2-3 transport operators per route — redundancy.
- Track packages with transport reference numbers — hub operator follows up with transport operator if delivery is overdue.
- Insurance on high-value packages (>N50,000).
- For Phase 2: explore dedicated motorcycle couriers for high-frequency routes (more reliable, faster, slightly more expensive).

### Risk 4: SMS Parsing Errors — Wrong Medicines Ordered

**Likelihood:** Medium. Free-text SMS ordering introduces ambiguity. "Amox" could be amoxicillin or amodiaquine. "500" could be 500mg or 500 tablets. Parsing errors could result in wrong medicines being delivered.

**Impact:** PMV receives wrong medicines. Patient safety risk if wrong drug is dispensed. PMV loses trust in the system.

**Mitigations:**
- Confirmation SMS shows full parsed order before PMV confirms. PMV must reply "YES" — any error is caught before procurement.
- Drug name disambiguation: if "amox" matches multiple medicines, system asks for clarification via SMS.
- Quantity validation: flag quantities that are unusual (e.g., 5,000 tablets of a slow-moving drug).
- Hub operator reviews all orders before procurement — human verification layer.
- Maintain and continuously improve the drug name mapping table (generic names, brand names, abbreviations, common misspellings).

### Risk 5: Counterfeit Medicines Entering the Supply Chain

**Likelihood:** Low-Medium. Despite sourcing from NAFDAC-verified wholesalers, counterfeit medicines could still enter the chain if a wholesaler is compromised.

**Impact:** Patient harm or death. Criminal liability for PharmaDrop and hub operator. Permanent reputational destruction.

**Mitigations:**
- Source only from NAFDAC-registered wholesalers — verify registration number at onboarding.
- Track batch numbers and expiry dates for every procurement.
- Respond immediately to NAFDAC recall notices — identify all affected PMVs and issue SMS alerts.
- Report suspected counterfeits to NAFDAC immediately.
- Hub operator conducts visual inspection of every procurement batch (proper packaging, NAFDAC markings, batch numbers, expiry dates).
- Long-term: integrate with NAFDAC's mobile authentication service (MAS) for SMS-based batch verification.

### Risk 6: PMV Payment Defaults (Cash-on-Delivery)

**Likelihood:** Medium. COD introduces the risk that PMVs receive medicines and delay or refuse payment. The hub operator absorbs the loss.

**Impact:** Hub operator cash flow pressure. Unsustainable if default rate exceeds 5%.

**Mitigations:**
- Incentivize prepaid mobile money payment with a 2% discount.
- COD only for first 2 orders. After that, prepaid required unless payment reliability score > 90%.
- Transport operator collects cash on behalf of hub — reduces PMV ability to delay.
- Outstanding balance flagged: PMV cannot place new order until previous order is fully paid.
- Monthly payment statement via SMS — transparent, auditable.

### Risk 7: Connectivity Gaps in Rural Areas

**Likelihood:** Medium. Some rural areas have intermittent SMS delivery. USSD sessions may time out.

**Impact:** Orders not received. Confirmations not delivered. PMVs think the system is unreliable.

**Mitigations:**
- SMS has higher delivery reliability than data services in rural Nigeria — it works on 2G.
- Retry logic: if SMS delivery fails, auto-retry after 30 minutes, then 2 hours, then 6 hours.
- USSD session timeout handling: if session drops, partial data is saved and PMV can resume.
- Hub operator phone calls as backup: if SMS order is not confirmed, hub operator calls PMV to verify.
- Delivery notification includes transport operator phone number — PMV can call to track package directly.

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot physically visit wholesalers, recruit hub operators, or onboard PMVs in person. Must rely on family network (Rivers State), phone calls, and the hub operator as the in-country representative.
- **Budget: $0-5K:** SMS gateway costs, USSD sessions, OpenAI API for parsing, hosting. No capital for warehouse, inventory, or dedicated transport.
- **Tech stack:** SMS via Termii, USSD via Africa's Talking, dashboard on Next.js/Supabase, payments via Paystack/OPay. No custom hardware.
- **Timeline:** MVP in 4-6 weeks. SMS parsing + USSD registration + basic hub dashboard. First PMV orders by Week 6. First delivery by Week 8.
- **Regulatory:** PharmaDrop is a technology platform, not a pharmaceutical distributor. Hub operators must hold PCN licenses. All medicines sourced from NAFDAC-verified wholesalers.
- **No cold chain:** Phase 1 excludes vaccines, insulin, and other temperature-sensitive medicines. Ambient-temperature essential medicines only.

### Assumptions (Each Testable)

1. **Rural PMVs will adopt SMS-based ordering.** Test: 10 PMV registrations and 5 first orders within 3 weeks of pilot launch. If PMVs reject SMS ordering, test phone-call-to-hub-operator as alternative ordering channel.
2. **Bulk procurement saves 15-25% vs. individual PMV retail prices.** Test: Compare wholesaler bulk quotes against 5 PMVs' reported retail purchase prices for 20 common medicines. If discount is <10%, the economics do not work.
3. **Commercial transport can deliver medicines reliably within 24-72 hours.** Test: 5 test shipments on 3 routes before launch. Track delivery time, package condition, and cost. If delivery time exceeds 72 hours for >30% of shipments, explore dedicated motorcycle couriers.
4. **At least 1 pharmacist in Akure will sign up as hub operator.** Test: Contact PSN Ondo chapter and pitch to 3 pharmacists. If none are interested, consider operating the first hub directly (using a family contact as local representative) until the model is proven.
5. **PMVs will pay via mobile money.** Test: Ask first 10 registered PMVs about mobile money usage. If >50% do not use mobile money, make COD the default payment method.
6. **SMS drug name parsing achieves >90% accuracy.** Test: Parse 100 real PMV order SMS messages (collected via hub operator) against the medicine catalog. If accuracy is <80%, increase catalog size or switch to USSD-only ordering (structured input eliminates parsing ambiguity).

### Out of Scope

| Exclusion | Rationale |
|-----------|-----------|
| Cold chain medicines (vaccines, insulin) | Requires refrigerated transport infrastructure that does not exist on commercial routes. Phase 4 only, after dedicated cold chain partnerships are established. |
| Controlled substances (opioids, psychotropics) | Regulatory complexity and diversion risk. PMVs are not licensed for Schedule 1/2 drugs. Excluded permanently. |
| Direct-to-patient delivery | PharmaDrop serves PMVs, not end patients. The PMV is the last-mile retailer. B2C delivery creates pharmacy licensing requirements and destroys unit economics. |
| Manufacturing or compounding | PharmaDrop is a supply chain platform. All medicines are procured from existing NAFDAC-verified wholesalers. |
| Urban pharmacy supply chain | Urban pharmacies are served by existing distributors (Field Intelligence, mPharma). PharmaDrop targets the unserved rural and peri-urban PMV segment. |
| Electronic medical records or prescription management | PharmaDrop is a supply chain tool, not a clinical tool. Medical record keeping is out of scope. |
| Diagnostics or telemedicine | PharmaDrop improves medicine access, not diagnostic or clinical services. These are separate products for separate PRDs. |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] SMS parsing engine correctly parses 90%+ of test order messages (100-message test set)
- [ ] USSD registration flow works on all 4 Nigerian telcos (MTN, Airtel, Glo, 9mobile)
- [ ] Hub operator dashboard displays orders, generates procurement lists, and tracks dispatch status
- [ ] At least 1 hub operator signed and operational in Ondo State
- [ ] At least 3 NAFDAC-verified wholesalers registered with current pricing
- [ ] At least 3 commercial transport routes mapped with operator contacts
- [ ] 10 PMVs registered and placed first order
- [ ] First end-to-end order fulfilled: PMV SMS → hub procurement → transport dispatch → PMV delivery confirmation

### Success Metrics (3 Months Post-Launch)

- [ ] **Revenue:** N150,000+ in cumulative PharmaDrop platform fees
- [ ] **PMVs:** 50+ registered PMVs placing orders
- [ ] **Orders:** 200+ orders fulfilled
- [ ] **Order accuracy:** 95%+ (correct medicines and quantities delivered)
- [ ] **Delivery time:** 80%+ of orders delivered within 72 hours
- [ ] **Repeat orders:** 60%+ of PMVs place 2+ orders
- [ ] **PMV savings:** Average PMV saves N3,000+ per order vs. self-procurement trip
- [ ] **Data asset:** Order data from 50+ PMVs across 10+ LGAs with 8+ weeks of history
- [ ] **Hub operator satisfaction:** Hub operator earning N100,000+/month and willing to continue

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 6 | 0.30 | SMS parsing engine requires a medicine catalog and NLP. Hub dashboard is a standard CRUD app. 4-6 week build, slightly longer than pure USSD products due to SMS parsing complexity and medicine database construction. |
| Time to Revenue | 15% | 6 | 0.90 | Revenue starts with first fulfilled order (Week 6-8). But per-order platform fee is thin (N500-1,500). Meaningful revenue requires 50+ active PMVs. More realistic first meaningful revenue: Month 3-4. |
| Market Size | 15% | 8 | 1.20 | 200,000 PMVs, N360-480B in annual purchases. Rural pharmaceutical access is a massive market with zero current digital penetration. Data licensing adds a second substantial revenue layer. |
| Competition | 10% | 9 | 0.90 | No one serves the rural last-mile PMV. mPharma and Field Intelligence focus on urban pharmacies. Zero direct competition for this specific segment. |
| Skill Fit | 15% | 7 | 1.05 | SMS parsing leverages NLP/AI skills (drug name recognition, abbreviation handling). Dashboard is standard Next.js. Data asset (disease surveillance, demand patterns) is a data science product. Better skill fit than GasPool. |
| Capital Required | 10% | 7 | 0.70 | Slightly higher than pure USSD products: SMS costs, OpenAI API for parsing, medicine catalog construction. Still within $0-5K. Hub operator investment is the operator's own capital, not PharmaDrop's. |
| Buyer Clarity | 20% | 7 | 1.40 | PMVs are named, located, and reachable via NAPPMED directories. Hub operator candidates are identifiable through PSN. Clearer buyer identification than GasPool's market women. |
| Fintech Upside | 10% | 8 | 0.80 | Inventory financing for PMVs is a direct lending product. Payment reliability data creates credit scores. Disease surveillance data is a premium data product. Multiple fintech and data monetization paths. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.30 |
| Time to Revenue (15%) | 0.90 |
| Market Size (15%) | 1.20 |
| Competition (10%) | 0.90 |
| Skill Fit (15%) | 1.05 |
| Capital Required (10%) | 0.70 |
| Buyer Clarity (20%) | 1.40 |
| Fintech Upside (10%) | 0.80 |
| **TOTAL** | **7.25 / 10** |

### Verdict: BUILD (Secondary Priority)

A 7.25 composite reflects a massive underserved market (8 on Market Size) with zero competition (9) and strong fintech upside (8), combined with good buyer clarity (7 — PMVs and hub operators are identifiable and reachable) and solid skill fit (7 — SMS parsing and data products leverage core capabilities).

**Key decision factors:**
- 200,000 PMVs with zero supply chain is the definition of non-consumption
- Zero direct competition for the rural last-mile segment
- Disease surveillance data is a unique and valuable data product not available from any other Mentaat product
- Hub operator model distributes operational risk — PharmaDrop is asset-light
- Direct patient health impact: every fulfilled order means medicines reach patients who otherwise go without treatment
- Regulatory alignment with NAFDAC's counterfeit reduction mandate

**Go condition:** Build medicine catalog and SMS parsing engine in Weeks 1-3. Build hub dashboard in Weeks 2-4. Recruit hub operator in Ondo State in Weeks 2-4 (parallel). First PMV registrations by Week 5. First order fulfilled by Week 6-8. Scale to 50 PMVs by Month 3.

---

## 18. Disruption Self-Assessment: 8-Criteria Checklist

| # | Criterion | Rating | Evidence |
|---|-----------|--------|----------|
| 1 | **Targets overlooked or non-consuming segments** | **Strong fit** | 200,000 rural PMVs have zero supply chain. They are non-consumers of pharmaceutical distribution — no distributor serves them, no delivery channel reaches them, no digital ordering system exists for them. The non-consumption extends to their patients: 120+ million Nigerians whose primary healthcare access point (the PMV) frequently runs out of essential medicines because restocking requires a 2-day trip to the state capital. Major pharmaceutical distributors view rural PMVs as unattractive — order values too small, locations too remote. |
| 2 | **Appears deliberately "worse" but good enough** | **Strong fit** | Compared to mPharma (app-based, same-day delivery, smart inventory management, working capital financing), PharmaDrop is inferior on every feature dimension. SMS ordering instead of app. 24-72 hour delivery instead of same-day. No inventory management software. No immediate credit facility. But PharmaDrop works for a PMV with a feature phone in a town of 5,000 people — something mPharma's app-based model cannot do. It is "worse" but it is infinitely better than closing your shop for 2 days and traveling to the state capital. |
| 3 | **Gains traction via low-end or new-market foothold** | **Strong fit** | Both footholds apply. New-market: rural PMVs have never had a delivery-based supply chain — PharmaDrop creates this category for them. Low-end: pharmaceutical distribution exists for urban pharmacies and hospitals at higher service levels and higher order values — PharmaDrop enters at a lower service level (slower delivery, SMS ordering, smaller orders) that incumbents would find unattractive. |
| 4 | **Reimagines the value chain** | **Strong fit** | The current value chain for rural PMVs is: PMV travels to capital → visits multiple wholesalers → buys small quantities at retail prices → carries medicines back on a bus. PharmaDrop replaces this with: SMS order → hub aggregation → bulk procurement from verified wholesalers → commercial transport delivery. Every step is different. The hub operator is a new role that did not exist before. The use of existing commercial transport for pharmaceutical delivery is a value chain innovation specific to the African rural context. |
| 5 | **Prioritizes scaling a core solution** | **Strong fit** | The core product is: SMS an order, get medicines delivered. Nothing more in Phase 1. No inventory management software for PMVs. No AI-powered demand forecasting. No integrated clinical tools. Maximum distribution reach (any feature phone, any town with a bus route) with minimum product depth. Features come after reaching 200+ PMVs across 2+ states. |
| 6 | **Demands a different cost structure** | **Strong fit** | Large pharmaceutical distributors require warehouses, refrigerated trucks, sales forces, and large minimum order values. Their cost structure makes it impossible to serve a N25,000 order from a town of 5,000 people. PharmaDrop has zero physical infrastructure (hub operator uses existing space), zero dedicated transport (commercial buses), zero sales force (hub operator recruits via existing networks). The cost structure enables profitability on N25,000 orders — a price point that large distributors would find laughable. |
| 7 | **Converts non-consumption into growth** | **Strong fit** | Every PharmaDrop order creates a new supply chain link that did not exist before. Growth comes from 200,000 PMVs who have never had a delivery-based supply chain — not from stealing customers from existing distributors. PharmaDrop expands the total pharmaceutical distribution market by reaching segments that no distributor serves. The downstream effect: patients in rural communities access medicines they could not get before, expanding the total pharmaceutical consumption market. |
| 8 | **Can mature to surpass mainstream offerings** | **Strong fit** | Clear maturation path: SMS ordering → demand forecasting for hub operators → inventory financing for PMVs → disease surveillance data product → cold chain capability → manufacturer partnerships. Over time, PharmaDrop's demand data from 200,000 PMVs creates a distribution intelligence layer that no incumbent distributor possesses. The disease surveillance capability is a product that incumbent distributors cannot offer at all. The maturation path eventually includes serving larger pharmacies and clinics in semi-urban areas — moving upmarket as the hub network densifies and the data moat deepens. |

**Overall: 8/8 strong fit, 0/8 partial fit, 0/8 gaps**

**Non-negotiable criteria check:** Criteria 1 (strong), 3 (strong), 7 (strong) — all three non-negotiable criteria are met with strong fit.

**Note on the 8/8 score:** This is the highest disruption score in the portfolio alongside PortPulse and KasaBook. The score reflects genuinely total non-consumption (200,000 PMVs with zero supply chain), a clearly reimagined value chain (hub model with commercial transport), and a fundamentally different cost structure (zero physical infrastructure). The honest caveat: execution complexity is higher than the score suggests — the hub operator model introduces a human dependency that SMS/USSD-only products do not have. The disruption thesis is a 8/8. The execution risk is managed through careful hub operator selection and performance monitoring.

---

## 19. MNC Anti-Pattern Check

| Pattern | Match? | Assessment |
|---------|--------|------------|
| **1. Phantom Middle Class** | **No match** | PharmaDrop targets rural PMVs earning N150,000-250,000/month — not urban pharmacies, not hospitals, not any segment that might be mistaken for "middle class." The hub operator is a pharmacist (moderate income), but the platform's value creation is measured by rural PMV adoption, not hub operator count. |
| **2. Push, Don't Pull** | **No match** | PMVs already spend N15,000-30,000/month on procurement trips plus 1-2 days of lost revenue. PharmaDrop eliminates this cost. The pull is self-evident: same medicines, better prices, delivered to your shop, no travel. No behavior change required — the PMV still orders the same medicines in the same quantities. The only change is HOW they order (SMS instead of bus trip). |
| **3. Infrastructure Entitlement** | **No match** | PharmaDrop assumes no infrastructure exists and builds around the absence: SMS ordering instead of internet, commercial transport instead of dedicated fleet, hub operator's existing space instead of warehouse, NAFDAC-verified wholesalers in the state capital instead of manufacturer direct relationships. Every design decision accounts for infrastructure gaps. |
| **4. Imported Management** | **No match** | The hub operator is a local pharmacist with existing local relationships. PMVs are recruited through local associations (NAPPMED). Transport operators are existing local businesses. The founder is NYC-based but imposes no imported management structure — the system runs on local knowledge and local trust. |
| **5. Blame and Exit** | **No match** | Platform cost is ~$70/month. There is no investor pressure, no venture timeline, no "exit or die" dynamic. PharmaDrop can operate at minimal scale (1 hub, 50 PMVs) indefinitely. The bootstrapped model means the founder can be patient. |
| **6. Premium Positioning in a Value Market** | **No match** | PharmaDrop is positioned as "same medicines, lower prices, delivered to your shop." There is no premium tier for PMVs. The delivery fee (N1,000-2,500) is lower than the PMV's existing procurement trip cost (N15,000-30,000). The entire product exists to deliver more value at lower cost to the lowest-income segment of the pharmaceutical distribution market. |

**Result: 0/6 anti-pattern matches.** PharmaDrop is designed from the ground up for rural Nigerian realities. The SMS/USSD ordering, hub operator model, and commercial transport delivery are the opposite of every MNC failure pattern — they embrace infrastructure absence rather than complaining about it, target the bottom of the pyramid rather than assuming a middle class exists, and deliver pull-based value (lower cost, less friction) rather than pushing a product the market does not want.
