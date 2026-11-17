"use client";

/* "Why us" on the home page: the heading, one line of proof, and three
   figures as a row of cards (the first one dark, for contrast).

   The figures come from src/content/site-facts.ts, so they are set in one
   place. Each card starts on its real number in the server HTML and replays a
   count-up from zero when the row scrolls into view. The orange on the page
   is carried by icons and thin lines, not glows. */
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { CalendarClock, FolderCheck, ThumbsUp, type LucideIcon } from "lucide-react";
import { stats as siteStats } from "@/content/site-facts";
import { PillLink } from "./home/ui";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const wordVariant: Variants = {
  hidden: { y: "0.45em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

const WhyUs: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8 lg:px-20 lg:py-24" id="why-us">
      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <motion.h2
            className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            variants={wordContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            aria-label="Numbers don't lie"
          >
            <span className="block overflow-hidden pb-[0.08em]" aria-hidden="true">
              <motion.span className="inline-block will-change-transform" variants={wordVariant}>
                Numbers
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em] text-ember-ink" aria-hidden="true">
              <motion.span className="inline-block will-change-transform" variants={wordVariant}>
                don&apos;t
              </motion.span>{" "}
              <motion.span className="inline-block will-change-transform" variants={wordVariant}>
                lie
              </motion.span>
            </span>
          </motion.h2>

          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl lg:pb-3">
            With {siteStats.yearsOfExperience}+ years of experience and {siteStats.projectsCompleted}+ projects delivered, we build the AI agents, business systems and websites that Sri Lankan businesses run on.
          </p>
        </div>

        <StatsGrid />

        <div className="mt-8 lg:mt-10">
          <PillLink href="/about">More about us</PillLink>
        </div>
      </div>
    </section>
  );
};

interface StatItem { value: string; suffix: string; label: string; icon: LucideIcon; }

const StatsGrid = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(gridRef, { once: true, amount: 0.3 });

  return (
    <div ref={gridRef} className="mt-10 grid gap-4 md:grid-cols-[1.25fr_1fr_1fr] lg:mt-14">
      {stats.map((item, idx) => (
        <Stat key={item.label} item={item} index={idx} inView={inView} />
      ))}
    </div>
  );
};

const Stat = ({ item, index, inView }: { item: StatItem; index: number; inView: boolean }) => {
  // Starts on the real figure, so the server HTML (and anyone without
  // scripts) reads "100+", not "0+". The count-up replays from zero once the
  // row scrolls into view.
  const [displayValue, setDisplayValue] = useState(item.value);

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

  const dark = index === 0;
  const Icon = item.icon;

  return (
    <motion.div
      className={`${dark ? "ink-card" : "cream-card"} flex min-h-[190px] flex-col justify-between overflow-hidden p-6 lg:min-h-[250px] lg:p-8`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between gap-4">
        <p className={`max-w-[16ch] text-sm leading-snug md:text-base ${dark ? "text-paper-white/75" : "text-ink-soft"}`}>
          {item.label}
        </p>
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border ${dark ? "border-white/15 text-ember" : "border-ink/10 bg-white text-ember-ink"}`}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
      </div>
      <div
        className={`relative flex items-baseline gap-1 text-6xl font-medium leading-none tracking-[-0.05em] lg:text-7xl ${dark ? "text-paper-white" : "text-ink"}`}
      >
        <span className="tabular-nums">{displayValue}</span>
        <span className={dark ? "text-ember" : "text-ember-ink"}>{item.suffix}</span>
      </div>
    </motion.div>
  );
};

const stats: StatItem[] = [
  { value: String(siteStats.projectsCompleted), suffix: "+", label: "Successful projects completed", icon: FolderCheck },
  { value: String(siteStats.yearsOfExperience), suffix: "+", label: "Years of experience in creative industry", icon: CalendarClock },
  { value: "99", suffix: "%", label: "Customer satisfaction rate", icon: ThumbsUp },
];

export default WhyUs;
