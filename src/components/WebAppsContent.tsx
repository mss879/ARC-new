"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Code2, Database, Globe, Layers, Layout, Lock, Zap } from "lucide-react";
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

export default function WebAppsContent() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.15) 1px, transparent 0)`,
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
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                            {["CUSTOM", "WEB APPS"].map((word, i) => (
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
                        className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12"
                    >
                        Build software that scales with your business. We create custom web applications
                        tailored to your unique workflows and goals.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-accent text-white font-semibold rounded-lg overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-20 px-4 md:px-8 bg-neutral-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Off-the-shelf software holding you back?
                        </h2>
                        <div className="space-y-6 text-neutral-400 text-lg">
                            <p>
                                Generic tools are built for "everyone," which means they aren't built for
                                <span className="text-white font-semibold"> you</span>. You're stuck with clunky workarounds, manual data entry, and systems that don't talk to each other.
                            </p>
                            <p>
                                Your team is frustrated, your data is scattered, and your growth is bottlenecked by software that slows you down instead of speeding you up.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-4 text-white">The Custom Solution</h3>
                        <p className="text-neutral-400 mb-6">
                            We build web applications tailored exactly to how your business operates. From internal tools to customer-facing SaaS platforms, we create software that becomes your competitive advantage.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Eliminate manual processes",
                                "Centralize your data",
                                "Automate complex workflows",
                                "Scale without limits"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-20 px-4 md:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                Power & Performance
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Enterprise-grade features for your custom application</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Layout className="w-8 h-8" />,
                                title: "Intuitive UX/UI",
                                description: "Interfaces your team will actually enjoy using. Minimal learning curve, maximum productivity."
                            },
                            {
                                icon: <Database className="w-8 h-8" />,
                                title: "Scalable Architecture",
                                description: "Built to handle growth. From 100 to 1,000,000 users, your app will perform flawlessly."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Real-time Updates",
                                description: "Collaborate instantly with live data updates. No more refreshing the page."
                            },
                            {
                                icon: <Lock className="w-8 h-8" />,
                                title: "Enterprise Security",
                                description: "Bank-level encryption, role-based access control, and secure data handling."
                            },
                            {
                                icon: <Layers className="w-8 h-8" />,
                                title: "Seamless Integration",
                                description: "Connects with your existing tools (CRM, ERP, Slack, etc.) for a unified workflow."
                            },
                            {
                                icon: <Globe className="w-8 h-8" />,
                                title: "Cloud Native",
                                description: "Deployed on global edge networks for lightning-fast access from anywhere in the world."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900"
                            >
                                <div className="w-16 h-16 mb-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-neutral-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 px-4 md:px-8 bg-neutral-950">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
                                Built with Modern Tech
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">We use the best tools for the job</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            "Next.js", "React", "Node.js", "PostgreSQL",
                            "Redis", "Docker", "AWS", "GraphQL",
                            "Typescript", "Tailwind", "Prisma", "Vercel"
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.05 }}
                                className="p-6 bg-black border border-neutral-800 rounded-lg text-center hover:border-accent/50 transition-all hover:scale-105"
                            >
                                <p className="font-semibold">{tech}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Ready to Upgrade Your Business?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Let's build the custom software your business deserves.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
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
