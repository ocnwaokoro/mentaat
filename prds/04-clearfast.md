# PRD 04: ClearFast — Customs Documentation AI for Nigerian Import Clearing

**Version:** 1.0 | March 2026
**Status:** Draft
**Author:** Solo Founding Engineer

---

## 1. Problem Statement

Nigerian import clearing is a document-driven nightmare. Every container entering Lagos ports requires 8+ documents — PAAR, Form M, SONCAP certificate, NAFDAC certificate, Bill of Lading, commercial invoice, packing list, and insurance certificate — each with different formats, issuing bodies, and validation rules. Clearing agents manually re-type data from scanned PDFs into customs declaration forms (SAD/SGD), cross-referencing HS code schedules, tariff tables, and regulatory requirements by hand.

The cost of getting this wrong is brutal. Port dwell time at Apapa averages **21 days** against a 7-day international standard. Demurrage runs **N120-140K per container per day**. Storage charges add **N70K/day**. Combined exposure: **N190-210K per container per day**. A 10-day delay on a single container costs **N1.9-2.1M**. During the B'Odogwu naira redesign rollout, **5,000+ containers** sat stuck at ports, representing roughly **N2T in total exposure**.

Nationally, demurrage and port-related friction costs **N1.2-1.8T annually** — money that flows to shipping lines, terminal operators, and government coffers rather than to the businesses importing goods. The National Single Window initiative is projected to save N300-400B annually, but implementation is slow and incomplete. Clearing agents are left to brute-force their way through paperwork with WhatsApp photo forwards, Excel templates, and handwritten notes.

Port congestion costs **$55M daily** (Apapa). Vessel dwell times doubled to **12 days per call** in Q1 2025. The B'Odogwu customs digital platform rollout caused 5,000+ containers to get stuck, creating **N2T in demurrage exposure** — proving both the severity of the pain AND the failure of government-led digitization. Nigeria pays **$7-9B annually** to foreign ship owners with zero software tools for freight comparison or optimization. ClearFast is naturally the MIDDLE of a 3-product import chain: maritime freight optimization (upstream) → customs documentation (ClearFast) → inland haulage optimization (downstream).

The core bottleneck is not corruption or port infrastructure (though those matter). It is **information processing speed** — how fast a clearing agent can turn a stack of shipping documents into a correctly filled, complete, validated customs submission. Every hour of document preparation delay compounds into days of demurrage.

---

## 2. Target Persona

### Primary: Clearing Agent / Customs Broker (Lagos)

- **Name archetype:** Emeka, 34, licensed customs broker operating from a small office near Apapa port
- **Volume:** Handles 20-100+ containers per month across 5-15 active clients
- **Tech profile:** Semi-technical. Uses Android phone extensively (WhatsApp, mobile banking). Has a laptop but prefers phone for speed. Comfortable with apps but has zero patience for complexity
- **Daily workflow:** Receives shipping documents via WhatsApp/email, manually extracts key data, fills customs forms, submits at NCS terminal, tracks status, reports to client
- **Core value proposition:** Speed. Faster clearance = less demurrage = happy client = repeat business. A clearing agent who clears in 5 days vs 15 days charges the same fee but saves the client N1.9M+ per container. That agent gets every future shipment
- **Pain tolerance:** Extremely high for tools that save time, extremely low for tools that add steps
- **Income:** N300K-2M/month depending on volume and client base
- **Willingness to pay:** High if ROI is obvious. Saving even one day of demurrage per container (N190-210K) easily justifies a N75K/month subscription

### Secondary: Import Manager at Mid-Size Manufacturer

- **Name archetype:** Chioma, 41, procurement/import manager at a plastics manufacturer in Ikeja
- **Volume:** 5-20 containers per month, works with 2-3 clearing agents
- **Need:** Visibility into clearance status, document completeness tracking, cost monitoring
- **Tech profile:** More comfortable with desktop/laptop, uses ERP systems, needs Excel exports
- **Pain:** Cannot tell if delays are agent incompetence or port congestion. Wants data

