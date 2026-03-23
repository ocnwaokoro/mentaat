# PRD 02: TaxGuard — Multi-Agency Tax Compliance Automation

---

## 1. Executive Summary

TaxGuard is a tax compliance automation platform purpose-built for Nigerian SMEs navigating the country's fragmented tax landscape: 62 different taxes and levies spread across federal (FIRS), state, and local government levels, plus mandatory remittances to 5+ statutory agencies (PENCOM, NSITF, NHF, ITF, FIRS).

The product auto-calculates all statutory deductions per employee per state, generates pre-filled remittance forms for each agency, tracks every filing deadline on a unified calendar, and pushes SMS/WhatsApp alerts before due dates. It maintains a complete audit trail of filings and payments.

The core value proposition is penalty avoidance and time recovery, enabling businesses to expand without adding headcount. A single missed FIRS filing triggers N500K-5M in penalties — more than eight months of TaxGuard subscription. Finance officers currently spend 3-5 days per month on manual calculations and form-filling across agencies. TaxGuard compresses that to under an hour.

---

## 2. Market Opportunity

### The Pain is Quantified

- **69.7% of 1,900 businesses** cite "high/multiple taxes" as their top constraint (CBN November 2025 Business Expectations Survey).
- PwC Nigeria survey: **60% cite high taxes** as a business constraint; 83% cite power — but taxes are far more software-solvable than electricity.
- Nigerian businesses face **62 distinct taxes and levies**: 8 federal, 11 state, 20+ local government.

### Statutory Contribution Burden

Every company with employees must remit to multiple agencies monthly:

| Agency | Contribution | Employer Share | Employee Share |
|--------|-------------|----------------|----------------|
| PENCOM (Pension) | 18% of basic + housing + transport | 10% | 8% |
| NSITF (Employee Compensation) | 1% of total payroll | 1% | 0% |
| NHF (National Housing Fund) | 2.5% of basic salary | 0% | 2.5% |
| ITF (Industrial Training Fund) | 1% of total payroll | 1% | 0% |
| FIRS (PAYE) | Graduated (7%-24%) | Withheld by employer | Employee bears |

### Penalty Exposure

- Missed FIRS filing: **N500K-5M per instance** depending on company size and duration.
- Late PENCOM remittance: 2% monthly penalty on outstanding amount.
- NSITF non-compliance: prosecution risk under the Employee Compensation Act.
- Companies interact with **5+ agencies monthly** — each with its own portal, forms, and deadlines.

### Competitive Landscape

- **SeamlessHR** processed N500B in payroll but does not handle all-agency tax compliance end-to-end. Payroll-first, compliance-second.
- **Phillips Outsourcing** earns $45M/year — compliance services are a significant revenue driver. Proves willingness to pay, but expensive and manual.
- **N1.77T HR/BPO outsourcing market** growing at 12% CAGR — compliance complexity is a key driver of outsourcing demand.
- **No Nigerian-built tool handles all 62 taxes in one place.** The gap is a dedicated compliance engine, not another payroll system.

### Addressable Market

There are approximately 73,000 registered companies in Nigeria with 20-200 employees. At N60,000-120,000/month, even 0.1% penetration (73 companies) represents N4.4M-8.8M MRR.

The employment-expansion disconnect (expansion index 54-81 vs employment 8-40) means each new hire costs 18%+ in statutory contributions. Businesses rationally avoid hiring — making tax compliance automation MORE valuable as existing staff must handle more.

---

## 3. Target Persona

**Primary: Ngozi, Finance Officer at a 45-Person Manufacturing Company in Lagos**

