# Unexplored Data Angles & Hidden Business Opportunities

**Status:** COMPLETE
**Purpose:** Deep analysis of 10 data anomalies, contradictions, and underexplored patterns found in source research that may represent significant hidden business opportunities

---

## Angle 1: The September 2025 Bank Charges Anomaly

### The Data

CBN Business Expectations Survey Top 3 Constraints by Month (Feb-Nov 2025):

| Month | #1 | #2 | #3 |
|-------|----|----|-----|
| Feb | High Interest (75.0) | Insecurity (73.9) | Power (73.8) |
| Mar | High Interest (75.3) | Power (73.8) | High Taxes (73.3) |
| Apr | High Interest (75.4) | Insecurity (74.8) | High Taxes (74.5) |
| May | Insecurity (74.5) | High Interest (73.9) | High Taxes (73.4) |
| Jun | High Interest (75.6) | Insecurity (75.2) | Power (74.3) |
| Jul | High Interest (75.9) | Insecurity (74.5) | High Taxes (72.8) |
| Aug | Insecurity (71.2) | Power (69.5) | High Interest (68.6) |
| **Sep** | **Bank Charges (70.8)** | **High Taxes (70.8)** | **Poor Infrastructure (70.7)** |
| Oct | Insecurity (71.8) | Power (70.9) | High Taxes (70.2) |
| Nov | Insecurity (70.1) | High Taxes (69.7) | Power (69.3) |

Bank Charges ranked 6th-7th in every other month. In September it jumped to #1 at 70.8 -- tied with High Taxes -- then immediately vanished from the top 3 in October and November. Poor Infrastructure similarly jumped from bottom tier to #3 (70.7) and then disappeared.

### What the Scores Tell Us

- In Feb-Jul, the Bank Charges constraint score ranged roughly 60-65 (placing it 6th-7th among all constraints). In September, it spiked to 70.8 -- an increase of approximately 6-10 points in a single month.
- This happened in a survey of 1,900 businesses with 98-99% response rates, making it unlikely to be a sampling anomaly.
- The simultaneous appearance of Poor Infrastructure at #3 suggests a systemic shock, not random noise.

### What Could Have Caused This

Several hypotheses, none confirmed in the source data:

1. **CBN recapitalization directive (March 2024, compliance deadline approaching):** Banks were required to increase minimum capital significantly. As deadlines approached in mid-2025, banks may have passed compliance costs to customers through higher fees and new charges. A September 2025 implementation date for new fee schedules would explain the spike.

2. **Electronic banking levy changes:** The CBN periodically revises charges for electronic transfers (NIP, USSD, POS). A sudden revision in September could have hit businesses hard, especially with NIBSS transaction volumes growing 80% YoY (N1.07 quadrillion in 2024).

3. **Stamp duty enforcement:** The N50 electronic transfer stamp duty was sometimes inconsistently collected. A September enforcement push could have spiked perceived costs.

4. **Bank desperation fees:** With CBN raising MPR to 27.25-27.50% by Q4, banks may have introduced new account maintenance fees, transaction limits, or charges to maintain margins while lending became riskier.

### Why It Disappeared in October

If the shock was a one-time fee structure change, businesses would absorb it quickly -- the cost becomes the new normal. Alternatively, if it was a temporary enforcement push or a correction was made, it would recede as a top-of-mind constraint even if the underlying costs remained elevated.

### Product Implications

**BankCompare / BankOptimize -- Banking Cost Optimization Platform**

- **What:** A tool that helps businesses compare actual total banking costs across Nigerian banks (30+ commercial banks, each with different fee structures). Input your transaction patterns (number of transfers, POS volume, USSD transactions, cash handling) and get a comparison of what each bank would charge.
- **Who pays:** Any business with monthly banking costs above N200K. Manufacturing companies processing hundreds of supplier payments monthly. FMCG distributors with high POS/transfer volumes.
- **Pricing:** N30-75K/month for ongoing monitoring, or N50K for one-time comparison report.
- **Revenue potential:** If 10% of the 1,900 surveyed businesses (representing much larger universe) would pay N50K/month = significant recurring revenue. The market scales with NIBSS transaction volumes growing 80% YoY.
- **Build from NYC:** 100% software. Requires database of published fee schedules from Nigerian banks plus calculator logic.

**Feature add-on to existing PRDs:**
- PayMatch could add a "banking cost" tab showing which bank is cheapest for your specific payment patterns
- CashFlow AI could include bank charges as a cost line item in forecasts and flag when charges spike unexpectedly

### Research Needed

- Did CBN or individual banks announce new fee schedules in August-September 2025?
- What are the actual fee differences between GTBank, Zenith, Access, First Bank for a typical manufacturer processing 200+ supplier payments per month?
- Are businesses aware they could save significant money by switching banks or splitting accounts?

### Impact on PRD Rankings

This angle does NOT change the overall PRD rankings -- bank cost optimization is a feature, not a standalone product for the initial go-to-market. But it could become a powerful acquisition tool: offer a free banking cost comparison to get businesses in the door, then upsell PayMatch or CashFlow AI.

---

## Angle 2: The South-East Confidence Collapse

### The Data

**CBN Monthly Survey Confidence Index by Region (select months):**

| Region | Feb | Mar | May | Oct | Nov | Trend |
|--------|-----|-----|-----|-----|-----|-------|
| North-East | 23.2 | 7.8 | 30.2 | 56.1 | 52.7 | Strong rise |
| North-West | 25.8 | 37.3 | 16.4 | 42.2 | 39.1 | Moderate rise |
| North-Central | 16.5 | 36.3 | 14.1 | 30.2 | 33.3 | Moderate rise |
| South-West | 21.2 | 35.1 | 25.1 | 42.3 | 39.2 | Rise |
| South-South | 8.2 | 27.1 | 7.4 | 23.3 | 29.0 | Recovering |
| **South-East** | **17.0** | **29.9** | **2.3** | **23.5** | **18.7** | **Lowest every month** |

Key observations:
- South-East was the LOWEST or near-lowest region in every single month from February to November 2025
- May was catastrophic: CI of 2.3 (effectively zero confidence)
- October to November: collapsed from 23.5 to 18.7 (-20.4%) while South-South improved from 23.3 to 29.0 (+24.5%)
- These two adjacent southern regions moved in opposite directions

### The Contradiction

**MAN Q1 2025 Quarterly Report (the only quarter with regional breakdown) shows:**
- South-East: 59.91% capacity utilization -- **HIGHEST** of all regions
- South-West: 48.86% capacity utilization -- LOWEST

This is a direct contradiction. The region with the lowest business confidence has the highest manufacturing capacity utilization. The region with much higher confidence (South-West) has the lowest utilization.

### What Explains This

1. **Manufacturing ≠ General Business Climate:** The South-East (Nnewi, Aba, Onitsha) is Nigeria's indigenous manufacturing heartland. These clusters specialize in auto parts, plastics, textiles, and light manufacturing. Factories may be running at relatively high capacity because they serve local/regional demand and have less import dependency -- but the broader business environment (services, retail, agriculture) in the South-East is terrible.

