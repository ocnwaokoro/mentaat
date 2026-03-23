# Complete Gap Analysis: Source Research vs. Existing PRDs

**Date:** March 21, 2026
**Purpose:** Exhaustive identification of every business opportunity, pain point, quantified spending figure, and market gap in the source research that is NOT addressed by PRDs 01-10.
**Method:** Line-by-line extraction from all 5 source .md files, cross-referenced against PRDs 01 (PayMatch), 02 (TaxGuard), 03 (ForexGuard), 04 (ClearFast), 05 (GenTrack), 06 (CashFlow AI), 07 (CollectPro), 08 (PortPulse), 09 (SupplyLink), 10 (FreightCompare).

**Note:** PRD 12 (gaps-and-new-ideas.md) partially addressed some of these. This document is the definitive, exhaustive catalog. Where PRD 12 touched a gap, this document goes deeper.

---

## HOW TO READ THIS DOCUMENT

Each gap entry includes:
1. **Specific data point or pain** (with numbers from source)
2. **Source file** it came from
3. **Why existing PRDs don't cover it**
4. **Standalone product or feature?**
5. **Revenue model**
6. **Buyer persona**

---

# CATEGORY 1: HEALTHCARE SECTOR — BEYOND SAAS

## Gap 1.1: Drug Import Dependency & NAFDAC Registration Bottleneck

**Data:** 70-75% of medicines consumed in Nigeria are imported. NAFDAC drug registration takes 6-12 months and costs N500K-2M. Pharmaceutical imports totaled $1.1B+ in 2022.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3 sector deep dive); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 8.6)

**Why not covered:** PRDs focus on SaaS tools for existing business processes. No PRD addresses the pharmaceutical supply chain or the NAFDAC registration bottleneck — a compliance automation opportunity analogous to ClearFast for customs but for drug approvals.

**Standalone or feature:** STANDALONE — "NAFDATrack" — NAFDAC Registration Management Platform

**Revenue model:** N100-300K/month per pharmaceutical company or agent. Tracks application status, pre-validates documentation, manages compliance timelines, flags deficiencies before submission.

**Buyer persona:** Pharmaceutical importers, local drug manufacturers, regulatory affairs consultants. Nigeria has 100+ pharma companies and thousands of drug importers.

---

## Gap 1.2: Health Insurance Coverage Crisis — HMO Cash Flow & Claims

**Data:** Health insurance covers only 5% of population (11M of 237M). NHIS covers <10M people. 70% of Nigerians pay entirely out-of-pocket. HMO claims reimbursement takes 30-90 days. Insurance penetration is 0.34% of population.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 8.6)

**Why not covered:** PRD 09 (SupplyLink) does invoice factoring for general B2B but never addresses healthcare-specific claims financing. No PRD targets the HMO reimbursement delay problem or health insurance distribution.

**Standalone or feature:** STANDALONE — "ClaimsPay" — HMO Claims Advance Platform. HMOs submit verified claims, platform advances payment at discount, collects from NHIS/corporate employers.

**Revenue model:** 3-5% discount on advanced claims. If just 5% of the N622B in annual net claims were advanced: N31B addressable volume, N930M-1.55B in revenue.

**Buyer persona:** Private hospitals, diagnostic labs (4,000+ facilities), HMO operators.

---

## Gap 1.3: Medical Tourism Outflow

**Data:** Nigerians spend $1B+ annually on medical tourism abroad. Some tertiary hospitals spend N50-100M on diesel yearly.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section F)

**Why not covered:** No PRD addresses healthcare coordination, medical tourism redirection, or domestic healthcare quality marketplace.

**Standalone or feature:** FEATURE within a healthcare platform. Lower priority as standalone.

**Revenue model:** Commission on domestic healthcare referrals or premium hospital discovery platform.

**Buyer persona:** Corporates with employee health benefits, HNWIs seeking quality care.

---

## Gap 1.4: Vaccine Cold Chain — Only 40% Coverage

**Data:** Only 40% of primary health centers have vaccine-capable refrigerators. 97% of Nigerians pay out-of-pocket for care.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section F)

**Why not covered:** No PRD touches vaccine logistics or primary healthcare infrastructure monitoring.

**Standalone or feature:** FEATURE — could integrate with GenTrack's infrastructure monitoring concept. Temperature monitoring for healthcare cold chain.

**Revenue model:** N50-100K/month per facility. Government/NGO contracts.

**Buyer persona:** State governments, UNICEF/WHO country offices, pharmaceutical distributors.

---

# CATEGORY 2: EDUCATION SECTOR

## Gap 2.1: N2 Trillion Classroom Shortfall

**Data:** N2T shortfall in classroom space. Private schools educate ~40% of students in some cities. Only ~35% of schools have reliable broadband. EdTech market: $30-50M projected in 2025. 8-month public university strike in 2022. Education abroad: $2B+ annually. Top private schools: N1-5M per year per student.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section G); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 8.7 in TOC)

**Why not covered:** ZERO PRDs address education. Not even mentioned in any of the 10 products.

**Standalone or feature:** STANDALONE — "SchoolOps" — Private School Management & Financial Platform

**Revenue model:** N30-75K/month per school. Fee collection management (parents pay late just like B2B customers — CollectPro logic applies), staff payroll/compliance (TaxGuard logic), facility cost tracking (GenTrack logic for school generators), parent communication portal.

**Buyer persona:** Private school owners and administrators. There are thousands of private schools across Nigeria, many with N1-5M/year tuition per student, making them substantial businesses with real technology budgets.

---

## Gap 2.2: Academic Brain Drain — Faculty-to-Student Ratio Crisis

**Data:** 5,000+ lecturers emigrate yearly (ASUU). 2,300+ Nigerian academics relocated to UK since 2021. University of Lagos lost 60% of staff. Faculty-to-student ratios: 1:60 (vs UNESCO ideal 1:20). Some departments: 1:200. Primary teacher deficit: 194,876 (2024) to 278,000 (2025).

**Source:** Claude-Consolidate NIG Market Research.md (Document 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 9)

**Why not covered:** PRD 12 proposed "JapaShield" for general brain drain risk assessment but no PRD targets the specific academic/education staffing crisis.

**Standalone or feature:** FEATURE — could be specialized vertical within JapaShield or a standalone academic staffing platform.

**Revenue model:** Recruitment marketplace for adjunct/visiting lecturers, connecting diaspora academics with Nigerian institutions for remote teaching.

**Buyer persona:** University vice-chancellors, private university owners, medical school deans.

---

## Gap 2.3: Education Spending Abroad ($2B+)

**Data:** $2B+ spent annually by Nigerians on education abroad.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section G)

**Why not covered:** No PRD addresses cross-border education payments, application management, or education financing.

**Standalone or feature:** STANDALONE — "EduPay" — Cross-border education payment platform. Help Nigerian families pay tuition abroad at competitive FX rates.

**Revenue model:** 0.5-1.5% FX spread on $2B+ annual flow = $10-30M revenue opportunity.

**Buyer persona:** Parents paying for children's education in UK, US, Canada, Ghana. Overlaps with ForexGuard audience but is consumer-facing.

---

# CATEGORY 3: CONSTRUCTION & REAL ESTATE

## Gap 3.1: 20-28M Housing Deficit / N21T Market

**Data:** Housing deficit: 20-28M units requiring N21T (~$14B). Cement prices surged 150%+ (N3,500 to N8,800-10,200/bag). Dangote controls ~60% of cement market. Steel rebar: ~N1.6M per ton in 2024. Housing construction costs inflating 20-30% annually. Mortgage rates: ~20%.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section E); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 8.5)

**Why not covered:** PRD 12 proposed "BuildTrack" (construction cost tracker) but no full PRD was written. The 80.8 expansion index (highest of any sector in CBN survey) makes this a glaring omission.

**Standalone or feature:** STANDALONE — "BuildTrack" deserves a full PRD. Real-time material price tracking, supplier comparison, budget vs. actual tracking, project milestone management.

**Revenue model:** N100-200K/month per active project. Construction companies, property developers, project managers.

**Buyer persona:** Construction company owners, property developers, quantity surveyors. CBN survey shows construction has highest expansion outlook (80.8 index) — these buyers are actively growing.

---

