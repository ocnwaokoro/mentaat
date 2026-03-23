# PRD 13: MasterBook — USSD Apprenticeship Contract & Completion Documentation

## 1. Executive Summary

MasterBook is a USSD-only apprenticeship documentation system for Nigeria's informal apprenticeship economy. There is no app, no website, no paper form. A master tradesperson dials a USSD code and registers the terms of an apprenticeship: the apprentice's name, the trade, the agreed duration, the settlement amount, and the names of witnesses. The apprentice receives a USSD prompt and confirms the same terms. Both parties now have a digitally recorded, witness-backed agreement for a 3-7 year commitment that was previously entirely verbal. Annual progress check-ins are logged via USSD. At completion, both parties confirm, and the system generates a verifiable completion certificate and settlement agreement. If disputes arise, witnesses can be queried via USSD for independent confirmation.

The target user is an apprentice with zero contractual protection for the most important economic commitment of their life. The Igbo apprenticeship system (Igba Boi) — and its equivalents in Yoruba, Hausa, and other Nigerian cultures — produces millions of skilled workers every year. A young person is placed with a master tradesperson for 3-7 years. During this period, they work for free or near-free, learning the trade. At the end, the master "settles" them with startup capital (typically N2-5M, sometimes more) to start their own business. This entire arrangement — years of unpaid labor, specific trade skills, and millions of naira in settlement — rests on a verbal promise. There is no contract, no record, no documentation. Disputes over completion dates, settlement amounts, and whether the apprenticeship was satisfactorily completed destroy families and community relationships every year. There is no product, no service, no system that addresses this.

The visible product is a digital contract record. The real product is the data layer it creates: Nigeria's first apprenticeship credential system. Every registration creates a record of who is training whom, in what trade, for how long, with what settlement terms. This data has never existed in any database. It feeds SkillProof (the artisan who completes a MasterBook-documented apprenticeship has verified training credentials), VendorScore (apprenticeship completion is a reliability signal for credit), and the future Apprenticeship Settlement Financing product (a Tier C product that provides micro-loans for settlement payments, using MasterBook completion data as the credit signal).

This is the most uniquely Nigerian product in the Mentaat portfolio. No other country has this apprenticeship system operating at this scale with this level of informality. It is a Layer 1 product — data collection that creates invisible infrastructure. It runs on the USSD Business Toolkit Platform. USSD only, no desktop, no web.

**Disruption type:** New-market (creating a category that does not exist — apprenticeship documentation for informal training systems).

**90-day target:** 100 apprenticeship agreements registered, 50 with dual-party confirmation, 20 with witnesses recorded, N0 revenue (trust-building phase).

---

## 2. Market Opportunity

### The Informal Apprenticeship Economy

Nigeria's informal apprenticeship system is one of the largest non-formal vocational training systems in the world. Estimates vary, but conservative figures suggest:

- **5-10 million active apprenticeships** at any given time across Nigeria
- **1-2 million new apprenticeships** initiated each year
- **N10-50T ($6.5-32.5B)** in total settlement obligations outstanding (5-10M apprentices x N2-5M average settlement)
- **The Igba Boi system alone** (Igbo) accounts for an estimated 2-3 million active arrangements, concentrated in the South-East (Aba, Nnewi, Onitsha) and in Igbo trading communities across the country

This is not a niche tradition. It is the primary mechanism by which Nigeria produces skilled tradespeople, market traders, and small business owners. The system has created some of Nigeria's wealthiest businesspeople — the Innoson Group, Ibeto Group, and many others trace their origins to apprenticeship settlements.

### The Zero

What percentage of Nigerian apprenticeships are documented? Effectively 0%.

- **No written contract:** Apprenticeship terms are agreed verbally between the master, the apprentice, and usually the apprentice's family. No paper contract is signed.
- **No record of duration:** There is no official start date or end date. The master decides when the apprentice has "served enough."
- **No record of settlement terms:** The amount the master promised to settle is in everyone's memory but nowhere in writing.
- **No completion certificate:** When an apprentice completes their service, there is no certificate, no transcript, no verifiable credential.
- **No witness registry:** Witnesses to the agreement (usually family elders or community leaders) have no recorded obligation. Their memory is the only backup.

### Quantified Pain

**Disputes are endemic:**
- An estimated 20-30% of apprenticeships end in significant disputes over one or more of: completion date, settlement amount, quality of training, or terms of the original agreement
- Settlement disputes average N2-5M in contested amounts
- Legal resolution is effectively unavailable — informal courts and community arbitration are the only mechanisms, and they rely on the same faulty memories that caused the dispute
- Family relationships are destroyed: apprenticeships often involve extended family placements (uncle takes nephew, family friend takes son), and disputes fracture these relationships permanently

**For apprentices (the non-consumers):**
- An apprentice who is denied their settlement after 5-7 years of unpaid labor has lost years of their life with no recourse
- Apprentices who leave voluntarily before completion (because of mistreatment, disagreement, or changed circumstances) have zero documentation of the skills they acquired
- Young women in apprenticeships face additional vulnerability — fewer witnesses, less family advocacy, and higher social pressure to accept whatever the master offers

**For masters:**
- Masters who settle fairly have no proof they did so — a settled apprentice can claim they were never settled
- Masters who train multiple apprentices cannot prove their track record as trainers
- Disputes damage the master's reputation in the community, affecting their ability to take future apprentices

**For the economy:**
- N10-50T in settlement obligations operating without documentation creates systemic risk
- Banks and microfinance institutions cannot lend against apprenticeship settlement expectations because the obligation is undocumented
- The apprenticeship system's reputation for disputes deters some families from participating, reducing the talent pipeline

### Why the Pain is Getting Worse

- **Naira depreciation:** Settlement amounts agreed 5 years ago in naira terms have lost 50-70% of their purchasing power. Disputes over inflation adjustment are increasing.
- **Urbanization:** As apprenticeships span cities (apprentice in Lagos, master in Onitsha, family in Anambra), the traditional community oversight that kept agreements honest is weakening.
- **Social media amplification:** Disputes that were previously contained within families now play out on Facebook and WhatsApp, increasing pressure and stakes.
- **Rising settlement amounts:** As the economy grows, settlement expectations rise. N5M+ settlements are increasingly common, making disputes higher-stakes.
- **Insecurity in the South-East:** Sit-at-home orders and general insecurity have disrupted apprenticeships, creating disputes over interrupted service periods.

### Why Existing Solutions Don't Serve This Segment

- **Lawyers / formal contracts:** Cost N50-200K to draft. Neither master nor apprentice typically has this money at the start. Also: formal contracts imply distrust, which is culturally inappropriate in the family/community context of most apprenticeships.
- **Community leaders:** Serve as witnesses but have no system for recording terms. Their memory degrades over 5-7 years. They may die, move, or become unavailable before the apprenticeship ends.
- **Government vocational agencies:** NBTE (National Board for Technical Education) and similar bodies focus on formal vocational training. They have zero involvement in informal apprenticeships.
- **Mobile apps:** The few Nigerian HR/workforce apps (like BambooHR clones) serve corporate environments. No app addresses apprenticeship documentation. Even if one did, many masters and apprentices use feature phones, not smartphones.

### Total Addressable Market

- **TAM:** 5-10M active apprenticeships with N2-5M average settlement = N10-50T in documented obligations
- **SAM:** 2-4M apprenticeships in urban and peri-urban areas accessible via USSD, concentrated in South-East, South-West, and South-South
- **SOM (Year 1):** 1,000 apprenticeship agreements registered, generating N1-3M in registration fees

### Regional Variance

- **South-East (Aba, Nnewi, Onitsha):** Epicenter of Igba Boi. Highest density. Strongest cultural infrastructure. Natural starting market. South-East paradox applies: lowest business confidence but highest manufacturing capacity, meaning the apprenticeship system is still actively producing workers despite broader economic malaise.
- **South-West (Lagos, Ibadan):** Large apprenticeship populations, especially in trading and market-based businesses. More heterogeneous (Yoruba iṣẹ-ọwọ system operates differently from Igba Boi).
- **South-South (Port Harcourt, Benin):** Oil economy creates high-value apprenticeships in technical trades. Family network enables testing.
- **North (Kano, Kaduna):** Distinct apprenticeship traditions in leather-working, weaving, and metalwork. Requires cultural adaptation of the product.

---

## 3. Target Personas

### Primary: "Chidera the Apprentice" (The Non-Consumer)

**Name:** Chidera Nwosu, 19
**Location:** Onitsha Main Market, Anambra State
**Trade:** Auto parts trading (but representative of apprentices in any trade)
**Arrangement:** Placed by his family with Oga Kenneth (a successful auto parts trader and family friend) 3 years ago. Agreed terms: 5 years of service, then settlement of N3M plus a shop space. No paper document. Chidera's father, his uncle, and Oga Kenneth's wife were present when the terms were agreed.
**Phone:** Basic Nokia feature phone (no WhatsApp). Uses USSD for bank transactions.
**Income during apprenticeship:** N0 salary. Oga Kenneth provides food, sometimes gives small allowances (N5-10K/month), and occasionally buys him clothes. This is standard.
**Contractual protection:** Zero. Chidera has no document proving he is in an apprenticeship, what the terms are, when it started, or what was promised. If Oga Kenneth decides to settle him with N1M instead of N3M, or extends the apprenticeship by 2 years, Chidera's only recourse is to involve the family elders who were present — assuming they remember the terms.

