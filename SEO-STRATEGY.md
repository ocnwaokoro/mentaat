# Mentaat — SEO Strategy & Per-Page Baseline
*Planning only. Nothing here is applied to the site without explicit sign-off. Generated via the `seo-plan` skill (agency/consultancy + local-service templates). House style: no em dashes.*

> **Note on data:** no live keyword-volume tool (DataForSEO) is connected, so volumes below are
> reasoned from search intent, not pulled. Directionally reliable; we can validate exact volumes later.

## 0. The thesis (why this also fixes clarity)
Mentaat ranks the way it earns trust: by describing the **reader's problem in plain language** and
**proving it has solved that exact problem before.** SEO and good copy are the same discipline here.
The brand-clever names stay as identity; the *search* language lives in titles, H1s, slugs, and schema.

## 1. The central tension, resolved (brand names vs search terms)
Nobody searches "Keystone Infrastructure." They search "custom software for my business,"
"AI automation," "web developer NJ." Resolution: **distinctive name stays visible; plain keywords
carry the SEO layer.** Per service:

| Brand name (stays visible) | Plain meaning (the search demand) | Recommended slug | `<title>` direction | H1 direction |
|---|---|---|---|---|
| Digital Products | web development, websites & web apps | `/services/web-development` | Web Development for Small & Boutique Businesses \| Mentaat | Websites and web apps that earn their keep |
| Workflow Intelligence | AI workflow automation, embedded AI | `/services/ai-automation` | AI Workflow Automation for Small Business \| Mentaat | AI that fits how your team already works |
| Keystone Infrastructure | custom software, operations engineering | `/services/custom-software` | Custom Software & Operations Engineering \| Mentaat | A forward-deployed engineer for your operation |

> **Decision needed (touches URLs/naming → your sign-off):** keyword slugs (above, best for SEO) vs
> brand slugs (`/services/digital-products`). My recommendation: **keyword slugs**, they're a free,
> permanent ranking advantage and the visible page still leads with the brand name.

## 2. Recommended site architecture
```
/                         Home            (Organization + ProfessionalService schema)
/services                 Services hub
  /services/web-development
  /services/ai-automation
  /services/custom-software
/work                     Case studies index   (the proof layer)
  /work/<case-study>      individual stories (later)
/industries               ← THE BIG OPPORTUNITY (see §3)
  /industries/dental, /machine-shops, /contractors, /law-firms, /veterinary, /retail, ...
/about                    founder story + E-E-A-T
/contact
/privacy  /terms
```
Plus: `sitemap.xml`, `robots.txt`, and (for AI search) `llms.txt`.

## 3. The biggest play: industry pages
Mentaat's real edge is that it has **named, real engagements in specific verticals.** That maps to
high-intent, low-competition searches the big agencies ignore:
- "AI for dental practices," "dental insurance verification automation"
- "quoting software for machine shops," "software for precision machining"
- "billing / lien software for electrical contractors"
- "intake automation for law firms," "veterinary scheduling AI," "inventory system for small retailer"

Each `/industries/<x>` page targets that phrase, speaks the vertical's language, and showcases the
**matching real case study** as proof. This is the single highest-ROI SEO move available to Mentaat,
and it's only credible because the case studies are real. Recommended after the core pages ship.

## 4. Per-page keyword + clarity baseline (core pages)
| Page | Primary intent / keywords | `<title>` (~60c) | H1 |
|---|---|---|---|
| **Home** | brand + "engineering and AI for small/boutique business" | Mentaat — Engineering & AI for Boutique Businesses | We build the systems that run your business, and the intelligence that runs them better |
| **/services** | "services" hub, internal-link spreader | Services — Web, AI & Custom Software \| Mentaat | What we do |
| **/work** | "case studies," proof, "[industry] software examples" | Our Work — Real Builds for Real Operations \| Mentaat | The work |
| **/about** | brand + founder E-E-A-T | About Mentaat — Forward-Deployed Engineering & AI | We build the way good operators think |
| **/contact** | "book a call," brand + NJ | Contact Mentaat — Book a Call | Let's take a look at your operation |

> ⚠️ **Highest-impact on-page gap, the Home page has no H1.** The hero line above becomes the H1.
> (Touches visible copy → your sign-off before it lands.)

## 5. Schema plan (JSON-LD, invisible to design)
| Page | Schema |
|---|---|
| Home | `Organization` + `ProfessionalService` (name, logo URL, areaServed: New Jersey + Remote, sameAs: LinkedIn, hasOfferCatalog of the 3 services) |
| Service pages | `Service` + `ProfessionalService` |
| /work case studies | `Article` (+ client `Organization` once names are public) |
| /about | `Person` (founder) + `ProfilePage` |
| Global | `BreadcrumbList`, `WebSite` |

This is what builds the brand entity / Knowledge Panel. **Needs a logo image URL** (the inline SVG
can't be the schema `logo`), and **real NAP** (name + city, ideally more) for local trust.

> **Decision needed:** how local to go? "New Jersey" only, a specific city, full address/phone? This
> drives LocalBusiness schema + Google Business Profile.

## 6. E-E-A-T / proof requirements (we mostly have these)
- **Case studies with specific metrics** ✓ (real, quantified). Keep the numbers, they're the ranking + trust asset.
- **Founder bio + credentials** on /about (experience signals). Needs your real bio.
- **Consistent NAP + LinkedIn (`sameAs`)** across footer + schema.

## 7. Technical foundation (Astro already gives us most of this for free)
Static SSG ✓, fast ✓, real HTML ✓. To add (invisible): per-page `<title>`/meta/canonical (the SEO
head doc covers this), `sitemap.xml` + `robots.txt` (the `seo-sitemap` skill generates these), OG
image, and `llms.txt` for AI-search citability (the `seo-geo` skill).

## 8. Pragmatic roadmap (scaled to a new, undeployed site)
1. **Foundation:** lock slugs/titles/H1s (this doc), add the Home H1, per-page meta + canonical, Organization/Service schema, sitemap + robots. *Mostly invisible; all behind your sign-off.*
2. **Proof:** /work + the case studies (the trust engine).
3. **Vertical expansion:** the `/industries/*` pages (§3), each tied to a real case study.
4. **AI search:** `llms.txt`, GEO tuning (`seo-geo`), once content is live.
5. **Authority (post-launch):** insights/articles, then audit with `seo-audit`.

## 9. Decisions that need your sign-off (because they touch naming/URLs/copy)
1. **Slugs:** keyword (`/services/web-development`) vs brand (`/services/digital-products`)?
2. **Add `/industries/*` pages?** (the big play)
3. **Home H1 text** (becomes the most important on-page element).
4. **Locality for schema/NAP:** NJ only, a city, full address/phone?
5. **Founder bio** for /about + E-E-A-T.

Everything in §5–§7 (schema, meta, sitemap, robots, llms.txt) is **invisible to the design** and I'll
still propose each before applying. Nothing here is on the site yet.