## Gap 3.2: Land Title Crisis — 3% Formal Titles, N300B in Disputes

**Data:** Only 3% of Nigerians have valid land titles. Formally documented land: <10%. N300B tied up in land disputes and duplicate titles.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section E); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 8.5)

**Why not covered:** No PRD addresses land documentation, title verification, or dispute resolution technology.

**Standalone or feature:** STANDALONE — "TitleCheck" — Land Title Verification & Due Diligence Platform

**Revenue model:** N50-100K per property search/verification report. Target real estate buyers, mortgage lenders, property developers.

**Buyer persona:** Property buyers, real estate lawyers, mortgage banks, construction companies acquiring land.

---

## Gap 3.3: Mortgage Market — 20% Interest Rates

**Data:** Mortgage rates ~20%. Combined with the housing deficit, this means massive demand for alternative financing models.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section E)

**Why not covered:** No PRD addresses property/mortgage financing.

**Standalone or feature:** FEATURE potential within SupplyLink's financing model, but really deserves specialized treatment.

**Revenue model:** Rent-to-own platform or construction milestone financing. 1-3% origination fees.

**Buyer persona:** Middle-class Nigerians seeking housing, developers offering payment plans.

---

# CATEGORY 4: INSURANCE MARKET

## Gap 4.1: 0.34% Penetration — The Massive Underpenetration

**Data:** Insurance penetration: 0.34% of population vs >20% in developed markets. Total gross written premiums: N1.56T ($1.02B) in 2024, up 56% from N1.003T in 2023. Non-life: N1.1T (70%). Life: N470B. Net claims: N622B. Industry assets: N3.9T (46.1% YoY growth).

**Source:** Claude-Consolidate NIG Market Research.md (Document 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 4)

**Why not covered:** PRD 12 proposed "InsureMatch" (insurance comparison) but no full PRD was written. A 56% growth market with 99.66% untapped population deserves dedicated attention.

**Standalone or feature:** STANDALONE — full PRD needed for InsureMatch. Insurance comparison engine with embedded purchase.

**Revenue model:** 15-25% commission from insurers per policy sold. Zero cost to buyer. On a N1.56T premium market growing 56%: even 0.1% market share = N1.56B in premiums intermediated = N234-390M in commission revenue.

**Buyer persona:** SME owners who self-insure by default, fleet operators, property owners, importers (cargo insurance), manufacturers (business interruption insurance).

---

## Gap 4.2: Cyber Insurance Market

**Data:** Cyber insurance market: N46B ($30M). Growing alongside N52.3B in digital fraud losses (196% spike YoY).

**Source:** Claude-Consolidate NIG Market Research.md (Document 2)

**Why not covered:** No PRD addresses cyber insurance specifically, though SecureOps (PRD 12 proposal A7) addresses cybersecurity assessment.

**Standalone or feature:** FEATURE — bundle cyber insurance procurement with SecureOps assessment. "Get assessed, then get insured."

**Revenue model:** Commission on cyber insurance policies.

**Buyer persona:** Fintechs, banks, e-commerce companies processing payments.

---

# CATEGORY 5: WATER INFRASTRUCTURE

## Gap 5.1: 95%+ Self-Provision — The Hidden Billions

**Data:** 95%+ of firms drill boreholes or buy water. Borehole drilling costs: N150K-4M depending on location/depth. Lagos borehole: N250K-450K. Northern states: N400K+. Benin City: N1.2-4M. Lagos water tanker: N25K-40K per 10,000 liters (up from N3K a decade ago — 700%+ increase). Oyo State regulated rate: N14K per meter. Additional: wellhead installation N22K, flushing N25K, water quality testing N65K.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 3 and 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 5.4 in TOC)

**Why not covered:** PRD 12 proposed "WaterTrack" but dismissed it as "too niche" and suggested it be a feature in GenTrack. The 700%+ increase in water tanker costs and the N100-500B market range suggest it deserves more than dismissal.

**Standalone or feature:** FEATURE inside GenTrack (as PRD 12 suggested) but the water tanker logistics side could be a standalone marketplace connecting water vendors to commercial buyers.

**Revenue model:** Commission-based water tanker marketplace (aggregating water vendors), or N10-20K/month add-on to GenTrack for water cost tracking.

**Buyer persona:** Industrial estates, hospitals, hotels, schools — any facility buying water regularly.

---

# CATEGORY 6: BRAIN DRAIN / JAPA ECONOMY

## Gap 6.1: Diaspora Remittance & Investment Channel

**Data:** 3.68M Nigerians emigrated in 2 years. 69% of 18-35 year olds willing to relocate. $11B annual loss from digital skills gaps. 42,000 nurses and 16,000 doctors left in 3 years. International positions pay 3-7x Nigeria salaries (N10-20M vs N3-5M).

**Source:** Claude-Consolidate NIG Market Research.md (Document 1); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 9)

**Why not covered:** PRD 12 proposed "JapaShield" (retention tool) but no PRD addresses the opportunity FROM the diaspora — channeling diaspora investment, skills, and purchasing power back into Nigeria.

**Standalone or feature:** STANDALONE — "DiasporaInvest" — Platform for Nigerian diaspora to invest in Nigerian B2B opportunities (commercial paper, invoice factoring via SupplyLink, equipment leasing, real estate).

**Revenue model:** 1-2% transaction fee on invested capital. If 1% of 3.68M emigrants invest $1,000/year = $36.8M flow = $368K-736K in fees.

**Buyer persona:** Nigerian professionals in US, UK, Canada, UAE earning hard currency and seeking naira-denominated yields above inflation.

---

## Gap 6.2: Remote Work / Talent Export Platform

**Data:** 150,000 tech workers needed. Senior software developer salary in Nigeria: N15-20M ($20-25K) vs international rates of $60-150K. One unicorn startup lost 40% of engineering team in 18 months. Replacement cost: 6-12 months salary.

**Source:** Claude-Consolidate NIG Market Research.md (Document 1); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** No PRD addresses the export of Nigerian talent to international companies (the reverse of the brain drain problem — monetizing it rather than fighting it).

**Standalone or feature:** STANDALONE — Nigerian talent-as-a-service platform for international companies. Employer of Record (EOR) for Nigerian workers serving foreign clients.

**Revenue model:** 15-25% markup on salaries. If 1,000 workers at average $25K = $25M billing = $3.75-6.25M in margin.

**Buyer persona:** US/EU companies seeking cost-effective engineering, design, and operations talent. Existing players (Horizons, Mercans) target multinationals hiring IN Nigeria; this targets the opposite direction.

---

# CATEGORY 7: CYBERSECURITY

## Gap 7.1: N52.3B Fraud — No University Programs

**Data:** Digital fraud losses surged from N17.7B (2023) to N52.3B (2024) — 196% spike. 70% of Nigerian companies experienced ransomware (2022). 3,759 cyber attacks per week. No accredited Nigerian university offers cybersecurity degrees. 150,000 tech workers needed. Entry-level cybersecurity salaries: N4-6M (talent shortage signal). CBN mandating cybersecurity audits.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 3); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 10)

**Why not covered:** PRD 12 proposed "SecureOps" (cybersecurity compliance checker) but no full PRD exists. The regulatory mandate from CBN creates forced buyers. The N52.3B fraud figure and 196% growth rate make this urgent.

**Standalone or feature:** STANDALONE — "SecureOps" needs a full PRD. Start with assessment-only (lighter lift than managed security), then expand.

**Revenue model:** N100-200K per assessment, or N150K/month for continuous monitoring. At 200+ fintechs requiring CBN compliance: minimum N24M-48M addressable.

**Buyer persona:** Fintechs (regulatory mandate), commercial banks, insurance companies, any CBN-regulated institution. The founder's CompTIA Security+ certification is directly relevant.

---

## Gap 7.2: Cybersecurity Training / Academy

**Data:** No accredited Nigerian university offers cybersecurity degrees. 150,000 tech workers needed but supply gap massive.

**Source:** Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 10); Claude-Consolidate NIG Market Research.md

**Why not covered:** No PRD addresses cybersecurity education or workforce development.

**Standalone or feature:** STANDALONE — "CyberAcademy" — Online cybersecurity training platform targeting Nigerian professionals.

