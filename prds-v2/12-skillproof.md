# PRD 12: SkillProof — USSD Artisan Verification & Reputation System

## 1. Executive Summary

SkillProof is a USSD-first artisan verification and reputation system for Nigeria's informal skilled trades. There is no app to download, no website to visit, no form to fill. An electrician dials a USSD code, registers their trade, experience, and location, and names the master artisan who trained them. That master artisan receives a USSD prompt to confirm or deny the training claim. Customers who hire the artisan dial a code after the job, rate the work 1-5 stars, and leave a brief comment. After 10 verified job ratings, the artisan earns a "Verified" badge and a shareable code. Any potential customer can then dial that code, enter the artisan's ID, and instantly see their verification status, trade, experience, and average rating.

The target user has never had a quality signal attached to their name. A plumber with 20 years of experience and flawless work earns the same as a 6-month apprentice because there is no mechanism to distinguish them. Customers hiring artisans operate completely blind — they rely on word-of-mouth within their immediate social circle or pick whoever is cheapest, then hope for the best. Bad artisan work causes electrical fires, plumbing floods, structural collapses, and equipment damage. The cost of bad artisan work in Nigeria runs into hundreds of billions of naira annually across residential, commercial, and industrial settings. Not a single product addresses this problem for the informal segment.

The visible product is a verification badge. The real product is the data layer it creates: Nigeria's first skilled trades verification database. Every registration is a trade census data point. Every master-artisan vouching creates a verifiable training lineage. Every customer rating builds a quality signal that has never existed in any database anywhere in the country. This data feeds VendorScore (artisan creditworthiness for tool/equipment financing), InsureMatch (risk profiles for artisan liability insurance), and future job marketplace and artisan financing products. Urban Company proved this model in India, reaching $2B+ valuation by organizing the home services market — but they started from the affluent top. SkillProof starts from the informal bottom, where the market is vastly larger and completely unserved.

This is a Layer 1 product in the Mentaat infrastructure stack — data collection that creates invisible infrastructure. It runs on the USSD Business Toolkit Platform. Revenue begins modestly with per-verification fees and grows through a job marketplace and artisan insurance/financing products. MVP ships in 2-3 weeks. USSD session management via Africa's Talking + Supabase storage. Total infrastructure cost under $30/month. The constraint is not engineering — it is trust-building in artisan communities and convincing the first master artisans to vouch.

**90-day target:** 500 registered artisans, 50 master artisan vouches, 100 customer ratings, 10 artisans reaching "Verified" status.

---

## 2. Market Opportunity

### The Skilled Trades Crisis Nobody Talks About

Nigeria has an estimated 40-60 million artisans and skilled tradespeople across electricians, plumbers, welders, carpenters, mechanics, tailors, painters, tilers, and dozens of other trades. These artisans are the backbone of Nigeria's built environment — they wire every house, plumb every building, weld every gate, and fix every car. The formal construction and maintenance industry cannot function without them.

Yet there is zero quality infrastructure for this workforce. No licensing system that actually works at scale. No reputation system. No verifiable credentials. No way for a customer to distinguish between a master craftsman and someone who picked up a wrench last week.

### The Zero

What percentage of Nigerian artisans have any form of verifiable quality signal? Effectively 0%.

- **No licensing:** While bodies like COREN exist for engineers, there is no functioning licensing system for informal artisans. The overwhelming majority of electricians, plumbers, and mechanics operate without any certification.
- **No reviews:** Unlike ride-hailing (Uber/Bolt ratings) or e-commerce (Jumia reviews), there is no rating system for artisan services.
- **No credentials:** Apprenticeship completion — the primary training path for Nigerian artisans — produces no certificate, no transcript, no verifiable record.
- **No registry:** There is no database of who practices what trade, where, with what level of experience.

### Quantified Pain

**For artisans:**
- A 20-year veteran electrician charges N5,000-15,000 for a wiring job. A 6-month apprentice charges N3,000-10,000 for the same job. The price gap is 30-50% at most — far below what the quality gap justifies.
- Skilled artisans lose an estimated 30-50% of potential premium because they cannot prove their quality. For an artisan earning N100-300K/month, this represents N30-150K/month in lost income — N360K-1.8M/year.
- Without quality signals, artisans compete purely on price, creating a race to the bottom that punishes quality work.

**For customers:**
- Bad electrical work causes an estimated 45% of residential fires in Nigeria (Federal Fire Service data). A single electrical fire can cause N1-50M in property damage.
- Bad plumbing causes water damage, mold, and structural deterioration. Remediation costs 3-10x the original job cost.
- Customers report spending N20-50K on average to fix bad artisan work — often more than the original job cost.
- The average Nigerian household hires artisans 4-8 times per year. At least 1 in 3 experiences involves unsatisfactory work.

### Why the Pain is Getting Worse

- **Construction boom:** Nigeria's housing deficit of 20-28 million units is driving massive construction activity, increasing demand for artisans while quality remains unverifiable.
- **Naira depreciation:** Building materials cost 40-60% more than two years ago. Mistakes by unverified artisans are more expensive than ever to fix.
- **Urban migration:** Millions moving to cities need artisan services in unfamiliar areas where they have no personal network to rely on for recommendations.
- **Loss of apprenticeship rigor:** Traditional apprenticeship periods (5-7 years) are shortening as economic pressure pushes apprentices to go independent sooner, without adequate training.

### Why Existing Solutions Don't Serve This Segment

- **Professionals directories (e.g., VConnect):** Web-based, require smartphones, serve the urban middle class looking for registered businesses, not informal artisans.
- **Facebook/WhatsApp groups:** Unstructured, no verification, recommendations are anecdotal and not queryable.
- **Word-of-mouth:** Works only within existing social circles. Fails completely when someone moves to a new area or needs a trade outside their network.
- **Urban Company model (app-based):** Requires smartphone download, credit card payment, and serves only affluent urban markets. Cannot reach the 42% on 2G.

### Total Addressable Market

- **TAM:** 40-60M artisans in Nigeria, each averaging N1.2-3.6M/year in income = N48-216T total artisan economy
- **SAM:** 10-15M artisans in urban and peri-urban areas accessible via USSD = artisan verification market of N100-500B/year (assuming N10-50K/year willingness to pay for quality signaling)
- **SOM (Year 1):** 5,000 registered artisans, 500 verified, generating N5-15M in verification and premium fees

### Regional Variance

- **South-East (Aba, Nnewi, Onitsha):** Strongest apprenticeship culture. Highest density of artisans trained through Igba Boi system. Natural starting point for MasterBook integration.
- **South-West (Lagos, Ibadan):** Largest customer market. Highest demand for artisan verification due to population density and urban anonymity.
- **South-South (Port Harcourt, Benin City):** Oil economy creates high-value artisan work (welding, mechanical). Family network enables initial testing.
- **North (Kano, Kaduna):** Large artisan clusters in Sabon Gari markets. Different apprenticeship traditions but same verification gap.

---

## 3. Target Personas

### Primary: "Emeka the Electrician" (The Non-Consumer)

**Name:** Emeka Obi, 38
**Location:** Ajah, Lagos (but representative of artisans in every Nigerian city)
**Trade:** Electrical wiring and installation — residential and small commercial
**Experience:** 15 years. Served 5-year apprenticeship under a master electrician in Nnewi. Has been independent for 10 years.
**Income:** N150-250K/month (N1.8-3M/year)
**Phone:** Tecno feature phone and a basic Android smartphone. Uses WhatsApp on the smartphone. Switches between MTN and Airtel.
**Quality signal today:** Nothing. Zero. He has no certificate from his apprenticeship. No business card that means anything. No online presence. His reputation exists only in the heads of past customers who happen to remember him.

