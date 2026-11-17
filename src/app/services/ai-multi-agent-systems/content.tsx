"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Network, ShieldCheck, Zap, Cog, Bot } from "lucide-react";
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

export default function AIMultiAgentSystemsContent() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink selection:bg-ember/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="Multi-Agent systems overview">
                <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper to-paper z-0" aria-hidden="true" />
                <div className="absolute top-1/4 translate-x-1/4 right-0 w-[600px] h-[600px] bg-ember/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none hidden" />
                <div className="absolute bottom-1/4 -translate-x-1/4 left-0 w-[500px] h-[500px] bg-ember/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none hidden" />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em]">
                            {["MULTI-AGENT", "ORCHESTRATION"].map((word, i) => (
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
                        className="text-xl md:text-2xl text-ember-deep max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        Complete digital transformation. Specialized AI agents working together as a cohesive digital workforce to run entire departments.
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
                            <BrainCircuit className="w-5 h-5" />
                            Architect Your System
                        </Link>
                        <a
                            href="#architecture"
                            className="cut-btn [--cut:12px] w-full sm:w-auto px-8 py-4 [--cut-line:rgba(255,73,37,0.2)] hover:bg-ember/10 text-ink font-semibold transition-colors flex items-center justify-center"
                        >
                            Explore Architecture
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section id="architecture" className="py-24 px-4 md:px-8 bg-transparent relative border-t border-ink/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-ember-deep font-bold tracking-widest text-sm uppercase mb-4 block">The "Command" Tier</span>
                        <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-[-0.035em]">
                            Single agents do tasks. <br/> Multi-agents do <span className="text-ember-ink">jobs.</span>
                        </h2>
                        <p className="text-ink-soft text-lg leading-relaxed">
                            A single chatbot is great, but it has limits. For true transformation, you need a Research Agent to gather data, pass it to an Analysis Agent to process it, and hand it to a Writer Agent to report it—all managed by an Executive Agent checking their work.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Network className="w-8 h-8" />,
                                title: "Hierarchical Delegation",
                                desc: "Manager agents assign sub-tasks to specialized worker agents, overseeing the entire project pipeline without human input."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Intelligent Error Correction",
                                desc: "Agents check each other's work (e.g. a 'Reviewer Agent' ensures the 'Coder Agent' outputs bug-free software)."
                            },
                            {
                                icon: <Cog className="w-8 h-8" />,
                                title: "Custom Tools Access",
                                desc: "We build APIs granting agents access to your internal database, Stripe, Salesforce, or the open internet."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Massive Parallelism",
                                desc: "Have 100 worker agents simultaneously executing independent research tasks, unifying their findings into a single executive brief."
                            },
                            {
                                icon: <Bot className="w-8 h-8" />,
                                title: "Memory & State",
                                desc: "Systems remember past interactions, referencing historical decisions to maintain context across months of operation."
                            },
                            {
                                icon: <BrainCircuit className="w-8 h-8" />,
                                title: "Agentic Frameworks",
                                desc: "Built utilizing state-of-the-art frameworks like LangGraph, CrewAI, and AutoGen for maximum stability and scaling."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "100px" }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="cut-card [--cut:18px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 hover:bg-ember/[0.06] hover:[--cut-line:rgba(255,73,37,0.2)] transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-ember/10 border border-ember/20 rounded-xl flex items-center justify-center text-ember-deep mb-6 group-hover:scale-110 group-hover:bg-ember/20 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-ink-soft leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Example Architecture Visual */}
            <section className="py-24 px-4 md:px-8 bg-transparent border-t border-ink/10">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-[-0.035em]">How an Agent Swarm Works</h2>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative p-8 md:p-12 rounded-[2rem] border border-ember/20 bg-gradient-to-b from-ember/20 to-paper overflow-hidden"
                    >
                        {/* Glow Behind Map */}
                        <div className="absolute inset-0 bg-ember/5 blur-3xl pointer-events-none hidden" />
                        
                        <div className="relative z-10 flex flex-col items-center gap-8">
                            {/* Manager */}
                            <div className="cut-card [--cut:18px] p-6 bg-white/70 [--cut-line:rgba(255,73,37,0.4)] w-full max-w-sm text-center relative z-20">
                                <span className="text-ember-deep text-xs font-black uppercase tracking-widest mb-2 block">The Brain</span>
                                <h3 className="text-2xl font-bold text-ink mb-2">Manager Agent</h3>
                                <p className="text-ink-soft text-sm">Receives high-level goal from human, breaks it into subtasks, and assigns to workers.</p>
                            </div>

                            {/* Lines downwards */}
                            <div className="flex w-full max-w-2xl justify-around relative my-4">
                                {/* Invisible container just to space lines */}
                                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-ember/40 to-ember/40 -translate-y-8 translate-y-8" />
                            </div>

                            {/* Workers */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-20">
                                <div className="cut-card [--cut:18px] relative p-6 bg-transparent [--cut-line:rgba(27,26,23,0.1)] text-center">
                                    <span className="text-ember-deep text-xs font-bold uppercase tracking-widest mb-2 block">Worker 1</span>
                                    <h3 className="text-lg font-bold text-ink mb-2">Research Bot</h3>
                                    <p className="text-ink-mute text-xs">Scrapes web, reads PDFs, gathers raw data.</p>
                                </div>
                                <div className="cut-card [--cut:18px] relative p-6 bg-transparent [--cut-line:rgba(27,26,23,0.1)] text-center">
                                    <span className="text-ember-deep text-xs font-bold uppercase tracking-widest mb-2 block">Worker 2</span>
                                    <h3 className="text-lg font-bold text-ink mb-2">Analysis Bot</h3>
                                    <p className="text-ink-mute text-xs">Processes raw data, runs Python scripts, finds trends.</p>
                                </div>
                                <div className="cut-card [--cut:18px] relative p-6 bg-transparent [--cut-line:rgba(27,26,23,0.1)] text-center">
                                    <span className="text-ember-deep text-xs font-bold uppercase tracking-widest mb-2 block">Worker 3</span>
                                    <h3 className="text-lg font-bold text-ink mb-2">Writer Bot</h3>
                                    <p className="text-ink-mute text-xs">Drafts the final executive summary for the human.</p>
                                </div>
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
                            Ready to build your digital workforce?
                        </h2>
                        <p className="text-xl text-ink-soft mb-10">
                            The "Command" tier is our flagship implementation. Speak directly to our Lead AI Architect to discuss replacing entire departmental workflows.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-10 py-5 bg-ember text-ink font-bold hover:bg-ember transition-all hover:scale-105 uppercase tracking-wide text-sm"
                        >
                            SCHEDULE ARCHITECTURE REVIEW
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}