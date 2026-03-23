# PRD 10: FreightCompare — Logistics Rate Comparison Tool for Nigerian Shippers

**Version:** 1.0 | March 2026
**Status:** Draft
**Depends on:** [00-shared-context.md](./00-shared-context.md)

---

## 1. Executive Summary

Nigerian shippers pay some of the highest logistics costs in Africa, with haulage rates doubling to N700K+ per trip in 2024-2025 due to fuel price deregulation, naira depreciation, and infrastructure decay. The market is radically fragmented: 50,000+ independent truck owners, hundreds of small logistics companies, and zero price transparency. Shippers negotiate blindly, often overpaying by 20-40% on the same route because they lack competitive rate data. FreightCompare aggregates quotes from multiple logistics providers for any route/cargo combination, lets shippers compare on price, reliability, and transit time, and earns a commission on each successful booking. Think "Kayak for Nigerian trucking."

The opportunity is massive (N17T logistics market), but execution is brutally hard. Building a two-sided marketplace for logistics requires supply aggregation, real-time pricing, and operational depth that a solo founder cannot deliver in 2-4 weeks. This PRD is honest about both the potential and the challenges.

**Target:** 50 successful bookings/month within 6 months = ~$6.5-10K MRR from commissions.

---

## 2. Market Opportunity

### Africa's Most Expensive Logistics Corridor

Moving goods within Nigeria costs 2-3x the global average as a percentage of goods value. The Lagos-Kano corridor (1,100 km) costs more per ton-km than shipping goods from China to Lagos port. This is the single largest cost driver for Nigerian manufacturers and distributors after raw materials.

### Quantified Pain

| Metric | Value | Source |
|--------|-------|--------|
| Total logistics market size | N17T+ ($11B+) | Transport & Logistics industry reports |
| Haulage rate increase (2024) | ~100% (doubled) | MAN / Transporter surveys |
| Average Lagos-Kano haulage | N700K-1.2M per trip | Market rates, 2025 |
| Independent truck owners | 50,000+ | NARTO (Road Transport Owners Association) |
| Fleet utilization rate | ~40-50% | Industry estimates (trucks idle 50%+ of time) |
| Shipper overpayment vs. best available rate | 20-40% (est.) | Rate comparison analysis |
| Logistics as % of product cost (Nigeria) | 40-60% | MAN data |
| Logistics as % of product cost (global avg) | 15-25% | World Bank |
| Road transport share of Nigerian freight | ~95% | NBS |

### The Fragmentation Problem

Nigeria's trucking market is the opposite of consolidated:
- **50,000+ independent truck owners** — most own 1-3 trucks
- **Hundreds of small logistics companies** — each with 5-20 trucks and regional coverage
- **No standardized pricing** — rates are negotiated per trip, per relationship
- **No quality data** — a shipper cannot know whether a trucker is reliable, on-time, or careful with cargo
- **Brokers as middlemen** — informal brokers ("motor park" intermediaries) connect shippers with trucks, adding 10-20% markup with no accountability

### Why Now

1. **Fuel deregulation:** The removal of fuel subsidies doubled transportation costs overnight, making rate optimization urgent for the first time. When haulage was N350K, overpaying by 15% was N52K. At N700K, it is N105K per trip. The incentive to compare has doubled.
2. **Digital truck owner adoption:** Fleet tracking (Kobo360, Truckr) and digital payment (OPay, PalmPay) have acclimated truck owners to digital platforms. WhatsApp is universal.
3. **Shipper pressure:** Manufacturers operating at 47.72% capacity utilization cannot absorb 40-60% logistics costs. Rate optimization is now a survival requirement.
4. **GPS tracking maturity:** Low-cost GPS tracking devices (N15-25K) are now common on commercial trucks, enabling transit monitoring.

### Total Addressable Market

- **FMCG manufacturers + distributors** needing regular haulage: ~5,000-10,000 businesses
- **Average monthly logistics spend:** N2-20M per mid-size business
- **If FreightCompare captures 2-3% commission on 1% of market:** N340M-510M annual revenue potential
- **SOM (Year 1):** 500-1,000 bookings at N20-30K commission = N120-360M ($78-234K) ARR

