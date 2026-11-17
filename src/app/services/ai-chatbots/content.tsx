"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, MessageSquare, Bot, Brain, Clock, Globe, Sparkles, HeadphonesIcon, BarChart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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

export default function AIAgentsContent() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20" aria-label="AI agents overview">
                <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper" aria-hidden="true" />
                <div
                    className="absolute inset-0 opacity-20"
                    aria-hidden="true"
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
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em]">
                            {["AI-POWERED", "CHATBOTS"].map((word, i) => (
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
                        AI-driven AI agents with advanced cognitive technologies to elevate customer support
                        and automate business operations. 24/7 intelligent assistance.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] group relative px-8 py-4 bg-ember text-ink font-semibold overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Build Your AI Agent
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="#demo"
                            className="cut-btn [--cut:12px] px-8 py-4 [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold hover:[--cut-line:rgba(27,26,23,0.3)] transition-colors"
                        >
                            Try Demo
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 px-4 md:px-8 bg-transparent" aria-label="AI Agent capabilities">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                AI Agent Capabilities
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Advanced AI features for superior customer interactions</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Brain className="w-8 h-8" />,
                                title: "Natural Language Processing",
                                description: "Understands context, intent, and sentiment with advanced NLP to provide human-like conversations."
                            },
                            {
                                icon: <Clock className="w-8 h-8" />,
                                title: "24/7 Availability",
                                description: "Never miss a customer inquiry. Your AI agent works round-the-clock, handling unlimited conversations."
                            },
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: "Multi-Language Support",
                                description: "Communicate in 50+ languages with automatic translation and cultural context awareness."
                            },
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: "Intelligent Learning",
                                description: "Continuously learns from interactions to improve responses and handle complex queries."
                            },
                            {
                                icon: <HeadphonesIcon className="w-8 h-8" />,
                                title: "Seamless Handoff",
                                description: "Smart escalation to human agents when needed, with full conversation context transfer."
                            },
                            {
                                icon: <BarChart className="w-8 h-8" />,
                                title: "Analytics & Insights",
                                description: "Detailed conversation analytics, user behavior tracking, and performance metrics."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="cut-card [--cut:14px] relative group p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] hover:[--cut-line:rgba(255,73,37,0.5)] transition-all hover:bg-white"
                            >
                                <div className="w-16 h-16 mb-6 rounded-lg bg-ember/10 flex items-center justify-center text-ember-deep group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-ink-soft">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 md:px-8 bg-transparent" aria-label="AI Agent use cases">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                Use Cases
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Perfect applications for AI agents</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Customer Support",
                                description: "Handle FAQs, troubleshooting, order status, and basic support queries instantly.",
                                examples: ["Answer common questions", "Track orders", "Process returns", "Technical support"]
                            },
                            {
                                title: "Lead Generation",
                                description: "Qualify leads, collect information, and schedule appointments automatically.",
                                examples: ["Qualify prospects", "Book meetings", "Capture contact info", "Product recommendations"]
                            },
                            {
                                title: "E-commerce Assistant",
                                description: "Help customers find products, answer questions, and complete purchases.",
                                examples: ["Product search", "Size recommendations", "Cart assistance", "Upsell suggestions"]
                            },
                            {
                                title: "Appointment Booking",
                                description: "Schedule appointments, send reminders, and manage calendar availability.",
                                examples: ["Book appointments", "Send reminders", "Reschedule requests", "Availability checks"]
                            },
                            {
                                title: "Internal HR Assistant",
                                description: "Help employees with HR queries, policies, and administrative tasks.",
                                examples: ["Leave requests", "Policy questions", "Benefits info", "Document access"]
                            },
                            {
                                title: "Educational Tutor",
                                description: "Answer student questions, provide learning resources, and track progress.",
                                examples: ["Answer questions", "Study materials", "Progress tracking", "Assignment help"]
                            }
                        ].map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="cut-card [--cut:14px] relative p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] "
                            >
                                <MessageSquare className="w-10 h-10 text-ember-deep mb-4" />
                                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                                <p className="text-ink-soft mb-6">{useCase.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {useCase.examples.map((example, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/70 border border-ink/10 rounded-full text-sm text-ink-soft"
                                        >
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Integrations */}
            <section className="py-20 px-4 md:px-8 bg-transparent" aria-label="Platform integrations">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                Platform Integrations
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Deploy your AI agent anywhere your customers are</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                        {[
                            {
                                category: "Messaging Apps",
                                platforms: ["WhatsApp", "Facebook Messenger", "Telegram", "WeChat"]
                            },
                            {
                                category: "Web & Mobile",
                                platforms: ["Website Widget", "Mobile App SDK", "Progressive Web App", "Custom Integration"]
                            },
                            {
                                category: "Social Media",
                                platforms: ["Instagram DM", "Twitter DM", "LinkedIn", "Discord"]
                            },
                            {
                                category: "Business Tools",
                                platforms: ["Slack", "Microsoft Teams", "Zendesk", "Salesforce"]
                            }
                        ].map((group, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="cut-card [--cut:14px] relative p-6 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] "
                            >
                                <h3 className="text-lg font-bold mb-4 text-ember-deep">{group.category}</h3>
                                <ul className="space-y-2">
                                    {group.platforms.map((platform, i) => (
                                        <li key={i} className="text-ink-soft flex items-center gap-2">
                                            <span className="text-ember-deep">•</span>
                                            {platform}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-20 px-4 md:px-8 bg-transparent" aria-label="Implementation process">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                How We Build Your AI Agent
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">From concept to deployment in weeks</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ember via-ember/50 to-transparent hidden md:block" aria-hidden="true" />

                        {[
                            {
                                step: "01",
                                title: "Requirements & Strategy",
                                description: "Define AI agent goals, use cases, conversation flows, and success metrics with your team."
                            },
                            {
                                step: "02",
                                title: "Conversation Design",
                                description: "Create intuitive conversation paths, fallback responses, and personality that matches your brand."
                            },
                            {
                                step: "03",
                                title: "AI Training",
                                description: "Train the AI agent on your specific domain knowledge, FAQs, and business processes."
                            },
                            {
                                step: "04",
                                title: "Integration & Testing",
                                description: "Connect to your systems (CRM, databases, APIs) and thoroughly test all scenarios."
                            },
                            {
                                step: "05",
                                title: "Deployment & Launch",
                                description: "Deploy to your chosen platforms with soft launch testing before full rollout."
                            },
                            {
                                step: "06",
                                title: "Optimization & Support",
                                description: "Monitor performance, analyze conversations, and continuously improve based on real data."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="relative mb-12 last:mb-0 md:pl-24"
                            >
                                {/* Step Number Circle */}
                                <div className="absolute left-0 w-16 h-16 bg-ember rounded-full items-center justify-center font-bold text-xl hidden md:flex">
                                    {item.step}
                                </div>

                                <div className="cut-card [--cut:14px] relative p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] hover:[--cut-line:rgba(255,73,37,0.5)] transition-all">
                                    <div className="flex items-center gap-4 mb-3 md:hidden">
                                        <span className="text-3xl font-bold text-ember-ink">{item.step}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-ink-soft text-lg">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-paper to-paper" aria-label="Get started with AI agents">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Transform Customer Support with AI
                        </h2>
                        <p className="text-xl text-ink-soft mb-8">
                            Deploy intelligent AI agents that delight customers and reduce support costs. Get started today.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
                        >
                            Build Your AI Agent
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
