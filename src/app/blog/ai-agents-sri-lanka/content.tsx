"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Bot, Brain, TrendingUp } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=80"
                        alt="AI Agents"
                        className="w-full h-full object-cover"
                        loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30 mb-4">
                            Artificial Intelligence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            The Rise of AI Agents: Transforming Business Operations in Sri Lanka
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>March 20, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>10 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-6 text-neutral-300 leading-relaxed">
                            <p className="text-xl text-neutral-200">
                                AI is moving beyond simple "chatbots" that answer FAQs. We are entering the era of AI Agents—autonomous digital employees that can reason, plan, and execute tasks. For Sri Lankan businesses, this is the productivity leap we've been waiting for.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What is an AI Agent?</h2>
                            <p>
                                Unlike a standard chatbot which passively waits for a question, an AI Agent is proactive and capable of using tools. It can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Access databases:</strong> Check your inventory or room availability.</li>
                                <li><strong>Perform actions:</strong> Send an email, create an invoice, or update your CRM.</li>
                                <li><strong>Reason:</strong> Make decisions based on rules you set (e.g., "If the customer is a VIP, offer a discount").</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Game-Changing Use Cases for Sri Lanka</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. Tourism and Hospitality</h3>
                            <p>
                                Sri Lanka's tourism boom requires efficient handling of international guests. An AI Agent can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Handle booking inquiries in English, German, French, or Mandarin 24/7.</li>
                                <li>Automatically suggest itineraries based on the guest's preferences.</li>
                                <li>Coordinate with drivers and guides by sending WhatsApp updates automatically.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Real Estate</h3>
                            <p>
                                agents spend hours qualifying leads. An AI Agent on your website can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Engage visitors browsing luxury apartments.</li>
                                <li>Ask qualifying questions (budget, timeline, requirements).</li>
                                <li>Schedule a viewing directly into the agent's calendar only for high-quality leads.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. E-commerce & Retail</h3>
                            <p>
                                For local brands selling overseas, AI Agents bridge the time gap. They can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Track shipments and update customers proactively.</li>
                                <li>Handle returns and refunds based on policy without human intervention.</li>
                                <li>Recommend products based on browsing history, increasing average order value.</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Arc AI Agents?</h2>
                            <p>
                                At ARC AI, we build custom agents tailored to the Sri Lankan business context.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Context Aware:</strong> Our agents understand local nuances.</li>
                                <li><strong>Integration Ready:</strong> We connect to the tools you already use (Google Sheets, WhatsApp, Slack, etc.).</li>
                                <li><strong>Cost Effective:</strong> Automate the work of 3 full-time employees for a fraction of the cost.</li>
                            </ul>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Bot className="w-6 h-6" />
                                    Hire Your First Digital Employee
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Ready to automate your operations? Let's build an AI Agent that works for your business 24/7.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Explore AI Agent Solutions
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Agents", "Automation", "Sri Lanka Business", "Hospitality AI", "Real Estate AI", "Productivity", "Future of Work"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/websites-vs-smart-websites-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">Websites vs Smart Websites</div>
                            </div>
                        </Link>
                        <Link href="/blog" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">Blog Home</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-accent transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