2. **Insecurity Weighing on Non-Manufacturing Sectors:** The South-East has experienced significant security challenges including sit-at-home orders from separatist groups (IPOB/ESN), which can shut down business activity for days at a time. Manufacturing may be somewhat insulated (large facilities with security), but smaller service businesses and traders are devastated. The CBN survey covers all 1,900 businesses across sectors, while MAN surveys only manufacturers.

3. **Confidence Measures Future Expectations, Utilization Measures Present:** South-East manufacturers may be running current capacity but see no path to expansion given insecurity, infrastructure, and political uncertainty. They are producing but not optimistic.

4. **Survey Respondent Composition:** The CBN survey includes services, agriculture, and industry. If South-East respondents are heavily weighted toward services and SMEs (the majority of businesses), the confidence index reflects their reality -- which is dire -- even as the much smaller manufacturing segment performs relatively well.

### Product Implications

**Region-Specific Solutions for the South-East:**

1. **Business Continuity Planning Tool:** South-East businesses need to plan around periodic shutdowns (sit-at-home orders can cost a business 1-4 days of revenue per week during enforcement periods). A tool that helps businesses calculate their sit-at-home exposure, plan production schedules around disruption windows, and manage inventory buffers would address a pain point unique to this region.
   - **Pricing:** N50-100K/month
   - **Market:** Thousands of Aba/Nnewi/Onitsha businesses

2. **Nnewi Manufacturing Cluster SaaS:** The Nnewi auto parts cluster is Nigeria's closest thing to a Shenzhen-style manufacturing hub. These manufacturers have high capacity utilization but low confidence. A lightweight ERP/production management tool designed specifically for the auto parts, plastics, and textiles clusters could serve a concentrated market.
   - **Pricing:** N75-150K/month
   - **Market:** Hundreds of Nnewi cluster manufacturers

3. **South-East Risk Dashboard for Investors/Lenders:** The contradiction between high utilization and low confidence creates an information asymmetry. Lenders and investors may be avoiding the South-East based on confidence data, when in fact manufacturers there are productive. A dashboard that separates manufacturing performance from general business climate could unlock lending to this region.

### Research Needed

- What specific security events occurred in South-East in October-November 2025 that caused the confidence collapse?
- How frequently do sit-at-home orders occur, and what is the estimated revenue impact per incident?
- Is Nnewi manufacturing cluster specifically addressed by any existing software tools?
- What drove the South-South recovery (23.3 to 29.0) in November -- oil sector activity? Government spending?

### Impact on PRD Rankings

The South-East confidence-utilization contradiction suggests that ForexGuard (PRD 03) and CashFlow AI (PRD 06) should consider **region-specific modules**. South-East manufacturers have different constraints (insecurity, sit-at-home disruptions) than South-West manufacturers (FX exposure, port congestion). A one-size-fits-all product may miss the South-East market entirely or solve the wrong problem for them.

---

## Angle 3: The Capacity Utilization Paradox

### The Data

**Monthly CBN Survey Capacity Utilization:**
- Feb: 57.2% | Mar: 56.5% | Apr: 56.9% | May: 58.7% | Jun: 58.2% | Jul: 59.1% | Aug: 58.1% | Sep: 60.4% | **Oct: 62.0%** | **Nov: 50.1%**

**MAN Quarterly Report Capacity Utilization:**
- Q1 2025: 57.04%
- Q2 2025: 57.66%
- Q4 2025: 47.72%

**Confidence Index (same period):**
- Feb: 19.7 | Sep: 31.5 | Oct: 38.5 | Nov: 37.5
- 6-month forward CI: 52.8 (Nov)

**Energy Cost Explosion (MAN quarterly):**
- Q1: N254.7B
- Q2: N275.6B (+8.2% from Q1)
- Q4: N676.6B (+145.5% from Q2)

### The Paradox

Capacity utilization crashed from 62% (Oct monthly) to 50.1% (Nov monthly), and from 57.66% (Q2 MAN) to 47.72% (Q4 MAN). Yet business confidence was RISING throughout this period. How can businesses be more optimistic while producing less?

### Sector-by-Sector Breakdown (Q4 2025 MAN Data)

**Resilient Sectors:**
| Sector | Q4 Capacity | Notes |
|--------|-------------|-------|
| Food/Beverage/Tobacco | 63.24% | Highest. Essential goods, inelastic demand |
| Domestic/Office Furniture | 60.95% | Import substitution (furniture too costly to import at N1,544/$) |
| Textiles/Apparel | 57.36% | Surprisingly strong despite 4x energy spend increase (N6.97B to N26.45B) |

**Collapsed Sectors:**
| Sector | Q4 Capacity | Q2 Capacity | Change | Notes |
|--------|-------------|-------------|--------|-------|
| Electrical/Electronics | 28.00% | 52.63% | -46.8% | Catastrophic |
| Chemicals/Pharma | 37.50% | ~50%* | ~-25% | Import-dependent |
| Metal Products | 39.48% | ~50%* | ~-20% | Construction demand softening |

*Q2 approximations from general trend data

### What Explains the Divergence

**Why Food/Beverage Survived (63.24%):**
- People must eat regardless of macroeconomic conditions -- demand is inelastic
- Food/Bev is the single largest energy spender at N229.4B (Q4), meaning they CAN absorb costs because their products must be purchased
- Many food producers have shifted toward local raw materials, reducing FX dependency (58.26% local sourcing average in Q4)
- Pricing power: food inflation passed through to consumers

**Why Electrical/Electronics Collapsed (28.00% from 52.63%):**
- Near-total import dependency for components (semiconductors, screens, circuit boards all imported)
- N1,544/$ exchange rate makes imported components 25.3% more expensive Q1 to Q4
- Consumer discretionary: consumers delay electronics purchases during inflation
- Chinese competition: cheaper finished electronics imports undercut local assembly
- Double hit: more expensive to produce AND consumers shift to cheaper imports

**Why Textiles Survived (57.36%) Despite 4x Energy Spend:**
- Textile energy spending exploded from N6.97B to N26.45B (3.8x increase) -- yet capacity held at 57.36%
- Possible explanations: (a) domestic cotton/raw material supply insulates from FX, (b) growing "buy Nigerian" trend in clothing, (c) import tariffs protecting domestic textiles, (d) export potential to neighboring West African countries at favorable exchange rates
- The textile sector may be a hidden beneficiary of naira depreciation -- their locally-sourced products become relatively cheaper versus imports

### Q4 Energy Cost Breakdown (N676.6B total)

| Energy Source | Q4 Cost | Share |
|---------------|---------|-------|
| Diesel/Petrol | N304.9B | 45.1% |
| PHCN (Grid) | N179.4B | 26.5% |
| Generators | N127.7B | 18.9% |
| Gas | N64.6B | 9.5% |

