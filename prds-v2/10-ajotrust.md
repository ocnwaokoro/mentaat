# PRD 10: AjoTrust — Esusu/Ajo Digital Settlement Layer

## 1. Executive Summary

Tens of millions of Nigerians participate in rotating savings circles — known as esusu (Yoruba), ajo (general), adashe (Hausa), or isusu (Igbo). These circles move billions of naira monthly. They are managed entirely by trust, memory, and handwritten notebooks. When disputes erupt — "I paid my contribution and the coordinator says I didn't" — relationships shatter and savings evaporate. There is no record. No proof. No recourse. The coordinator's word is law, and that word is fallible.

AjoTrust is a USSD-based record system — not a payment system — for rotating savings circles. A coordinator dials a USSD code, registers a group of 10-50 members, and sets the contribution schedule. Each cycle, members confirm their contribution via USSD. The system creates an immutable, timestamped record of who paid, who received the pot, and who defaulted. Both coordinator and member can check the record at any time. That is the entire product.

**Disruption type:** New-market (no digital product exists for this segment) with low-end elements (cheaper/simpler than formal savings products).

**The data asset:** Every verified contribution is a credit signal. A member who has contributed N10,000 weekly for 52 consecutive weeks to a savings circle has demonstrated financial discipline that no bank or credit bureau can see. This data feeds VendorScore for credit scoring without formal credit history. In aggregate, AjoTrust builds the most granular savings behavior dataset in Nigeria's informal economy.

**Entry channel hierarchy:** USSD (primary) → SMS (notifications/summaries) → WhatsApp (Phase 2 confirmations) → Web (never for end users; API-only for data buyers).

**90-day target:** 50 groups registered (500-1,500 members), zero MRR (data collection phase), first contribution cycle fully recorded for 20+ groups.

**Infrastructure layer:** Layer 1 (data collection). Runs on the USSD Business Toolkit Platform. Feeds Layer 3 products (VendorScore, InsureMatch) and Layer 4 data products (credit scoring data for lenders).

---

## 2. Market Opportunity

### The Scale of Informal Savings Circles

Rotating savings and credit associations (ROSCAs) are among the oldest and most widespread financial institutions in Nigeria. Conservative estimates suggest 30-50 million Nigerians participate in some form of esusu or ajo. The National Bureau of Statistics and EFInA financial inclusion surveys consistently show that informal savings groups are the primary "financial institution" for the majority of Nigerian adults — more common than bank accounts in many demographics.

A typical circle involves 10-30 members contributing N5,000-50,000 weekly or monthly. A 20-person circle contributing N10,000 weekly moves N200,000 per week — N10.4M per year. Multiply by millions of circles, and the aggregate annual flow through esusu/ajo likely exceeds N10-20T ($6.5-13B). This money is invisible to every formal financial institution.

### The Zero: What Percentage Has Nothing?

Approximately 99% of esusu/ajo groups have zero digital records. The coordinator uses a notebook, a memory, or nothing. Members have no independent verification mechanism. The only "technology" is a phone call to complain when something goes wrong.

### Why the Pain Is Getting Worse

- **Naira depreciation** has increased circle sizes (members contribute more to maintain purchasing power), raising the stakes of each cycle and making disputes more costly
- **Migration and urbanization** mean circle members are increasingly geographically dispersed — a circle that used to meet weekly at Mama Chidinma's shop now includes members across Lagos, Port Harcourt, and Abuja, making physical record-keeping impractical
- **Mobile money growth** (OPay, Moniepoint, PalmPay) means contributions increasingly happen via transfer rather than cash handoff, but there is still no record system — the coordinator's word remains the only proof
- **7.2M MSME shutdowns (2023-2024)** have pushed more people into informal savings as formal banking becomes less accessible

### Why Existing Solutions Don't Serve This Segment

- **Banks:** Require individual accounts, documentation, KYC. Do not accommodate group savings mechanics. Minimum balances and fees make them hostile to low-income savers.
- **Fintech apps (PiggyVest, Cowrywise):** Target smartphone-owning, app-downloading, bank-linked individuals. Do not support group ROSCA mechanics. Require internet access that 42% of connections lack.
- **MoneyFellows (Egypt, $31M raised):** Proved the digital ROSCA model works in Africa. But MoneyFellows is an app-based payment platform — it processes contributions. AjoTrust is deliberately NOT a payment platform. It is a record system. This is a critical distinction: payment processing requires licenses, capital reserves, and regulatory compliance. Record-keeping requires a USSD code and a database.
- **Nothing exists in Nigeria.** No USSD-based, no WhatsApp-based, no app-based ROSCA record-keeping product exists for the unbanked Nigerian market.

### Market Sizing

| Metric | Value | Source |
|--------|-------|--------|
| Estimated ROSCA participants | 30-50M | EFInA, NBS surveys |
| Average circle size | 10-30 members | Field observations |
| Estimated active circles | 2-5M | Derived (participants / avg size) |
| Average monthly contribution | N5,000-50,000 | Regional variance |
| Annual flow through ROSCAs | N10-20T ($6.5-13B) | Derived |
| TAM (all ROSCA record-keeping) | 2-5M groups | |
| SAM (urban + peri-urban, phone-owning) | 1-2M groups | |
| SOM (Year 1, 3 cities) | 500-2,000 groups | |

### Regional Variance

- **South-East:** Isusu deeply embedded in Igbo commercial culture. Nnewi, Aba, Onitsha trading communities run large circles (N50K-500K/month contributions). High-value target but insecurity/sit-at-home disruptions affect meeting schedules.
- **South-West (Lagos):** Ajo and esusu widespread among market traders, transport workers, artisans. Lower average contributions but higher population density = more circles.
- **North (Kano, Kaduna):** Adashe circles common, often gender-separated. USSD-first approach critical — Nokia feature phones dominant.
- **South-South (Port Harcourt):** Strong esusu culture. Family network provides validation access.

---

## 3. Target Personas

### Primary: "Mama Blessing" — The Circle Member

**Name:** Blessing Okonkwo, 38
**Location:** Alaba International Market, Lagos
**Occupation:** Fabric trader (ankara, lace, aso-oke)
**Monthly income:** N150-350K
**Phone:** Itel feature phone + basic Android phone (N18K). Has WhatsApp on the Android but uses the Itel for calls and USSD banking.
**Banking:** OPay account. No formal bank account.
**Financial tools:** None. Has never used any digital financial product beyond OPay transfers.

**Her esusu reality:**
Blessing is in two savings circles. One is a 15-person weekly circle at her market — each person contributes N15,000/week, and one person collects N225,000 each week. The other is a 20-person monthly circle organized by her church women's group — N20,000/month, N400,000 pot.

Her problem is not with saving. She is disciplined. Her problem is with the coordinator. Last year, the market circle's coordinator — a senior trader Blessing respects — claimed Blessing had missed a contribution in Week 12. Blessing knows she paid. She handed N15,000 cash to the coordinator's assistant. But there is no record. The coordinator's notebook has no entry. Blessing lost N15,000 and the social confrontation damaged a relationship she depends on for her business. She has heard worse stories: coordinators who disappeared with the pot, members who claimed they paid when they did not, circles that collapsed after years because of a single disputed cycle.

**Decision trigger:** "If there was something where both me and the coordinator can see the same record — something nobody can change — I would feel safe. I don't trust notebooks anymore."

### Secondary: "Oga Kunle" — The Coordinator

**Name:** Kunle Adeyemi, 47
**Location:** Mushin, Lagos
**Occupation:** Auto parts dealer, also coordinates 3 ajo circles
**Monthly income:** N400-700K (business) + social capital from coordinating circles
**Phone:** Samsung A-series smartphone. Active on WhatsApp.

**His coordinator reality:**
Kunle coordinates 3 circles: a 25-person weekly circle (N10,000/person), a 15-person monthly circle (N50,000/person), and a 10-person weekly circle among his auto parts trading associates. He manages a total of 50 members, N250K+ in weekly contributions, and a constant stream of "Oga, I paid you last week" disputes.

