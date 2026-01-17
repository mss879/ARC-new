import { MetadataRoute } from 'next';

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
        '/services/ai-chatbots',
        '/services/ai-content-generation',
        '/services/ai-automated-workflows',
        '/services/social-media',
        '/services/motion-design',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
