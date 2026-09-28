export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  cover: string;
  accent: string;
  summary: string;
  role: string;
  timeline: string;
  services: string[];
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  testimonial?: { quote: string; name: string; title: string };
  liveUrl?: string;
  repositoryUrl?: string;
  previewImage?: string;
};

export const projects: Project[] = [
  {
    slug: 'music-portfolio',
    title: 'Creating a dedicated portfolio for music and creative work',
    client: 'Music Portfolio',
    category: 'Creative Web Development',
    year: '2026',
    cover: 'linear-gradient(135deg,#1e1b4b,#7c3aed 52%,#ec4899)',
    accent: '#8b5cf6',
    summary:
      'An in-progress portfolio project focused on giving music and creative work a dedicated home online. The public GitHub repository is ready for the site as it moves from concept into development.',
    role: 'Designer-Developer',
    timeline: 'In progress',
    services: ['Product Direction', 'UI Design', 'Frontend Development'],
    challenge:
      'Music projects need a presentation that feels expressive and memorable while keeping the work easy to discover, understand, and revisit across devices.',
    approach: [
      'Established a dedicated public repository so the project can be developed and documented independently.',
      'Defined the project around a focused music portfolio experience rather than mixing creative work into a general-purpose site.',
      'Planned a responsive foundation that can grow alongside new music, visuals, and project details.',
    ],
    outcome:
      'The project now has a public source-code home and a clear place in the portfolio. Development is ongoing, and the case study can be updated with a live experience and measured results as the project ships.',
    metrics: [
      { label: 'Status', value: 'In progress' },
      { label: 'Repository', value: 'Public' },
      { label: 'Source', value: 'GitHub' },
    ],
    repositoryUrl: 'https://github.com/patrickjrgordon08-glitch/music-protfolio',
  },
  {
    slug: 'landscaping-business-website',
    title: 'Launching a landscaping business website with quote requests and live chat support',
    client: 'Vinrick Furniture & Landscape',
    category: 'Frontend & UX Engineering',
    year: '2026',
    cover: 'linear-gradient(135deg,#14532d,#65a30d)',
    accent: '#65a30d',
    summary:
      'Built and deployed a full marketing site for a landscaping company, covering service showcases, client reviews, a detailed quote request form, FAQ, and a live chat assistant for instant visitor questions.',
    role: 'Designer-Developer',
    timeline: '3 weeks',
    services: ['UI Design', 'Frontend Development', 'Forms & Lead Capture', 'Vercel Deployment'],
    challenge:
      'The business needed a professional web presence that could showcase its services, build trust through client reviews, and convert visitors into quote requests without manual follow-up on every inquiry.',
    approach: [
      'Designed a hero section with a strong value proposition and dual calls-to-action leading into services and a free quote form.',
      'Built a services showcase, a reviews section with an in-page submission form, and a detailed quote request form with service selection.',
      'Added an FAQ accordion, a newsletter signup, and a built-in live chat assistant so visitors get instant answers outside business hours.',
    ],
    outcome:
      'The site gives the business a complete digital storefront — from first impression through service education to lead capture — backed by a live chat assistant that handles common visitor questions automatically.',
    metrics: [
      { label: 'Status', value: 'Live on Vercel' },
      { label: 'Lead capture channels', value: '3 (form, chat, reviews)' },
      { label: 'FAQ coverage', value: '6 common questions' },
    ],
    liveUrl: 'https://landscaping-project.vercel.app/',
    previewImage: '/projects/landscaping-preview.jpg',
  },
  {
    slug: 'coffee-ecommerce-website',
    title: 'Building a premium coffee e-commerce site with curated product showcases and reviews',
    client: 'The Beans Place',
    category: 'Frontend & UX Engineering',
    year: '2026',
    cover: 'linear-gradient(135deg,#0f1e3a,#c47800)',
    accent: '#f0a828',
    summary:
      'Built and deployed a premium storefront for a specialty coffee brand, featuring a curated single-origin product catalog, aggregate ratings and customer reviews, and a fast, conversion-focused shopping experience.',
    role: 'Designer-Developer',
    timeline: '3 weeks',
    services: ['UI Design', 'Frontend Development', 'E-Commerce UX', 'Vercel Deployment'],
    challenge:
      'The brand needed a premium-feeling storefront that could showcase single-origin products, build purchase confidence through reviews, and drive add-to-cart action without a heavy checkout system.',
    approach: [
      'Designed a dark, editorial-style hero with a strong value proposition, a shop CTA, and immediate trust signals like star rating and free shipping threshold.',
      'Built a curated product grid with roast details, tasting notes, and merchandising badges (Best Seller, Staff Pick, Limited, New) for quick scanning.',
      'Added a reviews section with an aggregate rating breakdown and verified customer testimonials tied to specific products.',
    ],
    outcome:
      'The site presents every product with enough detail and social proof to build purchase confidence within seconds, backed by fast-shipping messaging and a clean path to checkout.',
    metrics: [
      { label: 'Status', value: 'Live on Vercel' },
      { label: 'Average rating shown', value: '4.9/5' },
      { label: 'Origins showcased', value: '6+ single-origin roasts' },
    ],
    liveUrl: 'https://the-beans-place-ochre.vercel.app/',
    previewImage: '/projects/coffee-shop-preview.jpg',
  },
  {
    slug: 'vintage-barbershop-booking-site',
    title: 'Building a vintage barbershop site with online appointment booking',
    client: 'Vintage Barbershop',
    category: 'Frontend & UX Engineering',
    year: '2026',
    cover: 'linear-gradient(135deg,#1c1410,#7a2e1f)',
    accent: '#d4a24c',
    summary:
      'Built and deployed a warm, atmospheric barbershop site with a live services menu, pricing, and an interactive calendar for booking appointments directly from the homepage.',
    role: 'Designer-Developer',
    timeline: '2 weeks',
    services: ['UI Design', 'Frontend Development', 'Booking Calendar', 'Vercel Deployment'],
    challenge:
      'The shop needed an online presence that captured its classic, old-school atmosphere while making it effortless for walk-in-minded customers to book a specific time and service in advance.',
    approach: [
      'Designed a moody, editorial hero with warm photography and dual CTAs for booking and browsing services.',
      'Built a services grid with pricing and popularity badges so customers can compare options at a glance.',
      'Implemented an interactive calendar with date selection, service picker, and instant booking confirmation.',
    ],
    outcome:
      'The site turns the shop\'s in-person atmosphere into a compelling first impression online, while the built-in calendar removes the friction of booking by phone.',
    metrics: [
      { label: 'Status', value: 'Live on Vercel' },
      { label: 'Services listed', value: '6 with live pricing' },
      { label: 'Booking flow', value: 'Calendar to confirmation, no calls' },
    ],
    liveUrl: 'https://barbershop-website-lovat.vercel.app/',
    previewImage: '/projects/vintage-barbershop-preview.jpg',
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  // Avoid recommending the same project as its own "next case study" when
  // there's only one project in the list.
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  return { next };
}
