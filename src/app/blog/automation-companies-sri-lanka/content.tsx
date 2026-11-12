"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Share2, Code, Zap, Server, Brain, Network, XCircle, CheckCircle2, Cpu, Bot } from "lucide-react";

export default function BlogPost() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
                            Advanced AI Automation
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Why Legacy RPA is Dead: Evaluating <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">Automation Companies in Sri Lanka</span>
                        </h1>
                        <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
                            A brutal technical assessment on why traditional Robotic Process Automation (RPA) is fundamentally obsolete when compared to Semantic AI Agents.
                        </p>
                        
                        <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 mb-12">
                            <span>ARC Automation Architects</span>
                            <span>•</span>
                            <span>20 Min Read</span>
                            <span>•</span>
                            <span>April 2026</span>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                        <Image
                            src="/arc-ai-automation-sri-lanka.webp"
                            alt="Futuristic glowing AI semantic reasoning network over corporate data flows"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                    </motion.div>
                </div>
            </section>

            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="prose prose-invert prose-lg max-w-none">
                        <div className="space-y-6 text-neutral-300 leading-relaxed">
                            <p className="text-xl text-neutral-200">
                                If you ask the average executive in Colombo to define business automation, their answer usually relies on standard RPA (Robotic Process Automation). For the last decade, leading <strong>automation companies in Sri Lanka</strong> have comfortably billed millions in enterprise contracts integrating screen-scraping bots to move data between unintegrated Excel files.
                            </p>

                            <p>
                                Welcome to 2026. The traditional RPA industry is facing an existential crisis. The model of paying system integrators (such as John Keells IT or traditional enterprise <a href="https://www.uipath.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">UiPath</a> partners) vast sums of money to build fragile, rule-based click-bots is fundamentally broken. When ARC AI architects business automation, we don't build scripts that record screen clicks. We engineer Semantic Large Language Model (LLM) workflows that actually <em>understand</em> the task.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Fragile Truth About Legacy RPA Integrators</h2>
                            <p>
                                What exactly are traditional Sri Lankan automation companies selling you when they pitch a typical automation digital transformation? 
                            </p>
                            <p>
                                Mostly, it's brittle "If/Then" conditional logic. The bot is strictly programmed: <em>"Look at coordinate X,Y on screen, click the 'Download PDF' button, extract text, paste into CRM."</em> Because they lack cognitive reasoning, what happens when a software update shifts the location of the 'Download PDF' button by 10 pixels? 
                            </p>
                            <p>
                                <strong>The entire multimillion-rupee process collapses.</strong> This triggers an emergency maintenance ticket to the local integrator, who then charges a premium hourly SLA to "retrain" the robotic process. It's not true automation; it is merely hardcoding repetitive physical actions without contextual awareness. 
                            </p>

                            <div className="overflow-hidden rounded-xl border border-neutral-800 my-10 bg-neutral-900/50">
                                <div className="grid grid-cols-3 bg-neutral-900 border-b border-neutral-800 p-4">
                                    <div className="font-bold text-neutral-400">Processing Vector</div>
                                    <div className="font-bold text-neutral-400">Traditional Sri Lankan RPA Providers</div>
                                    <div className="font-bold text-accent">ARC AI Semantic Automation</div>
                                </div>
                                <div className="grid grid-cols-3 p-4 border-b border-neutral-800/50 items-center">
                                    <div className="font-medium text-white flex items-center gap-2">
                                        <Bot className="w-4 h-4 text-neutral-500" />
                                        Adaptability to Change
                                    </div>
                                    <div className="text-sm text-neutral-400 flex items-center gap-2">
                                        <XCircle className="w-4 h-4 text-red-500" />
                                        Fractures upon UI/UX updates
                                    </div>
                                    <div className="text-sm text-emerald-400 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Self-corrects using logic reasoning
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-4 border-b border-neutral-800/50 items-center">
                                    <div className="font-medium text-white flex items-center gap-2">
                                        <Brain className="w-4 h-4 text-neutral-500" />
                                        Intelligence Level
                                    </div>
                                    <div className="text-sm text-neutral-400 flex items-center gap-2">
                                        <XCircle className="w-4 h-4 text-red-500" />
                                        Strictly Rules-Based (If/Then)
                                    </div>
                                    <div className="text-sm text-emerald-400 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        Semantic Contextual Understanding
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 p-4 items-center">
                                    <div className="font-medium text-white flex items-center gap-2">
                                        <Server className="w-4 h-4 text-neutral-500" />
                                        Data Extraction
                                    </div>
                                    <div className="text-sm text-neutral-400 flex items-center gap-2">
                                        <XCircle className="w-4 h-4 text-red-500" />
                                        Rigid OCR Template Matching
                                    </div>
                                    <div className="text-sm text-emerald-400 flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        LLM-driven Vision & Unstructured Data Parsing
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Agentic AI: How ARC Automates Complex Business</h2>
                            <p>
                                By abandoning the legacy concept of screen-scraping, ARC AI operates as an entirely different breed of <strong>automation company in Sri Lanka</strong>. We deploy LangChain protocols integrated with dynamic API routing. Our systems ingest massive streams of unstructured data—be it messy customer emails, varying invoices, or unstructured PDFs—and utilize foundational LLMs to semantically understand intent.
                            </p>

                            <p>
                                For example, in a local Colombo logistics company: A traditional RPA bot might scan for the phrase "Invoice number" to copy paste data. If the client writes "Bill ID:" instead, the traditional RPA throws a critical error. ARC AI's Agentic workflow immediately recognizes that "Bill ID" and "Invoice number" are semantically identical in this business context, routes the data correctly to your bespoke Supabase database, categorizes the shipment parameters, and proactively emails the customer a shipping quote all within a 2-second compute window.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-10 mb-4">The Mathematical Inefficiency of Human Call Centers</h3>
                            <p>
                                Sri Lanka heavily relies on Business Process Outsourcing (BPO) call centers. But assigning 15 humans to cross-reference data across CRM tabs and answer repetitive localized queries is bleeding operational overhead. By deploying integrated Vector Databases coupled to advanced Agentic LLMs capable of communicating perfectly in localized grammar, you establish an unbreakable, 24/7 autonomous workforce. It is mathematically impossible for humans to match the TTFB (Time to First Byte) latency generated by ARC's Edge automation frameworks.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/20 rounded-xl p-8 mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Network className="w-32 h-32 text-accent" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                        <Zap className="w-6 h-6 text-accent text-white" />
                                        Fire Your RPA Bot. Hire an AI Agent.
                                    </h3>
                                    <p className="text-neutral-200 mb-6 max-w-xl">
                                        If you're paying maintenance fees to an enterprise integrator every time the UI on your ERP updates, your automation strategy is financially fatal. Upgrade your workflow to self-healing, native semantic agents. Book a consultation with the leading <strong>automation company in Sri Lanka</strong> below.
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                        Request an Automation Audit
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Automation Engineering Matrix</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Semantic Agents", "RPA", "Business Automation", "LLM Processing", "LangChain", "Vector Embeddings", "Enterprise Integrations"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm rounded-full cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">All Articles</div>
                            </div>
                        </Link>
                        <Link href="/software-companies-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next Concept</div>
                                <div className="font-semibold">Software Companies</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Distribute This Architecture:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-accent hover:text-white text-neutral-400 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
