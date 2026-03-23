# Disruption Validation: VendorScore

## Quick Filter
**Pass** — VendorScore targets a genuine credit information vacuum (credit bureaus cover 13% of adults, ~0% of SMEs) and proposes to serve businesses currently making trade credit decisions on gut feel and handshakes. This is a real non-consumption problem with quantified pain (3-8% annual bad debt write-offs, N75B in failed payments growing 42%/yr).

## 8 Criteria Score

| # | Criterion | Rating | Notes |
|---|-----------|--------|-------|
| 1 | Overlooked segment | **Strong fit** | Credit bureaus serve 13% of adults, virtually zero SMEs. There is no Nigerian B2B equivalent to Dun & Bradstreet. Wholesalers/distributors making N50-200M credit decisions based on gut feel and physical premises visits are genuinely underserved. The 41.5M MSMEs and their trade credit counterparties are non-consumers of credit information. |
| 2 | "Worse" but good enough | **Strong fit** | The product explicitly starts with rule-based scoring from scraped public data (CAC, court records, social signals) rather than comprehensive financial analysis. It will be "worse" than a full credit bureau report (no payment history network, no comprehensive financial data) but infinitely better than the current alternative of nothing. The confidence level indicator honestly communicates data limitations. |
| 3 | Market foothold | **Strong fit** | This is primarily a new-market foothold — creating a category (B2B credit scoring) that does not exist in Nigeria. There is no incumbent to displace because no one serves this market. Entry at N20-50K per report is affordable relative to the N5-20M bad debt losses it prevents. Incumbents (CreditRegistry, CRC Credit Bureau) serve consumer lending, not B2B trade credit, and would likely ignore this segment as too fragmented and low-margin. |
| 4 | Value chain reimagined | **Partial fit** | The data aggregation pipeline (scraping CAC, court records, social signals, integrating Mono.co for bank statements) is a new data supply chain that does not exist. However, the PRD relies heavily on web scraping of government databases (CAC portal "frequently down," court records) which is fragile. The value chain innovation is real but the PRD underestimates the difficulty of reliable data sourcing in the Nigerian context. The scoring engine itself (rule-based transitioning to ML) is standard. The real value chain question — building reliable, continuously updated data feeds from Nigerian government systems — is acknowledged but not deeply addressed. |
| 5 | Scale core solution | **Strong fit** | The PRD correctly prioritizes the core deliverable: a single credit report with a 0-100 score, letter grade, and recommended credit limit. The MVP is deliberately simple (search, score, report). Feature roadmap (monitoring, portfolio dashboard, bulk lookup, API, ML model, WhatsApp bot, USSD) is sequenced after core value delivery. The pay-per-report model allows single-use adoption before committing to subscription. |
| 6 | Different cost structure | **Partial fit** | The cost structure is software-based (scraping + Supabase + Vercel), which is fundamentally cheaper than traditional credit bureau operations (which require lender data-sharing agreements, regulatory licenses, and physical presence). However, the PRD does not adequately address the cost of data acquisition — court record scraping, CAC data maintenance, and data quality assurance will require ongoing manual effort that is not costed. Mono.co API calls cost money per bank statement analyzed. The N20-50K per report pricing seems viable given the N5-20M bad debt prevention value proposition, but the unit economics of data sourcing are not worked through. |
| 7 | Non-consumption to growth | **Strong fit** | The PRD clearly maps expansion from trade credit scoring to enabling entirely new categories: invoice factoring (which cannot exist without credit scoring), trade credit insurance, and B2B lending. The product creates infrastructure that unlocks downstream financial products. Job creation is indirect but real — enabling trade credit expansion means more commerce, more distribution, more economic activity. The N49.4T SME credit gap exists partly because credit information does not exist; filling the information gap could unlock meaningful credit flow. |
| 8 | Can mature | **Strong fit** | Clear maturation path: rule-based scoring (MVP) to ML model (v2) to payment behavior network (aggregating data from PayMatch/CollectPro users) to API infrastructure for embedded credit scoring. As data accumulates, scores become more accurate, creating a compounding data advantage. The product can move upmarket to serve banks, insurance companies, and investors who need Nigerian B2B credit data. Regulatory trends (CBN pushing for financial inclusion, credit bureau expansion mandates) favor this direction. |

**Overall: 6/8 strong fit, 2/8 partial, 0/8 gaps**

## MNC Anti-Pattern Check

