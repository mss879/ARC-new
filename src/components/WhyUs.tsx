"use client";

/* Auto-generated WhyUs section translated from provided Framer export.
   NOTE: The original markup relied on Framer-specific class names and animations.
   We preserve structure and IDs while making it valid React/JSX. Minimal styling
   is kept; for pixel perfection you'd port the original CSS from Framer or
   recreate with Tailwind / Framer Motion.
*/
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

const title = "NUMBERS DON'T LIE";

const letterContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const letterVariant: Variants = {
  hidden: { y: `0.55em`, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const WhyUs: React.FC = () => {
  return (
    <section className="framer-18rrafk relative overflow-hidden bg-black text-white" data-framer-name="Why us" id="why-us">
      {/* Background Image Wrapper */}
      <div className="framer-btynsp absolute inset-0 -z-10" data-framer-name="BG">
        <div style={{ position: "absolute", borderRadius: "inherit", top: 0, right: 0, bottom: 0, left: 0 }}>
          <Image
            src="/images/why-us-bg.webp"
            alt="Abstract dark background pattern for ARC AI statistics section"
            fill
            sizes="100vw"
            quality={85}
            priority={false}
            style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center", objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="framer-2pyb2i relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24 backdrop-blur-[1px]">
        {/* Heading Section with Title and Description Side by Side */}
        <div className="framer-87mhgl mb-16 md:mb-20" data-framer-name="Heading">
          <div className="framer-jdz43l mb-6" data-framer-name="(why us)">
            <p className="framer-text text-xs tracking-[0.25em] text-neutral-500 uppercase">(WHY US)</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Large Title */}
            <div className="framer-nrymqv" data-framer-name="Title">
              <motion.h2
                className="text-5xl font-black leading-[0.9] tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-8xl"
                variants={letterContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                aria-label={title}
              >
                <div className="flex flex-wrap">
                  {"NUMBERS".split("").map((char, i) => (
                    <motion.span
                      key={i + char}
                      className="inline-block will-change-transform"
                      variants={letterVariant}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap">
                  {"DON'T LIE".split("").map((char, i) => (
                    <motion.span
                      key={i + char}
                      className="inline-block will-change-transform"
                      variants={letterVariant}
                      style={char === " " ? { width: "0.5ch" } : undefined}
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.h2>
            </div>

            {/* Right: Description aligned with second line */}
            <div className="flex items-end lg:pb-4">
              <div
                className="framer-7efyph max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl"
                data-framer-name="Description"
              >
                <p>
                  With 6+ years of expertise, we craft bold brands and high-impact digital experiences that drive measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <StatsGrid />
      </div>
    </section>
  );
};

interface StatItem { value: string; suffix: string; label: string; }

const StatsGrid = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={gridRef}
      className="framer-hg4gxq grid gap-8 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-3"
      data-framer-name="Content"
    >
      {stats.map((item, idx) => (
        <Stat key={item.label} item={item} index={idx} inView={inView} />
      ))}
    </div>
  );
};

const Stat = ({ item, index, inView }: { item: StatItem; index: number; inView: boolean }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      const target = parseInt(item.value, 10);
      if (!isNaN(target)) {
        const start = performance.now();
        const duration = 1400 + index * 120;
        const step = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          setDisplayValue(current.toString());
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      } else {
        setDisplayValue(item.value);
      }
    }
  }, [inView, item.value, index]);

  return (
    <motion.div
      className="group relative flex flex-col items-center border-l border-white/5 pl-6 sm:pl-8"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: index * 0.1 }}
    >
      <div className="flex items-baseline gap-1 text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
        <span className="tabular-nums">{displayValue}</span>
        <span className="text-orange-500">{item.suffix}</span>
      </div>
      <p className="mt-6 text-center text-sm leading-relaxed text-neutral-400 md:text-base">
        {item.label}
      </p>
      <div className="pointer-events-none absolute -left-px top-0 h-full w-px bg-gradient-to-b from-white/10 via-white/0 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

const stats: StatItem[] = [
  { value: "65", suffix: "+", label: "Successful projects completed" },
  { value: "6", suffix: "+", label: "Years of experience in creative industry" },
  { value: "99", suffix: "%", label: "Customer satisfaction rate" },
];

export default WhyUs;

