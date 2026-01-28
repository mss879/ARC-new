"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Smartphone, Zap, Globe, ShoppingCart } from "lucide-react";
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
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=80"
                        alt="Smart Websites vs Traditional Websites"
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
                            Web Development
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Websites vs. Smart Websites: Why Sri Lankan Businesses Need to Upgrade
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>March 15, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
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
                                In the rapidly evolving Sri Lankan digital landscape, having a "company website" is no longer enough. The difference between a traditional static website and a modern "Smart Website" is the difference between a digital brochure and a 24/7 sales engine.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What is a Traditional Website?</h2>
                            <p>
                                A traditional website is static. It displays information—your "About Us," "Services," and "Contact" details—and waits for the customer to act. It's passive.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Static text and images</li>
                                <li>Basic contact forms</li>
                                <li>Updates require a developer</li>
                                <li>No personalized interaction</li>
                            </ul>
                            <p>
                                In the context of Sri local businesses—whether you're a hotel in Galle, a gem dealer in Ratnapura, or a tech startup in Colombo—a static site often fails to capture the immediacy that international and local modern clients expect.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What is a Smart Website?</h2>
                            <p>
                                A Smart Website is active. It interacts with visitors, learns from their behavior, and guides them toward a goal (booking, purchase, or inquiry). It uses AI and automation to work for you.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <Zap className="w-5 h-5" />
                                    Smart Website Capabilities
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• <strong>AI Chatbots:</strong> Answer 80% of customer queries instantly (in English, Sinhala, or Tamil contexts).</li>
                                    <li>• <strong>Dynamic Personalization:</strong> Show different content to a returning customer vs. a new visitor.</li>
                                    <li>• <strong>Integrated Payments:</strong> Seamless connections to PayHere, WebXPay, or Stripe.</li>
                                    <li>• <strong>Automated Workflows:</strong> Book appointments and sync them to your Google Calendar automatically.</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Sri Lankan Businesses Need the Switch</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">1. The 24/7 Global Market</h3>
                            <p>
                                For Sri Lankan export businesses (Tea, Spices, Garments) or Tourism, your customers are in different time zones. A static site sleeps when you sleep. A Smart Website with an AI agent captures leads from Europe or the US while you are asleep in Colombo.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">2. Cost Efficiency</h3>
                            <p>
                                Hiring 24/7 support staff is expensive. A Smart Website acts as your first line of support and sales, handling repetitive queries about prices, location, or "is this available?" without adding to your payroll.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">3. Beating the Competition</h3>
                            <p>
                                Many local competitors still run outdated, slow websites. upgraded to a fast, interactive Smart Website gives you an immediate trust advantage. Customers perceive modern, responsive digital experiences as a signal of product quality and reliability.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Features of ARC AI Smart Websites</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Next.js & React:</strong> The same technology used by Netflix and Uber for lightning-fast speeds.</li>
                                <li><strong>AI Integration:</strong> Built-in agents that know your business inside out.</li>
                                <li><strong>Mobile First:</strong> Optimized for the 70%+ of Sri Lankans who access the web via smartphone.</li>
                                <li><strong>SEO Built-in:</strong> Structured to rank high on Google for competitive keywords.</li>
                            </ul>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Globe className="w-6 h-6" />
                                    Upgrade to a Smart Website Today
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Don't let your website be a static cost center. Turn it into a dynamic profit generator. ARC AI builds Smart Websites tailored for the Sri Lankan market.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Get a Smart Website Proposal
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Smart Websites", "Web Development", "Sri Lanka Business", "AI Integration", "Digital Transformation", "Next.js", "E-commerce"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">Blog Home</div>
                            </div>
                        </Link>
                        <Link href="/blog/ai-agents-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI Agents in Sri Lanka</div>
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
