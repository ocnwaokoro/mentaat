// @ts-check
import { defineConfig } from 'astro/config';

// Static site (SSG) — every page is pre-rendered to HTML at build time.
// This is what gives us the SEO win over the old React SPA: crawlers and
// social scrapers get fully-formed HTML, not an empty #root that needs JS.
export default defineConfig({
  output: 'static',
  vite: {
    build: {
      // Feedly's captured CSS contains a few non-standard selectors (e.g. a
      // pseudo-element followed by a class) that browsers tolerate but the
      // default strict minifier (lightningcss) rejects. esbuild is lenient.
      cssMinify: 'esbuild',
    },
  },
});
