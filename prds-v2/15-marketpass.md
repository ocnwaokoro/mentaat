# PRD v2: MarketPass — Market Stall Ownership Registry

## 1. Executive Summary

Nigerian open market stalls are quasi-permanent assets worth N500,000 to N10M+, bought, sold, and inherited through handshakes, cash-in-envelope deals, and verbal agreements witnessed by market neighbors. No registry exists. No document exists. No record exists. When a dispute arises — an heir claims a stall, a buyer says they paid, a market union reassigns a stall to a political ally — the tribunal has nothing to reference. The stall owner cannot prove they own what they own. This is not a market with bad documentation. This is a market with zero documentation for assets worth significant money.

MarketPass is a USSD-based registry of market stall rights. A stall owner dials a USSD code, registers their stall (market name, stall number, date of acquisition, witness names), and receives an SMS confirmation with a unique registration code. When a stall is transferred (sold, gifted, inherited), both parties confirm the transfer via USSD. Market union leaders validate registrations and transfers, adding institutional legitimacy. The product creates the first digital record of informal commercial property rights in Nigeria.

**Disruption type:** New-market disruption. No market stall documentation system exists. MarketPass creates the category.

**Data asset:** Nigeria's first registry of informal commercial property — market stall ownership records, transfer history, valuation data (from transfer prices), and market occupancy mapping. This data does not exist at any government agency, market union, or financial institution. It is the informal commercial property equivalent of what Aadhaar-linked land registries created for rural India.

**Entry channel hierarchy:** USSD (primary) → SMS (confirmations/receipts) → WhatsApp (secondary, for literate traders with smartphones) → Web API (for financial institutions licensing registry data). No desktop product for traders.

**90-day target:** 500 registered stalls across 3 markets, N500K MRR from registration and transfer fees, 1 market union partnership formalized.

**Infrastructure stack position:** Layer 1 — data collection. MarketPass creates the informal commercial property registry that feeds Layer 3 financial products (micro-loans using stall ownership as collateral, stall insurance) and Layer 4 data products (market occupancy data for commercial real estate analysis, government urban planning).

**Platform dependency:** Runs on the USSD Business Toolkit Platform (B1 in opportunity catalog).

---

## 2. Market Opportunity

### The Non-Consumption Opportunity

Nigeria has approximately 140,000 formal markets and millions of market stalls across the country. These stalls are real economic assets — a well-located stall in Alaba International Market (Lagos) can sell for N5-10M. A stall in Ariaria Market (Aba) is worth N1-5M. Even in smaller markets, stalls trade for N200K-1M. Yet there is no documentation for any of them. Not inadequate documentation — zero documentation.

**The zero:** Effectively 100% of Nigeria's market stall transactions (purchases, sales, inheritance, subleases) occur with zero formal documentation. No receipt, no certificate, no registry entry. Ownership is established by physical occupation and community recognition.

### Quantified Pain

- **Market stall valuation:** There are millions of permanent and semi-permanent market stalls across Nigeria. Major markets have thousands each: Alaba International Market (~20,000 shops), Balogun Market (~10,000), Onitsha Main Market (~15,000), Ariaria Market (~10,000), Sabon Gari Market Kano (~8,000). Total stall value in major markets alone is conservatively N5-15T ($3.3-9.8B).
- **Dispute frequency:** Market tribunals in major markets hear 5-20 stall disputes per week. Without documentation, disputes can take months and involve market union politics, threats, and sometimes violence.
- **Ownership fraud:** Cases where individuals sell stalls they do not own, or sell the same stall to multiple buyers, are common because there is no registry to verify against.
- **Inheritance disputes:** When a stall owner dies, heirs often fight over stall rights. Without documentation, the dispute devolves into "my father told me" vs. "my mother told me" — resolved by market union discretion rather than evidence.
- **Lost collateral value:** Market stalls worth N500K-10M+ cannot serve as collateral for micro-loans because no financial institution will accept an asset with no documented ownership. This locks millions of traders out of credit.

### Why the Pain Is Getting Worse

- **Stall values increasing:** As urbanization accelerates and market space becomes scarcer, stall values are rising. A stall that sold for N500K five years ago may now be worth N2M. Higher values mean higher stakes in disputes.
- **Naira depreciation driving up replacement costs:** Building or rebuilding a market stall costs more as construction materials rise (cement +150%, rebar +100%+). The asset is worth more in replacement terms but still has zero documentation.
- **Market fires and reconstruction:** Nigerian markets experience regular fires (Balogun Market fire 2020, Katsina Central Market fire 2023). After fires, stall reassignment becomes chaotic — who owned which stall? Who paid for reconstruction? Without records, the most politically connected (not the legitimate owners) get reassigned.
- **Generational transfer:** Founding market traders from the 1970s-1990s are aging. Their stalls must transfer to children or be sold. Without documentation, this transfer is fraught with dispute risk.

### Why Existing Solutions Do Not Serve This Segment

- **Formal property registration:** State land registries handle land titles and building permits for formal real estate. Market stalls are not land — they are occupancy rights within markets governed by market unions, not government registries. Formal registration is too expensive (N100K-500K+ for a Certificate of Occupancy), too slow (6-24 months), and structurally mismatched (designed for land, not stall rights).
- **Market union records:** Some unions keep handwritten ledgers of stall allocations. These ledgers are incomplete, subject to manipulation, physically vulnerable (destroyed in fires), and not accessible to individual traders for verification.
- **Lawyers / written agreements:** Some sophisticated traders use lawyers to draft sales agreements. This costs N50-200K per transaction — significant relative to stall values. Most traders view this as "what big people do" and proceed with handshakes.
- **Digital property platforms:** PropertyPro, HouseAfrica, and similar platforms serve formal real estate (apartments, houses, land). Market stalls are below their radar — too informal, too low-value per transaction, too operationally complex to verify.

### Market Sizing

- **TAM:** Millions of market stalls across Nigeria. Registration fee of N1-2K each: N5-10B. Transfer fees of N5-10K each, with an estimated 5-10% annual turnover: N2.5-10B/year. Total TAM: N10-20B+/year.
- **SAM:** Major urban markets (top 50 markets, ~500,000 stalls). Registration: N500M-1B. Annual transfer fees: N250M-500M/year. SAM: N750M-1.5B/year.
- **SOM (Year 1):** 5,000 registered stalls across 5 markets. Registration revenue: N5-10M. Transfer fees (at 5% annual turnover): N1.25-2.5M. Year 1 SOM: N6.25-12.5M.

### Regional Variance

- **South-West (Lagos):** Highest stall values (N1-10M+ in Alaba, Balogun, Computer Village). Most disputes. Most potential registration revenue. Also most complex market union politics.
- **South-East (Aba, Onitsha, Nnewi):** Strong trading culture. High stall values in Ariaria and Onitsha Main Market. South-East paradox applies: highest manufacturing capacity, lowest business confidence — but market traders are resilient.
- **North (Kano, Kaduna):** Large markets (Sabon Gari, Kurmi). Lower stall values but very high volume. Strong traditional authority structures may ease union partnerships.
- **South-South (Port Harcourt, Benin):** Medium-sized markets. Family network enables direct market access for pilot.

---

## 3. Target Personas

### Primary Persona: Ngozi — The Market Trader with No Documentation

**The non-consumer. The person who has literally nothing today.**

- **Age:** 38
- **Location:** Ariaria Market, Aba, Abia State
- **Income:** N150,000-400,000/month from trading in fabrics and textiles
- **Phone:** Tecno Spark feature phone with basic internet capability. Primarily uses calls and SMS. Has WhatsApp but uses it mainly for photos and chat, not business tools.
- **Family:** Husband (also a trader in the same market), 3 children. Lives in Aba township.
- **Stall:** Stall B-47, Block B, Ariaria Market. Purchased in 2018 from a retiring trader for N1.8M cash. Two witnesses (neighboring stall owners). No written document. No receipt beyond a handwritten note.

**Current documentation:** A handwritten note in a notebook that says "Paid Chief Okafor N1,800,000 for stall B-47 on 15 March 2018. Witnesses: Mama Gold, Alhaji Kabiru." That is it. If the notebook is lost, damaged, or disputed, Ngozi has nothing.

**Fear:** "What if someone claims my stall? I paid N1.8 million. If Chief Okafor's son says his father never sold it, what do I show the market tribunal? A notebook entry?"

**Decision trigger:** "My neighbor lost her stall. She bought it from a man who sold it to two people. The market union sided with the other buyer because he knew the union chairman. She lost N2 million and there was nothing she could do."

**Why Ngozi is the disruptive wedge:** Ngozi would never hire a lawyer, never visit a government registry, never use a property management platform. But she knows how to dial a USSD code. If she dials *XXX#, enters her market name, stall number, purchase date, and witnesses — and receives an SMS confirmation with a registration code — she has something she has never had: a timestamped, verifiable record of her ownership claim.

### Secondary Persona: Chairman Emeka — The Market Union Leader

**The validation layer and distribution channel.**

- **Age:** 55
- **Location:** Trade Fair Complex, Lagos
- **Role:** Chairman of the Electrical Section, Trade Fair Market Union. Oversees allocation and dispute resolution for ~2,000 stalls.
- **Phone:** Samsung Galaxy A-series. Active on WhatsApp.
- **Current process:** Keeps a handwritten ledger of stall allocations. Mediates disputes based on memory, testimonies from neighbors, and union precedent. Frustrated by disputes he cannot resolve because there are no records.

