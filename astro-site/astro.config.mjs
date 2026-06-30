// @ts-check
import { defineConfig } from 'astro/config';

// Static site (SSG) — every page is pre-rendered to HTML at build time.
// This is what gives us the SEO win over the old React SPA: crawlers and
// social scrapers get fully-formed HTML, not an empty #root that needs JS.
export default defineConfig({
  output: 'static',
  // Canonical production origin. Used for absolute URLs (canonical tags, OG image,
  // sitemap). Must match the live domain so crawlers/social scrapers resolve the right host.
  site: 'https://mentaat.com',
  // Hide the floating Astro dev toolbar in the local dev server.
  devToolbar: { enabled: false },
  vite: {
    // Allow the site to be reached over Tailscale (serve) by its *.ts.net hostname.
    server: { allowedHosts: true },
    build: {
      // Feedly's captured CSS contains a few non-standard selectors (e.g. a
      // pseudo-element followed by a class) that browsers tolerate but the
      // default strict minifier (lightningcss) rejects. esbuild is lenient.
      cssMinify: 'esbuild',
    },
  },
});
