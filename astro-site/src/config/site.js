// ============================================================================
// CENTRAL SITE CONFIG  ·  one place for every fact + placeholder on the site.
// Change a value here and it updates everywhere it's used.
// Items marked TODO are placeholders to swap for the real thing.
// ============================================================================

export const site = {
  name: 'Mentaat',
  legalName: 'Mentaat Technologies LLC',
  domain: 'https://mentaat.com',
  tagline: 'Engineering and AI for boutique businesses. We come to you.',

  // Contact + the "Book a call" funnel
  email: 'hello@mentaat.com',          // TODO: confirm the real inbox
  bookingUrl: '#',                     // TODO: real scheduling link (Calendly, etc.)
  contactFormAction: '#',              // TODO: form endpoint (Formspree / Netlify Forms)
  location: 'New Jersey',

  // Social
  linkedin: 'https://www.linkedin.com/company/mentaat',  // TODO: confirm handle

  // SEO
  ogImage: '/og/mentaat-default.png',  // TODO: produce 1200x630 share image
};