He keeps records in a hardcover notebook. He writes each member's name, the date, and the amount. The notebook has water stains. Some entries are illegible. He has been doing this for 12 years and has never had a serious scandal — but two of his circles have come close. He dreads the day a dispute he cannot resolve destroys his reputation.

**Decision trigger:** "If my members could confirm their own payment, I would sleep better. The notebook is my burden. I carry it everywhere because if it is lost, everything is lost."

**Why Kunle is the distribution vector:** Kunle manages 50 members across 3 circles. If he registers his circles on AjoTrust, 50 people are onboarded in a single action. Coordinator-as-distributor is the growth model: 1 coordinator = 10-50 members.

### Tertiary: The Data Buyer — Micro-Lender

**Name:** Adeola Fashola, 34
**Location:** Victoria Island, Lagos
**Role:** Head of Risk, micro-lending fintech (Moove, FairMoney, Carbon type company)
**Problem:** Needs to lend to informal economy workers but has zero credit data on them. 87% of Nigerian adults have no formal credit history. Every loan to the informal sector is a blind bet.
**Decision trigger:** "If you can show me that this person has saved N10,000 every week for 40 weeks without missing a single contribution, that is a stronger credit signal than a bank statement. I would pay for that data."

---

## 4. Problem Deep Dive

### The Esusu/Ajo Lifecycle (Current State)

**Step 1: Group Formation**
A coordinator — usually a respected community member, senior trader, or religious leader — announces a new circle. Members join based on personal trust in the coordinator. Terms are verbal: contribution amount, frequency, order of payout, penalties for late payment. Nothing is written down except sometimes in the coordinator's notebook.

**What goes wrong:** Terms are ambiguous. "If you miss a week, you go to the back of the line" — but what if you miss because you were sick? What if the coordinator changes the payout order? There is no reference document.

**Step 2: Contributions**
Members pay their contribution — in cash at a meeting point, via mobile money transfer, or via bank transfer. The coordinator marks payment in their notebook (or memory).

**What goes wrong:** Cash contributions have no receipt. Transfer contributions have a bank/OPay record but no link to the specific circle or cycle. The coordinator may mark someone as "not paid" when they paid, or mark someone as "paid" when they did not. The error rate is not malicious — it is human. Managing 20-50 payments weekly with a notebook is error-prone by design.

**Quantified impact:** Field interviews and anecdotal evidence suggest 5-15% of circle disputes stem from recording errors. A single disputed contribution in a N10K/week, 20-person circle is a N10,000 conflict. Over a year, a 20-person circle may experience 3-5 disputes, totaling N30-50K in contested amounts.

**Step 3: Payout**
The coordinator collects all contributions and gives the pot to the designated recipient. In some circles, the recipient is pre-determined (fixed rotation). In others, the recipient is the person with the most urgent need (flexible rotation, decided by group vote or coordinator discretion).

**What goes wrong:** The coordinator may delay payout, claiming not all members have paid. The recipient has no way to verify. The coordinator may deduct "expenses" from the pot without transparency. In extreme cases, the coordinator disappears with the pot — a catastrophic failure that destroys the circle and all trust within the group.

**Step 4: Cycle Completion**
After every member has received the pot once, the cycle is complete. A new cycle may begin immediately.

**What goes wrong:** There is no record of cycle completion. Members who joined late or left mid-cycle dispute their standing. New circles inherit no trust data from previous circles — a coordinator who ran 10 successful cycles has no verifiable track record.

### The Pull Test

Do people already spend money/effort on workarounds?

**Yes — significant effort:**
- Coordinators buy dedicated notebooks (N200-500) and spend 1-2 hours weekly managing records
- Members make phone calls to confirm payment status (airtime cost)
- Some circles designate a "witness" for each payment — someone who physically watches the cash handoff (time cost for 3 people per transaction)
- Disputes consume social capital — hours of meetings, arguments, elder mediation
- Some members photograph their bank transfer receipts and save them in a dedicated WhatsApp folder (behavior workaround)

**This is pull, not push.** People are actively seeking ways to reduce the trust problem. They would adopt a solution that works on their existing phone, in under 60 seconds, for free.

---

## 5. Solution Overview

### Design Philosophy: Record System, Not Payment System

AjoTrust does not touch money. It does not process payments. It does not hold funds. It creates a shared, timestamped, immutable record of what happened — who contributed, when, how much, and who received the pot. The coordinator and every member can access this record via USSD at any time. The record belongs to the group, not to the coordinator.

This distinction is critical. A payment system requires financial services licensing, capital reserves, AML/KYC compliance, and regulatory approval. A record system requires a USSD code and a database. AjoTrust is buildable and launchable in weeks, not months.

### Stage 1: Group Registration (Coordinator)

**Channel:** USSD
**What happens:** Coordinator dials USSD code, enters group name, contribution amount, frequency (weekly/monthly), and number of members. System generates a unique group code (e.g., AJO-4829). Coordinator shares this code with members.
**Data created:** Group record with terms, coordinator identity, creation timestamp.

### Stage 2: Member Enrollment

**Channel:** USSD
**What happens:** Each member dials the USSD code and enters the group code to join. System confirms enrollment and shows group terms (amount, frequency, member count). Member confirms participation.
**Data created:** Member-group association, enrollment timestamp, phone number linkage.

### Stage 3: Contribution Confirmation

**Channel:** USSD
**What happens:** When a member makes their contribution (via cash, transfer, or any method), they dial the USSD code and confirm: "I have contributed N10,000 to group AJO-4829 for this cycle." The coordinator then confirms receipt via their own USSD session: "Blessing has contributed N10,000 — CONFIRM or DENY." Both confirmations are timestamped.
**Data created:** Dual-confirmed contribution record. If only the member claims payment, the record shows "member-claimed, coordinator-unconfirmed." If only the coordinator confirms, the record shows "coordinator-confirmed, member-unconfirmed." This asymmetry is itself a signal.

### Stage 4: Payout Recording

**Channel:** USSD
**What happens:** When the pot is paid out, the coordinator records: "Payout of N[total] to [member name] for cycle [X]." The recipient confirms via USSD: "I received N[amount] from group AJO-4829."
**Data created:** Payout record with dual confirmation, completing the cycle record.

### Stage 5: Status & History Check

**Channel:** USSD (individual) + SMS (group summary)
**What happens:** Any member dials the USSD code and sees: their contribution history, current cycle status, who has contributed this cycle, upcoming payout schedule. Coordinator sees full group dashboard via USSD.
**Data created:** Access logs (which members check status most frequently — another behavioral signal).

### What AjoTrust Deliberately Sacrifices

- **No payment processing** — deliberately worse than MoneyFellows (Egypt), which moves money. AjoTrust only records. But this makes it launchable without financial services licensing.
- **No smartphone app** — deliberately worse than PiggyVest or Cowrywise. But this makes it accessible to 100% of phone owners, including the 42% on 2G.
- **No interest/returns** — deliberately worse than formal savings products. But esusu members are not seeking returns — they are seeking discipline and community.
- **No dispute resolution** — AjoTrust does not arbitrate. It provides the record. Humans resolve disputes using that record.

### Iteration Path

- **Phase 1 (Month 1-3):** USSD record-keeping. Coordinator registers, members join, contributions confirmed. SMS summaries.
- **Phase 2 (Month 4-6):** WhatsApp confirmation channel (for smartphone users). Automated SMS reminders before contribution due date. Group leaderboard (who has perfect attendance).
- **Phase 3 (Month 7-12):** Contribution history becomes a shareable "trust certificate" — a member can authorize AjoTrust to share their contribution record with a lender. Credit scoring API for institutional data buyers.
- **Phase 4 (Month 12-24):** Coordinator reputation scores. Cross-circle member profiles. Integration with VendorScore for composite credit signals.

---

## 6. Functional Requirements

### MUST Have — MVP (Month 1)

