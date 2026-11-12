"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, PhoneCall, Mic, Clock, BrainCircuit, Activity, LineChart, MessageSquare } from "lucide-react";
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

export default function AIVoiceAssistantsContent() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="AI Voice Assistants overview">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-0" aria-hidden="true" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-20 z-0"
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
                        className="mb-8 flex flex-col items-center"
                    >
                        <motion.span 
                            variants={letterVariant}
                            className="px-3 py-1 border border-orange-500/50 bg-orange-500/10 text-orange-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block"
                        >
                            Beta Testing
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                            {["COGNITIVE", "VOICE AI"].map((word, i) => (
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
                        className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        Human-sounding AI voice agents that dial inbound leads in under 60 seconds, qualify prospects, and answer support calls 24/7.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2"
                        >
                            <PhoneCall className="w-5 h-5" />
                            Deploy Your Agent
                        </Link>
                        <a
                            href="#features"
                            className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-colors flex items-center justify-center"
                        >
                            Hear the Difference
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Problem / Solution Grid */}
            <section id="features" className="py-24 px-4 md:px-8 bg-black relative border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-3xl mx-auto"
                    >
                        <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 block">The "Speed to Lead" Problem</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Missing calls means missing revenue.
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            If you do not call a web lead within 5 minutes, your close rate drops by 80%. But having human SDRs dial instantly 24/7 is impossible. Our Voice AI solves this permanently.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Clock className="w-8 h-8" />,
                                title: "Instant Response",
                                desc: "Agent dials web form submissions within 60 seconds, catching leads when their intent is highest."
                            },
                            {
                                icon: <Mic className="w-8 h-8" />,
                                title: "Ultra-Realistic Voices",
                                desc: "Premium cloned voices with sub-second latency. They breathe, pause, and handle interruptions like a human."
                            },
                            {
                                icon: <BrainCircuit className="w-8 h-8" />,
                                title: "Dynamic Logic",
                                desc: "Follows your custom sales script, handles objections naturally, and qualifies prospects based on firmographic data."
                            },
                            {
                                icon: <PhoneCall className="w-8 h-8" />,
                                title: "Infinite Concurrency",
                                desc: "Whether you get 1 lead or 10,000 simultaneously, none will ever be put on hold."
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8" />,
                                title: "Post-Call Summaries",
                                desc: "Call transcripts, sentiment analysis, and qualified tags are instantly pushed to your CRM via Webhooks."
                            },
                            {
                                icon: <Activity className="w-8 h-8" />,
                                title: "Live Call Transfer",
                                desc: "When the agent identifies a hot, qualified lead, it can instantly cold-transfer the call to your human closers."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "100px" }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group"
                            >
                                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-24 px-4 md:px-8 bg-neutral-950 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            More booked meetings.<br/>
                            <span className="text-orange-500">Zero salary costs.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "No sick days or holidays",
                                "Never goes off-script or has a 'bad day'",
                                "Costs a fraction of a human Call Center seat",
                                "Perfectly logs every interaction in your CRM",
                                "Scales up and down instantly with ad spend"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
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
                        className="flex-1 w-full bg-black border border-white/10 rounded-3xl p-8 relative overflow-hidden"
                    >
                        {/* Abstract Chart Graphic */}
                        <div className="absolute inset-0 opacity-10 blur-xl">
                            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-between border-b border-white/10 pb-6">
                                <div>
                                    <p className="text-sm text-neutral-400 font-bold uppercase tracking-wider mb-1">Increase in Contact Rate</p>
                                    <p className="text-4xl font-black text-white">+ 340%</p>
                                </div>
                                <LineChart className="w-12 h-12 text-orange-500 opacity-50" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">The ROI is instantaneous</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Our clients typically see their voice agent pay for its entire annual build and maintenance cost within the first 14 days of operation simply by catching leads that human reps normally miss.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-8 bg-black relative border-t border-white/5 text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 to-transparent pointer-events-none" />
                <div className="max-w-3xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Ready to hire the perfect SDR?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-10">
                            Book a call to hear a live demo of the voice agent in action. Prepare to be amazed.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.2)] uppercase tracking-wide text-sm"
                        >
                            HEAR IT FOR YOURSELF
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}