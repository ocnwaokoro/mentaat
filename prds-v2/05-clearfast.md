# PRD 05: ClearFast — AI Customs Documentation for Nigerian Import Clearing

**Version:** 2.0 | March 2026
**Status:** Production-Ready Draft
**Author:** Solo Founding Engineer
**Disruption Reframe:** v2.0 incorporates self-service importer mode based on disruption analysis (original scored 3/8 strong fit; reframed version targets 6/8)

---

## 1. Problem Statement

### The Professional Agent Problem (Known)

Nigerian import clearing is a document-driven nightmare. Every container entering Lagos ports requires 8+ documents — PAAR, Form M, SONCAP certificate, NAFDAC certificate, Bill of Lading, commercial invoice, packing list, and insurance certificate — each with different formats, issuing bodies, and validation rules. Clearing agents manually re-type data from scanned PDFs into customs declaration forms (SAD/SGD), cross-referencing HS code schedules, tariff tables, and regulatory requirements by hand.

The cost of getting this wrong is brutal:

- Port dwell time at Apapa averages **21 days** against a 7-day international standard
- Demurrage runs **N120-140K per container per day**
- Storage charges add **N70K/day**
- Combined exposure: **N190-210K per container per day**
- A 10-day delay on a single container costs **N1.9-2.1M**
- During the B'Odogwu naira redesign rollout, **5,000+ containers** sat stuck at ports, representing roughly **N2T in total exposure**

Nationally, demurrage and port-related friction costs **N1.2-1.8T annually**. Port congestion costs **$55M daily** at Apapa. Vessel dwell times doubled to **12 days per call** in Q1 2025. The National Single Window initiative is projected to save N300-400B annually, but implementation is slow and incomplete. Clearing agents brute-force their way through paperwork with WhatsApp photo forwards, Excel templates, and handwritten notes.

The core bottleneck is **information processing speed** — how fast a clearing agent can turn a stack of shipping documents into a correctly filled, complete, validated customs submission. Every hour of document preparation delay compounds into days of demurrage.

### The Small Importer Problem (Overlooked — The Disruption Opportunity)

Beyond the ~2,000 licensed agents at Apapa, there are **tens of thousands of small importers** who cannot afford or consistently access professional clearing services. These traders — in Onitsha, Alaba International Market, Trade Fair Complex, and markets across Nigeria — import 1-10 containers per year. They rely on informal brokers (friend-of-a-friend clearing agents), pay **N200K-500K per container in opaque fees**, and have no visibility into whether their documentation is correct, their tariff classification is accurate, or their goods are actually moving through the system.

This population is a **non-consumer of systematic customs documentation**. They do not use software. They do not have structured clearing processes. They depend entirely on personal relationships — and when those relationships fail (an agent disappears, a contact becomes unavailable, a container sits unattended), they lose containers to demurrage with no recourse.

The small importer problem is structurally different from the agent problem:

