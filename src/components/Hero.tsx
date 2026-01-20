"use client";

import { ArrowUpRight } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import Link from "next/link";
import LoadingScreen from "./LoadingScreen";

const Hero = memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // iOS/iPadOS-specific video autoplay fix
    const video = videoRef.current;
    if (!video) return;

    // Detection for iOS/iPadOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    console.log('Device detected:', { isIOS, userAgent: navigator.userAgent });

    // Set video properties programmatically for better iOS compatibility
    video.playsInline = true;
    video.muted = true;
    video.loop = true;
    
    // Additional iOS-specific attributes
    if (isIOS) {
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('x-webkit-airplay', 'deny');
    }

    // Force load
    video.load();

    // Wait for video to be ready before attempting play
    const handleCanPlay = () => {
      setVideoLoaded(true);
      console.log('Video ready to play');
    };

    video.addEventListener('canplaythrough', handleCanPlay);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);

  // Play video only after loading screen is complete and video is ready
  useEffect(() => {
    if (!isLoading && videoLoaded && videoRef.current) {
      const video = videoRef.current;
      
      const attemptPlay = async () => {
        try {
          await video.play();
          console.log('Video playing successfully');
          setVideoError(false);
        } catch (error) {
          console.error('Video autoplay failed:', error);
          setVideoError(true);
          
          // Setup interaction handlers for iOS/iPad
          const handleInteraction = async () => {
            try {
              await video.play();
              console.log('Video started after interaction');
              setVideoError(false);
              cleanup();
            } catch (e) {
              console.error('Video play after interaction failed:', e);
            }
          };

          const cleanup = () => {
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('touchend', handleInteraction);
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
          };

          // Add multiple event listeners
          document.addEventListener('touchstart', handleInteraction, { once: true, passive: true });
          document.addEventListener('touchend', handleInteraction, { once: true, passive: true });
          document.addEventListener('click', handleInteraction, { once: true });
          document.addEventListener('scroll', handleInteraction, { once: true, passive: true });
        }
      };

      attemptPlay();
    }
  }, [isLoading, videoLoaded]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      
      <section 
        className="relative h-screen flex flex-col overflow-hidden" 
        aria-label="Hero section"
      >
        {/* Video Background - Full Screen Edge to Edge */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            playsInline
            loop
            muted
            preload="none"
            className="w-full h-full object-cover scale-100"
            style={{ transformOrigin: 'center center', willChange: 'auto' }}
            aria-hidden="true"
            onLoadedData={() => {
              console.log('Video loaded');
              setVideoLoaded(true);
            }}
            onPlay={() => console.log('Video started playing')}
            onError={(e) => {
              console.error('Video error:', e);
              setVideoError(true);
            }}
          >
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {/* Fallback for when video doesn't play */}
        {videoError && (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" aria-hidden="true" />
        )}
        {/* Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        {/* Circular/Radial fade at edges (vignette effect) */}
        <div 
          className="absolute inset-0" 
          style={{ background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.95) 100%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content - Positioned over video */}
      <div className="relative z-10 h-full flex flex-col px-6 md:px-8 lg:px-12 pt-32 md:pt-24 lg:pt-40 pb-8">
        {/* Mobile & Small Screens - Redesigned layout */}
        <div className="flex-1 md:hidden flex flex-col h-full max-w-[1800px] mx-auto w-full">
          {/* Top Section - Main Headline on Right - REMOVED FOR MOBILE */}
          
          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Bottom Section - Description, Logos and CTA */}
          <div className="space-y-6 pb-4">
            {/* Description */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-lg sm:text-xl leading-relaxed text-justify text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700 }}>
                We build brands, websites, and digital experiences{" "}
                <span className="text-white">
                  with intention, clarity and care.
                </span>
              </h2>
            </div>

            {/* Trusted By Logos - Horizontal with label on same row */}
            <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }} role="region" aria-label="Trusted by companies">
              <p className="text-xs text-white/60 uppercase tracking-wider whitespace-nowrap">
                TRUSTED BY:
              </p>
              <div className="relative overflow-hidden mask-gradient flex-1">
                <div className="flex gap-6 animate-scroll">
                  {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex gap-6 shrink-0">
                      {[...Array(21)].map((_, i) => (
                        <img
                          key={i}
                          src={`/trust${i + 1}.png`}
                          alt={`Trusted client logo ${i + 1}`}
                          className="h-12 w-auto hover:scale-105 transition-transform"
                          loading="eager"
                          width="100"
                          height="48"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button - Full Width */}
            <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Link href="/contact">
                <button 
                  className="group relative w-full px-8 py-4 rounded-full border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
                  aria-label="Start a project with ARC AI"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-base font-bold tracking-wide text-orange-500 group-hover:text-white transition-colors">
                    START A PROJECT
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Medium Screens (iPad) - Custom Layout */}
        <div className="hidden md:flex lg:hidden flex-col justify-between h-full max-w-[1800px] mx-auto w-full min-h-0">
          {/* Top Section - Main Headline on Right with spacing */}
          <div className="flex items-start justify-end pt-8 md:pt-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] md:leading-[0.95] tracking-tight text-white text-right" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              Beyond Visuals.
              <br />
              <span className="text-white/60">Built with Vision.</span>
            </h1>
          </div>

          {/* Bottom Section - Description, Trusted By and CTA on Left */}
          <div className="flex items-end pb-8 md:pb-12">
            <div className="space-y-4 md:space-y-6 w-full md:w-auto">
              {/* Description */}
              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h2 className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl text-justify text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  We build brands, websites, AI Automations, and Digital experiences{" "}
                  <span className="text-white">
                    with intention, clarity and care.
                  </span>
                </h2>
              </div>

              {/* Trusted By Logos - Bottom Left */}
              <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }} role="region" aria-label="Trusted by companies">
                <p className="text-xs text-white/60 uppercase tracking-wider whitespace-nowrap">
                  TRUSTED BY:
                </p>
                <div className="relative overflow-hidden mask-gradient max-w-md flex-1">
                  <div className="flex gap-6 md:gap-8 animate-scroll">
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-6 md:gap-8 shrink-0">
                        {[...Array(21)].map((_, i) => (
                          <img
                            key={i}
                            src={`/trust${i + 1}.png`}
                            alt={`Trusted client logo ${i + 1}`}
                            className="h-10 md:h-12 w-auto hover:scale-105 transition-transform"
                            loading="eager"
                            width="100"
                            height="48"
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button - Under Trusted By */}
              <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <Link href="/contact">
                  <button 
                    className="group relative px-8 md:px-12 py-3 md:py-4 rounded-full border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
                    aria-label="Start a project with ARC AI"
                  >
                    <span className="relative z-10 flex items-center gap-3 text-sm md:text-base font-semibold tracking-wide text-orange-500 group-hover:text-white transition-colors">
                      START A PROJECT
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Large Screens - Original 2-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 max-w-[1800px] mx-auto w-full flex-1">
          {/* Left Side - Description at bottom */}
          <div className="flex flex-col justify-end h-full">
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl xl:text-3xl font-medium leading-relaxed max-w-xl text-justify text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                We build brands, websites,
                <br />
                AI Automations, and Digital experiences{" "}
                <span className="text-white">
                  with intention, clarity and care.
                </span>
              </h2>

              {/* Trusted By Logos */}
              <div className="space-y-3">
                <p className="text-xs text-white/60 uppercase tracking-wider">
                  TRUSTED BY:
                </p>
                <div className="relative overflow-hidden mask-gradient">
                  <div className="flex gap-8 animate-scroll">
                    {[...Array(3)].map((_, setIndex) => (
                      <div key={setIndex} className="flex gap-8 shrink-0">
                        {[...Array(21)].map((_, i) => (
                          <img key={i}
                            src={`/trust${i + 1}.png`}
                            alt={`Trusted client logo ${i + 1}`}
                            className="h-12 w-auto hover:scale-105 transition-transform"
                           loading="eager" fetchPriority="high" decoding="sync" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Main Heading and CTA */}
          <div className="flex flex-col justify-between h-full">
            {/* Main Headline */}
            <div className="text-right animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-3xl xl:text-[64px] font-bold leading-[0.9] tracking-tight text-white" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Beyond
                <br />
                Visuals.
                <br />
                <span className="text-white/60">Built with</span>
                <br />
                <span className="text-white/60">Vision.</span>
              </h1>
            </div>

            {/* CTA Button - Bottom Right */}
            <div className="flex justify-end mt-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact">
                <button 
                  className="group relative px-8 py-4 rounded-full border-2 border-orange-500 hover:bg-orange-500 transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]"
                  aria-label="Start a project with ARC AI"
                >
                  <span className="relative z-10 flex items-center gap-3 text-sm font-semibold tracking-wide text-orange-500 group-hover:text-white transition-colors">
                    START A PROJECT
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
});

Hero.displayName = "Hero";

export default Hero;

