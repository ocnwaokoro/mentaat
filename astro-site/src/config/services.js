// ============================================================================
// SERVICES  ·  the three offerings, shared by the homepage and the /services hub.
// Both render the SAME image-topped card set (see components/ServiceCard.astro),
// so the two pages stay in lockstep. Edit a card once, it updates both places.
// ============================================================================
export const services = [
  {
    surface: 'dark',
    eyebrow: 'Build',
    title: 'Digital Products',
    href: '/services/web-development',
    p: 'Modern websites and web apps, built to perform.',
    img: '/work/boutique-hotel.jpg',
  },
  {
    surface: 'tint',
    eyebrow: 'Embed',
    title: 'Workflow Intelligence',
    href: '/services/ai-automation',
    p: 'We learn how your team really works, then use AI to take the busywork off their plate.',
    img: '/work/dental-verification.jpg',
  },
  {
    surface: 'white',
    eyebrow: 'Transform',
    title: 'Keystone Infrastructure',
    href: '/services/custom-software',
    p: 'We get into your business and build the custom software it runs on.',
    img: '/work/machine-shop-quoting.jpg',
  },
];
