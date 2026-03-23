# PRD 11: RideBooks — Transport Driver Daily Earnings Tracker

## 1. Executive Summary

Millions of danfo (minibus), keke (tricycle), and okada (motorcycle) drivers in Nigeria earn N5,000-30,000 daily. They pay vehicle hire (N5-15K/day), buy fuel, and keep the rest. They have been doing this for years. They have never been able to prove any of it. When a driver walks into a micro-lender and says "I earn N15,000 per day," the lender has zero way to verify the claim. When a vehicle financing company evaluates a driver for hire-purchase, there is no income history to assess. The driver is invisible. Millions of Nigerians earning a living every single day, with zero financial documentation.

RideBooks is a USSD daily log. A driver dials a short code, enters three numbers — fuel cost, total fares collected, hire paid — and receives a daily P&L via SMS: "Today: Fares N18,000 - Fuel N5,500 - Hire N8,000 = Net N4,500." That is the entire product. Three numbers. Nothing else. Radical simplicity.

After 90 days of consistent logging, the driver has a verifiable income history. This history can be shared with micro-lenders, vehicle financing companies (Moove-type), and insurance providers. A driver who can prove "I have earned an average of N12,000 net daily for 90 consecutive days" is no longer invisible — they are creditworthy.

**Disruption type:** New-market disruption. No product exists to help informal transport drivers document their earnings. There is no worse version to be cheaper than — there is nothing.

**The data asset:** Daily earnings data for millions of transport workers. Each log entry is an income signal. Aggregated across drivers, this data creates the first transport sector income dataset in Nigeria — earnings by city, by vehicle type, by route, by season. No institution has this data today.

**Entry channel hierarchy:** USSD (primary, sole input channel) → SMS (output/notifications) → WhatsApp (Phase 2 summaries) → Web (never for drivers; API-only for data buyers/lenders).

**90-day target:** 200 drivers logging daily, zero MRR (data collection phase), 50+ drivers with 30-day continuous logging streaks.

**Infrastructure layer:** Layer 1 (data collection). Runs on the USSD Business Toolkit Platform. Feeds Layer 3 products (VendorScore for income-based credit scoring) and Layer 4 data products (transport income data for lenders, fleet operators, and urban planners).

---

## 2. Market Opportunity

### The Invisible Workforce

Nigeria's informal transport sector employs an estimated 5-10 million people — danfo drivers, keke operators, okada riders, long-distance bus drivers, trailer operators, and their assistants. In Lagos alone, the Lagos Metropolitan Area Transport Authority (LAMATA) estimates over 200,000 commercial vehicles operate daily. Across Nigeria, informal transport is the primary mobility solution for over 100 million daily trips.

These drivers earn real money. A danfo driver in Lagos collects N15,000-30,000 in daily fares. A keke driver in Port Harcourt collects N8,000-18,000. An okada rider in Ibadan collects N5,000-12,000. After paying vehicle hire (N5-15K/day to the vehicle owner), fuel (N3-8K/day), and minor expenses (N500-2K), the average driver nets N3,000-10,000 daily — N90,000-300,000 monthly.

By any reasonable measure, these are middle-income earners. But they live as if they are destitute, because they cannot prove their income to any financial institution.

### The Zero: What Percentage Has Nothing?

Approximately 99.9% of informal transport drivers have zero verifiable income documentation. They have no payslips (they are self-employed or daily hires). They have no bank statements that reflect business income (deposits are sporadic and mixed with personal transactions). They have no tax returns (they are outside the formal tax system). They have no business registration. The only people who know what they earn are themselves and, sometimes, their vehicle owners.

### Why the Pain Is Getting Worse

- **Vehicle financing demand is growing.** Companies like Moove (Lagos, raised $200M+) offer vehicle financing to ride-hail drivers. But Moove serves Uber/Bolt drivers who have app-generated income data. The 5-10 million informal drivers have no app-generated data — they are locked out of financing.
- **Naira depreciation** has increased vehicle costs (N8-25M for a danfo, N2-5M for a keke), making hire-purchase more attractive but less accessible without income proof.
- **Insurance requirements** are increasing (Lagos state commercial vehicle insurance mandate), but insurers cannot price policies without income/activity data.
- **Microfinance expansion:** Micro-lenders (FairMoney, Carbon, Branch) are expanding lending criteria, but they need income signals. A daily earnings log is the simplest possible signal.

### Why Existing Solutions Don't Serve This Segment

- **Banking apps:** Drivers have bank accounts (OPay, Moniepoint mostly), but deposits are irregular, mix personal and business, and do not separate fuel/hire/fares. A bank statement shows "N15,000 deposit" — not "N15,000 in fares minus N5,000 fuel minus N8,000 hire = N2,000 net."
- **Ride-hail platforms (Uber, Bolt, inDrive):** Only serve drivers who use their platforms. The vast majority of Nigerian transport drivers are informal — they do not use ride-hail apps. And ride-hail apps do not track fuel or hire costs.
- **Bookkeeping apps (Wave, QuickBooks):** Require smartphone, internet, accounting literacy. A danfo driver steering through Lagos traffic will not open an app to log expenses. The form factor is wrong.
- **Nothing exists.** No USSD-based earnings tracker for informal transport drivers exists in Nigeria, East Africa, or India (where the closest analogues are ride-hail driver financing pipelines from Ola/Uber, which are app-based and serve a different segment).

### Market Sizing

| Metric | Value | Source |
|--------|-------|--------|
| Informal transport drivers (Nigeria) | 5-10M | LAMATA, NURTW estimates, industry reports |
| Daily fares collected (per driver) | N5,000-30,000 | Varies by vehicle type and city |
| Daily hire paid (per driver) | N5,000-15,000 | Standard daily rates |
| Annual transport sector income (informal) | N5-15T ($3.3-9.8B) | Derived (5M drivers × N3-8K net/day × 300 days) |
| TAM (all drivers with income documentation need) | 5-10M drivers | |
| SAM (urban, phone-owning, interested in credit) | 2-4M drivers | |
| SOM (Year 1, 3 cities) | 1,000-5,000 drivers | |

### Regional Variance

- **Lagos:** Largest market. Danfo and BRT domination. Okada banned in most areas (since 2020). Keke restricted. Focus on danfo and bus drivers. Average daily fares highest (N15-30K).
- **Port Harcourt:** Keke dominant. Okada active. Lower fares (N8-18K) but lower hire costs. Family network for validation.
- **Kano/Kaduna:** Okada and keke dominant. Lower fares but massive volume. USSD-first market (feature phones prevalent).
- **Ibadan/Oyo:** Mixed transport. Lower costs, lower fares, but growing commercial activity.
- **South-East (Aba, Onitsha, Nnewi):** Keke and okada active. Sit-at-home disruptions affect driving days (drivers log fewer days = lower income consistency = weaker credit signal).

---

## 3. Target Personas

### Primary: "Baba Tunde" — The Danfo Driver

**Name:** Tunde Ogunleye, 39
**Location:** Oshodi-Isolo, Lagos
**Vehicle:** Danfo (Volkswagen T3 minibus), owned by "Oga" — a vehicle owner who owns 4 danfos
**Daily routine:**
- 5:00 AM: Picks up vehicle from Oga's yard
- 5:30 AM - 1:00 PM: Morning shift. Oshodi → CMS → Oshodi route. 8-10 trips. Collects N12,000-18,000 in fares.
- 1:00 PM: Fuels vehicle (N4,000-6,000). Eats lunch (N500-1,000).
- 1:30 PM - 8:00 PM: Afternoon/evening shift. 6-8 trips. Collects N8,000-14,000 in fares.
- 8:30 PM: Returns vehicle to Oga's yard. Pays daily hire: N8,000. Pays any NURTW (transport union) levies: N500-1,000.
- **Daily P&L:** Fares: N20,000-32,000. Fuel: N4,000-6,000. Hire: N8,000. Levies: N500-1,000. **Net: N5,500-17,000.**

