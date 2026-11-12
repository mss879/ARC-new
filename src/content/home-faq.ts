import { office, whatsapp } from "@/content/site-facts";

/**
 * The questions shown on the home page.
 *
 * The visible section and the FAQPage structured data are both built from
 * this list, so the markup can never describe an answer a visitor cannot
 * read on the page.
 */
export type Faq = { question: string; answer: string };

export const homeFaq: Faq[] = [
  {
    question: "What does ARC AI build?",
    answer:
      "Two things that work together: AI agents for WhatsApp, websites and phone calls, and the business systems they run inside, such as ERP, point of sale, e-commerce and CRM. We also build websites and web applications.",
  },
  {
    question: "Where is ARC AI based?",
    answer: `Our office is at ${office.oneLine}. We work with businesses across Sri Lanka, and remotely with clients overseas.`,
  },
  {
    question: "Can an AI agent answer my customers in Sinhala and Tamil?",
    answer:
      "Yes. Our chat and voice agents work in Sinhala, Tamil and English, and they answer from your own product and service information rather than guessing.",
  },
  {
    question: "Do the AI agents act on their own?",
    answer:
      "Only as far as you allow. We design agents to read, draft and answer, while the actions that matter wait for a person to approve them. What each agent did is logged, so you can see it afterwards.",
  },
  {
    question: "How can I see what an AI agent can do?",
    answer: `Use the Chat or Voice button at the bottom of this page to talk to one now, or message our WhatsApp agent on ${whatsapp.agent.display}.`,
  },
  {
    question: "How much does a system cost?",
    answer:
      "It depends on the modules, integrations and data involved, so every project is quoted after a short scoping call. Book a call and we will tell you what it would take.",
  },
];
