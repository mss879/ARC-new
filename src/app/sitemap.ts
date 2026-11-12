import { MetadataRoute } from 'next';
import * as fs from 'fs';
import * as path from 'path';
import { PAGE_DATES as SOFTWARE_GUIDE_DATES } from './software-companies-sri-lanka/page-data';

export const dynamic = 'force-static';

/* lastModified policy
 * -------------------
 * A sitemap date is only useful if it is true. File modification times are NOT:
 * on Netlify every file is checked out at build time, so mtime is simply "the last
 * deploy" for every page, and search engines learn to ignore dates that all change
 * together. So a page gets a lastModified ONLY when it keeps an explicit, hand-bumped
 * date in its own data file. Every other page omits the field, which is valid.
 * To add a page here, export a `PAGE_DATES.modified` from its data file and list it. */
const KNOWN_MODIFIED: Record<string, string> = {
    'software-companies-sri-lanka': SOFTWARE_GUIDE_DATES.modified,
};

function knownDate(route: string): { lastModified?: Date } {
    const iso = KNOWN_MODIFIED[route];
    return iso ? { lastModified: new Date(`${iso}T00:00:00Z`) } : {};
}

/**
 * Scans a directory under src/app/ for subdirectories that contain a page.tsx.
 * Returns the slug of each discovered page.
 */
function discoverPages(subDir: string): string[] {
    const dirPath = path.join(process.cwd(), 'src', 'app', subDir);

    // Safety: if directory doesn't exist, return empty
    if (!fs.existsSync(dirPath)) return [];

    return fs
        .readdirSync(dirPath, { withFileTypes: true })
        .filter((entry) => {
            // Only directories that contain a page.tsx (actual routes)
            if (!entry.isDirectory()) return false;
            return fs.existsSync(path.join(dirPath, entry.name, 'page.tsx'));
        })
        .map((entry) => entry.name)
        .sort();
}

type Frequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.arcai.agency';

    // ─── Static pages: [route, changeFrequency, priority] ────────
    // NOTE: /ai-pricing and /web-pricing are intentionally excluded
    // because they have robots: { index: false, follow: false }
    const routes: [string, Frequency, number][] = [
        ['', 'weekly', 1.0],
        ['about', 'monthly', 0.8],
        ['portfolio', 'weekly', 0.9],
        ['contact', 'monthly', 0.7],
        ['blog', 'weekly', 0.8],
        ['services', 'monthly', 0.9],
        ['careers', 'weekly', 0.7],
        ['job-request', 'monthly', 0.6],
        ['privacy-policy', 'yearly', 0.3],
        ['terms-of-service', 'yearly', 0.3],
        ['refund-policy', 'yearly', 0.3],
        ['case-studies', 'monthly', 0.8],
        ['ai-agency-birmingham', 'monthly', 0.8],
        ['ai-automation-sri-lanka', 'monthly', 0.8],
        ['ai-companies-sri-lanka', 'weekly', 1.0],
        ['software-companies-sri-lanka', 'weekly', 1.0],
        ['web-design-sri-lanka', 'weekly', 1.0],
        ['ai-consultants-sri-lanka', 'monthly', 0.9],
    ];

    const staticPages: MetadataRoute.Sitemap = routes.map(([route, changeFrequency, priority]) => ({
        url: route ? `${baseUrl}/${route}` : baseUrl,
        ...knownDate(route),
        changeFrequency,
        priority,
    }));

    // ─── Service pages (auto-discovered) ─────────────────────────
    const servicePages: MetadataRoute.Sitemap = discoverPages('services').map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        ...knownDate(`services/${slug}`),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    // ─── Blog posts (auto-discovered) ────────────────────────────
    const blogPages: MetadataRoute.Sitemap = discoverPages('blog').map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        ...knownDate(`blog/${slug}`),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticPages, ...servicePages, ...blogPages];
}