**Phone:** Nokia 105 feature phone (for calls/USSD) + Tecno Spark (Android, for WhatsApp, music, videos). Uses the Nokia during driving — it survives the dashboard, the dust, the drops.
**Banking:** OPay account. Passengers increasingly pay via transfer. But most fares are still cash.
**Financial tools:** None. Has never used any financial product beyond OPay.
**Credit history:** None. Has approached two micro-lenders for a personal loan (N200K for his daughter's school fees). Both rejected him: "Bring your bank statement." His OPay shows sporadic deposits that do not reflect his actual income.

**What he wants:**
"If I can show them I make N10,000 every day, for 3 months, they will lend to me. I know I make this money. I just cannot prove it."

**Decision trigger:** Someone at the motor park tells him: "Dial this code, enter your numbers, and after 3 months you can prove your income to a lender."

### Secondary: "Mama Chioma" — The Keke Operator

**Name:** Chioma Eze, 31
**Location:** Rumuokoro, Port Harcourt
**Vehicle:** Keke NAPEP (tricycle). She owns the keke — bought it for N1.8M from a hire-purchase arrangement 2 years ago. Final payment completed 4 months ago.
**Daily P&L:** Fares: N10,000-15,000. Fuel: N2,500-4,000. Maintenance reserve: N500. **Net: N5,500-10,500.**
**Phone:** Infinix Hot smartphone. WhatsApp, Facebook, TikTok.

**Her problem is different from Tunde's.** Chioma owns her vehicle. She wants to buy a second keke and hire a driver. The hire-purchase company wants N500K down payment and proof of income to finance the second keke. She has the income but cannot prove it. A 90-day daily earnings log would be exactly the proof she needs.

**Decision trigger:** "The keke dealer said bring proof of income. I earn more than some bank workers but I cannot show it on paper."

### Tertiary: The Data Buyer — Vehicle Financing Company

**Name:** Adebayo Oladele, 36
**Location:** Lekki, Lagos
**Role:** Head of Credit, vehicle financing startup (Moove competitor or Moove itself)
**Problem:** Wants to finance vehicles for informal transport drivers but has zero income data. Currently lends only to ride-hail (Uber/Bolt) drivers because they have app-generated income logs. The informal segment (10x larger) is inaccessible.
**Decision trigger:** "If you can show me that a danfo driver has logged N15K/day for 90 days, with fuel and hire deducted, that is a verifiable income profile. I would underwrite that loan. I would pay for that data."

---

## 4. Problem Deep Dive

### The Daily Routine (Income Generation Without Documentation)

**Step 1: Start of Day**
The driver collects the vehicle from the owner (or starts from home if they own it). There is no check-in system, no odometer reading, no opening balance. The day starts as a blank.

**Step 2: Fare Collection**
Throughout the day, the driver collects fares from passengers. In Lagos, a danfo trip costs N100-500 depending on distance. The driver makes 15-25 trips per day. Fares are mostly cash, increasingly via OPay/PalmPay transfers. At no point does the driver record individual fares. They know roughly how much they collected by counting their cash at meal breaks and end of day.

**What goes wrong:** The driver's "total fares" is an estimate. They do not know exactly how much they earned. Small losses (a passenger who did not pay, a N200 fare where they gave N300 change) accumulate. Without a running total, the driver cannot assess whether today was good, average, or bad until the end of the day.

**Step 3: Fuel Purchase**
The driver fuels during the day — sometimes once, sometimes twice. They pay cash or transfer at a filling station. The receipt (if they get one) goes into a pocket and is never seen again.

**What goes wrong:** Fuel is the largest variable cost. Without tracking it, the driver cannot optimize (e.g., "I am spending N6K on fuel but only earning N18K — this route is not profitable"). They cannot detect fuel theft (a common problem when drivers share vehicles across shifts).

**Step 4: Hire Payment**
At end of day, the driver pays the vehicle owner the agreed daily hire (N5-15K depending on vehicle type and city). This is usually cash, sometimes transfer. No receipt, no record.

**What goes wrong:** Disputes with vehicle owners over hire payment are common. "You owe me 3 days of hire." "I already paid Tuesday." No record exists to settle the dispute — same dynamic as the esusu problem (AjoTrust).

**Step 5: End of Day**
The driver counts remaining cash. That is their net earnings. They know what they have. They do not know the breakdown. They do not know their weekly or monthly total. They do not know their trend. And critically: nobody else knows any of this. The income is earned and immediately consumed — invisible.

### The Credit Access Gap

The impact of zero income documentation:

1. **No personal loans.** Micro-lenders require income verification. A driver earning N10K/day net (N300K/month) should qualify for a N200K personal loan. But without proof, they are rejected alongside someone earning N0.
2. **No vehicle financing.** A driver who has earned N8K/day for 3 years could afford N500K-1M in vehicle hire-purchase payments. But they cannot prove the earning history. Only ride-hail drivers with app data get financing (Moove model).
3. **No insurance beyond mandatory minimum.** Insurers cannot assess driver income or activity level. Every driver gets the same generic policy, regardless of whether they drive 8 hours or 16 hours, earn N5K or N25K.
4. **No savings products.** Financial planners and savings products require income information. Drivers are excluded from products designed for regular earners.
5. **No bargaining power with vehicle owners.** A driver who can prove "I consistently earn N20K/day on this vehicle" has leverage in hire negotiations. Without proof, the owner sets the terms.

### Quantified Business Impact

For a driver earning N10,000 net daily (N300K/month):
- Lost loan access: N200K-1M in credit they cannot access at any rate
- Vehicle financing exclusion: Cannot buy own vehicle (N2-10M) despite ability to service payments
- Insurance overpricing: Pays generic rates that may be 20-40% higher than what their actual risk profile warrants
- **Aggregate:** Millions of drivers × N200K-1M in locked credit = N1-10T in inaccessible credit market

### The Pull Test

Do drivers already spend money/effort on workarounds?

**Moderate pull:**
- Some drivers keep a small notebook where they write daily totals (but most do not — they are driving, not writing)
- Vehicle owners sometimes keep logs of hire payments received (but only from their side)
- Drivers applying for loans ask friends or family to write "testimonial letters" about their income — a workaround that lenders do not accept
- A few progressive motor parks have tried to introduce logbooks — adoption is low because the incentive is unclear

**The pull is latent, not active.** Drivers do not currently spend significant money on income documentation. The pull emerges when they encounter a specific need: a loan application, a vehicle financing opportunity, a family emergency requiring formal credit. The decision trigger is the denial — "bring proof of income" — not daily habit. RideBooks must make the daily habit trivially easy (30 seconds via USSD) so the proof is ready when the need arises.

---

## 5. Solution Overview

### Design Philosophy: 3 Numbers. Nothing Else.

RideBooks asks for three numbers per day:
1. **Fuel (N):** How much did you spend on fuel today?
2. **Fares (N):** How much did you collect in total fares today?
3. **Hire (N):** How much did you pay in vehicle hire today?

That is the entire input. No categories. No receipts. No route tracking. No passenger counts. No GPS. No odometer. Three numbers. A driver enters them in under 30 seconds via USSD. They receive a daily P&L via SMS.

This radical simplicity is deliberate. Every additional field reduces completion rates. Every additional question increases cognitive load for someone who has been driving for 14 hours. The product must pass the **Exhausted Driver Test:** can a driver use this at 9 PM after a full day of Lagos traffic, in under 30 seconds, without thinking?

### Stage 1: Daily Log (USSD Input)

**Channel:** USSD
**What happens:** Driver dials the short code. Enters fuel, fares, hire. System records all three with a timestamp.
**Data created:** Daily earnings record with breakdown (fuel, fares, hire, computed net).

### Stage 2: Daily P&L (SMS Output)

**Channel:** SMS
**What happens:** Immediately after logging, driver receives SMS: "Today: Fares N18,000 - Fuel N5,500 - Hire N8,000 = Net N4,500. This week: N28,500 net (4 days)."
**Data created:** Running totals (daily, weekly, monthly) computed and stored.

### Stage 3: Milestone Alerts (SMS, Automated)

**Channel:** SMS
**What happens:** At 7, 30, 60, and 90 days of logging, driver receives a milestone SMS: "You have logged 30 consecutive days! Monthly average: N9,200/day net. Your income history is becoming verifiable."
**Data created:** Streak data, consistency metrics.

### Stage 4: Income Verification (Phase 2, USSD + API)

**Channel:** USSD (driver consent) + API (lender access)
**What happens:** After 90 days, driver can authorize a lender to access their income summary. Driver dials USSD, selects "Share my income history," and receives a verification code. Lender enters the code via API and receives: average daily net, logging consistency, total days logged, trend (increasing/decreasing/stable).
**Data created:** Verifiable income certificate, lender access logs.

### What RideBooks Deliberately Sacrifices

- **No GPS/route tracking** — deliberately worse than Uber/Bolt driver apps. But no privacy invasion, no battery drain, no data costs.
- **No individual fare logging** — deliberately worse than a taxi meter or ride-hail app. But no friction per trip.
- **No expense categories** — deliberately worse than QuickBooks. But no cognitive load. Fuel/fares/hire captures 90%+ of the daily P&L.
- **No smartphone app** — deliberately worse than any modern fintech. But works on every phone, including the Nokia 105 that sits on the dashboard.

### Iteration Path

- **Phase 1 (Month 1-3):** USSD daily log + SMS P&L. Three numbers, one SMS response. That is it.
- **Phase 2 (Month 4-6):** Income verification code (shareable with lenders). WhatsApp weekly summary for smartphone users. "Your best day this week" and "Your worst day" insights.
- **Phase 3 (Month 7-12):** Lender API for income verification. Partnership with 1-2 micro-lenders or vehicle financing companies. First driver gets a loan based on RideBooks data.
- **Phase 4 (Month 12-24):** Vehicle owner portal (track hire payments from multiple drivers). Insurance data integration. Fleet income analytics.

---

## 6. Functional Requirements

### MUST Have — MVP (Month 1)

### FR1: Daily Earnings Log via USSD
- **Description**: Driver enters fuel cost, fares collected, and hire paid for the day
- **Channel**: USSD
- **Inputs**: Fuel amount (N), total fares (N), hire paid (N)
- **Outputs**: Confirmation with computed net earnings
- **Acceptance Criteria**:
  - [ ] Entry completes in 4 USSD screens or fewer (menu → fuel → fares → hire → confirmation)
  - [ ] System computes net: Fares - Fuel - Hire = Net
  - [ ] System rejects negative net earnings with warning: "Your expenses exceed fares today. Is this correct? 1. Yes 2. Re-enter"
  - [ ] Amounts accept only whole numbers (no decimals — N5500, not N5,500.00)
  - [ ] Amounts accept comma separators (N5,500 and N5500 both parse correctly)
  - [ ] Entry timestamp captures date and time (WAT)
  - [ ] Driver can log only once per day (second attempt shows: "You already logged today. 1. View today's log 2. Correct today's entry")
  - [ ] USSD response time < 2 seconds per screen

### FR2: Daily P&L via SMS
- **Description**: After logging, driver receives SMS with daily earnings breakdown and running totals
- **Channel**: SMS (outbound)
- **Inputs**: Triggered by FR1 completion
- **Outputs**: SMS with daily P&L and weekly running total
- **Acceptance Criteria**:
  - [ ] SMS sent within 60 seconds of log completion
  - [ ] SMS format: "RideBooks: Today Fares N18,000 - Fuel N5,500 - Hire N8,000 = Net N4,500. This week: N28,500 (4 days)"
  - [ ] SMS is under 160 characters (single SMS, no multi-part)
  - [ ] Weekly total resets every Monday
  - [ ] If driver logs for the first time: "Welcome to RideBooks! Today: Fares N[X] - Fuel N[X] - Hire N[X] = Net N[X]. Log daily to build your income history."

### FR3: Phone Number as Account
- **Description**: Phone number serves as the unique account identifier
- **Channel**: USSD
- **Inputs**: Phone number (auto-detected from USSD session)
- **Outputs**: Account creation (transparent to user)
- **Acceptance Criteria**:
  - [ ] First USSD interaction creates account automatically
  - [ ] No email, password, name, or additional information required
  - [ ] Account persists across sessions
  - [ ] System asks vehicle type on first use only: "What do you drive? 1. Danfo/Bus 2. Keke 3. Okada 4. Other"
  - [ ] Vehicle type stored but does not gate any functionality

### FR4: Logging Streak Tracking
- **Description**: System tracks consecutive days of logging and sends milestone alerts
- **Channel**: SMS (automated, outbound)
- **Inputs**: Automatic (triggered by logging patterns)
- **Outputs**: Milestone SMS at 7, 14, 30, 60, and 90 consecutive days
- **Acceptance Criteria**:
  - [ ] Streak counts consecutive calendar days with a log entry
  - [ ] Missing one day resets the streak (but preserves historical data)
  - [ ] 7-day milestone SMS: "RideBooks: 7 days logged! Avg daily net: N[X]. Keep going — 90 days unlocks income verification."
  - [ ] 30-day milestone SMS: "RideBooks: 30 days! Monthly earnings: N[X]. You're building real income proof."
  - [ ] 90-day milestone SMS: "RideBooks: 90 days! Your income history is now verifiable. Dial *384*RIDE# to learn more."
  - [ ] Streak data stored and never deleted (even if streak breaks, historical streaks are preserved)

### FR5: History Check via USSD
- **Description**: Driver checks their earnings history
- **Channel**: USSD
- **Inputs**: Request via USSD menu
- **Outputs**: Summary of recent earnings
- **Acceptance Criteria**:
  - [ ] Shows: "This week: N[X] net (Y days). This month: N[X] net (Y days). Best day: N[X]. Streak: Z days."
  - [ ] Displays in 2 USSD screens or fewer
  - [ ] Response time < 2 seconds
  - [ ] If no logs exist: "No entries yet. Log today's earnings to start."

### FR6: Daily Entry Correction
- **Description**: Driver can correct today's entry if they made an error
- **Channel**: USSD
- **Inputs**: Corrected fuel, fares, and/or hire amounts
- **Outputs**: Updated record, updated SMS
- **Acceptance Criteria**:
  - [ ] Correction allowed only for today's entry (cannot edit past days)
  - [ ] Original entry preserved as "corrected" (append-only, not overwritten)
  - [ ] Corrected SMS sent: "RideBooks CORRECTED: Today Fares N[X] - Fuel N[X] - Hire N[X] = Net N[X]"
  - [ ] Maximum 2 corrections per day (prevents gaming)

### SHOULD Have — Month 2

### FR7: Weekly Summary SMS
- **Description**: Automated weekly earnings summary sent every Monday morning
- **Channel**: SMS (outbound, scheduled)
- **Inputs**: Automatic
- **Outputs**: Weekly summary SMS
- **Acceptance Criteria**:
  - [ ] Sent every Monday at 7:00 AM WAT
  - [ ] Format: "RideBooks Week Summary: Fares N[X] - Fuel N[X] - Hire N[X] = Net N[X]. Days logged: Y/7. Streak: Z days."
  - [ ] Under 160 characters
  - [ ] Only sent to drivers who logged at least 1 day in the past week

### FR8: No-Activity Nudge
- **Description**: SMS reminder if driver has not logged for 2 consecutive days
- **Channel**: SMS (outbound, automated)
- **Inputs**: Automatic (triggered by 48-hour logging gap)
- **Outputs**: Nudge SMS
- **Acceptance Criteria**:
  - [ ] Sent at 9:00 PM WAT on the second consecutive day without a log
  - [ ] Format: "RideBooks: You haven't logged in 2 days. Your streak is at risk! Dial *384*RIDE# to log today. It takes 30 seconds."
  - [ ] Maximum 1 nudge per week (do not spam)
  - [ ] Driver can opt out via USSD: "Settings → Turn off reminders"

### FR9: Monthly Report SMS
- **Description**: End-of-month earnings report
- **Channel**: SMS (outbound, scheduled)
- **Inputs**: Automatic
- **Outputs**: Monthly summary
- **Acceptance Criteria**:
  - [ ] Sent on the 1st of each month at 8:00 AM
  - [ ] Format: "RideBooks Monthly Report: Total Fares N[X]. Total Fuel N[X]. Total Hire N[X]. Net: N[X]. Days logged: Y/30."
  - [ ] Under 160 characters (may require abbreviation)
  - [ ] Only sent to drivers who logged at least 10 days in the month

### COULD Have — Month 3+

### FR10: Income Verification Code
- **Description**: Driver generates a shareable code that lenders can use to verify income
- **Channel**: USSD (driver) + API (lender)
- **Inputs**: Driver requests via USSD; lender enters code via API
- **Outputs**: Income summary accessible to the lender
- **Acceptance Criteria**:
  - [ ] Available only to drivers with 90+ days of logging history
  - [ ] Verification code is 8 characters, expires after 7 days
  - [ ] Lender receives: avg daily net, total days logged, longest streak, consistency % (days logged / days since registration), vehicle type
  - [ ] Driver explicitly consents before code is generated: "This will allow a lender to see your income history. 1. Proceed 2. Cancel"
  - [ ] Each code can be used once (one-time access per code)

### FR11: WhatsApp Weekly Summary
- **Description**: Richer weekly summary sent via WhatsApp for smartphone users
- **Channel**: WhatsApp
- **Inputs**: Driver opts in via USSD (provides WhatsApp number)
- **Outputs**: Formatted WhatsApp message with bar chart emoji breakdown
- **Acceptance Criteria**:
  - [ ] Includes daily breakdown for the week (Mon-Sun)
  - [ ] Highlights best and worst days
  - [ ] Shows comparison to previous week: "Up 12% from last week"
  - [ ] Sent only to drivers who opt in

### FR12: Vehicle Owner Confirmation (Hire Payment)
- **Description**: Vehicle owner can confirm hire receipt, creating a dual-confirmed record (like AjoTrust)
- **Channel**: USSD
- **Acceptance Criteria**:
  - [ ] Driver links to their vehicle owner's phone number
  - [ ] When driver logs hire paid, owner receives SMS: "[Driver] says they paid N[X] hire today. Dial *384*RIDE# to confirm."
  - [ ] Dual-confirmed hire records carry higher verification weight

### WON'T Have — Explicit Exclusions

| Feature | Rationale |
|---------|-----------|
| GPS/route tracking | Privacy invasion, battery drain, data cost. Drivers would not adopt a tool that tracks their location. |
| Individual fare logging | Too much friction. A danfo driver making 20 trips cannot log each fare. Daily total is sufficient. |
| Mobile app | Target drivers use feature phones for work. The Nokia on the dashboard is the interface, not the smartphone in the pocket. |
| Payment processing | Regulatory complexity. RideBooks records earnings; it does not move money. |
| Lending | Requires financial services licensing. RideBooks creates the data that enables others to lend. |
| Fuel price tracking/comparison | Scope creep. Track cost, not price. The driver knows where to fuel. |
| Multiple expense categories | Three categories (fuel, fares, hire) cover 90%+ of daily economics. Adding "maintenance," "food," "levies" increases friction for marginal accuracy improvement. |
| Web dashboard for drivers | Drivers are not on laptops. USSD + SMS is the product. |

---

## 7. Non-Functional Requirements

### NFR1: Performance
- USSD response time: < 2 seconds for all menu interactions
- SMS delivery: < 60 seconds from trigger to delivery
- Database write latency: < 500ms for daily log recording
- Concurrent USSD sessions: support 200 simultaneous sessions at launch, scalable to 2,000
- Peak load handling: 6:00-9:00 PM WAT (end of day logging window) — system must handle 80% of daily sessions in this 3-hour window

### NFR2: Offline/Low-Bandwidth
- USSD operates on 2G — no internet required on the driver's device
- All data stored server-side
- SMS delivery queued if carrier temporarily unavailable, retried 3 times over 30 minutes
- System fully functional during user-side internet outages (USSD is carrier-routed)

### NFR3: Security
- Phone number verification via USSD session (carrier-authenticated)
- All log entries are append-only (corrections create new entries, originals preserved)
- Income verification requires explicit driver consent (FR10)
- Individual driver data never shared without consent — aggregate data only for research/analytics
- NDPR compliance from day one
- Rate limiting: maximum 20 USSD sessions per phone number per day

### NFR4: Scalability
- Database schema supports 50,000 drivers with 365 daily entries each (18.25M rows per year)
- Supabase free tier handles initial load; upgrade trigger at 30K rows
- USSD peak load (6-9 PM daily) handled by Africa's Talking infrastructure
- SMS queue handles 20,000 messages/day at target scale

### NFR5: Accessibility
- USSD works on every phone (feature phones, smartphones, 2G/3G/4G)
- All USSD screens under 160 characters
- Menu options numbered (maximum 5 per screen)
- SMS messages under 160 characters (single SMS)
- Numeric input only — no text typing required for daily log (fuel, fares, hire are all numbers)
- Language: English. Pidgin option in Phase 2.

### NFR6: Regional
- Phone number format: +234 standard
- Currency: NGN only, whole numbers
- Time zone: WAT (UTC+1) for all timestamps
- Daily log window: midnight to midnight WAT (a day is defined by WAT calendar date)
- USSD short code accessible on MTN, Glo, Airtel, 9mobile

---

## 8. Key Screens & UX

### USSD Menu Tree — Main Menu

```
Dial *384*RIDE#

RideBooks - Driver Earnings Log
1. Log today's earnings
2. View my history
3. My streak
4. Settings
5. Share income history

Characters: ~95 (within 160 limit)
```

### USSD Flow — Daily Log (FR1)

```
Screen 1: How much fuel today? (Naira)
> 5500

Screen 2: Total fares collected? (Naira)
> 18000

Screen 3: Hire paid today? (Naira)
(Enter 0 if you own your vehicle)
> 8000

Screen 4:
Today: Fares N18,000 - Fuel N5,500
- Hire N8,000 = Net N4,500
1. Save
2. Re-enter

> 1

SMS follows: "RideBooks: Today Fares
N18,000 - Fuel N5,500 - Hire N8,000 =
Net N4,500. This week: N28,500 (4 days)"

Total: 4 screens. Under 30 seconds.
```

### USSD Flow — First-Time Registration

```
Screen 1:
Welcome to RideBooks!
Free daily earnings tracker.
What do you drive?
1. Danfo/Bus
2. Keke
3. Okada
4. Other

> 2

Screen 2:
Which city?
1. Lagos
2. Port Harcourt
3. Kano
4. Ibadan
5. Other

> 2

Screen 3: How much fuel today? (Naira)
> 3500

[continues to normal daily log flow]

Total registration: 2 extra screens on first use only.
```

### USSD Flow — View History (FR5)

```
Screen 1:
This week: N28,500 net (4 days)
This month: N112,000 net (12 days)
Best day: N12,500 (March 15)
Streak: 12 days
1. Back to menu

Total: 1 screen.
```

### USSD Flow — Income Verification (FR10, Phase 2)

```
Screen 1:
Share your income history with a
lender? Your data is private until
you share it.
1. Generate sharing code
2. Cancel

> 1

Screen 2:
Your verification code: RIDE-8472
Valid for 7 days. Give this code
to your lender. They can check
your income history once.
1. Back to menu
```

### SMS Templates

**Daily P&L (FR2):**
```
RideBooks: Today Fares N18,000 - Fuel
N5,500 - Hire N8,000 = Net N4,500.
This week: N28,500 (4 days)
```
(118 characters)

**7-day streak (FR4):**
```
RideBooks: 7 days logged! Avg daily
net: N8,200. Keep going - 90 days
unlocks income verification.
```
(105 characters)

**90-day milestone (FR4):**
```
RideBooks: 90 DAYS! Your income
history is now verifiable. Avg net:
N9,100/day. Dial *384*RIDE# to share.
```
(112 characters)

**No-activity nudge (FR8):**
```
RideBooks: 2 days with no log. Your
12-day streak is at risk! Dial
*384*RIDE# now. Takes 30 seconds.
```
(107 characters)

### UX Principles Applied

- **P1 (WhatsApp-Simple):** Even simpler than WhatsApp. Three numbers. No typing words. Pure numeric input.
- **P3 (Numbers-Forward):** The entire product is numbers. Fares, fuel, hire, net. Every interaction leads with naira amounts.
- **P6 (Progressive Complexity):** Day 1: enter 3 numbers, get SMS. Day 90: unlock income verification. Complexity appears only after the driver is committed.
- **P8 (Low-Bandwidth):** USSD requires zero bandwidth. SMS is single-message.
- **P9 (USSD Fallback):** USSD is the product. Everything else is supplementary.

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| USSD Integration | Africa's Talking | Industry standard; session management; per-session pricing; works on all connections |
| SMS (Outbound) | Termii | Cheapest Nigerian SMS API; reliable delivery |
| Backend | Next.js 14 API Routes | Single deployment; webhook endpoints for USSD callbacks; TypeScript |
| Database | Supabase PostgreSQL | Free tier sufficient for MVP; Row Level Security for driver isolation |
| Hosting | Vercel | Free tier; auto-scaling; handles peak load (6-9 PM) |
| Scheduled Jobs | Vercel Cron or Supabase pg_cron | Weekly/monthly summaries; nudge messages; streak calculations |
| Monitoring | PostHog + Sentry | Track: registration → first log → 7-day streak → 30-day streak → 90-day verification |

### Database Schema

```sql
-- Drivers (phone number = identity)
drivers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,        -- +234XXXXXXXXXX
  vehicle_type text CHECK (vehicle_type IN ('danfo', 'keke', 'okada', 'other')),
  city text,                                -- for regional analytics
  vehicle_owner_phone text,                 -- optional, for hire confirmation (FR12)
  current_streak integer DEFAULT 0,
  longest_streak integer DEFAULT 0,
  total_days_logged integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  last_log_at timestamptz
)

-- Daily Earnings Log (append-only)
daily_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES drivers NOT NULL,
  log_date date NOT NULL,
  fares decimal(15,2) NOT NULL CHECK (fares >= 0),
  fuel decimal(15,2) NOT NULL CHECK (fuel >= 0),
  hire decimal(15,2) NOT NULL CHECK (hire >= 0),
  net_earnings decimal(15,2) GENERATED ALWAYS AS (fares - fuel - hire) STORED,
  is_correction boolean DEFAULT false,      -- true if this corrects a previous entry
  corrects_log_id uuid REFERENCES daily_logs, -- points to the original if correction
  created_at timestamptz DEFAULT now(),
  UNIQUE(driver_id, log_date) -- one active entry per day (corrections create new entries)
)

-- Note: UNIQUE constraint on (driver_id, log_date) enforced for active (non-corrected) entries
-- via application logic; corrections link to original via corrects_log_id

-- Streak History
streak_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES drivers NOT NULL,
  event_type text NOT NULL CHECK (event_type IN
    ('milestone_7', 'milestone_14', 'milestone_30', 'milestone_60', 'milestone_90', 'streak_broken')),
  streak_length integer NOT NULL,
  event_date date NOT NULL,
  sms_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
)

-- Income Verification Codes (Phase 2)
verification_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES drivers NOT NULL,
  code text UNIQUE NOT NULL,                -- e.g., RIDE-8472
  expires_at timestamptz NOT NULL,          -- 7 days from creation
  used boolean DEFAULT false,
  used_by text,                             -- lender identifier
  used_at timestamptz,
  created_at timestamptz DEFAULT now()
)

-- Income Summaries (computed nightly for verification API)
income_summaries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  driver_id uuid REFERENCES drivers NOT NULL,
  period_start date NOT NULL,
  period_end date NOT NULL,
  total_days_logged integer NOT NULL,
  total_fares decimal(15,2) NOT NULL,
  total_fuel decimal(15,2) NOT NULL,
  total_hire decimal(15,2) NOT NULL,
  total_net decimal(15,2) NOT NULL,
  avg_daily_net decimal(15,2) NOT NULL,
  consistency_pct decimal(5,2) NOT NULL,    -- days_logged / calendar_days * 100
  computed_at timestamptz DEFAULT now()
)
```

### USSD Session Architecture

```
USSD request (*384*RIDE#)
  → Africa's Talking callback to Vercel API Route (/api/webhooks/ussd)
  → Parse session state
  → If new user: registration flow (vehicle type, city) → then daily log
  → If returning user: show main menu
  → Daily log flow: fuel → fares → hire → confirmation
  → On confirmation: INSERT into daily_logs
  → Trigger SMS via Termii API
  → Return confirmation USSD screen
  → Session ends

Latency target: < 2 seconds per screen
Total session: < 30 seconds for daily log
```

### Nightly Batch Jobs

```
Every night at 11:59 PM WAT:
  1. Calculate streaks for all drivers
     - If driver logged today: increment current_streak
     - If driver did not log today: reset current_streak to 0, record streak_broken event
  2. Check for milestone crossings (7, 14, 30, 60, 90 days)
     - Queue milestone SMS for morning delivery (7:00 AM)
  3. Recompute income_summaries for drivers with 30+ days logged
  4. Check for 48-hour inactivity → queue nudge SMS (9:00 PM next day)
```

---

## 10. Data Asset Strategy

### What Data RideBooks Creates That Did Not Exist Before

1. **Individual driver income data:** Daily net earnings, fuel costs, hire payments — for millions of workers with zero formal income documentation
2. **Transport sector economics:** Average fares by city, fuel cost trends, hire rates by vehicle type — data that no institution (not even LAMATA or FRSC) has at granular level
3. **Income consistency signals:** Streak data reveals financial reliability. A driver who logs 85 of 90 days is demonstrably more consistent than one who logs 30 of 90.
4. **Seasonal and route economics:** Daily data over months reveals patterns — Mondays are slow, December is peak, Lagos → Ikorodu route earns more than Lagos → Ojo. Urban planners and transport authorities have no access to this data.

### How This Data Feeds Other Mentaat Products

- **RideBooks → VendorScore:** Income verification is a direct input to credit scoring. A driver with 90 days of logged earnings has a quantifiable income that VendorScore can use for lending risk assessment.
- **RideBooks → InsureMatch:** Daily activity data (logging frequency = driving frequency proxy) enables usage-based insurance pricing. A driver who drives 6 days/week has a different risk profile than one who drives 3 days/week.
- **RideBooks → AjoTrust:** Cross-referencing: a driver who logs N10K/day net on RideBooks and contributes N10K/week to a savings circle via AjoTrust presents a comprehensive financial profile.
- **RideBooks → KasaBook:** If a driver also runs a small trade (common — keke drivers sell goods at their stand), KasaBook tracks the trade and RideBooks tracks transport income. Combined: full picture.

### Who Would License This Data

| Buyer | Use Case | Estimated Price |
|-------|----------|----------------|
| Vehicle financing companies (Moove, MAX) | Income verification for hire-purchase | N100-500 per driver query |
| Micro-lenders (FairMoney, Carbon, Branch) | Income verification for personal loans | N50-200 per driver query |
| Insurance companies | Usage-based pricing for commercial vehicles | N50-100 per driver profile |
| Transport authorities (LAMATA, FRSC) | Sector economics, route planning | N1-5M per dataset |
| Urban planners / development agencies | Transport sector research | N2-10M per engagement |
| Oil & gas companies | Fuel consumption patterns by vehicle type/city | N500K-2M per dataset |

### Privacy/Anonymization Approach

- **Individual data:** Private. Never shared without explicit driver consent via verification code (FR10).
- **Aggregate data:** Anonymized, de-identified, licensable. "Average keke driver net in Port Harcourt: N7,200/day (Q1 2027)." No names, no phone numbers.
- **Consent model:** Driver initiates data sharing. RideBooks never pushes data to lenders. Opt-in only.
- **Data retention:** All log entries retained indefinitely (they increase in value over time). Driver can request full deletion via USSD ("Settings → Delete my data").

---

## 11. Value Chain Design

### Infrastructure This Product Builds

RideBooks creates the first income documentation infrastructure for informal transport workers. This infrastructure enables:
- Income verification for a segment that has never had it (5-10M drivers)
- Transport sector economic data at daily granularity (unprecedented in Nigeria)
- A pipeline from informal earnings → formal credit access (the "invisible earner" to "creditworthy borrower" transition)

### Four Pillars Assessment

| Pillar | Application |
|--------|------------|
| **Resource Commitment** | USSD infrastructure (Africa's Talking), database (Supabase), SMS delivery (Termii). Low capital. The commitment is not financial — it is temporal. RideBooks requires 12-18 months of operating free before data monetization begins. The builder commits time and operational cost before revenue. |
| **Cross-Market Knowledge Transfer** | India's Ola/Uber driver financing pipelines proved that ride-hail income data enables vehicle financing. RideBooks transfers this pattern to the pre-digital segment: informal drivers who do not use ride-hail apps. The insight is that income data — not platform affiliation — is what lenders need. You do not need to be an Uber driver to be creditworthy; you need to prove your income. |
| **Value-Chain Coordination** | Motor parks and NURTW (National Union of Road Transport Workers) are existing coordination points. A NURTW park chairman who encourages drivers to log earnings creates an instant distribution channel. Vehicle owners who want verified hire payment records encourage their drivers to log. The existing transport sector hierarchy becomes the distribution chain. |
| **Transferability** | The daily earnings log pattern (3 inputs → P&L → income certificate) transfers to any informal earner: food vendors (daily sales, ingredient costs), artisans (job fees, material costs), market porters (daily earnings). RideBooks proves the pattern for transport; the pattern scales horizontally to other informal occupations. |

### Externalities

- **Credit unlocking:** Drivers who access credit for the first time (personal loans, vehicle financing) increase economic activity — more vehicles on the road, more passenger capacity, more mobility
- **Vehicle ownership transition:** Drivers who prove income → get financing → own their vehicles → stop paying hire → increase their net earnings by 30-50%. This is a wealth creation externality.
- **Transport sector formalization:** Data on driver earnings contributes to transport sector policy — fare regulation, fuel subsidy design, driver welfare programs
- **Insurance access:** Activity data enables usage-based insurance, which is cheaper for low-activity drivers and more accurate for high-activity drivers

---

## 12. Pricing & Unit Economics

### Pricing Tiers

**Free Tier (Forever Free)**
- Unlimited daily logging (fuel, fares, hire)
- Daily P&L via SMS
- Streak tracking and milestone alerts
- Weekly and monthly summary SMS
- History check via USSD

The free tier is the complete product for the driver. There is no crippled version. A driver can use RideBooks forever for free and get full value. This is essential: drivers will not pay for a tool they have never heard of and do not know they need. The value proposition is: "Log for free for 90 days, and then you can prove your income to a lender."

**Income Verification (Phase 2) — N500-1,000 per verification code ($0.33-0.65)**
- One-time fee per verification code generated
- Paid by the driver OR by the lender (configurable)
- Lender-paid model: lender subscribes to verification API, pays per query

**Income Verification API (Phase 3) — Institutional Pricing**
- Per-query: N100-500 per driver verification
- Monthly subscription: N100K-500K for unlimited queries (for vehicle financing companies with volume needs)
- Bulk research datasets: N1-5M per engagement (transport authorities, development agencies)

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| USSD cost per session | N5-10 | Africa's Talking per-session pricing |
| Avg USSD sessions per driver/month | 30-35 | 1 daily log + 2-3 history checks/month |
| USSD cost per driver/month | N150-350 | 30-35 sessions × N5-10 |
| SMS cost per message | N4-5 | Termii per-SMS |
| Avg SMS per driver/month | 35-40 | 30 daily P&L + 4 weekly summaries + 1 monthly + nudges/milestones |
| SMS cost per driver/month | N140-200 | 35-40 × N4-5 |
| **Total marginal cost per free driver/month** | **N290-550** | **~$0.19-0.36** |
| Supabase cost per driver/month | ~N3 | Pro plan amortized |
| **Total cost per active driver/month** | **N293-553** | |

### Revenue Targets

| Milestone | Active Drivers | Verification Revenue | API Revenue | Monthly Cost | Net |
|-----------|---------------|---------------------|------------|-------------|-----|
| Month 3 | 200 | N0 | N0 | N59-111K | -N59-111K |
| Month 6 | 500 | N0 | N0 | N147-277K | -N147-277K |
| Month 12 | 2,000 | N50-100K (100 codes/month × N500-1K) | N0 | N586K-1.1M | -N486K-1M |
| Month 18 | 5,000 | N150-300K | N200-500K (2 lender partners) | N1.47-2.77M | -N820K-1.97M |
| Month 24 | 15,000 | N500K-1M | N1-3M (5+ lender partners) | N4.4-8.3M | Approaching break-even |

### Break-Even Analysis

RideBooks has higher per-user costs than AjoTrust because drivers log daily (30 USSD sessions/month vs. 4-6 for savings circle members). At N290-550/month per driver with zero revenue from free users, the cost scaling is aggressive.

**Break-even requires:**
- 15,000+ active drivers (data scale attracts institutional buyers)
- 5+ lender partners paying N200K-500K/month each for API access
- OR 1 vehicle financing partner paying N1-3M/month for verified driver income data

**Realistic funding plan:** RideBooks is funded by Layer 2 product revenue during the 18-24 month data collection phase. The per-driver cost is higher than AjoTrust, making this a more expensive data collection play. But the data is uniquely valuable — no other source provides verified daily income for informal transport workers.

### Cost Structure Test

Is this fundamentally different from incumbents? **Yes.** Uber/Bolt generate income data as a byproduct of their ride-hail platform — a platform that requires smartphones, internet, and platform affiliation. Their cost structure includes app development, mapping, payment processing, driver onboarding, and marketing. RideBooks generates income data via USSD at N290-550/driver/month. The cost is 10-50x lower than what a ride-hail platform spends per driver, and it reaches the 90%+ of transport drivers who are not on any ride-hail platform. No ride-hail company would build a USSD earnings tracker for non-platform drivers — it does not serve their business model.

---

## 13. Go-to-Market: First 10 Customers

"Customers" for RideBooks are individual drivers. But the distribution model targets aggregation points: motor parks, NURTW offices, vehicle owners, and keke associations.

### Channel 1: Motor Parks (Primary — Physical)

**Target:** 50-100 drivers at 2-3 major motor parks
**Approach:** Visit a motor park during the 1-2 PM break (drivers rest, eat, fuel). Approach a driver: "How much did you make today?" Every driver can answer this immediately. Then: "What if you could prove that to a lender? Dial this code, enter 3 numbers, 30 seconds. Free forever." Demo the USSD flow on their phone. Help them log their first day.
**Target parks (Lagos):** Oshodi motor park, Ojota motor park, Jibowu park
**Target parks (Port Harcourt):** Waterlines, Rumuokoro park (family network access)
**Expected conversion:** 30-50 drivers per park visit. 10-20% become daily loggers.
**Cost:** N10-20K (transport per visit).

### Channel 2: Vehicle Owners (Coordinator-as-Distributor)

**Target:** 5-10 vehicle owners, each managing 3-10 drivers
**Approach:** Find a vehicle owner (through motor park connections or family network). Pitch: "Your drivers pay you hire every day. What if both you and the driver had a record? If the driver logs his fares and hire, you can confirm he paid. No more arguments about missed hire payments." The vehicle owner tells their drivers to use RideBooks. One owner = 3-10 drivers.
**Expected conversion:** 3-5 owners in first 2 months. 15-50 drivers via owner referral.
**Cost:** N0 (referral through park visits).

### Channel 3: NURTW/Union Partnerships

**Target:** 1-2 NURTW branch chairmen
**Approach:** NURTW controls motor parks in most Nigerian cities. Approach a local chairman: "We built a free tool for your members to track earnings. It costs nothing. It helps them prove income. Can we present at your next meeting?" The chairman's endorsement drives adoption across the park.
**Expected conversion:** 20-50 drivers per NURTW branch.
**Cost:** N0-10K (relationship building, transport).

### Channel 4: Keke/Okada Associations (Port Harcourt)

**Target:** 20-40 keke drivers via family network
**Approach:** Builder's family in Port Harcourt connects to local keke association. Present RideBooks at association meeting. Help first 10 drivers log on the spot.
**Expected conversion:** 20-40 keke drivers in Month 1.
**Cost:** N0 (family network).

### Channel 5: Word-of-Mouth at Fuel Stations

**Target:** 10-20 drivers per station
**Approach:** Fuel stations are where drivers congregate. A small poster or flyer at a partner fuel station: "Drivers: track your daily earnings for free. Dial *384*RIDE#." Partner with 2-3 independent fuel station owners (family/community connections).
**Expected conversion:** Low per station, but consistent (5-10 drivers/month per station).
**Cost:** N5-10K (flyer printing).

### Channel Summary

| Channel | Month 1 Drivers | Month 2 Drivers | Month 3 Drivers | Cost |
|---------|----------------|----------------|----------------|------|
| Motor park visits | 50-100 | 30-50 | 20-30 | N30-60K |
| Vehicle owners | 15-30 | 20-40 | 10-20 | N0 |
| NURTW partnerships | 0 | 20-50 | 30-50 | N0-10K |
| Keke associations (PH) | 20-40 | 10-20 | 5-10 | N0 |
| Fuel station flyers | 0 | 10-20 | 15-25 | N5-10K |
| Word-of-mouth | 0 | 10-30 | 30-60 | N0 |
| **Total** | **85-170** | **100-210** | **110-195** | **N35-80K** |

### Cumulative: 295-575 drivers by Month 3. Target: 200+ daily loggers.

### What NOT to Do
- Do not run social media ads — danfo drivers are not on Instagram looking for financial tools
- Do not build a landing page — the USSD code is the landing page
- Do not partner with ride-hail companies — they serve a different segment and have no incentive to help informal drivers prove income
- Do not approach lenders before having 500+ drivers with 30-day histories — they will not engage without data volume

---

## 14. Risks & Mitigations

### Risk 1: Low Daily Logging Compliance
**Likelihood:** High. Logging 3 numbers daily sounds trivial, but drivers are exhausted at end of day. Compliance will decay.
**Impact:** Without consistent daily logging, income histories are incomplete and less valuable. A driver who logs 15 of 30 days has a weaker income signal than one who logs 28 of 30.
**Mitigations:**
- The 30-second USSD flow is designed for exhausted drivers. Three numbers, no typing, no thinking.
- Streak gamification: "Your 14-day streak is at risk!" creates psychological investment
- Nudge SMS after 48 hours of inactivity (FR8) — gentle, not spammy
- Position the 90-day milestone as a tangible goal: "90 days = income proof = loan access." The reward is concrete.
- Accept imperfect compliance: a driver who logs 20 of 30 days is still more documented than a driver with zero records. The bar is not perfection — it is better than nothing.

### Risk 2: Data Accuracy / Self-Reporting Bias
**Likelihood:** High. Drivers may inflate fares or deflate fuel to look more profitable. Or they may not remember exact amounts.
**Impact:** If lenders cannot trust the data, the income verification use case fails.
**Mitigations:**
- Statistical validation: compare driver-reported data to expected ranges by vehicle type and city. A danfo driver reporting N50K daily fares in Lagos is flagged as an outlier. A keke driver reporting N3K daily fares in Port Harcourt is within expected range.
- Consistency matters more than accuracy: a driver who reports N15K daily for 90 days is more reliable than one who reports N5K one day and N50K the next, regardless of absolute accuracy.
- Phase 2 vehicle owner confirmation (FR12): if the vehicle owner confirms the hire amount, 1 of 3 data points is dual-verified. This increases credibility substantially.
- Lenders will calibrate: "RideBooks income data is self-reported with the following consistency characteristics." The data is not bank-grade — it is infinitely better than no data.
- Over time, cross-reference with OPay/PalmPay transaction data (if driver consents) to validate reported figures.

### Risk 3: USSD Cost at Scale
**Likelihood:** High. At 30+ sessions per driver per month, USSD costs are N150-350/driver/month. At 5,000 drivers, this is N750K-1.75M/month with near-zero revenue.
**Impact:** Operating costs grow linearly with driver count. Without revenue, the product becomes financially unsustainable before data monetization kicks in.
**Mitigations:**
- Volume pricing negotiation with Africa's Talking at 5,000+ daily sessions
- Phase 2: offer WhatsApp logging for smartphone users (free for user-initiated messages). A danfo driver who logs via WhatsApp instead of USSD saves N5-10/day in system costs.
- Cap nudge SMS frequency (1/week maximum) to control outbound SMS costs
- Fund USSD costs from Layer 2 product revenue
- The per-driver cost (N290-550/month) is the price of data that no one else has. Compare to the alternative: building a ride-hail platform to generate driver income data would cost millions.

### Risk 4: Competition from Ride-Hail Expansion
**Likelihood:** Low-Medium (24-month horizon). If Uber/Bolt/inDrive expand to include informal drivers (danfo, keke), they could generate income data as a platform byproduct.
**Impact:** Lenders would prefer ride-hail data (automatically generated, harder to manipulate) over self-reported USSD data.
**Mitigations:**
- Ride-hail platforms have shown zero interest in onboarding danfo/keke drivers — different business model, different economics, different regulation
- Even if ride-hail expands, 80%+ of informal drivers will remain outside platforms for years. The transition is measured in decades, not months.
- RideBooks data includes fuel and hire costs — ride-hail platforms do not track these. RideBooks provides net earnings, not gross fares.
- Data moat: 90+ days of historical data per driver cannot be replicated by a new platform. The history is the lock-in.

### Risk 5: Driver Trust
**Likelihood:** Medium. "Who is behind this? Are they tracking me? Will they share my data with NURTW or the government?"
**Impact:** Drivers refuse to register or provide accurate data.
**Mitigations:**
- No GPS, no route tracking, no location data. Reinforce this: "RideBooks only records the 3 numbers you enter. We do not know where you drive."
- Data sharing requires explicit consent (FR10). Drivers choose when, with whom, and whether to share.
- Motor park demonstrations build trust: a driver sees their colleague use it, sees the SMS response, and understands what data is captured.
- Privacy messaging in every milestone SMS: "Your data is yours. We never share it without your permission."

### Risk 6: Regulatory / Union Interference
**Likelihood:** Low-Medium. NURTW is powerful and sometimes hostile to initiatives that affect their control over drivers. Government transport authorities may view driver income data as a tax compliance opportunity.
**Impact:** NURTW could discourage or ban drivers from using RideBooks. Government could demand data access for tax enforcement.
**Mitigations:**
- Position RideBooks as beneficial to NURTW: "Your members can now prove income and access loans. This strengthens the union's value proposition."
- Never share individual data with government or unions without driver consent
- Aggregate data (sector economics) can be offered to transport authorities as a goodwill gesture — this creates political capital without compromising individual privacy
- Legal review: ensure RideBooks does not create tax reporting obligations for drivers (record-keeping is not tax filing)

### Risk 7: Smartphone Migration
**Likelihood:** Medium (3-5 year horizon). As smartphone penetration increases and 2G networks are phased out, USSD becomes less relevant.
**Impact:** The USSD-first product may need to transition to WhatsApp or app-based logging.
**Mitigations:**
- USSD will remain relevant in Nigeria for 5-10 years (42% of connections are still 2G in 2026, and 2G sunset timelines are not announced)
- Phase 2 WhatsApp logging provides a migration path for smartphone-owning drivers
- The data format (3 numbers/day) works identically on any channel. Switching from USSD to WhatsApp requires only a channel change, not a product redesign.
- By the time USSD is obsolete, RideBooks should have millions of historical records — the data moat, not the channel, is the value.

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot visit motor parks directly. Family network in Port Harcourt for initial distribution. Lagos motor park outreach requires a hired ambassador (N30-50K/month).
- **Budget: $0-5K total.** USSD and SMS costs are the primary variable expense. At 500 drivers, monthly USSD/SMS costs are N145-275K (~$95-180). This is the highest per-user cost product in the portfolio.
- **Tech stack:** Next.js 14, Supabase, Vercel, Africa's Talking, Termii.
- **Timeline:** MVP in 1-2 weeks (simpler than AjoTrust — no group dynamics, just a daily log). First drivers logging by Week 3.
- **USSD character limits:** 160 characters per screen, 5 screens max, 180-second timeout.
- **No financial services licensing:** RideBooks records earnings. It does not lend, insure, or process payments.

### Assumptions (Each Testable)

| Assumption | Test |
|-----------|------|
| Drivers will log daily if the process takes < 30 seconds | 50%+ of registered drivers log at least 20 of first 30 days |
| 3 numbers (fuel, fares, hire) capture the essential daily P&L | Qualitative feedback from 20 drivers after 2 weeks: "Is anything important missing?" |
| 90 days of logging creates a usable income signal for lenders | 3+ micro-lenders review sample data and confirm it is usable for credit decisions |
| Motor parks are effective distribution channels | 30+ drivers registered per park visit |
| Streak gamification drives retention | Drivers with active streaks log 2x more consistently than drivers without |
| Vehicle owners encourage driver logging when hire confirmation is available | 50%+ of vehicle owners approached agree to encourage drivers |

### Out of Scope

| Exclusion | Rationale |
|-----------|-----------|
| GPS/route tracking | Privacy concern, battery drain, data cost. Drivers would not adopt. |
| Individual fare logging | Too much friction. Daily total is sufficient for income verification. |
| Mobile app | Target drivers use feature phones during work. USSD is the work interface. |
| Payment processing | Regulatory complexity. Record payments, do not process them. |
| Lending | Requires licensing. Create data that enables others to lend. |
| Expense categories beyond fuel/fares/hire | Each additional category reduces completion rate. Three numbers cover 90%+ of daily P&L. |
| Vehicle maintenance tracking | Different product. RideBooks is an earnings tracker, not a fleet management tool. |
| Driver ratings or passenger feedback | Not relevant to the income documentation use case. |
| Multi-language (Hausa, Yoruba) | English covers the target segment. Pidgin is Phase 2. |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] USSD daily log flow completes in 4 screens on all 4 major networks
- [ ] Daily P&L SMS delivered within 60 seconds of log completion
- [ ] Registration (first-time use) adds 2 screens maximum (vehicle type + city)
- [ ] History check returns accurate data within 2 seconds
- [ ] Streak tracking correctly identifies consecutive logging days and resets on gaps
- [ ] 10 test drivers (family/friends) complete 7 consecutive days of logging with zero errors
- [ ] SMS delivery rate > 90%

### Success Metrics (3 Months Post-Launch)

- [ ] 200+ drivers registered
- [ ] 50+ drivers with 30-day continuous logging streaks
- [ ] Average logging compliance: 60%+ (days logged / days since registration)
- [ ] Zero revenue (acceptable — data collection phase)
- [ ] 6,000+ daily log entries stored (data asset metric)
- [ ] 2+ micro-lenders or vehicle financing companies briefed on data asset and express interest
- [ ] Average USSD session time < 45 seconds for daily log
- [ ] Driver self-reported satisfaction: "Would you recommend RideBooks to another driver?" > 70% yes

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 9 | 0.45 | Simplest product in the portfolio. A USSD form with 3 numeric inputs + SMS response + database write. No NLP, no group dynamics, no dual confirmation. Functional prototype in 1 week. Production-ready in 2 weeks. |
| Time to Revenue | 15% | 1 | 0.15 | Zero revenue for 12+ months. Free tier is the entire product for drivers. Income verification fees (Phase 2) are marginal. Real revenue comes from lender API subscriptions at 5,000+ drivers (18-24 months). Slowest revenue timeline tied with AjoTrust. |
| Market Size | 15% | 9 | 1.35 | 5-10M informal transport drivers. Annual transport sector income estimated at N5-15T. Vehicle financing TAM growing rapidly (Moove raised $200M+). Large market, but narrower than KasaBook (which targets all informal traders). |
| Competition | 10% | 10 | 1.00 | Zero competitors. No USSD-based driver earnings tracker exists. Ride-hail apps serve a different segment. The gap is completely open. |
| Skill Fit | 15% | 8 | 1.20 | Simplest technical implementation in the portfolio (USSD form + database + SMS). Data science skills become critical in Phase 3 (income verification models, outlier detection). Distribution requires local execution — family network in Port Harcourt helps for keke drivers. |
| Capital Required | 10% | 6 | 0.60 | Infrastructure is cheap ($30/month). But per-user USSD/SMS costs are the highest in the portfolio (N290-550/driver/month due to daily logging). At 2,000 drivers: N580K-1.1M/month. Requires cross-subsidy from revenue products earlier than AjoTrust or KasaBook. |
| Buyer Clarity | 20% | 4 | 0.80 | Can you name 10 drivers to call this week? Not from NYC. Motor parks are the access point, and reaching them requires local presence. Vehicle owners are a clearer "buyer" (they have incentive to track driver hire payments), but they are also not accessible remotely. Family network in Port Harcourt bridges the gap for keke drivers specifically. |
| Fintech Upside | 10% | 9 | 0.90 | Vehicle financing is a massive market (Moove alone raised $200M+). Income verification data for 5M+ drivers unlocks lending, insurance, and hire-purchase products. Slightly lower than KasaBook (which covers all informal commerce, not just transport) but still among the highest in the portfolio. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.45 |
| Time to Revenue (15%) | 0.15 |
| Market Size (15%) | 1.35 |
| Competition (10%) | 1.00 |
| Skill Fit (15%) | 1.20 |
| Capital Required (10%) | 0.60 |
| Buyer Clarity (20%) | 0.80 |
| Fintech Upside (10%) | 0.90 |
| **TOTAL** | **6.45 / 10** |

### Verdict: BUILD (Strategic Data Asset — Fund with Revenue Products, Sequence After AjoTrust)

6.45 is a moderate composite score with the same structural weaknesses as AjoTrust: Time to Revenue (1/10) and Buyer Clarity (4/10). RideBooks also has a higher Capital Required concern (6/10) because daily USSD logging creates higher per-user costs than weekly/monthly savings circle confirmation.

The strategic case is clear but secondary to AjoTrust:
- Both are Layer 1 data products running on the USSD Business Toolkit Platform
- AjoTrust has lower per-user costs (fewer sessions/month) and a stronger distribution model (coordinator-as-distributor)
- RideBooks should be built after AjoTrust, reusing the USSD platform, session management, and operational learnings
- The combined data (savings behavior from AjoTrust + income data from RideBooks) creates the most comprehensive informal economy financial profile in Nigeria

**Build sequence:** After USSD Business Toolkit Platform and AjoTrust. RideBooks reuses the platform infrastructure and benefits from AjoTrust operational learnings.

---

## 18. Disruption Self-Assessment

### Criterion 1: Targets Overlooked or Non-consuming Segments
**Rating: STRONG FIT**

5-10 million informal transport drivers have zero income documentation. They are not poorly served by existing products — they are completely invisible to the financial system. No fintech, no lender, no insurer can see their income. They are the definition of non-consumers: they have a need (income verification for credit access) and literally nothing available to meet it. Uber/Bolt serve a different, smaller, smartphone-owning, app-using segment.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First
**Rating: STRONG FIT**

RideBooks captures 3 self-reported numbers via USSD. Compared to Uber's real-time GPS-tracked, fare-calculated, passenger-rated, payment-processed driver income data, RideBooks looks primitive. An Uber product manager would call it "a USSD form with an SMS receipt." But for Baba Tunde, who has zero income documentation, a 90-day record of self-reported daily earnings is infinitely better than nothing. The simplicity is not a limitation — it is the product.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold
**Rating: STRONG FIT (New-Market)**

**New-market foothold:** There is no existing product category for USSD-based informal driver income documentation. RideBooks creates first-time users of earnings tracking. The category is entirely new for this segment.

There is no meaningful low-end comparison: ride-hail platforms generate income data as a byproduct of ride matching, which is a completely different product. RideBooks is not a cheaper version of Uber — it is a new tool for a segment Uber does not and cannot serve.

### Criterion 4: Reimagines the Value Chain
**Rating: STRONG FIT**

The income verification value chain today: employer issues payslip → employee shows bank statement → lender verifies. This chain does not exist for informal transport drivers. RideBooks creates a new chain: driver logs earnings via USSD → data accumulates → driver authorizes sharing → lender verifies via API. The entire value chain — from data generation to credit access — is new. Additionally, the distribution model (motor parks, vehicle owners, NURTW) is a reimagined channel that existing fintechs do not use.

### Criterion 5: Prioritizes Scaling a Core Solution
**Rating: STRONG FIT**

The MVP is three numbers and an SMS. No analytics, no reports, no verification, no lender integration. Maximum distribution of the minimum viable log. Features follow scale. This is the most radically simple product in the portfolio — even simpler than KasaBook (which requires NLP parsing) or AjoTrust (which requires group dynamics).

### Criterion 6: Demands a Different Cost Structure
**Rating: STRONG FIT**

RideBooks' cost is N290-550/driver/month in USSD and SMS fees with zero revenue per free driver. This cost structure is only viable because the data has independent value (income verification for lenders, transport sector analytics). No ride-hail platform or fintech would operate at N0 revenue per user for 12+ months — they need per-transaction revenue to cover their far higher fixed costs (app development, servers, mapping, driver onboarding, marketing). RideBooks accepts zero revenue because the data asset is the revenue source, not the user fee.

### Criterion 7: Converts Non-consumption into Growth
**Rating: STRONG FIT**

Every driver who logs daily earnings is a first-time user of income documentation. Growth comes from converting invisible earners into documented earners — not from stealing users from any existing product. The economic ripple: documented income → credit access → vehicle ownership → increased earnings → more drivers seek documentation. The total addressable market for vehicle financing expands because RideBooks exists.

### Criterion 8: Can Mature to Surpass Mainstream Offerings
**Rating: PARTIAL FIT**

The maturation path:
1. **Phase 1:** USSD daily log (good enough for basic income tracking)
2. **Phase 2:** Income verification codes (approaching formal income documentation)
3. **Phase 3:** Lender API, vehicle financing integration (creating a credit pipeline)
4. **Phase 4:** Transport sector analytics, fleet management data (institutional value)

At Phase 4, RideBooks' data may surpass ride-hail platform data for the informal segment because it covers fuel costs, hire payments, and net earnings — data ride-hail platforms do not capture even for their own drivers. However, RideBooks' self-reported data will always be lower-fidelity than automatically generated ride-hail data. A lender may always prefer Uber income data over RideBooks data for the same driver. The maturation is real but the ceiling is constrained by the self-reporting model. Partial fit because the product improves significantly but may not fully surpass app-generated data quality.

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

All three non-negotiable criteria are met with strong fit. The single partial fit (Criterion 8) reflects an honest limitation: self-reported USSD data may never fully match automatically generated app data in fidelity. But it serves a segment 10x larger than app-based platforms can reach, and it creates data that did not exist at all. The partial fit is acceptable and honest.

---

## 19. MNC Anti-Pattern Check

### Pattern 1: Phantom Middle Class
**No match.** RideBooks targets danfo, keke, and okada drivers — base-of-pyramid earners making N3-10K/day net. No revenue model depends on middle-class adoption. The tertiary persona (data buyer/lender) is institutional, not middle-class consumer.

### Pattern 2: Push, Don't Pull
**Partial match — acknowledged and mitigated.** Unlike KasaBook (where debt tracking is an acute daily pain), RideBooks addresses a latent need: drivers do not actively seek income documentation until they need credit. The daily logging habit is a push (driver does not feel the pain of missing documentation every day) that creates pull at the 90-day milestone (when the income proof becomes actionable). Mitigation: streak gamification and the 90-day goal create intrinsic motivation. The motor park demo creates immediate value perception ("see your daily P&L for the first time"). This is the biggest GTM risk — if drivers do not see immediate value in the daily SMS, retention will collapse.

### Pattern 3: Infrastructure Entitlement
**No match.** RideBooks is built on USSD because reliable internet cannot be assumed. The product works on a Nokia 105 on 2G. Zero infrastructure assumptions beyond basic cellular connectivity, which exists.

### Pattern 4: Imported Management
**No match.** Solo founder with local family network. No expatriate management layer.

### Pattern 5: Blame and Exit
**Not applicable yet.** Mitigation: clear retention thresholds. If 30-day logging compliance is below 30%, the product has a value delivery problem. Investigate and fix before scaling. Do not blame drivers for "not being ready for technology."

### Pattern 6: Premium Positioning in a Value Market
**No match.** The product is free. Forever free for the core function. The driver never pays unless they choose to generate an income verification code (N500-1K, Phase 2). Institutional pricing (API for lenders) is invisible to drivers. The product is positioned at the absolute floor of the value market.

**Conclusion: One partial match (Pattern 2: Push risk).** The latent pull dynamic is the primary GTM risk and is honestly acknowledged. The remaining five patterns have zero matches. RideBooks is designed from the driver's daily reality backward, not from a lender's wish list forward.
