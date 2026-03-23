# Feature Appendix: Value-Add Modules for Existing Products

**Purpose:** Features that don't warrant their own product but significantly increase the value, stickiness, and revenue of existing PRDs.

---

## PayMatch (01) — Invoice-to-Payment Matching

### F1: Customer Credit Scoring
- **What:** Score each customer based on payment history (avg days to pay, partial payment frequency, dispute rate). Traffic-light rating: green/yellow/red.
- **Why:** Payment history data is the most valuable credit signal in Nigeria where credit bureaus cover only 13%. Businesses currently extend credit blindly.
- **Revenue impact:** Premium feature at +N50K/month. Also unlocks SupplyLink integration (scored invoices are factorable).
- **Build effort:** 1 week (scoring algorithm on existing payment match data)

### F2: Early Payment Discount Engine
- **What:** Buyer offers 2-3% discount for payment within 7 days instead of 60. System auto-generates discount offer, tracks acceptance, adjusts invoice.
- **Why:** Bridge to supply chain finance. Buyers save 2-3%; suppliers get cash faster. You take 0.5% spread.
- **Revenue impact:** Transaction fee revenue. N100M in accelerated payments = ~N500K/month revenue.
- **Build effort:** 2 weeks

### F3: Dispute Resolution Workflow
- **What:** When a payment doesn't match (wrong amount, partial, contested), create a structured dispute ticket. Both parties see the same data. Resolution tracked to closure.
- **Why:** Payment disputes are a top cause of broken business relationships. Currently resolved via angry phone calls.
- **Revenue impact:** Retention feature — reduces churn by solving the hardest part of AR.
- **Build effort:** 1 week

### F4: Inventory Inference Engine
- **What:** Infer inventory levels from invoice data (items sold → stock depleting). Alert when inferred stock is low.
- **Why:** Most Nigerian SMEs don't track inventory systematically. Invoice data is a proxy.
- **Revenue impact:** Upsell feature. Differentiates from basic matching tools.
- **Build effort:** 2 weeks (ML model on invoice line items)

### F5: WhatsApp Bot for Payment Status
- **What:** Customer texts WhatsApp bot with invoice number → gets instant status (paid/partial/overdue/disputed).
- **Why:** Finance teams field "did you get my payment?" calls all day. Bot handles 80% of these.
- **Revenue impact:** Adoption driver. Makes PayMatch viral (customers of your customers use it).
- **Build effort:** 1 week (Termii WhatsApp Business API)

---

## TaxGuard (02) — Tax Compliance

### F6: Broader Compliance Calendar (NAFDAC, SON, CAC, NESREA)
- **What:** Beyond payroll taxes, track product registration renewals (NAFDAC 12-18 months), standards certifications (SON), annual returns (CAC), environmental permits (NESREA).
- **Why:** NAFDAC registration alone costs N500K-2M and takes 12-18 months. Missing a renewal shuts down a product line.
- **Revenue impact:** +N30-50K/month upsell. Expands TAM from "companies with employees" to "companies with products/registrations."
- **Build effort:** 2 weeks (database of deadlines per registration type)

### F7: Audit Preparation Pack
- **What:** One-click generate a complete compliance file: all filings, all receipts, all calculations for the past 12 months. PDF bundle for auditor.
- **Why:** Tax audits trigger panic. Businesses scramble to find receipts. This eliminates the fire drill.
- **Revenue impact:** Retention feature — customers stay because switching means losing audit history.
- **Build effort:** 1 week

### F8: Earned Wage Access / Salary Advance
- **What:** Employees access a portion of earned salary before payday. Employer approves. Deducted from next payroll.
- **Why:** TaxGuard already has employee and salary data. This is a natural fintech extension.
- **Revenue impact:** N500-2,000 per advance (1-3% fee). 100 employees x 20% uptake x N200K avg salary x 2% fee = N80K/month per company.
- **Build effort:** 3-4 weeks (requires payment integration + risk controls)

### F9: Payslip Generation & Employee Self-Service Portal
- **What:** Auto-generate payslips from calculation data. Employees log in to see their payslip, tax deductions, pension contributions.
- **Why:** Reduces HR queries ("what was deducted from my salary?"). Legal requirement in many cases.
- **Revenue impact:** Table-stakes feature that justifies premium pricing tier.
- **Build effort:** 1 week

---