---

## 3. Target Persona

### Primary: Tunde — Logistics/Procurement Manager

| Attribute | Detail |
|-----------|--------|
| **Title** | Logistics Manager / Procurement Manager / Supply Chain Manager |
| **Company** | FMCG manufacturer, distributor, or agricultural processor |
| **Revenue** | N50-500M/month |
| **Logistics spend** | N2-20M/month |
| **Shipments** | 10-50 truckloads/month |
| **Location** | Lagos (most common origin), distributing nationwide |
| **Age** | 30-50 |
| **Education** | BSc/HND, possibly CILT or CIPS certified |
| **Tools today** | Phone calls to 3-5 known transporters, WhatsApp groups, Excel rate tracking |
| **Pain frequency** | Every shipment — rate negotiation takes 2-4 hours per booking |

### Tunde's Booking Process (Current)

1. **Need arises:** 20 tons of product needs to move Lagos to Kano by Friday
2. **Call transporter #1:** "N850K." "Too high." "Okay, N800K." Tunde is not sure if this is fair.
3. **Call transporter #2:** Voicemail. Try again later.
4. **WhatsApp group:** Posts: "Who has a truck available Lagos-Kano, 20 tons, Friday?" Gets 6 responses over 3 hours. Prices range from N650K to N950K.
5. **Evaluate options:** Tunde has no data on which responders are reliable. Last month, transporter #3 was 4 days late and damaged N500K of goods. But transporter #3 is quoting the lowest rate today.
6. **Book:** Picks the second-lowest quote from someone he has used before. No written contract. Pays 50% upfront via transfer. Hopes for the best.
7. **Total time:** 4-6 hours for one booking. Multiply by 30 bookings/month.

### Secondary: Ibrahim — Independent Truck Owner

Owns 2 trucks. Spends 40% of his time looking for cargo. When his trucks are idle, he loses N50-80K/day in opportunity cost. He would gladly offer competitive rates on FreightCompare if it brought consistent bookings without broker markups.

---

## 4. Problem Deep Dive

### Problem 1: Price Opacity

There is no published rate index for Nigerian trucking routes. A Lagos-Kano shipment might cost N650K from one provider and N950K from another for identical cargo — a 46% spread. Shippers have no way to know the fair market rate without calling multiple providers, which takes hours and yields inconsistent results.

**Cost of the problem:** If the average shipper overpays 20% on a N5M monthly logistics spend, that is N1M/month wasted — N12M/year. Across 10,000 mid-size shippers, the market-wide overpayment is N120B annually.

### Problem 2: Reliability is Unknown

When a shipper books a truck, they are gambling on:
- **Will it arrive on time?** (Late pickup loses production days)
- **Will the cargo arrive intact?** (Damage from poor truck condition, rain, theft)
- **Will the driver communicate en route?** (Radio silence for 3 days is common)
- **Will the price hold?** (Drivers sometimes demand extra payment mid-route — "the road was bad, fuel was more than expected")

There is no rating system, no performance history, no accountability mechanism.

### Problem 3: Empty Return Trips

The logistics market is directionally imbalanced. Lagos-to-North routes are in high demand (manufactured goods going to markets). North-to-Lagos return trips often run empty because there is less southbound cargo. This means truckers price the full round-trip cost into the northbound rate. If return cargo could be matched, northbound rates would drop 15-25%.

### Problem 4: Booking and Payment Are Informal

Most bookings are verbal agreements via WhatsApp or phone. Payments are partial upfront, balance on delivery — with no formal contract. Disputes are resolved through relationships, not documentation. This informality enables fraud, non-performance, and price manipulation.

---

## 5. Solution Overview

### Core Value Proposition

"Find the best truck for your cargo in 10 minutes — not 10 phone calls. Compare rates, check reliability, book, and track — all in one place."

### How It Works