**What he wants:** "I just want something wey show say we agree say na 5 years, and N3M for settlement. If e dey written somewhere wey both of us see, e go hard for anybody to change am. I no want fight with Oga, but I want protect myself."

**Decision trigger:** Chidera hears about another apprentice whose master denied ever agreeing to a N4M settlement. The apprentice served 6 years and received N1.5M. The community sided with the master because there was no proof. Chidera thinks: "That could be me."

### Secondary: "Oga Kenneth" (The Master Tradesperson)

**Name:** Kenneth Okafor, 52
**Location:** Onitsha Main Market, Anambra State
**Trade:** Auto parts — wholesale and retail
**Business:** Handles N5-15M/month in transactions. Has 4 active apprentices and has settled 12 in his career.
**Phone:** Samsung Android smartphone (WhatsApp user) + Nokia feature phone for business calls
**Reputation:** Known as a fair master. Has settled every apprentice he has trained. But one former apprentice publicly claimed Kenneth cheated him on settlement, damaging Kenneth's reputation despite Kenneth's belief that he settled fairly.

**What he wants:** "I have settled 12 boys. Every one of them, I give them good money and set them up well. But if one person talk say I cheat am, people go believe am because there is no record. If there was something wey show say we agree N3M and I pay N3M, nobody fit say I cheat."

**Decision trigger:** Kenneth's reputation is damaged by a false dispute claim. He realizes documentation protects honest masters as much as it protects apprentices.

### Tertiary: Microfinance Banks (The Data Buyer)

**Name:** LAPO Microfinance Bank, Accion Microfinance, FairMoney
**Need:** Credit data for apprenticeship settlement loans. A master who has successfully settled 5+ apprentices is a reliable borrower. An apprentice nearing completion with documented terms is a viable candidate for a pre-settlement loan.
**Current data:** None. No lender in Nigeria has apprenticeship completion data.
**Willingness to pay:** N3-15M/year for aggregate apprenticeship completion and settlement data.

**Decision trigger:** A microfinance bank realizes that thousands of apprentices need N2-5M at exactly the same time (completion of service) with a predictable trigger event (master confirms completion). This is a massive, untapped lending opportunity — but only if the completion event and settlement terms are documented.

---

## 4. Problem Deep Dive

### The Apprenticeship Lifecycle (Current State)

**Step 1: Agreement (Verbal)**
A family decides to place their child (usually male, age 15-22) with a master tradesperson. The master is typically a family friend, a community member, or someone recommended through their network. The family and the master discuss terms: duration (typically 4-7 years), what the apprentice will learn, living arrangements, and settlement (the capital and/or goods the master will provide at completion). Witnesses are present — usually 2-4 family elders or community leaders.

Everything is verbal. Nobody writes anything down. This is not oversight — it is cultural practice. Writing a contract implies distrust, which could offend the master and damage the family relationship.

**Step 2: Service (3-7 Years, Undocumented)**
The apprentice works for the master daily. They learn the trade through observation and practice. They handle inventory, serve customers, run errands, and gradually take on more responsibility. There are no milestones, no progress reports, no check-ins. The master decides when the apprentice is "ready."

During this period, there is no record of attendance, no documentation of skills learned, no evidence that the apprenticeship is occurring at all.

**Step 3: Completion (Disputed)**
After the agreed duration (which itself is subject to interpretation), the apprentice approaches the master about settlement. This is where disputes arise:

- **Duration dispute:** "We agreed 5 years." "No, we agreed 7 years."
- **Settlement amount dispute:** "You promised N3M." "I said N2M."
- **Quality dispute:** "You haven't learned enough yet. You need more time."
- **Economic dispute:** "I agreed N3M but naira has crashed. I can't afford it now."
- **Complete denial:** In extreme cases, masters deny that a settlement was ever agreed.

**Step 4: Settlement (Unrecorded)**
If the master settles, they typically give the apprentice cash, goods (inventory to start trading), and sometimes a physical space (shop or stall). There is no receipt, no transfer document, no proof that the settlement occurred. If the apprentice later claims they were not settled (or not settled fully), the master has no proof.

**Step 5: Post-Settlement (No Credential)**
The now-settled apprentice starts their own business. They have no certificate, no verifiable credential, no documentation that they completed an apprenticeship. If they apply for a bank loan, the bank has no way to verify their trade experience. If they want to take their own apprentices, their status as a trained tradesperson is purely word-of-mouth.

### What Goes Wrong at Each Step

| Step | Failure Mode | Quantified Impact |
|------|-------------|-------------------|
| Agreement | Terms are different in each party's memory after 5-7 years | 20-30% of apprenticeships have significant term disputes at completion |
| Service | No milestones or check-ins to confirm apprenticeship is on track | Apprentices who are being exploited (used as cheap labor without genuine training) have no evidence |
| Completion | Disagreement over whether completion criteria are met | Completion disputes delay settlement by 6-24 months on average |
| Settlement | Amount, timing, and form of settlement are all disputable | N2-5M per dispute; aggregate N billions across the economy |
| Post-Settlement | Zero credential for 5-7 years of training | Apprentices cannot leverage their training for formal credit, insurance, or employment |

### The Pull Test

**Do people already spend money/effort on workarounds?** Yes, strongly.

- Families increasingly insist on having "elders present" at agreement ceremonies — an imperfect but genuine attempt at documentation through human witnesses
- Some masters and families have begun writing informal notes on paper — but these are easily lost, damaged, or disputed
- Community associations in some areas have begun attempting to mediate disputes — creating an informal arbitration system that is overwhelmed by volume
- Wealthier families occasionally hire lawyers for large settlements (N5M+) — proving willingness to pay for documentation when stakes are high
- WhatsApp voice notes of agreement discussions are sometimes saved as informal evidence — a digital workaround that is not structured or verifiable

This is strong pull. People are actively spending effort and money on imperfect solutions. MasterBook digitizes and scales what they are already trying to do.

---

## 5. Solution Overview

### Design Philosophy: Invisible Technology, Cultural Sensitivity

MasterBook must be culturally invisible. It cannot feel like a "contract" — the word contract implies distrust and formality that is culturally inappropriate in apprenticeship agreements. Instead, it is framed as a "record" or "book" — something both parties keep, like a shared ledger. The USSD experience must be completable by a feature phone user who has never used any digital tool beyond airtime purchase.

### Solution Stages

**Stage 1: Agreement Registration (USSD)**
Master dials USSD code. Enters: their name, phone number, apprentice name, apprentice phone number, trade, agreed duration (years), start date, settlement amount (NGN), settlement form (cash, goods, both), and witness names and phone numbers (1-3 witnesses). System assigns a unique Agreement ID (e.g., MB-ONT-2026-00042). Data created: apprenticeship agreement record with terms, parties, and witnesses.

**Stage 2: Apprentice Confirmation (USSD)**
Apprentice receives SMS with prompt to confirm. Dials USSD code. Sees the registered terms. Confirms or disputes each term. If confirmed: agreement becomes "Mutually Confirmed." If disputed: system records the apprentice's version alongside the master's version and flags the discrepancy. Data created: dual-party confirmation record.

**Stage 3: Witness Registration (USSD)**
Each named witness receives SMS prompt. Dials USSD code. Confirms they witnessed the agreement and the terms. Data created: third-party witness confirmation, adding a layer of verification.

**Stage 4: Annual Check-in (USSD)**
On each anniversary of the start date, both master and apprentice receive SMS prompts to confirm the apprenticeship is on track. Each dials USSD and confirms: "Apprenticeship ongoing? 1=Yes, 2=No, 3=Issue to report." If both confirm: check-in logged. If either reports an issue: system records it. Data created: annual progress log, early warning of potential disputes.

**Stage 5: Completion & Settlement (USSD)**
When the agreed duration is reached (or earlier if both agree): master initiates completion via USSD. Records: settlement amount paid, form (cash/goods/both), date. Apprentice receives confirmation prompt. Both confirm → system marks agreement as "Completed and Settled." Generates a verifiable completion certificate: a unique code that anyone can dial to verify the apprentice completed their training and was settled. Data created: completion credential, settlement verification.

### What MasterBook Deliberately Sacrifices