## ForexGuard (03) — FX Exposure Dashboard

### F10: Multi-Currency Cash Position
- **What:** Track not just USD exposure but GBP, EUR, CNY (Chinese yuan — significant for Nigerian importers from China).
- **Why:** Many importers source from China, Europe, and UK. USD-only view is incomplete.
- **Revenue impact:** Premium tier differentiator. +N50K/month.
- **Build effort:** 1 week (add currency dimension to existing model)

### F11: FX Rate Alert & Timing Recommendations
- **What:** AI analyzes historical naira/USD patterns → suggests optimal windows to buy USD → sends SMS/WhatsApp alerts.
- **Why:** CFOs time USD purchases by gut feel. Even 1-2% better timing on N100M in annual imports saves N1-2M.
- **Revenue impact:** Killer feature that justifies premium pricing. Demonstrable ROI.
- **Build effort:** 2 weeks (time-series analysis + alert infrastructure)

### F12: Supplier Payment Scheduling
- **What:** Given FX exposure and rate forecasts, recommend which USD payables to settle now vs defer.
- **Why:** Extends from visibility (dashboard) to action (payment optimization).
- **Revenue impact:** Moves product from "nice dashboard" to "essential treasury tool." Reduces churn.
- **Build effort:** 2 weeks

### F13: Board Report Generator
- **What:** One-click generate investor/board-ready FX exposure report: total exposure, hedging positions, scenario impacts, recommendations.
- **Why:** CFOs spend hours preparing these manually. Most mid-market companies don't have treasury analysts.
- **Revenue impact:** Premium feature. Also serves as sales tool (CFO shows board → board mandates the tool).
- **Build effort:** 1 week (PDF template + data population)

---

## ClearFast (04) — Customs Documentation AI

### F14: Cargo Insurance Comparison
- **What:** Based on shipment value and type, recommend insurance coverage and pull quotes from marine insurers.
- **Why:** Many importers underinsure or skip insurance entirely. InsureMatch model embedded in clearing workflow.
- **Revenue impact:** 15-25% commission on insurance policies. High-value policies on container shipments.
- **Build effort:** 2-3 weeks (insurer API integrations or manual quote aggregation)

### F15: Export Documentation & Quality Compliance
- **What:** Flip ClearFast for exports: generate export documentation, check EU/international quality standards compliance, flag issues before shipment.
- **Why:** 76 Nigerian agro-export consignments rejected by EU in 2022. Each rejection = total loss of shipment value.
- **Revenue impact:** Opens second market (exporters) with same tech. +50% TAM expansion.
- **Build effort:** 3-4 weeks (different form set, quality standard database)

### F16: Shipping Line Rate Comparison
- **What:** Before goods arrive, compare freight rates from multiple shipping lines for the route.
- **Why:** Nigeria pays $7-9B annually to foreign ship owners. No comparison tool exists.
- **Revenue impact:** Commission per booking. Natural upstream extension of ClearFast.
- **Build effort:** 3-4 weeks (requires shipping line data/partnerships)

### F17: Container Tracking Integration
- **What:** Track container location from origin port to Lagos arrival to final delivery. Live map view.
- **Why:** Importers currently call their agent for updates. Real-time tracking reduces anxiety and enables planning.
- **Revenue impact:** Retention feature + differentiator. Makes ClearFast "the app importers live in."
- **Build effort:** 2 weeks (shipping line tracking APIs — most major lines have them)

---

## GenTrack (05) — Generator Cost Dashboard

### F18: Water/Borehole Cost Tracking
- **What:** Add water as a second utility: borehole maintenance, tanker deliveries, water treatment costs.
- **Why:** 95%+ of businesses self-provision water. Same "invisible cost" problem as generators. Same buyer (facility manager).
- **Revenue impact:** Expands product from "generator tool" to "utilities management platform." +N20K/month upsell.
- **Build effort:** 1 week (same data model, different asset type)

### F19: Solar Installer Referral Marketplace
- **What:** When GenTrack shows a business would save 30%+ with solar, connect them to vetted solar installers. Earn referral fee.
- **Why:** Arnergy, Daystar, etc. need qualified leads with data. GenTrack produces exactly these leads.
- **Revenue impact:** N50-200K referral fee per solar installation. High-value, one-time revenue per customer.
- **Build effort:** 2 weeks (installer directory + referral tracking + lead qualification logic)