- Age 32, B.Sc. Accounting from University of Lagos.
- Handles monthly payroll deductions and agency remittances in-house using Excel workbooks she inherited from the previous finance officer.
- Manually fills FIRS PAYE forms, PENCOM Schedule H forms, NSITF remittance forms — each with different formats and portals.
- Relies on an external chartered accountant for annual tax returns (costs N300K-500K/year) but manages all monthly obligations herself.
- Missed the NSITF deadline twice last year. Discovered a PAYE calculation error that resulted in a N250K penalty during an FIRS audit.
- Not a tax expert. Understands the basics but struggles with state-specific PAYE graduated tables and edge cases (new hires mid-month, terminations, back-pay adjustments).
- Comfortable with phone banking apps (GTBank, Access Bank mobile). Uses WhatsApp for business communication. Can navigate web applications but does not write formulas in Excel — she copies from the inherited template.
- Company sectors: manufacturing, professional services, healthcare, education, logistics.
- Priority sectors: Food/Beverage (63.24% capacity, stable, can afford software), Professional services, Healthcare. Avoid Electrical/Electronics (28% capacity).

**Secondary: Emeka, Managing Partner at an Accounting Firm with 30 SME Clients**

- Manages compliance for multiple client companies. Needs multi-company dashboard. Currently uses a paper calendar and Excel per client. TaxGuard as a tool for his practice multiplies impact: one accounting firm = 10-50 companies onboarded.

---

## 4. Problem Deep Dive

### Current Workflow (Manual, Monthly)

1. **Calculate PAYE** for each employee using the graduated tax table. The table varies by state — Lagos uses consolidated relief allowance (20% of gross + N200K or 1% of gross, whichever is higher), then applies progressive bands (7% on first N300K, 11% on next N300K, 15% on next N500K, 19% on next N500K, 21% on next N1.6M, 24% on amounts above N3.2M). Rivers State has the same federal bands but different relief interpretations in practice.
2. **Calculate PENCOM** at 18% split (10% employer, 8% employee) on basic salary + housing + transport allowances. Must match employee PFA (Pension Fund Administrator) details.
3. **Calculate NHF** at 2.5% of basic salary for employees earning above national minimum wage.
4. **Calculate NSITF** at 1% of total monthly payroll (employer-only contribution).
5. **Calculate ITF** at 1% of total annual payroll for companies with 5+ employees or N50M+ turnover (paid annually but calculated monthly).
6. **Generate separate remittance forms** for each agency. FIRS wants one format, PENCOM wants Schedule H, NSITF has its own portal form. Each requires company TIN, agency-specific registration numbers, employee-level breakdowns.
7. **Make separate payments** to each agency — typically via bank transfer with specific narration formats.
8. **Keep proof of payment** for audit trail — screenshots of bank transfers, printed receipts, agency acknowledgment letters.

### Where It Breaks

- **Formula errors in Excel** — a wrong cell reference on the PAYE graduated table miscalculates tax for every employee. Compounds monthly.
- **New hires and exits mid-month** — require pro-rated calculations that the Excel template does not handle. Finance officer guesses or asks the accountant.
- **State variation** — a company with employees in Lagos and Rivers must apply different PAYE tables. Most Excel templates assume a single state.
- **Deadline drift** — FIRS PAYE is due by the 10th of the following month. PENCOM is due by the 7th. NSITF has different deadlines. No single calendar tracks all of them.
- **Invisible local levies** — business premises levy, signage levy, tenement rate, development levy. Many SMEs do not know they owe these until an enforcement agent shows up.
- **No audit trail** — when FIRS or PENCOM audits, the finance officer scrambles to reconstruct 12 months of calculations from scattered Excel files and bank statements.

---

## 5. Solution Overview

TaxGuard is a web-based SaaS application that replaces the entire manual compliance workflow with an automated, auditable system.

### Core Loop

1. **Ingest** — Upload or maintain an employee roster with salaries, states of residence, tax ID numbers (TIN, PENCOM PIN, NHF number).
2. **Calculate** — TaxGuard's engine auto-computes ALL statutory deductions for every employee, applying the correct state-specific PAYE table, PENCOM split, NHF, NSITF, and ITF rates.
3. **Generate** — One-click production of pre-filled remittance forms for each agency in the exact format each agency expects (PDF, matching official templates).
4. **Alert** — SMS and WhatsApp reminders fire at 7 days, 3 days, and 1 day before each agency deadline. Dashboard shows countdown timers.
5. **Track** — Every filing is logged with date, amounts, proof of payment upload, and compliance status. Full audit trail exportable.
6. **Update** — When tax rates change (e.g., new minimum wage, revised PAYE bands), TaxGuard updates centrally and flags all affected companies.

