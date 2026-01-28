"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Users, TrendingUp, Target } from "lucide-react";
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
                    <img src="https://images.unsplash.com/photo-1611926653670-e52b0fc8cc6e?w=1600&auto=format&fit=crop&q=80"
                        alt="Influencer Marketing"
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
                            Digital Marketing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Influencer Marketing Strategy: Partner Your Way to Growth
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Aug 18, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
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
                                Influencer marketing has evolved from celebrity endorsements to sophisticated partnerships with micro and nano influencers delivering authentic connections and measurable ROI. Master the strategy, execution, and measurement of influencer campaigns that drive real business results.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The State of Influencer Marketing in 2025</h2>
                            <p>
                                Influencer marketing is now a $21 billion industry, with 93% of marketers using it as part of their strategy. However, success requires moving beyond vanity metrics to focus on authentic partnerships, audience alignment, and measurable business outcomes.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Influencer Marketing ROI Statistics
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• $5.78 earned for every $1 spent on influencer marketing</li>
                                    <li>• 60% of consumers have been influenced by influencer recommendations</li>
                                    <li>• Micro-influencers (10K-100K) drive 60% higher engagement than macro</li>
                                    <li>• 71% of consumers trust influencer recommendations</li>
                                    <li>• Influencer content drives 11x higher ROI than traditional ads</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Understanding Influencer Tiers</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Nano Influencers (1K-10K followers)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Engagement rate:</strong> 5-8% (highest authenticity)</li>
                                <li><strong>Best for:</strong> Hyper-local campaigns, niche products, building communities</li>
                                <li><strong>Cost:</strong> $10-$100 per post or product gifting</li>
                                <li><strong>Advantages:</strong> Authentic connections, high trust, affordable scale</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Micro Influencers (10K-100K followers)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Engagement rate:</strong> 3-5% (sweet spot for most brands)</li>
                                <li><strong>Best for:</strong> Product launches, brand awareness, conversions</li>
                                <li><strong>Cost:</strong> $100-$1,000 per post</li>
                                <li><strong>Advantages:</strong> Engaged audiences, niche expertise, cost-effective</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Mid-Tier Influencers (100K-500K followers)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Engagement rate:</strong> 2-3%</li>
                                <li><strong>Best for:</strong> Brand partnerships, campaigns, product collaborations</li>
                                <li><strong>Cost:</strong> $1,000-$10,000 per post</li>
                                <li><strong>Advantages:</strong> Reach + engagement balance, professional content</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Macro Influencers (500K-1M followers)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Engagement rate:</strong> 1.5-2%</li>
                                <li><strong>Best for:</strong> Mass awareness, product launches, credibility</li>
                                <li><strong>Cost:</strong> $10,000-$50,000 per post</li>
                                <li><strong>Advantages:</strong> Wide reach, professional production, brand prestige</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Mega Influencers / Celebrities (1M+ followers)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Engagement rate:</strong> 1-1.5%</li>
                                <li><strong>Best for:</strong> Major campaigns, global launches, brand positioning</li>
                                <li><strong>Cost:</strong> $50,000-$1M+ per post</li>
                                <li><strong>Advantages:</strong> Massive reach, PR value, instant credibility</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Building Your Influencer Strategy</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 1: Define Clear Objectives</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Brand awareness:</strong> Reach, impressions, mentions</li>
                                <li><strong>Engagement:</strong> Comments, shares, saves, DMs</li>
                                <li><strong>Conversions:</strong> Sales, sign-ups, downloads</li>
                                <li><strong>Content creation:</strong> UGC for repurposing</li>
                                <li><strong>Community building:</strong> Long-term audience growth</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 2: Identify the Right Influencers</h3>
                            <p><strong>Key vetting criteria:</strong></p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Audience alignment:</strong> Demographics match your target customer</li>
                                <li><strong>Engagement quality:</strong> Real comments vs. bots/pods</li>
                                <li><strong>Content quality:</strong> Professional, on-brand, authentic</li>
                                <li><strong>Brand values fit:</strong> Alignment with your mission and ethics</li>
                                <li><strong>Previous partnerships:</strong> Success with similar brands</li>
                                <li><strong>Niche expertise:</strong> Authority in relevant category</li>
                            </ol>

                            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    Red Flags to Avoid
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• Sudden follower spikes (likely fake followers)</li>
                                    <li>• Low engagement relative to follower count (&lt;1%)</li>
                                    <li>• Generic comments (emojis only, "nice pic")</li>
                                    <li>• Too many sponsored posts (audience fatigue)</li>
                                    <li>• Misaligned brand partnerships</li>
                                    <li>• Negative comment sections or controversies</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Step 3: Outreach & Negotiation</h3>
                            <p><strong>Effective outreach template:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personalized intro (reference specific content)</li>
                                <li>Explain why you're a good fit for their audience</li>
                                <li>Outline partnership proposal clearly</li>
                                <li>Be transparent about expectations and compensation</li>
                                <li>Make it easy to respond (clear CTA)</li>
                            </ul>

                            <p><strong>Compensation models:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Flat fee:</strong> Fixed payment per post/campaign</li>
                                <li><strong>Performance-based:</strong> Commissions on sales (10-20%)</li>
                                <li><strong>Hybrid:</strong> Base fee + performance bonuses</li>
                                <li><strong>Product gifting:</strong> Free products (nano/micro influencers)</li>
                                <li><strong>Affiliate programs:</strong> Unique discount codes + commission</li>
                                <li><strong>Long-term partnerships:</strong> Brand ambassadorships</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Campaign Execution Best Practices</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Content Guidelines</h3>
                            <p><strong>Balance control with authenticity:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Provide:</strong> Key messages, product info, brand guidelines, hashtags</li>
                                <li><strong>Don't micromanage:</strong> Trust influencer's creative expertise</li>
                                <li><strong>Approve drafts:</strong> Review before posting (in contract)</li>
                                <li><strong>FTC compliance:</strong> Require clear disclosure (#ad, #sponsored)</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Campaign Types That Work</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Product reviews:</strong> Honest feedback builds trust</li>
                                <li><strong>Unboxing videos:</strong> Generate excitement and curiosity</li>
                                <li><strong>Tutorials/How-tos:</strong> Educational content drives value</li>
                                <li><strong>Behind-the-scenes:</strong> Authentic brand storytelling</li>
                                <li><strong>Giveaways/contests:</strong> Boost engagement and reach</li>
                                <li><strong>Takeovers:</strong> Influencer controls brand's social for a day</li>
                                <li><strong>Affiliate campaigns:</strong> Performance-driven partnerships</li>
                                <li><strong>Brand ambassador programs:</strong> Long-term collaborations</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Measuring Influencer ROI</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Key Metrics to Track</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Reach:</strong> Total unique users exposed to content</li>
                                <li><strong>Impressions:</strong> Total views of content</li>
                                <li><strong>Engagement rate:</strong> (Likes + Comments + Shares) / Reach</li>
                                <li><strong>Click-through rate:</strong> Clicks on links / Impressions</li>
                                <li><strong>Conversions:</strong> Sales, sign-ups, downloads attributed</li>
                                <li><strong>Cost per engagement (CPE):</strong> Total spend / Engagements</li>
                                <li><strong>Cost per acquisition (CPA):</strong> Total spend / Conversions</li>
                                <li><strong>ROAS:</strong> Revenue generated / Total spend</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Attribution Tracking</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Unique discount codes:</strong> Track sales per influencer</li>
                                <li><strong>UTM parameters:</strong> Track traffic and conversions in GA4</li>
                                <li><strong>Affiliate links:</strong> Automated tracking and commissions</li>
                                <li><strong>Branded hashtags:</strong> Monitor mentions and UGC</li>
                                <li><strong>Influencer-specific landing pages:</strong> Dedicated URLs</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Platform-Specific Strategies</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Instagram Influencer Marketing</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Best for:</strong> Fashion, beauty, lifestyle, food, travel</li>
                                <li><strong>Content types:</strong> Reels, Stories, carousel posts, IGTV</li>
                                <li><strong>Average cost:</strong> $100-$10,000 per post (varies by follower count)</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">TikTok Influencer Marketing</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Best for:</strong> Gen Z products, entertainment, trends</li>
                                <li><strong>Content types:</strong> Short-form video, duets, challenges</li>
                                <li><strong>Advantage:</strong> Viral potential, high engagement rates</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">YouTube Influencer Marketing</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Best for:</strong> Tech, gaming, tutorials, reviews</li>
                                <li><strong>Content types:</strong> Product reviews, sponsored integrations</li>
                                <li><strong>Advantage:</strong> Long-form storytelling, SEO benefits</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">LinkedIn Influencer Marketing</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Best for:</strong> B2B products, services, thought leadership</li>
                                <li><strong>Content types:</strong> Industry insights, case studies, articles</li>
                                <li><strong>Advantage:</strong> Professional audience, decision-maker reach</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Top Influencer Marketing Tools</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Discovery:</strong> AspireIQ, Upfluence, CreatorIQ, GRIN</li>
                                <li><strong>Vetting:</strong> HypeAuditor, Social Blade, FakeSpot</li>
                                <li><strong>Management:</strong> Traackr, Klear, Influence.co</li>
                                <li><strong>Analytics:</strong> TapInfluence, HYPR, Lefty</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
                            <p>
                                Influencer marketing success in 2025 requires authentic partnerships, strategic alignment, clear measurement, and ongoing relationship building. Move beyond one-off posts to develop long-term ambassador programs that deliver consistent results. Focus on micro-influencers for engagement, track performance rigorously, and always prioritize audience fit over follower count.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Users className="w-6 h-6" />
                                    Launch Your Influencer Marketing Campaign
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Our influencer marketing experts will identify the perfect partners, negotiate contracts, manage campaigns, and track ROI to ensure your influencer marketing drives real business results.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Get Influencer Strategy
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Influencer Marketing", "Brand Partnerships", "Social Media Marketing", "Content Creator", "Digital Marketing", "Micro Influencers", "ROI", "Campaign Strategy"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/email-marketing-automation" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">Email Marketing Automation</div>
                            </div>
                        </Link>
                        <Link href="/blog/video-marketing-2025" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">Video Marketing 2025</div>
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
