"use client";

import { motion, Variants } from "framer-motion";
import { Flag, PencilRuler, Search, TrendingUp } from "lucide-react";
import ProcessVisual, { type ProcessVisualKind } from "./home/ProcessVisual";
import { BookCallLink } from "./home/BookCallLink";
import { useOffscreenPause } from "./home/useOffscreenPause";

const Process = () => {
  // The small loops in the cards stop while the section is off screen.
  const sectionRef = useOffscreenPause<HTMLElement>();

  const steps: { number: number; icon: typeof Search; visual: ProcessVisualKind; title: string; description: string }[] = [
    {
      number: 1,
      icon: Search,
      visual: "discovery",
      title: "Discovery Phase",
      description: "Understanding your, goals, pain points, audience, and what sets you apart."
    },
    {
      number: 2,
      icon: Flag,
      visual: "kickoff",
      title: "Project Kickoff",
      description: "Setting up projects, aligning on scope and milestones, and diving into the work."
    },
    {
      number: 3,
      icon: PencilRuler,
      visual: "refine",
      title: "Receive & Refine",
      description: "Sharing initial designs, gathering feedback, and fine-tuning together."
    },
    {
      number: 4,
      icon: TrendingUp,
      visual: "grow",
      title: "Continue & Grow",
      description: "Launching with confidence and supporting your next extraordinary moves."
    }
  ];

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section ref={sectionRef} className="render-when-near relative px-4 py-16 md:px-8 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="text-5xl font-medium leading-[0.98] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          How we <span className="text-ember-ink">work</span>
        </h2>

        {/* Four cards, one per step, each with a small animation of its stage.
            The last one is the orange one: it is where the work goes live.
            Each card spans four rows of this grid as a subgrid (label,
            picture, title, text), so titles and texts line up across a row
            of cards whatever the height of each picture or the length of
            each title and text. */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {steps.map((step) => {
            const accent = step.number === steps.length;
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className={`cut-card [--cut:22px] row-span-4 grid grid-rows-subgrid gap-y-0 overflow-hidden p-6 lg:p-7 ${
                  accent
                    ? "relative bg-ember text-ink"
                    : "cream-card"
                }`}
                variants={cardVariants}
              >
                <div className="flex items-start justify-between">
                  <p
                    className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide ${
                      accent ? "border-ink/20 bg-ink/10 text-ink" : "border-ink/10 bg-white/70 text-ink-soft"
                    }`}
                  >
                    STEP {step.number}
                  </p>
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-full border ${
                      accent ? "border-ink/25 bg-ink text-ember" : "border-ink/10 bg-white text-ember-ink"
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                </div>

                {/* A small looping picture of the stage, in the space between
                    the step label and its title. */}
                <div className="flex items-center py-7 lg:py-8">
                  <ProcessVisual kind={step.visual} />
                </div>

                <h3 className="text-2xl font-medium leading-tight tracking-[-0.03em] text-ink lg:text-3xl">
                  {step.title}
                </h3>
                <p className={`mt-3 text-base leading-relaxed ${accent ? "text-ink/80" : "text-ink-soft"}`}>
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Step one is a discovery call; this books it (the hero's booking window). */}
        <div className="mt-8 lg:mt-10">
          <BookCallLink>Book a discovery call</BookCallLink>
        </div>
      </div>
    </section>
  );
};

export default Process;