### Key Differentiator

TaxGuard is not payroll software. It does not process salary payments. It sits downstream of payroll — whether the company uses Excel, SeamlessHR, or manual bank transfers for salary — and handles the compliance layer that payroll tools neglect. This positioning avoids direct competition with established payroll platforms and instead complements them.

---

## 6. MVP Feature Set (MoSCoW)

### MUST Have (Launch Blockers)

| Feature | Detail |
|---------|--------|
| Employee Roster Management | Add, edit, remove employees. Fields: name, employee ID, gross salary, basic salary, housing allowance, transport allowance, state of residence, LGA, TIN, PENCOM PIN, NHF number, employment start date, PFA name. |
| PAYE Calculator (All 36 States + FCT) | Graduated tax table engine with consolidated relief allowance. Configurable per state. Handles pro-rated calculations for mid-month joiners/leavers. |
| PENCOM Calculator | 10% employer + 8% employee on (basic + housing + transport). Outputs per-employee and company totals. |
| NSITF Calculator | 1% of total monthly payroll. Employer contribution only. |
| NHF Calculator | 2.5% of basic salary. Employee contribution. |
| ITF Calculator | 1% of total annual payroll. Monthly accrual, annual remittance. |
| Remittance Form Generation | PDF output matching official FIRS, PENCOM (Schedule H), NSITF, NHF, ITF form formats. Pre-filled with company and employee data. |
| Deadline Calendar with Alerts | Monthly view showing all agency deadlines. Color-coded by agency. Status per deadline: pending, filed, overdue. In-app alerts. |
| Payment Tracking | Mark deadlines as "paid" with amount and date. Upload proof of payment (receipt image/PDF). |
| Excel Export | Export any calculation, roster, or filing history to .xlsx for accountant review. |
| Company Profile & Settings | Company name, RC number, TIN, state, sector, agency registration numbers. Multi-state employee support. |

### SHOULD Have (High Value, Not Launch-Blocking)

| Feature | Detail |
|---------|--------|
| SMS/WhatsApp Deadline Reminders | Via Termii API. Configurable recipients (finance officer, MD). Fire at 7, 3, and 1 day before deadline. |
| Multi-Company Support | For accounting firms managing multiple clients. Company switcher. Aggregated dashboard. |
| Annual Tax Return Preparation | Consolidate 12 months of PAYE data into annual filing format for each employee (Form H1). |
| Bulk CSV Employee Import | Upload employee roster from existing Excel/CSV. Column mapping interface. Validation with error reporting. |
| Contractor compliance module | Withholding tax (WHT at 5-10%) calculation and tracking for contract workers. As businesses shift from employees to contractors to avoid statutory burden, contractor tax compliance becomes critical. FIRS scrutiny on contractor vs employee classification is increasing. |

### COULD Have (Nice-to-Have)

| Feature | Detail |
|---------|--------|
| Direct API Filing | Submit filings directly to FIRS TaxPro Max, PENCOM portal via API where available. |
| Payslip Generation | Employee-facing payslip showing gross, deductions, net. Printable/downloadable. |
| Employee Self-Service Portal | Employees view their own deductions, download payslips, update personal details. |

### WON'T Have (MVP Exclusions)

- Full payroll processing (salary disbursement to bank accounts)
- Bank integrations for automated payment
- Benefits administration (HMO, leave management)
- Recruitment or HR management features

---

## 7. Key Screens & UX

### Screen 1: Dashboard

The primary landing screen after login. Designed for a 30-second status check.

- **Next Filing Due** — large countdown timer showing the nearest deadline (e.g., "FIRS PAYE: 3 days, 14 hours"). Agency logo and color.
- **Total Statutory Costs This Month** — single large number (e.g., "N2,847,320"). Breakdown on hover: PAYE N1.2M, PENCOM N980K, NSITF N120K, NHF N347K, ITF N200K.
- **Compliance Status Grid** — one card per agency, color-coded: green (filed & paid), yellow (due within 7 days), red (overdue). Click any card to jump to that agency's filing detail.
- **Quick Actions** — "Run This Month's Calculations", "Generate All Forms", "Add Employee".
- **Recent Activity Feed** — last 5 actions (e.g., "PENCOM forms generated", "New employee added", "NSITF marked as paid").

