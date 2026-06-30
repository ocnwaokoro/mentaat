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

  // Contact + the "Book a call" funnel.
  // NOTE: empty string = HIDDEN everywhere it's used. Set the real value to reveal (one line).
  email: '',                           // HIDDEN until real. Was/intended: hello@mentaat.com
  bookingUrl: 'https://cal.com/obinna-nwaokoro-d5zhld/30min',  // the single source for every "Book a call". Set to '#' to disable.
  contactFormAction: '#',              // TODO: form endpoint (Formspree / Netlify Forms)
  location: 'New Jersey',

  // Social
  linkedin: '',                        // HIDDEN until real. Was/intended: https://www.linkedin.com/company/mentaat

  // SEO
  ogImage: '/og/mentaat-default.png',  // TODO: produce 1200x630 share image
};
