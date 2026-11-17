"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./ServicesSection.css";
import { PillLink } from "./home/ui";
import ServicesCircuit from "./home/ServicesCircuit";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

// Every service ARC AI offers, in the order the home page lists them: AI
// agents and automation first, then the business systems, then websites and
// apps. `href` is the page a visitor goes to for more; a
// service without its own page yet points at the contact page.
const services = [
  {
    id: "ai-assistants",
    number: "001",
    title: "AI Assistants and Chatbots",
    href: "/services/ai-chatbots",
    description: "AI agents that answer your customers on WhatsApp, your website and Instagram.",
    features: [
      "WhatsApp agents for enquiries, orders, support and follow up",
      "Website chatbots for lead capture and FAQs",
      "Instagram DM agents for auto replies and lead capture from comments",
      "Answers in Sinhala, Tamil and English from your own business information",
      "Hands the conversation to your team when it needs a person",
    ],
  },
  {
    id: "ai-voice-agents",
    number: "002",
    title: "AI Voice Agents",
    href: "/services/ai-voice-assistants",
    description: "Voice agents that answer the phone, day and night.",
    features: [
      "Answers calls in Sinhala, Tamil and English",
      "Looks up the answer in your product and service information before it speaks",
      "Books appointments and takes down requests",
      "Transfers the caller to your team when a person is needed",
      "Call history with transcripts for every conversation",
    ],
  },
  {
    id: "workflow-automation",
    number: "003",
    title: "Workflow Automation Systems",
    href: "/services/ai-automated-workflows",
    description: "Automate repetitive tasks and streamline your business operations.",
    features: [
      "Lead capture to CRM",
      "Sales pipeline automations",
      "Client onboarding and offboarding",
      "Internal approvals and notifications",
      "Automated reporting summaries",
    ],
  },
  {
    id: "multi-agent-systems",
    number: "004",
    title: "AI Multi-Agent Systems",
    href: "/services/ai-multi-agent-systems",
    description: "Teams of AI agents that each handle one part of a job, with people in control.",
    features: [
      "Specialised agents for intake, research, drafting, checking and follow up",
      "Human approval steps wherever a decision matters",
      "Limits you set on what each agent may do on its own",
      "Every agent action logged so you can see what happened",
    ],
  },
  {
    id: "erp-systems",
    number: "005",
    title: "ERP Systems",
    href: "/contact",
    description: "One system for the whole business, built around how your company works.",
    features: [
      "Sales, stock, purchasing, finance, HR and service jobs in one place",
      "Dashboards for income, cash, receivables and stock",
      "Roles, approvals and an audit trail",
      "Month-end close and bank reconciliation",
      "An AI assistant that points out what needs attention",
    ],
  },
  {
    id: "pos-systems",
    number: "006",
    title: "POS Systems",
    href: "/contact",
    description: "Point of sale built for Sri Lankan shops.",
    features: [
      "Fast checkout with barcode, cash, card and LankaQR",
      "Keeps selling when the internet drops, then syncs on its own",
      "Stock, credit customers and shifts on one screen",
      "English, Sinhala and Tamil",
      "Takings and stock on the owner's phone",
    ],
  },
  {
    id: "smart-ecommerce",
    number: "007",
    title: "Smart E-commerce Stores",
    href: "/services/web-design-development",
    description: "Online stores that follow every order from checkout to the doorstep.",
    features: [
      "Fast checkout with cash on delivery and card payments",
      "Guest checkout and order tracking",
      "An admin panel for products, orders and stock",
      "Delivery updates for your customers",
      "Built for speed and search",
    ],
  },
  {
    id: "content-office",
    number: "008",
    title: "Content Office",
    href: "/services/ai-content-generation",
    description: "Your own AI content team, working from a one-line brief.",
    features: [
      "AI agents research, write, design and check every post",
      "Plans up to a month of content around your calendar and local holidays",
      "Nothing is published until you approve it",
      "Publishes to Instagram and Facebook",
      "Long form to short form repurposing for reels, carousels, blogs and email",
    ],
  },
  {
    id: "landing-pages",
    number: "009",
    title: "Smart Websites",
    href: "/services/web-design-development",
    description: "Websites that do more than just look good. They work for you.",
    features: [
      "AI powered chat and lead capture that qualifies visitors 24/7",
      "Smart forms that send leads to the right person or system automatically",
      "Integrated booking, payments or enquiries to streamline your operations",
      "Connected to your CRM, WhatsApp, email and other tools so nothing is manual",
      "Built for speed, SEO and conversion so you get more leads from the same traffic",
    ],
  },
  {
    id: "web-apps",
    number: "010",
    title: "Web Apps",
    href: "/services/web-apps",
    description: "Custom web based tools for your business or your clients.",
    features: [
      "Client portals for projects, onboarding or support",
      "Internal tools for tracking leads, tasks, orders or inventory",
      "Dashboards that pull data from multiple platforms into one view",
      "Role based access control for teams, partners and clients",
      "Built with scalable tech stacks and clean, documented code",
    ],
  },
  {
    id: "custom-backend",
    number: "011",
    title: "Custom Backend Systems",
    href: "/services/custom-backend",
    description: "The invisible engine that connects and powers everything.",
    features: [
      "APIs that connect your website, app and third party tools",
      "Central databases to keep your data clean and in sync",
      "Automation layers that remove manual data entry and copy paste work",
      "Secure authentication, roles and permissions for users",
      "Scalable architecture that can handle growth",
    ],
  },
  {
    id: "ai-data-processing",
    number: "012",
    title: "AI Data Processing",
    href: "/services/ai-data-processing",
    description: "Turn documents, receipts and emails into clean records in your system.",
    features: [
      "Reads PDFs, invoices, receipts and emails",
      "Supplier bills captured from a photo",
      "Data checked against your records before it is saved",
      "Anything the AI is unsure about goes to a person to confirm",
    ],
  },
  {
    id: "ai-sales-reps",
    number: "013",
    title: "AI Sales Reps (SDRs)",
    href: "/services/ai-sales-sdrs",
    description: "AI that finds prospects, writes to them and books the meeting.",
    features: [
      "Researches each prospect before writing",
      "Personalised outreach emails",
      "Follow ups until there is a reply",
      "Replies and booked meetings passed to your team",
    ],
  },
];

const ServicesSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!expandedId) return;

    const element = itemRefs.current[expandedId];
    if (!element) return;

    // Small timeout so the expand animation can start and height is updated
    const timeout = setTimeout(() => {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 250);

    return () => clearTimeout(timeout);
  }, [expandedId]);

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-content-container">
        <div className="services-headline">
          <motion.div
            className="services-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >

            <motion.div
              className="services-text-container"
              variants={headingVariants}
            >
              <h2 className="services-subtitle">How can we help</h2>
              <p className="services-title">Your business grow</p>
              <PillLink href="/services" variant="ghost" className="mt-6 self-start">
                See all services
              </PillLink>
            </motion.div>
          </motion.div>

          {/* Fills the column beside the list on wide screens, where the
              heading stays in view while the list scrolls. */}
          <div className="services-visual cream-card">
            <ServicesCircuit />
          </div>
        </div>

        <motion.div
          className="services-list cut-card [--cut:22px] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="services-item"
              data-open={expandedId === service.id}
              ref={(el) => {
                itemRefs.current[service.id] = el;
              }}
              variants={itemVariants}
            >
              <div
                className="services-question"
                role="button"
                tabIndex={0}
                aria-expanded={expandedId === service.id}
                aria-controls={`svc-panel-${service.id}`}
                onClick={() => toggleService(service.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleService(service.id);
                  }
                }}
              >
                <div className="services-number services-number-dim">
                  {service.number}
                </div>
                <p className="services-service-title">{service.title}</p>
                <div 
                  className="services-icon" 
                  aria-hidden="true"
                  style={{
                    transform: expandedId === service.id ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}
                >
                  <div className="services-plus-line"></div>
                  <div className="services-plus-line"></div>
                </div>
              </div>

              {/* The panel is always in the page, collapsed to zero height, so
                  every description and every link to a service page is in the
                  HTML a search engine reads. It used to be created only when
                  a visitor opened the row. */}
              <motion.div
                id={`svc-panel-${service.id}`}
                className="services-panel"
                initial={false}
                animate={{
                  height: expandedId === service.id ? "auto" : 0,
                  opacity: expandedId === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden={expandedId !== service.id}
              >
                <div className="services-panel-content">
                  <p className="services-description">{service.description}</p>
                  <ul className="services-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="services-feature-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <PillLink href={service.href} tabIndex={expandedId === service.id ? 0 : -1}>
                    {service.href === "/contact" ? `Ask about ${service.title}` : `More on ${service.title}`}
                  </PillLink>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