**Daily routine:**
- Wakes at 5:30am, checks WhatsApp for job requests from regulars
- Travels 1-2 hours to job site (public transport)
- Works 8-10 hours on wiring, installation, or repair
- Gets paid in cash at job completion
- Finds new work through: (1) repeat customers calling, (2) neighbors of current customers seeing his work, (3) standing at known "artisan junctions" waiting for walk-up customers
- Loses 2-3 potential jobs per month to cheaper, less experienced electricians who the customer cannot distinguish from him

**What he wants:** "If person fit check my work record before dem hire me, dem go see say I sabi my work. I dey lose job to people wey just start because customer no fit know the difference. If I get something wey show say I dey verified, I fit charge better price."

**Decision trigger:** A customer hires a cheaper electrician instead of Emeka. That electrician does bad work. The customer calls Emeka to fix it. Emeka thinks: "If there was a way for that customer to know I was better before they hired the other guy, I would have gotten the job at my price."

### Secondary: "Architect Adebayo" (The Upmarket Graduation Target)

**Name:** Adebayo Ogunleye, 45
**Location:** Victoria Island, Lagos
**Profession:** Architect running a small practice. Manages 3-5 active construction projects.
**Need:** Reliable artisans for his construction projects. Currently relies on a personal Rolodex of 10-15 trusted artisans. When one is unavailable, he scrambles.
**Willingness to pay:** N5-10K/month for a subscription that gives him access to a verified artisan database. Would pay N50-100K/year for a premium tier with guaranteed response times.
**Channel:** Web dashboard (Phase 2). Would not use USSD.

**Decision trigger:** His regular electrician is unavailable for a time-sensitive project. He hires an unverified replacement who does substandard work, causing a 2-week delay and N200K in rework costs.

### Tertiary: Insurance Companies (The Data Buyer)

**Name:** Leadway Assurance, Mutual Benefits, AXA Mansard
**Need:** Risk data for artisan liability insurance, property insurance (artisan work quality as a risk factor), and construction insurance.
**Current data:** None. No insurer in Nigeria has artisan quality data at scale.
**Willingness to pay:** N5-20M/year for aggregate artisan quality data by trade, region, and experience level.

**Decision trigger:** An insurer pays out N50M+ in claims related to bad artisan work in a year. They realize they have no way to price artisan-related risk because no quality data exists.

---

## 4. Problem Deep Dive

### The Artisan Hiring Workflow (Current State)

**Step 1: Need Arises**
A homeowner's electrical outlet stops working, or a pipe bursts, or they are building a new house and need a welder for the gate. The need is immediate and specific.

**Step 2: Finding an Artisan**
The homeowner asks: their neighbor, their colleague at work, their church/mosque community, or their estate WhatsApp group. If none of these produce a recommendation, they go to the nearest "artisan junction" — an informal gathering point where artisans wait for walk-up customers — or they call a random number from a hand-painted sign on a wall. There is no search, no directory, no rating to consult.

**Step 3: Assessing Quality (Impossible)**
The customer meets the artisan. They have no way to verify anything. They ask "how long have you been doing this?" and get an answer they cannot verify. They ask "do you have references?" and get phone numbers of friends posing as past customers. They look at the artisan's tools — if the tools look professional, they feel slightly better. This is the extent of quality assessment.

**Step 4: Price Negotiation**
Because the customer cannot distinguish quality, price becomes the primary selection criterion. The cheapest artisan gets the job. Experienced artisans who charge more lose to inexperienced ones who charge less. The market punishes quality.

**Step 5: Work Execution (Unmonitored)**
The artisan does the work. The customer, who is not a tradesperson, cannot assess quality during execution. They see the finished result and hope it works.

**Step 6: Failure (Frequent)**
Bad wiring causes a short circuit weeks later. Bad plumbing leaks behind a wall. A badly welded gate rusts and sags. The customer discovers the failure after the artisan is long gone. They have no recourse — they paid cash, they do not have a contract, and the artisan's phone number may no longer work.

### What Goes Wrong at Each Step

| Step | Failure Mode | Quantified Impact |
|------|-------------|-------------------|
| Finding | Limited to personal network, which may not include the right trade | Customer settles for mediocre option; 30-40% of hiring decisions are based on availability, not quality |
| Assessing | Zero verifiable information about artisan quality | 1 in 3 artisan engagements results in unsatisfactory work |
| Pricing | Price-based selection punishes quality | Skilled artisans earn 30-50% less than they would in a transparent market |
| Execution | No accountability mechanism | Artisan has no incentive to exceed minimum expectations |
| Failure | No recourse, no record, no pattern detection | Customer spends N20-50K fixing bad work; same bad artisan continues getting jobs |

### The Pull Test

**Do people already spend money/effort on workarounds?** Yes.

- Homeowners pay N5-10K "inspection fees" to have a second artisan check the first artisan's work
- Estate management companies maintain informal "approved artisan" lists — a manual, unscalable form of verification
- Construction companies employ full-time supervisors whose primary job is monitoring artisan quality (N80-150K/month salary for a problem that a verification system could reduce)
- Customers routinely pay premium prices to artisans recommended by trusted friends — demonstrating willingness to pay for quality signals

This is a clear pull signal. The market is already spending money on imperfect substitutes for artisan verification.

---

## 5. Solution Overview

### Design Philosophy: Trust Through Transparency, Accessed on Any Phone

SkillProof does not require a smartphone. It does not require internet. It does not require literacy beyond basic numeracy. It leverages the existing social infrastructure of apprenticeship relationships — the fact that every artisan knows who trained them, and every master artisan knows who they trained. This pre-existing trust network is the verification backbone.

### Solution Stages

**Stage 1: Artisan Registration (USSD)**
Artisan dials USSD code. Enters: name, phone number, trade (from predefined list), years of experience, location (LGA), master artisan's name and phone number. System assigns a unique Artisan ID (e.g., SP-EL-LAG-00142 = SkillProof-Electrician-Lagos-#142). Data created: artisan profile, trade distribution by location, experience distribution.

**Stage 2: Master Artisan Vouching (USSD)**
Master artisan receives USSD push or SMS with prompt: "[Artisan Name] says you trained them in [Trade] for [X years]. Confirm? 1=Yes, 2=No, 3=Partially (explain)." Master artisan responds via USSD. If confirmed: artisan gets "Training Verified" status. If denied: artisan is notified and can dispute or name a different master. Data created: apprenticeship lineage graph, master artisan reputation network.

**Stage 3: Customer Rating (USSD)**
After hiring a SkillProof-registered artisan, customer dials USSD code or receives SMS prompt. Enters artisan ID, rates 1-5 stars, leaves optional brief comment (limited to 50 characters for USSD). Rating is timestamped and stored. Data created: job quality scores, customer satisfaction by trade/location.

**Stage 4: Verification Badge (Automatic)**
After 10+ customer ratings with average >= 3.5 stars: artisan earns "Verified" badge. Their shareable code becomes active. This threshold ensures meaningful sample size before awarding verification.

**Stage 5: Customer Lookup (USSD)**
Any potential customer dials USSD code, enters artisan ID or phone number. Receives: artisan name, trade, years of experience, training verification status, number of rated jobs, average rating, "Verified" or "Unverified" status. Total interaction: 2 USSD screens, under 30 seconds.

### What SkillProof Deliberately Sacrifices

- **No photos of past work** — USSD cannot display images. Good enough: star ratings and job count provide a sufficient quality signal for the target user.
- **No detailed reviews** — 50-character USSD limit versus full paragraph reviews on web platforms. Good enough: aggregate star rating is what customers actually use for decisions.
- **No real-time booking** — No calendar integration, no instant booking. Good enough: customer gets artisan's phone number and calls directly.
- **No payment processing** — No escrow, no digital payments. Good enough: cash payment is the norm and does not need to change for the core verification value to work.
- **No GPS tracking** — No "find artisans near me" on a map. Good enough: artisans register their LGA (Local Government Area), and customers filter by location via USSD.

### Iteration Path