**Product fit:** Market union leader validation — Chairman Emeka can "validate" registrations on MarketPass by confirming that a trader is the recognized occupant of a stall. This adds institutional legitimacy to individual registrations. In return, he gets a digital registry of his market section — something he has never had.

**Decision trigger:** "I spend 2 days every week settling stall disputes. If there was a registry I could check, half these disputes would resolve themselves."

### Tertiary Persona: Mr. Adeyemi — The Microfinance Institution Officer

**The data buyer. The institution that will license the registry data.**

- **Age:** 40
- **Location:** Lagos
- **Role:** Credit Officer at LAPO Microfinance Bank or AB Microfinance Bank
- **Need:** Collateral verification for micro-loans to market traders. Currently, market traders apply for loans but cannot provide collateral documentation for their most valuable asset (the stall). The MFI either lends unsecured (higher risk, higher rates) or declines the loan.

**Product fit:** MarketPass registry lookup API. MFI credit officer queries: "Does Ngozi own stall B-47 at Ariaria Market?" MarketPass returns: "Yes. Registered 2024. Transfer price N1.8M. Validated by union leader." The stall becomes documentable collateral.

**Decision trigger:** "We have 10,000 market trader clients. If we could verify stall ownership, we could increase loan sizes by 50% and reduce default risk. How much does the API cost?"

---

## 4. Problem Deep Dive

### Step-by-Step: How Ngozi "Owns" Her Stall Today

**Step 1: Acquisition**
Ngozi heard through market gossip that Chief Okafor was retiring and selling his stall. She negotiated a price of N1.8M. Payment was cash, delivered in an envelope in the market. Chief Okafor wrote a note confirming receipt. Two neighboring traders witnessed the transaction. No formal paperwork, no receipt book, no registration with any authority.

**What goes wrong:** Cash transactions leave no bank trail. The handwritten note is a single point of failure — lost, destroyed, or disputed, and Ngozi's evidence disappears. Witnesses may move away, die, or be pressured to change their testimony.

**Business impact:** N1.8M in value with zero legal protection. Multiply by millions of stalls: trillions of naira in informal commercial assets with zero documentation.

**Step 2: Occupation**
Ngozi occupies the stall, stocks it with fabric, and begins trading. Her "proof" of ownership is that she is physically present and her neighbors recognize her as the occupant. The market union may or may not have updated their records.

**What goes wrong:** Physical occupation is the only proof. If Ngozi travels, falls ill, or leaves the stall unattended, she risks "stall-jacking" — someone else occupying the stall and claiming it. Market union records (if they exist) may not reflect the sale, leaving Chief Okafor as the recorded occupant.

**Business impact:** Traders who travel (to buy stock, for family emergencies, during sit-at-home in South-East) live in fear of losing their stalls.