### Priority Sectors for Importer Clients

- **Food/Beverage:** 63.24% capacity utilization, highest import volume for packaging and ingredients — large clearing volumes and consistent demand
- **Chemicals/Pharma:** 37.5% capacity utilization but 70-75% API (active pharmaceutical ingredient) import dependency — highest clearing volume per company, strong willingness to pay for speed
- **Avoid Electrical/Electronics importers:** 28% capacity utilization, many operators in this sector may not survive current market conditions — unreliable long-term clients

### Anti-Persona

- One-off personal importers (too low volume to justify subscription)
- Smugglers or grey-market operators (compliance tool is antithetical to their model)
- Large multinationals with in-house customs teams and existing enterprise software

---

## 3. Solution Overview

ClearFast is an AI-powered customs documentation tool that converts raw shipping documents into submission-ready customs declarations. It eliminates manual data re-entry, catches errors before submission, and suggests correct HS codes — turning what currently takes 2-4 hours of document preparation per shipment into a 15-minute review-and-submit workflow.

### Core Capabilities

1. **Document Upload + OCR Extraction:** Accept PDFs, photos, and scanned documents. Use OCR to extract text. Handle the messy reality of Nigerian shipping documents — low-quality scans, inconsistent formats across shipping lines, handwritten annotations, stamps overlapping text

2. **Intelligent Field Extraction:** AI-powered parsing to identify and extract key fields: consignee name and address, shipper details, HS codes, product descriptions, quantities, weights (gross/net), declared values (FOB/CIF), container numbers, Bill of Lading numbers, country of origin, port of loading/discharge

3. **Auto-Fill Customs Forms (SAD/SGD):** Map extracted fields to the correct positions on Single Administrative Document (SAD) and Single Goods Declaration (SGD) forms. Pre-populate forms with extracted data. Highlight fields that need human verification (low-confidence extractions)

4. **Completeness Checker:** Cross-reference uploaded documents against the required document checklist for the specific import category. Flag missing documents before the agent wastes time at the NCS submission terminal. Rules engine: e.g., food imports require NAFDAC certificate; electronics require SONCAP; all imports require PAAR + Form M

5. **HS Code Suggestion:** Given a product description (extracted from commercial invoice or entered manually), suggest the most likely HS codes using NLP matching against the Nigerian Customs tariff schedule. Show tariff rates and duty implications for each suggested code. Critical because incorrect HS codes are the #1 cause of examination delays and penalty assessments

6. **Container-Level Tracking Dashboard:** Track clearance status per container: documents uploaded, forms generated, submission status, examination status, release status. Timeline view showing where each container is in the clearing pipeline. Demurrage cost calculator showing real-time exposure per container

---

## 4. MVP Scope (v1.0)

### In Scope

| Feature | Details |
|---------|---------|
| Document upload | PDF + photo (camera/gallery) upload via web app. Max 20 pages per document, 10 documents per shipment |
| OCR extraction | Tesseract.js for on-device OCR + OpenAI Vision API for complex/low-quality documents. Fallback chain: try local first, escalate to API |
| Field extraction | AI-powered extraction of 15 core fields from commercial invoices, Bills of Lading, and packing lists |
| Form auto-fill | Generate pre-filled SAD/SGD forms for the 3 most common import categories: general goods, food/beverages, electronics/machinery |
| HS code suggestion | NLP-based matching against Nigerian Customs tariff book. Top 5 suggestions with duty rates. Manual override with search |
| Completeness checker | Rules engine covering 8 required documents. Visual checklist with red/green status per document |
| Shipment dashboard | List view of all shipments. Status tracking (manual update by agent). Demurrage cost calculator |
| Excel export | One-click export of extracted data, generated forms, and shipment summaries to XLSX |

### Out of Scope (v1.0)

- Direct integration with NCS NICIS II system (requires government API access — not available)
- Direct integration with shipping line systems (each has proprietary API)
- Payment processing for duty/tariff collection
- Multi-user accounts or team features
- Automated status tracking via port systems
- PAAR or Form M application automation (these are pre-arrival processes)

