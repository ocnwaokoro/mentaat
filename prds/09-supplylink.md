# PRD 09: SupplyLink — Supply Chain Finance Marketplace (Lite)

**Version:** 1.0 | March 2026
**Status:** Draft
**Depends on:** [00-shared-context.md](./00-shared-context.md)

---

## 1. Executive Summary

Nigerian suppliers to large corporates wait 60-90 days for payment — sometimes 120+ days. During this wait, they have zero access to affordable working capital: bank lending is at 35.5%, and invoice factoring is practically nonexistent in the Nigerian market. Meanwhile, investors and lenders are starving for yield on short-duration, secured assets. SupplyLink bridges this gap: suppliers upload verified invoices from known corporate buyers, lenders bid to purchase those invoices at a discount, suppliers get cash in 7 days instead of 90, and lenders earn 2-4% monthly returns secured against corporate payment obligations. This is supply chain finance — a $1.8T global market — adapted for Nigerian realities.

SupplyLink is the highest-ceiling product in this portfolio, but also the most complex. It requires CBN regulatory navigation, lender partnerships, and robust verification systems. This is a 6-12 month build, not a 2-4 week sprint. The PRD outlines a phased approach starting with a manual, curated marketplace before automating.

**Target:** N100M/month transaction volume within 12 months = ~$5-13K MRR from transaction fees.

---

## 2. Market Opportunity

### The Invoice Financing Desert

Invoice factoring — where a business sells its receivables at a discount for immediate cash — is a $3.4T global market. In developed economies, 10-15% of B2B invoices are factored. In Nigeria, that figure is effectively 0%. The infrastructure (credit bureaus, standardized invoicing, legal frameworks for assignment of receivables) is absent or unreliable, and traditional banks consider SME invoices too risky to purchase.

### Quantified Pain

| Metric | Value | Source |
|--------|-------|--------|
| SME credit gap | N49.4T ($32.2B) | IFC/World Bank |
| Average B2B payment terms | 60-90 days | LCCI surveys |
| Actual payment delay | Often 90-120+ days | Industry data |
| Lending rate (bank) | 35.5% | CBN, 2025 |
| Microfinance/alternative lending rate | 4-8% per month | Market survey |
| Businesses citing access to finance as top barrier | >60% | Multiple surveys |
| Invoice factoring penetration (Nigeria) | <0.1% | FCI Global Factoring Report |
| Invoice factoring penetration (UK) | ~14% | FCI |
| Invoice factoring penetration (South Africa) | ~3% | FCI |

### The Two-Sided Opportunity

**Supply side (SME suppliers):** A manufacturer supplying Dangote, Nestle Nigeria, or Nigerian Breweries has a high-quality receivable — the buyer is creditworthy. But the supplier cannot monetize this receivable today. They wait 90 days while their cash flow starves.

**Demand side (lenders/investors):** HNWIs, family offices, and fintech lenders in Nigeria struggle to find short-duration, secured investment opportunities that yield above inflation (currently 29%+). An invoice backed by a blue-chip Nigerian corporate, returning 3-4% per month (36-48% annualized), is extremely attractive — if the verification and collection infrastructure exists.

### Why Now

1. **Open banking infrastructure:** Mono.co enables verification of supplier bank account activity and revenue patterns. BVN/NIN verification establishes identity.
2. **CBN sandbox:** The CBN's Innovation Hub and regulatory sandbox accept applications for novel financial services. Supply chain finance has been explicitly encouraged in CBN communications.
3. **Corporate digitization:** Large Nigerian corporates (Dangote, MTN, Nestle) are digitizing their procurement and accounts payable systems, making invoice verification more feasible.
4. **Precedent:** South Africa's Investec, India's TReDS (Trade Receivables Discounting System), and Mexico's Konfio have proven the model works in emerging markets with similar challenges.

### Total Addressable Market

- **B2B invoices from SMEs to large corporates:** Estimated N5-10T annually
- **If 1% of eligible invoices are factored through SupplyLink:** N50-100B/year in transaction volume
- **At 1-2% total fee (both sides):** N500M-2B in annual revenue potential
- **Year 1 realistic target:** N1.2B in transaction volume = N12-24M ($7.8-15.6K) in fees

---

## 3. Target Persona

### Persona 1 (Supply Side): Obi — SME Supplier

