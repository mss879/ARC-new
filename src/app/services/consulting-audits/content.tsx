"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Network, FileSearch, Route, Users, GitMerge, FileText } from "lucide-react";
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

export default function ConsultingAuditsContent() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="Strategy Consulting overview">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[rgba(69,26,3,0.3)] to-[#020202] z-0" aria-hidden="true" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                            {["STRATEGIC", "AI CONSULTING"].map((word, i) => (
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
                        className="text-xl md:text-2xl text-amber-100/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        Stop buying disconnected software. Map your exact business processes to find the hidden bottlenecks where AI will drive massive, immediate ROI.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(217,119,6,0.3)] flex items-center justify-center gap-2"
                        >
                            <FileSearch className="w-5 h-5" />
                            Book Free Discovery
                        </Link>
                        <a
                            href="#methodology"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-colors flex items-center justify-center"
                        >
                            Our Methodology
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section id="methodology" className="py-24 px-4 md:px-8 bg-black relative border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4 block">The Process Audit</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Diagnosis before Prescription.
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            Implementing tools without a deep understanding of your operational flow creates 'Frankenstein' systems. We shadow your teams, document your data flows, and architect a customized blueprint. We show you exactly how much time you are losing, and what it costs to fix it.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Network className="w-8 h-8" />,
                                title: "Systems Mapping",
                                desc: "We visualize your entire operational flow via Miro/Lucidchart to pinpoint the manual hand-offs and structural bottlenecks in your company."
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Team Shadowing",
                                desc: "If your team hates the software, they won't use it. We perform deep-dive interviews with staff to identify exactly where they are buried in repetitive admin work."
                            },
                            {
                                icon: <Route className="w-8 h-8" />,
                                title: "ROI Roadmapping",
                                desc: "We prioritize solutions directly tied to revenue. We don't implement AI just because it's cool; we implement it to drop operating costs by 30%."
                            },
                            {
                                icon: <GitMerge className="w-8 h-8" />,
                                title: "Tech Stack Consolidation",
                                desc: "You are likely paying for 5 SAAS products doing the job of 1. We audit your licensing to merge tooling and save monthly subscription costs."
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "Executive Briefings",
                                desc: "Clear, non-technical reporting for the C-Suite, explaining the exact technical architecture required, timelines, and security implications."
                            },
                            {
                                icon: <ArrowUpRight className="w-8 h-8" />,
                                title: "Implementation Hand-off",
                                desc: "A flawless transition from the strategy phase directly into the engineering team, who builds exactly what was approved in the audit."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "100px" }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/[0.02] border border-white/5 p-8 rounded-[24px] hover:bg-amber-950/20 hover:border-amber-600/20 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-600/20 to-amber-500/5 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section  */}
            <section className="py-24 px-4 md:px-8 bg-[#020202] border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 w-full"
                    >
                        <div className="bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-center gap-8">
                            <h3 className="text-3xl font-black text-white">The Deliverables.</h3>
                            <div className="space-y-4 text-neutral-400">
                                <p><strong className="text-amber-500">1. Current State Map:</strong> A visual diagram of exactly how data currently moves through your business, exposing the leaks.</p>
                                <div className="h-px bg-white/10" />
                                <p><strong className="text-amber-500">2. Future State Architecture:</strong> How your business operates once fully integrated with ARC AI pipelines.</p>
                                <div className="h-px bg-white/10" />
                                <p><strong className="text-amber-500">3. Phased Roadmap:</strong> A step-by-step rollout plan (Phase 1: Flow, Phase 2: Engage, etc) ensuring team adoption without operational disruption.</p>
                                <div className="h-px bg-white/10" />
                                <p><strong className="text-amber-500">4. ROI Projection:</strong> A strict mathematical model showing where hours are saved, and how much those hours cost on payroll.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Build with intention. <br/> <span className="text-amber-500">Scale without friction.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Avoid over-engineering useless solutions",
                                "Gain clarity on the exact cost and timeline",
                                "Align stakeholders across departments",
                                "Ensure data privacy and security compliance",
                                "Transform 'busywork' into high-leverage execution"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    </div>
                                    <span className="text-neutral-300 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 bg-black relative border-t border-white/5 text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 to-transparent pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Ready to map your future?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-10">
                            Book a 30-minute discovery session with our Lead Consultants to discuss your current operational bottlenecks.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-amber-600 text-white font-bold rounded-full hover:bg-amber-500 transition-all hover:scale-105 shadow-[0_0_30px_rgba(217,119,6,0.2)] uppercase tracking-wide text-sm"
                        >
                            SCHEDULE DISCOVERY
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}