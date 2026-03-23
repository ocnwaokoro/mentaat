# Test Plan: Business Validation + Functional Testing

**Purpose:** How to validate each product hypothesis AND how to test the software during build.

---

## PART 1: BUSINESS VALIDATION TESTS (Before & During Build)

### Test Protocol Per Product

Each product runs through 3 gates. Fail any gate → kill or pivot.

#### Gate 1: Problem Confirmation (Days 1-3)
- **Sample:** 10 target buyers per product
- **Method:** 15-min LinkedIn/Zoom/WhatsApp call
- **Script:**
  1. "Walk me through how you handle [specific process] today."
  2. "How much time does that take per week/month?"
  3. "What's the most frustrating part?"
  4. "Have you tried any tools or software for this?"
  5. "What did it cost you the last time this went wrong?" (quantify pain)
- **Pass:** 6+ of 10 confirm the pain AND describe a manual/expensive workaround
- **Kill:** <4 confirm, OR pain is real but they say "it's not worth paying to fix"

#### Gate 2: Willingness to Pay (Days 4-7)
- **Sample:** The 6+ who passed Gate 1
- **Method:** Follow-up call with mock pricing
- **Script:**
  1. "If I built a tool that does [solution] — would you try it?"
  2. "What would you expect to pay monthly for that?"
  3. "If I offered a founding customer rate of N[X]/month with 14-day free trial — would you sign up this month?"
  4. "Can I send you a payment link for the first month right now?" (the real test)
- **Pass:** 3+ verbal "yes" commitments, 1+ actual pre-payment or signed LOI
- **Kill:** Everyone says "interesting" but nobody commits money