### Screen 2: Employee Roster

Tabular view of all employees with inline editing.

- **Columns**: Name, Employee ID, Gross Salary, State, TIN, PENCOM PIN, Status (Active/Exited), Date Joined.
- **Actions**: Add Employee (slide-out form), Edit (inline), Deactivate (soft delete with end date), CSV Import (upload button with column mapper).
- **Search & Filter**: By name, state, salary range, status.
- **Bulk Actions**: Select multiple employees for state change, salary update, or export.

### Screen 3: Monthly Calculation

The computational core. Auto-generated each month or on demand.

- **Summary Bar**: Month/Year selector. Total headcount. Total gross payroll. Total deductions by agency.
- **Employee Breakdown Table**: Each row shows one employee with columns for Gross, Taxable Income, PAYE, PENCOM (Employer), PENCOM (Employee), NHF, NSITF, ITF. Net salary in the final column.
- **Agency Summary Cards**: Beneath the table, one card per agency showing total amount due, deadline date, and "Generate Form" button.
- **"Generate All Forms" Button**: Produces PDFs for every agency in one action. Downloads as ZIP or displays inline for review.
- **Calculation Audit**: Click any cell to see the full calculation breakdown (e.g., PAYE: gross N500K, relief N300K, taxable N200K, band 1: N300K at 7% = N21K...).

### Screen 4: Deadline Calendar

Monthly calendar view focused on compliance dates.

- **Color Coding**: FIRS = blue, PENCOM = green, NSITF = orange, NHF = purple, ITF = teal.
- **Status Indicators**: Each deadline shows a status badge — Filed (checkmark), Pending (clock), Overdue (exclamation).
- **Click to File**: Clicking a deadline opens the filing detail — amount due, form download, payment upload, mark as filed.
- **Notification Settings**: Per-agency toggle for SMS/WhatsApp reminders. Configure reminder schedule (7/3/1 days before).

### Screen 5: Filing History

Complete audit trail for compliance documentation.

- **Filterable Table**: Date, Agency, Period (e.g., "March 2026"), Amount, Status, Proof of Payment.
- **Proof Upload**: Attach bank transfer receipt, agency acknowledgment, or TaxPro Max confirmation screenshot.
- **Export**: Download full filing history as Excel for external auditors.
- **Year-at-a-Glance**: Toggle view showing 12-month compliance grid — green/red per agency per month. Instantly shows gaps.

### UX Principles

- **Progressive complexity**: Dashboard shows totals only. Drill into any number for employee-level detail. Settings (company profile, registration numbers, tax rate overrides) are behind a gear icon — set once, rarely revisited.
- **Mobile-responsive**: Finance officers frequently check deadline status from their phones. Dashboard and calendar must work on 375px screens.
- **Minimal data entry**: Once the employee roster is set up, monthly calculations are fully automatic. The user's monthly workflow is: review calculations, generate forms, make payments externally, upload proof.

---

## 8. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router) | SSR for fast initial load, React for interactive calculation views |
| Database | Supabase PostgreSQL | Row-level security for multi-company isolation, real-time subscriptions for dashboard updates |
| Auth | Supabase Auth | Email/password + magic link. Role-based: Admin, Finance Officer, Viewer |
| PDF Generation | @react-pdf/renderer | Server-side PDF generation matching official agency form layouts |
| Notifications | Termii API | SMS and WhatsApp delivery for deadline reminders. Nigerian carrier optimization. |
| Cron Jobs | Vercel Cron | Daily deadline check at 8:00 AM WAT. Triggers notification pipeline. |
| Hosting | Vercel | Edge deployment, automatic scaling, zero DevOps overhead |
| Offline | IndexedDB (Dexie.js) | Cache employee roster and latest calculations for offline access |

### Tax Engine Architecture

The tax calculation module is the core IP. It runs server-side only (never in the browser) to ensure consistency and prevent tampering.