| Attribute | Detail |
|-----------|--------|
| **Title** | Owner / MD / Finance Director |
| **Company** | Packaging manufacturer, raw material supplier, logistics provider |
| **Revenue** | N30-200M/month |
| **Key clients** | 3-5 large corporates (Dangote, Nestle, MTN, etc.) |
| **Outstanding receivables** | N20-80M at any time |
| **Location** | Lagos, Ogun State, Kano |
| **Age** | 38-55 |
| **Pain** | Waiting 90+ days for payment while needing cash for raw materials, payroll, and growth |
| **Current workaround** | Expensive bank overdraft, informal lenders at 5-8%/month, personal savings |

### Obi's Cash Flow Trap

Obi's packaging company supplies Nestle Nigeria. He delivered N25M of packaging materials on January 15. Nestle's payment terms: 90 days. Obi will receive payment around April 15. But Obi needs to buy raw materials for the next order now — N15M. His options:
- **Bank loan:** 35.5% annual rate, requires collateral he doesn't have, 3-week approval process
- **Overdraft:** Already maxed out
- **Informal lender:** 6% per month (72% annualized) — but available in 2 days
- **Delay supplier payments:** Damages his own supply chain
- **Turn down the next order:** Loses growth opportunity

With SupplyLink, Obi uploads the Nestle invoice, a lender purchases it at 4% discount (N1M fee), and Obi receives N24M in 7 days. His effective annualized cost: ~16% — half the bank rate and a quarter of the informal lender rate.

### Persona 2 (Demand Side): Amaka — Fintech Lender / HNW Investor

| Attribute | Detail |
|-----------|--------|
| **Title** | Portfolio Manager / Investment Director / Individual investor |
| **Organization** | Fintech lending company, family office, or HNWI |
| **AUM** | N100M-5B |
| **Target yield** | 30-50% annualized (must beat inflation) |
| **Duration preference** | 30-90 days (short-duration) |
| **Risk appetite** | Moderate — wants security, not speculation |
| **Location** | Lagos, Abuja |
| **Pain** | Finding enough quality, short-duration assets to deploy capital |

### Amaka's Investment Problem

Amaka manages a N500M portfolio. Treasury bills yield 20-25% — below inflation. Real estate is illiquid. Public equities are volatile. She needs short-duration, secured assets returning 35-50%. Invoice financing against blue-chip corporate buyers fits perfectly — but there is no platform to access these assets.

---

## 4. Problem Deep Dive

### Problem 1: Working Capital Starvation

Nigerian SME suppliers sit on billions of naira in invoices that are, economically speaking, near-cash — the buyer is creditworthy, the goods are delivered, the invoice is undisputed. But there is no mechanism to convert these invoices into actual cash before the buyer pays.

**Scale:** If the average SME supplier has N30M in outstanding receivables at any time, and there are 50,000 such suppliers, the "locked" working capital is N1.5T ($975M). Even converting 10% of this to immediate cash would unlock N150B.

### Problem 2: Invoice Verification is Hard

The reason invoice factoring has not scaled in Nigeria is primarily a verification problem. A lender purchasing an invoice needs confidence that:
1. The invoice is real (not fabricated)
2. The goods/services were actually delivered
3. The buyer acknowledges the obligation
4. The invoice has not been sold to another lender (no double-pledging)
5. The buyer will actually pay

In developed markets, credit bureaus, standardized e-invoicing, and legal frameworks solve these problems. In Nigeria, each must be solved manually or through technology.

### Problem 3: No Marketplace Infrastructure

Even if a lender wanted to buy Nigerian SME invoices, there is no marketplace to find them. Deals happen through personal networks. A supplier's banker might offer to factor an invoice at 40%+ effective rate because there is no competitive bidding. The market is opaque, fragmented, and inefficient.

### Problem 4: Legal Framework Gaps

Assignment of receivables (the legal mechanism for invoice factoring) is supported by Nigerian law but rarely used in practice. The NFIU (Nigeria Financial Intelligence Unit) and CBN have frameworks for reportable transactions. SupplyLink must navigate this carefully — not as a bank or financial institution (which requires a license) but as a marketplace connecting parties.

---

## 5. Solution Overview

### Core Value Proposition

**For suppliers:** "Turn your corporate invoices into cash in 7 days — not 90."
**For lenders:** "Earn 30-50% annualized returns secured against blue-chip Nigerian corporate invoices."

### How It Works

