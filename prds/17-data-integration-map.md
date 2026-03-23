# Data Integration Map: What Goes Where

**Purpose:** Every new data point from the unexplored angles mapped to the specific file and section it needs to be added to.

---

## FROM ANGLE 1: September Bank Charges Anomaly

| Data Point | Add To | Section |
|-----------|--------|---------|
| Bank Charges jumped to #1 constraint (70.8) in Sept, from 6th-7th all other months | `00-shared-context.md` | Market Backdrop |
| Hypothesis: CBN recapitalization directive fees, electronic banking levy changes, stamp duty enforcement | `00-shared-context.md` | Market Backdrop |
| BankCompare as a free lead-gen tool (compare banking costs → upsell PayMatch/CashFlow AI) | `01-paymatch.md` | Go-to-Market |
| Bank charges as cost line item in forecasts | `06-cashflow-ai.md` | MVP Feature Set |

## FROM ANGLE 2: South-East Confidence Collapse

| Data Point | Add To | Section |
|-----------|--------|---------|
| South-East CI lowest every month: Feb 17.0, Mar 29.9, May 2.3, Oct 23.5, Nov 18.7 | `00-shared-context.md` | Market Backdrop (regional section) |
| MAN Q1: South-East had HIGHEST mfg capacity (59.91%) despite lowest CI | `00-shared-context.md` | Market Backdrop (contradiction note) |
| Nnewi/Aba/Onitsha = indigenous manufacturing heartland (auto parts, plastics, textiles) | `05-gentrack.md` | Go-to-Market (add as target cluster) |
| Sit-at-home orders as business disruption factor | `06-cashflow-ai.md` | Problem Deep Dive (regional cash flow volatility) |
| Region-specific modules needed, not one-size-fits-all | `00-shared-context.md` | UX Principles (new principle) |

## FROM ANGLE 3: Capacity Utilization Paradox

| Data Point | Add To | Section |
|-----------|--------|---------|
| Sector breakdown — Food/Bev 63.24%, Furniture 60.95%, Textiles 57.36%, Electrical 28%, Chem/Pharma 37.5%, Metal 39.48% | `00-shared-context.md` | Market Backdrop (new subsection) |
| Energy cost breakdown Q4: Diesel N304.9B, PHCN N179.4B, Generators N127.7B, Gas N64.6B | `05-gentrack.md` | Market Opportunity |
| Food/Bev = #1 target (highest capacity, highest energy, inelastic demand) | `05-gentrack.md` | Go-to-Market, Target Persona |
| Electrical/Electronics at 28% = DO NOT TARGET with any product | `00-shared-context.md` | Market Backdrop (warning) |
| "Liquidity-constrained manufacturing recession with forward-looking optimism" | `00-shared-context.md` | Market Backdrop (macro diagnosis) |
| Textiles survived at 57.36% despite 4x energy increase — possible export/import-substitution beneficiary | `03-forexguard.md` | Market Opportunity (add textile angle) |
| Band A industrial tariffs surged 200%+ | `05-gentrack.md` | Market Opportunity |

## FROM ANGLE 4: Commercial Paper Explosion

| Data Point | Add To | Section |
|-----------|--------|---------|
| N1.58T in H1 2025 (107% YoY), up from N789B H1 2023 | `00-shared-context.md` | Validated Spending Pools table |
| CP yields 15-25% vs bank lending 35.5% — businesses choosing CP because it's cheaper | `06-cashflow-ai.md` | Problem Deep Dive |
| CP timing recommendation module: forecast shortfall → recommend CP at 18% vs bank at 35.5% = N43.75M savings on N500M | `06-cashflow-ai.md` | MVP Feature Set (SHOULD have) |
| Unsold inventory N2.14T (87.5% increase) — cash locked in goods | `06-cashflow-ai.md` | Market Opportunity |
| CP as potential funding source for supply chain finance | `09-supplylink.md` | Technical Architecture (funding model) |

## FROM ANGLE 5: Credit Access Turnaround

| Data Point | Add To | Section |
|-----------|--------|---------|
| Full monthly progression: -8.8 (Feb) → -4.3 → -5.6 → -7.8 → -7.0 → -3.2 → +1.5 (Aug) → +3.7 → +7.8 → +9.2 (Nov) | `00-shared-context.md` | Key Macro Indicators |
| August = inflection point where access turned positive | `00-shared-context.md` | Key Macro Indicators |
| "Survival borrowing" diagnosis — accessing credit at 35.5% because alternative is shutdown | `06-cashflow-ai.md` | Problem Deep Dive |
| Moniepoint expanding business lending, Kredete $22M raise for SME working capital | `06-cashflow-ai.md` | Market Opportunity (validation) |
| CashFlow AI ROI framing: "By forecasting 60 days early, saved N8.75M by using CP instead of emergency overdraft" | `06-cashflow-ai.md` | Pricing & Unit Economics (ROI pitch) |

