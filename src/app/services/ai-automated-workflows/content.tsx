"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Zap, GitBranch, Clock, TrendingUp, Database, Settings, CheckCircle } from "lucide-react";
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

export default function AIAutomatedWorkflowsContent() {
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
                            {["AUTOMATED", "WORKFLOWS"].map((word, i) => (
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
                        Automate workflows to streamline tasks, boost efficiency, and save time.
                        Transform manual processes into intelligent, automated systems.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-lg overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Automate Your Workflows
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="#examples"
                            className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:border-neutral-500 transition-colors"
                        >
                            See Examples
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 md:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                Why Automate?
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Transform your business operations</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Clock className="w-8 h-8" />,
                                title: "Save Time",
                                description: "Reduce manual tasks by up to 80% and focus on strategic work that matters."
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Boost Productivity",
                                description: "Increase output without increasing headcount. Scale operations efficiently."
                            },
                            {
                                icon: <CheckCircle className="w-8 h-8" />,
                                title: "Reduce Errors",
                                description: "Eliminate human errors with consistent, accurate automated processes."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "24/7 Operations",
                                description: "Workflows run continuously, even when your team is offline."
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900 text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-neutral-400">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Examples */}
            <section id="examples" className="py-20 px-4 md:px-8 bg-neutral-950">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                Workflow Examples
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Real automation scenarios that drive results</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Lead Generation & Nurturing",
                                icon: <GitBranch className="w-10 h-10" />,
                                steps: [
                                    "Capture leads from forms/ads",
                                    "Automatically add to CRM",
                                    "Send welcome email sequence",
                                    "Score leads based on engagement",
                                    "Notify sales team of hot leads",
                                    "Schedule follow-up tasks"
                                ]
                            },
                            {
                                title: "Social Media Management",
                                icon: <Settings className="w-10 h-10" />,
                                steps: [
                                    "Content queue management",
                                    "Auto-schedule posts",
                                    "Monitor brand mentions",
                                    "Respond to comments",
                                    "Generate analytics reports",
                                    "Alert team of viral content"
                                ]
                            },
                            {
                                title: "E-commerce Order Processing",
                                icon: <Database className="w-10 h-10" />,
                                steps: [
                                    "Receive order notification",
                                    "Update inventory levels",
                                    "Send confirmation email",
                                    "Generate shipping label",
                                    "Update customer in CRM",
                                    "Request review after delivery"
                                ]
                            },
                            {
                                title: "Customer Support Tickets",
                                icon: <Zap className="w-10 h-10" />,
                                steps: [
                                    "Ticket auto-categorization",
                                    "Route to right department",
                                    "Send auto-response",
                                    "Escalate urgent issues",
                                    "Track resolution time",
                                    "Send satisfaction survey"
                                ]
                            },
                            {
                                title: "Content Publishing Pipeline",
                                icon: <GitBranch className="w-10 h-10" />,
                                steps: [
                                    "Content creation in CMS",
                                    "Auto SEO optimization",
                                    "Submit for approval",
                                    "Schedule publication",
                                    "Share on social media",
                                    "Monitor performance"
                                ]
                            },
                            {
                                title: "Employee Onboarding",
                                icon: <CheckCircle className="w-10 h-10" />,
                                steps: [
                                    "Create accounts/email",
                                    "Send welcome kit",
                                    "Schedule orientation",
                                    "Assign training modules",
                                    "Track completion",
                                    "Collect feedback"
                                ]
                            }
                        ].map((workflow, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                        {workflow.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold flex-1">{workflow.title}</h3>
                                </div>
                                <div className="space-y-3">
                                    {workflow.steps.map((step, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                                                {i + 1}
                                            </span>
                                            <p className="text-neutral-400">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration Showcase */}
            <section className="py-20 px-4 md:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                Integrations
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Connect with 1000+ apps and services</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            "Salesforce", "HubSpot", "Slack", "Gmail", "Shopify",
                            "WordPress", "Mailchimp", "Stripe", "QuickBooks", "Asana",
                            "Trello", "Google Sheets", "Airtable", "Dropbox", "Zoom"
                        ].map((integration, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.03 }}
                                className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg text-center hover:border-accent/50 transition-all hover:scale-105"
                            >
                                <p className="font-semibold">{integration}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mt-12 text-center"
                    >
                        <p className="text-neutral-400 mb-6">Plus custom integrations via API, webhooks, and Zapier</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 rounded-lg hover:border-accent/50 transition-colors"
                        >
                            View All Integrations
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-20 px-4 md:px-8 bg-neutral-950">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                Implementation Process
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">From discovery to deployment</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

                        {[
                            {
                                step: "01",
                                title: "Discovery & Analysis",
                                description: "We analyze your current processes, identify bottlenecks, and map opportunities for automation."
                            },
                            {
                                step: "02",
                                title: "Workflow Design",
                                description: "Design custom workflows that align with your business logic and integrate seamlessly with existing systems."
                            },
                            {
                                step: "03",
                                title: "Development & Testing",
                                description: "Build and rigorously test workflows in a staging environment to ensure reliability."
                            },
                            {
                                step: "04",
                                title: "Deployment",
                                description: "Smooth rollout of automated workflows with minimal disruption to operations."
                            },
                            {
                                step: "05",
                                title: "Training & Documentation",
                                description: "Comprehensive training for your team with detailed documentation and best practices."
                            },
                            {
                                step: "06",
                                title: "Monitoring & Optimization",
                                description: "Ongoing monitoring, performance tracking, and continuous optimization for maximum efficiency."
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
                                <div className="absolute left-0 w-16 h-16 bg-accent rounded-full items-center justify-center font-bold text-xl hidden md:flex">
                                    {item.step}
                                </div>

                                <div className="p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all">
                                    <div className="flex items-center gap-4 mb-3 md:hidden">
                                        <span className="text-3xl font-bold text-accent">{item.step}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-neutral-400 text-lg">{item.description}</p>
                                </div>
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
                            Ready to Automate Your Business?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Transform your operations with intelligent automation. Save time, reduce costs, and scale efficiently.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                            Start Automating Today
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
