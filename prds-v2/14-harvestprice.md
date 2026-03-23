# PRD v2: HarvestPrice — Cross-State Agricultural Commodity Price Alerts

## 1. Executive Summary

Nigerian smallholder farmers sell their produce at 30-50% below market value because they have zero price information. Not bad information, not outdated information — none. A tomato farmer in Jos has no way to know that tomatoes in Lagos sell for 3x the price a local aggregator offers him. Intermediaries profit from this information asymmetry, building entire businesses on the fact that the people who grow the food have no idea what it is worth. This is not an underserved market. This is a non-consuming market: 40M+ smallholder farmers who have never had any structured price data for any commodity in any market, ever.

HarvestPrice delivers daily SMS price alerts for 20 key agricultural commodities across 10 major Nigerian markets. A farmer dials a USSD code, selects a commodity and a destination market, and receives today's wholesale price via SMS. No smartphone required. No internet required. No app download. No literacy beyond reading numbers. The farmer now knows that his basket of tomatoes is worth N85,000/bag in Lagos Mile 12, not the N45,000 the middleman offered — and can negotiate, hold, or seek alternative buyers with that knowledge. This is the product.

**Disruption type:** New-market disruption. No agricultural price information system exists for Nigerian smallholder farmers. HarvestPrice creates first-time consumers of structured market price data.

**Data asset:** Nigeria's first structured, time-series agricultural commodity price database — covering 20 commodities across 10 markets with daily granularity. This database does not exist anywhere. Not at NBS, not at the Ministry of Agriculture, not at any research institution. The closest approximation is quarterly price surveys by FEWS NET and FAO, which are too infrequent and too aggregated to be actionable. HarvestPrice creates it as a byproduct of serving farmers.

**Entry channel hierarchy:** USSD (primary) → SMS (delivery) → WhatsApp (secondary, for farmers with smartphones) → Web API (for data buyers only). No desktop product for farmers. Data buyers (commodity traders, agri-input companies, government agencies, development finance institutions) access aggregated data via API or dashboard.

**90-day target:** 2,000 registered farmers, N750K MRR (mix of farmer subscriptions and agri-input sponsor revenue), price data collection operational in 5 markets.

**Infrastructure stack position:** Layer 1 — data collection. HarvestPrice creates the agricultural commodity price database that feeds Layer 2 business tools (supply chain logistics, commodity trading platforms), Layer 3 financial products (agricultural insurance, commodity-backed lending), and Layer 4 data products (government food security monitoring, DFI research, commodity exchange price discovery).

**Platform dependency:** Runs on the USSD Business Toolkit Platform (B1 in opportunity catalog). Shares surveyor operational model with BuildTrack — price collectors at agricultural markets can share network infrastructure with construction material price surveyors.

---

## 2. Market Opportunity

### The Non-Consumption Opportunity

This is not a market where farmers have bad price data. This is a market where farmers have no price data. The information asymmetry between Nigerian farmers and the markets where their produce is sold is total.

**The zero:** Over 80% of Nigeria's 40M+ smallholder farmers operate with zero structured price information from any market beyond their immediate locality. They are price-takers by necessity, not by choice. They sell to whoever shows up at the farm gate or local market, accepting whatever price is offered because they have no benchmark, no alternative buyer contact, and no knowledge of what the same commodity fetches 200km away.

### Quantified Pain

- **Post-harvest losses:** N3.5T ($2.3B) annually. A significant portion of this is not physical spoilage but economic loss from selling at suboptimal prices due to information asymmetry.
- **Farm-to-market price spread:** 30-50% is captured by intermediaries. A bag of tomatoes that sells for N80,000 at Mile 12 (Lagos) may have been purchased from the farmer in Kaduna for N30,000-40,000. The farmer's share of consumer price is 35-50%, vs. 55-70% in markets with transparent pricing.
- **Seasonal price crashes:** During peak harvest (August-October for most grains, December-February for tomatoes), prices at farm gate can crash 60-70% because farmers have no information about demand in distant markets and all sell locally simultaneously.
- **Naira depreciation impact:** 40.9% depreciation in 2024 and 25.3% in 2025 has increased the cost of agricultural inputs (fertilizer, seeds, diesel) while farm-gate prices have not kept pace. Farmers are squeezed between rising costs and stagnant selling prices — accurate market price information is more critical than ever.

### Why the Pain Is Getting Worse

- **Input costs rising faster than produce prices:** Fertilizer prices have tripled since 2022 (import-dependent). Diesel for transport has risen 300%+. Farmers need every naira of margin they can capture.
- **Intermediary consolidation:** Large aggregators are strengthening their position, using mobile phones and transport networks to buy from multiple regions while individual farmers remain isolated.
- **Climate volatility:** Increasingly unpredictable rainfall patterns mean production is more variable, making real-time price information more valuable for timing sales.
- **Population growth outpacing agricultural productivity:** Nigeria's population grows 2.5% annually. Food demand is structurally increasing, but individual farmers cannot capture this value without market information.

### Why Existing Solutions Do Not Serve This Segment

- **FEWS NET / FAO price surveys:** Quarterly or monthly. Too infrequent for daily selling decisions. Published as PDFs and web reports — inaccessible to farmers on 2G phones.
- **e-Wallet / ADP extension services:** Focus on input distribution (seeds, fertilizer), not price information. Coverage is patchy and politically driven.
- **WhatsApp commodity groups:** Exist among traders and aggregators, not farmers. Require smartphones and data plans. The people with information are the intermediaries — they have no incentive to share it with farmers.
- **Radio price announcements:** Sporadic. Limited to a few commodities. Not on-demand. Cannot be queried for a specific commodity-market combination.
- **Google/internet search:** 42% of Nigerian mobile connections are 2G. Broadband subscriptions declined in June 2025 from price sensitivity. Farmers in rural areas cannot access web-based information.

### Market Sizing

- **TAM:** 40M+ smallholder farmers in Nigeria. At N500-1,000/month subscription: N240B-480B ($156M-312M) annual addressable revenue. Plus agri-input company sponsorship and data licensing.
- **SAM:** 10M farmers growing the top 20 traded commodities within reach of the 10 target markets. At N500/month: N60B ($39M) annual addressable revenue.
- **SOM (Year 1):** 10,000 subscribed farmers at N500-1,000/month average = N60-120M ($39-78K) annual revenue from farmer subscriptions. Plus N20-50M from agri-input sponsorships and early data licensing.

### Regional Variance

- **North-Central (Jos, Benue, Nasarawa):** Highest agricultural production. Tomatoes, yam, rice, maize. Worst price information gap due to distance from Lagos demand center. Priority launch region.
- **North-West (Kano, Kaduna, Sokoto):** Major grain markets. Onions, millet, sorghum, groundnuts. Strong trader networks but individual farmers remain uninformed.
- **South-West (Lagos, Ibadan):** Demand center. Mile 12, Oyingbo, Bodija are reference price markets. Farmers near Lagos have better information; those in Oyo, Osun, Ondo hinterland do not.
- **South-East (Aba, Onitsha):** The paradox applies here too — highest manufacturing capacity but agricultural trade disrupted by insecurity and sit-at-home orders.
- **South-South (Port Harcourt, Benin):** Fish, plantain, palm oil. Limited price transparency for perishables.

---

## 3. Target Personas

### Primary Persona: Musa — The Smallholder Tomato Farmer in Jos

**The non-consumer. The person who has literally nothing today.**

- **Age:** 42
- **Location:** Bokkos, Plateau State (100km from Jos)
- **Income:** N80,000-150,000/month during harvest season. N20,000-40,000/month off-season. Annual household income: N700,000-1.2M.
- **Phone:** Nokia 105 feature phone. 2G connection (MTN). Buys N500-1,000 airtime weekly.
- **Family:** Wife, 4 children. Children attend local primary school.
- **Farm:** 3 hectares. Grows tomatoes (primary cash crop), peppers, and maize. Annual tomato production: 200-400 baskets during harvest season.
- **Daily routine:** Wakes at 5:30 AM. Farm work until 2 PM. Afternoons: checks crops, manages labor (2-3 hired workers during season). Market days (typically 2x/week): transports produce to Bokkos or Jos market, sells to whoever is buying.

**Current price information process:** Zero. Musa has no systematic way to know what tomatoes sell for in Lagos, Abuja, or even Jos on any given day. When aggregators visit Bokkos during harvest, they offer a price. Musa can accept or decline, but his only alternative is to transport to Jos himself (N5,000-8,000 transport cost, plus time) and hope for a better price. He has no way to know if the aggregator's offer is fair.

**What Musa loses:** If tomatoes sell for N80,000/bag wholesale in Lagos Mile 12 and the aggregator pays Musa N40,000/bag, Musa loses N40,000/bag. At 200 bags/season, that is N8M — more than his entire annual income — captured by the intermediary. Even a partial correction (knowing the Lagos price and negotiating N50,000 instead of N40,000) would increase Musa's income by 25%.

**Decision trigger:** "The man from Lagos came yesterday and offered me N35,000 per basket. I sold 50 baskets. This morning my neighbor told me tomatoes are selling for N90,000 in Lagos. If I had known, I would have waited or demanded more."

