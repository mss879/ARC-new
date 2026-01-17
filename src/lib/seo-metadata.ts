// SEO Metadata Configuration for All Pages
// This file contains optimized metadata for each page of the website

export const pageMetadata = {
  home: {
    title: "ARC AI - AI Web Design & Digital Marketing Agency UK | Sri Lanka",
    description: "Leading AI-powered digital agency in UK & Sri Lanka. Expert web design, branding, AI automation, chatbots, content generation & digital marketing services. Transform your business with cutting-edge technology.",
    keywords: "AI digital agency UK, web design agency London, AI automation UK, digital marketing UK, AI chatbot development UK, web development agency UK, branding agency UK, AI digital agency Sri Lanka, web design agency Colombo",
    url: "https://arcai.agency",
  },

  about: {
    title: "About Us - Leading AI Digital Agency UK & Sri Lanka | ARC AI",
    description: "Discover ARC AI: A pioneering AI-powered digital agency with teams in UK and Sri Lanka. Learn about our mission to transform businesses through innovative web design, branding, and AI automation.",
    keywords: "about ARC AI, AI digital agency UK, digital agency Sri Lanka, web design agency team, AI automation experts, digital transformation agency, UK digital agency, Colombo digital agency",
    url: "https://arcai.agency/about",
  },

  portfolio: {
    title: "Portfolio - Our Best Work | ARC AI - UK & Sri Lanka",
    description: "Explore our portfolio of successful web design, branding, and AI automation projects. See how we've helped businesses in UK and Sri Lanka transform their digital presence with innovative solutions.",
    keywords: "web design portfolio UK, digital agency portfolio, AI automation projects, branding portfolio, website design examples UK, digital marketing portfolio Sri Lanka, web development showcase",
    url: "https://arcai.agency/portfolio",
  },

  contact: {
    title: "Contact Us - Get Your Free Consultation | ARC AI UK & Sri Lanka",
    description: "Ready to transform your business? Contact ARC AI for expert web design, AI automation, and digital marketing services in UK and Sri Lanka. Free consultation available.",
    keywords: "contact digital agency UK, web design consultation UK, AI automation consultation, digital marketing contact, hire web designer UK, contact digital agency Sri Lanka, get quote web design",
    url: "https://arcai.agency/contact",
  },

  blog: {
    title: "Blog - Digital Marketing & AI Insights | ARC AI",
    description: "Stay updated with the latest trends in AI, web design, digital marketing, and automation. Expert insights and guides from ARC AI for businesses in UK and Sri Lanka.",
    keywords: "digital marketing blog, AI automation blog, web design trends, digital marketing tips UK, AI technology blog, marketing automation guides, SEO best practices",
    url: "https://arcai.agency/blog",
  },

  services: {
    webDesign: {
      title: "Web Design & Development Services UK & Sri Lanka | ARC AI",
      description: "Professional web design and development services in UK and Sri Lanka. Custom websites built with cutting-edge technology, responsive design, and SEO optimization for maximum impact.",
      keywords: "web design UK, web development UK, website design Sri Lanka, custom website design, responsive web design, e-commerce website UK, WordPress development, Next.js development",
      url: "https://arcai.agency/services/web-design-development",
    },

    branding: {
      title: "Branding & Brand Identity Services UK & Sri Lanka | ARC AI",
      description: "Transform your brand with professional branding services. Logo design, brand identity, visual design, and brand strategy for businesses in UK and Sri Lanka.",
      keywords: "branding agency UK, brand identity design, logo design UK, brand strategy, visual identity, rebranding services, corporate branding Sri Lanka, brand design Colombo",
      url: "https://arcai.agency/services/branding",
    },

    aiChatbots: {
      title: "AI Chatbot Development UK & Sri Lanka | Custom Chatbot Solutions",
      description: "Intelligent AI chatbot development services for customer service, lead generation, and automation. 24/7 customer support with advanced NLP chatbots for UK and Sri Lankan businesses.",
      keywords: "AI chatbot development UK, custom chatbot solutions, chatbot development Sri Lanka, AI customer service, conversational AI, chatbot builder, automated customer support, NLP chatbot",
      url: "https://arcai.agency/services/ai-chatbots",
    },

    aiContentGeneration: {
      title: "AI Content Generation Services UK & Sri Lanka | Automated Content Creation",
      description: "Revolutionary AI-powered content generation for blogs, social media, marketing copy, and more. Scale your content production with intelligent automation for UK and Sri Lankan markets.",
      keywords: "AI content generation UK, automated content creation, AI copywriting, content automation Sri Lanka, AI blog writing, marketing content AI, GPT content generation, AI social media content",
      url: "https://arcai.agency/services/ai-content-generation",
    },

    aiWorkflows: {
      title: "AI Automated Workflows UK & Sri Lanka | Business Process Automation",
      description: "Streamline your business with AI-powered workflow automation. Custom automation solutions for efficiency, productivity, and growth in UK and Sri Lankan enterprises.",
      keywords: "workflow automation UK, business process automation, AI automation services, automated workflows Sri Lanka, process automation, intelligent automation, RPA solutions, workflow optimization",
      url: "https://arcai.agency/services/ai-automated-workflows",
    },

    socialMedia: {
      title: "Social Media Marketing Services UK & Sri Lanka | ARC AI",
      description: "Comprehensive social media marketing services including strategy, content creation, management, and advertising for businesses in UK and Sri Lanka. Grow your brand on all platforms.",
      keywords: "social media marketing UK, social media management, SMM services Sri Lanka, social media advertising, Instagram marketing UK, Facebook ads, LinkedIn marketing, social media strategy",
      url: "https://arcai.agency/services/social-media",
    },

    motionDesign: {
      title: "Motion Design & Animation Services UK & Sri Lanka | ARC AI",
      description: "Professional motion design and animation services for brands, explainer videos, product demos, and marketing. Engaging visual storytelling for UK and Sri Lankan businesses.",
      keywords: "motion design UK, animation services, explainer video production, motion graphics Sri Lanka, 2D animation, 3D animation, video animation, brand animation UK",
      url: "https://arcai.agency/services/motion-design",
    },
  },
};

// Helper function to get Open Graph data
export function getOpenGraphData(page: keyof typeof pageMetadata | string) {
  const data = typeof page === 'string' && page.includes('services/')
    ? pageMetadata.services[page.split('/')[1] as keyof typeof pageMetadata.services]
    : pageMetadata[page as keyof typeof pageMetadata];

  if (!data || typeof data !== 'object' || !('title' in data)) {
    return null;
  }

  return {
    title: data.title,
    description: data.description,
    url: data.url,
    type: 'website' as const,
    images: [
      {
        url: 'https://arcai.agency/sharemimag-lessq.png',
        width: 1200,
        height: 630,
        alt: 'ARC AI',
      },
    ],
  };
}

// Helper function to get Twitter Card data
export function getTwitterCardData(page: keyof typeof pageMetadata | string) {
  const data = typeof page === 'string' && page.includes('services/')
    ? pageMetadata.services[page.split('/')[1] as keyof typeof pageMetadata.services]
    : pageMetadata[page as keyof typeof pageMetadata];

  if (!data || typeof data !== 'object' || !('title' in data)) {
    return null;
  }

  return {
    card: 'summary_large_image' as const,
    title: data.title,
    description: data.description,
    images: ['https://arcai.agency/sharemimag-lessq.png'],
  };
}
