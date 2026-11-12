/**
 * Link lists shared by the menu and the footer.
 *
 * The pages that sell used to be reachable only from the /services hub: no
 * link from the home page, the menu, the footer or any blog post. Listing
 * them here puts them on every page, and keeps the menu and footer in step.
 */
export type NavLink = { label: string; href: string };

export const companyLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks: NavLink[] = [
  { label: "AI Agents", href: "/services/ai-chatbots" },
  { label: "AI Voice Agents", href: "/services/ai-voice-assistants" },
  { label: "Workflow Automation", href: "/services/ai-automated-workflows" },
  { label: "Smart Websites", href: "/services/web-design-development" },
  { label: "Web Apps", href: "/services/web-apps" },
  { label: "All Services", href: "/services" },
];

export const guideLinks: NavLink[] = [
  { label: "Software Companies in Sri Lanka", href: "/software-companies-sri-lanka" },
  { label: "AI Companies in Sri Lanka", href: "/ai-companies-sri-lanka" },
  { label: "AI Automation in Sri Lanka", href: "/ai-automation-sri-lanka" },
  { label: "AI Consultants in Sri Lanka", href: "/ai-consultants-sri-lanka" },
  { label: "Web Design in Sri Lanka", href: "/web-design-sri-lanka" },
];
