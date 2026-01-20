"use client";

import { useEffect, useRef, useState } from "react";

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section ref={sectionRef} className="relative bg-[rgb(10,10,10)] overflow-hidden">
      <div className="relative min-h-[600px] lg:min-h-[500px]">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          {/* Gradient Mask */}
          <div 
            className="absolute inset-0 bg-[rgb(10,10,10)] z-10"
            style={{
              WebkitMask: 'linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 14%, rgba(0, 0, 0, 0) 81%, rgb(0, 0, 0) 100%)',
              mask: 'linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 14%, rgba(0, 0, 0, 0) 81%, rgb(0, 0, 0) 100%)'
            }}
          />
          
          {/* Hand Image - Centered */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://framerusercontent.com/images/3X1HO3X74cUE2rChqeNy9aFq20.jpg"
              alt="person hand in a dramatic lighting"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="auto"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="relative z-20 max-w-[1600px] mx-auto px-6 lg:px-12 py-20 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
            {/* Left - Title */}
            <div className="lg:col-span-1">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[rgb(230,230,230)] leading-[1.1] tracking-tighter">
                <span style={{whiteSpace: 'nowrap'}}>
                  <span 
                    className={`inline-block transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{willChange: 'transform', transitionDelay: '0.1s'}}
                  >
                    LET'S
                  </span>
                  {' '}
                  <span 
                    className={`inline-block transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{willChange: 'transform', transitionDelay: '0.2s'}}
                  >
                    WORK
                  </span>
                </span>
                <br />
                <span 
                  className={`inline-block transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{whiteSpace: 'nowrap', willChange: 'transform', transitionDelay: '0.3s'}}
                >
                  TOGETHER
                </span>
              </h2>
            </div>

            {/* Middle - Empty space for hand image */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Right - Description and Button */}
            <div className="lg:col-span-1 flex flex-col items-start lg:items-end text-left lg:text-right">
              <p className="text-[rgb(119,119,119)] text-lg lg:text-xl leading-relaxed mb-8 max-w-md">
                Have a project in mind? We'd love to hear about it. Let's create something great together!
              </p>

              {/* CTA Button */}
              <a
                href="#contact"
                className="group"
              >
                <button className="relative bg-transparent border-2 border-[rgb(255,73,37)] text-[rgb(255,73,37)] hover:bg-[rgb(255,73,37)] hover:text-white font-bold py-4 px-12 rounded-full overflow-hidden transition-all duration-300">
                  <span className="relative z-10 text-lg tracking-wide">
                    GET IN TOUCH
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Parallax Trigger */}
      <div id="parallax-trigger" className="absolute bottom-0 left-0 w-full h-px"></div>
    </section>
    </>
  );
};

export default CTA;

