"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, BarChart, Bell, Filter, Mail, MessageSquare, Target, Zap } from "lucide-react";
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

export default function SmartFunnelsContent() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20" aria-label="Smart funnels overview">
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
                            {["SMART", "FUNNELS"].map((word, i) => (
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
                        Turn leads into customers on autopilot. We build intelligent sales funnels
                        that nurture, qualify, and convert 24/7.
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
                                Build Your Funnel
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-[-0.035em]">
                            Leads slipping through the cracks?
                        </h2>
                        <div className="space-y-6 text-ink-soft text-lg">
                            <p>
                                You generate traffic, but most visitors disappear without buying. You might send a few manual follow-ups, but eventually, you get busy and they get cold.
                            </p>
                            <p>
                                Manually nurturing every lead is impossible. You're losing sales simply because you don't have a system to guide prospects from "interested" to "sold."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="cut-card [--cut:18px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 "
                    >
                        <h3 className="text-2xl font-bold mb-4 text-ink">The Smart Funnel Solution</h3>
                        <p className="text-ink-soft mb-6">
                            We build automated systems that do the selling for you. Personalized email sequences, behavior-based triggers, and strategic touchpoints that run while you sleep.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Convert 3-5x more leads",
                                "Save 20+ hours/week on follow-ups",
                                "Qualify leads automatically",
                                "Recover abandoned carts"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-ink">
                                    <div className="w-6 h-6 rounded-full bg-ember/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-ember" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
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
                                Automation Engines
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Tools that drive conversion on autopilot</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Mail className="w-8 h-8" />,
                                title: "Email Nurturing",
                                description: "Personalized sequences that educate, build trust, and sell your offer over time."
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Behavior Triggers",
                                description: "smart logic that reacts to what leads do (or don't do) to send the right message."
                            },
                            {
                                icon: <Filter className="w-8 h-8" />,
                                title: "Lead Scoring",
                                description: "Automatically identify your hottest leads so sales can focus on closing."
                            },
                            {
                                icon: <Bell className="w-8 h-8" />,
                                title: "Instant Alerts",
                                description: "Get notified the moment a high-value prospect takes a key action."
                            },
                            {
                                icon: <BarChart className="w-8 h-8" />,
                                title: "Conversion Analytics",
                                description: "Track every step of the funnel to see exactly where drop-offs happen."
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8" />,
                                title: "Multi-Channel",
                                description: "Reach prospects via email, SMS, and retargeting ads for maximum impact."
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

            {/* Process Section */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
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
                                The Funnel Blueprint
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">From stranger to loyal customer</p>
                    </motion.div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ember via-ember/50 to-transparent hidden md:block" />
                        {[
                            {
                                step: "01",
                                title: "Journey Mapping",
                                text: "We identify every touchpoint your customer needs to make a buying decision."
                            },
                            {
                                step: "02",
                                title: "Offer & Content",
                                text: "Crafting the lead magnets, emails, and landing page copy that compels action."
                            },
                            {
                                step: "03",
                                title: "Technical Build",
                                text: "Setting up the automation software, tagging, triggers, and integrations."
                            },
                            {
                                step: "04",
                                title: "Optimization",
                                text: "Testing subject lines, timing, and calls-to-action to maximize conversion rates."
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
                                <div className="absolute left-0 w-16 h-16 bg-ember rounded-full items-center justify-center font-bold text-xl hidden md:flex">
                                    {item.step}
                                </div>
                                <div className="cut-card [--cut:14px] relative p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] ">
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-ink-soft">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-paper to-paper" aria-label="Get started">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Ready to Automate Your Sales?
                        </h2>
                        <p className="text-xl text-ink-soft mb-8">
                            Stop chasing leads manually. Let's build a system that works for you.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
                        >
                            Start Your Project
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
