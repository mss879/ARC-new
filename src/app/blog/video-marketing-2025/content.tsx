"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Video, Play } from "lucide-react";
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
                    <img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1600&auto=format&fit=crop&q=80"
                        alt="Video Marketing"
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
                            Video Marketing Mastery: Dominate YouTube, TikTok & Reels
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Aug 15, 2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
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
                                Video content dominates digital marketing in 2025, with 82% of all internet traffic now video. Master the platforms, formats, and strategies that turn viewers into customers across YouTube, TikTok, Instagram Reels, and beyond.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why Video Marketing Dominates</h2>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-6 my-8">
                                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <Play className="w-5 h-5" />
                                    Video Marketing Statistics 2025
                                </h4>
                                <ul className="space-y-2 text-neutral-200">
                                    <li>• 88% of marketers report positive ROI from video marketing</li>
                                    <li>• Video increases landing page conversions by 80%</li>
                                    <li>• 72% of customers prefer learning about products via video</li>
                                    <li>• Social video generates 1200% more shares than text + images</li>
                                    <li>• YouTube reaches more 18-49 year-olds than all cable TV combined</li>
                                    <li>• Short-form video (under 60 sec) has the highest ROI</li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Platform-Specific Video Strategies</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">YouTube Strategy</h3>
                            <p><strong>Best for:</strong> Long-form education, tutorials, product reviews, brand storytelling</p>

                            <p><strong>Content formats that work:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>How-to tutorials:</strong> Educational content drives sustained traffic</li>
                                <li><strong>Product reviews:</strong> Build trust and drive purchase decisions</li>
                                <li><strong>Behind-the-scenes:</strong> Humanize your brand</li>
                                <li><strong>Expert interviews:</strong> Position brand as thought leader</li>
                                <li><strong>Vlogs:</strong> Personal connection with audience</li>
                                <li><strong>Webinars/presentations:</strong> B2B lead generation</li>
                            </ul>

                            <p><strong>Optimization tactics:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Hook in first 3 seconds:</strong> Capture attention immediately</li>
                                <li><strong>Keyword-optimized titles:</strong> Match search intent</li>
                                <li><strong>Custom thumbnails:</strong> Bright colors, faces, text overlay</li>
                                <li><strong>Detailed descriptions:</strong> 200+ words with keywords and timestamps</li>
                                <li><strong>Strategic tags:</strong> 5-8 relevant keywords</li>
                                <li><strong>End screens & cards:</strong> Drive viewers to more content</li>
                                <li><strong>Playlists:</strong> Increase watch time</li>
                                <li><strong>Consistent posting:</strong> 1-2 videos weekly minimum</li>
                            </ul>

                            <p><strong>YouTube Shorts (under 60 seconds):</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Quick tips, teasers for longer content, trending topics</li>
                                <li>Vertical 9:16 format</li>
                                <li>High discovery potential (100M+ daily views)</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">TikTok Strategy</h3>
                            <p><strong>Best for:</strong> Brand awareness, viral campaigns, Gen Z/Millennial audiences</p>

                            <p><strong>Content pillars that perform:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Educational content:</strong> Quick tips, life hacks, "things I wish I knew"</li>
                                <li><strong>Entertainment:</strong> Humor, storytelling, POV videos</li>
                                <li><strong>Trends & challenges:</strong> Participate in viral sounds/formats</li>
                                <li><strong>Behind-the-scenes:</strong> Authentic, raw moments</li>
                                <li><strong>Product demos:</strong> Show, don't tell</li>
                                <li><strong>User-generated content:</strong> Repost customer videos</li>
                            </ul>

                            <p><strong>TikTok success factors:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Hook in 1 second:</strong> Scroll-stopping opener</li>
                                <li><strong>Trending audio:</strong> Use popular sounds for discovery</li>
                                <li><strong>Captions/text overlay:</strong> Most watch without sound</li>
                                <li><strong>Authentic, not polished:</strong> Raw content performs better</li>
                                <li><strong>Post 1-3x daily:</strong> Algorithm rewards consistency</li>
                                <li><strong>Optimal length:</strong> 21-34 seconds</li>
                                <li><strong>Hashtag strategy:</strong> 3-5 relevant + trending hashtags</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Instagram Reels Strategy</h3>
                            <p><strong>Best for:</strong> Product showcases, lifestyle content, visual storytelling</p>

                            <p><strong>High-performing Reels formats:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Transformations:</strong> Before/after, reveal videos</li>
                                <li><strong>Tutorials:</strong> Quick how-tos, tips, tricks</li>
                                <li><strong>Lists:</strong> "5 ways to...", "Top 3..."</li>
                                <li><strong>Product features:</strong> Highlight unique benefits</li>
                                <li><strong>Relatable content:</strong> "POV:", "When you...", scenarios</li>
                                <li><strong>Trending audio:</strong> Jump on trending sounds early</li>
                            </ul>

                            <p><strong>Reels optimization:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Vertical 9:16 format:</strong> Full-screen experience</li>
                                <li><strong>Optimal length:</strong> 7-15 seconds for maximum reach</li>
                                <li><strong>Text overlays:</strong> Key messages visible without sound</li>
                                <li><strong>Trending audio:</strong> Higher discovery potential</li>
                                <li><strong>Strong CTA:</strong> "Save this", "Share with...", "Follow for more"</li>
                                <li><strong>Post during peak hours:</strong> 11AM-2PM, 7-9PM</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">LinkedIn Video Strategy</h3>
                            <p><strong>Best for:</strong> B2B marketing, thought leadership, professional services</p>

                            <p><strong>Content that resonates on LinkedIn:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Industry insights:</strong> Expert commentary, trend analysis</li>
                                <li><strong>Company culture:</strong> Behind-the-scenes, team spotlights</li>
                                <li><strong>Product demos:</strong> Solution-focused, problem-solving</li>
                                <li><strong>Customer testimonials:</strong> Case studies, success stories</li>
                                <li><strong>Thought leadership:</strong> Professional opinions, predictions</li>
                            </ul>

                            <p><strong>LinkedIn video best practices:</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Native upload:</strong> Don't share YouTube links (lower reach)</li>
                                <li><strong>Square format (1:1):</strong> Works on mobile and desktop</li>
                                <li><strong>Captions mandatory:</strong> 85% watch without sound</li>
                                <li><strong>Professional tone:</strong> More polished than TikTok/Reels</li>
                                <li><strong>Optimal length:</strong> 30-90 seconds</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Video Content Types by Funnel Stage</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Awareness Stage</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Entertaining content:</strong> Viral potential, broad appeal</li>
                                <li><strong>Educational tips:</strong> Value-first, no hard sell</li>
                                <li><strong>Brand story:</strong> Mission, values, origin</li>
                                <li><strong>Trending topics:</strong> Participate in conversations</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Consideration Stage</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Product demos:</strong> Feature highlights, use cases</li>
                                <li><strong>Comparison videos:</strong> vs. competitors (subtle)</li>
                                <li><strong>Customer testimonials:</strong> Social proof, trust building</li>
                                <li><strong>FAQ videos:</strong> Address common objections</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Decision Stage</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Case studies:</strong> ROI, results, transformations</li>
                                <li><strong>Product walkthroughs:</strong> Detailed features, setup</li>
                                <li><strong>Special offers:</strong> Limited-time promotions</li>
                                <li><strong>Free trial explainers:</strong> Reduce friction</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Video Production Essentials</h2>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Equipment (Start Simple, Upgrade Gradually)</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Camera:</strong> Smartphone (iPhone/Pixel) → Mirrorless (Sony/Canon)</li>
                                <li><strong>Microphone:</strong> Lavalier mic ($20) → Shotgun mic ($100+)</li>
                                <li><strong>Lighting:</strong> Natural light → Ring light ($40) → Softbox kit ($150+)</li>
                                <li><strong>Tripod:</strong> Phone tripod ($15) → Professional tripod ($100+)</li>
                                <li><strong>Editing software:</strong> CapCut (free) → DaVinci Resolve → Adobe Premiere Pro</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Production Quality Tips</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Audio is critical:</strong> Bad audio kills good video</li>
                                <li><strong>Natural lighting:</strong> Film near windows, avoid harsh overhead lights</li>
                                <li><strong>Clean background:</strong> Remove clutter, use depth of field</li>
                                <li><strong>Eye level camera:</strong> Position camera at subject's eye level</li>
                                <li><strong>Stable shots:</strong> Use tripod or stabilizer</li>
                                <li><strong>B-roll footage:</strong> Cutaway shots add visual interest</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Editing Best Practices</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Hook first:</strong> Most compelling content in first 3 seconds</li>
                                <li><strong>Fast pacing:</strong> Cut pauses, keep energy high</li>
                                <li><strong>Jump cuts:</strong> Remove "ums", pauses, mistakes</li>
                                <li><strong>Text overlays:</strong> Emphasize key points</li>
                                <li><strong>Background music:</strong> Set tone, fill dead air (royalty-free)</li>
                                <li><strong>Color grading:</strong> Consistent look across videos</li>
                                <li><strong>Subtitles/captions:</strong> 80% watch without sound</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Video SEO & Optimization</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Keyword research:</strong> Use YouTube autocomplete, TubeBuddy, vidIQ</li>
                                <li><strong>Compelling titles:</strong> Keyword + emotion + benefit</li>
                                <li><strong>Thumbnail design:</strong> Bright, contrasting colors + faces + text</li>
                                <li><strong>Video tags:</strong> Relevant keywords, competitors, category</li>
                                <li><strong>Transcripts:</strong> Upload full transcript for SEO</li>
                                <li><strong>Strategic CTAs:</strong> Subscribe, like, comment, share</li>
                                <li><strong>Engagement optimization:</strong> Pin comments, reply quickly, ask questions</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Video Marketing Metrics</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Views:</strong> Reach and awareness</li>
                                <li><strong>Watch time:</strong> Engagement and content quality</li>
                                <li><strong>Average view duration:</strong> How long viewers stay</li>
                                <li><strong>Engagement rate:</strong> Likes, comments, shares per view</li>
                                <li><strong>Click-through rate:</strong> CTA effectiveness</li>
                                <li><strong>Conversion rate:</strong> Views to desired actions</li>
                                <li><strong>Audience retention:</strong> Where viewers drop off</li>
                                <li><strong>Traffic sources:</strong> Where viewers discover content</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Video Marketing Tools</h2>

                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Editing:</strong> CapCut, DaVinci Resolve, Adobe Premiere Pro, Final Cut Pro</li>
                                <li><strong>Animation:</strong> Canva Video, Animoto, Vyond</li>
                                <li><strong>Screen recording:</strong> Loom, OBS Studio, Camtasia</li>
                                <li><strong>Stock footage:</strong> Pexels Video, Pixabay, Coverr</li>
                                <li><strong>Music:</strong> Epidemic Sound, Artlist, YouTube Audio Library</li>
                                <li><strong>Analytics:</strong> TubeBuddy, vidIQ, Sprout Social</li>
                                <li><strong>Thumbnails:</strong> Canva, Snappa, Adobe Express</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion</h2>
                            <p>
                                Video marketing dominates 2025 because it combines storytelling, emotion, and information in the most engaging format. Success requires platform-specific strategies, consistent production, authentic content, and data-driven optimization. Start with smartphone videos, master short-form content on TikTok/Reels, then expand to YouTube long-form as you build confidence and resources.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Video className="w-6 h-6" />
                                    Launch Your Video Marketing Strategy
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Our video marketing experts will develop your content strategy, produce high-quality videos, optimize for each platform, and drive measurable results across YouTube, TikTok, Reels, and more.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors">
                                    Get Video Marketing Strategy
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800">
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Video Marketing", "YouTube Marketing", "TikTok", "Instagram Reels", "Video Content", "Social Media", "Content Creation", "Digital Marketing"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between">
                        <Link href="/blog/influencer-marketing-strategy" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">Influencer Marketing</div>
                            </div>
                        </Link>
                        <Link href="/blog/marketing-analytics-dashboard" className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right">
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">Marketing Analytics</div>
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
