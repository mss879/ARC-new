import { MetadataRoute } from 'next';
import * as fs from 'fs';
import * as path from 'path';

export const dynamic = 'force-static';

/**
 * Scans a directory under src/app/ for subdirectories that contain a page.tsx.
 * Returns an array of { slug, lastModified } for each discovered page.
 */
function discoverPages(subDir: string): { slug: string; lastModified: Date }[] {
    const dirPath = path.join(process.cwd(), 'src', 'app', subDir);

    // Safety: if directory doesn't exist, return empty
    if (!fs.existsSync(dirPath)) return [];

    return fs
        .readdirSync(dirPath, { withFileTypes: true })
        .filter((entry) => {
            // Only directories that contain a page.tsx (actual routes)
            if (!entry.isDirectory()) return false;
            const pagePath = path.join(dirPath, entry.name, 'page.tsx');
            return fs.existsSync(pagePath);
        })
        .map((entry) => {
            const pagePath = path.join(dirPath, entry.name, 'page.tsx');
            const stats = fs.statSync(pagePath);
            return {
                slug: entry.name,
                lastModified: stats.mtime,
            };
        });
}

/**
 * Returns the actual file modification date for a page route,
 * instead of new Date() which changes on every build.
 */
function getPageModDate(route: string): Date {
    // For root page, look at src/app/page.tsx
    const pagePath = route === '.'
        ? path.join(process.cwd(), 'src', 'app', 'page.tsx')
        : path.join(process.cwd(), 'src', 'app', route, 'page.tsx');
    if (fs.existsSync(pagePath)) {
        return fs.statSync(pagePath).mtime;
    }
    return new Date('2026-03-01'); // Fallback
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.arcai.agency';

    // ─── Static pages ────────────────────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: getPageModDate('.'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: getPageModDate('about'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: getPageModDate('portfolio'),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: getPageModDate('contact'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: getPageModDate('blog'),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: getPageModDate('services'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified: getPageModDate('careers'),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/job-request`,
            lastModified: getPageModDate('job-request'),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: getPageModDate('privacy-policy'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-of-service`,
            lastModified: getPageModDate('terms-of-service'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/refund-policy`,
            lastModified: getPageModDate('refund-policy'),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        // NOTE: /ai-pricing and /web-pricing are intentionally excluded
        // because they have robots: { index: false, follow: false }
        {
            url: `${baseUrl}/case-studies`,
            lastModified: getPageModDate('case-studies'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ai-agency-birmingham`,
            lastModified: getPageModDate('ai-agency-birmingham'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ai-automation-sri-lanka`,
            lastModified: getPageModDate('ai-automation-sri-lanka'),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ai-companies-sri-lanka`,
            lastModified: getPageModDate('ai-companies-sri-lanka'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/software-companies-sri-lanka`,
            lastModified: getPageModDate('software-companies-sri-lanka'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/web-design-sri-lanka`,
            lastModified: getPageModDate('web-design-sri-lanka'),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/ai-consultants-sri-lanka`,
            lastModified: getPageModDate('ai-consultants-sri-lanka'),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
    ];

    // ─── Service pages (auto-discovered) ─────────────────────────
    const servicePages: MetadataRoute.Sitemap = discoverPages('services').map(
        ({ slug, lastModified }) => ({
            url: `${baseUrl}/services/${slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })
    );

    // ─── Blog posts (auto-discovered) ────────────────────────────
    const blogPages: MetadataRoute.Sitemap = discoverPages('blog').map(
        ({ slug, lastModified }) => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })
    );

    return [...staticPages, ...servicePages, ...blogPages];
}