**Revenue model:** N500K-2M per certification program. Corporate training contracts N2-5M per engagement.

**Buyer persona:** IT professionals seeking career advancement, banks/fintechs needing to upskill staff, university graduates seeking employable skills.

---

# CATEGORY 8: MULTINATIONAL EXITS

## Gap 8.1: Talent, Assets, & Distribution Gap Arbitrage

**Data:** P&G, Kimberly-Clark, Microsoft, GSK (51 years), Sanofi, Diageo, Bolt Food all exited. 18,000 manufacturing jobs lost in 2024. 767 companies shut down by 2023. Assets available at distressed valuations.

**Source:** Claude-Consolidate NIG Market Research.md (Document 1); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** PRD 12 proposed "ExitBridge" (talent/gap marketplace) but no full PRD. The distribution gap is particularly valuable — when P&G exits, their product categories still have demand. Nigerian businesses filling those gaps need tools and intelligence.

**Standalone or feature:** STANDALONE (timing-dependent). Could also be a specialized recruiting/marketplace feature.

**Revenue model:** Per-hire fees (N50-100K per placement), distribution rights brokerage (commission-based), asset sale facilitation (2-5% transaction fee).

**Buyer persona:** Nigerian manufacturers and distributors looking to capture market share from exiting multinationals. HR departments seeking trained talent.

---

## Gap 8.2: P&G Exit Quote — Specific CFO Pain

**Data:** P&G CFO Andre Schulten: "It gets increasingly difficult to operate and create U.S dollar value...it is difficult for us to operate because of the macroeconomic environment." (December 2023 exit)

**Source:** Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Executive Summary)

**Why not covered:** ForexGuard (PRD 03) addresses FX visibility but doesn't address the broader "creating USD value" problem — which is about pricing strategy for companies earning naira but reporting in dollars. No tool helps remaining multinationals or Nigerian companies with international shareholders model naira-to-USD value creation.

**Standalone or feature:** FEATURE within ForexGuard — "USD Value Creation Dashboard" showing how naira revenue translates to USD returns for international investors/parent companies.

**Revenue model:** Premium tier of ForexGuard at N250-500K/month.

**Buyer persona:** CFOs at remaining multinationals (MTN, Dangote, BUA), Nigerian companies with foreign investors.

---

# CATEGORY 9: REGIONAL VARIANCE

## Gap 9.1: South-East Collapse (CI: 18.7) vs North-East Strength (52.7)

**Data:** CBN Business Expectations Survey shows massive regional variance: North-East CI 52.7 (highest optimism), South-East CI 18.7 (lowest — almost 3x difference). South-East crashed from 23.5 to 18.7 in one month (Oct to Nov).

**Source:** Claude-From building to revenue.md (CBN survey analysis section)

**Why not covered:** PRD 12 flagged this as "B2: The South-East Collapse" but suggested only vague ideas. No PRD provides region-specific solutions.

**Standalone or feature:** FEATURE — Regional risk scoring and business continuity tools. Also: market intelligence for businesses considering geographic expansion.

**Revenue model:** Premium data product within CashFlow AI or ForexGuard — "Regional Risk Module" at N30-50K/month add-on.

**Buyer persona:** Multi-location businesses deciding where to expand, insurers pricing regional risk, investors evaluating state-level opportunities.

---

## Gap 9.2: Regional Workaround Spending Concentration

**Data:** Lagos accounts for 40-50% of workaround spending (N40-45T). Rivers: N8-10T (8%). Kano: N6-8T (6%). Oyo: N5-6T (5%). FCT Abuja: N4-5T (4%). Remaining 31 states: N40-50T (37%).

**Source:** Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Geographic Concentration section)

**Why not covered:** All PRDs implicitly target Lagos. The remaining 31 states representing 37% of spending are completely unaddressed in go-to-market strategy.

**Standalone or feature:** Not a product gap but a GO-TO-MARKET gap. Every PRD should have a Phase 2 expansion plan for non-Lagos markets.

**Revenue model:** N/A — this is a distribution strategy insight.

**Buyer persona:** Same personas as existing PRDs, but in Kano, Port Harcourt, Ibadan, Abuja.

---

# CATEGORY 10: INFORMAL ECONOMY

## Gap 10.1: 80-90% of Retail is Informal — Bookkeeping Gap

**Data:** Informal retail dominates 80-90% of FMCG sales (open markets, kiosks). Fragmented distribution with 3-5 intermediary layers adding 20-30% markup. Upcountry consumers pay ~50% more than Lagos prices. Last-mile delivery: often N1,000+ per delivery (>10% of order value).

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section D); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 8.4)

**Why not covered:** PRD 12 flagged this as "B7: Informal Economy Digitization Gap" and mentioned Khatabook (India, 10M+ users) as a model. No full PRD exists. Sabi and OmniRetail address ordering/distribution but NOT basic bookkeeping for the trader.

**Standalone or feature:** STANDALONE — "Kasabook" — Simple bookkeeping app for market traders. Record sales, expenses, debts owed to you, debts you owe. USSD interface critical (see Gap 11.2).

**Revenue model:** Freemium. Free basic ledger, N2-5K/month for inventory tracking and reports. At massive volume: data monetization (sales velocity data sold to FMCG brands). Khatabook proved this model in India at 10M+ users.

**Buyer persona:** Market traders, kiosk owners, informal retailers. Millions of potential users at low price points.

---

## Gap 10.2: Esusu/Ajo (Informal Lending Circles) Digitization

**Data:** PRD 12 flagged "informal lending circle management software" as an opportunity but provided no detail.

**Source:** Claude-Making $5K in a month from Nigeria.md (PRD 12 reference); general research context

**Why not covered:** No PRD addresses digitizing traditional savings/lending circles (esusu/ajo), which are a primary financial instrument for millions of Nigerians.

**Standalone or feature:** STANDALONE or FEATURE within a broader informal economy financial platform.

**Revenue model:** N1-3K/month per circle administrator (or free with premium features). Transaction fees on digital payouts. The MoneyFellows model (Egypt, $31M raised) proves this works.

**Buyer persona:** Ajo/esusu group coordinators, market women's associations, cooperative societies.

---

# CATEGORY 11: TELECOM & CONNECTIVITY

## Gap 11.1: The 2G/USSD Market — 42% of Connections

**Data:** 42% of mobile connections are still 2G. Only 2.4% are 5G. Mobile broadband penetration: 44.4% (Dec 2024). Entry-level mobile broadband (2GB/month) costs 4.2% of GNI per capita (UN target: 2%). Fixed broadband: 15% of GNI. Broadband subscriptions declined for first time in 9 months in June 2025 (105.8M to 105.7M).

**Source:** Claude-Consolidate NIG Market Research.md (Document 4, Section 2); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** PRD 12 flagged this as "B5: The 42% Still on 2G" — noting that any product targeting broad SME adoption MUST have USSD/SMS fallback. But no PRD actually builds a USSD-first product.

**Standalone or feature:** CROSS-CUTTING REQUIREMENT for all products AND potential standalone USSD-based financial tool.

**Revenue model:** USSD-first financial services (balance checking, payment reminders, invoice status) at N5-10K/month. Transaction fees on USSD payments.

**Buyer persona:** The 42% of Nigerian mobile users on 2G — traders, rural businesses, transport operators.

---

## Gap 11.2: Telco OPEX Crisis — N5.85T

**Data:** Telecom operator OPEX: N5.85T ($3.6B) in 2024, up 85% YoY. Driven by: diesel at N1,400/L for towers, extortionate right-of-way fees. Some states charge N5K-9K per meter of fiber. Internet costs $4.89/month per Mbps — 10x US cost.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 5.2 in TOC)

**Why not covered:** No PRD addresses telco tower energy optimization, right-of-way cost management, or ISP operations. The N5.85T OPEX is a massive market that GenTrack's logic could serve (telco tower = generator fleet management at scale).

**Standalone or feature:** FEATURE — GenTrack could expand into telco tower energy management. Telcos have thousands of diesel-powered towers. Energy optimization here is a multi-billion-naira opportunity.

**Revenue model:** Enterprise contracts with MTN, Airtel, Glo, 9mobile for tower-by-tower energy cost tracking. N5-10M/year per telco contract.