```
SUPPLIER SIDE:
Upload Invoice (PDF) + Supporting Documents
(Purchase order, delivery confirmation, buyer acknowledgment)
            ↓
SupplyLink Verifies:
- Invoice authenticity (OCR + manual review)
- Buyer creditworthiness (corporate database)
- Delivery confirmation (document matching)
- No duplicate pledging (platform registry)
            ↓
Invoice Listed on Marketplace
(Amount, buyer, maturity date, minimum discount)
            ↓
LENDER SIDE:
Browse Available Invoices
(Filtered by buyer rating, amount, maturity, yield)
            ↓
Lender Bids (Discount Rate)
"I will buy this N25M invoice for N24M (4% discount)"
            ↓
Best Bid Wins → Lender Pays Supplier via Escrow
            ↓
At Maturity: Buyer Pays → Funds Go to Lender
(SupplyLink manages collection and reconciliation)
```

### Key Design Decisions

1. **Curated marketplace, not open platform:** In Phase 1, every invoice is manually verified by the SupplyLink team. This is not scalable but is necessary to build trust with lenders. Automate verification in Phase 2+.
2. **Known buyers only:** Start with invoices from the top 100 Nigerian corporates (Dangote, MTN, Nestle, Nigerian Breweries, Flour Mills, etc.). These are de facto creditworthy. Unknown buyers are out of scope for MVP.
3. **Escrow via Paystack/dedicated account:** Lender funds go into an escrow arrangement. Supplier receives payment only after verification is complete. This protects both sides.
4. **Platform fee, not spread:** SupplyLink charges a transparent percentage from both sides. It does not take a spread (buy at one price, sell at another). This builds trust and avoids being classified as a financial intermediary.
5. **Start with a WhatsApp concierge:** Before building the full marketplace, Phase 0 is a manually-operated WhatsApp service. "Send us your invoice, we find a buyer." This validates demand with zero tech investment.

---

## 6. MVP Feature Set

### Phase 0: WhatsApp Concierge (Weeks 1-4)

No software build. Test the market manually:

| Activity | Description |
|----------|-------------|
| Identify 5 suppliers | Through network, find 5 SMEs with invoices from known corporates |
| Identify 3 lenders | HNWIs or fintech lenders willing to purchase verified invoices |
| Manual matching | Supplier sends invoice via WhatsApp → SupplyLink verifies → presents to lenders → negotiates discount → facilitates payment |
| Document everything | Track: time to verify, discount rates, supplier/lender satisfaction, collection success |

**Goal:** Facilitate 3-5 transactions totaling N50-100M. Prove the model works. Earn N500K-2M in fees.

### Phase 1: Lite Platform (Weeks 5-10)

| Feature | Priority | Description |
|---------|----------|-------------|
| Supplier onboarding | P0 | KYC (BVN, CAC documents), bank account verification, business profile |
| Invoice upload | P0 | Upload invoice PDF + supporting docs. OCR extracts key fields (amount, buyer, date, terms) |
| Manual verification dashboard | P0 | Internal admin view: verify invoice authenticity, check buyer, approve/reject |
| Lender onboarding | P0 | KYC, accreditation check (minimum investment N5M), bank account |
| Invoice listing | P0 | Verified invoices shown to lenders: buyer, amount, maturity, suggested discount range |
| Bidding system | P0 | Lenders submit discount bids. Supplier sees bids and accepts best offer |
| Payment facilitation | P0 | Escrow flow: lender pays → verified → supplier receives. At maturity → buyer pays → lender receives |
| Transaction dashboard | P0 | Both sides see: active transactions, pending, completed, earnings/cost |

### Phase 2: Automation & Scale (Weeks 11-20)

| Feature | Priority | Description |
|---------|----------|-------------|
| Automated invoice verification | P1 | OCR + LLM-based document matching (invoice vs. PO vs. delivery note) |
| Buyer database | P1 | Creditworthiness ratings for top 200 Nigerian corporates |
| Buyer confirmation flow | P1 | Email/SMS to buyer: "Do you acknowledge this invoice?" One-click confirm |
| Auto-matching | P1 | Match invoices to lenders based on preferences (buyer rating, yield, amount range) |
| Portfolio view for lenders | P1 | Diversified view: total deployed, average yield, maturity calendar, reinvestment queue |
| Collection automation | P1 | At maturity, automated reminders to buyer. Payment tracking. Escalation if overdue. |
| Risk scoring | P1 | AI-based risk score per invoice based on buyer history, supplier history, amount, industry |

### Phase 3: Platform Maturity (Months 6-12)