### FR1: Group Registration via USSD
- **Description**: Coordinator creates a new savings group with defined terms
- **Channel**: USSD
- **Inputs**: Group name, contribution amount (N), frequency (weekly/monthly/bi-weekly), expected member count
- **Outputs**: Unique group code (e.g., AJO-4829), confirmation SMS with group details
- **Acceptance Criteria**:
  - [ ] Registration completes in 4 USSD screens or fewer
  - [ ] Group code is unique, alphanumeric, 8 characters or fewer
  - [ ] Coordinator receives SMS confirmation within 30 seconds of registration
  - [ ] System rejects contribution amounts below N500 or above N500,000
  - [ ] Group name limited to 30 characters (USSD display constraint)

### FR2: Member Enrollment via USSD
- **Description**: Member joins an existing group using the group code
- **Channel**: USSD
- **Inputs**: Group code, member's phone number (auto-detected from USSD session)
- **Outputs**: Confirmation of enrollment, group terms displayed
- **Acceptance Criteria**:
  - [ ] Enrollment completes in 3 USSD screens or fewer
  - [ ] Member sees contribution amount, frequency, and current member count before confirming
  - [ ] System rejects enrollment if group is full (member count reached)
  - [ ] Duplicate enrollment (same phone number, same group) is blocked with clear message
  - [ ] Coordinator receives SMS notification when a new member joins

### FR3: Contribution Confirmation — Member Side
- **Description**: Member records that they have made their contribution for the current cycle
- **Channel**: USSD
- **Inputs**: Group selection (if member is in multiple groups), confirmation of contribution
- **Outputs**: Timestamped record, confirmation message
- **Acceptance Criteria**:
  - [ ] Member selects group and confirms contribution in 3 USSD screens or fewer
  - [ ] System records timestamp accurate to the minute
  - [ ] Member cannot confirm the same contribution twice for the same cycle
  - [ ] If member is in multiple groups, system lists groups and lets them select
  - [ ] Confirmation message includes: amount, group name, cycle number, date

### FR4: Contribution Confirmation — Coordinator Side
- **Description**: Coordinator confirms or denies that a member's contribution has been received
- **Channel**: USSD
- **Inputs**: Member name/number selection, confirm or deny
- **Outputs**: Updated contribution record (dual-confirmed, or disputed)
- **Acceptance Criteria**:
  - [ ] Coordinator sees list of members with pending (unconfirmed) contributions
  - [ ] Coordinator can confirm or deny each with a single keypress
  - [ ] If coordinator denies, record shows "disputed" status visible to both parties
  - [ ] Coordinator can bulk-confirm multiple members in a single USSD session
  - [ ] All coordinator actions are timestamped and logged

### FR5: Status Check — Member
- **Description**: Member checks their contribution history and group status
- **Channel**: USSD
- **Inputs**: Group selection
- **Outputs**: Personal contribution status, current cycle progress, next payout recipient
- **Acceptance Criteria**:
  - [ ] Status displayed in 2 USSD screens (summary + detail)
  - [ ] Shows: "You have contributed X of Y cycles. Next contribution due: [date]"
  - [ ] Shows: "This cycle: [X] of [Y] members have contributed"
  - [ ] Shows: "Next payout to: [member name]"
  - [ ] Response time < 2 seconds from USSD request to display

### FR6: Status Check — Coordinator
- **Description**: Coordinator views full group status including all member contributions
- **Channel**: USSD + SMS (for detailed view)
- **Inputs**: Group selection
- **Outputs**: Group summary on USSD, detailed member list via SMS
- **Acceptance Criteria**:
  - [ ] USSD screen shows: total contributed this cycle, members paid, members outstanding
  - [ ] SMS follow-up (triggered by USSD option) shows full member-by-member status
  - [ ] SMS delivered within 60 seconds of request
  - [ ] Coordinator can request status for any past cycle, not just current

### FR7: Payout Recording
- **Description**: Coordinator records that the pot has been paid to the designated recipient
- **Channel**: USSD
- **Inputs**: Recipient selection, amount paid out
- **Outputs**: Payout record, SMS notification to recipient
- **Acceptance Criteria**:
  - [ ] Payout recording completes in 3 USSD screens
  - [ ] Recipient receives SMS: "You have been recorded as receiving N[amount] from [group name]"
  - [ ] Recipient can confirm receipt via USSD (dual confirmation)
  - [ ] System tracks payout order and flags if the same member receives twice before all members have received

### FR8: Phone Number as Account
- **Description**: Phone number serves as the unique account identifier — no separate registration required
- **Channel**: USSD
- **Inputs**: Phone number (auto-detected from USSD session)
- **Outputs**: Account creation (transparent to user)
- **Acceptance Criteria**:
  - [ ] First USSD interaction creates account automatically
  - [ ] No email, password, or additional information required beyond phone number
  - [ ] Account persists across sessions
  - [ ] Member can be in multiple groups with the same phone number

### SHOULD Have — Month 2

### FR9: SMS Contribution Reminders
- **Description**: Automated SMS sent to members before contribution is due
- **Channel**: SMS (outbound)
- **Inputs**: Group schedule (set during registration)
- **Outputs**: SMS to all group members
- **Acceptance Criteria**:
  - [ ] Reminder sent 24 hours before contribution due date
  - [ ] Message includes: group name, amount due, due date
  - [ ] Message is under 160 characters (single SMS)
  - [ ] Members can opt out of reminders via USSD

### FR10: Group History Export via SMS
- **Description**: Full cycle history sent as a series of SMS messages
- **Channel**: SMS
- **Inputs**: Coordinator or member request via USSD
- **Outputs**: Cycle-by-cycle contribution history
- **Acceptance Criteria**:
  - [ ] History covers all completed cycles
  - [ ] Each SMS covers one cycle (who paid, who received, date)
  - [ ] Maximum 10 SMS per history request (summarize if more cycles exist)

### FR11: Coordinator Dashboard Summary SMS
- **Description**: Weekly automated summary sent to coordinator
- **Channel**: SMS
- **Inputs**: Automatic (scheduled)
- **Outputs**: Group health summary
- **Acceptance Criteria**:
  - [ ] Sent every Monday at 8am
  - [ ] Includes: members current, contribution compliance rate, next payout date/recipient
  - [ ] Covers all groups the coordinator manages

### COULD Have — Month 3+

### FR12: WhatsApp Confirmation Channel
- **Description**: Members can confirm contributions via WhatsApp in addition to USSD
- **Channel**: WhatsApp
- **Acceptance Criteria**:
  - [ ] Member sends group code + "PAID" to WhatsApp number
  - [ ] System confirms and records identically to USSD confirmation
  - [ ] Works alongside USSD — members choose their preferred channel

### FR13: Contribution Trust Certificate
- **Description**: Member can generate a shareable record of their contribution history for lenders
- **Channel**: USSD (trigger) + SMS (delivery)
- **Acceptance Criteria**:
  - [ ] Member requests certificate via USSD
  - [ ] Certificate includes: groups participated in, total contributions, compliance rate, duration
  - [ ] Certificate has a verification code that data buyers can validate via API
  - [ ] Member explicitly consents before any data is shared

### WON'T Have — Explicit Exclusions

| Feature | Rationale |
|---------|-----------|
| Payment processing | Requires financial services licensing, capital reserves, regulatory approval. AjoTrust is a record system, not a money movement system. |
| Dispute resolution/arbitration | AjoTrust provides the record. Humans resolve disputes. Adding arbitration creates legal liability and cultural complexity. |
| Mobile app | 42% of connections are 2G. USSD reaches 100% of phone owners. App excludes the core user. |
| Interest/returns on savings | Would make AjoTrust a financial product requiring CBN licensing. The value is in the record and credit data, not in yield. |
| Automatic payout rotation | Different circles have different rotation rules (fixed, auction, need-based). Encoding all variants is scope creep. Record the outcome, do not manage the process. |
| Web dashboard for members | Members are on USSD. A dashboard serves nobody in the target segment. |

---

## 7. Non-Functional Requirements