```
tax-engine/
  config/
    paye-tables/
      lagos.json        # Graduated brackets + relief rules
      rivers.json
      fct-abuja.json
      ... (37 files total, one per state + FCT)
    rates.json          # PENCOM, NSITF, NHF, ITF rates
    deadlines.json      # Agency deadlines by month
  calculators/
    paye.ts             # Consolidated relief + graduated bracket logic
    pencom.ts           # 10% employer + 8% employee split
    nhf.ts              # 2.5% of basic
    nsitf.ts            # 1% of total payroll
    itf.ts              # 1% of total payroll (annual)
  engine.ts             # Orchestrator: takes employee[] + company config → full calculation result
```

**PAYE Calculation Logic** (simplified):
1. Compute Gross Income = Basic + Housing + Transport + Other Allowances
2. Compute Consolidated Relief Allowance = max(N200,000, 1% of Gross) + 20% of Gross
3. Taxable Income = Gross - CRA - Pension Contribution (employee 8%)
4. Apply graduated brackets: 7% (first N300K), 11% (next N300K), 15% (next N500K), 19% (next N500K), 21% (next N1.6M), 24% (above N3.2M)
5. Monthly PAYE = Annual Tax / 12

### Database Schema (Core Tables)

```sql
companies
  id, name, rc_number, tin, state, lga, sector, pencom_reg, nsitf_reg, nhf_reg, itf_reg, created_at

employees
  id, company_id, name, employee_id, gross_salary, basic_salary, housing_allowance,
  transport_allowance, other_allowances, state, lga, tin, pencom_pin, nhf_number,
  pfa_name, employment_date, exit_date, status, created_at

tax_calculations
  id, company_id, employee_id, period (YYYY-MM), gross_income, taxable_income,
  paye, pencom_employer, pencom_employee, nhf, nsitf_share, itf_share,
  calculated_at, calculation_version

filings
  id, company_id, agency (enum: FIRS, PENCOM, NSITF, NHF, ITF), period,
  amount, status (pending, filed, overdue), filed_at, deadline_date,
  form_pdf_url, notes

payment_proofs
  id, filing_id, file_url, uploaded_at, uploaded_by

deadlines
  id, agency, period, due_date, reminder_sent_7d, reminder_sent_3d, reminder_sent_1d
```

### Rate Update Mechanism

- Admin panel allows updating any tax rate or PAYE bracket in the JSON configuration.
- On update, the system flags all companies affected (by state for PAYE changes, all companies for federal rate changes).
- Affected companies see a banner: "Tax rates updated effective [date]. Please re-run calculations for [period]."
- Changelog maintained for audit purposes — every rate change is versioned with effective date and gazette reference.

---

## 9. Pricing & Unit Economics

### Pricing Tiers

| Tier | Employees | Monthly Price | Per-Employee |
|------|-----------|--------------|-------------|
| Starter | Up to 50 | N60,000 | N1,200 |
| Growth | 51-200 | N100,000 | N500-1,960 |
| Enterprise | 200+ | N120,000 | < N600 |

### Launch Incentives

- **14-day free trial** — full access, no credit card required.
- **Founding customer rate**: N30,000/month (50% off Starter) for the first 10 paying customers. Locked for 12 months.

### Unit Economics

| Metric | Value |
|--------|-------|
| CAC | $0-20 (LinkedIn outreach, accountant referrals, no paid ads at launch) |
| Monthly infrastructure cost per customer | ~N2,000 (Supabase free tier covers first 50 customers, Vercel hobby/pro) |
| Gross margin | ~95% at scale |
| LTV assumption | 18 months average retention x N60,000 = N1,080,000 (~$700) |
| LTV:CAC | > 35:1 |

### ROI Pitch to Customers

> "One missed FIRS penalty (N500,000 minimum) pays for 8+ months of TaxGuard. One missed PENCOM penalty compounds at 2% monthly. TaxGuard costs less than one hour of your external accountant's time per month — and it never miscalculates."

### Revenue Targets