The 145% surge from Q2 (N275.6B) to Q4 (N676.6B) was driven primarily by diesel/petrol cost increases and grid tariff hikes (Band A industrial tariffs surged 200%+). This hit power-intensive sectors hardest.

### Why Confidence Rose While Production Fell

The resolution of the paradox: businesses were optimistic about the FUTURE, not the present.
- Credit Access Index improved from -8.8 (Feb) to +9.2 (Nov) -- access was opening up even as rates punished
- 6-month forward Confidence Index hit 52.8 in November -- businesses expected significant improvement
- The naira exchange rate expectations were consistently positive (businesses expected appreciation)
- Government programs (FINCLUDE $500M, NiPHaST $3.5B) were announced in this period
- Optimism is about what businesses EXPECT to happen in 6 months. Current production reflects what they CAN do right now.

This is a **liquidity-constrained manufacturing recession with forward-looking optimism** -- businesses believe the worst is behind them but cannot yet act on that belief because FX, energy, and interest rate constraints remain binding.

### Product Implications

1. **Sector-Specific GenTrack Modules:** GenTrack (PRD 05) should NOT treat all manufacturers the same. Food/Bev has different energy optimization needs than Electrical/Electronics. The Food/Bev sector (N229.4B in Q4 energy) is the highest-value target with proven ability to absorb costs. Electrical/Electronics at 28% capacity may not be able to afford any new software.

2. **Production Scheduling for Constrained Capacity:** Manufacturers running at 47-63% capacity are not efficiently utilizing their available time. A lightweight production scheduler that helps them optimize batch sequencing around power availability, raw material delivery, and labor shifts could push utilization up 5-10 percentage points without any capital investment.
   - **Pricing:** N50-100K/month
   - **Target:** Food/Bev manufacturers (highest capacity, highest energy spend, most to gain from optimization)

3. **Textile Export Opportunity Tool:** The textiles sector's resilience at 57.36% despite 4x energy costs suggests an export opportunity that may not be fully exploited. A tool helping textile manufacturers identify export markets, manage cross-border logistics, and handle export documentation could unlock growth in an otherwise-constrained sector.

### Research Needed

- What is Q3 2025 capacity utilization? Was the Q2-Q4 decline gradual or sudden?
- Are Food/Bev manufacturers investing in solar at higher rates than other sectors (given their N229.4B energy spend)?
- What specific products are the surviving textile manufacturers making? Export volumes?
- Why did Chemicals/Pharma collapse despite healthcare being a necessity sector?

---

## Angle 4: The Commercial Paper Explosion

### The Data

| Period | CP Issuances | Growth |
|--------|-------------|--------|
| H1 2023 | N789B | 89% YoY |
| H1 2024 | N763.43B | baseline |
| 2024 Full Year | N790B (est.) | |
| **H1 2025** | **N1.58T** | **107% YoY** |

From FMDQ Exchange data. Commercial paper (CP) issuances more than doubled in a single year. H1 2025 alone (N1.58T) exceeded the entire 2024 full-year estimate.

### Who Is Issuing

The source data states the market is "dominated by blue-chip: Dangote, BUA Group, leading banks" with CP yields at 15-25% and "growth driver: banking constraint + need for working capital agility."

This means large corporates are issuing short-term debt instruments (typically 30-270 days maturity) rather than drawing on bank credit lines. They are doing this because:

1. **Bank lending rates hit 35.5%** -- commercial paper at 15-25% yields is CHEAPER than bank loans
2. **CBN tightening** (6 consecutive rate hikes to 27.5% MPR) has made banks more cautious about lending
3. **Working capital needs are acute** -- unsold inventory surged 87.5% to N2.14T, meaning businesses need cash to fund operations while inventory sits

### Who Is Buying

CP investors are typically:
- Money market funds seeking short-term yields
- Banks deploying excess liquidity (cheaper to buy CP than lend to risky SMEs)
- Pension funds with short-term allocation buckets
- High-net-worth individuals seeking returns above savings rates
- Corporate treasuries parking excess cash

At 15-25% yields, CP offers attractive risk-adjusted returns compared to Treasury bills (which have been compressed by demand).

### Is This Desperation or Sophistication?

**Both.** The 107% growth signals:

1. **Desperation (for issuers):** Companies that previously relied on bank credit now cannot access it at affordable rates or in sufficient volumes. CP issuance is a bridge to survive, not a growth strategy. The concurrent 87.5% increase in unsold inventory (N2.14T) confirms this -- companies are sitting on goods they cannot sell while needing cash to fund operations.

2. **Sophistication (for the market):** The very existence of a N1.58T CP market demonstrates deepening capital markets. Before 2020, the Nigerian CP market was negligible. The fact that it has grown to this scale means there is institutional infrastructure (FMDQ Exchange, rating agencies, underwriters) that can be leveraged for further innovation.

3. **Market signal:** When companies voluntarily pay 15-25% for 30-270 day money rather than use 35.5% bank loans, they are (a) confirming that bank loans are worse (higher rates, more conditions, slower disbursement), and (b) demonstrating creditworthiness that banks are not efficiently pricing.

### Product Implications

**CP Issuance Platform for Mid-Market Companies**

Currently, only blue-chip companies (Dangote, BUA, major banks) can access the CP market because the minimum issuance size, legal documentation, and FMDQ listing requirements are too complex for mid-market firms (N5-50B in annual revenue). Yet these mid-market firms have the same working capital desperation.

- **What:** A platform that packages mid-market CP issuances -- handling documentation, credit rating facilitation, FMDQ registration, and investor matching
- **Who pays:** Issuers pay 1-3% arrangement fee on issuance amount
- **Revenue on N10B in facilitated issuances:** N100-300M in fees
- **Validation:** 107% growth means demand is exploding; the constraint is access infrastructure, not demand

**Short-Term Investment Marketplace**

Separately, the investor side is underserved. Individual and small institutional investors want access to 15-25% yields but cannot participate because minimum CP denominations are too high (typically N50M+).

- **What:** Fractional CP investment platform -- pool smaller investors to participate in CP markets
- **Minimum investment:** N500K-N1M (vs current N50M+ minimums)
- **Pricing:** 0.5-1% management fee
- **Regulatory risk:** HIGH -- CBN and SEC approvals needed for pooled investment products

**Relevance to CashFlow AI (PRD 06):**

CashFlow AI should include a CP timing recommendation module. If a business needs N500M in working capital and CashFlow AI can forecast that need 60 days in advance, it should recommend: "Issue N500M in 90-day CP at 18% yield through [platform] rather than drawing N500M bank line at 35.5%." This saves the business N43.75M annually on N500M in financing (35.5% vs 18% = 17.5% savings).

### Research Needed

- What is the minimum CP issuance size that is economically viable in Nigeria?
- How many mid-market companies (N5-50B revenue) have credit ratings or could obtain them?
- What are FMDQ's requirements for CP listing, and what does the process cost?
- Are there existing platforms facilitating CP issuances for non-blue-chip companies?
- What is the default rate on Nigerian commercial paper?