| Pattern | Risk Level | Assessment |
|---------|-----------|------------|
| Phantom Middle Class | **Low** | VendorScore targets wholesalers and distributors who already exist and already extend trade credit. These are not aspirational customers — they are active businesses making credit decisions daily. The Food/Beverage sector targeting (63.24% capacity) is well-chosen. |
| Push, Don't Pull | **Low** | The PRD identifies a clear pull signal: the decision trigger is "a major bad debt event" where the MD asks "why didn't we know this before?" This is reactive pain that already exists. The sales hook is a recent bad debt loss, not an abstract efficiency gain. |
| Infrastructure Entitlement | **Medium** | The PRD assumes CAC portal availability, court record accessibility, and Mono.co reliability. The CAC portal is noted as "frequently down" but the mitigation (caching, cached database) may not be sufficient. Court record scraping is even less reliable. The PRD should budget for data sourcing as a core infrastructure challenge, not assume scraping will work consistently. This is the most significant infrastructure assumption in the PRD. |
| Imported Management | **Low** | Solo founder building from NYC, but the product does not require on-the-ground operations for v1. Data sourcing will eventually require local partnerships or hires. |
| Blame and Exit | **N/A** | Not applicable at this stage. |
| Premium Positioning in Value Market | **Low-Medium** | N20-50K per report is not premium relative to the value (preventing N5-20M bad debt losses). However, the N150K/month unlimited subscription may price out smaller wholesalers. The per-report model is the right entry point. The PRD should consider a lower-tier product (N5-10K for a basic CAC-only check) to reach smaller traders. |

## Nigeria Readiness

**Medium-High** with specific concerns:

**Strengths:**
- Targets a validated spending pool: N75B failed payments growing 42%/yr, 3-8% annual bad debt write-offs
- Leverages existing infrastructure: CAC (exists), Mono.co (operational), Paystack (proven)
- Offline-aware: caches reports in IndexedDB for field use
- Excel export: critical for Nigerian finance teams presenting to management
- WhatsApp alerts: reaches users where they already communicate
- Sector targeting (Food/Beverage first) aligns with subsector divergence data

**Concerns:**
1. **CAC data reliability:** The CAC portal is notoriously unreliable. The PRD mentions this but does not have a robust fallback. What happens when the CAC is down for days? A cached database helps for existing entries but not new lookups.
2. **Court record coverage:** Nigerian court records are not centrally digitized. The PRD mentions "scraped from court registries and legal databases" and "supplement with manual data sourcing partnerships" — but this is hand-waved. Getting reliable court record data across 36 states is a multi-year infrastructure build, not a scraping exercise.
3. **No USSD channel:** The PRD includes a USSD score lookup in the "COULD have" tier. Given that 42% of connections are 2G and many credit controllers operate in the field (visiting customer premises, at markets), USSD lookup should be higher priority. A credit controller at Aba market checking a new customer's score via *XXX# before extending credit is the killer use case.
4. **6-8 week MVP timeline may be aggressive** given data source integration complexity. The PRD acknowledges this ("6-8 weeks to build due to data source integration complexity") but the actual work of building reliable scrapers, handling CAC downtime, parsing unstructured court records, and integrating Mono.co may take longer.
5. **Naira volatility:** Pricing in NGN is correct, but the recommended credit limits (denominated in naira) will need to account for FX-driven cost inflation. A N10M credit limit that was safe at N1,200/$ may be inadequate at N1,544/$ for an importer.

## Critical Gaps

1. **Data sourcing cost and reliability:** The PRD's biggest weakness. The scoring engine and UX are well-designed, but the entire product depends on data that is hard to get reliably in Nigeria. Court records especially. The PRD needs a dedicated section on "Data Infrastructure Build Plan" covering: which data sources are available day 1 (CAC basic, social signals), which require partnerships (court records), which require regulatory access (EFCC, AMCON databases), and the cost/timeline for each.

2. **Legal and regulatory framework:** The PRD does not address whether generating and selling credit scores requires any Nigerian regulatory approval. Credit bureaus are licensed by the CBN in Nigeria. Is VendorScore a credit bureau? If so, it needs a CBN license. If not (because it is a "business verification" tool, not a consumer credit bureau), the PRD should explicitly state the regulatory positioning and cite legal basis. This could be an existential risk if the CBN decides VendorScore needs licensing.

3. **Data freshness and liability:** What happens when a VendorScore report says "no court records found" but a recent judgment exists that the scraper missed? The PRD includes a disclaimer but does not address the liability risk of incorrect or incomplete reports that lead to credit losses. Insurance for the platform itself may be needed.

4. **Network effects strategy:** The PRD mentions a "Payment behavior network" in the COULD-have tier (aggregating data from PayMatch/CollectPro users). This is actually the most defensible long-term moat — proprietary payment behavior data that no one else has. It should be elevated in strategic priority even if it comes later in the build sequence. The PRD should explicitly map how VendorScore connects to the broader product suite to create this data network.

5. **No mention of the South-East paradox:** The highest manufacturing capacity (59.91%) is in the South-East, which is also where business confidence is lowest (18.7). VendorScore could be particularly valuable in the South-East where lending/credit decisions are distorted by regional risk perceptions that do not match manufacturing reality. This is an unexploited go-to-market angle.

## What Would Change in the PRD

This is the most important section.

