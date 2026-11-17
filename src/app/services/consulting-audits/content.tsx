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
        <div className="home-cream min-h-screen bg-transparent text-ink selection:bg-ember/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="Strategy Consulting overview">
                <div className="absolute inset-0 bg-gradient-to-b from-paper via-[rgba(69,26,3,0.3)] to-paper z-0" aria-hidden="true" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ember/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none hidden" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ember/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none hidden" />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em]">
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
                        className="text-xl md:text-2xl text-ink-soft max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
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
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] w-full sm:w-auto px-8 py-4 bg-ember hover:bg-ember text-ink font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <FileSearch className="w-5 h-5" />
                            Book Free Discovery
                        </Link>
                        <a
                            href="#methodology"
                            className="cut-btn [--cut:12px] w-full sm:w-auto px-8 py-4 bg-white/70 hover:bg-white [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold transition-colors flex items-center justify-center"
                        >
                            Our Methodology
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section id="methodology" className="py-24 px-4 md:px-8 bg-transparent relative border-t border-ink/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-ember-deep font-bold tracking-widest text-sm uppercase mb-4 block">The Process Audit</span>
                        <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-[-0.035em]">
                            Diagnosis before Prescription.
                        </h2>
                        <p className="text-ink-soft text-lg leading-relaxed">
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

            {/* Comparison Section  */}
            <section className="py-24 px-4 md:px-8 bg-transparent border-t border-ink/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 w-full"
                    >
                        <div className="cut-card [--cut:22px] bg-gradient-to-br from-paper to-paper p-8 md:p-12 [--cut-line:rgba(27,26,23,0.1)] relative overflow-hidden flex flex-col justify-center gap-8">
                            <h3 className="text-3xl font-semibold text-ink">The Deliverables.</h3>
                            <div className="space-y-4 text-ink-soft">
                                <p><strong className="text-ember-deep">1. Current State Map:</strong> A visual diagram of exactly how data currently moves through your business, exposing the leaks.</p>
                                <div className="h-px bg-white" />
                                <p><strong className="text-ember-deep">2. Future State Architecture:</strong> How your business operates once fully integrated with ARC AI pipelines.</p>
                                <div className="h-px bg-white" />
                                <p><strong className="text-ember-deep">3. Phased Roadmap:</strong> A step-by-step rollout plan (Phase 1: Flow, Phase 2: Engage, etc) ensuring team adoption without operational disruption.</p>
                                <div className="h-px bg-white" />
                                <p><strong className="text-ember-deep">4. ROI Projection:</strong> A strict mathematical model showing where hours are saved, and how much those hours cost on payroll.</p>
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
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-[-0.035em]">
                            Build with intention. <br/> <span className="text-ember-ink">Scale without friction.</span>
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
                                    <div className="w-6 h-6 rounded-full bg-ember/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-ember" />
                                    </div>
                                    <span className="text-ink-soft font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
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
                            Ready to map your future?
                        </h2>
                        <p className="text-xl text-ink-soft mb-10">
                            Book a 30-minute discovery session with our Lead Consultants to discuss your current operational bottlenecks.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-10 py-5 bg-ember text-ink font-bold hover:bg-ember transition-all hover:scale-105 uppercase tracking-wide text-sm"
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