### Impact on PRD Rankings

This angle supports CashFlow AI (PRD 06) rising in priority. The working capital desperation signaled by 107% CP growth means businesses will pay for tools that help them forecast cash needs and access cheaper financing. CashFlow AI with an integrated CP/alternative financing recommendation engine could be more valuable than originally estimated.

Additionally, SupplyLink (PRD 09) could integrate CP as a funding source for supply chain finance -- instead of SupplyLink needing to raise its own capital, it could channel institutional CP investors toward verified supply chain receivables.

---

## Angle 5: The Credit Access Turnaround

### The Data

**Credit Access Index (monthly):**
- Feb: -8.8
- Mar: -4.3
- Apr: -5.6
- May: -7.8
- Jun: -7.0
- Jul: -3.2
- **Aug: +1.5** (first positive)
- Sep: +3.7
- Oct: +7.8
- Nov: +9.2

**Meanwhile, lending conditions worsened:**
- CBN MPR: 24.75% (Feb) to 27.50% (Nov)
- Commercial lending rates: ~28% (Feb) to 35.5% (Nov)
- MAN constraint data: "High Interest Rate" cited by 88.9% (Q1) to 91.5% (Q4)
- 91.5% of manufacturers cite high interest as a constraint in Q4

### The Contradiction

Credit ACCESS improved dramatically (+18 points, from -8.8 to +9.2) at the exact same time credit COST deteriorated dramatically (28% to 35.5% lending rates). More businesses are getting credit, but the credit is far more expensive.

### What Changed in August

August was the inflection point where the Credit Access Index first turned positive. Possible explanations:

1. **Alternative lending channels expanding:** Fintech lenders, microfinance banks, and digital lending platforms may have expanded operations mid-2025. Moniepoint (unicorn status Oct 2024) was aggressively expanding business lending. Kredete raised $22M in 2025 for SME working capital.

2. **World Bank FINCLUDE announcement effects:** While formally approved in December 2025, the FINCLUDE facility ($500M for 250,000 MSMEs) was likely in discussion throughout 2025. Anticipation of de-risked lending may have encouraged banks and MFBs to begin expanding SME portfolios.

3. **CBN development finance programs:** The CBN operates multiple intervention facilities (MSME Development Fund, Agri-Business/Small and Medium Enterprise Investment Scheme). These may have increased disbursements mid-2025.

4. **Desperation-driven lending:** At 35.5% rates, lending is extremely profitable for banks. Some banks may have expanded SME lending despite macro headwinds because the risk-adjusted returns were attractive. Default costs can be absorbed when you are earning 35.5% on performing loans.

5. **Commercial paper spillover:** The CP market explosion (107% growth) may have freed up bank balance sheets. As blue-chip companies moved to CP financing, banks had excess liquidity to deploy to SMEs.

### Are Businesses Accessing Expensive Credit Because They MUST?

Almost certainly yes. The data tells a clear story:

- Capacity utilization crashed to 47.72% (Q4 MAN data) -- businesses are struggling to produce
- Unsold inventory surged 87.5% to N2.14T -- cash is locked in goods that cannot be sold
- Energy costs surged 145% (N275.6B to N676.6B) -- operating costs are crushing
- Yet businesses are taking loans at 35.5% because the alternative is shutting down

The Credit Access Index measures whether businesses CAN get credit, not whether the credit is affordable. A business that borrows N100M at 35.5% to keep the factory running has "accessed credit" -- but at a cost that may be fatal if demand does not recover.

This is **survival borrowing**, not growth borrowing.

### Product Implications

**CreditMatch -- Alternative Lender Marketplace (Referenced in PRD 12/Gaps)**

The credit access turnaround validates that businesses ARE obtaining credit -- but from whom and at what cost? If the answer is "from whoever will lend, at whatever rate" then there is enormous value in:

1. **Rate comparison tool:** Show businesses all available lending options side-by-side (bank loans, MFB loans, fintech lending, invoice factoring, CP issuance) with true all-in costs
2. **Alternative data credit scoring:** Help lenders price risk more accurately so rates can come down. Current 35.5% rates include a huge risk premium that could be reduced with better data.
3. **Working capital optimization:** Before borrowing, help businesses identify internal sources (accelerate collections, delay payables, reduce inventory) to minimize borrowing needs

**Integration with CashFlow AI (PRD 06):**

CashFlow AI becomes dramatically more valuable if it can:
1. Forecast the cash shortfall 60-90 days in advance (core feature)
2. Recommend the cheapest funding source (CP at 18% vs bank at 35.5% vs factoring at 25%)
3. Quantify the savings: "By forecasting this shortfall 60 days early, you saved N8.75M in interest costs by using CP instead of emergency overdraft"

This transforms CashFlow AI from a "nice to have" forecasting tool into a "money-saving" tool with quantifiable ROI on every usage.

### Research Needed

- Which specific lending institutions expanded SME lending in August-November 2025?
- What is the average loan size and tenor for new SME lending in this period?
- What percentage of new SME loans are from fintechs vs traditional banks vs MFBs?
- What are default rates on 2025 SME lending? Are they sustainable at 35.5%?
- Did any CBN intervention program specifically increase disbursements in August 2025?

### Impact on PRD Rankings

**CashFlow AI (PRD 06) should rise to #2 priority** (from its current mid-tier position). The credit access turnaround means businesses are actively in the market for financing. A tool that helps them (a) forecast needs earlier and (b) compare financing costs could save the average manufacturer millions per year. The N1.58T CP market proves businesses will pay for cheaper capital -- CashFlow AI routes them to it.

**SupplyLink (PRD 09) is also validated.** If credit access is improving but at punishing rates, supply chain finance (early payment at 20-25% annualized discount vs 35.5% bank loans) becomes increasingly attractive.

---

## Angle 6: The 2G/USSD Opportunity

### The Data

From the source research on Nigerian telecommunications:

| Connection Type | Share of Mobile Connections |
|----------------|---------------------------|
| 2G | 42% |
| 3G | ~50% |
| 4G | ~5.6% |
| 5G | 2.4% |
| Fixed broadband | 0.1% of population |