| Milestone | Customers | MRR |
|-----------|-----------|-----|
| Month 1 | 5 (founding rate) | N150,000 (~$97) |
| Month 2 | 12 (5 founding + 7 full price) | N570,000 (~$370) |
| Month 3 | 30 | N1,500,000 (~$975) |
| Month 6 | 60 | N3,600,000 (~$2,340) |
| Month 12 | 150 | N10,000,000+ (~$6,500) |

Break-even on infrastructure: 3 customers. Break-even on founder time (opportunity cost): ~30 customers at N60K = N1.8M/month (~$1,170).

---

## 10. Go-to-Market

### Phase 1: Accounting Firm Channel (Weeks 1-4)

Accounting firms are the single highest-leverage channel. One firm manages compliance for 10-50 client companies. Converting one firm partner converts an entire portfolio.

1. **Identify 20 mid-tier accounting firms** in Lagos, Port Harcourt, and Abuja (not Big 4 — they have internal tools. Target firms with 20-100 clients).
2. **LinkedIn outreach** to managing partners: "I built a tool that auto-generates FIRS, PENCOM, NSITF, NHF, and ITF forms for your clients. Would save your team 3-5 days per month. Can I show you in 15 minutes?"
3. **Offer**: Free multi-company dashboard for accounting firms. They pay per client company at a 20% discount off retail. Firm becomes a reseller.
4. **ICAN (Institute of Chartered Accountants of Nigeria) events**: Attend monthly chapter meetings in Lagos and Port Harcourt. 5-minute demo slot if possible.

### Phase 2: Direct SME Outreach (Weeks 2-6)

5. **LinkedIn search**: "Finance Manager" OR "Accountant" OR "Financial Controller" + "Nigeria" + company size 20-200.
6. **DM script**: "Quick question — how long does it take your team to process PAYE and PENCOM forms each month? I'm building a tool that does it in one click. Happy to give you free access to test."
7. **Family and personal network**: Ask for warm introductions to 5 SME owners in Port Harcourt. Offer founding customer rate.

### Phase 3: Content & Partnerships (Weeks 4-12)

8. **LinkedIn article**: "Are You Paying All 62 Nigerian Taxes? The Complete SME Compliance Checklist." Practical, shareable, establishes authority. CTA: "Use TaxGuard to automate this checklist."
9. **Compliance calendar PDF**: Free downloadable 2026 filing deadline calendar for all agencies. Gated behind email. Nurture to trial.
10. **Partner with existing payroll platforms**: Approach SeamlessHR and PaySpace about positioning TaxGuard as a compliance add-on. "Your customers already process payroll with you — we handle the filing that you don't."

### Phase 4: Referral Engine (Ongoing)

11. **Referral incentive**: 1 month free for every converted referral. Finance officers know other finance officers — peer recommendation is the strongest signal in this segment.
12. **Accountant affiliate program**: Chartered accountants who refer 5+ clients get a permanent 25% revenue share per client.

---

## 11. Risks & Mitigations

### Risk 1: Tax Rates and Rules Change Frequently

Nigeria's tax landscape shifts with new Finance Acts, state executive orders, and agency circulars. PAYE relief allowance rules changed in the 2020 Finance Act. Minimum wage changes affect NHF thresholds.

**Mitigation**: Admin update panel allows rate changes within hours. Every rate change is versioned with effective date and official gazette reference. Email/SMS blast to all affected customers: "PAYE rates for Lagos updated effective [date]. Log in to re-run calculations." Maintain a public changelog. Subscribe to FIRS, PENCOM, and state revenue service bulletins for early notice.

### Risk 2: Businesses Don't Trust Software for Tax Calculations

Tax errors have real financial consequences. Finance officers may not trust an automated system over their own Excel formulas, even when those formulas are wrong.

**Mitigation**: Full calculation transparency — every number is clickable to show the complete breakdown with the specific tax code section cited (e.g., "Personal Income Tax Act, Sixth Schedule, as amended by Finance Act 2020"). Allow manual override on any calculated field. Side-by-side comparison: paste your Excel numbers and TaxGuard's numbers to spot discrepancies. Offer a "verification mode" for the first 3 months where the tool runs in parallel with existing process.

### Risk 3: State-Level Tax Variation is Massive

