"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const letterContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.15 },
  },
};

const letterVariant: Variants = {
  hidden: { y: "0.55em", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

interface Service {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Web Design & Development",
    description: "Logos, colors, type, your brand, fully alive.",
    image: "https://framerusercontent.com/images/WHJ25LMPF20UPONd4Jk6zTwGdE.png",
    tags: ["Responsive Design", "Interaction Design", "CMS Integration", "SEO Optimization"],
  },
  {
    id: 2,
    number: "02",
    title: "Branding",
    description: "Crafting visual identities that feel clear, timeless, and true to your brand.",
    image: "https://framerusercontent.com/images/5gdCjJzgixF9dWQNM1ZXXuoFXps.jpg",
    tags: ["Logo Design", "Color System", "Typography", "Brand Direction"],
  },
  {
    id: 3,
    number: "03",
    title: "Social Media",
    description: "Branded templates and content systems to help you stay consistent and scroll-worthy.",
    image: "https://framerusercontent.com/images/JoawA6wu1SFIPzmCF597rJrbupM.jpg",
    tags: ["Instagram Design", "Story Kits", "Content Templates", "Visual Consistency"],
  },
  {
    id: 4,
    number: "04",
    title: "Motion Design",
    description: "Thoughtful animations that add rhythm, clarity, and life to your interface.",
    image: "https://framerusercontent.com/images/KpQeXJpZxptK8NdC8jxdO20oCB4.png",
    tags: ["Micro-interactions", "Scroll Effects", "Hover States", "Framer Motion"],
  },
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Immediately switch to the new item for smooth transitions
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    // Clear timeout if mouse leaves before delay completes
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredIndex(null);
  };

  return (
    <section className="relative bg-black pt-32 pb-20 px-4 md:px-8" data-framer-name="How we can help" id="services-section">
      <div className="mx-auto w-full">
        {/* Title Section */}
        <div className="mb-16 flex flex-col items-start md:flex-row md:items-end md:justify-between max-w-7xl mx-auto" data-framer-name="Title">
          <motion.h2
            className="mb-4 text-4xl font-black leading-[0.9] tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
            variants={letterContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            aria-label="DIGITAL MARKETING"
          >
            {["DIGITAL", "MARKETING"].map((word, i) => (
              <span key={i} style={{ whiteSpace: "nowrap", marginRight: "0.3em" }}>
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    className="inline-block"
                    style={{ willChange: "transform" }}
                    variants={letterVariant}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>
          <p className="text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">(SERVICES)</p>
        </div>

        {/* Services Wrapper */}
        <div className="relative" data-framer-name="Wrapper">
          <div className="space-y-0">
            {services.map((service, index) => (
              <React.Fragment key={service.id}>
                {/* Divider Line */}
                <div className="h-px w-full bg-neutral-700" style={{ background: 'rgb(88, 88, 88)' }} />

                {/* Service Item */}
                <ServiceItem
                  service={service}
                  index={index}
                  isOpen={hoveredIndex === index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
              </React.Fragment>
            ))}
            {/* Final divider */}
            <div className="h-px w-full bg-neutral-700" style={{ background: 'rgb(88, 88, 88)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceItemProps {
  service: Service;
  index: number;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      className="relative cursor-pointer transition-all duration-500 mx-auto max-w-7xl md:!px-8 md:!py-12"
      style={{
        backgroundColor: isOpen ? "rgb(24, 24, 24)" : "transparent",
        minHeight: "120px", // Fixed minimum height to prevent layout shifts
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      data-highlight="true"
      initial={false}
      animate={{
        paddingTop: "24px",
        paddingBottom: "24px",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
      transition={{
        duration: 0.5, // Faster transition for smoother feel
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-12 md:gap-8">
        {/* Number */}
        <div className="flex items-start gap-0 flex-shrink-0" data-framer-name="Number" style={{ width: "80px" }}>
          <motion.h3
            className="font-bold"
            initial={false}
            animate={{
              color: isOpen ? "rgb(85, 85, 85)" : "rgb(85, 85, 85)",
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
            }}
          >
            {service.number}
          </motion.h3>
          <motion.h3
            className="font-bold"
            initial={false}
            animate={{
              color: "rgb(255, 73, 37)",
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
            }}
          >
            .
          </motion.h3>
        </div>

        {/* Content */}
        <div className="flex-1 lg:flex lg:gap-12" data-framer-name="Content">
          {/* Image */}
          <motion.div
            className="relative mb-4 overflow-hidden rounded-xl lg:mb-0 md:mb-6"
            data-framer-name="Image mask"
            initial={false}
            animate={{
              width: isOpen ? "auto" : "0px",
              opacity: isOpen ? 1 : 0,
              marginRight: isOpen ? "48px" : "0px",
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              flexBasis: isOpen ? "30%" : "0%",
            }}
          >
            <motion.div
              className="cut-card [--cut:14px] relative aspect-[4/5] w-full overflow-hidden max-w-[200px] md:max-w-none"
              data-framer-name="Image"
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.95,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: isOpen ? 0.05 : 0,
              }}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={500}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1" data-framer-name="Text">
            {/* Full Description - Shows when open */}
            <motion.div
              data-framer-name="Full description"
              initial={false}
              animate={{
                opacity: isOpen ? 1 : 0,
                height: isOpen ? "auto" : "0px",
                overflow: "hidden",
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: isOpen ? 0.05 : 0,
              }}
              className="space-y-6"
            >
              {/* Title and Description */}
              <div className="space-y-2 md:space-y-3" data-framer-name="Top">
                <div data-framer-name="Title">
                  <p className="text-lg font-semibold text-white md:text-2xl lg:text-3xl xl:text-4xl">
                    {service.title}
                  </p>
                </div>
                <div data-framer-name="Description">
                  <p className="text-sm text-neutral-400 md:text-base lg:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2" data-framer-name="Label">
                {service.tags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="rounded-full border border-neutral-700 bg-transparent px-4 py-2 transition-all duration-300 hover:border-neutral-600"
                    style={{ borderColor: 'rgb(51, 51, 51)' }}
                  >
                    <p className="text-xs text-neutral-500 uppercase tracking-wide" style={{ color: 'rgb(119, 119, 119)' }}>
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Collapsed Title - Shows when closed */}
            <motion.div
              data-framer-name="Title"
              initial={false}
              animate={{
                opacity: isOpen ? 0 : 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: isOpen ? 'absolute' : 'relative',
                pointerEvents: isOpen ? 'none' : 'auto',
              }}
            >
              <h3 className="text-xl font-semibold text-neutral-300 md:text-2xl lg:text-3xl" style={{ color: 'rgb(202, 202, 202)' }}>
                {service.title}
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};export default Services;

