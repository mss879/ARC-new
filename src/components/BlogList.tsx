"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";

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
            id: "automation-companies-sri-lanka",
            title: "Top Automation Companies in Sri Lanka | AI Agents vs Legacy RPA",
            date: "April 8, 2026",
            category: "Process Automation",
            image: "/arc-ai-automation-sri-lanka.webp",
            excerpt: "Traditional RPA bots are fragile. Learn why the top automation companies in Sri Lanka are upgrading to Semantic AI Agents to build unbreakable workflows.",
            tags: ["AI Automation", "Sri Lanka Business", "RPA", "Business Process Optimization"]
        },

        {
            id: "how-ai-transforms-sri-lanka-businesses-2026",
            title: "How AI Is Transforming Sri Lankan Businesses in 2026 — Real Results",
            date: "April 4, 2026",
            category: "AI Companies",
            image: "/ai-automation-lk.png",
            excerpt: "See real case studies and ROI data showing how AI companies in Sri Lanka are delivering measurable results — from 167% booking increases to 60% cost reductions.",
            tags: ["AI Companies Sri Lanka", "AI ROI", "Case Studies", "Business Automation"]
        },
        {
            id: "ai-chatbots-sri-lankan-businesses",
            title: "Best AI Chatbots for Sri Lankan Businesses (2026)",
            date: "April 4, 2026",
            category: "AI Chatbots",
            image: "/ai_chatbots_blog.webp",
            excerpt: "Discover the best AI chatbots for Sri Lankan businesses in 2026. Learn how AI chatbots in Sinhala, Tamil & English are transforming customer service across Sri Lanka.",
            tags: ["AI Chatbots", "AI Companies Sri Lanka", "WhatsApp Chatbot", "Customer Service AI"]
        },
        {
            id: "ai-for-tourism-sri-lanka",
            title: "How AI Is Revolutionising Tourism in Sri Lanka (2026)",
            date: "April 4, 2026",
            category: "AI Tourism",
            image: "/ai_tourism_blog.webp",
            excerpt: "Learn how AI companies in Sri Lanka are transforming the tourism industry with AI chatbots, automated booking systems, and multilingual guest experiences.",
            tags: ["AI Tourism", "AI Companies Sri Lanka", "Hotel AI", "Tourism Automation"]
        },
        {
            id: "ai-vs-manual-operations-sri-lanka",
            title: "AI vs Manual Operations: Cost Comparison for Sri Lankan Businesses",
            date: "April 4, 2026",
            category: "AI ROI",
            image: "/ai_cost_comparison_blog.webp",
            excerpt: "A detailed cost comparison of AI automation vs manual operations for Sri Lankan businesses. See real ROI data and calculate your potential savings.",
            tags: ["AI ROI", "AI Companies Sri Lanka", "Cost Savings", "Business Automation"]
        },
        {
            id: "ai-solutions-sri-lankan-industries",
            title: "How AI Companies in Sri Lanka Are Transforming Key Industries",
            date: "April 4, 2026",
            category: "AI Companies",
            image: "/ai_key_industries_blog.webp",
            excerpt: "Discover how AI companies in Sri Lanka are revolutionising tourism, real estate, e-commerce, healthcare, and manufacturing with custom AI solutions.",
            tags: ["AI Sri Lanka", "AI Tourism", "AI Real Estate", "Digital Transformation"]
        },

        {
            id: "smart-websites-sri-lanka-2026",
            title: "Smart Websites in Sri Lanka: The Complete Guide for 2026",
            date: "April 19, 2026",
            category: "Smart Websites",
            image: "/smart-website-sri-lanka.png",
            excerpt: "Everything you need to know about smart websites in Sri Lanka — features, costs, industry use cases, SEO benefits, and how to choose the right smart website company.",
            tags: ["Smart Websites", "Smart Website Companies", "Sri Lanka", "AI Websites", "Web Design"]
        },
        {
            id: "ai-customer-service-agent-sri-lanka",
            title: "The Ultimate AI Customer Service Agent for Sri Lankan Businesses",
            date: "March 4, 2026",
            category: "AI Agents",
            image: "/ai-agent-cs-lk.png",
            excerpt: "See how the AI agent on our website works and why it is the perfect 24/7 customer service solution for businesses in Sri Lanka to handle inquiries instantly.",
            tags: ["AI Agents", "Customer Service", "Sri Lanka Business"]
        },
        {
            id: "ai-automation-cost-cutting-sri-lanka",
            title: "AI Automation in Sri Lanka: How to Cut Costs and Scale Fast",
            date: "March 4, 2026",
            category: "AI Automation",
            image: "/ai-automation-lk.png",
            excerpt: "AI Automation is the newest competitive advantage for Sri Lankan businesses. Learn how automating repetitive tasks can drastically reduce your operational costs and human resource dependencies.",
            tags: ["AI Automation", "Cost Cutting", "Sri Lanka Business"]
        },
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
            id: "digital-marketing-strategies-2024",
            title: "10 Digital Marketing Strategies That Actually Work in 2024",
            date: "Jan 5, 2026",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
            excerpt: "Learn the most effective digital marketing strategies to grow your brand, engage customers, and increase conversions in today's competitive landscape.",
            tags: ["Digital Marketing", "SEO", "Social Media", "Content Marketing"]
        },
        {
            id: "ai-chatbots-customer-service",
            title: "The Ultimate Guide to AI Chatbots for Customer Service",
            date: "Dec 28, 2025",
            category: "AI Automation",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=80",
            excerpt: "AI chatbots are revolutionizing customer service. Learn how to implement intelligent conversational AI to enhance customer experience 24/7.",
            tags: ["AI Chatbots", "Customer Service", "Conversational AI", "Automation"]
        },
        {
            id: "seo-optimization-best-practices",
            title: "SEO Optimization Best Practices to Rank #1 on Google",
            date: "Dec 20, 2025",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&auto=format&fit=crop&q=80",
            excerpt: "Master the art of SEO with proven strategies for keyword research, on-page optimization, link building, and technical SEO to dominate search rankings.",
            tags: ["SEO", "Google Rankings", "Keyword Research", "Content Optimization"]
        },

        {
            id: "social-media-marketing-guide",
            title: "Social Media Marketing: A Complete Guide for 2024",
            date: "Dec 8, 2025",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
            excerpt: "Build a powerful social media presence with advanced strategies for engagement, content creation, and audience growth across all platforms.",
            tags: ["Social Media Marketing", "Instagram", "LinkedIn", "Facebook Marketing"]
        },
        {
            id: "ai-content-generation-marketing",
            title: "How AI Content Generation is Revolutionizing Marketing",
            date: "Nov 30, 2025",
            category: "AI Automation",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
            excerpt: "Explore how AI-powered content generation tools are helping marketers create high-quality, SEO-optimized content at scale.",
            tags: ["AI Content", "Content Marketing", "Marketing Automation", "Copywriting"]
        },
        {
            id: "email-marketing-automation",
            title: "Email Marketing Automation: Strategies for Maximum ROI",
            date: "Nov 22, 2025",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
            excerpt: "Maximize your email marketing ROI with automation strategies, personalization techniques, and proven campaign workflows.",
            tags: ["Email Marketing", "Marketing Automation", "Lead Nurturing", "Conversion Optimization"]
        },
        {
            id: "influencer-marketing-strategy",
            title: "Influencer Marketing Strategy: Partner Your Way to Growth",
            date: "Nov 18, 2025",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
            excerpt: "Master influencer partnerships and authentic collaborations that drive real business results in 2024.",
            tags: ["Influencer Marketing", "Brand Partnerships", "Social Media", "Content Creator"]
        },
        {
            id: "video-marketing-2025",
            title: "Video Marketing Mastery: Dominate YouTube, TikTok & Reels",
            date: "Nov 15, 2025",
            category: "Digital Marketing",
            image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&auto=format&fit=crop&q=80",
            excerpt: "Create video content that captivates audiences and drives conversions across all platforms.",
            tags: ["Video Marketing", "YouTube", "TikTok", "Video Content"]
        },
        {
            id: "marketing-analytics-dashboard",
            title: "Building the Ultimate Marketing Analytics Dashboard",
            date: "Nov 12, 2025",
            category: "Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
            excerpt: "Track the metrics that matter and make data-driven decisions with comprehensive dashboards.",
            tags: ["Marketing Analytics", "Data Visualization", "KPIs", "Business Intelligence"]
        }
    ];

    return (
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Blog" }
            ]} />

            {/* Hero Section */}
            <section className="relative flex items-center justify-center px-4 md:px-8 pt-8 md:pt-16 pb-20 min-h-[50vh]">
                <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper" />
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
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ember to-ember flex items-center justify-center p-2">
                            <Image src="/favicon.png" alt="ARC AI" width={64} height={64} className="w-full h-full object-contain" loading="lazy" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">ARC AI</h3>
                            <p className="text-ink-soft">Digital Marketing & AI Experts</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={letterContainer}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.035em] mb-6">
                            {"INSIGHTS & EXPERTISE".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={letterVariant}
                                    className="inline-block"
                                    style={{
                                        background: "linear-gradient(to bottom, #1B1A17, #1B1A17)",
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
                            className="text-xl md:text-2xl text-ink-soft max-w-3xl mx-auto"
                        >
                            Explore cutting-edge strategies in AI automation and digital marketing to transform your business
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Pillar Guides — Featured Resources */}
            <section className="py-12 px-4 md:px-8 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-sm font-medium text-ink-soft tracking-[-0.035em] mb-6 flex items-center gap-2">
                            📚 Definitive Industry Guides
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Link href="/web-design-sri-lanka">
                                <div className="cut-card [--cut:18px] group relative overflow-hidden [--cut-line:rgba(255,73,37,0.3)] bg-gradient-to-br from-ember/10 via-paper to-paper p-8 hover:[--cut-line:rgba(255,73,37,0.6)] transition-all duration-300 cursor-pointer">
                                    <div className="absolute top-0 right-0 bg-ember text-ink text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-widest">Pillar Guide</div>
                                    <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-ember-ink transition-colors">Web Design Companies in Sri Lanka — 2026 Guide</h3>
                                    <p className="text-ink-soft text-sm leading-relaxed mb-4">12 agencies evaluated with exact pricing benchmarks (LKR & USD), WordPress vs Next.js comparisons, and an actionable selection framework.</p>
                                    <span className="inline-flex items-center gap-2 text-ember-deep text-sm font-semibold">
                                        Read the Full Guide <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                            <Link href="/software-companies-sri-lanka">
                                <div className="cut-card [--cut:18px] group relative overflow-hidden [--cut-line:rgba(27,26,23,0.1)] bg-transparent p-8 hover:[--cut-line:rgba(27,26,23,0.3)] transition-all duration-300 cursor-pointer">
                                    <div className="absolute top-0 right-0 bg-ink/10 text-ink text-[10px] font-black uppercase px-3 py-1 rounded-bl-lg tracking-widest">Pillar Guide</div>
                                    <h3 className="text-2xl font-bold text-ink mb-3 group-hover:text-ember-ink transition-colors">Top Software Companies in Sri Lanka — 2026</h3>
                                    <p className="text-ink-soft text-sm leading-relaxed mb-4">A comprehensive ranking of the leading software development companies, covering IT outsourcing, pricing, and technical capabilities.</p>
                                    <span className="inline-flex items-center gap-2 text-ember-deep text-sm font-semibold">
                                        Read the Full Guide <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 px-4 md:px-8 bg-transparent">
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
                                    <div className="cut-card [--cut:18px] group relative h-[500px] overflow-hidden cursor-pointer">
                                        {/* Background Image */}
                                        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                                            <Image src={post.image}
                                                alt={post.title}
                                                width={800}
                                                height={500}
                                                className="w-full h-full object-cover"
                                                loading="lazy" />
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                                        {/* Content */}
                                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                                            {/* Top - Date and Arrow */}
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-ink-soft">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="text-sm font-medium">{post.date}</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#FF5C3A] transition-colors duration-300">
                                                    <ArrowUpRight className="w-5 h-5" />
                                                </div>
                                            </div>

                                            {/* Bottom - Title and Category */}
                                            <div>
                                                <div className="mb-3">
                                                    <span className="inline-block px-3 py-1 bg-ember/20 text-ember-deep text-sm font-semibold rounded-full border border-ember/30">
                                                        {post.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-ember-ink transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className="text-ink-soft text-sm line-clamp-2">
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
            <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-paper to-paper">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Want to Transform Your Business?
                        </h2>
                        <p className="text-xl text-ink-soft mb-8">
                            Let's discuss how AI automation and digital marketing can drive your growth
                        </p>
                        <Link
                            href="/contact"
                            className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-8 py-4 bg-ember text-ink font-semibold hover:scale-105 transition-transform"
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