### COULD Have (Future MVP Enhancement)

- **USSD container status check:** Importer dials *XXX# → enters container number → gets current status (Arrived/Inspecting/Cleared/Released) via SMS. Critical for importers without reliable internet — extends ClearFast's reach beyond smartphone/web users to anyone with a basic phone. Low build cost via Africa's Talking or Termii USSD API, high accessibility impact

### MVP Success Criteria

- Agent can go from document upload to completed customs form in <15 minutes (vs 2-4 hours manual)
- OCR field extraction accuracy >85% on standard commercial invoices and Bills of Lading
- HS code suggestion includes correct code in top 5 results >80% of the time
- Completeness checker correctly identifies missing documents 100% of the time
- 10 clearing agents actively using the tool within 60 days of launch

---

## 5. User Stories

### Onboarding

**US-01:** As a clearing agent, I want to sign up with my phone number and business name so I can start using ClearFast in under 2 minutes.

**US-02:** As a clearing agent, I want to see a quick walkthrough (3 screens max) showing how to upload documents and generate forms so I understand the core workflow immediately.

### Document Processing

**US-03:** As a clearing agent, I want to take a photo of a commercial invoice with my phone and have ClearFast extract the key fields (consignee, values, quantities, descriptions) so I do not have to type them manually.

**US-04:** As a clearing agent, I want to upload a PDF Bill of Lading and have ClearFast extract container numbers, port details, and shipping line information automatically.

**US-05:** As a clearing agent, I want to see extracted fields with confidence indicators (green = high confidence, yellow = review recommended) so I know which fields to double-check.

**US-06:** As a clearing agent, I want to correct any mis-extracted field with a single tap, and have ClearFast learn from my corrections over time.

### Form Generation

**US-07:** As a clearing agent, I want ClearFast to auto-fill a SAD form using extracted data so I can review and submit rather than type from scratch.

**US-08:** As a clearing agent, I want to download the completed form as a PDF that I can print and submit at the NCS terminal.

**US-09:** As a clearing agent, I want ClearFast to calculate duty and tax estimates based on the declared value and HS code so I can advise my client on total landing cost.

### HS Code Lookup

**US-10:** As a clearing agent, I want to enter or paste a product description and receive the top 5 most likely HS codes with corresponding duty rates so I can select the correct classification.

**US-11:** As a clearing agent, I want to search the Nigerian tariff schedule by keyword, HS code prefix, or product category so I can verify classifications.

### Completeness Checking

**US-12:** As a clearing agent, I want to see a checklist of all required documents for my shipment type, with green checkmarks for uploaded documents and red flags for missing ones, so I never arrive at the NCS terminal with an incomplete file.

**US-13:** As a clearing agent, I want ClearFast to automatically detect the import category (food, electronics, general) from the product descriptions and adjust the required document checklist accordingly.

### Dashboard and Tracking

**US-14:** As a clearing agent, I want to see all my active shipments in a list view with status indicators (documents pending, forms ready, submitted, cleared) so I can manage my workload.

**US-15:** As a clearing agent, I want to see the demurrage exposure for each container (days since arrival x daily rate) in naira so I can prioritize the most expensive containers.

**US-16:** As an import manager, I want to see a summary of all my shipments across clearing agents with total demurrage costs so I can hold agents accountable.

### Export and Sharing

**US-17:** As a clearing agent, I want to export a shipment summary (all extracted data, forms, and status) as an Excel file to send to my client.

**US-18:** As a clearing agent, I want to share a read-only shipment status link with my client via WhatsApp so they can track progress without calling me.

---

## 6. Technical Architecture

### System Architecture