| Feature | Priority | Description |
|---------|----------|-------------|
| Reverse factoring (buyer-initiated) | P2 | Large corporates invite their suppliers to SupplyLink for early payment |
| Dynamic discounting | P2 | Buyers offer: "Pay 30 days early for 2% discount" — supplier accepts via platform |
| Lender API | P2 | Fintech lenders integrate via API for automated bidding/funding |
| Credit insurance integration | P2 | Partner with NAICOM-licensed insurers for invoice default coverage |
| Multi-currency support | P2 | USD-denominated invoices (for export suppliers) |
| Regulatory reporting | P2 | Automated NFIU/CBN compliance reporting |

### Explicitly Out of Scope

- Direct lending (SupplyLink is a marketplace, not a lender)
- Consumer invoices (B2B only)
- Invoices from unknown/unrated buyers
- Cross-border invoices (Phase 3)
- Purchase order financing (different risk profile — future product)

---

## 7. Key Screens & UX

### Screen 1: Supplier Dashboard

```
┌──────────────────────────────────────────┐
│  SupplyLink (Supplier View)   [Upload Invoice] │
├──────────────────────────────────────────┤
│                                          │
│  Total Financed (All Time)  N 185,000,000│
│  ─────────────────────────────────────  │
│  Active Invoices            4            │
│  Total Outstanding          N 42,500,000 │
│  Average Discount Paid      3.2%         │
│  Avg Days to Cash           5.4 days     │
│                                          │
│  ── ACTIVE INVOICES ─────────────────── │
│                                          │
│  INV-2847 | Nestle Nigeria               │
│  N 25,000,000 | Due: 15 Apr 26           │
│  Status: ✅ Funded — N24,000,000 received │
│                                          │
│  INV-2901 | Dangote Cement               │
│  N 12,500,000 | Due: 22 Apr 26           │
│  Status: 🟡 3 Bids received — Review     │
│                                          │
│  INV-2915 | Nigerian Breweries           │
│  N 8,200,000 | Due: 30 May 26            │
│  Status: 🔄 Under verification           │
│                                          │
│  INV-2920 | MTN Nigeria                  │
│  N 18,300,000 | Due: 01 Jun 26           │
│  Status: ⏳ Uploaded — pending review     │
│                                          │
│  [View History]  [📥 Export Transactions]  │
└──────────────────────────────────────────┘
```

### Screen 2: Invoice Upload Flow

**Step 1: Upload Documents**
- Drag & drop or select: Invoice PDF, Purchase Order, Delivery Note/GRN
- OCR extracts: buyer name, invoice amount, invoice date, payment terms, invoice number
- User reviews and confirms extracted data

**Step 2: Invoice Details**
- Buyer (auto-detected, confirm from dropdown of known corporates)
- Invoice amount (pre-filled from OCR)
- Invoice date and due date (pre-filled)
- Payment terms (net 30/60/90)
- Desired funding amount (default: 100% of invoice)
- Minimum acceptable discount (suggested based on market rates)

**Step 3: Confirmation**
- Summary of invoice details
- Estimated proceeds: "If funded at 3.5% discount, you receive N24,125,000"
- Legal acknowledgment: assignment of receivable
- Submit for verification

### Screen 3: Lender Dashboard

```
┌──────────────────────────────────────────┐
│  SupplyLink (Lender View)     [Settings]  │
├──────────────────────────────────────────┤
│                                          │
│  Portfolio Value            N 120,000,000│
│  ─────────────────────────────────────  │
│  Active Investments         8            │
│  Average Yield (Annualized) 42.5%        │
│  Maturing This Month        N 45,000,000 │
│  Total Earned (All Time)    N 8,200,000  │
│                                          │
│  ── AVAILABLE INVOICES ──────────────── │
│                                          │
│  Dangote Cement | N 12,500,000           │
│  Due: 22 Apr 26 (32 days) | Risk: A     │
│  Suggested yield: 3.0-4.5%              │
│  [View Details]  [Place Bid]             │
│                                          │
│  Flour Mills    | N 7,800,000            │
│  Due: 10 May 26 (50 days) | Risk: A     │
│  Suggested yield: 3.5-5.0%              │
│  [View Details]  [Place Bid]             │
│                                          │
│  ── MATURITY CALENDAR ────────────────  │
│  Apr 5:  N15M from Nestle (Inv #2847)   │
│  Apr 22: N12.5M from Dangote (if funded) │
│  May 1:  N30M from MTN (Inv #2801)      │
│                                          │
│  [View All Available]  [Portfolio Report] │
└──────────────────────────────────────────┘
```

### Screen 4: Invoice Detail (Lender View)

