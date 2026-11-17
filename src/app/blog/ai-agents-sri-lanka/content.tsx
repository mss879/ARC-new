"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Bot } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";

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
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />

            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=80"
                        alt="AI Agents"
                        width={1600}
                        height={900}
                        className="w-full h-full object-cover"
                        loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/80 to-paper/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-ember/20 text-ember-deep text-sm font-semibold rounded-full border border-ember/30 mb-4">
                            Artificial Intelligence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            The Rise of AI Agents: Transforming Business Operations in Sri Lanka
                        </h1>
                        <div className="flex items-center gap-6 text-ink-soft">
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
                        <div className="space-y-6 text-ink-soft leading-relaxed">
                            <p className="text-xl text-ink">
                                AI is moving beyond simple &quot;chatbots&quot; that answer FAQs. We are entering the era of AI Agents—autonomous digital employees that can reason, plan, and execute tasks. For Sri Lankan businesses, this is the productivity leap we&apos;ve been waiting for. It is also changing what <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">software companies in Sri Lanka</Link> build for their clients.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">What is an AI Agent?</h2>
                            <p>
                                Unlike a standard chatbot which passively waits for a question, an AI Agent is proactive and capable of using tools. It can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Access databases:</strong> Check your inventory or room availability.</li>
                                <li><strong>Perform actions:</strong> Send an email, create an invoice, or update your CRM.</li>
                                <li><strong>Reason:</strong> Make decisions based on rules you set (e.g., &quot;If the customer is a VIP, offer a discount&quot;).</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Game-Changing Use Cases for Sri Lanka</h2>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">1. Tourism and Hospitality</h3>
                            <p>
                                Sri Lanka&apos;s tourism boom requires efficient handling of international guests. An AI Agent can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Handle booking inquiries in English, German, French, or Mandarin 24/7.</li>
                                <li>Automatically suggest itineraries based on the guest&apos;s preferences.</li>
                                <li>Coordinate with drivers and guides by sending WhatsApp updates automatically.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">2. Real Estate</h3>
                            <p>
                                agents spend hours qualifying leads. An AI Agent on your website can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Engage visitors browsing luxury apartments.</li>
                                <li>Ask qualifying questions (budget, timeline, requirements).</li>
                                <li>Schedule a viewing directly into the agent&apos;s calendar only for high-quality leads.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">3. E-commerce &amp; Retail</h3>
                            <p>
                                For local brands selling overseas, AI Agents bridge the time gap. They can:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Track shipments and update customers proactively.</li>
                                <li>Handle returns and refunds based on policy without human intervention.</li>
                                <li>Recommend products based on browsing history, increasing average order value.</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Why Arc AI Agents?</h2>
                            <p>
                                At ARC AI, we build custom agents tailored to the Sri Lankan business context. As one of the <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">top AI companies in Sri Lanka</Link>, we deliver AI solutions that are:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Context Aware:</strong> Our agents understand local nuances.</li>
                                <li><strong>Integration Ready:</strong> We connect to the tools you already use (Google Sheets, WhatsApp, Slack, etc.).</li>
                                <li><strong>Cost Effective:</strong> Automate the work of 3 full-time employees for a fraction of the cost.</li>
                            </ul>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-8 mt-12">
                                <h3 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                                    <Bot className="w-6 h-6" />
                                    Hire Your First Digital Employee
                                </h3>
                                <p className="text-ink mb-6">
                                    Ready to automate your operations? Let&apos;s build an AI Agent that works for your business 24/7.
                                </p>
                                <Link href="/contact" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember text-ink font-semibold hover:bg-[#FF5C3A] transition-colors">
                                    Explore AI Agent Solutions
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                        <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Agents", "Automation", "Sri Lanka Business", "Hospitality AI", "Real Estate AI", "Productivity", "Future of Work"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/70 text-ink-soft text-sm rounded-full border border-ink/10 hover:border-ember transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10 flex items-center justify-between">
                        <Link href="/blog/smart-websites-sri-lanka-2026" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">Websites vs Smart Websites</div>
                            </div>
                        </Link>
                        <Link href="/blog" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">Blog Home</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-ink/10">
                        <div className="flex items-center gap-4">
                            <span className="text-ink-soft text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-white/70 rounded-lg hover:bg-[#FF5C3A] transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