- **No legal enforceability** — MasterBook is a record, not a legal contract. It does not replace the courts. Good enough: the primary value is having any record at all. A USSD record with dual-party confirmation and witness attestation is vastly better than nothing, even if it is not legally binding.
- **No dispute resolution** — MasterBook records the agreement and any discrepancies. It does not arbitrate disputes. Good enough: the existence of a clear record prevents most disputes from arising. When disputes do arise, the record provides evidence for community arbitration.
- **No financial escrow** — MasterBook does not hold or guarantee settlement funds. Good enough: the record of what was agreed creates social pressure to honor the agreement.
- **No detailed skills tracking** — MasterBook does not track what the apprentice learned day-by-day. Good enough: annual check-ins confirm the apprenticeship is progressing. Detailed skills tracking would require the master's active participation in logging, which is unrealistic.
- **No photo or biometric verification** — USSD cannot capture photos or biometrics. Good enough: phone number + witness confirmation provides sufficient identity verification for the target context.

### Iteration Path

**Phase 1 (Month 1-3):** USSD-only agreement registration, apprentice confirmation, witness confirmation. Core documentation loop.
**Phase 2 (Month 4-6):** Annual check-in system (triggered by anniversary dates). SMS reminders for upcoming milestones.
**Phase 3 (Month 7-12):** Completion and settlement documentation. Verifiable completion certificates via USSD lookup. Integration with SkillProof (completed MasterBook apprenticeship → verified training on SkillProof).
**Phase 4 (Month 12-24):** Settlement financing integration. MasterBook completion data feeds the Apprenticeship Settlement Financing product (Tier C). Data licensing to microfinance institutions.

---

## 6. Functional Requirements

### MUST Have — MVP (Week 1-3)

### FR1: Master Registration & Agreement Entry via USSD
- **Description**: Master tradesperson registers an apprenticeship agreement by entering all terms
- **Channel**: USSD
- **Inputs**: Master name, master phone (auto-detected), apprentice name, apprentice phone, trade (from list), agreed duration (years), start month/year, settlement amount (NGN), settlement type (1=Cash, 2=Goods, 3=Both), witness 1 name + phone, witness 2 name + phone (optional), witness 3 name + phone (optional)
- **Outputs**: Agreement ID (e.g., MB-ONT-2026-00042), confirmation message, SMS to apprentice with confirmation prompt
- **Acceptance Criteria**:
  - [ ] Registration completes in 7 USSD screens or fewer (each under 160 characters)
  - [ ] Agreement ID is generated in format MB-[STATE CODE]-[YEAR]-[5-DIGIT NUMBER]
  - [ ] Master can register multiple apprenticeships (one per session)
  - [ ] Duplicate prevention: same master + same apprentice phone cannot register twice
  - [ ] SMS sent to apprentice within 60 seconds of registration containing Agreement ID and USSD shortcode to confirm
  - [ ] Settlement amount is stored in NGN; system does not perform currency conversion
  - [ ] Trade is selected from the same list of 15 trades as SkillProof (ensuring consistency)

### FR2: Apprentice Confirmation via USSD
- **Description**: Apprentice reviews registered terms and confirms or disputes them
- **Channel**: USSD (initiated by SMS prompt)
- **Inputs**: Agreement ID (from SMS), confirmation of each term (agree/disagree)
- **Outputs**: Agreement status updated to "Mutually Confirmed" or "Discrepancy Flagged"
- **Acceptance Criteria**:
  - [ ] Apprentice sees all key terms on USSD screens: master name, trade, duration, settlement amount, settlement type
  - [ ] Apprentice can confirm all terms in 3-4 USSD screens
  - [ ] If apprentice disagrees with any term: system records the apprentice's version alongside the master's version
  - [ ] If apprentice confirms all terms: agreement status changes to "Mutually Confirmed" and master receives SMS notification
  - [ ] Apprentice has 30 days to respond; after 30 days with no response, status remains "Pending Apprentice Confirmation"
  - [ ] Apprentice can re-confirm (resend confirmation) if initial session timed out

### FR3: Witness Confirmation via USSD
- **Description**: Named witnesses confirm they witnessed the agreement
- **Channel**: USSD (initiated by SMS prompt)
- **Inputs**: Agreement ID, confirmation (Yes/No)
- **Outputs**: Witness confirmation status updated; witness record linked to agreement
- **Acceptance Criteria**:
  - [ ] Witness receives SMS within 60 seconds of agreement registration
  - [ ] Witness confirmation completes in 2 USSD screens
  - [ ] Witness sees: master name, apprentice name, trade, duration (does NOT see settlement amount — privacy protection)
  - [ ] If witness confirms: record shows "Witnessed by [Name] on [Date]"
  - [ ] If witness denies: record shows "Named witness denied witnessing" and master is notified
  - [ ] Maximum 3 witnesses per agreement

### FR4: Agreement Lookup via USSD
- **Description**: Any party (master, apprentice, witness, or third party) can look up an agreement by ID
- **Channel**: USSD
- **Inputs**: Agreement ID
- **Outputs**: Agreement summary: parties, trade, duration, start date, expected completion, status (Pending/Confirmed/Completed/Disputed), number of witness confirmations
- **Acceptance Criteria**:
  - [ ] Lookup displays on 1-2 USSD screens
  - [ ] Settlement amount is ONLY visible to master and apprentice (verified by phone number match), NOT to third parties
  - [ ] Third-party lookup shows: parties, trade, duration, status, witness count — but NOT settlement amount
  - [ ] Response time: < 2 seconds
  - [ ] If Agreement ID not found: "Agreement not found. Check ID and try again."

### FR5: Phone Number-Based Accounts
- **Description**: All accounts are tied to phone numbers, auto-detected from USSD session
- **Channel**: USSD
- **Inputs**: Phone number (auto-detected)
- **Outputs**: Account creation or recognition; display of user's agreements
- **Acceptance Criteria**:
  - [ ] Returning user sees "Welcome back, [Name]. Your agreements:" with list of active agreements
  - [ ] Master sees all agreements where they are the master
  - [ ] Apprentice sees all agreements where they are the apprentice
  - [ ] No email, password, or OTP required
  - [ ] Works across all 4 Nigerian networks

### FR6: Data Integrity & Immutability
- **Description**: Once confirmed, agreement terms cannot be altered; only new records can be appended
- **Channel**: Backend
- **Inputs**: N/A (system behavior)
- **Outputs**: Immutable agreement records with full audit trail
- **Acceptance Criteria**:
  - [ ] Original registered terms are never overwritten (append-only)
  - [ ] If either party disputes a term after confirmation, the dispute is recorded as a new entry, not an edit
  - [ ] All records have timestamps and phone number provenance
  - [ ] Soft delete only — records are never permanently removed
  - [ ] Database audit log tracks every access and modification

### SHOULD Have — Month 2-3

### FR7: Annual Check-in via USSD
- **Description**: On each anniversary of the start date, both parties confirm the apprenticeship is on track
- **Channel**: USSD (triggered by SMS reminder)
- **Inputs**: Confirmation (1=On track, 2=Issues, 3=Ended early)
- **Outputs**: Check-in record appended to agreement; alert if discrepancy
- **Acceptance Criteria**:
  - [ ] SMS reminder sent to both master and apprentice 7 days before anniversary
  - [ ] Check-in completes in 2 USSD screens
  - [ ] If both confirm "on track": check-in logged as "Year X — Confirmed by both parties"
  - [ ] If either reports issues: system records the concern and notifies the other party
  - [ ] If either reports "ended early": agreement status changes to "Terminated Early" with date and reason
  - [ ] Missing check-in (no response from either party within 14 days) logged as "Year X — No response from [Party]"

### FR8: Multiple Apprentice Management (Master View)
- **Description**: Master can view and manage all their active apprenticeships from a single USSD session
- **Channel**: USSD
- **Inputs**: None (auto-identified by phone number)
- **Outputs**: List of all active agreements with status summary
- **Acceptance Criteria**:
  - [ ] Master sees numbered list of apprentices with: name, trade, year X of Y, status
  - [ ] Can select any apprentice to see full agreement details
  - [ ] Works for masters with up to 10 concurrent apprentices (pagination for >5)

### FR9: Completion Initiation by Master
- **Description**: Master initiates the completion and settlement process
- **Channel**: USSD
- **Inputs**: Agreement ID, settlement amount actually paid, settlement form, date of settlement
- **Outputs**: Completion record created; SMS to apprentice for confirmation
- **Acceptance Criteria**:
  - [ ] Master selects from their active agreements (not entering ID manually)
  - [ ] System compares actual settlement to agreed settlement and displays any difference
  - [ ] Completes in 4 USSD screens
  - [ ] Apprentice receives SMS with completion details and prompt to confirm

### FR10: Apprentice Completion Confirmation
- **Description**: Apprentice confirms they received the settlement and the apprenticeship is complete
- **Channel**: USSD (initiated by SMS)
- **Inputs**: Confirmation (Yes/No/Partial), comments if Partial or No
- **Outputs**: Agreement status updated; completion certificate generated if both confirm
- **Acceptance Criteria**:
  - [ ] If apprentice confirms: agreement status becomes "Completed and Settled"
  - [ ] If apprentice disputes: system records the dispute with details, status becomes "Settlement Disputed"
  - [ ] Completion certificate is a unique verification code (e.g., MB-CERT-2029-00042) that can be looked up via USSD
  - [ ] Certificate lookup shows: apprentice name, trade, master name, duration served, completion date, settlement status

