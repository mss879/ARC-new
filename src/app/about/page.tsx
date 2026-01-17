// Server Component - Optimized for SEO
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import ScrollToTop from "@/components/ScrollToTop";
import ClientsSection from "@/components/ClientsSection";
import AboutTextAnimation from "@/components/AboutTextAnimation";
import ValuesSection from "@/components/ValuesSection";
import JourneySection from "@/components/JourneySection";
import IndustriesSection from "@/components/IndustriesSection";
import { Rocket, Users, MapPin } from "lucide-react";

// SEO Metadata for About Page
export const metadata: Metadata = {
  title: "About Us - AI Digital Agency | ARC Digital Canvas",
  description: "Learn about ARC Digital Canvas - a leading AI-powered digital agency serving UK and Sri Lanka. Discover our mission, values, and expertise in web design, AI automation, and digital marketing.",
  keywords: [
    "about ARC Digital Canvas", "AI digital agency UK", "digital agency Sri Lanka",
    "web design company", "AI automation experts", "digital marketing agency",
    "branding agency", "our story", "company values", "digital transformation"
  ],
  openGraph: {
    title: "About ARC Digital Canvas - AI Digital Agency",
    description: "Leading AI-powered digital agency serving UK and Sri Lanka with expertise in web design, AI automation, and digital marketing.",
    url: "https://arcai.agency/about",
    type: "website",
    images: [{
      url: "https://arcai.agency/-shareable-img.png",
      width: 1200,
      height: 630,
      alt: "About ARC Digital Canvas"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About ARC Digital Canvas - AI Digital Agency",
    description: "Leading AI-powered digital agency serving UK and Sri Lanka",
    images: ["https://arcai.agency/-shareable-img.png"]
  },
  alternates: {
    canonical: "https://arcai.agency/about"
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollToTop />
      <SchemaOrg
        type="about"
        pageTitle="About Us"
        pageDescription="Leading AI-powered digital agency serving UK and Sri Lanka with expertise in web design, AI automation, and digital marketing."
        pageUrl="https://arcai.agency/about"
      />
      <Navbar />

      {/* Company Hero Section */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center px-6 pt-48 pb-32 overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: 1
            }}
          >
            <source src="/about%20hero.mp4" type="video/mp4" />
          </video>
          {/* Subtle overlay for text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.3) 100%)'
            }}
          />
        </div>

        {/* First Map SVG Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            fill: 'rgba(0, 0, 0, 0)',
            color: 'rgba(0, 0, 0, 0)',
            imageRendering: 'pixelated',
            flexShrink: 0
          }}
        >
          <svg
            viewBox="0 0 695 400"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            style={{ width: '100%', height: '100%' }}
          >
            <defs>
              <pattern id="dotPattern1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(213, 192, 43, 0.15)" />
              </pattern>
              <linearGradient id="mapGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(213, 192, 43, 0.2)" />
                <stop offset="100%" stopColor="rgba(99, 99, 59, 0.1)" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern1)" opacity="0.3" />
            <path
              d="M 100 150 Q 200 100 300 150 T 500 150 M 150 250 Q 250 200 350 250 T 550 250"
              stroke="url(#mapGradient1)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Second Map SVG Background - Duplicate with different blend - LEFT SIDE */}
        <div
          className="absolute left-0 top-0 w-1/2 h-full z-0"
          aria-hidden="true"
          style={{
            fill: 'rgba(0, 0, 0, 0)',
            color: 'rgba(0, 0, 0, 0)',
            imageRendering: 'pixelated',
            flexShrink: 0
          }}
        >
          <div style={{ width: '100%', height: '100%', aspectRatio: 'inherit' }}>
            <svg
              viewBox="0 0 695 400"
              preserveAspectRatio="none"
              width="100%"
              height="100%"
              style={{ width: '100%', height: '100%' }}
            >
              <defs>
                <pattern id="dotPattern2" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="0.8" fill="rgba(99, 99, 59, 0.2)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotPattern2)" opacity="0.2" />
            </svg>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto">

          {/* Centered Content */}
          <div className="flex flex-col items-center text-center space-y-12">

            {/* Main Heading */}
            <h1
              className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight tracking-tight"
              style={{
                color: 'rgb(255, 255, 255)',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
              }}
            >
              Revolutionizing Business Through AI Automation & Digital Marketing
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
              }}
            >
              We combine cutting-edge AI technology with strategic digital marketing to transform businesses. From intelligent automation to data-driven campaigns, we help you scale faster and smarter.
            </p>

            {/* Stats Cards - Horizontal layout as in screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 w-full max-w-3xl">

              {/* Launched In Card */}
              <div
                className="flex flex-col items-center gap-3 p-6 rounded-xl"
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="flex items-center gap-2 text-white/60">
                  <Rocket className="w-4 h-4" />
                  <span className="text-xs font-medium">Founded In</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  2022
                </div>
              </div>

              {/* Customers Card */}
              <div
                className="flex flex-col items-center gap-3 p-6 rounded-xl"
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="flex items-center gap-2 text-white/60">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-medium">Customers</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  100+
                </div>
              </div>

              {/* Rating Card */}
              <div
                className="flex flex-col items-center gap-3 p-6 rounded-xl"
                style={{
                  backgroundColor: 'rgba(20, 20, 20, 0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-medium">Customer Rating</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  4.9/5
                </div>
              </div>

            </div>

            {/* Tech Stack Infinite Scroll */}
            <div className="w-full mt-16">
              <p className="text-center text-white/40 text-sm uppercase tracking-wider mb-8">
                Powered By Industry-Leading Technology
              </p>
              <div
                className="relative w-full overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)'
                }}
              >
                <div
                  className="flex gap-12 py-6 animate-scroll"
                  style={{
                    animation: 'scroll 40s linear infinite'
                  }}
                >
                  {/* Duplicate the tech stack 3 times for seamless loop */}
                  {[...Array(3)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-12 shrink-0">
                      {/* OpenAI */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-white font-bold text-lg">OpenAI</span>
                      </div>

                      {/* Python */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                          <defs>
                            <linearGradient id="pythonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#3776AB" />
                              <stop offset="100%" stopColor="#FFD43B" />
                            </linearGradient>
                          </defs>
                          <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="url(#pythonGradient)" />
                        </svg>
                      </div>

                      {/* TensorFlow */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#FF6F00] font-bold text-lg">TensorFlow</span>
                      </div>

                      {/* React */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                          <g fill="#61DAFB">
                            <circle cx="12" cy="12" r="2" />
                            <path d="M12 8c-4.418 0-8 1.791-8 4s3.582 4 8 4 8-1.791 8-4-3.582-4-8-4z" opacity="0.3" />
                            <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61DAFB" strokeWidth="1" />
                            <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)" />
                            <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(-60 12 12)" />
                          </g>
                        </svg>
                      </div>

                      {/* Node.js */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#339933] font-bold text-lg">Node.js</span>
                      </div>

                      {/* MongoDB */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#47A248] font-bold text-lg">MongoDB</span>
                      </div>

                      {/* AWS */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#FF9900] font-bold text-lg">AWS</span>
                      </div>

                      {/* Docker */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#2496ED] font-bold text-lg">Docker</span>
                      </div>

                      {/* Google Cloud */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#4285F4] font-bold text-sm">Google Cloud</span>
                      </div>

                      {/* Zapier */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#FF4A00] font-bold text-lg">Zapier</span>
                      </div>

                      {/* Make.com */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#6B4FE0] font-bold text-lg">Make.com</span>
                      </div>

                      {/* n8n */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#EA4B71] font-bold text-lg">n8n</span>
                      </div>

                      {/* Next.js */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-white font-bold text-lg">Next.js</span>
                      </div>

                      {/* TypeScript */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#3178C6] font-bold text-lg">TypeScript</span>
                      </div>

                      {/* Tailwind CSS */}
                      <div className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center shrink-0 hover:bg-white/10 transition-all">
                        <span className="text-[#06B6D4] font-bold text-lg">Tailwind</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark overlay to match screenshot darkness */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0, 0, 0, 0.6) 80%)'
          }}
        />
      </section>

      {/* About Us Description Section */}
      <AboutTextAnimation />

      {/* Mission, Vision & Founder's Note Section */}
      <ValuesSection />

      {/* Companies We Worked With Section */}
      <ClientsSection />

      {/* Our Journey Timeline Section */}
      <JourneySection />

      {/* Industries We Serve Section */}
      <IndustriesSection />

      <Footer />
    </div>
  );
}
