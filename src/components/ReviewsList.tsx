'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export type Review = {
    id: string;
    client_name: string;
    client_company: string;
    rating: number;
    content: string;
    created_at: string;
};

interface ReviewsListProps {
    reviews: Review[];
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
};

export default function ReviewsList({ reviews }: ReviewsListProps) {
    return (
        <>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-medium mb-4 tracking-[-0.035em]">
                    Success <span className="text-ember-ink">Stories</span>
                </h1>
                <p className="text-ink-mute max-w-2xl mx-auto text-lg">
                    See what our partners have to say about working with ARC AI to transform their digital presence and automate their operations.
                </p>
            </motion.div>

            {reviews.length === 0 ? (
                <div className="text-center py-20 text-ink-mute">
                    <Quote className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-xl">More reviews coming soon.</p>
                </div>
            ) : (
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
                >
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} itemVariants={itemVariants} />
                    ))}
                </motion.div>
            )}
        </>
    );
}

interface ReviewCardProps {
    review: Review;
    itemVariants: any;
}

function ReviewCard({ review, itemVariants }: ReviewCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const CHAR_LIMIT = 180;
    const shouldTruncate = review.content && review.content.length > CHAR_LIMIT;
    
    const displayedText = isExpanded 
        ? review.content 
        : shouldTruncate 
            ? `${review.content.substring(0, CHAR_LIMIT)}...` 
            : review.content;

    return (
        <motion.div
            variants={itemVariants}
            className="cut-card [--cut:18px] bg-white/70 [--cut-line:rgba(27,26,23,0.1)] p-8 flex flex-col relative group hover:[--cut-line:rgba(255,73,37,0.3)] transition-all duration-300 min-h-[340px] h-full"
        >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-ember-deep group-hover:text-ember-deep transition-colors" />
            
            <div className="flex items-center gap-1 mb-6 text-ember-deep">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                ))}
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
                <div className="mb-6 flex-1">
                    <p className="text-ink-soft leading-relaxed whitespace-pre-wrap">
                        "{displayedText}"
                    </p>
                    {shouldTruncate && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-xs font-semibold text-ember-deep hover:text-ember-deep mt-3 transition-colors uppercase tracking-wider block"
                            aria-label={isExpanded ? "Show less of the review" : "Read the full review"}
                        >
                            {isExpanded ? 'Show Less' : 'Read More'}
                        </button>
                    )}
                </div>
                
                <div className="mt-auto pt-6 border-t border-ink/10">
                    <h3 className="font-semibold text-ink">{review.client_name}</h3>
                    {review.client_company && (
                        <p className="text-sm text-ink-mute mt-1">{review.client_company}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
