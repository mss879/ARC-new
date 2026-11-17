"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

export function AnimatedSection({
    children,
    className,
    id,
}: {
    children: ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <motion.section
            id={id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={className}
        >
            {children}
        </motion.section>
    );
}

export function HeroAnimation({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
}

export function HeroImageAnimation({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="cut-card [--cut:18px] relative aspect-video overflow-hidden [--cut-line:rgba(27,26,23,0.1)] shadow-2xl mt-10"
        >
            {children}
        </motion.div>
    );
}
