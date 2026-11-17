/**
 * The facts this site states about ARC AI, in one place.
 *
 * Copy and structured data read from here so an address, a number or a link
 * cannot drift between pages (the site used to give three different project
 * counts and two postcodes). A fact that has not been confirmed stays out:
 * leave it null and let the page omit it, rather than estimating.
 */

export const SITE_URL = "https://www.arcai.agency";

export const company = {
  name: "ARC AI",
  legalName: "ARC AI (Pvt) Ltd",
  registrationNumber: "PV00352581",
  foundedYear: 2022,
  email: "support@arcai.agency",
  /** One sentence, used wherever the site needs to say what ARC AI does. */
  summary:
    "ARC AI builds AI agents and business systems for Sri Lankan businesses: WhatsApp, web and voice agents, ERP, point of sale, e-commerce and web applications.",
  /** Shown on About, Contact and the footer. */
  overseasNote: "Based in Colombo. We also work remotely with clients overseas.",
} as const;

/**
 * The headline numbers, as confirmed by the owner on 12 Nov 2026. Every page
 * that states a project count or years of experience reads these, so the site
 * cannot show two different figures again.
 */
export const stats = {
  projectsCompleted: 100,
  yearsOfExperience: 8,
} as const;

export const office = {
  street: "91 Daisy Villa Avenue",
  district: "Colombo 4",
  locality: "Colombo",
  postalCode: "00400",
  region: "Western Province",
  country: "Sri Lanka",
  countryCode: "LK",
  geo: { latitude: 6.892012, longitude: 79.856254 },
  /** As a visitor reads it. */
  oneLine: "91 Daisy Villa Avenue, Colombo 4, Sri Lanka",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=91%20Daisy%20Villa%20Ave,%20Colombo%2000400,%20Sri%20Lanka&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export const hours = {
  /** One entry per run of days with the same hours, Sri Lanka time. `opens`
   *  and `closes` (24-hour) go into the structured data; `label` and `time`
   *  are how a visitor reads them. Set by the owner on 16 Nov 2026. */
  periods: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
      label: "Monday to Friday",
      time: "9 AM to 7 PM",
    },
    { days: ["Saturday"], opens: "09:00", closes: "16:00", label: "Saturday", time: "9 AM to 4 PM" },
  ],
  /** As a visitor reads it. */
  oneLine: "Monday to Friday 9 AM to 7 PM, Saturday 9 AM to 4 PM (Sri Lanka time)",
} as const;

export const phones = {
  sriLanka: { display: "+94 77 185 2522", e164: "+94771852522" },
  /** Kept for clients outside Sri Lanka. Not an office. */
  international: { display: "+44 7466 368427", e164: "+447466368427" },
} as const;

export const whatsapp = {
  /** The AI agent's line: the number to hand a visitor who wants to try one. */
  agent: {
    display: "+94 76 466 2384",
    href: "https://wa.me/94764662384",
  },
} as const;

export const booking = {
  /** The 30-minute call. Every "Book a call" on the site goes here. */
  url: "https://calendly.com/shahid-arcai-_xeu/30min",
  embedUrl:
    "https://calendly.com/shahid-arcai-_xeu/30min?hide_event_type_details=1&hide_gdpr_banner=1",
  minutes: 30,
} as const;

export const socials = {
  x: "https://x.com/arc_ai_agency",
  instagram: "https://www.instagram.com/arcai_agency/",
  linkedin: "https://www.linkedin.com/company/105845719",
  facebook: "https://www.facebook.com/ARCAI.lk",
} as const;

export const socialUrls: string[] = Object.values(socials);
