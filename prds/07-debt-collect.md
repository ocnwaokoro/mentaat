# PRD 07: CollectPro — B2B Debt Collection Automation for Nigerian Businesses

**Version:** 1.0 | March 2026
**Status:** Draft
**Depends on:** [00-shared-context.md](./00-shared-context.md)

---

## 1. Executive Summary

Nigerian B2B payment culture is broken. Standard payment terms are 60-90 days, but actual payment often stretches to 120+ days. Businesses chase overdue invoices manually — phone calls, WhatsApp messages, physical visits — consuming hours of staff time weekly with inconsistent results. CollectPro automates the entire collections workflow: upload overdue invoices, configure escalation sequences (SMS, email, WhatsApp), offer debtors structured payment plans, and track recovery rates in real time. The product replaces the most tedious, emotionally draining task in Nigerian business finance with a systematic, persistent, professionally-toned collection machine.

**Target:** 20 paying customers within 90 days = ~$6-15K MRR (base + recovery commissions).

---

## 2. Market Opportunity

### The Late Payment Epidemic

Late B2B payments are not an exception in Nigeria — they are the norm. Payment terms of 60-90 days are standard practice, and actual settlement regularly stretches to 120 days or beyond. The combination of cash flow pressure across the economy, weak contract enforcement, and cultural reluctance to pursue debts aggressively creates a system where paying late is rational for the debtor and devastating for the creditor. Manual collection — phone calls, WhatsApp chasing, and physical visits — is the only recourse for most businesses, and it does not scale.

### Quantified Pain

| Metric | Value | Source |
|--------|-------|--------|
| Average B2B payment delay beyond terms | 30-60 days beyond already-long 60-90 day terms | LCCI Business Survey |
| Businesses reporting payment collection as top-3 challenge | ~70% | MAN, NASME surveys |
| Cost of manual collection (staff time) | N200-500K/month per mid-size business | Industry estimates |
| Bad debt write-offs (typical Nigerian SME) | 3-8% of revenue | Accounting firm data |
| Legal debt recovery (court system) | 2-5 years average resolution | World Bank Doing Business |
| Formal debt collection agencies in Nigeria | <20 (for a 220M population) | Industry count |
| Payment failures growing | 42% YoY | NIBSS |

### Why This is a Software Problem

1. **Consistency beats intensity:** A debtor who receives a polite, professional reminder every 3 days is more likely to pay than one who gets an angry phone call once a month. Software does not get tired, forget, or feel awkward.
2. **Payment plans unlock payments:** Many debtors want to pay but cannot pay the full amount. Offering structured payment plans (4 installments over 8 weeks) converts "can't pay" into "paying." This requires tracking logic that is painful in spreadsheets.
3. **Data creates leverage:** When a business can show "you paid 15 days late on 7 of your last 10 invoices," it shifts negotiation dynamics. CollectPro builds this data automatically.
4. **The court system is not an option:** With 2-5 year legal timelines, Nigerian businesses effectively have no recourse for debts under N50M. Collections must happen through relationship and persistence, not legal threat. Software excels at this.

Commercial paper surged 107% (N1.58T in H1 2025) — businesses are desperate for cash, making overdue receivables even more painful. Every day of delayed collection is a day closer to taking a 35.5% bank loan.

### Total Addressable Market

- **B2B businesses with regular invoicing:** ~300,000+ (wholesale, manufacturing, professional services, logistics)
- **Average overdue receivables per mid-size business:** N5-50M at any given time
- **Recovery improvement from systematic collections:** 15-30% (industry benchmarks from US/UK collection automation platforms)
- **SAM:** ~50,000 businesses with N10M+ in overdue receivables
- **SOM (Year 1):** 50-100 customers at N50-75K/month + recovery commission = N30-90M ARR

---

## 3. Target Persona

### Primary: Blessing — Accounts Receivable Manager

| Attribute | Detail |
|-----------|--------|
| **Title** | Accounts Receivable Manager / Credit Controller / Finance Officer |
| **Company** | Wholesaler, manufacturer, service company, or distributor |
| **Revenue** | N20-100M/month |
| **Team size** | 20-200 employees |
| **Location** | Lagos, Ogun State, Kano, Abuja |
| **Age** | 28-45 |
| **Education** | BSc/HND Accounting, possibly ACA/ICAN |
| **Tools today** | Excel tracker, personal phone for WhatsApp/calls, paper ledger |
| **Pain frequency** | Daily — spends 2-4 hours chasing payments |
| **Decision authority** | Recommends to Finance Director; N50-100K/month budget |