### COULD Have — Month 4-6

### FR11: Dispute Documentation
- **Description**: Either party can formally log a dispute against the agreement
- **Channel**: USSD
- **Inputs**: Agreement ID, nature of dispute (duration, settlement amount, training quality, other), brief description
- **Outputs**: Dispute record created; other party and witnesses notified via SMS
- **Acceptance Criteria**:
  - [ ] Dispute is recorded with timestamp and disputing party's phone number
  - [ ] Other party receives SMS: "A dispute has been raised on Agreement [ID]. Dial *XXX# to view."
  - [ ] Witnesses receive SMS: "A dispute has been raised on an agreement you witnessed. Your confirmation may be requested."
  - [ ] MasterBook does NOT arbitrate — it records and notifies

### FR12: Witness Query for Dispute Resolution
- **Description**: Community mediators or family elders can query witnesses about agreement terms
- **Channel**: USSD
- **Inputs**: Agreement ID, mediator phone number
- **Outputs**: System sends USSD prompts to witnesses asking them to reconfirm specific terms
- **Acceptance Criteria**:
  - [ ] Requires either master or apprentice to authorize the mediator query
  - [ ] Witness receives: "Please reconfirm: did [Master] and [Apprentice] agree to [X years] for [Trade]? 1=Yes 2=No 3=Don't remember"
  - [ ] Witness responses are logged and visible to both parties

### FR13: Integration with SkillProof
- **Description**: Completed MasterBook apprenticeship automatically creates or updates SkillProof profile
- **Channel**: Backend (automatic)
- **Inputs**: Completed agreement data
- **Outputs**: SkillProof artisan registration with "Training Verified via MasterBook"
- **Acceptance Criteria**:
  - [ ] Apprentice receives SMS: "Your apprenticeship completion is now on SkillProof. Your artisan ID: [SP-XX-XXX-XXXXX]. Customers can check your verified training."
  - [ ] SkillProof profile shows "Training verified by [Master Name] via MasterBook ([X years] in [Trade])"
  - [ ] Only triggered when agreement status is "Completed and Settled"

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Mobile app | USSD-only product. Many masters and apprentices use feature phones. |
| Web dashboard | Neither persona uses web browsers for business purposes. |
| Legal contract generation | MasterBook is a record system, not a legal service. Adding legal language requires a lawyer and creates liability. |
| Settlement escrow / financial holding | Requires financial services licensing and capital. Out of scope. |
| Dispute arbitration | MasterBook records and notifies. It does not judge or arbitrate. That is the community's role. |
| Biometric verification | USSD cannot capture biometrics. Phone number + witness confirmation is sufficient. |
| Multi-currency settlement tracking | Settlements are in NGN. USD equivalents are not relevant for the target segment. |
| Formal certification (NVQ-equivalent) | Requires government partnership that does not exist yet. Phase 4+ at earliest. |

---

## 7. Non-Functional Requirements

### NFR1: Performance
- USSD response time: < 2 seconds per screen
- SMS delivery for confirmation prompts: < 60 seconds
- Agreement lookup: < 500ms database query
- System must handle 200 concurrent USSD sessions without degradation
- Annual check-in batch processing (sending reminders): completes in < 30 minutes for 100K agreements

### NFR2: Offline/Low-Bandwidth
- USSD is network-dependent; no offline mode possible
- All data is server-side; no client-side storage
- SMS fallback for all notifications (does not require data connection)
- No web component — no bandwidth considerations for MVP

### NFR3: Security
- Phone number authentication via network-level USSD session
- Settlement amounts encrypted at rest (AES-256) — this is financially sensitive data
- Settlement amount visible only to master and apprentice (phone number verification)
- Third-party lookups show status but NOT financial details
- Rate limiting: maximum 10 agreement registrations per phone number per day
- NDPR compliance from day one
- Full data deletion available via USSD ("DELETE MY AGREEMENTS" with confirmation)
- Audit log on all data access (who looked up what, when)

