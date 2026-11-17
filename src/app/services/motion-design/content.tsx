"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Zap, MousePointer2, Play, Sparkles, Layers, Eye } from "lucide-react";
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

export default function MotionDesignContent() {
    return (
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20" aria-label="Motion design overview">
                <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper" aria-hidden="true" />
                <div
                    className="absolute inset-0 opacity-20"
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
                        className="mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em]">
                            {["MOTION", "DESIGN"].map((word, i) => (
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
                        className="text-xl md:text-2xl text-ink-soft max-w-3xl mx-auto mb-12"
                    >
                        Thoughtful animations that add rhythm, clarity, and life to your interface.
                        Transform static designs into engaging experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.7 }}
                        className="flex flex-wrap gap-4 justify-center"
                    >
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] group relative px-8 py-4 bg-ember text-ink font-semibold overflow-hidden transition-all hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Animate Your Brand
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="/portfolio"
                            className="cut-btn [--cut:12px] px-8 py-4 [--cut-line:rgba(27,26,23,0.1)] text-ink font-semibold hover:[--cut-line:rgba(27,26,23,0.3)] transition-colors"
                        >
                            View Motion Work
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Animation Types */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                Animation Specialties
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Bringing interfaces to life with purposeful motion</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MousePointer2 className="w-8 h-8" />,
                                title: "Micro-interactions",
                                description: "Subtle button animations, hover effects, and feedback cues that enhance user experience and provide visual confirmation."
                            },
                            {
                                icon: <Zap className="w-8 h-8" />,
                                title: "Scroll Effects",
                                description: "Parallax scrolling, reveal animations, and scroll-triggered effects that create depth and guide user attention."
                            },
                            {
                                icon: <Sparkles className="w-8 h-8" />,
                                title: "Hover States",
                                description: "Interactive hover animations for cards, buttons, and navigation that add polish and encourage engagement."
                            },
                            {
                                icon: <Layers className="w-8 h-8" />,
                                title: "Page Transitions",
                                description: "Smooth transitions between pages and sections that maintain context and create seamless user journeys."
                            },
                            {
                                icon: <Play className="w-8 h-8" />,
                                title: "Loading Animations",
                                description: "Custom loaders and skeleton screens that reduce perceived wait times and maintain user engagement."
                            },
                            {
                                icon: <Eye className="w-8 h-8" />,
                                title: "Entrance Animations",
                                description: "Fade-ins, slides, and reveals that introduce content in an engaging, hierarchical manner."
                            }
                        ].map((type, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="cut-card [--cut:14px] relative group p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] hover:[--cut-line:rgba(255,73,37,0.5)] transition-all hover:bg-white"
                            >
                                <div className="w-16 h-16 mb-6 rounded-lg bg-ember/10 flex items-center justify-center text-ember-deep group-hover:scale-110 transition-transform">
                                    {type.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                                <p className="text-ink-soft">{type.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                Where Motion Shines
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Perfect applications for animated experiences</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Website Interactions",
                                description: "Enhance user experience with smooth, intuitive animations that guide users through your site.",
                                examples: ["Navigation transitions", "Form validations", "Product galleries", "Call-to-action buttons"]
                            },
                            {
                                title: "Landing Pages",
                                description: "Create memorable first impressions with engaging scroll-triggered animations and hero sections.",
                                examples: ["Hero animations", "Scroll reveals", "Statistics counters", "Feature showcases"]
                            },
                            {
                                title: "App Interfaces",
                                description: "Improve usability with clear feedback animations and seamless state transitions.",
                                examples: ["Onboarding flows", "Pull-to-refresh", "Swipe gestures", "Navigation drawers"]
                            },
                            {
                                title: "Marketing Content",
                                description: "Captivate audiences with eye-catching animations for social media and advertising.",
                                examples: ["Social media ads", "Animated logos", "Product demos", "Explainer videos"]
                            },
                            {
                                title: "E-commerce",
                                description: "Boost conversions with engaging product presentations and cart interactions.",
                                examples: ["Product reveals", "Add-to-cart animations", "Wishlist interactions", "Checkout flow"]
                            },
                            {
                                title: "Brand Experiences",
                                description: "Reinforce brand identity with consistent, on-brand motion design language.",
                                examples: ["Loading screens", "Brand guidelines", "Presentation decks", "Email animations"]
                            }
                        ].map((useCase, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="cut-card [--cut:14px] relative p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] "
                            >
                                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                                <p className="text-ink-soft mb-6">{useCase.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {useCase.examples.map((example, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/70 border border-ink/10 rounded-full text-sm text-ink-soft"
                                        >
                                            {example}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology & Tools */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                Tools & Technologies
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Industry-leading animation frameworks and tools</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "Framer Motion",
                            "GSAP",
                            "Lottie",
                            "CSS Animations",
                            "Three.js",
                            "After Effects",
                            "Principle",
                            "Rive"
                        ].map((tool, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.05 }}
                                className="cut-card [--cut:12px] relative p-6 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] text-center hover:[--cut-line:rgba(255,73,37,0.5)] transition-all hover:scale-105"
                            >
                                <p className="font-semibold">{tool}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                            <span className="text-ink">
                                What You Get
                            </span>
                        </h2>
                        <p className="text-ink-soft text-lg">Comprehensive motion design deliverables</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Animation Files",
                                items: [
                                    "Lottie JSON files",
                                    "After Effects projects",
                                    "MP4/GIF exports",
                                    "SVG animations",
                                    "Web-ready formats"
                                ]
                            },
                            {
                                title: "Code Implementation",
                                items: [
                                    "React components",
                                    "CSS animations",
                                    "JavaScript snippets",
                                    "Integration docs",
                                    "Performance optimized"
                                ]
                            },
                            {
                                title: "Documentation",
                                items: [
                                    "Animation guidelines",
                                    "Timing specifications",
                                    "Easing functions",
                                    "Implementation guide",
                                    "Best practices"
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
                                className="cut-card [--cut:14px] relative p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] "
                            >
                                <h3 className="text-xl font-bold mb-6">{deliverable.title}</h3>
                                <ul className="space-y-3">
                                    {deliverable.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-ink-soft">
                                            <span className="text-ember-deep mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-paper to-paper" aria-label="Get started with motion design">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Bring Your Interface to Life
                        </h2>
                        <p className="text-xl text-ink-soft mb-8">
                            Create memorable experiences with thoughtful motion design. Let's animate your vision.
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
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