```
[Mobile/Web Client]
       |
       v
[Next.js App Router — Vercel Edge]
       |
       +---> [Supabase Auth] (phone OTP + email)
       |
       +---> [Supabase PostgreSQL]
       |          |
       |          +---> shipments table
       |          +---> documents table
       |          +---> extracted_fields table
       |          +---> forms table
       |          +---> hs_codes table (pre-loaded tariff schedule)
       |          +---> document_rules table (completeness rules)
       |
       +---> [Supabase Storage] (document file storage)
       |
       +---> [OCR Pipeline]
       |          |
       |          +---> tesseract.js (client-side, fast, free)
       |          +---> OpenAI Vision API (server-side, complex docs)
       |
       +---> [AI Extraction Pipeline]
       |          |
       |          +---> Claude API / OpenAI API (field extraction)
       |          +---> Prompt templates per document type
       |
       +---> [HS Code Engine]
       |          |
       |          +---> PostgreSQL full-text search
       |          +---> Embedding-based similarity search (pgvector)
       |
       +---> [Paystack] (subscription billing)
       +---> [Termii] (SMS OTP + WhatsApp alerts)
```

### Data Model (Core Tables)

```sql
-- Shipments
shipments (
  id UUID PK,
  user_id UUID FK,
  reference_number TEXT,
  container_numbers TEXT[],
  vessel_name TEXT,
  port_of_loading TEXT,
  port_of_discharge TEXT DEFAULT 'Apapa',
  arrival_date DATE,
  import_category ENUM('general','food','electronics','chemicals','textiles','other'),
  status ENUM('documents_pending','processing','forms_ready','submitted','examination','cleared'),
  declared_value_ngn DECIMAL,
  declared_value_usd DECIMAL,
  demurrage_rate_per_day DECIMAL DEFAULT 190000,
  notes TEXT,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
)

-- Documents
documents (
  id UUID PK,
  shipment_id UUID FK,
  document_type ENUM('bill_of_lading','commercial_invoice','packing_list',
    'paar','form_m','soncap','nafdac','insurance','other'),
  file_url TEXT,
  file_name TEXT,
  ocr_text TEXT,
  ocr_confidence FLOAT,
  extraction_status ENUM('pending','processing','completed','failed'),
  created_at TIMESTAMPTZ
)

-- Extracted Fields
extracted_fields (
  id UUID PK,
  document_id UUID FK,
  field_name TEXT,
  field_value TEXT,
  confidence FLOAT,
  manually_corrected BOOLEAN DEFAULT FALSE,
  corrected_value TEXT,
  created_at TIMESTAMPTZ
)

-- Generated Forms
forms (
  id UUID PK,
  shipment_id UUID FK,
  form_type ENUM('sad','sgd','assessment_notice'),
  form_data JSONB,
  pdf_url TEXT,
  status ENUM('draft','reviewed','final'),
  created_at TIMESTAMPTZ
)

-- HS Codes (pre-loaded reference)
hs_codes (
  id SERIAL PK,
  code TEXT UNIQUE,
  description TEXT,
  duty_rate DECIMAL,
  vat_rate DECIMAL DEFAULT 7.5,
  levy_rate DECIMAL DEFAULT 0,
  surcharge_rate DECIMAL DEFAULT 0,
  unit TEXT,
  section TEXT,
  chapter TEXT,
  embedding VECTOR(1536)
)
```

### OCR Pipeline Design

1. **Client-side pre-processing:** Resize image to max 2000px width. Convert to grayscale. Increase contrast. This improves OCR accuracy on phone photos significantly
2. **Tesseract.js (first pass):** Run locally in the browser. Free, fast, no API call. Works well for clean PDFs and high-quality scans
3. **Confidence check:** If tesseract confidence <70% or extracted text length is suspiciously short, escalate to server-side
4. **OpenAI Vision API (fallback):** Send image to GPT-4V for text extraction. Better with handwriting, stamps, overlapping text, poor scan quality. Costs ~$0.01-0.03 per page
5. **Field extraction:** Send OCR text to Claude/GPT with document-type-specific prompt. Return structured JSON with field names, values, and confidence scores

### HS Code Matching

