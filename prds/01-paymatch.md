# PRD 01: PayMatch — Invoice-to-Payment Matching SaaS

## 1. Executive Summary

PayMatch is an invoice-to-payment matching tool built for Nigerian businesses drowning in manual reconciliation. The platform uses OCR and fuzzy matching to automatically reconcile invoices with bank payments across the 60-90 day payment cycles that define Nigerian B2B commerce. A finance manager at an FMCG distributor currently spends 2-3 full days every month printing bank statements, opening Excel, and manually cross-referencing hundreds of transactions across multiple bank accounts. PayMatch reduces that to minutes, enabling businesses to expand without hiring additional finance staff. Upload your invoices (CSV, PDF, or photo), upload or connect your bank statements, and the matching engine handles the rest — including partial payments, split payments, reference number variations, and rounding differences. Unmatched items get flagged for human review, and aging reports with WhatsApp collection reminders close the loop on outstanding receivables. The MVP ships in 2 weeks for under $500 in total cost, targets FMCG distributors and wholesalers doing N10-50M/month in revenue, and prices at N100,000/month (~$65) — a fraction of the cost of the finance hours it replaces.

## 2. Market Opportunity

**The numbers are staggering and the pain is universal.**

- **Invoice processing speed:** Only 39.74% of Nigerian businesses process invoices within 1 day (NIBSS data). The remaining 60%+ are stuck in multi-day manual workflows that delay cash collection and distort financial visibility.
- **Failed payment market:** N75 billion in failed payments, growing at 42% annually. Every failed or mismatched payment creates reconciliation work, disputes, and delayed revenue recognition.
- **Transaction volume:** N1.07 quadrillion in annual transaction volume with 80% year-over-year growth. The volume of transactions Nigerian businesses must reconcile is exploding while the tools remain static (Excel, paper ledgers, manual matching).
- **Extended payment terms:** 60-90 day payment terms are standard across Nigerian B2B commerce, with some sectors extending to 120+ days. This means at any given time, a distributor has 3-4 months of invoices in various states of partial payment, creating a massive reconciliation backlog.
- **The 90-day payment trap:** Slow-paying customers force SMEs into expensive bridge financing (often 3-5% monthly interest rates from informal lenders) just to cover operating costs while waiting for receivables. Better reconciliation means faster follow-up means faster payment.
- **SME cash flow crisis:** PwC survey found 67% of MSMEs experienced declining demand. Cash flow is the #1 killer of Nigerian SMEs, and poor receivables management directly accelerates the death spiral.
- **Current process:** Manual Excel matching consumes 2-3 full working days per month for a single finance manager. Error rates are high. Duplicate payments go undetected. Partial payments get lost. The process does not scale.

- **Growth without headcount:** Businesses want to expand (index 54-81) but not hire (index 8-40). PayMatch automates 2-3 days/month of manual work, enabling growth without adding finance headcount.
- **Bank charges as lead gen opportunity:** Bank Charges spiked to #1 business constraint in Sept 2025 (70.8 index). A free banking cost comparison tool could serve as lead generation for PayMatch.

**The wedge:** No one is solving this for SMEs. Duplo and similar platforms target enterprise. Banks offer reconciliation tools tied to single accounts. There is no standalone, multi-bank, SME-priced invoice matching tool in the Nigerian market.

## 3. Target Persona

**Primary: The Finance Manager at an FMCG Distributor**

- **Company profile:** FMCG distributor or wholesaler, 20-200 employees, N10-50M/month revenue (~$6,500-$33,000/month). Distributes products from manufacturers like Dangote, Nigerian Breweries, Nestle, Unilever, or PZ Cussons to retail outlets across a city or region.
- **Active accounts:** 50-200 active customer accounts at any time. Each customer has different payment patterns, preferred banks, and reference number conventions (or lack thereof).
- **Banking:** Uses 2-4 banks simultaneously (GTBank, Zenith Bank, Access Bank, First Bank are the most common). Payments arrive across all accounts. Some customers pay from bank accounts that don't match their registered company name.
- **Title:** Finance Manager, Chief Accountant, or Account Officer. In smaller companies, the owner/MD does this personally.
- **Age:** 28-45. Comfortable with Excel (VLOOKUP, pivot tables) but not advanced software. Has never used a SaaS tool for finance. May use QuickBooks or Sage for basic bookkeeping but reconciliation happens in Excel.
- **Communication:** WhatsApp is the primary business communication tool. Invoices are sometimes sent via WhatsApp. Payment confirmations are sent via WhatsApp. Collection follow-ups happen on WhatsApp. Email is secondary.
- **Pain frequency:** This pain hits hardest in the first week of every month (reconciling the previous month) and at quarter-end when management wants aging reports.
- **Budget authority:** Can approve N100-200K/month software expenditure. Anything above N500K/month requires MD approval.
- **Decision trigger:** A month where they discover a duplicate payment that went unnoticed, or when an audit reveals N2-5M in unreconciled transactions, or when the MD asks "who owes us money?" and they cannot answer within 24 hours.

**Priority sectors:** Food/Beverage manufacturers (63.24% capacity, highest energy spend, inelastic demand — they have money and stability). Avoid Electrical/Electronics (28% capacity — approaching shutdown, cannot afford new tools).

## 4. Problem Deep Dive

**The current workflow, step by step:**