**Buyer persona:** Telco network operations teams. MTN alone operates 15,000+ tower sites.

---

## Gap 11.3: Fixed Broadband Surge Signal

**Data:** Counterintuitive surge in fixed broadband: 14.6M to 26.8M in a single month. "Indicates businesses switching from mobile to fixed for cost/reliability."

**Source:** Claude-Consolidate NIG Market Research.md (Document 4, Section 2)

**Why not covered:** No PRD addresses business internet procurement/comparison.

**Standalone or feature:** FEATURE — "NetCompare" — ISP comparison tool for businesses. Compare uptime, speed, cost across providers by location.

**Revenue model:** Commission from ISPs per new business customer acquired. N10-20K per customer.

**Buyer persona:** Office managers, IT managers at SMEs switching from mobile data to fixed broadband.

---

# CATEGORY 12: SEPTEMBER 2025 BANK CHARGES ANOMALY

## Gap 12.1: Bank Fee Optimization

**Data:** CBN survey showed "Bank Charges" suddenly jumped to #1 constraint in September 2025 (70.8 index) from bottom tier in all other months. Never explained.

**Source:** Claude-From building to revenue.md (CBN survey analysis section); flagged in PRD 12 as "B1: The September 2025 Anomaly"

**Why not covered:** PRD 12 proposed "BankCompare" but no PRD was written. If Nigerian banks changed fee structures, businesses need a tool to compare actual banking costs and optimize.

**Standalone or feature:** STANDALONE — "BankCompare" — Analyze actual bank fees across a business's multiple accounts, recommend optimal banking relationships, flag fee anomalies.

**Revenue model:** N30-50K/month SaaS. Referral commissions from banks gaining new business customers.

**Buyer persona:** CFOs and finance managers at companies using 2-4 banks simultaneously (standard practice documented in PayMatch PRD).

---

# CATEGORY 13: COMMERCIAL PAPER MARKET

## Gap 13.1: CP Issuance Platform for Mid-Market

**Data:** Commercial paper issuances: N1.58T in H1 2025 (107% growth YoY). H1 2024: N763.43B. H1 2023: N789B. Currently dominated by blue-chip companies (Dangote, BUA, leading banks). CP yields: 15-25%.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** PRD 12 flagged "B4: Commercial Paper Market Explosion" and suggested a CP issuance platform for mid-market companies. No PRD exists. This 107% growth market is completely unaddressed.

**Standalone or feature:** STANDALONE — "CPBridge" — Commercial paper issuance platform for mid-market companies, connecting to institutional investors (pension funds, insurance companies).

**Revenue model:** 0.25-0.5% arrangement fee on issuances. On N1.58T H1 volume: N3.95-7.9B addressable fee pool.

**Buyer persona:** Mid-market companies (N500M-5B revenue) currently locked out of the CP market, seeking working capital alternatives to 35.5% bank loans. Investor side: pension fund administrators (PFAs), insurance companies seeking short-duration yield.

---

# CATEGORY 14: MARITIME SPENDING

## Gap 14.1: $7-9B to Foreign Ship Owners

**Data:** Nigeria pays $7-9B annually to foreign ship owners for international freight. $10B of $44B blue economy potential remains uncaptured.

**Source:** Claude-Consolidate NIG Market Research.md (Document 4, Section 5)

**Why not covered:** PRD 12 flagged "B6: Maritime Spending" and noted zero software tools for Nigerian importers to compare shipping rates, track vessels, or negotiate freight. ClearFast (PRD 04) and PortPulse (PRD 08) address port-side operations, but upstream maritime freight is untouched.

**Standalone or feature:** STANDALONE — "FreightWatch" — Shipping rate comparison and vessel tracking for Nigerian importers. Compare rates across Maersk, MSC, CMA CGM, COSCO for specific routes.

**Revenue model:** Commission on freight bookings (0.5-1% of freight cost). On $7-9B market: $35-90M addressable commission pool even at 0.5%.

**Buyer persona:** Import managers at manufacturers and distributors. Same persona as PortPulse (PRD 08) Ade — but addressing the decision BEFORE the container reaches Nigerian waters.

---

# CATEGORY 15: PROFESSIONAL SERVICES MARKET

## Gap 15.1: N7T Professional Services Market

**Data:** Professional services: ~3% of GDP, around N7T. Junior staff turnover: ~30% annually. Cross-border payment fees: ~3-5%. Clients often pay 6+ months late. Some firms write off 10% of billings as bad debt. PwC Nigeria reportedly $100M+ revenue.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section I); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 8.9 in TOC)

**Why not covered:** CollectPro (PRD 07) partially addresses late payment/bad debt, but no PRD specifically targets professional services firms. The 10% bad debt write-off and 6+ month payment delays are extreme.

**Standalone or feature:** FEATURE — CollectPro could have a "Professional Services" vertical package. OR standalone practice management SaaS for Nigerian law firms, accounting firms, consulting firms.

**Revenue model:** N75-200K/month per firm. Time tracking, billing, matter management, automated collections.

**Buyer persona:** Managing partners at Nigerian law firms, accounting firms, consulting firms. The Big 4 (PwC, KPMG, Deloitte, EY) all operate in Nigeria. Below them are hundreds of mid-size professional services firms.

---

# CATEGORY 16: BACKGROUND CHECKS & VERIFICATION

## Gap 16.1: 13% Credit Bureau Coverage

**Data:** Credit bureaus cover only ~13% of Nigerian adults. Background checks for B2B are practically nonexistent. KYC verification costs: $3-5 per customer. No Nigerian equivalent to Dun & Bradstreet or Experian Business.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 3); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** PRD 12 proposed "VendorScore" (B2B verification & credit scoring) — the most developed of the gap proposals. But no full PRD exists. This is foundational infrastructure that SupplyLink (PRD 09) explicitly needs.

**Standalone or feature:** STANDALONE — needs a full PRD. Foundational for SupplyLink, CollectPro, and any B2B credit product.

**Revenue model:** N20-50K per report, or N150K/month unlimited. Also: API access for other platforms (SupplyLink, PayMatch) at N5-10K per lookup.

**Buyer persona:** Wholesalers extending trade credit, landlords, equipment lessors, supply chain finance providers.

---

# CATEGORY 17: DIGITAL ECONOMY

## Gap 17.1: Digital Economy Surpassing Oil (17.68% of GDP)

**Data:** Nigeria's digital economy contributed 17.68% to GDP in 2024, surpassing oil and gas. Cybersecurity market: $207.80M (2024), projected $345.43M by 2029 (14.6% CAGR).

**Source:** Claude-Consolidate NIG Market Research.md (Document 4, Section 11)

**Why not covered:** This is a strategic context point rather than a product gap, but it validates that digital/software businesses are now more important to Nigeria's economy than oil. It means regulatory support for tech is likely to increase.

**Standalone or feature:** Not a product gap — a strategic validation that ALL 10 PRDs are building in the right macro direction.

**Revenue model:** N/A

**Buyer persona:** N/A

---

# CATEGORY 18: MANUFACTURING SUBSECTOR BREAKDOWNS

## Gap 18.1: Chemical & Pharmaceutical Sector — Energy Spend DOUBLED

**Data:** Chemical & Pharmaceutical alternative energy spend: N208.68B in 2024 — DOUBLED from prior year. This sector-specific surge suggests acute energy crisis in pharma manufacturing.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** GenTrack (PRD 05) targets manufacturers generally but doesn't have vertical-specific features for pharma (which has unique requirements: clean room power, temperature-sensitive production, regulatory compliance on power reliability).

**Standalone or feature:** FEATURE — GenTrack vertical for pharmaceutical manufacturers. Power reliability tracking with compliance documentation (GMP requirements mandate power backup logging).

**Revenue model:** Premium GenTrack tier at N100-150K/month for pharma companies.

**Buyer persona:** Plant managers at Nigerian pharmaceutical manufacturers. Companies like Emzor, Fidson, May & Baker Nigeria.

---

## Gap 18.2: Textile, Apparel & Footwear — 4X Energy Cost Increase

**Data:** Textile sector alternative energy spend: N26.45B in 2024 — FOURFOLD increase from N6.97B in 2023. This rate of increase is unsustainable and signals imminent sector collapse or radical transformation.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 4)

