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
        <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="Smart Ad Campaigns overview">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#020617] to-[#020617] z-0" aria-hidden="true" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
                
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
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
                        className="text-xl md:text-2xl text-cyan-100/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
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
                            className="w-full sm:w-auto px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(8,145,178,0.3)] flex items-center justify-center gap-2"
                        >
                            <Rocket className="w-5 h-5" />
                            Scale My Revenue
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section className="py-24 px-4 md:px-8 bg-black relative border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-cyan-500 font-bold tracking-widest text-sm uppercase mb-4 block">Engineered for ROAS</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            We don't buy traffic. We buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">customers.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
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
                                className="bg-white/[0.02] border border-white/5 p-8 rounded-[24px] hover:bg-cyan-950/20 hover:border-cyan-500/20 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-24 px-4 md:px-8 bg-[#020617] border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Omnichannel <span className="text-cyan-500">scaling strategy.</span>
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
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                    </div>
                                    <span className="text-neutral-300 font-medium">{item}</span>
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
                        <div className="bg-gradient-to-br from-slate-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-center items-center h-full">
                            <h3 className="text-3xl font-black italic tracking-tighter text-white/20 uppercase absolute top-10 w-full text-center">Data Over Opinions</h3>
                            <div className="relative z-10 text-center mt-12">
                                <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-blue-600 mb-2">4.2x</div>
                                <p className="text-cyan-100/60 font-bold uppercase tracking-widest text-sm">Average Ecommerce ROAS</p>
                            </div>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-8" />
                            <div className="relative z-10 text-center">
                                <div className="text-5xl font-black text-white mb-2">- 60%</div>
                                <p className="text-neutral-500 font-bold uppercase tracking-widest text-sm">Drop in B2B Cost-Per-Lead</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 bg-black relative border-t border-white/5 text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Stop wasting ad spend.
                        </h2>
                        <p className="text-xl text-neutral-400 mb-10">
                            Get a free aggressive audit of your current ad accounts. We will show you exactly where you're bleeding money and how to fix it.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 transition-all hover:scale-105 shadow-[0_0_30px_rgba(8,145,178,0.2)] uppercase tracking-wide text-sm"
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