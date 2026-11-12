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
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="Multi-Agent systems overview">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080313] to-black z-0" aria-hidden="true" />
                <div className="absolute top-1/4 translate-x-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-1/4 -translate-x-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
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
                        className="text-xl md:text-2xl text-purple-200/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
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
                            className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.3)] flex items-center justify-center gap-2"
                        >
                            <BrainCircuit className="w-5 h-5" />
                            Architect Your System
                        </Link>
                        <a
                            href="#architecture"
                            className="w-full sm:w-auto px-8 py-4 border border-purple-500/20 hover:bg-purple-500/10 text-white font-semibold rounded-xl transition-colors flex items-center justify-center"
                        >
                            Explore Architecture
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section id="architecture" className="py-24 px-4 md:px-8 bg-black relative border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-4 block">The "Command" Tier</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Single agents do tasks. <br/> Multi-agents do <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">jobs.</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
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
                                className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-purple-900/10 hover:border-purple-500/20 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Example Architecture Visual */}
            <section className="py-24 px-4 md:px-8 bg-[#030108] border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">How an Agent Swarm Works</h2>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative p-8 md:p-12 rounded-[2rem] border border-purple-500/20 bg-gradient-to-b from-purple-900/20 to-black overflow-hidden"
                    >
                        {/* Glow Behind Map */}
                        <div className="absolute inset-0 bg-purple-600/5 blur-3xl pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col items-center gap-8">
                            {/* Manager */}
                            <div className="p-6 bg-black border border-purple-500/40 rounded-2xl w-full max-w-sm text-center shadow-[0_0_30px_rgba(147,51,234,0.15)] relative z-20">
                                <span className="text-purple-400 text-xs font-black uppercase tracking-widest mb-2 block">The Brain</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Manager Agent</h3>
                                <p className="text-neutral-400 text-sm">Receives high-level goal from human, breaks it into subtasks, and assigns to workers.</p>
                            </div>

                            {/* Lines downwards */}
                            <div className="flex w-full max-w-2xl justify-around relative my-4">
                                {/* Invisible container just to space lines */}
                                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-purple-500/40 to-indigo-500/40 -translate-y-8 translate-y-8" />
                            </div>

                            {/* Workers */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-20">
                                <div className="p-6 bg-[#0a0515] border border-white/10 rounded-2xl text-center">
                                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2 block">Worker 1</span>
                                    <h3 className="text-lg font-bold text-white mb-2">Research Bot</h3>
                                    <p className="text-neutral-500 text-xs">Scrapes web, reads PDFs, gathers raw data.</p>
                                </div>
                                <div className="p-6 bg-[#0a0515] border border-white/10 rounded-2xl text-center">
                                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2 block">Worker 2</span>
                                    <h3 className="text-lg font-bold text-white mb-2">Analysis Bot</h3>
                                    <p className="text-neutral-500 text-xs">Processes raw data, runs Python scripts, finds trends.</p>
                                </div>
                                <div className="p-6 bg-[#0a0515] border border-white/10 rounded-2xl text-center">
                                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2 block">Worker 3</span>
                                    <h3 className="text-lg font-bold text-white mb-2">Writer Bot</h3>
                                    <p className="text-neutral-500 text-xs">Drafts the final executive summary for the human.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 bg-black relative border-t border-white/5 text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Ready to build your digital workforce?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-10">
                            The "Command" tier is our flagship implementation. Speak directly to our Lead AI Architect to discuss replacing entire departmental workflows.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-500 transition-all hover:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.3)] uppercase tracking-wide text-sm"
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