**Step 3: Dispute**
If a dispute arises (Chief Okafor's family claims the stall was never sold, the market union reassigns the stall during renovation, another buyer produces their own handwritten "receipt"), the case goes to the market tribunal.

**What goes wrong:** The tribunal has no records to verify against. It is one person's notebook entry vs. another's verbal claim. Decisions are influenced by relationships with union leadership, ethnic politics, and sometimes bribes. Justice is inconsistent and unpredictable.

**Business impact:** Stall disputes can take 3-12 months to resolve. During resolution, the stall may be locked (zero income for the trader). Legal costs, if a lawyer is involved, add N100-300K. The loser may forfeit an asset worth N500K-5M+ with no recourse.

**Step 4: Transfer (Sale or Inheritance)**
When Ngozi eventually wants to sell her stall or pass it to her children, the same undocumented process repeats. The buyer/heir has no way to verify Ngozi's ownership. They must trust her word, her witnesses, and the market union's informal records.

**What goes wrong:** Fraudulent sales (selling a stall you do not own, selling the same stall to multiple buyers) are possible because there is no registry to check. Buyers must conduct their own informal "due diligence" — asking neighbors, checking with the union, hoping for the best.

**Business impact:** Lack of clear transfer records depresses stall values. Buyers discount the price to account for ownership risk. A stall worth N3M on paper may sell for N2-2.5M because the buyer is paying a "no documentation" discount.

### The Pull Test

**Do people already spend money or effort on workarounds?** Yes — strong pull signals:
- Traders pay N50-200K for lawyers to draft informal sales agreements (expensive workaround)
- Market unions charge N10-50K for "allocation letters" that are essentially ownership confirmations (institutional workaround)
- Traders photograph receipts and handwritten notes, sending copies to family via WhatsApp (digital backup workaround)
- Some traders register with local government (ward/LGA) as a secondary proof — paying N5-10K for a registration that the government may not honor
- After market fires, traders who can produce any documentation (however informal) are prioritized for stall reassignment — proving documentation has real value

This is a strong pull market. Traders already want documentation and pay for inferior versions of it.

---

## 5. Solution Overview

MarketPass creates a simple, USSD-based registry that gives market traders what they have never had: a timestamped, independently verifiable record of their stall ownership.

### Stage 1: Stall Registration via USSD (2-3 minutes)

Trader dials *XXX# and navigates the registration menu:
- Select or enter market name
- Enter stall/shop number
- Select how stall was acquired (purchased, allocated, inherited)
- Enter date of acquisition (month/year)
- Enter witness names (up to 2) and witness phone numbers
- Confirm and pay registration fee (N1,500 via airtime or mobile money)

Trader receives SMS confirmation:

```
MarketPass Registration
Stall: B-47, Ariaria Market, Aba
Owner: Ngozi Okonkwo (0803XXXXXXX)
Acquired: Mar 2018 (Purchase)
Witnesses: Mama Gold, Alhaji Kabiru
Reg Code: MP-ARI-2024-00147
Date: 22 Mar 2026
Keep this SMS. Verify at *XXX#
```

**What data this creates:** Stall ownership record — location, owner identity (phone number), acquisition type, acquisition date, witnesses. First entry in Nigeria's informal commercial property registry.

### Stage 2: Union Leader Validation (Optional but Valuable)

Market union leaders can validate registrations via USSD. When a trader registers, their union leader receives an SMS:

```
MarketPass Validation Request
Trader: Ngozi (0803XXXXXXX)
Claims: Stall B-47, Ariaria Market
Acquired: Mar 2018 (Purchase)
Validate? Dial *XXX# → Menu 3
```

Union leader dials *XXX#, selects "Validate", enters the registration code, confirms or rejects. Validated registrations display "Union Validated" status — adding institutional legitimacy.

**What data this creates:** Institutional endorsement layer. A stall validated by a union leader has significantly higher credibility than a self-registered claim. Over time, the validation rate becomes a quality metric for the registry.

### Stage 3: Transfer via Dual-Party USSD Confirmation (1-2 minutes)

When a stall is sold or transferred:
1. Seller initiates transfer via USSD: enters registration code, enters buyer's phone number, enters transfer price (optional but encouraged)
2. Buyer receives SMS with transfer details and confirmation code
3. Buyer dials *XXX#, enters confirmation code, accepts transfer
4. Transfer fee charged (N5,000-10,000 depending on market tier)
5. Both parties receive confirmation SMS with new registration details

```
MarketPass Transfer Complete
Stall: B-47, Ariaria Market
FROM: Ngozi (0803XXXXXXX)
TO: Amaka (0805XXXXXXX)
Price: N3,200,000
Transfer Code: MP-TRF-2026-00032
Date: 22 Mar 2026
Both parties confirmed.
```

**What data this creates:** Transfer record with price — establishing market-rate valuation data for stalls. Over time, this creates a price index for market stalls, analogous to real estate transaction databases.

### Stage 4: Ownership Verification via USSD (10 seconds)

Anyone can verify stall ownership by dialing *XXX#:
- Enter market name and stall number
- System returns: owner name (partial — "Ngo*** O***"), registration date, validation status
- Full details available only to the registered owner or with owner's consent

This is the critical feature for preventing fraud: a prospective buyer can check "is this stall already registered to someone?" before paying.

### What MarketPass Deliberately Sacrifices

- **No legal enforceability:** MarketPass is a registry, not a title deed. It creates evidence that can support a claim, not a claim itself. Legal enforceability requires government integration — a Phase 3+ goal.
- **No physical verification:** MarketPass does not send someone to verify that stall B-47 actually exists or that Ngozi occupies it. Union leader validation is the proxy for physical verification.
- **No dispute resolution:** MarketPass records claims; it does not arbitrate disputes. Disputes still go to market tribunals — but now the tribunal has records to reference.
- **No web or app for traders:** USSD only. The primary persona has a feature phone. A web interface would exclude the majority of market traders.
- **No integration with formal land registries:** Market stall rights exist outside formal property law. Attempting formal integration would require legal/regulatory work that would delay launch by years.
- **Price accuracy is self-reported:** Transfer prices are what parties declare, which may be understated (to reduce fees) or overstated. This is acceptable — even self-reported prices create a valuation benchmark where none existed.

### Iteration Path

- **Phase 1 (Month 1-3):** 3 markets. Registration and basic verification. Union leader validation. Manual market-by-market onboarding.
- **Phase 2 (Month 4-6):** 5-10 markets. Transfer functionality. Transfer price tracking. Partnership with 1-2 microfinance institutions for registry lookups.
- **Phase 3 (Month 7-12):** Dispute evidence reports (generate SMS/PDF summary of stall history for tribunal use). API for financial institutions. Begin discussion with Lagos State government on potential formal recognition.
- **Phase 4 (Year 2):** Stall-backed micro-loans (partnership with MFIs — MarketPass confirms ownership, MFI provides loan). Stall insurance product. Expansion to 50+ markets.
- **Phase 5 (Year 3+):** Formal property right recognition (government partnership). Stall valuation tool (based on transfer price history). Market mapping (digital layout of stall positions, enabling market planning and infrastructure development).

---

## 6. Functional Requirements

### MUST Have — MVP (Month 1-2)

### FR1: Stall Registration via USSD

- **Description:** Trader registers stall ownership via USSD menu. Receives SMS confirmation with unique registration code.
- **Channel:** USSD → SMS
- **Inputs:** Phone number (auto), market name (selected from list or entered), stall/shop number (entered), acquisition type (purchased/allocated/inherited), acquisition date (month/year), witness name(s), witness phone number(s)
- **Outputs:** SMS confirmation with registration code, stall details, and verification instructions
- **Acceptance Criteria:**
  - [ ] Registration completes in 6 USSD screens or fewer
  - [ ] Each USSD screen is 160 characters or fewer
  - [ ] USSD session responds within 2 seconds per screen
  - [ ] Registration code is unique, 16 characters, human-readable (format: MP-MKT-YYYY-NNNNN)
  - [ ] SMS confirmation delivered within 30 seconds of registration completion
  - [ ] Registration fee (N1,500) charged via airtime deduction or mobile money
  - [ ] Duplicate detection: system warns if stall number at same market is already registered
  - [ ] Works on any GSM phone (2G, 3G, 4G) without internet

### FR2: Stall Ownership Verification via USSD

- **Description:** Anyone can verify if a stall is registered and who the registered owner is (partial name only for privacy).
- **Channel:** USSD → SMS
- **Inputs:** Market name, stall number
- **Outputs:** SMS with registration status (registered/not registered), partial owner name, registration date, validation status
- **Acceptance Criteria:**
  - [ ] Verification completes in 3 USSD screens (market → stall number → result)
  - [ ] Response shows partial owner name (first 3 chars + asterisks) for privacy
  - [ ] Shows "Union Validated" or "Self-Registered" status
  - [ ] Shows registration date
  - [ ] Free to query (no charge for verification)
  - [ ] SMS response delivered within 10 seconds
  - [ ] If stall not registered: "Stall B-47 at Ariaria Market is not registered. Register at *XXX#"

### FR3: Union Leader Validation

- **Description:** Designated market union leaders can validate or reject trader registrations via USSD. Adds institutional credibility layer.
- **Channel:** USSD + SMS
- **Inputs:** Union leader phone number (pre-registered), registration code, validation decision (confirm/reject)
- **Outputs:** Updated registration status; SMS notification to trader
- **Acceptance Criteria:**
  - [ ] Union leaders pre-registered in system by admin (name, phone, market, section)
  - [ ] Validation request SMS sent to relevant union leader within 1 hour of trader registration
  - [ ] Union leader validates or rejects via USSD in 2 screens (enter code → confirm/reject)
  - [ ] Validated registrations display "Validated by [Union Leader Name]" status
  - [ ] Rejected registrations display "Validation Declined" with optional reason
  - [ ] Trader receives SMS notification of validation outcome
  - [ ] Union leader can view list of pending validations via USSD

### FR4: Stall Transfer — Dual-Party Confirmation

- **Description:** Seller initiates transfer. Buyer confirms via USSD. Both receive confirmation. Transfer fee charged.
- **Channel:** USSD + SMS
- **Inputs:** Seller: registration code, buyer phone number, transfer price (optional). Buyer: confirmation code, acceptance.
- **Outputs:** Updated registration (new owner), transfer record, SMS confirmations to both parties
- **Acceptance Criteria:**
  - [ ] Seller initiates transfer via USSD in 3 screens (enter reg code → enter buyer phone → enter price/confirm)
  - [ ] Buyer receives SMS with transfer details and 6-digit confirmation code
  - [ ] Buyer confirms by dialing *XXX# and entering confirmation code within 72 hours
  - [ ] Transfer expires if buyer does not confirm within 72 hours (seller retains ownership)
  - [ ] Transfer fee (N5,000-10,000 based on market tier) charged to buyer via airtime or mobile money
  - [ ] Both parties receive SMS confirmation with new registration details
  - [ ] Previous owner's registration marked "Transferred" (not deleted — preserves history)
  - [ ] Transfer record includes: date, seller, buyer, price (if declared), witnesses from original registration

### FR5: Market and Stall Master Data

- **Description:** Admin-configurable database of markets (name, location, state, sections, stall numbering convention) and market-tier pricing.
- **Channel:** Web (admin only)
- **Inputs:** Admin configuration
- **Outputs:** Market and pricing data available to USSD menus
- **Acceptance Criteria:**
  - [ ] 3 markets at launch: Ariaria Market (Aba), Trade Fair Complex (Lagos), Mile 3 Market (Port Harcourt)
  - [ ] Each market has defined sections/blocks and stall numbering format
  - [ ] Registration fee and transfer fee configurable per market tier
  - [ ] Admin can add new markets without code changes
  - [ ] Market data includes: name, city, state, estimated stall count, union leader contacts

### FR6: My Stall — Owner Dashboard via USSD

- **Description:** Registered stall owner can view their registration details, transfer history, and validation status via USSD.
- **Channel:** USSD → SMS
- **Inputs:** Owner phone number (auto-authenticated)
- **Outputs:** SMS with full registration details
- **Acceptance Criteria:**
  - [ ] Owner dials *XXX# and selects "My Stall" from main menu
  - [ ] System identifies owner by phone number (no password required for basic view)
  - [ ] Returns: stall number, market, registration date, validation status, registration code
  - [ ] If owner has multiple stalls: list of all registered stalls
  - [ ] Option to request full history via SMS (includes all transfers, validations)

### SHOULD Have — Month 2-3

### FR7: Dispute Evidence SMS Report

- **Description:** Registered owner can request an SMS report summarizing their stall's registration history — usable as evidence in market tribunal disputes.
- **Channel:** USSD → SMS (multi-part)
- **Acceptance Criteria:**
  - [ ] Owner requests report via USSD ("My Stall → Request Report")
  - [ ] Report delivered as multi-part SMS within 5 minutes
  - [ ] Report includes: registration date, acquisition type, witnesses (names and phones), union validation status and date, any transfers with dates and parties
  - [ ] Report has verification code that third parties can use to confirm authenticity
  - [ ] Report generation fee: N500 (covers SMS cost and adds revenue)

### FR8: Witness Notification and Confirmation

- **Description:** When a trader registers and names witnesses, the witnesses receive SMS notifications and can confirm or deny their witness status via SMS reply.
- **Channel:** SMS
- **Acceptance Criteria:**
  - [ ] Witness receives SMS: "Ngozi (0803XXX) registered stall B-47 at Ariaria Market and named you as witness. Reply YES to confirm or NO to deny."
  - [ ] Witness response recorded and displayed on registration record
  - [ ] Witness confirmation adds credibility layer (alongside union validation)
  - [ ] If witness denies: registration flagged for review (not automatically rejected)
  - [ ] Witness SMS sent within 1 hour of registration

### FR9: Annual Renewal Reminder

- **Description:** Registered stall owners receive annual SMS reminder to confirm continued ownership. Maintains registry accuracy and generates recurring revenue.
- **Channel:** SMS
- **Acceptance Criteria:**
  - [ ] SMS sent 30 days before registration anniversary
  - [ ] Renewal via USSD: dial *XXX# → "Renew" → confirm → N1,000 renewal fee
  - [ ] If not renewed within 60 days: registration marked "Unrenewed" (not deleted)
  - [ ] Renewed registrations marked "Active (Renewed YYYY)"
  - [ ] Renewal generates recurring revenue stream

### COULD Have — Month 4+

### FR10: MFI Registry Lookup API

- **Description:** RESTful API for microfinance institutions to verify stall ownership as part of loan collateral assessment.
- **Channel:** Web API
- **Acceptance Criteria:**
  - [ ] API accepts: market name, stall number, owner phone number
  - [ ] API returns: registration status, registration date, validation status, transfer count, last transfer date/price
  - [ ] API requires authentication (API key per MFI)
  - [ ] Rate-limited to 500 queries/day per API key (standard tier)
  - [ ] Charged per query (N500-1,000) or monthly subscription (N100-500K/month)
  - [ ] Owner consent required: MFI must provide consent code given by stall owner

### FR11: Market Mapping (Aggregate Data)

- **Description:** Aggregate view of registered stalls per market — section-by-section occupancy map. Available to market unions and government for planning.
- **Channel:** Web dashboard (union leaders, government)
- **Acceptance Criteria:**
  - [ ] Dashboard shows: total stalls registered per market, per section
  - [ ] Percentage of stalls registered vs. estimated total
  - [ ] Heat map of registration density by market section
  - [ ] Export to Excel for union administrative use

### WON'T Have (Explicit Exclusions)

| Feature | Rationale |
|---------|-----------|
| Legal title issuance | MarketPass creates evidence of ownership claims, not legally enforceable titles. Title issuance requires government partnership and legal framework changes — Phase 3+ at earliest. |
| Dispute resolution / arbitration | MarketPass records claims and provides evidence. It does not adjudicate. Market tribunals retain dispute resolution authority. |
| Physical verification of stall existence | Union leader validation is the proxy. Sending inspectors would require a field agent network and dramatically increase costs. |
| Web or mobile app for traders | Primary persona is on a feature phone. USSD reaches 100%. |
| Rental/sublease management | Stall subleasing is common but adds complexity. Phase 2 feature after core registration is established. |
| Payment processing for stall purchases | MarketPass documents transactions; it does not process payments. Cash transactions remain between parties. |

---

## 7. Non-Functional Requirements

### NFR1: Performance

- USSD menu response: < 2 seconds per screen
- SMS delivery (confirmation): < 30 seconds from registration completion
- Verification query result: < 10 seconds (USSD → SMS response)
- Transfer confirmation processing: < 5 seconds from buyer confirmation
- Admin dashboard page load: < 3 seconds
- API response: < 500ms for single-query lookups

### NFR2: Offline/Low-Bandwidth

- USSD operates on 2G with zero internet dependency
- SMS confirmations operate on 2G with zero internet dependency
- Admin dashboard: < 200KB initial page load, functional on 3G
- All registration data backed up to cloud database in real-time (no offline admin mode needed — admin always has internet)

### NFR3: Security

- Phone numbers encrypted at rest in database
- Registration codes are unique and non-sequential (prevent enumeration attacks)
- Verification queries show partial owner name only (first 3 chars + asterisks)
- Full registration details accessible only to registered owner (authenticated by phone number)
- Union leader credentials secured via OTP at registration
- API access requires authentication and rate limiting
- Transfer requires dual-party confirmation (prevents unauthorized transfers)
- All registration and transfer events logged immutably (append-only audit trail)
- Compliance with Nigeria Data Protection Regulation (NDPR)

### NFR4: Scalability

- USSD gateway: support 200 concurrent sessions (Africa's Talking)
- Database: 1M+ stall registrations with full transfer history
- SMS broadcast for renewal reminders: 50,000 messages within 2-hour window
- API: 5,000 queries/day capacity
- Multi-market support without architectural changes

### NFR5: Accessibility

- USSD menus in English (default). Pidgin English as future option.
- USSD menus navigable with numeric keypad only
- All prices displayed in Naira
- Registration code format designed for verbal communication (traders will read codes to each other over the phone)
- Feature phone compatible: no smartphone features required

### NFR6: Regional

- Market naming conventions accommodate regional variations (Igbo market names in South-East, Hausa names in North, Yoruba names in South-West)
- Stall numbering formats vary by market (Block-Number, Section-Row-Number, simple sequential)
- System accommodates all numbering formats via free-text stall identifier
- Time zone: WAT (UTC+1) for all timestamps

---

## 8. Key Screens & UX

### USSD Menu Tree

**Session 1: Registration (6 screens)**

```
Screen 1 (Main Menu):
MarketPass
1. Register My Stall
2. Verify a Stall
3. Transfer Stall
4. My Stall
5. Help

[User selects 1]
```

```
Screen 2 (Market Selection):
Select your market:
1. Ariaria Market, Aba
2. Trade Fair, Lagos
3. Mile 3, Port Harcourt
4. Type market name

[User selects 1]
```

```
Screen 3 (Stall Details):
Enter your stall/shop number
(e.g. B-47 or 215):

[User types B-47]
```

```
Screen 4 (Acquisition):
How did you get this stall?
1. Purchased
2. Allocated by union
3. Inherited
4. Built/established

[User selects 1]
When? Enter month/year
(e.g. 03/2018):

[User enters 03/2018]
```

```
Screen 5 (Witnesses):
Enter witness 1 name and phone
(e.g. Mama Gold 08031234567):

[User enters details]

Enter witness 2 (or 0 to skip):

[User enters details or 0]
```

```
Screen 6 (Confirmation):
Register stall B-47
Ariaria Market, Aba
Purchased Mar 2018
Fee: N1,500 (airtime)
1. Confirm & Pay
2. Edit details
3. Cancel
```

**SMS Confirmation (sent after payment):**

```
MarketPass Registration Confirmed
Stall: B-47, Ariaria Market
Owner: Ngozi Okonkwo
Acquired: Mar 2018 (Purchase)
Witnesses: Mama Gold, Alhaji Kabiru
Reg Code: MP-ARI-2026-00147
Registered: 22 Mar 2026
Status: Self-Registered
(Pending union validation)
Keep this SMS as your record.
Verify anytime: *XXX# → Menu 2
```

**Session 2: Verification (3 screens)**

```
Screen 1: [Main menu → select 2]

Screen 2:
Verify a Stall
Select market:
1. Ariaria Market
2. Trade Fair
3. Mile 3
4. Type market name

[User selects 1]
```

```
Screen 3:
Enter stall/shop number:

[User enters B-47]
→ SMS response sent
```

**SMS Response:**

```
MarketPass Verification
Stall B-47, Ariaria Market
Status: REGISTERED
Owner: Ngo*** O***
Since: Mar 2018
Validation: Union Validated
Reg Code: MP-ARI-2026-00147
Verified: 22 Mar 2026
```

**Session 3: Transfer (4 screens)**

```
Screen 1: [Main menu → select 3]

Screen 2:
Enter your registration code:
(e.g. MP-ARI-2026-00147)

[User enters code]
```

```
Screen 3:
Transfer stall B-47 to:
Enter buyer's phone number:

[User enters 08051234567]

Enter sale price (or 0 to skip):

[User enters 3200000]
```

```
Screen 4:
Transfer B-47, Ariaria Market
To: 08051234567
Price: N3,200,000
Transfer fee: N5,000 (buyer pays)
1. Send transfer request
2. Cancel
```

**Buyer receives SMS:**

```
MarketPass Transfer Request
Ngozi (0803XXX) wants to transfer
Stall B-47, Ariaria Market to you.
Price: N3,200,000
To accept: dial *XXX# and enter
code: 847291
Valid for 72 hours.
```

### Admin Dashboard (Web — Internal Only)

**Screen 1: Registry Overview**
- Total registrations by market (bar chart)
- Registrations today/this week/this month
- Validation rate (% of registrations validated by union leaders)
- Transfer volume (count and total declared value)
- Revenue: registration fees + transfer fees + renewal fees

**Screen 2: Market Detail**
- Selected market: all registered stalls, owner names, registration dates, validation status
- Search by stall number or owner phone
- Pending validations list for union leaders
- Dispute flags (duplicate registrations for same stall)

**Screen 3: Union Leader Management**
- List of registered union leaders by market
- Validation activity: how many validations per leader, response time
- Add/remove union leaders

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| USSD Gateway | Africa's Talking | USSD session management; works on all connections including 2G; Nigerian coverage |
| SMS Delivery | Termii | Nigerian SMS API; reliable multi-network delivery; airtime billing |
| Backend | Next.js 14 API Routes | USSD webhook processing, transfer logic, API serving |
| Database | Supabase PostgreSQL | Registry data with Row Level Security; audit trail; free tier for MVP |
| Admin Dashboard | Next.js 14 (App Router) | Internal dashboard for registry management, union leader admin, analytics |
| Registry API | Next.js API Routes | RESTful API for MFI lookups |
| Hosting | Vercel | Free tier for MVP; auto-scaling |
| Payments | Airtime deduction (Africa's Talking) + Paystack | Airtime for trader fees; Paystack for MFI API subscriptions |
| Monitoring | Sentry + PostHog | Error tracking; funnel analytics (registration → validation → transfer) |

### Database Schema (Core Tables)

```sql
-- Markets
markets (
  id uuid PRIMARY KEY,
  name text NOT NULL, -- 'Ariaria Market'
  city text NOT NULL,
  state text NOT NULL,
  region text CHECK (region IN ('north-central', 'north-east', 'north-west', 'south-east', 'south-south', 'south-west')),
  estimated_stalls integer,
  stall_number_format text, -- description of numbering convention for guidance
  registration_fee_ngn decimal(8,2) DEFAULT 1500,
  transfer_fee_ngn decimal(8,2) DEFAULT 5000,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
)

-- Stall Registrations (core registry — append-only audit trail)
registrations (
  id uuid PRIMARY KEY,
  registration_code text NOT NULL UNIQUE, -- MP-ARI-2026-00147
  market_id uuid REFERENCES markets,
  stall_number text NOT NULL, -- 'B-47', '215', 'Section C Row 3 Stall 12'
  owner_phone text NOT NULL,
  owner_name text NOT NULL,
  acquisition_type text CHECK (acquisition_type IN ('purchased', 'allocated', 'inherited', 'established')),
  acquisition_date date, -- month/year precision
  acquisition_price decimal(12,2), -- self-reported, nullable
  witness_1_name text,
  witness_1_phone text,
  witness_1_confirmed boolean, -- did witness reply YES?
  witness_2_name text,
  witness_2_phone text,
  witness_2_confirmed boolean,
  validation_status text CHECK (validation_status IN ('pending', 'validated', 'rejected', 'unvalidated')) DEFAULT 'pending',
  validated_by uuid REFERENCES union_leaders,
  validated_at timestamptz,
  status text CHECK (status IN ('active', 'transferred', 'disputed', 'unrenewed', 'cancelled')) DEFAULT 'active',
  renewal_due date, -- 1 year from registration
  last_renewed_at timestamptz,
  registered_at timestamptz DEFAULT now(),
  UNIQUE(market_id, stall_number, status) -- prevent duplicate active registrations for same stall
)

-- Union Leaders
union_leaders (
  id uuid PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL UNIQUE,
  market_id uuid REFERENCES markets,
  section text, -- which market section they oversee
  title text, -- 'Chairman', 'Secretary', 'PRO'
  validations_count integer DEFAULT 0,
  active boolean DEFAULT true,
  registered_at timestamptz DEFAULT now()
)

-- Transfers (immutable transfer log)
transfers (
  id uuid PRIMARY KEY,
  registration_id uuid REFERENCES registrations,
  transfer_code text NOT NULL UNIQUE, -- 6-digit confirmation code
  seller_phone text NOT NULL,
  buyer_phone text NOT NULL,
  buyer_name text,
  declared_price decimal(12,2), -- self-reported, nullable
  transfer_fee_ngn decimal(8,2),
  status text CHECK (status IN ('pending', 'confirmed', 'expired', 'cancelled')) DEFAULT 'pending',
  initiated_at timestamptz DEFAULT now(),
  confirmed_at timestamptz,
  expires_at timestamptz DEFAULT (now() + interval '72 hours'),
  new_registration_id uuid REFERENCES registrations -- the new registration created for buyer
)

-- Verification Queries (audit log)
verifications (
  id uuid PRIMARY KEY,
  querier_phone text NOT NULL,
  market_id uuid REFERENCES markets,
  stall_number text NOT NULL,
  result text CHECK (result IN ('found', 'not_found')),
  queried_at timestamptz DEFAULT now()
)

-- USSD Session Log
ussd_sessions (
  id uuid PRIMARY KEY,
  phone text NOT NULL,
  session_id text NOT NULL,
  session_type text CHECK (session_type IN ('register', 'verify', 'transfer', 'my_stall', 'help')),
  completed boolean DEFAULT false,
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz
)

-- Revenue Transactions
revenue (
  id uuid PRIMARY KEY,
  type text CHECK (type IN ('registration', 'transfer', 'renewal', 'report', 'api_query')),
  amount_ngn decimal(8,2) NOT NULL,
  payer_phone text,
  registration_id uuid REFERENCES registrations,
  transfer_id uuid REFERENCES transfers,
  payment_method text CHECK (payment_method IN ('airtime', 'mobile_money', 'paystack')),
  status text CHECK (status IN ('paid', 'pending', 'failed')),
  created_at timestamptz DEFAULT now()
)

-- Data License Clients (MFIs, government)
data_clients (
  id uuid PRIMARY KEY,
  organization text NOT NULL,
  client_type text CHECK (client_type IN ('mfi', 'bank', 'government', 'research', 'insurance')),
  api_key_hash text NOT NULL,
  monthly_fee_ngn decimal(12,2),
  queries_today integer DEFAULT 0,
  queries_limit integer DEFAULT 500,
  active boolean DEFAULT true,
  contracted_at timestamptz DEFAULT now()
)
```

### Integration Architecture

```
Registration Flow:
  Trader dials *XXX# → Africa's Talking USSD webhook → Next.js API →
  Process menu selections → Validate stall not already registered →
  Charge fee (airtime deduction via Africa's Talking) →
  Create registration record → Send SMS confirmation (Termii) →
  Send validation request SMS to union leader (Termii)

Verification Flow:
  Anyone dials *XXX# → selects Verify → enters market + stall →
  Next.js API queries registrations table →
  Returns partial owner info via SMS → Logs verification query

Transfer Flow:
  Seller dials *XXX# → enters reg code + buyer phone + price →
  System creates pending transfer → SMS to buyer with confirmation code →
  Buyer dials *XXX# → enters confirmation code →
  System: mark old registration as 'transferred' →
  Create new registration for buyer → Charge transfer fee →
  SMS confirmations to both parties

API Flow (MFI):
  MFI → POST /api/registry/verify {market, stall, owner_phone, consent_code} →
  Authenticate API key → Query registrations →
  Return: status, registration_date, validation_status, transfer_count, last_price →
  Log query and charge per-query fee
```

### USSD Webhook Flow

```
Africa's Talking → POST /api/ussd/callback
  Body: { sessionId, phoneNumber, text, serviceCode }

  text="" → Return main menu (5 options)
  text="1" → Return market selection for registration
  text="1*1" → Prompt for stall number
  text="1*1*B-47" → Prompt for acquisition type
  ... etc.

Session state managed server-side via sessionId.
Each response: "CON " (continues) or "END " (terminates + triggers SMS).
Character limit: 182 per response.
```

---

## 10. Data Asset Strategy

### What Data MarketPass Generates That Did Not Exist Before

1. **Informal commercial property registry:** The first structured database of market stall ownership in Nigeria. No government agency, no research institution, no private company has this data. Millions of stalls worth trillions of naira — completely undocumented until MarketPass.

2. **Market stall valuation data:** Transfer prices create the first transaction-based valuation database for market stalls. Over time, this enables stall valuation (analogous to Zillow's Zestimate but for market stalls) — "Stalls in Block B of Ariaria Market have appreciated 40% over 3 years based on 25 transfers."

3. **Market occupancy and turnover data:** Registration and transfer rates reveal which markets are thriving (high registration, low turnover = stable) vs. declining (low registration, high turnover = traders leaving). This is urban commercial intelligence that does not exist.

4. **Trader identity data:** Phone numbers, market location, and stall value create a basic trader profile. This is the foundation for credit scoring — a trader who owns a stall worth N3M, registered and validated, with 5 years of ownership history, is a better credit risk than one with no documentation.

### Cross-Product Data Flows

- **KasaBook:** Market traders using KasaBook for daily sales/expense tracking can link their MarketPass registration — combining asset ownership data (stall) with cash flow data (sales). This creates a comprehensive trader financial profile.
- **VendorScore:** Market trader creditworthiness scored using MarketPass (asset ownership), KasaBook (cash flow), and VendorScore (payment history, supplier ratings).
- **AjoTrust:** Savings circle members who own registered stalls have verifiable collateral — AjoTrust + MarketPass together enable asset-backed savings group lending.
- **HarvestPrice:** Agricultural commodity traders in wholesale markets (Mile 12, Dawanau) can register their stalls on MarketPass and receive commodity price data from HarvestPrice — two Layer 1 products serving the same physical market.

### Who Would License This Data

| Buyer | Use Case | Annual Value |
|-------|----------|-------------|
| Microfinance institutions (LAPO, AB MFB, etc.) | Stall ownership verification for collateral assessment | N1-5M/year per MFI (or per-query at N500-1,000) |
| Commercial banks | SME lending — market traders with documented assets qualify for larger loans | N2-10M/year per bank |
| Insurance companies | Stall insurance — fire, theft, dispute coverage priced on stall value data | N1-3M/year per insurer |
| State governments / urban planning | Market infrastructure planning — which markets are overcrowded, which have vacancies | N2-5M/year per state |
| Market development agencies | Foreign-funded market modernization programs (World Bank, AfDB) | N5-10M per project |
| Commercial real estate firms | Informal commercial property market intelligence | N1-3M/year per firm |

**Conservative Year 2 data licensing revenue: N10-30M/year.**

### Privacy/Anonymization

- Individual stall registrations are private to the owner
- Verification queries show partial owner name only
- Licensed data is aggregated at market-level granularity (no individual records)
- Transfer price data aggregated at market-section level (not individual transactions)
- Owner consent required for MFI/bank lookups (via consent code)
- Compliance with NDPR

---

## 11. Value Chain Design

### Infrastructure This Product Builds That Does Not Exist

1. **Informal commercial property registry:** The concept of documenting market stall ownership does not exist in any structured form. MarketPass creates the registry, the registration process, the verification system, and the institutional validation layer (union leaders) from scratch.

2. **Market union digital interface:** Market unions currently operate entirely through in-person interactions and handwritten ledgers. MarketPass gives union leaders their first digital tool — a USSD-based validation system that creates digital records of their administrative actions. This is infrastructure that serves the union beyond MarketPass.

3. **Trader identity layer:** Market traders have no formal business identity. They have phone numbers, physical stalls, and community recognition — but nothing a financial institution can verify. MarketPass creates the first verifiable trader identity linked to a documented asset.

### Four Pillars Application

| Pillar | Application |
|--------|-------------|
| **Resource commitment** | Investment in market-by-market onboarding (visiting markets, meeting union leaders, explaining the system, recruiting early registrants). This is human infrastructure investment — analogous to Tolaram's 600K retail point network, built one market at a time. |
| **Cross-market knowledge transfer** | India's Aadhaar-linked property documentation drove massive credit expansion among previously undocumented asset holders. The transferable insight: documented informal assets become formal collateral, unlocking credit. Nigeria's market stalls are the equivalent of India's rural land parcels — high value, zero documentation. |
| **Value-chain coordination** | MarketPass coordinates traders (registrants), union leaders (validators), financial institutions (data consumers), and government agencies (potential formal recognition) into a single registry value chain. No single party could create this alone — the value emerges from the coordination. |
| **Transferability** | The USSD-based registration model transfers to any informal asset class: fishing boats, transport vehicles (okada/keke), workshops, farm plots. The registry infrastructure is the innovation — market stalls are just the first application. |

### Externalities

- **Credit expansion:** Documented stall ownership becomes collateral for micro-loans, unlocking credit for market traders who currently have <5% access to formal finance. India's experience suggests that property documentation can increase credit access 3-5x for the documented population.
- **Reduced dispute costs:** Market tribunals with registry data resolve disputes faster and more consistently, reducing economic losses from stall lockouts during dispute periods.
- **Market fire recovery:** After market fires, MarketPass registry provides evidence for stall reassignment — preventing the politically-connected from seizing stalls from legitimate owners.
- **Government urban planning:** Aggregate market data enables evidence-based market infrastructure investment — which markets need expansion, which need renovation, where should new markets be built.
- **Stall value appreciation:** Documented, verifiable stall ownership may increase stall values (buyers pay more when they can verify ownership), benefiting all stall owners.

---

## 12. Pricing & Unit Economics

### Pricing Tiers

| Plan | Price | Includes |
|------|-------|---------|
| **Stall Verification** | Free | Anyone can verify stall registration status via USSD. Unlimited queries. |
| **Stall Registration** | N1,500 one-time (~$1) | Register one stall. SMS confirmation with registration code. Pending union validation. |
| **Annual Renewal** | N1,000/year (~$0.65) | Confirm continued ownership. Maintain "Active" status. |
| **Transfer** | N5,000-10,000 per transfer (~$3.25-6.50) | Based on market tier. Paid by buyer. Dual-party confirmation. Updated registration. |
| **Dispute Evidence Report** | N500 per report (~$0.33) | Multi-part SMS with full stall history. Verification code for tribunal use. |
| **MFI API — Standard** | N100,000/month (~$65) | 500 queries/day. Single-stall verification with status and transfer history. |
| **MFI API — Premium** | N500,000/month (~$325) | 5,000 queries/day. Bulk queries. Custom integration support. |
| **Government/Research** | N2-5M/year | Aggregate market data. Custom reports. Market mapping dashboards. |

### Why N1,500 Registration Exists

N1,500 is less than 1% of the value of even the cheapest market stall (N200K). It is less than the cost of a single meal at a market canteen. It is 100x cheaper than hiring a lawyer (N100-200K) and 10-30x cheaper than a union allocation letter (N10-50K). The price is low enough to be an impulse decision — "N1,500 to protect my N2 million stall? Of course." — while still generating meaningful revenue at scale.

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| Monthly infrastructure cost | ~N150,000 (~$98) | Vercel ($0-20) + Supabase ($0-25) + Africa's Talking USSD ($20) + Termii SMS ($30) |
| USSD session cost | ~N10/session | Africa's Talking standard pricing |
| SMS cost per registration | ~N10 (confirmation + validation request + witness notifications) | 3-5 SMS per registration at N2-4/SMS |
| Cost per registration | ~N30 | USSD session + SMS + infrastructure allocation |
| Gross margin per registration | N1,470 / N1,500 = 98% | Extremely high margin — digital product with minimal marginal cost |
| Transfer fee gross margin | N4,950-9,950 / N5,000-10,000 = 99% | Even higher margin — two USSD sessions + 4 SMS |
| CAC | N200-500 | Market visits, union leader onboarding, word-of-mouth |
| Revenue per stall (Year 1) | N1,500 (registration) + N1,000 (renewal) = N2,500 | Excluding transfers |
| Revenue per stall (with transfer, amortized) | ~N3,500/year | Including 5% annual transfer rate at N5,000 avg |
| LTV per stall (3-year horizon) | N7,500-10,500 | Registration + 2 renewals + 0.15 transfers |
| LTV:CAC ratio | 15:1 - 52:1 | Very strong |

### Revenue Targets

| Milestone | Timeline | Stalls Registered | Transfers | MRR (NGN) | MRR (USD) |
|-----------|----------|------------------|-----------|-----------|-----------|
| First market launch | Week 3 | 20 | 0 | N30,000 | ~$20 |
| 3 markets live | Month 1 | 100 | 2 | N160,000 | ~$104 |
| Union leader partnerships | Month 2 | 300 | 8 | N490,000 | ~$319 |
| Break-even | Month 3 | 500 | 15 | N825,000 | ~$536 |
| Growth target | Month 6 | 2,000 | 50 | N3,250,000 | ~$2,113 |
| MFI API launch | Month 9 | 5,000 | 100 | N5,600,000 | ~$3,636 |
| Data licensing begins | Month 12 | 10,000 | 200 | N8,000,000+ | ~$5,195+ |

### Break-Even Analysis

Monthly costs at Month 3: ~N200,000 (infrastructure N150,000 + market visit/onboarding N50,000).
Break-even requires: 100 new registrations/month (N150,000) + 5 transfers/month (N25,000-50,000) + renewals starting Month 13. Break-even is achievable by Month 3 with modest registration volume.

### Cost Structure Test

Is this fundamentally different from incumbents, or just cheaper?

**Fundamentally different.** Formal property registration costs N100K-500K, takes 6-24 months, and requires lawyers, surveyors, and government bureaucracy. The cost structure serves formal real estate (N10M+ properties) where the fees are a small percentage of asset value. MarketPass costs N1,500, takes 2 minutes, and requires only a feature phone. The cost structure is digital-first: USSD session (~N10) + SMS (~N10) + database write (~N0.01). There is no lawyer, no surveyor, no government clerk. This cost structure serves assets worth N200K-10M where the traditional cost structure would consume 10-100% of the asset value. This is not cheaper property registration — it is a different category of documentation for a different category of assets.

---

## 13. Go-to-Market: First 10 Customers

MarketPass's "first 10 customers" are the first 10 market union partnerships — each unlocking 500-5,000 potential stall registrations.

### Channel 1: Family Network — Port Harcourt Markets

**Priority 1.** Direct access to market traders and union leaders in Port Harcourt via family network.

**Approach:**
- Visit Mile 3 Market and Creek Road Market in Port Harcourt
- Meet union leaders: "Your traders have no documentation for stalls worth millions. MarketPass gives them registration for N1,500. You validate via USSD. Would you endorse this to your members?"
- Register 20 stalls live during visit — demonstrate the entire flow in 2 minutes
- Union leader endorsement is the force multiplier: one WhatsApp message from the chairman to all section heads can drive hundreds of registrations

**Target:** 2 market visits → 2 union partnerships → 100 registrations in first month.

### Channel 2: Aba / Ariaria Market (South-East)

**Priority 2.** Ariaria Market in Aba is one of the largest markets in West Africa. High stall values (N1-5M). Active trading culture. History of stall disputes.

**Approach:**
- Contact Ariaria Market traders' association via phone/WhatsApp
- Pitch to association leadership: "Your market has 10,000+ stalls worth billions of naira with zero documentation. MarketPass creates the first registry. N1,500 per stall. Your union leaders validate."
- Offer: first 50 registrations free for the association to distribute to members as goodwill — then N1,500 per stall

**Target:** 1 association partnership → 200 registrations in first 2 months.

### Channel 3: Lagos Markets (Trade Fair, Alaba)

**Priority 3.** Highest stall values in Nigeria. Most disputes. Highest willingness to pay.

**Approach:**
- Target Trade Fair Complex (Electronics, General Goods sections) and Alaba International Market
- Partner with section-level union leaders (smaller, more accessible than market-wide leadership)
- Demo at union meetings: "Dial *XXX#. Enter your stall number. Pay N1,500. You now have a registration code. If anyone disputes your stall, you have a record."

**Target:** 2-3 section partnerships → 200 registrations in first 3 months.

### Channel 4: Market Fire Recovery

**Priority 4.** After any market fire (these happen regularly), the reconstruction and stall reassignment process creates acute demand for documentation.

**Approach:**
- Monitor news for market fires
- Contact affected market unions within 48 hours: "Register all stall owners now, before reconstruction. This prevents reassignment disputes."
- Offer bulk registration discount during fire recovery: N1,000/stall (vs. N1,500 standard)

**Target:** Opportunistic — 1 fire event per quarter → 100-500 registrations per event.

### Channel 5: Microfinance Institution Partnership

**Priority 5.** MFIs that already lend to market traders benefit from documented stall ownership — it de-risks their portfolio.

**Approach:**
- Contact LAPO, AB MFB, Grooming MFB — all have market trader loan products
- Pitch: "Your market trader clients have stalls worth N1-10M but you can't use them as collateral because there's no documentation. MarketPass creates verifiable ownership records. Your loan officers can verify via our API."
- MFI promotes MarketPass to their borrowers: "Register your stall on MarketPass and qualify for larger loans at lower rates."

**Target:** 1 MFI partnership → 200 registrations driven by MFI borrower requirements.

### Channel 6: WhatsApp/Word-of-Mouth in Markets

**Priority 6.** Markets are dense communities. When one trader registers and shows their SMS confirmation to their neighbor, the neighbor wants it too.

**Approach:**
- Seed 10 registrations in each target market section
- Each registered trader becomes an organic advocate: "I registered my stall. N1,500. Dial *XXX#."
- Market gossip spreads fast — especially when the topic is protecting N2M+ assets

**Target:** Organic growth of 20-50 registrations/month per active market from Month 3.

### Channel Summary

| Channel | Priority | Stall Registrations | Union Partnerships |
|---------|----------|--------------------|--------------------|
| Family network (PH markets) | 1 | 100 | 2 |
| Aba / Ariaria Market | 2 | 200 | 1 |
| Lagos markets | 3 | 200 | 3 |
| Market fire recovery | 4 | 100-500 | Opportunistic |
| MFI partnership | 5 | 200 | 1 (MFI-driven) |
| Organic / word-of-mouth | 6 | 100 | — |
| **Total (Month 3)** | — | **900-1,300** | **7+** |

---

## 14. Risks & Mitigations

### Risk 1: Market Union Resistance

**Likelihood:** High. Market union leaders derive power from controlling stall allocation and dispute resolution. A transparent registry could be perceived as threatening their authority and their ability to extract rents.

**Impact:** If union leaders oppose MarketPass, adoption in their market drops to near zero. Traders will not register against their union's wishes.

**Mitigations:**
- Frame MarketPass as a tool that enhances union authority, not undermines it: "You validate registrations. Your name appears on every validated record. This formalizes your role as the legitimate authority."
- Union leader validation is designed to give unions a gate-keeping role — they can reject registrations they disagree with
- Revenue share: offer 10-20% of registration fees to the market union treasury. This makes MarketPass a revenue source, not a threat.
- Start with cooperative unions (who welcome transparency) and let success spread to resistant ones
- Do not position MarketPass as a replacement for union authority — position it as documentation of union decisions

### Risk 2: Fraudulent Registrations

**Likelihood:** High. Without physical verification, anyone could register a stall they do not actually own. The first person to register claims "ownership."

**Impact:** If fraudulent registrations occur and cause disputes, trust in the registry collapses.

**Mitigations:**
- Union leader validation is the primary fraud prevention. A validated registration means a recognized authority confirms the registrant's claim.
- Duplicate detection: if stall B-47 at Ariaria Market is already registered by Ngozi, and someone else tries to register B-47, the system flags it. The second registrant sees "This stall is already registered. Contact market admin."
- Witness confirmation: witnesses receive SMS and confirm or deny their witness status. A registration with 2 confirmed witnesses + union validation has strong credibility.
- Clear disclaimer: "MarketPass registration is a record of your claim, supported by union validation and witness confirmation. It is not a government-issued title."
- Dispute resolution escalation: if two parties register the same stall, both are flagged and referred to market tribunal — but now the tribunal has two timestamped claims to compare

### Risk 3: Low Willingness to Pay N1,500 for Registration

**Likelihood:** Medium. Traders may view N1,500 as unnecessary — "I have occupied this stall for 10 years, everyone knows it is mine."

**Impact:** Low registration volume. Product fails to achieve network effects needed for the registry to be valuable.

**Mitigations:**
- The trigger is fear, not convenience: "What happens when you die — will your children keep the stall?" "What happens after a fire — will the union give you back your stall?" These fear-based triggers are stronger than convenience selling.
- Social proof: once 20% of stalls in a market section are registered, the remaining 80% feel pressure to register (analogous to getting a phone number — once everyone has one, not having one is a disadvantage)
- Bundle with MFI benefit: "Register on MarketPass and qualify for larger loans at LAPO." The loan benefit is worth far more than N1,500.
- First-mover incentive: "First 50 registrations in your market are free." Creates initial critical mass.

### Risk 4: Government or Legal Challenge

**Likelihood:** Low-Medium. A government agency (state land registry, local government) could argue that MarketPass is operating an unauthorized property registry.

**Impact:** Regulatory shutdown or forced compliance with costly formal registration requirements.

**Mitigations:**
- MarketPass explicitly does NOT issue titles or make legal ownership claims. It records claims and provides evidence. The legal framing is "record-keeping service," not "property registry."
- Position as complementary to government: "We create data that the government can use for market planning and revenue collection."
- Proactive engagement: brief relevant government agencies before public launch. Frame as a tool that serves their interests (tax collection, urban planning, disaster recovery).
- The government has shown zero interest in documenting market stalls — there is no existing registry to conflict with. MarketPass fills a vacuum, not a contested space.

### Risk 5: Data Security and Privacy

**Likelihood:** Medium. The registry contains sensitive information — stall locations, owner identities, asset values. Data breaches could expose traders to theft or extortion.

**Impact:** Loss of trader trust. Potential physical security risk if criminals use registry data to target high-value stall owners.

**Mitigations:**
- Phone numbers encrypted at rest
- Verification queries show partial names only
- Transfer prices are optional — traders can register without declaring value
- No location data beyond market name and stall number (no GPS coordinates)
- API access requires authentication and owner consent
- Regular security audits of Supabase configuration

### Risk 6: Network Effects Failure — Not Enough Registrations

**Likelihood:** Medium. The registry's value increases with coverage. If only 5% of stalls in a market are registered, the registry is not useful for verification (an unregistered stall is not evidence of no ownership).

**Impact:** Product is perceived as incomplete and not worth paying for.

**Mitigations:**
- Focus on market-section-level saturation, not market-wide coverage. If 60% of stalls in "Block B, Ariaria Market" are registered, the registry is meaningful for that section even if overall market coverage is 10%.
- Union leader partnership drives section-level adoption: when the section chairman endorses MarketPass, most traders in that section register.
- Verification value exists even at low coverage: "This stall IS registered (verified)" is valuable even if most stalls are not yet registered. It proves Ngozi's claim without requiring universal coverage.
- Transfer value is independent of coverage: any stall transfer documented on MarketPass is better than a handshake, regardless of how many other stalls are registered.

### Risk 7: Stall Numbering Inconsistency

**Likelihood:** High. Market stall numbering systems vary wildly — Block-Number in Ariaria, sequential numbers in some markets, no numbers at all in others. Traders may not know their "official" stall number.

**Impact:** Registration data is inconsistent, making verification difficult. "Is B-47 the same as Block B Stall 47?"

**Mitigations:**
- Accept free-text stall identifiers: traders enter whatever identifier they and their neighbors use
- Market-specific guidance: "In Ariaria Market, stalls are numbered Block-Number (e.g., B-47). Enter your block letter and number."
- Duplicate detection uses fuzzy matching: "B-47" and "B47" and "Block B 47" are flagged as potential matches
- Union leader validation resolves ambiguity: the leader knows which stall is which
- Over time, MarketPass itself becomes the canonical numbering system for markets that lack one

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot personally visit Nigerian markets or meet union leaders. Must rely on family network in Port Harcourt and remote relationship management.
- **Budget: $0-5K:** Cannot afford paid advertising, field agents, or market-by-market sales teams. Must rely on union leader partnerships and organic growth.
- **No legal authority:** MarketPass cannot issue legally enforceable ownership documents. It creates evidence, not titles.
- **Tech stack:** Next.js + Supabase + Africa's Talking + Termii. No custom mobile app.
- **Timeline:** First registrations within 3 weeks. First 100 registrations within 60 days.
- **Market union politics:** Union leadership can change, and new leaders may not support MarketPass. Relationships must be institutional (with the union), not personal (with one leader).

### Assumptions (Each Testable)

| Assumption | Test |
|-----------|------|
| Traders will pay N1,500 to register stall ownership via USSD | Deploy in 1 market; measure registrations in first 30 days. Pass: 20+ paid registrations. |
| Market union leaders will validate registrations via USSD | Onboard 2 union leaders; measure validation rate. Pass: 70%+ of registrations validated within 7 days. |
| Traders prefer documented ownership over informal recognition | Survey 20 traders post-registration: "Do you feel more secure?" Pass: 80%+ positive. |
| Transfer functionality drives additional revenue | Launch transfers in Month 2; measure adoption. Pass: 5+ transfers in first 60 days. |
| Stall registration is valued enough that word-of-mouth drives organic growth | Track registration source. Pass: 30%+ of registrations from Month 3 onward are referral/organic. |
| MFIs will pay for registry lookup API | Pitch 3 MFIs; measure response. Pass: 1 signed agreement within 6 months. |

### Out of Scope

| Exclusion | Rationale |
|-----------|-----------|
| Legal title issuance | Requires government partnership and legal framework. Phase 3+ if at all. |
| Dispute arbitration | MarketPass records evidence; it does not judge disputes. Market tribunals retain jurisdiction. |
| Physical stall verification | Would require field agents at every market. Union validation is the proxy. |
| Rental / sublease management | Adds complexity. Core product is ownership registration. Subleasing is Phase 2. |
| Payment escrow for stall purchases | Requires payment processing license and trust infrastructure. Different product. |
| Formal real estate (houses, land) | Different market, different legal framework, different competitors. MarketPass is informal commercial property only. |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] USSD short code operational on at least 2 telco networks (MTN + Airtel)
- [ ] Registration flow tested end-to-end with 10 real traders in 1 market
- [ ] Union leader validation flow tested with at least 1 real union leader
- [ ] Verification flow returns correct results for all registered stalls
- [ ] Duplicate stall detection working (same market + same stall number flagged)
- [ ] SMS confirmation delivered within 30 seconds for 95%+ of registrations
- [ ] Payment (airtime deduction) processing successfully for N1,500 registration fee
- [ ] 20 stalls registered in first pilot market

### Success Metrics (3 Months Post-Launch)

- [ ] Revenue: N500K+ total registration and transfer revenue
- [ ] Stalls: 500+ registered across 3 markets
- [ ] Key product metric: Union validation rate above 60% (validated / total registrations)
- [ ] Data asset: 3+ markets with 100+ registered stalls each (minimum for meaningful verification coverage)
- [ ] Retention: 80%+ of registered stall owners respond positively when asked "Do you feel more secure about your stall ownership?" (NPS-equivalent survey via SMS)
- [ ] Transfers: 15+ transfers processed with dual-party confirmation

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 9 | 0.45 | Pure USSD/SMS product. No web app for traders. Backend is USSD webhook processing + PostgreSQL. Simpler than any other product in the portfolio — no charts, no dashboards, no file processing. Can launch registration flow in 2 weeks. |
| Time to Revenue | 15% | 7 | 1.05 | N1,500 per registration, first revenue from Day 1 of launch. Transfer fees add N5,000-10,000 per transaction from Month 2. Revenue per user is low but immediate. |
| Market Size | 15% | 8 | 1.20 | Millions of market stalls worth trillions of naira. Registration fees + transfer fees + renewal fees + data licensing = multi-billion naira addressable market. |
| Competition | 10% | 10 | 1.00 | Zero competition. No digital or analog market stall registry exists in Nigeria. No startup, no government agency, no NGO does this. Absolute greenfield. |
| Skill Fit | 15% | 7 | 1.05 | USSD integration, database design, API development — all standard full-stack skills. No AI/ML required for core product. Domain knowledge (market stall economics, union politics) requires learning but is not technically complex. |
| Capital Required | 10% | 9 | 0.90 | Near-zero marginal costs (USSD + SMS). No surveyors needed (unlike BuildTrack/HarvestPrice). No physical infrastructure. Revenue from Day 1 covers costs almost immediately. |
| Buyer Clarity | 20% | 7 | 1.40 | Market traders are physically concentrated at known locations. Union leaders are identifiable and contactable. MFIs are named and accessible. The challenge is not finding buyers but convincing them — the union leader relationship is the key dependency. |
| Fintech Upside | 10% | 9 | 0.90 | Stall ownership as micro-loan collateral is a direct fintech application. India's Aadhaar-linked property documentation unlocked massive credit expansion. If MarketPass documented 100,000 stalls worth N500B+, the credit enablement opportunity is enormous. Stall insurance is another immediate fintech adjacency. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.45 |
| Time to Revenue (15%) | 1.05 |
| Market Size (15%) | 1.20 |
| Competition (10%) | 1.00 |
| Skill Fit (15%) | 1.05 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 1.40 |
| Fintech Upside (10%) | 0.90 |
| **TOTAL** | **7.95 / 10** |

### Verdict: BUILD (HIGH PRIORITY)

A 7.95 composite score is among the highest in the Mentaat portfolio. The standout is Competition (10 — absolute zero competition), Capital Required (9 — near-zero cost to operate), and Fintech Upside (9 — documented informal property is a direct credit enablement play). Build Speed (9) is also exceptional — this is one of the simplest products to build technically.

**Key decision factors:**
- Perfect 10 on competition: no one does this. Not poorly. Not expensively. No one.
- Near-zero operating costs: no surveyors, no collectors, no content creation. Revenue starts with the first registration.
- Massive fintech upside: if MarketPass reaches 100,000 stalls, it creates a collateral base worth N50-500B that is currently invisible to the financial system.
- Simplest product in the portfolio: USSD menu → database write → SMS confirmation. Can be built in 2 weeks.
- India proof point: Aadhaar-linked property documentation drove credit expansion for exactly this population — undocumented asset owners becoming documented borrowers.

**Go condition:** Set up Africa's Talking USSD + Termii SMS in Week 1. Contact Port Harcourt market union leaders via family network in Week 1. Launch registration in 1 market by Week 3. Target 100 registrations by Day 60 and 500 by Day 90.

---

## 18. Disruption Self-Assessment (8 Criteria)

### Criterion 1: Targets Overlooked or Non-consuming Segments

**Rating: Strong fit**

Market traders with stalls worth N500K-10M+ have zero documentation for their most valuable business asset. They are not underserved by existing property documentation — they are completely outside the formal property system. Formal property registration (N100K+, 6-24 months, requires lawyers) does not serve them and was never designed to. These are textbook non-consumers of documented property rights — they have a real need (ownership proof) and a real asset (the stall) but absolutely no product available at their price point and accessibility level.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First

**Rating: Strong fit**

A government-issued Certificate of Occupancy is a legally enforceable title with survey plans, official stamps, and court-admissible standing. MarketPass is a USSD registration with an SMS confirmation code and a union leader's validation. A property lawyer would say "this has no legal standing." A market trader would say "this is the first time I have ever had anything in writing for my stall — this changes everything." MarketPass deliberately sacrifices legal enforceability, physical verification, and formal government backing. It offers instead: immediacy (2 minutes), accessibility (any phone), affordability (N1,500), and institutional validation (union leader). Good enough for the market tribunal. Good enough for the MFI loan officer. Good enough for the heir who needs to prove their parent owned the stall.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold

**Rating: Strong fit**

This is a new-market foothold. No market stall documentation product exists at any price point. MarketPass creates the category. It is simultaneously low-end relative to formal property registration — entering at N1,500 vs. N100K-500K for a Certificate of Occupancy. The price point and channel (USSD on a feature phone) are so far below formal property documentation that no existing player (government registries, property tech platforms, law firms) would compete here. The market is unattractive to incumbents and invisible to investors.

### Criterion 4: Reimagines the Value Chain

**Rating: Strong fit**

Formal property registration requires: government land registries, licensed surveyors, lawyers, physical inspections, bureaucratic processing, and court-admissible documentation. MarketPass replaces this entire value chain with: USSD menu, SMS confirmation, phone number authentication, union leader validation via USSD, and a PostgreSQL database. The value chain is not optimized — it is replaced entirely. The "surveyor" is the union leader who already knows every stall in their section. The "lawyer" is the dual-party USSD confirmation. The "registry" is a database that costs $25/month to host. This is a fundamentally different system for documenting property rights.

### Criterion 5: Prioritizes Scaling a Core Solution

**Rating: Strong fit**

The product is radically simple: register a stall, verify a stall, transfer a stall. Three USSD flows. No analytics, no dashboards, no reports for the primary user. Maximum distribution of the simplest possible product — stall registration — before adding any features. The roadmap explicitly defers dispute resolution, rental management, valuation tools, and government integration. Distribution breadth (thousands of stalls across dozens of markets) before product depth (additional features).

### Criterion 6: Demands a Different Cost Structure

**Rating: Strong fit**

Formal property registration: lawyers (N50-200K), surveyors (N30-100K), government fees (N20-100K+), total: N100K-500K per property. Time: 6-24 months. Cost structure requires high per-transaction margins to cover professional services. MarketPass: USSD session (N10), SMS (N10), database write (N0.01), total infrastructure cost per registration: ~N30. Price: N1,500. Margin: 98%. Time: 2 minutes. This is not a cheaper version of property registration — it is a structurally different cost model that can serve assets worth N200K (where formal registration would cost more than the asset) at a price point that formal systems cannot match.

### Criterion 7: Converts Non-consumption into Growth

**Rating: Strong fit**

Every MarketPass registration is a first-time documentation event. No market share is being stolen — no incumbent serves this segment. Growth creates entirely new value: documented stall ownership that can become loan collateral (expanding credit access), insurance-eligible assets (expanding insurance penetration), and verifiable property for inheritance (reducing intergenerational wealth loss from disputes). The economic multiplier is significant: if documented stall ownership unlocks even N500K in additional credit per stall across 100,000 stalls, that is N50B in new credit flowing into the informal commercial economy.

### Criterion 8: Can Mature to Surpass Mainstream Offerings

**Rating: Partial fit**

MarketPass can mature from a USSD registration to a comprehensive informal commercial property system: transfer management, stall valuation (from transaction data), market mapping, collateral verification API, stall insurance, and eventually formal government recognition. However, surpassing formal property registration systems is not the maturation path — MarketPass will always exist alongside (not above) formal property registration, serving a different asset class. The maturation is within the informal commercial property domain, not upward into formal real estate. This is an honest assessment: MarketPass becomes the definitive registry for informal commercial property, but formal commercial property remains a separate system.

### Overall Assessment

| Criterion | Rating |
|-----------|--------|
| 1. Overlooked segment | Strong fit |
| 2. "Worse" but good enough | Strong fit |
| 3. Market foothold | Strong fit |
| 4. Value chain reimagined | Strong fit |
| 5. Scale core solution | Strong fit |
| 6. Different cost structure | Strong fit |
| 7. Non-consumption → growth | Strong fit |
| 8. Can mature | Partial fit |

**7/8 strong fit, 1/8 partial fit, 0/8 gaps.** All three non-negotiable criteria (1, 3, 7) are strong fit. The one partial fit (Criterion 8) reflects an honest assessment that MarketPass matures within the informal property domain rather than displacing formal property systems — but within that domain, the maturation path from "USSD registration" to "comprehensive informal commercial property infrastructure" is clear and compelling.

---

## 19. MNC Anti-Pattern Check

Checking against the 6 failure patterns from the MNC failure patterns analysis:

### Pattern 1: Phantom Middle Class
**No match.** MarketPass targets market traders — the informal commercial economy, not the middle class. Stall registration at N1,500 is designed for traders earning N150,000-400,000/month. Revenue projections are based on volume at ultra-low per-transaction pricing, not premium fees to a small affluent segment.

### Pattern 2: Push, Don't Pull
**No match.** Strong pull signals exist: traders already pay N50-200K for lawyers to draft informal agreements, pay N10-50K for union allocation letters, and photograph handwritten receipts as backup. After market fires, traders with any documentation are prioritized for stall reassignment. The demand for ownership evidence is real and demonstrated by existing expensive workarounds. MarketPass delivers what traders already seek at 1/100th the cost.

### Pattern 3: Infrastructure Entitlement
**No match.** MarketPass requires no infrastructure beyond USSD and SMS — which exist on every phone in Nigeria. It does not assume internet connectivity, smartphone ownership, or digital literacy beyond dialing a short code. The product is designed for the infrastructure reality, not an aspirational one.

### Pattern 4: Imported Management
**Partial match — mitigated.** The founder is NYC-based. Market union relationships are deeply local and political. Decisions about which markets to enter, how to approach union leaders, and how to navigate market politics require local knowledge. **Mitigation:** Port Harcourt family network for initial market access. Union leader relationships built through on-the-ground visits (arranged remotely). The product's simplicity (USSD registration — not a complex process requiring local adaptation) reduces the cultural adaptation needed.

### Pattern 5: Blame and Exit
**No match.** The product is designed for the market as it is — informal, cash-based, feature-phone-using, union-governed. If union leaders resist, the strategy adapts (revenue sharing, cooperative-first approach). There is no scenario where "the market is too informal" is an acceptable conclusion — informality is the entire point.

### Pattern 6: Premium Positioning in a Value Market
**No match.** N1,500 registration fee is the opposite of premium. Free verification is the opposite of premium. The pricing is designed to be impulse-level affordable: "less than a meal at the market canteen to protect your N2 million stall."

**Summary:** 0/6 anti-pattern matches. One partial match on Pattern 4 (founder location) with clear mitigations in place.