### NFR1: Performance
- USSD response time: < 2 seconds for all menu interactions
- SMS delivery: < 60 seconds from trigger to delivery (carrier-dependent)
- Database write latency: < 500ms for contribution recording
- Concurrent USSD sessions: support 100 simultaneous sessions at launch, scalable to 1,000

### NFR2: Offline/Low-Bandwidth
- USSD operates on 2G — no internet required on the user's device
- All data stored server-side (no client-side caching needed for USSD)
- SMS delivery queued if carrier temporarily unavailable, retried 3 times over 30 minutes
- System remains fully functional during internet outages on user side (USSD is carrier-routed)

### NFR3: Security
- Phone number verification via USSD session (carrier-authenticated — USSD sessions are inherently tied to the SIM)
- All contribution records are append-only (no edits, no deletes — corrections are new entries)
- Coordinator cannot modify a member's self-reported contribution without creating a visible "coordinator override" record
- Database encryption at rest (Supabase default)
- NDPR (Nigeria Data Protection Regulation) compliance: individual data never shared without explicit consent
- Rate limiting: maximum 50 USSD sessions per phone number per day (fraud prevention)

### NFR4: Scalability
- Database schema supports 10,000 groups with 50 members each (500,000 member-group records)
- Supabase free tier handles initial load (50K rows); upgrade trigger at 30K rows
- USSD session management via Africa's Talking handles bursts (their infrastructure, not ours)
- SMS queue handles 10,000 messages/day at launch scale

### NFR5: Accessibility
- USSD works on every phone manufactured in the last 25 years — feature phones, smartphones, 2G/3G/4G
- All USSD screens under 160 characters (single screen display)
- Menu options numbered 1-5 (maximum 5 options per screen to avoid scrolling on small displays)
- SMS messages under 160 characters (single SMS, no multi-part)
- Language: English with Pidgin English option (Phase 2)

### NFR6: Regional
- Phone number format: +234 standard
- Currency: NGN only, no decimals (contributions are always whole naira amounts)
- Time zone: WAT (UTC+1) for all timestamps
- USSD short code accessible on all major networks (MTN, Glo, Airtel, 9mobile)

---

## 8. Key Screens & UX

AjoTrust has no traditional screens. The "UI" is USSD menu trees and SMS messages.

### USSD Menu Tree — Main Menu

```
Dial *384*AJO#

Welcome to AjoTrust.
1. Start new group
2. Join a group
3. Confirm my contribution
4. Check group status
5. I am a coordinator

Characters: ~115 (within 160 limit)
```

### USSD Flow — Start New Group (FR1)

```
Screen 1: Enter group name:
> Mama's Weekly Ajo

Screen 2: Contribution amount (Naira):
> 10000

Screen 3: How often?
1. Weekly
2. Every 2 weeks
3. Monthly
> 1

Screen 4: How many members?
> 20

Screen 5:
Group created!
Code: AJO-4829
Share this code with members.
You will get SMS with details.

Total: 5 screens. Under 60 seconds.
```

### USSD Flow — Join Group (FR2)

```
Screen 1: Enter group code:
> AJO-4829

Screen 2:
Group: Mama's Weekly Ajo
Amount: N10,000/week
Members: 12 of 20
1. Join this group
2. Cancel

> 1

Screen 3:
Welcome! You are member 13 of 20.
Your coordinator will be notified.

Total: 3 screens. Under 30 seconds.
```

### USSD Flow — Confirm Contribution (FR3)

```
Screen 1: Your groups:
1. Mama's Weekly Ajo
2. Church Monthly Ajo
> 1

Screen 2:
Mama's Weekly Ajo — Week 8
Contribution: N10,000
1. I have paid
2. Not yet

> 1

Screen 3:
Recorded! Your coordinator will confirm.
Paid this week: 14 of 20 members.

Total: 3 screens. Under 20 seconds.
```

### USSD Flow — Coordinator Confirms (FR4)

```
Screen 1: Your groups:
1. Mama's Weekly Ajo (5 pending)
2. Market Ajo (2 pending)
> 1

Screen 2:
Pending confirmations:
1. Blessing — N10,000
2. Tunde — N10,000
3. Fatima — N10,000
4. See more
5. Confirm all

> 1

Screen 3:
Blessing says she paid N10,000.
1. Confirm
2. Deny

> 1

Screen 4:
Confirmed. Blessing — N10,000 — Week 8.
3 more pending.
1. Next member
2. Back to group

Total: 4 screens per confirmation; bulk confirm available.
```

### SMS Templates

**Contribution reminder (FR9):**
```
AjoTrust: Your N10,000 contribution to
Mama's Weekly Ajo is due tomorrow.
Dial *384*AJO# to confirm after paying.
```
(148 characters)

**Member enrollment notification (to coordinator):**
```
AjoTrust: Blessing (+2348012345678) has
joined Mama's Weekly Ajo. 13 of 20 members.
```
(96 characters)

**Payout confirmation (to recipient):**
```
AjoTrust: You received N200,000 from
Mama's Weekly Ajo (Week 8). Dial *384*AJO#
to confirm receipt.
```
(104 characters)

### UX Principles Applied

- **P1 (WhatsApp-Simple):** USSD interactions complete in under 60 seconds. Numbered options only.
- **P6 (Progressive Complexity):** Member sees 5 options. Coordinator sees 5 options. No hidden menus, no settings screens.
- **P8 (Low-Bandwidth):** USSD requires zero bandwidth from the user. SMS is single-message.
- **P9 (USSD Fallback):** USSD is not the fallback — it IS the product. SMS is the fallback for notifications.

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| USSD Integration | Africa's Talking | Industry standard for USSD in Africa; session management included; pay-per-session; works on all 138.7M connections |
| SMS (Outbound) | Termii | Cheapest Nigerian SMS API; reliable delivery on all networks |
| Backend | Next.js 14 API Routes | Single deployment; handles USSD callback endpoints; TypeScript |
| Database | Supabase PostgreSQL | Free tier (500MB); Row Level Security for group isolation; append-only ledger pattern |
| Hosting | Vercel | Free tier for MVP; auto-scaling; webhook processing |
| Scheduled Jobs | Vercel Cron or Supabase pg_cron | Contribution reminders; weekly coordinator summaries |
| Monitoring | PostHog + Sentry | Track: registration → first contribution → 4-week retention; error tracking |

### Database Schema

```sql
-- Users (phone number = identity)
users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,        -- +234XXXXXXXXXX
  display_name text,                        -- optional, set on first group join
  created_at timestamptz DEFAULT now(),
  last_active_at timestamptz DEFAULT now()
)

-- Savings Groups
groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_code text UNIQUE NOT NULL,          -- e.g., AJO-4829
  group_name text NOT NULL,
  coordinator_id uuid REFERENCES users NOT NULL,
  contribution_amount decimal(15,2) NOT NULL,
  frequency text NOT NULL CHECK (frequency IN ('weekly', 'biweekly', 'monthly')),
  max_members integer NOT NULL,
  current_cycle integer DEFAULT 1,
  status text DEFAULT 'active' CHECK (status IN ('active', 'paused', 'completed')),
  created_at timestamptz DEFAULT now()
)

-- Group Memberships
memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid REFERENCES groups NOT NULL,
  user_id uuid REFERENCES users NOT NULL,
  payout_position integer,                  -- order in rotation (nullable if flexible)
  status text DEFAULT 'active' CHECK (status IN ('active', 'left', 'removed')),
  joined_at timestamptz DEFAULT now(),
  UNIQUE(group_id, user_id)
)

-- Contribution Records (append-only ledger)
contributions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid REFERENCES groups NOT NULL,
  user_id uuid REFERENCES users NOT NULL,
  cycle_number integer NOT NULL,
  amount decimal(15,2) NOT NULL,
  member_confirmed boolean DEFAULT false,   -- member says they paid
  member_confirmed_at timestamptz,
  coordinator_confirmed boolean DEFAULT false, -- coordinator confirms receipt
  coordinator_confirmed_at timestamptz,
  status text DEFAULT 'pending' CHECK (status IN
    ('pending', 'member_claimed', 'confirmed', 'disputed', 'missed')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(group_id, user_id, cycle_number)
)

-- Payout Records
payouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid REFERENCES groups NOT NULL,
  recipient_id uuid REFERENCES users NOT NULL,
  cycle_number integer NOT NULL,
  amount decimal(15,2) NOT NULL,
  coordinator_confirmed boolean DEFAULT false,
  recipient_confirmed boolean DEFAULT false,
  confirmed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(group_id, cycle_number)
)

-- Aggregated member credit signals (computed daily)
member_credit_signals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users NOT NULL,
  total_groups_participated integer DEFAULT 0,
  total_contributions_made integer DEFAULT 0,
  total_contributions_missed integer DEFAULT 0,
  total_amount_contributed decimal(15,2) DEFAULT 0,
  compliance_rate decimal(5,4),             -- 0.0000-1.0000
  longest_streak integer DEFAULT 0,         -- consecutive on-time contributions
  computed_at timestamptz DEFAULT now()
)
```