37 different PAYE configurations (36 states + FCT). Some states have additional levies (Lagos has Land Use Charge, Kano has additional local levies). Getting every state right on day one is impractical.

**Mitigation**: Launch with Lagos + Rivers + FCT only. These three jurisdictions cover an estimated 50%+ of formal SMEs. Add states based on customer demand — each new state requires only a new JSON config file and validation against that state's revenue service publications. Maintain a public roadmap of supported states.

### Risk 4: Overlap with Payroll Software

SeamlessHR, PaySpace, and others already touch some of these calculations as part of payroll processing. Customers may ask "why not just use my payroll software?"

**Mitigation**: Position explicitly as a compliance add-on, not a payroll replacement. Message: "Your payroll software pays salaries. TaxGuard files your taxes." Practical differentiator: payroll tools calculate PAYE for payslips but do not generate PENCOM Schedule H forms, NSITF remittance forms, or maintain a multi-agency filing calendar with alerts. Integrate with payroll via CSV import — wherever the salary data lives, TaxGuard consumes it.

### Risk 5: Some Taxes are Informal or Unpredictable

Local government levies (business premises, signage, development levies) are inconsistently applied, poorly documented, and sometimes collected by agents with questionable authority.

**Mitigation**: MVP covers formal federal and state taxes only — the 5 major agencies. Local levies are added as they are formally documented, starting with Lagos LGA levies which are the most codified. Include a disclaimer: "TaxGuard covers federal and state statutory obligations. Consult your tax advisor for local government levies in your LGA."

---

## 12. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Weight | Weighted | Rationale |
|-----------|:---:|:---:|:---:|-----------|
| Build Speed | 7 | 5% | 0.35 | Tax calculation logic is complex but well-defined; PAYE graduated table, fixed-rate agency contributions. 3-4 weeks for MVP with state-specific config files. PDF form matching requires design effort. |
| Time to Revenue | 7 | 15% | 1.05 | Clear, quantifiable pain (penalties). But longer sales cycle than consumer products — finance teams need management approval, may want to run in parallel for 1-2 months before committing. Founding rate accelerates conversion. |
| Market Size | 8 | 15% | 1.20 | Every Nigerian company with 5+ employees needs multi-agency compliance. ~73K registered companies in the 20-200 employee range. N1.77T HR/BPO outsourcing market growing at 12% CAGR — compliance is a key outsourcing driver that TaxGuard can insource. |
| Competition | 8 | 10% | 0.80 | No dedicated all-agency compliance tool exists in Nigeria. SeamlessHR does payroll but not comprehensive filing. Phillips Outsourcing does compliance but manually at consulting rates. The gap is a software product priced for SMEs, not enterprise consulting. |
| Skill Fit | 6 | 15% | 0.90 | More rules-engine than AI/ML — less technically exciting but highly buildable. Requires careful attention to regulatory detail rather than algorithmic innovation. Risk of becoming a "regulatory maintenance" product that demands ongoing updates. |
| Capital Required | 9 | 10% | 0.90 | Pure software on free/low-cost infrastructure tiers. No hardware, no float, no regulatory capital. Supabase free tier + Vercel hobby plan covers the first 50 customers. Termii SMS costs are per-message and negligible at early scale. |
| Buyer Clarity | 7 | 20% | 1.40 | Finance Managers and Accountants are identifiable on LinkedIn and through ICAN networks. Job title search is reliable. But need to educate on the tool category — "tax compliance software" is not an established category in Nigerian SME purchasing. Requires demo-driven sales. |
| Fintech Upside | 6 | 10% | 0.60 | Could expand into tax payment processing (collect from company, remit to agencies), salary advances against calculated net pay, or compliance-linked lending (verified tax compliance as creditworthiness signal). Less natural fintech extension than invoicing/payments but viable. |

### Weighted Composite Score: 7.20 / 10

**Interpretation**: Strong build candidate. The market need is clear and quantified, competition is minimal, and capital requirements are negligible. The main drags are skill fit (maintenance-heavy regulatory product) and moderate fintech upside. The accounting firm channel provides a realistic path to 30+ customers in 90 days without paid acquisition. Proceed to build.