**Why not covered:** No PRD specifically addresses the textile sector's crisis. At 4x cost increase, these companies are desperate for any cost optimization.

**Standalone or feature:** FEATURE — GenTrack could offer sector-specific benchmarks and solar ROI calculations tailored to textile manufacturing (which has specific load profiles — looms, dyeing equipment, steam generation).

**Revenue model:** Same as GenTrack but with sector-specific value proposition for textile industry trade groups.

**Buyer persona:** Textile factory owners in Kano, Kaduna, Lagos (the textile manufacturing centers).

---

## Gap 18.3: Unsold Inventory Crisis — N2.14T Stranded Capital

**Data:** Unsold manufacturer inventory surged 87.5% to N2.14T in 2024. Consumer goods: N1.24T in H1 2024, rising to N1.4T by year-end. This is stranded capital that manufacturers cannot convert to cash.

**Source:** Claude-Consolidate NIG Market Research.md (Document 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** No PRD addresses inventory liquidation or B2B surplus marketplace. CashFlow AI (PRD 06) forecasts cash but doesn't help sell excess inventory.

**Standalone or feature:** STANDALONE — "StockClear" — B2B surplus inventory marketplace. Manufacturers list excess inventory at discount, distributors/retailers buy at below-market prices.

**Revenue model:** 5-10% commission on sales. On N2.14T in stranded inventory: even 1% liquidated through platform = N21.4B volume = N1.07-2.14B in commissions.

**Buyer persona:** Manufacturers with excess inventory (sell side), discount retailers, bulk buyers, export traders (buy side).

---

## Gap 18.4: Factory Closures — 767 Companies, 34 in 2022-2023 Alone

**Data:** 767 manufacturing companies shut down by 2023. 34 factory closures specifically in 2022-2023 (MAN data). 18,000+ jobs lost in 2024.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3)

**Why not covered:** No PRD addresses the distressed asset market. Factories closing = equipment, inventory, customer lists, trained staff becoming available.

**Standalone or feature:** FEATURE within ExitBridge (proposed in PRD 12) or within an equipment leasing/marketplace platform.

**Revenue model:** Asset auction/marketplace platform. 5-10% commission on distressed asset sales.

**Buyer persona:** Surviving manufacturers seeking to expand capacity at distressed prices. Equipment dealers. Scrap/recycling businesses.

---

# CATEGORY 19: AGRICULTURE — SPECIFIC SUBSECTOR GAPS

## Gap 19.1: Fertilizer Price Crisis & Distribution

**Data:** Urea: N50K+/bag (vs N5K-5.5K under Presidential Fertiliser Initiative). NPK: N55K+/bag. DAP: N70-80K/bag. For 1 hectare maize: 5-6 bags needed = N300K+ (75-100% of expected revenue at current crop prices). Farmers switching from high-input crops (rice, maize) to lower-input (beans, peppers, onions). Nigeria produces 3M tons urea annually yet imports $10B in food.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 3, 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section 6)

**Why not covered:** No PRD addresses agricultural input financing, fertilizer price tracking, or input procurement optimization.

**Standalone or feature:** STANDALONE — "AgriInput" — Fertilizer/input price comparison and group purchasing platform for farmer cooperatives.

**Revenue model:** Commission on group purchases (3-5%). Financing integration (connect cooperatives to input lenders). On $10B food import figure, even marginal domestic production increase enabled by affordable inputs is massive.

**Buyer persona:** Farmer cooperatives, agricultural extension officers, input distributors.

---

## Gap 19.2: EU Export Rejections — Quality Compliance

**Data:** 76 Nigerian agro-export consignments rejected by EU in 2022 for failing quality standards.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3)

**Why not covered:** No PRD addresses export quality assurance, testing, or certification management.

**Standalone or feature:** STANDALONE — "ExportReady" — Export quality compliance platform. Track test results, manage certifications, monitor EU/international standards changes, pre-validate shipments.

**Revenue model:** N100-300K per export consignment verified, or N200K/month subscription for regular exporters.

**Buyer persona:** Agricultural exporters (cocoa, cashew, sesame, ginger), NEPC-registered exporters.

---

## Gap 19.3: Tractor Deficit — <1 per 2,000 Farmers

**Data:** Tractors: <1 per 2,000 farmers. Nigeria maize yield: ~2 MT/ha (vs 7 MT/ha global best). Agriculture gets <5% of bank credit. Ag loan interest rates: 20%+ despite subsidized schemes.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section C)

**Why not covered:** No PRD addresses agricultural mechanization marketplace or tractor-sharing platform (the "Hello Tractor" model).

**Standalone or feature:** FEATURE within equipment leasing concept. Hello Tractor (Nigerian startup) has proven the model but the market remains massively underserved.

**Revenue model:** Commission on tractor rental bookings (10-15%). Equipment leasing for tractor purchases.

**Buyer persona:** Farmer cooperatives, state agricultural development programs.

---

# CATEGORY 20: BUSINESS LEADER QUOTES — UNADDRESSED PAIN POINTS

## Gap 20.1: Anonymous Logistics CEO — "Runs Three Companies to Run One"

**Quote:** "Every manufacturer I meet basically runs an energy company, a logistics company, and a security outfit on the side — just to keep their core business alive. This is unsustainable, but it means the market for those who can take these tasks off them is huge."

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Business Leader Voices)

**Why not covered:** GenTrack addresses energy visibility, FreightCompare addresses logistics comparison, but NO PRD addresses private security cost tracking/optimization — despite businesses spending N200K-6M annually on cyber security and N500K-2M monthly on physical security.

**Standalone or feature:** FEATURE — expand GenTrack into "OpsCost" tracking all three: power, water, security. Or standalone "SecurityCompare" for physical security vendor comparison.

**Revenue model:** N30-50K/month add-on to GenTrack for security cost tracking. Or standalone marketplace connecting businesses with vetted security companies.

**Buyer persona:** Operations managers at manufacturers, retail chains, commercial properties.

---

## Gap 20.2: RelianceHMO Founder Quote — "Small Companies Opt Into Health Plans"

**Quote:** Femi Kuti (RelianceHMO founder): "Nigerian businesses will pay for value if you solve a real pain. We've seen small companies opt into our health plans even in downturns because it solves an HR headache for them."

**Source:** Claude-Consolidate NIG Market Research.md (Document 3)

**Why not covered:** No PRD addresses employee health benefit comparison or procurement for SMEs. TaxGuard handles statutory deductions but not health insurance selection/procurement.

**Standalone or feature:** FEATURE within TaxGuard — "Health Plan Comparison" module. Or within InsureMatch (PRD 12 proposal).

**Revenue model:** Commission from HMOs per enrolled company (N5-15K per employee per year).

**Buyer persona:** Same as TaxGuard — finance managers at 20-200 employee companies.

---

## Gap 20.3: Factory General Manager — "Cut Production Shifts in Half"

**Data:** Example from source: Factory GM cut production shifts in half due to diesel costs and voltage spikes.

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section A)

**Why not covered:** GenTrack tracks costs but doesn't address production scheduling optimization. When a factory runs at 50% capacity due to power constraints, the question isn't just "what does power cost?" but "WHEN should we run production to minimize power cost?"

**Standalone or feature:** FEATURE within GenTrack — "Production Scheduling Optimizer" — recommend optimal production hours based on grid availability patterns, diesel cost windows, and demand urgency.

**Revenue model:** Premium GenTrack tier at N75-100K/month.

**Buyer persona:** Plant managers at manufacturers running below capacity.

---

## Gap 20.4: Bakery Owner in Kano — "If Affordable Solar Existed, We'd Jump"

**Quote:** "We run our generator 15 hours a day — diesel is eating 35% of our expenses. We raised bread prices by 20% but customers push back. If there was an affordable solar or something, we'd jump at it."