```
┌──────────────────────────────────────────┐
│  Invoice: Dangote Cement — N12,500,000   │
├──────────────────────────────────────────┤
│                                          │
│  Supplier: Obi Packaging Ltd             │
│  Buyer: Dangote Cement Plc               │
│  Buyer Rating: A (Top 10 Nigerian Corp)  │
│  Invoice Date: 22 Jan 2026              │
│  Due Date: 22 Apr 2026 (32 days)        │
│  Days Outstanding: 58 of 90             │
│                                          │
│  ── VERIFICATION STATUS ───────────────  │
│  ✅ Invoice document verified            │
│  ✅ Purchase order matched               │
│  ✅ Delivery note confirmed              │
│  ✅ Buyer acknowledgment received        │
│  ✅ No duplicate pledge detected         │
│  Risk Score: 92/100 (Low Risk)           │
│                                          │
│  ── SUPPLIER HISTORY ──────────────────  │
│  Previous invoices financed: 6           │
│  All collected on time: Yes              │
│  Average buyer payment: 3 days before due│
│                                          │
│  ── CURRENT BIDS ──────────────────────  │
│  Bid 1: N12,000,000 (4.0% discount)     │
│  Bid 2: N12,125,000 (3.0% discount)     │
│  Your bid: [N ____________]              │
│                                          │
│  [Place Bid]                             │
│                                          │
│  ── YIELD CALCULATOR ──────────────────  │
│  If you bid N12,125,000:                 │
│  Profit: N375,000 in 32 days            │
│  Annualized yield: 34.2%                │
└──────────────────────────────────────────┘
```

### Screen 5: Admin Verification Dashboard (Internal)

- Queue of invoices pending verification
- Per invoice: uploaded documents, OCR extraction, buyer match confidence
- Verification checklist: document authenticity, buyer match, PO match, delivery confirmation
- One-click: Approve / Reject / Request More Documents
- Audit trail: who verified, when, notes

---

## 8. Technical Architecture

### System Architecture

```
┌─────────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Next.js App     │────→│ Supabase DB  │────→│ Admin Dashboard  │
│  (Vercel)        │     │ (PostgreSQL) │     │ (Internal)       │
│                  │     └──────┬───────┘     └─────────────────┘
│  - Supplier UI   │            │
│  - Lender UI     │     ┌──────┴───────┐
│  - Admin UI      │     │ Supabase     │
└───────┬──────────┘     │ Storage      │ ← Document storage
        │                └──────────────┘
        │
        ├──→ OpenAI API (OCR enhancement + document matching)
        ├──→ Paystack (escrow payments + settlement)
        ├──→ Mono.co (supplier bank verification)
        ├──→ Termii (WhatsApp/SMS notifications)
        ├──→ Resend (transaction emails)
        └──→ Youverify/Smile Identity (KYC/BVN verification)
```

### Data Model (Core Tables)

```sql
-- Suppliers
suppliers (
  id, user_id, company_name, cac_number,
  industry, bvn_verified, bank_account_verified,
  mono_account_id, kyc_status, risk_rating,
  total_invoices_financed, total_amount_financed,
  created_at
)

-- Lenders
lenders (
  id, user_id, entity_name, entity_type (individual/company/fintech),
  cac_number, bvn_verified, kyc_status,
  investment_min, investment_max, preferred_yield,
  preferred_buyers, total_invested, total_earned,
  created_at
)

-- Known corporate buyers (pre-loaded database)
buyers (
  id, company_name, cac_number, industry,
  credit_rating (A/B/C), estimated_revenue,
  payment_reliability_score, avg_days_to_pay,
  total_invoices_tracked, notes,
  last_updated
)

-- Invoices
invoices (
  id, supplier_id, buyer_id,
  invoice_number, invoice_amount, currency,
  invoice_date, due_date, payment_terms_days,
  desired_funding_amount, minimum_discount_pct,
  verification_status (pending/verified/rejected),
  marketplace_status (draft/listed/bidding/funded/collected/defaulted),
  funded_amount, discount_amount, fee_amount,
  funded_date, collection_date, collected_amount,
  created_at
)

-- Invoice documents
documents (
  id, invoice_id, type (invoice/po/delivery_note/grn/buyer_confirmation),
  storage_path, ocr_extracted_data (jsonb),
  verification_status, verified_by, verified_at
)

-- Bids
bids (
  id, invoice_id, lender_id,
  bid_amount, discount_pct, implied_yield_annualized,
  status (pending/accepted/rejected/expired),
  created_at, expires_at
)

-- Transactions (money movement)
transactions (
  id, invoice_id, type (funding/collection/fee/refund),
  from_entity_type, from_entity_id,
  to_entity_type, to_entity_id,
  amount, paystack_reference,
  status (pending/completed/failed),
  created_at, completed_at
)

-- Verification audit trail
verifications (
  id, invoice_id, step,
  status (passed/failed/pending),
  verified_by_user_id, notes,
  created_at
)
```

