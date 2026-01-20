"use client";

import { motion, Variants } from "framer-motion";

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery Phase",
      description: "Understanding your, goals, pain points, audience, and what sets you apart."
    },
    {
      number: 2,
      title: "Project Kickoff",
      description: "Setting up projects, aligning on scope and milestones, and diving into the work."
    },
    {
      number: 3,
      title: "Receive & Refine",
      description: "Sharing initial designs, gathering feedback, and fine-tuning together."
    },
    {
      number: 4,
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
    <section className="bg-[rgb(10,10,10)] py-20 lg:py-16 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side - Title */}
          <div className="lg:w-1/4 flex-shrink-0">
            <p className="text-[rgb(119,119,119)] text-xs font-medium tracking-wider mb-6">
              (PROCESS)
            </p>
            <h2 className="text-[80px] lg:text-[100px] xl:text-[120px] font-bold text-white leading-[0.9] tracking-tight">
              HOW WE<br />WORK
            </h2>
          </div>

          {/* Right Side - Steps */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="border border-[rgb(51,51,51)] bg-[rgb(10,10,10)] p-6 lg:p-8 min-h-[280px] sm:min-h-[400px] flex flex-col"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Step Number */}
                <div className="mb-4 sm:mb-auto">
                  <div className="flex items-start gap-0.5 mb-4 sm:mb-8">
                    <h3 className="text-lg font-bold text-[rgb(119,119,119)] tracking-wide">
                      STEP {step.number}
                    </h3>
                    <span className="text-lg font-bold text-[rgb(255,73,37)]">.</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="sm:mt-auto">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[rgb(119,119,119)] text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

