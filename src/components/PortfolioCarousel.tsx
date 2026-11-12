import Image from "next/image";
import Link from "next/link";
import { latestProjects, type PortfolioItem } from "@/content/portfolio";

/**
 * "Our recent work" on the home page.
 *
 * The two rows are the newest sixteen projects from the portfolio list, in
 * portfolio order, so a project added at the top of src/content/portfolio.ts
 * appears here without touching this file. It used to be a hand-kept list of
 * sixteen screenshots that had fallen behind the portfolio.
 */
const PER_ROW = 8;

const CarouselRow = ({ projects, reverse = false }: { projects: PortfolioItem[]; reverse?: boolean }) => {
    const animation = reverse
        ? "animate-[marquee-reverse_40s_linear_infinite]"
        : "animate-[marquee_40s_linear_infinite]";

    // The strip is rendered twice so the loop has no seam. The second copy is
    // hidden from assistive technology and its images carry no alt text.
    return (
        <div className="flex w-full overflow-hidden">
            {[false, true].map((isCopy) => (
                <div
                    key={isCopy ? "copy" : "original"}
                    className={`flex min-w-full shrink-0 gap-6 py-4 pr-6 ${animation}`}
                    aria-hidden={isCopy ? "true" : undefined}
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative aspect-[16/10] w-[260px] md:w-[450px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                        >
                            <Image
                                src={project.image}
                                alt={isCopy ? "" : `${project.title}, built by ARC AI`}
                                fill
                                className="object-contain transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 768px) 260px, 450px"
                                quality={85}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default function PortfolioCarousel() {
    const projects = latestProjects(PER_ROW * 2);
    const firstRow = projects.slice(0, PER_ROW);
    const secondRow = projects.slice(PER_ROW);

    return (
        <section className="relative w-full overflow-hidden bg-black py-24" aria-labelledby="recent-work-heading">
            {/* Section Header */}
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2
                    id="recent-work-heading"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight"
                    style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                    Our Recent <span className="text-[rgb(255,73,37)]">Work</span>
                </h2>
                <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-lg">
                    The latest systems, stores and websites we have shipped.
                </p>
                <Link
                    href="/portfolio"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[rgb(255,73,37)] hover:text-white transition-colors"
                >
                    See all our work
                    <span aria-hidden="true">↗</span>
                </Link>
            </div>

            {/* Carousel Container with faded edges */}
            <div className="relative flex flex-col gap-4">
                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-black to-transparent max-md:hidden" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-black to-transparent max-md:hidden" />

                <CarouselRow projects={firstRow} />
                {secondRow.length > 0 && <CarouselRow projects={secondRow} reverse />}
            </div>
        </section>
    );
}
