"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect for bottom section
  const bottomY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const [email, setEmail] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate subscription
    setTimeout(() => {
      console.log("Email submitted:", email);
      setEmail("");
      setIsSubscribing(false);
    }, 1000);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Works", href: "/works" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "404", href: "/404" },
    { label: "Waitlist", href: "/waitlist" },
  ];

  const socialLinks = [
    { label: "X/Twitter", href: "https://x.com/arc_ai_agency" },
    { label: "Instagram", href: "https://www.instagram.com/arcai_agency/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/105845719" },
    { label: "Facebook", href: "https://www.facebook.com/ARCAI.lk" },
  ];

  return (
    <footer ref={footerRef} className="relative bg-black text-white overflow-hidden">
      {/* Horizontal Fade at Top - positioned above footer */}
      <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none"></div>
      
      {/* Main Section */}
      <div className="relative bg-black">
        <div className="max-w-[1400px] mx-auto px-6 py-20 lg:py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-20">
            {/* Contact Section */}
            <div className="space-y-12">
              {/* Email */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-[#777777] text-sm uppercase tracking-wider">Email Address</p>
                <motion.a
                  href="mailto:support@arcai.agency"
                  className="text-[#FF4925] text-2xl md:text-3xl lg:text-4xl font-bold block hover:opacity-80 transition-opacity"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  support@arcai.agency
                </motion.a>
                <p className="text-[#777777] text-sm">We'll respond within 24 hours</p>
              </motion.div>

              {/* Company Registration */}
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p className="text-[#777777] text-sm">This is a registered company</p>
                <p className="text-white text-base">Registration Number: <span className="font-semibold">PV00352581</span></p>
              </motion.div>

              {/* Phone */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p className="text-[#777777] text-sm uppercase tracking-wider">Phone Numbers</p>
                <div className="space-y-2">
                  <motion.a
                    href="tel:+447466368427"
                    className="text-white text-xl md:text-2xl font-semibold block hover:text-[#FF4925] transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    +44 7466 368427 <span className="text-[#777777] text-sm">(UK)</span>
                  </motion.a>
                  <motion.a
                    href="tel:+94771852522"
                    className="text-white text-xl md:text-2xl font-semibold block hover:text-[#FF4925] transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    +94 771852522 <span className="text-[#777777] text-sm">(Sri Lanka)</span>
                  </motion.a>
                </div>
                <p className="text-[#777777] text-sm">Available 9 AM - 6 PM EST</p>
              </motion.div>
            </div>

            {/* Links & Newsletter Section */}
            <div className="space-y-12">
              {/* Navigation Links */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-[#777777] text-sm uppercase tracking-wider">(LINKS)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="relative group"
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    >
                      <div className="space-y-1">
                        <motion.p 
                          className="text-[#CACACA] text-base group-hover:text-white transition-colors"
                          animate={{ x: hoveredLink === link.label ? 3 : 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {link.label}
                        </motion.p>
                        <div className="relative h-[1px] bg-transparent overflow-hidden">
                          <motion.div
                            className="absolute inset-0 bg-[#FF4925]"
                            initial={{ x: "-100%" }}
                            animate={{ x: hoveredLink === link.label ? 0 : "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-[#777777] text-sm uppercase tracking-wider">(SOCIALS)</p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="flex-1 space-y-1">
                          <motion.p 
                            className="text-[#CACACA] text-base group-hover:text-white transition-colors"
                            animate={{ x: hoveredLink === link.label ? 3 : 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {link.label}
                          </motion.p>
                          <div className="relative h-[1px] bg-transparent overflow-hidden">
                            <motion.div
                              className="absolute inset-0 bg-[#FF4925]"
                              initial={{ x: "-100%" }}
                              animate={{ x: hoveredLink === link.label ? 0 : "-100%" }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          </div>
                        </div>
                        <motion.svg
                          className="w-4 h-4 text-[#777777]"
                          animate={{ x: hoveredLink === link.label ? 3 : 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </motion.svg>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-lg text-white">
                  Sign up for our newsletter to get latest insights and updates
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email Input */}
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="w-full bg-transparent border-0 border-b border-[#333333] text-white placeholder-[#777777] py-3 focus:outline-none focus:border-[#FF4925] transition-colors"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-[#FF4925]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Subscribe Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubscribing}
                    className="relative w-full bg-[#333333] rounded-full p-1 overflow-hidden group magnetic-button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#FF4925] rounded-full"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                    <div className="relative bg-[#0A0A0A] rounded-full py-4 px-6 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-[#333333] rounded-full origin-center"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        animate={{ scale: isSubscribing ? 1 : 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      />
                      <div className="relative h-6 overflow-hidden">
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm tracking-wider"
                          initial={{ y: 0 }}
                          animate={{ y: isSubscribing ? -30 : 0 }}
                          whileHover={{ y: -30 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {isSubscribing ? "SUBSCRIBING..." : "SUBSCRIBE"}
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm tracking-wider"
                          initial={{ y: 30 }}
                          animate={{ y: isSubscribing ? 0 : 30 }}
                          whileHover={{ y: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          {isSubscribing ? "SUBSCRIBING..." : "SUBSCRIBE"}
                        </motion.div>
                      </div>
                    </div>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Additional Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-12 border-t border-[#333333]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {/* Left */}
            <div className="space-y-4">
              <p className="text-[#777777] text-sm">©{new Date().getFullYear()} ARC AI. All Rights Reserved</p>
              <div className="flex items-center gap-4">
                <a
                  href="/privacy-policy"
                  className="text-[#CACACA] text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <div className="w-px h-4 bg-[#333333]" />
                <a
                  href="/terms-of-service"
                  className="text-[#CACACA] text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Parallax Section */}
      <motion.div
        className="relative bg-black overflow-hidden"
        style={{ 
          y: bottomY,
          opacity: bottomOpacity
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 scale-hover"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/logo.png"
                alt="Arc AI Logo"
                className="h-24 md:h-32 lg:h-40 w-auto object-contain"
               loading="lazy" decoding="async" />
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Beyond Visuals.<br />
                Built with Vision.
              </h3>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