### NFR4: Scalability
- Database design supports 1M+ agreement records
- Anniversary-based check-in triggers must scale to 10,000+ daily SMS sends
- Supabase free tier supports MVP; upgrade at 5,000 agreements
- Stateless USSD session handling (Africa's Talking manages session state)

### NFR5: Accessibility
- USSD works on 100% of mobile connections including 42% on 2G
- No smartphone required for any function
- No internet data required for any function
- Menu text in simple English; settlement-related screens also in Pidgin
- Numeric selection for all menus (no text input where avoidable, except names and amounts)
- Short number memorability: USSD code should be simple and memorable

### NFR6: Regional
- State-level location coding (37 states including FCT)
- Trade categories aligned with SkillProof (15 predefined trades)
- English and Pidgin English for USSD prompts
- Future: Igbo and Yoruba language options (COULD have)
- Date format: Month/Year for apprenticeship start dates (day precision is not needed for multi-year agreements)

---

## 8. Key Screens & UX

### Master Agreement Registration Flow

```
Dial *384*MB#

Screen 1:
Welcome to MasterBook.
Record your apprenticeship.
1. Register new apprentice
2. View my apprentices
3. Complete an apprenticeship
4. I am an apprentice

> 1

Screen 2:
Enter apprentice full name:
> Chidera Nwosu

Screen 3:
Apprentice phone number:
> 08098765432

Screen 4:
Select trade:
1. Auto parts trading
2. Electrician
3. Plumber
4. Welder
5. Mechanic
6. More trades...

> 1

Screen 5:
Agreed duration (years):
1. 3 years
2. 4 years
3. 5 years
4. 6 years
5. 7 years

> 3

Screen 6:
Start month/year:
> 03/2024

Screen 7:
Settlement amount (Naira):
> 3000000

Screen 8:
Settlement type:
1. Cash only
2. Goods/stock only
3. Cash + Goods

> 3

Screen 9:
Witness 1 name & phone:
(Enter as: Name,Phone)
> Obi Nwosu,08012345678

Screen 10:
Add another witness?
1. Yes
2. No, finish registration

> 2

Screen 11:
Registration complete!
Agreement ID: MB-ANB-2026-00042
Chidera Nwosu will receive SMS
to confirm terms.
Witness Obi Nwosu will be
notified.

Keep this ID safe!
```

Note: This flow uses 11 screens, exceeding the ideal 5-7. Mitigation: combine screens where possible (name + phone on one screen), and accept that registration is a one-time event where users will tolerate a longer flow.

### Apprentice Confirmation Flow

```
SMS received:
"MasterBook: Kenneth Okafor has
registered an apprenticeship with
you. Agreement ID: MB-ANB-2026-00042.
Confirm terms: dial *384*MB*CONFIRM#"

Dial *384*MB*CONFIRM#

Screen 1:
Agreement MB-ANB-2026-00042
Master: Kenneth Okafor
Trade: Auto parts trading
Duration: 5 years
Start: March 2024
Settlement: N3,000,000 (Cash+Goods)

1. All terms correct
2. I disagree with a term

> 1

Screen 2:
Terms confirmed!
This agreement is now
MUTUALLY CONFIRMED.
Both you and Kenneth Okafor
have a record of these terms.

Your record is safe with
MasterBook.
```

### Witness Confirmation Flow

```
SMS received:
"MasterBook: You are named as
witness to apprenticeship between
Kenneth Okafor and Chidera Nwosu.
Confirm: dial *384*MB*WITNESS#"

Dial *384*MB*WITNESS#

Screen 1:
Agreement MB-ANB-2026-00042
Master: Kenneth Okafor
Apprentice: Chidera Nwosu
Trade: Auto parts trading
Duration: 5 years

Did you witness this agreement?
1. Yes
2. No

> 1

Screen 2:
Thank you! Your witness
confirmation is recorded.
You may be contacted if any
dispute arises.
```

### Annual Check-in Flow

```
SMS received (on anniversary):
"MasterBook: Year 2 check-in for
apprenticeship with Kenneth Okafor.
Is everything on track?
Dial *384*MB*CHECKIN#"

Dial *384*MB*CHECKIN#

Screen 1:
Year 2 Check-in
Agreement: MB-ANB-2026-00042
Master: Kenneth Okafor
3 years remaining.

1. On track, all good
2. There are some issues
3. Apprenticeship has ended

> 1

Screen 2:
Year 2 check-in recorded.
Next check-in: March 2027.
Both you and your master
have confirmed all is well.
```

### Agreement Lookup Flow

```
Dial *384*MB#

Screen 1:
Welcome to MasterBook.
1. Register new apprentice
2. View my apprentices
3. Complete an apprenticeship
4. I am an apprentice

> 4

Screen 2:
Your agreements:
1. Kenneth Okafor - Auto parts
   Year 2 of 5 - CONFIRMED
2. (No other agreements)

Select for details:
> 1

Screen 3:
MB-ANB-2026-00042
Master: Kenneth Okafor
Trade: Auto parts trading
Duration: 5 years (2 completed)
Settlement: N3,000,000
Status: MUTUALLY CONFIRMED
Witnesses: 1 confirmed
Check-ins: Year 1 ✓ Year 2 ✓
```

### Error Handling

- **Agreement not found:** "No agreement with that ID. Check the ID and try again. Format: MB-XXX-YYYY-NNNNN"
- **Duplicate registration:** "An agreement between you and [Apprentice Name] already exists (ID: [MB-XXX-...]). Dial *384*MB# and select 'View my apprentices' to see it."
- **Session timeout:** Registration is complex (11 screens). If timeout occurs, SMS is sent: "Your registration was not completed. Dial *384*MB# to start again."
- **Apprentice already in active apprenticeship:** "This phone number is already linked to an active apprenticeship with [Master Name]. An apprentice can only have one active agreement."

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| USSD Integration | Africa's Talking | Session management; works on all networks; pay-per-session |
| SMS (Outbound) | Termii | Confirmation prompts, anniversary reminders, dispute notifications |
| Backend | Next.js 14 API Routes | Single deployment; USSD callback webhooks; TypeScript |
| Database | Supabase PostgreSQL | Free tier for MVP; RLS for data isolation; audit logging |
| Hosting | Vercel | Free tier; auto-scaling; cron jobs for anniversary triggers |
| Monitoring | PostHog + Sentry | Track: registration → confirmation → check-in → completion; error tracking |
| Scheduled Jobs | Vercel Cron | Daily: check for anniversary dates, send check-in reminders; Weekly: status reports |

### Database Schema

```sql
-- Masters (account = phone number)
masters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,
  full_name text NOT NULL,
  trade text NOT NULL,
  lga text,
  state text,
  total_apprentices_settled integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  last_active_at timestamptz DEFAULT now()
)

-- Apprentices (account = phone number)
apprentices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,
  full_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  last_active_at timestamptz DEFAULT now()
)

-- Agreements (core record — append-only terms)
agreements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agreement_id text UNIQUE NOT NULL,          -- MB-ANB-2026-00042
  master_id uuid REFERENCES masters NOT NULL,
  apprentice_id uuid REFERENCES apprentices NOT NULL,
  trade text NOT NULL,
  duration_years integer NOT NULL CHECK (duration_years BETWEEN 1 AND 10),
  start_month integer NOT NULL,               -- 1-12
  start_year integer NOT NULL,                -- 2020-2035
  expected_completion_date date NOT NULL,      -- computed from start + duration
  settlement_amount decimal(15,2) NOT NULL,
  settlement_type text NOT NULL CHECK (settlement_type IN ('cash', 'goods', 'both')),
  master_confirmed boolean DEFAULT true,      -- master registers, so auto-confirmed
  apprentice_confirmed boolean DEFAULT false,
  apprentice_confirmed_at timestamptz,
  apprentice_disputed_terms jsonb,            -- stores apprentice's version if disputed
  status text DEFAULT 'pending_confirmation', -- pending_confirmation, confirmed, active, completed, terminated, disputed
  completed_at timestamptz,
  settlement_actual_amount decimal(15,2),     -- what was actually settled
  settlement_actual_type text,
  settlement_date date,
  completion_certificate_code text,           -- MB-CERT-YYYY-NNNNN
  created_at timestamptz DEFAULT now()
)

-- Witnesses
witnesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agreement_id uuid REFERENCES agreements NOT NULL,
  full_name text NOT NULL,
  phone_number text NOT NULL,
  confirmed boolean DEFAULT false,
  confirmed_at timestamptz,
  denied boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
)

-- Check-ins (annual progress records)
checkins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agreement_id uuid REFERENCES agreements NOT NULL,
  year_number integer NOT NULL,               -- 1, 2, 3, etc.
  master_status text,                         -- 'on_track', 'issues', 'ended'
  master_comment text,
  master_responded_at timestamptz,
  apprentice_status text,
  apprentice_comment text,
  apprentice_responded_at timestamptz,
  reminder_sent_at timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(agreement_id, year_number)
)

-- Disputes (append-only log)
disputes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  agreement_id uuid REFERENCES agreements NOT NULL,
  raised_by text NOT NULL,                    -- 'master' or 'apprentice'
  raised_by_phone text NOT NULL,
  dispute_type text NOT NULL,                 -- 'duration', 'settlement_amount', 'training_quality', 'other'
  description text,
  status text DEFAULT 'open',                 -- 'open', 'resolved', 'escalated'
  created_at timestamptz DEFAULT now()
)

-- Audit log (every data access)
audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action text NOT NULL,                       -- 'lookup', 'register', 'confirm', 'checkin', 'complete'
  agreement_id uuid REFERENCES agreements,
  actor_phone text NOT NULL,
  actor_role text NOT NULL,                   -- 'master', 'apprentice', 'witness', 'third_party'
  details jsonb,
  created_at timestamptz DEFAULT now()
)
```

### USSD Session Architecture

```
USSD request (*384*MB#)
  → Africa's Talking callback to Vercel API Route (/api/webhooks/ussd/masterbook)
  → Parse session ID + phone number + user input
  → Determine user role (master or apprentice) by phone number lookup
  → Route to appropriate flow (register, confirm, checkin, lookup, complete)
  → Execute database operation (INSERT for new records, UPDATE for confirmations)
  → Return USSD response (max 160 chars)

Multi-screen registration flow:
  → Africa's Talking maintains session state across screens
  → Each screen response is a callback to the same endpoint
  → Session data accumulated until final confirmation
  → Final screen triggers: INSERT agreement + SEND SMS to apprentice + SEND SMS to witnesses
```

### Anniversary Check-in Trigger

```
Daily cron job (Vercel Cron, runs at 8am WAT):
  → Query agreements WHERE:
    - status = 'active' OR status = 'confirmed'
    - anniversary date = today (start_month + year matches)
    - no check-in record exists for this year_number
  → For each matching agreement:
    - Create check-in record (year_number, reminder_sent_at = now)
    - Send SMS to master with check-in prompt
    - Send SMS to apprentice with check-in prompt
  → If check-in created 14 days ago with no responses:
    - Log as "No response" check-in
```

---

## 10. Data Asset Strategy

### What Data MasterBook Generates That Didn't Exist Before

1. **Apprenticeship Agreement Registry:** The first database documenting who is training whom, in what trade, for how long, with what settlement terms. This data does not exist in any form — not with the government, not with trade associations, not with any private company.

2. **Settlement Economics Database:** What settlement amounts are typical by trade, region, and duration? No one knows this today. MasterBook creates the first dataset on apprenticeship settlement economics. This informs government policy, lender pricing, and economic research.

3. **Apprenticeship Duration Patterns:** How long do apprenticeships actually last by trade? Do 5-year agreements typically complete in 5 years or extend to 7? This data reveals the reality versus the stated intention.

4. **Dispute Frequency and Type Data:** What percentage of apprenticeships have disputes? What are the most common dispute types by trade and region? This data enables preventive intervention by community organizations and trade associations.

5. **Apprenticeship Completion Credentials:** Verifiable certificates that an individual completed a specific apprenticeship under a specific master. This credential has never existed in digital form.

### Cross-Product Data Flows

- **MasterBook → SkillProof:** Completed MasterBook apprenticeship = verified training on SkillProof. MasterBook documents the training input; SkillProof documents the career output. Together: complete artisan pipeline from training to market performance.
- **MasterBook → VendorScore:** Apprenticeship completion is a reliability signal. An apprentice who completed a 5-year commitment is demonstrably reliable. A master who has settled 10+ apprentices is demonstrably creditworthy. Both data points feed credit scoring.
- **MasterBook → Apprenticeship Settlement Financing (Tier C):** The most direct feed. MasterBook completion data is the credit signal for settlement loans. A master with documented agreement to settle N3M, confirmed by witnesses, with 4 successful annual check-ins, is a lending candidate. Without MasterBook data, this loan product cannot exist.
- **MasterBook → KasaBook:** Post-settlement apprentices who start their own businesses use KasaBook to track their trade. MasterBook → KasaBook creates a longitudinal view of the artisan economy from training to independent business operation.

### Who Would License This Data

| Buyer | Data Needed | Willingness to Pay |
|-------|------------|-------------------|
| Microfinance banks (LAPO, Accion) | Apprenticeship completion rates by trade for settlement loan underwriting | N3-15M/year |
| Government (NBTE, state govts) | Apprenticeship census data for vocational policy planning | N1-5M/year |
| Trade associations | Settlement benchmarks by trade and region | N500K-2M/year |
| Development organizations (World Bank, GIZ) | Informal apprenticeship system research data | N2-10M/year (grant-funded) |
| Insurance companies | Apprenticeship dispute frequency for trade credit insurance | N1-5M/year |

### Privacy/Anonymization Approach

- Individual agreement terms (especially settlement amounts) are strictly private to the two parties.
- Aggregate data is licensable: "Average electrician apprenticeship settlement in Anambra is N2.8M for a 5-year term" — this reveals no individual information.
- Witnesses can only see non-financial terms (trade, duration, parties).
- Third-party lookups show status but NOT settlement amounts.
- Full data deletion available to both parties (with mutual consent for shared records).

---

## 11. Value Chain Design

### What Infrastructure MasterBook Builds That Doesn't Exist

1. **Documentation infrastructure:** The mechanism for recording informal agreements in a verifiable, queryable format. Today, the only "documentation" for apprenticeships is human memory. MasterBook creates digital records that persist beyond human recall.

2. **Credential infrastructure:** Completion certificates that can be verified by any phone. Today, an apprentice who completed 5 years of training has zero proof. MasterBook creates Nigeria's first apprenticeship credential system.

3. **Dispute prevention infrastructure:** By recording terms at the start and conducting annual check-ins, MasterBook reduces disputes by creating shared records before disagreements arise. Prevention is cheaper and more effective than resolution.

### Four Pillars Assessment

| Pillar | Application |
|--------|------------|
| **Resource commitment** | Investment in understanding the cultural nuances of apprenticeship agreements across Nigeria's ethnic groups. USSD infrastructure for a multi-year engagement cycle (not just a one-time transaction). This cultural and technical investment cannot be replicated quickly. |
| **Cross-market knowledge** | No direct international precedent exists for this product — the Nigerian apprenticeship system is unique in its scale and informality. However, the pattern of digitizing informal agreements (land titles, marriage records, savings circles) has been proven in other African contexts. MasterBook adapts the principle to apprenticeships. |
| **Value-chain coordination** | MasterBook coordinates masters, apprentices, witnesses, and (eventually) lenders into a multi-party documentation system. Each participant contributes data that the others need. The coordination itself is the moat. |
| **Transferability** | Documentation infrastructure built for apprenticeships can serve any informal multi-year agreement: land leasing, equipment sharing, cooperative membership, extended family financial arrangements. The system is agreement-agnostic. |

### Externalities

- **Family relationship preservation:** Documented agreements reduce disputes, which reduces family and community fractures.
- **Apprenticeship system strengthening:** When apprentices know their terms are recorded, they are more willing to enter apprenticeships. When masters know their settlements are documented, they are more willing to take apprentices. Documentation strengthens the system itself.
- **Financial inclusion:** Apprenticeship completion credentials enable formal credit access for a population that has been entirely excluded from formal financial services.
- **Policy input:** Aggregate MasterBook data gives government its first empirical view of the informal apprenticeship system, enabling evidence-based vocational training policy.

---

## 12. Pricing & Unit Economics

### Pricing Model

**Free Tier (Phase 1 — First 6 Months)**
- Agreement registration (master pays nothing)
- Apprentice confirmation
- Witness confirmation
- Agreement lookup
- Annual check-ins

For the first 6 months, everything is free. Trust-building is the priority. Charging upfront for a product that asks people to document sensitive financial agreements would kill adoption. The free phase must establish that MasterBook is safe, useful, and trustworthy.

**Registration Fee — N500-1,000 ($0.33-0.65) per agreement (Phase 2)**
- One-time fee at registration
- Covers the full apprenticeship lifecycle (all check-ins, completion, certificate)
- Framing: "Less than 0.05% of your settlement amount. A small price for 5 years of protection."
- Payable by master, apprentice, or family (via airtime deduction or USSD payment)

**Completion Certificate Fee — N1,000-2,000 ($0.65-1.30) per certificate (Phase 2)**
- One-time fee at completion
- Generates verifiable completion code
- Payable by the settled apprentice (who has just received N2-5M in settlement and can afford this)

**Institutional Tier — N50-100K/month ($33-65) (Phase 3)**
- Trade associations managing multiple apprenticeships
- Bulk registration discounts
- Aggregate reporting for association leaders
- API access for partner organizations

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| USSD cost per registration session | N10-20 | ~2 sessions (master + apprentice) at N5-10 each |
| SMS cost per registration | N12-20 | Apprentice notification + 1-2 witness notifications at N4-5 each |
| USSD cost per annual check-in | N10-20 | 2 sessions (master + apprentice) |
| SMS cost per check-in reminder | N8-10 | 2 reminder SMS |
| Supabase cost (MVP) | N0 | Free tier |
| **Total cost per agreement (Year 1)** | **N30-60** | Registration + first check-in + SMS |
| **Total cost per agreement (full lifecycle, 5 years)** | **N150-300** | Registration + 5 check-ins + completion + SMS |
| **Registration fee revenue** | **N500-1,000** | Phase 2 pricing |
| **Gross margin per agreement (lifecycle)** | **70-80%** | Revenue easily covers USSD + SMS costs |

### Revenue Targets by Milestone

| Milestone | Agreements | Revenue (NGN) | Revenue (USD) |
|-----------|-----------|---------------|---------------|
| Month 3 | 100 | N0 (free phase) | $0 |
| Month 6 | 500 | N0 (free phase) | $0 |
| Month 9 | 1,000 | N500K-1M | $325-650 |
| Month 12 | 2,500 | N1.25-2.5M | $815-1,625 |
| Month 24 | 10,000 | N5-10M + data licensing | $3,250-6,500 |

### Break-Even Analysis

- Monthly fixed costs: ~N10-15K (Supabase Pro, Vercel, monitoring)
- Variable costs at 1,000 agreements: ~N30-60K/year (USSD + SMS)
- Break-even requires: ~100 paid registrations at N750 avg = N75K — covers a full year of fixed costs
- Realistic break-even: Month 10-12 after free phase ends

### Cost Structure Test

This is fundamentally different from any existing contract documentation service. A lawyer charges N50-200K for a formal contract. MasterBook charges N500-1,000 for a digital record with witness verification. The cost structure is 100x cheaper because: no lawyer is involved, no paper is generated, no physical meeting is required, and USSD sessions cost N5-10 each. A law firm could never profitably serve this market at this price point — their overhead and per-hour billing model makes it structurally impossible. This is the cost structure moat.

---

## 13. Go-to-Market: First 10 Customers

### The Core Insight: Apprenticeship Agreements Happen in Concentrated Communities

Apprenticeships are not randomly distributed. They cluster in specific markets, specific trades, and specific cultural communities. The first 10 customers will come from direct outreach within these clusters.

### Channel 1: Trade Association Leaders (Primary)

**The play:** Every major market has trade associations (e.g., Onitsha Main Market Traders Association, Aba Auto Parts Dealers Association). These associations are already involved in apprenticeship agreements — they sometimes witness agreements and mediate disputes. Approach the association chairman with: "Your members settle apprentices every year. Disputes damage your community. MasterBook is a free way to record agreements so disputes don't happen. Can I present at your next meeting?"

**Target associations:**
- Onitsha Main Market Traders Association (auto parts)
- Aba Shoe and Leather Products Association
- Computer Village Traders Association (Lagos)
- Alaba International Market Association (electronics)

**Expected conversion:** Each association meeting reaches 30-100 members. 5-10% will have an active or upcoming apprenticeship to register. 3-10 registrations per meeting.

### Channel 2: Family Network (Port Harcourt)

**The play:** The builder's family network in Port Harcourt knows masters who have apprentices. Personal introduction and demonstration. "Uncle, I built something that records your apprenticeship agreements. Let me show you how it works."

**Target:** 5-10 personal connections who are either masters or have family members in apprenticeships.

### Channel 3: Church/Mosque Business Fellowships

**The play:** Religious institutions are deeply involved in apprenticeship placements — pastors and imams often broker arrangements between families. Present at church business fellowships: "Your members place their children as apprentices. The agreements are verbal. When disputes happen, the church is asked to mediate with no records. MasterBook creates the record before the dispute."

**Target:** 3-5 religious institutions with active apprenticeship involvement. Each may produce 5-15 registrations from congregants.

### Channel 4: Settling Masters (Reverse Entry)

**The play:** Find masters who are about to settle an apprentice. Offer them MasterBook to document the settlement so there is proof they settled fairly. "Record it on MasterBook so your apprentice can never say you didn't settle them."

This is a powerful entry point because the master's motivation (protecting their own reputation) aligns perfectly with the product's value proposition.

### Channel 5: SkillProof Cross-Registration

**The play:** If SkillProof launches first, every artisan who registers and names a master artisan is a MasterBook lead. "You trained under Oga Kenneth for 5 years? Do you have a record of that agreement? Register it on MasterBook: dial *384*MB#."

### Channel Summary

| Channel | Month 1 | Month 2 | Month 3 | Cost |
|---------|---------|---------|---------|------|
| Trade association leaders | 10-20 | 20-40 | 30-50 | N0 (free presentations) |
| Family network (PH) | 5-10 | 3-5 | 0 | N0 |
| Church/mosque fellowships | 0 | 10-20 | 15-30 | N0 |
| Settling masters | 0 | 5-10 | 10-20 | N0 |
| SkillProof cross-registration | 0 | 0 | 10-30 | N0 |
| **Total agreements registered** | **15-30** | **38-75** | **65-130** | **N20-40K total (transport)** |

### What NOT to Do

- **Do not position as a "contract."** The word "contract" implies distrust and formality. Position as a "record" or "book" — something both parties keep for safety.
- **Do not target formal employers.** Corporate apprenticeships have HR departments and contracts. MasterBook is for informal arrangements.
- **Do not lead with settlement disputes.** Nobody wants to start an apprenticeship thinking about disputes. Lead with: "Keep a record for both parties' peace of mind."
- **Do not run digital ads.** The target users are not discoverable through digital marketing.
- **Do not charge during the first 6 months.** Trust must be established before monetization.

---

## 14. Risks & Mitigations

### Risk 1: Cultural Resistance — "Writing It Down Means You Don't Trust Me"

**Likelihood:** High. In many communities, suggesting documentation implies distrust in the master's word. This cultural norm is the single biggest adoption barrier.
**Impact:** Masters refuse to register. Families feel insulted by the suggestion.
**Mitigations:**
- Frame as protection for BOTH parties, not just the apprentice: "Master, this protects you too. If your apprentice ever says you didn't settle them, MasterBook is your proof."
- Launch through trusted intermediaries (trade associations, religious leaders, family elders) who can endorse the product
- Case study approach: document 2-3 real dispute stories (anonymized) where both parties wish they had a record
- Avoid the word "contract" entirely. Use "record" or "book" — culturally neutral terms

### Risk 2: Low Apprentice Response Rate

**Likelihood:** High. Apprentices are junior in the power dynamic. They may fear angering their master by participating in documentation. They may not respond to the confirmation SMS.
**Impact:** Agreements remain "Pending Confirmation" — not mutually confirmed, reducing value.
**Mitigations:**
- Register both parties at the same time where possible (during trade association meetings, family gatherings)
- Frame the confirmation as something the master WANTS: "Your master registered your agreement. Confirm it so both of you have a record."
- Allow masters to initiate a reminder prompt for their apprentice
- Accept one-sided registration as valuable (even master-only registration is better than nothing)

### Risk 3: Inaccurate Settlement Amounts

**Likelihood:** Medium. Masters may register lower settlement amounts than verbally agreed, knowing the digital record might be referenced later.
**Impact:** MasterBook records become unreliable. Apprentices lose trust.
**Mitigations:**
- Dual-party confirmation: apprentice sees and confirms the amount. If they disagree, both versions are recorded.
- Witness confirmation: witnesses can be queried about the terms
- Cultural norm: in most apprenticeship traditions, the settlement discussion happens with witnesses present. MasterBook mirrors this by involving witnesses.

### Risk 4: Data Sensitivity — Settlement Amounts Are Highly Private

**Likelihood:** High. Settlement amounts are considered private between the master and apprentice. If this data were to leak, it could cause community problems (e.g., an apprentice learns their neighbor received N5M while they received N2M).
**Impact:** Trust collapse. Masters refuse to register.
**Mitigations:**
- Settlement amounts are encrypted at rest
- Third-party lookups (anyone besides master/apprentice) show status but NOT amounts
- Even witnesses do not see settlement amounts via USSD
- Privacy policy explicitly states: "Settlement amounts are visible only to master and apprentice"
- No aggregate settlement data is published at a granularity that could identify individuals

### Risk 5: USSD Session Length for Registration

**Likelihood:** High. The registration flow is 11 screens — longer than the ideal 5-7 for USSD. Session timeouts (180 seconds) may cause incomplete registrations.
**Impact:** Frustrated users who start but cannot complete registration.
**Mitigations:**
- Optimize flow by combining screens (name + phone on one screen)
- If session times out: send SMS with a "continue registration" USSD code that resumes from where they left off
- Store partial registrations server-side, keyed by phone number
- Accept that registration is a one-time event; users will tolerate longer flows for important actions

### Risk 6: Long Engagement Cycle

**Likelihood:** Certain. Apprenticeships last 3-7 years. The full value of MasterBook (completion certificate, settlement documentation) is not realized for years.
**Impact:** Difficult to demonstrate value in the short term. Revenue from completion certificates is years away.
**Mitigations:**
- Annual check-ins provide recurring engagement and demonstrate ongoing value
- Agreement lookup provides immediate value: "Your agreement is recorded and safe"
- Target masters who are about to settle (immediate completion value)
- Revenue during the waiting period comes from: new agreement registrations (continuous flow), data licensing (aggregate data at scale), and SkillProof integration
- Portfolio strategy: MasterBook's long engagement cycle is balanced by shorter-cycle products in the portfolio

### Risk 7: Regulatory Risk — Is This a Financial Agreement?

**Likelihood:** Low-Medium. MasterBook records agreements about future financial obligations (settlement payments). If regulators interpret this as a financial services activity, compliance requirements could be triggered.
**Impact:** Regulatory attention could require licensing or operational changes.
**Mitigations:**
- MasterBook does NOT process payments, hold funds, or guarantee settlements
- It is explicitly a record-keeping system, not a financial services platform
- Analogous to a diary or notebook — recording what was agreed is not a regulated activity
- If settlement financing (Tier C) is added later, it will be through a licensed lending partner
- Seek informal regulatory guidance before scaling beyond 10,000 agreements

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot attend apprenticeship agreements in person. Relies on family network in Port Harcourt and trade association leaders as ambassadors.
- **Budget: $0-5K:** Free tiers for all infrastructure. USSD and SMS are the primary costs.
- **Tech stack:** Next.js + Supabase + Africa's Talking + Termii. Shared with SkillProof and other USSD products on the USSD Business Toolkit Platform.
- **USSD character limits:** 160 characters per screen. Complex agreement terms must be condensed.
- **USSD session timeout:** 180 seconds. Long registration flow must fit.
- **Timeline:** MVP in 2-3 weeks. First registrations in Week 3-4.
- **No legal advice:** MasterBook is not a law firm. It cannot provide legal advice on apprenticeship terms or disputes.

### Assumptions

- **A1:** Masters will register apprenticeship agreements if the product is free and framed as mutual protection. *Test: 15+ registrations in first month without payment.*
- **A2:** Apprentices will confirm terms when prompted via SMS/USSD. *Test: 50% confirmation rate within 30 days of registration.*
- **A3:** Witnesses will confirm when prompted. *Test: 40% witness confirmation rate within 14 days.*
- **A4:** Annual check-in compliance will be > 30% (both parties respond). *Test: first check-in cycle data.*
- **A5:** Settlement amounts will be honestly reported because both parties and witnesses are involved. *Test: < 20% of agreements have discrepancies between master and apprentice versions.*
- **A6:** Africa's Talking USSD infrastructure handles the multi-screen registration flow reliably. *Test: < 10% session failure rate for full registration flow.*
- **A7:** The product concept is culturally acceptable to the primary target communities (Igbo, Yoruba apprenticeship traditions). *Test: qualitative feedback from first 20 users.*

### Out of Scope

| Item | Rationale |
|------|-----------|
| Legal contract generation | MasterBook is a record system, not a legal service |
| Settlement escrow or payment processing | Requires financial services licensing |
| Dispute arbitration or mediation | MasterBook records; community elders mediate |
| Formal vocational certification (NVQ) | Requires government partnership not yet established |
| Apprenticeship matching (connecting masters to apprentices) | Different product; MasterBook documents existing arrangements |
| Salary or stipend tracking during apprenticeship | Most apprenticeships are unpaid; tracking N0 is meaningless |
| Non-Nigerian apprenticeship systems | Nigeria-only for first 24 months |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] Master can register a complete apprenticeship agreement via USSD in under 3 minutes
- [ ] Apprentice receives confirmation SMS within 60 seconds of master completing registration
- [ ] Apprentice can confirm terms via USSD in under 60 seconds
- [ ] Witness receives SMS and can confirm via USSD in under 30 seconds
- [ ] Agreement lookup returns correct data in < 2 seconds
- [ ] 5 real agreements registered (not test accounts) with at least 3 having apprentice confirmation
- [ ] 2 real witnesses complete confirmation flow
- [ ] Data immutability verified: confirmed terms cannot be modified (only appended to)
- [ ] Settlement amounts are NOT visible in third-party lookups (privacy verified)
- [ ] System handles 20 concurrent USSD sessions without failure

