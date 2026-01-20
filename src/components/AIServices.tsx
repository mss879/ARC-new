"use client";

import { motion, Variants } from "framer-motion";
import "./AIServices.css";

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

const pillVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 2.5 + (i * 0.2), // Starts after typing finishes (approx 2s)
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1]
    }
  })
};

const bubbleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 10, originX: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  })
};

const typingContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5
    }
  }
};

const typingChar: Variants = {
  hidden: { opacity: 0, display: "none" },
  visible: { opacity: 1, display: "inline" }
};

const AIServices = () => {
  return (
    <section className="py-20 lg:py-16 px-4 md:px-6 bg-black" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="flex flex-col items-center text-center mb-16 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-600 bg-clip-text text-transparent">
              AI SERVICES
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl">
            Transform your business with our cutting-edge AI solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Content Generation Card */}
          <motion.div
            className="framer-kt4eez-container"
            style={{ willChange: "transform", opacity: 1, transform: "none" }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="ssr-variant hidden-72rtr7">
              <div
                className="framer-Jr7KD framer-iFxbV framer-KSfoj framer-XTXCe framer-12wrqa9 framer-v-ully58"
                data-framer-name="mobile"
                style={{
                  backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                  height: "100%",
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                  opacity: 1,
                }}
              >
                <div
                  className="framer-15xx1i4"
                  data-framer-name="search box"
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "8px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                    opacity: 1,
                  }}
                >
                  <div
                    className="framer-53bk6q pl-4 flex items-center w-full"
                    style={{
                      backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                      borderRadius: "8px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                      opacity: 1,
                    }}
                  >
                    <motion.div
                      className="framer-vbds0p relative z-10 w-full"
                      style={{
                        opacity: 1,
                        width: "100%",
                        justifyContent: "flex-start",
                        height: "auto"
                      }}
                      variants={typingContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <span className="text-[10px] text-white font-medium whitespace-nowrap mr-0.5">
                        {Array.from("Generate marketing copy...").map((char, i) => (
                          <motion.span key={i} variants={typingChar}>{char}</motion.span>
                        ))}
                      </span>
                      <motion.div
                        className="blinking-cursor inline-block align-middle"
                        style={{
                          width: "2px",
                          height: "14px",
                          backgroundColor: "rgb(255, 255, 255)",
                          borderRadius: "1px",
                        }}
                        animate={{
                          opacity: [1, 0, 1],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      ></motion.div>
                    </motion.div>
                  </div>
                  <motion.div
                    className="framer-dvipwj"
                    style={{ opacity: 1 }}
                    variants={pillVariants}
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="framer-2q1dkc" style={{ opacity: 1 }}>
                      <div
                        className="framer-1oqlkuc"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          // @ts-ignore
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          opacity: 0.5,
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1khckfh"
                          data-styles-preset="cH8AiB6P_"
                          style={{
                            // @ts-ignore
                            "--framer-text-alignment": "left",
                          }}
                        >
                          Instagram post caption
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="framer-18jmtyc"
                    style={{ opacity: 1 }}
                    variants={pillVariants}
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="framer-whm74r" style={{ opacity: 1 }}>
                      <div
                        className="framer-86fogr"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          // @ts-ignore
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          opacity: 0.5,
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1khckfh"
                          data-styles-preset="cH8AiB6P_"
                          style={{
                            // @ts-ignore
                            "--framer-text-alignment": "left",
                          }}
                        >
                          Blog intro paragraph
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="framer-2dawv9"
                    style={{ opacity: 1 }}
                    variants={pillVariants}
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <div className="framer-1863du7" style={{ opacity: 1 }}>
                      <div
                        className="framer-1jwmz5h"
                        data-framer-component-type="RichTextContainer"
                        style={{
                          // @ts-ignore
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          opacity: 0.5,
                          transform: "none",
                        }}
                      >
                        <p
                          className="framer-text framer-styles-preset-1khckfh"
                          data-styles-preset="cH8AiB6P_"
                          style={{
                            // @ts-ignore
                            "--framer-text-alignment": "left",
                          }}
                        >
                          Product description ideas
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="framer-1mdub7q" data-framer-name="Text Container" style={{ opacity: 1 }}>
                  <div
                    className="framer-y6ka51"
                    data-framer-name="Heading"
                    data-framer-component-type="RichTextContainer"
                    style={{
                      // @ts-ignore
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <p
                      className="framer-text framer-styles-preset-yhre11"
                      data-styles-preset="wPPWF6wfo"
                      style={{
                        // @ts-ignore
                        "--framer-text-alignment": "left",
                      }}
                    >
                      Content Generation
                    </p>
                  </div>
                  <div
                    className="framer-rwnj9r"
                    data-framer-name="Paragraph"
                    data-framer-component-type="RichTextContainer"
                    style={{
                      // @ts-ignore
                      "--framer-paragraph-spacing": "0px",
                      opacity: 0.8,
                      transform: "none",
                    }}
                  >
                    <p
                      className="framer-text framer-styles-preset-1khckfh"
                      data-styles-preset="cH8AiB6P_"
                      style={{
                        // @ts-ignore
                        "--framer-text-alignment": "left",
                      }}
                    >
                      We provide seamless content creation solutions that generate captivating, high-quality content in
                      line with your brand's voice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Automated Workflows Card */}
          <motion.div
            className="framer-1wwoz27-container"
            style={{ willChange: "transform", opacity: 1, transform: "none" }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="ssr-variant hidden-72rtr7">
              <div
                className="framer-A6AVs framer-XTXCe framer-iFxbV framer-15yvlo1 framer-v-136waa3"
                data-framer-name="mobile"
                style={{
                  backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                  height: "100%",
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                  opacity: 1,
                }}
              >
                <div
                  className="framer-pz6kyd"
                  data-framer-name="logo box"
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "20px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                    transform: "translateX(-50%)",
                    opacity: 1,
                  }}
                >
                  <div
                    className="framer-1js7rer"
                    data-framer-name="shape "
                    style={{
                      backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                      borderRadius: "20px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                      opacity: 1,
                    }}
                  >
                    <div
                      className="framer-px05cb"
                      data-framer-name="Icon"
                      style={{ transform: "translate(-50%, -50%)", opacity: 1 }}
                    >
                      <div
                        data-framer-background-image-wrapper="true"
                        style={{ position: "absolute", borderRadius: "inherit", inset: "0px" }}
                      >
                        <img
                          width="154"
                          height="110"
                          src="https://framerusercontent.com/images/8x7d36XigNJwbX3MhEzcU6N7N8.png"
                          alt="logo"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                            borderRadius: "inherit",
                            objectPosition: "center center",
                            objectFit: "contain",
                          }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="framer-1cff9aq" data-framer-name="Text Container" style={{ opacity: 1 }}>
                  <div
                    className="framer-1bik22"
                    data-framer-name="Heading"
                    data-framer-component-type="RichTextContainer"
                    style={{
                      // @ts-ignore
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: 1,
                    }}
                  >
                    <p
                      className="framer-text framer-styles-preset-yhre11"
                      data-styles-preset="wPPWF6wfo"
                      style={{
                        // @ts-ignore
                        "--framer-text-alignment": "left",
                      }}
                    >
                      Automated Workflows
                    </p>
                  </div>
                  <div
                    className="framer-7jbq8h"
                    data-framer-name="Paragraph"
                    data-framer-component-type="RichTextContainer"
                    style={{
                      // @ts-ignore
                      "--framer-paragraph-spacing": "0px",
                      opacity: 0.8,
                      transform: "none",
                    }}
                  >
                    <p
                      className="framer-text framer-styles-preset-1khckfh"
                      data-styles-preset="cH8AiB6P_"
                      style={{
                        // @ts-ignore
                        "--framer-text-alignment": "left",
                      }}
                    >
                      Automate workflows to streamline tasks, boost efficiency, and save time
                    </p>
                  </div>
                </div>
                <div
                  className="framer-1pg7jle"
                  data-framer-name="shape "
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                    transform: "translateX(-50%)",
                    opacity: 1,
                  }}
                >
                  <div
                    className="framer-ayzamz-container"
                    style={{ transform: "translate(-50%, -50%)", opacity: 1 }}
                  >
                    <div style={{ display: "contents" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          fill: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          color: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          flexShrink: 0,
                        }}
                      >
                        <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))">
                          <path
                            d="M235.21,185.59l-67,29.7a8.15,8.15,0,0,1-11-4.56L147,183.06a190.5,190.5,0,0,1-19,.94,190.5,190.5,0,0,1-19-.94L98.75,210.73a8.15,8.15,0,0,1-11,4.56l-67-29.7a8,8,0,0,1-4.55-9.24L45.77,60A8.08,8.08,0,0,1,52.31,54l36.06-5.92a8.1,8.1,0,0,1,9.21,6l5,19.63a192.32,192.32,0,0,1,50.88,0l5-19.63a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37A8,8,0,0,1,235.21,185.59Z"
                            opacity="0.2"
                          ></path>
                          <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.10l-67-29.71a15.94,15.94,0,0,1-9.06-18.51L38,58A16.08,16.08,0,0,1,51,46.13l36.06-5.92a16.21,16.21,0,0,1,18.26,11.88l3.26,12.83Q118.11,64,128,64t19.4.92l3.26-12.83a16.22,16.22,0,0,1,18.26-11.88L205,46.13A16.08,16.08,0,0,1,218,58l29.53,116.38A15.94,15.94,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56a.21.21,0,0,0-.12,0h0L53.61,61.92a.24.24,0,0,0-.09,0L24,178.33,91,208a.21.21,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-1hiz4pg"
                  data-framer-name="shape "
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                    transform: "translateX(-50%)",
                    opacity: 1,
                  }}
                >
                  <div
                    className="framer-10v5pq5-container"
                    style={{ transform: "translate(-50%, -50%)", opacity: 1 }}
                  >
                    <div style={{ display: "contents" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          fill: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          color: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          flexShrink: 0,
                        }}
                      >
                        <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))">
                          <path
                            d="M24,152H88L55.12,206.8A7.91,7.91,0,0,1,52.38,204L25.05,156.15A8,8,0,0,1,24,152Zm144,0,32.88,54.8a7.91,7.91,0,0,0,2.74-2.83l27.32-47.82A8,8,0,0,0,232,152ZM100.43,32a8.06,8.06,0,0,0-3.84,1L128,85.33,159.41,33a8.07,8.07,0,0,0-3.85-1Z"
                            opacity="0.2"
                          ></path>
                          <path d="M237.6,143.78,169.13,31.52A15.91,15.91,0,0,0,155.56,24H100.43a15.89,15.89,0,0,0-13.56,7.52l-.05.07L18.44,143.7a16,16,0,0,0-.33,16.42l27.32,47.82A16,16,0,0,0,59.32,216H196.67a16,16,0,0,0,13.89-8.06l27.32-47.82A15.91,15.91,0,0,0,237.6,143.78ZM219,144H172.52L137.33,85.33l22.75-37.92Zm-116.87,0L128,100.88,153.87,144Zm61.34,16,24,40H68.53l24-40ZM128,69.78,110.12,40l35.78-.05ZM95.91,47.41l22.76,37.92L83.47,144H37ZM36.54,160H73.87L54.72,191.92Zm164.74,31.93L182.12,160h37.41Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-169ow0l"
                  data-framer-name="shape "
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                    transform: "translateX(-50%)",
                    opacity: 1,
                  }}
                >
                  <div className="framer-7wodu2-container" style={{ transform: "translate(-50%, -50%)", opacity: 1 }}>
                    <div style={{ display: "contents" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          fill: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          color: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          flexShrink: 0,
                        }}
                      >
                        <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))">
                          <path
                            d="M96,174.19l56-32.33v36.95L107.5,204.5a48,48,0,0,1-66.4-64.08h0A48,48,0,0,0,51.5,148.5ZM204.5,107.5,160,81.81l-32,18.48,56,32.33V184a48,48,0,0,1-1.81,13h0A48,48,0,0,0,204.5,107.5ZM104,77.19,148.5,51.5a47.77,47.77,0,0,1,12.19-5v0A48,48,0,0,0,72,72v51.38l32,18.48Z"
                            opacity="0.2"
                          ></path>
                          <path d="M224.32,114.24a56,56,0,0,0-60.07-76.57A56,56,0,0,0,67.93,51.44a56,56,0,0,0-36.25,90.32A56,56,0,0,0,69,217,56.39,56.39,0,0,0,83.59,219a55.75,55.75,0,0,0,8.17-.61,56,56,0,0,0,96.31-13.78,56,56,0,0,0,36.25-90.32ZM182.85,54.43a40,40,0,0,1,28.56,48c-.95-.63-1.91-1.24-2.91-1.81L164,74.88a8,8,0,0,0-8,0l-44,25.41V81.81l40.5-23.38A39.76,39.76,0,0,1,182.85,54.43ZM144,137.24l-16,9.24-16-9.24V118.76l16-9.24,16,9.24ZM80,72a40,40,0,0,1,67.53-29c-1,.51-2,1-3,1.62L100,70.27a8,8,0,0,0-4,6.92V128l-16-9.24ZM40.86,86.93A39.75,39.75,0,0,1,64.12,68.57C64.05,69.71,64,70.85,64,72v51.38a8,8,0,0,0,4,6.93l44,25.4L96,165,55.5,141.57A40,40,0,0,1,40.86,86.93ZM73.15,201.57a40,40,0,0,1-28.56-48c.95.63,1.91,1.24,2.91,1.81L92,181.12a8,8,0,0,0,8,0l44-25.41v18.48l-40.5,23.38A39.76,39.76,0,0,1,73.15,201.57ZM176,184a40,40,0,0,1-67.52,29.05c1-.51,2-1.05,3-1.63L156,185.73a8,8,0,0,0,4-6.92V128l16,9.24Zm39.14-14.93a39.75,39.75,0,0,1-23.26,18.36c.07-1.14.12-2.28.12-3.43V132.62a8,8,0,0,0-4-6.93l-44-25.4,16-9.24,40.5,23.38A40,40,0,0,1,215.14,169.07Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  className="framer-x5ef0m"
                  data-framer-name="shape "
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "16px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                    transform: "translateX(-50%)",
                    opacity: 1,
                  }}
                >
                  <div className="framer-zowy1b-container" style={{ transform: "translate(-50%, -50%)", opacity: 1 }}>
                    <div style={{ display: "contents" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          fill: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          color: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          flexShrink: 0,
                        }}
                      >
                        <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))">
                          <path
                            d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                            opacity="0.2"
                          ></path>
                          <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI-Powered Chatbots Card */}
          <motion.div
            className="framer-hnkli9-container"
            style={{ willChange: "transform", opacity: 1, transform: "none" }}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="ssr-variant hidden-72rtr7">
              <div
                className="framer-jZiMA framer-XTXCe framer-iFxbV framer-kDPtm framer-4P3Vk framer-7tolu framer-1l6ndfz framer-v-6ng249"
                data-framer-name="tablet"
                style={{
                  backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                  borderRadius: "20px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.08) 0px 0.706592px 0.706592px -0.666667px, rgba(0, 0, 0, 0.08) 0px 1.80656px 1.80656px -1.33333px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -2px, rgba(0, 0, 0, 0.07) 0px 6.8656px 6.8656px -2.66667px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.33333px, rgba(0, 0, 0, 0.02) 0px 30px 30px -4px, rgb(255, 255, 255) 0px 3px 1px 0px inset",
                  height: "100%",
                  width: "100%",
                  opacity: 1,
                }}
              >
                {/* Text Container */}
                <div className="framer-1je26na" data-framer-name="Text Container" style={{ opacity: 1 }}>
                  <div
                    className="framer-axpwie"
                    data-framer-name="Heading"
                    style={{
                      // @ts-ignore
                      "--framer-paragraph-spacing": "0px",
                      transform: "none",
                      opacity: 1,
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-yhre11"
                      data-styles-preset="wPPWF6wfo"
                      style={{
                        // @ts-ignore
                        "--framer-text-alignment": "left",
                      }}
                    >
                      AI-Powered Chatbots
                    </p>
                  </div>
                  <div
                    className="framer-otmbr"
                    data-framer-name="Paragraph"
                    style={{
                      // @ts-ignore
                      "--framer-paragraph-spacing": "0px",
                      opacity: 0.8,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1khckfh"
                      data-styles-preset="cH8AiB6P_"
                      style={{
                        // @ts-ignore
                        "--framer-text-alignment": "left",
                      }}
                    >
                      We develop AI-driven chatbots with advanced cognitive technologies to elevate customer support
                      and automate business operations.
                    </p>
                  </div>
                </div>

                {/* Top Chat Bubble with User Icon */}
                <motion.div
                  className="framer-fx0oj2"
                  variants={bubbleVariants}
                  custom={0.5} // User message appears first
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "10px",
                    boxShadow:
                      "0px 0.706592px 0.706592px -0.666667px rgba(0, 0, 0, 0.08), 0px 1.80656px 1.80656px -1.33333px rgba(0, 0, 0, 0.08), 0px 3.62176px 3.62176px -2px rgba(0, 0, 0, 0.07), 0px 6.8656px 6.8656px -2.66667px rgba(0, 0, 0, 0.07), 0px 13.6468px 13.6468px -3.33333px rgba(0, 0, 0, 0.05), 0px 30px 30px -4px rgba(0, 0, 0, 0.02), inset 0px 3px 1px 0px rgb(255, 255, 255)",
                    opacity: 1,
                    transform: "translateY(-50%)",
                  }}
                >
                  <div
                    className="framer-1fiyuj9"
                    style={{
                      // @ts-ignore
                      "--extracted-r6o4lv": "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 2,
                      textOverflow: "ellipsis",
                      opacity: 0.6,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-12su4sl"
                      data-styles-preset="StOoogDYM"
                      style={{
                        // @ts-ignore
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0)))",
                      }}
                    >
                      Set up a Zoom call with Emily at 10:00 AM on Wednesday.
                    </p>
                  </div>
                </motion.div>

                {/* User Icon Circle */}
                <div
                  className="framer-99z3n0"
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "100px",
                    boxShadow:
                      "0px 0.706592px 0.706592px -0.666667px rgba(0, 0, 0, 0.08), 0px 1.80656px 1.80656px -1.33333px rgba(0, 0, 0, 0.08), 0px 3.62176px 3.62176px -2px rgba(0, 0, 0, 0.07), 0px 6.8656px 6.8656px -2.66667px rgba(0, 0, 0, 0.07), 0px 13.6468px 13.6468px -3.33333px rgba(0, 0, 0, 0.05), 0px 30px 30px -4px rgba(0, 0, 0, 0.02), inset 0px 3px 1px 0px rgb(255, 255, 255)",
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  <div className="framer-15mjlu7-container" style={{ transform: "translate(-50%, -50%)", opacity: 1 }}>
                    <div style={{ display: "contents" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          fill: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          color: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          flexShrink: 0,
                        }}
                      >
                        <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))">
                          <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Chat Bubble with AI Response */}
                <motion.div
                  className="framer-1aim1w3"
                  variants={bubbleVariants}
                  custom={2.0} // AI responds after 1.5s delay to simulate thinking
                  style={{
                    originX: 1, // Animate from right/center for AI
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "10px",
                    boxShadow:
                      "0px 0.706592px 0.706592px -0.666667px rgba(0, 0, 0, 0.08), 0px 1.80656px 1.80656px -1.33333px rgba(0, 0, 0, 0.08), 0px 3.62176px 3.62176px -2px rgba(0, 0, 0, 0.07), 0px 6.8656px 6.8656px -2.66667px rgba(0, 0, 0, 0.07), 0px 13.6468px 13.6468px -3.33333px rgba(0, 0, 0, 0.05), 0px 30px 30px -4px rgba(0, 0, 0, 0.02), inset 0px 3px 1px 0px rgb(255, 255, 255)",
                    opacity: 1,
                    transform: "translateY(-50%)",
                  }}
                >
                  <div
                    className="framer-y3ayhs"
                    style={{
                      // @ts-ignore
                      "--extracted-r6o4lv": "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      WebkitLineClamp: 2,
                      textOverflow: "ellipsis",
                      opacity: 0.6,
                      transform: "none",
                    }}
                    data-framer-component-type="RichTextContainer"
                  >
                    <p
                      className="framer-text framer-styles-preset-1y7m99z"
                      data-styles-preset="C0wa976Zp"
                      style={{
                        // @ts-ignore
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0)))",
                      }}
                    >
                      Zoom call with Emily set for 10:00 AM Wednesday.{" "}
                      <a
                        className="framer-text framer-styles-preset-1snln9b"
                        data-styles-preset="CO_HimyHZ"
                        href="https://www.zoom.com/"
                        target="_blank"
                        rel="noopener"
                      >
                        ZOOM
                      </a>
                    </p>
                  </div>
                </motion.div>

                {/* Sparkle/AI Icon Circle */}
                <div
                  className="framer-1xij3f2"
                  style={{
                    backgroundColor: "var(--token-4f00a517-d75a-4557-9433-caf4536a911d, rgb(245, 245, 245))",
                    borderRadius: "100px",
                    boxShadow:
                      "0px 0.706592px 0.706592px -0.666667px rgba(0, 0, 0, 0.08), 0px 1.80656px 1.80656px -1.33333px rgba(0, 0, 0, 0.08), 0px 3.62176px 3.62176px -2px rgba(0, 0, 0, 0.07), 0px 6.8656px 6.8656px -2.66667px rgba(0, 0, 0, 0.07), 0px 13.6468px 13.6468px -3.33333px rgba(0, 0, 0, 0.05), 0px 30px 30px -4px rgba(0, 0, 0, 0.02), inset 0px 3px 1px 0px rgb(255, 255, 255)",
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  <div className="framer-112n03h-container" style={{ transform: "translate(-50%, -50%)", opacity: 1 }}>
                    <div style={{ display: "contents" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        focusable="false"
                        color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))"
                        style={{
                          userSelect: "none",
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          fill: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          color: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))",
                          flexShrink: 0,
                        }}
                      >
                        <g color="var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(0, 0, 0))">
                          <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  );
};

export default AIServices;

