import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";
import PerformanceMonitor from "@/components/PerformanceMonitor";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
});

// Comprehensive SEO Metadata for UK and Sri Lankan markets
export const metadata: Metadata = {
  metadataBase: new URL('https://arcai.agency'),
  title: {
    default: "ARC AI - AI Automation and Digital Marketing Company UK | Sri Lanka",
    template: "%s | ARC AI"
  },
  description: "Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services. Transform your business with cutting-edge technology.",
  keywords: [
    // UK Market Keywords
    "AI digital agency UK", "web design agency London", "AI automation UK", "digital marketing UK",
    "AI chatbot development UK", "web development agency UK", "branding agency UK",
    "AI content generation UK", "automated workflows UK", "digital transformation UK",
    // Sri Lanka Market Keywords
    "AI digital agency Sri Lanka", "web design agency Colombo", "AI automation Sri Lanka",
    "digital marketing Sri Lanka", "web development Sri Lanka", "branding agency Sri Lanka",
    "AI chatbot Sri Lanka", "digital agency Colombo", "website design Sri Lanka",
    // General Keywords
    "AI web design", "artificial intelligence marketing", "AI powered website",
    "chatbot development", "workflow automation", "content generation AI",
    "custom web design", "brand identity design", "digital experience design",
    "motion design", "social media marketing", "SEO optimization"
  ],
  authors: [{ name: "ARC AI", url: "https://arcai.agency" }],
  creator: "ARC AI",
  publisher: "ARC AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://arcai.agency',
    languages: {
      'en-GB': 'https://arcai.agency',
      'en-LK': 'https://arcai.agency',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['en_LK'],
    url: 'https://arcai.agency',
    siteName: 'ARC AI',
    title: 'ARC AI - AI Automation and Digital Marketing Company UK | Sri Lanka',
    description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services.',
    images: [
      {
        url: 'https://arcai.agency/-shareable-img.png',
        secureUrl: 'https://arcai.agency/-shareable-img.png',
        width: 1200,
        height: 630,
        alt: 'ARC AI - AI Automation and Digital Marketing Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARC AI - AI Automation and Digital Marketing Company',
    description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation & digital marketing.',
    images: {
      url: 'https://arcai.agency/shareimagenew.png',
      alt: 'ARC AI - AI Automation and Digital Marketing Company',
    },
    creator: '@arcdigitalcanvas',
    site: '@arcdigitalcanvas',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code', // Optional
    // bing: 'your-bing-verification-code', // Optional
  },
  category: 'technology',
  classification: 'Business Services',
  other: {
    // Geo-targeting for UK
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    // Geo-targeting for Sri Lanka
    'geo.region.secondary': 'LK',
    'geo.placename.secondary': 'Sri Lanka',
    // Additional SEO tags
    'distribution': 'global',
    'revisit-after': '7 days',
    'language': 'English',
    'coverage': 'Worldwide',
    'rating': 'General',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Critical Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Explicit Open Graph tags for WhatsApp */}
        <meta property="og:image" content="https://arcai.agency/-shareable-img.png" />
        <meta property="og:image:secure_url" content="https://arcai.agency/-shareable-img.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ARC AI - AI Automation and Digital Marketing Company" />

        {/* DNS Prefetch & Preconnect - Reduce request latency */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Critical Resources - Reduce LCP */}
        <link rel="preload" as="image" href="/logo.png" type="image/png" fetchPriority="high" />
        {/* Remove video preload - let browser decide based on bandwidth */}
        <link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" type="font/woff2" crossOrigin="anonymous" fetchPriority="high" />

        {/* Minimal Favicons - Defer non-critical */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Web App Manifest - Deferred */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Performance & Security Headers */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0447V2XK5V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              gtag('config', 'G-0447V2XK5V');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <PerformanceMonitor />
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
