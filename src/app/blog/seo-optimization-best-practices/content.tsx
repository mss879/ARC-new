"use client";

import { motion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Target, Search, TrendingUp } from "lucide-react";
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

            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-end px-4 md:px-8 pt-32 pb-12">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1600&auto=format&fit=crop&q=80"
                        alt="SEO Optimization"
                        className="w-full h-full object-cover"
                        loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto w-full">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-accent transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-accent/20 backdrop-blur-sm text-accent text-sm font-semibold rounded-full border border-accent/30 mb-4">
                            Digital Marketing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            SEO Optimization Best Practices to Rank #1 on Google
                        </h1>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Sep 20, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>15 min read</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div className="space-y-6 text-neutral-300 leading-relaxed">
                            <p className="text-xl text-neutral-200">
                                Want to dominate Google search results and drive massive organic traffic? This comprehensive SEO guide reveals proven strategies, techniques, and best practices that will skyrocket your search engine rankings in 2024 and beyond.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Understanding Modern SEO in 2024</h2>
                            <p>
                                Search Engine Optimization (SEO) has evolved dramatically. Google's algorithm now uses over 200 ranking factors, with artificial intelligence (RankBrain, BERT, MUM) playing a central role. Success requires a holistic approach combining technical excellence, quality content, authoritative backlinks, and exceptional user experience.
                            </p>
                            <p>
                                The fundamentals remain: Google wants to show the best, most relevant results for every search query. Your job is to prove your content deserves that top spot.
                            </p>

                            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-8">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Target className="w-6 h-6 text-accent" />
                                    Core SEO Pillars for 2024
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <span className="text-accent">→</span>
                                        <span><strong>Technical SEO:</strong> Site speed, mobile optimization, structured data</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-accent">→</span>
                                        <span><strong>On-Page SEO:</strong> Content quality, keyword optimization, meta tags</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-accent">→</span>
                                        <span><strong>Off-Page SEO:</strong> Backlinks, domain authority, social signals</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-accent">→</span>
                                        <span><strong>User Experience:</strong> Engagement metrics, dwell time, bounce rate</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Master Keyword Research</h2>
                            <p>
                                Effective SEO starts with understanding what your audience searches for. Keyword research reveals the exact phrases people use to find solutions you provide.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Strategic Keyword Selection</h3>
                            <p>
                                <strong>Target three keyword types:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Head Keywords:</strong> High volume, high competition (e.g., "SEO services" - 20K searches/month)</li>
                                <li><strong>Body Keywords:</strong> Medium volume, moderate competition (e.g., "SEO services for small business" - 2K searches/month)</li>
                                <li><strong>Long-Tail Keywords:</strong> Lower volume, low competition, high intent (e.g., "affordable SEO services for local restaurants" - 200 searches/month)</li>
                            </ul>

                            <p className="mt-4">
                                <strong>Pro tip:</strong> Long-tail keywords convert 2.5x better than head terms. They indicate specific intent and face less competition, making them perfect for quick wins.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Top Keyword Research Tools</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Ahrefs:</strong> Comprehensive keyword data, difficulty scores, SERP analysis</li>
                                <li><strong>SEMrush:</strong> Competitive research, keyword gap analysis, ranking tracking</li>
                                <li><strong>Google Keyword Planner:</strong> Free tool with search volume and competition data</li>
                                <li><strong>AnswerThePublic:</strong> Discovers question-based keywords and search intent</li>
                                <li><strong>Ubersuggest:</strong> Budget-friendly alternative with solid keyword suggestions</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Search Intent Optimization</h3>
                            <p>
                                Understanding search intent is crucial. Google categorizes intent into four types:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Informational:</strong> "How to improve SEO rankings" → Create guides, tutorials</li>
                                <li><strong>Navigational:</strong> "Ahrefs login" → Optimize branded pages</li>
                                <li><strong>Commercial Investigation:</strong> "Best SEO tools 2024" → Create comparison content</li>
                                <li><strong>Transactional:</strong> "Buy SEO services" → Optimize product/service pages</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Create High-Quality, Comprehensive Content</h2>
                            <p>
                                Content is king, but not all content ranks. Google rewards in-depth, authoritative content that completely answers user queries.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Content Depth Formula</h3>
                            <p>
                                Studies show top-ranking content averages 1,890 words. However, length alone doesn't guarantee rankings—comprehensiveness does.
                            </p>
                            <p>
                                <strong>Creating comprehensive content:</strong>
                            </p>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li>Analyze top 10 ranking pages for your target keyword</li>
                                <li>Identify topics, subtopics, and questions they cover</li>
                                <li>Create content that covers everything they do—plus more unique insights</li>
                                <li>Add original research, case studies, expert quotes, and examples</li>
                                <li>Include visuals: images, infographics, videos, diagrams</li>
                            </ol>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Content Optimization Checklist</h3>
                            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 my-6">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Use target keyword in title (preferably at the beginning)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Include keyword in first 100 words naturally</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Optimize H2 and H3 headings with related keywords</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Use LSI keywords (semantically related terms) throughout</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Add internal links to related content (3-5 per article)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Include authoritative external links to support claims</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Optimize images with descriptive alt text and file names</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Write compelling meta descriptions (150-160 characters)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Use short paragraphs (2-3 sentences) for readability</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Add table of contents for long-form content</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Technical SEO Excellence</h2>
                            <p>
                                Technical SEO ensures search engines can crawl, index, and understand your website. Even amazing content won't rank if technical foundations are weak.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Page Speed Optimization</h3>
                            <p>
                                Page speed is a direct ranking factor. Google's Core Web Vitals measure loading performance, interactivity, and visual stability.
                            </p>
                            <p>
                                <strong>Speed optimization tactics:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Compress images (use WebP format, lazy loading)</li>
                                <li>Minify CSS, JavaScript, and HTML files</li>
                                <li>Leverage browser caching</li>
                                <li>Use a Content Delivery Network (CDN)</li>
                                <li>Enable GZIP compression</li>
                                <li>Remove unused plugins and scripts</li>
                                <li>Optimize database queries</li>
                            </ul>
                            <p className="mt-4">
                                <strong>Target metrics:</strong> Largest Contentful Paint (LCP) under 2.5s, First Input Delay (FID) under 100ms, Cumulative Layout Shift (CLS) under 0.1.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Mobile-First Optimization</h3>
                            <p>
                                Google uses mobile-first indexing—your mobile site determines rankings. With 60%+ of searches happening on mobile, mobile optimization is non-negotiable.
                            </p>
                            <p>
                                <strong>Mobile SEO essentials:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Responsive design that adapts to all screen sizes</li>
                                <li>Fast mobile loading (under 3 seconds)</li>
                                <li>Large, tappable buttons (at least 48x48 pixels)</li>
                                <li>Readable font sizes (16px minimum)</li>
                                <li>No intrusive interstitials or popups</li>
                                <li>Simplified navigation for mobile users</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Structured Data (Schema Markup)</h3>
                            <p>
                                Schema markup helps Google understand your content and enables rich snippets—enhanced search results with ratings, prices, images, and more.
                            </p>
                            <p>
                                <strong>Essential schema types:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Article Schema:</strong> For blog posts and news articles</li>
                                <li><strong>Product Schema:</strong> Shows prices, availability, reviews in search results</li>
                                <li><strong>FAQ Schema:</strong> Displays questions and answers directly in SERPs</li>
                                <li><strong>Review Schema:</strong> Shows star ratings in search listings</li>
                                <li><strong>Local Business Schema:</strong> Essential for local SEO</li>
                                <li><strong>BreadcrumbList Schema:</strong> Improves site navigation understanding</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">XML Sitemap & Robots.txt</h3>
                            <p>
                                Submit an XML sitemap to Google Search Console to ensure all important pages are discovered and indexed. Use robots.txt to control which pages search engines can crawl.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. Build High-Quality Backlinks</h2>
                            <p>
                                Backlinks remain one of Google's top ranking factors. Quality backlinks from authoritative websites signal trust and relevance to search engines.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">White-Hat Link Building Strategies</h3>

                            <p><strong>1. Create Link-Worthy Content</strong></p>
                            <p>
                                Original research, comprehensive guides, infographics, and tools naturally attract backlinks. Content that provides unique value gets linked to organically.
                            </p>

                            <p className="mt-4"><strong>2. Guest Posting</strong></p>
                            <p>
                                Write high-quality articles for reputable websites in your industry. Include contextual links back to your content. Focus on relevance over quantity.
                            </p>

                            <p className="mt-4"><strong>3. Broken Link Building</strong></p>
                            <p>
                                Find broken links on relevant websites using tools like Ahrefs. Contact site owners suggesting your content as a replacement. This provides value while earning backlinks.
                            </p>

                            <p className="mt-4"><strong>4. Digital PR & Journalist Outreach</strong></p>
                            <p>
                                Use services like HARO (Help a Reporter Out) to provide expert quotes for journalist articles. Earn authoritative backlinks from news sites and publications.
                            </p>

                            <p className="mt-4"><strong>5. Resource Page Link Building</strong></p>
                            <p>
                                Identify resource pages in your niche listing helpful tools and content. Reach out suggesting your resource for inclusion.
                            </p>

                            <p className="mt-4"><strong>6. Competitor Backlink Analysis</strong></p>
                            <p>
                                Analyze where competitors get backlinks using SEMrush or Ahrefs. Target the same websites with better content or unique angles.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Link Quality Over Quantity</h3>
                            <p>
                                One link from a high-authority site (DR 70+) is worth more than 100 links from low-quality sites. Focus on:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Domain Authority (DA) and Domain Rating (DR)</li>
                                <li>Relevance to your industry and content</li>
                                <li>Organic traffic to the linking page</li>
                                <li>Contextual links within content (not footers or sidebars)</li>
                                <li>DoFollow vs NoFollow (both are valuable)</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Optimize for User Experience (UX)</h2>
                            <p>
                                Google tracks user behavior signals: bounce rate, dwell time, click-through rate. Positive engagement signals indicate content quality and relevance.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Improving User Engagement</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Write compelling titles:</strong> Include power words, numbers, brackets for 20%+ higher CTR</li>
                                <li><strong>Hook readers immediately:</strong> First paragraph must capture attention and promise value</li>
                                <li><strong>Use visuals strategically:</strong> Break up text with images, videos, infographics every 150-300 words</li>
                                <li><strong>Improve readability:</strong> Short sentences, bullet points, white space, clear headings</li>
                                <li><strong>Add internal links:</strong> Keep users on your site longer with relevant content suggestions</li>
                                <li><strong>Include CTAs:</strong> Guide users to next actions (subscribe, download, read more)</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">6. Local SEO Strategies</h2>
                            <p>
                                For businesses serving specific geographic areas, local SEO drives foot traffic and local customers.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Google Business Profile Optimization</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Claim and verify your Google Business Profile</li>
                                <li>Complete all information fields (hours, phone, website, services)</li>
                                <li>Choose accurate business categories</li>
                                <li>Upload high-quality photos (products, team, location)</li>
                                <li>Collect and respond to customer reviews</li>
                                <li>Post regular updates and offers</li>
                                <li>Add products/services with descriptions and prices</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Local Citations & NAP Consistency</h3>
                            <p>
                                List your business on local directories ensuring Name, Address, and Phone (NAP) are identical across all platforms. Inconsistent information confuses search engines and hurts rankings.
                            </p>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">7. Track, Measure, and Optimize</h2>
                            <p>
                                SEO is an ongoing process. Regular monitoring and optimization based on data ensures continued improvement.
                            </p>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Essential SEO Metrics</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Organic Traffic:</strong> Overall traffic from search engines</li>
                                <li><strong>Keyword Rankings:</strong> Position for target keywords</li>
                                <li><strong>Click-Through Rate (CTR):</strong> Percentage of searchers clicking your result</li>
                                <li><strong>Bounce Rate:</strong> Percentage leaving without interaction</li>
                                <li><strong>Average Session Duration:</strong> Time users spend on site</li>
                                <li><strong>Pages per Session:</strong> Number of pages viewed</li>
                                <li><strong>Conversion Rate:</strong> Percentage completing desired actions</li>
                                <li><strong>Backlink Growth:</strong> New quality backlinks acquired</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Essential SEO Tools</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Google Search Console:</strong> Monitor search performance, index status, technical issues</li>
                                <li><strong>Google Analytics 4:</strong> Track user behavior, traffic sources, conversions</li>
                                <li><strong>Ahrefs/SEMrush:</strong> Keyword research, competitor analysis, backlink tracking</li>
                                <li><strong>Screaming Frog:</strong> Technical SEO audits, crawl analysis</li>
                                <li><strong>PageSpeed Insights:</strong> Core Web Vitals and performance metrics</li>
                            </ul>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Common SEO Mistakes to Avoid</h2>
                            <ol className="list-decimal pl-6 space-y-2">
                                <li><strong>Keyword Stuffing:</strong> Using keywords unnaturally harms readability and rankings</li>
                                <li><strong>Buying Backlinks:</strong> Paid links violate Google guidelines and risk penalties</li>
                                <li><strong>Duplicate Content:</strong> Identical content across pages confuses search engines</li>
                                <li><strong>Ignoring Mobile:</strong> Non-mobile-friendly sites lose 60%+ of potential traffic</li>
                                <li><strong>Slow Loading Speed:</strong> Each second of delay reduces conversions by 7%</li>
                                <li><strong>Thin Content:</strong> Short, low-value content won't rank competitively</li>
                                <li><strong>No Analytics:</strong> Can't optimize what you don't measure</li>
                                <li><strong>Neglecting Technical SEO:</strong> Great content won't rank with technical issues</li>
                            </ol>

                            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion: Your Path to #1 Rankings</h2>
                            <p>
                                Ranking #1 on Google requires a comprehensive, sustained SEO effort combining technical optimization, quality content, authoritative backlinks, and exceptional user experience. There are no shortcuts, but following these best practices will dramatically improve your search visibility.
                            </p>
                            <p>
                                <strong>Key takeaways:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Focus on user intent, not just keywords</li>
                                <li>Create the most comprehensive content for your topics</li>
                                <li>Build high-quality, relevant backlinks consistently</li>
                                <li>Ensure technical excellence (speed, mobile, structured data)</li>
                                <li>Optimize for engagement and user experience</li>
                                <li>Track metrics and continuously improve</li>
                            </ul>
                            <p className="mt-6">
                                SEO is a marathon, not a sprint. Results typically appear within 3-6 months, with significant improvements by month 12. Stay consistent, keep learning, and adapt to algorithm updates. Your #1 ranking awaits.
                            </p>

                            <div className="bg-gradient-to-r from-accent/20 to-orange-600/20 border border-accent/30 rounded-xl p-8 mt-12">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6" />
                                    Ready to Dominate Google Rankings?
                                </h3>
                                <p className="text-neutral-200 mb-6">
                                    Our SEO experts have helped hundreds of businesses achieve first-page Google rankings and drive massive organic traffic growth. We'll create a custom SEO strategy tailored to your industry, competition, and goals.
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                                >
                                    Get Your Free SEO Audit
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-12 pt-8 border-t border-neutral-800"
                    >
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {["SEO", "Google Rankings", "Keyword Research", "Content Optimization", "Link Building", "Technical SEO", "On-Page SEO", "Search Engine Marketing"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-accent transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between"
                    >
                        <Link
                            href="/blog/ai-chatbots-customer-service"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-semibold">AI Chatbots Guide</div>
                            </div>
                        </Link>
                        <Link
                            href="/blog/workflow-automation-tools-2024"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-accent transition-colors text-right"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Next</div>
                                <div className="font-semibold">Workflow Automation Tools</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* Share */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="mt-8 pt-8 border-t border-neutral-800"
                    >
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
