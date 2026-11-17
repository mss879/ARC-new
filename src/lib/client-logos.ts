// Client logos for the "Trusted by" strips, newest work first.
//
// Each file is a round badge at public/logos/<file>.webp. The first block was
// rebuilt on 12 Nov 2026 from the clients' own brand files at 256 px; the
// second block is the older set. Only brands that are on the public portfolio
// belong here: this list is read as "these are our clients".
export const clientLogos = [
    { name: "Island Jerky", file: "island-jerky" },
    { name: "Jolly's Creamery", file: "jollys-creamery" },
    { name: "Island Adventures", file: "island-adventures" },
    { name: "Dock One Solutions", file: "dock-one-solutions" },
    { name: "Franley", file: "franley" },
    { name: "Royal Paradise Gems", file: "royal-paradise-gems" },
    { name: "Armac Mart", file: "armac-mart" },
    { name: "Cloud Healthcare", file: "cloud-healthcare" },
    { name: "Fusion Hybrid Projects", file: "fusion-hybrid" },
    { name: "Gharib Perfumes", file: "gharib-perfumes" },
    { name: "Lusako", file: "lusako" },
    { name: "Makro Developers", file: "makro-developers" },
    { name: "Iris & Me", file: "iris-and-me" },
    { name: "MD Lanka", file: "md-lanka" },
    { name: "Green Engineering Systems", file: "green-engineering-systems" },
    { name: "Mr Rider", file: "mr-rider" },
    { name: "AEC", file: "aec" },
    { name: "Tech Nurture", file: "tech-nurture" },
    { name: "Ceylon Gem Maison", file: "ceylon-gem-maison" },
    { name: "Imperial Life Sciences", file: "imperial-life-sciences" },
    { name: "Inventis Pharma", file: "inventis-pharma" },
    { name: "iConn Health Care", file: "iconn-health-care" },
    { name: "PluggedIn", file: "pluggedin" },
    { name: "Portland Flooring", file: "portland-flooring" },
    { name: "Java Global Nexus", file: "java-global-nexus" },
    { name: "Zenzur", file: "zenzur" },
    { name: "YBO Agency", file: "yboagency" },
    { name: "Car Rush", file: "car-rush" },
    { name: "Care Arena Ceylon", file: "care-arena-ceylon" },
    { name: "Ceylon Motors", file: "ceylonmotors" },
    { name: "Ceylon Tea Land", file: "ceylontealand" },
    { name: "DEK Studio", file: "dek-studio" },
    { name: "Digital Kade", file: "digital-kade" },
    { name: "Essential Marketing", file: "essential" },
    { name: "Fit Bite", file: "fit-bite" },
    { name: "Heatwave Pro", file: "heatwave-pro" },
    { name: "Hijab Boutique", file: "hijab-boutique" },
    { name: "Hilltop Recruitment", file: "hilltop-recruitment" },
    { name: "Noble Mentorship", file: "noble-mentorship" },
    { name: "Rivon", file: "rivon" },
    { name: "Skoop", file: "skoop" },
    { name: "Social Sphere", file: "social-sphere" },
    { name: "Sundelmar", file: "sundelmar" },
    { name: "Universal Kids", file: "universal-kids" },
    { name: "Vibe Web Studio", file: "vibe-web-studio" },
    { name: "S&S Traders", file: "ss-traders" },
    { name: "Sponge Global", file: "sponge-global" },
    { name: "Exim", file: "exim" },
    { name: "Halo", file: "halo" },
    { name: "Java Gap", file: "java-gap" },
] as const;

export const LOGO_COUNT = clientLogos.length;

/** The hero strip shows every client: it is how a visitor sees how many
 *  businesses we have worked with (about 300 KB of small badges in all). */
export const heroLogos = clientLogos;

/** The spinning ring on the home page has room for this many before logos touch. */
export const ringLogos = clientLogos.slice(0, 28);