### Blessing's Daily Grind

- **8:00 AM:** Opens Excel "receivables tracker." Sorts by due date. Highlights rows more than 30 days overdue. There are 47 of them.
- **8:30 AM:** Starts calling. First 3 calls go to voicemail. Fourth call: "We are processing it, you will get it next week." (They said this last month too.)
- **10:00 AM:** Switches to WhatsApp. Sends payment reminders to 12 contacts. Screenshots each message for her records.
- **11:30 AM:** Finance Director asks for an update on the N15M overdue from Alhaji's company. Blessing scrolls through WhatsApp trying to find the last message. Takes 10 minutes.
- **2:00 PM:** A debtor calls back offering to pay N2M now and the remaining N3M in 2 weeks. Blessing agrees verbally. Writes it on a sticky note. No system to track the payment plan.
- **5:00 PM:** Blessing has collected commitments for N8M today. History says maybe N3M will actually arrive. She has no way to know which commitments are real.

Priority sectors: Food/Beverage distributors and wholesalers (highest invoice volumes, stable sector at 63.24% capacity). Avoid targeting businesses in Electrical/Electronics supply chain (28% capacity — debtors may be insolvent).

### Secondary: Emeka — Business Owner / MD

Runs a wholesale distribution business. Has N25M in overdue receivables. His two "collection" staff members are sales reps who also chase payments — and they prioritize selling over collecting. He needs a system, not more staff.

---

## 4. Problem Deep Dive

### Problem 1: Manual Follow-Up Does Not Scale

A business with 50+ overdue invoices cannot meaningfully follow up on all of them with phone calls and WhatsApp messages. Staff prioritize the largest debts and let smaller ones age until they become uncollectable. There is no systematic triage.

**Cost:** 15-25% of overdue amounts go uncollected simply because no one followed up consistently. On N50M in receivables, that is N7.5-12.5M lost.

### Problem 2: No Escalation Logic

When a debtor does not respond to the first reminder, what happens? In most Nigerian businesses: nothing for 2-3 weeks, then another ad-hoc call. There is no structured escalation path that increases urgency over time (friendly reminder → formal notice → final demand → credit hold → escalation to management).

**Impact:** Debtors learn that payment reminders are sporadic and non-threatening. Paying late has no consequences.

### Problem 3: Payment Plans Are Informal and Untracked

When a debtor offers partial payment, the agreement is verbal or scribbled on paper. There is no system to track installments, send reminders for each installment, or flag when a plan is broken. Partial payment agreements dissolve within weeks.

### Problem 4: Zero Visibility for Management

The Finance Director or business owner has no dashboard showing: total overdue, aging breakdown, collection rate, staff performance, debtor payment patterns. They get anecdotal updates in meetings. Strategic decisions about credit terms, customer relationships, and write-offs are made blind.

### Problem 5: Emotional Burden

Chasing money is emotionally exhausting. Nigerian business culture values relationships, and aggressive collections can damage them. Staff avoid making uncomfortable calls. They feel personally rejected when debtors do not pay. This emotional tax is invisible but real — it causes turnover in AR roles and reduces collection effort over time.

**CollectPro's solution:** Remove the human from the uncomfortable loop. Automated messages are "the system" — not a person demanding money. This psychological distance actually improves collection rates.

---

## 5. Solution Overview

### Core Value Proposition

"Stop chasing payments. Let CollectPro chase them for you — politely, persistently, and professionally — until every naira is recovered or accounted for."

### How It Works

```
Upload Overdue Invoices (CSV/Excel or Manual Entry)
            ↓
Configure Reminder Sequences
(Day 1: Friendly SMS → Day 4: Email → Day 7: WhatsApp
 → Day 14: Formal letter → Day 21: Escalation to debtor's MD)
            ↓
CollectPro Sends Automated Reminders
(Professional templates, customizable per business)
            ↓
Debtors Respond via Payment Link or Request Payment Plan
            ↓
Track Payments, Plans, Commitments, and Broken Promises
            ↓
Dashboard Shows: Collection Rate, Aging, Staff Performance
```

### Key Design Decisions

