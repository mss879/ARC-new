"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Share2, Sparkles, FileText, Zap, MessageSquare, X, Check, Laptop, Rocket, BrainCircuit, Bot, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";

// Animation Variants
const letterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.15 },
    },
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const letterVariant: Variants = {
    hidden: { y: "0.55em", opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 50,
            damping: 20
        }
    }
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

interface ServiceDetails {
    icon: React.ReactNode;
    artwork: string;
    number: string;
    title: string;
    description: string;
    tags: string[];
    link?: string;
    modalContent: {
        headline: string;
        subheadline: string;
        problem: string;
        solution: string;
        benefits: string[];
        process: string[];
        results: string;
        cta: string;
    };
}

export default function ServicesList() {
    const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

    const digitalServices: ServiceDetails[] = [
        {
            icon: <Laptop className="w-8 h-8" />,
            artwork: "smart-websites",
            number: "01",
            title: "Smart Websites",
            description: "High-converting, intelligent websites designed to capture attention and drive action. Not just a pretty face—a powerful sales engine.",
            tags: ["Conversion Optimized", "Next.js", "SEO Ready"],
            link: "/services/web-design-development",
            modalContent: {
                headline: "Turn Visitors Into Customers—Instantly",
                subheadline: "Smart websites designed to convert, not just look pretty",
                problem: "Your traffic is costing you money. Most businesses send ads to their homepage, where visitors get distracted, confused, or lost. A generic homepage converts at 2-3%. You're literally throwing 97% of your ad spend down the drain.",
                solution: "We build laser-focused smart websites with one goal: conversion. Every element—headlines, visuals, CTAs, social proof—is strategically placed to guide visitors toward taking action. No distractions. No confusion. Just results.",
                benefits: [
                    "Increase conversion rates by 300-500% compared to homepage traffic",
                    "Reduce cost-per-acquisition with pages built for specific campaigns",
                    "Fast loading speeds that keep visitors engaged (sub-2 second load times)",
                    "Mobile-first design that converts on any device",
                    "A/B testing framework built-in to continually improve performance",
                    "Clear analytics that show exactly what's working"
                ],
                process: [
                    "Deep dive into your offer, audience, and competitors",
                    "Craft compelling copy that speaks to pain points and desires",
                    "Design a conversion-optimized layout with strategic CTAs",
                    "Implement tracking pixels and analytics for full visibility",
                    "Launch with A/B testing to optimize from day one"
                ],
                results: "Our clients typically see 3-5x higher conversion rates within the first 30 days. One client went from 2.1% to 11.3% conversion rate, cutting their cost per lead by 81%.",
                cta: "Ready to stop wasting ad spend? Let's build a landing page that actually converts."
            }
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            artwork: "smart-ad-campaigns",
            number: "02",
            title: "Smart Ad Campaigns",
            description: "Data-driven advertising campaigns that find your ideal customers and scale your revenue with surgical precision.",
            tags: ["Meta Ads", "Google Ads", "ROI Focused"],
            link: "/services/smart-ad-campaigns",
            modalContent: {
                headline: "Stop Burning Money on Ads That Don't Convert",
                subheadline: "Data-driven campaigns that find your customers and make them buy",
                problem: "You're spending thousands on ads but getting mediocre results. Why? Most agencies spray and pray—targeting everyone and converting no one. They lack proper tracking, don't run tests, and have no clue what's actually working. You deserve better.",
                solution: "We build smart ad campaigns powered by AI and real data. We identify your highest-value audience segments, craft compelling ad creative that stops the scroll, and continuously optimize based on performance. Every dollar is tracked. Every campaign is tested. Nothing is left to chance.",
                benefits: [
                    "Reduce cost-per-acquisition by 40-70% through precise targeting",
                    "Reach only the people most likely to buy from you",
                    "AI-powered optimization that improves results automatically",
                    "Full transparency with real-time dashboards showing ROI",
                    "Multi-platform campaigns (Facebook, Instagram, Google, LinkedIn)",
                    "Creative testing to find what resonates with your audience"
                ],
                process: [
                    "Audience research and ideal customer profiling",
                    "Competitor analysis to identify gaps and opportunities",
                    "Campaign strategy and budget allocation",
                    "Ad creative development with multiple variants",
                    "Launch with conversion tracking and attribution modeling",
                    "Weekly optimization based on performance data"
                ],
                results: "Our e-commerce clients average 4.2x ROAS. One B2B client reduced their cost-per-lead from $143 to $38 while increasing lead quality by 60%.",
                cta: "Ready to make your ads work harder? Let's build campaigns that actually deliver ROI."
            }
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            artwork: "web-apps",
            number: "03",
            title: "Web Apps",
            description: "Custom web applications built with modern tech stacks to solve complex business problems and streamline operations.",
            tags: ["SaaS", "Internal Tools", "Scalable"],
            link: "/services/web-apps",
            modalContent: {
                headline: "Build Software That Scales With Your Business",
                subheadline: "Custom web applications that solve real problems and drive growth",
                problem: "Off-the-shelf software doesn't fit your unique business needs. You're stuck with clunky workarounds, manual processes, and tools that slow you down instead of speeding you up. Meanwhile, your team is frustrated and your growth is bottlenecked.",
                solution: "We build custom web applications tailored exactly to how your business operates. From internal tools that automate workflows to customer-facing platforms that enhance experience, we create software that becomes your competitive advantage.",
                benefits: [
                    "Eliminate manual processes and save hundreds of hours monthly",
                    "Built specifically for your workflows—no compromises",
                    "Scalable architecture that grows with your business",
                    "Modern, intuitive interfaces your team will actually love using",
                    "Real-time features for instant updates and collaboration",
                    "Seamless integration with your existing tools and systems"
                ],
                process: [
                    "Discovery session to understand your business and pain points",
                    "User flow mapping and feature prioritization",
                    "Custom design and prototype for your approval",
                    "Agile development with weekly progress updates",
                    "Testing, refinement, and team training",
                    "Launch support and ongoing maintenance"
                ],
                results: "One client automated their entire order fulfillment process, reducing processing time from 4 hours to 8 minutes per order. Another built a custom CRM that increased sales team productivity by 156%.",
                cta: "Ready to build software that gives you an unfair advantage? Let's talk about your custom solution."
            }
        },
        {
            icon: <Search className="w-8 h-8" />,
            artwork: "smart-funnels",
            number: "04",
            title: "Smart Funnels",
            description: "Intelligent systems that nurture leads from curiosity to conversion on autopilot, 24/7/365.",
            tags: ["Automation", "Email Marketing", "Lead Nurturing"],
            link: "/services/smart-funnels",
            modalContent: {
                headline: "Turn Leads Into Customers on Autopilot",
                subheadline: "Intelligent funnels that nurture, qualify, and convert while you sleep",
                problem: "Leads come in, but most disappear without buying. You follow up manually (maybe), send generic emails (that get ignored), and watch 80% of your potential customers slip away. You're losing sales simply because you don't have a system.",
                solution: "We build smart funnels that automatically guide prospects from awareness to purchase. Personalized email sequences, behavior-based triggers, and strategic touchpoints that nurture leads until they're ready to buy. It runs 24/7, even when you're offline.",
                benefits: [
                    "Convert 3-5x more leads with automated nurture sequences",
                    "Save 20+ hours per week on manual follow-ups",
                    "Behavior-based automation that personalizes each journey",
                    "Qualify leads automatically before they hit your sales team",
                    "Recover abandoned carts and re-engage cold prospects",
                    "Full visibility into what's working with conversion tracking"
                ],
                process: [
                    "Map your customer journey from awareness to purchase",
                    "Identify key touchpoints and conversion opportunities",
                    "Create compelling email sequences and content",
                    "Build automation rules based on behavior and engagement",
                    "Integrate with your CRM and existing tools",
                    "Optimize based on performance data and feedback"
                ],
                results: "Clients see an average 43% increase in lead-to-customer conversion rate. One SaaS client recovered $127K in abandoned signups in 90 days with a single automated sequence.",
                cta: "Ready to stop chasing leads and start converting them automatically? Let's build your smart funnel."
            }
        },
        {
            icon: <BrainCircuit className="w-8 h-8" />,
            artwork: "custom-backend",
            number: "05",
            title: "Custom Backend Systems",
            description: "Robust, secure backend infrastructure designed for scale, speed, and rock-solid reliability.",
            tags: ["API Development", "Cloud Infrastructure", "Security"],
            link: "/services/custom-backend",
            modalContent: {
                headline: "Build the Engine That Powers Your Business",
                subheadline: "Secure, scalable backend infrastructure that never breaks",
                problem: "Your current backend is fragile. It crashes under load, can't handle growth, and every new feature requires weeks of development. Security vulnerabilities keep you up at night. You need infrastructure you can trust.",
                solution: "We architect and build robust backend systems designed for scale and security. Clean APIs, optimized databases, cloud-native infrastructure, and security best practices built in from day one. Your business runs on a foundation that won't crack under pressure.",
                benefits: [
                    "Handle 10x traffic spikes without breaking a sweat",
                    "Reduce server costs by 40-60% through optimization",
                    "Bank-level security with encryption and compliance built-in",
                    "99.9% uptime guaranteed with redundancy and monitoring",
                    "RESTful APIs that make integration seamless",
                    "Documentation and support for your dev team"
                ],
                process: [
                    "Audit current infrastructure and identify bottlenecks",
                    "Design scalable architecture and database schema",
                    "Build secure APIs with authentication and rate limiting",
                    "Implement cloud infrastructure (AWS, Azure, or GCP)",
                    "Set up monitoring, logging, and automated backups",
                    "Handoff with full documentation and training"
                ],
                results: "One client reduced API response times from 3.2s to 180ms—a 94% improvement. Another scaled from 1,000 to 50,000 daily users without adding a single server.",
                cta: "Ready for infrastructure that scales with your ambition? Let's build a backend that never lets you down."
            }
        },
        {
            icon: <Palette className="w-8 h-8" />,
            artwork: "brand-kits",
            number: "06",
            title: "Brand Kits",
            description: "Comprehensive visual identities that command authority and distinguish you from the competition.",
            tags: ["Visual Identity", "Strategy", "Guidelines"],
            link: "/services/branding",
            modalContent: {
                headline: "Stop Looking Amateur. Build a Brand That Commands Premium Prices",
                subheadline: "Professional brand identity that makes you unforgettable",
                problem: "Your brand looks like everyone else's. Generic logo, inconsistent colors, no clear identity. Customers don't remember you, don't trust you, and definitely won't pay premium prices. Your visual identity is costing you sales.",
                solution: "We create comprehensive brand kits that make you stand out and command respect. Strategic logo design, cohesive color palettes, custom typography, and detailed brand guidelines that ensure consistency everywhere you show up.",
                benefits: [
                    "Premium brand identity that justifies higher prices",
                    "Stand out from competitors with distinctive visual language",
                    "Build instant trust and recognition with consistent branding",
                    "Complete brand guidelines for flawless execution",
                    "Files optimized for print, web, and social media",
                    "Unlimited revisions until you're 100% satisfied"
                ],
                process: [
                    "Brand discovery to understand your values and audience",
                    "Competitor analysis and positioning strategy",
                    "Multiple logo concepts with strategic rationale",
                    "Color palette, typography, and visual elements",
                    "Brand guidelines document with usage examples",
                    "Complete file package in all formats you'll need"
                ],
                results: "One consultant tripled their rates after rebranding. Another startup landed $2M in funding because their brand made them look like an established player from day one.",
                cta: "Ready to build a brand that makes you money? Let's create an identity you're proud to show off."
            }
        }
    ];

    const aiServices: ServiceDetails[] = [
        {
            icon: <Search className="w-8 h-8" />,
            artwork: "consulting-audits",
            number: "01",
            title: "Consulting & Automation Audits",
            description: "Expert guidance to map your current processes and identify the exact areas where AI will drive the highest ROI.",
            tags: ["Strategy", "Roadmapping", "Process Audit"],
            link: "/services/consulting-audits",
            modalContent: {
                headline: "Stop Guessing. Build a Strategic AI Roadmap.",
                subheadline: "We find the bottlenecks costing you money and map the exact AI systems to solve them",
                problem: "You know AI can help your business, but you don't know where to start. Buying off-the-shelf software leads to disjointed systems that your team hates using, creating more work instead of less.",
                solution: "We shadow your operations, interview your team, and map your entire business workflow. We then deliver a clear, actionable blueprint showing exactly where AI integration will save hours and generate revenue.",
                benefits: [
                    "Identify hidden inefficiencies draining your resources",
                    "Prioritize AI investments based on immediate ROI",
                    "Stop buying bloated software you only use 10% of",
                    "Align your team on the future of your company's tech stack",
                    "Get a clear 3-to-6 month implementation roadmap"
                ],
                process: [
                    "Process mapping and team interviews",
                    "Tech stack audit and integration review",
                    "Identification of manual bottlenecks",
                    "Solution design and AI tool selection",
                    "Roadmap presentation with ROI estimates"
                ],
                results: "We recently audited a consultancy, identified 40 hours of weekly manual admin work, and provided a roadmap that eliminated it entirely within 3 weeks.",
                cta: "Ready to find out exactly how much time AI can save you? Schedule an audit."
            }
        },
        {
            icon: <Bot className="w-8 h-8" />,
            artwork: "ai-chatbots",
            number: "02",
            title: "Website AI Agents (Engage)",
            description: "Smart website agents that provide 24/7 support, answer FAQs instantly, and qualify leads while you sleep.",
            tags: ["Lead Gen", "24/7 Support", "Website AI"],
            link: "/services/ai-chatbots",
            modalContent: {
                headline: "Never Miss a Lead. Answer Every Question. 24/7.",
                subheadline: "Deploy an AI agent trained exclusively on your business data to capture and convert.",
                problem: "Visitors land on your site, have a quick question, but get no immediate answer. They bounce to a competitor. Your human support team is bogged down answering the same 5 questions every single day.",
                solution: "We build custom AI agents fed directly from your website, PDFs, and knowledge base. They converse naturally, instantly answer queries, capture contact info, and book meetings directly onto your calendar.",
                benefits: [
                    "Engage website visitors 24/7/365",
                    "Dramatically reduce support ticket volume",
                    "Capture leads even when your office is closed",
                    "Instantly qualify prospects before they reach sales",
                    "Multi-platform: Deploy to Website, WhatsApp, or Instagram"
                ],
                process: [
                    "Knowledge base compilation (URLs, PDFs, Docs)",
                    "Bot persona design and prompt engineering",
                    "Integration with your calendar and CRM",
                    "Sandbox testing with tricky edge cases",
                    "Live deployment and continuous learning loop"
                ],
                results: "Our Engage agents typically convert 3x more website visitors into booked meetings than standard web forms alone.",
                cta: "Ready to turn your website into a 24/7 sales rep? Let's build your AI Agent."
            }
        },
        {
            icon: <Zap className="w-8 h-8" />,
            artwork: "ai-automated-workflows",
            number: "03",
            title: "Automated Workflows (Flow)",
            description: "Connect your apps and eliminate repetitive copy-paste tasks. Data moves seamlessly across your business.",
            tags: ["Make/n8n", "Zapier", "API Connections"],
            link: "/services/ai-automated-workflows",
            modalContent: {
                headline: "Stop Doing Work a Robot Could Do",
                subheadline: "Intelligent automation that syncs data across your tools automatically.",
                problem: "Your team is acting like human API connectors. Moving data from Stripe to your CRM, emailing clients manually when a form is filled, and updating Google Sheets is soul-crushing busywork.",
                solution: "We build complex, resilient automated workflows using Make, Zapier, or n8n. If an event happens in App A, we guarantee it securely updates App B, C, and D without a single click from your team.",
                benefits: [
                    "Eliminate 15-30 hours of manual data entry weekly",
                    "Zero human error in repetitive processes",
                    "Instant response times for client triggers",
                    "Connect legacy systems to modern tools",
                    "Scale operations without hiring administrative bloat"
                ],
                process: [
                    "Map the existing manual data flow",
                    "Design the automated logic sequence",
                    "Build API connections and webhooks",
                    "Implement error handling and edge cases",
                    "Deploy and monitor for 99.9% uptime"
                ],
                results: "One client removed entirely their need for a full-time admin assistant by automating their contract generation and signing flow.",
                cta: "Ready to buy back your time? Let's automate the boring stuff."
            }
        },
        {
            icon: <FileText className="w-8 h-8" />,
            artwork: "ai-data-processing",
            number: "04",
            title: "AI Data Processing",
            description: "Automatically extract clean, structured data from messy PDFs, receipts, and emails directly into your database.",
            tags: ["Parsing", "OCR", "Data Extraction"],
            link: "/services/ai-data-processing",
            modalContent: {
                headline: "Turn Messy Documents into Clean Data Instantly",
                subheadline: "Let AI read, understand, and categorize your invoices, forms, and emails.",
                problem: "You receive hundreds of invoices, forms, or emails in different formats. Someone has to sit there, read them, and type the data into your system. It's slow, expensive, and prone to typos.",
                solution: "We implement Vision and NLP models that 'read' incoming documents just like a human would, intelligently extract precisely the fields you need (even from photos or handwritten notes), and push structured JSON data into your software.",
                benefits: [
                    "Process documents in seconds, not hours",
                    "Handle variable layouts (every vendor invoice looks different)",
                    "Reduce manual entry errors to near-zero",
                    "Free up finance and admin teams for high-level work",
                    "Process thousands of documents in parallel"
                ],
                process: [
                    "Analyze document samples and required fields",
                    "Configure AI vision and text extraction models",
                    "Set up the ingestion pipeline (e.g., specific email inbox)",
                    "Format output payload for your database",
                    "Test with high-variance documents"
                ],
                results: "A logistics client completely automated their waybill data entry, saving over 40 hours a week and removing a 24-hour processing bottleneck.",
                cta: "Stop typing. Start extracting. Let's process your data automatically."
            }
        },
        {
            icon: <Palette className="w-8 h-8" />,
            artwork: "ai-content-generation",
            number: "05",
            title: "AI Content Generation",
            description: "Produce SEO-optimized articles, newsletters, and social copy scaled across multiple tone-of-voice profiles.",
            tags: ["SEO", "Copywriting", "At Scale"],
            link: "/services/ai-content-generation",
            modalContent: {
                headline: "Create a Month of Content in One Afternoon",
                subheadline: "AI-powered content engines that sound exactly like your brand.",
                problem: "Content marketing works, but writing it is exhausting. You hire writers who miss deadlines, don't understand your voice, and charge $500 an article. Your pipeline runs dry.",
                solution: "We build custom content generation pipelines. You input a topic, and the system researches it, outlines it, and drafts it in your precise brand voice, applying SEO best practices at every step.",
                benefits: [
                    "Produce 20-30 high-quality articles per month",
                    "Maintain consistent brand voice with fine-tuned models",
                    "Built-in SEO optimization (Target keywords, LSI)",
                    "Rapidly generate variations for A/B testing",
                    "Dramatically reduce content marketing costs"
                ],
                process: [
                    "Brand voice extraction from your past best content",
                    "Prompt chain design (Research -> Outline -> Draft -> Edit)",
                    "Integration with your CMS (WordPress, Webflow, Shopify)",
                    "Human-in-the-loop review workflow setup",
                    "Publishing test and refinement"
                ],
                results: "One B2B client went from 2 blog posts per month to 25, increasing organic traffic by 412% in 6 months.",
                cta: "Ready to dominate the search results? Build your content engine."
            }
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            artwork: "ai-voice-assistants",
            number: "06",
            title: "AI Voice Assistants (Qualify)",
            description: "Human-sounding AI voice agents that call inbound leads within 5 minutes or handle your customer support line.",
            tags: ["Inbound Calls", "Outbound SDR", "Voice AI"],
            link: "/services/ai-voice-assistants",
            modalContent: {
                headline: "The AI Receptionist That Never Sleeps. Or Takes Breaks.",
                subheadline: "Deploy human-sounding voice agents to call leads instantly and answer customer queries.",
                problem: "Speed to lead is everything. If you don't call a web lead within 5 minutes, your close rate drops by 80%. But having human reps dial leads 24/7 is impossible, and missing customer calls costs you trust.",
                solution: "We build state-of-the-art Voice AI agents with ultra-low latency. They sound remarkably human, can handle interruptions, understand nuance, qualify the lead using your script, and book them straight to your calendar.",
                benefits: [
                    "Call 100% of inbound leads within 60 seconds",
                    "Handle infinite simultaneous inbound calls",
                    "Never put a customer on hold again",
                    "Filter out tire-kickers and pass only hot leads to humans",
                    "Post-call summaries dropped instantly into your CRM"
                ],
                process: [
                    "Scripting and call logic tree design",
                    "Voice cloning or selection from premium models",
                    "Connecting telephony (Twilio/Bland/Vapi)",
                    "Webhook integration to CRM for post-call logging",
                    "Live call testing and interruption fine-tuning"
                ],
                results: "A service provider saw a 45% lift in booked appointments simply because the AI called every lead instantly, catching them while their interest was highest.",
                cta: "Ready to answer every call and dial every lead? Let's deploy your voice agent."
            }
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            artwork: "ai-sales-sdrs",
            number: "07",
            title: "AI Sales Reps (SDRs)",
            description: "Automated prospectors that research targets, write hyper-personalized cold emails, and manage follow-ups.",
            tags: ["Outbound", "Cold Email", "Research"],
            link: "/services/ai-sales-sdrs",
            modalContent: {
                headline: "Scale Your Outbound Without Hiring a Floor of SDRs",
                subheadline: "AI agents that research prospects and write 1-to-1 personalized emails at scale.",
                problem: "Generic cold emails don't work anymore. To get replies, you need deep personalization. But having humans research a company's recent news, tech stack, and pain points takes 15 minutes per email. You can't scale it.",
                solution: "We build AI prospectors. You feed it a list of leads; the AI scrapes their LinkedIn, company website, and recent news, then drafts a hyper-personalized email connecting their exact situation to your offer. It sends, follows up, and logs replies.",
                benefits: [
                    "Achieve 1-to-1 personalization at massive scale",
                    "Increase open and reply rates exponentially",
                    "Send 1,000 highly researched emails a day automatically",
                    "Detect out-of-office replies and handle objections",
                    "Free your human closers to only take booked meetings"
                ],
                process: [
                    "Data enrichment workflow setup (Apollo/Clay/LinkedIn)",
                    "Scraping and AI analysis prompts configuration",
                    "Email copywriting frameworks development",
                    "Sending infrastructure setup (warming up domains)",
                    "A/B testing subject lines and angles"
                ],
                results: "Our AI SDR pipelines regularly achieve 8-12% positive reply rates on cold traffic because the personalization is indistinguishable from deep human research.",
                cta: "Ready to fill your pipeline with targeted meetings? Hire an AI SDR."
            }
        },
        {
            icon: <BrainCircuit className="w-8 h-8" />,
            artwork: "ai-multi-agent-systems",
            number: "08",
            title: "AI Multi-Agent Systems (Command)",
            description: "Complete organizational intelligence. Multiple specialized AI agents working together to run entire departments.",
            tags: ["Orchestration", "Enterprise", "Command Tier"],
            link: "/services/ai-multi-agent-systems",
            modalContent: {
                headline: "The Full AI Revenue System Architecture",
                subheadline: "Specialized AI agents working together as a cohesive digital workforce.",
                problem: "Individual automations are great, but they are isolated. For true transformation, you don't just need a chatbot—you need a chat agent that talks to a research agent, that passes data to an analysis agent, that drafts a report for a human executive.",
                solution: "We build LangChain/CrewAI multi-agent architectures. We create 'manager' agents that delegate tasks to 'worker' agents (e.g., a researcher, a writer, a reviewer), collaborating in real-time to execute wildly complex, multi-step organizational tasks.",
                benefits: [
                    "Complete digital transformation of core departments",
                    "Intelligent error correction (Agents checking other Agents)",
                    "End-to-end automation of previously 'un-automatable' tasks",
                    "Executive dashboards granting total visibility",
                    "Massive operational leverage for lean teams"
                ],
                process: [
                    "System architecture and capability mapping",
                    "Individual agent persona and tool definition",
                    "Orchestration layer and state memory built",
                    "Security, guardrails, and human-intervention loops",
                    "Phased organizational rollout and training"
                ],
                results: "The ultimate scaling lever. A 'Command' tier system allows a 5-person company to output the operational capacity and revenue of a 50-person agency.",
                cta: "Ready for the pinnacle of AI automation? Let's architect your system."
            }
        }
    ];

    const ServiceCard = ({ service }: { service: ServiceDetails }) => {
        const handleClick = (e: React.MouseEvent) => {
            if (!service.link) {
                e.preventDefault();
                setSelectedService(service);
            }
        };

        return (
            <motion.div variants={itemVariants} className="h-full">
                <Link
                    href={service.link || "#"}
                    onClick={handleClick}
                    className="cut-card [--cut:22px] relative group flex h-full flex-col [--cut-line:rgba(27,26,23,0.1)] bg-paper-white/70 p-3 transition-colors duration-300 hover:[--cut-line:rgba(255,73,37,0.4)] hover:bg-paper-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember-deep sm:p-4"
                >
                    <div
                        aria-hidden="true"
                        className="cut-card [--cut:14px] relative isolate grid h-44 shrink-0 place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#F9DBCD,#F3EBE2_74%)] sm:h-48"
                    >
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#B62A0B_1px,transparent_1px)] bg-[size:18px_18px] opacity-[0.10]" />
                        <Image
                            src={`/service-icons/${service.artwork}.webp`}
                            alt=""
                            width={432}
                            height={360}
                            unoptimized
                            className="h-40 w-48 max-w-full object-contain drop-shadow-[0_10px_12px_rgba(94,45,20,0.14)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-1 sm:h-[180px] sm:w-[216px]"
                        />
                        <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full border border-ink/10 bg-paper-white/80 text-ember-deep transition-colors duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
                            <ArrowUpRight className="size-4" />
                        </span>
                    </div>

                    <div className="flex flex-1 flex-col px-3 pb-4 pt-6 sm:px-4 sm:pb-5">
                        <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-ember-deep sm:text-[1.75rem] sm:leading-tight">
                            {service.title}
                        </h3>
                        <p className="mb-6 text-sm font-medium leading-relaxed text-ink-soft sm:text-base">
                            {service.description}
                        </p>
                        <div className="mt-auto flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                                <span key={tag} className="rounded-md border border-ember/10 bg-ember/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ember-deep">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    };

    return (
        <div className="home-cream min-h-screen bg-transparent text-ink selection:bg-ember/30 selection:text-orange-200">
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-ember/[0.06] rounded-full blur-[120px] mix-blend-screen opacity-30 hidden" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ember/[0.06] rounded-full blur-[120px] mix-blend-screen opacity-30 hidden hidden" />
            </div>

            <div className="relative z-10 w-full overflow-hidden">
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 w-full">
                    {/* The Dark Seamless Fade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper z-0" />
                    
                    {/* Geometric grid mesh overlay */}
                    <div
                        className="absolute inset-0 opacity-20 z-0 mix-blend-screen"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 73, 37, 0.15) 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Left Floating Render (Higher on Mobile) */}
                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute block left-[-15%] lg:left-[5%] top-[20%] lg:top-[30%] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] opacity-40 lg:opacity-90 z-0 pointer-events-none"
                    >
                        <Image 
                            src="/services-1.webp" 
                            alt="Digital Services Infrastructure" 
                            fill 
                            className="object-contain drop-shadow-2xl" 
                            priority 
                        />
                    </motion.div>

                    {/* Right Floating Render (Lower on Mobile) */}
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute block right-[-10%] lg:right-[5%] top-[75%] lg:top-[45%] w-[180px] h-[180px] lg:w-[260px] lg:h-[260px] opacity-40 lg:opacity-90 z-0 pointer-events-none"
                    >
                        <Image 
                            src="/services-2.webp" 
                            alt="AI Automation Systems" 
                            fill 
                            className="object-contain drop-shadow-2xl" 
                            priority 
                        />
                    </motion.div>

                    <div className="relative z-20 max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-8"
                        >
                            <span className="px-6 py-2 rounded-full bg-white/70 text-xs font-bold tracking-widest uppercase text-ink-soft border border-ink/10 flex items-center gap-2 mx-auto w-max">
                                <Search className="w-4 h-4 text-ember-deep animate-[pulse_2s_linear_infinite]" />
                                Explore Future Tech
                            </span>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="show"
                            variants={letterContainer}
                            className="mb-8"
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-[-0.035em] text-ink mix-blend-lighten">
                                {["OUR", "SERVICES"].map((word, i) => (
                                    <span key={i} className="block mb-2">
                                        {word.split("").map((char, j) => (
                                            <motion.span
                                                key={j}
                                                className="inline-block"
                                                variants={letterVariant}
                                            >
                                                {char === " " ? "\u00A0" : char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="text-xl md:text-2xl text-ink-soft max-w-3xl mx-auto mb-12"
                        >
                            From digital marketing to AI-powered solutions, we deliver comprehensive services
                            that drive growth and transform your business securely.
                        </motion.p>
                    </div>
                </section>

                {/* AI Services Grid (Showcased First) */}
                <section className="py-24 px-4 md:px-8 border-t border-ink/10 bg-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ember/20 via-paper to-paper pointer-events-none mix-blend-screen hidden" />
                    <div className="max-w-[1400px] mx-auto relative z-10 w-full">
                        <div id="ai-services" className="flex scroll-mt-28 flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                            <div>
                                <h2 className="text-sm font-medium text-ember-deep tracking-[0.3em] mb-4">Core Competency</h2>
                                <h3 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-ink tracking-tight">
                                    Artificial <span className="text-ember-ink">Intelligence.</span>
                                </h3>
                            </div>
                            <p className="text-ink-soft text-base md:text-lg max-w-sm md:text-right font-medium leading-relaxed">
                                Unfair advantages built in code. Scale your revenue and cut operational bloat instantly.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
                        >
                            {aiServices.map((service) => (
                                <ServiceCard key={service.artwork} service={service} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Digital Services Grid (Showcased Second) */}
                <section className="py-24 px-4 md:px-8 bg-transparent relative w-full">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-ember/20 via-paper to-paper pointer-events-none mix-blend-screen hidden" />
                    <div className="max-w-[1400px] mx-auto relative z-10 w-full border-t border-ink/10 pt-24">
                        <div id="digital-services" className="flex scroll-mt-28 flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                            <div>
                                <h2 className="text-sm font-medium text-ember-deep tracking-[0.3em] mb-4">Foundation</h2>
                                <h3 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-ink tracking-tight">
                                    Digital <span className="text-ember-ink">Infrastructure.</span>
                                </h3>
                            </div>
                            <p className="text-ink-soft text-base md:text-lg max-w-sm md:text-right font-medium leading-relaxed">
                                High-performance software, websites, and funnels engineered to convert traffic into cash.
                            </p>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
                        >
                            {digitalServices.map((service) => (
                                <ServiceCard key={service.artwork} service={service} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Dark Custom CTA section */}
                <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden bg-transparent border-t border-ink/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-ember/5 via-transparent to-ember/5" />
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto relative z-10"
                    >
                        <h2 className="text-5xl md:text-7xl font-medium mb-8 text-ink tracking-[-0.035em]">
                            Ready to <span className="text-ember-ink">Scale?</span>
                        </h2>
                        <p className="text-xl text-ink-soft mb-10 font-medium leading-relaxed">
                            Stop guessing and start growing. Let's discuss how we can transform your operations today.
                        </p>
                        <Link href="/contact">
                            <button className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] group relative px-10 py-5 bg-ember hover:bg-[#FF5C3A] transition-all duration-300">
                                <span className="relative z-10 flex items-center gap-2 text-ink font-bold tracking-widest text-sm uppercase">
                                    START A PROJECT
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </button>
                        </Link>
                    </motion.div>
                </section>

            </div>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-xl bg-black/80"
                    >
                        {/* Overlay Close */}
                        <div
                            className="absolute inset-0"
                            onClick={() => setSelectedService(null)}
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="cut-card [--cut:18px] relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-transparent [--cut-line:rgba(27,26,23,0.1)] custom-scrollbar"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="sticky top-6 right-6 float-right z-10 p-3 bg-paper/50 hover:bg-white rounded-full border border-ink/10 transition-colors"
                            >
                                <X className="w-5 h-5 text-ink" />
                            </button>

                            <div className="p-8 md:p-12 relative z-0">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row gap-8 mb-12">
                                    <div className="shrink-0">
                                        <div className="w-24 h-24 rounded-2xl bg-ember/10 flex items-center justify-center text-ember-deep border border-ember/20">
                                            {selectedService.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-ember-deep font-bold tracking-widest text-sm uppercase">Service {selectedService.number}</span>
                                            <div className="h-px flex-1 bg-gradient-to-r from-ember/50 to-transparent" />
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-medium text-ink mb-4 tracking-[-0.035em]">{selectedService.title}</h2>
                                        <h3 className="text-xl md:text-2xl text-ink-soft font-medium leading-relaxed">
                                            {selectedService.modalContent.headline}
                                        </h3>
                                    </div>
                                </div>

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                    {/* Problem */}
                                    <div className="cut-card [--cut:18px] relative p-8 bg-transparent [--cut-line:rgba(239,68,68,0.1)] hover:[--cut-line:rgba(239,68,68,0.2)] transition-colors">
                                        <h4 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-3">
                                            <span className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                                            The Challenge
                                        </h4>
                                        <p className="text-ink-soft leading-relaxed font-medium">
                                            {selectedService.modalContent.problem}
                                        </p>
                                    </div>

                                    {/* Solution */}
                                    <div className="cut-card [--cut:18px] relative p-8 bg-transparent [--cut-line:rgba(255,73,37,0.1)] hover:[--cut-line:rgba(255,73,37,0.2)] transition-colors">
                                        <h4 className="text-lg font-bold text-ember-deep mb-4 flex items-center gap-3">
                                            <span className="w-3 h-3 rounded-full bg-ember animate-pulse" />
                                            Our Solution
                                        </h4>
                                        <p className="text-ink-soft leading-relaxed font-medium">
                                            {selectedService.modalContent.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits & Process */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                                    <div>
                                        <h4 className="text-xl font-bold text-ink mb-8 flex items-center gap-3">
                                            <Check className="w-6 h-6 text-ember-ink" />
                                            Key Benefits
                                        </h4>
                                        <div className="space-y-4">
                                            {selectedService.modalContent.benefits.map((benefit, i) => (
                                                <div key={i} className="cut-card [--cut:14px] relative flex items-start gap-4 p-5 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] hover:bg-white hover:[--cut-line:rgba(27,26,23,0.3)] transition-all">
                                                    <div className="w-2 h-2 rounded-full bg-ember mt-2 shrink-0" />
                                                    <span className="text-base text-ink-soft font-medium leading-relaxed">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-bold text-ink mb-8 flex items-center gap-3">
                                            <Sparkles className="w-6 h-6 text-ember-ink" />
                                            The Process
                                        </h4>
                                        <div className="relative border-l border-ink/10 ml-4 space-y-10 py-2">
                                            {selectedService.modalContent.process.map((step, i) => (
                                                <div key={i} className="relative pl-8">
                                                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-ink/[0.05] border-2 border-ember" />
                                                    <span className="block text-xs font-bold text-ember-deep mb-2 tracking-widest uppercase">STEP 0{i + 1}</span>
                                                    <span className="text-base text-ink-soft font-medium leading-relaxed block">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Results & CTA */}
                                <div className="cut-card [--cut:18px] p-10 bg-gradient-to-br from-ember/10 to-ember/5 [--cut-line:rgba(255,73,37,0.2)] text-center relative overflow-hidden">
                                    
                                    <h4 className="text-sm font-bold tracking-widest text-ember-deep mb-6 uppercase">Proven Results</h4>
                                    <p className="text-xl md:text-2xl text-ink max-w-2xl mx-auto mb-10 font-medium leading-relaxed italic">
                                        "{selectedService.modalContent.results}"
                                    </p>

                                    <div className="h-px w-full bg-gradient-to-r from-transparent via-ink/5 to-transparent mb-10" />

                                    <h4 className="text-2xl md:text-4xl font-semibold text-ink mb-8 tracking-tight">
                                        {selectedService.modalContent.cta}
                                    </h4>

                                    <Link href="/contact" onClick={() => setSelectedService(null)}>
                                        <button className="cut-btn [--cut:12px] relative px-10 py-5 bg-white text-ink font-bold uppercase tracking-widest hover:bg-neutral-200 hover:scale-[1.02] transition-all duration-300">
                                            Let's Talk Business
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
