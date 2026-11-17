"use client";

import { useEffect, useState, useRef } from "react";

const AboutTextAnimation = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const words = [
    { type: "text", content: "We're" },
    { type: "text", content: "an" },
    { type: "text", content: "AI" },
    { type: "text", content: "automation" },
    { type: "text", content: "and" },
    { type: "text", content: "marketing" },
    { type: "image", src: "https://framerusercontent.com/images/8aXjVCTPnV4dod9ZDHfVh6vX0H0.png", alt: "emoji" },
    { type: "text", content: "company" },
    { type: "text", content: "helping" },
    { type: "text", content: "brands" },
    { type: "text", content: "scale" },
    { type: "text", content: "faster" },
    { type: "text", content: "with" },
    { type: "text", content: "intelligent" },
    { type: "text", content: "automation," },
    { type: "text", content: "data-driven" },
    { type: "text", content: "strategies," },
    { type: "text", content: "and" },
    { type: "text", content: "cutting-edge" },
    { type: "text", content: "AI" },
    { type: "text", content: "solutions." },
    { type: "text", content: "With" },
    { type: "text", content: "6" },
    { type: "text", content: "years" },
    { type: "image", src: "https://framerusercontent.com/images/dtUgKs2yB2aHHRaSlPwIPzHbnU.png", alt: "emoji" },
    { type: "text", content: "of" },
    { type: "text", content: "experience," },
    { type: "text", content: "we've" },
    { type: "text", content: "transformed" },
    { type: "text", content: "businesses" },
    { type: "text", content: "through" },
    { type: "text", content: "powerful" },
    { type: "text", content: "automation," },
    { type: "text", content: "strategic" },
    { type: "text", content: "campaigns," },
    { type: "text", content: "and" },
    { type: "text", content: "innovative" },
    { type: "text", content: "digital" },
    { type: "text", content: "solutions" },
    { type: "text", content: "that" },
    { type: "text", content: "drive" },
    { type: "text", content: "real" },
    { type: "text", content: "results" }
  ];

  // Intersection Observer to start animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      {
        threshold: 0.3, // Start animation when 30% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Typing animation effect - only starts after section is visible
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev < words.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 80); // Typing speed - adjust as needed

    return () => clearInterval(interval);
  }, [hasStarted, words.length]);

  return (
    <section ref={sectionRef} className="relative pt-8 md:pt-20 pb-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div 
          className="cut-card [--cut:22px] relative bg-white/70 p-8 md:p-12 lg:p-16 [--cut-line:rgba(27,26,23,0.1)]"
          style={{
            willChange: 'transform',
            opacity: 1,
            transform: 'none'
          }}
        >
          <div className="relative w-full">
            <p 
              className="text-xl md:text-2xl lg:text-[26px] font-medium leading-relaxed text-center text-ink"
              style={{
                letterSpacing: '-0.9px',
                lineHeight: '1.55em',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                padding: '8px 12px',
                borderRadius: '8px',
                display: 'inline-block',
                position: 'relative',
                width: '100%',
                overflowWrap: 'break-word'
              }}
            >
              {words.map((word, index) => (
                <span key={index}>
                  {word.type === "text" ? (
                    <span 
                      className="inline-block mr-1"
                      style={{
                        color: 'rgb(27, 26, 23)',
                        filter: index < visibleWords ? 'none' : 'blur(8px)',
                        transition: 'filter 0.3s',
                        opacity: index < visibleWords ? 1 : 0.3,
                        transform: 'none',
                        willChange: 'transform'
                      }}
                    >
                      {word.content}
                    </span>
                  ) : (
                    <span 
                      className="inline-block align-middle mx-1"
                      style={{
                        color: 'rgb(27, 26, 23)',
                        filter: index < visibleWords ? 'none' : 'blur(8px)',
                        transition: 'filter 0.3s',
                        opacity: index < visibleWords ? 1 : 0.3,
                        transform: 'none',
                        willChange: 'transform'
                      }}
                    >
                      <img 
                        src={word.src} 
                        alt={word.alt}
                        className="inline-block align-middle"
                        style={{
                          width: '40px',
                          height: 'auto',
                          borderRadius: '0px',
                          boxShadow: 'none',
                          objectFit: 'cover',
                          margin: '0px'
                        }}
                      />
                    </span>
                  )}
                  {index < words.length - 1 && ' '}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTextAnimation;
