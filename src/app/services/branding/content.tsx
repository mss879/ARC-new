"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Palette, Target, Package, FileText, Image, Sparkles } from "lucide-react";
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

export default function BrandingContent() {
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
                            {["BRANDING", "THAT SPEAKS"].map((word, i) => (
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
                        Crafting visual identities that feel clear, timeless, and true to your brand.
                        From logos to complete brand systems that make an impact.
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
                                Start Your Brand
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:border-neutral-500 transition-colors"
                        >
                            View Brand Work
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Brand Strategy Section */}
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
                                Our Brand Strategy
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Building brands that resonate and endure</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <Target className="w-8 h-8" />,
                                title: "Brand Discovery",
                                description: "Deep dive into your business values, mission, and target audience. We uncover what makes your brand unique and how to communicate it effectively."
                            },
                            {
                                icon: <Palette className="w-8 h-8" />,
                                title: "Visual Identity",
                                description: "Creating cohesive visual systems including logos, color palettes, typography, and imagery that capture your brand essence."
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "Brand Guidelines",
                                description: "Comprehensive documentation ensuring consistent brand application across all touchpoints, from digital to print."
                            },
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: "Brand Experience",
                                description: "Designing every customer interaction to reinforce your brand values and create memorable experiences."
                            }
                        ].map((item, index) => (
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
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-neutral-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included Section */}
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
                                Deliverables
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Everything you need for a complete brand identity</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                category: "Logo Design",
                                items: [
                                    "Primary logo variations",
                                    "Secondary/alternate logos",
                                    "Icon/symbol mark",
                                    "Black & white versions",
                                    "All file formats (SVG, PNG, PDF, EPS)"
                                ]
                            },
                            {
                                category: "Color System",
                                items: [
                                    "Primary color palette",
                                    "Secondary/accent colors",
                                    "Color usage guidelines",
                                    "RGB, CMYK, HEX values",
                                    "Gradient specifications"
                                ]
                            },
                            {
                                category: "Typography",
                                items: [
                                    "Primary & secondary fonts",
                                    "Font hierarchy system",
                                    "Type scale specifications",
                                    "Web font licenses",
                                    "Typography guidelines"
                                ]
                            },
                            {
                                category: "Brand Patterns",
                                items: [
                                    "Custom graphic elements",
                                    "Pattern designs",
                                    "Iconography set",
                                    "Illustration style",
                                    "Photography direction"
                                ]
                            },
                            {
                                category: "Brand Guidelines",
                                items: [
                                    "Complete brand manual",
                                    "Logo usage rules",
                                    "Do's and don'ts",
                                    "Application examples",
                                    "Print specifications"
                                ]
                            },
                            {
                                category: "Templates",
                                items: [
                                    "Business card design",
                                    "Letterhead & envelope",
                                    "Email signature",
                                    "Social media templates",
                                    "Presentation deck"
                                ]
                            }
                        ].map((deliverable, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-black border border-neutral-800 rounded-xl"
                            >
                                <Package className="w-10 h-10 text-accent mb-4" />
                                <h3 className="text-xl font-bold mb-4">{deliverable.category}</h3>
                                <ul className="space-y-2">
                                    {deliverable.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-neutral-400">
                                            <span className="text-accent mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branding Process */}
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
                                The Process
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">A systematic approach to building your brand</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

                        {[
                            {
                                step: "01",
                                title: "Brand Workshop",
                                description: "Collaborative sessions to understand your vision, values, mission, and market positioning. We explore competitors and identify opportunities."
                            },
                            {
                                step: "02",
                                title: "Research & Moodboards",
                                description: "Visual exploration of styles, trends, and directions. Creating moodboards to align on aesthetic direction before design begins."
                            },
                            {
                                step: "03",
                                title: "Concept Development",
                                description: "Developing 3-5 distinct brand concepts with initial logo explorations, color directions, and typography options."
                            },
                            {
                                step: "04",
                                title: "Refinement",
                                description: "Selecting the strongest direction and refining every detail. Testing across applications and gathering feedback."
                            },
                            {
                                step: "05",
                                title: "Brand System Creation",
                                description: "Building out the complete brand system with all assets, guidelines, and templates ready for implementation."
                            },
                            {
                                step: "06",
                                title: "Delivery & Support",
                                description: "Final delivery of all assets with comprehensive guidelines. Ongoing support for implementation and questions."
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
                            Let's Create Your Brand Identity
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Build a brand that stands out and resonates with your audience. Start your journey today.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                            Begin Your Brand
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