Additional context:
- Total mobile connections: 138.7M
- Broadband penetration: 44.4-48.78% (Dec 2024 - Jun 2025)
- Mobile broadband cost: $4.89/month per Mbps (among world's highest, 10x US cost)
- Entry-level mobile broadband (2GB/month): 4.2% of GNI per capita (UN target is 2%)
- Fixed broadband: 15% of GNI per capita
- June 2025: Broadband subscriptions DECLINED for first time in 9 months (price sensitivity)

### What This Means

42% of mobile connections are 2G -- meaning they can only support voice calls, SMS, and USSD codes (the *737#, *966#, *901# style codes used for mobile banking). These connections CANNOT:
- Load web applications
- Run mobile apps
- Access cloud-based SaaS tools
- Use WhatsApp reliably (needs 3G minimum)

This is approximately 58 million connections still on 2G technology.

### Who Are These 2G Users?

The source data does not specify, but structural inference suggests:
- **Rural SMEs and traders** in areas with limited 3G/4G tower coverage
- **Cost-sensitive businesses** that cannot afford data plans (4.2% of GNI per capita for 2GB is prohibitive for micro-businesses)
- **Feature phone users** who never upgraded because their business transactions work via USSD banking (GTBank *737#, Access *901#, etc.)
- **Market traders and informal retailers** (80-90% of FMCG retail is informal, per source data)

These are exactly the businesses that current SaaS tools CANNOT reach. Every PRD in the current set (01-10) assumes web or mobile app access. If 42% of connections are 2G, the addressable market for web-based tools is reduced by nearly half.

### USSD-Based Financial Tools

Nigerian banks have already proven USSD works at massive scale:
- GTBank *737#: Transfers, bill payments, airtime purchases -- millions of daily transactions
- Access Bank *901#: Same functionality
- USSD transactions are free of data costs (charged via airtime deduction)
- USSD works on ANY phone (no smartphone needed)

The opportunity is building USSD-based business tools -- financial products accessible via dial codes on feature phones:

1. **USSD Invoice Tracker:** Supplier dials *XXX# → enters customer code → sees payment status (Paid/Pending/Overdue) → no app, no data, no internet
2. **USSD Daily Sales Logger:** Trader dials *XXX# → enters today's sales amount → gets weekly/monthly summary via SMS
3. **USSD Price Checker:** Manufacturer dials *XXX# → enters product code → gets current market price for raw materials in their region
4. **USSD Loan Application:** SME dials *XXX# → answers 5 questions → gets pre-approval and rate quote via SMS

### Market Size Implications

If web/mobile app tools can reach ~80M connections (3G+), USSD tools can reach ALL 138.7M connections. The incremental market is 58M connections -- businesses that NOBODY is currently serving with digital tools.

For context, Khatabook in India (simple bookkeeping for small merchants) reached 10M+ users with a similar "feature phone first" approach. Nigeria's informal sector (80-90% of retail) represents an even larger potential market.

### Who Has Built USSD Products in Nigeria

The source data does not detail USSD product companies specifically, but the infrastructure exists:
- Africa's Talking, Hubtel, and other telco API providers offer USSD session management
- Nigerian fintechs have built on these APIs for banking products
- The gap is in non-banking USSD tools -- nobody is building business management tools via USSD

### Product Implications

Every PRD should have a USSD fallback strategy:

- **PayMatch (PRD 01):** USSD for payment status checks: supplier dials, enters invoice number, gets status
- **TaxGuard (PRD 02):** USSD deadline reminders and payment confirmation via SMS
- **CashFlow AI (PRD 06):** USSD daily cash balance alerts
- **CollectPro (PRD 07):** USSD payment reminders sent to debtors (they can confirm payment intent via USSD)

A dedicated USSD-first product targeting the 42% 2G market (simple bookkeeping + payment tracking) could reach a market 2-3x larger than any web-based tool.

### Research Needed

- What is the demographic and business profile of 2G users? Are they concentrated in specific sectors or regions?
- What is the cost of building and operating a USSD product in Nigeria? (Africa's Talking charges per session)
- What USSD business tools (non-banking) exist in Nigeria, Kenya, or other African markets?
- What is the Khatabook/OkCredit equivalent traction data for Africa?
- Can USSD sessions be long enough for meaningful business tool interactions (typical limit: 182 characters per screen, 5-7 screens per session)?

### Impact on PRD Rankings

This does NOT change which products to build first -- but it changes HOW they should be built. Any product claiming broad Nigerian SME market reach must have a USSD/SMS channel or it is leaving 42% of the market unaddressed. The highest-impact action item is: add USSD integration to the shared technology layer (PRD 00 shared context) so all products can leverage it.

---

## Angle 7: The Maritime $7-9B Black Hole

### The Data

From the source research:
- Nigeria pays **$7-9B annually** to foreign ship owners
- Port congestion costs **$55M daily** (Apapa port)
- Apapa gridlock costs **N600B/month** in lost value (2019 data, likely higher now)
- **N1.2-1.8T annually** in port demurrage and logistics costs
- Container demurrage: **N120K-140K per 40-foot container per day**
- Average dwell time: **21 days at Apapa** vs 7 days in Cotonou, <7 global standard
- Vessel dwell times doubled to **12 days per call** (Q1 2025)
- B'Odogwu platform (Customs digital platform) rollout caused **5,000+ containers stuck**, creating **N2T demurrage exposure**
- Total road freight system losses: **$7.8B annually**
- Transport costs: **30-50% of goods value** (vs 10-15% in efficient markets)
- **N3.5T in total import/export logistics costs** (2022 data)
- Haulage rates doubled: **N700K per 40ft container** from Apapa (from N300-400K)

### What Software Tools Exist

Based on source data:
- **Kobo360:** Digital freight brokerage, $37M raised, 50K+ truck owners, serves DHL/Unilever/Dangote. But this is LAND freight, not maritime.
- **National Single Window (government):** In development. Projects N300-400B annual savings, 35-45% dwell time reduction. But plagued by implementation issues (B'Odogwu debacle).
- **ClearFast (PRD 04):** Customs documentation automation. This is the closest to addressing the maritime chain.

The gap is UPSTREAM of ClearFast -- before the container even arrives at port:

1. **No freight rate comparison for Nigerian importers:** When a Lagos manufacturer needs to ship a container from Shanghai, they rely on 2-3 freight forwarders they know personally. There is no platform comparing rates across shipping lines (Maersk, MSC, CMA CGM, etc.) for Nigerian routes.

2. **No vessel tracking for Nigerian businesses:** International tools exist (MarineTraffic, VesselFinder) but they are not integrated with Nigerian customs/port systems and do not predict Apapa-specific congestion patterns.

3. **No demurrage cost calculator integrated with port conditions:** A tool that says "your container will arrive March 15, current Apapa congestion = 18 day average dwell time, estimated demurrage cost = N2.5M, alternative: divert to Tin Can Island (12 day average) saving N840K" does not exist.

### The Opportunity

**FreightCompare / ShipSmart -- Maritime Freight Optimization for Nigerian Importers**

- **What:** (1) Compare shipping rates across carriers for Nigerian routes, (2) Track vessel ETAs with Nigerian port congestion overlays, (3) Calculate total landed cost including estimated demurrage based on real-time port conditions, (4) Recommend optimal port of entry (Apapa vs Tin Can Island vs Onne vs Calabar) based on congestion and routing
- **Who pays:** Any importing business. The N120K-140K daily demurrage means a tool that saves even 2 days of dwell time pays for itself on a single container.
- **Pricing:** N100-200K/month per importer, or N25-50K per shipment for tracking + optimization
- **Revenue potential:** Nigeria handles 1.5-2M containers annually. If 10% use optimization at N30K per shipment = N4.5-6B in annual revenue potential.

**Relationship to ClearFast (PRD 04):**

This is naturally UPSTREAM of ClearFast. The product chain would be:
1. ShipSmart: Choose carrier, track vessel, predict arrival and congestion (BEFORE port)
2. ClearFast: Automate customs documentation, track clearance (AT port)
3. LogisticsCompare (PRD 10): Optimize inland haulage (AFTER port)

Combined, this creates an end-to-end import chain solution with three revenue points per shipment.

### Research Needed

- What software do Nigerian freight forwarders currently use? Excel? Manual systems?
- What data sources exist for Nigerian port congestion (real-time dwell times, vessel queues)?
- Does the NPA (Nigerian Ports Authority) publish any machine-readable data on port operations?
- What is the addressable market -- how many businesses import directly (vs through trading companies)?
- Are there any Nigerian startups in maritime tech? Any African maritime tech companies?

### Impact on PRD Rankings

ClearFast (PRD 04) becomes MORE valuable if it is positioned as the middle of a three-part chain (ShipSmart + ClearFast + LogisticsCompare). The $7-9B in annual payments to foreign ship owners represents a massive cost base where even 1-2% optimization = $70-180M in savings. ClearFast should probably move UP in priority as the foundation for this chain.

---

## Angle 8: The Naira Appreciation Expectation Disconnect

### The Data

**CBN Survey Exchange Rate Expectations (businesses expecting naira appreciation):**

| Month | Current Month Expectation Index | Next Month Index |
|-------|-------------------------------|------------------|
| Feb | 9.8 | Positive |
| Jun | 5.8 | Positive |
| Sep | ~20 | Positive |
| Nov | 29.7 | Positive |

All months showed positive indices, meaning businesses consistently expected the naira to STRENGTHEN. The expectation grew MORE confident over time (9.8 in Feb to 29.7 in Nov).

**Actual Naira Performance (MAN quarterly data):**
- Q1 2025: N1,231.5/$1
- Q2 2025: N1,303.9/$1
- Q4 2025: N1,543.6/$1
- **Total Q1-Q4 depreciation: 25.3%** (N312.1 drop)

**2024 performance:** N997/$1 to N1,535/$1 = **40.9% depreciation**

### The Disconnect

Businesses were systematically, confidently, and increasingly WRONG about the direction of the naira. As the naira depreciated 25.3% during the survey period, the expectation of appreciation grew STRONGER (9.8 to 29.7).

This is not a minor miscalibration -- it is a fundamental cognitive bias in the business community. Possible explanations:

1. **Government signaling:** Nigerian authorities consistently signal stability and reform, creating expectations that "this time will be different." IMF programs, World Bank commitments, and CBN policy changes create hope.

2. **Mean reversion bias:** After the naira's 40.9% crash in 2024, businesses expected a bounce-back that never came. The worse the depreciation, the more they expected correction.

3. **CBN intervention history:** The CBN periodically intervenes in forex markets, creating temporary appreciations. Businesses may be extrapolating from these interventions rather than structural trends.

4. **Survival optimism:** Businesses NEED the naira to appreciate for their economics to work. Expectations may reflect hope rather than analysis. This is confirmation bias at a macro level.

### Product Implications

**ForexGuard (PRD 03) becomes even more critical.**

If businesses are systematically wrong about FX direction, then:
- They are NOT hedging (why hedge against appreciation you expect?)
- They are taking on FX-denominated commitments assuming rates will improve
- They are pricing products based on optimistic FX assumptions
- When the naira continues to depreciate, they face unexpected losses (N1.62T documented in 2024)

ForexGuard does not need to PREDICT the naira accurately. It only needs to show businesses their EXPOSURE and SCENARIO RISK. A tool that says "If the naira hits N1,800/$ (which has happened before), your current unhedged import commitments will cost you N150M more than budgeted" is providing value that businesses are actively rejecting due to cognitive bias.

**Specific ForexGuard Enhancement:**

Add an "Expectation vs Reality" dashboard:
1. Show the business what exchange rate they assumed in their budget
2. Show the actual exchange rate trajectory
3. Calculate the variance: "Your budget assumed N1,300/$. Actual is N1,544/$. This 18.8% variance has increased your raw material costs by N75M this quarter."
4. Provide scenario planning: "If the naira depreciates another 10% (to N1,698), your Q1 margins become negative."

This feature leverages the demonstrated cognitive bias -- businesses don't WANT to hear this, but they NEED to, and the data proves they will be wrong about FX direction.

### Research Needed

- What percentage of Nigerian manufacturers actively hedge FX exposure? (Source data says bank hedging products exist but no adoption data)
- Are there Nigerian fintech FX hedging tools? What is their traction?
- What is the actual mechanism of business FX forecasting? Do they hire consultants? Use bank research? Rely on gut feel?
- Is there data on businesses that lost money specifically because they assumed appreciation when depreciation occurred?

### Impact on PRD Rankings

ForexGuard (PRD 03) is CONFIRMED as a top-5 product. The systematic bias documented here means the target market (importers/manufacturers with USD exposure) is making predictable, quantifiable errors that ForexGuard can correct. N1.62T in documented 2024 FX losses provides the TAM. The cognitive bias provides the sales hook: "Your FX expectations have been wrong every month this year. Here's what it's costing you."

---

## Angle 9: The Manufacturing Subsector Divergence

### The Data (Q4 2025 MAN Report)

**Capacity Utilization by Subsector:**

| Sector | Q4 2025 Capacity | Q2 2025 (est.) | Status |
|--------|-----------------|----------------|--------|
| Food/Beverage/Tobacco | 63.24% | ~60% | Resilient |
| Domestic/Office Furniture | 60.95% | ~55% | Resilient |
| Textiles/Apparel | 57.36% | ~50% | Surprisingly strong |
| Paper Products | ~50% | ~48% | Stable |
| Non-Metallic Minerals | ~48% | ~52% | Declining |
| Metal Products | 39.48% | ~50% | Struggling |
| Chemicals/Pharma | 37.50% | ~50% | Collapsed |
| Electrical/Electronics | 28.00% | 52.63% | Collapsed (-46.8%) |

**Alternative Energy Spending by Sector (2024):**

| Sector | 2024 Spend | vs 2023 | Notes |
|--------|-----------|---------|-------|
| Food/Beverage/Tobacco | N229.41B | Highest absolute | Scale advantage |
| Chemicals/Pharma | N208.68B | Doubled | Heavy energy user |
| Non-Metallic Minerals | N118.49B | High | Cement, glass, ceramics |
| Textiles/Apparel | N26.45B | 4x increase (from N6.97B) | Most dramatic growth |

### What Explains the Divergence

**Food/Beverage at 63.24% (Resilient):**
- Inelastic demand: people must eat
- Strongest pricing power: food inflation passed to consumers
- Relatively higher local raw material sourcing (grains, livestock, produce)
- Scale advantage: Nigeria's food sector is among the largest in Africa
- Energy resilience: spending N229.4B on energy is enormous but absorbed because revenue is enormous

**Electrical/Electronics at 28.00% (Collapsed):**
- Near-total import dependency for components (chips, boards, screens)
- N1,544/$ rate makes imported components 25.3% more expensive in 9 months
- Consumer discretionary: purchases deferred during high inflation
- Chinese competition: finished electronics imported cheaper than Nigerian assembly
- Small sector with thin margins -- no buffer to absorb shocks
- 46.8% decline from 52.63% (Q2) is catastrophic -- approaching shutdown levels

**Textiles at 57.36% (Surprisingly Strong):**
- Despite energy spend increasing 4x (N6.97B to N26.45B)
- Possible beneficiary of naira depreciation: local textiles become cheaper vs imports
- Nigerian textile tradition (aso oke, ankara, adire) has domestic cultural demand
- Possible export competitiveness to West African neighbors
- Raw materials (cotton) sourced locally, insulating from FX impact
- Government import restrictions on some textile categories may be protecting domestic producers

**Chemicals/Pharma at 37.50% (Struggling):**
- Despite healthcare being a necessity, pharma manufacturing is 70-75% import-dependent for active pharmaceutical ingredients (APIs)
- N1,544/$ rate devastates economics of importing APIs and packaging
- NAFDAC registration takes 12-18 months, blocking new local manufacturing
- Generic drug competition from India/China at lower prices
- Paradox: healthcare demand is inelastic but pharma MANUFACTURING is very FX-sensitive because the inputs are imported even if the output is consumed locally

### Sector-Specific Product Opportunities

**For Food/Beverage (63.24% -- the profitable target):**
- GenTrack (PRD 05) should prioritize this sector: N229.4B in energy spend, highest ability to pay, scale of operations justifies monthly software fees
- CashFlow AI (PRD 06): Food manufacturers have complex cash cycles (agricultural input purchases are seasonal, output is continuous)
- PayMatch (PRD 01): High invoice volumes with distributors/retailers across the country
- Production optimization: Running at 63% means 37% idle capacity that could be activated with better scheduling, energy management, or supply chain coordination

**For Textiles (57.36% -- the hidden opportunity):**
- Export facilitation tools: If textiles are benefiting from naira weakness, there may be untapped export markets
- ForexGuard with import substitution analysis: Show textile manufacturers how their competitiveness changes at different exchange rates
- Energy optimization is urgent: 4x energy spend increase is unsustainable without intervention

**For Electrical/Electronics (28% -- do NOT target):**
- This sector is in survival mode and unlikely to purchase new software tools
- Some may shut down entirely if conditions do not improve
- The opportunity here is in AFTER the shakeout: surviving firms will need tools to rebuild

**For Chemicals/Pharma (37.5% -- specific opportunity):**
- Drug import cost tracking: pharma companies need real-time visibility into API costs (FX-dependent)
- NAFDAC registration management: 12-18 month process needs tracking and deadline management
- Could be a specialized vertical within ForexGuard or TaxGuard

### Research Needed

- What specific products are Nigerian textile manufacturers making and exporting?
- Are there government incentives or import restrictions currently protecting the textile sector?
- What is the breakdown of Chemicals (industrial) vs Pharma (drugs) within the 37.5% capacity figure?
- Are Food/Bev manufacturers actively investing in solar/alternative energy given their N229.4B spend?
- What drove the Domestic/Office Furniture sector to 60.95% resilience?

### Impact on PRD Rankings

**GenTrack (PRD 05) and CashFlow AI (PRD 06) should explicitly prioritize Food/Beverage manufacturers** as first customers. This sector has:
- Highest capacity utilization (63.24%) -- still operating, still spending
- Highest energy spend (N229.4B) -- most to gain from optimization
- Scale that justifies software costs
- Inelastic demand ensuring revenue stability

The current PRDs treat "manufacturers" as a homogeneous category. This data shows they must be segmented. Targeting Electrical/Electronics manufacturers (28% capacity) with a software tool would be a waste -- they cannot afford it and may not survive.

---

## Angle 10: The Employment-Expansion Disconnect

### The Data

**CBN Survey Expansion Plans Index (very positive):**
- Range across months: 47.5 - 84.6 index points
- Oct peaks: Mining 80.0, Construction 80.8
- Nov: Construction 80.8 (highest), Agriculture 72.7, Manufacturing ~60

**CBN Survey Employment Plans Index (much lower):**
- Range across months: 8.0 - 40.0 index points
- Construction consistently highest (but still well below expansion index)
- Nov: Mining 40.0 (highest), Construction ~35

**The Gap:**
- Expansion plans: 54-81 points (very positive)
- Employment plans: 8-40 points (cautious to moderate)
- Typical gap: 20-40 index points

**MAN Employment Data (actual):**
- Q1: 153,682 employees
- Q2: 154,064 (+382)
- Q4: 152,893 (-1,171 from Q2)
- Net Q1-Q4: **-789 jobs** (despite positive expansion plans in surveys)

### What This Means

Businesses want to EXPAND (grow revenue, capacity, market presence) but NOT HIRE (grow headcount). This is a massive signal about the future of Nigerian business operations:

1. **Automation preference:** If businesses can expand without hiring, they prefer it. This means demand for productivity tools, automation software, and technology that replaces labor.

2. **Labor cost avoidance:** With 62 different taxes/levies including multiple statutory employee contributions (PENCOM 10%, NSITF 1%, NHF 2.5%, ITF 1%), each new hire creates 18%+ in additional costs. Businesses rationally avoid hiring.

3. **Skill gap reality:** 85% of graduates lack digital competencies, 50%+ lack employable skills. Businesses may want to hire but cannot find qualified workers. It is easier to automate than to train.

4. **Brain drain response:** With 69% of 18-35 year olds willing to emigrate, investing in employee training yields uncertain returns. Businesses may prefer technology that does not emigrate.

5. **Gig/contractor preference:** Rather than hiring full-time employees (with all statutory obligations), businesses may be expanding through contractors, outsourced labor, and project-based work.

### Sectoral Patterns

**Construction (80.8 expansion, ~35 employment):**
- Gap: 45+ points
- Construction uses heavy project-based labor, not permanent employees
- Expansion means more projects, not necessarily more full-time staff
- Equipment leasing (N5.17T portfolio, 23% YoY growth) replaces labor with machines

**Mining (80.0 expansion, 40.0 employment):**
- Closest alignment between expansion and employment
- Mining requires physical labor that cannot be easily automated
- But still a 40-point gap

**Manufacturing (~60 expansion, ~20 employment):**
- 40-point gap
- Manufacturers are expanding output capacity but automating production lines
- Net job losses (-789 Q1-Q4) confirm this -- production is being squeezed from fewer workers

### Product Implications

**1. Automation/Productivity Tools (direct demand):**
The expansion-without-hiring signal means businesses will pay for tools that increase output per employee:
- PayMatch (PRD 01): Automates invoice matching that currently requires 2-3 finance staff
- ClearFast (PRD 04): Automates customs documentation that currently requires clearing agents
- TaxGuard (PRD 02): Automates tax compliance that currently requires 1-2 accounting staff days per month
- CashFlow AI (PRD 06): Automates cash forecasting done manually by finance managers

Each of these products should be positioned as "expand without hiring" rather than "replace your staff." Nigerian businesses are sensitive to layoff optics but responsive to "you can grow 50% without hiring anyone new."

**2. Fractional Workforce Platform:**
If businesses want to expand through contractors rather than employees, there is an opportunity in:
- **Project-based talent marketplace:** Connect businesses needing specific skills (accountant for month-end, logistics coordinator for a shipment, IT support for a system migration) with available professionals
- Similar to Toptal/Upwork but localized for Nigerian professional services
- **Pricing:** 15-25% markup on contractor rates (standard Nigerian recruiting agency commission is 10-20% of annual salary)
- The Phillips Outsourcing model ($45M revenue managing 12,000+ outsourced employees) validates demand

**3. TaxGuard Enhancement: Contractor Compliance Module:**
If businesses shift from employees to contractors, they need tools to manage:
- Contractor payment tracking and withholding tax (WHT at 5-10%)
- Contractor vs employee classification (FIRS scrutiny)
- 1099-equivalent reporting for Nigerian tax authorities
- This extends TaxGuard's value proposition into the growing contractor economy

### Research Needed

- What percentage of new business expansion in Nigeria uses contractors vs full-time employees?
- Are there Nigerian fractional work or gig platforms targeting B2B professional services (not ride-hailing or delivery)?
- What is the typical cost savings of using a contractor vs full-time employee for comparable work in Nigeria (including all statutory contributions)?
- How is the automation adoption rate trending in Nigerian manufacturing? Are they importing automation equipment?
- What is the Phillips Outsourcing model in detail -- what services drive the bulk of their $45M revenue?

### Impact on PRD Rankings

All software PRDs benefit from this signal -- the employment-expansion disconnect means businesses are primed to adopt software that replaces manual work. The specific ranking impact:

- **TaxGuard (PRD 02) rises** -- tax compliance automation is the most direct "replace 2 days of accounting work per month" proposition
- **PayMatch (PRD 01) rises** -- invoice matching automation is the most direct "replace 1-2 finance staff" proposition
- **All PRDs should reframe positioning** from "efficiency tool" to "expansion enabler that doesn't require hiring"

---

## Summary: Research Priority Matrix

| Angle | Urgency | Data Confidence | Product Impact | Key Unknown |
|-------|---------|----------------|----------------|-------------|
| 1. Bank Charges Anomaly | LOW | Medium -- anomaly is clear but cause unknown | Feature, not standalone | What banks changed in Sept? |
| 2. South-East Collapse | MEDIUM | HIGH -- data is robust across both CBN and MAN | Region-specific modules | Security event details |
| 3. Capacity Paradox | HIGH | HIGH -- confirmed across CBN monthly and MAN quarterly | Sector segmentation of all PRDs | Q3 data (gradual or sudden?) |
| 4. CP Explosion | HIGH | HIGH -- FMDQ data is institutional | CashFlow AI priority boost, new CP platform | Mid-market CP access barriers |
| 5. Credit Turnaround | HIGH | HIGH -- month-by-month progression clear | CashFlow AI + SupplyLink validation | Who is lending to SMEs? |
| 6. 2G/USSD Opportunity | HIGH | HIGH -- NCC data is authoritative | Architecture change for all products | 2G user demographics |
| 7. Maritime Black Hole | MEDIUM | HIGH -- $7-9B is well-documented | New product or ClearFast expansion | Maritime tech landscape |
| 8. Naira Disconnect | HIGH | HIGH -- survey vs reality fully documented | ForexGuard validation | Hedging adoption rates |
| 9. Subsector Divergence | HIGH | HIGH -- MAN Q4 data is primary source | Customer targeting for all PRDs | Export potential of textiles |
| 10. Employment Gap | MEDIUM | HIGH -- consistent across all months | Positioning reframe for all PRDs | Contractor vs FTE trends |

## Recommended PRD Ranking Adjustments

Based on these 10 angles, the following adjustments to the original PRD prioritization are recommended:

**MOVE UP:**
1. **CashFlow AI (PRD 06)** -- Validated by: CP explosion (Angle 4), Credit turnaround (Angle 5), capacity paradox (Angle 3). Businesses are desperate for working capital visibility and cheaper financing. Should be #2 priority.
2. **ForexGuard (PRD 03)** -- Validated by: Naira disconnect (Angle 8), subsector divergence showing FX-driven collapses (Angle 9). The systematic cognitive bias means this product literally saves businesses from their own incorrect forecasts. Should be #3 priority.
3. **ClearFast (PRD 04)** -- Validated by: Maritime black hole (Angle 7). With potential to become part of a three-product import chain (maritime + customs + haulage), ClearFast becomes more strategically valuable.

**ADD USSD LAYER (all PRDs):**
- Every product should have USSD/SMS fallback capability per Angle 6. This is not optional -- 42% of mobile connections cannot access web-based tools.

**ADD SECTOR SEGMENTATION (all PRDs targeting manufacturers):**
- Per Angle 9, do NOT treat manufacturers as homogeneous. Prioritize Food/Beverage (63.24% capacity, N229.4B energy spend) as first target. Avoid Electrical/Electronics (28% capacity, likely cannot afford software).

**REFRAME POSITIONING (all PRDs):**
- Per Angle 10, position products as "expand without hiring" rather than "efficiency tools." The employment-expansion disconnect means businesses are actively seeking ways to grow output per employee.

---

## Additional Research Agenda

The following research actions would resolve the key unknowns identified across all 10 angles:

1. **September bank charges:** Contact 3-5 Nigerian bank relationship managers and ask what fee changes occurred in August-September 2025
2. **South-East security events:** Search BusinessDay Nigeria, Premium Times, The Cable for October-November 2025 South-East security incidents
3. **Q3 2025 MAN data:** Request from MAN or check if published, to determine whether Q2-Q4 capacity decline was gradual or sudden
4. **CP market access:** Contact FMDQ Exchange or a Nigerian investment bank to understand minimum CP issuance requirements and whether mid-market access platforms exist
5. **SME lending landscape:** Map fintechs and MFBs that expanded SME lending in August 2025+ (correlating with the Credit Access Index turning positive)
6. **2G user demographics:** Contact NCC or telco operators for data on 2G user geographic/demographic profiles
7. **Maritime tech:** Search for Nigerian or African maritime/freight tech startups; check Disrupt Africa, TechCabal, Techpoint Africa databases
8. **FX hedging adoption:** Survey 10 Nigerian CFOs on whether they hedge FX exposure and how
9. **Textile exports:** Pull UN Comtrade data on Nigerian textile export volumes and destinations 2023-2025
10. **Contractor vs employee trends:** Contact Phillips Outsourcing, Workforce Group, or Strategic Outsourcing Limited for data on contractor vs permanent staffing trends
