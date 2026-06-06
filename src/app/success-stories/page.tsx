import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { supabase } from '@/lib/supabase';
import ReviewsList, { Review } from '@/components/ReviewsList';
import SchemaOrg from '@/components/SchemaOrg';

export const revalidate = 3600; // Revalidate static cache every 1 hour (ISR)

export const metadata: Metadata = {
    title: "Client Success Stories & Testimonials | ARC AI",
    description: "Read real reviews and success stories from our partners in the UK & Sri Lanka. See how ARC AI's web design, branding, and AI automation transform operations.",
    authors: [{ name: "ARC AI Agency" }],
    openGraph: {
        title: "Client Success Stories & Testimonials | ARC AI",
        description: "Read real reviews and success stories from our partners. See how ARC AI transforms businesses with custom web design and AI automation.",
        url: "https://www.arcai.agency/success-stories",
        siteName: "ARC AI Agency",
        images: [
            {
                url: "https://www.arcai.agency/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Client Success Stories & Testimonials | ARC AI",
                type: "image/jpeg",
            },
        ],
        locale: "en_GB",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@arcaiagency",
        creator: "@arcaiagency",
        title: "Client Success Stories & Testimonials | ARC AI",
        description: "Read real reviews and success stories from our partners. See how ARC AI transforms businesses with custom web design and AI automation.",
        images: ["https://www.arcai.agency/og-image.jpg"],
    },
    alternates: {
        canonical: "https://www.arcai.agency/success-stories"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

async function getApprovedReviews(): Promise<Review[]> {
    try {
        const { data, error } = await supabase
            .from('client_reviews')
            .select('*')
            .eq('status', 'approved')
            .order('created_at', { ascending: false });

        if (error || !data) {
            console.error('Error fetching client reviews:', error);
            return [];
        }

        // Programmatic sorting: Move specific reviews (Keys Place, Vibe Web Studio) to the end
        return [...data].sort((a, b) => {
            const aCompany = (a.client_company || '').toLowerCase();
            const aName = (a.client_name || '').toLowerCase();
            const aContent = (a.content || '').toLowerCase();
            
            const bCompany = (b.client_company || '').toLowerCase();
            const bName = (b.client_name || '').toLowerCase();
            const bContent = (b.content || '').toLowerCase();

            const isAKeys = aCompany.includes('keys') || aName.includes('keys') || aContent.includes('keys');
            const isBKeys = bCompany.includes('keys') || bName.includes('keys') || bContent.includes('keys');

            const isAVibe = aCompany.includes('vibe') || aName.includes('vibe') || aContent.includes('vibe');
            const isBVibe = bCompany.includes('vibe') || bName.includes('vibe') || bContent.includes('vibe');

            // Push Keys / Vibe reviews to the end
            if ((isAKeys || isAVibe) && !(isBKeys || isBVibe)) return 1;
            if (!(isAKeys || isAVibe) && (isBKeys || isBVibe)) return -1;
            
            // Maintain standard chronological order otherwise
            return 0;
        });
    } catch (e) {
        console.error('Exception during client reviews fetch:', e);
        return [];
    }
}

export default async function ReviewsPage() {
    const reviews = await getApprovedReviews();

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <SchemaOrg 
                type="portfolio" // We map it as portfolio page for SEO breadcrumbs
                pageTitle="Success Stories"
                pageDescription="See what our partners have to say about working with ARC AI."
                pageUrl="https://arcai.agency/success-stories"
            />
            <Navbar />

            <main className="flex-1 pt-48 md:pt-32 pb-24 px-6 lg:px-12 relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4925]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ReviewsList reviews={reviews} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
