'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { trackFormSubmitted } from '@/lib/analytics/tracker';
import { motion } from 'framer-motion';
import { Star, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

function ReviewForm() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    
    const [reviewId, setReviewId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        client_name: '',
        client_company: '',
        rating: 5,
        content: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [hoveredStar, setHoveredStar] = useState<number | null>(null);

    useEffect(() => {
        const validateToken = async () => {
            if (!token) {
                setError('No review token provided.');
                setLoading(false);
                return;
            }

            const { data, error: dbError } = await supabase
                .from('client_reviews')
                .select('id, token_used')
                .eq('token', token)
                .single();

            if (dbError || !data) {
                setError('Invalid review link.');
            } else if (data.token_used) {
                setError('This review link has already been used.');
            } else {
                setReviewId(data.id);
            }
            setLoading(false);
        };

        validateToken();
    }, [token]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!reviewId || !token) return;

        if (!formData.client_name.trim() || !formData.content.trim()) {
            setError('Please fill in your name and your review.');
            return;
        }

        setSubmitting(true);
        setError(null);

        const { error: submitError } = await supabase
            .from('client_reviews')
            .update({
                client_name: formData.client_name,
                client_company: formData.client_company,
                rating: formData.rating,
                content: formData.content,
                token_used: true
            })
            .eq('token', token);

        if (submitError) {
            console.error('Submit error:', submitError);
            setError('Failed to submit review. Please try again later.');
            setSubmitting(false);
        } else {
            // A client's review, stored: a submit filed as "other" — not a lead.
            trackFormSubmitted('review', 'review');
            setSuccess(true);
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-ember border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (error && !success) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="cut-card [--cut:18px] relative max-w-md mx-auto mt-20 p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] text-center"
            >
                <AlertCircle className="w-12 h-12 text-red-700 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-ink mb-2 tracking-[-0.035em]">Oops!</h2>
                <p className="text-ink-mute mb-6">{error}</p>
                <Link href="/" className="cut-btn [--cut:10px] inline-block px-6 py-3 bg-white/70 hover:bg-white text-ink transition-colors">
                    Return Home
                </Link>
            </motion.div>
        );
    }

    if (success) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="cut-card [--cut:18px] relative max-w-md mx-auto mt-20 p-8 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                >
                    <CheckCircle2 className="w-16 h-16 text-green-700 mx-auto mb-6" />
                </motion.div>
                <h2 className="text-2xl font-medium text-ink mb-2 tracking-[-0.035em]">Thank You!</h2>
                <p className="text-ink-mute mb-8">Your review has been successfully submitted. We appreciate your feedback!</p>
                <Link href="/" className="cut-btn [--cut:10px] [--cut-focus:#1B1A17] inline-block px-8 py-3 bg-ember hover:bg-ember/90 text-ink font-medium transition-colors">
                    Return to Website
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cut-card [--cut:22px] max-w-2xl mx-auto mt-12 mb-24 p-8 sm:p-10 bg-white/70 [--cut-line:rgba(27,26,23,0.1)] relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-ember/10 rounded-full blur-3xl pointer-events-none hidden" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-ember/10 rounded-full blur-3xl pointer-events-none hidden" />

            <div className="relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-medium text-ink mb-3 tracking-[-0.035em]">Share Your Experience</h1>
                    <p className="text-ink-mute">We'd love to hear about your experience working with ARC AI.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" data-form="review">
                    {/* Rating */}
                    <div className="flex flex-col items-center mb-8">
                        <p className="text-sm font-medium text-ink-soft mb-3">How would you rate our services?</p>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, rating: star })}
                                    onMouseEnter={() => setHoveredStar(star)}
                                    onMouseLeave={() => setHoveredStar(null)}
                                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star 
                                        className={`w-10 h-10 ${
                                            (hoveredStar !== null ? star <= hoveredStar : star <= formData.rating)
                                                ? 'fill-[#FF4925] text-ember-deep'
                                                : 'text-ink-soft'
                                        } transition-colors`} 
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-ink-soft">Your Name *</label>
                            <input
                                type="text"
                                required
                                value={formData.client_name}
                                onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                                className="w-full px-4 py-3 bg-paper/50 border border-ink/10 rounded-xl text-ink focus:outline-none focus:border-ember transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-ink-soft">Company (Optional)</label>
                            <input
                                type="text"
                                value={formData.client_company}
                                onChange={(e) => setFormData({ ...formData, client_company: e.target.value })}
                                className="w-full px-4 py-3 bg-paper/50 border border-ink/10 rounded-xl text-ink focus:outline-none focus:border-ember transition-colors"
                                placeholder="Tech Corp"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-ink-soft">Your Review *</label>
                        <textarea
                            required
                            rows={5}
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full px-4 py-3 bg-paper/50 border border-ink/10 rounded-xl text-ink focus:outline-none focus:border-ember transition-colors resize-none"
                            placeholder="Tell us what you think..."
                        />
                    </div>

                    {error && (
                        <p className="text-red-700 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={submitting}
                        className="cut-btn [--cut:12px] [--cut-focus:#1B1A17] w-full flex items-center justify-center gap-2 px-6 py-4 bg-ember text-ink font-medium hover:bg-ember/90 transition-all disabled:opacity-50 group"
                    >
                        {submitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>
                                Submit Review
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </motion.div>
    );
}

export default function ReviewPage() {
    return (
        <div className="home-cream min-h-screen bg-transparent pt-24 px-4 relative">
            <Suspense fallback={
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="w-10 h-10 border-2 border-ember border-t-transparent rounded-full animate-spin" />
                </div>
            }>
                <ReviewForm />
            </Suspense>
        </div>
    );
}