### USSD Session Architecture

```
USSD request (*384*AJO#)
  → Africa's Talking callback to Vercel API Route (/api/webhooks/ussd)
  → Parse session state (Africa's Talking manages session continuity)
  → Route to appropriate handler based on menu selection
  → Execute database operation (INSERT/SELECT)
  → Return USSD response text (< 160 chars)
  → Session continues or ends

USSD constraint: 180-second session timeout, 160-character screen limit
Latency target: < 2 seconds per screen transition
```

### Webhook Flow for Contribution Confirmation

```
Member dials *384*AJO# → selects "Confirm contribution" → selects group
  → System creates contribution record (member_confirmed = true)
  → SMS sent to coordinator: "[Member] says they paid N[amount]. Confirm via *384*AJO#"
  → Coordinator dials *384*AJO# → selects "Coordinator" → sees pending list
  → Coordinator confirms → record updated (coordinator_confirmed = true, status = 'confirmed')
  → SMS sent to member: "Your N10,000 contribution to [group] has been confirmed by coordinator"
```

---

## 10. Data Asset Strategy

### What Data AjoTrust Creates That Did Not Exist Before

1. **Individual savings behavior data:** Contribution consistency, amounts, frequency, streaks, defaults — for people with zero formal financial history
2. **Group trust networks:** Who saves with whom, coordinator reputation across multiple groups, social graph of financial trust
3. **Informal savings flow data:** Aggregate volume, frequency, seasonal patterns, regional variation — currently a complete black box to the financial sector
4. **Credit reliability signals:** A member with a 95% compliance rate across 3 groups over 12 months is quantifiably creditworthy — but no institution can see this today

### How This Data Feeds Other Mentaat Products

- **AjoTrust → VendorScore:** Contribution compliance rate is a direct input to VendorScore's credit scoring model. A 52-week perfect contribution record is a stronger signal than most formal credit bureau entries.
- **AjoTrust → InsureMatch:** Group savings data provides risk profiling for micro-insurance products. Members in active savings circles demonstrate financial planning behavior that correlates with lower insurance risk.
- **AjoTrust → KasaBook:** Cross-referencing savings circle participation with trading activity creates a composite financial profile: "This trader earns N300K/month (KasaBook), saves N10K/week consistently (AjoTrust), and has never defaulted on a debt (KasaBook)."
- **AjoTrust → RideBooks:** Transport drivers who are also savings circle members show multi-dimensional financial discipline.

### Who Would License This Data

| Buyer | Use Case | Estimated Price |
|-------|----------|----------------|
| Micro-lenders (FairMoney, Carbon, Branch) | Credit scoring for informal sector borrowers | N50-200 per query |
| Microfinance banks | Pre-screening for group lending products | N100K-500K/month flat fee |
| Insurance companies | Risk profiling for micro-insurance | N50-100 per profile |
| Development finance (IFC, World Bank programs) | Research on informal savings behavior | N2-10M per dataset |
| Central Bank of Nigeria (financial inclusion data) | Policy research | Data exchange / regulatory goodwill |

### Privacy/Anonymization Approach

- **Individual data:** Private. Never shared without explicit member consent (FR13 trust certificate requires opt-in).
- **Aggregate data:** Anonymized, de-identified, licensable. "In Lagos, 68% of weekly savings circle members with contributions under N20K maintain 90%+ compliance rates." No names, no phone numbers, no group identifiers.
- **Consent model:** Member initiates data sharing by requesting a trust certificate. They choose which lender to share with. AjoTrust never pushes data sharing.

---

## 11. Value Chain Design

### Infrastructure This Product Builds

AjoTrust creates the first digital record layer for informal savings circles. This infrastructure does not exist anywhere in Nigeria — or in most of Sub-Saharan Africa. The record-keeping infrastructure enables:
- Verifiable savings history for people who have never had one
- Coordinator accountability (their confirmation patterns are recorded)
- Cross-group member profiles (contribution behavior across multiple circles)
- The raw data substrate for informal economy credit scoring

### Four Pillars Assessment