**Phase 1 (Month 1-3):** USSD-only registration, vouching, rating, and lookup. Core verification loop.
**Phase 2 (Month 4-6):** WhatsApp bot for rating and lookup (richer interaction for smartphone users). SMS notifications for artisans when they receive ratings.
**Phase 3 (Month 7-12):** Web lookup page (customers can search online). Artisan profile pages with QR codes. Basic job marketplace (customer posts need, verified artisans respond).
**Phase 4 (Month 12-24):** Full job marketplace with bidding. Artisan insurance products (liability coverage priced on SkillProof data). Tool/equipment financing for verified artisans.

---

## 6. Functional Requirements

### MUST Have — MVP (Week 1-3)

### FR1: Artisan Registration via USSD
- **Description**: Artisan dials USSD code and registers their profile (name, phone, trade, experience, location, master artisan details)
- **Channel**: USSD
- **Inputs**: Full name, trade (selected from list of 15 trades), years of experience, LGA, master artisan name, master artisan phone number
- **Outputs**: Unique Artisan ID, confirmation message, SMS sent to master artisan requesting vouching
- **Acceptance Criteria**:
  - [ ] Registration completes in 5 USSD screens or fewer
  - [ ] Each USSD screen is 160 characters or fewer
  - [ ] Artisan ID is generated in format SP-[TRADE CODE]-[STATE CODE]-[5-DIGIT NUMBER]
  - [ ] Duplicate phone number registration is rejected with clear message
  - [ ] Master artisan receives SMS within 60 seconds of registration completion
  - [ ] All 15 predefined trades are selectable (electrician, plumber, welder, carpenter, mechanic, tailor, painter, tiler, bricklayer, POP installer, AC technician, generator repairer, aluminum fabricator, furniture maker, auto electrician)

### FR2: Master Artisan Vouching via USSD
- **Description**: Master artisan receives notification and confirms or denies training claim via USSD
- **Channel**: USSD (initiated by SMS prompt containing USSD shortcode)
- **Inputs**: Confirmation (Yes/No/Partial), optional comment if Partial
- **Outputs**: Updated artisan profile with vouching status; notification to artisan
- **Acceptance Criteria**:
  - [ ] Master artisan can respond within 1 USSD screen (select 1, 2, or 3)
  - [ ] If master artisan confirms: artisan profile shows "Training Verified by [Master Name]"
  - [ ] If master artisan denies: artisan receives SMS notification with option to update master details
  - [ ] If master artisan does not respond within 7 days: system sends 1 reminder SMS, then marks as "Pending Verification"
  - [ ] Master artisan who vouches for 3+ artisans automatically gets a "Master Artisan" designation
  - [ ] Vouching cannot be revoked once confirmed (append-only integrity)

### FR3: Customer Rating via USSD
- **Description**: Customer rates an artisan's work after a job
- **Channel**: USSD
- **Inputs**: Artisan ID or phone number, star rating (1-5), optional comment (max 50 characters)
- **Outputs**: Confirmation of rating submitted; updated artisan rating
- **Acceptance Criteria**:
  - [ ] Rating completes in 3 USSD screens or fewer
  - [ ] Star rating is required; comment is optional
  - [ ] System prevents duplicate ratings from same phone number for same artisan within 24 hours
  - [ ] Customer cannot rate an artisan they have not previously looked up (prevents random spam)
  - [ ] Rating is reflected in artisan's profile within 60 seconds

### FR4: Customer Artisan Lookup via USSD
- **Description**: Customer dials USSD code to check an artisan's verification status and ratings
- **Channel**: USSD
- **Inputs**: Artisan ID or artisan phone number
- **Outputs**: Artisan name, trade, experience, verification status, average rating, number of rated jobs
- **Acceptance Criteria**:
  - [ ] Lookup result displays on 1-2 USSD screens
  - [ ] Displays: name, trade, years of experience, "Verified" or "Unverified", average rating (X.X/5), number of ratings
  - [ ] If artisan not found: message says "Artisan not registered on SkillProof. Ask your artisan to register at *XXX*XXX#"
  - [ ] Response time: < 2 seconds from USSD request to response display
  - [ ] After lookup, customer is prompted: "Hired this artisan? Rate their work: dial *XXX*XXX*RATE#"

### FR5: Verification Badge Assignment (Automatic)
- **Description**: System automatically awards "Verified" status when an artisan meets threshold criteria
- **Channel**: Backend (automated)
- **Inputs**: Accumulated ratings data
- **Outputs**: Status change to "Verified"; SMS notification to artisan with shareable code
- **Acceptance Criteria**:
  - [ ] Verified status requires: (a) 10+ customer ratings AND (b) average rating >= 3.5/5 AND (c) training verified by master artisan
  - [ ] Artisan receives SMS: "Congratulations! You are now SkillProof Verified. Your code: [ARTISAN-ID]. Customers can check your rating by dialing *XXX*XXX#. Share this code with customers!"
  - [ ] Verified status is re-evaluated if average rating drops below 3.0 after 20+ ratings (badge revoked with notification)
  - [ ] Badge status is visible on all future lookups immediately after assignment

### FR6: Phone Number-Based Account
- **Description**: Artisan account is tied to phone number, no email or password required
- **Channel**: USSD
- **Inputs**: Phone number (auto-detected from USSD session)
- **Outputs**: Account creation or recognition
- **Acceptance Criteria**:
  - [ ] Phone number is automatically captured from USSD session (no manual entry)
  - [ ] Returning artisan is recognized and taken directly to their menu (not re-registered)
  - [ ] Account works across MTN, Airtel, Glo, and 9mobile networks
  - [ ] No OTP required for USSD (network authentication is sufficient)

### SHOULD Have — Month 2-3

### FR7: Artisan Self-Service Profile View
- **Description**: Artisan dials USSD code to see their own profile, rating, and verification progress
- **Channel**: USSD
- **Inputs**: None (auto-identified by phone number)
- **Outputs**: Profile summary: name, trade, rating, number of ratings, verification status, progress to Verified badge
- **Acceptance Criteria**:
  - [ ] Displays on 1-2 USSD screens
  - [ ] Shows "X more ratings needed for Verified badge" if unverified
  - [ ] Shows latest 3 customer comments (truncated to fit USSD screen)

### FR8: WhatsApp Rating Channel
- **Description**: Customers can rate artisans via WhatsApp in addition to USSD
- **Channel**: WhatsApp
- **Inputs**: Artisan ID + star rating + optional comment
- **Outputs**: Confirmation message with artisan's updated rating
- **Acceptance Criteria**:
  - [ ] Customer sends "RATE SP-EL-LAG-00142 4 Good work" and receives confirmation
  - [ ] Pidgin variants accepted: "RATE SP-EL-LAG-00142 4 E sabi work well well"
  - [ ] Same anti-spam rules as USSD (no duplicate ratings within 24 hours)

### FR9: SMS Rating Prompts
- **Description**: After a customer looks up an artisan, system sends SMS 48 hours later asking for a rating
- **Channel**: SMS (outbound only)
- **Inputs**: Lookup event triggers delayed SMS
- **Outputs**: SMS with USSD shortcode to submit rating
- **Acceptance Criteria**:
  - [ ] SMS sent exactly 48 hours after lookup
  - [ ] SMS text: "Did you hire [Artisan Name]? Rate their work: dial *XXX*XXX*RATE# and enter ID [ARTISAN-ID]. Your rating helps other customers."
  - [ ] Maximum 1 rating prompt SMS per customer per week
  - [ ] Customer can reply STOP to opt out of future prompts

### FR10: Trade-Based Artisan Search
- **Description**: Customer searches for verified artisans by trade and location
- **Channel**: USSD
- **Inputs**: Trade (from list), LGA
- **Outputs**: List of top 3-5 verified artisans in that trade and location with ratings
- **Acceptance Criteria**:
  - [ ] Results sorted by rating (highest first)
  - [ ] Only "Verified" artisans appear in search results
  - [ ] Each result shows: name, rating, number of jobs rated
  - [ ] If no verified artisans in selected LGA: expands to neighboring LGAs with message "No verified [trade] artisans in [LGA]. Showing nearby areas:"