**Step 1: Invoice Issuance**
The finance team issues invoices when goods are delivered. Invoices are created in Excel or Word, saved as PDF, and sent via email or WhatsApp. Some companies use basic accounting software (Sage, QuickBooks) but many still use manual templates. Invoice numbers follow inconsistent conventions. Some customers receive paper invoices delivered with the goods. There is no central, searchable invoice repository — invoices live in email threads, WhatsApp chats, and folder hierarchies on a shared desktop computer.

**Step 2: Payment Arrival**
Customers pay via bank transfer — but across multiple bank accounts. A customer who owes N5M might pay N2M to the company's GTBank account and N3M to the Zenith account. Payment references are inconsistent: some customers include the invoice number, some include their own internal PO number, some write "Payment for goods," and some leave the reference blank entirely. Payment amounts rarely match invoice amounts exactly — customers round down, deduct unofficial discounts, or make partial payments without notification.

**Step 3: Bank Statement Collection**
At month-end, the finance manager logs into 2-4 different bank portals, downloads statements (each in a different CSV/PDF format), prints them out (yes, on paper), and lays them on a desk alongside a printed list of outstanding invoices.

**Step 4: Manual Matching**
The finance manager goes line by line through bank statements, trying to match each credit entry to an outstanding invoice. They use a combination of: amount (does this payment match any invoice?), customer name (does the sender name match a customer?), reference (did they include an invoice number?), and institutional knowledge ("Alhaji Musa always pays on Thursdays and rounds down to the nearest thousand"). Matches are recorded in a separate Excel reconciliation spreadsheet. This process takes 2-3 full days for a company with 200 active accounts.

**Step 5: What Goes Wrong**

- **Partial payments:** Customer owes N5M on Invoice #001 but pays N3M. The finance manager must record the partial payment and track the N2M balance. If the customer later pays N2M with no reference, matching it back to Invoice #001 requires memory or detective work.
- **Split payments:** Customer pays N5M for Invoice #001 in two separate transfers of N2.5M each, possibly from different bank accounts or on different days.
- **Wrong amounts:** Customer pays N4,950,000 instead of N5,000,000 — is this a rounding difference, an unauthorized discount, or a short payment? Each requires a different accounting treatment.
- **Missing references:** 40-60% of payments arrive with no usable reference number. Matching relies entirely on amount and sender name.
- **Name mismatches:** The customer's registered name is "Adebayo Enterprises Ltd" but the bank transfer comes from "Adebayo & Sons Trading" or just "Adebayo."
- **Duplicate payments:** Customer pays the same invoice twice. Without systematic matching, the duplicate sits as an unallocated credit for months.
- **Timing gaps:** Invoice issued March 1, goods delivered March 5, customer acknowledges receipt March 10, payment made May 15. By May, the finance manager has hundreds of newer invoices obscuring the original.

**Step 6: Business Impact**

- **Delayed follow-ups:** If you do not know exactly who owes what, you cannot follow up effectively. Collection calls happen weeks late or not at all.
- **Revenue leakage:** Undetected short payments of 1-2% across hundreds of invoices add up to millions in annual losses.
- **Dispute escalation:** When the company finally follows up on an unpaid invoice, the customer says "we already paid" and the finance team cannot immediately confirm or deny. This damages relationships.
- **Cash flow blindness:** The MD asks "what is our total receivable position?" and gets an answer 3 days later. In a business where cash flow determines survival, this delay is existential.
- **Audit exposure:** Unreconciled transactions create audit findings, tax complications, and regulatory risk.

## 5. Solution Overview

PayMatch is a web-based SaaS platform that automates invoice-to-payment matching for Nigerian businesses. The system operates in five stages:

**1. Invoice Ingestion**
Users upload invoices via CSV bulk upload, manual entry form, or (post-MVP) PDF/image capture with OCR. The system auto-detects CSV column mappings (invoice number, amount, date) and presents them for user confirmation before processing. Each invoice record contains: invoice number, customer name, amount, date issued, due date, and optional line items. The system normalizes customer names and maintains a customer master list that learns over time.

**2. Bank Transaction Ingestion**
Users upload bank statement CSVs (supporting formats from GTBank, Zenith, Access, First Bank, and UBA out of the box) or connect live bank feeds via Mono.co API. The system auto-detects the bank format on upload and shows detected bank name and transaction count for user confirmation. Each transaction record contains: date, amount, sender/beneficiary name, reference/narration, and bank account. The system parses and normalizes the varying CSV formats automatically. A validation summary shows total invoices, bank records, and any conflicts before matching begins.