| Pillar | Application |
|--------|------------|
| **Resource Commitment** | USSD infrastructure (Africa's Talking), database (Supabase), SMS delivery (Termii). Low capital but requires sustained operational commitment to manage USSD sessions and SMS costs for free users generating zero direct revenue. |
| **Cross-Market Knowledge Transfer** | MoneyFellows (Egypt, $31M) proved digital ROSCA works in Africa. Khatabook (India) proved that record-keeping for informal finance creates massive user bases. AjoTrust transfers both patterns but adapts the channel (USSD vs. app) and scope (records only, no payments) for Nigeria's infrastructure reality. |
| **Value-Chain Coordination** | Coordinator-as-distributor model coordinates the entire chain: one coordinator registers a group and 10-50 members are onboarded. This mirrors Tolaram's 1,000 distributors → 600,000 retailers model. AjoTrust does not need to reach individual members — it needs to reach coordinators. |
| **Transferability** | The USSD record-keeping pattern (dual-party confirmation, append-only ledger, phone-as-identity) transfers directly to every other Layer 1 product: RideBooks, MarketPass, MasterBook, SkillProof. Build once, replicate across use cases. |

### Externalities

- **Trust amplification:** Groups with AjoTrust records may attract more members (verifiable trust → larger circles → more savings mobilization)
- **Coordinator professionalization:** Coordinators with verifiable track records can manage more/larger circles, creating a new informal financial services role
- **Financial inclusion data:** Aggregate data contributes to Nigeria's financial inclusion metrics (CBN targets), creating regulatory goodwill
- **Social cohesion:** Fewer disputes → stronger community bonds → more circles formed → more savings mobilized

---

## 12. Pricing & Unit Economics

### Pricing Tiers

**Free Tier (Forever Free)**
- Register unlimited groups
- Enroll unlimited members
- Contribution confirmation (member + coordinator)
- Status checks via USSD
- Basic SMS notifications (contribution reminders, enrollment alerts)

The free tier must be fully functional. A coordinator running a 20-person circle must get complete value from the free tier. This is critical: the data each free group generates is the real revenue source.

**Premium Tier — N1,000-3,000/month per group ($0.65-1.95)**
- Detailed group reports via SMS (contribution analytics, member compliance rankings)
- Priority SMS delivery
- Historical export (full cycle history via SMS series)
- Multiple group management dashboard (SMS-based summary across all groups)
- Custom reminder schedules

**Data Licensing (Phase 3, Month 12+)**
- Credit scoring API: N50-200 per member query (requires member consent)
- Aggregate data reports: N100K-500K/month per institutional buyer
- Bulk research datasets: N2-10M per engagement

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| USSD cost per session | N5-10 | Africa's Talking per-session pricing |
| Avg USSD sessions per member/month | 4-6 | 1 confirmation + 1-2 status checks per cycle |
| USSD cost per member/month | N20-60 | 4-6 sessions × N5-10 |
| SMS cost per message | N4-5 | Termii per-SMS |
| Avg SMS per member/month | 4-6 | 1 reminder + 1 confirmation + 1 summary |
| SMS cost per member/month | N16-30 | 4-6 × N4-5 |
| **Total marginal cost per free member/month** | **N36-90** | **~$0.02-0.06** |
| **Cost per group (20 members)/month** | **N720-1,800** | |
| Supabase cost per group/month | ~N5 | Pro plan amortized |
| **Total cost per free group/month** | **N725-1,805** | |
| **Premium revenue per group** | **N1,000-3,000/month** | |
| **Gross margin per premium group** | **40-70%** | Lower than pure SaaS due to USSD/SMS costs |

### Revenue Targets

| Milestone | Groups | Members | Premium (5%) | Monthly Revenue | Monthly Cost | Net |
|-----------|--------|---------|-------------|----------------|-------------|-----|
| Month 3 | 50 | 750 | 0 | N0 | N27-68K | -N27-68K |
| Month 6 | 200 | 3,000 | 10 | N10-30K | N108-270K | -N98-240K |
| Month 12 | 1,000 | 15,000 | 50 | N50-150K | N540K-1.35M | -N390K-1.2M |
| Month 18 | 5,000 | 75,000 | 250 | N250-750K + data licensing | N2.7-6.75M | Approaching break-even with data |
| Month 24 | 15,000 | 225,000 | 750 + data API | N2-5M (subscriptions + data) | N8.1-20.25M | Requires data licensing revenue |

### Break-Even Analysis

AjoTrust does not break even on subscriptions alone at any realistic scale. The unit economics of USSD/SMS costs per member mean that the free tier costs N36-90/month per member with zero offsetting revenue. Premium subscriptions at 5% conversion barely cover the premium groups' costs.

**Break-even requires data licensing.** At 15,000+ groups (225,000+ members), the credit data asset becomes valuable enough to license at rates that cover operating costs. This is the same model as KasaBook: slow monetize, high ceiling.

**Realistic funding plan:** AjoTrust is funded by revenue from Layer 2 products (PortPulse, BuildTrack, ClearFast) during the 12-18 month data collection phase.

### Cost Structure Test

Is this fundamentally different from incumbents? **Yes.** MoneyFellows (Egypt) processes payments and requires banking infrastructure, compliance, and capital reserves. PiggyVest requires a smartphone app, internet access, and bank account linkage. AjoTrust's cost structure is USSD sessions (N5-10 each) and SMS messages (N4-5 each) — costs that no app-based or payment-processing competitor would accept because their business model requires higher-margin transactions. AjoTrust operates at a price point and cost structure that incumbents would find unattractive.

---

## 13. Go-to-Market: First 10 Customers

"Customers" for AjoTrust are coordinators, not individual members. One coordinator = one group = 10-50 members.

### Channel 1: Family & Community Network (Port Harcourt)

**Target:** 3-5 coordinators in the first month
**Approach:** Builder's family network in Port Harcourt/Rivers State. Identify relatives or family friends who coordinate esusu circles. Ask: "Would you like a free system where your members can confirm payments and you never have to argue about who paid?" Demo the USSD flow on their phone. Register their group on the spot.
**Expected conversion:** High (trust is pre-established). 3-5 groups = 30-100 members.
**Cost:** N0 (family network).

### Channel 2: Market Traders via KasaBook Cross-Sell

**Target:** 5-10 coordinators from existing KasaBook users
**Approach:** KasaBook users are market traders. Many participate in savings circles. After a trader has used KasaBook for 2+ weeks, send a WhatsApp or SMS: "Do you run or belong to an esusu/ajo group? We built a free tool to track contributions. Dial *384*AJO# to try it."
**Expected conversion:** 10-20% of KasaBook users who respond.
**Cost:** N0 (cross-sell from existing product).

### Channel 3: Church and Mosque Groups

**Target:** 5-10 coordinators
**Approach:** Religious organizations frequently run savings circles among their members. Approach a pastor or imam: "Your members run ajo groups. We have a free tool that prevents disputes. Can we present it at your next fellowship meeting?"
**Expected conversion:** 1-2 groups per religious institution visited.
**Cost:** N0-5K (transport to meetings).

### Channel 4: Trade Association Leaders

**Target:** 3-5 coordinators
**Approach:** Market associations (provision sellers, fabric traders, auto parts dealers) often have internal savings circles. Present to the association leadership. The association chair who coordinates a 30-person circle is the ideal early adopter.
**Expected conversion:** 1 group per association, with potential for viral spread within the association.
**Cost:** N0 (presentations at existing meetings).

### Channel 5: WhatsApp Group Outreach

**Target:** 5-10 coordinators
**Approach:** Nigerian WhatsApp groups dedicated to esusu/ajo coordination exist (some are for finding new circles to join). Share AjoTrust in these groups as a free record-keeping tool.
**Expected conversion:** Low (cold outreach) — 2-5% of group members.
**Cost:** N0.

### Channel Summary

| Channel | Month 1 Groups | Month 2 Groups | Month 3 Groups | Cost |
|---------|---------------|---------------|---------------|------|
| Family/community network | 3-5 | 1-2 | 0-1 | N0 |
| KasaBook cross-sell | 0 | 3-5 | 5-10 | N0 |
| Church/mosque groups | 2-3 | 3-5 | 5-8 | N0-5K |
| Trade associations | 1-2 | 2-3 | 3-5 | N0 |
| WhatsApp outreach | 0-1 | 2-3 | 3-5 | N0 |
| Word-of-mouth (from existing) | 0 | 2-5 | 5-10 | N0 |
| **Total** | **6-11** | **13-23** | **21-39** | **N0-5K** |

### Cumulative: 40-73 groups by Month 3 (400-1,500 members)

### What NOT to Do
- Do not try to reach individual members directly — reach coordinators and they bring their groups
- Do not run digital ads — coordinators are not searching for ROSCA management tools
- Do not build a landing page — the USSD code IS the landing page
- Do not pitch to banks or fintechs before having 1,000+ groups with data — they will not engage without proof of data quality

---

## 14. Risks & Mitigations

### Risk 1: Low Coordinator Adoption
**Likelihood:** Medium-High. Coordinators have managed circles without technology for decades. "Why change now?"
**Impact:** Without coordinators, no groups register. Zero growth.
**Mitigations:**
- Frame AjoTrust as protecting the coordinator's reputation, not replacing their process
- Demo with a real scenario: "What happens when Blessing says she paid and you disagree? With AjoTrust, both of you confirm independently."
- Start with coordinators who have experienced disputes — they have the strongest motivation
- The product adds to their workflow (30 seconds of USSD confirmation) rather than replacing it

### Risk 2: Dual Confirmation Friction
**Likelihood:** Medium. Requiring both member AND coordinator to confirm creates two steps where one existed before.
**Impact:** Members or coordinators skip the USSD confirmation step, leading to incomplete records.
**Mitigations:**
- SMS reminders prompt confirmation ("You have 3 unconfirmed contributions. Dial *384*AJO# to confirm.")
- Records still have value even with single-party confirmation — "member-claimed" is better than no record
- Gamify compliance: "Your group has 95% confirmation rate this cycle!"
- Make confirmation fast (3 USSD screens, under 20 seconds)

### Risk 3: Data Quality
**Likelihood:** Medium. Members may confirm contributions they did not make (to look good). Coordinators may confirm contributions they did not receive (to avoid confrontation).
**Impact:** If the data is unreliable, the credit scoring use case (Phase 3) collapses.
**Mitigations:**
- Dual confirmation creates a cross-check — if member says paid but coordinator does not confirm, the discrepancy is a signal
- Consistency over time is more valuable than any single data point — a member with 50 consecutive confirmed contributions is reliable regardless of 1-2 questionable entries
- Outlier detection: flag members who confirm at unusual times or in bulk
- Phase 3 credit scoring uses contribution patterns (consistency, timing, streaks) rather than individual confirmations

### Risk 4: USSD Cost Scaling
**Likelihood:** High. Every member interaction costs N5-10. A 20-member group with 4-6 sessions per member per month costs N400-1,200/month in USSD alone — with zero revenue.
**Impact:** At 10,000 members, USSD costs reach N360K-900K/month. Without revenue, this is unsustainable.
**Mitigations:**
- Volume pricing negotiations with Africa's Talking at 1,000+ daily sessions
- Encourage WhatsApp channel adoption (Phase 2) for smartphone users — WhatsApp user-initiated messages are free
- USSD cost is the price of reaching the 42% on 2G who are invisible to every app-based product. Treat it as a customer acquisition cost for uniquely valuable data.
- Fund USSD costs from Layer 2 product revenue (PortPulse, BuildTrack, ClearFast)

### Risk 5: Trust in AjoTrust Itself
**Likelihood:** Medium. "Who is behind this? Is this safe? Will they steal our group information?"
**Impact:** Potential users refuse to register, especially coordinators who control sensitive group dynamics.
**Mitigations:**
- AjoTrust does not touch money — this is the strongest trust signal. "We never see your money. We only keep the record."
- Clear privacy messaging in registration flow and reminders
- Family/community network launch builds trust through known relationships first, then expands outward
- Coordinator testimonials from early adopters: "I have used AjoTrust for 3 months and zero disputes"

### Risk 6: Regulatory Risk
**Likelihood:** Low. Record-keeping is not regulated. AjoTrust is not a financial product.
**Impact:** If CBN or NDPC reclassifies AjoTrust as a financial service, compliance costs increase dramatically.
**Mitigations:**
- Maintain strict separation: record-keeping only, no payment processing, no fund holding, no interest, no lending
- NDPR compliance from day one
- Legal review of the record-keeping vs. financial services classification before Phase 3 (data licensing)
- If reclassified, pivot to a licensed partner model (license data to a licensed entity rather than offering financial products directly)

### Risk 7: Coordinator Fraud
**Likelihood:** Low-Medium. A dishonest coordinator could register fake groups to generate fake contribution data and obtain fraudulent trust certificates.
**Impact:** Data quality compromised; trust certificates become worthless.
**Mitigations:**
- Trust certificates (Phase 3) require minimum 6 months of consistent data across 2+ independent groups
- Cross-reference: a member's data is validated by appearing in multiple groups with different coordinators
- Flag groups where all members confirm within seconds of each other (batch fraud pattern)
- Manual review of first 100 trust certificate requests to calibrate fraud detection

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot visit Nigerian markets directly. Relies on family network in Port Harcourt for initial distribution and validation.
- **Budget: $0-5K total.** All infrastructure must run on free or near-free tiers. USSD and SMS costs are the primary variable expense.
- **Tech stack:** Next.js 14, Supabase, Vercel, Africa's Talking, Termii. No deviations.
- **Timeline:** MVP in 2-3 weeks. First groups registered by Week 4. 50 groups by Month 3.
- **USSD character limits:** 160 characters per screen, 5 screens per session, 180-second timeout. Every interaction must fit within these hard constraints.
- **No financial services licensing:** AjoTrust is a record system. Any feature that approaches payment processing, lending, or fund management is out of scope.

### Assumptions (Each Testable)

| Assumption | Test |
|-----------|------|
| Coordinators will adopt USSD-based record-keeping | First 5 coordinators complete group registration and use for 4+ weeks |
| Members will confirm contributions via USSD | 60%+ of members in a registered group confirm at least 1 contribution in the first cycle |
| Dual confirmation reduces disputes | Qualitative feedback from coordinators after 2 cycles: "fewer arguments" |
| Contribution data has credit scoring value | 3+ micro-lenders express interest in the data when shown sample outputs |
| Coordinator-as-distributor model drives growth | Each coordinator brings 10+ members; 20%+ of members become coordinators of new groups within 6 months |
| USSD is the right primary channel | Less than 30% of first 500 members request WhatsApp alternative |

### Out of Scope

| Exclusion | Rationale |
|-----------|-----------|
| Payment processing | Regulatory complexity, capital requirements. AjoTrust records payments; it does not process them. |
| Dispute resolution/arbitration | Legal liability, cultural complexity. AjoTrust provides the record; humans resolve disputes. |
| Mobile or web app | 42% of target users are on 2G. App excludes the core segment. |
| Interest/yield on savings | Would require CBN licensing. AjoTrust is a record system, not a savings product. |
| Automatic payout management | Different circles have different rotation rules. Record the outcome; do not manage the process. |
| Integration with mobile money (OPay, PalmPay) | Phase 4+ at earliest. Adds complexity without adding core value in MVP. |
| Multi-language support (Hausa, Yoruba, Igbo) | English + Pidgin covers the target segment. Vernacular languages are Phase 3+. |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] USSD menu tree functional on all 4 major networks (MTN, Glo, Airtel, 9mobile)
- [ ] Group registration completes in 5 USSD screens or fewer
- [ ] Member enrollment completes in 3 USSD screens or fewer
- [ ] Contribution confirmation (member + coordinator) works end-to-end with SMS notifications
- [ ] Status check returns accurate data within 2 seconds
- [ ] 3 test groups (family/friends) complete at least 2 full contribution cycles with zero data errors
- [ ] SMS delivery rate > 90% on test messages

