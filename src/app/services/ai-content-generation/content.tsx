"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, FileText, Image as ImageIcon, Mail, MessageSquare, Pen, Sparkles, Video } from "lucide-react";
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

export default function AIContentGenerationContent() {
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
                            {["AI CONTENT", "GENERATION"].map((word, i) => (
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
                        Seamless content creation that generates captivating, high-quality content
                        in line with your brand's voice. Scale your content without compromising quality.
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
                                Get Started
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="#demo"
                            className="px-8 py-4 border border-neutral-700 text-white font-semibold rounded-lg hover:border-neutral-500 transition-colors"
                        >
                            See Demo
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Content Types */}
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
                                Content We Generate
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">AI-powered content for every need</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "Blog Posts & Articles",
                                items: ["SEO-optimized", "Research-backed", "Long-form content", "Multiple niches"]
                            },
                            {
                                icon: <MessageSquare className="w-8 h-8" />,
                                title: "Social Media Content",
                                items: ["Captions", "Hashtags", "Post ideas", "Platform-specific"]
                            },
                            {
                                icon: <Mail className="w-8 h-8" />,
                                title: "Email Campaigns",
                                items: ["Subject lines", "Body content", "CTAs", "A/B variants"]
                            },
                            {
                                icon: <Pen className="w-8 h-8" />,
                                title: "Product Descriptions",
                                items: ["E-commerce copy", "Feature highlights", "SEO keywords", "Persuasive"]
                            },
                            {
                                icon: <Video className="w-8 h-8" />,
                                title: "Video Scripts",
                                items: ["YouTube scripts", "Ads", "Explainers", "Social videos"]
                            },
                            {
                                icon: <ImageIcon className="w-8 h-8" />,
                                title: "Ad Copy",
                                items: ["Google Ads", "Facebook Ads", "Headlines", "Descriptions"]
                            },
                            {
                                icon: <FileText className="w-8 h-8" />,
                                title: "Landing Pages",
                                items: ["Headlines", "Value props", "Feature lists", "CTAs"]
                            },
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: "Creative Content",
                                items: ["Taglines", "Slogans", "Brand stories", "Press releases"]
                            }
                        ].map((type, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.05 }}
                                className="group p-6 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent/50 transition-all hover:bg-neutral-900"
                            >
                                <div className="w-14 h-14 mb-4 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                    {type.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3">{type.title}</h3>
                                <ul className="space-y-1">
                                    {type.items.map((item, i) => (
                                        <li key={i} className="text-sm text-neutral-400">• {item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Capabilities */}
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
                                AI-Powered Features
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Advanced capabilities for superior content</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Brand Voice Training",
                                description: "Train AI on your brand guidelines, tone, and style to ensure all content matches your unique voice."
                            },
                            {
                                title: "Multi-Language Support",
                                description: "Generate content in 50+ languages with native fluency and cultural context awareness."
                            },
                            {
                                title: "SEO Optimization",
                                description: "Automatic keyword integration, meta descriptions, and search-optimized structure."
                            },
                            {
                                title: "Plagiarism-Free",
                                description: "100% original content with built-in plagiarism checking and uniqueness guarantees."
                            },
                            {
                                title: "Tone Adjustment",
                                description: "Switch between professional, casual, persuasive, informative, and more tones instantly."
                            },
                            {
                                title: "Content Repurposing",
                                description: "Transform one piece of content into multiple formats across different platforms."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-black border border-neutral-800 rounded-xl hover:border-accent/50 transition-all"
                            >
                                <Sparkles className="w-10 h-10 text-accent mb-4" />
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-neutral-400">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Assurance */}
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
                                Quality Assurance
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Rigorous checks ensure content excellence</p>
                    </motion.div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

                        {[
                            {
                                step: "01",
                                title: "AI Generation",
                                description: "Advanced language models create initial content based on your requirements and brand guidelines."
                            },
                            {
                                step: "02",
                                title: "Brand Alignment Check",
                                description: "Automated systems verify tone, style, and messaging match your brand voice and values."
                            },
                            {
                                step: "03",
                                title: "SEO & Readability",
                                description: "Content is optimized for search engines and checked for readability, flow, and engagement."
                            },
                            {
                                step: "04",
                                title: "Human Review",
                                description: "Expert editors review and refine content to add human touch and ensure quality standards."
                            },
                            {
                                step: "05",
                                title: "Client Approval",
                                description: "You review and approve content with unlimited revisions until it's perfect."
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

            {/* Integration Options */}
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
                                Integration Options
                            </span>
                        </h2>
                        <p className="text-neutral-400 text-lg">Seamlessly integrate with your workflow</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "WordPress", "Shopify", "HubSpot", "Contentful",
                            "Webflow", "Mailchimp", "Hootsuite", "Buffer",
                            "Slack", "Zapier", "API Access", "Custom Solutions"
                        ].map((integration, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.05 }}
                                className="p-6 bg-black border border-neutral-800 rounded-lg text-center hover:border-accent/50 transition-all hover:scale-105"
                            >
                                <p className="font-semibold">{integration}</p>
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
                            Scale Your Content Creation
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Generate high-quality content at scale without compromising your brand voice. Start today.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                            Start Generating Content
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
