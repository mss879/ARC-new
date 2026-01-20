"use client";

import { Cube, Gear, TrendUp, ChatCircleDots } from "@phosphor-icons/react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const Features = () => {
  return (
    <section className="py-20 lg:py-16 px-4 md:px-6 bg-black" id="features">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-12 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
              AI FEATURES
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-zinc-400 text-sm md:text-base max-w-xl">
            Discover features that simplify workflows &amp; grow your business.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Feature 1 - With Image on Left */}
          <motion.div 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300 flex flex-col md:flex-row md:h-[220px]" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image Section - Left */}
            <div className="relative md:w-1/2 h-48 md:h-auto">
              <img src="https://framerusercontent.com/images/jt6hxbLaCBNrS66LsJbeYLxd4no.png?width=1200&height=1200"
                alt="Cutting-Edge AI"
                className="w-full h-full object-cover"
               loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-transparent" />
            </div>

            {/* Content - Right */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-3">
              <div className="w-10 h-10 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5" fill="white">
                  <path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.47,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A302.47,302.47,0,0,0,141.27,70C172.15,49,196.91,43.81,204.55,51.45Zm-153.1,0c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.19,51.45,204.55ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm76.55,64.56c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Cutting-Edge AI</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 - Text Only */}
          <motion.div 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-center md:h-[220px]" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-3">
              <div className="w-10 h-10 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5" fill="white">
                  <path d="M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Automated Workflows</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 - Text Only */}
          <motion.div 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-center md:h-[220px]" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="space-y-3">
              <div className="w-10 h-10 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5" fill="white">
                  <path d="M240,56v64a8,8,0,0,1-13.66,5.66L200,99.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,29.66,189.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0L136,140.69,188.69,88,162.34,61.66A8,8,0,0,1,168,48h64A8,8,0,0,1,240,56Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Insightful Analytics</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 - With Image on Right */}
          <motion.div 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-300 flex flex-col md:flex-row md:h-[220px]" 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Content - Left */}
            <div className="md:w-1/2 p-6 flex flex-col justify-center space-y-3 order-2 md:order-1">
              <div className="w-10 h-10 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5" fill="white">
                  <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">AI-Powered Support</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Enhance customer experience with AI-driven virtual assistants available for support and engagement.
              </p>
            </div>

            {/* Image Section - Right */}
            <div className="relative md:w-1/2 h-48 md:h-auto order-1 md:order-2">
              <img src="https://framerusercontent.com/images/NUbGSZcPrAH7CFfBazSJOsGIP4.png?width=800&height=1200"
                alt="AI-Powered Support"
                className="w-full h-full object-cover"
               loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <a
            href="/contact"
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
          >
            <span>Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="currentColor"
            >
              <path d="M200,64V168a8,8,0,0,1-13.66,5.66L140,127.31,69.66,197.66a8,8,0,0,1-11.32-11.32L128.69,116,82.34,69.66A8,8,0,0,1,88,56H192A8,8,0,0,1,200,64Z" />
            </svg>
          </a>

          <a
            href="/services"
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-white text-sm font-semibold rounded-lg shadow-xl hover:bg-zinc-800 hover:border-zinc-700 hover:scale-105 transition-all duration-300"
          >
            <span>See Our Services</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

