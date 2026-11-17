'use client';

import NextImage from 'next/image';

export interface LaunchItem {
    id: string;
    title: string;
    description: string;
    image_url: string;
    launch_date: string | null;
    status: 'planned' | 'development' | 'ready';
    display_order: number;
}

export default function UpcomingLaunchesCarousel({ launches }: { launches: LaunchItem[] }) {
    // If no launches, show empty state (or hide section entirely if preferred, but user wants to see it)
    if (!launches || launches.length === 0) {
        return (
            <section className="py-8 bg-zinc-900 border-y border-white/5 overflow-hidden">
                <div className="max-w-[1800px] w-full mx-auto px-6 lg:px-12 text-center">
                    <h2
                        className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
                        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                    >
                        Upcoming Launches
                    </h2>
                    <div className="w-16 h-1 bg-[#FF4925] mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-500 italic">No upcoming launches at the moment. Stay tuned!</p>
                </div>
            </section>
        );
    }

    // Duplicate list multiple times to ensure we have enough items for a seamless loop
    // even on large screens. 6 sets should be plenty.
    // Logic: We slide by -16.666% (1/6th) and then reset to 0.
    const carouselItems = [
        ...launches, ...launches,
        ...launches, ...launches,
        ...launches, ...launches
    ];

    return (
        <section className="py-8 mb-24 bg-zinc-900 border-y border-white/5 overflow-hidden">
            <div className="max-w-[1800px] w-full mx-auto px-6 lg:px-12 mb-10">
                <div className="text-center">
                    <h2
                        className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4"
                        style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                    >
                        Upcoming Launches
                    </h2>
                    <div className="w-16 h-1 bg-[#FF4925] mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A sneak peek at the exciting projects currently in our design & development pipeline.
                    </p>
                </div>
            </div>

            {/* Rounded Carousel Container */}
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="bg-black/40 border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative backdrop-blur-sm">

                    {/* Gradient Fade for Edges of the Container */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-black/80 to-transparent pointer-events-none rounded-l-[2.5rem]"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-l from-black/80 to-transparent pointer-events-none rounded-r-[2.5rem]"></div>

                    <div className="flex gap-8 animate-infinite-scroll w-max">
                        {carouselItems.map((launch, index) => (
                            <div
                                key={`${launch.id}-${index}`}
                                className="cut-card [--cut:18px] relative w-[320px] md:w-[500px] lg:w-[600px] aspect-[16/9] group overflow-hidden [--cut-line:rgba(255,255,255,0.1)] bg-zinc-900/50 shadow-xl shrink-0"
                            >
                                <NextImage
                                    src={launch.image_url}
                                    alt={launch.title}
                                    fill
                                    className="object-contain p-2 transition-transform duration-700"
                                    sizes="(max-width: 768px) 320px, (max-width: 1200px) 500px, 600px"
                                    quality={85}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className={`inline-block px-2 py-1 mb-2 text-[10px] font-bold uppercase tracking-wider rounded ${launch.status === 'ready' ? 'bg-green-500/20 text-green-400' :
                                                    launch.status === 'development' ? 'bg-blue-500/20 text-blue-400' :
                                                        'bg-purple-500/20 text-purple-400'
                                                    }`}>
                                                    {launch.status}
                                                </span>
                                                {/* Title hidden as per request */}
                                                {/* <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                                                    {launch.title}
                                                </h3> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-16.6666%); } /* Moves exactly 1/6th (one set) */
                }
                .animate-infinite-scroll {
                    animation: infinite-scroll 20s linear infinite;
                    /* w-max ensures the container is wide enough for all items */
                }
            `}</style>
        </section>
    );
}