### Invoice Verification Pipeline

1. **Document Upload:** Supplier uploads invoice PDF, PO, delivery note
2. **OCR Extraction:** OpenAI Vision API extracts key fields from all documents
3. **Cross-Reference Check:**
   - Invoice amount matches PO amount (within 5% tolerance)
   - Buyer name on invoice matches known buyer database
   - Delivery note date is after PO date and before invoice date
   - Invoice number follows expected format for this buyer
4. **Buyer Confirmation (Phase 2):** Automated email/SMS to buyer's AP department: "Do you acknowledge Invoice #XYZ for N25M from Supplier ABC?" One-click confirm/deny.
5. **Duplicate Check:** Search all platform invoices for same buyer + similar amount + similar date. Flag potential duplicates.
6. **Manual Review:** SupplyLink admin reviews AI findings, checks documents visually, approves or requests additional documents.
7. **Listing:** Approved invoice appears on lender marketplace.

### Escrow & Payment Flow

```
1. Lender accepts invoice → Funds N24M to SupplyLink escrow (Paystack)
2. SupplyLink confirms receipt → Releases N24M to supplier (minus 0.5% fee = N23.88M)
3. Invoice matures → Buyer pays N25M to SupplyLink collection account
4. SupplyLink distributes:
   - N24M to lender (principal)
   - N1M to lender (discount/profit)
   - N125K to SupplyLink (0.5% lender-side fee, if not already collected)
   - Remaining to supplier (if overpayment) or held for next cycle
```

**Critical:** Escrow arrangement must be legally structured. Options:
- **Paystack Dedicated NUBAN:** Virtual accounts for each transaction
- **Trust account with a licensed trustee:** More formal, required at scale
- **Partnership with licensed payment company:** Outsource the money-holding to a regulated entity

### Regulatory Architecture

SupplyLink operates as a **technology marketplace**, not a financial institution:
- Does not hold deposits (escrow is pass-through)
- Does not make lending decisions (lenders decide independently)
- Does not guarantee returns
- Charges technology/platform fees, not interest

**Regulatory considerations:**
- **SEC Nigeria:** If invoices are deemed "securities," SEC registration may be required. Early legal opinion needed. Likely exempt if invoices are bilateral agreements, not pooled/securitized.
- **CBN:** Not operating as a bank or microfinance institution. Should not require CBN license for marketplace model. However, CBN Innovation Hub engagement recommended.
- **NFIU:** Transactions above N10M require NFIU reporting. Build automated reporting.
- **FIRS:** Platform fees subject to VAT (7.5%) and company income tax.

### Infrastructure Costs (Monthly Estimate)

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | $20 | Pro plan for security features |
| Supabase | $25 | Pro plan for larger DB + storage |
| OpenAI API | ~$20-50 | OCR + document verification |
| Mono.co | ~$30-50 | Supplier verification |
| Youverify KYC | ~$50-100 | BVN/identity verification |
| Termii | ~$30-50 | Notifications |
| Legal/compliance | ~$200-500 | Ongoing legal advisory (critical) |
| **Total** | **~$375-800/month** | Higher than other products |

---

## 9. Pricing & Unit Economics

### Fee Structure

| Fee | Rate | Paid By | Description |
|-----|------|---------|-------------|
| **Supplier platform fee** | 0.5-1.0% of invoice amount | Supplier | Charged when funds are received |
| **Lender platform fee** | 0.5% of invoice amount | Lender | Charged when maturity payment is distributed |
| **Verification fee** | N25,000-50,000 per invoice (Phase 1) | Supplier | Manual verification cost; waived at scale |

### Unit Economics Per Transaction

**Example:** N25M invoice, 90-day maturity, funded at 4% discount

| Line Item | Amount |
|-----------|--------|
| Invoice amount | N25,000,000 |
| Lender bid (4% discount) | N24,000,000 |
| Supplier receives | N23,875,000 (N24M - 0.5% platform fee) |
| Supplier platform fee | N125,000 |
| At maturity — buyer pays | N25,000,000 |
| Lender receives | N24,875,000 (N25M - 0.5% platform fee) |
| Lender platform fee | N125,000 |
| **Total SupplyLink revenue** | **N250,000 per N25M transaction** |
| **SupplyLink margin** | **1.0% of face value** |