### COULD Have — Month 4-6

### FR11: Artisan Profile Web Page
- **Description**: Each verified artisan gets a web profile page accessible via URL
- **Channel**: Web
- **Inputs**: None (auto-generated from USSD data)
- **Outputs**: Web page with artisan details, ratings, reviews, QR code for USSD lookup
- **Acceptance Criteria**:
  - [ ] Page loads in < 3 seconds on 3G connection
  - [ ] Page size < 200KB
  - [ ] Includes shareable link and QR code
  - [ ] SEO-optimized for "[trade] in [location]" searches

### FR12: Job Request Posting
- **Description**: Customer posts a job need, matched artisans are notified
- **Channel**: USSD + SMS
- **Inputs**: Trade needed, LGA, brief description, budget range
- **Outputs**: Notification to top 5 verified artisans in the area
- **Acceptance Criteria**:
  - [ ] Job post completes in 4 USSD screens or fewer
  - [ ] Artisans receive SMS with job details and customer phone number
  - [ ] Maximum 5 artisans notified per job to prevent spam
  - [ ] Job post expires after 48 hours

### WON'T Have — Not in MVP

| Feature | Rationale |
|---------|-----------|
| Mobile app | USSD-first strategy. 42% of connections are 2G. App excludes the primary market. |
| Payment processing / escrow | Regulatory complexity, capital requirements. Customers pay artisans directly in cash. |
| Photo portfolio | USSD cannot display images. Web phase may add this later. |
| Artisan background checks (criminal records) | No accessible criminal record database in Nigeria. Not feasible. |
| GPS-based "find nearest artisan" | Requires smartphone with location services. Contradicts USSD-first approach. |
| Video reviews / testimonials | Bandwidth-heavy, excludes 2G users. Text ratings are sufficient for MVP. |
| Multi-language beyond English/Pidgin | Yoruba, Hausa, Igbo text input on USSD is complex. English + Pidgin covers the addressable market for now. |

---

## 7. Non-Functional Requirements

### NFR1: Performance
- USSD response time: < 2 seconds from request to screen display
- Database query for artisan lookup: < 500ms
- SMS delivery to master artisan after registration: < 60 seconds
- Verification badge computation: runs as background job every hour, completes in < 5 minutes for 100K artisan records
- System must handle 500 concurrent USSD sessions without degradation

### NFR2: Offline/Low-Bandwidth
- USSD is inherently network-dependent (no offline mode possible for USSD)
- All artisan data is server-side; no client-side caching needed for USSD
- SMS fallback for all critical notifications (does not require data connection)
- Web pages (Phase 3) must be < 200KB and functional on 2G connections

### NFR3: Security
- Phone number authentication via network-level USSD session (no passwords)
- All artisan data encrypted at rest in Supabase (AES-256)
- Customer phone numbers used for rating are hashed — artisans cannot see who rated them
- Rate limiting: maximum 20 registrations per IP/session per hour (prevent spam registration)
- NDPR (Nigeria Data Protection Regulation) compliance from day one
- Artisan can request full data deletion via USSD ("DELETE MY ACCOUNT" option)

### NFR4: Scalability
- Database design supports 1M+ artisan records without schema changes
- USSD session management via Africa's Talking handles 10,000+ concurrent sessions
- Supabase free tier supports up to 50K rows; upgrade to Pro ($25/month) at 5,000 artisans
- Background job queue for badge computation scales horizontally

### NFR5: Accessibility
- USSD works on 100% of 138.7M mobile connections (including 42% on 2G)
- No smartphone required for any core function
- No internet data required for any core function
- Menu text in simple English; no jargon, no abbreviations that are not universally understood
- Numeric menu selection only (no text input where avoidable)

### NFR6: Regional
- LGA-level location granularity (774 LGAs across Nigeria)
- Trade categories include region-specific trades (e.g., "boat builder" in riverine areas)
- System supports English and Pidgin English for USSD prompts
- Phone number validation for all 4 Nigerian networks (MTN, Airtel, Glo, 9mobile)

---

## 8. Key Screens & UX

SkillProof's UI is entirely USSD menu trees. Every flow must respect: 160-character screen limit, 180-second session timeout, maximum 5-7 screens per session.

### Artisan Registration Flow

```
Dial *384*SP#

Screen 1:
Welcome to SkillProof.
Artisan verification system.
1. Register as Artisan
2. Check my Profile
3. I'm a Customer

> 1

Screen 2:
Enter your full name:
> Emeka Obi

Screen 3:
Select your trade:
1. Electrician
2. Plumber
3. Welder
4. Carpenter
5. Mechanic
6. More trades...

> 1

Screen 4:
Years of experience:
1. Less than 2 years
2. 2-5 years
3. 5-10 years
4. 10-20 years
5. Over 20 years

> 4

Screen 5:
Your LGA (Local Govt Area):
Enter name:
> Eti-Osa

Screen 6:
Who trained you? Enter
master artisan's phone number
(or 0 if self-taught):
> 08031234567

Screen 7:
Registration complete!
Your ID: SP-EL-LAG-00142
We will contact your master
to verify your training.
Share your ID with customers!
```

### Master Artisan Vouching Flow

```
SMS received:
"SkillProof: Emeka Obi says you
trained him as Electrician for
10-20 years. Confirm? Dial
*384*SP*VOUCH#"

Dial *384*SP*VOUCH#

Screen 1:
Emeka Obi says you trained
him as Electrician.
1. Yes, I trained him
2. No, I did not train him
3. Partially (short period)

> 1

Screen 2:
Thank you! Emeka Obi is now
verified as your trainee.
You are recognized as a
Master Artisan on SkillProof.
```

### Customer Lookup Flow

```
Dial *384*SP#

Screen 1:
Welcome to SkillProof.
1. Register as Artisan
2. Check my Profile
3. I'm a Customer

> 3

Screen 2:
1. Check an artisan
2. Rate an artisan
3. Find an artisan by trade

> 1

Screen 3:
Enter artisan ID or phone:
> SP-EL-LAG-00142

Screen 4:
EMEKA OBI
Trade: Electrician
Experience: 10-20 years
Training: VERIFIED by Chukwu I.
Rating: 4.3/5 (14 jobs rated)
Status: VERIFIED ✓

Hired him? Dial *384*SP*RATE#
```

### Customer Rating Flow

```
Dial *384*SP*RATE#

Screen 1:
Rate an artisan's work.
Enter artisan ID or phone:
> SP-EL-LAG-00142

Screen 2:
Rate EMEKA OBI (Electrician):
1. ★ (Very poor)
2. ★★ (Poor)
3. ★★★ (OK)
4. ★★★★ (Good)
5. ★★★★★ (Excellent)

> 4

Screen 3:
Brief comment (optional):
> Good wiring job

Screen 4:
Thank you! Rating submitted.
Emeka Obi: now 4.3/5 (15 jobs)
```

### Error Handling

- **Artisan not found:** "No artisan with that ID. Check the ID and try again. Example: SP-EL-LAG-00142"
- **Duplicate registration:** "This phone is already registered. Dial *384*SP# and select 'Check my Profile' to see your details."
- **Duplicate rating:** "You already rated this artisan today. You can rate again after 24 hours."
- **Session timeout:** All entered data is lost (USSD limitation). Registration can be re-attempted.

---

## 9. Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| USSD Integration | Africa's Talking | Industry standard for USSD in Africa; session management built-in; works on all networks including 2G; pay-per-session |
| SMS (Outbound) | Termii | Nigerian SMS API; cheapest per-SMS rates for vouching notifications and rating prompts |
| WhatsApp (Phase 2) | Meta Cloud API | Free tier for customer-initiated conversations; adds rich interaction for smartphone users |
| Backend | Next.js 14 API Routes | Single deployment; handles USSD callback webhooks; TypeScript for type safety |
| Database | Supabase PostgreSQL | Free tier sufficient for MVP; Row Level Security; real-time subscriptions for future dashboard |
| Hosting | Vercel | Free tier for MVP; auto-scaling; edge functions for webhook processing |
| Monitoring | PostHog + Sentry | Track: registration → vouching → first rating → verified badge; error tracking on USSD failures |
| Scheduled Jobs | Vercel Cron | Hourly badge computation; daily stats aggregation; weekly engagement SMS |

