"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Target, Activity, Rocket, TrendingUp, Search, Layers, MousePointerClick } from "lucide-react";
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

export default function SmartAdCampaignsContent() {
    return (
        <div className="home-cream min-h-screen bg-white/70 text-ink selection:bg-ember/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="Smart Ad Campaigns overview">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-ember/20 via-paper to-paper z-0" aria-hidden="true" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-ember/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none hidden" />
                
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em]">
                            {["PERFORMANCE", "MARKETING"].map((word, i) => (
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
                        className="text-xl md:text-2xl text-ink-soft max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        Stop boosting posts and burning cash. Deploy data-driven, AI-optimized ad campaigns that convert clicks into highly profitable revenue.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] w-full sm:w-auto px-8 py-4 bg-ember hover:bg-ember text-ink font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Rocket className="w-5 h-5" />
                            Scale My Revenue
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-24 px-4 md:px-8 bg-transparent relative border-t border-ink/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-ember-deep font-bold tracking-widest text-sm uppercase mb-4 block">Engineered for ROAS</span>
                        <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-[-0.035em]">
                            We don't buy traffic. We buy <span className="text-ember-ink">customers.</span>
                        </h2>
                        <p className="text-ink-soft text-lg leading-relaxed">
                            Most agencies spray and pray. They chase vanity metrics like "impressions" and "likes". We only care about one metric: Return on Ad Spend. We use AI audience modeling and rapid creative testing to find the exact combination that makes your ideal customer pull out their credit card.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "AI Lookalike Targeting",
                                desc: "We ingest your past buyer data to mathematically model similar audiences across Meta and Google, finding people exactly like your best customers."
                            },
                            {
                                icon: <Layers className="w-8 h-8" />,
                                title: "Rapid Creative Testing",
                                desc: "We launch dozens of ad variations—testing hooks, angles, and formats—to let the algorithm ruthlessly declare a winner."
                            },
                            {
                                icon: <Activity className="w-8 h-8" />,
                                title: "Attribution & Tracking",
                                desc: "Server-side pixel tracking and advanced API integrations ensure we never lose a conversion to iOS updates."
                            },
                            {
                                icon: <Search className="w-8 h-8" />,
                                title: "Search Intent Domination",
                                desc: "Capture high-intent traffic on Google Ads the exact second a prospect types your solution into the search bar."
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Retargeting Ecosystems",
                                desc: "If they bounced, we bring them back. Multi-platform retargeting sequences that nurture leads until they are ready to buy."
                            },
                            {
                                icon: <MousePointerClick className="w-8 h-8" />,
                                title: "Landing Page Optimization",
                                desc: "Great ads fail on bad websites. We optimize your landing page UI/UX to ensure the traffic we send actually converts."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "100px" }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="cut-card [--cut:22px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 hover:bg-ember/[0.06] hover:[--cut-line:rgba(255,73,37,0.2)] transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-ember/20 to-ember/5 border border-ember/20 rounded-xl flex items-center justify-center text-ember-deep mb-6 group-hover:scale-110 group-hover:bg-ember/20 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-ink-soft leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-24 px-4 md:px-8 bg-white/70 border-t border-ink/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-[-0.035em]">
                            Omnichannel <span className="text-ember-ink">scaling strategy.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Meta Ads (Facebook / Instagram) for disruptive visual scaling",
                                "Google Search Ads for high-intent capture",
                                "Google Performance Max for fully automated AI delivery",
                                "LinkedIn Ads for high-ticket B2B prospecting",
                                "TikTok Ads for viral e-commerce acquisition"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-ember/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-ember" />
                                    </div>
                                    <span className="text-ink-soft font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 w-full"
                    >
                        <div className="cut-card [--cut:22px] bg-gradient-to-br from-paper to-paper p-8 md:p-12 [--cut-line:rgba(27,26,23,0.1)] relative overflow-hidden flex flex-col justify-center items-center h-full">
                            <h3 className="text-3xl font-semibold italic tracking-tighter text-ink/20 uppercase absolute top-10 w-full text-center">Data Over Opinions</h3>
                            <div className="relative z-10 text-center mt-12">
                                <div className="text-7xl font-black mb-2 text-ember-ink">4.2x</div>
                                <p className="text-ink-soft font-bold uppercase tracking-widest text-sm">Average Ecommerce ROAS</p>
                            </div>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent my-8" />
                            <div className="relative z-10 text-center">
                                <div className="text-5xl font-black text-ink mb-2">- 60%</div>
                                <p className="text-ink-mute font-bold uppercase tracking-widest text-sm">Drop in B2B Cost-Per-Lead</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 bg-transparent relative border-t border-ink/10 text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-ember/10 to-transparent pointer-events-none hidden" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Stop wasting ad spend.
                        </h2>
                        <p className="text-xl text-ink-soft mb-10">
                            Get a free aggressive audit of your current ad accounts. We will show you exactly where you're bleeding money and how to fix it.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-10 py-5 bg-ember text-ink font-bold hover:bg-ember transition-all hover:scale-105 uppercase tracking-wide text-sm"
                        >
                            REQUEST FREE AD AUDIT
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}