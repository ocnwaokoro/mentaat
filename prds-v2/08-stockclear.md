# PRD 08: StockClear — B2B Surplus Inventory Marketplace

**Version:** 2.0 | March 2026
**Status:** Production-Ready Draft
**Priority:** High (7/8 Disruption Score)
**Depends on:** [00-shared-context.md](../prds/00-shared-context.md)

---

## 1. Executive Summary

Nigerian manufacturers are sitting on N2.14T in stranded finished goods inventory — an 87.5% surge driven by collapsed consumer purchasing power, naira depreciation, and capacity utilization crashing from 62% to 47.72%. No liquidation channel exists. Manufacturers watch inventory spoil, become obsolete, or consume warehouse space while they bleed working capital. Discount buyers — smaller distributors, regional traders, export aggregators — would purchase this stock at reduced prices, but they have no way to discover what is available. Both sides of this transaction are non-consumers: manufacturers have no liquidation infrastructure, and discount buyers have no discovery mechanism. The marketplace that would connect them simply does not exist.

StockClear is a WhatsApp-mediated B2B surplus inventory marketplace. Manufacturers list excess stock via WhatsApp or a web listing interface. Discount buyers browse available inventory and submit bids. StockClear coordinates matching, facilitates negotiation, and takes a 5-10% commission on completed transactions. This is a new-market disruption: no B2B surplus liquidation marketplace exists in Nigeria. The product creates transactions that would not otherwise happen.

StockClear also absorbs the adjacent Factory Shutdown Asset Marketplace opportunity — 767+ factories closed in 2023-2024 alone, leaving behind equipment, customer lists, supplier relationships, and trained staff with no structured liquidation channel. These distressed assets join surplus inventory on the same platform, creating a comprehensive B2B liquidation marketplace.

The data asset is the real strategic play: StockClear generates the first dataset on Nigerian manufacturer inventory health, surplus patterns by sector, price elasticity for distressed goods, and factory closure asset recovery rates. This data feeds VendorScore (credit risk signals), InsureMatch (inventory insurance pricing), and potential trade finance products.

**Entry channel:** WhatsApp (listing + browsing) → Web (desktop listing/browsing interface for larger sellers and buyers) → USSD (status checks for sellers)

**Layer:** 2 (business tool) in the Mentaat infrastructure stack.

**90-day target:** 50 completed transactions, 20 active sellers, 100 active buyers, N500K MRR from commissions.

---

## 2. Market Opportunity

### The Inventory Graveyard

Nigerian manufacturers are producing goods that cannot sell at full price. Capacity utilization crashed from 62% to 47.72% between Q2-Q4 2025, but the goods already produced sit in warehouses. The N2.14T in stranded finished goods inventory (87.5% surge) represents working capital that manufacturers cannot recover. Every month of unsold inventory is a month of warehouse costs, potential spoilage, and cash flow strangulation at a time when lending rates are 35.5%.

### Quantified Pain

| Metric | Value | Source |
|--------|-------|--------|
| Stranded manufacturer inventory | N2.14T | MAN Reports |
| Inventory surge rate | 87.5% YoY | MAN |
| Factory closures (2023-2024) | 7.2M MSMEs, 767+ manufacturers | MAN, CAC |
| Capacity utilization | 47.72% (crashed from 62%) | MAN |
| Lending rates | 35.5% (up from 28.06%) | CBN |
| Naira depreciation (2024-2025) | 40.9% + 25.3% | CBN |
| Net job losses (manufacturing) | -789 Q1-Q4 2025 | MAN |
| Commercial paper issuance | N1.58T H1 2025 (107% YoY) | FMDQ |

### The Zero

**100% non-consumption.** No B2B surplus inventory liquidation marketplace exists in Nigeria. Manufacturers currently liquidate through:
- Personal phone calls to known contacts (ad hoc, limited reach)
- WhatsApp status posts hoping someone sees them (untargeted)
- Accepting whatever offer arrives, often from middlemen who capture most of the margin
- Writing off inventory entirely when no buyer materializes
- Watching goods spoil or become obsolete

Discount buyers currently find deals through:
- Word of mouth in trade associations
- Random encounters at factory gates
- Middlemen who mark up distressed goods before resale
- Nothing — they simply do not have access to these deals

### Why the Pain is Getting Worse

1. **Naira depreciation compounds inventory losses.** Goods produced at N1,200/$ input costs now face a consumer market where purchasing power has declined 40%+ in two years. The gap between production cost and achievable selling price widens monthly.
2. **Lending rates at 35.5%** mean the cost of carrying unsold inventory is punishing. Every month of unsold stock costs 3% of its value in financing charges alone.
3. **Capacity utilization still falling.** Q4 2025 at 47.72% means factories are producing at less than half capacity, yet what they produce increasingly cannot sell at planned prices.
4. **Factory closures accelerating.** 767+ factories closed, each leaving behind equipment, inventory, customer relationships, and trained workers with no structured way to transfer these assets to surviving businesses.
5. **FX expectation bias.** Businesses consistently expect naira appreciation while it continues to depreciate — so they hold inventory hoping prices will recover, and they don't.

### Why Existing Solutions Don't Serve This Segment

- **Jiji/OLX:** Consumer-to-consumer platforms. Not designed for B2B bulk transactions of industrial goods.
- **TradeDepot/Omnibiz:** Distribution platforms for FMCG brands to retailers. Not surplus liquidation — they serve the primary distribution channel.
- **LinkedIn/WhatsApp groups:** Informal, unstructured, no verification, no transaction facilitation, no price discovery mechanism.
- **Auctioneers:** Exist for some asset types (vehicles, real estate) but not for manufacturer surplus inventory at scale.

### Total Addressable Market

**Surplus Inventory:**
- N2.14T in stranded inventory. Even 1% liquidated through StockClear = N21.4B transaction volume.
- At 5-10% commission = N1.07-2.14B revenue opportunity on 1% market penetration.
- Active manufacturers with surplus: estimated 5,000-10,000 companies across food/beverage, textiles, chemicals, and consumer goods.

**Factory Shutdown Assets:**
- 767+ factories closed, with equipment, customer lists, and trained staff.
- Average factory shutdown asset value estimated at N50-500M per factory = N38-383B total.
- Surviving manufacturers actively seeking cheap capacity expansion — 54-81 expansion index vs. 8-40 employment index means they want to grow without hiring, and buying shutdown factory equipment is the cheapest path.

**SAM:** 2,000 manufacturers with regular surplus + 500 factories with distressed assets + 5,000 discount buyers actively seeking deals.

**SOM (Year 1):** 100 active sellers, 500 active buyers, N500M-1B transaction volume, N25-100M commission revenue.

### Regional Variance

- **South-West (Lagos):** Highest concentration of manufacturers and factory closures. Primary market. Capacity utilization 48.86% (lowest regional).
- **South-East (Nnewi, Aba, Onitsha):** Highest manufacturing capacity at 59.91% — these clusters are more resilient but still produce surplus. Potential sellers AND buyers (surviving manufacturers buying shutdown factory equipment from Lagos).
- **Food/Beverage sector:** 63.24% capacity, N229.4B energy spend — highest capacity, most likely to have surplus that is perishable and needs rapid liquidation.
- **Electrical/Electronics:** 28.00% capacity, collapsed -46.8% — do NOT target as sellers; they have nothing to sell. But their shutdown assets are valuable to remaining players.

---

## 3. Target Personas

### Primary Persona: Emeka — Factory Operations Manager with Dead Stock

| Attribute | Detail |
|-----------|--------|
| **Title** | Operations Manager / Factory Manager |
| **Company** | Mid-size food/beverage or consumer goods manufacturer |
| **Revenue** | N100-800M/month (declining) |
| **Location** | Lagos (Ikeja/Agbara industrial areas) or Aba/Nnewi |
| **Age** | 38-52 |
| **Education** | BSc Engineering or Business |
| **Tools today** | Phone contacts, WhatsApp, Excel |
| **Pain frequency** | Weekly — reviewing inventory reports showing growing unsold stock |
| **Decision authority** | Can approve discounted sales up to 40% below list price |

#### Emeka's Monthly Despair

