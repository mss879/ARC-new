"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
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
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-6 bg-transparent"
      style={{
        willChange: 'transform',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Mission and Vision Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
          }}
        >
          {/* Our Mission */}
          <div 
            className="cut-card [--cut:18px] relative p-8 md:p-12 overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.5) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 73, 37, 0.2)'
            }}
          >
            <div className="relative z-10">
              <h2 
                className="text-3xl md:text-4xl font-medium text-ink mb-6 tracking-[-0.035em]"
                style={{
                }}
              >
                Our Mission
              </h2>
              <p 
                className="text-base md:text-lg text-ink leading-relaxed"
                style={{
                }}
              >
                To revolutionize businesses through innovative AI automation and strategic digital marketing, fostering growth and efficiency.
              </p>
            </div>
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 73, 37, 0.05) 100%)'
              }}
            />
          </div>

          {/* Our Vision */}
          <div 
            className="cut-card [--cut:18px] relative p-8 md:p-12 overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.5) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 73, 37, 0.2)'
            }}
          >
            <div className="relative z-10">
              <h2 
                className="text-3xl md:text-4xl font-medium text-ink mb-6 tracking-[-0.035em]"
                style={{
                }}
              >
                Our Vision
              </h2>
              <p 
                className="text-base md:text-lg text-ink leading-relaxed"
                style={{
                }}
              >
                To be a global leader in AI solutions, setting new standards in digital transformation.
              </p>
            </div>
            {/* Gradient overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 73, 37, 0.05) 100%)'
              }}
            />
          </div>
        </div>

        {/* Founder's Note */}
        <div 
          className="cut-card [--cut:18px] relative p-8 md:p-12 overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.5) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 73, 37, 0.2)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'none' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
          }}
        >
          <div className="relative z-10">
            <h2 
              className="text-3xl md:text-4xl font-medium text-ink mb-6 text-center tracking-[-0.035em]"
              style={{
              }}
            >
              Founder's Note
            </h2>
            <p 
              className="text-base md:text-lg text-ink leading-relaxed text-center max-w-4xl mx-auto mb-8"
              style={{
              }}
            >
              "ARC AI was born from a vision to harness the power of AI to solve real-world business challenges. Our journey has been one of continuous learning, innovation, and growth. We're committed to pushing the boundaries of what's possible with AI, always with the goal of delivering tangible value to our clients. As we look to the future, we're excited about the endless possibilities that lie ahead and the positive impact we can make on businesses worldwide."
            </p>
            
            {/* Founder Info */}
            <div className="flex items-center justify-center gap-4">
              <div 
                className="w-16 h-16 rounded-full overflow-hidden border-2"
                style={{
                  flexShrink: 0,
                  borderColor: 'rgba(255, 73, 37, 0.3)'
                }}
              >
                <Image
                  src="/founder.jpg"
                  alt="Shahid Shamir — Founder & CEO, ARC AI"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-left">
                <h3 
                  className="text-xl font-bold text-ink"
                  style={{
                  }}
                >
                  Shahid Shamir
                </h3>
                <p 
                  className="text-sm"
                  style={{
                    color: '#B62A0B'
                  }}
                >
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 73, 37, 0.05) 100%)'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