### Success Metrics (3 Months Post-Launch)

- [ ] 100+ agreements registered
- [ ] 50+ agreements with dual-party (mutual) confirmation (50%+ confirmation rate)
- [ ] 20+ agreements with at least 1 witness confirmation
- [ ] Agreements span at least 5 different trades
- [ ] Agreements span at least 3 states
- [ ] 0 data breaches or privacy incidents
- [ ] User-reported cultural acceptability > 70% ("I would recommend MasterBook to a friend placing an apprentice")
- [ ] Data asset: database contains agreement records with settlement amount data for at least 3 trade categories, enabling first-ever analysis of apprenticeship economics

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 7 | 0.35 | USSD menu flows + Supabase database + Africa's Talking integration. More complex than a single-party product (3-party: master, apprentice, witness). MVP in 2-3 weeks. |
| Time to Revenue | 15% | 2 | 0.30 | Zero revenue for first 6 months (free trust-building phase). Registration fees start Month 7-9. Completion certificate revenue is years away (apprenticeships are 3-7 years). Slowest revenue timeline in the portfolio. |
| Market Size | 15% | 8 | 1.20 | 5-10M active apprenticeships with N2-5M average settlement = N10-50T in obligations. Large market but per-unit revenue is very small (N500-1,000 per registration). |
| Competition | 10% | 10 | 1.00 | Zero competition. No product anywhere in the world addresses informal apprenticeship documentation at this scale. This is a completely novel product category. |
| Skill Fit | 15% | 7 | 1.05 | USSD development, multi-party workflow management, and database design are within the builder's stack. Cultural understanding requires family network input. Dispute data analytics leverage AI/data skills. |
| Capital Required | 10% | 9 | 0.90 | Under $20/month infrastructure. USSD and SMS are the only variable costs. Total first-year budget under $1K (excluding transport for market visits). |
| Buyer Clarity | 20% | 4 | 0.80 | Buyers are individual masters placing apprentices — you cannot find them via any digital channel. Must go through trade associations, family networks, and religious institutions. The buyer is identifiable (masters in Onitsha, Aba, Lagos markets) but not reachable remotely. |
| Fintech Upside | 10% | 9 | 0.90 | MasterBook data is the foundation for Apprenticeship Settlement Financing (Tier C). A documented N3M settlement obligation with 4 years of annual check-ins is a lendable credit signal. This fintech product cannot exist without MasterBook data. The upside is enormous but distant (requires scale + time). |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.35 |
| Time to Revenue (15%) | 0.30 |
| Market Size (15%) | 1.20 |
| Competition (10%) | 1.00 |
| Skill Fit (15%) | 1.05 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 0.80 |
| Fintech Upside (10%) | 0.90 |
| **TOTAL** | **6.50 / 10** |

