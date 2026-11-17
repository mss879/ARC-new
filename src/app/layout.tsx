import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/index.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import CookieConsent from "@/components/CookieConsent";
import FloatingActions from "@/components/FloatingActions";
import { SITE_URL, company } from "@/content/site-facts";

// The site's typeface, also exposed as --font-display for Tailwind's font-display.
const siteFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
});


// Site-wide defaults. A page that sets its own title, description or canonical
// replaces these; they are what a page falls back to when it sets none.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'ARC AI | AI Agents and Business Systems in Sri Lanka',
  description: company.summary,

  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },

  openGraph: {
    title: 'ARC AI | AI Agents and Business Systems in Sri Lanka',
    description: company.summary,
    url: SITE_URL,
    siteName: 'ARC AI',
    type: 'website',

    images: [
      {
        url: 'https://www.arcai.agency/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ARC AI: AI agents and business systems',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@arcaiagency',
    creator: '@arcaiagency',
    title: 'ARC AI | AI Agents and Business Systems in Sri Lanka',
    description: company.summary,
    images: ['https://www.arcai.agency/og-image.jpg'],
  },

  // Keeping other existing metadata for SEO but ensuring they don't conflict
  // Note: Google has officially ignored meta keywords since 2009 — removed to keep code clean
  authors: [{ name: "ARC AI", url: "https://www.arcai.agency" }],
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
  // No canonical and no hreflang here. A canonical set on the root layout is
  // inherited by every page that does not set its own, which pointed pages
  // such as /review at the home page; and the site has one language version,
  // so there is nothing for hreflang to distinguish.
  // Google Search Console verification
  // To get your code: Go to https://search.google.com/search-console → Settings → Ownership verification → HTML tag
  // Then paste the content value below, e.g.: verification: { google: 'your-code-here' },
  category: 'technology',
  classification: 'Business Services',
};

// No request-time API in here — no headers(), no cookies(). Reading the
// request from the ROOT layout opts every page on the site out of static
// rendering, so each visit ran a serverless function (cold start included)
// before a byte of HTML left the server: 5.1s p75 TTFB, 6.9s LCP, and the
// CDN reported `fwd=bypass` on every request. The only thing read here was a
// CSP nonce the middleware had already stopped producing.
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

        {/* No Google Fonts preconnect: the site font (Instrument Sans) is
            self-hosted by next/font, so those early connections were never
            used. */}

        {/* Preload Critical Resources - Reduce LCP */}
        {/* Remove video preload - let browser decide based on bandwidth */}


        {/* Web App Manifest - Deferred */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme Colors */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />

        {/* Performance & Security Headers */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Google Analytics and the Meta pixel are not loaded here: they wait
            for the visitor's consent and are loaded by <CookieConsent />. */}
      </head>
      <body className={`${siteFont.className} ${siteFont.variable}`}>
        {/* Skip-to-content link — visible on keyboard focus, hidden otherwise */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-[#FF4925] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <PerformanceMonitor />
        <AnalyticsTracker />
        <CookieConsent />
        <QueryProvider>
          <TooltipProvider>
            <main id="main-content">
              {children}
            </main>
            <FloatingActions />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
