"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Cpu } from "lucide-react";
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
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <Image src="/ai-automation-lk.png"
                        alt="AI Automation"
                        width={1600}
                        height={900}
                        className="w-full h-full object-cover"
                        loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30 mb-4">
                            AI Automation
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            AI Automation in Sri Lanka: How to Cut Costs and Scale Fast
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>March 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 min read</span>
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
                                Across Sri Lanka, businesses are dealing with rising operational costs, high employee turnover, and inefficiencies caused by manual data entry. But a new wave is taking over Colombo&apos;s smartest companies: <strong>AI Automation</strong>. (Our guide to <Link href="/software-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">IT companies in Sri Lanka</Link> shows who builds what.) It is no longer a buzzword; it is a brutal, effective tool for cutting costs and reducing the need for manual workers. Leading <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI companies in Sri Lanka</Link> are helping businesses automate everything from invoicing to lead routing.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The High Cost of Manual Work in Sri Lanka</h2>
                            <p>
                                Think about the daily operations of a typical Sri Lankan SME. You have staff manually copying data from WhatsApp into Excel, someone else generating invoices, and another person handling repetitive customer emails. Not only are you paying salaries for low-value tasks, but human error is inevitable. Missed follow-ups. Incorrect data. Delays.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What AI Automation Actually Does</h2>
                            <p>
                                AI Automation connects your software together and gives it a brain. It can read emails, extract data, make decisions, and trigger actions—without human intervention.
                            </p>

                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><strong>Invoicing Automation:</strong> When an order comes via your website, AI automatically generates a PDF invoice and emails it to the customer. No accountant needed.</li>
                                <li><strong>Data Entry:</strong> AI reads supplier PDFs, extracts the pricing data, and updates your inventory database in seconds.</li>
                                <li><strong>Lead Routing:</strong> AI reads incoming inquiries, determines if it&apos;s high-priority, and immediately texts your best salesperson on WhatsApp.</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cutting Costs &amp; Reducing Headcount Dependencies</h2>
                            <p>
                                By implementing AI workflows, a mid-sized business can effectively automate the workload of 2 to 3 administrative employees. This doesn&apos;t necessarily mean firing people; it means your business can scale 3x without having to hire new administrative staff. You cut your operational overhead drastically while operating with machine-level precision.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Cpu className="w-6 h-6" />
                                    Automate Your Business with ARC AI
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Stop paying humans to do a robot&apos;s job. ARC AI builds custom automation pipelines for Sri Lankan businesses that streamline operations and cut costs from Day 1.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Book an Automation Audit
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags & Nav */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI Automation", "Cost Cutting", "Sri Lanka Business", "Workflow Automation", "API Integration", "Efficiency"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
