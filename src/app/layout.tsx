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
  metadataBase: new URL('https://www.arcai.agency'),
  title: 'ARC AI - AI Automation and Digital Marketing Company UK | Sri Lanka',
  description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services. Transform your business with cutting-edge technology.',

  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },

  openGraph: {
    title: 'ARC AI - AI Automation and Digital Marketing Company',
    description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services.',
    url: 'https://www.arcai.agency',
    siteName: 'ARC AI',
    type: 'website',
    locale: 'en_GB',

    images: [
      {
        url: 'https://www.arcai.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARC AI - AI Automation and Digital Marketing Company',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ARC AI - AI Automation and Digital Marketing Company',
    description: 'Leading AI automation and digital marketing company in UK & Sri Lanka. Expert web design, branding, AI automation & digital marketing.',
    images: ['https://www.arcai.agency/og-image.jpg'],
  },

  // Keeping other existing metadata for SEO but ensuring they don't conflict
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  category: 'technology',
  classification: 'Business Services',
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    'geo.region.secondary': 'LK',
    'geo.placename.secondary': 'Sri Lanka',
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

        {/* DNS Prefetch & Preconnect - Reduce request latency */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Critical Resources - Reduce LCP */}
        <link rel="preload" as="image" href="/logo.png" type="image/png" fetchPriority="high" />
        {/* Remove video preload - let browser decide based on bandwidth */}
        <link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" type="font/woff2" crossOrigin="anonymous" fetchPriority="high" />


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
