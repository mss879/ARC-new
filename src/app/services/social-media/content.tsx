"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Instagram, Twitter, Facebook, Linkedin, TrendingUp, Users, BarChart3, Calendar } from "lucide-react";
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

export default function SocialMediaContent() {
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
                            {["SOCIAL MEDIA", "MASTERY"].map((word, i) => (
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
                        Branded templates and content systems to help you stay consistent and scroll-worthy.
                        Engage your audience with stunning social media presence.
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
                                Boost Your Presence
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:border-neutral-500 transition-colors"
                        >
                            See Our Content
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Platforms We Cover */}
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
                                Platforms We Master
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Expert content creation for all major social platforms</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Instagram className="w-12 h-12" />,
                                name: "Instagram",
                                color: "from-purple-600 to-pink-600"
                            },
                            {
                                icon: <Facebook className="w-12 h-12" />,
                                name: "Facebook",
                                color: "from-blue-600 to-blue-400"
                            },
                            {
                                icon: <Twitter className="w-12 h-12" />,
                                name: "X (Twitter)",
                                color: "from-gray-600 to-gray-400"
                            },
                            {
                                icon: <Linkedin className="w-12 h-12" />,
                                name: "LinkedIn",
                                color: "from-blue-700 to-blue-500"
                            }
                        ].map((platform, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all text-center"
                            >
                                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                                    {platform.icon}
                                </div>
                                <h3 className="text-xl font-bold">{platform.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Offered */}
            <section className="py-20 px-4 md:px-8 bg-neutral-950">
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
                                What We Offer
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Comprehensive social media solutions</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Content Strategy",
                                description: "Data-driven content strategies that align with your brand goals and resonate with your target audience."
                            },
                            {
                                icon: <Calendar className="w-8 h-8" />,
                                title: "Content Calendar",
                                description: "Organized posting schedules with planned themes, campaigns, and seasonal content to maintain consistency."
                            },
                            {
                                icon: <Instagram className="w-8 h-8" />,
                                title: "Instagram Design",
                                description: "Stunning feed designs, story templates, reel covers, and highlight icons that create a cohesive aesthetic."
                            },
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "Story Kits",
                                description: "Custom Instagram Story templates for announcements, promotions, behind-the-scenes, and daily engagement."
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8" />,
                                title: "Analytics & Reporting",
                                description: "Monthly performance reports with insights, growth metrics, and data-driven recommendations."
                            },
                            {
                                icon: <Facebook className="w-8 h-8" />,
                                title: "Multi-Platform Posts",
                                description: "Optimized content variations for each platform, ensuring maximum engagement across all channels."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900"
                            >
                                <div className="w-16 h-16 mb-6 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-neutral-400">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Template Kits */}
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
                                Template Kits
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Ready-to-use templates for consistent branding</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Feed Post Templates",
                                count: "30+",
                                items: [
                                    "Quote graphics",
                                    "Product showcases",
                                    "Promotional posts",
                                    "Educational carousels",
                                    "Behind-the-scenes",
                                    "Customer testimonials"
                                ]
                            },
                            {
                                title: "Story Templates",
                                count: "50+",
                                items: [
                                    "Daily updates",
                                    "Polls & questions",
                                    "Countdown timers",
                                    "Product launches",
                                    "Engagement stickers",
                                    "Announcement frames"
                                ]
                            },
                            {
                                title: "Highlight Covers",
                                count: "20+",
                                items: [
                                    "Custom icon sets",
                                    "Brand-aligned colors",
                                    "Multiple style options",
                                    "All categories covered",
                                    "Easy customization",
                                    "Multiple formats"
                                ]
                            },
                            {
                                title: "Reel Covers",
                                count: "25+",
                                items: [
                                    "On-brand designs",
                                    "Text overlay options",
                                    "Video thumbnails",
                                    "Series identifiers",
                                    "Call-to-action frames",
                                    "Trending formats"
                                ]
                            }
                        ].map((kit, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-neutral-900/50 border border-neutral-800 rounded-xl"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold">{kit.title}</h3>
                                    <span className="text-4xl font-bold text-accent">{kit.count}</span>
                                </div>
                                <ul className="grid grid-cols-2 gap-3">
                                    {kit.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-neutral-400">
                                            <span className="text-accent mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Strategy Process */}
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
                                Our Approach
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Strategic content creation that delivers results</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

                        {[
                            {
                                step: "01",
                                title: "Audience Research",
                                description: "Deep analysis of your target audience, their preferences, behaviors, and the content they engage with most."
                            },
                            {
                                step: "02",
                                title: "Brand Alignment",
                                description: "Ensuring all content reflects your brand voice, values, and visual identity across every post and platform."
                            },
                            {
                                step: "03",
                                title: "Content Creation",
                                description: "Designing scroll-stopping visuals and crafting compelling copy that drives engagement and conversions."
                            },
                            {
                                step: "04",
                                title: "Scheduling & Optimization",
                                description: "Strategic posting times based on audience activity, with A/B testing to maximize reach and engagement."
                            },
                            {
                                step: "05",
                                title: "Community Management",
                                description: "Active engagement with your audience, responding to comments, messages, and building relationships."
                            },
                            {
                                step: "06",
                                title: "Performance Analysis",
                                description: "Monthly reports with insights, growth tracking, and strategic recommendations for continuous improvement."
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

                                <div className="p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all">
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
                            Ready to Dominate Social Media?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Transform your social presence with stunning, consistent content. Let's grow your audience together.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                            Elevate Your Brand
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
