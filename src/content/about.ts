import { stats } from "./site-facts";

/**
 * The words on the About page, in one place.
 *
 * Rules these follow (the same as the rest of the site):
 *  - Nothing here states a figure that is not in site-facts.ts.
 *  - The founder's note is Shahid's own and is quoted as he wrote it.
 *  - Journey entries marked `ahead` are goals, and are shown as goals.
 */

export const aboutLead =
  "ARC AI is an AI automation and software company in Colombo. We build AI agents and the business systems they work inside, from ERP and point of sale to online stores, and we stay on to run and improve them.";

/** The large statement that lights up as the page scrolls. `accent` words are shown in orange. */
export const aboutStatement: { text: string; accent?: boolean }[] = [
  { text: "We're an AI automation and software company helping businesses run and grow with intelligent automation, AI agents and well-built systems. With" },
  { text: `${stats.yearsOfExperience}+ years of experience`, accent: true },
  { text: "and" },
  { text: `${stats.projectsCompleted}+ projects delivered,`, accent: true },
  { text: "we build the tools our clients work in every day, and the AI that works alongside their teams." },
];

export const mission =
  "To help businesses grow and run more efficiently through AI agents, automation and software built around how they actually work.";

export const vision =
  "To be a leader in practical AI for business, setting the standard for systems where AI does the work and people stay in control.";

export const founderNote = {
  quote:
    "ARC AI was born from a vision to harness the power of AI to solve real-world business challenges. Our journey has been one of continuous learning, innovation, and growth. We're committed to pushing the boundaries of what's possible with AI, always with the goal of delivering tangible value to our clients. As we look to the future, we're excited about the endless possibilities that lie ahead and the positive impact we can make on businesses worldwide.",
  name: "Shahid Shamir",
  role: "Founder & CEO",
  photo: "/founder.jpg",
};

export const techStack = [
  "OpenAI", "Python", "TensorFlow", "React", "Node.js", "MongoDB", "AWS", "Docker",
  "Google Cloud", "Zapier", "Make.com", "n8n", "Next.js", "TypeScript", "Tailwind",
];

export type JourneyIcon = "flag" | "rocket" | "chat" | "globe" | "systems" | "lab" | "trophy";

export const journey: { year: string; title: string; description: string; icon: JourneyIcon; ahead?: boolean }[] = [
  {
    year: "2022",
    title: "ARC AI founded",
    description: "Started in Colombo, building AI automation and intelligent workflow systems for businesses.",
    icon: "flag",
  },
  {
    year: "2023",
    title: "AI-powered marketing tools",
    description: "Introduced AI-driven marketing automation tools to help clients grow their digital presence.",
    icon: "rocket",
  },
  {
    year: "2024",
    title: "AI chatbot platform",
    description: "Launched our AI chatbot platform, changing how our clients talk to their customers.",
    icon: "chat",
  },
  {
    year: "2025",
    title: "AI content engine and overseas clients",
    description: "Built our AI content generation system and began working remotely with clients overseas.",
    icon: "globe",
  },
  {
    year: "2026",
    title: "Business systems with AI inside",
    description: "ERP, point of sale and e-commerce systems with AI agents built in, for Sri Lankan businesses.",
    icon: "systems",
  },
  {
    year: "2028",
    title: "AI innovation lab and partnerships",
    description: "Our own research and development lab, and partnerships with leading technology companies.",
    icon: "lab",
    ahead: true,
  },
  {
    year: "2030",
    title: "The most trusted name in AI for business",
    description: "Our aim: to be the AI automation and systems company businesses trust most, in Sri Lanka and beyond.",
    icon: "trophy",
    ahead: true,
  },
];

export type IndustryIcon = "retail" | "health" | "property" | "education" | "fitness" | "tech" | "services" | "hospitality";

export const industriesIntro =
  "AI agents, automation and business systems for companies across many sectors.";

export const industries: { name: string; description: string; icon: IndustryIcon }[] = [
  { name: "E-Commerce & Retail", description: "Online stores, point of sale and stock systems, with AI agents that answer customers and take orders.", icon: "retail" },
  { name: "Healthcare", description: "Patient enquiries and appointment booking handled by AI chatbots and automated appointment systems.", icon: "health" },
  { name: "Real Estate", description: "Lead capture and follow-up automation, and AI agents that answer property enquiries.", icon: "property" },
  { name: "Education", description: "Automated student engagement and AI-powered learning management systems.", icon: "education" },
  { name: "Fitness & Wellness", description: "AI chatbots for client onboarding, bookings and follow-ups.", icon: "fitness" },
  { name: "Technology & SaaS", description: "AI-driven customer support and workflow automation.", icon: "tech" },
  { name: "Professional Services", description: "Workflow automation and AI-powered client relationship management.", icon: "services" },
  { name: "Hospitality", description: "Smart booking automation and AI chatbots for enhanced guest experiences.", icon: "hospitality" },
];
