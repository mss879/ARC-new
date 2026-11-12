/* Types for /software-companies-sri-lanka. Data lives in company-list.ts. */

export type Tier = "Enterprise & Global" | "Mid-Market & Growth" | "Boutique & Specialist";

/* Product = sells its own software. Services = builds software for clients.
 * Captive centre = in-house engineering centre of a parent company, not for hire. */
export type CompanyType = "Product" | "Services" | "Captive centre";

export type RatingKind = "Client reviews" | "Employee reviews" | "Product reviews";

export interface SourceLink {
    label: string;
    url: string;
}

export interface Rating {
    value: string;
    kind: RatingKind;
    platform: string;
    url: string;
    reviews?: number;
}

export interface Headcount {
    approx: number;
    label: string;
    asOf: string;
    sourceUrl: string;
}

export interface Project {
    text: string;
    sourceUrl: string;
}

/** What the company itself publishes on its Clutch profile. */
export interface ClutchListing {
    url: string;
    /** Hourly rate band exactly as Clutch shows it, e.g. "$25 - $49 / hr". */
    hourlyRate?: string;
    /** Minimum project size exactly as Clutch shows it, e.g. "$10,000+". */
    minProject?: string;
}

export interface Company {
    /** Anchor id on the page, e.g. "wso2". Never change once published. */
    slug: string;
    name: string;
    formerNames?: string[];
    /** "full" = long profile, "compact" = short profile. */
    depth: "full" | "compact";
    category: Tier;
    type: CompanyType;
    /** Sri Lankan city of the main local office. */
    city: string;
    /** Sri Lankan district of that office, e.g. "Colombo", "Kandy", "Jaffna". */
    district: string;
    tagline: string;
    founded: string;
    /** Year the Sri Lanka operation began, when it differs from `founded`. */
    sriLankaSince?: string;
    hq: string;
    /** Employee band as displayed. */
    size: string;
    /** Sri Lanka-specific headcount, only when a source states one. */
    slHeadcount?: Headcount;
    specialty: string;
    description: string;
    services: string[];
    bestFor: string;
    website: string;
    careersUrl?: string;
    internshipUrl?: string;
    /** Client or product review score resting on at least five reviews. Shown on the card. */
    rating?: Rating;
    /** Employee review score (Glassdoor). Stored for the careers section; not shown on the card. */
    employeeRating?: Rating;
    /** Published rate band and minimum project size, when the company lists them on Clutch. */
    clutch?: ClutchListing;
    notableClients?: string;
    techStack?: string;
    /** Only projects that can be linked to a published case study or press article. */
    project?: Project;
    /** Every profile must list at least one source. Enforced by the build-time guard in page-data.ts. */
    sources: SourceLink[];
    /** ISO date the facts above were last checked against the sources. */
    verifiedOn: string;
}