**3. Fuzzy Matching Engine**
The core algorithm runs server-side and scores potential matches on four dimensions:
- **Amount match:** Exact match scores highest; tolerance within 1-2% for rounding/discount differences, with decreasing confidence.
- **Name match:** Levenshtein distance between invoice customer name and bank transaction sender name, with common Nigerian business name normalization (removing "Ltd," "Enterprises," "& Sons," "Nig," etc.).
- **Reference match:** Pattern matching on invoice numbers within the bank transaction narration field.
- **Date proximity:** Payments within the expected payment window (based on customer's historical payment behavior) score higher.

Each potential match receives a composite confidence score (0-100%). The engine produces suggestions grouped by confidence: 90%+ (high confidence), 70-89% (needs review), below 70% (no match found). No match is committed until the user explicitly acts. Users can bulk-accept high-confidence suggestions with one click, or review individually. An optional auto-match setting (off by default) allows the engine to commit matches above a configurable threshold without waiting for human review. The engine handles partial payments (one payment against one invoice with remaining balance), split payments (multiple payments against one invoice), and batch payments (one payment against multiple invoices).

**4. Review & Resolution Interface**
The primary view is a summary-first interface showing all matching suggestions grouped by confidence level (high confidence, needs review, no match found). Users bulk-accept high-confidence suggestions, then drill into uncertain matches one at a time via a card-based review flow. For items with no match, a split-screen workspace allows manual pairing — unmatched invoices on the left, bank transactions on the right, with a match detail panel in the center. Every action is reversible.

**5. Reporting & Collection**
- **Aging reports:** Customer-level and invoice-level views of outstanding amounts bucketed by 30/60/90/120+ days. Last Payment Date and Last Payment Amount columns provide context for collection decisions. Customer drill-down expands inline to show invoice-level aging breakdown.
- **Collection reminders:** Collection reminders support copy-to-clipboard for WhatsApp paste (MVP) with direct WhatsApp Business API integration planned for Week 3-4. Configure WhatsApp message templates with invoice details auto-populated. Preview and send directly from the platform.
- **Excel export:** Every view, every report, every data table exports to formatted Excel with one click. This is non-negotiable for the target user.

## 6. MVP Feature Set (MoSCoW)

### MUST Have — Week 1-2

These features define the minimum product that delivers value on day one.

| Feature | Description | Acceptance Criteria |
|---------|-------------|-------------------|
| Invoice upload (CSV) | Bulk upload invoices from CSV with column mapping | Support CSV with any column order; map to: invoice #, customer, amount, date, due date |
| Invoice manual entry | Add individual invoices via form | Form with validation; auto-suggest customer names from existing records |
| Bank statement upload (CSV) | Upload bank statements from top 5 Nigerian banks | Auto-detect bank format (GTBank, Zenith, Access, First Bank, UBA); parse credits only |
| Fuzzy matching engine | Automatic matching with confidence scoring | Match on amount (exact + 2% tolerance), customer name (Levenshtein), reference, date proximity |
| Match/unmatch interface | Summary-first suggestions view with bulk accept for high-confidence items, one-at-a-time review for uncertain matches, and split-screen workspace for manual matching. Human-first: engine suggests, user decides. | One-click accept for suggested matches; undo capability; bulk accept for high-confidence matches |
| Partial payment handling | Track partial payments against invoices | Record partial match; show remaining balance; track multiple partial payments per invoice |
| Aging report | 30/60/90/120+ day buckets with heat tinting; Last Payment Date and Last Amount columns; customer drill-down to invoice level; send reminder per row | 30/60/90/120+ day buckets; sortable by customer or amount; drill-down to invoice level |
| Excel export | Export any view to formatted Excel | One-click export button on every data screen; formatted headers, number formatting, date formatting |
| Column mapping | Auto-detect CSV columns on upload with user confirmation | Support any column order; map invoice number, amount, date; show validation summary before processing |
| Collection reminders (clipboard) | Copy-to-clipboard templated reminders for WhatsApp | 30/60/90-day templates with auto-populated invoice details; template editor; send history log |
| User authentication | Email + password login with organization accounts | Supabase Auth; invite team members; organization-level data isolation |

### SHOULD Have — Week 3-4

These features significantly enhance value but are not required for first customer delivery.

| Feature | Description |
|---------|-------------|
| PDF/image invoice OCR | Upload PDF or photo of invoice; extract data via OCR |
| Mono.co bank connection | Live bank feed instead of manual CSV upload |
| WhatsApp API integration | Direct send via WhatsApp Business API (Termii) instead of clipboard copy |
| Multi-currency support | Handle NGN and USD invoices/payments with exchange rate tracking |
| Customer master management | Merge duplicate customers, track aliases, payment history |

### COULD Have — Month 2

| Feature | Description |
|---------|-------------|
| Automated collection sequences | Schedule escalating reminder sequences (Day 30 → Day 60 → Day 90) |
| Customer payment portal | Shareable link where customers can view their outstanding invoices |
| Accounting software integration | Push matched data to QuickBooks or Sage |
| Mobile app (PWA) | Progressive web app for on-the-go invoice review |
| Batch payment matching | Match a single lump-sum payment against multiple invoices automatically |
| USSD payment status check | Customer dials *XXX# → enters invoice number → gets status (Paid/Partial/Overdue) via USSD/SMS. Reaches 42% of mobile connections on 2G that cannot access the web app |

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Lending / invoice factoring | Regulatory complexity; future fintech upside, not MVP scope |
| Direct bank integrations (beyond Mono) | Bank-specific APIs are unreliable and require partnerships |
| Full ERP integration | Target users do not use ERPs |
| Invoice creation / issuance | Plenty of tools do this; PayMatch is about matching, not creation |
| Payment processing | Not a payment gateway; we match payments that already happened |

## 7. Key Screens & UX

### Design Philosophy: Human-First Matching

The matching engine is a smart assistant, not an autopilot. It suggests, the user decides. No match is committed until the user explicitly acts. Results are presented as "suggestions ready for review," not "matching complete." The auto-match toggle in Settings is the opt-in for trusting the engine — off by default.

### Design Principles

- **Human-first matching:** The engine suggests, the user decides. No match is committed without explicit user action. Auto-match is opt-in, not default.
- **Numbers forward:** Total amounts, match counts, and outstanding balances are visible at all times. The user should never have to click to see their financial position.
- **Spotty internet tolerant:** All data cached in IndexedDB. Optimistic UI updates (action reflected immediately, synced in background). Offline mode for reviewing matches and invoices. Visual indicator when offline with "sync pending" count.
- **Excel muscle memory:** Tables look and feel like Excel. Sort by clicking column headers. Filter with dropdown selectors. Ctrl+F search works. Right-click context menus for actions.
- **WhatsApp native:** Share buttons on invoices and reminders send directly to WhatsApp. Collection messages formatted for WhatsApp (no HTML, no attachments — plain text with line breaks).

### Screen 1: Dashboard

The landing screen after login. Four large KPI cards across the top. Value unit suffixes ('days', 'items') render in the body font, not monospace, to distinguish the number from its label.

- **Total Outstanding:** Sum of all unmatched/partially matched invoice amounts. Large font, bold, red if above a configurable threshold. Example: "N47,250,000"
- **Matched This Month:** Total value of invoices matched to payments in the current month. Green. Example: "N32,100,000"
- **Unmatched Items:** Count of invoices with no matching payment and bank transactions with no matching invoice. Orange badge. Example: "23 invoices / 8 transactions"
- **Average Days to Payment:** Weighted average across all matched invoices this quarter. Trend arrow up/down vs. prior quarter. Example: "68 days (down from 74)"

Below the KPIs:
- Bar chart: Monthly matched vs. unmatched amounts (trailing 6 months)
- Table: Top 10 overdue customers by outstanding amount
- Action button: "Upload Bank Statement" (most common action)

### Screen 2: Invoice List

Full-width table with columns: Invoice #, Customer, Amount, Date Issued, Due Date, Status, Matched Amount, Balance.

**Status indicators:**
- Green check: Fully matched
- Yellow half-circle: Partially matched (shows % matched)
- Red circle: Unmatched and overdue
- Gray circle: Unmatched, not yet due

**Functionality:**
- Search bar: searches across invoice number, customer name, and amount
- Status filter dropdown and Date Range filter dropdown in the toolbar alongside search
- Filters: status, date range, customer, amount range
- Bulk actions: select multiple → export, send reminders, mark as written off
- Click any row to expand inline match history panel showing matched payments, confidence scores, and remaining balance
- "Add Invoice" button and "Upload CSV" button in the header

### Screen 3: Reconcile Flow

The reconcile flow has three states:

**State 1: Upload**
Two side-by-side upload zones (invoices + bank statement). After each upload, inline feedback appears: column mapping for invoices (auto-detected with override dropdowns), bank format detection for statements. A validation summary shows total records and conflicts before the user clicks "Find Matches."

**State 2: Suggestions (Primary View)**
Summary-first interface centered at max-width 720px. Segmented progress bar shows distribution across confidence levels. Three grouped sections:
- High Confidence (90%+): bulk "Accept All" action
- Needs Review (70-89%): "Review These" navigates to one-at-a-time card flow
- No Match Found (<70%): "Match Manually" navigates to split-screen workspace

**State 3: Workspace (Manual Matching)**
Full-width three-column split view for items the engine couldn't match. Left: unmatched invoices (scrollable). Center: match detail panel (appears when both sides selected). Right: bank transactions (scrollable). Users click to select, center panel shows match criteria and amount differences, confirm or dismiss.

### Screen 4: Customer Aging Report

**Header:** Company-level summary — Total Receivables, number of customers with overdue balances.

**Table:** One row per customer with columns:
- Customer Name
- Total Outstanding
- Current (not yet due)
- 1-30 Days Overdue
- 31-60 Days Overdue
- 61-90 Days Overdue
- 90+ Days Overdue
- Last Payment Date
- Last Payment Amount

Color-coded cells: amounts in 90+ column highlighted red, 61-90 orange, 31-60 yellow.

**Drill-down:** Click any customer row to expand inline invoice-level aging breakdown.

**Actions:**
- Export to Excel (pre-formatted aging report template, ready for management review)
- "Send Reminder" button per row (visible on hover) navigates to Collection Reminders with that customer pre-selected
- "Send All Reminders" for all customers with 60+ day overdue balances

### Screen 5: Collection Reminders

Two-column layout. Left: customer queue with filter pills (30+, 60+, 90+ days), checkboxes for bulk selection, overdue amounts. Right: message preview with template selector (30/60/90-day templates per PRD templates), editable preview, copy-to-clipboard button (MVP), disabled "Send via WhatsApp" button (Coming Soon for Termii integration).

**Templates:**
Pre-built WhatsApp message templates for different overdue buckets:
- 30 days: "Gentle reminder — Invoice [#] for [Amount] was due on [Date]. Kindly arrange payment at your earliest convenience."
- 60 days: "Second notice — Invoice [#] for [Amount] is now 60 days overdue. Please confirm payment status or contact us to discuss."
- 90 days: "Urgent — Invoice [#] for [Amount] is 90+ days overdue. Please arrange payment immediately to avoid further action."

Templates are editable. Variables auto-populate from invoice data.

**Send History:**
Bottom: collapsible send history table logging past reminders.

**Reminder Schedule:**
- Configure automatic reminders: e.g., send first reminder at 30 days, second at 60, third at 90
- Dashboard shows upcoming scheduled reminders for review before they send

### Screen 6: Collection Reminder Template Configuration

Pre-built WhatsApp message templates for different overdue buckets with a template editor. 30/60/90-day templates with auto-populated invoice details (invoice ID, amount, due date, days overdue, company name). Template variables auto-populate from invoice data. Template editor allows customization per organization.

### Screen 7: Settings

Company profile (name, email), security (password change), and matching configuration:
- Matching threshold slider (50-100%, default 80%)
- Auto-match toggle: "Automatically accept suggestions above threshold without review" — unchecked by default (human-first principle)

## 8. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Frontend | Next.js 14 (App Router, Server Components) | Fast initial load, SEO for marketing pages, React ecosystem |
| Styling | Tailwind CSS + shadcn/ui | Rapid UI development, consistent design system |
| Backend | Next.js API Routes + Server Actions | Single deployment, no separate backend service |
| Database | Supabase PostgreSQL | Managed Postgres, built-in auth, realtime subscriptions, generous free tier |
| Auth | Supabase Auth | Email/password, magic link, organization-level RLS policies |
| File Storage | Supabase Storage | Invoice PDFs, bank statement CSVs, OCR source images |
| OCR | tesseract.js (local) / OpenAI Vision API (complex) | tesseract.js for clear PDFs; Vision API fallback for photos and poor-quality scans |
| Bank Connection | Mono.co API | Leading Nigerian open banking provider; bank statement retrieval, account verification |
| Messaging | WhatsApp Business API (via 360dialog or Meta Cloud API) | WhatsApp is the dominant business communication channel in Nigeria |
| Offline Storage | IndexedDB via idb library | Cache invoices, payments, and matches locally for offline review |
| Real-time Sync | Supabase Realtime | Multi-user environments: when one user matches an item, others see it instantly |
| Excel Export | xlsx (SheetJS) library | Formatted Excel exports with headers, number formatting, multiple sheets |
| Hosting | Vercel (frontend) + Supabase (backend) | Free/cheap tiers sufficient for MVP; auto-scaling for growth |
| Monitoring | Sentry (errors) + Vercel Analytics (performance) | Essential for debugging in production, especially with varying network conditions |

### Database Schema (Core Tables)

```sql
-- Organizations (multi-tenant)
organizations (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
)

-- Users
users (
  id uuid PRIMARY KEY REFERENCES auth.users,
  org_id uuid REFERENCES organizations,
  role text CHECK (role IN ('admin', 'manager', 'viewer')),
  full_name text,
  created_at timestamptz DEFAULT now()
)

-- Customers (the organization's customers who pay invoices)
customers (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  name text NOT NULL,
  aliases text[],  -- alternative names seen in bank transactions
  email text,
  phone text,
  whatsapp text,
  avg_days_to_pay integer,
  created_at timestamptz DEFAULT now()
)

-- Invoices
invoices (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  customer_id uuid REFERENCES customers,
  invoice_number text NOT NULL,
  amount decimal(15,2) NOT NULL,
  currency text DEFAULT 'NGN',
  date_issued date NOT NULL,
  date_due date NOT NULL,
  status text CHECK (status IN ('open', 'partial', 'matched', 'overdue', 'written_off')),
  matched_amount decimal(15,2) DEFAULT 0,
  notes text,
  source_file text,  -- reference to uploaded file in storage
  created_at timestamptz DEFAULT now()
)

-- Bank Transactions
bank_transactions (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  bank_name text NOT NULL,
  account_number text,
  transaction_date date NOT NULL,
  amount decimal(15,2) NOT NULL,
  currency text DEFAULT 'NGN',
  sender_name text,
  reference text,
  narration text,
  type text CHECK (type IN ('credit', 'debit')),
  matched_amount decimal(15,2) DEFAULT 0,
  source text CHECK (source IN ('csv_upload', 'mono_api')),
  source_file text,
  created_at timestamptz DEFAULT now()
)

-- Matches (the core linking table)
matches (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  invoice_id uuid REFERENCES invoices,
  transaction_id uuid REFERENCES bank_transactions,
  matched_amount decimal(15,2) NOT NULL,
  confidence_score decimal(5,2),  -- 0.00 to 100.00
  match_type text CHECK (match_type IN ('auto', 'suggested', 'manual')),
  status text CHECK (status IN ('confirmed', 'pending', 'rejected')),
  difference_amount decimal(15,2) DEFAULT 0,
  difference_reason text,  -- 'rounding', 'discount', 'short_payment', 'overpayment'
  matched_by uuid REFERENCES users,
  created_at timestamptz DEFAULT now()
)

-- Collection Reminders
reminders (
  id uuid PRIMARY KEY,
  org_id uuid REFERENCES organizations,
  customer_id uuid REFERENCES customers,
  invoice_id uuid REFERENCES invoices,
  channel text CHECK (channel IN ('whatsapp', 'sms', 'email')),
  message_text text NOT NULL,
  status text CHECK (status IN ('scheduled', 'sent', 'failed')),
  scheduled_at timestamptz,
  sent_at timestamptz,
  created_at timestamptz DEFAULT now()
)
```

### Matching Engine Algorithm

```
For each unmatched bank_transaction (credit):
  1. Candidate Selection:
     - Pull all open/partial invoices for the organization
     - Filter to invoices where amount remaining is within 5% of transaction amount
       (wide net for initial candidates)

  2. Score each candidate on four dimensions:
     a. Amount Score (0-40 points):
        - Exact match: 40
        - Within 0.5%: 35
        - Within 1%: 30
        - Within 2%: 20
        - Within 5%: 10

     b. Name Score (0-30 points):
        - Exact match (after normalization): 30
        - Levenshtein distance ≤ 2: 25
        - Levenshtein distance ≤ 4: 20
        - Customer alias match: 28
        - Partial match (one name contains the other): 15

     c. Reference Score (0-20 points):
        - Invoice number found in narration: 20
        - Partial invoice number match: 12
        - Customer code found in narration: 10
        - No reference data: 0 (neutral, not penalized)

     d. Date Proximity Score (0-10 points):
        - Payment within 7 days of due date: 10
        - Within 30 days: 8
        - Within 60 days: 5
        - Within 90 days: 3
        - Beyond 90 days: 1

  3. Composite Score = Sum of all dimension scores (0-100)

  4. Action:
     - Score ≥ 90: High confidence suggestion (status 'pending' — user bulk-accepts or reviews)
     - Score 70-89: Needs review suggestion (status 'pending' — user reviews one at a time)
     - Score < 70: No match suggested
     - Note: If auto-match is enabled in Settings, scores above threshold are committed automatically (status 'confirmed')

  5. Learning:
     - When user confirms a match, store customer alias if name was different
     - Track customer payment patterns (average days to pay, preferred banks)
     - Adjust scoring weights per organization based on confirmation/rejection patterns
```

### Bank Statement CSV Parsing

Each bank has a different CSV format. The parser uses a bank detection heuristic (header row patterns, column names) and maps to a normalized schema:

| Bank | Date Column | Amount Column | Name Column | Reference Column |
|------|------------|---------------|-------------|-----------------|
| GTBank | "Trans Date" | "Credit" | "Beneficiary" | "Remarks" |
| Zenith | "Value Date" | "Credit Amount" | "Sender" | "Narration" |
| Access | "Date" | "Credit" | "Originator" | "Reference" |
| First Bank | "Transaction Date" | "Credit" | "Payer Name" | "Description" |
| UBA | "Post Date" | "Credit" | "Sender Name" | "Narration" |

Fallback: If bank is not auto-detected, user selects bank from dropdown or manually maps columns.

### Offline Architecture

```
Online Flow:
  User action → Optimistic UI update → API call → Supabase →
  Realtime broadcast → Other users see update

Offline Flow:
  User action → Optimistic UI update → Queue in IndexedDB →
  [When online] → Sync queue to Supabase → Resolve conflicts →
  Update local cache

Cached locally (IndexedDB):
  - All invoices (current month + overdue)
  - All unmatched bank transactions
  - All matches (pending + confirmed)
  - Customer master list

Not cached (requires network):
  - File uploads (CSV/PDF)
  - Mono.co bank feed refresh
  - WhatsApp message sending
  - New user authentication
```

## 9. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **Starter** | N100,000/month (~$65) | Up to 500 invoices/month, CSV upload only, 2 bank accounts, 2 users, email support |
| **Growth** | N150,000/month (~$98) | Unlimited invoices, OCR (PDF/image), Mono.co bank connection, unlimited bank accounts, 5 users, WhatsApp reminders, priority support |
| **Founding Customer** | N50,000/month (~$33) | Growth plan features, locked for 12 months, limited to first 10 customers |

### Trial & Onboarding

- 14-day free trial on Growth plan, no credit card required
- Onboarding call (30 min) included for every trial signup
- Upload first bank statement during onboarding call to demonstrate value immediately
- Trial-to-paid conversion target: 40%

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~$50 | Vercel Pro ($20) + Supabase Pro ($25) + Mono.co API (~$5) |
| Cost per customer | ~$3/month | At 15 customers, infrastructure cost / customer count |
| CAC | $0-20 | LinkedIn outreach (free), WhatsApp demos (free), MAN membership (N50K one-time) |
| Monthly churn estimate | 5-8% | Conservative for new SME SaaS in Nigeria |
| Average retention | 12 months | Based on annual payment cycles and switching cost of re-uploading data |
| LTV (Starter) | N1,200,000 (~$780) | N100K x 12 months |
| LTV (Growth) | N1,800,000 (~$1,170) | N150K x 12 months |
| LTV:CAC ratio | 39:1 - 60:1 | Extremely favorable given near-zero CAC |

### Revenue Targets

| Milestone | Timeline | Customers | MRR (NGN) | MRR (USD) |
|-----------|----------|-----------|-----------|-----------|
| First paying customer | Week 4 | 1 | N50,000 | ~$33 |
| Break-even | Month 2 | 5 | N500,000 | ~$325 |
| Target | Month 3 | 15 | N1,500,000 | ~$975 |
| Stretch | Month 6 | 30 | N3,500,000 | ~$2,275 |

Break-even at 5 customers at full price (N500K/month covers infrastructure + tools + one contractor). At founding customer pricing, break-even requires 10 customers.

## 10. Go-to-Market: First 10 Customers

### Channel 1: LinkedIn Direct Outreach

**Search strategy:** On LinkedIn Sales Navigator (free trial), search for:
- Title: "Finance Manager" OR "Chief Accountant" OR "Account Officer" OR "Financial Controller"
- Location: Lagos, Port Harcourt, Kano, Abuja
- Industry: FMCG, Food & Beverages, Consumer Goods, Wholesale, Distribution
- Company size: 11-200 employees

**Outreach sequence:**
1. Connection request with note: "Hi [Name], I'm building a tool to automate invoice-to-payment matching for Nigerian distributors. Would love to learn how your team handles reconciliation today."
2. If accepted, message: "Thanks for connecting. Quick question — how many hours does your team spend matching bank statements to invoices each month? We're helping companies like [similar company] cut that from days to minutes."
3. If interested: "Happy to show you a quick demo over WhatsApp video. Takes 15 minutes. What's your WhatsApp number?"

**Target:** 100 connection requests → 30 accepts → 10 conversations → 3-5 demos → 2-3 customers.

### Channel 2: Family Network in Port Harcourt

Direct ask to family members: "Do you know anyone who runs a distribution or wholesale business? I'm building software that helps them track who owes them money and match payments to invoices automatically. Looking for 5 companies to try it free for 2 weeks."

**Target:** 5 warm introductions → 3-4 demos → 2 customers.

### Channel 3: Manufacturers Association of Nigeria (MAN)

N50,000 membership fee provides access to the member directory. Filter for FMCG manufacturers in Lagos and Port Harcourt. These manufacturers have distributor networks — they can either use PayMatch themselves or introduce their distributors.

**Target:** 20 outreach emails/calls → 5 conversations → 2-3 customers.

### Channel 4: Lagos Chamber of Commerce (LCCI) Events

Attend virtual and in-person LCCI events and trade fairs. Focus on connecting with FMCG exhibitors and attendees. Exchange WhatsApp contacts. Follow up within 24 hours.

**Target:** 2 events → 10 contacts → 3-4 demos → 1-2 customers.

### Channel 5: Cold Outreach to Distributor Networks

Identify distributors for major FMCG brands:
- Dangote (sugar, salt, flour, cement distributors)
- Nigerian Breweries (beer and malt distributors)
- Nestle (food distributors)
- Unilever (personal care distributors)
- PZ Cussons (household goods distributors)

Find these companies on Google Maps, company directories, and industry listings. Call their offices directly.

**Script:** "Good morning, I'd like to speak with your finance manager or accountant. We built a tool that automatically matches bank payments to invoices — it saves 2-3 days of reconciliation work every month. We're offering a free 14-day trial. Can I send a WhatsApp message with more details?"

**Target:** 30 calls → 10 conversations → 5 demos → 2-3 customers.

### Channel 6: Referral Program

For every paying customer: "Know another distributor or wholesaler who struggles with payment reconciliation? If they sign up and stay for 1 month, you get 1 month free."

**Target:** Each customer refers 1-2 others. 3 customers from referrals in first 90 days.

### Channel 7: BankCompare Lead Magnet

**Lead magnet:** Free BankCompare calculator — compare actual banking costs across GTBank, Zenith, Access, First Bank for your transaction patterns. Gets finance managers into the funnel; upsell PayMatch during demo.

### Channel Summary

| Channel | Outreach Volume | Expected Demos | Expected Customers |
|---------|----------------|----------------|-------------------|
| LinkedIn | 100 | 3-5 | 2-3 |
| Family network | 5 | 3-4 | 2 |
| MAN directory | 20 | 2-3 | 1-2 |
| LCCI events | 10 | 3-4 | 1-2 |
| Cold outreach | 30 | 5 | 2-3 |
| Referrals | — | — | 2-3 |
| **Total** | **165** | **16-21** | **10-16** |

## 11. Risks & Mitigations

### Risk 1: Businesses Won't Trust Cloud Software with Financial Data

**Likelihood:** High. Nigerian SMEs are conservative about financial data. Many have never used cloud software for anything finance-related.

**Impact:** Customers refuse to upload bank statements or connect bank accounts, rendering the product useless.

**Mitigations:**
- Bank-level encryption (AES-256 at rest, TLS 1.3 in transit) prominently displayed on landing page and in sales conversations
- SOC 2 compliance roadmap communicated (even if not yet achieved, the roadmap shows intent)
- CSV-only mode: customers can use the product without ever connecting a bank account. Upload a CSV, get matches, delete the CSV from our servers immediately after processing
- Option to self-host (future): for large customers, offer a deployment on their own infrastructure
- Testimonials from early adopters addressing the trust concern directly

### Risk 2: Bank Statement Formats Vary Wildly

**Likelihood:** High. Every bank has different CSV export formats, and banks change formats without notice.

**Impact:** Parsing errors, incorrect data extraction, user frustration during onboarding.

**Mitigations:**
- Launch with top 5 banks only (GTBank, Zenith, Access, First Bank, UBA — covers 70%+ of business accounts)
- CSV as universal fallback with manual column mapping interface
- Bank format detection with confidence score — if auto-detection fails, prompt user to select bank and map columns
- Maintain a bank format library that updates as formats change; alert engineering when parsing errors spike for a specific bank
- Accept feedback from users when parsing fails; fix within 24 hours for supported banks

### Risk 3: Users Prefer to Keep Using Excel

**Likelihood:** Medium-High. Excel is deeply embedded in Nigerian business workflows. "If it works, why change?"

**Impact:** Low trial-to-paid conversion. Users try PayMatch but revert to Excel.

**Mitigations:**
- Position as "Excel enhancer" not "Excel replacement." PayMatch does the matching; Excel does the reporting. Export everything.
- Excel export on every single screen — aging reports, match lists, customer summaries all export to beautifully formatted Excel files that look better than what users create manually
- Import from Excel, export to Excel. The user's workflow starts and ends in Excel; PayMatch is the engine in the middle.
- Show ROI in Excel terms: "You currently spend 24 hours/month on matching. PayMatch does it in 20 minutes. That's 23.5 hours back. At your salary, that's N[X] saved."

### Risk 4: Low Willingness to Pay for Software

**Likelihood:** Medium. Nigerian SMEs are price-sensitive and accustomed to free or pirated software.

**Impact:** Long sales cycles, downward price pressure, customers churning after trial.

**Mitigations:**
- 14-day free trial with full features — let the product prove value before asking for money
- ROI calculator on website and in sales deck: input hours spent on reconciliation, salary, and see monthly savings
- Founding customer pricing (N50K/month) reduces the decision threshold
- Monthly billing, no annual commitment — reduce perceived risk
- Frame as "hire a reconciliation assistant for N100K/month" vs. hiring an actual person (N150-300K/month salary + benefits)

### Risk 5: Mono.co API Reliability

**Likelihood:** Medium. Open banking APIs in Nigeria are still maturing. Downtime, rate limits, and data gaps are common.

**Impact:** Users who rely on live bank feeds experience data gaps or delays, eroding trust in the product.

**Mitigations:**
- CSV upload is the primary path, not the fallback. Mono.co is positioned as a convenience upgrade, not a dependency.
- When Mono.co is down, display clear messaging: "Live bank feed temporarily unavailable. Upload a CSV to continue matching."
- Cache the last successful bank feed locally so users can work with recent data even during API outages
- Monitor Mono.co status and proactively notify affected users
- Evaluate alternative providers (Okra, Stitch) as backup integrations

### Risk 6: Competition from Duplo or New Entrants

**Likelihood:** Medium. Duplo is the closest competitor but targets enterprise. New entrants could emerge.

**Impact:** Price pressure, feature race, customer confusion.

**Mitigations:**
- Speed to market: functional MVP in 2 weeks, 10 customers in 90 days. Build a moat of customer data and relationships before competitors react.
- SME focus: price point, UX complexity, and go-to-market are all calibrated for 20-200 employee companies. Enterprise tools won't scale down easily.
- Customer data moat: the more invoices and payments processed, the better the matching engine gets (customer aliases, payment patterns). This data advantage compounds over time.
- Relationship depth: WhatsApp-based support, personal onboarding calls, and a community of finance managers create switching costs beyond the software.

## 12. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 8 | 0.40 | Core matching algorithm is a well-understood fuzzy matching problem. Invoice/payment CRUD is standard. CSV parsing is straightforward. Functional MVP in 2 weeks is realistic with Next.js + Supabase. |
| Time to Revenue | 15% | 8 | 1.20 | Clear buyer persona (finance manager), low switching cost (just upload a CSV), immediate value demonstration during trial. Free trial to paid conversion in 2-4 weeks. First revenue within 30 days of launch. |
| Market Size | 15% | 8 | 1.20 | N75B failed payment market growing 42% annually. N1.07 quadrillion annual transaction volume provides a massive base of transactions requiring reconciliation. Even capturing 0.001% of businesses represents thousands of potential customers. |
| Competition | 10% | 7 | 0.70 | Duplo exists but targets enterprise with complex procurement workflows. No dedicated SME-focused invoice matching tool in Nigeria. Paystack and Flutterwave focus on payment processing, not post-payment reconciliation. Gap is clear but could close. |
| Skill Fit | 15% | 9 | 1.35 | Fuzzy matching algorithms, OCR processing, data normalization, and CSV parsing are core technical skills. Full-stack Next.js + Supabase is a well-known stack. No exotic infrastructure or deep domain expertise required beyond understanding Nigerian banking formats. |
| Capital Required | 10% | 9 | 0.90 | $0 to build on free tiers (Vercel hobby, Supabase free, Mono.co sandbox). Under $500 for first 3 months of production hosting. No hardware, no office, no employees required. Laptop and internet connection are the only fixed costs. |
| Buyer Clarity | 20% | 8 | 1.60 | FMCG distributors are identifiable (they distribute known brands), findable (LinkedIn, MAN directory, Google Maps), and have a clear, recurring pain point. The finance manager is the user and the budget holder. Sales conversation is straightforward: "How do you match payments to invoices today?" |
| Fintech Upside | 10% | 9 | 0.90 | Invoice and payment data is the foundation for supply chain finance, invoice factoring, early payment discounts, and credit scoring. A matching engine that processes millions in transactions monthly becomes a data asset for lending products. This is the classic fintech wedge: start with workflow software, expand into financial services. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.40 |
| Time to Revenue (15%) | 1.20 |
| Market Size (15%) | 1.20 |
| Competition (10%) | 0.70 |
| Skill Fit (15%) | 1.35 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 1.60 |
| Fintech Upside (10%) | 0.90 |
| **TOTAL** | **8.25 / 10** |

### Verdict: BUILD

An 8.25 composite score with no dimension below 7 signals a strong build. The combination of high buyer clarity (8, weighted 20%), strong skill fit (9, weighted 15%), and near-zero capital requirements (9, weighted 10%) means this can be validated quickly with minimal downside. The fintech upside (9, weighted 10%) provides a credible path from SaaS tool to financial services platform if the initial wedge gains traction.

**Key decision factors:**
- Can reach first paying customer within 30 days of starting development
- Total investment to validate: 2 weeks of build time + $0-500 in hosting
- Downside is bounded (time only); upside scales with transaction volume
- Invoice data creates a defensible moat and enables future financial products

**Go condition:** Start building Week 1. Target first demo by end of Week 2. First paying customer by end of Week 4. 10 customers by Day 90.

## Design System Reference

The visual design system is documented in `/DESIGN.md` in the PayMatch project root. Key specifications:
- Colors: Primary #059669 (emerald green), accessible text contrast (WCAG AA)
- Typography: Inter for UI, JetBrains Mono for financial data
- Prototype: `prototype/prototype-v2.html` (validated reference implementation)
- Design spec: `docs/superpowers/specs/2026-03-22-prototype-v2-design.md`