#### Gate 3: Product-Market Fit (Weeks 3-6, after MVP)
- **Sample:** 3-5 pilot customers
- **Method:** 14-day free trial with weekly check-in calls
- **Metrics:**
  - Login frequency (daily = good, weekly = okay, never = bad)
  - Feature usage (which features used, which ignored)
  - Time-to-value (how long until first "aha" moment)
  - Support tickets (what's confusing)
  - NPS at day 14: "How disappointed would you be if this product disappeared?"
- **Pass:** 2+ convert to paid after trial, NPS >7, weekly active usage
- **Kill:** <2 convert, or usage drops after first week

---

### Product-Specific Validation Questions

| Product | Gate 1 Key Question | Gate 2 Price Test | Kill Signal |
|---------|-------------------|-------------------|-------------|
| **PayMatch** | "How do you match payments to invoices?" | N75K/month | "Our accountant handles it fine" |
| **TaxGuard** | "How many taxes do you file monthly? Ever paid a penalty?" | N60K/month | "Our accountant does all compliance" |
| **ForexGuard** | "How do you track your USD exposure?" | N150K/month | "We don't import enough to care" |
| **ClearFast** | "Show me paperwork for your last container" | N75K/month | "My clearing agent handles everything" |
| **GenTrack** | "Do you know your cost per kWh from generators?" | N40K/month | "I know diesel is expensive, that's enough" |
| **CashFlow AI** | "How do you forecast cash position 60 days out?" | N75K/month | "I check my bank balance daily, that's enough" |
| **CollectPro** | "How do you chase overdue invoices? Recovery rate?" | N50K/month | "We call them, it works" |
| **PortPulse** | "Do you know your average clearance time?" | N40K/month | "My agent tells me when it's ready" |
| **SupplyLink** | "Would you sell invoices at 5% discount for immediate cash?" | 1% fee | "We can wait for payment" |
| **FreightCompare** | "How do you find truck owners for shipments?" | N25K/booking | "We use the same 2-3 guys always" |

---

### Parallel Validation Schedule (Top 3)

| Day | PayMatch | ClearFast | ForexGuard |
|-----|----------|-----------|------------|
| 1 | Find 15 distributors on LinkedIn | Have family intro 5 clearing agents | Find 10 manufacturers via MAN |
| 2 | Send outreach messages | Schedule Zoom calls | Send LinkedIn outreach |
| 3 | First 3-5 calls (Gate 1) | First 3 calls (Gate 1) | First 2-3 calls (Gate 1) |
| 4-5 | Complete 10 calls | Complete 5-7 calls | Complete 5-7 calls |
| 6 | Score Gate 1. Pass? → Gate 2 | Score Gate 1. Pass? → Gate 2 | Score Gate 1. Pass? → Gate 2 |
| 7-8 | Gate 2: price test with top 6 | Gate 2: price test with top 4 | Gate 2: price test with top 4 |
| 9-10 | Decision: Build or kill | Decision: Build or kill | Decision: Build or kill |

**You can validate all 3 in parallel in 10 days.**

---

## PART 2: FUNCTIONAL TESTING DURING BUILD (Software Tests)

### Testing Stack

| Layer | Tool | Purpose |
|-------|------|---------|
| Unit Tests | Vitest | Test individual functions (matching algorithm, tax calculations, FX conversions) |
| Integration Tests | Vitest + Supabase local | Test API routes with database |
| E2E Tests | Playwright | Test full user flows in browser |
| API Tests | Vitest + supertest | Test API endpoints directly |
| Visual Regression | Playwright screenshots | Catch UI regressions |

### Test Strategy Per Product

#### PayMatch — Critical Test Cases

**Matching Engine (Unit Tests — MOST IMPORTANT)**
```
T1: Exact match — invoice N500,000 matches payment N500,000 from same customer → auto-match
T2: Amount tolerance — invoice N500,000, payment N498,500 (0.3% rounding) → suggest match with confidence score
T3: Partial payment — invoice N500,000, payment N200,000 → mark as partial, show N300,000 remaining
T4: Overpayment — invoice N500,000, payment N550,000 → match + flag N50,000 credit
T5: Split payment — invoice N500,000, two payments N300,000 + N200,000 → suggest combined match
T6: Name fuzzy match — invoice to "Dangote Industries Ltd" matches payment from "DANGOTE IND" → match with confidence
T7: Name mismatch — invoice to "Company A" payment from "Company B" → no match (even if amount matches)
T8: Duplicate detection — same invoice uploaded twice → flag duplicate, don't double-count
T9: Date proximity — payment 30 days after invoice date scores higher than payment 90 days after
T10: Zero amount — invoice or payment with N0 → handled gracefully, not matched to anything
T11: Multiple bank accounts — payments from GTBank + Zenith for same customer → aggregate correctly
T12: Currency handling — all amounts stored and compared in kobo (integer) to avoid floating point errors
```

**CSV Parser (Unit Tests)**
```
T13: GTBank CSV format → parses correctly (date, narration, credit, debit, balance)
T14: Zenith Bank CSV format → parses correctly (different column order)
T15: Access Bank CSV format → parses correctly
T16: First Bank CSV format → parses correctly
T17: Unknown bank format → graceful error with helpful message
T18: Empty CSV → error message, not crash
T19: CSV with 10,000+ rows → completes in <5 seconds
T20: CSV with special characters in narration (Yoruba/Igbo names, ampersands) → handles correctly
```

**OCR Pipeline (Integration Tests)**
```
T21: Clean PDF invoice → extracts customer name, amounts, date, invoice number with >90% accuracy
T22: Phone photo of invoice (slight angle, variable lighting) → still extracts key fields
T23: Handwritten invoice → graceful failure with "please enter manually" message
T24: Multi-page invoice → extracts from all pages
T25: Invoice in non-standard format → extracts what it can, flags low-confidence fields
```

**API Routes (Integration Tests)**
```
T26: POST /api/invoices — create invoice → returns 201 with invoice object
T27: POST /api/invoices/upload-csv — upload CSV → creates multiple invoices, returns count
T28: POST /api/bank-transactions/upload-csv — upload bank CSV → creates transactions, returns count
T29: POST /api/matching/run — trigger matching → returns match results with confidence scores
T30: PATCH /api/matches/:id/confirm — confirm a suggested match → updates both invoice and transaction
T31: PATCH /api/matches/:id/reject — reject a suggested match → removes suggestion
T32: GET /api/reports/aging — returns aging report grouped by 30/60/90/120+ days
T33: GET /api/reports/export-excel — returns .xlsx file with correct formatting
T34: All routes return 401 without auth token
T35: All routes return 403 for wrong company's data (multi-tenant isolation)
```

**E2E User Flows (Playwright)**
```
T36: Signup → onboarding → upload first invoice CSV → see invoices in table
T37: Upload bank statement CSV → see transactions → run matching → see suggested matches
T38: Confirm match → invoice status changes to "paid" → aging report updates
T39: Reject match → invoice stays "unpaid" → can manually match to different transaction
T40: Export aging report to Excel → file downloads → opens correctly in Excel
T41: Send WhatsApp reminder for overdue invoice → confirmation shown
T42: Offline mode: load dashboard → go offline → can still view data → come back online → syncs
```

#### TaxGuard — Critical Test Cases

**Tax Calculation Engine (Unit Tests — MOST IMPORTANT)**
```
T1: Lagos PAYE — salary N5M/year → correct graduated bracket calculation with CRA
T2: Rivers PAYE — same salary → different result (state-specific rates)
T3: FCT PAYE — same salary → different result
T4: PENCOM — N500K/month salary → employer N50K (10%) + employee N40K (8%) = N90K total
T5: NSITF — N500K/month → N5K (1%)
T6: NHF — N500K/month → N12.5K (2.5%)
T7: ITF — company with 5+ employees OR N50M+ turnover → 1% of payroll
T8: ITF — company with 4 employees AND <N50M turnover → exempt
T9: Consolidated Relief Allowance — max(N200K, 1% of gross) + 20% of gross
T10: Mid-month hire — employee starts on 15th → pro-rated calculations for all taxes
T11: Mid-month exit — employee leaves on 20th → pro-rated + final settlement
T12: Bonus payment — N1M bonus → taxed at marginal rate, not average rate
T13: Minimum wage employee (N70K/month) → verify all deductions, net pay > 0
T14: High earner (N5M/month) → correct top-bracket calculation
T15: All 36 states + FCT → state config files exist and produce valid output
```

**Deadline Engine (Unit Tests)**
```
T16: PAYE due 10th of following month → alert fires 3 days before
T17: PENCOM due 7 working days after pay date → correct date calculation (skip weekends/holidays)
T18: Annual tax return (March 31) → alert fires 30 days, 14 days, 7 days, 1 day before
T19: Leap year handling → Feb 29 deadlines correct
T20: Nigerian public holidays → correctly excluded from working day counts
```

#### ForexGuard — Critical Test Cases

**Exposure Calculator (Unit Tests)**
```
T1: Single USD payable N10M → at N1,535/$ → exposure correctly calculated
T2: Multiple currencies (USD + GBP + EUR) → each calculated at correct rate, total in NGN
T3: Partially paid payable → remaining exposure only
T4: Payable due in 30 days vs 90 days → time-weighted exposure different
T5: Rate change simulation — "what if naira drops 10%" → all exposures recalculated correctly
T6: Historical rate lookup → correct rate for any given date in last 12 months
```

#### ClearFast — Critical Test Cases

**HS Code Engine (Unit Tests)**
```
T1: "Refined palm oil in 25L drums" → HS 1511.90 with high confidence
T2: "iPhone 15 Pro Max" → HS 8517.13 (cellular phones)
T3: Ambiguous description "machine parts" → top 3 suggestions with confidence scores
T4: Nigerian-specific terminology → correct mapping (e.g., "garri" → correct food HS code)
T5: Duty rate lookup by HS code → correct ECOWAS CET rate returned
```

---

### Testing Principles (All Products)

1. **Test the money math first.** Any calculation that produces a naira amount gets unit tested exhaustively. Rounding errors, floating point, currency conversion — all tested.

2. **Test multi-tenancy isolation.** Company A must NEVER see Company B's data. Every API route tested for tenant isolation.

3. **Test offline resilience.** Cache layer tested: data loads from cache when offline, syncs when back online, conflicts resolved correctly.

4. **Test CSV edge cases.** Nigerian bank CSVs are messy: different encodings (UTF-8, Windows-1252), inconsistent date formats (DD/MM/YYYY vs MM/DD/YYYY), extra whitespace, empty rows. Test all of these.

5. **Test with realistic data volumes.** A distributor with 200 customers and 500 invoices/month is the baseline. Test with 1,000+ records to catch performance issues early.

6. **Test Excel export.** Every exported .xlsx must open correctly in Excel 2016+ and Google Sheets. Formatted headers, correct number formatting (NGN currency), date formatting.

---

### Test-Driven Development Workflow

For each feature:
1. **Write the test first** (what should happen)
2. **Run test → see it fail** (red)
3. **Write minimum code to pass** (green)
4. **Refactor** (clean)
5. **Commit**

For the matching engine specifically, build a test dataset of 50 invoices + 50 transactions with known correct matches. Run matching algorithm against this dataset. Measure precision (false matches) and recall (missed matches). Target: >95% precision, >85% recall.

---

### CI/CD Pipeline

```
On every push:
1. Vitest unit tests (must pass)
2. Vitest integration tests (must pass)
3. TypeScript type check (must pass)
4. ESLint (must pass)
5. Playwright E2E (must pass)
6. Build Next.js (must succeed)
7. Deploy to Vercel preview URL
8. Notify via WhatsApp (Termii) if any step fails
```

Set up with GitHub Actions. Total pipeline time target: <5 minutes.

---

## PART 3: COMBINED TIMELINE

| Week | Business Validation | Build & Test |
|------|-------------------|-------------|
| 1 | Gate 1: 10 calls per product (top 3 in parallel) | Set up repo, CI/CD, testing stack |
| 2 | Gate 2: Price test with interested buyers | Build matching engine with full unit test suite |
| 3 | Decision: which product passed both gates? | Build CSV parser, API routes, integration tests |
| 4 | Gate 3 prep: identify 3-5 pilot customers | Build UI, E2E tests, deploy MVP |
| 5 | Gate 3: launch 14-day pilot | Fix bugs from pilot, add requested features |
| 6 | Gate 3: evaluate pilot results, convert to paid | Polish, add WhatsApp notifications, Excel export |
| 7-8 | Expand: 10 more customers using pilot testimonials | Iterate based on usage data |

**Key principle:** Business validation and building happen IN PARALLEL, not sequentially. You're calling customers in the morning and writing code in the afternoon.