### Success Metrics (3 Months Post-Launch)

- [ ] 50+ groups registered with 500+ total members
- [ ] 60%+ of members in active groups confirm contributions via USSD at least once per cycle
- [ ] 20+ groups complete at least 4 full contribution cycles
- [ ] Coordinator retention: 70%+ of coordinators active after 8 weeks
- [ ] Zero revenue (this is acceptable — data collection phase)
- [ ] 10,000+ individual contribution records stored (data asset metric)
- [ ] 3+ micro-lenders briefed on the data asset and express interest in Phase 3 API

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 8 | 0.40 | USSD menu tree + Supabase + Africa's Talking. Simpler than KasaBook (no NLP parsing needed — structured USSD inputs only). Functional prototype in 1-2 weeks, production-ready in 2-3 weeks. |
| Time to Revenue | 15% | 1 | 0.15 | Zero revenue for 12+ months. Premium subscriptions are marginal. Real revenue comes from data licensing at 15,000+ groups (18-24 months). This is the slowest-monetizing product in the portfolio. Must be funded by other products. |
| Market Size | 15% | 10 | 1.50 | 30-50M Nigerians in savings circles. 2-5M estimated active circles. N10-20T flows through ROSCAs annually. The market is enormous and completely unserved. |
| Competition | 10% | 10 | 1.00 | Zero competitors in Nigeria. No USSD-based ROSCA record product exists anywhere in West Africa. MoneyFellows (Egypt) is app-based and processes payments — different product, different market. |
| Skill Fit | 15% | 7 | 1.05 | USSD callback handling, database design, and SMS integration are straightforward. Data science skills become critical in Phase 3 (credit scoring models). Distribution via family network requires local coordination — the main skill gap. |
| Capital Required | 10% | 8 | 0.80 | Under $30/month infrastructure for MVP. USSD costs (N5-10/session) are the variable expense. At 500 members, monthly USSD/SMS costs are N18-45K (~$12-30). Manageable within $0-5K budget for first 6 months. |
| Buyer Clarity | 20% | 3 | 0.60 | Cannot name 10 coordinators to call this week (yet). Coordinators are found through community networks, not cold outreach. The buyer is clear in concept (any esusu coordinator) but requires local presence to reach. Family network in Port Harcourt is the bridge. |
| Fintech Upside | 10% | 10 | 1.00 | Savings contribution data is one of the strongest credit signals possible for the unbanked. AjoTrust creates the foundation for informal economy credit scoring. Every contribution record feeds VendorScore. The fintech upside is among the highest in the portfolio. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.40 |
| Time to Revenue (15%) | 0.15 |
| Market Size (15%) | 1.50 |
| Competition (10%) | 1.00 |
| Skill Fit (15%) | 1.05 |
| Capital Required (10%) | 0.80 |
| Buyer Clarity (20%) | 0.60 |
| Fintech Upside (10%) | 1.00 |
| **TOTAL** | **6.50 / 10** |

