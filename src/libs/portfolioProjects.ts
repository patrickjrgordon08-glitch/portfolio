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
  previewImage?: string;
};

export const projects: Project[] = [
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