**Why Musa is the disruptive wedge:** Musa would never download an app, visit a website, or create an account. But he knows how to dial a USSD code (he checks his airtime balance via *556#). If he dials *XXX#, selects "Tomatoes", selects "Lagos", and receives an SMS saying "Tomatoes wholesale Lagos Mile 12: N82,000/bag (22 Mar 2026)", he can negotiate with the aggregator from a position of knowledge. The USSD interaction takes 30 seconds. The SMS stays on his phone as reference.

### Secondary Persona: Chibuzo — The Mid-Size Commodity Trader in Onitsha

**The upmarket graduation target.**

- **Age:** 35
- **Location:** Onitsha, Anambra State
- **Income:** N500,000-1.5M/month
- **Phone:** Samsung Galaxy A-series smartphone. 4G connection.
- **Business:** Buys agricultural commodities (rice, beans, garri) from farming communities in Benue, Nasarawa, and Niger states. Trucks them to Onitsha Main Market and Lagos markets. Manages 3-5 truck loads per week during peak season.

**Current process:** Chibuzo already has price information through his trader network (phone calls, WhatsApp groups). But his information is patchy — he knows prices in Onitsha and Lagos but may miss opportunities in Abuja, Kano, or Port Harcourt. He makes buying and routing decisions based on incomplete data.

**Product fit:** WhatsApp daily price digest (like BuildTrack's construction prices). Paid tier with historical trends, price alerts, multi-market comparison. API access for high-volume traders.

**Decision trigger:** "I sent a truck of beans to Lagos because I thought the price was better, but Abuja was paying N5,000/bag more this week. I lost N500,000 on that single trip because I did not have Abuja prices."

### Tertiary Persona: Dr. Amina — The Agricultural Data Buyer

**The institutional data licensee.**

- **Age:** 48
- **Location:** Abuja
- **Role:** Agricultural Economist at the Federal Ministry of Agriculture / World Bank Nigeria / FMARD
- **Need:** Structured, granular, high-frequency agricultural commodity price data for food security monitoring, inflation analysis, policy design, and program evaluation.
- **Current data:** Quarterly FEWS NET surveys, occasional NBS agricultural price indices, FAO data. All too infrequent, too aggregated, and too delayed for real-time decision-making.
- **Product fit:** API access to anonymized, aggregated price data. Custom dashboards for monitoring specific commodities/regions. Priced at N2-10M/year per institution.
- **Decision trigger:** "We need daily granular commodity prices to track food inflation, but NBS only publishes monthly aggregates. Can we license your data?"

---

## 4. Problem Deep Dive

### Step-by-Step: How Musa Sells His Tomatoes Today

**Step 1: Harvest**
Musa harvests tomatoes when they are ripe. He has limited storage — no cold chain, no preservation. Tomatoes must be sold within 2-5 days or they spoil. This time pressure gives all negotiating power to buyers.

**What goes wrong:** Musa has no way to time his sales to market conditions. He sells when the produce is ready, regardless of whether this week's prices are high or low. During peak harvest, when all farmers in the region are selling simultaneously, prices crash 40-60%. Musa sells at crash prices because he has no storage and no information about when prices might recover.

**Business impact:** Estimated N1.5-2.5T ($1-1.6B) annually in avoidable value destruction across Nigerian agriculture from poorly timed sales driven by zero information.

**Step 2: Price Discovery**
An aggregator or middleman arrives at Bokkos market. He offers Musa a price per basket. Musa has no benchmark — he does not know what tomatoes sell for in Lagos, Abuja, or even Jos today. He can ask neighboring farmers what they got, but they are equally uninformed. The aggregator has complete information: he knows Lagos prices, Abuja prices, transport costs, and exactly how much margin he will capture.

**What goes wrong:** The aggregator names a price 30-50% below the destination market wholesale price. Musa either accepts or tries to transport to Jos himself. Most farmers accept because transport is expensive, risky (spoilage, road accidents, checkpoints), and uncertain (the Jos price might also be low).

**Business impact:** Information asymmetry transfers N1.5-3T annually from farmers to intermediaries. This is not intermediary profit from legitimate services (transport, aggregation, risk-bearing) — this is pure information rent extracted from farmers who have no alternative.

**Step 3: Negotiation**
There is no negotiation. The aggregator states a price. Musa accepts or declines. If Musa declines, his tomatoes spoil. The aggregator moves to the next farmer. This is not a market — it is a take-it-or-leave-it transaction where one party has complete information and the other has none.

**What goes wrong:** Even when aggregators compete (2-3 buyers in the same market), price convergence at the farm gate reflects the aggregators' coordinated low pricing, not the true market value.

**Business impact:** Farmer income is structurally suppressed. This reduces investment in the next season's inputs, perpetuating low productivity cycles. The Nigerian Agricultural Development Fund estimates that a 20% increase in farm-gate prices would increase next-season planting by 15%.

**Step 4: Post-Sale**
Musa has no record of what he sold, at what price, or what the market price was. He cannot compare this season to last season. He cannot prove his income to a bank or microfinance institution. He has no data trail.

**What goes wrong:** Without income records, Musa cannot access agricultural credit. Without price history, he cannot make informed decisions about what to plant next season, when to sell, or which markets to target.

**Business impact:** <5% of smallholder farmers access formal credit. The N49.4T ($32.2B) SME credit gap is partly driven by the inability of farmers to demonstrate income.

### The Pull Test

**Do people already spend money or effort on workarounds?** Yes — strong pull signals:
- Farmers who can afford transport already physically travel to distant markets to compare prices (spending N5,000-15,000 per trip)
- Farmers call relatives in Lagos or Abuja to ask about prices (spending airtime)
- Some farmer cooperatives pool money to send a representative to major markets for price scouting
- Radio stations that broadcast commodity prices (even sporadically) attract large agricultural audiences
- The success of M-Farm and Esoko in Kenya/Ghana (SMS price alerts for farmers) demonstrates that farmers will pay for price information when it exists

This is a pull market, not a push market. The demand exists. The supply channel (USSD/SMS on feature phones) has not been built.

---

## 5. Solution Overview

HarvestPrice delivers agricultural commodity price data through the channel that reaches 100% of Nigerian mobile users: USSD + SMS. No smartphone required. No internet required. No behavior change beyond dialing a short code.

### Stage 1: Price Query via USSD (30 seconds)

Farmer dials *XXX# on any phone. USSD menu presents:
- Select commodity (e.g., 1. Tomatoes, 2. Rice, 3. Maize...)
- Select destination market (e.g., 1. Lagos Mile 12, 2. Abuja Garki, 3. Kano Dawanau...)
- Confirm query

Farmer receives SMS within 5 seconds:

```
HarvestPrice: Tomatoes wholesale
Lagos Mile 12: N82,000/bag
Abuja Garki: N75,000/bag
Jos Terminus: N55,000/bag
Date: 22 Mar 2026
Reply SUBSCRIBE for daily alerts N500/mo
```

**What data this creates:** Query log (farmer ID, commodity, market, timestamp). Over time, this reveals demand patterns: which commodities farmers are interested in, which markets they reference, seasonal query volumes. This is actionable intelligence for agri-input companies and government planners.

### Stage 2: Daily SMS Price Alerts (Subscription)

Farmer subscribes by replying SUBSCRIBE or via USSD menu. Selects 1-3 commodities and 1-3 markets. Receives daily SMS at 6:00 AM with prices for selected combinations.

```
HarvestPrice Daily 22/03/26
Tomatoes:
Lagos N82,000 (+5%)
Abuja N75,000 (-2%)
Rice 50kg:
Lagos N68,000 (flat)
Kano N62,000 (+1%)
```

**What data this creates:** Subscriber profiles, commodity preferences, regional distribution. Subscription retention data validates willingness to pay.

### Stage 3: Price Collection Network

Price collectors at each of the 10 target markets. Each collector surveys 5-10 wholesalers daily for assigned commodities. Reports via WhatsApp bot or USSD form.

Collection workflow:
1. Collector visits market by 7:00 AM
2. Surveys 5-10 wholesalers for assigned commodities
3. Reports prices via WhatsApp: "Tomatoes Lagos Mile12 82000 75000 85000 80000" (multiple price points)
4. System calculates median, flags outliers, cross-validates against previous day
5. Aggregated prices published by 8:00 AM for SMS delivery at 6:00 AM next day (or same-day for on-demand USSD queries)

**Shared infrastructure with BuildTrack:** Price collectors can be the same individuals or network as BuildTrack's construction material surveyors. A surveyor in Lagos can collect both cement prices at Alaba Market and tomato prices at Mile 12. Shared training, shared payment infrastructure, shared quality control processes.

### Stage 4: Agri-Input Sponsor Channel

Fertilizer companies, seed companies, and agrochemical manufacturers pay to reach farmers through HarvestPrice. Their messages appear as sponsored additions to daily SMS alerts:

```
HarvestPrice Daily 22/03/26
Tomatoes: Lagos N82,000 (+5%)
---
Sponsored: Indorama NPK 15-15-15 now N28,000/bag at Jos depot. Call 0800-XXX-XXXX
```

This is not advertising — it is actionable input pricing delivered in the same channel as output pricing. Farmers need both.

### What HarvestPrice Deliberately Sacrifices

- **No weather forecasts** (different problem, different data source)
- **No agronomic advice** (extension services territory — different expertise)
- **No marketplace/transaction layer** (HarvestPrice is information, not commerce)
- **No logistics coordination** (transport is a separate problem requiring different infrastructure)
- **No web or mobile app** (farmers are on 2G feature phones — web is irrelevant)
- **Price accuracy is directional, not precise:** ±5-15% depending on source density. This is infinitely better than no data. The farmer does not need N82,347 — they need to know "roughly N80,000-85,000" vs. the N40,000 the middleman offered.

### Iteration Path

- **Phase 1 (Month 1-3):** 5 markets, 10 commodities. Manual collection. USSD query + SMS subscription.
- **Phase 2 (Month 4-6):** 10 markets, 20 commodities. Add weekly trend SMS. Begin agri-input sponsorship.
- **Phase 3 (Month 7-12):** Historical price database reaches 6+ months. Add seasonal trend reports. Data licensing to first institutional buyer. Begin radio partnership for price broadcasts.
- **Phase 4 (Year 2):** Crowdsourced price reporting from farmer cooperatives (reduce collector costs). Price forecasting (directional). Integration with agricultural insurance products.
- **Phase 5 (Year 3+):** Commodity exchange price discovery. Agricultural credit scoring (farmer query + subscription history as proxy for market sophistication). Cross-border price data (Cameroon, Niger, Benin border markets).

---

## 6. Functional Requirements

### MUST Have — MVP (Month 1-2)

### FR1: USSD Price Query

- **Description:** Farmer dials USSD short code, navigates menu to select commodity and market, receives current wholesale price via SMS.
- **Channel:** USSD → SMS
- **Inputs:** Farmer phone number (auto-detected), commodity selection, market selection
- **Outputs:** SMS with current price(s) for selected commodity/market combination
- **Acceptance Criteria:**
  - [ ] USSD session completes in 3 menu screens or fewer (commodity → market → confirm)
  - [ ] Each USSD screen is 160 characters or fewer
  - [ ] USSD session responds within 2 seconds per screen
  - [ ] SMS delivered within 10 seconds of query confirmation
  - [ ] SMS includes: commodity name, market name, price, date, and SUBSCRIBE prompt
  - [ ] Supports at least 10 commodities and 5 markets at launch
  - [ ] Works on any GSM phone (2G, 3G, 4G) without internet

### FR2: SMS Price Alert Subscription

- **Description:** Farmer subscribes to daily SMS alerts for selected commodities and markets. Subscription managed via USSD or SMS reply.
- **Channel:** USSD + SMS
- **Inputs:** Phone number, commodity selection (1-3), market selection (1-3), payment confirmation
- **Outputs:** Daily SMS at 6:00 AM with prices for subscribed combinations
- **Acceptance Criteria:**
  - [ ] Subscription activated via USSD menu or by replying "SUBSCRIBE" to any HarvestPrice SMS
  - [ ] Farmer selects up to 3 commodities and 3 markets
  - [ ] Daily SMS delivered between 5:30 AM and 6:30 AM
  - [ ] SMS includes weekly percentage change for each price
  - [ ] Subscription billed at N500/month via airtime deduction or mobile money
  - [ ] Farmer can unsubscribe via USSD or by replying "STOP"
  - [ ] Unsubscription takes effect within 24 hours

### FR3: Price Collection Dashboard

- **Description:** Web-based dashboard for price collectors to submit daily market prices. Includes validation, outlier detection, and approval workflow.
- **Channel:** Web (collector-facing) + WhatsApp bot (alternative submission)
- **Inputs:** Collector ID, market, commodity, price observations (3-10 per commodity), date
- **Outputs:** Validated daily price per commodity per market
- **Acceptance Criteria:**
  - [ ] Collector can submit prices via web form or WhatsApp message (structured format)
  - [ ] System accepts multiple price observations per commodity (median calculated automatically)
  - [ ] Prices deviating >25% from previous day flagged for manual review
  - [ ] Submission deadline: 9:00 AM daily; late submissions flagged
  - [ ] Admin can approve, reject, or edit submitted prices before publication
  - [ ] Dashboard shows collector performance metrics: submission rate, timeliness, outlier frequency

### FR4: Farmer Registration and Profile

- **Description:** Farmer registers via USSD with minimal information. Registration enables subscription management and creates farmer profile for the data asset.
- **Channel:** USSD
- **Inputs:** Phone number (auto), name (optional), state, primary commodity (selected from list)
- **Outputs:** Registration confirmation SMS, farmer ID assigned
- **Acceptance Criteria:**
  - [ ] Registration completes in 2 USSD screens (state → commodity)
  - [ ] Phone number serves as unique identifier
  - [ ] Registration is free
  - [ ] Registered farmer can manage subscription, query history, and preferences via USSD menu
  - [ ] Farmer data stored with consent for aggregated analytics (anonymized)

### FR5: Commodity and Market Master Data

- **Description:** Configurable database of commodities (name, unit, variants) and markets (name, location, state, collection schedule).
- **Channel:** Web (admin only)
- **Inputs:** Admin configuration
- **Outputs:** Commodity and market lists available to USSD menus and SMS templates
- **Acceptance Criteria:**
  - [ ] 10 commodities at launch: tomatoes, rice (local), rice (imported), maize, beans, garri, yam, onions, palm oil, peppers
  - [ ] 5 markets at launch: Lagos Mile 12, Abuja Garki/Wuse, Kano Dawanau, Jos Terminus/Farin Gada, Onitsha Main Market
  - [ ] Each commodity has defined unit (per bag, per basket, per kg, per litre)
  - [ ] Each market has defined collection schedule and assigned collector(s)
  - [ ] Admin can add commodities and markets without code changes

### FR6: Price Data API (for Data Buyers)

- **Description:** RESTful API serving aggregated, anonymized price data to institutional buyers. Authentication via API key.
- **Channel:** Web API
- **Inputs:** API key, commodity, market, date range
- **Outputs:** JSON response with daily prices, weekly averages, trends
- **Acceptance Criteria:**
  - [ ] API returns data for any commodity-market-date combination with data
  - [ ] Response time < 500ms for single-commodity queries
  - [ ] Rate-limited to 1,000 queries/day per API key (standard tier)
  - [ ] API documentation auto-generated from schema
  - [ ] Historical data available from first day of collection
  - [ ] Data includes: median price, min, max, sample size, confidence level

### SHOULD Have — Month 2-3

### FR7: Weekly Trend SMS

- **Description:** Weekly SMS sent to subscribers summarizing price trends (up/down/flat) for their commodities across markets. Highlights the best-price market.
- **Channel:** SMS
- **Acceptance Criteria:**
  - [ ] Sent every Monday at 6:00 AM
  - [ ] Includes 7-day price change for each subscribed commodity
  - [ ] Highlights market with lowest and highest price for each commodity
  - [ ] SMS is 320 characters or fewer (2 SMS segments maximum)

### FR8: Agri-Input Sponsor Message Integration

- **Description:** Sponsored messages from fertilizer/seed/agrochemical companies appended to daily price SMS. Limited to 1 sponsor message per SMS.
- **Channel:** SMS
- **Acceptance Criteria:**
  - [ ] Sponsor message clearly labeled "Sponsored" or "Ad"
  - [ ] Sponsor message limited to 80 characters
  - [ ] Maximum 1 sponsor message per daily SMS
  - [ ] Admin dashboard for sponsor campaign management (message, targeting by state/commodity, start/end dates)
  - [ ] Sponsor reporting: impressions (SMS sent), click-to-call tracking (if phone number included)

### FR9: WhatsApp Price Digest (for Smartphone Users)

- **Description:** Daily WhatsApp message with richer formatting — includes mini charts, multi-market comparisons, and links to historical data.
- **Channel:** WhatsApp
- **Acceptance Criteria:**
  - [ ] Farmer joins by sending "JOIN" to HarvestPrice WhatsApp number
  - [ ] Daily message sent at 6:00 AM with prices for 10 commodities across 5 markets
  - [ ] Includes weekly percentage change and best-price market highlight
  - [ ] Farmer can request specific commodity price by messaging commodity name
  - [ ] WhatsApp channel is free (funded by sponsor revenue and data licensing)

### COULD Have — Month 4+

### FR10: Crowdsourced Price Reporting

- **Description:** Farmer cooperatives and individual farmers report local prices via USSD. Cross-validated with collector data to expand geographic coverage.
- **Channel:** USSD
- **Acceptance Criteria:**
  - [ ] Farmer reports price via USSD: commodity → market → price → confirm
  - [ ] Crowdsourced prices displayed with "Community-reported" label and lower confidence
  - [ ] 3+ independent reports for same commodity-market-date required before inclusion in official price
  - [ ] Incentive: farmers who contribute 10+ validated prices/month get free subscription

### FR11: Radio Partner Data Feed

- **Description:** Automated daily data feed formatted for radio station broadcast. Partner radio stations read commodity prices during agricultural programming.
- **Channel:** Email/API to radio stations
- **Acceptance Criteria:**
  - [ ] Daily feed generated by 5:00 AM in broadcast-ready script format
  - [ ] Covers top 5 commodities in the station's regional market
  - [ ] Includes HarvestPrice USSD code mention for listener follow-up
  - [ ] Tracking: unique USSD code per radio station to measure referral volume

### WON'T Have (Explicit Exclusions)

| Feature | Rationale |
|---------|-----------|
| Marketplace / transaction layer | HarvestPrice is information, not commerce. Adding transactions creates regulatory, payment, and logistics complexity that would slow distribution of the core product. |
| Weather forecasting | Different data source, different expertise. Partner or integrate later, do not build. |
| Agronomic advice | Extension services territory. HarvestPrice is price data, not farming advice. |
| Web or mobile app for farmers | 42% of mobile connections are 2G. Building for web/app would exclude the primary persona. USSD/SMS reaches 100%. |
| Transport/logistics coordination | Valuable but separate problem. HarvestPrice tells farmers WHAT the price is, not HOW to get produce there. |
| Retail (consumer) prices | HarvestPrice tracks wholesale prices. Retail is a different market with different dynamics and measurement challenges. |

---

## 7. Non-Functional Requirements

### NFR1: Performance

- USSD menu response: < 2 seconds per screen
- SMS delivery: < 30 seconds from query confirmation (dependent on telco network; target < 10 seconds)
- Price collection dashboard page load: < 3 seconds
- API response: < 500ms for single-query, < 2 seconds for bulk historical queries
- Daily SMS broadcast to 10,000 subscribers: complete within 30 minutes (6:00-6:30 AM window)

### NFR2: Offline/Low-Bandwidth

- USSD operates on 2G with zero internet dependency
- SMS delivery operates on 2G with zero internet dependency
- Price collection WhatsApp bot works on low-bandwidth connections (text-only messages)
- Price collection web dashboard: < 200KB initial page load, works on 3G connections
- API documentation and data buyer dashboard: < 200KB initial load

### NFR3: Security

- Farmer phone numbers stored with encryption at rest
- Individual farmer query data never shared with third parties
- All data licensing uses anonymized, aggregated data only (minimum aggregation: 50 farmers per region)
- Price collector credentials secured via OTP
- API keys hashed; rate limiting prevents abuse
- Compliance with Nigeria Data Protection Regulation (NDPR)

### NFR4: Scalability

- USSD gateway: support 500 concurrent sessions (via Africa's Talking)
- SMS broadcast: 50,000 subscribers within 60-minute delivery window
- Price database: 365,000+ daily records/year (20 commodities x 10 markets x ~1.8 observations/commodity/market/day)
- API: 10,000 queries/day capacity
- Horizontal scaling via Supabase and Vercel auto-scale as needed

### NFR5: Accessibility

- USSD menus in English (default). Pidgin option where applicable.
- USSD menus navigable with numeric keypad only (no text input required beyond registration name)
- SMS messages use simple language and numerals — no jargon, no abbreviations beyond standard commodity names
- All prices displayed in Naira with standard units (per bag, per kg, per basket)
- Feature phone compatible: no smartphone features required for core product

### NFR6: Regional

- Market-specific commodity lists (e.g., Dawanau in Kano emphasizes grains; Mile 12 in Lagos emphasizes perishables)
- SMS language defaults to English; future support for Hausa, Yoruba, Igbo commodity names
- Time zone: WAT (UTC+1) for all SMS delivery schedules
- Regional price comparisons available in weekly trend SMS

---

## 8. Key Screens & UX

### USSD Menu Tree

HarvestPrice operates via USSD — the "screens" are USSD menu pages. Each page is limited to 182 characters. Target: 3-5 screens per session.

**Session 1: Price Query (3 screens)**

```
Screen 1 (Main Menu):
HarvestPrice
1. Check Price
2. Subscribe (N500/mo)
3. My Account
4. Help

[User selects 1]
```

```
Screen 2 (Commodity):
Select commodity:
1. Tomatoes
2. Rice (local)
3. Rice (imported)
4. Maize
5. Beans
6. Garri
7. More...

[User selects 1]
```

```
Screen 3 (Market):
Tomato prices today:
1. Lagos Mile 12
2. Abuja Garki
3. Kano Dawanau
4. Jos Terminus
5. All markets

[User selects 5]
→ SMS sent with all prices
```

**SMS Response:**

```
HarvestPrice 22/03/26
Tomatoes (per bag):
Lagos: N82,000 (+5%wk)
Abuja: N75,000 (-2%wk)
Kano: N68,000 (+1%wk)
Jos: N55,000 (flat)
Best: Lagos N82,000
SUBSCRIBE for daily: dial *XXX#
```

**Session 2: Subscribe (4 screens)**

```
Screen 1: [Main menu - select 2]

Screen 2 (Commodity selection):
Select commodities (up to 3):
Enter numbers separated by comma
1.Tomatoes 2.Rice 3.Maize
4.Beans 5.Garri 6.Onions
e.g. 1,4,6

[User enters 1,4]
```

```
Screen 3 (Market selection):
Select markets (up to 3):
1. Lagos Mile 12
2. Abuja Garki
3. Kano Dawanau
4. Jos Terminus
5. Onitsha

[User enters 1,2]
```

```
Screen 4 (Confirm):
Daily SMS alerts:
Tomatoes, Beans
Lagos, Abuja
N500/month (airtime)
1. Confirm
2. Cancel
```

**Session 3: My Account (2-3 screens)**

```
Screen 1: [Main menu - select 3]

Screen 2:
My Account
1. Change commodities
2. Change markets
3. Unsubscribe
4. Renew subscription
5. Query history (SMS)
```

### Price Collection WhatsApp Bot

For price collectors submitting daily data:

```
Collector: "prices"
Bot: "Good morning! Submit prices for Lagos Mile 12.
Format: COMMODITY PRICE1 PRICE2 PRICE3
Example: Tomatoes 80000 82000 85000"

Collector: "Tomatoes 80000 82000 85000"
Bot: "Tomatoes - 3 prices received.
Median: N82,000 (prev: N78,000, +5.1%)
✓ Accepted. Next commodity?"

Collector: "Rice 67000 68000 69000 68500"
Bot: "Rice (local) - 4 prices received.
Median: N68,250 (prev: N68,000, +0.4%)
✓ Accepted. Next commodity?"

Collector: "done"
Bot: "All prices submitted for Lagos Mile 12.
8/10 commodities reported.
Missing: Palm oil, Peppers
Please submit by 9:00 AM."
```

### Admin Dashboard (Web — Internal Only)

**Screen 1: Daily Price Overview**
- Table: all commodities x all markets with today's prices, yesterday's prices, change %
- Color-coded: green (submitted on time), yellow (submitted late), red (missing)
- Collector performance sidebar: submission rate, timeliness, accuracy score

**Screen 2: Subscriber Analytics**
- Total registered farmers by state
- Active subscribers by commodity and market
- Daily query volume trend (7/30/90 day)
- Churn rate by subscription month
- Revenue: subscription revenue + sponsor revenue

**Screen 3: Data Licensing**
- API usage by client
- Revenue per client
- Data completeness score by commodity and market

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| USSD Gateway | Africa's Talking | USSD session management; works on all 138.7M connections including 42% 2G; reliable Nigerian coverage |
| SMS Delivery | Termii | Nigerian SMS API; reliable delivery across all networks; airtime billing integration |
| Backend | Next.js 14 API Routes | Handles USSD webhooks, SMS processing, price aggregation, API serving |
| Database | Supabase PostgreSQL | Time-series price data; Row Level Security; free tier for MVP |
| Price Collection Bot | WhatsApp Business API (Termii) | Collectors submit via WhatsApp; structured message parsing |
| Admin Dashboard | Next.js 14 (App Router) | Internal dashboard for price management, subscriber analytics, sponsor campaigns |
| Data API | Next.js API Routes | RESTful API for institutional data buyers |
| Hosting | Vercel | Free tier for MVP; auto-scaling; edge functions for USSD webhook processing |
| Payments | Airtime deduction (via Termii/Africa's Talking) + Paystack | Airtime for farmer subscriptions; Paystack for sponsor invoicing and API subscriptions |
| Monitoring | Sentry + PostHog | Error tracking; funnel analytics (query → subscribe → retain) |

### Database Schema (Core Tables)

```sql
-- Farmers
farmers (
  id uuid PRIMARY KEY,
  phone text NOT NULL UNIQUE,
  name text,
  state text,
  lga text,
  primary_commodity_id uuid REFERENCES commodities,
  registered_at timestamptz DEFAULT now(),
  registration_source text CHECK (source IN ('ussd', 'sms_reply', 'whatsapp', 'radio_referral'))
)

-- Commodities
commodities (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  name_hausa text,
  name_yoruba text,
  name_igbo text,
  unit text NOT NULL, -- 'bag', 'basket', 'kg', 'litre', 'tuber'
  unit_weight_kg decimal(8,2), -- standard weight per unit for cross-unit comparison
  category text CHECK (category IN ('grain', 'tuber', 'vegetable', 'legume', 'oil', 'spice')),
  perishability text CHECK (perishability IN ('high', 'medium', 'low')),
  active boolean DEFAULT true
)

-- Markets
markets (
  id uuid PRIMARY KEY,
  name text NOT NULL, -- 'Lagos Mile 12', 'Kano Dawanau'
  city text NOT NULL,
  state text NOT NULL,
  region text CHECK (region IN ('north-central', 'north-east', 'north-west', 'south-east', 'south-south', 'south-west')),
  market_type text CHECK (market_type IN ('wholesale', 'retail', 'mixed')),
  primary_commodities text[], -- main commodities traded
  collection_active boolean DEFAULT true
)

-- Price Collectors
collectors (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL UNIQUE,
  whatsapp text,
  assigned_market_id uuid REFERENCES markets,
  assigned_commodities text[],
  monthly_rate decimal(10,2), -- payment in NGN
  performance_score decimal(3,1), -- 0-10 based on submission rate and accuracy
  active boolean DEFAULT true,
  hired_at timestamptz DEFAULT now()
)

-- Daily Prices (time-series — core data asset)
commodity_prices (
  id uuid PRIMARY KEY,
  commodity_id uuid REFERENCES commodities,
  market_id uuid REFERENCES markets,
  price_date date NOT NULL,
  median_price decimal(12,2) NOT NULL,
  min_price decimal(12,2),
  max_price decimal(12,2),
  sample_size integer DEFAULT 1, -- number of price observations
  source text CHECK (source IN ('collector', 'crowdsourced', 'mixed')),
  confidence text CHECK (confidence IN ('high', 'medium', 'low')),
  collector_id uuid REFERENCES collectors,
  previous_day_price decimal(12,2),
  daily_change_pct decimal(5,2),
  weekly_change_pct decimal(5,2),
  created_at timestamptz DEFAULT now(),
  UNIQUE(commodity_id, market_id, price_date)
)

-- Raw Price Observations (individual reports before aggregation)
price_observations (
  id uuid PRIMARY KEY,
  commodity_id uuid REFERENCES commodities,
  market_id uuid REFERENCES markets,
  observed_price decimal(12,2) NOT NULL,
  observation_date date NOT NULL,
  reported_by_collector uuid REFERENCES collectors,
  reported_by_farmer uuid REFERENCES farmers, -- for crowdsourced
  source text CHECK (source IN ('collector', 'crowdsourced')),
  validated boolean DEFAULT false,
  outlier_flag boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
)

-- Subscriptions
subscriptions (
  id uuid PRIMARY KEY,
  farmer_id uuid REFERENCES farmers,
  commodities uuid[] NOT NULL, -- array of commodity IDs (max 3)
  markets uuid[] NOT NULL, -- array of market IDs (max 3)
  plan text CHECK (plan IN ('basic_sms', 'weekly_trend', 'whatsapp')),
  price_ngn decimal(8,2) NOT NULL,
  payment_method text CHECK (payment_method IN ('airtime', 'mobile_money', 'paystack')),
  status text CHECK (status IN ('active', 'paused', 'cancelled', 'expired')),
  started_at timestamptz DEFAULT now(),
  expires_at timestamptz,
  renewed_count integer DEFAULT 0
)

-- USSD Query Log
query_log (
  id uuid PRIMARY KEY,
  farmer_id uuid REFERENCES farmers,
  phone text NOT NULL, -- for unregistered users
  commodity_id uuid REFERENCES commodities,
  market_id uuid REFERENCES markets,
  query_type text CHECK (query_type IN ('single_market', 'all_markets', 'subscribe', 'account')),
  queried_at timestamptz DEFAULT now()
)

-- Sponsor Campaigns
sponsor_campaigns (
  id uuid PRIMARY KEY,
  sponsor_name text NOT NULL,
  sponsor_type text CHECK (sponsor_type IN ('fertilizer', 'seed', 'agrochemical', 'equipment', 'financial')),
  message_text text NOT NULL, -- max 80 chars
  target_states text[],
  target_commodities uuid[],
  start_date date NOT NULL,
  end_date date NOT NULL,
  budget_ngn decimal(12,2),
  cpm_ngn decimal(8,2), -- cost per 1000 impressions
  impressions_delivered integer DEFAULT 0,
  active boolean DEFAULT true
)

-- Data License Clients
data_clients (
  id uuid PRIMARY KEY,
  organization text NOT NULL,
  client_type text CHECK (client_type IN ('government', 'dfi', 'bank', 'trader', 'research', 'agri_company')),
  api_key_hash text NOT NULL,
  plan text CHECK (plan IN ('standard', 'premium', 'enterprise')),
  monthly_fee_ngn decimal(12,2),
  queries_today integer DEFAULT 0,
  queries_limit integer DEFAULT 1000,
  active boolean DEFAULT true,
  contracted_at timestamptz DEFAULT now()
)
```

### Integration Architecture

```
Price Collection Flow:
  Collector → WhatsApp message → Termii webhook → Next.js API →
  Parse prices → Validate (outlier detection) → Store in price_observations →
  Aggregate (median) → Store in commodity_prices → Available for queries

Farmer Query Flow:
  Farmer dials *XXX# → Africa's Talking USSD webhook → Next.js API →
  Process menu selection → Query commodity_prices → Format SMS →
  Termii SMS API → SMS delivered to farmer

Daily Broadcast Flow:
  Cron job (5:30 AM) → Query all active subscriptions →
  For each subscription: query commodity_prices for selected commodities/markets →
  Format SMS (+ sponsor message if campaign active) →
  Batch send via Termii → Log delivery status

Data API Flow:
  Client → API request with key → Authenticate → Query commodity_prices →
  Return JSON (median, min, max, sample_size, confidence, change_pct)
```

### USSD Webhook Flow

```
Africa's Talking → POST /api/ussd/callback
  Body: { sessionId, phoneNumber, text, serviceCode }

  text="" → Return main menu
  text="1" → Return commodity list
  text="1*3" → Return market list for commodity 3
  text="1*3*5" → Query prices, send SMS, return confirmation screen

Session state managed server-side via sessionId.
Each response must be < 182 characters.
Response prefix: "CON " (continues session) or "END " (terminates session + sends SMS).
```

---

## 10. Data Asset Strategy

### What Data HarvestPrice Generates That Did Not Exist Before

1. **Daily agricultural commodity prices across 10+ markets** — granular, structured, time-series. Currently, no institution in Nigeria collects this data at daily frequency. NBS publishes monthly aggregate food price indices. FAO/FEWS NET publish quarterly. HarvestPrice creates the first daily dataset.

2. **Farm-gate vs. wholesale price spreads** — by correlating farmer query locations (state/LGA from registration) with the wholesale prices they query, HarvestPrice can estimate the information gap between farm-gate and market prices. This data quantifies the intermediary margin for the first time.

3. **Farmer demand signals** — USSD query logs reveal which commodities farmers are interested in selling, which markets they reference, and seasonal patterns in query volume. This is a leading indicator of supply (when tomato farmers in Plateau State start querying Lagos prices, a supply wave is coming).

4. **Commodity flow patterns** — when a farmer in Kaduna queries Lagos and Kano prices, it reveals potential trade flow direction. Aggregated across thousands of farmers, this creates a map of commodity flow intent that does not exist today.

### Cross-Product Data Flows

- **BuildTrack:** Shared surveyor network infrastructure. Diesel price data feeds both products. Operational model (recruit, train, manage field collectors) is identical.
- **KasaBook:** Farmer transaction records in KasaBook (sales, expenses) can be enriched with HarvestPrice market prices to calculate whether farmers sold above or below market.
- **VendorScore:** Agricultural trader creditworthiness could incorporate HarvestPrice transaction data (volume, consistency of purchases at market rates vs. below market).
- **InsureMatch:** Agricultural insurance products require crop price data for indemnity calculations. HarvestPrice provides the only Nigerian source.

### Who Would License This Data

| Buyer | Use Case | Annual Value |
|-------|----------|-------------|
| Federal Ministry of Agriculture / FMARD | Food security monitoring, early warning systems, policy design | N5-15M/year |
| World Bank / AfDB / IFAD / USAID | Program evaluation, agricultural development project design | N5-20M/year per institution |
| Central Bank of Nigeria | Food inflation monitoring (food is 55% of CPI basket) | N3-10M/year |
| Commodity trading firms | Price arbitrage intelligence, supply forecasting | N2-5M/year per firm |
| Agricultural insurance companies | Crop price indices for index-based insurance products | N3-8M/year per insurer |
| Agri-input companies (Indorama, Notore, OCP) | Market intelligence on farmer activity, demand forecasting | N2-5M/year per company |

**Conservative Year 2 data licensing revenue: N20-60M/year** — potentially exceeding farmer subscription revenue.

### Privacy/Anonymization

- Individual farmer data (phone number, location, query history) is never shared
- All licensed data is aggregated at minimum state-level granularity
- Minimum aggregation threshold: 50 farmers per region before data is licensable
- Farmers consent to anonymized data use at registration
- Compliance with NDPR

---

## 11. Value Chain Design

### Infrastructure This Product Builds That Does Not Exist

1. **Agricultural price collection network:** 10-20 price collectors across 10 markets, trained in consistent price surveying methodology. This human infrastructure does not exist at any government agency or private institution in Nigeria.

2. **USSD-based agricultural information delivery system:** The channel connecting commodity prices to smallholder farmers on feature phones. No comparable system exists in Nigeria (unlike Kenya's M-Farm or Ghana's Esoko).

3. **Structured agricultural commodity price database:** The first time-series database of Nigerian commodity prices with daily granularity. A public good created as a byproduct of a commercial service.

### Four Pillars Application

| Pillar | Application |
|--------|-------------|
| **Resource commitment** | Investment in price collector network (hiring, training, quality control) and USSD infrastructure. These are not core software skills but are necessary to deliver the product. Similar to Tolaram building logistics and power infrastructure for noodle delivery. |
| **Cross-market knowledge transfer** | M-Farm (Kenya), Esoko (Ghana), and Reuters Market Light (India) all validated the SMS agricultural price alert model. The transferable insight: farmers will pay for price information when delivered in an accessible format. Nigeria is larger and more complex (more diverse commodities, more markets, wider price spreads), requiring adaptation. |
| **Value-chain coordination** | HarvestPrice coordinates collectors, validation systems, USSD gateways, SMS delivery, and sponsor campaigns into a single information supply chain. The farmer receives a simple SMS; behind it is a coordinated value chain of human collectors, automated validation, and multi-channel delivery. |
| **Transferability** | The collector network can expand to non-agricultural commodities (fuel, construction materials — connecting to BuildTrack). The USSD delivery platform serves any information product. The pricing database methodology transfers to any market where structured price data does not exist. |

### Externalities

- **Reduced information asymmetry** increases farmer income, which increases agricultural investment, which increases food production. This is a positive externality that benefits food security beyond HarvestPrice users.
- **Price transparency** disciplines intermediary margins, reducing consumer food prices in destination markets (the intermediary cannot charge a 100% markup if the farmer knows the wholesale price).
- **Agricultural credit enablement:** Farmer subscription and query data creates a behavioral data trail that microfinance institutions can use as a credit signal. A farmer who consistently checks prices and sells at market rates is more creditworthy than one who does not.

---

## 12. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **Free USSD Query** | N0 (standard USSD session charges apply, ~N10) | Single price query: 1 commodity, 1 market or all markets. No subscription. Ad-hoc use. |
| **Daily SMS Alerts** | N500/month (~$0.33) | Daily SMS with prices for up to 3 commodities x 3 markets. Weekly trend summary. Billed via airtime deduction. |
| **Weekly Trend Plus** | N1,000/month (~$0.65) | Everything in Daily SMS + weekly trend SMS with best-market recommendations + monthly seasonal outlook SMS. |
| **WhatsApp Digest** | Free (sponsor-funded) | Daily WhatsApp message with all 20 commodities x 10 markets. Richer formatting. Free to farmer; funded by agri-input sponsor revenue. |
| **Data API — Standard** | N500,000/year (~$325) | 1,000 queries/day. Current prices + 30-day history. For small traders and research. |
| **Data API — Premium** | N2,000,000/year (~$1,300) | 10,000 queries/day. Full historical data. Custom reports. For banks, government, large traders. |
| **Data API — Enterprise** | N5,000,000-15,000,000/year | Unlimited queries. Custom integration. Dedicated support. For DFIs, multilateral organizations. |

### Why N500/Month Exists

N500/month is approximately one-third of what a Nigerian farmer spends on airtime weekly. It is the cost of 2 minutes of phone calls. If it helps the farmer capture even a 5% better price on a single bag of tomatoes (N4,000 on an N80,000 bag), it pays for itself in one transaction. This is an ultra-low price point that Procore, Reuters, or Bloomberg would never serve. It is the Indomie 18-cent pack of agricultural market information.

### The Sponsor-Funded Model

Agri-input companies (Indorama, Notore, OCP, Syngenta, BASF) spend millions on farmer outreach through extension agents, field demos, and radio ads. HarvestPrice offers a direct channel to the exact farmers they want to reach — smallholders actively checking market prices for specific commodities in specific states. A sponsored SMS costs the sponsor N5-15 per impression, delivered with perfect targeting. For a fertilizer company launching a new product in Plateau State to tomato farmers, HarvestPrice is the most efficient channel available.

**Sponsor pricing:** N5,000-15,000 CPM (cost per 1,000 impressions). One sponsor message per daily SMS. Targeted by state and commodity.

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~N350,000 (~$228) | Vercel ($0-20) + Supabase ($0-25) + Africa's Talking USSD ($30) + Termii SMS ($50) + Price collectors ($100-150 for 5 markets) |
| SMS cost per subscriber per month | ~N60 | Termii bulk SMS: ~N2/SMS x 30 days |
| USSD session cost | ~N10/session | Africa's Talking standard session pricing |
| Cost per collector per month | N30,000-50,000 (~$20-33) | Part-time market surveyors; 2-3 hours/day, 6 days/week |
| Total collector cost (5 markets) | N150,000-250,000/month | 1-2 collectors per market |
| CAC (farmer subscriber) | N50-200 | Organic via USSD discovery, radio, word-of-mouth, market visits |
| Monthly churn | 8-12% | Seasonal: higher churn off-season, lower during harvest |
| Average subscriber lifetime | 8-12 months | Farmers subscribe during growing/harvest season; may pause off-season |
| LTV (N500/month subscriber) | N4,000-6,000 | N500 x 8-12 months |
| LTV:CAC ratio | 20:1 - 120:1 | Very strong due to near-zero CAC |

### Revenue Targets

| Milestone | Timeline | Farmers Registered | Paid Subscribers | Sponsor Revenue | MRR (NGN) | MRR (USD) |
|-----------|----------|-------------------|-----------------|----------------|-----------|-----------|
| USSD launch | Week 2 | 100 | 0 | N0 | N0 | $0 |
| First subscribers | Week 4 | 500 | 50 | N0 | N25,000 | ~$16 |
| Cover collector costs | Month 2 | 1,000 | 200 | N0 | N100,000 | ~$65 |
| First sponsor | Month 3 | 2,000 | 500 | N100,000 | N350,000 | ~$228 |
| Break-even | Month 4 | 3,000 | 800 | N200,000 | N600,000 | ~$390 |
| Growth target | Month 6 | 5,000 | 1,500 | N500,000 | N1,250,000 | ~$813 |
| Data licensing begins | Month 9 | 8,000 | 2,500 | N800,000 | N2,050,000+ | ~$1,333+ |

### Break-Even Analysis

Monthly costs at Month 4: ~N500,000 (infrastructure N150,000 + collectors N250,000 + SMS delivery N60,000 + overhead N40,000).
Break-even requires: 800 subscribers at N500/month (N400,000) + N200,000 sponsor revenue = N600,000 > N500,000 costs.

### Cost Structure Test

Is this fundamentally different from incumbents, or just cheaper?

**Fundamentally different.** Bloomberg, Reuters, and FEWS NET collect agricultural price data using professional analysts, institutional partnerships, and expensive field infrastructure. They serve governments and large institutions at $10,000+/year. HarvestPrice uses part-time market surveyors paid N30-50K/month, USSD/SMS delivery at N2/message, and airtime-deducted subscriptions at N500/month. The cost structure is 100x lower, serving a 1000x larger addressable market at 1000x lower price points. This is not a cheaper version of Bloomberg — it is a different category of product for a different category of user.

---

## 13. Go-to-Market: First 10 Customers

HarvestPrice's "first 10 customers" are the first 10 farmer cooperatives or farmer clusters — each representing 50-500 individual farmers.

### Channel 1: Agricultural Market Visits (via Family Network)

**Priority 1.** Physical presence at major wholesale markets where farmers bring produce. Port Harcourt family network enables direct access to farming communities in Rivers, Benue, and Plateau states.

**Approach:**
- Visit Mile 12 (Lagos), Garki Market (Abuja), Jos Terminus, and Port Harcourt markets
- Target: find farmers and ask "Do you know what your tomatoes sell for in Lagos?" (answer is always no)
- Demo: dial the USSD code live, show the SMS response with Lagos prices
- Immediate reaction: "The man offered me N40,000 and Lagos is N80,000?"
- Sign up on the spot via USSD

**Target:** 5 market visits → 200 farmer sign-ups → 50 paid subscribers.

### Channel 2: Farmer Cooperatives and Associations

**Priority 2.** Cooperative leaders are force multipliers. One cooperative leader who subscribes can spread the word to 100-500 member farmers.

**Approach:**
- Contact cooperative leaders via phone (lists available from state agricultural development programs)
- Offer: "Free HarvestPrice access for 1 month for your entire cooperative. After that, N500/month per farmer."
- Cooperative leader becomes an evangelist because HarvestPrice makes their members more prosperous (and more loyal to the cooperative)

**Target:** 5 cooperatives → 500 farmer registrations → 150 paid subscribers.

### Channel 3: Radio Partnership

**Priority 3.** Agricultural radio programs reach millions of farmers. Partner with 2-3 local radio stations (e.g., Tin City FM in Jos, Radio Benue) to broadcast daily commodity prices during morning agricultural shows.

**Approach:**
- Provide free daily price data to radio stations in exchange for mention of HarvestPrice USSD code
- Script: "Today's tomato price in Lagos is N82,000 per bag, in Abuja N75,000. For all commodity prices on your phone, dial *XXX#"
- Track unique USSD codes per radio station to measure referral effectiveness

**Target:** 2 radio partnerships → 300 farmer registrations → 100 paid subscribers.

### Channel 4: Agri-Input Company Partnerships

**Priority 4.** Fertilizer and seed companies have existing relationships with farmers through field agents and demo farms. Position HarvestPrice as a value-add they can offer their farmer customers.

**Approach:**
- Contact Indorama (largest fertilizer producer in Nigeria), Notore, and seed companies
- Pitch: "Your farmers sell at 30-50% below market because they have no price information. You can sponsor HarvestPrice alerts and your brand appears in every daily SMS. N5,000 CPM."
- Sponsor-funded free access means farmers get prices for free, sponsors get targeted reach, HarvestPrice gets revenue

**Target:** 1-2 sponsors → N100-200K/month sponsor revenue → 500 sponsored (free) farmer registrations.

### Channel 5: Agricultural Extension Agents

**Priority 5.** State Agricultural Development Programs (ADPs) employ extension agents who visit farming communities. These agents can introduce HarvestPrice during their visits.

**Approach:**
- Contact ADP directors in Plateau, Benue, and Kaduna states
- Offer: free HarvestPrice for farmers registered via extension agent referral
- Extension agents benefit because informed farmers are more productive, which improves the agent's performance metrics

**Target:** 3 state ADPs → 10 extension agents → 200 farmer registrations.

### Channel 6: USSD Discovery (Organic)

**Priority 6.** Once live, the USSD code itself drives discovery. Farmers share short codes with each other ("dial *XXX# to check tomato prices"). This is the WhatsApp-forward equivalent for the feature phone world.

**Target:** Organic growth of 50-100 new registrations/month from Month 3 onward.

### Channel Summary

| Channel | Priority | Farmer Registrations | Paid Subscribers Expected |
|---------|----------|---------------------|--------------------------|
| Market visits | 1 | 200 | 50 |
| Cooperatives | 2 | 500 | 150 |
| Radio partnership | 3 | 300 | 100 |
| Agri-input sponsors | 4 | 500 | 0 (sponsor-funded free) |
| Extension agents | 5 | 200 | 50 |
| Organic USSD discovery | 6 | 100 | 30 |
| **Total (Month 3)** | — | **1,800** | **380** |

---

## 14. Risks & Mitigations

### Risk 1: Price Data Accuracy and Trust

**Likelihood:** High. Agricultural prices vary by quality, ripeness, negotiation, and even time of day. There is no single "market price" for tomatoes.

**Impact:** If farmers discover HarvestPrice prices do not match their experience, trust collapses immediately. A farmer who negotiates based on HarvestPrice data and discovers the real price is 20% different will feel cheated.

**Mitigations:**
- Set honest accuracy expectations from day one: "Prices are directional — within N5,000-10,000 of actual wholesale. Use as a benchmark, not an exact quote."
- Show price ranges (min-max) rather than single prices where possible
- Multiple observations per commodity per market (5-10 wholesalers surveyed)
- Display confidence levels based on sample size: "High" (5+ observations), "Medium" (3-4), "Low" (1-2)
- Cross-validate: compare collector-reported prices with any published sources (NBS, FEWS NET when available)

### Risk 2: Farmer Willingness to Pay N500/Month

**Likelihood:** Medium. N500/month is very low, but smallholder farmers operate on extremely tight margins. Off-season, even N500 feels significant.

**Impact:** Low conversion from free USSD queries to paid subscriptions. Revenue growth stalls.

**Mitigations:**
- Free USSD query always available (revenue comes from ad-hoc USSD session fees charged by telcos, not HarvestPrice)
- Sponsor-funded model: if sponsors cover cost, farmers receive alerts free. Sponsors pay because targeted farmer access has clear value.
- Seasonal pricing: N500/month during harvest season (April-October), free off-season to maintain engagement
- Cooperative pricing: N300/month per farmer when 50+ farmers subscribe through a cooperative
- The value proof is immediate: if one SMS helps a farmer negotiate N2,000 more per bag on a single sale, the N500/month subscription has paid for itself 4x over

### Risk 3: Intermediary Resistance

**Likelihood:** Medium-High. Intermediaries (aggregators, middlemen) profit from farmer ignorance. HarvestPrice threatens their information advantage.

**Impact:** Middlemen could discourage farmers from using HarvestPrice, spread misinformation about accuracy, or refuse to buy from informed farmers.

**Mitigations:**
- HarvestPrice does not replace intermediaries — it empowers farmers to negotiate within the existing system. Intermediaries still provide transport, aggregation, and market access. They just cannot extract 50% margins anymore.
- Frame as beneficial to honest intermediaries: "You offer fair prices? HarvestPrice proves it. Farmers will trust you more."
- Do not antagonize intermediaries publicly. Position as "market information for everyone" — intermediaries can use it too.
- Over time, as farmer trust builds, intermediary resistance becomes irrelevant

### Risk 4: Collector Reliability and Fraud

**Likelihood:** Medium. Price collectors may submit inaccurate data (carelessness) or fabricated data (to avoid actually visiting the market).

**Impact:** Data quality degrades, undermining the core product.

**Mitigations:**
- Multiple collectors per market where possible (cross-validation)
- Automated outlier detection: price changes >15% from previous day flagged for review
- GPS-stamped submissions via WhatsApp location sharing (confirms collector is at market)
- Weekly spot-checks: admin calls 2-3 wholesalers to verify reported prices
- Performance scoring: collectors with high outlier rates or low submission rates are replaced
- Crowdsourced data supplements and validates collector data as user base grows

### Risk 5: Seasonal Usage Patterns

**Likelihood:** High. Agricultural activity is seasonal. Demand for price information peaks during harvest and planting seasons and drops off-season.

**Impact:** Revenue is cyclical. Churn spikes during off-season. Monthly MRR projections are misleading.

**Mitigations:**
- Budget for seasonal revenue: plan cash flow around 8-month active season, not 12 months
- Off-season engagement: send market outlook reports, planting guidance tied to price trends ("maize prices rose 15% last year — consider increasing maize acreage this season")
- Multi-commodity coverage reduces seasonality: different crops have different seasons, so diversified subscribers maintain activity year-round
- Sponsor revenue is less seasonal (input companies advertise year-round for different products)

### Risk 6: Infrastructure Risk — USSD/SMS Reliability

**Likelihood:** Medium. USSD sessions can time out. SMS delivery is not guaranteed 100%. Network outages in rural areas are common.

**Impact:** Farmers cannot query prices when they need them. Daily SMS alerts arrive late or not at all.

**Mitigations:**
- Africa's Talking USSD has 99.5%+ uptime; Termii SMS has 95%+ delivery rate
- Retry logic for failed SMS delivery (retry 3x over 1 hour)
- SMS fallback for USSD timeout: if USSD session fails, send SMS with "Reply with commodity number for prices"
- Monitor delivery rates by telco network and flag systematic issues
- Radio broadcast serves as backup channel — if digital fails, farmers still hear prices on radio

### Risk 7: Competition from Well-Funded Agricultural Tech

**Likelihood:** Low-Medium. International agricultural development organizations (CGIAR, USAID Feed the Future, Bill & Melinda Gates Foundation) sometimes fund agricultural price information systems.

**Impact:** A well-funded competitor could offer similar service for free, undermining HarvestPrice's revenue model.

**Mitigations:**
- Development-funded projects are typically time-limited (3-5 year project cycles) and geographically narrow. HarvestPrice is a commercial business that sustains itself.
- The data asset compounds: a competitor starting later must build the price database from scratch
- Potential partnership rather than competition: development organizations could fund HarvestPrice access for specific regions as part of their programs (revenue for HarvestPrice, distribution for the development project)
- Commercial model with sponsor revenue and data licensing is sustainable independent of development funding

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot personally visit Nigerian markets or manage collectors directly. Must rely on family network in Port Harcourt and remote management via WhatsApp/calls.
- **Budget: $0-5K:** Cannot afford large collector networks or paid advertising at launch. Must prioritize organic growth and sponsor-funded distribution.
- **No existing agricultural network:** Unlike BuildTrack (which can leverage construction industry LinkedIn), agricultural outreach requires ground-level channels (radio, market visits, cooperatives).
- **Tech stack:** Next.js + Supabase + Africa's Talking + Termii. No custom mobile app development.
- **Timeline:** First USSD queries within 2 weeks. First paid subscribers within 30 days.

### Assumptions (Each Testable)

| Assumption | Test |
|-----------|------|
| Farmers will dial a USSD code to check commodity prices | Deploy USSD; measure queries in first 2 weeks. Pass: 50+ unique queries. |
| Farmers will pay N500/month for daily SMS alerts | Launch subscription; measure conversion from free queries. Pass: 5%+ conversion rate. |
| Part-time market surveyors can reliably collect prices for N30-50K/month | Hire 2 collectors; measure submission rate and accuracy over 30 days. Pass: 90%+ submission rate, <15% outlier rate. |
| Agri-input companies will pay N5,000+ CPM for sponsored SMS to farmers | Pitch 3 companies; measure response. Pass: 1 signed sponsor within 90 days. |
| Information asymmetry is large enough that prices significantly differ between farm-gate and wholesale | Compare collector-reported wholesale prices with farmer-reported selling prices. Pass: >25% average spread. |
| Radio partnerships drive measurable USSD adoption | Launch with unique USSD tracking code per station. Pass: 50+ queries attributed to radio within 30 days. |

### Out of Scope

| Exclusion | Rationale |
|-----------|-----------|
| Marketplace / e-commerce | HarvestPrice is information, not commerce. Building a transaction layer requires payment processing, dispute resolution, and logistics — each a separate product. |
| Weather / agronomic services | Different data sources, different expertise. Partner later; do not build. |
| Web or mobile app for farmers | Primary persona is on 2G feature phones. USSD/SMS reaches 100% of the market. A web app would serve <5% of the target segment. |
| International commodity prices | Nigerian domestic prices are the priority. International prices (e.g., global rice futures) are interesting but not actionable for smallholder farmers. |
| Processing / value-add advice | "You should make garri instead of selling raw cassava" is valid but beyond the scope of a price information service. |
| Credit / lending to farmers | Downstream opportunity (using HarvestPrice data for credit scoring) but not in-scope for the core product. |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] USSD short code operational on at least 2 telco networks (MTN + Airtel)
- [ ] Price data collected for at least 10 commodities across 5 markets for 7 consecutive days
- [ ] USSD query returns SMS response within 30 seconds for 95%+ of queries
- [ ] 50 unique farmer phone numbers have completed at least 1 USSD price query
- [ ] 10 farmers have activated paid SMS subscription
- [ ] Daily SMS broadcast delivered by 6:30 AM for 7 consecutive days
- [ ] Price collector submission rate above 85% for 14 consecutive days

### Success Metrics (3 Months Post-Launch)

- [ ] Revenue: N350,000+ MRR (combination of subscriptions + sponsor revenue)
- [ ] Farmers: 2,000+ registered, 500+ active paid subscribers
- [ ] Key product metric: farmer query satisfaction — 70%+ of queried prices confirmed as "useful" by farmer follow-up survey
- [ ] Data asset: 5 markets x 10 commodities x 90 days = 4,500+ daily price records in database
- [ ] Retention: Month-2 retention rate above 65% for paid subscribers
- [ ] Sponsor: at least 1 active agri-input sponsor campaign generating N100K+/month

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 8 | 0.40 | USSD + SMS product. No web app for farmers. Backend is USSD webhook processing + SMS broadcast — standard integration work. Price collection is operational setup, not code. Can launch USSD in 2 weeks. |
| Time to Revenue | 15% | 6 | 0.90 | First paid subscribers (N500/month) within 30 days, but revenue per farmer is extremely low. Meaningful MRR requires 500+ subscribers or sponsor deals. Sponsor revenue (N100K+/month) may take 60-90 days to secure. |
| Market Size | 15% | 9 | 1.35 | 40M+ smallholder farmers. N3.5T in post-harvest losses. Agricultural sector is foundation of Nigerian economy. Data licensing TAM adds substantial upside beyond farmer subscriptions. |
| Competition | 10% | 9 | 0.90 | Zero equivalent exists in Nigeria. No USSD/SMS agricultural price service. FEWS NET/FAO are quarterly PDFs for institutions, not farmers. The data asset itself has no competition. |
| Skill Fit | 15% | 7 | 1.05 | USSD/SMS integration, data pipeline, time-series database, API design — all align with AI/data science and full-stack skills. Collector network management is new but manageable. Agricultural domain knowledge requires learning. |
| Capital Required | 10% | 7 | 0.70 | Collector costs (N150-250K/month) are the main expense. USSD and SMS costs are minimal. Can start with 3 markets and 3 collectors for ~N150K/month. Sponsor revenue can offset collector costs within 90 days. |
| Buyer Clarity | 20% | 6 | 1.20 | Farmers are findable at markets and through cooperatives, but individual farmer acquisition at N500/month is labor-intensive. Cooperative leaders and agri-input sponsors are clearer buyers with higher value. Cannot name 10 specific farmers to call this week — need cooperative intermediaries. |
| Fintech Upside | 10% | 8 | 0.80 | Agricultural credit scoring (farmer query data as credit signal), commodity-backed micro-lending, agricultural index insurance — all enabled by HarvestPrice data. N49.4T credit gap includes agricultural SMEs. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.40 |
| Time to Revenue (15%) | 0.90 |
| Market Size (15%) | 1.35 |
| Competition (10%) | 0.90 |
| Skill Fit (15%) | 1.05 |
| Capital Required (10%) | 0.70 |
| Buyer Clarity (20%) | 1.20 |
| Fintech Upside (10%) | 0.80 |
| **TOTAL** | **7.30 / 10** |

### Verdict: BUILD

A 7.30 composite score reflects a massive market opportunity (9 on Market Size, 9 on Competition) with strong fintech upside (8). The lower Buyer Clarity score (6) reflects the difficulty of individual farmer acquisition at ultra-low price points — mitigated by the cooperative channel and agri-input sponsor model. The revenue per user is low, but volume is potentially enormous, and the data licensing revenue stream transforms the business model.

**Key decision factors:**
- The data asset is the real product. Daily agricultural commodity prices across 10+ markets is data that does not exist in Nigeria. Government agencies and development finance institutions will pay millions for it.
- Shared operational model with BuildTrack reduces marginal cost: same collector recruitment, training, and management infrastructure.
- USSD/SMS delivery means zero user acquisition friction — farmers already know how to dial USSD codes.
- Agricultural sector is 24% of GDP. This is not a niche — it is the foundation of the economy.

**Go condition:** Recruit 3 collectors for Jos, Lagos Mile 12, and Abuja. Set up Africa's Talking USSD + Termii SMS in Week 1. Launch USSD queries in Week 2. Launch paid SMS subscriptions in Week 4. Target 500 registered farmers and first sponsor engagement by Day 90.

---

## 18. Disruption Self-Assessment (8 Criteria)

### Criterion 1: Targets Overlooked or Non-consuming Segments

**Rating: Strong fit**

40M+ Nigerian smallholder farmers have zero access to any structured agricultural commodity price data. This is not "bad" data or "expensive" data — it is no data. The current alternative is accepting whatever price an intermediary offers, with no benchmark, no comparison, no negotiation leverage. These farmers are not underserved by existing products — they are completely non-consuming. No product exists for them to be underserved by. HarvestPrice creates first-time consumers of market price information.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First

**Rating: Strong fit**

Bloomberg Agricultural Commodities costs $25,000+/year and provides real-time global futures data with analytics. Reuters Market Light (India) provides SMS alerts with professional analyst commentary. HarvestPrice provides a 160-character SMS with a single price point, directionally accurate within 10-15%. A commodity trader would look at HarvestPrice and say "this is crude." But a farmer who has never known what his tomatoes sell for in Lagos would say "this changes everything." HarvestPrice deliberately sacrifices precision, analytics, forecasting, and multi-asset coverage to deliver one thing — today's price — through the only channel that reaches the farmer.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold

**Rating: Strong fit**

This is primarily a new-market foothold. No agricultural price information product exists for Nigerian smallholder farmers. HarvestPrice creates the category. It is simultaneously low-end relative to global agricultural information services (Bloomberg, Reuters, FEWS NET professional tools) — entering at N500/month vs. $25,000+/year. The price point is so low that no global player would serve this market. It is too small per user, too operationally complex, and too infrastructure-intensive.

### Criterion 4: Reimagines the Value Chain

**Rating: Strong fit**

HarvestPrice must build a data collection infrastructure that does not exist: hire and train market surveyors, build WhatsApp-based price reporting workflows, deploy USSD session management, create automated outlier detection, and coordinate SMS delivery across millions of messages. This is not optimizing an existing supply chain — it is building an information supply chain from scratch. The shared collector network with BuildTrack creates a multi-product data collection infrastructure — analogous to Tolaram's logistics arm serving multiple product lines.

### Criterion 5: Prioritizes Scaling a Core Solution

**Rating: Strong fit**

The product is radically focused: one SMS with today's price. No agronomic advice, no weather, no marketplace, no logistics coordination. Maximum distribution of the simplest possible product. The USSD entry point means zero smartphone dependency, zero app download, zero literacy requirement beyond numbers. Phase 1 serves 5 markets with 10 commodities before Phase 2 adds analytics, trends, and geographic expansion. Distribution breadth before feature depth.

### Criterion 6: Demands a Different Cost Structure

**Rating: Strong fit**

Bloomberg employs professional analysts, proprietary data feeds, and institutional sales teams. Cost per customer: $10,000+/year. HarvestPrice employs part-time market surveyors at N30-50K/month, delivers via SMS at N2/message, and charges N500/month via airtime deduction. Cost per customer: ~N100/month (~$0.07). This is not "cheaper Bloomberg" — it is a completely different cost model. The evolution to crowdsourced pricing (farmers report prices from their local markets) drives marginal collection cost toward zero as the user base grows.

### Criterion 7: Converts Non-consumption into Growth

**Rating: Strong fit**

Every HarvestPrice user is a first-time consumer of structured agricultural price data. Growth comes entirely from converting non-consumers — no market share is being stolen from any incumbent because no incumbent serves this segment. The economic multiplier is significant: better-informed farmers earn higher prices, invest more in next-season inputs, increase productivity, and demand more agricultural services (credit, insurance, logistics). HarvestPrice does not just serve existing demand — it creates new economic activity by correcting the information asymmetry that suppresses farmer income.

### Criterion 8: Can Mature to Surpass Mainstream Offerings

**Rating: Partial fit**

HarvestPrice can evolve from basic SMS prices to sophisticated agricultural market intelligence: historical trend analysis, seasonal forecasting, commodity flow mapping, price-based credit scoring, and agricultural index insurance. The data asset improves with time and scale. However, surpassing Bloomberg or professional commodity analytics platforms is not the maturation path — HarvestPrice matures within its own market, from "one SMS" to "the definitive source of Nigerian agricultural price intelligence," potentially becoming the data backbone for a Nigerian commodity exchange. The maturation path is real but bounded to the domestic market.

### Overall Assessment

| Criterion | Rating |
|-----------|--------|
| 1. Overlooked segment | Strong fit |
| 2. "Worse" but good enough | Strong fit |
| 3. Market foothold | Strong fit |
| 4. Value chain reimagined | Strong fit |
| 5. Scale core solution | Strong fit |
| 6. Different cost structure | Strong fit |
| 7. Non-consumption → growth | Strong fit |
| 8. Can mature | Partial fit |

**7/8 strong fit, 1/8 partial fit, 0/8 gaps.** All three non-negotiable criteria (1, 3, 7) are strong fit. The one partial fit (Criterion 8) reflects an honest assessment that HarvestPrice's maturation path is domestic-market-bounded rather than globally competitive — but within Nigeria, the maturation path to agricultural market intelligence infrastructure is clear and compelling.

---

## 19. MNC Anti-Pattern Check

Checking against the 6 failure patterns from the MNC failure patterns analysis:

### Pattern 1: Phantom Middle Class
**No match.** HarvestPrice targets the base of the pyramid — smallholder farmers earning N700K-1.2M/year, not an aspirational middle class. The N500/month price point is calibrated for this segment. Revenue projections are based on volume at ultra-low per-user pricing, not premium pricing to a small affluent segment.

### Pattern 2: Push, Don't Pull
**No match.** Strong pull signals exist: farmers already spend money traveling to distant markets to check prices, call relatives for price information, and listen to radio price broadcasts. SMS agricultural price alerts have demonstrated demand in Kenya (M-Farm), Ghana (Esoko), and India (Reuters Market Light). HarvestPrice delivers what farmers already seek through a channel they already use (USSD/SMS).

### Pattern 3: Infrastructure Entitlement
**No match.** HarvestPrice explicitly builds the infrastructure it needs: price collection network, USSD delivery system, SMS broadcast pipeline. It does not assume any existing agricultural data infrastructure. The product is designed for 2G feature phones because that is the infrastructure reality.

### Pattern 4: Imported Management
**Partial match — mitigated.** The founder is NYC-based and cannot relocate. This creates a version of the "imported management" risk — decisions about Nigerian agricultural markets made from New York. **Mitigation:** Price collector recruitment and agricultural market visits executed via Port Harcourt family network. Cooperative and sponsor relationships managed remotely but informed by on-the-ground contacts. The product's simplicity (USSD/SMS) reduces the cultural adaptation needed vs. a complex app that requires deep UX localization.

### Pattern 5: Blame and Exit
**No match.** The product is designed for the market as it is — 2G phones, feature phone users, no internet, no app stores. If adoption is slow, the response is to adjust channels (add radio, add cooperative partnerships), not blame the market.

### Pattern 6: Premium Positioning in a Value Market
**No match.** N500/month is the opposite of premium positioning. The free USSD query is the opposite of premium positioning. The sponsor-funded WhatsApp digest is free to farmers. Every pricing decision is calibrated for the base of the pyramid.

**Summary:** 0/6 anti-pattern matches. One partial match on Pattern 4 (founder location) with clear mitigations in place.