| Dimension | Professional Agent | Small Importer |
|-----------|-------------------|----------------|
| Volume | 20-100+ containers/month | 1-10 containers/year |
| Documentation skill | Expert — knows forms, codes, procedures | None — relies entirely on middlemen |
| Current tool | WhatsApp + Excel + experience | Phone calls + hope |
| Failure mode | Slow processing → demurrage | Agent disappears → lost container |
| Willingness to pay for software | High (if ROI is clear) | High (if it replaces an unreliable person) |
| Current cost per shipment | N75K-200K (agent's own time + overhead) | N200K-500K+ (opaque fees to informal broker) |

**This is where disruption lives.** ClearFast's agent-facing product is a strong sustaining innovation — it makes existing clearing agents faster. The self-service importer mode is disruptive — it converts non-consumers of professional clearing into self-service users who previously had no reliable way to manage their own documentation.

### The Three-Product Import Chain

ClearFast sits at the center of a natural three-product value chain for Nigerian imports:

```
ShipSmart (upstream, future)     →    ClearFast (customs)    →    PortPulse (tracking)
Maritime freight comparison           Documentation +              Container status +
+ booking optimization                form generation              inland logistics
```

Nigeria pays **$7-9B annually** to foreign ship owners with zero software tools for freight comparison. No haulage marketplace exists for last-mile container movement from port to warehouse. ClearFast's document data (container details, weights, destinations) naturally feeds both upstream and downstream products. Each product creates a revenue point per shipment; together they represent end-to-end import chain coverage.

---

## 2. Target Personas

### Primary Persona: Professional Clearing Agent (Phase 1 — Beachhead)

- **Name archetype:** Emeka, 34, licensed customs broker operating from a small office near Apapa port
- **Volume:** Handles 20-100+ containers per month across 5-15 active clients
- **Tech profile:** Semi-technical. Uses Android phone extensively (WhatsApp, mobile banking). Has a laptop but prefers phone for speed. Comfortable with apps but has zero patience for complexity
- **Daily workflow:** Receives shipping documents via WhatsApp/email, manually extracts key data, fills customs forms, submits at NCS terminal, tracks status, reports to client
- **Core value proposition:** Speed. Faster clearance = less demurrage = happy client = repeat business. A clearing agent who clears in 5 days vs 15 days charges the same fee but saves the client N1.9M+ per container. That agent gets every future shipment
- **Pain tolerance:** Extremely high for tools that save time, extremely low for tools that add steps
- **Income:** N300K-2M/month depending on volume and client base
- **Willingness to pay:** High if ROI is obvious. Saving even one day of demurrage per container (N190-210K) easily justifies a N75K/month subscription

### Disruptive Persona: Small Importer (Phase 2 — The Disruption Target)

- **Name archetype:** Adebayo, 45, owns a building materials shop in Onitsha
- **Import pattern:** Imports tiles and sanitary ware 2-3 times a year via a contact in China
- **Clearing process:** Uses a friend-of-a-friend as a clearing agent, paying N500K-N1M in unclear fees. Has no visibility into what documents exist, what forms are filed, or what tariffs are applied
- **Failure history:** Has lost a container once to demurrage because the agent disappeared mid-process. Total loss: ~N4M (goods + demurrage + storage)
- **Tech profile:** Uses WhatsApp daily, mobile banking (Opay/Moniepoint), can navigate apps but has never used business software
- **Core need:** Would use a tool that lets him submit his own documentation — even imperfectly — rather than depend on an unreliable middleman
- **What "good enough" means:** Does not need a customs expert's judgment on examination strategy or port relationships. Needs: correct forms filled from his documents, a checklist of what to bring to the terminal, and step-by-step instructions for submission. Willing to spend more time in exchange for control and transparency
- **Willingness to pay:** N25,000-50,000 per shipment is dramatically cheaper than the N200K-500K he currently pays an informal broker. Clear ROI even at 2-3 shipments per year

### Secondary Persona: Import Manager at Mid-Size Manufacturer

- **Name archetype:** Chioma, 41, procurement/import manager at a plastics manufacturer in Ikeja
- **Volume:** 5-20 containers per month, works with 2-3 clearing agents
- **Need:** Visibility into clearance status, document completeness tracking, cost monitoring
- **Tech profile:** More comfortable with desktop/laptop, uses ERP systems, needs Excel exports
- **Pain:** Cannot tell if delays are agent incompetence or port congestion. Wants data

### Priority Sectors for Importer Clients

- **Food/Beverage:** 63.24% capacity utilization, highest import volume for packaging and ingredients — large clearing volumes and consistent demand
- **Chemicals/Pharma:** 37.5% capacity utilization but 70-75% API import dependency — highest clearing volume per company, strong willingness to pay for speed
- **Building Materials / General Trade:** Primary sector for self-service importers — tiles, sanitary ware, hardware, textiles. Lower individual volumes but massive aggregate market
- **Avoid Electrical/Electronics importers:** 28% capacity utilization, many operators in this sector may not survive current market conditions

### Anti-Personas

- Smugglers or grey-market operators (compliance tool is antithetical to their model)
- Large multinationals with in-house customs teams and existing enterprise software (CargoWise, Descartes)
- One-off personal importers with a single suitcase shipment (too small even for Self-Clear)

---

## 3. Solution Overview

ClearFast is an AI-powered customs documentation platform that serves two distinct user populations through a shared extraction engine:

### Mode 1: Agent Pro (Phase 1 MVP)

For professional clearing agents. Converts raw shipping documents into submission-ready customs declarations. Eliminates manual data re-entry, catches errors before submission, and suggests correct HS codes — turning what currently takes 2-4 hours of document preparation per shipment into a 15-minute review-and-submit workflow.

### Mode 2: Self-Clear (Phase 2 — Disruptive Mode)

For small importers who want to handle their own documentation. A radically simplified flow where the importer uploads shipping documents, ClearFast extracts data and generates forms, and provides step-by-step submission instructions for the NCS terminal. This mode deliberately sacrifices the sophistication of the agent dashboard for radical accessibility.

Self-Clear is intentionally "worse" than what an experienced agent provides:
- No relationship with customs officers
- No examination strategy
- No port shortcuts or informal negotiation
- No handling of edge cases or exceptions

But it is "good enough" for importers who would otherwise lose containers because they cannot navigate the system or depend on an unreliable middleman. It replaces a N200-500K opaque human dependency with a N25-50K transparent tool.

### Shared Core Capabilities

1. **Document Upload + OCR Extraction:** Accept PDFs, photos, and scanned documents. Use OCR to extract text. Handle the messy reality of Nigerian shipping documents — low-quality scans, inconsistent formats across shipping lines, handwritten annotations, stamps overlapping text

2. **Intelligent Field Extraction:** AI-powered parsing to identify and extract key fields: consignee name and address, shipper details, HS codes, product descriptions, quantities, weights (gross/net), declared values (FOB/CIF), container numbers, Bill of Lading numbers, country of origin, port of loading/discharge

3. **Auto-Fill Customs Forms (SAD/SGD):** Map extracted fields to the correct positions on Single Administrative Document (SAD) and Single Goods Declaration (SGD) forms. Pre-populate forms with extracted data. Highlight fields that need human verification (low-confidence extractions)

4. **Completeness Checker:** Cross-reference uploaded documents against the required document checklist for the specific import category. Flag missing documents before anyone wastes time at the NCS submission terminal. Rules engine: e.g., food imports require NAFDAC certificate; electronics require SONCAP; all imports require PAAR + Form M

5. **HS Code Suggestion:** Given a product description (extracted from commercial invoice or entered manually), suggest the most likely HS codes using NLP matching against the Nigerian Customs tariff schedule. Show tariff rates and duty implications for each suggested code. Critical because incorrect HS codes are the #1 cause of examination delays and penalty assessments

6. **Container-Level Tracking Dashboard:** Track clearance status per container: documents uploaded, forms generated, submission status, examination status, release status. Timeline view showing where each container is in the clearing pipeline. Demurrage cost calculator showing real-time exposure per container

### Self-Clear Exclusive Features (Phase 2)

7. **Step-by-Step Submission Checklist:** Guided workflow that tells the importer exactly what to do at each stage — which terminal to go to, which window to submit forms at, what to bring, what to expect. Converts expert tacit knowledge into explicit instructions

8. **"What to Expect at NCS Terminal" Guide:** Plain-language guide covering the physical submission process, common questions officers ask, documents to have ready, typical timeline, and what to do if something goes wrong. Updated based on user-reported experiences

9. **WhatsApp Status Updates:** Importer texts "status" to a WhatsApp Business number and receives current clearance progress. Can also receive proactive alerts: "Your documents are ready for review," "Form M is missing — upload it here," "Your container has been at port for 14 days — demurrage is now N2.66M"

10. **"Connect to Agent" Escape Hatch:** If a self-service importer gets stuck (examination, dispute, complex classification), ClearFast offers to connect them with a verified agent from the platform's network. This creates a marketplace referral channel and captures revenue from both sides

---

## 4. MVP Scope — Phase 1: Agent Pro (v1.0)

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
| Paystack billing | Subscription billing for Agent Monthly tier |

### Out of Scope (v1.0)

- Self-Clear importer mode (Phase 2)
- Direct integration with NCS NICIS II system (requires government API access — not available)
- Direct integration with shipping line systems (each has proprietary API)
- Payment processing for duty/tariff collection
- Multi-user accounts or team features
- Automated status tracking via port systems
- PAAR or Form M application automation (pre-arrival processes)

### COULD Have (v1.0 Enhancement)

- **USSD container status check:** Importer dials *XXX# → enters container number → gets current status (Arrived/Inspecting/Cleared/Released) via SMS. Critical for importers without reliable internet. Low build cost via Africa's Talking or Termii USSD API, high accessibility impact. Also serves as a lead generation channel for Self-Clear mode

### Phase 1 Success Criteria

- Agent can go from document upload to completed customs form in <15 minutes (vs 2-4 hours manual)
- OCR field extraction accuracy >85% on standard commercial invoices and Bills of Lading
- HS code suggestion includes correct code in top 5 results >80% of the time
- Completeness checker correctly identifies missing documents 100% of the time
- 10 clearing agents actively using the tool within 60 days of launch
- Free HS Code Lookup tool indexed by Google for import-related Nigerian search queries

---

## 5. Phase 2 Scope: Self-Clear Mode (v2.0)

### Target Launch: Month 4 (after agent MVP is validated and extraction engine is proven)

### In Scope

| Feature | Details |
|---------|---------|
| Simplified onboarding | WhatsApp-number signup. 2-screen walkthrough. "Upload your shipping documents" as immediate CTA |
| Document upload | Same OCR/extraction engine as Agent Pro. Accepts photos from WhatsApp (importer forwards documents they received from supplier) |
| Guided form generation | Same form auto-fill engine, but wrapped in a wizard: Step 1 "Upload documents" → Step 2 "Review extracted info" → Step 3 "Confirm HS codes" → Step 4 "Download your forms" |
| Submission checklist | Step-by-step instructions for NCS terminal submission. Customized by port (Apapa, Tin Can, Onne). Includes: what to bring, which building, which window, expected fees, typical wait time |
| NCS terminal guide | "What to Expect" knowledge base: common officer questions, how examination works, what "green channel" vs "red channel" means, what to do if stopped, how to pay duties |
| WhatsApp status flow | Importer texts ClearFast WhatsApp number to get updates. Proactive alerts for: documents ready, missing documents, demurrage warnings |
| Duty/cost calculator | Total landing cost estimate: CIF + duty + VAT + surcharge + CISS + handling. In plain language: "Your 40ft container of ceramic tiles will cost approximately N_____ to clear" |
| Connect to Agent | If importer gets stuck, one-tap connection to a verified clearing agent from ClearFast's network. Agent receives the importer's complete document file (already extracted and organized) |
| Pay-per-shipment billing | Paystack one-time payment of N25,000-50,000 per shipment |

### Self-Clear Success Criteria

- Importer can generate submission-ready forms within 30 minutes of first document upload
- 50% of Self-Clear users successfully clear their container without hiring a separate agent
- Average Self-Clear cost per shipment <N50,000 (vs N200-500K via informal broker)
- 100 Self-Clear shipments processed within 90 days of mode launch
- NPS >40 among Self-Clear users (measuring against their previous informal broker experience)

---

## 6. User Stories

### Onboarding (Both Modes)

**US-01:** As a clearing agent, I want to sign up with my phone number and business name so I can start using ClearFast in under 2 minutes.

**US-02:** As a clearing agent, I want to see a quick walkthrough (3 screens max) showing how to upload documents and generate forms so I understand the core workflow immediately.

**US-03:** As a small importer, I want to sign up with just my WhatsApp number and see a simple screen that says "Upload your shipping documents to get started" so I am not overwhelmed by features I do not understand.

### Document Processing (Shared Engine)

**US-04:** As a clearing agent, I want to take a photo of a commercial invoice with my phone and have ClearFast extract the key fields (consignee, values, quantities, descriptions) so I do not have to type them manually.

**US-05:** As a clearing agent, I want to upload a PDF Bill of Lading and have ClearFast extract container numbers, port details, and shipping line information automatically.

**US-06:** As a user, I want to see extracted fields with confidence indicators (green = high confidence, yellow = review recommended) so I know which fields to double-check.

**US-07:** As a clearing agent, I want to correct any mis-extracted field with a single tap, and have ClearFast learn from my corrections over time.

**US-08:** As a small importer, I want to forward my shipping documents from WhatsApp directly to ClearFast and have them processed without needing to understand document types or categories.

### Form Generation

**US-09:** As a clearing agent, I want ClearFast to auto-fill a SAD form using extracted data so I can review and submit rather than type from scratch.

**US-10:** As a clearing agent, I want to download the completed form as a PDF that I can print and submit at the NCS terminal.

**US-11:** As a user, I want ClearFast to calculate duty and tax estimates based on the declared value and HS code so I can understand total landing cost.

**US-12:** As a small importer, I want to see my total expected clearing cost in plain naira — duty + VAT + surcharges + handling — before I go to the terminal, so I know how much cash to bring.

### HS Code Lookup

**US-13:** As a user, I want to enter or paste a product description and receive the top 5 most likely HS codes with corresponding duty rates so I can select the correct classification.

**US-14:** As a user, I want to search the Nigerian tariff schedule by keyword, HS code prefix, or product category so I can verify classifications.

**US-15:** As a visitor (not logged in), I want to use the free HS Code Lookup tool without creating an account, so I can find the tariff rate for my product.

### Completeness Checking

**US-16:** As a user, I want to see a checklist of all required documents for my shipment type, with green checkmarks for uploaded documents and red flags for missing ones, so I never arrive at the NCS terminal with an incomplete file.

**US-17:** As a user, I want ClearFast to automatically detect the import category (food, electronics, general) from the product descriptions and adjust the required document checklist accordingly.

### Self-Clear Guidance (Phase 2)

**US-18:** As a small importer, I want a step-by-step submission checklist that tells me exactly where to go, what to bring, and what to do at each stage of the NCS terminal process.

**US-19:** As a small importer, I want a "What to Expect" guide that explains in plain language what happens during customs examination, what officers typically ask, and how long each step takes.

**US-20:** As a small importer, I want to text "status" to the ClearFast WhatsApp number and get an update on my shipment's progress without opening a web browser.

**US-21:** As a small importer, I want to tap "Connect to Agent" if I get stuck during the clearing process, and be connected to a verified professional agent who already has access to my uploaded documents.

### Dashboard and Tracking

**US-22:** As a clearing agent, I want to see all my active shipments in a list view with status indicators (documents pending, forms ready, submitted, cleared) so I can manage my workload.

**US-23:** As a clearing agent, I want to see the demurrage exposure for each container (days since arrival x daily rate) in naira so I can prioritize the most expensive containers.

**US-24:** As an import manager, I want to see a summary of all my shipments across clearing agents with total demurrage costs so I can hold agents accountable.

**US-25:** As a small importer, I want a simple single-shipment view showing: documents uploaded (checkmarks), forms ready (download button), next step (highlighted action), and total cost so far.

### Export and Sharing

**US-26:** As a clearing agent, I want to export a shipment summary (all extracted data, forms, and status) as an Excel file to send to my client.

**US-27:** As a clearing agent, I want to share a read-only shipment status link with my client via WhatsApp so they can track progress without calling me.

---

## 7. Technical Architecture

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
       |          +---> users table (with mode: 'agent' | 'importer')
       |          +---> submission_guides table (terminal-specific instructions)
       |          +---> agent_referrals table (Connect to Agent marketplace)
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
       +---> [WhatsApp Business API] (via Termii)
       |          |
       |          +---> Inbound: status queries from importers
       |          +---> Outbound: proactive alerts, document reminders
       |
       +---> [Paystack] (subscription + per-shipment billing)
       +---> [Termii] (SMS OTP + WhatsApp alerts)
```

### Data Model (Core Tables)

```sql
-- Users (extended for dual-mode)
users (
  id UUID PK,
  phone TEXT UNIQUE,
  email TEXT,
  business_name TEXT,
  mode ENUM('agent','importer') DEFAULT 'importer',
  region TEXT, -- 'lagos_apapa','lagos_tincan','rivers_onne','onitsha','other'
  subscription_tier ENUM('free','agent_monthly','self_clear','enterprise'),
  created_at TIMESTAMPTZ
)

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
  import_category ENUM('general','food','electronics','chemicals','textiles',
    'building_materials','other'),
  status ENUM('documents_pending','processing','forms_ready','submitted',
    'examination','cleared'),
  declared_value_ngn DECIMAL,
  declared_value_usd DECIMAL,
  demurrage_rate_per_day DECIMAL DEFAULT 190000,
  mode ENUM('agent_pro','self_clear'),
  submission_checklist_status JSONB, -- for Self-Clear mode
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

-- Submission Guides (for Self-Clear mode)
submission_guides (
  id UUID PK,
  port TEXT, -- 'apapa','tincan','onne'
  step_number INT,
  title TEXT,
  description TEXT,
  tips TEXT,
  common_questions JSONB,
  updated_at TIMESTAMPTZ
)

-- Agent Referrals (Connect to Agent marketplace)
agent_referrals (
  id UUID PK,
  importer_user_id UUID FK,
  agent_user_id UUID FK,
  shipment_id UUID FK,
  status ENUM('requested','accepted','completed','cancelled'),
  referral_fee DECIMAL,
  created_at TIMESTAMPTZ
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
- Self-Clear submission checklist and NCS terminal guide available offline after first load

### WhatsApp Integration (Self-Clear)

- **Inbound:** Importer texts "status" or "help" to ClearFast WhatsApp Business number. Webhook processes message, queries shipment status, returns formatted response
- **Outbound alerts:** Triggered by status changes and time-based rules:
  - "Your documents have been uploaded and are being processed"
  - "Missing document: Form M. Upload it here: [link]"
  - "Your forms are ready. Download and print: [link]"
  - "Your container has been at port 14 days. Demurrage: N2.66M. Next step: [action]"
- **Document forwarding:** Importer can forward documents directly via WhatsApp to be queued for processing (stretch goal, requires WhatsApp Business API media handling)

---

## 8. UX/UI Design

### Design System

- Follow shared UX principles (see `00-shared-context.md`): WhatsApp-simple, offline-resilient, numbers-forward, export everything
- Primary color: **Deep blue** (#1B4D6E) — conveys trust and professionalism
- Accent color: **Safety orange** (#FF6B2B) — for alerts, demurrage warnings, missing documents
- Success color: **Green** (#22C55E) — for completed documents, cleared containers
- Typography: System fonts. Large touch targets (min 48px) for phone use

### Agent Pro Screens

**Screen 1: Shipment Dashboard (Home)**
- Top bar: total active shipments, total demurrage exposure (big bold naira number)
- List of shipments, sorted by demurrage exposure (most expensive first)
- Each card shows: reference number, container count, status badge, days at port, demurrage cost
- FAB (floating action button): "+ New Shipment"
- Pull-to-refresh

**Screen 2: New Shipment**
- Step 1: Enter basic details (reference number, vessel name, arrival date, container numbers). Auto-fill where possible from Bill of Lading
- Step 2: Upload documents. Camera button + file picker. Show document type selector. Upload multiple documents in sequence
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

**Screen 5: HS Code Lookup (Public — No Login Required)**
- Search bar at top (accepts product description or HS code prefix)
- Results show: HS code, description, duty rate, VAT rate, total landing cost impact
- "Select" button per result to apply to current shipment (logged-in users)
- Recent searches cached for quick access
- SEO-optimized: targets "Nigerian HS code lookup," "import duty calculator Nigeria," "how to clear goods at Apapa"
- CTA for non-logged-in users: "Want to generate your customs forms automatically? Try ClearFast free"

**Screen 6: Shipment Detail**
- Tab 1: Documents (uploaded documents with status)
- Tab 2: Extracted Data (all fields across all documents, consolidated)
- Tab 3: Forms (generated forms with download links)
- Tab 4: Timeline (status changes with timestamps)
- Demurrage calculator: shows days since arrival, daily rate, total exposure. Updates in real-time
- "Share Status" button generates a WhatsApp-shareable link

### Self-Clear Screens (Phase 2)

**Screen SC-1: Self-Clear Home**
- Single prominent CTA: "Clear Your Container" button
- Below: active shipment card (if one exists) with status and next action
- Below: "How It Works" — 3-step visual: Upload → Review → Submit
- Bottom: estimated savings calculator — "How much are you paying your clearing agent? ClearFast costs N25,000-50,000"

**Screen SC-2: Upload Wizard**
- Step 1: "Upload your Bill of Lading" (with example photo showing what it looks like)
- Step 2: "Upload your Commercial Invoice" (with example)
- Step 3: "Upload any other documents you have" (optional, with checklist showing what is still needed)
- Each step: camera button + gallery picker. Progress bar at top. Can skip and return

**Screen SC-3: Review Your Information**
- Simplified view of extracted data. No technical field names — instead:
  - "Your goods:" [product description]
  - "Coming from:" [country of origin]
  - "Container number:" [number]
  - "Value:" [CIF value in naira]
  - "Import duty (estimated):" [calculated amount]
  - "Total to clear (estimated):" [total landing cost]
- "Does this look correct?" — Yes/No buttons. Tap any field to edit

**Screen SC-4: Your Submission Checklist**
- Numbered steps with checkboxes:
  1. Print these forms [download button]
  2. Go to [terminal name] at [address]
  3. Submit forms at Window [X] in [building name]
  4. Pay duty of N[amount] at the bank inside the terminal
  5. Wait for assessment (typically [X] days)
  6. Collect your release order
- Each step expands to show detailed instructions, tips, and "What if..." FAQ
- "Need help? Connect to a verified agent" button at bottom

**Screen SC-5: WhatsApp Status**
- Not a screen per se — the importer interacts via WhatsApp
- Message format example:
  ```
  ClearFast Update
  Container: MSKU1234567
  Status: Forms Ready
  Next Step: Print forms and go to Apapa Terminal C
  Demurrage so far: N1,520,000
  Need help? Reply AGENT
  ```

### Mobile-First Considerations

- Camera upload is the primary input method on mobile. Make it prominent and fast
- Swipe gestures: swipe right on shipment card to mark status change, swipe left to archive
- Bottom navigation (Agent Pro): Dashboard | Upload | HS Codes | Profile
- Bottom navigation (Self-Clear): My Shipment | Upload | Guide | Help
- Document scanning: provide crop/rotate/enhance tools before OCR to improve accuracy

---

## 9. Pricing and Monetization

### Tier 1: Agent Monthly (Primary — Phase 1)

| | Details |
|--|---------|
| **Price** | N75,000/month |
| **Target** | Clearing agents handling 20+ containers/month |
| **Includes** | Unlimited shipments, unlimited document uploads, unlimited form generation, HS code lookup, demurrage calculator, Excel export |
| **ROI pitch** | "Saving 1 day of demurrage on 1 container per month (N190-210K) more than covers your subscription" |
| **Trial** | 14 days free, 5 shipments included in trial |

### Tier 2: Agent Pay-Per-Shipment (Secondary — Phase 1)

| | Details |
|--|---------|
| **Price** | N50,000-100,000 per shipment (based on complexity/container count) |
| **Target** | Occasional agents (1-5 shipments/month), import managers doing spot checks |
| **Includes** | Full document processing + form generation for one shipment |
| **ROI pitch** | "Less than 6 hours of demurrage savings covers the cost" |

### Tier 3: Self-Clear (Disruptive Tier — Phase 2)

| | Details |
|--|---------|
| **Price** | N25,000-50,000 per shipment |
| **Target** | Small importers who currently use informal brokers at N200-500K per container |
| **Includes** | Full document processing, form generation, submission checklist, NCS terminal guide, WhatsApp status updates for one shipment |
| **ROI pitch** | "Clear your own container for N25,000 instead of paying an agent N200,000-500,000. Save N150,000+ per shipment" |
| **Pricing logic** | Cheaper than agent fees (N200-500K) but more expensive per-shipment than agent subscription — creates natural upgrade path. Importers who do 3+ shipments/quarter may find agent subscription more economical, driving them into the platform ecosystem |

### Tier 4: Agent Referral Fee (Phase 2)

| | Details |
|--|---------|
| **Price** | 10-15% of agent's fee when connected via "Connect to Agent" |
| **Target** | Self-Clear importers who get stuck and need professional help |
| **Includes** | Warm handoff with complete document package already extracted |
| **Value** | Agent gets a pre-qualified lead with documents already organized. Importer gets a verified professional. ClearFast earns referral revenue |

### Tier 5: Enterprise (Future)

| | Details |
|--|---------|
| **Price** | Custom pricing, N500K-2M/month |
| **Target** | Large clearing firms (50+ agents), major importers |
| **Includes** | Multi-user accounts, API access, custom integrations, priority support, analytics dashboard |

### Revenue Projections

| Milestone | Agent Subscribers | Self-Clear Shipments/mo | MRR (NGN) | MRR (USD @ N1,550) |
|-----------|:-:|:-:|-----------|---------------------|
| Month 3 | 5 | — | N375,000 | $242 |
| Month 6 | 15 | 20 | N1,625,000 | $1,048 |
| Month 9 | 25 | 80 | N4,875,000 | $3,145 |
| Month 12 | 40 | 200 | N10,000,000 | $6,452 |
| Month 18 | 75 | 500 | N23,125,000 | $14,919 |
| Month 24 | 100 | 1,000 | N37,500,000 | $24,194 |

Self-Clear revenue assumes average N37,500 per shipment. At Month 24, Self-Clear represents ~50% of total revenue, validating the disruption thesis: the non-consumer segment becomes the growth engine.

### Founding Customer Incentive

- First 20 agents: 50% off for 3 months (N37,500/month)
- Requires: weekly 15-minute feedback calls + permission to use as case study
- Locks in at N75K/month after discount period (no price increase for 12 months)

---

## 10. Go-to-Market Strategy

### Track 1: Professional Agents at Apapa (Phase 1, Weeks 1-8)

**Channel:** In-person via family network in Lagos/Port Harcourt + direct outreach at Apapa.

- Clearing agents cluster physically around Apapa port in known office complexes (Tin Can Island, ABTL area, Lily Pond transit park)
- ~2,000 licensed customs brokers in Lagos. They operate in known associations: ANLCA (Association of Nigerian Licensed Customs Agents), NAGAFF (National Association of Government Approved Freight Forwarders)
- Strategy: Attend ANLCA chapter meetings. Demo the tool on a real shipment. Offer free pilot for the first 5 agents. Word-of-mouth is extremely powerful in this community — one agent telling another "this thing saved me 3 hours today" is worth more than any ad
- Family network in Port Harcourt provides entry point to Onne port (second major port)

### Track 2: WhatsApp Community + Referral (Phase 1, Weeks 4-16)

- Create a WhatsApp group for beta users. Share tips, updates, HS code lookups
- Referral incentive: agent refers another agent, both get 1 month free
- Share "demurrage savings reports" that agents can forward to their clients as proof of value. The client seeing "ClearFast saved N2.1M on your last 3 shipments" creates pull demand

### Track 3: Free HS Code Lookup as SEO Entry Point (Phase 1, Weeks 1-ongoing)

- **"Nigerian HS Code Lookup"** — free public tool, no login required
- SEO-optimized landing pages targeting:
  - "HS code for [product]" (e.g., "HS code for ceramic tiles Nigeria")
  - "How to clear goods at Apapa port"
  - "Import duty calculator Nigeria"
  - "Complete guide to clearing goods in Nigeria 2026"
  - "PAAR application process step-by-step"
  - "How much does it cost to clear a container in Lagos"
- This content has virtually zero competition in SEO. Most importers Googling these questions find outdated forum posts
- The HS Code Lookup tool captures both agents AND importers. Agents use it as a professional tool; importers use it as their first exposure to ClearFast before discovering Self-Clear mode
- Blog content published as Next.js pages (no external CMS needed)

### Track 4: Importer Communities (Phase 2, Months 4-8)

**Targets:** Small importers in trading communities across Nigeria.

| Community | Location | Import Profile | Channel |
|-----------|----------|---------------|---------|
| Trade Fair Complex | Lagos | General goods, electronics, textiles | In-person demos at association meetings |
| Alaba International Market | Lagos | Electronics, appliances | WhatsApp group seeding, word-of-mouth |
| Onitsha Main Market | Anambra | Building materials, textiles, general trade | Agent network referrals, SEO |
| Ariaria Market (Aba) | Abia | Shoes, textiles, leather goods | WhatsApp group seeding |
| Ladipo Market | Lagos | Auto parts | Targeted Facebook/Instagram ads |

- Strategy: Seed 5-10 importers in each community with free first shipment. Their success story spreads via word-of-mouth in tight trading communities
- WhatsApp is the primary distribution channel — importers share "I cleared my own container for N25K" stories in trade group chats
- Partner with market association leadership to endorse the tool (similar to ANLCA strategy for agents)

### Track 5: Association Partnerships (Months 4-6)

- Partner with ANLCA/NAGAFF for endorsed tool status
- Offer discounted group rates for association members
- Sponsor association events (low cost, high visibility)
- For Self-Clear: partner with trade associations (NACCIMA chambers, market associations) to offer member discounts

### Distribution Advantages

- **Physical clustering:** Target market is geographically concentrated (Apapa/Tin Can). Can reach 80% of Lagos clearing agents within a 5km radius
- **Association structure:** ANLCA and NAGAFF have chapter meetings. One demo reaches 20-50 agents
- **Pain is acute and measurable:** Demurrage costs are real, visible, and felt daily. No need to educate on the problem
- **Champion incentive:** An agent who clears faster gets more clients. ClearFast is a competitive weapon they are motivated to use
- **Self-Clear virality:** Small importers in trading communities are networked. One successful self-clearance story spreads fast. "You paid N400K? I paid N25K and did it myself" is a powerful message in a price-sensitive market

---

## 11. Risks and Mitigations

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| **OCR accuracy on low-quality scans** | HIGH | HIGH | Multi-stage pipeline (tesseract -> Vision API). Pre-processing (contrast, rotation). Allow manual correction. Train extraction prompts on real Nigerian shipping documents. Each correction improves the system |
| **HS code suggestion liability** | HIGH | MEDIUM | Always present as "suggestion" not "recommendation." Require user to confirm selection. Disclaimer that ClearFast is a tool, not a licensed customs advisor. Log all suggestions and selections for audit trail |
| **Self-service importers make mistakes resulting in penalties** | HIGH | MEDIUM | ClearFast provides the documentation layer, not clearing advice. Prominent disclaimers at every step: "ClearFast generates forms from your documents — verify all information before submission." Mandatory confirmation checkboxes. "Connect to Agent" escape hatch prominently displayed. Track error rates and adjust guidance proactively. Consider requiring first-time Self-Clear users to review a brief tutorial |
| **Customs form format changes** | MEDIUM | MEDIUM | Abstract form templates into configurable JSONB schemas. Monitor NCS announcements. Build form update pipeline that does not require code deployment |
| **Government system integration lock-out** | MEDIUM | LOW | MVP explicitly avoids government integration. Generate downloadable/printable forms instead. Monitor National Single Window API availability for future integration |
| **Agent resistance to technology** | MEDIUM | MEDIUM | "WhatsApp-simple" UX. On-site demos with real documents. Free trial with no commitment. Focus on phone-first experience matching how agents already work |
| **Agent hostility to Self-Clear mode** | MEDIUM | MEDIUM | Position Self-Clear as targeting importers who currently use informal (unlicensed) brokers, not taking business from licensed agents. "Connect to Agent" feature actually sends agents qualified leads. Frame it as growing the market, not cannibalizing it. Delay Self-Clear launch until agent community is established and sees ClearFast as an ally |
| **Pricing resistance** | MEDIUM | LOW | Agent ROI is >10x (N75K/month vs N190K+/day in demurrage savings). Self-Clear ROI is >5x (N25-50K vs N200-500K via informal broker). Frame both as savings, not costs |
| **Data security concerns** | HIGH | LOW | All documents encrypted at rest (Supabase default). No data shared between users. Clear privacy policy. Users control their data, can delete at any time. Shipping documents contain sensitive commercial information — treat accordingly |
| **Competitor entry** | MEDIUM | MEDIUM | Speed to market. Deep Nigeria-specific training data. Relationship-driven GTM that large platforms cannot replicate. Build switching costs through historical data, learned extraction preferences, and agent network effects |
| **Self-Clear users flooding NCS terminals** | LOW | LOW | NCS terminals are already busy. Self-Clear users represent marginal additional volume. Terminal guides help users be efficient (reducing time per interaction). If this becomes an issue, it signals success |

---

## 12. Roadmap

### v1.0 — Agent Pro MVP (Weeks 1-4)

- Document upload (PDF + photo)
- OCR extraction pipeline (tesseract.js + OpenAI Vision API fallback)
- AI field extraction for commercial invoices, Bills of Lading, packing lists
- SAD/SGD form auto-fill (3 most common import categories)
- HS code suggestion engine (embedding search + full-text search)
- Document completeness checker (8 required documents)
- Basic shipment dashboard with demurrage calculator
- Excel export
- Paystack subscription billing
- **Free public HS Code Lookup tool** (SEO entry point — launches with MVP)

### v1.1 — Feedback Integration (Weeks 5-8)

- Correction-based learning: use agent corrections to improve extraction prompts
- Additional form types based on user demand
- Bulk upload (multiple documents at once via drag-and-drop or multi-select)
- WhatsApp status sharing (generate shareable link for clients)
- Push notifications for shipment status changes
- Improved HS code search with user history and frequency weighting
- SEO content: import guides, duty calculators, clearing process explainers

### v2.0 — Self-Clear Mode Launch (Months 3-4)

- Self-Clear onboarding flow (simplified, WhatsApp-number signup)
- Upload wizard with visual examples and guidance
- Simplified review screen (plain language, not technical fields)
- Step-by-step submission checklist (port-specific: Apapa, Tin Can, Onne)
- "What to Expect at NCS Terminal" guide
- WhatsApp status update flow (inbound queries + outbound alerts)
- Total landing cost calculator (plain naira, all-inclusive)
- Pay-per-shipment billing via Paystack
- "Connect to Agent" referral feature

### v2.5 — Multi-Agent + Intelligence Layer (Months 5-6)

- Team accounts: clearing firm with multiple agents under one subscription
- Client portal: import managers can view shipment status across their clearing agents
- Role-based access: agent (full edit), client (read-only + approve), admin (billing + user management)
- Analytics dashboard: clearance time trends, cost analysis, agent performance metrics
- Predictive clearance time estimates based on historical data
- Anomaly detection: flag shipments with unusual value declarations
- Rate change alerts: notify agents when tariff rates change for commodities they commonly handle

### v3.0 — Fintech Layer (Months 7-12)

This is the highest-value long-term play. ClearFast sits on the exact data that trade finance requires.

- **Trade finance integration:** Connect agents and importers to lenders. ClearFast has the shipping documents, declared values, clearance history, and payment track record — exactly the data lenders need for trade finance underwriting. Self-Clear importers are especially underserved by trade finance (they cannot get loans because they have no formal documentation trail). ClearFast creates that trail
- **Duty payment facilitation:** Integrate with Paystack/bank APIs for duty payment directly from the platform. Take transaction fee. Solves the "how much cash to bring to the terminal" problem for Self-Clear users
- **Insurance integration:** Offer marine cargo insurance at point of import declaration. Commission on policies. Self-Clear users are least likely to have adequate coverage
- **FX exposure tracking:** Calculate naira cost of imports at booking vs arrival, show FX impact. Critical given N1,535→N1,544/$ depreciation and businesses being systematically wrong about FX expectations (index 9.8→29.7 while naira fell 25.3%)
- **Landed cost financing:** "Pay your N2M duty over 3 months instead of upfront." ClearFast has the data to underwrite this: verified shipment documents, known goods value, clearance history. This converts ClearFast from a SaaS tool into a fintech platform

### v4.0 — Platform + Import Chain (Year 2)

- API for customs brokerages and freight forwarders to integrate ClearFast
- National Single Window integration (when/if API becomes available)
- Expansion to other Nigerian ports (Onne, Calabar, Warri)
- **ShipSmart integration (upstream):** Maritime freight comparison and booking optimization feeds into ClearFast document flow
- **PortPulse integration (downstream):** Container tracking and inland logistics picks up where ClearFast's clearance process ends
- West Africa expansion (Ghana, Cameroon — similar customs challenges, different regulations)
- Agent marketplace: verified agents visible to Self-Clear importers, with ratings, specializations, and transparent pricing

---

## 13. Strategic Positioning: The Import Chain

ClearFast is not a standalone product. It is the central node in a three-product import value chain:

```
UPSTREAM                         CLEARFAST                        DOWNSTREAM
ShipSmart                        (Customs Documentation)          PortPulse

Compare freight rates            Upload shipping docs →           Track container from
across Maersk, MSC,              Extract data → Generate          port gate to warehouse.
CMA CGM for Nigerian             forms → Submit at terminal       Match with haulage
routes. Book shipments.          → Track clearance                providers for last-mile
                                                                  delivery
Data flows downstream →          ← Data flows both ways →         ← Data flows upstream
(vessel, container,              (all document data,              (delivery confirmation,
booking details feed             HS codes, values feed            final cost, transit time
directly into ClearFast)         into both adjacent               feed back to ClearFast
                                 products)                        for cost tracking)
```

**Why ClearFast is the natural center:**
- Every import touches customs documentation — it is the mandatory middle step
- ClearFast's extracted data (container numbers, weights, values, HS codes, consignee addresses) is exactly what both upstream (freight booking) and downstream (haulage matching) products need
- The document processing engine is the hardest technical component to build — the upstream and downstream products are primarily marketplace/comparison tools that leverage ClearFast's data
- Revenue compounds: each shipment can generate fees at three points (booking, clearing, delivery)

**The $7-9B opportunity:** Nigeria pays $7-9B annually to foreign ship owners with zero software tools for freight comparison or optimization. No haulage marketplace exists for last-mile container movement from port to warehouse. ClearFast's position in the middle — with data flowing in both directions — makes it the foundation for capturing a slice of this spend.

---

## 14. 8-Criteria Disruption Self-Assessment

Scored against the framework in `thesis-framework/framework/8-criteria-checklist.md`. The reframed ClearFast with Self-Clear mode is assessed below.

| # | Criterion | Rating | Assessment |
|---|-----------|--------|------------|
| 1 | **Targets Overlooked or Non-consuming Segments** | **Strong fit** | Phase 1 targets independent clearing agents overlooked by enterprise customs software (Webb Fontaine, CargoWise, Descartes). Phase 2 targets the truly non-consuming segment: tens of thousands of small importers who have never used any software or formal process for customs documentation, relying entirely on informal personal relationships. Adebayo in Onitsha is a genuine non-consumer of systematic clearing. |
| 2 | **Appears Deliberately "Worse" but Good Enough** | **Strong fit** | Self-Clear mode is explicitly designed to be worse than a professional agent: no customs officer relationships, no examination strategy, no port shortcuts, no handling of edge cases. But it is good enough for an importer who would otherwise pay N200-500K to an unreliable middleman or risk losing a container entirely. An experienced agent would look at Self-Clear and say "that is insufficient" — which is exactly the point. The 85% OCR accuracy target reinforces this: not perfect, but dramatically better than nothing. |
| 3 | **Gains Traction via Low-End or New-Market Foothold** | **Strong fit** | Both footholds simultaneously. Low-end: Agent Pro enters at N75K/month vs. enterprise customs software at $50K-500K/year — a segment incumbents would find unattractive. New-market: Self-Clear creates a category that did not exist — self-service customs documentation for non-professional importers. No incumbent offers this because the per-customer revenue (N25-50K per occasional shipment) is too small for them to care about. |
| 4 | **Reimagines the Value Chain** | **Partial fit** | ClearFast fundamentally changes the document-to-declaration conversion step (AI/OCR replaces manual re-entry) and the agent-importer relationship (Self-Clear removes the agent entirely for simple shipments). The three-product import chain vision (ShipSmart → ClearFast → PortPulse) represents deeper value chain reimagination but is aspirational. The "Connect to Agent" marketplace is a novel distribution channel for clearing services. However, the physical NCS submission, examination, and release process remains unchanged. Rating improves from v1 because Self-Clear restructures the importer's entire approach to clearing — from delegated to self-directed. |
| 5 | **Prioritizes Scaling a Core Solution** | **Strong fit** | Phase 1 MVP is tightly scoped: document upload, OCR, form auto-fill, HS code suggestion, completeness checker. Self-Clear in Phase 2 uses the same core engine with a different UX wrapper — not a new product, but a new access mode for the same technology. Distribution breadth (agents at Apapa → importers nationwide via SEO and WhatsApp) is prioritized over feature depth. The HS Code Lookup tool as a free, public, SEO-optimized entry point is a pure distribution play. |
| 6 | **Demands a Different Cost Structure** | **Partial fit** | N75K/month ($48) for agents and N25-50K ($16-32) per shipment for importers vs. enterprise tools at $50K-500K/year. The cost structure is enabled by: AI API costs of $0.01-0.03/page (vs. human data entry at $5-15/hour), Supabase/Vercel free tiers eliminating infrastructure costs at low scale, and self-service eliminating per-customer support costs. However, the underlying SaaS economics (cloud hosting, API costs) are structurally similar to other software businesses, not fundamentally reimagined like Tolaram's vertical integration. |
| 7 | **Converts Non-consumption into Growth** | **Strong fit** | This is the key improvement from the original PRD. With Self-Clear, ClearFast does not just make existing clearing faster (sustaining) — it enables people who currently cannot clear goods systematically to do so for the first time (disruptive). Estimated 50,000-100,000 small importers doing 1-10 containers/year without professional clearing support. At even 1% penetration (500-1,000 importers), this creates new economic activity: shipments that would have been lost to demurrage are now cleared, importers retain more margin, and the clearing ecosystem expands. The fintech layer (trade finance using document data) creates further new economic activity by making credit available to importers who previously had no documentation trail. |
| 8 | **Can Mature to Surpass Mainstream Offerings** | **Strong fit** | Maturation path: v1 (document processing for agents) → v2 (Self-Clear for importers) → v2.5 (intelligence layer with predictive analytics) → v3 (fintech: trade finance, duty payments, insurance) → v4 (platform API + import chain integration). Each step moves upmarket. Self-Clear importers graduate to Agent Monthly as volume grows. Agent Monthly firms graduate to Enterprise. The fintech layer (lending against verified document data) eventually becomes more valuable than the SaaS layer. ClearFast's compounding data advantage (more documents processed = better OCR = better HS code suggestions = more accurate risk scoring) creates a maturation flywheel. |

### Summary: 6/8 Strong Fit, 2/8 Partial Fit, 0/8 No Fit

**Improvement from original:** 3/8 strong fit → 6/8 strong fit. The addition of Self-Clear mode converts criteria 1, 2, and 7 from partial/weak to strong fit. The non-negotiable criteria (1, 3, 7) are all strong fit.

**Remaining gaps:** Criteria 4 (value chain reimagination) and 6 (different cost structure) remain partial because ClearFast is fundamentally a software tool operating within the existing physical customs infrastructure, not rebuilding the infrastructure itself. The three-product import chain vision and fintech layer would strengthen both criteria if executed, but they are future-state, not MVP.

---

## 15. Build-or-Skip Scorecard

| Dimension | Rating | Weight | Weighted | Rationale |
|-----------|--------|--------|----------|-----------|
| **Build Speed** | 7/10 | 5% | 0.35 | OCR pipeline and HS code engine add complexity, but core app is CRUD + API calls. Tesseract.js and OpenAI Vision handle heavy lifting. 3-4 weeks realistic for Agent Pro MVP. Self-Clear is mostly UX over the same engine — adds 2-3 weeks |
| **Time to Revenue** | 8/10 | 15% | 1.20 | Clearing agents feel demurrage pain daily. Demo with real documents = instant "I need this." Physical clustering at Apapa enables direct sales. First paying customer within 30 days plausible. Self-Clear revenue follows in months 4-5 |
| **Market Size** | 10/10 | 15% | 1.50 | N1.2-1.8T annual demurrage costs. ~2,000 licensed brokers in Lagos. 50,000-100,000 small importers nationwide. National Single Window gap creates N300-400B opportunity. Self-Clear expands the addressable market from agents-only to agents + importers. $7-9B maritime market is upstream opportunity. Trade finance on verified documents is a billion-naira-plus lending opportunity |
| **Competition** | 8/10 | 10% | 0.80 | No AI-native customs documentation tool for Nigeria. Webb Fontaine serves government. CargoWise/Descartes serve multinationals. No tool exists for independent agents or self-service importers. Self-Clear has literally zero competition — no one offers self-service customs documentation in Nigeria |
| **Skill Fit** | 10/10 | 15% | 1.50 | AI/OCR/NLP is the core differentiator. Document processing, field extraction, semantic search for HS codes — this is exactly the founder's AI/ML + data science skill set. The entire moat is AI accuracy. WhatsApp integration and guided UX are straightforward engineering |
| **Capital Required** | 7/10 | 10% | 0.70 | OpenAI Vision API costs ~$0.01-0.03/page. At 100 agents + 200 Self-Clear shipments/month = ~$200-600/month in API costs. Supabase and Vercel free tiers cover initial infrastructure. WhatsApp Business API (via Termii) adds ~$50-100/month. Stays within $0-5K bootstrap budget for 6+ months |
| **Buyer Clarity** | 10/10 | 20% | 2.00 | Clearing agents are a named, physically locatable group at Apapa. ANLCA and NAGAFF have member directories. Self-Clear importers are findable at Trade Fair Complex, Alaba Market, Onitsha Main Market. SEO captures both audiences searching "how to clear goods." Can name specific people and locations to visit this week |
| **Fintech Upside** | 9/10 | 10% | 0.90 | Trade finance is the clear expansion path — ClearFast sits on the exact documents lenders need (shipping docs, declared values, clearance history). Self-Clear importers are especially underserved by trade finance because they have no formal documentation trail — ClearFast creates that trail. Duty payment facilitation, marine insurance, and landed cost financing are natural adjacent revenue streams. The fintech layer is where the real value accrues long-term |

### Composite Score: 8.95 / 10

### Verdict: **STRONG BUILD — Highest Disruption Ceiling in Portfolio**

ClearFast scores 10/10 on the three highest-weighted dimensions: Buyer Clarity (20% weight), Market Size (15% weight), and Skill Fit (15% weight). The addition of Self-Clear mode transforms this from a strong sustaining innovation (good SaaS business serving agents) into a genuinely disruptive product (creating self-service customs documentation for non-consumers). The three-phase strategy is clear:

1. **Beachhead (Months 1-3):** Agent Pro MVP at Apapa. Prove the extraction engine works. Get 10-20 paying agents. Establish credibility with the clearing community.
2. **Disruption (Months 4-8):** Self-Clear mode launch. Target importer communities via SEO + WhatsApp. Convert non-consumers of professional clearing into self-service users. Grow revenue from the overlooked segment.
3. **Endgame (Months 9-24):** Fintech layer. Use ClearFast's document data to underwrite trade finance, facilitate duty payments, and offer insurance. This is where the real value compounds — every Self-Clear importer who builds a documentation trail through ClearFast becomes a potential borrower for trade finance products.

The primary risk — OCR accuracy on messy Nigerian shipping documents — is a solvable engineering problem that becomes a compounding moat as the system processes more documents and accumulates correction data. The secondary risk — agent community hostility to Self-Clear — is mitigated by sequencing (agents first, Self-Clear second) and by positioning Self-Clear as targeting informal brokers, not licensed agents.