```
SHIPPER ENTERS REQUEST:
Route (Lagos → Kano) + Cargo (20 tons, FMCG) + Date (Friday)
            ↓
FREIGHTCOMPARE REQUESTS QUOTES:
Sends request to registered logistics providers matching the route/cargo
(SMS/WhatsApp notification to providers)
            ↓
PROVIDERS RESPOND WITH QUOTES:
3-8 quotes within 2-4 hours
(Price, truck type, estimated transit time, available date)
            ↓
SHIPPER COMPARES:
Side-by-side comparison: price, reliability score, transit time,
truck condition rating, insurance status
            ↓
SHIPPER BOOKS:
Select provider → Confirm booking → Pay deposit via Paystack
            ↓
TRACK & CONFIRM:
GPS tracking link → Delivery confirmation → Balance payment → Rate the provider
```

### Key Design Decisions

1. **Request-for-quote model, not fixed pricing:** Nigerian logistics rates fluctuate with fuel prices, demand, weather, and road conditions. Fixed pricing would either be too high (losing shippers) or too low (losing providers). RFQ reflects real-time market conditions.
2. **Provider responds via WhatsApp/SMS:** Most truck owners are not going to log into a web dashboard. They receive booking requests via WhatsApp, respond with a price, and the platform handles the rest. The shipper uses the web/app; the provider uses WhatsApp.
3. **Reliability scoring from Day 1:** Every completed booking generates data: on-time delivery, cargo condition, communication quality. This data is the moat — after 6 months, FreightCompare has a reliability index that no one else has.
4. **Commission model, not subscription:** Shippers pay nothing to compare. FreightCompare earns N20-30K per successful booking from the provider. This removes adoption friction entirely.
5. **Start with Lagos origin routes:** Lagos generates the most outbound freight. Focus on the 10 highest-volume routes from Lagos before expanding.

---

## 6. MVP Feature Set

### Phase 1: Core Marketplace (Weeks 1-4)

| Feature | Priority | Description |
|---------|----------|-------------|
| Shipper request form | P0 | Origin, destination, cargo type, weight, dimensions, pickup date, special requirements |
| Provider registration | P0 | Register truck owners/companies: fleet details, routes served, base rates, contact info |
| Quote request broadcast | P0 | Send shipment request to matching providers via WhatsApp/SMS |
| Quote collection | P0 | Providers reply with price → captured in system (WhatsApp reply parsing or simple web form) |
| Quote comparison dashboard | P0 | Shipper sees all quotes: price, provider name, reliability score (N/A initially), estimated transit time |
| Booking confirmation | P0 | Shipper selects quote → both parties notified → booking created |
| Payment (deposit) | P0 | Paystack payment link for deposit (typically 50%) |
| Basic tracking | P0 | Provider shares location updates via WhatsApp → displayed to shipper |

### Phase 2: Trust & Intelligence (Weeks 5-8)

| Feature | Priority | Description |
|---------|----------|-------------|
| Delivery confirmation | P1 | Shipper confirms delivery → triggers balance payment → both parties rate each other |
| Reliability scores | P1 | Provider rating: on-time %, cargo condition, communication, price accuracy |
| Route rate index | P1 | Average rates per route based on actual bookings (anonymized market data) |
| Return trip matching | P1 | When a truck delivers Lagos→Kano, auto-check for Kano→Lagos cargo requests |
| Provider dashboard | P1 | Simple web/WhatsApp view: upcoming bookings, payment history, ratings |
| Booking history | P1 | Shipper sees all past bookings, costs, provider performance |

### Phase 3: Scale Features (Weeks 9-16)

| Feature | Priority | Description |
|---------|----------|-------------|
| GPS live tracking | P2 | Integration with fleet GPS providers or driver phone GPS sharing |
| Insurance integration | P2 | Offer cargo insurance at checkout (partnership with insurers) |
| Contract/recurring shipments | P2 | "I need Lagos-Kano every week" → auto-request quotes weekly |
| Bulk shipment requests | P2 | "I need 5 trucks on Friday" → single request, multiple bookings |
| Provider fleet management | P2 | Truck maintenance schedules, driver management, expense tracking |
| API for enterprise shippers | P2 | Large shippers integrate FreightCompare into their ERP |

