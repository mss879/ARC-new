"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
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

export default function BlogList() {
    const blogPosts = [
        {
            id: "ai-agents-sri-lanka",
            title: "The Rise of AI Agents: Transforming Business Operations in Sri Lanka",
            date: "March 20, 2025",
            category: "Artificial Intelligence",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80",
            excerpt: "Learn how AI Agents are revolutionizing Sri Lankan industries from tourism to real estate by automating tasks and improving customer engagement.",
            tags: ["AI Agents", "Automation", "Sri Lanka Business", "Hospitality AI"]
        },
        {
            id: "websites-vs-smart-websites-sri-lanka",
            title: "Websites vs. Smart Websites: Why Sri Lankan Businesses Need to Upgrade",
            date: "March 15, 2025",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80",
            excerpt: "Discover the difference between traditional static websites and modern Smart Websites. Learn why Sri Lankan businesses need to upgrade for 24/7 engagement.",
            tags: ["Smart Websites", "Web Development", "Sri Lanka Business", "Digital Transformation"]
        },
        {
            id: "ai-automation-transform-business-2024",
            title: "How AI Automation is Transforming Businesses in 2024",
            date: "Oct 11, 2024",
            category: "AI Automation",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
            excerpt: "Discover how AI automation is revolutionizing business operations, increasing efficiency, and reducing costs across industries.",
            tags: ["AI Automation", "Business Transformation", "Machine Learning", "Productivity"]
        },
        {
            id: "digital-marketing-strategies-2024",
            title: "10 Digital Marketing Strategies That Actually Work in 2024",
            date: "Oct 5, 2024",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
            excerpt: "Learn the most effective digital marketing strategies to grow your brand, engage customers, and increase conversions in today's competitive landscape.",
            tags: ["Digital Marketing", "SEO", "Social Media", "Content Marketing"]
        },
        {
            id: "ai-chatbots-customer-service",
            title: "The Ultimate Guide to AI Chatbots for Customer Service",
            date: "Sep 28, 2024",
            category: "AI Automation",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80",
            excerpt: "AI chatbots are revolutionizing customer service. Learn how to implement intelligent conversational AI to enhance customer experience 24/7.",
            tags: ["AI Chatbots", "Customer Service", "Conversational AI", "Automation"]
        },
        {
            id: "seo-optimization-best-practices",
            title: "SEO Optimization Best Practices to Rank #1 on Google",
            date: "Sep 20, 2024",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80",
            excerpt: "Master the art of SEO with proven strategies for keyword research, on-page optimization, link building, and technical SEO to dominate search rankings.",
            tags: ["SEO", "Google Rankings", "Keyword Research", "Content Optimization"]
        },
        {
            id: "workflow-automation-tools-2024",
            title: "Top 10 Workflow Automation Tools Every Business Needs",
            date: "Sep 15, 2024",
            category: "AI Automation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
            excerpt: "Streamline your business processes with these powerful workflow automation tools. Save time, reduce errors, and boost productivity instantly.",
            tags: ["Workflow Automation", "Productivity Tools", "Business Efficiency", "Process Automation"]
        },
        {
            id: "social-media-marketing-guide",
            title: "Social Media Marketing: A Complete Guide for 2024",
            date: "Sep 8, 2024",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
            excerpt: "Build a powerful social media presence with advanced strategies for engagement, content creation, and audience growth across all platforms.",
            tags: ["Social Media Marketing", "Instagram", "LinkedIn", "Facebook Marketing"]
        },
        {
            id: "ai-content-generation-marketing",
            title: "How AI Content Generation is Revolutionizing Marketing",
            date: "Aug 30, 2024",
            category: "AI Automation",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
            excerpt: "Explore how AI-powered content generation tools are helping marketers create high-quality, SEO-optimized content at scale.",
            tags: ["AI Content", "Content Marketing", "Marketing Automation", "Copywriting"]
        },
        {
            id: "email-marketing-automation",
            title: "Email Marketing Automation: Strategies for Maximum ROI",
            date: "Aug 22, 2024",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
            excerpt: "Maximize your email marketing ROI with automation strategies, personalization techniques, and proven campaign workflows.",
            tags: ["Email Marketing", "Marketing Automation", "Lead Nurturing", "Conversion Optimization"]
        },
        {
            id: "influencer-marketing-strategy",
            title: "Influencer Marketing Strategy: Partner Your Way to Growth",
            date: "Aug 18, 2024",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
            excerpt: "Master influencer partnerships and authentic collaborations that drive real business results in 2024.",
            tags: ["Influencer Marketing", "Brand Partnerships", "Social Media", "Content Creator"]
        },
        {
            id: "video-marketing-2025",
            title: "Video Marketing Mastery: Dominate YouTube, TikTok & Reels",
            date: "Aug 15, 2024",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop&q=80",
            excerpt: "Create video content that captivates audiences and drives conversions across all platforms.",
            tags: ["Video Marketing", "YouTube", "TikTok", "Video Content"]
        },
        {
            id: "marketing-analytics-dashboard",
            title: "Building the Ultimate Marketing Analytics Dashboard",
            date: "Aug 12, 2024",
            category: "Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
            excerpt: "Track the metrics that matter and make data-driven decisions with comprehensive dashboards.",
            tags: ["Marketing Analytics", "Data Visualization", "KPIs", "Business Intelligence"]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 73, 37, 0.15) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Author Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-8 justify-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center p-2">
                            <img src="/favicon.png" alt="ARC AI" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">ARC Digital Canvas</h3>
                            <p className="text-neutral-400">Digital Marketing & AI Experts</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
                            {"INSIGHTS & EXPERTISE".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={letterVariant}
                                    className="inline-block"
                                    style={{
                                        background: "linear-gradient(to bottom, white, #d4d4d8, #71717a)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto"
                        >
                            Explore cutting-edge strategies in AI automation and digital marketing to transform your business
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 px-4 md:px-8 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.id}`}>
                                    <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
                                        {/* Background Image */}
                                        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                                            <img src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy" decoding="async" />
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                        {/* Content */}
                                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                                            {/* Top - Date and Arrow */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-neutral-300">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="text-sm font-medium">{post.date}</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </div>
                                            </div>

                                            {/* Bottom - Title and Category */}
                                            <div>
                                                <div className="mb-3">
                                                    <span className="inline-block px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30">
                                                        {post.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className="text-neutral-300 text-sm line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
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
                            Want to Transform Your Business?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-8">
                            Let's discuss how AI automation and digital marketing can drive your growth
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                        >
                            Get in Touch
                            <ArrowUpRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