### Revenue Projections

| Milestone | Monthly Volume | Transactions | Monthly Revenue | MRR (USD) |
|-----------|---------------|-------------|-----------------|-----------|
| Month 6 | N50M | 3-5 | N500,000 | ~$325 |
| Month 9 | N100M | 6-10 | N1,000,000 | ~$650 |
| Month 12 | N250M | 12-20 | N2,500,000 | ~$1,625 |
| Month 18 | N1B | 40-60 | N10,000,000 | ~$6,500 |
| Month 24 | N3B | 100+ | N30,000,000 | ~$19,500 |

### Path to $10K MRR

$10K MRR = ~N15.4M/month in revenue = ~N1.54B/month in transaction volume (at 1% total fee).

**Timeline:** 18-24 months. This is significantly slower than SaaS products. However, the revenue is more scalable — volume can grow 10x without proportional cost increases, and the per-transaction economics improve as verification becomes automated.

### Long-Term Revenue Potential

At scale, SupplyLink could evolve into:
1. **Credit scoring as a service:** Sell supplier/buyer payment data to banks and fintechs
2. **Insurance commissions:** Credit insurance on invoices (2-3% premium)
3. **Reverse factoring fees:** Corporate buyers pay to accelerate supplier payments (improves their supply chain)
4. **Data licensing:** Aggregate B2B payment data is valuable for economic analysis

---

## 10. Go-to-Market

### Phase 0: Manual Validation (Months 1-2)

1. **Identify 5 suppliers:** Through network, find SMEs supplying known corporates. Requirements: invoice amount N5-25M, maturity 30-90 days, reputable buyer.
2. **Identify 3 lenders:** Target: HNWIs in diaspora network (understand Nigeria + have capital), fintech lenders looking for deal flow (Carbon, FairMoney, Lidya).
3. **WhatsApp concierge:** Manually match supplier invoices with lenders. Facilitate verification and payment. Charge reduced fee (0.5% total) for proof of concept.
4. **Document learnings:** Verification friction points, lender concerns, supplier feedback, payment timing.
5. **Goal:** 3-5 completed transactions, N50-100M volume, proof of collection.

### Phase 1: Invite-Only Platform (Months 3-6)

1. **Build lite platform** with core features (invoice upload, verification queue, lender marketplace, payment flow).
2. **Onboard 10 suppliers, 5 lenders** from Phase 0 relationships + referrals.
3. **White-glove service:** SupplyLink team helps each supplier through first 2-3 transactions.
4. **Lender development:** Weekly deal flow updates to lenders. Personal relationship management.
5. **Goal:** N250M cumulative volume, zero defaults, case studies for scaling.

### Phase 2: Controlled Growth (Months 6-12)

1. **Expand supplier base:** Target suppliers in specific verticals (packaging, raw materials, logistics) who supply top 50 corporates.
2. **Lender expansion:** Approach microfinance banks, fintech companies, and family offices.
3. **Content marketing:** "How Nigerian SMEs Can Stop Waiting 90 Days for Payment" — LinkedIn, podcasts, finance media.
4. **Industry events:** Nigeria Fintech Week, LCCI events, MAN conferences.
5. **Partnership with accounting firms:** Accountants identify clients with factoring needs.

### Phase 3: Platform Effects (Months 12-24)

1. **Reverse factoring launch:** Approach corporate buyers' procurement departments. "Offer your suppliers early payment at no cost to you — we finance it."
2. **Fintech API partnerships:** Lenders connect via API for automated bidding/funding.
3. **Geographic expansion:** Start with Ghana (similar market dynamics, easier regulatory environment).

---

