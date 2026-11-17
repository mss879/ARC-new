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
        <div className="home-cream min-h-screen bg-transparent text-ink">
            <Navbar />
            <Breadcrumbs items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "AI vs Manual Operations: Sri Lanka" }
            ]} />

            <section className="relative flex items-end px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-ember/20 text-ember-deep text-sm font-semibold rounded-full border border-ember/30 mb-4">
                            AI ROI &middot; Sri Lanka
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            AI vs Manual Operations: Cost Comparison for Sri Lankan Businesses
                        </h1>
                        <div className="flex items-center gap-6 text-ink-soft">
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
                        <div className="space-y-6 text-ink-soft leading-relaxed">

                            <p className="text-xl text-ink">
                                Every Sri Lankan business owner asks the same question: &quot;Is AI worth the investment?&quot; The answer, backed by real data from <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">top AI companies in Sri Lanka</Link>, is overwhelmingly yes. This article provides a detailed, rupee-by-rupee cost comparison between manual operations and AI automation across the most common business functions.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Customer Service: Manual vs AI</h2>

                            <div className="overflow-x-auto my-8">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-ink/10">
                                            <th className="text-left p-4 text-ink font-semibold">Factor</th>
                                            <th className="text-left p-4 text-ink font-semibold">Manual (2 Staff)</th>
                                            <th className="text-left p-4 text-ember-deep font-semibold">AI Chatbot</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-ink-soft">
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Monthly Cost</td>
                                            <td className="p-4">Rs. 180,000</td>
                                            <td className="p-4 text-green-700">Rs. 45,000 - 75,000</td>
                                        </tr>
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Hours Available</td>
                                            <td className="p-4">8-10 hrs/day (weekdays)</td>
                                            <td className="p-4 text-green-700">24/7/365</td>
                                        </tr>
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Response Time</td>
                                            <td className="p-4">4-12 hours average</td>
                                            <td className="p-4 text-green-700">Under 3 seconds</td>
                                        </tr>
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Languages</td>
                                            <td className="p-4">1-2 languages</td>
                                            <td className="p-4 text-green-700">Sinhala, Tamil, English + more</td>
                                        </tr>
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Simultaneous Conversations</td>
                                            <td className="p-4">1-2 at a time</td>
                                            <td className="p-4 text-green-700">Unlimited</td>
                                        </tr>
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Annual Cost</td>
                                            <td className="p-4">Rs. 2,160,000+</td>
                                            <td className="p-4 text-green-700">Rs. 540,000 - 900,000</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-ink">Annual Savings</td>
                                            <td className="p-4">&mdash;</td>
                                            <td className="p-4 text-green-700 font-bold">Rs. 1,260,000 - 1,620,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                That is a <strong>58-75% cost reduction</strong> on customer service alone, with dramatically better performance. Your AI chatbot never calls in sick, never needs holidays, and never has a bad day. And it handles peak-season volume without you hiring temporary staff.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Lead Qualification: Manual vs AI Sales SDR</h2>

                            <div className="overflow-x-auto my-8">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b border-ink/10">
                                            <th className="text-left p-4 text-ink font-semibold">Factor</th>
                                            <th className="text-left p-4 text-ink font-semibold">Manual Sales Team</th>
                                            <th className="text-left p-4 text-ember-deep font-semibold">AI Sales SDR</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-ink-soft">
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Leads Processed/Day</td>
                                            <td className="p-4">20-30</td>
                                            <td className="p-4 text-green-700">200+</td>
                                        </tr>
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Qualification Accuracy</td>
                                            <td className="p-4">60-70%</td>
                                            <td className="p-4 text-green-700">85-95%</td>
                                        </tr>
                                        <tr className="border-b border-ink/10">
                                            <td className="p-4">Follow-up Speed</td>
                                            <td className="p-4">1-4 hours</td>
                                            <td className="p-4 text-green-700">Instant</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4">Missed Leads</td>
                                            <td className="p-4">15-30%</td>
                                            <td className="p-4 text-green-700">0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Content Production: Manual vs AI Content Generation</h2>
                            <p>
                                A typical Sri Lankan business needs 8-12 social media posts per week, 2-4 blog articles per month, ad copy, product descriptions, and email campaigns. Hiring a content team costs Rs. 200,000-400,000 per month. AI content generation systems deployed by <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">AI companies in Sri Lanka</Link> can produce the same volume at a fraction of the cost, while maintaining brand voice consistency and SEO optimisation.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">The Compound Effect: Multiple AI Systems Working Together</h2>
                            <p>
                                The real power of AI is not in replacing one worker. It is in creating an interconnected system where your AI chatbot feeds qualified leads into your CRM, your AI sales SDR follows up automatically, your AI content generator produces personalised proposals, and your AI analytics dashboard tracks everything in real-time. This compound effect is what separates businesses working with the <Link href="/ai-companies-sri-lanka" className="text-ember-deep hover:underline">best AI companies in Sri Lanka</Link> from those using basic chatbot scripts.
                            </p>

                            <div className="cut-card [--cut:14px] relative bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 my-8">
                                <h4 className="text-xl font-bold text-ink mb-4">Total Annual Savings: Typical Mid-Size Sri Lankan Business</h4>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Customer Service: <strong>Rs. 1,260,000 - 1,620,000</strong> saved</li>
                                    <li>Lead Qualification: <strong>Rs. 720,000 - 960,000</strong> saved</li>
                                    <li>Content Production: <strong>Rs. 1,200,000 - 2,400,000</strong> saved</li>
                                    <li>Data Entry and Admin: <strong>Rs. 480,000 - 720,000</strong> saved</li>
                                    <li className="text-green-700 font-bold text-lg">Total: Rs. 3,660,000 - 5,700,000 per year</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Common Objections from Sri Lankan Business Owners</h2>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">&quot;AI will take away jobs&quot;</h3>
                            <p>
                                AI does not eliminate jobs &mdash; it eliminates repetitive tasks. Your customer service staff can focus on complex, high-value interactions instead of answering the same 20 questions 50 times a day. Your sales team can focus on closing instead of qualifying. Every ARC AI client has retained their staff while dramatically increasing output.
                            </p>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">&quot;AI is too expensive for Sri Lanka&quot;</h3>
                            <p>
                                AI from top AI companies in Sri Lanka like ARC AI is priced competitively for the local market. For custom software beyond AI, compare the <Link href="/software-companies-sri-lanka" className="text-ember-deep hover:underline">list of software companies in Sri Lanka</Link>. Starting solutions are accessible for small businesses, and the ROI typically covers the entire investment within 2-4 months. Thanks to ARC AI&apos;s dual-market model (UK + Sri Lanka), you get enterprise-grade technology at Sri Lankan prices.
                            </p>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">&quot;My customers prefer talking to humans&quot;</h3>
                            <p>
                                Data shows the opposite. 73% of consumers prefer instant chat responses over waiting for a human callback. And when the AI chatbot is well-built (trilingual, contextually aware, genuinely helpful), most customers cannot tell the difference.
                            </p>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-8 mt-12">
                                <h3 className="text-2xl font-bold text-ink mb-4">
                                    Calculate Your AI Savings
                                </h3>
                                <p className="text-ink mb-6">
                                    Want to know exactly how much AI can save your Sri Lankan business? ARC AI offers a free ROI consultation where we analyse your current operations and show you the specific savings and revenue gains AI will deliver.
                                </p>
                                <Link href="/contact" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember text-ink font-semibold hover:bg-ember/90 transition-colors">
                                    Get a Free ROI Analysis
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                        <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["AI vs Manual Operations", "AI ROI Sri Lanka", "AI Companies Sri Lanka", "Cost Savings AI", "Business Automation", "AI Investment", "Sri Lanka Business"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/70 text-ink-soft text-sm rounded-full border border-ink/10">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10 flex items-center justify-between">
                        <Link href="/blog/ai-for-tourism-sri-lanka" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">AI for Tourism in Sri Lanka</div>
                            </div>
                        </Link>
                        <Link href="/ai-companies-sri-lanka" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next Article</div>
                                <div className="font-semibold">Best AI Companies in Sri Lanka</div>
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
