import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.arcai.agency';
    // Current date for lastModified
    const currentDate = new Date();

    // Define your routes here
    const routes = [
        '',
        '/about',
        '/portfolio',
        '/contact',
        '/blog',
        '/services/web-design-development',
        '/services/branding',
        '/services/web-apps',
        '/services/smart-funnels',
        '/services/custom-backend',
        '/services/ai-chatbots',
        '/services/ai-content-generation',
        '/services/ai-automated-workflows',
        '/services/social-media',
        '/services/motion-design',
        // Blog Posts
        '/blog/ai-automation-transform-business-2024',
        '/blog/digital-marketing-strategies-2024',
        '/blog/ai-chatbots-customer-service',
        '/blog/seo-optimization-best-practices',
        '/blog/workflow-automation-tools-2024',
        '/blog/social-media-marketing-guide',
        '/blog/ai-content-generation-marketing',
        '/blog/email-marketing-automation',
        '/blog/influencer-marketing-strategy',
        '/blog/video-marketing-2025',
        '/blog/marketing-analytics-dashboard',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : (route.startsWith('/blog/') ? 0.6 : 0.8),
    }));
}