**Source:** Claude-Consolidate NIG Market Research.md (Documents 3, 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** GenTrack helps with visibility but this bakery owner needs FINANCING for solar, not just data. No PRD bridges the gap between "knowing solar makes sense" (GenTrack output) and "being able to afford solar" (financing).

**Standalone or feature:** FEATURE — GenTrack to SupplyLink pipeline. GenTrack identifies solar ROI, generates a financing proposal, connects business to solar-as-a-service providers or equipment lessors.

**Revenue model:** Referral commission from solar installers per qualified lead (N50-200K per installation, or 2-5% of installation cost).

**Buyer persona:** The thousands of businesses GenTrack identifies as having strong solar ROI but no capital access.

---

# CATEGORY 21: FUNDED STARTUPS SUGGESTING UNCOVERED MARKETS

## Gap 21.1: Moove ($110M) — Vehicle Financing

**Data:** Moove raised $110M at $750M valuation for vehicle financing (Uber driver partnerships). Expanded to 6 African markets.

**Source:** Claude-Consolidate NIG Market Research.md (all documents); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** No PRD addresses fleet/vehicle financing or the gig economy worker toolset. The fact that Moove reached $750M valuation proves massive demand for asset financing.

**Standalone or feature:** FEATURE — vehicle financing could be a vertical within SupplyLink's financing marketplace.

**Revenue model:** Embedded vehicle financing product. 2-3% arrangement fee.

**Buyer persona:** Ride-hail drivers, delivery riders, small fleet operators.

---

## Gap 21.2: OmniRetail (795.9% Revenue CAGR) — Retail Intelligence

**Data:** OmniRetail: $20M Series A, N1.3T annual transactions, 795.9% revenue CAGR. Serves informal retailers.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 3); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** OmniRetail's explosive growth proves massive demand in informal retail digitization. No PRD targets the "sell-to" side (helping FMCG manufacturers understand informal retail sales velocity, stockout patterns, regional demand).

**Standalone or feature:** STANDALONE — "RetailPulse" — Sales intelligence dashboard for FMCG manufacturers, powered by point-of-sale data from informal retailers.

**Revenue model:** N200-500K/month per FMCG brand. Sell aggregate, anonymized demand data.

**Buyer persona:** Brand managers at Dangote, Nestle, Nigerian Breweries, Unilever (those remaining), PZ Cussons.

---

## Gap 21.3: Kredete ($22M Series A) — Working Capital for SMEs

**Data:** Kredete raised $22M Series A in 2025 specifically for SME working capital.

**Source:** Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** Kredete's funding validates the CashFlow AI → lender referral revenue model (PRD 06), but also suggests a standalone credit scoring/underwriting API for SME lenders could be a B2B product.

**Standalone or feature:** FEATURE — CashFlow AI's lender referral integration is the right approach, but could also build an API product selling credit scoring to lenders like Kredete.

**Revenue model:** N5-20K per credit assessment API call.

**Buyer persona:** Fintech lenders, MFBs, commercial banks seeking SME underwriting technology.

---

# CATEGORY 22: SPECIFIC SPENDING FIGURES NOT CAPTURED IN ANY PRD

## Gap 22.1: Security Services — N300B-4T Market

**Data:** Businesses spend N200K-N6M annually on cyber security. N500K-2M monthly on physical security. World Bank Enterprise Survey: 22% of firms pay for security (average 1.7% of sales). Potentially N3-4T spent on private security nationwide.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 3)

**Why not covered:** No PRD addresses physical security vendor management, cost optimization, or security guard scheduling/monitoring.

**Standalone or feature:** STANDALONE at N3-4T market size. "SecureCompare" — physical security vendor marketplace and workforce management.

**Revenue model:** Commission from security companies per contract (5-10%). SaaS for guard scheduling/GPS tracking at N50-100K/month per security company.

**Buyer persona:** Operations managers at commercial properties, factories, retail chains. Security company owners managing guard deployment.

---

## Gap 22.2: Cloud Computing — N1.18T ($760M)

**Data:** Cloud computing market: N1.18T ($760M). Growing as businesses migrate from on-premise.

**Source:** Claude-Consolidate NIG Market Research.md (Document 2)

**Why not covered:** No PRD addresses cloud migration, cloud cost optimization, or managed cloud services for Nigerian businesses.

**Standalone or feature:** STANDALONE — "CloudGuide" — Cloud migration assessment and cost optimization. Help Nigerian businesses move from on-premise servers (powered by generators) to cloud (eliminates local power dependency).

**Revenue model:** Migration consulting at N500K-2M per project. Ongoing optimization at N50-100K/month. Referral from cloud providers (AWS, Azure, GCP all have African regions now).

**Buyer persona:** IT managers at mid-size companies running local servers. The power cost argument is compelling: moving to cloud eliminates the need to power and cool local servers.

---

## Gap 22.3: IT Services & Outsourcing — N3.36T ($2.17B)

**Data:** IT services/outsourcing market: N3.36T ($2.17B).

**Source:** Claude-Consolidate NIG Market Research.md (Document 2)

**Why not covered:** No PRD addresses the IT services marketplace — connecting Nigerian businesses with IT service providers.

**Standalone or feature:** Low priority as standalone. Better addressed by vertical-specific tools (GenTrack for energy IT, ClearFast for logistics IT).

**Revenue model:** IT services marketplace with commission model.

**Buyer persona:** CIOs and IT managers at mid-market companies.

---

## Gap 22.4: Corruption Tax — N675B ($1.5B) Annual Cost

**Data:** Corruption costs N675B ($1.5B) lost to public-sector corruption annually. Nigeria CPI: 140/180 (score 26/100). Public procurement: 20-30% of budgets lost to fraud. 53 checkpoints documented between Mile 2 and Seme border (each extracting N50K-100K per trip).

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 3); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** No PRD can directly "solve" corruption, but the checkpoint extortion data suggests an opportunity for route optimization software that minimizes checkpoint encounters for freight.

**Standalone or feature:** FEATURE within FreightCompare (PRD 10) — "Checkpoint Optimizer" — route planning that factors in known checkpoint locations and costs.

**Revenue model:** Premium FreightCompare feature at N20-30K/month add-on.

**Buyer persona:** Logistics managers, truck owners on inter-city routes.

---

## Gap 22.5: Equipment Leasing — 0.185% Penetration vs 57.7% in US

**Data:** Equipment leasing portfolio: N5.17T (2024), up 23.2% YoY. New leases: N973B in 2024. Penetration: <0.2% of GDP vs 57.7% in USA. 80% of US companies lease equipment. Sector concentration: Oil & Gas 26%, Transport/Logistics 21%, Manufacturing 13%.

