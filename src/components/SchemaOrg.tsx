// Schema.org Structured Data for SEO
// This component provides JSON-LD structured data for search engines.
//
// Everything about the company comes from src/content/site-facts.ts, and the
// FAQ comes from the same list the page renders, so the markup only ever
// describes what a visitor can read. There is deliberately no AggregateRating
// here: Google does not show stars for a rating a business publishes about
// itself, and the figure has to match reviews visible on the page.

import React from 'react';
import {
  SITE_URL,
  company,
  hours,
  office,
  phones,
  socialUrls,
} from '@/content/site-facts';
import type { Faq } from '@/content/home-faq';

interface SchemaOrgProps {
  type?: 'home' | 'about' | 'services' | 'portfolio' | 'blog' | 'contact' | 'service-page';
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
  serviceName?: string;
  serviceDescription?: string;
  blogTitle?: string;
  blogDescription?: string;
  blogImage?: string;
  blogDatePublished?: string;
  blogDateModified?: string;
  blogAuthor?: string;
  /** Questions that are visible on this page. Emits FAQPage markup for them. */
  faq?: Faq[];
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const logo = {
  "@type": "ImageObject",
  "url": `${SITE_URL}/arc-ai-logo.png`,
  "width": 512,
  "height": 512,
};

const postalAddress = {
  "@type": "PostalAddress",
  "streetAddress": office.street,
  "addressLocality": office.locality,
  "addressRegion": office.region,
  "postalCode": office.postalCode,
  "addressCountry": office.countryCode,
};

const sriLanka = { "@type": "Country", "name": office.country };

/** JSON for a script tag: "<" is escaped so the payload cannot close the tag. */
function toJsonLd(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}

export default function SchemaOrg({
  type = 'home',
  pageTitle,
  pageDescription,
  pageUrl,
  serviceName,
  serviceDescription,
  blogTitle,
  blogDescription,
  blogImage,
  blogDatePublished,
  blogDateModified,
  blogAuthor = 'ARC AI',
  faq,
}: SchemaOrgProps) {

  // Organization Schema (appears on all pages)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    "name": company.name,
    "legalName": company.legalName,
    "alternateName": "ARC AI Agency",
    "url": SITE_URL,
    "logo": logo,
    "description": company.summary,
    "foundingDate": String(company.foundedYear),
    "email": company.email,
    "telephone": phones.sriLanka.e164,
    "address": postalAddress,
    "areaServed": sriLanka,
    "sameAs": socialUrls,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": phones.sriLanka.e164,
      "contactType": "customer service",
      "areaServed": office.countryCode,
      "availableLanguage": ["en", "si", "ta"],
    },
  };

  // The one office, in Colombo
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness-sl`,
    "name": company.name,
    "legalName": company.legalName,
    "url": SITE_URL,
    "logo": logo,
    "image": `${SITE_URL}/og-image.jpg`,
    "description": company.summary,
    "email": company.email,
    "telephone": phones.sriLanka.e164,
    "address": postalAddress,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": office.geo.latitude,
      "longitude": office.geo.longitude,
    },
    "areaServed": sriLanka,
    "openingHoursSpecification": hours.periods.map((period) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": period.days,
      "opens": period.opens,
      "closes": period.closes,
    })),
    "sameAs": socialUrls,
    "parentOrganization": { "@id": ORGANIZATION_ID },
  };

  // Website Schema (no fake SearchAction)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": company.name,
    "description": "AI agents and business systems for Sri Lankan businesses",
    "publisher": { "@id": ORGANIZATION_ID },
  };

  // Service Schema
  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "name": serviceName,
    ...(serviceDescription ? { "description": serviceDescription } : {}),
    ...(pageUrl ? { "url": pageUrl } : {}),
    "provider": { "@id": ORGANIZATION_ID },
    "areaServed": sriLanka,
  } : null;

  // FAQ Schema: only for questions the page actually shows
  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  } : null;

  // Blog Article Schema
  const blogArticleSchema = blogTitle ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogTitle,
    "description": blogDescription,
    "image": blogImage || `${SITE_URL}/og-image.jpg`,
    "datePublished": blogDatePublished || "2024-01-01",
    "dateModified": blogDateModified || blogDatePublished || "2024-01-01",
    "author": {
      "@type": "Organization",
      "name": blogAuthor,
      "url": SITE_URL,
    },
    "publisher": { "@id": ORGANIZATION_ID },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl || SITE_URL,
    },
  } : null;

  // Breadcrumb Schema
  const breadcrumbSchema = pageUrl && pageTitle ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle,
        "item": pageUrl,
      },
    ],
  } : null;

  // Combine schemas based on page type
  const schemas: unknown[] = [organizationSchema, websiteSchema];

  if (type === 'home' || type === 'about' || type === 'contact') {
    schemas.push(localBusinessSchema);
  }

  if (serviceSchema) {
    schemas.push(serviceSchema);
  }

  if (faqSchema) {
    schemas.push(faqSchema);
  }

  if (blogArticleSchema) {
    schemas.push(blogArticleSchema);
  }

  if (breadcrumbSchema) {
    schemas.push(breadcrumbSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(schema) }}
        />
      ))}
    </>
  );
}
