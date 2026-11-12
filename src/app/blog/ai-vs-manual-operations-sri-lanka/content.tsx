"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";

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
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "AI vs Manual Operations: Sri Lanka" }
            ]} />

            <section className="relative flex items-end px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            AI ROI &middot; Sri Lanka
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            AI vs Manual Operations: Cost Comparison for Sri Lankan Businesses
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 4, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 min read</span>
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
                                Every Sri Lankan business owner asks the same question: &quot;Is AI worth the investment?&quot; The answer, backed by real data from <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">top AI companies in Sri Lanka</Link>, is overwhelmingly yes. This article provides a detailed, rupee-by-rupee cost comparison between manual operations and AI automation across the most common business functions.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Customer Service: Manual vs AI</h2>

                            <div className="overflow-x-auto my-8">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-zinc-700">
                                            <th className="text-left p-4 text-white font-semibold">Factor</th>
                                            <th className="text-left p-4 text-white font-semibold">Manual (2 Staff)</th>
                                            <th className="text-left p-4 text-[rgb(255,73,37)] font-semibold">AI Chatbot</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-neutral-300">
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Monthly Cost</td>
                                            <td className="p-4">Rs. 180,000</td>
                                            <td className="p-4 text-green-400">Rs. 45,000 - 75,000</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Hours Available</td>
                                            <td className="p-4">8-10 hrs/day (weekdays)</td>
                                            <td className="p-4 text-green-400">24/7/365</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Response Time</td>
                                            <td className="p-4">4-12 hours average</td>
                                            <td className="p-4 text-green-400">Under 3 seconds</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Languages</td>
                                            <td className="p-4">1-2 languages</td>
                                            <td className="p-4 text-green-400">Sinhala, Tamil, English + more</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Simultaneous Conversations</td>
                                            <td className="p-4">1-2 at a time</td>
                                            <td className="p-4 text-green-400">Unlimited</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Annual Cost</td>
                                            <td className="p-4">Rs. 2,160,000+</td>
                                            <td className="p-4 text-green-400">Rs. 540,000 - 900,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white">Annual Savings</td>
                                            <td className="p-4">&mdash;</td>
                                            <td className="p-4 text-green-400 font-bold">Rs. 1,260,000 - 1,620,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                That is a <strong>58-75% cost reduction</strong> on customer service alone, with dramatically better performance. Your AI chatbot never calls in sick, never needs holidays, and never has a bad day. And it handles peak-season volume without you hiring temporary staff.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Lead Qualification: Manual vs AI Sales SDR</h2>

                            <div className="overflow-x-auto my-8">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-zinc-700">
                                            <th className="text-left p-4 text-white font-semibold">Factor</th>
                                            <th className="text-left p-4 text-white font-semibold">Manual Sales Team</th>
                                            <th className="text-left p-4 text-[rgb(255,73,37)] font-semibold">AI Sales SDR</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-neutral-300">
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Leads Processed/Day</td>
                                            <td className="p-4">20-30</td>
                                            <td className="p-4 text-green-400">200+</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Qualification Accuracy</td>
                                            <td className="p-4">60-70%</td>
                                            <td className="p-4 text-green-400">85-95%</td>
                                        </tr>
                                        <tr className="border-b border-zinc-800">
                                            <td className="p-4">Follow-up Speed</td>
                                            <td className="p-4">1-4 hours</td>
                                            <td className="p-4 text-green-400">Instant</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">Missed Leads</td>
                                            <td className="p-4">15-30%</td>
                                            <td className="p-4 text-green-400">0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Content Production: Manual vs AI Content Generation</h2>
                            <p>
                                A typical Sri Lankan business needs 8-12 social media posts per week, 2-4 blog articles per month, ad copy, product descriptions, and email campaigns. Hiring a content team costs Rs. 200,000-400,000 per month. AI content generation systems deployed by <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI companies in Sri Lanka</Link> can produce the same volume at a fraction of the cost, while maintaining brand voice consistency and SEO optimisation.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Compound Effect: Multiple AI Systems Working Together</h2>
                            <p>
                                The real power of AI is not in replacing one worker. It is in creating an interconnected system where your AI chatbot feeds qualified leads into your CRM, your AI sales SDR follows up automatically, your AI content generator produces personalised proposals, and your AI analytics dashboard tracks everything in real-time. This compound effect is what separates businesses working with the <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">best AI companies in Sri Lanka</Link> from those using basic chatbot scripts.
                            </p>

                            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-8 my-8">
                                <h4 className="text-xl font-bold text-white mb-4">Total Annual Savings: Typical Mid-Size Sri Lankan Business</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Customer Service: <strong>Rs. 1,260,000 - 1,620,000</strong> saved</li>
                                    <li>Lead Qualification: <strong>Rs. 720,000 - 960,000</strong> saved</li>
                                    <li>Content Production: <strong>Rs. 1,200,000 - 2,400,000</strong> saved</li>
                                    <li>Data Entry and Admin: <strong>Rs. 480,000 - 720,000</strong> saved</li>
                                    <li className="text-green-400 font-bold text-lg">Total: Rs. 3,660,000 - 5,700,000 per year</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common Objections from Sri Lankan Business Owners</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">&quot;AI will take away jobs&quot;</h3>
                            <p>
                                AI does not eliminate jobs &mdash; it eliminates repetitive tasks. Your customer service staff can focus on complex, high-value interactions instead of answering the same 20 questions 50 times a day. Your sales team can focus on closing instead of qualifying. Every ARC AI client has retained their staff while dramatically increasing output.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">&quot;AI is too expensive for Sri Lanka&quot;</h3>
                            <p>
                                AI from top AI companies in Sri Lanka like ARC AI is priced competitively for the local market. For custom software beyond AI, compare the <Link href="/software-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">list of software companies in Sri Lanka</Link>. Starting solutions are accessible for small businesses, and the ROI typically covers the entire investment within 2-4 months. Thanks to ARC AI&apos;s dual-market model (UK + Sri Lanka), you get enterprise-grade technology at Sri Lankan prices.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">&quot;My customers prefer talking to humans&quot;</h3>
                            <p>
                                Data shows the opposite. 73% of consumers prefer instant chat responses over waiting for a human callback. And when the AI chatbot is well-built (trilingual, contextually aware, genuinely helpful), most customers cannot tell the difference.
                            </p>

                            <div className="bg-gradient-to-r from-[rgb(255,73,37)]/20 to-orange-600/20 border border-[rgb(255,73,37)]/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Calculate Your AI Savings
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Want to know exactly how much AI can save your Sri Lankan business? ARC AI offers a free ROI consultation where we analyse your current operations and show you the specific savings and revenue gains AI will deliver.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors">
                                    Get a Free ROI Analysis
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI vs Manual Operations", "AI ROI Sri Lanka", "AI Companies Sri Lanka", "Cost Savings AI", "Business Automation", "AI Investment", "Sri Lanka Business"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/ai-for-tourism-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">AI for Tourism in Sri Lanka</div>
                            </div>
                        </Link>
                        <Link href="/ai-companies-sri-lanka" className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next Article</div>
                                <div className="font-semibold">Best AI Companies in Sri Lanka</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-8 pt-8 border-t border-neutral-800">
                        <div className="flex items-center gap-4">
                            <span className="text-neutral-400 text-sm font-semibold">Share this article:</span>
                            <button className="p-2 bg-neutral-900 rounded-lg hover:bg-[rgb(255,73,37)] transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </article>
        </div>
    );
}
