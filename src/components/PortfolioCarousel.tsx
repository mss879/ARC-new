"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const row1Images = [
    "/javagap.webp",
    "/sponge-global.webp",
    "/delft-tours.webp",
    "/secertery-services.webp",
    "/halo.webp",
    "/exim.webp",
    "/core-craft-screenshot.webp",
    "/Ontriq-screenshot.webp",
];

const row2Images = [
    "/orkestrate-screenshot.webp",
    "/KeysPlease-Screenshot.webp",
    "/dek-studio-screenshot.webp",
    "/vibewebstudio.webp",
    "/yboagency.webp",
    "/carrush.webp",
    "/cararenaceylon.webp",
    "/hiltopglobal.webp",
];

const CarouselRow = ({ images, reverse = false }: { images: string[], reverse?: boolean }) => {
    return (
        <div className="flex w-full overflow-hidden">
            <div
                className={`flex min-w-full shrink-0 gap-6 py-4 pr-6 ${reverse ? "animate-[marquee-reverse_40s_linear_infinite]" : "animate-[marquee_40s_linear_infinite]"
                    }`}
            >
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="relative aspect-[16/10] w-[260px] md:w-[450px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                    >
                        <Image
                            src={src}
                            alt={`Portfolio project ${src.replace(/^\//, '').replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/[-_]/g, ' ')}`}
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 260px, 450px"
                            quality={85}
                        />
                    </div>
                ))}
            </div>
            {/* Duplicate for seamless infinite scrolling */}
            <div
                className={`flex min-w-full shrink-0 gap-6 py-4 pr-6 ${reverse ? "animate-[marquee-reverse_40s_linear_infinite]" : "animate-[marquee_40s_linear_infinite]"
                    }`}
                aria-hidden="true"
            >
                {images.map((src, idx) => (
                    <div
                        key={`dup-${idx}`}
                        className="relative aspect-[16/10] w-[260px] md:w-[450px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                    >
                        <Image
                            src={src}
                            alt={`Portfolio project ${src.replace(/^\//, '').replace(/\.(png|jpg|jpeg|webp)$/i, '').replace(/[-_]/g, ' ')}`}
                            fill
                            className="object-contain transition-transform duration-700 hover:scale-105"
                            sizes="(max-width: 768px) 260px, 450px"
                            quality={85}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function PortfolioCarousel() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Avoid hydration mismatch for infinite animations sometimes

    return (
        <section className="relative w-full overflow-hidden bg-black py-24">
            {/* Section Header */}
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight"
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                    Our Recent <span className="text-[rgb(255,73,37)]">Work</span>
                </h2>
                <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
                    High-end digital experiences designed to convert, perform, and scale.
                </p>
            </div>

            {/* Carousel Container with faded edges */}
            <div className="relative flex flex-col gap-4">
                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-black to-transparent max-md:hidden" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-black to-transparent max-md:hidden" />

                <CarouselRow images={row1Images} />
                <CarouselRow images={row2Images} reverse />
            </div>
        </section>
    );
}