1. **WhatsApp as primary channel:** Nigerian B2B communication lives on WhatsApp. SMS is for alerts; email is for formality. WhatsApp is where money conversations happen. Integration via WhatsApp Business API (Termii).
2. **"The system" as the collector:** Messages come from the company's account but feel automated. "This is an automated reminder from [Company] regarding Invoice #2847..." This removes interpersonal awkwardness while maintaining professionalism.
3. **Payment plan engine built-in:** When a debtor responds "I can't pay all at once," CollectPro offers: "Would you like to set up a payment plan? [2 installments / 3 installments / 4 installments]." Each plan is tracked with individual reminders.
4. **Paystack payment links:** Every reminder includes a Paystack payment link for the exact amount due. Reduce friction from "I intend to pay" to "I have paid" to one tap.
5. **No legal threats in MVP:** CollectPro is a commercial collections tool, not a legal one. Messages are professional and escalating in formality but never threatening. Legal escalation is a future feature.

---

## 6. MVP Feature Set

### Phase 1: Core Collections Engine (Weeks 1-2)

| Feature | Priority | Description |
|---------|----------|-------------|
| Invoice upload | P0 | CSV/Excel upload or manual entry: debtor name, amount, due date, contact |
| Debtor contact book | P0 | Store debtor name, phone, email, WhatsApp, company, payment history |
| Reminder sequences | P0 | Configure multi-step sequences: channel, timing, message template |
| WhatsApp reminders | P0 | Automated WhatsApp messages via Termii/WhatsApp Business API |
| SMS reminders | P0 | Automated SMS via Termii |
| Email reminders | P0 | Automated email via Resend |
| Payment links | P0 | Paystack payment links embedded in every reminder |
| Collection dashboard | P0 | Total overdue, aging breakdown (30/60/90/120+), collection rate |
| Excel export | P0 | Export full receivables report with status and history |

### Phase 2: Intelligence & Plans (Weeks 3-4)

| Feature | Priority | Description |
|---------|----------|-------------|
| Payment plan engine | P1 | Offer debtors installment plans; track each installment separately |
| Debtor response tracking | P1 | Log when debtor opens message, clicks link, responds |
| Promise-to-pay tracking | P1 | Record verbal/written commitments; alert when broken |
| Escalation workflows | P1 | Auto-escalate to higher authority contact after X days unresponsive |
| Debtor scoring | P1 | Rate debtors: "Always pays," "Pays late," "Serial defaulter" |
| Receipt confirmation | P1 | Auto-detect payment via Paystack webhook; mark invoice as collected |

### Phase 3: Advanced Features (Weeks 5-8)