### Verdict: BUILD (Strategic Data Asset — Fund with Revenue Products)

6.50 is a moderate composite score dragged down by two critical weaknesses: Time to Revenue (1/10) and Buyer Clarity (3/10). These reflect the same reality as KasaBook — this is a slow-monetize, high-ceiling data play that requires patient capital and local distribution infrastructure.

The strategic case is strong: AjoTrust creates the only savings behavior dataset for informal economy participants in Nigeria. This data is irreplaceable for credit scoring, and no competitor is building it. But the builder must be honest: this product generates zero revenue for 12+ months and requires other products to fund its operating costs.

**Build sequence:** After USSD Business Toolkit Platform foundation is operational. AjoTrust reuses the platform's session management, user accounts, and data storage — reducing build time and cost.

---

## 18. Disruption Self-Assessment

### Criterion 1: Targets Overlooked or Non-consuming Segments
**Rating: STRONG FIT**

30-50M Nigerians in savings circles have zero digital record-keeping tools. They are not underserved by existing products — they are completely unserved. No fintech, no bank, no app addresses their core need: a verifiable record of who paid and who received. This is total non-consumption. PiggyVest and Cowrywise serve individual, banked, smartphone-owning savers — a completely different segment.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First
**Rating: STRONG FIT**

AjoTrust has no app, no dashboard, no payment processing, no interest, no analytics. MoneyFellows (Egypt) would look at it and see a primitive USSD menu that only records information. But for Mama Blessing, who has nothing but a verbal agreement and a coordinator's notebook, a USSD confirmation that both parties can check independently is transformative. The deliberate simplicity — record-only, no money movement — is what makes it buildable, launchable, and legally simple.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold
**Rating: STRONG FIT (New-Market, primarily)**

**New-market foothold:** There is no existing product category for USSD-based ROSCA record-keeping. AjoTrust creates first-time users of digital savings documentation. The category is entirely new.

**Low-end elements:** AjoTrust is a radically simpler version of what MoneyFellows does (record-keeping without payment processing, USSD without an app). But since MoneyFellows does not operate in Nigeria, the low-end comparison is primarily theoretical. The foothold is overwhelmingly new-market.

### Criterion 4: Reimagines the Value Chain
**Rating: STRONG FIT**

The value chain innovation is the coordinator-as-distributor model. Traditional fintech distribution requires digital marketing, app store optimization, or agent networks. AjoTrust's distribution is built into the product's social structure: one coordinator registers a group, and 10-50 members are onboarded in a single action. The savings circle itself is the distribution channel. Additionally, the data value chain (contribution records → credit signals → VendorScore → lender APIs) creates an entirely new pathway from informal savings to formal credit access.

### Criterion 5: Prioritizes Scaling a Core Solution
**Rating: STRONG FIT**

The MVP is three actions: register group, confirm contribution, check status. No premium features, no analytics, no credit scoring. Maximum distribution of the minimum viable record system. Features follow scale, not the reverse. One contribution confirmation flow, replicated across thousands of groups.

### Criterion 6: Demands a Different Cost Structure
**Rating: STRONG FIT**

AjoTrust's cost is N36-90/month per member in USSD and SMS fees. Revenue per free member is N0. This cost structure is sustainable only because: (a) the data each member generates has independent value that monetizes at scale through licensing, and (b) USSD/SMS costs are fundamentally lower than the app development, server infrastructure, and compliance costs that a product like MoneyFellows bears. No app-based competitor would accept N0 revenue per user with N36-90 in variable costs — they need higher margins to cover their higher fixed costs.

### Criterion 7: Converts Non-consumption into Growth
**Rating: STRONG FIT**

Every AjoTrust group is a first-time user of digital savings documentation. Growth comes from converting circles that had zero records into circles with verifiable records — not from stealing users from PiggyVest or Cowrywise. The economic ripple: verifiable savings records → access to credit (via VendorScore) → capital flows into the informal economy → more economic activity → more circles formed → more growth. The total addressable market expands because AjoTrust exists.

### Criterion 8: Can Mature to Surpass Mainstream Offerings
**Rating: PARTIAL FIT**

The maturation path is viable but long:
1. **Phase 1:** USSD record-keeping (good enough for informal circles)
2. **Phase 2:** Contribution analytics, coordinator reputation (approaching basic savings group management)
3. **Phase 3:** Credit scoring, trust certificates (creating financial products from savings data)
4. **Phase 4:** Integration with formal financial services (bridging informal to formal)

At Phase 4, AjoTrust's data surpasses formal credit bureaus for the informal segment — bureaus cover 13% of Nigerian adults, while AjoTrust could cover millions who are invisible to bureaus. However, AjoTrust may never fully replace formal savings products for the upmarket segment — a university-educated professional will not use USSD to track their savings. The maturation is powerful within the informal economy but may not cross into the formal mainstream. This is a partial fit because the product's ceiling, while high, is segmented.

### Overall Assessment

| Criterion | Rating |
|-----------|--------|
| 1. Targets overlooked/non-consuming segments | STRONG FIT |
| 2. Appears deliberately "worse" but good enough | STRONG FIT |
| 3. Low-end or new-market foothold | STRONG FIT (new-market) |
| 4. Reimagines the value chain | STRONG FIT |
| 5. Prioritizes scaling a core solution | STRONG FIT |
| 6. Demands a different cost structure | STRONG FIT |
| 7. Converts non-consumption into growth | STRONG FIT |
| 8. Can mature to surpass mainstream offerings | PARTIAL FIT |

**Score: 7/8 Strong Fit, 1/8 Partial Fit, 0/8 No Fit.**

Non-negotiable criteria check:
- Criterion 1 (overlooked segment): STRONG FIT
- Criterion 3 (market foothold): STRONG FIT
- Criterion 7 (non-consumption → growth): STRONG FIT

All three non-negotiable criteria are met with strong fit. The single partial fit (Criterion 8) reflects a realistic ceiling constraint: AjoTrust may never serve the formal banking segment, but it dominates a segment that formal banking cannot reach. This is acceptable and honest.

---

## 19. MNC Anti-Pattern Check

### Pattern 1: Phantom Middle Class
**No match.** AjoTrust targets base-of-pyramid savings circle participants, not the urban middle class. The primary persona earns N150-350K/month and uses a feature phone. No revenue model depends on middle-class adoption.

### Pattern 2: Push, Don't Pull
**No match.** Savings circles already exist. Disputes already happen. Coordinators already struggle with notebooks. AjoTrust is pulled by existing pain, not pushed as a new behavior. The pull test is unambiguous: people already spend time, money, and social capital on workarounds.

### Pattern 3: Infrastructure Entitlement
**No match.** AjoTrust is built on USSD precisely because smartphone infrastructure cannot be assumed. The product is designed for the infrastructure that exists (2G networks, feature phones, SMS), not the infrastructure that should exist.

### Pattern 4: Imported Management
**No match.** Solo founder model with local family network for distribution. No expatriate management layer. No cultural misalignment risk — the builder has direct cultural context.

### Pattern 5: Blame and Exit
**Not applicable yet.** But the risk is real: if USSD adoption is slower than expected, the temptation is to blame the market ("coordinators don't want technology") rather than fix the product. Mitigation: set clear retention thresholds (20% at 30 days = investigate; 40% = double down; below 10% = product problem, not market problem).

### Pattern 6: Premium Positioning in a Value Market
**No match.** Free tier is the foundation. Premium is N1-3K/month — less than 1% of a coordinator's monthly income. Data licensing is the real revenue model, and it is invisible to end users. The product is positioned for the value market from day one.

**Conclusion: Zero anti-pattern matches.** AjoTrust is designed from the market reality backward, not from an existing business model forward.
