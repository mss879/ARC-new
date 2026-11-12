import { PAGE_DATES, PAGE_URL, companiesInRenderOrder } from "../page-data";

/* The company list as a CSV, generated from the same data as the page.
 * People search for a downloadable version of this list; this is it. */
export const dynamic = "force-static";

const cell = (value: string | undefined): string => `"${(value ?? "").replace(/"/g, '""')}"`;

export function GET(): Response {
    const header = ["Company", "Type", "Size tier", "City", "District", "Founded", "Employees", "Specialty", "Website", "Profile", "Checked"];
    const rows = companiesInRenderOrder.map((c) =>
        [
            c.name,
            c.type,
            c.category,
            c.city,
            c.district,
            c.founded,
            c.slHeadcount ? `${c.slHeadcount.label} in Sri Lanka` : c.size,
            c.specialty,
            c.website,
            `${PAGE_URL}#${c.slug}`,
            c.verifiedOn,
        ]
            .map(cell)
            .join(",")
    );
    const body = [`"Software companies in Sri Lanka, ${PAGE_URL}, updated ${PAGE_DATES.modified}"`, header.map(cell).join(","), ...rows].join("\r\n");

    return new Response(body, {
        headers: {
            "Content-Type": "text/csv; charset=utf-8",
            "Content-Disposition": 'attachment; filename="software-companies-sri-lanka.csv"',
            // The page is the thing to index, not the file.
            "X-Robots-Tag": "noindex",
        },
    });
}