**Source:** Claude-Consolidate NIG Market Research.md (Documents 2, 3, 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** No full PRD for equipment leasing. The gap between Nigeria (<0.2%) and US (57.7%) is the largest of any service category documented. PRD 12 didn't even propose this.

**Standalone or feature:** STANDALONE — "LeaseNow" — Equipment leasing marketplace and management platform. Lessors list available equipment, businesses apply, platform handles credit assessment, contract management, payment tracking.

**Revenue model:** 1-2% arrangement fee on new leases. On N973B in annual new leases: N9.73-19.46B addressable fee pool.

**Buyer persona:** SME manufacturers, logistics companies, healthcare facilities needing equipment they can't afford outright. Leasing companies seeking deal flow.

---

# CATEGORY 23: GOVERNMENT & INSTITUTIONAL SIGNALS

## Gap 23.1: National Single Window — Integration Opportunity

**Data:** Government National Single Window projected to reduce cargo dwell time 35-45%, saving N300-400B annually. Integrated platform connecting Customs, NPA, terminal operators, freight forwarders. B'Odogwu platform rollout caused 5,000+ containers stuck with N2T demurrage exposure.

**Source:** Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md; Claude-Consolidate NIG Market Research.md

**Why not covered:** ClearFast (PRD 04) and PortPulse (PRD 08) address adjacent problems but neither plans to INTEGRATE with the National Single Window. The government system will create APIs that private tools should consume.

**Standalone or feature:** FEATURE — both ClearFast and PortPulse should have National Single Window integration on their roadmaps. First mover advantage for whoever integrates.

**Revenue model:** N/A for the integration itself, but it dramatically increases product value.

**Buyer persona:** Same as ClearFast and PortPulse.

---

## Gap 23.2: CBN Innovation Hub / Regulatory Sandbox

**Data:** CBN Innovation Hub and regulatory sandbox accept applications for novel financial services. Supply chain finance explicitly encouraged.

**Source:** Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md (Section on SupplyLink); Claude-Consolidate NIG Market Research.md

**Why not covered:** SupplyLink (PRD 09) mentions this but no PRD discusses a strategy for proactively engaging the sandbox for other financial products (CashFlow AI lending referrals, CPBridge commercial paper platform, equipment leasing).

**Standalone or feature:** Not a product gap — a REGULATORY STRATEGY gap across all financial PRDs.

**Revenue model:** N/A

**Buyer persona:** N/A

---

# CATEGORY 24: ADDITIONAL QUOTE-BASED GAPS

## Gap 24.1: LCCI Director-General — Self-Provision of ALL Public Services

**Quote:** Chinyere Almona: "Nigerian enterprises are already burdened with multiple taxation, and provide their own water supply and alternative energy, as well as cater for security, healthcare, and other services that should ordinarily be public. It is unfair to demand more taxes without offering commensurate improvements."

**Source:** Claude-Consolidate NIG Market Research.md (Documents 3, 4); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why this matters:** This quote lists SIX categories of self-provision: (1) water, (2) energy, (3) security, (4) healthcare, (5) "other services," and (6) taxation. GenTrack covers energy. TaxGuard covers taxation. The other four are unaddressed. A comprehensive "Total Self-Provision Cost Dashboard" showing ALL six categories would be extremely powerful for advocacy and decision-making.

**Standalone or feature:** FEATURE — "OpsCost360" — Unified self-provision cost tracker across all six LCCI-cited categories.

**Revenue model:** Premium tier of GenTrack at N100-200K/month.

**Buyer persona:** CFOs preparing advocacy documents, trade association leaders (MAN, LCCI), businesses seeking comprehensive cost visibility.

---

## Gap 24.2: MAN Data — Capacity Utilization to Production Scheduling

**Data:** Capacity utilization: 57% (2024), down from 73.3% (1981). Manufacturing GDP contribution: 29.9% to 8.6% over 4 decades. MAN CEO Confidence Index: 51.9 (barely above 50 expansion threshold).

**Source:** Claude-Consolidate NIG Market Research.md (all documents); Nigeria_B2B_Market_Analysis_MASTER_v1.0_Dec2025.md

**Why not covered:** PRD 12 flagged "B3: Capacity Utilization to Production Scheduling" but no product was developed. If the bottleneck is coordination (scheduling production around power availability, raw material arrival, demand patterns), a lightweight production scheduler could help manufacturers run closer to 57% and beyond.

**Standalone or feature:** STANDALONE — "PlanFactory" — Production scheduling optimizer for Nigerian manufacturers. Factor in: power availability windows, raw material delivery schedules, workforce availability, demand forecasts.

**Revenue model:** N75-200K/month per factory.

**Buyer persona:** Production managers and plant managers at manufacturing facilities running below capacity.

---

# CATEGORY 25: MISCELLANEOUS UNCAPTURED DATA POINTS

## Gap 25.1: CAC Business Registration Delays

**Data:** Official claim: 24-48 hours. Reality: 1-2 months. Online: 2-7 working days. Offline: 2-4 weeks. Peak periods (Jan, Mar, Dec): significantly longer. Portal glitches, payment verification delays, document errors, system overload.

**Source:** Claude-Consolidate NIG Market Research.md (Document 4, Section 13)

**Why not covered:** No PRD addresses business registration assistance or CAC filing automation.

**Standalone or feature:** FEATURE within TaxGuard — "CAC Filing Manager" for annual returns and corporate changes. Could also be a low-cost standalone.

**Revenue model:** N30-50K per filing or N20K/month subscription.

**Buyer persona:** New business founders, accounting firms managing client registrations.

---

## Gap 25.2: SON/NAFDAC Compliance-as-a-Service

**Data:** SON (Standards Organisation) product certification requirements create compliance costs. NAFDAC registration: 12+ months, N500K-2M. Together these represent barriers to market entry that could be addressed with compliance management software.

**Source:** 12.27.25 NIG BIZ SOURCE.md (Tier 9 section); Claude-Consolidate NIG Market Research.md

**Why not covered:** ClearFast (PRD 04) handles customs documentation but not SON or NAFDAC product compliance. These are separate, longer-cycle regulatory processes.

**Standalone or feature:** STANDALONE — "ComplianceHub" — Unified regulatory compliance tracker for SON, NAFDAC, and other Nigerian product regulators.

**Revenue model:** N100-200K/month per company. Track application status, manage document requirements, deadline alerts, deficiency remediation.

**Buyer persona:** Product manufacturers, food/drug importers, consumer goods companies.

---

## Gap 25.3: Receivables Insurance / Trade Credit Insurance

**Data:** Failed payment market: N75B growing 42% annually. 3-8% of revenue written off as bad debt by typical SMEs. Court system takes 2-5 years for debt recovery.

**Source:** Claude-Making $5K in a month from Nigeria.md (Option 19: Receivables Insurance); Claude-Consolidate NIG Market Research.md

**Why not covered:** The "Making $5K" source file specifically proposed a "Receivables Insurance Platform" as Option 19. No PRD covers this. It's distinct from CollectPro (which collects debts) — this INSURES against non-payment.

**Standalone or feature:** STANDALONE — "PaySure" — Trade credit insurance for Nigerian B2B. Businesses pay 2-4% premium, get paid if customer defaults.

**Revenue model:** 2-4% of insured invoice value as premium. On N75B failed payment market: if 10% of at-risk invoices were insured at 3% premium, N225M in premium revenue.

**Buyer persona:** Wholesalers and distributors extending 60-90 day terms to retailers.

---

## Gap 25.4: Warehouse Marketplace — 1 sq meter per capita

**Data:** Nigeria warehouse capacity: ~1 sq meter per capita (vs 3+ in South Africa).

**Source:** Claude-Consolidate NIG Market Research.md (Document 3, Section D); Claude-Making $5K in a month from Nigeria.md (Option 12)

**Why not covered:** The "Making $5K" source proposed a "Warehouse Space Marketplace" (Option 12) at N10M/month GMV target. No PRD was written. Warehousing constraint affects every PRD that involves physical goods.

**Standalone or feature:** STANDALONE — "SpaceMatch" — Warehouse space marketplace for Nigerian businesses.

**Revenue model:** 10-15% commission on rentals. On estimated N50-100B warehouse market: N5-15B addressable.

**Buyer persona:** E-commerce companies, importers between clearing and distribution, agricultural aggregators, manufacturers needing overflow storage.

---

## Gap 25.5: Multi-Currency Business Accounts

**Data:** Export proceed repatriation rule: 50% immediate repatriation required. Exporters want to hold funds in USD to hedge naira depreciation.

**Source:** Claude-Making $5K in a month from Nigeria.md (Option 20); Claude-Consolidate NIG Market Research.md

**Why not covered:** The "Making $5K" source proposed "Multi-Currency Business Accounts" (Option 20) but noted it requires CBN approval. ForexGuard (PRD 03) tracks exposure but doesn't provide actual multi-currency holding capability.

**Standalone or feature:** STANDALONE but requires significant regulatory navigation. High ceiling ($10M+/month volume potential) but high barrier.

**Revenue model:** 0.5-1.5% FX spread + monthly account fees.

**Buyer persona:** Nigerian exporters (cocoa, cashew, oil & gas services) receiving hard currency.

---

## Gap 25.6: BNPL for B2B Inventory

**Data:** The "Making $5K" source proposed "B2B Buy-Now-Pay-Later for Inventory" (Option 11). Small retailers can't stock enough inventory. Current informal lending: 10-20%/month.

**Source:** Claude-Making $5K in a month from Nigeria.md (Option 11)

**Why not covered:** SupplyLink (PRD 09) addresses invoice factoring for suppliers to large corporates, but BNPL for inventory is a distinct model targeting the other direction — financing the BUYER (retailer) rather than the SUPPLIER.

**Standalone or feature:** STANDALONE — "StockNow" — Inventory BNPL for Nigerian retailers. Buy stock, pay in 30-60 days.

**Revenue model:** 2-4% transaction fee + late penalties. At N500M/month volume: N10-20M/month revenue.

**Buyer persona:** Small retailers (kiosks, market stalls) buying from wholesalers. OmniRetail and Sabi are adjacent but focused on ordering, not financing.

---

# SUMMARY: TOTAL GAPS IDENTIFIED

| # | Gap | Source Category | Market Size | Standalone? | Priority |
|---|-----|----------------|-------------|-------------|----------|
| 1.1 | NAFDAC Registration Platform | Healthcare | $1.1B+ pharma imports | Yes | Medium |
| 1.2 | HMO Claims Advance | Healthcare | N622B claims | Yes | High |
| 1.3 | Medical Tourism Redirect | Healthcare | $1B+ | Feature | Low |
| 1.4 | Vaccine Cold Chain | Healthcare | N/A | Feature | Low |
| 2.1 | Private School Management | Education | N2T shortfall | Yes | High |
| 2.2 | Academic Staffing Platform | Education | 5,000+ lecturers/yr | Feature | Medium |
| 2.3 | Cross-Border Education Payments | Education | $2B+ annually | Yes | High |
| 3.1 | Construction Cost Tracker (BuildTrack) | Construction | N21T deficit | Yes | HIGH |
| 3.2 | Land Title Verification | Construction | N300B disputes | Yes | High |
| 3.3 | Mortgage/Housing Finance | Construction | N21T | Feature | Medium |
| 4.1 | Insurance Comparison (InsureMatch) | Insurance | N1.56T premiums | Yes | HIGH |
| 4.2 | Cyber Insurance Bundle | Insurance | N46B | Feature | Medium |
| 5.1 | Water Cost Tracking / Tanker Marketplace | Water | N100-500B | Feature | Medium |
| 6.1 | Diaspora Investment Platform | Brain Drain | 3.68M emigrants | Yes | Medium |
| 6.2 | Nigerian Talent Export (EOR) | Brain Drain | $25M+ billing | Yes | High |
| 7.1 | Cybersecurity Compliance (SecureOps) | Cyber | $207M market | Yes | HIGH |
| 7.2 | Cybersecurity Training Academy | Cyber | 150K workers needed | Yes | Medium |
| 8.1 | Multinational Exit Marketplace | MNC Exits | 18,000 jobs | Yes (timing) | Medium |
| 8.2 | USD Value Creation Dashboard | MNC Exits | N/A | Feature | Low |
| 9.1 | Regional Risk Module | Regional | N/A | Feature | Low |
| 9.2 | Non-Lagos GTM Strategy | Regional | 37% of spending | Strategy | HIGH |
| 10.1 | Informal Retailer Bookkeeping | Informal | 80-90% of retail | Yes | HIGH |
| 10.2 | Esusu/Ajo Digitization | Informal | Millions of users | Yes | Medium |
| 11.1 | USSD-First Financial Tools | Telecom | 42% of connections | Cross-cutting | HIGH |
| 11.2 | Telco Tower Energy Management | Telecom | N5.85T OPEX | Feature | Medium |
| 11.3 | ISP Comparison Tool | Telecom | N/A | Feature | Low |
| 12.1 | Bank Fee Optimization | Banking | Unknown | Yes | Medium |
| 13.1 | Commercial Paper Platform | Finance | N1.58T (107% growth) | Yes | HIGH |
| 14.1 | Maritime Freight Comparison | Maritime | $7-9B | Yes | High |
| 15.1 | Professional Services Practice Mgmt | Prof Services | N7T market | Yes | Medium |
| 16.1 | B2B Credit Scoring (VendorScore) | Verification | 13% coverage | Yes | HIGH |
| 17.1 | Digital Economy Validation | Macro | 17.68% GDP | Context | N/A |
| 18.1 | Pharma-Specific GenTrack | Manufacturing | N208.68B | Feature | Medium |
| 18.2 | Textile-Specific GenTrack | Manufacturing | N26.45B (4x growth) | Feature | Medium |
| 18.3 | Surplus Inventory Marketplace | Manufacturing | N2.14T stranded | Yes | High |
| 18.4 | Distressed Asset Marketplace | Manufacturing | 767 closures | Feature | Low |
| 19.1 | Fertilizer/Agri-Input Platform | Agriculture | $10B food imports | Yes | High |
| 19.2 | Export Quality Compliance | Agriculture | 76 rejections | Yes | Medium |
| 19.3 | Tractor/Mechanization Marketplace | Agriculture | <1 per 2,000 farmers | Feature | Low |
| 20.1 | Physical Security Cost Tracking | Security | N3-4T | Yes | Medium |
| 20.2 | Employee Health Plan Comparison | Healthcare/HR | N/A | Feature | Medium |
| 20.3 | Production Scheduling Optimizer | Manufacturing | 57% utilization | Feature | High |
| 20.4 | GenTrack-to-Solar-Finance Pipeline | Energy/Finance | N22T market | Feature | HIGH |
| 21.1 | Vehicle Financing Vertical | Mobility | $750M valuation | Feature | Medium |
| 21.2 | FMCG Retail Intelligence | Retail | N1.3T transactions | Yes | High |
| 21.3 | SME Credit Scoring API | Finance | $22M raised by Kredete | Feature | Medium |
| 22.1 | Physical Security Marketplace | Security | N3-4T | Yes | Medium |
| 22.2 | Cloud Migration Services | IT | N1.18T | Yes | Medium |
| 22.3 | IT Services Marketplace | IT | N3.36T | Low priority | Low |
| 22.4 | Checkpoint/Route Optimizer | Corruption | N675B | Feature | Low |
| 22.5 | Equipment Leasing Platform | Finance | N5.17T (23% growth) | Yes | HIGH |
| 23.1 | National Single Window Integration | Government | N300-400B savings | Feature | High |
| 24.1 | OpsCost360 Dashboard | Operations | N/A | Feature | Medium |
| 24.2 | Production Scheduling (PlanFactory) | Manufacturing | 57% utilization | Yes | High |
| 25.1 | CAC Filing Automation | Registration | N/A | Feature | Low |
| 25.2 | SON/NAFDAC Compliance Hub | Regulation | N/A | Yes | Medium |
| 25.3 | Trade Credit Insurance | Finance | N75B failed payments | Yes | High |
| 25.4 | Warehouse Marketplace | Logistics | N50-100B | Yes | High |
| 25.5 | Multi-Currency Accounts | Finance | $2B+ export proceeds | Yes | Medium |
| 25.6 | B2B Inventory BNPL | Finance | N500M+/month | Yes | High |

---

# TOP 10 HIGHEST-PRIORITY GAPS (Recommended for Full PRDs)

Based on: market size, proven spending, strategic fit with existing portfolio, and buildability from NYC:

1. **InsureMatch (Gap 4.1)** — N1.56T market growing 56%. Commission model = zero capital. 99.66% untapped.
2. **VendorScore (Gap 16.1)** — Foundational infrastructure for SupplyLink, CollectPro, and all credit products. 13% credit bureau coverage = massive gap.
3. **BuildTrack (Gap 3.1)** — N21T housing deficit. Highest sector expansion outlook (80.8 CBN index). No competition.
4. **SecureOps (Gap 7.1)** — N52.3B fraud, 196% growth. CBN regulatory mandate = forced buyers. Founder has CompTIA Security+.
5. **Commercial Paper Platform (Gap 13.1)** — N1.58T in H1 2025, 107% growth. Currently blue-chip only. Mid-market access = massive demand.
6. **Equipment Leasing Platform (Gap 22.5)** — N5.17T portfolio, 23% growth, <0.2% penetration vs 57.7% US. Largest gap ratio in the data.
7. **Informal Retailer Bookkeeping (Gap 10.1)** — 80-90% of retail. Khatabook proved model at 10M+ users in India. Volume play.
8. **USSD-First Financial Tools (Gap 11.1)** — 42% of connections on 2G. Any product ignoring this misses nearly half the market.
9. **Maritime Freight Comparison (Gap 14.1)** — $7-9B to foreign carriers. Upstream of ClearFast/PortPulse. Zero tools exist.
10. **GenTrack-to-Solar-Finance Pipeline (Gap 20.4)** — Connects GenTrack's data output to actual financing, closing the gap the bakery owner described.

---

**END OF COMPLETE GAP ANALYSIS**
**Total unique gaps identified: 55**
**Total recommended for full PRDs: 10**
**Total that could be features in existing PRDs: 23**
**Total standalone product opportunities: 32**