### Database Schema

```sql
-- Artisans (account = phone number)
artisans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone_number text UNIQUE NOT NULL,        -- +234XXXXXXXXXX
  full_name text NOT NULL,
  artisan_id text UNIQUE NOT NULL,          -- SP-EL-LAG-00142
  trade text NOT NULL,                      -- from predefined list
  experience_band text NOT NULL,            -- '<2', '2-5', '5-10', '10-20', '20+'
  lga text NOT NULL,                        -- Local Government Area
  state text NOT NULL,                      -- derived from LGA
  master_phone text,                        -- master artisan's phone
  master_name text,                         -- master artisan's name
  vouching_status text DEFAULT 'pending',   -- 'pending', 'verified', 'denied', 'partial'
  vouched_by uuid REFERENCES artisans,      -- master artisan's record (if registered)
  is_master boolean DEFAULT false,          -- becomes true after vouching 3+ artisans
  verification_status text DEFAULT 'unverified', -- 'unverified', 'verified', 'suspended'
  average_rating decimal(2,1) DEFAULT 0,
  total_ratings integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  last_active_at timestamptz DEFAULT now()
)

-- Vouching records (append-only)
vouching_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artisan_id uuid REFERENCES artisans NOT NULL,
  master_phone text NOT NULL,
  status text NOT NULL,                     -- 'confirmed', 'denied', 'partial'
  master_comment text,                      -- optional comment for partial
  responded_at timestamptz,
  reminder_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
)

-- Customer ratings (append-only)
ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artisan_id uuid REFERENCES artisans NOT NULL,
  customer_phone_hash text NOT NULL,        -- hashed for privacy
  star_rating integer NOT NULL CHECK (star_rating BETWEEN 1 AND 5),
  comment text,                             -- max 50 chars
  channel text NOT NULL,                    -- 'ussd', 'whatsapp', 'web'
  created_at timestamptz DEFAULT now(),
  UNIQUE(artisan_id, customer_phone_hash, created_at::date) -- 1 rating per customer per artisan per day
)

-- Artisan lookups (for analytics and rating prompt triggers)
lookups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artisan_id uuid REFERENCES artisans NOT NULL,
  customer_phone_hash text NOT NULL,
  channel text NOT NULL,
  rating_prompt_sent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
)

-- Daily aggregated stats (computed by cron job)
artisan_daily_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artisan_id uuid REFERENCES artisans NOT NULL,
  stat_date date NOT NULL,
  lookups_count integer DEFAULT 0,
  ratings_count integer DEFAULT 0,
  average_rating decimal(2,1),
  created_at timestamptz DEFAULT now(),
  UNIQUE(artisan_id, stat_date)
)

-- Trade categories (reference table)
trades (
  id serial PRIMARY KEY,
  code text UNIQUE NOT NULL,               -- 'EL', 'PL', 'WE', etc.
  name text NOT NULL,                      -- 'Electrician', 'Plumber', etc.
  category text NOT NULL                   -- 'Construction', 'Automotive', 'Textile', etc.
)
```

### USSD Session Architecture

```
USSD request (*384*SP#)
  → Africa's Talking callback to Vercel API Route (/api/webhooks/ussd)
  → Parse session ID + phone number + user input
  → Determine session state (new session vs. continuing)
  → Route to appropriate flow (registration, lookup, rating, vouching)
  → Execute database operation
  → Return USSD response (max 160 chars)
  → Session continues or ends

Latency target: < 2 seconds per screen
Session timeout: 180 seconds (Africa's Talking default)
```

### Vouching Notification Flow

```
Artisan completes registration
  → System extracts master artisan phone number
  → Termii SMS API sends notification to master
  → SMS contains USSD shortcode for vouching
  → If no response in 7 days: send 1 reminder SMS
  → If no response in 14 days: mark as "Pending" (artisan can re-trigger)
```

---

## 10. Data Asset Strategy

### What Data SkillProof Generates That Didn't Exist Before

1. **Artisan Trade Census:** First database of who practices what trade, where, with how many years of experience. No government agency, trade association, or private company has this data at scale.
2. **Apprenticeship Lineage Graph:** Master-apprentice training relationships, creating a verifiable chain of skills transfer. This is a social graph that maps how knowledge flows through Nigeria's skilled trades.
3. **Artisan Quality Scores:** Aggregated customer ratings by trade, location, and experience level. The first objective quality signal for informal artisan services.
4. **Customer Demand Patterns:** Lookup data reveals which trades are most in demand, in which locations, at what times. This is market demand intelligence for the skilled trades economy.

### Cross-Product Data Flows

- **SkillProof → VendorScore:** Verified artisan with 4+ star rating = creditworthy for tool/equipment micro-loans. Artisan quality data is a credit signal.
- **SkillProof → InsureMatch:** Artisan trade and quality data enables liability insurance pricing. A verified 4.5-star electrician is a lower insurance risk than an unverified newcomer.
- **SkillProof → MasterBook:** MasterBook documents the apprenticeship; SkillProof documents the career outcome. Together they create a complete skills pipeline from training to market performance.
- **SkillProof → KasaBook:** Artisan business revenue tracking via KasaBook + quality verification via SkillProof = complete artisan business profile for financing.

### Who Would License This Data

| Buyer | Data Needed | Willingness to Pay |
|-------|------------|-------------------|
| Insurance companies (Leadway, AXA Mansard) | Artisan quality data for liability/property risk pricing | N5-20M/year |
| Construction companies | Verified artisan databases for project staffing | N2-10M/year |
| Government agencies (state ministries of works) | Trade census data for workforce planning | N1-5M/year |
| Microfinance banks | Artisan creditworthiness signals for tool/equipment loans | N3-10M/year |
| Real estate developers | Verified artisan pools for housing construction | N2-8M/year |

### Privacy/Anonymization Approach

- Individual artisan ratings, customer phone numbers, and specific job details are private.
- Aggregate data is licensable: "Average electrician rating in Lagos Mainland LGA is 3.8/5 across 340 rated jobs" — this reveals no individual information.
- Artisans own their profiles and can delete them at any time.
- Customer phone numbers are hashed before storage — no one can identify who gave a specific rating.

---

## 11. Value Chain Design

### What Infrastructure SkillProof Builds That Doesn't Exist

SkillProof builds three layers of infrastructure:

1. **Verification infrastructure:** The mechanism for confirming that an artisan has genuine training and skills. Today this verification happens entirely through personal networks (you ask a friend if they know a good electrician). SkillProof digitizes and scales this process.

2. **Reputation infrastructure:** The system for accumulating and querying quality signals over time. Today, an artisan's reputation resets every time they work for a new customer who doesn't know them. SkillProof makes reputation portable and persistent.

3. **Artisan identity infrastructure:** A unique identifier for every registered artisan, queryable from any phone. Today, artisans are invisible to the formal economy. SkillProof gives them a digital identity that can be referenced by insurers, lenders, and employers.

### Four Pillars Assessment

| Pillar | Application |
|--------|------------|
| **Resource commitment** | Investment in USSD infrastructure, artisan community outreach, master artisan engagement. These create a trust network that competitors cannot replicate without the same investment. |
| **Cross-market knowledge** | Urban Company (India, $2B+) proved home services verification creates massive value. SkillProof adapts the insight for USSD-accessible, informal-bottom-up delivery — not the app-based, affluent-top-down approach. |
| **Value-chain coordination** | SkillProof coordinates artisans, master artisans, and customers into a three-sided verification system. Each participant contributes data that the others need. |
| **Transferability** | Verification infrastructure built for artisans can serve any profession where informal training produces undocumented skills: hairdressers, cooks, drivers, farmers. The system is trade-agnostic. |