### Verdict: BUILD (Layer 1 Strategic Asset — Most Uniquely Nigerian Product)

A 6.50 score reflects a product with exceptional strategic value dragged down by execution difficulty (Buyer Clarity: 4) and slow revenue (Time to Revenue: 2). The competition score of 10/10 (literally zero competition worldwide) and the fintech upside of 9/10 (enables an entirely new lending category) make the strategic case overwhelming. MasterBook is the most uniquely Nigerian product in the portfolio — no other country has this system at this scale. Build it alongside SkillProof as complementary Layer 1 data collection products. Together they create the complete artisan career pipeline: MasterBook documents the training, SkillProof documents the career.

---

## 18. Disruption Self-Assessment

### Criterion 1: Targets Overlooked or Non-consuming Segments

**Rating: STRONG FIT**

5-10 million active Nigerian apprentices have zero contractual protection for multi-year, multi-million-naira commitments. They are not underserved by contract documentation systems — the entire concept of documenting informal apprenticeships does not exist. These are non-consumers in the purest possible sense: they have literally nothing, and no one has ever attempted to provide anything. Masters are equally non-consuming — no mechanism exists for them to prove they honored their settlement obligations.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First

**Rating: STRONG FIT**

A USSD-based record system with no legal enforceability, no escrow, no signatures, no biometrics. A corporate HR department would find it laughably primitive. But for Chidera and Oga Kenneth, a USSD record with dual-party confirmation and witness attestation is infinitely better than a verbal promise. It is "good enough" for the core job: ensuring both parties agree on the same terms and that an independent record exists. The deliberate sacrifice of legal enforceability is the correct trade-off — legal contracts are culturally inappropriate and financially inaccessible for this segment.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold

