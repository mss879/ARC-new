"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Search, Mails, Calendar, Users, Target, Activity } from "lucide-react";
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

export default function AISalesSDRsContent() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="AI SDR overview">
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-black to-[#020202] z-0" aria-hidden="true" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
                
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                            {["AUTOPILOT", "PROSPECTING"].map((word, i) => (
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
                        AI SDRs that scrape LinkedIn, read company news, write hyper-personalized outreach, and book meetings on your calendar. At massive scale.
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
                            <Calendar className="w-5 h-5" />
                            Book Your Sales SDR
                        </Link>
                        <a
                            href="#process"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-colors flex items-center justify-center"
                        >
                            See How It Works
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section id="process" className="py-24 px-4 md:px-8 bg-black relative border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 block">The Outbound Evolution</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Generic cold email is dead. Personalization at scale is the only way.
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed">
                            Humans take 15 minutes to research a prospect and write a clever email. They can do 30 a day. Our AI SDR reads their last 3 LinkedIn posts, their company's latest funding round, and writes a perfect email in 3 seconds. It does 5,000 a day.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Search className="w-8 h-8" />,
                                title: "Deep Web Scraping",
                                desc: "Agent automatically scans LinkedIn, company websites, and recent news to gather unique data points on your target leads."
                            },
                            {
                                icon: <Mails className="w-8 h-8" />,
                                title: "1-to-1 Personalization",
                                desc: "Generates highly specific, customized messaging for every single prospect, referencing their exact pain points and situation."
                            },
                            {
                                icon: <Activity className="w-8 h-8" />,
                                title: "Objection Handling",
                                desc: "When a prospect replies 'Not right now', the AI reads the intent, adjusts the posture, and sends a polite follow-up a month later."
                            },
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Automated Follow-ups",
                                desc: "No more manually pinging cold leads. Multi-channel follow-up sequences are executed flawlessly based on prospect behavior."
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Lead Qualification",
                                desc: "Sorts positive replies, books them directly into your human closers' calendars, and ignores out-of-office bouncebacks."
                            },
                            {
                                icon: <Calendar className="w-8 h-8" />,
                                title: "End-to-end Booking",
                                desc: "The ultimate result: you open your calendar in the morning, and it is full of qualified meetings you never prospected for."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "100px" }}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/[0.02] border border-white/5 p-8 rounded-[24px] hover:bg-white/[0.04] hover:border-orange-500/20 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-neutral-400 leading-relaxed text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 px-4 md:px-8 bg-[#020202] border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            The unfair advantage of an <span className="text-orange-500">AI Sales Team.</span>
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Send 1,000 highly researched emails a day automatically",
                                "Zero cold-calling anxiety or burnout",
                                "Detect out-of-office replies automatically",
                                "Achieve 8-12% positive reply rates on cold traffic",
                                "Free your human closers to ONLY take booked meetings"
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
                        className="flex-1 w-full"
                    >
                        <div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-6 text-white pb-6 border-b border-white/10">Human SDR vs AI SDR</h3>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm text-neutral-500 mb-1">Human Output (Daily)</p>
                                        <p className="text-xl font-medium text-white">~50 researched emails</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-neutral-500 mb-1">Cost</p>
                                        <p className="text-xl font-medium text-red-400">$60k+ / year</p>
                                    </div>
                                </div>
                                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-red-400 h-full w-[10%]" />
                                </div>

                                <div className="flex justify-between items-end pt-4">
                                    <div>
                                        <p className="text-sm text-orange-500/70 font-bold mb-1">AI Output (Daily)</p>
                                        <p className="text-3xl font-black text-orange-400">5,000+ emails</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-orange-500/70 font-bold mb-1">Quality</p>
                                        <p className="text-xl font-bold text-orange-400">Identical to Human</p>
                                    </div>
                                </div>
                                <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-orange-500 h-full w-full" />
                                </div>
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
                            Ready to fill your pipeline?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-10">
                            Stop paying humans to do robotic tasks. Let your human closers close, and let the AI hunt.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-500 transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,88,12,0.2)] uppercase tracking-wide text-sm"
                        >
                            BUILD YOUR SDR PIPELINE
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}