| Feature | Priority | Description |
|---------|----------|-------------|
| Multi-user access | P2 | AR team members each see their assigned debtors |
| Performance analytics | P2 | Collection rate by staff member, by debtor, by industry |
| Custom letter templates | P2 | Formal demand letters, statements of account (PDF generation) |
| Bulk actions | P2 | Select 20 invoices, send reminder to all in one click |
| Integration with accounting software | P2 | Import invoices from QuickBooks/Sage (reduce manual entry) |
| Interest/penalty calculator | P2 | Auto-calculate late payment penalties per contract terms |
| USSD payment reminders | P2 | Debtor receives USSD prompt (*XXX#) to confirm payment intent or request payment plan. Works on 2G connections (42% of mobile). No internet required. |

### Explicitly Out of Scope (MVP)

- Legal document generation (demand letters with legal standing)
- Court filing or legal process management
- Credit reporting to bureaus
- Factoring or financing of receivables
- International debt collection

---

## 7. Key Screens & UX

### Screen 1: Dashboard (Home Screen)

```
┌──────────────────────────────────────────┐
│  CollectPro                 [+ Add Invoice] │
├──────────────────────────────────────────┤
│                                          │
│  Total Outstanding     N 47,250,000      │
│  ─────────────────────────────────────  │
│  Collected This Month  N 12,800,000      │
│  Collection Rate       68%  (↑ from 52%) │
│                                          │
│  ── Aging Breakdown ──────────────────  │
│  [███████████] Current (0-30)   N18.2M   │
│  [████████]    31-60 days       N14.1M   │
│  [█████]       61-90 days       N 9.3M   │
│  [███]         91-120 days      N 3.8M   │
│  [██]          120+ days        N 1.8M   │
│                                          │
│  ── Action Needed ────────────────────  │
│  ⚠ 8 invoices with no response (7+ days) │
│  ⚠ 3 broken payment plan commitments     │
│  ✓ 5 payments received today (N3.2M)     │
│                                          │
│  [View All Invoices]  [📥 Export Report]  │
└──────────────────────────────────────────┘
```

### Screen 2: Invoice List

- Table view: Invoice #, Debtor, Amount, Due Date, Days Overdue, Status, Last Action, Next Action
- Status badges: "Pending," "Reminder Sent," "Plan Active," "Partially Paid," "Collected," "Written Off"
- Sort by: amount, days overdue, next action date
- Filter by: status, aging bucket, debtor
- Bulk select: "Send reminder to all selected"
- Tap any row to see full history

### Screen 3: Invoice Detail / Collection Timeline

```
┌──────────────────────────────────────────┐
│  Invoice #2847 — Zenith Trading Co.      │
│  Amount: N 3,500,000  |  Due: 15 Jan 26  │
│  Status: 65 Days Overdue                  │
├──────────────────────────────────────────┤
│                                          │
│  ── Collection Timeline ───────────────  │
│                                          │
│  15 Jan  Invoice due                     │
│  18 Jan  ✉ Friendly reminder (SMS) ✓ Delivered │
│  22 Jan  ✉ Follow-up (WhatsApp) ✓ Read  │
│  29 Jan  ✉ Formal reminder (Email) ✓ Sent │
│  05 Feb  📞 Manual call logged: "Will pay │
│          by Feb 15" — Promise recorded    │
│  15 Feb  ⚠ Promise broken — no payment   │
│  16 Feb  ✉ Escalation to MD (WhatsApp)   │
│          ✓ Delivered, ✓ Read             │
│  20 Feb  🤝 Payment plan proposed:        │
│          2x N1,750,000 (1 Mar + 15 Mar)  │
│  01 Mar  ✓ N1,750,000 received via Paystack │
│  15 Mar  ⏳ N1,750,000 due — reminder    │
│          scheduled for 13 Mar            │
│                                          │
│  [Send Manual Reminder] [Log Call]       │
│  [Propose Payment Plan] [Write Off]      │
└──────────────────────────────────────────┘
```

### Screen 4: Sequence Builder

- Visual workflow editor (simplified):
  - Step 1: Day 3 after due → SMS (template: "Friendly Reminder")
  - Step 2: Day 7 → WhatsApp (template: "Follow-Up")
  - Step 3: Day 14 → Email (template: "Formal Notice")
  - Step 4: Day 21 → WhatsApp to MD/alternate contact (template: "Escalation")
  - Step 5: Day 30 → Pause and flag for manual review
- Each step: choose channel, template, delay
- Preview any template before activating
- Default sequence pre-configured (user can modify)

### Screen 5: Payment Plan Manager

- Active plans list: Debtor, Total Amount, Installments (paid/remaining), Next Due Date, Status
- Tap to expand: see each installment with date, amount, status (paid/pending/overdue)
- Auto-reminders: 2 days before each installment due date, on the date, and 3 days after if missed
- "Plan broken" alert: if 2+ consecutive installments missed, flag for manual escalation

### Screen 6: Debtor Profile

- Debtor company name, contacts (multiple), industry
- Payment history: all invoices, average days to pay, collection rate
- Debtor score: A (always pays within terms) → F (chronic defaulter)
- Notes: free-text notes from calls, meetings
- Recommendation: "Consider requiring advance payment" or "Good candidate for extended terms"

---

## 8. Technical Architecture

### System Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Next.js App │────→│ Supabase DB  │────→│ Sequence Engine  │
│  (Vercel)    │     │ (PostgreSQL) │     │ (Cron + Edge Fn) │
└──────┬───────┘     └──────────────┘     └────────┬────────┘
       │                                           │
       │                                    ┌──────┴──────┐
       │                                    │  Termii API  │
       │                                    │  (SMS + WA)  │
       │                                    └─────────────┘
       │
       ├──→ Paystack (payment links + webhook for confirmations)
       ├──→ Resend (email reminders)
       └──→ Vercel Cron (trigger sequence checks every hour)
```

### Data Model (Core Tables)

```sql
-- Business accounts
businesses (
  id, name, industry, contact_email, contact_phone,
  default_sequence_id, created_at, owner_user_id
)

-- Debtors (counterparties)
debtors (
  id, business_id, company_name, primary_contact_name,
  phone, whatsapp, email, alternate_contact_name,
  alternate_phone, alternate_email, industry,
  debtor_score, total_invoiced, total_collected,
  avg_days_to_pay, notes, created_at
)

-- Invoices (receivables)
invoices (
  id, business_id, debtor_id, invoice_number,
  amount, amount_collected, currency,
  issue_date, due_date, days_overdue,
  status (pending/reminded/plan_active/partial/collected/written_off),
  paystack_payment_link, created_at
)

-- Reminder sequences (templates)
sequences (
  id, business_id, name, is_default,
  created_at
)

-- Sequence steps
sequence_steps (
  id, sequence_id, step_order, delay_days,
  channel (sms/whatsapp/email),
  template_id, contact_type (primary/alternate/escalation),
  created_at
)

-- Message templates
templates (
  id, business_id, name, channel,
  subject (for email), body,
  variables (json: invoice_number, amount, debtor_name, etc.),
  created_at
)

-- Sent messages log
messages (
  id, invoice_id, debtor_id, sequence_step_id,
  channel, content, status (queued/sent/delivered/read/failed),
  sent_at, delivered_at, read_at,
  paystack_link_clicked (boolean)
)

-- Payment plans
payment_plans (
  id, invoice_id, debtor_id, total_amount,
  num_installments, status (active/completed/broken),
  created_at, accepted_at
)

-- Payment plan installments
installments (
  id, payment_plan_id, installment_number,
  amount, due_date,
  status (pending/paid/overdue),
  paid_at, paystack_reference
)

-- Manual activity log (calls, notes)
activities (
  id, invoice_id, debtor_id, user_id,
  type (call/note/meeting/promise),
  description, promise_date, promise_amount,
  promise_status (pending/kept/broken),
  created_at
)
```

### Sequence Engine (Core Logic)

The sequence engine runs as a Vercel Cron job every hour:

1. **Query:** Find all invoices where `status` is not `collected` or `written_off` and `days_overdue > 0`
2. **For each invoice:** Determine current step in assigned sequence based on `days_overdue` and messages already sent
3. **If next step is due:** Queue message via appropriate channel (Termii for SMS/WhatsApp, Resend for email)
4. **If payment plan is active:** Check installment due dates separately, send plan-specific reminders
5. **Payload construction:** Merge template variables (debtor name, amount, invoice number, payment link)
6. **Delivery tracking:** Termii webhooks report delivery/read status; update `messages` table

### WhatsApp Business API Integration

- **Provider:** Termii (Nigerian messaging API, supports WhatsApp Business)
- **Template approval:** WhatsApp requires pre-approved message templates for business-initiated messages. Submit 5-7 templates during setup:
  - Friendly payment reminder
  - Follow-up reminder
  - Formal notice
  - Payment plan offer
  - Installment reminder
  - Payment confirmation/thank you
- **Interactive messages:** WhatsApp supports buttons. Use "Pay Now" (link to Paystack) and "Request Payment Plan" (triggers plan flow)
- **Cost:** ~N5-15 per WhatsApp message, ~N4 per SMS

### Paystack Integration

- **Payment links:** Generate unique Paystack payment link per invoice. Debtor taps link → pays via card, bank transfer, or USSD.
- **Webhook:** On successful payment, Paystack webhook triggers → update invoice status → stop reminder sequence → send thank-you message → update dashboard.
- **Partial payments:** Paystack supports custom amounts. If debtor pays N2M on a N3.5M invoice, update `amount_collected`, continue sequence for remaining N1.5M.

### Infrastructure Costs (Monthly Estimate)

| Service | Cost | Notes |
|---------|------|-------|
| Vercel | $0 → $20 | Cron jobs on Pro plan |
| Supabase | $0 → $25 | Free tier sufficient for MVP |
| Termii (WhatsApp) | ~$50-150 | N5-15/message, ~2,000-5,000 messages/month |
| Termii (SMS) | ~$20-50 | N4/SMS, ~1,000-2,000 SMS/month |
| Resend | $0 | Free tier (3K emails/month) |
| Paystack | 1.5% per collection | Paid by debtor or absorbed by business |
| **Total** | **~$70-250/month** | Scales with message volume |

---

## 9. Pricing & Unit Economics

### Pricing Structure

CollectPro uses a **base + performance** model, aligning incentives with customer success:

| Component | Price | Description |
|-----------|-------|-------------|
| **Base subscription** | N50,000-75,000/month (~$33-49) | Platform access, unlimited invoices, sequences, dashboard |
| **Recovery commission** | 2-5% of amounts collected via CollectPro payment links | Only charged when money actually comes in |

**Tier breakdown:**

| Tier | Base Price | Commission | Target |
|------|-----------|------------|--------|
| **Starter** | N50,000/month | 5% of recovered | <N10M in overdue receivables |
| **Growth** | N75,000/month | 3% of recovered | N10-50M in overdue receivables |
| **Enterprise** | N150,000/month | 2% of recovered | N50M+ in overdue receivables |

### Unit Economics Per Customer (Growth Tier)

| Metric | Value |
|--------|-------|
| Monthly base revenue | N75,000 |
| Avg overdue receivables | N20M |
| Recovery rate improvement | +15% (from 60% to 75%) |
| Additional recovery | N3M/month |
| Commission (3%) | N90,000/month |
| **Total revenue per customer** | **N165,000/month** |
| Messaging costs (200 messages) | N5,000 |
| Paystack fees (on commissions) | N1,350 |
| Infrastructure share | N2,000 |
| **Gross margin** | **N156,650 (95%)** |

### Revenue Projections

| Milestone | Customers | Base MRR | Commission MRR | Total MRR (USD) |
|-----------|-----------|----------|----------------|-----------------|
| Month 3 | 20 | N1,250,000 | N800,000 | ~$6,500 |
| Month 6 | 50 | N3,250,000 | N3,000,000 | ~$15,000 |
| Month 12 | 120 | N8,100,000 | N9,000,000 | ~$42,000 |

### Path to $10K MRR

$10K MRR = ~N15.4M/month

**Route:** 35 Growth-tier customers generating N165K/month each = N5.8M + commission upside. Achievable by Month 4-5.

The performance-based pricing model means revenue per customer grows as collection rates improve — a natural expansion mechanism without upselling.

---

## 10. Go-to-Market

### Phase 1: Validation (Weeks 1-2)

1. **Target segment:** Wholesalers and distributors in Lagos (highest concentration of B2B overdue payments)
2. **Outreach channels:**
   - LCCI member directory (wholesaler/distributor category)
   - LinkedIn: search "Accounts Receivable" OR "Credit Controller" + Nigeria
   - Family network in Port Harcourt (trading/distribution companies)
   - Alaba International Market supplier associations
3. **Hook message:** "How much money is owed to your business right now? CollectPro recovers overdue payments automatically — you only pay when we collect."
4. **Goal:** 10 demo calls, 5 pilot signups (free first month)

### Phase 2: Pilot & Prove (Weeks 3-6)

1. **Free pilot for 5 businesses:** Upload their actual overdue invoices. Run collection sequences for 30 days.
2. **Success metric:** Demonstrate 10-20% improvement in collection rate during pilot
3. **Case study:** Document one pilot customer's results with real numbers (with permission)
4. **Convert:** "You recovered N4.2M in extra payments this month. CollectPro costs N75K + 3% commission. Continue?"

### Phase 3: Scaling (Months 2-4)

1. **Referral engine:** "Every business you refer that signs up = 1 month free." B2B businesses in the same industry know each other's AR pain.
2. **Industry-specific campaigns:**
   - Manufacturing: "Stop subsidizing your customers' cash flow"
   - Professional services: "Your billable hours are worthless if clients don't pay"
   - Wholesale: "Extend credit, not charity"
3. **Accounting firm partnerships:** Accountants see their clients' AR aging reports. Partner with 5-10 accounting firms in Lagos — they recommend CollectPro, get 10% referral commission.

### Phase 4: Product-Led Growth (Months 4-8)

1. **Debtor-side viral loop:** When a debtor receives a CollectPro reminder with a professional payment link, they see the system works. The debtor's own business also has overdue receivables — they become a lead.
2. **Free "AR Health Check" tool:** Upload receivables spreadsheet, get instant analysis: aging breakdown, estimated recoverable amount, projected improvement with automated collections. Lead capture.
3. **WhatsApp community:** "Nigerian Credit Controllers" group — share best practices, templates, industry benchmarks. CollectPro as the authoritative voice.

---

## 11. Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| 1 | **WhatsApp template rejection** — WhatsApp Business API requires template approval; debt collection messages may be flagged | High | High | Frame templates as "payment reminders" not "debt collection." Use professional, non-threatening language. Submit multiple template variants. Have SMS as fallback channel. |
| 2 | **Debtor backlash** — recipients annoyed by automated messages, complain or block | Medium | Medium | Strict frequency caps (max 2 messages/week per debtor). Professional tone only. Easy opt-out for debtors (while flagging the invoice for manual follow-up). Clear branding showing messages come from the creditor, not a third-party collector. |
| 3 | **Low payment link conversion** — debtors don't pay via Paystack link, prefer bank transfer | Medium | Medium | Track link clicks separately from payments. Offer bank transfer instructions as alternative in every message. Reconcile bank transfers via manual "Mark as Paid" or bank statement upload. |
| 4 | **Customers don't upload invoices consistently** — data entry friction kills adoption | High | High | CSV bulk upload on Day 1. Accounting software integrations in Phase 2. Minimal required fields (debtor name, amount, due date, phone number — that's it). WhatsApp shortcut: "Forward invoice image to this number" → OCR extraction (Phase 3). |
| 5 | **"We already do this on WhatsApp"** — businesses don't see value over manual process | Medium | High | ROI calculator: "You spend 3 hours/day chasing payments. That's N___/month in staff time. CollectPro costs N75K." Side-by-side comparison: manual (inconsistent, no tracking, no payment plans) vs. CollectPro (systematic, tracked, payment links). Free pilot proves the difference. |
| 6 | **Regulatory risk** — CBN or consumer protection rules around automated debt messaging | Low | Medium | CollectPro is B2B only — consumer protection rules are less strict. Messages sent on behalf of the creditor, not as a third-party collector. Monitor FCCPC (consumer protection) guidelines. Legal review of templates. |
| 7 | **Commission tracking disputes** — customers question whether CollectPro actually caused the collection | Medium | Medium | Attribute collection to CollectPro only when payment is made via the Paystack link or within 48 hours of a CollectPro message. Transparent attribution dashboard. Option to switch to flat-fee-only pricing if customer prefers. |

---

## 12. Build-or-Skip Scorecard

| Dimension | Score (1-10) | Rationale |
|-----------|:---:|-----------|
| **Build Speed** | 8 | Core is CRUD + messaging API + cron job. No AI needed for MVP. Sequence engine is straightforward. 2-3 weeks to MVP. |
| **Time to Revenue** | 7 | Value is immediate once invoices are uploaded. But requires uploading data and waiting for collection cycle (30+ days) to prove ROI. |
| **Market Size** | 7 | Every B2B business has receivables, but the problem is most acute for wholesalers/distributors/manufacturers. Good but not massive SaaS TAM vs. fintech TAMs. |
| **Competition** | 7 | No Nigeria-specific automated collections tool. Global tools (Chaser, Upflow) do not serve Nigeria. Some overlap with accounting software AR modules. |
| **Skill Fit** | 6 | Mostly CRUD/workflow automation, not AI/ML-heavy. Messaging API integration is straightforward but not a core differentiator. AI opportunity exists in later phases (predict which debtors will pay). |
| **Capital Required** | 9 | Messaging costs are low per unit. No expensive data sources needed. Bootstrappable with $0-2K. |
| **Buyer Clarity** | 7 | Accounts receivable managers and credit controllers are identifiable. Pain is real and frequent. But "automated collections" may need education — many businesses don't know this category exists. |
| **Fintech Upside** | 7 | Data on business payment behavior = credit scoring data. Could evolve into trade credit scoring, supply chain finance, or receivables factoring platform. Moderate fintech potential. |

### Weighted Composite Score

| Dimension | Weight | Score | Weighted |
|-----------|--------|-------|----------|
| Build Speed | 5% | 8 | 0.40 |
| Time to Revenue | 15% | 7 | 1.05 |
| Market Size | 15% | 7 | 1.05 |
| Competition | 10% | 7 | 0.70 |
| Skill Fit | 15% | 6 | 0.90 |
| Capital Required | 10% | 9 | 0.90 |
| Buyer Clarity | 20% | 7 | 1.40 |
| Fintech Upside | 10% | 7 | 0.70 |
| **TOTAL** | **100%** | | **7.10** |

### Verdict: BUILD (Priority Tier 2)

CollectPro is a solid, practical product with clear buyer pain, reasonable build speed, and good unit economics. The performance-based pricing model aligns incentives beautifully. The main limitation is skill fit — it is more workflow automation than AI/data science, which means the founder's strongest skills are underutilized. Recommended as a second or third product, or as a complementary offering alongside CashFlow AI (natural bundle: forecast your cash flow + automate your collections).