### Explicitly Out of Scope (MVP)

- International/cross-border shipping
- Air or sea freight (road only)
- Last-mile delivery (intra-city)
- Warehousing
- Cold chain logistics (specialized vertical — future product)
- Customs brokerage

---

## 7. Key Screens & UX

### Screen 1: Shipper Request Form

```
┌──────────────────────────────────────────┐
│  FreightCompare — Find Your Truck         │
├──────────────────────────────────────────┤
│                                          │
│  Origin:       [Lagos ▼] [Ikeja area __] │
│  Destination:  [Kano ▼]  [Bompai area _] │
│                                          │
│  Cargo Type:   [FMCG / Food ▼]          │
│  Weight:       [20] tons                 │
│  Truck Type:   [Flatbed / Enclosed ▼]    │
│                                          │
│  Pickup Date:  [28 Mar 2026]             │
│  Flexibility:  [± 1 day ▼]              │
│                                          │
│  Special Requirements:                    │
│  □ Tarpaulin cover                       │
│  □ Loading assistance needed             │
│  □ Temperature sensitive                 │
│  □ Hazardous goods                       │
│                                          │
│  [Get Quotes →]                          │
│                                          │
│  Recent market rate (Lagos-Kano, 20T):   │
│  N680,000 - N850,000                     │
└──────────────────────────────────────────┘
```

### Screen 2: Quote Comparison

```
┌──────────────────────────────────────────┐
│  Quotes for Lagos → Kano (20T FMCG)     │
│  5 quotes received | Request #FR-2847    │
├──────────────────────────────────────────┤
│                                          │
│  ── BEST VALUE ──────────────────────── │
│  🏆 Reliable Haulage Ltd                │
│  N 720,000  |  ★ 4.7 (23 trips)         │
│  Transit: 2 days | Truck: DAF CF Enclosed│
│  On-time: 91% | Cargo safety: 96%       │
│  [Book This →]                           │
│                                          │
│  ── OTHER QUOTES ────────────────────── │
│                                          │
│  Ibrahim Transport                       │
│  N 680,000  |  ★ 4.2 (8 trips)          │
│  Transit: 2-3 days | Truck: Man Diesel   │
│  On-time: 75% | Cargo safety: 88%       │
│  [Book This →]                           │
│                                          │
│  King's Logistics                        │
│  N 750,000  |  ★ 4.5 (41 trips)         │
│  Transit: 2 days | Truck: Iveco Enclosed │
│  On-time: 88% | Cargo safety: 95%       │
│  [Book This →]                           │
│                                          │
│  Alhaji Motors                           │
│  N 650,000  |  NEW (no rating yet)       │
│  Transit: 3 days | Truck: Flatbed        │
│  [Book This →]                           │
│                                          │
│  SafeMove Nigeria                        │
│  N 850,000  |  ★ 4.9 (67 trips)         │
│  Transit: 2 days | Truck: Mercedes Enclosed │
│  On-time: 97% | Cargo safety: 99%       │
│  Insurance included | GPS tracked        │
│  [Book This →]                           │
│                                          │
│  [Sort: Price ▼] [Filter: Min ★ 4.0]    │
│  Market avg for this route: N 740,000    │
└──────────────────────────────────────────┘
```

### Screen 3: Booking Confirmation

- Selected provider and rate summary
- Pickup details: date, time, exact location, contact person
- Delivery details: destination, contact person, delivery instructions
- Payment: 50% deposit now (Paystack), 50% on confirmed delivery
- Terms: cancellation policy, damage liability, delay penalties
- Confirm booking → both parties receive WhatsApp confirmation

### Screen 4: Shipment Tracking