### F20: Generator Asset Insurance
- **What:** Offer equipment insurance for generators via InsureMatch integration. Protect against theft, breakdown, fire.
- **Why:** Generators are N2-50M assets. Businesses self-insure (absorb loss if stolen/broken).
- **Revenue impact:** Insurance commission (15-25% of premium). Recurring annual revenue.
- **Build effort:** 1 week (integration with insurance partners)

---

## CashFlow AI (06) — Working Capital Forecasting

### F21: Lender Marketplace Integration
- **What:** When forecast shows a shortfall, present pre-qualified lending options from partner MFBs, fintechs, and commercial banks. Earn referral commission.
- **Why:** CashFlow AI identifies the EXACT moment a business needs financing and the EXACT amount. Lenders pay premium for this qualified intent signal.
- **Revenue impact:** 1-3% of funded loan amount. N5M loan = N50-150K per referral. Could exceed SaaS revenue.
- **Build effort:** 3-4 weeks (lender partnerships + API integrations)

### F22: Receipt & Expense Capture
- **What:** Snap photo of receipt → OCR extracts amount, vendor, category → auto-categorizes in cash flow model.
- **Why:** Manual expense entry is the #1 reason SMEs stop using financial tools. Photo capture removes friction.
- **Revenue impact:** Adoption/retention feature. Improves forecast accuracy (better data = better predictions).
- **Build effort:** 1-2 weeks (OCR + categorization model)

### F23: Virtual CFO Report
- **What:** Monthly auto-generated executive summary: cash position, burn rate, runway, top expenses, revenue trend, recommendations.
- **Why:** No Nigerian equivalent to Bench/Pilot. SME owners want CFO-level insights without hiring a CFO.
- **Revenue impact:** Premium tier feature. +N50-100K/month. Also serves as "proof of value" that justifies renewal.
- **Build effort:** 1 week (template + data population)

---

## CollectPro (07) — Debt Collection

### F24: Debtor Risk Scoring
- **What:** Score each debtor based on payment history, industry, company size, public records. Prioritize collection effort on recoverable debts.
- **Why:** Chasing every overdue invoice equally wastes effort. Focus on high-value, high-probability recoveries.
- **Revenue impact:** Increases recovery rate → increases performance fee revenue (2-5% of recovered).
- **Build effort:** 2 weeks

### F25: Payment Portal for Debtors
- **What:** Send debtor a unique link where they can: see outstanding amount, propose a payment plan, make partial payment, upload proof of payment.
- **Why:** Removes friction from payment. Debtor doesn't need to call, email, or visit. Self-service.
- **Revenue impact:** Increases recovery rate 15-25%. Core differentiator.
- **Build effort:** 2 weeks (Paystack payment integration + plan negotiation logic)

---

## Cross-Product Features

### F26: Accountant Partner Portal (applies to PayMatch, TaxGuard, CashFlow AI, ForexGuard)
- **What:** Multi-tenant dashboard where an accounting firm manages all their clients from one login. Switch between client workspaces. Aggregate reporting.
- **Why:** One accountant = 10-50 clients. Highest-leverage distribution channel. QuickBooks ProAdvisor model.
- **Revenue impact:** 10x customer acquisition multiplier. Accountant gets free access; clients pay.
- **Build effort:** 3-4 weeks (multi-tenancy + role-based access)

### F27: Regional Benchmarking Layer (applies to GenTrack, ForexGuard, PortPulse, TaxGuard)
- **What:** "Your costs vs Lagos average vs national average vs your sector average." Uses anonymized, aggregated data from all customers.
- **Why:** CBN data shows massive regional variance (South-East CI 18.7 vs North-East 52.7). Businesses want to know if their problems are local or systemic.
- **Revenue impact:** Premium analytics feature. Also creates data moat — more customers = better benchmarks = more valuable product.
- **Build effort:** 2 weeks (aggregation pipeline + anonymization)

### F28: USSD Fallback Interface (applies to all products)
- **What:** Critical functions accessible via USSD (*XXX#) for users without reliable internet. Check balance, get alerts, approve actions.
- **Why:** 42% of mobile connections still on 2G. USSD works on any phone, any network, no internet needed.
- **Revenue impact:** Expands addressable market 2-3x beyond smartphone/internet users.
- **Build effort:** 3-4 weeks (USSD gateway integration via Africa's Talking API)