### Externalities

- **Market efficiency:** Quality-verified artisans can charge fair prices, reducing the race-to-the-bottom pricing that punishes good work.
- **Safety improvement:** Customers choosing verified electricians and gas fitters reduces the incidence of fires, gas leaks, and structural failures.
- **Apprenticeship quality signal:** Master artisans whose trainees consistently get high ratings gain reputation themselves, incentivizing better training.
- **Formalization pathway:** Artisans with SkillProof verification have a digital credential that can serve as a stepping stone toward formal trade licensing if government systems catch up.

---

## 12. Pricing & Unit Economics

### Pricing Model

**Free Tier (Forever Free)**
- Artisan registration
- Master artisan vouching
- Customer ratings (unlimited)
- Customer lookups (up to 5/day)
- Basic profile visible on USSD

The free tier must be genuinely useful. The core verification loop — register, get vouched, get rated, become verified — costs the artisan nothing. This is critical: artisans will not pay upfront for an unproven system.

**Artisan Premium — N1,000-2,000/month ($0.65-1.30)**
- Priority placement in trade-based search results
- SMS notification every time a customer looks up their profile
- Monthly performance report (number of lookups, ratings, comparison to trade average)
- "Premium Verified" badge (higher visibility)
- Up to 20 rating request SMS per month (sent to customers they provide numbers for)

**Customer Verification Fee — N200-500 per lookup ($0.13-0.33)**
- Charged to customers who check artisan verification beyond the 5 free daily lookups
- Or offered as N2,000/month unlimited lookups for estate managers and construction supervisors

**Institutional Tier — N50-200K/month ($33-130)**
- Bulk artisan lookups (unlimited)
- API access for construction companies, real estate developers, insurance companies
- Custom reports by trade, location, and quality tier

### Unit Economics

| Metric | Value | Basis |
|--------|-------|-------|
| USSD cost per session | N5-10 | Africa's Talking per-session pricing |
| Average sessions per artisan registration | 1 | Single session to register |
| Average sessions per customer lookup | 1 | Single session to check |
| SMS cost per vouching notification | N4-5 | Termii per-SMS |
| SMS cost per rating prompt | N4-5 | Termii per-SMS |
| Supabase cost (MVP) | N0 | Free tier covers first 50K rows |
| **Total cost per artisan onboarded** | **N15-25** | Registration USSD + master artisan SMS |
| **Total cost per lookup served** | **N5-10** | Single USSD session |
| **Total cost per rating collected** | **N10-20** | Rating USSD + prompt SMS |

### Revenue Targets by Milestone

| Milestone | Artisans | Verified | Lookups/month | Revenue (NGN) | Revenue (USD) |
|-----------|----------|----------|---------------|---------------|---------------|
| Month 3 | 500 | 10 | 200 | N0 (free phase) | $0 |
| Month 6 | 2,000 | 100 | 2,000 | N100-300K | $65-195 |
| Month 9 | 5,000 | 500 | 10,000 | N500K-1.5M | $325-975 |
| Month 12 | 10,000 | 1,500 | 30,000 | N2-5M | $1,300-3,250 |
| Month 24 | 50,000 | 10,000 | 200,000 | N10-30M | $6,500-19,500 |

### Break-Even Analysis

- Monthly fixed costs: ~N15-25K (Supabase Pro, Vercel, monitoring)
- Variable costs at 5,000 artisans: ~N75-125K/month (USSD sessions + SMS)
- Break-even requires: ~100 premium artisans at N1,500/month avg = N150K/month OR 500+ paid lookups at N300 avg = N150K/month
- Realistic break-even: Month 8-10 with combined premium + lookup revenue

### Cost Structure Test

This is fundamentally different from incumbents. Urban Company spends $50-100 per customer acquisition through digital ads. SkillProof's CAC is N15-25 per artisan (~$0.01-0.02) because USSD sessions cost N5-10 and word-of-mouth is the primary growth driver. No incumbent would pursue a market where the per-unit revenue is N200-500 per lookup — it is too small for their cost structure. This is the cost structure moat.

---

## 13. Go-to-Market: First 10 Customers

### The Core Insight: Artisans Gather in Known Locations

Every Nigerian city has identifiable artisan concentration points: "electrician junctions," mechanic villages, plumber clusters near hardware markets. The GTM starts at these physical locations.

### Channel 1: Artisan Junction Visits (Primary)

**The play:** Visit known artisan gathering points. Find the most senior artisan — the one others respect. Explain SkillProof. Register them first. Ask them to vouch for their trainees who are present. Demonstrate the lookup: "Any customer can dial this code and see your rating. You'll get more jobs." Register 10-20 artisans per visit.

**Target junctions (Lagos):**
- Ajah electrician junction (Lekki-Epe Expressway)
- Mushin mechanic village
- Ikeja artisan cluster (Allen Avenue area)
- Surulere plumber/electrician market

**Target junctions (Port Harcourt — family network):**
- Rumuola mechanic village
- D-Line artisan area
- Mile 1 market artisan cluster

**Target:** 10 junction visits in first month. 15-20 registrations per visit. 150-200 artisans in Month 1.

### Channel 2: Master Artisan Recruitment (Viral Multiplier)

**The play:** Each master artisan who vouches for trainees becomes a SkillProof evangelist. A master who has trained 10-30 apprentices over their career can drive 10-30 registrations. Identify and recruit 10 master artisans in Month 1.

**Expected conversion:** Each master artisan drives 5-15 trainee registrations. 10 masters = 50-150 additional registrations.

### Channel 3: Estate Management Companies

**The play:** Residential estates need verified artisans constantly. The estate manager is the buyer — they need someone to call when a tenant's AC breaks. Offer them free access to the verified artisan database. In exchange, every artisan who works in the estate must register on SkillProof and ask tenants to rate them.

**Target:** 5 estate management companies in Lagos (Lekki, Ajah, VI, Ikoyi, Magodo). Each estate has 20-50 regular artisans.

### Channel 4: Hardware Store Partnerships

**The play:** Hardware stores (where artisans buy materials) are natural distribution points. Place a SkillProof poster with the USSD code at 20 hardware stores. Artisans see it while buying supplies. "Register on SkillProof — get verified — get more customers."

**Target:** 20 hardware stores in Lagos and Port Harcourt. Cost: N2-5K per store for poster placement and store owner incentive.

### Channel 5: Customer-Side Distribution

**The play:** After 50+ artisans are registered, start customer-side distribution. Partner with estate WhatsApp group admins, post in community groups: "Before you hire an artisan, check their rating on SkillProof. Dial *384*SP#. It's free."

### Channel Summary

| Channel | Month 1 | Month 2 | Month 3 | Cost |
|---------|---------|---------|---------|------|
| Artisan junction visits | 150-200 | 100-150 | 50-100 | N30-50K (transport) |
| Master artisan recruitment | 50-150 | 100-200 | 100-200 | N0 |
| Estate management | 0 | 50-100 | 100-200 | N0 (free for estates) |
| Hardware store posters | 0 | 30-60 | 50-100 | N40-100K (posters + incentives) |
| Customer-side (WhatsApp groups) | 0 | 0 | 50-100 lookups/day | N0 |
| **Total artisans registered** | **200-350** | **280-510** | **300-600** | **N70-150K total** |

---

## 14. Risks & Mitigations

### Risk 1: Master Artisan Non-Response

**Likelihood:** High. Master artisans are busy, may not understand the SMS, or may not be motivated to respond.
**Impact:** Artisans stuck in "Pending Verification" — the system feels broken.
**Mitigations:**
- Keep vouching SMS extremely simple: "Dial *384*SP*VOUCH# to confirm"
- Send 1 reminder after 7 days
- Allow artisan to re-trigger vouching request with updated master phone number
- Alternative path: 3+ customer ratings can compensate for missing master vouching (artisan gets "Customer Verified" instead of "Training Verified")
- Pay early-adopter master artisans N500 airtime credit for each vouching completed (first 50 masters only)