```
┌──────────────────────────────────────────┐
│  Shipment #FR-2847 — Lagos → Kano        │
│  Provider: Reliable Haulage Ltd          │
│  Status: In Transit                      │
├──────────────────────────────────────────┤
│                                          │
│  ── TIMELINE ────────────────────────── │
│  ✅ Booked: 27 Mar, 14:30               │
│  ✅ Pickup: 28 Mar, 08:15 (on time)     │
│  🔄 In Transit: Last update 29 Mar, 11:00│
│     Location: Approaching Jebba          │
│     Est. arrival: 30 Mar, morning        │
│  ⬜ Delivered: —                         │
│                                          │
│  [Map showing route with truck position]  │
│                                          │
│  Driver: Musa | Phone: +234 803 XXX XXXX │
│  [Call Driver]  [WhatsApp Driver]         │
│                                          │
│  Payment Status:                         │
│  Deposit paid: N 360,000 ✅              │
│  Balance due on delivery: N 360,000      │
└──────────────────────────────────────────┘
```

### Screen 5: Provider View (WhatsApp-Based)

Since most truck owners will not use a web dashboard, the primary provider interface is WhatsApp:

**Incoming (from FreightCompare):**
```
New shipment request:
📦 Lagos (Ikeja) → Kano (Bompai)
📋 20 tons FMCG, enclosed truck needed
📅 Pickup: 28 Mar 2026
💰 Market rate: N680K-850K

Reply with your quote (number only):
Example: 720000
```

**Provider replies:** `720000`

**FreightCompare confirms:**
```
✅ Quote of N720,000 submitted.
You'll be notified if the shipper books with you.
```

**If booked:**
```
🎉 Booking confirmed!
Shipment #FR-2847
Pickup: 28 Mar, 8AM
Location: [Google Maps link]
Contact: Tunde - +234 XXX XXX XXXX
Deposit: N360,000 — will be sent upon pickup confirmation.

Reply CONFIRM when you arrive for pickup.
```

---

## 8. Technical Architecture

### System Architecture

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Next.js App     │────→│ Supabase DB  │────→│ WhatsApp Bot     │
│  (Vercel)        │     │ (PostgreSQL) │     │ (Termii/360dialog)│
│                  │     └──────┬───────┘     └─────────────────┘
│  - Shipper UI    │            │
│  - Admin panel   │     ┌──────┴───────┐
└───────┬──────────┘     │ Vercel Cron   │ ← Quote collection timer
        │                └──────────────┘
        │
        ├──→ Termii (WhatsApp Business API for provider communication)
        ├──→ Paystack (deposit + balance payments)
        ├──→ Google Maps API (route distance, ETA calculation)
        └──→ Resend (booking confirmations, receipts)
```

### Data Model (Core Tables)

```sql
-- Shippers (demand side)
shippers (
  id, user_id, company_name, industry,
  primary_origin, avg_monthly_shipments,
  created_at
)

-- Providers (supply side: truck owners and logistics companies)
providers (
  id, company_name, contact_name, phone, whatsapp,
  email, provider_type (owner_operator/fleet/company),
  fleet_size, truck_types (json), routes_served (json),
  reliability_score, total_trips, on_time_pct,
  cargo_safety_pct, communication_rating,
  insurance_status, gps_equipped,
  status (active/suspended/pending),
  created_at
)

-- Shipment requests
requests (
  id, shipper_id, origin_city, origin_detail,
  destination_city, destination_detail,
  cargo_type, weight_tons, dimensions,
  truck_type_required, pickup_date, flexibility_days,
  special_requirements (json),
  status (open/quoting/booked/completed/cancelled),
  quote_deadline, created_at
)

-- Quotes from providers
quotes (
  id, request_id, provider_id,
  amount, transit_days_estimate,
  truck_description, notes,
  status (submitted/accepted/rejected/expired),
  submitted_at, submitted_via (whatsapp/web)
)