- **Week 1:** Inventory report shows 3 production runs of detergent (N45M cost value) sitting unsold for 4 months. Warehouse is 85% full. New production cannot start because there is nowhere to store output.
- **Week 2:** MD asks: "Can we liquidate the old stock?" Emeka calls 5 contacts. Two say "maybe." One offers 30% of cost — barely covers raw material. The other two never call back.
- **Week 3:** Finance sends a reminder that the N45M in unsold stock is accruing N1.3M/month in financing costs at 35.5% lending rate. Emeka posts on his WhatsApp status: "Detergent for sale, bulk, discount available." Two inquiries, neither serious.
- **Week 4:** Board meeting. MD reports N45M in "stuck inventory" to shareholders. Nobody has a plan. The detergent has 8 months of shelf life remaining and is losing value daily.

**Decision trigger:** When warehouse capacity forces a production halt, OR when financing costs on held inventory exceed the loss from discounted liquidation.

#### Why Emeka Has Nothing Today

Emeka has no marketplace to list surplus stock. No price discovery mechanism to know what discount will attract buyers. No verification system to qualify buyers before shipping. No transaction facilitation to reduce counterparty risk. He has a phone and hope.

### Secondary Persona: Tunde — Discount Buyer / Regional Distributor

| Attribute | Detail |
|-----------|--------|
| **Title** | Owner-operator, regional distribution company |
| **Company** | Distributes consumer goods across North-Central or South-South |
| **Revenue** | N30-150M/month |
| **Location** | Abuja, Port Harcourt, or Ibadan |
| **Age** | 35-55 |
| **Buying behavior** | Actively seeks discounted goods for regional distribution at margins mainstream distributors would reject |
| **Tools today** | WhatsApp groups, trade association contacts, factory-gate visits |

#### Why Tunde Has Nothing Today

Tunde would buy Emeka's detergent at 50% of retail price and sell it profitably in Abuja where the product is available but expensive. But Tunde does not know Emeka's detergent exists. He has no way to browse available surplus inventory across Nigerian manufacturers. He relies on word of mouth, which means he sees maybe 5% of available deals. The other 95% either spoil in Emeka's warehouse or get sold to the one contact Emeka happens to know — who is often a middleman adding 20% markup before Tunde ever sees it.

**Decision trigger:** When Tunde's existing supply channels become unreliable or too expensive, and when he discovers StockClear shows him 10x more deals than his current network.

### Tertiary Persona: Ngozi — Trade Finance Analyst

| Attribute | Detail |
|-----------|--------|
| **Title** | Credit Analyst, commercial bank trade finance division |
| **Organization** | Tier-1 Nigerian bank |
| **Need** | Data on manufacturer inventory health, liquidation rates, and distressed asset recovery values |
| **Current access** | Zero — no aggregated data source exists |
| **Willingness to pay** | N5-20M/year for anonymized, aggregated inventory intelligence |

**Decision trigger:** When StockClear's dataset reaches 500+ completed transactions with sector-level analytics.

---

## 4. Problem Deep Dive

### Current Workflow (or Lack Thereof) for Liquidating Surplus Inventory

```
Step 1: Manufacturer recognizes surplus
    → Usually months after the problem starts
    → No system alerts; relies on warehouse manager escalating

Step 2: Contact known buyers
    → Phone calls to 5-10 personal contacts
    → WhatsApp messages to distributors
    → Maybe a post on WhatsApp status
    → Reach: <50 potential buyers

Step 3: Negotiate
    → No price discovery (seller doesn't know market rate for distressed goods)
    → Buyer has all leverage (seller is desperate, buyer knows it)
    → Often settles for 20-30% of cost, barely covering raw materials

Step 4: Transaction
    → No escrow or payment verification
    → Buyer may inspect, reject, or renegotiate on delivery
    → Payment terms are verbal — defaults are common

Step 5: Repeat for next batch
    → Entire process restarts from scratch
    → No record of past buyers, no repeat matching
```

### Failure Points

| Step | What Goes Wrong | Quantified Impact |
|------|-----------------|-------------------|
| 1. Recognition | Delayed by 2-4 months due to hope that sales will recover | Additional N3-12M in financing costs per N100M inventory |
| 2. Buyer reach | <50 buyers contacted vs. 5,000+ potential buyers nationwide | Seller captures 20-40% of achievable price |
| 3. Price discovery | No benchmark for distressed goods pricing | Deals priced 30-50% below what market would bear with competitive bidding |
| 4. Verification | No buyer qualification | 15-25% of attempted transactions fail (payment default, rejection on delivery) |
| 5. Repeat | Zero institutional memory | Every surplus event is ground zero; no efficiency gains |

### The Pull Test

**Strong pull on both sides:**
- **Sellers:** Manufacturers are desperate to convert stuck inventory to cash. They are already making phone calls, posting on WhatsApp, accepting terrible prices. They would pull a tool that gave them access to more buyers and better prices.
- **Buyers:** Discount buyers actively search for deals. They visit factory gates, join trade association WhatsApp groups, ask contacts. They would pull a tool that showed them available surplus across hundreds of manufacturers instead of the few they happen to know.
- **Evidence:** The commercial paper market surged 107% YoY (N1.58T in H1 2025) — manufacturers are so desperate for working capital that they are issuing debt at 15-25%. A platform that helps them liquidate inventory is cash flow relief at zero debt cost.

---

## 5. Solution Overview

### Solution Stages

