import { portfolioProfile } from '@/libs/portfolioProfile';
import { projects } from '@/libs/portfolioProjects';

// Lightweight rule-based FAQ engine for the site chatbot - no external API or
// cost. Each rule is scored by how many of its keywords appear in the
// visitor's message; the highest-scoring rule above the threshold wins.
type FaqRule = {
  id: string;
  keywords: string[];
  response: string;
};

const projectTitles = projects.map((p) => `"${p.title}" for ${p.client}`).join(', ');

const rules: FaqRule[] = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'yo', 'sup', 'good morning', 'good afternoon'],
    response: `Hey! I'm ${portfolioProfile.firstName}'s site assistant. Ask me about his work, tech stack, availability, or how to get in touch.`,
  },
  {
    id: 'who',
    keywords: ['who are you', 'who is patrick', 'about you', 'about patrick', 'tell me about'],
    response: `${portfolioProfile.fullName} is a ${portfolioProfile.role.toLowerCase()}. ${portfolioProfile.heroIntro}`,
  },
  {
    id: 'services',
    keywords: ['service', 'what do you do', 'what can you build', 'help with', 'offer'],
    response:
      'Patrick builds full-stack web products end-to-end: front-end interfaces, back-end APIs, and practical AI-powered workflows. Check out the Work page for real case studies.',
  },
  {
    id: 'stack',
    keywords: ['stack', 'technology', 'technologies', 'tools', 'framework', 'language'],
    response: `Core stack: ${portfolioProfile.techStack.join(', ')}.`,
  },
  {
    id: 'projects',
    keywords: ['project', 'work', 'portfolio', 'case study', 'case studies', 'examples'],
    response: `A few recent projects: ${projectTitles}. You can see full case studies on the Work page.`,
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'get in touch', 'talk', 'hire'],
    response: `You can reach Patrick at ${portfolioProfile.email}, or use the Contact page form - ${portfolioProfile.responseTime.toLowerCase()}.`,
  },
  {
    id: 'call',
    keywords: ['call', 'meeting', 'calendly', 'schedule', 'book', 'chat live'],
    response: `You can book a call directly: ${portfolioProfile.calendarCta} at ${portfolioProfile.calendarUrl}.`,
  },
  {
    id: 'resume',
    keywords: ['resume', 'cv', 'download'],
    response: 'You can download the resume from the About page - look for the "Download resume" button.',
  },
  {
    id: 'location',
    keywords: ['location', 'where', 'based', 'timezone', 'remote'],
    response: `Patrick works ${portfolioProfile.location.toLowerCase()}.`,
  },
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'budget', 'rate', 'how much'],
    response:
      "Project scope and budget vary by engagement - the best next step is sharing details on the Contact page so Patrick can give you an accurate estimate.",
  },
  {
    id: 'thanks',
    keywords: ['thanks', 'thank you', 'appreciate'],
    response: "You're welcome! Anything else you'd like to know?",
  },
];

const fallback =
  "I'm not sure about that one. Try asking about Patrick's services, tech stack, past projects, or how to get in touch - or head to the Contact page for a direct answer.";

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Matches whole words/phrases only (word-boundary), so short keywords like
// "hi" or "yo" don't false-positive inside unrelated words such as "which"
// or "your".
function containsKeyword(message: string, keyword: string): boolean {
  const pattern = new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'i');
  return pattern.test(message);
}

export function getFaqResponse(message: string): string {
  let bestRule: FaqRule | null = null;
  let bestScore = 0;

  for (const rule of rules) {
    const score = rule.keywords.reduce(
      (count, keyword) => (containsKeyword(message, keyword) ? count + 1 : count),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      bestRule = rule;
    }
  }

  return bestRule ? bestRule.response : fallback;
}

export const suggestedPrompts = [
  'What services do you offer?',
  'What is your tech stack?',
  'How do I get in touch?',
];
