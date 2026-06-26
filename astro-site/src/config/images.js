// ============================================================================
// CENTRAL IMAGE CONFIG  ·  one place to swap every visual on the site.
//
// Today every image is the original Feedly asset, kept ON PURPOSE as the quality
// bar (the "swag") to match when real Mentaat visuals are produced.
//
// TO SWAP A VISUAL LATER:
//   • Homepage tiles   → edit `tileImages`.
//   • Marquee logos    → edit `marqueeLogos`.
//   • Service-page art  → uncomment its line in `imageOverrides` and set the new
//     path. The page applies these at build time, so NO markup edits are needed.
// ============================================================================

// Homepage service tiles (referenced in src/pages/index.astro)
export const tileImages = {
  digitalProducts:        '/assets/asset-6.webp',
  workflowIntelligence:   '/assets/asset-7.webp',
  keystoneInfrastructure: '/assets/asset-8.webp',
};

// Client-logo marquee (homepage). Swap src + alt as real clients land.
export const marqueeLogos = [
  { alt: 'Canada Media Fund', src: '/assets/asset-9.svg' },
  { alt: 'Cloudflare', src: '/assets/asset-10.svg' },
  { alt: 'Lufthansa', src: '/assets/asset-11.svg' },
  { alt: 'Sopra Steria', src: '/assets/asset-12.svg' },
  { alt: 'Agenus', src: '/assets/asset-13.svg' },
  { alt: 'EMarketer', src: '/assets/asset-14.svg' },
  { alt: 'Netskope', src: '/assets/asset-15.svg' },
  { alt: 'Secure Cyber Defense', src: '/assets/asset-16.svg' },
  { alt: 'Danone', src: '/assets/asset-17.svg' },
  { alt: 'Verizon', src: '/assets/asset-18.svg' },
  { alt: 'Airbus', src: '/assets/asset-19.svg' },
  { alt: 'Openfields', src: '/assets/asset-20.svg' },
  { alt: 'Royal Bank of Scotland', src: '/assets/asset-21.svg' },
  { alt: 'Delta Dental', src: '/assets/asset-22.svg' },
  { alt: 'River Cap', src: '/assets/asset-23.svg' },
];

// Service-page image swaps. Key = current (Feedly) path, value = replacement.
// All commented = keep every Feedly image as-is for now.
export const imageOverrides = {
  // ═══ Digital Products  (page: /threat-intel, 29 images) ═══
  // '/assets/threat-intel-5.webp': '',
  // '/assets/threat-intel-6.png': '',
  // '/assets/threat-intel-7.png': '',
  // '/assets/threat-intel-8.svg': '',
  // '/assets/threat-intel-9.svg': '',
  // '/assets/threat-intel-10.svg': '',
  // '/assets/threat-intel-11.svg': '',
  // '/assets/threat-intel-12.svg': '',
  // '/assets/threat-intel-13.svg': '',
  // '/assets/threat-intel-14.webp': '',
  // '/assets/threat-intel-15.webp': '',
  // '/assets/threat-intel-16.webp': '',
  // '/assets/threat-intel-17.png': '',
  // '/assets/threat-intel-18.png': '',
  // '/assets/threat-intel-19.webp': '',
  // '/assets/threat-intel-20.png': '',
  // '/assets/threat-intel-21.webp': '',
  // '/assets/threat-intel-22.webp': '',
  // '/assets/threat-intel-23.svg': '',
  // '/assets/threat-intel-24.webp': '',
  // '/assets/threat-intel-25.webp': '',
  // '/assets/threat-intel-26.webp': '',
  // '/assets/threat-intel-27.webp': '',
  // '/assets/threat-intel-28.webp': '',
  // '/assets/threat-intel-29.png': '',
  // '/assets/threat-intel-30.webp': '',
  // '/assets/threat-intel-31.webp': '',
  // '/assets/threat-intel-32.png': '',
  // '/assets/threat-intel-33.svg': '',

  // ═══ Workflow Intelligence  (page: /market-intel, 34 images) ═══
  // '/assets/market-intel-5.webp': '',
  // '/assets/market-intel-6.png': '',
  // '/assets/market-intel-7.png': '',
  // '/assets/market-intel-8.png': '',
  // '/assets/market-intel-9.svg': '',
  // '/assets/market-intel-10.svg': '',
  // '/assets/market-intel-11.svg': '',
  // '/assets/market-intel-12.svg': '',
  // '/assets/market-intel-13.svg': '',
  // '/assets/market-intel-14.svg': '',
  // '/assets/market-intel-15.svg': '',
  // '/assets/market-intel-16.svg': '',
  // '/assets/market-intel-17.svg': '',
  // '/assets/market-intel-18.svg': '',
  // '/assets/market-intel-19.svg': '',
  // '/assets/market-intel-20.svg': '',
  // '/assets/market-intel-21.png': '',
  // '/assets/market-intel-22.webp': '',
  // '/assets/market-intel-23.png': '',
  // '/assets/market-intel-24.png': '',
  // '/assets/market-intel-25.png': '',
  // '/assets/market-intel-26.webp': '',
  // '/assets/market-intel-27.png': '',
  // '/assets/market-intel-28.png': '',
  // '/assets/market-intel-29.webp': '',
  // '/assets/market-intel-30.webp': '',
  // '/assets/market-intel-31.webp': '',
  // '/assets/market-intel-32.webp': '',
  // '/assets/market-intel-33.png': '',
  // '/assets/market-intel-34.webp': '',
  // '/assets/market-intel-35.png': '',
  // '/assets/market-intel-36.svg': '',
  // '/assets/market-intel-37.jpg': '',
  // '/assets/market-intel-38.svg': '',

  // ═══ Keystone Infrastructure  (page: /news-reader, 14 images) ═══
  // '/assets/news-reader-5.webp': '',
  // '/assets/news-reader-6.webp': '',
  // '/assets/news-reader-7.webp': '',
  // '/assets/news-reader-8.webp': '',
  // '/assets/news-reader-9.webp': '',
  // '/assets/news-reader-10.webp': '',
  // '/assets/news-reader-11.webp': '',
  // '/assets/news-reader-12.webp': '',
  // '/assets/news-reader-13.webp': '',
  // '/assets/news-reader-14.webp': '',
  // '/assets/news-reader-15.png': '',
  // '/assets/news-reader-16.webp': '',
  // '/assets/news-reader-17.webp': '',
  // '/assets/news-reader-18.svg': '',
};

// Applies imageOverrides to a raw-HTML string (used by the service pages).
export function applyImageOverrides(html) {
  let out = html;
  for (const [from, to] of Object.entries(imageOverrides)) {
    if (to) out = out.split(from).join(to);
  }
  return out;
}