### Risk 2: Fake Ratings / Rating Manipulation

**Likelihood:** High. Artisans will ask friends and family to give them 5-star ratings.
**Impact:** Verification becomes meaningless. Customers lose trust.
**Mitigations:**
- Require a previous lookup before a rating is accepted (customer must have checked the artisan first)
- Rate-limit: 1 rating per customer per artisan per day; maximum 3 ratings from the same phone number per month across all artisans
- Anomaly detection: flag artisans who receive 10+ 5-star ratings in a week with no lookups preceding them
- Weight ratings from customers who have rated multiple artisans higher (they are more likely genuine customers)
- Require phone number verification for raters (OTP on first rating)

### Risk 3: Low Customer Adoption of Verification Checks

**Likelihood:** Medium-High. Customers may not know SkillProof exists or may not bother to check before hiring.
**Impact:** Artisans register but see no benefit. Churn.
**Mitigations:**
- Artisan-driven distribution: provide artisans with a simple pitch — "Check my rating before you hire me. Dial *384*SP# and enter my code."
- Physical marketing at the point of decision: posters at estate gates, hardware stores, building material markets
- SMS after lookup: "Hiring [Artisan Name]? Rate their work after the job: dial *384*SP*RATE#" — closes the loop
- Estate management partnerships create captive demand for verification checks

### Risk 4: Trust — "Who is Collecting This Data?"

**Likelihood:** Medium. Artisans may be suspicious of a system that collects their trade information, master's information, and location.
**Impact:** Low registration rate, especially among senior artisans who have the most to gain.
**Mitigations:**
- Master artisan-first approach: when the most respected artisan in a junction registers, others follow
- Clear benefit statement on every USSD screen: "Get verified → Get more customers → Charge better prices"
- Transparent data use: "Your data is yours. We never share your personal information."
- Allow artisans to see exactly what customers see about them (FR7: self-service profile view)

### Risk 5: USSD Cost at Scale

**Likelihood:** Medium. USSD sessions cost N5-10 each. If customer lookups scale to 10,000/day, that is N50-100K/day in USSD costs alone.
**Impact:** Infrastructure costs exceed revenue before premium tiers gain traction.
**Mitigations:**
- Encourage WhatsApp lookup as an alternative (Phase 2) — WhatsApp customer-initiated messages are free
- Web lookup page (Phase 3) costs effectively N0 per lookup
- Customer lookup fees (N200-500 per lookup beyond free tier) offset USSD costs directly
- Volume pricing negotiation with Africa's Talking at 5,000+ daily sessions

### Risk 6: Network/Connectivity Issues

**Likelihood:** High. USSD sessions fail when networks are congested, especially during peak hours.
**Impact:** Failed registrations, failed lookups = frustration and churn.
**Mitigations:**
- SMS fallback for critical notifications (vouching requests, badge awards) — SMS delivery is more reliable than USSD
- Retry logic: if USSD session fails, send SMS with instructions to retry
- Support all 4 networks (MTN, Airtel, Glo, 9mobile) — user can retry on whichever network is working
- Design all flows to be resumable: if session times out mid-registration, next dial picks up where they left off (using phone number as session key)

### Risk 7: Competition from Tech-Funded Platforms

**Likelihood:** Low-Medium (18-24 month horizon). A well-funded startup could build an app-based artisan marketplace.
**Impact:** If they achieve distribution, could capture the smartphone segment.
**Mitigations:**
- USSD moat: app-based competitors cannot reach the 42% on 2G
- Data moat: early artisan verification data and rating history cannot be replicated
- Network moat: master-artisan vouching graph is a social network that compounds over time
- Speed: establish presence in 5 cities before competition materializes

---

## 15. Constraints & Assumptions

### Constraints

- **Solo founder, NYC-based:** Cannot do physical market visits personally. Relies on family network in Port Harcourt and paid agents in Lagos.
- **Budget: $0-5K:** All infrastructure must run on free tiers initially. USSD and SMS costs are the primary expenditure.
- **Tech stack:** Next.js + Supabase + Africa's Talking + Termii. No deviation without strong justification.
- **USSD character limits:** 160 characters per screen. Every message must fit.
- **USSD session timeout:** 180 seconds. Registration must complete within this window.
- **Timeline:** MVP in 2-3 weeks. First artisan registrations in Week 3-4.

### Assumptions

- **A1:** Master artisans will vouch for their trainees when asked via SMS/USSD. *Test: 50% vouching response rate within 14 days.*
- **A2:** Artisans will share their SkillProof ID with customers. *Test: 30% of registered artisans report sharing their ID within 30 days.*
- **A3:** Customers will check artisan verification before hiring. *Test: 10% lookup-to-rating conversion (customer checks artisan, then later rates them).*
- **A4:** 10 ratings is a sufficient threshold for meaningful verification. *Test: correlation between star rating at 10 reviews and at 30 reviews is >= 0.7.*
- **A5:** Africa's Talking USSD infrastructure is reliable enough for production use across all 4 Nigerian networks. *Test: < 5% session failure rate in first month.*
- **A6:** Artisans will adopt without financial incentive — the promise of verification and more customers is sufficient motivation. *Test: 50+ registrations in first 2 weeks without any payment.*

### Out of Scope

| Item | Rationale |
|------|-----------|
| Artisan payment processing | Regulatory complexity; customers pay artisans directly in cash |
| Background checks / criminal records | No accessible database exists in Nigeria |
| Artisan training / upskilling | Different product entirely; SkillProof verifies, does not train |
| Dispute resolution between customer and artisan | SkillProof is a rating system, not an arbitration service |
| Non-Nigerian markets | Nigeria-only for the first 24 months; expansion after product-market fit |
| Inventory/tools management for artisans | Different product; keep SkillProof focused on verification |

---

## 16. Success Criteria

### Launch Criteria (Ship When ALL Are Met)

- [ ] Artisan registration via USSD completes in under 60 seconds with zero errors on 3 consecutive test runs
- [ ] Master artisan vouching via USSD works end-to-end (SMS sent, USSD response captured, status updated)
- [ ] Customer lookup returns correct artisan data in < 2 seconds
- [ ] Customer rating submission works via USSD with confirmation
- [ ] Verification badge is correctly assigned when threshold is met (tested with synthetic data)
- [ ] 5 real artisans complete full registration flow (not test accounts)
- [ ] 2 real master artisans complete vouching flow
- [ ] System handles 50 concurrent USSD sessions without failure (load tested)

### Success Metrics (3 Months Post-Launch)

- [ ] 500+ registered artisans across at least 3 trades
- [ ] 50+ master artisan vouches completed (10%+ vouching rate)
- [ ] 100+ customer ratings submitted
- [ ] 10+ artisans reach "Verified" status
- [ ] 200+ customer lookups per month
- [ ] 7-day artisan retention (return to check profile): > 20%
- [ ] Artisan registration → vouching → first rating conversion: > 5%
- [ ] Data asset: database contains artisan records spanning 10+ trades in 5+ LGAs

---

## 17. Build-or-Skip Scorecard

