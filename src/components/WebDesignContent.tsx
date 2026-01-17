"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Code2, Palette, Rocket, Search, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
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

export default function WebDesignContent() {
    const [activePricing, setActivePricing] = useState<"starter" | "professional" | "enterprise">("professional");

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
                <div
                    className="absolute inset-0 opacity-20"
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
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                            {["WEB DESIGN &", "DEVELOPMENT"].map((word, i) => (
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
                        Craft stunning, high-performance websites that captivate audiences and drive results.
                        Responsive design meets cutting-edge technology.
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
                        <Link
                            href="/portfolio"
                            className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:border-neutral-500 transition-colors"
                        >
                            View Our Work
                        </Link>
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
                                What We Deliver
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Comprehensive web solutions tailored to your needs</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Palette className="w-8 h-8" />,
                                title: "Responsive Design",
                                description: "Beautiful, mobile-first designs that work flawlessly across all devices and screen sizes. Every pixel matters."
                            },
                            {
                                icon: <Code2 className="w-8 h-8" />,
                                title: "Modern Development",
                                description: "Built with the latest technologies: React, Next.js, TypeScript. Clean, maintainable, and scalable code."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Lightning Fast",
                                description: "Optimized for speed with sub-second load times. Core Web Vitals perfection for better user experience and SEO."
                            },
                            {
                                icon: <Search className="w-8 h-8" />,
                                title: "SEO Optimization",
                                description: "Built-in SEO best practices, structured data, and meta optimization to rank higher in search results."
                            },
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Security First",
                                description: "Enterprise-grade security measures, SSL certificates, and regular updates to keep your site protected."
                            },
                            {
                                icon: <Rocket className="w-8 h-8" />,
                                title: "CMS Integration",
                                description: "Easy content management with headless CMS solutions. Update your site without touching code."
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

            {/* Process Section */}
            <section className="py-20 px-4 md:px-8 bg-black">
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
                                Our Process
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">From concept to launch, we've got you covered</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

                        {[
                            {
                                step: "01",
                                title: "Discovery & Planning",
                                description: "We start by understanding your business goals, target audience, and project requirements. Comprehensive research and strategic planning."
                            },
                            {
                                step: "02",
                                title: "Design & Prototyping",
                                description: "Creating wireframes and high-fidelity designs. Interactive prototypes for testing user flows and gathering feedback early."
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "Building your website with clean, efficient code. Regular progress updates and iterative development cycles."
                            },
                            {
                                step: "04",
                                title: "Testing & Quality Assurance",
                                description: "Rigorous testing across devices, browsers, and screen sizes. Performance optimization and security audits."
                            },
                            {
                                step: "05",
                                title: "Launch & Support",
                                description: "Smooth deployment and post-launch monitoring. Ongoing maintenance, updates, and support to ensure continued success."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="relative mb-12 last:mb-0 md:pl-24"
                            >
                                {/* Step Number Circle */}
                                <div className="absolute left-0 w-16 h-16 bg-accent rounded-full items-center justify-center font-bold text-xl hidden md:flex">
                                    {item.step}
                                </div>

                                <div className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all">
                                    <div className="flex items-center gap-4 mb-3 md:hidden">
                                        <span className="text-3xl font-bold text-accent">{item.step}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-neutral-400 text-lg">{item.description}</p>
                                </div>
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
                                Technology Stack
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Powered by industry-leading technologies</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            "React", "Next.js", "TypeScript", "Tailwind CSS",
                            "Node.js", "MongoDB", "PostgreSQL", "GraphQL",
                            "AWS", "Vercel", "Docker", "Git"
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
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Let's create a website that stands out and delivers results. Get in touch today.
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