-- Bookings
bookings (
  id, request_id, quote_id, shipper_id, provider_id,
  amount, deposit_amount, balance_amount,
  pickup_datetime, pickup_location, pickup_contact,
  delivery_location, delivery_contact,
  status (confirmed/pickup_done/in_transit/delivered/completed/disputed),
  pickup_confirmed_at, delivery_confirmed_at,
  commission_amount, commission_status,
  created_at
)

-- Tracking updates
tracking_updates (
  id, booking_id, timestamp,
  location_text, latitude, longitude,
  update_type (auto_gps/driver_update/system),
  notes
)

-- Ratings (both directions)
ratings (
  id, booking_id, rated_by_type (shipper/provider),
  rated_by_id, rated_entity_id,
  overall_score, on_time_score, communication_score,
  cargo_condition_score, price_accuracy_score,
  comment, created_at
)

-- Payments
payments (
  id, booking_id, type (deposit/balance/commission/refund),
  amount, paystack_reference,
  status (pending/completed/failed),
  paid_by_type, paid_by_id,
  created_at, completed_at
)

-- Route rate index (aggregated)
route_rates (
  id, origin_city, destination_city,
  cargo_type, weight_range,
  avg_rate, min_rate, max_rate,
  sample_size, period (monthly),
  updated_at
)
```

### WhatsApp Bot Architecture

The provider-facing WhatsApp bot is the most critical technical component:

1. **Outbound (quote requests):** When a shipper submits a request, the system identifies matching providers (by route + truck type) and sends structured WhatsApp messages via Termii/360dialog Business API.
2. **Inbound (quote replies):** Provider replies with a number → Termii webhook → parse amount → create quote in database → notify shipper.
3. **Conversation state machine:**
   - `IDLE` → receives quote request → `AWAITING_QUOTE`
   - `AWAITING_QUOTE` → receives number → `QUOTE_SUBMITTED`
   - `QUOTE_SUBMITTED` → receives booking notification → `BOOKING_CONFIRMED`
   - `BOOKING_CONFIRMED` → receives "CONFIRM" at pickup → `IN_TRANSIT`
   - `IN_TRANSIT` → receives location updates → `IN_TRANSIT`
   - `IN_TRANSIT` → receives "DELIVERED" → `AWAITING_PAYMENT`

4. **Fallback:** If parsing fails, route to human admin via internal dashboard.

### Infrastructure Costs (Monthly Estimate)

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | $20 | Pro plan |
| Supabase | $25 | Pro plan |
| Termii/WhatsApp | ~$100-300 | High message volume for quote requests + confirmations |
| Google Maps API | ~$20-50 | Route calculations |
| Resend | $0 | Free tier |
| **Total** | **~$165-400/month** | WhatsApp costs are the major variable |

---

## 9. Pricing & Unit Economics

### Commission Model

FreightCompare charges **zero upfront fees to shippers.** Revenue comes from provider-side commissions:

| Revenue Source | Rate | Description |
|----------------|------|-------------|
| **Booking commission** | N20,000-30,000 per successful booking | Flat fee deducted from provider payment |
| **Premium listing** (Phase 2) | N10,000/month per provider | Provider appears higher in quote rankings |
| **Insurance commission** (Phase 2) | 10-15% of premium | Referral fee from insurance partners |

### Unit Economics Per Booking

| Metric | Value |
|--------|-------|
| Average booking value | N720,000 |
| Commission (N25,000) | 3.5% of booking |
| WhatsApp costs (quote broadcast + confirmations) | N500 |
| Payment processing (Paystack 1.5%) | N10,800 (paid by shipper, not FreightCompare) |
| **Net revenue per booking** | **N24,500** |
| **Margin** | **98%** |

### Revenue Projections

| Milestone | Bookings/Month | Net Revenue/Month (NGN) | MRR (USD) |
|-----------|---------------|------------------------|-----------|
| Month 3 | 20 | N490,000 | ~$320 |
| Month 6 | 50 | N1,225,000 | ~$800 |
| Month 9 | 100 | N2,450,000 | ~$1,600 |
| Month 12 | 200 | N4,900,000 | ~$3,200 |
| Month 18 | 500 | N12,250,000 | ~$8,000 |
| Month 24 | 1,000 | N24,500,000 | ~$16,000 |

### Path to $10K MRR

$10K MRR = ~N15.4M/month = ~630 bookings/month

**Timeline:** 20-24 months. This is the slowest path to $10K MRR in the portfolio. Marketplace businesses have notoriously slow revenue ramp because both sides must be built simultaneously. However, once the flywheel turns (more providers = better rates = more shippers = more volume = more providers), growth compounds.

---

## 10. Go-to-Market

### Phase 1: Supply-Side First (Weeks 1-4)

The marketplace starts with supply. You cannot attract shippers without providers who will respond to quotes.

1. **Register 30-50 truck owners/logistics companies:**
   - Visit motor parks in Lagos (Ikorodu, Mile 2, Ojota) — this requires local presence/partner
   - NARTO (National Association of Road Transport Owners) contacts
   - LinkedIn: logistics company owners in Lagos
   - Family network in Port Harcourt for southern routes
2. **Value to providers:** "We send you cargo bookings for free. No fees until you get paid."
3. **Simple onboarding:** Phone call → collect: name, phone, truck types, routes, WhatsApp number. That is the entire onboarding.
4. **Test quote flow:** Send 5 test requests to verify providers respond within 4 hours.

### Phase 2: Demand-Side Activation (Weeks 5-8)

1. **Target 20 shippers:**
   - FMCG distributors in Lagos (regular Lagos-to-North shipments)
   - MAN members (manufacturers with outbound logistics)
   - LinkedIn: "Logistics Manager" + Lagos
2. **First booking incentive:** "First booking on FreightCompare is commission-free (provider pays nothing)."
3. **Hands-on service:** For first 20 bookings, FreightCompare team manages the entire process. The shipper submits a request; the team collects quotes, presents comparison, and facilitates booking.
4. **Goal:** 20 completed bookings. Measure: shipper satisfaction, provider response rate, time to first quote.

### Phase 3: Self-Service Growth (Months 3-6)

1. **Launch web platform** for shippers to submit requests and compare quotes independently.
2. **Provider WhatsApp bot** fully automated.
3. **Route rate index** published on website — draw organic search traffic for "Lagos to Kano trucking cost."
4. **Shipper referrals:** "Refer a business, both get N10,000 credit on next booking."

### Phase 4: Marketplace Flywheel (Months 6-12)

1. **Return trip matching:** The killer feature. When a truck delivers Lagos→Kano, instantly check for Kano→Lagos cargo. Provider gets revenue on both legs; shipper gets discounted rate.
2. **Provider competition:** As more providers join, shippers get better rates, driving more bookings, attracting more providers.
3. **Industry-specific campaigns:** "FMCG Logistics Challenge" — compare your logistics costs to industry benchmarks using FreightCompare data.

### Critical GTM Challenge: Local Presence

Unlike other products in this portfolio, FreightCompare requires physical presence in Nigeria for provider acquisition (visiting motor parks, building relationships with truck owners). **Options:**
- **Family network:** Engage family in Port Harcourt for southern route provider recruitment
- **Commission-based agent:** Hire a Lagos-based freelancer to recruit providers for N2,000-5,000 per active provider
- **Partner with existing logistics company:** Offer their fleet first access to bookings in exchange for recruiting other providers

---

## 11. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **Cold start / chicken-and-egg** — no providers without shippers, no shippers without providers | Certain | Critical | Seed supply side first (30-50 providers before launching demand side). Manual concierge for first 50 bookings. Provider incentive: "First 3 months, zero commission." |
| 2 | **Disintermediation** — shipper and provider connect on FreightCompare, then transact directly next time | High | High | Value-adds beyond matching: reliability scores (only on platform), payment escrow (protection), dispute resolution, insurance. Build switching cost through data. Accept some leakage — focus on volume. |
| 3 | **Provider non-response** — truck owners don't reply to WhatsApp quote requests | High | High | Test and optimize message templates. Timing matters (send requests during business hours). Follow up via SMS if no WhatsApp response in 2 hours. Incentivize responsiveness (faster responders get more requests). Remove inactive providers. |
| 4 | **Kobo360 competition** — well-funded competitor already in market | High | Medium | Kobo360 pivoted to enterprise/corporate accounts. FreightCompare targets mid-market (N2-20M/month logistics spend) that Kobo360 does not serve well. Differentiate on transparency (Kobo360 acts as broker; FreightCompare shows all quotes). |
| 5 | **Cargo damage/theft disputes** — FreightCompare blamed for provider's failures | Medium | High | Clear terms: FreightCompare is a marketplace, not a carrier. Mandatory insurance option at checkout. Dispute resolution process with provider rating consequences. Remove providers with repeated issues. |
| 6 | **Requires local presence for provider recruitment** — founder is in NYC | High | High | Commission-based local agent for provider recruitment. Family network for initial contacts. WhatsApp-first provider experience minimizes need for physical support. Long-term: hire Operations Manager in Lagos. |
| 7 | **Razor-thin margins at scale** — N25K per booking may not cover operational complexity | Medium | Medium | Commission is a floor, not a ceiling. Add insurance commissions (high margin). Add premium provider listings. Add enterprise shipper subscriptions. Aggregate data has independent value. |

---

## 12. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|:---:|-----------|
| **Build Speed** | 5 | The tech is buildable in 3-4 weeks, but the marketplace (supply-side recruitment) takes months. WhatsApp bot for providers adds complexity. Not a fast MVP. |
| **Time to Revenue** | 5 | First booking commission could come in 4-6 weeks, but reaching meaningful revenue takes 6-12 months due to marketplace dynamics. Very slow to $10K MRR. |
| **Market Size** | 9 | N17T logistics market. Trucking alone is one of the largest B2B spending categories in Nigeria. Massive if you can capture even 0.1%. |
| **Competition** | 4 | Kobo360 raised $37M+ and operates in this space. Truckr, Lori Systems (now Lori/Uber Freight Africa), and MVX also exist. Most crowded space in this portfolio. |
| **Skill Fit** | 4 | Primarily an operations/marketplace business, not a tech/AI challenge. The founder's core skills (AI/ML, data science) are underutilized. Marketplace management is a different skill set. |
| **Capital Required** | 7 | Tech is bootstrappable, but provider acquisition requires local spend (agent fees, possibly transport to motor parks). WhatsApp API costs are higher than other products. N50-100K+ for provider recruitment. |
| **Buyer Clarity** | 6 | Logistics/procurement managers are identifiable, but the two-sided marketplace means you also need to sell to truck owners (harder to reach, less digital). |
| **Fintech Upside** | 6 | Could evolve into logistics financing (fuel advances, invoice factoring for carriers), fleet insurance, or payment infrastructure. Moderate fintech potential. |

### Weighted Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Build Speed | 5% | 5 | 0.25 |
| Time to Revenue | 15% | 5 | 0.75 |
| Market Size | 15% | 9 | 1.35 |
| Competition | 10% | 4 | 0.40 |
| Skill Fit | 15% | 4 | 0.60 |
| Capital Required | 10% | 7 | 0.70 |
| Buyer Clarity | 20% | 6 | 1.20 |
| Fintech Upside | 10% | 6 | 0.60 |
| **TOTAL** | **100%** | | **5.85** |

### Verdict: SKIP (for now)

FreightCompare targets the largest single market in this portfolio (N17T), but it faces the toughest execution challenges: entrenched competition (Kobo360), two-sided marketplace cold start, requirement for physical local presence, and poor skill fit for a solo AI/data science founder operating from NYC. The path to $10K MRR is the longest of any product assessed. The founder's time and skills are far better deployed on products with higher skill fit and faster revenue paths (PayMatch, CashFlow AI, ClearFast). If logistics is compelling, consider entering through an adjacent angle — logistics cost analytics for shippers (data product, not marketplace) — which would be faster to build and more aligned with the founder's skills.