1. Pre-load the Nigerian Customs tariff schedule (~12,000 HS codes at 8-digit level) into PostgreSQL
2. Generate embeddings for all HS code descriptions using OpenAI text-embedding-3-small
3. On query: embed the product description, perform cosine similarity search via pgvector, return top 5 matches
4. Supplement with PostgreSQL full-text search for exact keyword matches
5. Re-rank results using a lightweight scoring model that considers: description similarity, import frequency (popular codes ranked higher), user's historical selections

### Offline Support

- Cache extracted data in IndexedDB
- Queue document uploads for when connectivity returns
- Form generation works offline once extraction is complete (form templates stored locally)
- HS code search requires connectivity (embedding search is server-side) but cache recent searches

---

## 7. UX/UI Design

### Design System

- Follow shared UX principles (see `00-shared-context.md`): WhatsApp-simple, offline-resilient, numbers-forward, export everything
- Primary color: **Deep blue** (#1B4D6E) — conveys trust and professionalism, differentiates from the green of banking apps
- Accent color: **Safety orange** (#FF6B2B) — for alerts, demurrage warnings, missing documents
- Success color: **Green** (#22C55E) — for completed documents, cleared containers
- Typography: System fonts. Large touch targets (min 48px) for phone use

### Key Screens

**Screen 1: Shipment Dashboard (Home)**
- Top bar: total active shipments, total demurrage exposure (big bold naira number)
- List of shipments, sorted by demurrage exposure (most expensive first)
- Each card shows: reference number, container count, status badge, days at port, demurrage cost
- FAB (floating action button): "+ New Shipment"
- Pull-to-refresh

**Screen 2: New Shipment**
- Step 1: Enter basic details (reference number, vessel name, arrival date, container numbers). Auto-fill where possible from Bill of Lading
- Step 2: Upload documents. Camera button + file picker. Show document type selector (Bill of Lading, Invoice, etc.). Upload multiple documents in sequence
- Step 3: Review extracted data. Show all extracted fields in editable cards. Confidence color coding (green/yellow/red). Tap to correct
- Step 4: Completeness check. Visual checklist. Red flags for missing documents. "Generate Forms" button (disabled until minimum documents uploaded)

**Screen 3: Document Viewer**
- Split view (desktop) or toggle view (mobile): original document image on left/top, extracted fields on right/bottom
- Tap a field to highlight where it was found in the original document
- Edit button per field for corrections
- "Re-scan" button if extraction quality is poor

**Screen 4: Form Preview**
- Rendered SAD/SGD form with extracted data filled in
- Editable fields directly on the form
- Duty/tax calculation summary at bottom
- "Download PDF" and "Export Excel" buttons
- "Mark as Reviewed" to finalize

**Screen 5: HS Code Lookup**
- Search bar at top (accepts product description or HS code prefix)
- Results show: HS code, description, duty rate, VAT rate, total landing cost impact
- "Select" button per result to apply to current shipment
- Recent searches cached for quick access

**Screen 6: Shipment Detail**
- Tab 1: Documents (uploaded documents with status)
- Tab 2: Extracted Data (all fields across all documents, consolidated)
- Tab 3: Forms (generated forms with download links)
- Tab 4: Timeline (status changes with timestamps)
- Demurrage calculator: shows days since arrival, daily rate, total exposure. Updates in real-time
- "Share Status" button generates a WhatsApp-shareable link

### Mobile-First Considerations

- Camera upload is the primary input method on mobile. Make it prominent and fast
- Swipe gestures: swipe right on shipment card to mark status change, swipe left to archive
- Bottom navigation: Dashboard | Upload | HS Codes | Profile
- Document scanning: provide crop/rotate/enhance tools before OCR to improve accuracy

---

## 8. Pricing and Monetization

### Tier 1: Agent Monthly (Primary)

| | Details |
|--|---------|
| **Price** | N75,000/month |
| **Target** | Clearing agents handling 20+ containers/month |
| **Includes** | Unlimited shipments, unlimited document uploads, unlimited form generation, HS code lookup, demurrage calculator |
| **ROI pitch** | "Saving 1 day of demurrage on 1 container per month (N190-210K) more than covers your subscription" |
| **Trial** | 14 days free, 5 shipments included in trial |

### Tier 2: Pay-Per-Shipment (Secondary)

| | Details |
|--|---------|
| **Price** | N50,000-100,000 per shipment (based on complexity/container count) |
| **Target** | Occasional importers (1-5 shipments/month), import managers doing spot checks |
| **Includes** | Full document processing + form generation for one shipment |
| **ROI pitch** | "Less than 6 hours of demurrage savings covers the cost" |

### Tier 3: Enterprise (Future)

| | Details |
|--|---------|
| **Price** | Custom pricing, N500K-2M/month |
| **Target** | Large clearing firms (50+ agents), major importers |
| **Includes** | Multi-user accounts, API access, custom integrations, priority support, analytics dashboard |

### Revenue Projections

| Milestone | Agents | MRR (NGN) | MRR (USD @ N1,550) |
|-----------|--------|-----------|---------------------|
| Month 3 | 5 | N375,000 | $242 |
| Month 6 | 10 | N750,000 | $484 |
| Month 9 | 25 | N1,875,000 | $1,210 |
| Month 12 | 50 | N3,750,000 | $2,419 |
| Month 18 | 100 | N7,500,000 | $4,839 |

10 agents on the monthly plan = ~$4,800 MRR (accounting for some pay-per-shipment revenue supplementing subscriptions).

### Founding Customer Incentive

- First 20 agents: 50% off for 3 months (N37,500/month)
- Requires: weekly 15-minute feedback calls + permission to use as case study
- Locks in at N75K/month after discount period (no price increase for 12 months)

---

## 9. Go-to-Market Strategy

### Phase 1: Apapa Port Direct Sales (Weeks 1-8)

**Channel:** In-person via family network in Lagos/Port Harcourt + direct outreach at Apapa.

- Clearing agents cluster physically around Apapa port in known office complexes (Tin Can Island, ABTL area, Lily Pond transit park)
- There are ~2,000 licensed customs brokers in Lagos. They operate in known associations: ANLCA (Association of Nigerian Licensed Customs Agents), NAGAFF (National Association of Government Approved Freight Forwarders)
- Strategy: Attend ANLCA chapter meetings. Demo the tool on a real shipment. Offer free pilot for the first 5 agents. Word-of-mouth is extremely powerful in this community — one agent telling another "this thing saved me 3 hours today" is worth more than any ad
- Family network in Port Harcourt provides entry point to Onne port (second major port)

### Phase 2: WhatsApp Community + Referral (Weeks 4-16)

- Create a WhatsApp group for beta users. Share tips, updates, HS code lookups
- Referral incentive: agent refers another agent, both get 1 month free
- Share "demurrage savings reports" that agents can forward to their clients as proof of value. The client seeing "ClearFast saved N2.1M on your last 3 shipments" creates pull demand

### Phase 3: Content + SEO (Weeks 8-24)

- "Nigerian HS Code Lookup" — free public tool, no login required. SEO magnet for "HS code for [product]" searches
- Blog content: "Complete Guide to Clearing Goods at Apapa Port 2026," "How to Calculate Import Duty in Nigeria," "PAAR Application Process Step-by-Step"
- This content has virtually zero competition in SEO. Most clearing agents Google these questions and find outdated forum posts

### Phase 4: Association Partnerships (Months 4-6)

- Partner with ANLCA/NAGAFF for endorsed tool status
- Offer discounted group rates for association members
- Sponsor association events (low cost, high visibility)

### Distribution Advantages

- **Physical clustering:** Target market is geographically concentrated (Apapa/Tin Can). Can reach 80% of Lagos clearing agents within a 5km radius
- **Association structure:** ANLCA and NAGAFF have chapter meetings. One demo reaches 20-50 agents
- **Pain is acute and measurable:** Demurrage costs are real, visible, and felt daily. No need to educate on the problem
- **Champion incentive:** An agent who clears faster gets more clients. ClearFast is a competitive weapon they are motivated to use and reluctant to share (natural virality limiter — but volume makes up for it)

---

## 10. Risks and Mitigations

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| **OCR accuracy on low-quality scans** | HIGH | HIGH | Multi-stage pipeline (tesseract -> Vision API). Pre-processing (contrast, rotation). Allow manual correction. Train extraction prompts on real Nigerian shipping documents |
| **HS code suggestion liability** | HIGH | MEDIUM | Always present as "suggestion" not "recommendation." Require agent to confirm selection. Disclaimer that ClearFast is a tool, not a licensed customs advisor. Log all suggestions and selections for audit trail |
| **Customs form format changes** | MEDIUM | MEDIUM | Abstract form templates into configurable JSONB schemas. Monitor NCS announcements. Build form update pipeline that does not require code deployment |
| **Government system integration lock-out** | MEDIUM | LOW | MVP explicitly avoids government integration. Generate downloadable/printable forms instead. Monitor National Single Window API availability for future integration |
| **Agent resistance to technology** | MEDIUM | MEDIUM | "WhatsApp-simple" UX. On-site demos with real documents. Free trial with no commitment. Focus on phone-first experience matching how agents already work |
| **Pricing resistance** | MEDIUM | LOW | ROI is >10x (N75K/month vs N190K+/day in demurrage savings). Frame as "costs less than 10 hours of demurrage." Offer per-shipment pricing for skeptics |
| **Data security concerns** | HIGH | LOW | All documents encrypted at rest (Supabase default). No data shared between agents. SOC2 aspirational. Clear privacy policy. Agents control their data, can delete at any time |
| **Competitor entry (established logistics platforms)** | MEDIUM | MEDIUM | Speed to market. Deep Nigeria-specific training data. Relationship-driven GTM that large platforms cannot replicate. Build switching costs through historical data and learned preferences |

---

## 11. Roadmap

### v1.0 — MVP (Weeks 1-4)

- Document upload (PDF + photo)
- OCR extraction pipeline (tesseract.js + OpenAI Vision API fallback)
- AI field extraction for commercial invoices, Bills of Lading, packing lists
- SAD/SGD form auto-fill (3 most common import categories)
- HS code suggestion engine (embedding search + full-text search)
- Document completeness checker (8 required documents)
- Basic shipment dashboard with demurrage calculator
- Excel export
- Paystack subscription billing

### v1.1 — Feedback Integration (Weeks 5-8)

- Correction-based learning: use agent corrections to improve extraction prompts
- Additional form types based on user demand
- Bulk upload (multiple documents at once via drag-and-drop or multi-select)
- WhatsApp status sharing (generate shareable link for clients)
- Push notifications for shipment status changes
- Improved HS code search with user history and frequency weighting

### v2.0 — Multi-Agent + Client Portal (Months 3-4)

- Team accounts: clearing firm with multiple agents under one subscription
- Client portal: import managers can view shipment status across their clearing agents
- Role-based access: agent (full edit), client (read-only + approve), admin (billing + user management)
- Analytics dashboard: clearance time trends, cost analysis, agent performance metrics
- Duty/tax calculator with landed cost breakdown (CIF + duty + VAT + surcharge + CISS + ETLS)

### v2.5 — Intelligence Layer (Months 5-6)

- Predictive clearance time estimates based on historical data (port, commodity type, time of year)
- Anomaly detection: flag shipments with unusual value declarations that may trigger NCS examination
- Rate change alerts: notify agents when tariff rates change for commodities they commonly handle
- Document template library: pre-built templates for common commodity types

### v3.0 — Fintech Layer (Months 7-12)

- **Trade finance integration:** Connect agents and importers to lenders. ClearFast has the shipping documents, declared values, and clearance history — exactly the data lenders need for trade finance underwriting
- **Duty payment facilitation:** Integrate with Paystack/bank APIs for duty payment directly from the platform. Take transaction fee
- **Insurance integration:** Offer marine cargo insurance at point of import declaration. Commission on policies
- **FX exposure tracking:** Calculate naira cost of imports at booking vs arrival, show FX impact

### Strategic Expansion Path

ClearFast v1 handles customs documentation at port. v2 adds upstream maritime freight comparison (compare shipping rates across Maersk, MSC, CMA CGM for Nigerian routes). v3 adds downstream haulage matching. Combined = end-to-end import chain solution with 3 revenue points per shipment. The **$7-9B maritime market** is currently software-free — no Nigerian importer has a tool to compare freight rates across carriers, and no haulage marketplace exists for last-mile container movement from port to warehouse. ClearFast's document data (container details, weights, destinations) naturally feeds both upstream and downstream products.

### v4.0 — Platform (Year 2)

- API for customs brokerages and freight forwarders to integrate ClearFast into their existing systems
- National Single Window integration (when/if API becomes available)
- Expansion to other Nigerian ports (Onne, Calabar, Warri)
- West Africa expansion (Ghana, Cameroon — similar customs challenges, different regulations)

---

## 12. Build-or-Skip Scorecard

| Dimension | Rating | Weight | Weighted | Rationale |
|-----------|--------|--------|----------|-----------|
| **Build Speed** | 7/10 | 5% | 0.35 | OCR pipeline and HS code engine add complexity, but core app is CRUD + API calls. Tesseract.js and OpenAI Vision handle heavy lifting. 3-4 weeks realistic for functional MVP |
| **Time to Revenue** | 8/10 | 15% | 1.20 | Clearing agents feel demurrage pain daily. Demo with real documents = instant "I need this." Physical clustering at Apapa enables direct sales. First paying customer within 30 days plausible |
| **Market Size** | 9/10 | 15% | 1.35 | N1.2-1.8T annual demurrage costs. ~2,000 licensed brokers in Lagos alone. National Single Window gap creates N300-400B opportunity. Even capturing 0.1% of demurrage savings justifies a large business |
| **Competition** | 8/10 | 10% | 0.80 | No AI-native customs documentation tool for Nigeria. Existing solutions are either manual (Excel templates), expensive enterprise software (not accessible to independent agents), or government systems (slow, incomplete). Webb Fontaine handles some automation but at the government/institutional level, not agent-facing |
| **Skill Fit** | 10/10 | 15% | 1.50 | AI/OCR/NLP is the core differentiator. Document processing, field extraction, semantic search for HS codes — this is exactly the founder's AI/ML + data science skill set. The entire moat is AI accuracy |
| **Capital Required** | 7/10 | 10% | 0.70 | OpenAI Vision API costs ~$0.01-0.03/page. At 100 agents processing 50 docs/month each = ~$150-450/month in API costs. Supabase free tier covers database. Vercel free tier covers hosting initially. Stays within $0-5K bootstrap budget for 6+ months |
| **Buyer Clarity** | 9/10 | 20% | 1.80 | Clearing agents are a named, physically locatable group. ANLCA and NAGAFF have member directories. They cluster at Apapa port. Can literally walk into offices and demo. Family network in Port Harcourt provides warm introductions at Onne port |
| **Fintech Upside** | 7/10 | 10% | 0.70 | Trade finance is the clear expansion path — ClearFast sits on the exact documents lenders need (shipping docs, declared values, clearance history). Duty payment facilitation and marine insurance are natural adjacent revenue streams. Not as direct as a payments company but meaningful |

### Composite Score: 8.40 / 10

### Verdict: **STRONG BUILD**

ClearFast scores exceptionally on the three highest-weighted dimensions: Buyer Clarity (9/10, 20% weight), Market Size (9/10, 15% weight), and Skill Fit (10/10, 15% weight). The AI/OCR core is a direct match for the founder's capabilities, the target buyer is physically locatable and in acute daily pain, and the market is massive with minimal competition. The primary risk — OCR accuracy on messy Nigerian shipping documents — is a solvable engineering problem that becomes a compounding moat as the system processes more documents and accumulates correction data. The fintech upside through trade finance underwriting adds long-term optionality without distracting from the core value proposition of speed.