## 11. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **Invoice fraud** — supplier submits fake or inflated invoices | High | Critical | Multi-layer verification: document OCR, buyer confirmation, bank statement cross-reference (Mono), delivery confirmation. Start with manual review. Build fraud detection model with transaction data over time. |
| 2 | **Buyer non-payment** — corporate buyer does not pay at maturity | Medium | Critical | Start with A-rated corporates only (top 50 by revenue). Track buyer payment patterns. Build insurance partnerships. Lender diversification across multiple buyers. Reserve fund from platform fees (2% of volume). |
| 3 | **Double-pledging** — supplier sells same invoice to multiple lenders/platforms | Medium | Critical | Centralized registry of all pledged invoices on SupplyLink. Long-term: contribute to/use a national invoice registry if one emerges. Buyer confirmation flow prevents multiple sales of same invoice. |
| 4 | **Regulatory challenge** — CBN or SEC determines SupplyLink requires a license | Medium | High | Engage CBN Innovation Hub from Day 1. Seek legal opinion early. Structure as technology marketplace, not financial intermediary. Partner with licensed entity (microfinance bank or payment company) if needed. Have contingency plan to operate under a partner's license. |
| 5 | **Cold start problem** — not enough suppliers or lenders to create marketplace | High | High | Start manually (WhatsApp concierge). Subsidize early transactions (reduced fees). Guarantee lender returns for first N100M in volume (capped risk). Build one side at a time (supply first, then demand). |
| 6 | **Slow revenue ramp** — 18-24 months to meaningful revenue | Certain | Medium | Run SupplyLink alongside a faster-revenue SaaS product (PayMatch, CashFlow AI). Use SaaS revenue to fund SupplyLink development. SupplyLink is the long-term play, not the survival play. |
| 7 | **Competition from banks** — banks launch their own supply chain finance platforms | Low | High | Banks have tried and failed at this in Nigeria for 10 years. Their cost structure is too high for SME invoices. SupplyLink's tech-first approach is fundamentally cheaper. However, bank partnership is better than competition — become the tech layer for bank SCF programs. |
| 8 | **Collection difficulties** — at maturity, collecting from corporate buyer is slow | Medium | Medium | Build relationships with buyer AP departments. Automated collection reminders starting 7 days before maturity. Lender understands that 5-10 day collection delay is normal. Price delay risk into yield expectations. |

---

## 12. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|:---:|-----------|
| **Build Speed** | 4 | Not an MVP-in-2-weeks product. Phase 0 (manual) takes 1-2 months. Phase 1 (lite platform) takes 2-3 more months. Regulatory and legal groundwork adds time. |
| **Time to Revenue** | 5 | First fee revenue from Phase 0 (manual) in ~2 months. But meaningful revenue ($1K+ MRR) takes 6-9 months. Long road to $10K MRR. |
| **Market Size** | 10 | N49.4T credit gap. Supply chain finance is a N1T+ opportunity in Nigeria alone. Global SCF is $1.8T. Largest market of any product in this portfolio. |
| **Competition** | 6 | No dedicated Nigerian SCF marketplace. But banks have factoring products (expensive, inefficient). Fintechs like Lidya, Autochek Finance operate adjacent. Risk of well-funded entrant is real. |
| **Skill Fit** | 6 | AI document verification is a good skill fit. But the product is more ops/finance/legal than engineering. Success depends on relationships, regulatory navigation, and trust-building more than technology. |
| **Capital Required** | 4 | Legal costs, regulatory engagement, potentially needing a licensed partner. Phase 0 is cheap, but scaling requires capital for escrow/trust infrastructure and potentially a financial license. Cannot bootstrap to scale on $0-5K. |
| **Buyer Clarity** | 5 | Two-sided marketplace: both suppliers and lenders must be convinced. Neither side has an existing "I want invoice factoring" search behavior. Requires education and relationship selling. |
| **Fintech Upside** | 10 | Maximum fintech potential. This is a financial product at its core. Could evolve into a licensed financial institution, a credit scoring company, a trade finance bank, or an acquisition target for any major Nigerian fintech. |

### Weighted Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Build Speed | 5% | 4 | 0.20 |
| Time to Revenue | 15% | 5 | 0.75 |
| Market Size | 15% | 10 | 1.50 |
| Competition | 10% | 6 | 0.60 |
| Skill Fit | 15% | 6 | 0.90 |
| Capital Required | 10% | 4 | 0.40 |
| Buyer Clarity | 20% | 5 | 1.00 |
| Fintech Upside | 10% | 10 | 1.00 |
| **TOTAL** | **100%** | | **6.35** |

### Verdict: DEFER (Priority Tier 4 — Build Later, but Build Eventually)

SupplyLink has the highest ceiling of any product in this portfolio — a N49.4T market, 10/10 fintech upside, and a clear path to a venture-scale financial platform. But it is also the hardest to build solo, the slowest to revenue, and the most capital-intensive. It requires regulatory navigation, lender relationships, and legal infrastructure that a solo technical founder cannot build in 30-60 days.

**Recommended strategy:** Build a faster-revenue product first (PayMatch, ClearFast, or CashFlow AI). Use that product's revenue, customer relationships, and market credibility to launch SupplyLink in Month 6-9. CashFlow AI is the natural precursor — it builds supplier financial data that SupplyLink needs for verification.

SupplyLink is the endgame. Everything else is the warmup.
