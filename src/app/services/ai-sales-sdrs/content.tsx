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
        <div className="home-cream min-h-screen bg-transparent text-ink selection:bg-ember/30">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 overflow-hidden" aria-label="AI SDR overview">
                <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper to-paper z-0" aria-hidden="true" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ember/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none hidden" />
                
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em]">
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
                        className="text-xl md:text-2xl text-ink-soft max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
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
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] w-full sm:w-auto px-8 py-4 bg-ember hover:bg-[#FF5C3A] text-ink font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Your Sales SDR
                        </Link>
                        <a
                            href="#process"
                            className="cut-btn [--cut:12px] w-full sm:w-auto px-8 py-4 bg-white/70 hover:bg-white [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold transition-colors flex items-center justify-center"
                        >
                            See How It Works
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Core Features Grid */}
            <section id="process" className="py-24 px-4 md:px-8 bg-transparent relative border-t border-ink/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="mb-16 md:text-center max-w-4xl mx-auto"
                    >
                        <span className="text-ember-deep font-bold tracking-widest text-sm uppercase mb-4 block">The Outbound Evolution</span>
                        <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-[-0.035em]">
                            Generic cold email is dead. Personalization at scale is the only way.
                        </h2>
                        <p className="text-ink-soft text-lg leading-relaxed">
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
                                className="cut-card [--cut:22px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 hover:bg-white hover:[--cut-line:rgba(255,73,37,0.2)] transition-all duration-300 group"
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

            {/* Comparison Section */}
            <section className="py-24 px-4 md:px-8 bg-transparent border-t border-ink/10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex-1 space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-[-0.035em]">
                            The unfair advantage of an <span className="text-ember-ink">AI Sales Team.</span>
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
                        <div className="cut-card [--cut:22px] bg-gradient-to-br from-paper to-paper p-8 [--cut-line:rgba(27,26,23,0.1)] relative overflow-hidden">
                            <h3 className="text-2xl font-bold mb-6 text-ink pb-6 border-b border-ink/10">Human SDR vs AI SDR</h3>
                            
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-sm text-ink-mute mb-1">Human Output (Daily)</p>
                                        <p className="text-xl font-medium text-ink">~50 researched emails</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-ink-mute mb-1">Cost</p>
                                        <p className="text-xl font-medium text-red-700">$60k+ / year</p>
                                    </div>
                                </div>
                                <div className="w-full bg-ink/[0.05] h-2 rounded-full overflow-hidden">
                                    <div className="bg-red-400 h-full w-[10%]" />
                                </div>

                                <div className="flex justify-between items-end pt-4">
                                    <div>
                                        <p className="text-sm text-ember-deep font-bold mb-1">AI Output (Daily)</p>
                                        <p className="text-3xl font-black text-ember-ink">5,000+ emails</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-ember-deep font-bold mb-1">Quality</p>
                                        <p className="text-xl font-bold text-ember-deep">Identical to Human</p>
                                    </div>
                                </div>
                                <div className="w-full bg-ink/[0.05] h-2 rounded-full overflow-hidden">
                                    <div className="bg-ember h-full w-full" />
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
                            Ready to fill your pipeline?
                        </h2>
                        <p className="text-xl text-ink-soft mb-10">
                            Stop paying humans to do robotic tasks. Let your human closers close, and let the AI hunt.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-10 py-5 bg-ember text-ink font-bold hover:bg-[#FF5C3A] transition-all hover:scale-105 uppercase tracking-wide text-sm"
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