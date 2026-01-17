"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Share2, Sparkles, FileText, Zap, MessageSquare, X, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const letterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.04, delayChildren: 0.15 },
    },
};

const letterVariant: Variants = {
    hidden: { y: "0.55em", opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

interface ServiceDetails {
    icon: React.ReactNode;
    number: string;
    title: string;
    description: string;
    tags: string[];
    link?: string; // Enhanced validation: Added optional link for direct navigation
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
            icon: <Code2 className="w-8 h-8" />,
            number: "001",
            title: "Smart Websites",
            description: "High-converting smart websites designed to capture attention and drive action with compelling design and strategic messaging.",
            tags: ["Conversion Optimization", "A/B Testing", "Lead Generation", "Mobile-First"],
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
            icon: <Share2 className="w-8 h-8" />,
            number: "002",
            title: "Smart Ad Campaigns",
            description: "Targeted advertising campaigns powered by data and AI that reach your ideal audience and maximize ROI across all platforms.",
            tags: ["Facebook Ads", "Instagram Ads", "Google Ads", "Analytics"],
            link: "/services/social-media",
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
            icon: <Sparkles className="w-8 h-8" />,
            number: "003",
            title: "Web Apps",
            description: "Custom web applications built with modern technologies to solve complex business problems and enhance user experience.",
            tags: ["React/Next.js", "Real-time Features", "Scalable Architecture", "API Integration"],
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
            icon: <Zap className="w-8 h-8" />,
            number: "004",
            title: "Smart Funnels",
            description: "Intelligent sales funnels that guide prospects through the buyer journey with personalized experiences and automated follow-ups.",
            tags: ["Marketing Automation", "Lead Nurturing", "Conversion Tracking", "Email Sequences"],
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
            icon: <Code2 className="w-8 h-8" />,
            number: "005",
            title: "Custom Backend Systems",
            description: "Robust backend solutions and APIs tailored to your business needs, ensuring security, scalability, and performance.",
            tags: ["RESTful APIs", "Database Design", "Cloud Infrastructure", "Security"],
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
            number: "006",
            title: "Brand Kits",
            description: "Comprehensive brand identity packages including logos, color schemes, typography, and guidelines to ensure consistency.",
            tags: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"],
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
            icon: <FileText className="w-8 h-8" />,
            number: "007",
            title: "AI Content Generation",
            description: "Seamless content creation that generates captivating, high-quality content aligned with your brand voice and strategy.",
            tags: ["Blog Posts", "Social Media", "SEO Content", "Multi-Language"],
            link: "/services/ai-content-generation",
            modalContent: {
                headline: "Create a Month of Content in One Afternoon",
                subheadline: "AI-powered content that sounds like you, ranks on Google, and converts",
                problem: "Content marketing works, but it's exhausting. Blog posts, social media, emails, ad copy—it never ends. You hire writers who miss deadlines, don't understand your voice, and charge $500 per article. Meanwhile, your content calendar is empty and your competitors are dominating.",
                solution: "Our AI content generation system creates high-quality, on-brand content at scale. Trained on your voice and industry, it produces blog posts, social media content, email sequences, and ad copy that actually converts. Human oversight ensures quality, AI provides speed.",
                benefits: [
                    "Produce 20-30 high-quality articles per month at a fraction of the cost",
                    "Maintain consistent brand voice across all content",
                    "SEO-optimized content that ranks on Google",
                    "Multi-language support to reach global audiences",
                    "Social media content that engages and converts",
                    "Content calendar planned and executed automatically"
                ],
                process: [
                    "Brand voice analysis and content strategy session",
                    "AI model training on your existing content and guidelines",
                    "Content calendar planning based on your goals",
                    "AI generates drafts, humans review and refine",
                    "SEO optimization and keyword integration",
                    "Publishing and performance tracking"
                ],
                results: "One B2B client went from 2 blog posts per month to 25, increasing organic traffic by 412% in 6 months. Another saved $8,400 monthly on freelance writers while improving content quality.",
                cta: "Ready to dominate with content? Let's build your AI content engine."
            }
        },
        {
            icon: <Zap className="w-8 h-8" />,
            number: "008",
            title: "Automated Workflows",
            description: "Intelligent automation that streamlines repetitive tasks, improves efficiency, and frees your team to focus on growth.",
            tags: ["Process Automation", "Integrations", "Task Management", "24/7 Operations"],
            link: "/services/ai-automated-workflows",
            modalContent: {
                headline: "Stop Doing Work a Robot Could Do",
                subheadline: "Intelligent automation that handles repetitive tasks while you focus on growth",
                problem: "Your team is drowning in busy work. Data entry, email routing, report generation, customer onboarding—tasks that eat hours but create zero value. Your best people are doing monkey work instead of moving the business forward.",
                solution: "We build intelligent automation workflows that handle repetitive tasks flawlessly. From lead routing to data synchronization to report generation, we connect your tools and eliminate manual work. Your team focuses on strategy while AI handles execution.",
                benefits: [
                    "Eliminate 15-30 hours of manual work per person weekly",
                    "Zero human error in repetitive processes",
                    "24/7 operation—automation never sleeps or takes breaks",
                    "Seamless integration between all your existing tools",
                    "Instant scalability without hiring more people",
                    "Real-time alerts and monitoring for peace of mind"
                ],
                process: [
                    "Process audit to identify automation opportunities",
                    "Map current workflows and pain points",
                    "Design intelligent automation sequences",
                    "Build integrations between your tools (Zapier, Make, custom APIs)",
                    "Test thoroughly and train your team",
                    "Monitor, optimize, and expand automation"
                ],
                results: "One agency automated their entire client onboarding process, saving 12 hours per client. Another eliminated 85% of manual data entry, allowing their team to handle 3x more customers without hiring.",
                cta: "Ready to buy back your time? Let's automate the boring stuff."
            }
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            number: "009",
            title: "AI-Powered Chatbots",
            description: "Advanced AI chatbots that provide instant, intelligent customer support and enhance user engagement around the clock.",
            tags: ["Natural Language", "24/7 Support", "Multi-Platform", "Analytics"],
            link: "/services/ai-chatbots",
            modalContent: {
                headline: "Never Miss a Lead. Answer Every Question. 24/7.",
                subheadline: "AI chatbots that convert visitors, support customers, and work while you sleep",
                problem: "Leads hit your website at 2am and bounce because no one's there to help. Your support team is overwhelmed with repetitive questions. Live chat costs a fortune and still misses 60% of inquiries. You're losing sales and frustrating customers.",
                solution: "We deploy AI-powered chatbots that handle customer interactions intelligently. Trained on your business, products, and FAQs, they answer questions, qualify leads, book appointments, and escalate complex issues to humans—all instantly, 24/7.",
                benefits: [
                    "Capture leads 24/7, even when your team is offline",
                    "Respond to 95% of inquiries instantly",
                    "Reduce support costs by 60-80%",
                    "Qualify leads before they reach sales",
                    "Multi-platform deployment (website, Facebook, WhatsApp)",
                    "Continuously learns and improves from conversations"
                ],
                process: [
                    "Map common questions and customer journey touchpoints",
                    "Train AI on your business, products, and brand voice",
                    "Design conversation flows and escalation protocols",
                    "Integrate with your CRM and support tools",
                    "Deploy across your platforms and test thoroughly",
                    "Monitor performance and refine based on real conversations"
                ],
                results: "One e-commerce client captured 340 additional qualified leads in the first month. Another reduced support ticket volume by 73% while improving customer satisfaction scores.",
                cta: "Ready to never miss another lead? Let's build your AI support team."
            }
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 73, 37, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
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
                        className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12"
                    >
                        From digital marketing to AI-powered solutions, we deliver comprehensive services
                        that drive growth and transform your business.
                    </motion.p>
                </div>
            </section>

            {/* Digital Marketing Services */}
            <section className="py-20 px-4 md:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">DIGITAL MARKETING</p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                Digital Services
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {digitalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                {service.link ? (
                                    <Link
                                        href={service.link}
                                        className="group cursor-pointer block p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900 h-full"
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-2xl font-bold text-accent">{service.number}</span>
                                                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-neutral-400 mb-6">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-400 group-hover:border-accent/30 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                ) : (
                                    <div
                                        onClick={() => setSelectedService(service)}
                                        className="group cursor-pointer block p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900 h-full"
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-2xl font-bold text-accent">{service.number}</span>
                                                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                                </div>
                                                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-neutral-400 mb-6">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-xs text-neutral-400 group-hover:border-accent/30 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Services */}
            <section className="py-20 px-4 md:px-8 bg-neutral-950">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase">AI SOLUTIONS</p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                AI-Powered Services
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aiServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                {service.link ? (
                                    <Link
                                        href={service.link}
                                        className="group cursor-pointer block p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900 h-full"
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-2xl font-bold text-accent">{service.number}</span>
                                                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                        <p className="text-neutral-400 mb-6 text-sm">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full text-xs text-neutral-400 group-hover:border-accent/30 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                ) : (
                                    <div
                                        onClick={() => setSelectedService(service)}
                                        className="group cursor-pointer block p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900 h-full"
                                    >
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                                                {service.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-2xl font-bold text-accent">{service.number}</span>
                                                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                        <p className="text-neutral-400 mb-6 text-sm">{service.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-neutral-900 border border-neutral-700 rounded-full text-xs text-neutral-400 group-hover:border-accent/30 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Let's discuss how our services can help you achieve your goals. Get in touch today.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                            Get Started
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="sticky top-4 right-4 float-right z-10 p-2 bg-black/80 hover:bg-black border border-neutral-700 rounded-full transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8 md:p-12">
                                {/* Header */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                            {selectedService.icon}
                                        </div>
                                        <div>
                                            <span className="text-accent font-bold text-lg">{selectedService.number}</span>
                                            <h2 className="text-3xl md:text-4xl font-bold mt-1">{selectedService.title}</h2>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                                        {selectedService.modalContent.headline}
                                    </h3>
                                    <p className="text-lg text-accent font-medium">
                                        {selectedService.modalContent.subheadline}
                                    </p>
                                </div>

                                {/* Problem */}
                                <div className="mb-8 p-6 bg-red-950/20 border border-red-900/30 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3 text-red-400">The Problem</h4>
                                    <p className="text-neutral-300 leading-relaxed">
                                        {selectedService.modalContent.problem}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div className="mb-8 p-6 bg-green-950/20 border border-green-900/30 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3 text-green-400">Our Solution</h4>
                                    <p className="text-neutral-300 leading-relaxed">
                                        {selectedService.modalContent.solution}
                                    </p>
                                </div>

                                {/* Benefits */}
                                <div className="mb-8">
                                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Check className="w-5 h-5 text-accent" />
                                        What You Get
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {selectedService.modalContent.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-start gap-3 p-3 bg-neutral-800/50 rounded-lg">
                                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-neutral-300">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Process */}
                                <div className="mb-8">
                                    <h4 className="text-xl font-bold mb-4">How We Do It</h4>
                                    <div className="space-y-3">
                                        {selectedService.modalContent.process.map((step, i) => (
                                            <div key={i} className="flex items-start gap-4 p-4 bg-neutral-800/30 rounded-lg">
                                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-sm">
                                                    {i + 1}
                                                </span>
                                                <span className="text-neutral-300 pt-1">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Results */}
                                <div className="mb-8 p-6 bg-accent/10 border border-accent/30 rounded-lg">
                                    <h4 className="text-xl font-bold mb-3 text-accent">Real Results</h4>
                                    <p className="text-neutral-300 leading-relaxed">
                                        {selectedService.modalContent.results}
                                    </p>
                                </div>

                                {/* CTA */}
                                <div className="text-center pt-6 border-t border-neutral-800">
                                    <p className="text-lg text-neutral-300 mb-6">
                                        {selectedService.modalContent.cta}
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                                    >
                                        Let's Talk
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
}
