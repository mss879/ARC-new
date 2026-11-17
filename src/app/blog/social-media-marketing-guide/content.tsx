"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, TrendingUp, Target, Users } from "lucide-react";
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
                    <Image src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop&q=80"
                        alt="Social Media Marketing"
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
                            Digital Marketing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-[-0.035em]">
                            Complete Social Media Marketing Guide for Business Growth
                        </h1>
                        <div className="flex items-center gap-6 text-ink-soft">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Sep 10, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>16 min read</span>
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
                                Social media marketing has evolved into a sophisticated discipline requiring strategy, creativity, and data-driven optimization. Master the platforms, content strategies, and analytics that drive real business results in 2024.
                            </p>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Platform-Specific Strategies</h2>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Facebook Marketing</h3>
                            <p><strong>Best for:</strong> Brand awareness, community building, diverse demographics</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Content types:</strong> Video (native), live streams, stories, groups</li>
                                <li><strong>Posting frequency:</strong> 1-2 times daily</li>
                                <li><strong>Best times:</strong> Weekdays 1-4 PM</li>
                                <li><strong>Ad formats:</strong> Carousel, video, collection, lead generation</li>
                                <li><strong>Key metrics:</strong> Engagement rate, reach, video completion rate</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Instagram Marketing</h3>
                            <p><strong>Best for:</strong> Visual brands, lifestyle products, younger demographics</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Content types:</strong> Reels (prioritized), stories, carousel posts, IGTV</li>
                                <li><strong>Posting frequency:</strong> 4-7 times weekly</li>
                                <li><strong>Best times:</strong> Monday-Friday 11 AM - 1 PM</li>
                                <li><strong>Hashtag strategy:</strong> 5-10 relevant hashtags</li>
                                <li><strong>Engagement tactics:</strong> Story polls, Q&A, user-generated content</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">LinkedIn Marketing</h3>
                            <p><strong>Best for:</strong> B2B, thought leadership, professional services</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Content types:</strong> Industry insights, long-form articles, company updates</li>
                                <li><strong>Posting frequency:</strong> 3-5 times weekly</li>
                                <li><strong>Best times:</strong> Tuesday-Thursday 10 AM - 12 PM</li>
                                <li><strong>Engagement strategy:</strong> Comment on industry posts, join groups</li>
                                <li><strong>Lead generation:</strong> Lead gen forms, document ads</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Twitter/X Marketing</h3>
                            <p><strong>Best for:</strong> Real-time engagement, news, customer service</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Content types:</strong> Short updates, threads, polls</li>
                                <li><strong>Posting frequency:</strong> 3-5 times daily</li>
                                <li><strong>Engagement tactics:</strong> Respond quickly, use trending hashtags</li>
                                <li><strong>Twitter Spaces:</strong> Host live audio conversations</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">TikTok Marketing</h3>
                            <p><strong>Best for:</strong> Gen Z/Millennials, entertainment, viral content</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Content types:</strong> Short-form video (15-60 seconds)</li>
                                <li><strong>Posting frequency:</strong> 1-4 times daily</li>
                                <li><strong>Virality factors:</strong> Trending sounds, duets, stitches</li>
                                <li><strong>Authenticity:</strong> Raw, unpolished content performs better</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Content Strategy Framework</h2>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">The 80/20 Rule</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>80% Value:</strong> Educational, entertaining, inspiring content</li>
                                <li><strong>20% Promotional:</strong> Product/service promotions, sales</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Content Pillars</h3>
                            <p>Organize content around 3-5 core themes:</p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Educational:</strong> How-tos, tips, industry insights</li>
                                <li><strong>Inspirational:</strong> Success stories, motivational content</li>
                                <li><strong>Entertainment:</strong> Humor, behind-the-scenes, trending content</li>
                                <li><strong>Community:</strong> User-generated content, testimonials</li>
                                <li><strong>Promotional:</strong> Products, services, special offers</li>
                            </ol>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Content Calendar Best Practices</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Plan 2-4 weeks ahead</li>
                                <li>Balance content types and pillars</li>
                                <li>Schedule posts for optimal times</li>
                                <li>Leave 20% flexible for real-time content</li>
                                <li>Track performance and adjust strategy</li>
                            </ul>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-6 my-8">
                                <h4 className="text-xl font-bold text-ink mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5" />
                                    High-Performing Content Formats
                                </h4>
                                <ul className="space-y-2 text-ink">
                                    <li>✓ Short-form video (Reels, TikTok, YouTube Shorts)</li>
                                    <li>✓ Educational carousels (Instagram, LinkedIn)</li>
                                    <li>✓ User-generated content and testimonials</li>
                                    <li>✓ Behind-the-scenes and authentic moments</li>
                                    <li>✓ Interactive content (polls, quizzes, Q&A)</li>
                                    <li>✓ Live streams and real-time engagement</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Paid Social Media Advertising</h2>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Campaign Structure</h3>
                            <ol className="list-decimal pl-6 space-y-3">
                                <li><strong>Campaign objective:</strong> Awareness, consideration, conversion</li>
                                <li><strong>Audience targeting:</strong> Demographics, interests, behaviors, lookalikes</li>
                                <li><strong>Ad creative:</strong> Attention-grabbing visuals, clear messaging</li>
                                <li><strong>Landing pages:</strong> Optimized for conversions</li>
                                <li><strong>Budget allocation:</strong> Test and scale winners</li>
                            </ol>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Targeting Strategies</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cold audiences:</strong> Interest-based, demographic targeting</li>
                                <li><strong>Warm audiences:</strong> Website visitors, engagement custom audiences</li>
                                <li><strong>Hot audiences:</strong> Email lists, past purchasers</li>
                                <li><strong>Lookalike audiences:</strong> Similar to your best customers</li>
                                <li><strong>Retargeting:</strong> Re-engage users who showed interest</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Ad Creative Best Practices</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Hook viewers in first 3 seconds</li>
                                <li>Use captions (80% watch without sound)</li>
                                <li>Clear, compelling call-to-action</li>
                                <li>Mobile-first design (vertical video)</li>
                                <li>Test multiple variations (A/B testing)</li>
                                <li>Include social proof when possible</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Social Media Analytics & KPIs</h2>

                            <h3 className="text-2xl font-bold text-ink mt-8 mb-4">Key Metrics to Track</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Reach:</strong> Total unique users who saw content</li>
                                <li><strong>Impressions:</strong> Total times content was displayed</li>
                                <li><strong>Engagement rate:</strong> (Likes + Comments + Shares) / Reach</li>
                                <li><strong>Click-through rate (CTR):</strong> Clicks / Impressions</li>
                                <li><strong>Conversion rate:</strong> Conversions / Clicks</li>
                                <li><strong>Cost per result:</strong> Total spend / Results</li>
                                <li><strong>ROAS:</strong> Revenue / Ad spend</li>
                            </ul>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-6 my-8">
                                <h4 className="text-xl font-bold text-ink mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Benchmark Engagement Rates (2024)
                                </h4>
                                <ul className="space-y-2 text-ink">
                                    <li>• Instagram: 1.5-3.5% (Reels up to 5%)</li>
                                    <li>• Facebook: 0.5-1.5%</li>
                                    <li>• LinkedIn: 2-5%</li>
                                    <li>• Twitter: 0.5-1%</li>
                                    <li>• TikTok: 5-15% (highly variable)</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Community Management</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Response time:</strong> Aim for under 1 hour during business hours</li>
                                <li><strong>Tone:</strong> Consistent with brand voice, authentic</li>
                                <li><strong>Crisis management:</strong> Address negative feedback promptly and professionally</li>
                                <li><strong>Engagement tactics:</strong> Ask questions, respond to comments, feature UGC</li>
                                <li><strong>Moderation:</strong> Clear community guidelines, remove spam/abuse</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Tools for Social Media Success</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Scheduling:</strong> Buffer, Hootsuite, Later, Sprout Social</li>
                                <li><strong>Design:</strong> Canva, Adobe Express, Figma</li>
                                <li><strong>Analytics:</strong> Native platform analytics, Sprout Social, Hootsuite</li>
                                <li><strong>Video editing:</strong> CapCut, InShot, Adobe Premiere Rush</li>
                                <li><strong>Listening:</strong> Brandwatch, Mention, Hootsuite Insights</li>
                            </ul>

                            <h2 className="text-3xl font-medium text-ink mt-12 mb-6 tracking-[-0.035em]">Conclusion</h2>
                            <p>
                                Social media marketing success requires understanding each platform's unique ecosystem, creating valuable content consistently, engaging authentically with your community, and using data to continuously optimize your strategy. The brands winning on social media are those that adapt quickly, experiment boldly, and prioritize genuine connections over vanity metrics.
                            </p>

                            <div className="cut-card [--cut:14px] relative bg-gradient-to-r from-ember/20 to-ember/20 [--cut-line:rgba(255,73,37,0.3)] p-8 mt-12">
                                <h3 className="text-2xl font-bold text-ink mb-4 flex items-center gap-2">
                                    <Users className="w-6 h-6" />
                                    Ready to Elevate Your Social Media Presence?
                                </h3>
                                <p className="text-ink mb-6">
                                    Our social media experts will audit your current presence, develop a custom strategy, create high-performing content, and drive measurable business results across all platforms.
                                </p>
                                <Link href="/contact" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-flex items-center gap-2 px-6 py-3 bg-ember text-ink font-semibold hover:bg-[#FF5C3A] transition-colors">
                                    Get Social Media Strategy
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10">
                        <h4 className="text-sm font-semibold text-ink-soft uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Social Media Marketing", "Digital Marketing", "Content Strategy", "Instagram Marketing", "Facebook Ads", "LinkedIn Marketing", "TikTok", "Social Media ROI"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/70 text-ink-soft text-sm rounded-full border border-ink/10 hover:border-ember transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-ink/10 flex items-center justify-between">
                        <Link href="/ai-automation-sri-lanka" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">Workflow Automation Tools</div>
                            </div>
                        </Link>
                        <Link href="/blog/ai-content-generation-marketing" className="group flex items-center gap-2 text-ink-soft hover:text-ember-deep transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">AI Content Generation</div>
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