1. **Add a "Data Infrastructure" section as Section 8.5 (between Technical Architecture and Pricing).** This section must honestly address:
   - Day-1 data availability: CAC basic data (scraped, cached), Google Maps/social signals (API-accessible), Mono.co (requires subject consent). These three give a partial score.
   - Month 1-3 data build: Court record partnerships in Lagos and Abuja (the two jurisdictions that cover the majority of commercial litigation). Budget N500K-2M for data sourcing partnerships or manual data entry.
   - Month 3-6: Expand court records to Port Harcourt, Kano. Begin building the payment behavior network from PayMatch/CollectPro data.
   - Acknowledge that day-1 VendorScore will have low confidence levels (30-49%) for most businesses, and position this honestly: "A 40% confidence score is still infinitely more than zero, which is what you have today."

2. **Address regulatory positioning explicitly.** Add a subsection in Risks & Mitigations that states: "VendorScore is a business verification and risk assessment tool, not a consumer credit bureau. It does not collect or report consumer credit data and does not fall under CBN credit bureau licensing requirements under [cite regulation]. If regulatory interpretation changes, VendorScore will pursue CBN licensing." Get a Nigerian fintech lawyer's opinion before launch.

3. **Elevate USSD score lookup from COULD-have to SHOULD-have.** The use case of a credit controller in the field dialing *XXX# to check a prospective customer's score before extending credit is more aligned with Nigerian business reality than the web-based report. Many credit decisions happen at the customer's premises or at markets, not at a desk with a laptop. USSD lookup with SMS delivery of a summary score (e.g., "ABC Trading: VendorScore 62/100, Grade B, Suggested Limit N15M. Full report: app.vendorscore.ng/r/abc123") would dramatically expand accessibility.

4. **Add a "VendorScore Lite" tier at N5-10K per lookup.** The current N20-50K per report pricing targets mid-sized wholesalers. But smaller traders (who represent the true non-consuming segment — businesses with N5-50M monthly revenue extending N1-5M in credit on a handshake) need a cheaper entry point. VendorScore Lite: CAC status check + social signals + basic score. No court records, no bank analysis. N5-10K. This is the "deliberately worse but good enough" product for the mass market, with an upsell to the full report when the stakes are higher.

5. **Reframe positioning from "credit scoring" to "expand without hiring."** Per the employment-expansion disconnect (Angle 10): the current PRD positions VendorScore as replacing the manual due diligence process (physical visits, reference calls, gut feel). This should be reframed as: "Extend credit to 3x more customers without hiring a credit team." The target buyer is not just the existing credit controller — it is the wholesaler who currently refuses all credit requests (informal credit rationing) because they cannot assess risk, and is losing sales to competitors who take the risk. VendorScore enables them to say yes more often, safely.

6. **Add regional go-to-market strategy.** Start with Lagos (40-50% of workaround spending, highest concentration of wholesalers, best CAC/court data availability). Expand to Port Harcourt (family connections for validation, Rivers State commercial hub). Then Aba/Nnewi/Onitsha (South-East manufacturing cluster with high capacity but low confidence — VendorScore could unlock credit flow to this underserved region by providing objective data that counters regional risk bias).

7. **Strengthen the connection to the broader product suite.** VendorScore is described as "the credit scoring infrastructure layer" — but this strategic positioning is buried in the Executive Summary and not operationalized. The PRD should explicitly map:
   - VendorScore + PayMatch = scored trade credit with automated reconciliation
   - VendorScore + CollectPro = risk-prioritized collection (chase D/F scores harder, earlier)
   - VendorScore + SupplyLink = credit-scored invoice factoring (factors can price risk using VendorScore)
   - VendorScore data network = anonymized payment behavior data from all suite products, creating a proprietary data moat

8. **Acknowledge the 6-8 week MVP timeline is likely 10-12 weeks.** Data source integration in Nigeria is unpredictable. CAC API (if one exists) may require partnership negotiation. Court record sourcing requires human relationships. Mono.co integration requires testing across multiple Nigerian banks with different data formats. Setting expectations at 10-12 weeks with a fallback plan (launch with CAC + social signals only, add court records post-launch) is more honest.

## Recommendation

**Proceed with revisions.** VendorScore is one of the strongest disruption candidates in the PRD suite. It targets genuine non-consumption (zero B2B credit scoring in Nigeria), has a clear pull signal (bad debt losses), does not require convincing customers they have a problem, and creates infrastructure that enables downstream financial products. The 6/8 strong fit score reflects real alignment with the disruption framework.

The critical revisions are: (1) a realistic data infrastructure plan that does not assume scraping Nigerian government databases will work reliably, (2) regulatory clarity on whether this is a credit bureau requiring CBN licensing, (3) a lower-cost tier to reach smaller traders, and (4) USSD access for field-based credit decisions.

If the data sourcing challenge can be solved — even partially, with honest confidence levels — VendorScore fills a genuine structural gap in the Nigerian economy and has a defensible long-term moat through accumulating proprietary data.
