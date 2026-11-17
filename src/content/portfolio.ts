/**
 * Every project shown on /portfolio, newest first.
 *
 * This is the one list. The portfolio page renders all of it, and the home
 * page's "Our recent work" strip takes the first entries, so adding a project
 * at the top here updates both. Screenshots live in /public.
 *
 * No results figures on these entries: a figure needs a source the client has
 * agreed to, or it stays out.
 */
export const portfolioItems = [
  {
    id: 7,
    title: "Island Jerky",
    description: "Premium handcrafted beef jerky made in Sri Lanka — a bold, flavor-led store for Original and Honey Garlic Nai Miris with fast checkout and cash on delivery.",
    image: "/islandjerky.webp",
    // The screenshot's pixel size. With it, the portfolio tile takes the
    // screenshot's own shape, so the image fills the cut-corner frame with
    // nothing cropped. Without it, the tile is 39:20 and the image is shown
    // whole inside it.
    imageSize: { width: 3024, height: 1674 },
    link: "https://islandjerky.lk",
    status: "live"
  },
  {
    id: 67,
    title: "Jolly's Creamery",
    description: "Styled ice cream carts with a live host for weddings, corporate events and parties across Sri Lanka, presented through a warm, feel-good website with online event reservations and a custom admin for enquiries, bookings and the sales pipeline.",
    image: "/jollys-creamery.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://jollyscreamery.com",
    status: "live"
  },
  {
    id: 66,
    title: "Island Adventures",
    description: "Tailor-made, responsible Sri Lanka journeys for trekkers, cyclists, birders, wildlife lovers and the culturally curious, with a content-managed website that lets the team keep tours, trip updates and stories current.",
    image: "/island-adventures.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://island-aus.netlify.app/",
    status: "development"
  },
  {
    id: 65,
    title: "Dock One Solutions",
    description: "Sri Lanka's tech store for laptops, storage devices, keyboards and mice — a bold, tech-led storefront with flash deals, island-wide delivery and cash on delivery, all run from a custom admin panel.",
    image: "/dock-one-solutions.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://dockonesolutions.com",
    status: "live"
  },
  {
    id: 64,
    title: "Franley",
    description: "A Sri Lankan men's accessories brand for the modern gentleman — neckties, cufflinks and finishing pieces sold through a refined storefront with guest checkout, order tracking and a full admin panel the owner runs without touching code.",
    image: "/franley.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://franley.lk",
    status: "live"
  },
  {
    id: 63,
    title: "ARC OS POS",
    description: "Point of sale for Sri Lankan shops — the till, the stock book, the credit book, the reports and the owner's phone, in English, Sinhala and Tamil, built to keep selling when the internet or the power goes.",
    image: "/arc-os.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://www.arc-os.online",
    status: "live"
  },
  {
    id: 62,
    title: "Easy Ledger",
    description: "Accounting, tax and payroll for Sri Lankan businesses — IRD-format tax invoices, bank reconciliation, VAT, SSCL and WHT, payroll with EPF and ETF, and an AI accountant that answers from your own books in English, Sinhala or Tamil.",
    image: "/easy-ledger.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://easyledger.lk",
    status: "live"
  },
  {
    id: 70,
    title: "Royal Paradise Gems",
    description: "Rare Ceylon sapphires, padparadscha, spinel and alexandrite, hand-selected in Sri Lanka, precision cut and independently certified — presented through a refined storefront with private viewing bookings and a custom back office.",
    image: "/royal-paradise.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://royal-paradise-1.netlify.app/",
    status: "development"
  },
  {
    id: 69,
    title: "Armac Mart",
    description: "Imported chocolates, snacks, beverages and pantry favourites from a Dehiwala convenience store, brought online with ten shoppable aisles, viral product drops and islandwide delivery.",
    image: "/armac-mart.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://armac-draft2.netlify.app",
    status: "development"
  },
  {
    id: 72,
    title: "Cloud Healthcare",
    description: "A Sri Lankan pharmaceutical company bringing medicines, medical devices and cosmeceuticals from leading global manufacturers — presented through a clean corporate site with a product portfolio by therapeutic area, careers and enquiries.",
    image: "/cloud-healthcare.webp",
    imageSize: { width: 3024, height: 1674 },
    link: "https://cloud-1.netlify.app",
    status: "development"
  },
  {
    id: 71,
    title: "Victoria Lakeside",
    description: "Fully furnished contemporary villas on a private lakefront above the Victoria Reservoir in Digana, Kandy — presented through an interactive master plan of all fifteen lots, a page for every villa, a downloadable brochure and enquiries by call, WhatsApp or form.",
    image: "/regal-victoria.webp",
    imageSize: { width: 2916, height: 1614 },
    link: "https://regalvictorialakeside.com",
    status: "live"
  },
  {
    id: 60,
    title: "Fusion Hybrid Projects",
    description: "Fusion Hybrid prepares, enhances and presents residential and commercial property across Melbourne and the Mornington Peninsula, with one team managing every trade from scope to handover.",
    image: "/fusion-gybrid-projects.png",
    imageSize: { width: 3024, height: 1674 },
    link: "https://fusionhybridprojects.com.au",
    status: "live"
  },
  {
    id: 59,
    title: "Gharib Perfumes",
    description: "A world-class luxury perfume house presented through a refined, sensory-led storefront — curated designer collections, rich fragrance storytelling and a premium checkout experience built for discerning buyers.",
    image: "/gharib.png",
    imageSize: { width: 3024, height: 1674 },
    link: "https://gharibperfumes.com",
    status: "development"
  },
  {
    id: 58,
    title: "Flow State",
    description: "Flow State designs custom AI and automation systems that replace slow, manual and disconnected workflows with connected operations that run themselves — fewer handoffs, cleaner data and processes that keep moving.",
    image: "/flow-state.png",
    imageSize: { width: 3024, height: 1674 },
    link: "https://www.flowstate.lk",
    status: "live"
  },
  {
    id: 68,
    title: "Lusako",
    description: "Bottleless water purification and hydration for homes, offices and businesses across Sri Lanka — buy or rent UF and RO purifiers, find the right system in three quick questions and book installation and care online.",
    image: "/lusako.webp",
    imageSize: { width: 2952, height: 1634 },
    link: "https://drinkingwater.lk",
    status: "live"
  },
  {
    id: 57,
    title: "Enivrant",
    description: "Indulge in a curated universe of refinement — from the art of self-care and iconic fragrances to timeless pearls, luxury fashion designer selects and the serenity of fine bedlinen, all in one elevated destination.",
    image: "/enivrant.png",
    imageSize: { width: 3024, height: 1674 },
    link: "https://enivrant.com",
    status: "development"
  },
  {
    id: 56,
    title: "Makro Developers",
    description: "Thoughtfully planned residential and commercial developments built for lasting value, presented through a considered digital experience that showcases every project, its craftsmanship and the communities designed around it.",
    image: "/makro-dev.png",
    imageSize: { width: 3024, height: 1674 },
    link: "https://makrodevelopers.com",
    status: "development"
  },
  {
    id: 55,
    title: "Iris & Me",
    description: "A contemporary womenswear label brought online with an elevated e-commerce experience — considered collections, editorial product storytelling and a clean, effortless path from first browse through to checkout.",
    image: "/iris-and-me.png",
    imageSize: { width: 3024, height: 1674 },
    link: "",
    status: "development"
  },
  {
    id: 54,
    title: "MD Lanka",
    description: "Support that holds where it hurts. Orthopaedic braces and supports for knee, back, wrist and ankle — correctly sized, honestly advised and delivered island-wide across Sri Lanka.",
    image: "/md-lanka.png",
    imageSize: { width: 3024, height: 1674 },
    link: "https://medicaldeviceslanka.com",
    status: "live"
  },
  {
    id: 53,
    title: "Green Engineering Systems",
    description: "Green Engineering Systems (Pvt) Ltd is a forward-looking engineering company committed to advancing clean energy and sustainable infrastructure, delivering solutions built for long-term environmental and operational performance.",
    image: "/green-engineering-system.png",
    imageSize: { width: 3024, height: 1674 },
    link: "",
    status: "development"
  },
  {
    id: 52,
    title: "Unknown Movement",
    description: "Minimal cycling wear for riders who believe performance should look as considered as the bike beneath them — a restrained, product-led store built around fit, fabric and the quiet confidence of the kit itself.",
    image: "/unknownmovement.png",
    imageSize: { width: 3024, height: 1678 },
    link: "https://unknownmovement.store",
    status: "development"
  },
  {
    id: 51,
    title: "Range By Marz",
    description: "A drop-driven fashion label given a storefront to match — bold collection pages, clear size-and-fit guidance and a fast, mobile-first buying journey designed to turn every release into a sell-out.",
    image: "/ranbymarz.png",
    imageSize: { width: 3024, height: 1682 },
    link: "",
    status: "development"
  },
  {
    id: 50,
    title: "Mr Rider",
    description: "One shop floor with 11 aisles, fresh listings every morning, a live auction, a clearance market and coaches on four continents. You don't browse MR.RIDER — you get let in.",
    image: "/mr-rider.png",
    imageSize: { width: 3024, height: 1678 },
    link: "https://mr-rider.netlify.app",
    status: "development"
  },
  {
    id: 49,
    title: "AEC",
    description: "Your complete journey to global education — an overseas study consultancy guiding students from course selection and university applications through visas, funding and departure, with support at every step.",
    image: "/AEC.png",
    imageSize: { width: 3024, height: 1674 },
    link: "",
    status: "development"
  },
  {
    id: 61,
    title: "Pey and Cey World Wide",
    description: "Your partner in global commodity trade — supplying high-quality sugar, coffee, tea, spices, corn and soybeans from trusted origins in Brazil and Sri Lanka to businesses that value consistency, quality and reliable supply.",
    image: "/pey-cey.png",
    imageSize: { width: 3024, height: 1576 },
    link: "",
    status: "development"
  },
  {
    id: 48,
    title: "Tech Nurture",
    description: "Expert repair, servicing and maintenance for air conditioners, refrigerators, inline water purifiers and bottle water dispensers, keeping homes and businesses across Sri Lanka cool, fresh and running.",
    image: "/tech-nurture.png",
    imageSize: { width: 3024, height: 1530 },
    link: "https://technurture.lk",
    status: "live"
  },
  {
    id: 47,
    title: "Ceylon Gem Maison",
    description: "Ceylon Gem Maison exports world-class, ethically sourced gemstones from Sri Lanka to global markets with strict certification, complete traceability, and uncompromising international quality standards.",
    image: "/ceylongem.png",
    imageSize: { width: 3024, height: 1670 },
    link: "https://www.ceylongemmaison.com",
    status: "live"
  },
  {
    id: 46,
    title: "Attendly",
    description: "Host events. Sell tickets. Scan in. Attendly turns any event into a seamless experience — attendees pick numbered seats on a live map and walk in with a personal QR ticket. Organizers watch it all happen from one dashboard.",
    image: "/attendly.webp",
    imageSize: { width: 3024, height: 1672 },
    link: "https://www.attendly.buzz",
    status: "live"
  },
  {
    id: 45,
    title: "Imperial Life Sciences Pvt Ltd",
    description: "The website showcases Imperial Life Sciences’ healthcare distribution, medical solutions, and supply chain services through a professional, reliable, and modern digital experience built to strengthen trust and brand presence.",
    image: "/imperial-life-sciences-pvt-ltd.webp",
    imageSize: { width: 3024, height: 1668 },
    link: "https://www.imperiallifesciences.com",
    status: "live"
  },
  {
    id: 44,
    title: "Inventis Pharma",
    description: "The website presents Inventis Pharma’s smart biomedical solutions, medical devices, rehabilitative equipment, and surgical consumables through a strong, professional, and healthcare-focused digital experience.",
    image: "/inventis-pharma.webp",
    imageSize: { width: 3024, height: 1668 },
    link: "https://www.inventispharma.org",
    status: "live"
  },
  {
    id: 43,
    title: "iConn Health Care",
    description: "The website presents iConn Health Care’s diagnostic and healthcare solutions through a clean, modern, and professional digital experience built to highlight quality, accuracy, and trusted medical support.",
    image: "/iconn-health-care.webp",
    imageSize: { width: 3024, height: 1668 },
    link: "https://www.iconnhealthcare.org",
    status: "live"
  },
  {
    id: 42,
    title: "YARI",
    description: "The website presents YARI’s digital automation, custom storefront, web application, and logistics-focused solutions through a futuristic, premium, and high-performance digital experience.",
    image: "/yari.webp",
    imageSize: { width: 3024, height: 1672 },
    link: "https://www.yariagency.com",
    status: "live"
  },
  {
    id: 41,
    title: "PluggedIn",
    description: "The website showcases PluggedIn’s tech, electronics, lifestyle, and personal gadget offerings through a modern, stylish, and e-commerce-ready digital experience built for today’s connected customers.",
    image: "/plugged-new.png",
    imageSize: { width: 3022, height: 1524 },
    link: "https://www.pluggedin.lk",
    status: "live"
  },
  {
    id: 40,
    title: "TriMed Pharma",
    description: "The website presents TriMed Pharma’s healthcare and pharmaceutical solutions through a clean, professional, and trust-focused digital experience built to highlight their mission of promoting, protecting, and improving health.",
    image: "/trimed-pharma.webp",
    imageSize: { width: 3024, height: 1672 },
    link: "https://www.trimedpharma.com",
    status: "live"
  },
  {
    id: 39,
    title: "Zenith Global Pvt Ltd",
    description: "The website showcases Zenith Global’s clinical engineering, healthcare technology, medical equipment, and critical care solutions through a clean, professional, and reliability-driven digital experience.",
    image: "/zenith-global.webp",
    imageSize: { width: 3024, height: 1672 },
    link: "https://www.zenithglobal.biz",
    status: "live"
  },
  {
    id: 38,
    title: "Lavendra Beauty Lounge",
    description: "Dive into our world of care at our renowned beauty salon. Our expert team is dedicated to providing exceptional, personalized treatments using the latest innovations in beauty services.",
    image: "/lavender.webp",
    imageSize: { width: 3024, height: 1670 },
    link: "https://www.lavendrabeauty.lk",
    status: "live"
  },
  {
    id: 37,
    title: "Advitec International",
    description: "Based in Colombo, Advitec International is a premier distributor of biomedical devices, representing top-tier manufacturers to make quality healthcare accessible across Sri Lanka.",
    image: "/advitec.webp",
    imageSize: { width: 3024, height: 1670 },
    link: "https://advitecint.com",
    status: "live"
  },
  {
    id: 36,
    title: "Portland Flooring",
    description: "Portland Flooring delivers elegant, durable, and sustainable flooring solutions. We bring your vision to life with materials that stand the test of time, blending aesthetic beauty with uncompromising quality.",
    image: "/portlands.webp",
    imageSize: { width: 3725, height: 1850 },
    link: "https://www.portlands.com.au/",
    status: "live"
  },
  {
    id: 35,
    title: "Ceylon Tea Land",
    description: "A premium B2B export platform for Ceylon Tea Land (Pvt) Ltd, enabling global buyers to source 100% pure, hand-picked Ceylon tea directly from Sri Lanka's finest estates with export-grade consistency.",
    image: "/ceylon-tea-land.webp",
    imageSize: { width: 3725, height: 1850 },
    link: "https://www.ceylontealand.com/",
    status: "live"
  },
  {
    id: 34,
    title: "Java Global Nexus Platform",
    description: "A premier global delivery and execution hub based in Dubai, offering standardized processes, centralized governance, scalable workforce solutions, and secure digital infrastructure.",
    image: "/java global nexus platform.jpeg",
    imageSize: { width: 3692, height: 1800 },
    link: "https://www.javagnp.ae",
    status: "live"
  },
  {
    id: 32,
    title: "Inspira Worldwide",
    description: "Sri Lanka's definitive pharmaceutical distribution outsourcing partner. From strategic brand building to risk-minimized logistics, Inspira connects domestic manufacturers to patients with unmatched speed, flexibility, and absolute reliability.",
    image: "/inspira-wordwide.png",
    imageSize: { width: 3725, height: 1850 },
    link: "https://inspiraworldwide.com",
    status: "live"
  },
  {
    id: 31,
    title: "Agenly",
    description: "An innovative SaaS platform that empowers businesses to build, train, and deploy custom AI agents in minutes. Features seamless integration with Next.js, WordPress, and popular social channels without requiring any coding expertise.",
    image: "/agenly.online.webp",
    imageSize: { width: 3705, height: 1830 },
    link: "https://www.agenly.online/",
    status: "live"
  },
  {
    id: 33,
    title: "TOS Lanka",
    description: "Sri Lanka's pioneer Electronic Manufacturing Services (EMS) provider and a BOI-approved subsidiary of Tosslec Company Limited, Japan. Delivering end-to-end high-tech assembly for global clients across automotive, biomedical, telecom and IoT.",
    image: "/tos-lanka.png",
    imageSize: { width: 3692, height: 1856 },
    link: "https://www.toslanka.com",
    status: "live"
  },
  {
    id: 30,
    title: "Mulberry Living",
    description: "A premium Next.js platform and tailored booking system developed for a tranquil boutique accommodation in Negombo. Engineered for a seamless user experience to handle property reservations smoothly.",
    image: "/mulberry-living.webp",
    imageSize: { width: 3675, height: 1842 },
    link: "https://www.mulberry-living.com/",
    status: "live"
  },
  {
    id: 29,
    title: "Java Global Access Platform LLC",
    description: "Global Delivery for Tech & Professional Services. Structured professional services and managed operational support for overseas clients. We built a custom website, an internal CRM system, and an AI agent for customer support.",
    image: "/javagap.webp",
    imageSize: { width: 3707, height: 1829 },
    link: "https://javagap.ae/",
    status: "live"
  },
  {
    id: 28,
    title: "Sponge Global (Pvt) Ltd",
    description: "We deliver innovative learning and development solutions, including customer eLearning, Immersive training, and talent development strategies.",
    image: "/sponge-portfolio.webp",
    imageSize: { width: 3725, height: 1850 },
    link: "https://www.spongeglobal.com/",
    status: "live"
  },
  {
    id: 27,
    title: "Delft Tours & Travel (Pvt) Ltd",
    description: "A premier Sri Lankan travel agency offering immersive, custom-tailored tours across the island. Discover the vibrant culture, pristine beaches, and exotic wildlife with expert local guides.",
    image: "/delft-tours.webp",
    imageSize: { width: 800, height: 397 },
    link: "https://www.delfttours.com/",
    status: "live"
  },
  {
    id: 26,
    title: "Secretaries Consultant Services (Pvt) Ltd",
    description: "Secretaries Consultant Services (Pvt) Ltd provides complete end-to-end support spanning the entire corporate lifecycle.",
    image: "/secertery-services.webp",
    imageSize: { width: 1600, height: 756 },
    link: "https://consultantservices.lk/",
    status: "live"
  },
  {
    id: 24,
    title: "Halo 360",
    description: "Digital agency focused on strategic partnerships for marketing and growth.",
    image: "/halo.webp",
    imageSize: { width: 1600, height: 783 },
    link: "https://halo360.online/",
    status: "live"
  },
  {
    id: 25,
    title: "EXIM Corporation",
    description: "Specializes in industrial manufacturing and partner networks in Sri Lanka.",
    image: "/exim.webp",
    imageSize: { width: 1600, height: 795 },
    link: "https://eximcpl.com",
    status: "live"
  },
  {
    id: 20,
    title: "Core Craft",
    description: "Premium web design and development agency offering custom website builds, UI/UX design, and brand identity solutions.",
    image: "/core-craft-screenshot.webp",
    imageSize: { width: 1600, height: 795 },
    link: "https://www.corecraft.agency",
    status: "live"
  },
  {
    id: 22,
    title: "Ontriq",
    description: "Sri Lanka's background verification and HR solutions provider offering 7-day turnaround for employment history, education, and criminal record checks, along with recruitment, payroll management, and business formation services.",
    image: "/Ontriq-screenshot.webp",
    imageSize: { width: 1600, height: 795 },
    link: "https://www.ontriq.com",
    status: "live"
  },
  {
    id: 21,
    title: "Orkestrate",
    description: "AI-powered marketing orchestration platform for DTC brands that automates customer segmentation, campaign creation, and revenue optimization by analyzing order data, browsing behavior, and campaign performance across integrated channels.",
    image: "/orkestrate-screenshot.webp",
    imageSize: { width: 1600, height: 795 },
    link: "https://www.orkestrate.com",
    status: "live"
  },
  {
    id: 23,
    title: "KeysPlease",
    description: "Real estate marketplace for residential property sales in Sri Lanka featuring premium homes and investment properties with listings and purchase facilitation services.",
    image: "/KeysPlease-Screenshot.webp",
    imageSize: { width: 1600, height: 795 },
    link: "https://www.keysplease.shop",
    status: "live"
  },
  {
    id: 1,
    title: "DEK Studio",
    description: "Built a trust-forward MEP site that showcases end-to-end capability with clear project pathways.",
    image: "/dek-studio-screenshot.webp",
    imageSize: { width: 1600, height: 795 },
    link: "https://www.dek-studio.com/",
    status: "live"
  },
  {
    id: 2,
    title: "Vibe Web Studio",
    description: "Sales-first agency site with crisp offers, social proof, and conversion-optimized packages.",
    image: "/vibewebstudio.webp",
    imageSize: { width: 1600, height: 808 },
    link: "https://vibewebstudio.com",
    status: "live"
  },
  {
    id: 3,
    title: "YBO Agency",
    description: "'Creative back office' positioning with modular service blocks and fast quote flows.",
    image: "/yboagency.webp",
    imageSize: { width: 1600, height: 799 },
    link: "https://yboagency.com",
    status: "live"
  },
  {
    id: 4,
    title: "Car Rush",
    description: "Marketplace UX for verified vehicles with transparent pricing and smart filters.",
    image: "/carrush.webp",
    imageSize: { width: 1600, height: 804 },
    link: "https://www.carrush.lk/",
    status: "live"
  },
  {
    id: 5,
    title: "Car Arena Ceylon",
    description: "Dealer site emphasizing warranties, OEM upgrades, and nationwide support.",
    image: "/cararenaceylon.webp",
    imageSize: { width: 1600, height: 794 },
    link: "https://www.cararenaceylon.com/",
    status: "live"
  },
  {
    id: 6,
    title: "Hilltop Recruitment",
    description: "Heritage-led global recruitment with outcome-driven sector pages.",
    image: "/hiltopglobal.webp",
    imageSize: { width: 1600, height: 808 },
    link: "https://hiltopglobal.com/",
    status: "live"
  },
  {
    id: 8,
    title: "Digital Kade",
    description: "Scalable catalogue UX; speed, filters, and useful search.",
    image: "/digitalkade.webp",
    imageSize: { width: 3650, height: 1850 },
    link: "https://digitalkade.lk/",
    status: "live"
  },
  {
    id: 9,
    title: "Jacob Day Coaching",
    description: "High-accountability coaching with risk-reversal guarantee.",
    image: "/jacobday.webp",
    imageSize: { width: 3645, height: 1810 },
    link: "https://www.jacobday.co/",
    status: "live"
  },
  {
    id: 10,
    title: "Mouttaki Coaching",
    description: "8-week transformation program with friction-free onboarding.",
    image: "/mouttakicoaching.webp",
    imageSize: { width: 3642, height: 1840 },
    link: "https://mouttakicoaching.com/",
    status: "live"
  },
  {
    id: 11,
    title: "ARC AI CRM System",
    description: "Custom-built CRM system with AI-powered features for streamlined client management and automation.",
    image: "/arc crm system.webp",
    imageSize: { width: 3652, height: 1845 },
    link: "#",
    status: "live"
  },
  {
    id: 12,
    title: "Fit Bite",
    description: "Handcrafted protein-cookie brand with Ceylon flavors and custom protein (10–50 g).",
    image: "/fitbite.webp",
    imageSize: { width: 1600, height: 810 },
    link: "https://www.fitbite.shop/",
    status: "development"
  },
  {
    id: 14,
    title: "Inlaid Jewelry",
    description: "Three-generation family jeweler blending Tamil tradition with modern elegance.",
    image: "/cosmic-dusk.webp",
    imageSize: { width: 1600, height: 800 },
    link: "https://cosmic-dusk-c32013.netlify.app/",
    status: "development"
  },
  {
    id: 15,
    title: "Hijab Boutique",
    description: "Premium hijabs & modest fashion with streamlined PDPs and 30-day free returns.",
    image: "/hijabboutiquestore.webp",
    imageSize: { width: 1600, height: 804 },
    link: "https://hijabboutiquestore.netlify.app/",
    status: "development"
  },
  {
    id: 16,
    title: "Joe Fitness",
    description: "Lead-magnet microsite with a tight value ladder.",
    image: "/mellifluous-jalebi.webp",
    imageSize: { width: 3615, height: 1825 },
    link: "https://mellifluous-jalebi-dd6aef.netlify.app/",
    status: "development"
  },
  {
    id: 17,
    title: "Essential Marketing",
    description: "Studio site turning briefs into bookable packages.",
    image: "/essentialmarketing.webp",
    imageSize: { width: 3632, height: 1837 },
    link: "https://essentialmarketing.netlify.app",
    status: "development"
  },
  {
    id: 18,
    title: "Ceylon Motors",
    description: "Car discovery hub for buy/rent with type & price filters.",
    image: "/ceylonmotors.webp",
    imageSize: { width: 1600, height: 806 },
    link: "https://ceylonmotors.netlify.app",
    status: "development"
  },
  {
    id: 19,
    title: "Bakery website",
    description: "Modern AI-powered portfolio showcase with advanced animations.",
    image: "/prismatic-mooncake.webp",
    imageSize: { width: 1600, height: 760 },
    link: "https://prismatic-mooncake-640ca9.netlify.app",
    status: "development"
  },
];

export type PortfolioItem = (typeof portfolioItems)[number];

/** The newest projects, in the order they appear on the portfolio page. */
export function latestProjects(count: number): PortfolioItem[] {
  return portfolioItems.slice(0, count);
}