| Dimension | Weight | Score (1-10) | Weighted | Rationale |
|-----------|--------|-------------|----------|-----------|
| Build Speed | 5% | 8 | 0.40 | USSD menu flows + Supabase database + Africa's Talking integration. No complex UI. Functional MVP in 2-3 weeks. Slightly more complex than KasaBook due to three-party vouching flow. |
| Time to Revenue | 15% | 3 | 0.45 | First revenue from per-lookup fees at Month 6-8 earliest. Artisan premium subscriptions require proven value (verified artisans getting more jobs). Faster than KasaBook's 12-month timeline but still slow. |
| Market Size | 15% | 9 | 1.35 | 40-60M artisans in Nigeria. Artisan services market is hundreds of billions of naira annually. Every homeowner, estate, construction company, and business is a potential customer. |
| Competition | 10% | 9 | 0.90 | No USSD-based artisan verification system exists anywhere in Nigeria. VConnect and Nigerians.com serve the web-browsing, formal segment. Zero competition for informal artisans. |
| Skill Fit | 15% | 7 | 1.05 | USSD webhook development, database design, and data aggregation are within the builder's stack. Anomaly detection for fake ratings leverages AI/data science skills. Distribution requires physical presence (family network bridges this). |
| Capital Required | 10% | 9 | 0.90 | Under $30/month infrastructure for MVP. USSD sessions and SMS are primary variable costs. Total first-year budget under $2K. |
| Buyer Clarity | 20% | 5 | 1.00 | Primary buyers are individual artisans — you cannot call them, you must visit their junctions. Secondary buyers (estate managers, construction companies) are more reachable but need a populated database first. Chicken-and-egg problem. |
| Fintech Upside | 10% | 8 | 0.80 | Verified artisan data enables: tool/equipment financing (micro-loans based on rating and job volume), artisan liability insurance (priced on quality data), and job marketplace revenue (commission on matched jobs). Strong fintech pathway but requires scale. |

### Weighted Composite Score

| Dimension | Weighted Score |
|-----------|---------------|
| Build Speed (5%) | 0.40 |
| Time to Revenue (15%) | 0.45 |
| Market Size (15%) | 1.35 |
| Competition (10%) | 0.90 |
| Skill Fit (15%) | 1.05 |
| Capital Required (10%) | 0.90 |
| Buyer Clarity (20%) | 1.00 |
| Fintech Upside (10%) | 0.80 |
| **TOTAL** | **6.85 / 10** |

### Verdict: BUILD (Layer 1 Strategic Asset — Complements MasterBook)

A 6.85 score reflects strong fundamentals held back by the chicken-and-egg problem (Buyer Clarity: 5) and slow revenue timeline (Time to Revenue: 3). The market size, competition vacuum, and capital efficiency are all excellent. SkillProof's real value is as infrastructure: the artisan verification database it creates feeds financial products (insurance, lending, job marketplace) that generate much higher revenue. Build alongside MasterBook — together they create the complete artisan career pipeline from training documentation to market reputation.

---

## 18. Disruption Self-Assessment

### Criterion 1: Targets Overlooked or Non-consuming Segments

**Rating: STRONG FIT**

40-60 million Nigerian artisans have zero quality signaling. They are not underserved by existing verification systems — they are completely unserved. No product, no platform, no government system provides artisan verification at scale for the informal sector. These artisans are non-consumers of quality signaling in the purest sense: they have never had it, and no one has ever tried to provide it to them. The customer side is equally non-consuming — no Nigerian has ever been able to check an artisan's verified rating before hiring them.

### Criterion 2: Appears Deliberately "Worse" (but Good Enough) at First

**Rating: STRONG FIT**

A USSD-based verification system with text-only ratings, no photos, no detailed reviews, no booking system, no payment processing. An Urban Company user in Mumbai would find it primitive. But for Emeka the electrician and his customers, it is infinitely better than nothing. The core job — "can I trust this artisan?" — is answered with a USSD lookup that takes 15 seconds. That is good enough. The simplicity is the strategy.

### Criterion 3: Gains Traction via Low-End or New-Market Foothold

**Rating: STRONG FIT (New-Market)**

This is a pure new-market foothold. There is no existing artisan verification market in Nigeria that SkillProof is undercutting. It is creating a category that does not exist. Informal artisans have never been verified. Customers have never checked artisan ratings. SkillProof creates first-time users of artisan quality signals — exactly as Indomie created first-time eaters of instant noodles.

### Criterion 4: Reimagines the Value Chain

**Rating: STRONG FIT**

The value chain innovation is the three-party verification loop: artisan self-reports → master artisan vouches → customer rates. This leverages existing social infrastructure (apprenticeship relationships) as verification backbone. No formal certification body, no government licensing agency, no third-party auditor is needed. The value chain is built from the social trust that already exists in artisan communities, digitized via USSD. No incumbent operates this way because incumbents rely on formal certification processes that do not reach the informal sector.

### Criterion 5: Prioritizes Scaling a Core Solution

**Rating: STRONG FIT**

The MVP is four functions: register, vouch, rate, lookup. No job marketplace, no booking system, no payment processing, no photos, no chat. Maximum distribution of the minimum verification tool. Features come after 10,000 registered artisans, not before. This is the Indomie playbook: one product, maximum reach, then expand.

### Criterion 6: Demands a Different Cost Structure

**Rating: STRONG FIT**

SkillProof's cost per artisan onboarded is N15-25 (~$0.01-0.02). Urban Company's customer acquisition cost is $30-50. The cost structures are not comparable — they serve different segments with different economics. SkillProof can operate profitably at N200-500 per customer lookup because its infrastructure costs are pennies per interaction. An app-based platform with customer support, marketing spend, and payment processing infrastructure could never serve this price point.

### Criterion 7: Converts Non-consumption into Growth

**Rating: STRONG FIT**

Every SkillProof registration is a first-time verification event. The total market for "artisan quality signals" expands because of the product. Growth comes from artisans who previously had zero verification, not from stealing users from existing platforms. The economic ripple: verified artisans charge fair prices → quality improves → customers pay more willingly → artisan income rises → demand for verification grows. This is the non-consumption to growth spiral.

### Criterion 8: Can Mature to Surpass Mainstream Offerings

**Rating: PARTIAL FIT**

The maturation path is clear: USSD verification → WhatsApp ratings → web profiles → job marketplace → artisan financing platform. At scale, SkillProof could surpass Urban Company's model in Africa because it starts from the bottom (reaching 42% on 2G) while Urban Company can never go below the smartphone floor. However, surpassing mainstream offerings in features and UX will require significant investment in web/app development that is not guaranteed. The data moat (uniquely having informal artisan quality data) is the more likely long-term advantage than feature superiority.

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

All three non-negotiable criteria are met. The partial fit on Criterion 8 is an honest acknowledgment that maturing to surpass app-based platforms in UX/features is uncertain, though the data moat provides an alternative path to long-term dominance.

---

## 19. MNC Anti-Pattern Check

| Pattern | Match? | Assessment |
|---------|--------|------------|
| **1. Phantom Middle Class** | NO MATCH | SkillProof targets the base of the pyramid — informal artisans and customers who hire them. No assumption about a middle class market. The primary persona earns N150-250K/month, not N1M+. |
| **2. Push, Don't Pull** | NO MATCH | The pull test is passed: customers already pay N5-10K for "inspection" by second artisans, estate managers maintain informal approved lists, and artisans already differentiate on word-of-mouth reputation. SkillProof digitizes an existing behavior, not inventing a need. |
| **3. Infrastructure Entitlement** | NO MATCH | SkillProof assumes zero existing infrastructure: no artisan database, no verification system, no internet required. It builds on USSD (works on every phone), leverages existing apprenticeship social networks (no new infrastructure needed), and creates the verification database from scratch. |
| **4. Imported Management** | NO MATCH | No management to import. Solo founder with family network in Port Harcourt for local execution. Artisan community ambassadors will be local artisans themselves. |
| **5. Blame and Exit** | LOW RISK | The builder's commitment is demonstrated by building multiple products in the portfolio, not a one-shot bet. If SkillProof struggles, the data and infrastructure feed other products (MasterBook, VendorScore). There is no exit — the investment compounds across the portfolio. |
| **6. Premium Positioning in a Value Market** | NO MATCH | Free tier is the core product. Premium tier is N1-2K/month (~$0.65-1.30). Customer lookup is N200-500. These are bottom-of-pyramid price points. No premium positioning whatsoever. |

**No MNC anti-patterns detected.** SkillProof is designed from Nigeria's market reality outward, not from a foreign model inward. The USSD-first approach, free core tier, and reliance on existing social infrastructure (apprenticeship networks) are the opposite of every MNC failure pattern.
