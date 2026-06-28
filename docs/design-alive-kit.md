# Mentaat — "Less Template, More Alive" Resource Kit
*A pull-from reference: galleries to browse, techniques to choose from, tools to build with, and a filter to decide. Built around your stack (Astro static site) and your brand (forward-deployed operator: precise, hands-on, builds real things).*

---

## 0. The one rule before you pull anything
A page feels **alive** when something **moves with intention** and there's **one memorable moment**. It feels **template** when it's flat, static, and evenly decorated. You do **not** add everything below. You pick **one signature + a few restrained micro-moments**, and cut the rest (Chanel rule: before you leave, remove one accessory).

**Your filter:** does it express *forward-deployed operator*? Precision, hands-on, real systems. If a technique is just "pretty," skip it. If it makes the work feel real or the craft feel deliberate, keep it.

---

## 1. Galleries — browse these for "alive" (save what stops you)
| Site | What it's good for |
|---|---|
| **Awwwards.com** | The high end. Filter by "Sites of the Day." Study *why* they feel alive (motion, type, one bold idea). |
| **Godly.website** | Curated, modern, tasteful. Best signal-to-noise for premium-but-not-gaudy. |
| **Land-book.com** | Landing pages specifically. Closest to what you're building. |
| **SiteInspire.com** | Clean, editorial, design-led. Filter by "Minimal" / "Typography." |
| **Httpster.net** | Bolder, indie, type-forward. Good for personality ideas. |
| **Refero.design** | Real product UI flows; how serious software sites are built. |
| **Mobbin.com** | UI pattern library (mostly apps) — for interaction details. |
| **Cosmos.so / Savee.it** | Visual mood-boarding; collect a palette of "feels like us." |

**How to use:** make ONE board (Cosmos or a folder of screenshots). When you have 15–20 saved, the pattern of *what you keep choosing* is your brand direction. That's the real exercise.

---

## 2. Studios & product sites to study (premium, distinctive — not template)
- **Studios:** BASIC/DEPT, Work & Co, Instrument, Locomotive, Active Theory, Resn, Unseen Studio, Studio Lumio, Tendril.
- **Product (engineering-adjacent, your tone):** Linear, Vercel, Stripe, Raycast, Family, Resend, Liveblocks.
- **Watch for:** how they use dark/light rhythm, one signature motion, real product shots, and confident type. None of them use a stock template; all are *clear*. Clarity + one idea = not-template.

---

## 3. Techniques to choose from (what / why / how)

### A. Motion & interaction (the biggest "alive" lever)
| Technique | Why it helps | Tool for Astro |
|---|---|---|
| **Page transitions** | Site feels like an app, not pages reloading | **Astro View Transitions** (built in, ~free) |
| **Scroll-reveal** (fade/slide in on scroll) | Content "arrives," feels considered | IntersectionObserver (no lib) or **Motion One** (motion.dev) |
| **Smooth scroll** | Premium, fluid feel | **Lenis** (studio-favorite) |
| **Stat count-ups** (15min → 2min animates) | Makes proof feel earned | **Motion One** or 10 lines of JS |
| **Hover lift / magnetic buttons** | Rewards interaction | CSS transforms; magnetic = small JS |
| **Marquee / word-strip** | Motion + says a lot fast | CSS animation |
| **Staggered entrance on load** | A designed first impression | **Motion One** / GSAP |

> Heaviest hitters: **GSAP + ScrollTrigger** (the industry standard for award motion) and **Motion One** (lighter, modern). For React islands you could use **Framer Motion**.

### B. Texture & depth (kills flatness)
- **Grain / film noise** overlay on dark sections — instant "designed," not flat. (A tiling noise PNG at ~4% opacity, or `grained.js`.)
- **Gradient mesh / animated gradient** behind the hero — **Spline**, **ShaderGradient**, or CSS conic-gradient. (Exactly the glow Feedly puts behind its product shots.)
- **Subtle dot/grid** background on dark bands.
- **Layering & soft shadows** — overlap elements, give z-depth instead of one flat plane.

### C. Type as identity
- **Oversized display type** used as a graphic element (you have Aeonik — push its scale on one hero).
- **A characterful display face** for *one* headline, paired with the clean grotesk (editorial-premium).
- **Variable-font weight animation** on hover/scroll (Aeonik is variable — it can animate weight).
- **Kinetic headline** (a word animates in) — one place only.

### D. Signature devices (this is where brand lives)
- **A recurring motif from the M-mark** — as a section marker, list bullet, loader, scroll indicator, or a faint oversized watermark. One shape, used everywhere = ownership.
- **A custom page-load sequence** (the M draws in) — the first thing anyone sees.
- **A numbering / labeling system** that encodes your method (you already have 01/02/03).
- **The voice** ("we go in like an operator") carried into microcopy, empty states, button labels.

---

## 4. Tools & libraries (concrete, for a static Astro site)
- **Motion:** [GSAP](https://gsap.com) (+ScrollTrigger), [Motion One](https://motion.dev), [Lenis](https://lenis.darkroom.engineering) (smooth scroll), Framer Motion (React islands only).
- **Page transitions:** [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/) — native, low effort.
- **3D / gradient:** [Spline](https://spline.design) (no-code 3D), [ShaderGradient](https://www.shadergradient.co), [three.js](https://threejs.org).
- **Texture:** a noise PNG overlay, or [grained.js](https://github.com/sarathsaleem/grained).
- **Vector animation:** [Lottie](https://lottiefiles.com) (designer-made motion, drop-in).
- **Imagery (your real differentiator):** screenshot your actual builds → frame them in [Shots.so](https://shots.so) / [Screely](https://screely.com) / [CleanShot](https://cleanshot.com). Real work in those Preview slots is the single biggest un-template move.

---

## 5. The decision filter (how to actually choose)
1. **Pick ONE signature** that embodies forward-deployed operator. (Candidates: the M-mark as a recurring device; a precise on-load build sequence; the stat count-ups; a gradient-mesh hero behind real product shots.)
2. **Add 2–3 restrained micro-interactions:** scroll-reveal, hover-lift, count-up. No more.
3. **Add texture** (grain or gradient) to the dark bands so they're not flat.
4. **Fill the Preview slots with real screenshots.** Nothing else competes with this.
5. **Cut anything decorative-not-meaningful.** If it doesn't say "precise / hands-on / real," it goes.

**Test:** show it to someone for 5 seconds. If they remember *one* thing, you have a signature. If they remember "clean website," you have a template.

---

## 6. The honest truth (read this last)
A website can't manufacture a brand identity the business hasn't earned yet. Motion and texture make it feel *crafted*; they don't make it *differentiated*. Real differentiation = **your point of view + your actual work**, shown plainly. So: do the alive-techniques to clear the "template" bar (worth doing), but the thing that makes it unmistakably Mentaat is the **real proof and the operator POV** — which arrives with content, not CSS.

Pick from §1 and §5 first. Everything else is optional polish.