**Rating: STRONG FIT (New-Market)**

Pure new-market foothold. There is no existing market for apprenticeship documentation that MasterBook is undercutting. It is creating a category that has never existed. There are no incumbents. No government agency, no startup, no NGO provides this service. MasterBook creates first-time users of apprenticeship documentation — a completely novel product category specific to Nigeria's informal apprenticeship economy.

### Criterion 4: Reimagines the Value Chain

**Rating: STRONG FIT**

The value chain innovation is the three-party documentation loop built on USSD: master registers → apprentice confirms → witnesses attest → annual check-ins maintain → completion generates credential. This leverages existing social infrastructure (the cultural practice of having witnesses present at agreements) and digitizes it without requiring any new behavior or technology beyond dialing a USSD code. No formal legal system, no notary, no government office is required. The value chain runs entirely through the existing mobile phone network and the existing social trust network.

### Criterion 5: Prioritizes Scaling a Core Solution

**Rating: STRONG FIT**

The MVP is three functions: register agreement, confirm terms, record witness. No dispute resolution, no escrow, no skills tracking, no matching. Maximum distribution of the minimum documentation tool. Features come after 1,000 agreements, not before. The annual check-in, completion documentation, and SkillProof integration are Phase 2-3 additions — deliberate feature restraint to maximize initial distribution.

### Criterion 6: Demands a Different Cost Structure

**Rating: STRONG FIT**

MasterBook's cost per agreement lifecycle (5 years of documentation) is N150-300 (~$0.10-0.20). A lawyer charges N50-200K for a formal apprenticeship contract. MasterBook is 500-1,000x cheaper because: no lawyer, no paper, no physical meeting, no notarization. The cost structure is so fundamentally different that a legal services firm could never profitably offer this product. USSD sessions at N5-10 each and SMS at N4-5 each create a cost floor that is effectively zero compared to formal alternatives.

### Criterion 7: Converts Non-consumption into Growth

**Rating: STRONG FIT**

Every MasterBook registration is a first-time documentation event for a commitment that was previously entirely verbal. The TAM expands because of the product: apprenticeship documentation did not exist as a market before MasterBook. Growth comes from converting non-consumers (apprentices and masters with zero documentation), not from stealing users from lawyers or HR systems.

The economic ripple: documented apprenticeships → fewer disputes → more families willing to place apprentices → stronger apprenticeship system → more skilled workers → more business formation → economic growth. Additionally: documented settlement obligations → lendable credit signals → apprenticeship settlement financing becomes possible → capital flows to newly settled artisans → more business formation. Non-consumption to growth in its most direct form.

### Criterion 8: Can Mature to Surpass Mainstream Offerings

**Rating: PARTIAL FIT**

The maturation path: USSD records → annual check-ins → completion certificates → settlement financing → formal vocational credential system (if government partnership materializes). At scale, MasterBook could become the de facto apprenticeship management system for Nigeria, surpassing any formal vocational certification body because it covers the informal sector that formal bodies cannot reach. However, this outcome depends on: (a) achieving sufficient scale for data to be meaningful, (b) government willingness to recognize MasterBook credentials, and (c) cultural acceptance over multiple years. The path is credible but long and uncertain.

### Overall Assessment

| Criterion | Rating |
|-----------|--------|
| 1. Targets overlooked/non-consuming segments | STRONG FIT |
| 2. Appears deliberately "worse" but good enough | STRONG FIT |
| 3. Low-end or new-market foothold | STRONG FIT |
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

All three non-negotiable criteria are met. The partial fit on Criterion 8 reflects honest uncertainty about the path from informal USSD records to formal credential recognition — a multi-year journey that depends on factors beyond the product itself. The disruption model is sound; the maturation timeline is the open question.

---

## 19. MNC Anti-Pattern Check

| Pattern | Match? | Assessment |
|---------|--------|------------|
| **1. Phantom Middle Class** | NO MATCH | MasterBook targets apprentices earning N0/month and masters in informal markets. There is no middle-class assumption. The primary users are at the base of the economic pyramid. |
| **2. Push, Don't Pull** | NO MATCH | Strong pull signal: families already insist on having witnesses present, some write informal notes, WhatsApp voice notes are saved as makeshift evidence, and community elders are overwhelmed with mediation requests. People are actively seeking documentation — MasterBook digitizes what they already try to do manually. |
| **3. Infrastructure Entitlement** | NO MATCH | MasterBook assumes zero infrastructure: no contract law enforcement for informal agreements, no documentation system, no credential framework. It builds entirely on USSD (works on every phone) and existing social structures (witness traditions). No infrastructure is assumed to exist. |
| **4. Imported Management** | NO MATCH | No management to import. Solo founder with Nigerian family network and trade association relationships for local execution. The product's design is informed by deep understanding of Nigerian apprenticeship culture, not imported from a foreign market. |
| **5. Blame and Exit** | LOW RISK | MasterBook's value compounds over time (multi-year apprenticeships mean data gets richer every year). The long engagement cycle is a feature, not a bug — it creates data lock-in. There is no scenario where the builder exits and the data loses value. |
| **6. Premium Positioning in a Value Market** | NO MATCH | Free for the first 6 months. N500-1,000 registration fee is < 0.05% of the settlement amount. N1-2K completion certificate is trivial for someone who just received N2-5M. Pricing is at the absolute floor of the value market. |

**No MNC anti-patterns detected.** MasterBook is the most Nigeria-specific product in the entire portfolio. It addresses a system (Igba Boi and equivalents) that does not exist outside Nigeria at this scale. There is no foreign model being imported. The product is designed from the ground up for the cultural, economic, and technological reality of Nigerian informal apprenticeships.