| Stage | What Happens | Channel | Data Created |
|-------|-------------|---------|-------------|
| 1. Listing | Manufacturer lists surplus: product, quantity, minimum price, photos, expiry (if applicable) | WhatsApp or Web | Inventory type, quantity, sector, location, asking price |
| 2. Discovery | Buyers browse by category, region, price range. Receive WhatsApp alerts for new listings matching preferences | WhatsApp or Web | Buyer demand signals, search patterns, geographic demand |
| 3. Matching | StockClear coordinator connects interested buyer with seller. Shares listing details, facilitates introduction | WhatsApp | Match rate, buyer-seller geography, category demand-supply ratios |
| 4. Negotiation | Buyer and seller negotiate price and terms. StockClear provides pricing benchmarks from historical transactions | WhatsApp (direct, StockClear CC'd) | Negotiation outcomes, price elasticity, discount rates by category |
| 5. Transaction | Buyer inspects goods, payment via Paystack or bank transfer, StockClear takes 5-10% commission | Paystack / Bank | Transaction volume, commission revenue, completion rate, buyer ratings |

### What StockClear Deliberately Sacrifices

- **No automated matching algorithms.** Phase 1 is human-mediated via WhatsApp. A B2B marketplace startup with $5M in funding would build ML matching. StockClear uses a coordinator who understands Nigerian manufacturing and manually connects buyers and sellers. This is "worse" but good enough for a market that has nothing.
- **No integrated logistics.** StockClear does not handle shipping. Buyer and seller arrange pickup/delivery. An enterprise platform would offer end-to-end logistics. StockClear's deliberately manual approach avoids the cost and complexity of building a logistics arm in Phase 1.
- **No escrow (Phase 1).** Transaction security relies on Paystack payment confirmation and a buyer/seller rating system. Full escrow is Phase 2.
- **No inventory management integration.** StockClear does not connect to ERP systems. Listings are manual — the seller types what they have. Integration is Phase 3.

### Improvement Path

- **Phase 1 (Months 1-3):** WhatsApp-mediated matching with web listing interface. Manual coordinator. 5-10% commission.
- **Phase 2 (Months 4-6):** Automated buyer alerts by category. Escrow via Paystack. Seller verification (CAC check). Factory shutdown asset listings. Rating system.
- **Phase 3 (Months 7-12):** Price prediction engine based on historical transactions. Bulk auction functionality. API for ERP integration. Data licensing to banks/insurers. Regional expansion beyond Lagos.

---

## 6. Functional Requirements

### MUST (MVP — Month 1)

### FR1: Seller Listing via WhatsApp
- **Description**: Manufacturer sends surplus inventory details to StockClear WhatsApp business number. Coordinator confirms and publishes listing.
- **Channel**: WhatsApp
- **Inputs**: Product name, category, quantity, unit of measure, minimum acceptable price, location, photos (up to 5), expiry date (if applicable), brief description
- **Outputs**: Confirmation message with listing ID, estimated time to first buyer match
- **Acceptance Criteria**:
  - [ ] Seller sends WhatsApp message and receives acknowledgment within 2 minutes (automated) and listing confirmation within 4 hours (human review)
  - [ ] Listing includes all required fields; coordinator follows up on missing fields within 1 hour
  - [ ] Photos are stored and accessible to buyers via listing link
  - [ ] Listing appears in buyer browse interface within 4 hours of submission

### FR2: Seller Listing via Web Interface
- **Description**: Desktop/web listing form for manufacturers who prefer structured data entry. Supports bulk listing of multiple products.
- **Channel**: Web (Desktop)
- **Inputs**: Same as FR1 plus HS code (optional), bulk upload via CSV template
- **Outputs**: Published listing with unique ID, shareable link, edit/delete controls
- **Acceptance Criteria**:
  - [ ] Web form loads in < 3 seconds on 3G connection
  - [ ] CSV bulk upload processes up to 50 listings in < 30 seconds
  - [ ] Seller can edit or remove listing at any time
  - [ ] Each listing generates a shareable WhatsApp link for the seller to distribute to their own network

### FR3: Buyer Browse & Search
- **Description**: Buyers browse available surplus inventory by category, region, price range. Both WhatsApp-based (receive curated list) and web-based (search/filter interface).
- **Channel**: WhatsApp + Web
- **Inputs**: Category preference, region, price range, keyword search
- **Outputs**: Filtered listing results with product details, photos, seller location, asking price
- **Acceptance Criteria**:
  - [ ] Web search returns results in < 2 seconds with filters for category (10+ categories), region (6 geopolitical zones), and price range
  - [ ] WhatsApp buyers receive a curated daily/weekly digest of new listings matching their preferences
  - [ ] Each listing shows: product name, quantity, price, location, days listed, photo thumbnail
  - [ ] Minimum 10 distinct product categories available at launch (food/beverage, textiles, chemicals, plastics, paper products, metals, machinery, electronics components, building materials, consumer goods)

### FR4: Buyer-Seller Matching
- **Description**: When a buyer expresses interest, StockClear coordinator connects them with the seller via WhatsApp group or direct introduction.
- **Channel**: WhatsApp
- **Inputs**: Buyer interest signal (reply to listing), buyer profile (business name, location, volume interest)
- **Outputs**: WhatsApp group with buyer, seller, and StockClear coordinator. Or direct introduction with StockClear CC'd.
- **Acceptance Criteria**:
  - [ ] Buyer expresses interest and receives seller introduction within 4 hours during business hours (8AM-6PM WAT)
  - [ ] Coordinator shares pricing benchmark from historical data (if available) to both parties
  - [ ] Both parties receive StockClear's transaction terms (commission rate, payment process)

### FR5: Transaction Completion & Commission
- **Description**: When buyer and seller agree on price, payment is processed and StockClear collects commission.
- **Channel**: Paystack + WhatsApp confirmation
- **Inputs**: Agreed price, payment method, delivery/pickup arrangement
- **Outputs**: Payment confirmation, commission deduction, transaction receipt to both parties
- **Acceptance Criteria**:
  - [ ] Paystack payment link generated within 5 minutes of price agreement
  - [ ] Commission (5-10% based on transaction value) automatically calculated and displayed before payment
  - [ ] Both parties receive WhatsApp receipt with transaction details within 1 minute of payment
  - [ ] Commission structure: 10% on transactions < N5M, 7.5% on N5-20M, 5% on > N20M

### FR6: Seller Dashboard (Web)
- **Description**: Web dashboard showing all active listings, views, inquiries, completed transactions, and total revenue recovered.
- **Channel**: Web (Desktop)
- **Inputs**: Seller login (email + OTP)
- **Outputs**: Dashboard with listing performance, inquiry count, transaction history, revenue summary
- **Acceptance Criteria**:
  - [ ] Dashboard loads in < 3 seconds
  - [ ] Shows total inventory value listed, total recovered, and recovery rate percentage
  - [ ] Each listing shows view count, inquiry count, and days since listing
  - [ ] Excel export of all transaction history available in 1 click

### FR7: Buyer Registration & Preferences
- **Description**: Buyers register via WhatsApp or web with their purchasing preferences to receive relevant listing alerts.
- **Channel**: WhatsApp + Web
- **Inputs**: Business name, location, categories of interest, budget range, frequency preference (daily/weekly digest)
- **Outputs**: Personalized listing alerts via WhatsApp
- **Acceptance Criteria**:
  - [ ] Registration completes in < 3 minutes via WhatsApp (structured conversation flow)
  - [ ] Buyer receives first matching listings within 24 hours of registration
  - [ ] Buyer can update preferences at any time via WhatsApp command or web interface
  - [ ] Unsubscribe available in every digest message

### SHOULD (Month 2)

### FR8: Factory Shutdown Asset Listings
- **Description**: Dedicated listing category for distressed factory assets — equipment, customer lists, supplier relationships, trained staff availability.
- **Channel**: Web + WhatsApp
- **Inputs**: Asset type (equipment, customer list, supplier contracts, trained workforce), description, condition, asking price, factory closure context
- **Outputs**: Published listing in "Factory Assets" category with enhanced detail fields
- **Acceptance Criteria**:
  - [ ] Factory asset listings include equipment condition rating (1-5), original purchase price, age, and maintenance history
  - [ ] Customer list listings include sector, number of accounts, and geographic coverage (no individual customer data exposed until transaction)
  - [ ] Listings can include video walkthroughs (WhatsApp video upload)

### FR9: Seller Verification
- **Description**: Basic verification of seller identity via CAC registration check and phone number verification.
- **Channel**: Web
- **Inputs**: CAC registration number, business phone, director name
- **Outputs**: "Verified Seller" badge on listings
- **Acceptance Criteria**:
  - [ ] CAC verification completes within 24 hours
  - [ ] Verified sellers receive a visible badge on all listings
  - [ ] Unverified sellers can still list but listings display "Unverified" label

### FR10: Buyer-Seller Rating System
- **Description**: After transaction completion, both parties rate each other (1-5 stars + optional comment). Ratings visible on future listings and bids.
- **Channel**: WhatsApp + Web
- **Inputs**: Star rating (1-5), optional text comment
- **Outputs**: Average rating displayed on seller/buyer profile
- **Acceptance Criteria**:
  - [ ] Rating prompt sent via WhatsApp 48 hours after transaction completion
  - [ ] Minimum 3 ratings before average is displayed publicly
  - [ ] Ratings cannot be edited after submission

### COULD (Month 3+)

### FR11: Auction/Bidding Functionality
- **Description**: Sellers can list surplus for competitive bidding. Multiple buyers submit bids over a defined period. Highest bid wins.
- **Channel**: Web
- **Acceptance Criteria**:
  - [ ] Auction duration configurable (24h, 48h, 72h, 7 days)
  - [ ] Minimum 3 bids required for auction to complete; otherwise reverts to direct negotiation
  - [ ] Real-time bid updates visible to all registered bidders

### FR12: Price Prediction Engine
- **Description**: Based on historical transaction data, suggests optimal listing price for sellers and expected clearing price for buyers.
- **Channel**: Web
- **Acceptance Criteria**:
  - [ ] Price suggestion available for categories with 20+ historical transactions
  - [ ] Displays price range (25th-75th percentile) and average clearing discount vs. retail

### FR13: Escrow Service
- **Description**: For transactions above N5M, StockClear holds payment in escrow until buyer confirms receipt and quality.
- **Channel**: Paystack + Web
- **Acceptance Criteria**:
  - [ ] Escrow release within 48 hours of buyer confirmation
  - [ ] Dispute resolution process documented and accessible via WhatsApp

### WON'T (Explicit Exclusions)

- **Logistics/delivery:** StockClear does not arrange shipping or delivery. Buyer and seller handle logistics. Rationale: logistics infrastructure adds massive cost and complexity. The marketplace alone creates enough value.
- **Inventory management SaaS:** StockClear is not an ERP or inventory system. It is a liquidation marketplace. Rationale: different product, different buyer, different build effort.
- **Consumer-facing marketplace:** StockClear is B2B only. No retail consumers. Rationale: B2C surplus creates different trust, returns, and support requirements.
- **Cross-border trade:** Phase 1 is Nigeria-only. West African expansion is Phase 3+. Rationale: customs, FX, and logistics complexity across borders.

---

## 7. Non-Functional Requirements

### NFR1: Performance
- Web listing page loads in < 3 seconds on 3G connection
- Search results return in < 2 seconds for up to 10,000 active listings
- WhatsApp webhook processes inbound messages in < 2 seconds
- Paystack payment link generation in < 5 seconds
- CSV bulk upload processes 50 listings in < 30 seconds

### NFR2: Offline/Low-Bandwidth
- Web listing interface uses SSR for fast first paint (< 200KB initial load)
- Listing photos compressed to < 100KB each (auto-compression on upload)
- Buyer browse interface works on 3G with lazy-loaded images
- WhatsApp channel works natively offline (messages queue and deliver when connection restores)
- Seller dashboard caches last-known data in IndexedDB; syncs on reconnect

### NFR3: Security
- Seller and buyer authentication via OTP (Supabase Auth)
- Paystack PCI-DSS compliance for payment processing
- Seller contact information hidden until buyer-seller match is confirmed (anti-spam)
- No individual transaction data exposed in aggregate analytics
- Row Level Security (Supabase) ensures sellers see only their own listings and transactions

### NFR4: Scalability
- System supports 10,000 concurrent active listings without degradation
- Database designed for 100,000+ historical transactions
- WhatsApp message queue handles 5,000+ daily messages
- Coordinator workflow scales via multiple coordinators with territory assignment

### NFR5: Accessibility
- WhatsApp channel accessible to all 138.7M mobile connections (including 2G)
- Web interface functional on Android mid-range devices (Chrome)
- USSD status check for listing status (Africa's Talking): seller dials code, enters listing ID, sees view count and inquiry count
- All monetary amounts in NGN with USD equivalent in small text

### NFR6: Regional
- Listings tagged by geopolitical zone (South-West, South-East, South-South, North-Central, North-West, North-East)
- Buyer digest filtered by region preference
- Interface in English (Pidgin support for WhatsApp coordinator conversations where appropriate)

---

## 8. Key Screens & UX

### Screen 1: Buyer Browse Interface (Web — Home)

```
+----------------------------------------------+
|  StockClear        [Register] [Sell Surplus]  |
+----------------------------------------------+
|                                               |
|  Available Surplus: 342 listings              |
|  Total Value: N 1.24B at asking price         |
|  ───────────────────────────────────────────  |
|                                               |
|  [Filter by:]                                 |
|  Category: [All ▼]  Region: [All ▼]          |
|  Price: [Min] — [Max]  Sort: [Newest ▼]      |
|                                               |
|  ── FEATURED LISTINGS ─────────────────────  |
|                                               |
|  [img] Detergent Powder (5,000 cartons)       |
|        Lagos | N22.5M (45% off retail)        |
|        Listed 3 days ago | 12 views           |
|        Seller: ★★★★☆ (Verified)              |
|        [View Details] [Express Interest]      |
|                                               |
|  [img] Plastic Bottles — PET 500ml (200K pcs) |
|        Ogun | N8.4M (50% off retail)          |
|        Listed 1 day ago | 28 views            |
|        Seller: New (Verified)                 |
|        [View Details] [Express Interest]      |
|                                               |
|  [img] Industrial Sewing Machines (15 units)  |
|        Lagos | N4.2M — FACTORY SHUTDOWN       |
|        Listed 5 days ago | 45 views           |
|        Seller: ★★★★★ (Verified)              |
|        [View Details] [Express Interest]      |
|                                               |
|  ── [Load More] ──                            |
|                                               |
|  [Export Listing Data to Excel]               |
+----------------------------------------------+
```

### Screen 2: Listing Detail Page

```
+----------------------------------------------+
|  StockClear > Listing #SC-2026-0142           |
+----------------------------------------------+
|                                               |
|  Detergent Powder — CleanMax Brand            |
|  Category: Consumer Goods / Cleaning          |
|                                               |
|  [Photo 1] [Photo 2] [Photo 3]               |
|                                               |
|  Quantity: 5,000 cartons (24 pcs/carton)      |
|  Asking Price: N22,500,000                    |
|  Retail Value: N41,000,000                    |
|  Discount: 45% off retail                     |
|  Expiry: Sep 2026 (6 months remaining)        |
|                                               |
|  Location: Ikeja, Lagos                       |
|  Pickup: Seller warehouse                     |
|                                               |
|  Seller: Apex Consumer Products Ltd           |
|  Rating: ★★★★☆ (4.2 / 8 transactions)       |
|  Verified: ✓ CAC Registered                   |
|  Member since: Jan 2026                       |
|                                               |
|  ── SIMILAR COMPLETED TRANSACTIONS ────────  |
|  Detergent (bulk): avg 42% discount           |
|  Typical clearing time: 5-8 days              |
|                                               |
|  [Express Interest via WhatsApp]              |
|  [Share Listing]  [Save for Later]            |
+----------------------------------------------+
```

### Screen 3: Seller Dashboard

```
+----------------------------------------------+
|  StockClear — Seller Dashboard     Apex Ltd   |
+----------------------------------------------+
|                                               |
|  Total Listed: N 68.4M (8 listings)           |
|  Total Recovered: N 31.2M (4 transactions)    |
|  Recovery Rate: 45.6%                         |
|  Active Listings: 4 | Inquiries Pending: 6    |
|  ───────────────────────────────────────────  |
|                                               |
|  ── ACTIVE LISTINGS ──────────────────────── |
|  Listing         | Asking   | Views | Inquiries|
|  Detergent 5K ct | N22.5M   | 12    | 3        |
|  Packaging film  | N8.1M    | 8     | 1        |
|  Carton boxes    | N3.4M    | 22    | 2        |
|  Label stock     | N1.8M    | 5     | 0        |
|                                               |
|  ── COMPLETED ─────────────────────────────  |
|  Plastic bottles | Listed N16M | Sold N12.8M  |
|  Soap base       | Listed N8M  | Sold N5.6M   |
|  ...                                          |
|                                               |
|  [+ New Listing]  [Export to Excel]           |
+----------------------------------------------+
```

### Screen 4: WhatsApp Listing Flow (Seller)

```
Seller sends WhatsApp to StockClear:
──────────────────────────────────────
"I have 5,000 cartons of CleanMax detergent
to sell. Expiry September 2026. Asking N22.5M.
I am in Ikeja Lagos."

StockClear Bot (auto-reply):
──────────────────────────────────────
Thanks for listing with StockClear! Let me
confirm your details:

Product: Detergent (CleanMax)
Quantity: 5,000 cartons
Asking Price: N22,500,000
Location: Ikeja, Lagos
Expiry: Sep 2026

Please send:
1. Category (reply number):
   1=Food 2=Beverage 3=Cleaning
   4=Textiles 5=Plastics 6=Chemicals
   7=Machinery 8=Electronics 9=Other

2. Up to 5 photos of the goods

──────────────────────────────────────
Seller replies: "3"
[Sends 3 photos]

StockClear Bot:
──────────────────────────────────────
✓ Listing #SC-2026-0142 received!

Our team will review and publish within
4 hours. You'll receive a notification
when the first buyer expresses interest.

Current buyers looking for Cleaning products
in Lagos: 23 registered.

Questions? Reply anytime.
```

### Screen 5: WhatsApp Buyer Alert

```
StockClear Bot (to registered buyer):
──────────────────────────────────────
New listings matching your preferences:

1. Detergent — 5,000 cartons — N22.5M
   Ikeja, Lagos | 45% off retail
   Expires Sep 2026

2. Soap bars — 10,000 units — N4.8M
   Agbara, Ogun | 38% off retail
   Expires Dec 2026

3. FACTORY SHUTDOWN: Industrial mixers
   (3 units) — N6.2M
   Ikeja, Lagos | 60% off replacement cost

Reply with listing number to express
interest. Example: "1" to inquire about
the detergent.

Browse all 342 listings: stockclear.ng
```

---

## 9. Technical Architecture

### Stack Table

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14+ (App Router) | SSR for fast load on 3G, desktop-optimized listing/browse interface |
| Language | TypeScript (strict) | Type safety for transaction and financial logic |
| Database | PostgreSQL via Supabase | Free tier, auth included, RLS for seller data isolation |
| ORM | Prisma | Type-safe queries, migration management |
| Hosting | Vercel | Free tier for MVP, Nigerian CDN edge |
| Auth | Supabase Auth (email + OTP) | Phone OTP for Nigerian users via Termii |
| Payments | Paystack | NGN-native, commission split support |
| WhatsApp | Termii WhatsApp Business API | Listing intake, buyer alerts, matching coordination |
| SMS | Termii | Fallback for WhatsApp, OTP delivery |
| USSD | Africa's Talking | Listing status check for sellers on 2G |
| File Storage | Supabase Storage | Listing photos (compressed) |
| Email | Resend | Transaction receipts, seller reports |
| Analytics | PostHog (free tier) | Listing → inquiry → transaction funnel |

### Database Schema (Core Tables)

```sql
-- Sellers (manufacturers/factories)
sellers (
  id UUID PRIMARY KEY,
  business_name VARCHAR NOT NULL,
  cac_number VARCHAR,
  contact_name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  email VARCHAR,
  whatsapp VARCHAR,
  location_state VARCHAR,
  location_city VARCHAR,
  industry VARCHAR,
  verified BOOLEAN DEFAULT false,
  rating_avg FLOAT,
  rating_count INTEGER DEFAULT 0,
  total_listed_value NUMERIC DEFAULT 0,
  total_recovered_value NUMERIC DEFAULT 0,
  user_id UUID REFERENCES auth.users,
  created_at TIMESTAMP
)

-- Buyers (distributors/traders)
buyers (
  id UUID PRIMARY KEY,
  business_name VARCHAR NOT NULL,
  contact_name VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  email VARCHAR,
  whatsapp VARCHAR,
  location_state VARCHAR,
  preferred_categories TEXT[],
  preferred_regions TEXT[],
  budget_min NUMERIC,
  budget_max NUMERIC,
  alert_frequency VARCHAR DEFAULT 'weekly', -- daily, weekly
  rating_avg FLOAT,
  rating_count INTEGER DEFAULT 0,
  user_id UUID REFERENCES auth.users,
  created_at TIMESTAMP
)

-- Listings
listings (
  id UUID PRIMARY KEY,
  listing_number VARCHAR UNIQUE NOT NULL, -- SC-2026-XXXX
  seller_id UUID REFERENCES sellers,
  title VARCHAR NOT NULL,
  description TEXT,
  category VARCHAR NOT NULL,
  subcategory VARCHAR,
  quantity NUMERIC NOT NULL,
  unit_of_measure VARCHAR NOT NULL,
  asking_price NUMERIC NOT NULL,
  retail_value NUMERIC, -- for discount calculation
  discount_pct FLOAT, -- calculated
  location_state VARCHAR NOT NULL,
  location_city VARCHAR,
  expiry_date DATE, -- for perishable goods
  listing_type VARCHAR DEFAULT 'surplus', -- surplus, factory_shutdown
  photos TEXT[], -- array of storage URLs
  status VARCHAR DEFAULT 'pending', -- pending, active, matched, sold, expired, withdrawn
  view_count INTEGER DEFAULT 0,
  inquiry_count INTEGER DEFAULT 0,
  source_channel VARCHAR, -- whatsapp, web
  created_at TIMESTAMP,
  updated_at TIMESTAMP
)

-- Inquiries (buyer interest)
inquiries (
  id UUID PRIMARY KEY,
  listing_id UUID REFERENCES listings,
  buyer_id UUID REFERENCES buyers,
  message TEXT,
  offered_price NUMERIC, -- if buyer includes an offer
  status VARCHAR DEFAULT 'pending', -- pending, connected, declined, completed
  source_channel VARCHAR, -- whatsapp, web
  created_at TIMESTAMP
)

-- Transactions
transactions (
  id UUID PRIMARY KEY,
  listing_id UUID REFERENCES listings,
  seller_id UUID REFERENCES sellers,
  buyer_id UUID REFERENCES buyers,
  agreed_price NUMERIC NOT NULL,
  commission_rate FLOAT NOT NULL, -- 0.05-0.10
  commission_amount NUMERIC NOT NULL,
  payment_status VARCHAR DEFAULT 'pending', -- pending, paid, confirmed, disputed
  paystack_reference VARCHAR,
  completed_at TIMESTAMP,
  created_at TIMESTAMP
)

-- Ratings
ratings (
  id UUID PRIMARY KEY,
  transaction_id UUID REFERENCES transactions,
  rater_id UUID, -- seller or buyer user_id
  ratee_id UUID,
  rater_type VARCHAR, -- seller, buyer
  stars INTEGER CHECK (stars BETWEEN 1 AND 5),
  comment TEXT,
  created_at TIMESTAMP
)

-- Market intelligence (aggregate, anonymized)
market_intelligence (
  id UUID PRIMARY KEY,
  period_start DATE,
  period_end DATE,
  category VARCHAR,
  region VARCHAR,
  listings_count INTEGER,
  transactions_count INTEGER,
  avg_discount_pct FLOAT,
  avg_days_to_sale FLOAT,
  total_volume NUMERIC,
  created_at TIMESTAMP
)
```

### Integration Architecture

```
Seller (WhatsApp)              Seller (Web)
       |                            |
       v                            v
  Termii API ──webhook──> Next.js API Routes
                                    |
                          Supabase PostgreSQL
                                    |
                     ┌──────────────┼──────────────┐
                     v              v              v
              Buyer Alerts    Seller Dashboard  Market Data
              (Termii WA)    (Next.js SSR)     (Aggregate)
                     |
                     v
              Buyer (WhatsApp)     Buyer (Web)
                     |                  |
                     v                  v
              Express Interest ──> Coordinator Matching
                                       |
                                       v
                              WhatsApp Group / Intro
                                       |
                                       v
                              Paystack Payment
                                       |
                                       v
                              Commission Collection
```

### Offline Architecture

- Seller dashboard caches listing data in IndexedDB
- New listings created offline queue in localStorage, sync on reconnect
- Buyer browse results cached for offline review (last 50 listings)
- WhatsApp channel inherently handles offline (messages queue in WhatsApp)
- PWA manifest for homescreen installation

### WhatsApp Webhook Flow

```
Inbound message → Termii Webhook → /api/whatsapp/webhook
  → Parse: Is this a new listing or an inquiry?
  → If new listing: extract product details, create pending listing,
    request missing fields
  → If inquiry: match to listing number, create inquiry record,
    notify coordinator
  → If status check: return listing status and inquiry count
```

---

## 10. Data Asset Strategy

### What Data StockClear Creates That Didn't Exist Before

1. **Manufacturer inventory health signals.** Which sectors have surplus, how much, how long it sits, and at what discount it eventually clears. No aggregate dataset on Nigerian manufacturer inventory health exists.
2. **Distressed goods price elasticity.** What discount rate clears goods in 7 days vs. 30 days vs. never? This pricing intelligence is valuable for inventory insurance, trade finance, and manufacturing strategy.
3. **Factory closure asset recovery data.** What are shut-down factory assets worth? What percentage of original value is recoverable? How long does liquidation take?
4. **Geographic demand-supply mapping.** Where is surplus concentrated (Lagos) vs. where is demand (Abuja, Port Harcourt, Aba)? This reveals arbitrage opportunities and distribution gaps.
5. **Sector-level distress indicators.** Rising surplus in a sector (e.g., textiles up 200% in 3 months) is an early warning of sectoral decline — visible in StockClear data before it appears in official statistics.

### Cross-Product Data Flows

| StockClear Data | Receiving Product | How It's Used |
|----------------|-------------------|---------------|
| Manufacturer inventory health | VendorScore | Credit risk signal — rising surplus = declining business health |
| Transaction completion rates | VendorScore | Payment reliability signal for buyers and sellers |
| Category-level distress | BuildTrack | Input cost forecasting (surplus materials = cheaper inputs) |
| Factory shutdown patterns | PortPulse | Import demand forecasting (factory closures = fewer imports) |
| Discount pricing data | InsureMatch | Inventory insurance valuation — what is distressed inventory actually worth? |

### Who Would License This Data

| Buyer | Data Product | Estimated Price |
|-------|-------------|-----------------|
| Commercial banks | Manufacturer inventory health reports (sector-level) | N5-15M/year per bank |
| Trade finance providers | Inventory valuation benchmarks for collateral assessment | N3-10M/year |
| Insurance companies | Distressed inventory valuation data for inventory insurance pricing | N5-20M/year |
| MAN / LCCI | Sectoral surplus analytics for policy advocacy | N2-5M/year |
| Development agencies (World Bank) | Manufacturing sector health indicators | N5-10M/contract |

### Privacy/Anonymization

- Individual seller inventory data is private — visible only to the seller and matched buyers.
- Aggregate data (sector-level surplus trends, average discount rates, category clearing times) is anonymized and licensable.
- No individual transaction prices exposed in aggregate reports.
- Seller can opt out of aggregate data inclusion (though few will, as it is anonymized).

---

## 11. Value Chain Design

### Infrastructure This Product Builds

StockClear builds the first B2B surplus liquidation infrastructure in Nigeria. This includes:
1. **A buyer-seller matching network** that connects manufacturers with discount distributors across regions — a network that does not exist today.
2. **A price discovery mechanism** for distressed goods — no benchmark exists for what surplus Nigerian manufacturer inventory is worth.
3. **A transaction facilitation layer** with verification, rating, and payment processing for B2B surplus deals.
4. **A distressed asset recovery channel** for the 767+ factories that close each year.

### Four Pillars Assessment

| Pillar | Application |
|--------|------------|
| **Resource Commitment** | Investment in coordinator network, WhatsApp automation, verification systems. Modest financial investment but significant operational investment in building buyer-seller trust. |
| **Cross-Market Knowledge Transfer** | B2B surplus marketplaces exist globally (Liquidation.com, B-Stock in the US) but none in Nigeria or West Africa. The transferable insight is that distressed inventory has predictable clearing dynamics — the specifics (categories, channels, trust mechanisms) must be adapted. |
| **Value-Chain Coordination** | StockClear coordinates sellers (manufacturers), buyers (distributors), and transaction processing (Paystack) in a chain that previously had no coordinator. The coordinator role is the value chain innovation. |
| **Transferability** | The matching infrastructure built for surplus inventory can serve factory shutdown assets, returned goods, end-of-season clearance, and eventually cross-border surplus trade across ECOWAS. |

### Externalities

- **Working capital recovery.** Every N1B in surplus liquidated frees N1B in trapped working capital for manufacturers to redeploy into production or debt service.
- **Factory closure softening.** A structured asset liquidation channel makes factory closure less catastrophic — assets are recovered instead of abandoned.
- **Regional price arbitrage efficiency.** Surplus in Lagos becomes supply in Abuja, reducing price distortions across regions.
- **Employment preservation.** Manufacturers who can liquidate surplus and free working capital are less likely to close entirely — indirectly preserving jobs.

### How This Infrastructure Serves Other Products

- **VendorScore** uses StockClear transaction data as a credit signal.
- **InsureMatch** uses distressed inventory valuation data for insurance pricing.
- **PortPulse** can anticipate import demand shifts based on factory closure patterns from StockClear.
- **BuildTrack** benefits from surplus building material pricing data.

---

## 12. Pricing & Unit Economics

### Pricing Tiers

| Tier | Price | Target | Features |
|------|-------|--------|----------|
| **Free Listing** | N0 | Any manufacturer with surplus | List up to 3 items/month via WhatsApp. StockClear matches manually. Commission only on completed transactions. |
| **Seller Pro** | N25,000/month (~$16) | Regular surplus generators | Unlimited listings, web dashboard, priority matching, seller analytics, bulk CSV upload, verified badge processing |
| **Buyer Pro** | N15,000/month (~$10) | Active discount buyers | Daily alerts (vs. weekly), priority access to new listings, saved search filters, transaction history dashboard |
| **Commission** | 5-10% per transaction | All users | 10% on < N5M, 7.5% on N5-20M, 5% on > N20M. Applied to completed transactions only. |

### Unit Economics

| Metric | Value |
|--------|-------|
| **Average transaction value (estimated)** | N5-15M |
| **Average commission per transaction** | N375K-1.125M (7.5% avg) |
| **Coordinator cost per transaction** | N50-100K (human coordinator time at N300K/month handling 5-8 transactions) |
| **Infrastructure cost per month** | $70-150 (Vercel, Supabase, Termii, Africa's Talking) |
| **Gross margin per transaction** | 85-92% |
| **Break-even** | 2 completed transactions per month covers all infrastructure costs |

### Revenue Targets

| Milestone | Transactions/Month | Avg Value | Commission Revenue | Subscription Revenue | Total MRR |
|-----------|:------------------:|:---------:|:------------------:|:-------------------:|:---------:|
| Month 3 | 10 | N8M | N600K | N100K | N700K |
| Month 6 | 30 | N10M | N2.25M | N400K | N2.65M |
| Month 12 | 80 | N12M | N7.2M | N1.2M | N8.4M |
| Month 18 | 150 | N15M | N16.9M | N3M | N19.9M |
| Month 24 | 250 | N15M | N28.1M | N5M | N33.1M |

### Break-Even Analysis

Infrastructure costs: ~N115K/month ($75). Coordinator salary: ~N300K/month. Total fixed costs: ~N415K/month. At N375K average commission per transaction, StockClear breaks even at 2 transactions per month. This is achievable by Week 4.

### Cost Structure Test

StockClear's cost structure is fundamentally different from any conceivable incumbent:
- **No inventory holding costs** — StockClear never takes possession of goods.
- **No logistics costs** — buyer and seller handle their own delivery.
- **Near-zero marginal cost per listing** — WhatsApp message + database row.
- **Human coordination is the primary cost** — and it creates trust and deal quality that automated matching cannot replicate in a low-trust market.
- A funded competitor trying to build the same thing with enterprise sales teams, warehousing, and logistics integration would have 10-20x the cost structure. They would need to charge higher commissions, which would suppress transaction volume.

---

## 13. Go-to-Market: First 10 Customers

### Channel Strategy (Ranked by Disruption Alignment)

| # | Channel | Target | Expected Volume | Conversion | Approach |
|---|---------|--------|:---------------:|:----------:|----------|
| 1 | **WhatsApp groups — MAN chapters** | Manufacturers with surplus | 500+ members across Lagos/Ogun chapters | 2-4 sellers | Join/post in MAN WhatsApp groups: "Any surplus inventory you need to move? StockClear connects you with discount buyers in 48 hours. Free to list. WhatsApp us: [number]" |
| 2 | **Factory gate visits (family network)** | Port Harcourt/Rivers manufacturers | 10-15 factory visits | 3-5 sellers | Personal visits via family contacts. "Let me see your warehouse. I bet you have stock sitting there that I can find a buyer for." |
| 3 | **Trade association events** | MAN, NACCIMA, LCCI events | 50-100 attendees per event | 2-3 sellers per event | Brief presentation: "N2.14T in stranded inventory. We help you recover cash. 5 minutes to list." |
| 4 | **Discount buyer WhatsApp groups** | Regional distributors in Abuja, PH, Ibadan | 200+ members per group | 5-10 buyers | "Looking for bulk deals on branded goods at 30-50% off? StockClear sends you new listings every week. Free to join: [link]" |
| 5 | **LinkedIn outreach** | Operations managers, MDs of manufacturing companies | 100 messages | 5-8 responses, 2-3 sellers | "Your company has surplus inventory. Every month it sits costs you N[X]M in financing. I can connect you with buyers in 48 hours." |

### Cross-Sell from Existing Mentaat Products

- **PortPulse users** are importers who may also be manufacturers with surplus domestic production. "You import raw materials through PortPulse — do you also have finished goods sitting in your warehouse?"
- **BuildTrack users** who track construction material costs may be interested in discounted surplus building materials.

### First 10 Sellers — Acquisition Plan

1. **Sellers 1-3:** Family network in Port Harcourt. Personal factory visits. Direct WhatsApp relationship.
2. **Sellers 4-6:** MAN Lagos chapter contacts. WhatsApp group outreach. Offer to list their first 3 items free with guaranteed buyer matching within 7 days.
3. **Sellers 7-10:** LCCI/NACCIMA event contacts. LinkedIn follow-up with demurrage-style cost calculator: "Enter your surplus inventory value and months held — see how much it's costing you."

### First 10 Buyers — Acquisition Plan

1. **Buyers 1-5:** Regional distributors identified through trade association contacts. "We have [specific product] at 40% off. Want first look?"
2. **Buyers 6-10:** Discount buyers in Aba/Onitsha markets (South-East manufacturing clusters). WhatsApp outreach through family network: "Factory surplus from Lagos — branded goods at wholesale-minus pricing."

---

## 14. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **Trust deficit** — sellers and buyers don't trust a new platform to mediate N5-20M transactions | High | Critical | Start with small transactions (< N5M). Build rating system quickly. CAC verification for sellers. Paystack payment creates paper trail. WhatsApp coordinator builds personal relationship with early users. Family network provides initial trust anchoring. |
| 2 | **Disintermediation** — after StockClear introduces buyer and seller, they transact directly next time, bypassing commission | High | High | Accept that some disintermediation will happen — it's the cost of marketplace business. Mitigate by: (1) continuously adding new buyers/sellers so both sides need StockClear for discovery, (2) offering escrow and payment facilitation that adds genuine value, (3) building rating/reputation systems that only exist on-platform, (4) volume discounts on commission for repeat users. |
| 3 | **Data quality** — sellers misrepresent inventory quality, quantity, or condition | Medium | High | Photo requirements for all listings. Buyer rating system flags sellers who misrepresent. Verified seller badge incentivizes honest listing. Coordinator inspection for high-value listings (> N20M). Dispute resolution process with clear consequences (listing removal for repeated misrepresentation). |
| 4 | **Low liquidity (chicken-and-egg)** — not enough sellers attracts no buyers; no buyers discourages sellers | High | Critical | Seed the supply side first — 20 sellers before launching buyer side. Guarantee sellers: "We will find you a buyer within 14 days or we extend your listing free." Curate initial listings to ensure quality. Start with food/beverage (highest capacity utilization, most surplus, most urgency due to expiry). |
| 5 | **Competition from informal channels** — existing WhatsApp groups and trade association networks handle surplus informally | Medium | Medium | StockClear offers 10-100x the buyer reach of any individual WhatsApp group. Price discovery (historical transaction data) adds value informal channels cannot provide. Verification reduces fraud risk. Position as enhancement to existing networks, not replacement: "Share your StockClear listing in your WhatsApp groups for even more reach." |
| 6 | **Payment fraud** — buyer pays, goods not delivered; or seller ships, payment reversed | Medium | High | Paystack payment confirmation required before seller releases goods. Escrow for transactions > N5M (Phase 2). Rating system creates accountability. WhatsApp transaction trail provides evidence for disputes. Start with local transactions (same-city pickup) to reduce delivery fraud risk. |
| 7 | **Regulatory risk** — FCCPC (consumer protection) or NAFDAC (for food products) scrutiny on resold goods | Low | Medium | StockClear is B2B — not consumer-facing. All listed goods were legally manufactured and have valid NAFDAC numbers (where applicable). StockClear does not modify goods — just facilitates transfer of ownership between businesses. Maintain documentation trail for compliance. |
| 8 | **Coordinator bottleneck** — human-mediated matching doesn't scale beyond 50 transactions/month with one coordinator | Medium | Medium | Hire additional coordinators at N300K/month as volume grows. Each coordinator handles 5-8 transactions/month and 30-50 active listings. By Month 6, 2-3 coordinators needed. Automate routine matching (buyer preference → listing alert) in Phase 2 to reduce coordinator load to complex negotiations only. |
| 9 | **Currency risk** — naira depreciation changes the economics of discount buying | Medium | Low | StockClear operates entirely in NGN. Currency risk is borne by buyers and sellers, not the platform. Actually, naira depreciation increases surplus (imports become more expensive, domestic sales decline) — which grows StockClear's supply side. |
| 10 | **Connectivity** — web interface inaccessible during frequent internet outages | Medium | Medium | WhatsApp is primary channel — works on 2G, handles offline queuing natively. Web interface is secondary. USSD status check for sellers on basic phones. Critical flows (listing, inquiry, transaction confirmation) all work via WhatsApp without web access. |

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based.** Cannot physically visit factories or coordinate in-person. Coordinator must be hired locally (remote management via WhatsApp).
- **$0-5K budget.** Infrastructure costs covered (~$75-150/month). First coordinator hire (~N300K/month = ~$195) is the primary cost. Must generate commission revenue within 6 weeks to sustain.
- **Bootstrapped.** No external funding. Revenue must cover costs from early months.
- **Tech stack fixed.** Next.js, Supabase, Vercel, Termii, Paystack, Africa's Talking. No deviation.
- **No physical operations.** StockClear never takes possession of goods, never arranges logistics, never warehouses inventory.

### Assumptions (Each Testable)

| Assumption | Test |
|-----------|------|
| Manufacturers will list surplus via WhatsApp | Onboard 5 sellers in Week 1 via direct outreach |
| Discount buyers exist in sufficient numbers | Register 20 buyers in Week 2 via trade association WhatsApp groups |
| 5-10% commission is acceptable | First 3 transactions complete without commission pushback |
| Human coordinator matching creates trust that automated matching cannot | Survey first 10 users: "Would you have completed this transaction with an automated system?" |
| Average transaction value is N5-15M | Track first 20 transactions and calculate actual average |
| Sellers return for repeat listings | 30% of Month 1 sellers list again in Month 2 |
| Factory shutdown assets can share the same marketplace | First 5 factory asset listings generate inquiries within 14 days |

### Out of Scope

| Exclusion | Rationale |
|-----------|-----------|
| Logistics/delivery coordination | Adds massive cost and complexity. Buyer and seller handle their own logistics. Phase 3+ consideration. |
| Consumer (B2C) surplus sales | Different trust model, returns requirements, and support burden. B2B only. |
| Inventory management SaaS | Different product entirely. StockClear is a marketplace, not an ERP. |
| Cross-border surplus trade | Customs, FX, and regulatory complexity. Nigeria-only for Phase 1. |
| Manufacturing/production optimization | StockClear solves the output problem (unsold goods), not the input problem (production efficiency). |
| Financing/lending on surplus inventory | Phase 3+ consideration. Requires credit assessment capability and banking partnerships. |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] 5 sellers have listed surplus inventory via WhatsApp
- [ ] 10 buyers have registered with category preferences
- [ ] 1 completed transaction with commission collected via Paystack
- [ ] Web listing interface loads in < 3 seconds on 3G
- [ ] WhatsApp bot correctly processes listing submissions with < 5% error rate
- [ ] Seller dashboard displays accurate listing performance data

### Success Metrics (3 Months Post-Launch)

- [ ] 50 completed transactions with total volume > N400M
- [ ] N500K+ MRR from commissions + subscriptions
- [ ] 20 active sellers listing regularly (2+ listings in last 30 days)
- [ ] 100 registered buyers with active preference profiles
- [ ] Average time from listing to first inquiry: < 7 days
- [ ] Transaction completion rate (inquiry → payment): > 25%
- [ ] 500+ unique listings in database (data asset milestone)
- [ ] Net Promoter Score from sellers: > 40

---

## 17. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|:---:|-----------|
| **Build Speed** | 8 | Core is listing CRUD + WhatsApp integration (Termii webhook) + Paystack payment links. Desktop browse interface is standard search/filter. Human coordinator handles matching in Phase 1 — no ML needed. 2-3 weeks to MVP. |
| **Time to Revenue** | 7 | Commission on first transaction generates revenue. If first 5 sellers list in Week 1 and first buyer match happens in Week 2, revenue by Week 3-4. Faster than subscription products because revenue comes per-transaction, not per-subscriber. |
| **Market Size** | 8 | N2.14T in stranded inventory. Even 0.1% = N2.14B transaction volume = N160-214M in commissions. Factory shutdown assets add N38-383B. The market is enormous and growing (more surplus every quarter as capacity utilization declines). |
| **Competition** | 9 | No B2B surplus liquidation marketplace exists in Nigeria. Jiji is C2C. TradeDepot is primary distribution. LinkedIn is unstructured. Total whitespace. |
| **Skill Fit** | 5 | Phase 1 is CRUD + WhatsApp integration — underutilizes AI/ML skills. Phase 2+ price prediction and demand matching leverage data science. The data asset strategy (sector distress signals) is the highest skill-fit element. |
| **Capital Required** | 9 | ~$75-150/month infrastructure. Primary cost is coordinator hire (~$195/month). Commission revenue from 2 transactions covers all costs. Bootstrappable with < $1K. |
| **Buyer Clarity** | 7 | Can identify manufacturers through MAN directories and family network. Can identify discount buyers through trade association WhatsApp groups. Not as precise as PortPulse (ANLCA directory), but strong enough. Can name 15 manufacturers and 20 distributors to contact this week. |
| **Fintech Upside** | 6 | Inventory-backed lending (use surplus as collateral), supply chain finance (verified transactions as credit signals), trade credit insurance — all are Phase 3+ extensions. Not as direct as PortPulse's trade finance angle, but meaningful. |

### Weighted Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Build Speed | 5% | 8 | 0.40 |
| Time to Revenue | 15% | 7 | 1.05 |
| Market Size | 15% | 8 | 1.20 |
| Competition | 10% | 9 | 0.90 |
| Skill Fit | 15% | 5 | 0.75 |
| Capital Required | 10% | 9 | 0.90 |
| Buyer Clarity | 20% | 7 | 1.40 |
| Fintech Upside | 10% | 6 | 0.60 |
| **TOTAL** | **100%** | | **7.20** |

### Verdict: BUILD (Priority #3-4)

StockClear scores well across all dimensions except Skill Fit (Phase 1 is marketplace CRUD, not AI/ML). The market size is massive (N2.14T), competition is zero, and the cost structure makes it profitable from transaction #2. Build after PortPulse and KasaBook — or in parallel if coordinator hiring is feasible early.

---

## 18. Disruption Self-Assessment

### Criterion 1: Targets Overlooked or Non-consuming Segments
**Rating: Strong Fit**

Both sides of this marketplace are non-consumers. Manufacturers have no liquidation channel — they are non-consumers of surplus liquidation services. Discount buyers have no discovery mechanism — they are non-consumers of deal-sourcing tools. The 767+ factories that closed in 2023-2024 have no structured way to liquidate assets — their owners are non-consumers of asset recovery services. No B2B surplus marketplace exists in Nigeria. The non-consumption is total.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First
**Rating: Strong Fit**

A well-funded marketplace startup would build automated matching algorithms, integrated logistics, escrow, and a polished mobile app. StockClear's Phase 1 is a WhatsApp number, a web listing page, and a human coordinator. This is deliberately "worse" by enterprise standards — but for manufacturers currently liquidating via personal phone calls and WhatsApp status posts, having access to 100+ qualified buyers through a single WhatsApp message is transformative. The coordinator's personal touch actually adds trust that automated systems cannot replicate in Nigeria's low-trust business environment.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold
**Rating: Strong Fit (New-Market)**

This is a pure new-market foothold. No B2B surplus liquidation marketplace exists in Nigeria. There is no incumbent to undercut. StockClear creates a category: the structured liquidation of manufacturer surplus inventory. The closest analog (Liquidation.com, B-Stock) exists in the US/Europe but has zero presence in West Africa. This is a new market created from scratch.

### Criterion 4: Reimagines the Value Chain
**Rating: Strong Fit**

Today's surplus liquidation "value chain" is: manufacturer → personal contacts → maybe a buyer. StockClear introduces: manufacturer → structured listing → broad buyer discovery → coordinator-mediated matching → verified transaction. Each step is new infrastructure. The coordinator role is the key innovation: a trusted intermediary in a low-trust environment who facilitates transactions between strangers. This role does not exist today. The buyer preference registry (category, region, budget) creates a demand aggregation layer that manufacturers have never had access to.

### Criterion 5: Prioritizes Scaling a Core Solution
**Rating: Strong Fit**

Phase 1 is maximally stripped down: list inventory, match with buyers, collect commission. No ML, no logistics, no escrow, no ERP integration. The goal is transaction volume — get as many buyers and sellers onto the platform as possible. Features (auction, price prediction, escrow) come after the network reaches critical mass. This is the Indomie pattern: one flavor, national distribution, then variants.

### Criterion 6: Demands a Different Cost Structure
**Rating: Strong Fit**

StockClear's total cost is ~N415K/month (infrastructure + coordinator). It breaks even at 2 transactions. An enterprise B2B marketplace would require a sales team, warehouse operations, logistics fleet, and customer support center — costing N10-50M/month minimum. StockClear's WhatsApp-first, coordinator-mediated model operates at 1% of that cost. No incumbent marketplace company could profitably serve this market at StockClear's price point. The commission rate (5-10%) is affordable because StockClear adds no overhead to the transaction beyond matching.

### Criterion 7: Converts Non-consumption into Growth
**Rating: Strong Fit**

Every StockClear transaction represents economic activity that would not have occurred otherwise. The manufacturer would have written off the inventory. The buyer would not have found the deal. The surplus would have spoiled, become obsolete, or consumed warehouse space until the manufacturer closed. StockClear creates new transactions, new cash flow recovery, and new distribution pathways. Each completed transaction expands the total market for surplus goods and demonstrates to other manufacturers that liquidation is a viable strategy — not a sign of failure.

### Criterion 8: Can Mature to Surpass Mainstream Offerings
**Rating: Partial Fit**

The maturation path is credible but slower than PortPulse's. Phase 1 is human-mediated WhatsApp matching. Phase 2 adds automated matching, escrow, and verification. Phase 3 adds price prediction, auction functionality, and data licensing. At maturity, StockClear could become the definitive B2B surplus marketplace for West Africa — but the path to "surpassing mainstream offerings" is less clear because no mainstream offering exists to surpass. The risk is that StockClear plateaus as a useful but niche coordinator service rather than evolving into a data-driven marketplace platform. The data asset strategy (sector distress signals, pricing intelligence) is the key to avoiding this plateau.

### Summary

| # | Criterion | Rating |
|---|-----------|--------|
| 1 | Overlooked segment | Strong Fit |
| 2 | "Worse" but good enough | Strong Fit |
| 3 | Market foothold | Strong Fit (New-Market) |
| 4 | Value chain reimagined | Strong Fit |
| 5 | Scale core solution | Strong Fit |
| 6 | Different cost structure | Strong Fit |
| 7 | Non-consumption to growth | Strong Fit |
| 8 | Can mature | Partial Fit |

**Overall: 7/8 Strong Fit, 1/8 Partial Fit.**

No non-negotiable criteria (1, 3, 7) score below Strong Fit. The Partial Fit on Criterion 8 reflects honest uncertainty about the maturation path — the product has clear Phase 2-3 improvements, but the absence of a mainstream competitor to eventually surpass makes the "maturation to surpass" narrative less dramatic than products like PortPulse.

---

## 19. MNC Anti-Pattern Check

| Pattern | Match? | Assessment |
|---------|:------:|-----------|
| 1. Phantom Middle Class | No match | StockClear targets manufacturers (sellers) and discount distributors (buyers) — both are identifiable, existing business segments with quantified pain (N2.14T surplus). Not dependent on a consumer middle class. |
| 2. Push, Don't Pull | No match | Strong pull on both sides. Manufacturers are already trying to liquidate (posting on WhatsApp, calling contacts). Discount buyers already seek deals (visiting factory gates, joining trade groups). StockClear amplifies existing behavior — it does not require behavior change. |
| 3. Infrastructure Entitlement | No match | StockClear builds its own matching infrastructure via WhatsApp + web. Does not depend on logistics networks, payment infrastructure beyond Paystack, or government services. The product IS the infrastructure that was missing. |
| 4. Imported Management | No match | Coordinator will be hired locally with knowledge of Nigerian manufacturing. Founder manages remotely from NYC but does not impose foreign management structure on operations. |
| 5. Blame and Exit | N/A | Pre-launch — but the design principle is resilience: WhatsApp works on 2G, transactions are peer-to-peer (no central dependency), and the coordinator model scales by hiring, not by building fragile technology. |
| 6. Premium Positioning in a Value Market | No match | StockClear is free to list, commission-only on transactions. The value proposition is "recover cash from dead inventory" — not a premium SaaS product. Subscription tiers exist but are optional enhancements, not gatekeepers. |

**No MNC anti-patterns detected.** StockClear's design explicitly avoids all six failure modes by starting with WhatsApp (universal access), charging only on completed transactions (zero adoption barrier), hiring local coordinators (market knowledge), and building infrastructure rather than assuming it exists.
