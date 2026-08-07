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
};

export const projects: Project[] = [
  {
    slug: 'saas-starter-replatform',
    title: 'Replatforming a SaaS starter into a production-ready growth engine',
    client: 'LaunchLayer',
    category: 'Full-Stack Development',
    year: '2026',
    cover: 'linear-gradient(135deg,#0f172a,#0ea5e9)',
    accent: '#38bdf8',
    summary:
      'Migrated a bloated starter app into a lean Next.js platform with typed APIs, Stripe billing, and a reliable auth flow that reduced onboarding friction and increased paid conversion.',
    role: 'Technical Lead, Full-Stack Engineer',
    timeline: '9 weeks',
    services: ['Architecture', 'Next.js Development', 'Auth', 'Payments', 'QA'],
    challenge:
      'The product had grown quickly without strong boundaries, causing brittle deployments, slow onboarding, and frequent regressions in billing and authentication.',
    approach: [
      'Defined clear route boundaries with an app-first architecture and stricter TypeScript contracts for API payloads.',
      'Refactored auth and payment flows with better error handling, idempotent callbacks, and safer webhook logic.',
      'Introduced focused test coverage around high-risk paths: registration, upgrade, downgrade, and account recovery.',
    ],
    outcome:
      'The team shipped faster with fewer production incidents and materially improved trial-to-paid conversion after onboarding friction dropped.',
    metrics: [
      { label: 'Trial to paid conversion', value: '+29%' },
      { label: 'Auth-related support tickets', value: '-41%' },
      { label: 'Release rollback rate', value: '-63%' },
    ],
    testimonial: {
      quote:
        'Patrick brought order to a chaotic codebase and gave us a platform we can confidently scale.',
      name: 'Maya Tran',
      title: 'Founder, LaunchLayer',
    },
  },
  {
    slug: 'ai-content-workflow',
    title: 'Building an AI workflow that moved marketing from drafts to publish',
    client: 'Northstar Media',
    category: 'AI Product Engineering',
    year: '2025',
    cover: 'linear-gradient(135deg,#111827,#4f46e5)',
    accent: '#818cf8',
    summary:
      'Designed and implemented an AI-assisted content engine with prompt templates, role-based review, and CMS publishing hooks that cut campaign lead time dramatically.',
    role: 'AI Engineer, Product Developer',
    timeline: '7 weeks',
    services: ['OpenAI Integration', 'Prompt Design', 'Editorial Workflow', 'CMS Integration'],
    challenge:
      'Writers were stuck in repetitive drafting cycles, and campaign timelines slipped because content operations were fragmented across tools and manual approvals.',
    approach: [
      'Mapped the editorial lifecycle and created prompt frameworks tied to content goals, tone, and channel constraints.',
      'Implemented a review pipeline with statuses, revision history, and role-based approvals to prevent accidental publishing.',
      'Connected final output to CMS publishing APIs and analytics events for downstream performance tracking.',
    ],
    outcome:
      'The marketing team produced more campaigns with a smaller team while keeping voice consistency and editorial quality standards.',
    metrics: [
      { label: 'Campaign lead time', value: '-52%' },
      { label: 'Content throughput', value: '+2.1x' },
      { label: 'Manual copy-paste steps', value: '-78%' },
    ],
    testimonial: {
      quote:
        'The AI workflow felt practical from day one. It improved output quality instead of creating more busywork.',
      name: 'Aaron Wells',
      title: 'Growth Lead, Northstar Media',
    },
  },
  {
    slug: 'portfolio-conversion-redesign',
    title: 'Redesigning a creator portfolio into a conversion-focused funnel',
    client: 'Studio Meridian',
    category: 'Frontend & UX Engineering',
    year: '2025',
    cover: 'linear-gradient(135deg,#1f2937,#f97316)',
    accent: '#fb923c',
    summary:
      'Rebuilt a creator portfolio with clearer user journeys, stronger mobile performance, and better lead capture architecture that turned passive traffic into active inquiries.',
    role: 'Frontend Engineer, UX Collaborator',
    timeline: '6 weeks',
    services: ['UX Audit', 'Interface Engineering', 'Performance Tuning', 'Forms'],
    challenge:
      'The original site looked strong visually but underperformed on conversions, especially on mobile where load times and unclear calls-to-action caused high drop-off.',
    approach: [
      'Ran funnel analysis and session review to identify where intent was strongest and where prospects were leaving.',
      'Reworked information hierarchy, navigation, and CTA placement to support shorter decision paths.',
      'Improved Core Web Vitals with image strategy, component-level optimization, and cleaner bundle boundaries.',
    ],
    outcome:
      'The site retained more visitors through key steps and generated higher-quality discovery calls within the first month after launch.',
    metrics: [
      { label: 'Inbound inquiries', value: '+47%' },
      { label: 'Mobile bounce rate', value: '-33%' },
      { label: 'Average page load time', value: '-44%' },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return { next };
}