## FROM ANGLE 6: 2G/USSD Opportunity

| Data Point | Add To | Section |
|-----------|--------|---------|
| 42% of 138.7M connections are 2G — cannot access web apps | `00-shared-context.md` | UX Principles (new P9) |
| USSD works on any phone, no data cost, via airtime deduction | `00-shared-context.md` | Tech Stack (add USSD layer) |
| Africa's Talking API for USSD session management | `00-shared-context.md` | Tech Stack (Integrations) |
| GTBank *737#, Access *901# proven at massive scale | `00-shared-context.md` | UX Principles (precedent) |
| USSD fallback per product: PayMatch (payment status), TaxGuard (deadline alerts), CashFlow AI (balance alerts), CollectPro (payment reminders) | `01-paymatch.md`, `02-taxguard.md`, `06-cashflow-ai.md`, `07-debt-collect.md` | MVP Feature Set (COULD have) |
| Broadband subscriptions DECLINED June 2025 (price sensitivity) | `00-shared-context.md` | Market Backdrop |

## FROM ANGLE 7: Maritime $7-9B Black Hole

| Data Point | Add To | Section |
|-----------|--------|---------|
| $7-9B annually to foreign ship owners | `00-shared-context.md` | Validated Spending Pools table |
| Port congestion costs $55M daily | `04-clearfast.md` | Market Opportunity |
| Vessel dwell times doubled to 12 days per call (Q1 2025) | `04-clearfast.md` | Market Opportunity |
| B'Odogwu platform caused 5,000+ containers stuck, N2T exposure | `04-clearfast.md` | Market Opportunity |
| ClearFast as middle of 3-product chain: maritime → customs → haulage | `04-clearfast.md` | Solution Overview (roadmap note) |
| No freight rate comparison for Nigerian importers across shipping lines | `04-clearfast.md` | Risks & Mitigations (expansion opportunity) |

## FROM ANGLE 8: Naira Appreciation Disconnect

| Data Point | Add To | Section |
|-----------|--------|---------|
| Exchange rate expectation index: Feb 9.8 → Nov 29.7 (growing confidence in appreciation) | `03-forexguard.md` | Market Opportunity |
| Actual naira: depreciated 25.3% Q1-Q4 2025 (N1,231→N1,544) | `03-forexguard.md` | Market Opportunity |
| Businesses systematically, increasingly WRONG about FX direction | `03-forexguard.md` | Problem Deep Dive (cognitive bias section) |
| They are NOT hedging because they expect appreciation | `03-forexguard.md` | Problem Deep Dive |
| "Expectation vs Reality" dashboard feature | `03-forexguard.md` | MVP Feature Set (MUST have) |
| Sales hook: "Your FX expectations have been wrong every month this year. Here's what it's costing you." | `03-forexguard.md` | Go-to-Market (outreach script) |

## FROM ANGLE 9: Manufacturing Subsector Divergence

| Data Point | Add To | Section |
|-----------|--------|---------|
| Food/Bev: 63.24% capacity, N229.4B energy, inelastic demand, local sourcing | `01-paymatch.md`, `05-gentrack.md`, `06-cashflow-ai.md` | Target Persona (prioritize this sector) |
| Textiles: 57.36% despite 4x energy increase — import substitution beneficiary | `03-forexguard.md` | Market Opportunity |
| Electrical/Electronics: 28% capacity (-46.8% from Q2) — DO NOT TARGET | All PRDs | Target Persona (exclusion note) |
| Chemicals/Pharma: 37.5%, 70-75% API import dependency | `03-forexguard.md` | Target Persona (secondary) |
| Furniture: 60.95% — import substitution (too expensive to import at N1,544/$) | `00-shared-context.md` | Market Backdrop |

## FROM ANGLE 10: Employment-Expansion Disconnect

| Data Point | Add To | Section |
|-----------|--------|---------|
| Expansion index 54-81 vs Employment index 8-40 — 20-40 point gap every month | `00-shared-context.md` | Key Macro Indicators |
| MAN actual: -789 net jobs Q1-Q4 despite positive expansion plans | `00-shared-context.md` | Key Macro Indicators |
| 62 taxes/levies make each new hire 18%+ more expensive | `02-taxguard.md` | Market Opportunity (hiring cost angle) |
| "Expand without hiring" positioning for all products | All PRDs | Executive Summary, Go-to-Market |
| Contractor compliance module opportunity (WHT, classification) | `02-taxguard.md` | MVP Feature Set (SHOULD have) |
| Phillips Outsourcing $45M validates outsource-over-hire preference | `00-shared-context.md` | Proof of Ability-to-Pay |
| 85% of graduates lack digital competencies — businesses can't find qualified workers | `00-shared-context.md` | Market Backdrop |

---

## TOTAL: 67 data points to integrate across 12 files
