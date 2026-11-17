import Image from "next/image";
import { latestProjects, type PortfolioItem } from "@/content/portfolio";
import { PillLink } from "./home/ui";
import PauseOffscreen from "./home/PauseOffscreen";

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
                    className={`flex min-w-full shrink-0 gap-4 py-3 pr-4 md:gap-5 md:pr-5 ${animation}`}
                    aria-hidden={isCopy ? "true" : undefined}
                >
                    {projects.map((project) => {
                        // Every tile in a row is the same height; its width
                        // follows the screenshot's own shape (imageSize in
                        // the portfolio list), so the image fills the
                        // cut-corner frame with nothing cropped, as on the
                        // portfolio page.
                        const size = "imageSize" in project ? project.imageSize : undefined;
                        const ratio = size ? size.width / size.height : 16 / 10;
                        return (
                            <div
                                key={project.id}
                                className="cut-card [--cut:22px] relative h-[163px] shrink-0 overflow-hidden [--cut-line:rgba(255,255,255,0.7)] bg-paper-white md:h-[281px]"
                                style={{ aspectRatio: String(ratio) }}
                            >
                                <Image
                                    src={project.image}
                                    alt={isCopy ? "" : `${project.title}, built by ARC AI`}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes={`(max-width: 768px) ${Math.round(163 * ratio)}px, ${Math.round(281 * ratio)}px`}
                                    quality={85}
                                />
                            </div>
                        );
                    })}
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
        <section className="render-when-near relative w-full overflow-hidden py-16 lg:py-24" aria-labelledby="recent-work-heading">
            {/* Section Header */}
            <div className="mx-auto mb-8 flex max-w-[1400px] flex-col gap-6 px-4 md:px-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:px-20">
                <div>
                    <h2
                        id="recent-work-heading"
                        className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
                    >
                        Our recent <span className="text-ember-ink">work</span>
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg text-ink-soft">
                        The latest systems, stores and websites we have shipped.
                    </p>
                </div>
                <PillLink href="/portfolio" variant="ghost" className="self-start lg:self-auto">
                    See all our work
                </PillLink>
            </div>

            {/* Carousel Container with faded edges */}
            <PauseOffscreen className="relative flex flex-col gap-1">
                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[10%] bg-gradient-to-r from-paper to-transparent max-md:hidden" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[10%] bg-gradient-to-l from-paper to-transparent max-md:hidden" />

                <CarouselRow projects={firstRow} />
                {secondRow.length > 0 && <CarouselRow projects={secondRow} reverse />}
            </PauseOffscreen>
        </section>
    );
}
