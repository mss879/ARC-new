import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.arcai.agency';

    // Helper function to get last modified date of a file
    const getLastModified = (filePath: string): Date => {
        try {
            const stats = fs.statSync(filePath);
            return stats.mtime;
        } catch (e) {
            return new Date();
        }
    };

    // 1. Static Pages
    // We'll check the main app/page.tsx, app/about/page.tsx etc to get their real dates
    const staticRoutes = [
        { route: '', filePath: 'src/app/page.tsx' },
        { route: '/about', filePath: 'src/app/about/page.tsx' },
        { route: '/portfolio', filePath: 'src/app/portfolio/page.tsx' },
        { route: '/contact', filePath: 'src/app/contact/page.tsx' },
        { route: '/blog', filePath: 'src/app/blog/page.tsx' },
        { route: '/services', filePath: 'src/app/services/page.tsx' },
    ];

    const staticPages = staticRoutes.map(item => ({
        url: `${baseUrl}${item.route}`,
        lastModified: getLastModified(path.join(process.cwd(), item.filePath)),
        changeFrequency: 'monthly' as const,
        priority: item.route === '' ? 1 : 0.8,
    }));

    // Helper to get dynamic routes with validation and real dates
    const getDynamicRoutes = (baseDir: string, urlPrefix: string, defaultPriority: number) => {
        const dirPath = path.join(process.cwd(), baseDir);

        if (!fs.existsSync(dirPath)) return [];

        const folders = fs.readdirSync(dirPath).filter(file => {
            const fullPath = path.join(dirPath, file);
            // Must be a directory AND contain page.tsx
            return fs.statSync(fullPath).isDirectory() &&
                fs.existsSync(path.join(fullPath, 'page.tsx'));
        });

        return folders.map(folder => {
            const pagePath = path.join(dirPath, folder, 'page.tsx');
            return {
                url: `${baseUrl}${urlPrefix}/${folder}`,
                lastModified: getLastModified(pagePath),
                changeFrequency: 'weekly' as const,
                priority: defaultPriority,
            };
        });
    };

    // 2. Dynamic Services
    const servicePages = getDynamicRoutes('src/app/services', '/services', 0.9);

    // 3. Dynamic Blog Posts
    const blogPages = getDynamicRoutes('src/app/blog', '/blog', 0.6);

    return [...staticPages, ...servicePages, ...blogPages];
}
