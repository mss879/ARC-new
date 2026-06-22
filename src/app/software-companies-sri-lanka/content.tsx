import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Clock,
    CheckCircle2,
    ChevronRight,
    Globe,
    Users,
    TrendingUp,
    Shield,
    Cpu,
    Building2,
    Rocket,
    Award,
    BarChart3,
    BookOpen,
    Layers,
    Briefcase,
    MapPin,
    ExternalLink,
    HelpCircle,
    Star,
    DollarSign,
    Scale,
    Landmark,
    GraduationCap,
    CircleDot,
    Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { FAQItem, ScrollProgressBar, ActiveTOC, SocialShareButtons, BackToTop, InteractiveComparisonTable } from "./ClientComponents";

/* ── Data ─────────────────────────────────────────────────────── */

const tocItems = [
    { id: "methodology", label: "How We Evaluated These Companies" },
    { id: "industry-overview", label: "Sri Lanka's Software Industry in 2026" },
    { id: "what-to-look-for", label: "What to Look for in a Software Partner" },
    { id: "rankings", label: "The 21 Leading Firms by Category" },
    { id: "comparison-table", label: "At-a-Glance Comparison" },
    { id: "pricing", label: "How Much Does Development Cost?" },
    { id: "sri-lanka-vs-india", label: "Sri Lanka vs India vs Philippines" },
    { id: "tech-ecosystem", label: "Tech Hubs & Ecosystem" },
    { id: "why-outsource", label: "Why Outsource Software Development to Sri Lanka?" },
    { id: "industry-voices", label: "Industry Voices & Data Points" },
    { id: "proven-results", label: "Proven Results from This Market" },
    { id: "faq", label: "Frequently Asked Questions" },
];

interface Company {
    name: string;
    tagline: string;
    founded: string;
    hq: string;
    size: string;
    specialty: string;
    description: string;
    services: string[];
    bestFor: string;
    website?: string;
    rating?: string;
    ratingSource?: string;
    ratingUrl?: string;
    notableClients?: string;
    techStack?: string;
    projectExample?: string;
}

const companies: Company[] = [
    {
        name: "WSO2",
        tagline: "Open-Source Integration & API Management",
        founded: "2005",
        hq: "Colombo (Global HQ: Santa Clara, CA)",
        size: "1,000+",
        specialty: "Enterprise Middleware",
        description:
            "One of Sri Lanka's most internationally recognised technology companies, WSO2 has become the global standard for open-source API management, identity and access management (IAM), and enterprise integration. Their products power critical infrastructure for hundreds of enterprise clients worldwide, including major banks, healthcare providers, and government agencies. WSO2 is a CNCF member and regularly contributes to the open-source community. Their Ballerina programming language was designed specifically for cloud-native integration. WSO2 Choreo, their internal developer platform, represents their latest push into the API-first development space.",
        services: ["API Management (Choreo)", "Identity Server", "Enterprise Integration", "Ballerina Language"],
        bestFor: "Large enterprises needing robust API management and identity solutions.",
        rating: "4.5",
        ratingSource: "Gartner Peer Insights",
        ratingUrl: "https://www.gartner.com/reviews/market/full-life-cycle-api-management/vendor/wso2",
        notableClients: "Global banks, healthcare systems, government agencies across 70+ countries",
        techStack: "Java, Ballerina, Kubernetes, Microservices, OAuth/OIDC",
        projectExample: "Provided the core API management infrastructure for a major European bank, securely processing over 10 billion API calls monthly while ensuring strict PSD2 compliance.",
    },
    {
        name: "Virtusa",
        tagline: "Global Digital Engineering & IT Consulting",
        founded: "1996",
        hq: "Colombo (Global HQ: Southborough, MA)",
        size: "30,000+",
        specialty: "Enterprise Digital Transformation",
        description:
            "Virtusa is one of the largest IT services companies with roots in Sri Lanka, operating a massive delivery centre in Colombo employing thousands of engineers. They serve Fortune 500 clients across banking, financial services, insurance (BFSI), healthcare, and telecommunications. Their capabilities span legacy modernisation, cloud transformation, data analytics, and digital engineering. Virtusa was acquired by Baring Private Equity Asia in 2021 for approximately $2 billion, underscoring the value of Sri Lankan tech talent on the global stage. They maintain partnerships with major cloud providers and enterprise platforms including AWS, Azure, Salesforce, and Pega.",
        services: ["IT Consulting", "Digital Engineering", "Cloud Transformation", "Data & Analytics"],
        bestFor: "Multinational corporations requiring large-scale digital transformation.",
        rating: "4.2",
        ratingSource: "Glassdoor",
        ratingUrl: "https://www.glassdoor.com/Overview/Working-at-Virtusa-EI_IE8534.11,18.htm",
        notableClients: "Fortune 500 companies in BFSI, healthcare, telecommunications",
        techStack: "Java, .NET, Salesforce, Pega, AWS, Azure, Spark, Hadoop",
        projectExample: "Executed a massive legacy-to-cloud migration for a Fortune 500 healthcare provider, migrating 400+ applications to AWS and enabling real-time patient data analytics.",
    },
    {
        name: "99x",
        tagline: "Product Engineering for Global Markets",
        founded: "2004",
        hq: "Colombo (Parent: Oslo, Norway)",
        size: "500–1,000",
        specialty: "Product Engineering",
        description:
            "99x has built a strong reputation as a product engineering company, primarily serving Scandinavian and European clients. They focus on building long-term partnerships rather than project-based engagements, embedding dedicated teams that function as extensions of their client's internal engineering departments. 99x was recognised as a Great Place to Work® multiple consecutive years and is known for investing heavily in employee development and R&D. Their technical expertise spans full-stack development, DevOps, QA, and emerging technologies. They operate under a \"co-creation\" model where their teams share ownership of product outcomes rather than simply executing specifications.",
        services: ["Custom Software Development", "Product Engineering", "QA & Testing", "DevOps"],
        bestFor: "European companies looking for reliable, long-term offshore engineering teams.",
        rating: "4.7",
        ratingSource: "Great Place to Work®",
        ratingUrl: "https://www.greatplacetowork.com/certified-company/7048538",
        notableClients: "Scandinavian SaaS companies, European enterprises",
        techStack: "React, Angular, Node.js, .NET, Azure, AWS, Docker, Kubernetes",
        projectExample: "Acted as the extended engineering arm for a Norwegian SaaS scale-up, accelerating their product roadmap and delivering a new enterprise module 3 months ahead of schedule.",
    },
    {
        name: "IFS",
        tagline: "Enterprise ERP, EAM & Field Service Management",
        founded: "1983",
        hq: "Colombo (Global HQ: LinkÃ¶ping, Sweden)",
        size: "6,000+ (global)",
        specialty: "Enterprise Software (ERP)",
        description:
            "IFS maintains one of its largest R&D centres in Sri Lanka, developing top-tier enterprise resource planning (ERP), enterprise asset management (EAM), and field service management (FSM) solutions. IFS Cloud, their flagship platform, serves heavy industries including aerospace, defence, energy, construction, and manufacturing. Their Sri Lankan team is integral to global product development, contributing to core platform features used by clients across 60+ countries. IFS has consistently been named a leader in the Gartner Magic Quadrant for Field Service Management and EAM.",
        services: ["ERP (IFS Cloud)", "Enterprise Asset Management", "Field Service Management", "Industrial IoT"],
        bestFor: "Heavy industries requiring strict ERP and asset management systems.",
        rating: "4.3",
        ratingSource: "Gartner Magic Quadrant (Leader)",
        ratingUrl: "https://www.gartner.com/reviews/market/field-service-management/vendor/ifs",
        notableClients: "Aerospace, defence, energy, construction companies globally",
        techStack: "PL/SQL, .NET, C++, REST APIs, Azure, Industrial IoT protocols",
        projectExample: "Implemented a comprehensive Field Service Management system for a global heavy equipment manufacturer, integrating IoT sensor data to enable predictive maintenance.",
    },
    {
        name: "Sysco LABS",
        tagline: "Innovation Centre for Global Supply Chain",
        founded: "2013",
        hq: "Colombo",
        size: "1,500+",
        specialty: "Supply Chain & Retail Technology",
        description:
            "Sysco LABS is the captive technology innovation centre for Sysco Corporation, the world's largest foodservice distribution company (Fortune 51 on the 2026 Fortune 500 list, with $82 billion in annual revenue). Operating out of Colombo, their engineering teams build the software that powers Sysco's global supply chain managing $70+ billion in annual revenue, logistics, and e-commerce platforms. While they don't accept external clients, Sysco LABS is an important indicator of the calibre of engineering talent in Sri Lanka — they compete with Silicon Valley for talent and offer some of the most competitive compensation packages on the island.",
        services: ["Supply Chain Software", "E-commerce Platforms", "Data Engineering", "Enterprise Architecture"],
        bestFor: "Captive centre — demonstrates Sri Lanka's enterprise engineering capability.",
        notableClients: "Sysco Corporation (Fortune 51)",
        techStack: "Java, Kotlin, React, Python, Kafka, Kubernetes, GCP, ML/AI pipelines",
        projectExample: "Developed the core logistics intelligence platform that routes thousands of Sysco delivery trucks daily, optimising fuel consumption and delivery windows.",
    },
    {
        name: "Calcey Technologies",
        tagline: "Boutique Software Engineering for Startups & Enterprises",
        founded: "2013",
        hq: "Colombo (TRACE Expert City)",
        size: "200–500",
        specialty: "Full-Stack Product Development",
        description:
            "Located at TRACE Expert City in Colombo, Calcey Technologies is a boutique software engineering firm that partners with startups and growth-stage companies globally to build web and mobile applications. They are known for their strong design sensibility, agile delivery processes, and ability to take products from concept to market quickly. Calcey has worked with clients from Silicon Valley, Australia, Europe, and the Middle East across industries including fintech, healthtech, and proptech. They are a Clutch Global Leader with consistently high client satisfaction scores.",
        services: ["Mobile App Development", "Web Applications", "UI/UX Design", "Cloud Infrastructure"],
        bestFor: "Startups and SMEs looking for agile, design-focused MVP development.",
        rating: "4.9",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/calcey-technologies",
        notableClients: "Silicon Valley startups, Australian fintechs, European proptechs",
        techStack: "React Native, Flutter, React, Node.js, AWS, Firebase, Python",
        projectExample: "Built the complete MVP and v1.0 architecture for a Y-Combinator backed fintech startup, helping them secure a successful Series A funding round.",
    },
    {
        name: "Arimac",
        tagline: "Immersive Technology & Digital Innovation",
        founded: "2013",
        hq: "Colombo",
        size: "200–500",
        specialty: "AR/VR, Gamification & Creative Tech",
        description:
            "Arimac stands out in the Sri Lankan tech landscape for its focus on immersive and experiential technologies. They specialise in augmented reality (AR), virtual reality (VR), gamification, and creative digital solutions. Beyond immersive tech, Arimac also delivers custom software development, mobile apps, and enterprise solutions. Their work has been recognised internationally — including at global competitions and startup showcases — and they've partnered with brands in tourism, education, and entertainment to create engaging digital experiences. Founded by Chamira Fernando, Arimac represents the creative and innovative edge of Sri Lanka's software sector.",
        services: ["AR/VR Development", "Gamification", "Mobile Apps", "Enterprise Software"],
        bestFor: "Brands wanting immersive, experiential digital products.",
        rating: "4.6",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/arimac",
        notableClients: "Tourism boards, educational institutions, entertainment brands",
        techStack: "Unity, Unreal Engine, ARKit, ARCore, React, Node.js, Swift, Kotlin",
        projectExample: "Created a highly interactive AR-driven cultural heritage app for a national tourism board, achieving over 500,000 downloads in the first month.",
    },
    {
        name: "Rootcode",
        tagline: "Digital Product Engineering Hub",
        founded: "2016",
        hq: "Colombo",
        size: "100–300",
        specialty: "Product Engineering & Cloud-Native Development",
        description:
            "Rootcode has grown rapidly as a specialised digital product engineering company. They focus on building scalable, cloud-native applications using modern technology stacks and are known for their engineering-first culture. Their team works with startups, scale-ups, and enterprises to build products from scratch or modernise legacy systems. Rootcode places a strong emphasis on DevOps, continuous delivery practices, and infrastructure-as-code. Their rapid growth and focus on modern architectures make them representative of the new generation of Sri Lankan software companies.",
        services: ["Product Engineering", "Cloud-Native Development", "DevOps & CI/CD", "Data Engineering"],
        bestFor: "Startups and scale-ups building cloud-native products.",
        rating: "4.8",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/rootcode-labs",
        notableClients: "International startups, SaaS scale-ups",
        techStack: "React, Next.js, Node.js, Go, AWS, Terraform, Docker, Kubernetes",
        projectExample: "Re-architected a monolithic application into a microservices architecture for a European logistics scale-up, improving deployment frequency by 400%.",
    },
    {
        name: "Surge Global",
        tagline: "Software Development + Digital Marketing",
        founded: "2014",
        hq: "Colombo",
        size: "100–300",
        specialty: "Full-Service Digital Agency",
        description:
            "Surge Global occupies an interesting niche by combining custom software development with digital marketing expertise. They can build your product and then help you market it — a combination that few pure-play software companies offer. Their development team handles web and mobile applications, while their marketing division provides data-driven campaigns, performance marketing, SEO, and analytics. Surge serves clients across Australia, USA, UK, and the MENA region and has won multiple industry awards for their integrated approach.",
        services: ["Web & Mobile Development", "Digital Marketing & SEO", "Data Analytics", "E-commerce Solutions"],
        bestFor: "Businesses needing both software development and marketing execution.",
        rating: "4.7",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/surge-global",
        notableClients: "Australian e-commerce brands, UK digital businesses",
        techStack: "React, Angular, Laravel, Node.js, Python, Google Analytics, AWS",
        projectExample: "Developed a custom e-commerce platform integrated directly with a predictive marketing engine, resulting in a 35% increase in customer lifetime value.",
    },
    {
        name: "Mitra Innovation",
        tagline: "Digital Advancement & Cloud Engineering",
        founded: "2014",
        hq: "Colombo & London, UK",
        size: "100–300",
        specialty: "Cloud Migration & Enterprise Solutions",
        description:
            "Mitra Innovation specialises in helping enterprises adopt modern cloud architectures, particularly on AWS. With offices in both Sri Lanka and the UK, they bridge the gap between offshore development costs and Western enterprise requirements. Mitra is an AWS Advanced Consulting Partner with multiple AWS competencies and has built deep expertise in product incubation — helping enterprises turn internal ideas into standalone software products. Their engagements tend to be long-term, often evolving into managed services relationships that cover ongoing platform maintenance and optimisation.",
        services: ["Cloud Migration (AWS)", "Product Incubation", "Enterprise Applications", "Managed Services"],
        bestFor: "Enterprises pursuing cloud-first strategies and AWS adoption.",
        rating: "4.6",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/mitra-innovation",
        notableClients: "UK enterprises, regional AWS migration projects",
        techStack: "AWS (Lambda, ECS, S3, DynamoDB), Java, Python, React, Terraform",
        projectExample: "Incubated a completely new digital spin-off for a legacy UK insurance provider, launching the new platform entirely on AWS serverless infrastructure in 6 months.",
    },
    {
        name: "Creative Software",
        tagline: "Dedicated Teams & Staff Augmentation",
        founded: "1999",
        hq: "Colombo",
        size: "200–500",
        specialty: "Offshore Development Teams",
        description:
            "With over two and a half decades of experience, Creative Software is one of the pioneering IT outsourcing companies in Sri Lanka. They specialise in providing dedicated, long-term software development teams to global clients. Rather than project-based work, their model centres on embedding engineers within client organisations for extended periods — often years. This makes them a reliable partner for companies needing to scale their engineering teams without the overhead of direct recruitment in high-cost markets. As one of the oldest software companies in Sri Lanka, they bring unmatched institutional knowledge about operating successful offshore teams.",
        services: ["Dedicated Development Teams", "Staff Augmentation", "Enterprise IT", "Legacy Modernisation"],
        bestFor: "Companies needing long-term, dedicated offshore engineering teams.",
        notableClients: "Long-term enterprise clients across Europe and North America",
        techStack: "Java, .NET, PHP, React, Angular, Mobile (iOS/Android)",
        projectExample: "Embedded a dedicated team of 40+ engineers with a Swedish enterprise software vendor for over 8 years, functioning seamlessly as their core R&D department.",
    },
    {
        name: "hSenid",
        tagline: "HR Technology & Enterprise Software",
        founded: "1997",
        hq: "Colombo",
        size: "500–1,000",
        specialty: "Human Resource Management Systems",
        description:
            "hSenid is one of Sri Lanka's oldest and most established technology firms, with deep expertise in human resource management systems (HRMS). Their flagship product, hSenid HRM, is deployed by organisations across South Asia, Southeast Asia, and Africa — serving millions of employees through their platform. Beyond HR tech, hSenid operates in mobile technology and has been a significant contributor to Sri Lanka's software export growth since the late 1990s. They represent the stability and maturity of the Sri Lankan software industry, with nearly three decades of continuous operation.",
        services: ["HRM Software", "Payroll Systems", "Mobile Solutions", "Enterprise Applications"],
        bestFor: "Organisations looking for proven HRMS solutions in emerging markets.",
        notableClients: "Telcos, banks, and enterprises across South Asia and Africa",
        techStack: "Java, Spring Boot, Angular, MySQL, PostgreSQL, AWS",
        projectExample: "Deployed an enterprise HRMS managing payroll, performance, and talent acquisition for a massive regional telecom provider with over 15,000 employees.",
    },
    {
        name: "Addix",
        tagline: "Custom Application Development with Source Code Ownership",
        founded: "2018",
        hq: "Colombo",
        size: "50–100",
        specialty: "Custom Web & Mobile Applications",
        description:
            "Addix has differentiated itself by emphasising source code ownership and transparent, client-first engagement models. They build custom web and mobile applications with a focus on agile delivery and clear communication. Their \"humanised\" service approach means clients work directly with senior engineers rather than being routed through layers of project management. Addix has built a strong online presence and is frequently cited in directories like Clutch, GoodFirms, and TheManifest as a top-rated Sri Lankan software company, particularly for mid-market and SME clients.",
        services: ["Custom Web Apps", "Mobile Development", "UI/UX Design", "API Development"],
        bestFor: "SMEs wanting hands-on, agile development with full code ownership.",
        rating: "4.9",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/addix",
        notableClients: "SMEs and startups globally (USA, UK, Australia, MENA)",
        techStack: "React, Next.js, React Native, Node.js, Python, AWS, Firebase",
        projectExample: "Delivered a fully custom CRM and operations portal for an Australian logistics SME, giving the founders 100% IP ownership upon project completion.",
    },
    {
        name: "CodeGen International",
        tagline: "Travel Technology & Enterprise Solutions",
        founded: "1999",
        hq: "Colombo",
        size: "500–1,000",
        specialty: "Travel Tech & Leisure Industry Software",
        description:
            "CodeGen International is a pioneer in travel technology software originating from Sri Lanka. Their flagship products, including TravelBox™ and SiTours, are used by some of the world's largest travel and leisure companies — handling complex booking engines, inventory management, and distribution systems for tour operators and travel agencies globally. CodeGen has expanded into other verticals including education technology with their CodeGen Edu platform. They combine deep domain expertise in the travel industry with enterprise software engineering capabilities accrued over 25+ years of operation.",
        services: ["Travel Booking Engines", "Tour Operator Software", "Enterprise Applications", "Education Technology"],
        bestFor: "Travel and leisure companies needing specialised booking and distribution platforms.",
        notableClients: "Major international tour operators, travel agencies, and hospitality groups",
        techStack: "Java, Spring, React, PostgreSQL, Elasticsearch, AWS, Microservices",
        projectExample: "Implemented their proprietary TravelBox platform for a major European airline's holiday division, managing dynamic packaging for millions of holiday variations.",
    },
    {
        name: "Zone24x7",
        tagline: "R&D and Advanced Technology Solutions",
        founded: "2004",
        hq: "Colombo (Global HQ: San Jose, CA)",
        size: "200–500",
        specialty: "R&D Engineering & Retail Technology",
        description:
            "Zone24x7 operates as a technology R&D and engineering services company with a major talent hub in Colombo. Co-founded by Llavan Fernando and Saw-Chin Fernando, the company specialises in end-to-end technology consulting that spans both hardware and software solutions — a rare combination in the Sri Lankan market. Their engineering teams work on advanced projects including computer vision, robotics, IoT, and retail automation for major international clients. Zone24x7 is frequently cited as one of the most technically sophisticated R&D centres operating out of Sri Lanka.",
        services: ["R&D Engineering", "Computer Vision & AI", "IoT Solutions", "Retail Technology"],
        bestFor: "Companies requiring advanced R&D engineering with hardware-software integration.",
        notableClients: "Major US retailers, global technology companies",
        techStack: "Python, C++, Java, TensorFlow, ROS, AWS, IoT protocols, React",
        projectExample: "Engineered an autonomous inventory-scanning robot used by a major US department store chain, combining edge computer vision with cloud analytics.",
    },
    {
        name: "Fortude",
        tagline: "Enterprise Digital Services & ERP Implementation",
        founded: "2012",
        hq: "Colombo (offices in US, UK, Sweden, Singapore, Australia)",
        size: "500–1,000",
        specialty: "Business Intelligence & ERP",
        description:
            "Fortude is a global enterprise and digital services company headquartered in Colombo with offices across eight countries. They specialise in end-to-end ERP implementations — particularly as a certified Infor partner — alongside data and analytics, automation (UiPath partnership), cloud services, and digital advisory. Their industry focus spans apparel and manufacturing, food and beverage, and healthcare — verticals where Sri Lanka has significant domestic expertise. Fortude represents the growing maturity of Sri Lankan software companies in delivering complex enterprise transformation projects to multinational clients.",
        services: ["ERP Implementation (Infor)", "Data & Analytics", "Process Automation (UiPath)", "Digital Advisory"],
        bestFor: "Manufacturing and F&B enterprises needing ERP and business intelligence solutions.",
        rating: "4.5",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/fortude",
        notableClients: "Apparel manufacturers, F&B companies, healthcare enterprises",
        techStack: "Infor CloudSuite, UiPath, Power BI, Azure, Python, SQL, .NET",
        projectExample: "Delivered a multi-country Infor CloudSuite ERP rollout for a global apparel manufacturer, standardising operations across factories in Sri Lanka, Vietnam, and India.",
    },
    {
        name: "Cambio Software Engineering",
        tagline: "Healthcare Technology & E-Health Solutions",
        founded: "2005",
        hq: "Colombo (Parent: Stockholm, Sweden)",
        size: "300–500",
        specialty: "Healthcare IT & EMR Systems",
        description:
            "Cambio Software Engineering is the Sri Lankan R&D arm of Cambio Healthcare Systems AB, a Swedish e-health company founded in 1993. Their Colombo office, established in 2005, employs over 300 engineers who build electronic medical record (EMR) systems, clinical decision support tools, and healthcare information platforms deployed across Scandinavian and UK healthcare systems. Cambio represents an important niche in Sri Lanka's software ecosystem — deep domain expertise in regulated healthcare IT, a sector requiring exceptional attention to data privacy, compliance (GDPR, NHS standards), and system reliability.",
        services: ["Electronic Medical Records (EMR)", "Clinical Decision Support", "Healthcare Platforms", "E-Health Integration"],
        bestFor: "Healthcare organisations needing EMR systems and clinical software.",
        notableClients: "Scandinavian healthcare systems, NHS trusts, European hospitals",
        techStack: "Java, .NET, Angular, PostgreSQL, HL7/FHIR, Azure, Docker",
        projectExample: "Co-developed a major clinical decision support module that is now actively used by doctors across the Swedish national healthcare system.",
    },
    {
        name: "Fcode Labs",
        tagline: "Full-Stack Product Engineering & IoT",
        founded: "2015",
        hq: "Colombo",
        size: "100–200",
        specialty: "IoT, Mobile & Cloud Solutions",
        description:
            "Fcode Labs has built a reputation as a technically strong product engineering company with particular expertise in IoT, embedded systems, and mobile app development. They work across consumer electronics, smart home technology, and enterprise IoT deployments. Their engineering teams combine hardware awareness with modern cloud-native development practices, making them a strong choice for projects that span physical devices and software platforms. Fcode Labs has been recognised on Clutch as a top Sri Lankan development firm.",
        services: ["IoT Solutions", "Mobile App Development", "Cloud Engineering", "Embedded Systems"],
        bestFor: "Companies building IoT products or hardware-software integrated solutions.",
        rating: "4.8",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/fcode-labs",
        notableClients: "Consumer electronics brands, smart home companies, industrial IoT clients",
        techStack: "React Native, Flutter, Node.js, Python, AWS IoT, MQTT, C/C++, React",
        projectExample: "Developed a complete smart home ecosystem including firmware, mobile app, and cloud backend for an international consumer electronics brand.",
    },
    {
        name: "Insighture",
        tagline: "Enterprise App Modernisation & Cloud Consulting",
        founded: "2016",
        hq: "Colombo",
        size: "100–200",
        specialty: "Cloud Consulting & App Modernisation",
        description:
            "Insighture specialises in helping enterprises modernise legacy applications and migrate to cloud-native architectures. They offer resource augmentation, cloud consulting, and AI integration services. Their teams work closely with enterprise clients on long-term transformation projects, typically involving containerisation, microservices migration, and platform re-engineering. Insighture has grown steadily by focusing on deep technical partnerships rather than project-based engagements.",
        services: ["Cloud Consulting", "App Modernisation", "Resource Augmentation", "AI Integration"],
        bestFor: "Enterprises modernising legacy systems and adopting cloud-first strategies.",
        rating: "4.6",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/insighture",
        notableClients: "Enterprise clients in BFSI, logistics, and telecommunications",
        techStack: "Java, Spring Boot, Kubernetes, Docker, AWS, Azure, React, Python",
        projectExample: "Led a multi-year application modernisation programme for a regional bank, migrating 50+ legacy services to a Kubernetes-based microservices architecture.",
    },
    {
        name: "Allion Technologies",
        tagline: "Offshore Development & Enterprise Solutions",
        founded: "2007",
        hq: "Colombo",
        size: "200–500",
        specialty: "Offshore Development & QA",
        description:
            "Allion Technologies is a well-established offshore development company providing custom software development, QA and testing, and IT consulting services to clients globally. With nearly two decades of operation, they have built deep expertise in enterprise application development, particularly for clients in financial services, healthcare, and telecommunications. Allion is known for their strong quality assurance practices and structured delivery methodology.",
        services: ["Custom Software Development", "QA & Testing", "IT Consulting", "Enterprise Applications"],
        bestFor: "Enterprises requiring structured offshore development with strong QA practices.",
        rating: "4.5",
        ratingSource: "Clutch",
        ratingUrl: "https://clutch.co/profile/allion-technologies",
        notableClients: "Financial services firms, healthcare providers, telecom operators",
        techStack: "Java, .NET, Angular, React, Selenium, AWS, Azure, Oracle",
        projectExample: "Established a dedicated QA centre of excellence for a multinational insurance provider, reducing production defects by 65% over 18 months.",
    },
    {
        name: "LSEG Technology (MillenniumIT)",
        tagline: "Capital Markets Technology & Exchange Platforms",
        founded: "1996",
        hq: "Colombo (Parent: London Stock Exchange Group)",
        size: "1,500+",
        specialty: "Financial Markets Technology",
        description:
            "Originally founded as MillenniumIT in 1996, the company was acquired by the London Stock Exchange Group (LSEG) in 2009 for approximately £18 million — a landmark event in Sri Lankan tech history. Now operating as LSEG Technology, their Colombo centre employs over 1,500 engineers building the core matching engines, surveillance systems, and market data platforms that power stock exchanges across the world. Their technology runs exchanges in over 40 countries. LSEG Technology represents the pinnacle of Sri Lanka's software engineering capability — mission-critical, ultra-low-latency systems where failure is measured in microseconds.",
        services: ["Exchange Matching Engines", "Market Surveillance", "Post-Trade Systems", "Market Data Platforms"],
        bestFor: "Captive centre — demonstrates Sri Lanka's capability for mission-critical financial systems.",
        notableClients: "London Stock Exchange, Borsa Italiana, Johannesburg Stock Exchange, 40+ global exchanges",
        techStack: "C++, Java, Linux, Ultra-low-latency networking, Real-time data processing",
        projectExample: "Developed the core matching engine technology used by the London Stock Exchange, processing millions of orders per second with sub-microsecond latency.",
    },
];

const companyWebsites: Record<string, string> = {
    "WSO2": "https://wso2.com",
    "Virtusa": "https://www.virtusa.com",
    "99x": "https://99x.io",
    "IFS": "https://www.ifs.com",
    "Sysco LABS": "https://syscolabs.lk",
    "Calcey Technologies": "https://calcey.com",
    "Arimac": "https://arimac.digital",
    "Rootcode": "https://rootcodelabs.com",
    "Surge Global": "https://surgeglobal.com",
    "Mitra Innovation": "https://mitrainnovation.com",
    "Creative Software": "https://creativesoftware.com",
    "hSenid": "https://hsenid.com",
    "Addix": "https://addix.lk",
    "CodeGen International": "https://codegen.co.uk",
    "Zone24x7": "https://zone24x7.com",
    "Fortude": "https://fortude.co",
    "Cambio Software Engineering": "https://cambio.lk",
    "Fcode Labs": "https://fcodelabs.com",
    "Insighture": "https://insighture.com",
    "Allion Technologies": "https://www.alliontechnologies.com",
    "LSEG Technology (MillenniumIT)": "https://www.lseg.com",
};

const companyCategories: Record<string, string> = {
    "WSO2": "Enterprise & Global",
    "Virtusa": "Enterprise & Global",
    "IFS": "Enterprise & Global",
    "Sysco LABS": "Enterprise & Global",
    "99x": "Enterprise & Global",
    "hSenid": "Enterprise & Global",
    "CodeGen International": "Enterprise & Global",
    "Fortude": "Enterprise & Global",
    "LSEG Technology (MillenniumIT)": "Enterprise & Global",
    "Calcey Technologies": "Mid-Market & Growth",
    "Arimac": "Mid-Market & Growth",
    "Creative Software": "Mid-Market & Growth",
    "Rootcode": "Mid-Market & Growth",
    "Surge Global": "Mid-Market & Growth",
    "Mitra Innovation": "Mid-Market & Growth",
    "Zone24x7": "Mid-Market & Growth",
    "Cambio Software Engineering": "Mid-Market & Growth",
    "Fcode Labs": "Mid-Market & Growth",
    "Insighture": "Mid-Market & Growth",
    "Allion Technologies": "Mid-Market & Growth",
    "Addix": "Boutique & Specialist",
};

const categoryOrder = ["Enterprise & Global", "Mid-Market & Growth", "Boutique & Specialist"];

const categoryDescriptions: Record<string, string> = {
    "Enterprise & Global": "Large-scale companies with 500+ employees, global operations, and enterprise-grade platforms.",
    "Mid-Market & Growth": "Established firms with 100–500 employees delivering specialised software services.",
    "Boutique & Specialist": "Agile, focused teams under 100 employees with deep specialisation in specific technology domains.",
};

const faqs = [
    {
        q: "What are the top-rated software development companies in Sri Lanka for 2026?",
        a: "The top-rated software companies in Sri Lanka for 2026 include WSO2, Virtusa, IFS, 99x, LSEG Technology, Calcey Technologies, Rootcode, and Surge Global. The full list of 21 reviewed companies spans enterprise middleware, digital engineering, ERP, product engineering, capital markets technology, cloud-native development, IoT, and travel tech.",
    },
    {
        q: "Why is Sri Lanka considered a good destination for software outsourcing?",
        a: "Sri Lanka offers strong English proficiency (higher than many South Asian neighbours), a well-educated STEM workforce of 175,000+ IT professionals, hourly rates of $20–$60 USD (50–70% savings over UK/US), a convenient UTC+5:30 timezone that overlaps with European and Middle Eastern business hours, and growing government commitment including a 30 billion LKR (~US$98M) digital budget allocation in 2026. Unlike larger outsourcing markets, Sri Lanka competes on quality over volume — producing ~10,000 selective IT graduates annually.",
    },
    {
        q: "How much does it cost to hire a software development company in Sri Lanka?",
        a: "Hourly rates for software development in Sri Lanka typically range from $20 to $60 USD depending on the company size, specialisation, and seniority of developers. Boutique agencies and startups charge $20–$35/hour, mid-market firms charge $35–$50/hour, and established enterprise-grade companies charge $45–$60/hour. Monthly retainers for dedicated developers typically range from $2,500 to $5,000/month. This represents significant savings compared to UK rates ($80–$150/hour), US rates ($100–$200/hour), and is competitive with Indian rates ($15–$50/hour) while often offering higher per-capita quality.",
    },
    {
        q: "What services do software companies in Sri Lanka typically offer?",
        a: "Sri Lankan software companies offer a comprehensive range of services including: custom software development, mobile app development (iOS & Android), web application development (React, Next.js, Angular), enterprise resource planning (ERP), quality assurance and testing, UI/UX design, cloud migration and DevOps, AI and machine learning solutions, API integration, IT staff augmentation, and managed services. Many firms also specialise in vertical solutions for fintech, healthtech, travel tech, and e-commerce. An emerging specialisation is AI-native development — chatbots, voice agents, and intelligent automation.",
    },
    {
        q: "Which programming languages and technologies are popular among Sri Lankan software companies?",
        a: "The most widely used technologies include JavaScript/TypeScript (React, Next.js, Angular, Node.js), Java (Spring Boot — the dominant enterprise language), Python (Django, Flask, AI/ML), C# (.NET for enterprise clients), PHP (Laravel for web applications), and mobile frameworks (React Native, Flutter, Swift, Kotlin). Cloud platforms (AWS is dominant, followed by Azure and GCP) and DevOps tools (Docker, Kubernetes, Terraform, Jenkins) are standard. AI-focused firms increasingly use LangChain, vector databases (Pinecone, Weaviate), and LLM orchestration frameworks.",
    },
    {
        q: "How do I choose the right software development partner in Sri Lanka?",
        a: "Evaluate partners across five pillars: (1) Technical expertise — does their stack align with your requirements? (2) Portfolio and case studies — have they successfully delivered in your domain? (3) Communication standards — do they use agile methodologies with transparent project management tooling? (4) Security compliance — look for ISO 27001, SOC2 practices, and GDPR awareness. (5) Scalability and retention — can they scale the team, and is their developer retention above 80%? Additionally, request reference calls with existing clients and verify their presence on independent review platforms like Clutch or GoodFirms.",
    },
    {
        q: "Is Sri Lanka better than India for software outsourcing?",
        a: "It depends on your priorities. India offers unmatched scale (5 million+ developers) and lower entry-level rates. Sri Lanka offers higher average English proficiency, smaller team sizes with more senior attention per project, comparable quality at competitive rates, and a timezone that works better for European clients. For projects requiring 3–30 developers with strong communication and design quality, Sri Lanka often outperforms. For projects requiring 100+ developers or highly specialised niche skills, India's larger talent pool may be advantageous. Many clients use both markets for different project types.",
    },
    {
        q: "What is SLASSCOM and how does it relate to Sri Lankan software companies?",
        a: "SLASSCOM (Sri Lanka Association of Software and Service Companies) is the national chamber representing the IT/BPM industry in Sri Lanka. It serves as the primary industry body advocating for policy, talent development, and international market access. SLASSCOM members include most major software companies in Sri Lanka. The organisation publishes industry reports, organises events, and runs initiatives supporting startup growth and talent pipeline development. Being a SLASSCOM member is generally considered a positive indicator of a company's standing in the local industry.",
    },
    {
        q: "What is the best custom software development company in Sri Lanka for startups?",
        a: "For startups, Calcey Technologies, Rootcode, Addix, and Fcode Labs are often the best fit. These software development companies in Sri Lanka specialise in rapid MVP development, modern tech stacks (React, Next.js, cloud-native), and offer flexible engagement models tailored to startup budgets.",
    },
    {
        q: "How do Sri Lankan software engineers rank globally?",
        a: "Sri Lankan software engineers are highly regarded globally, known for their strong problem-solving skills and design sensibility. The country focuses on quality over quantity, producing elite talent that frequently wins global competitive programming awards. Engineers from top Sri Lankan institutions are actively recruited by leading international tech giants.",
    },
];

/* — Main Content ————————————————————————————————————————————————————————————————————————————————————————— */

export default function SoftwareCompaniesContent() {
    return (
        <div className="min-h-screen bg-black text-white">
            <ScrollProgressBar />
            <BackToTop />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Software Companies in Sri Lanka" },
                ]}
            />

            {/* — Hero ————————————————————————————————————————————————————————————————————————————————————————————— */}
            <section className="relative px-4 md:px-8 pt-8 md:pt-16 pb-12">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-neutral-300 hover:text-[rgb(255,73,37)] transition-colors mb-6"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        All Articles
                    </Link>

                    <div>
                        <span className="inline-block px-4 py-1.5 bg-[rgb(255,73,37)]/20 backdrop-blur-sm text-[rgb(255,73,37)] text-sm font-semibold rounded-full border border-[rgb(255,73,37)]/30 mb-4">
                            Industry Guide · Updated June 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Software Companies in Sri Lanka
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[rgb(255,73,37)] to-orange-500">
                                21 Top Firms Rated & Compared (2026)
                            </span>
                        </h1>
                        
                        {/* Direct answer paragraph — featured snippet target */}
                        <p className="text-lg text-neutral-200 mb-6 max-w-3xl font-medium">
                            The best software companies in Sri Lanka in 2026 are WSO2, Virtusa, 99x, IFS, LSEG Technology, Calcey Technologies, and Rootcode. This guide reviews 21 IT companies and software firms across enterprise, mid-market, and boutique tiers — with pricing, ratings, and comparisons.
                        </p>

                        <p className="text-xl text-neutral-400 mb-8 max-w-3xl">
                            We reviewed 21 software development companies and IT companies in Sri Lanka — from enterprise giants employing 30,000+ engineers to agile AI-native studios. Updated with 2026 industry statistics, pricing benchmarks, and expert evaluation criteria.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-neutral-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 19, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>18 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                <span>21 companies reviewed</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                <span>10 FAQs answered</span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Last updated: June 22, 2026</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <SocialShareButtons />
                        </div>
                    </div>

                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl mt-10">
                        <Image
                            src="/software-companies-sri-lanka-guide-2026.webp"
                            alt="Overview of software development offices and technology teams working in Colombo, Sri Lanka"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                </div>
            </section>

            {/* — Key Takeaways (Featured Snippet Target) ———————————————————————————————————————————————————————— */}
            <section className="px-4 md:px-8 pb-8 -mt-4 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="rounded-2xl border border-[rgb(255,73,37)]/20 bg-[rgb(255,73,37)]/[0.03] p-6 md:p-8 space-y-4"
                    >
                        <p className="text-sm font-bold uppercase tracking-wider text-[rgb(255,73,37)]">
                            Key Takeaways
                        </p>
                        <ul className="space-y-3 text-neutral-300">
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">Sri Lanka is a premier destination for software outsourcing</strong>, offering high-quality engineering talent with excellent English proficiency at competitive rates ($20–$60/hour).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">The market has three distinct tiers:</strong> Enterprise firms (like WSO2, Virtusa, LSEG Technology), Mid-Market specialists (Calcey, Rootcode, Fcode Labs), and Agile boutique studios (like Addix).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">Choosing the right software development company in Sri Lanka</strong> depends on your project size. Startups benefit from boutique firms, while large multinationals typically partner with enterprise-scale vendors.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[rgb(255,73,37)] mt-1 font-bold">→</span>
                                <span><strong className="text-white">Compared to India</strong>, Sri Lanka focuses on quality over volume, making it ideal for teams of 3–30 developers requiring senior attention and design excellence.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* — Content Grid with Sticky Sidebar ———————————————————————————————————————————————————————————— */}
            <div className="px-4 md:px-8 pb-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                
                {/* — Table of Contents (Sticky Sidebar) —————————————————————————————————————————————————————————— */}
                <ActiveTOC items={tocItems} />

                {/* — Article Body ———————————————————————————————————————————————————————————————————————————————— */}
                <article id="main-content" className="flex-1 w-full prose prose-invert prose-lg max-w-none min-w-0 mt-8">
                    {/* — Section 0: Methodology ———————————————————————————————————————————————————————————— */}
                    <section
                        id="methodology"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-[rgb(255,73,37)]" />
                            How We Evaluated These Companies
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Transparency builds trust. Here is the exact methodology used to evaluate and rank the <strong>software companies in Sri Lanka</strong> featured in this guide. Unlike paid directory listings, our evaluation is editorial and independent.
                        </p>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8 my-8">
                            <h3 className="text-lg font-bold text-white mb-4">Evaluation Criteria (Weighted)</h3>
                            <div className="space-y-4">
                                {[
                                    { criterion: "Technical Capability & Innovation", weight: "25%", desc: "Technology stack modernity, AI/cloud adoption, architectural quality, open-source contributions." },
                                    { criterion: "Market Reputation & Track Record", weight: "20%", desc: "Industry recognition, awards, Clutch/Gartner ratings, years of operation, notable client portfolio." },
                                    { criterion: "Client Portfolio & Case Studies", weight: "20%", desc: "Quality and diversity of delivered projects, verifiable outcomes, industry-specific expertise." },
                                    { criterion: "Scale & Growth Trajectory", weight: "15%", desc: "Team size, revenue growth indicators, international expansion, hiring momentum." },
                                    { criterion: "Specialisation & Differentiation", weight: "10%", desc: "Unique value proposition, niche expertise, defensible market position." },
                                    { criterion: "Communication & Process Maturity", weight: "10%", desc: "Agile adoption, project management transparency, English proficiency, timezone flexibility." },
                                ].map((item) => (
                                    <div key={item.criterion} className="flex gap-4 items-start">
                                        <span className="text-[rgb(255,73,37)] font-bold text-sm w-12 shrink-0 pt-0.5">
                                            {item.weight}
                                        </span>
                                        <div>
                                            <div className="font-semibold text-white text-sm">{item.criterion}</div>
                                            <div className="text-xs text-neutral-500 mt-0.5">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-neutral-400 text-sm italic">
                            <strong>Publisher Note:</strong> This guide is researched and published by ARC AI. ARC AI is <em>not</em> included in the rankings below. All 21 companies were evaluated independently using the criteria outlined above. We encourage readers to verify all claims by contacting the listed companies directly and consulting third-party review platforms such as Clutch, GoodFirms, and Glassdoor.
                        </p>
                    </section>

                    {/* — Section 1: Industry Overview ————————————————————————————————————————————————————— */}
                    <section
                        id="industry-overview"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <TrendingUp className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka's Software Industry in 2026
                        </h2>

                        <p className="text-xl text-neutral-200 mb-6">
                            Sri Lanka's ICT/BPM sector has entered a defining growth phase. What was historically viewed as a lower-cost alternative to India has matured into a high-quality, specialist-driven ecosystem — home to some of the top IT outsourcing companies, tech companies, and software firms in Sri Lanka and South Asia — that global enterprises actively seek out for complex engineering work.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
                            {[
                                { value: "$177.8M", label: "Jan 2026 IT Exports", icon: TrendingUp },
                                { value: "60.2%", label: "YoY Export Growth", icon: BarChart3 },
                                { value: "175K+", label: "IT Professionals", icon: Users },
                                { value: "LKR 30B", label: "2026 Digital Budget", icon: Building2 },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center"
                                >
                                    <stat.icon className="w-5 h-5 text-[rgb(255,73,37)] mx-auto mb-2" />
                                    <div className="text-2xl font-black text-white">{stat.value}</div>
                                    <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <p className="text-neutral-300">
                            According to the <a href="https://www.srilankabusiness.com/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Export Development Board (EDB)</a>, <strong>software companies in Sri Lanka</strong> generated US$177.83 million in export earnings in January 2026 alone — a 60.21% increase over January 2025. February followed with US$153.62 million, representing 36.66% year-on-year growth. The sector now employs over 175,000 skilled professionals and has reached what industry analysts describe as a “tipping point” in foreign exchange generation, placing it among the country's top five export earners.
                        </p>

                        <p className="text-neutral-300 mt-4">
                            The government has signalled strong commitment to digital infrastructure with a 2026 national budget allocation of approximately 30 billion LKR (~US$98 million) for major digitisation projects, including the Unique Digital Identity initiative, the e-Grama Niladhari programme, and the Digital Economy Advancement Program. Internet penetration stands at approximately 59.7% of the population (~13.9 million users), with mobile broadband coverage expanding via 4G and emerging 5G deployments.
                        </p>

                        <p className="text-neutral-300 mt-4">
                            Structurally, the industry is undergoing a strategic pivot from basic “digitisation” (cloud migration, simple CRM/ERP implementation) toward what analysts at the Morning Herald and <a href="https://slasscom.lk/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a> are calling <strong>“intelligent operations”</strong> — leveraging <Link href="/ai-automation-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI automation</Link>, multi-agent systems, and domain-specific AI models to build fundamentally smarter software. This shift is creating a two-tier market: established firms integrating AI into existing enterprise offerings, and newer <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI-native studios</Link> building entirely on modern architectures from day one. For a broader look at web-specific capabilities, see our guide on <Link href="/web-design-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">web design companies in Sri Lanka</Link>.
                        </p>

                        <p className="text-neutral-300 mt-4 text-sm italic">
                            Sources: <a href="https://www.srilankabusiness.com/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Export Development Board of Sri Lanka</a>, <a href="https://slasscom.lk/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a>, <a href="https://www.cbsl.gov.lk/en/publications/economic-and-financial-reports/annual-economic-review" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Central Bank of Sri Lanka Annual Economic Review 2025</a>, <a href="https://datareportal.com/reports/digital-2026-sri-lanka" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">DataReportal Digital 2026 Sri Lanka</a>, National Budget 2026.
                        </p>
                    </section>

                    {/* — Section 2: What to Look For ————————————————————————————————————————————————— */}
                    <section
                        id="what-to-look-for"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Shield className="w-8 h-8 text-[rgb(255,73,37)]" />
                            What to Look for in a Software Partner
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Finding a vendor is straightforward; finding the <em>right partner</em> requires structured evaluation. Whether you're a startup building an MVP or a Fortune 500 company modernising legacy systems, these six pillars should guide your selection when evaluating <strong>software development companies in Sri Lanka</strong>. For guidance specific to <Link href="/ai-consultants-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI consultants</Link>, see our dedicated guide.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                            {[
                                {
                                    icon: Cpu,
                                    title: "1. Technical Expertise & Architecture",
                                    desc: "Evaluate their technology stack. Are they building with modern frameworks (React, Next.js, serverless) or relying on legacy monolithic architectures? In 2026, look for firms that can natively integrate AI and deploy to cloud-edge environments. Ask to see their GitHub or architecture documentation.",
                                },
                                {
                                    icon: Briefcase,
                                    title: "2. Portfolio & Domain Experience",
                                    desc: "Request specific case studies in your industry vertical. A firm that has built fintech platforms will have very different expertise from one specialising in travel tech or healthcare. Domain knowledge reduces project risk, accelerates delivery timelines, and avoids costly architectural mistakes.",
                                },
                                {
                                    icon: Users,
                                    title: "3. Communication & Process Maturity",
                                    desc: "Sri Lankan teams generally have excellent English proficiency, but verify their project management methodology. Look for agile/Scrum adoption with regular sprint demos, transparent JIRA/Linear boards, and dedicated account managers. Request a trial sprint before committing to a long-term engagement.",
                                },
                                {
                                    icon: Shield,
                                    title: "4. Security & Compliance",
                                    desc: "For enterprise or regulated industry projects, verify their security posture: ISO 27001 certification, SOC2 compliance practices, GDPR awareness, and secure SDLC processes. Ask specifically about code review workflows, vulnerability scanning (SAST/DAST), and data encryption standards at rest and in transit.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "5. Scalability & Talent Retention",
                                    desc: "Can they scale from 3 to 30 engineers as your project grows? What is their annual developer retention rate? High turnover is a critical red flag — you lose accumulated domain knowledge with every departure. Top Sri Lankan firms maintain 85%+ retention. Ask for their retention numbers directly.",
                                },
                                {
                                    icon: Globe,
                                    title: "6. Timezone & Cultural Alignment",
                                    desc: "Sri Lanka's UTC+5:30 timezone provides full-day overlap with European teams and partial overlap with US East Coast (evening calls). Assess their willingness to adjust schedules, and confirm whether they have experience working with clients in your region. Cultural alignment on communication norms can make or break a remote partnership.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-6"
                                >
                                    <item.icon className="w-6 h-6 text-[rgb(255,73,37)] mb-3" />
                                    <h3 className="text-base font-bold text-white mb-2 m-0">{item.title}</h3>
                                    <p className="text-sm text-neutral-400 m-0">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* — Section 3: Company Rankings ————————————————————————————————————————————————— */}
                    <section
                        id="rankings"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-4 flex items-center gap-3">
                            <Award className="w-8 h-8 text-[rgb(255,73,37)]" />
                            The 21 Leading Software Development Companies in Sri Lanka (2026)
                        </h2>
                        <p className="text-neutral-400 mb-10">
                            Grouped by company size and market tier rather than subjective ranking. This list covers the full spectrum — from global enterprise giants with 30,000+ employees to agile AI-native studios with fewer than 50 engineers — so you can find a partner that genuinely matches your project{"'"}s specific needs and budget.
                        </p>

                        {/* Interactive comparison table */}
                        <div className="mb-12 bg-neutral-950 border border-neutral-800 rounded-xl p-4 md:p-6">
                            <h3 className="text-lg font-bold text-white mb-1">Quick Comparison: Filter & Sort</h3>
                            <p className="text-xs text-neutral-500 mb-4">Filter by company tier and sort by any column to quickly compare all 21 firms.</p>
                            <InteractiveComparisonTable
                                companies={companies.map((c) => ({
                                    name: c.name,
                                    founded: c.founded,
                                    specialty: c.specialty,
                                    size: c.size,
                                    rating: c.rating,
                                    bestFor: c.bestFor,
                                    category: companyCategories[c.name] || "Other",
                                }))}
                            />
                        </div>

                        <div className="space-y-12">
                            {categoryOrder.map((category) => {
                                const categoryCompanies = companies.filter(
                                    (c) => companyCategories[c.name] === category
                                );
                                return (
                                    <div key={category}>
                                        <div className="mb-6 pb-4 border-b border-neutral-800">
                                            <h3 className="text-xl font-bold text-white mb-1 m-0">{category}</h3>
                                            <p className="text-sm text-neutral-500 m-0">{categoryDescriptions[category]}</p>
                                        </div>
                                        <div className="space-y-6">
                                            {categoryCompanies.map((company) => (
                                                <div
                                                    key={company.name}
                                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8 hover:border-neutral-700 transition-colors"
                                                >
                                                    {/* Header */}
                                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white m-0 mb-1">
                                                                {company.name}
                                                            </h3>
                                                            <p className="text-sm text-[rgb(255,73,37)] font-medium m-0">
                                                                {company.tagline}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            {company.rating && (
                                                                company.ratingUrl ? (
                                                                    <a href={company.ratingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-2.5 py-1 bg-neutral-900 rounded-full border border-neutral-800 hover:border-yellow-500/40 transition-colors no-underline">
                                                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                                                        <span className="text-xs font-bold text-white">{company.rating}</span>
                                                                        <span className="text-xs text-neutral-500">/ 5</span>
                                                                    </a>
                                                                ) : (
                                                                    <div className="flex items-center gap-1 px-2.5 py-1 bg-neutral-900 rounded-full border border-neutral-800">
                                                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                                                        <span className="text-xs font-bold text-white">{company.rating}</span>
                                                                        <span className="text-xs text-neutral-500">/ 5</span>
                                                                    </div>
                                                                )
                                                            )}
                                                            {companyWebsites[company.name] && (
                                                                <Link
                                                                    href={companyWebsites[company.name]}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline"
                                                                >
                                                                    <ExternalLink className="w-3 h-3" />
                                                                    Visit
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Meta row */}
                                                    <div className="flex flex-wrap gap-4 text-xs text-neutral-500 mb-5">
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" /> Est. {company.founded}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <MapPin className="w-3 h-3" /> {company.hq}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Users className="w-3 h-3" /> {company.size} employees
                                                        </span>
                                                        {company.ratingSource && (
                                                            company.ratingUrl ? (
                                                                <a href={company.ratingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">
                                                                    <Star className="w-3 h-3" /> {company.ratingSource}
                                                                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                                                                </a>
                                                            ) : (
                                                                <span className="flex items-center gap-1">
                                                                    <Star className="w-3 h-3" /> {company.ratingSource}
                                                                </span>
                                                            )
                                                        )}
                                                    </div>

                                                    {/* Description */}
                                                    <p className="text-neutral-300 mb-5">{company.description}</p>

                                                    {/* Notable Project / Case Study */}
                                                    {company.projectExample && (
                                                        <div className="bg-neutral-900/40 p-4 rounded-lg border border-neutral-800/50 mb-5 relative overflow-hidden">
                                                            <div className="absolute top-0 left-0 w-1 h-full bg-[rgb(255,73,37)]"></div>
                                                            <div className="flex items-start gap-3">
                                                                <Briefcase className="w-4 h-4 text-[rgb(255,73,37)] shrink-0 mt-0.5" />
                                                                <div>
                                                                    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                                                                        Notable Project
                                                                    </div>
                                                                    <p className="text-sm text-neutral-300 italic m-0">
                                                                        "{company.projectExample}"
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Notable clients & Tech stack */}
                                                    {(company.notableClients || company.techStack) && (
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                                            {company.notableClients && (
                                                                <div className="text-xs">
                                                                    <span className="text-neutral-500 font-semibold uppercase tracking-wider">Notable Clients: </span>
                                                                    <span className="text-neutral-400">{company.notableClients}</span>
                                                                </div>
                                                            )}
                                                            {company.techStack && (
                                                                <div className="text-xs">
                                                                    <span className="text-neutral-500 font-semibold uppercase tracking-wider">Tech Stack: </span>
                                                                    <span className="text-neutral-400">{company.techStack}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* Services + Best For */}
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                                        <div>
                                                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                                                                Core Services
                                                            </div>
                                                            <ul className="space-y-1.5 m-0 p-0 list-none">
                                                                {company.services.map((s) => (
                                                                    <li key={s} className="flex items-center gap-2 text-sm text-neutral-300">
                                                                        <CheckCircle2 className="w-3.5 h-3.5 text-[rgb(255,73,37)] shrink-0" />
                                                                        {s}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800/50">
                                                            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                                <Rocket className="w-3.5 h-3.5" /> Best For
                                                            </div>
                                                            <p className="text-sm text-neutral-300 m-0">{company.bestFor}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* — Section 4: Comparison Table ————————————————————————————————————————————————— */}
                    <section
                        id="comparison-table"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <BarChart3 className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Software Companies in Sri Lanka — Comparison Table
                        </h2>

                        <div className="overflow-x-auto -mx-4 md:mx-0">
                            <table className="w-full text-sm border border-neutral-800 min-w-[800px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Company</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Est.</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Specialty</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Size</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Rating</th>
                                        <th className="p-3 text-left text-neutral-400 font-semibold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companies.map((c) => (
                                        <tr key={c.name} className="border-b border-neutral-800/50 hover:bg-neutral-900/50 transition-colors">
                                            <td className="p-3 text-white font-semibold whitespace-nowrap">{c.name}</td>
                                            <td className="p-3 text-neutral-400">{c.founded}</td>
                                            <td className="p-3 text-neutral-400 text-xs">{c.specialty}</td>
                                            <td className="p-3 text-neutral-400 whitespace-nowrap">{c.size}</td>
                                            <td className="p-3 text-neutral-400 whitespace-nowrap">
                                                {c.rating ? (
                                                    <span className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                                        {c.rating}
                                                    </span>
                                                ) : (
                                                    <span className="text-neutral-600">—</span>
                                                )}
                                            </td>
                                            <td className="p-3 text-neutral-500 text-xs max-w-[200px]">{c.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* — Section 5: Pricing ——————————————————————————————————————————————————————————— */}
                    <section
                        id="pricing"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <DollarSign className="w-8 h-8 text-[rgb(255,73,37)]" />
                            How Much Does Software Development Cost in Sri Lanka?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            One of the primary reasons international businesses choose <strong>software companies in Sri Lanka</strong> is the compelling cost structure. Here is a detailed breakdown of current market rates as of 2026. For web-specific pricing, see our <Link href="/web-design-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">web design Sri Lanka pricing guide</Link>, and for AI-specific services, visit our <Link href="/ai-companies-sri-lanka" className="text-[rgb(255,73,37)] hover:underline">AI companies guide</Link>.
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
                            <table className="w-full text-sm border border-neutral-800 min-w-[600px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Company Tier</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Hourly Rate (USD)</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Monthly Dedicated Dev</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Typical Profile</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Boutique / Startup</td>
                                        <td className="p-4">$20 – $35</td>
                                        <td className="p-4">$2,500 – $3,500</td>
                                        <td className="p-4 text-xs text-neutral-400">Small teams, agile, founder-led. e.g. Addix, Fcode Labs</td>
                                    </tr>
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Mid-Market</td>
                                        <td className="p-4">$35 – $50</td>
                                        <td className="p-4">$3,500 – $5,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Established teams, structured processes. e.g. Calcey, Surge, Rootcode</td>
                                    </tr>
                                    <tr className="border-b border-neutral-800/50">
                                        <td className="p-4 font-medium text-white">Enterprise</td>
                                        <td className="p-4">$45 – $60</td>
                                        <td className="p-4">$5,000 – $7,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Large-scale, compliance-ready. e.g. Virtusa, 99x, Mitra</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-medium text-white">Specialised / Niche</td>
                                        <td className="p-4">$40 – $80</td>
                                        <td className="p-4">$4,500 – $8,000</td>
                                        <td className="p-4 text-xs text-neutral-400">Domain experts (ERP, travel tech). e.g. IFS, CodeGen, WSO2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4">How Does Sri Lanka Compare Globally?</h3>
                        <div className="overflow-x-auto -mx-4 md:mx-0 my-6">
                            <table className="w-full text-sm border border-neutral-800 min-w-[500px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Country</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Average Hourly Rate (USD)</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">vs Sri Lanka</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    {[
                                        { country: "🇺🇸 United States", rate: "$100 – $200", vs: "3–6x more expensive" },
                                        { country: "🇬🇧 United Kingdom", rate: "$80 – $150", vs: "2.5–5x more expensive" },
                                        { country: "🇦🇺 Australia", rate: "$80 – $140", vs: "2.5–4x more expensive" },
                                        { country: "🇵🇱 Poland / Eastern Europe", rate: "$40 – $80", vs: "1.5–2x more expensive" },
                                        { country: "🇮🇳 India", rate: "$15 – $50", vs: "Comparable (SL often higher quality/capita)" },
                                        { country: "🇱🇰 Sri Lanka", rate: "$20 – $60", vs: "—" },
                                        { country: "🇵🇭 Philippines", rate: "$15 – $40", vs: "Comparable (SL stronger in engineering)" },
                                        { country: "🇻🇳 Vietnam", rate: "$18 – $45", vs: "Comparable" },
                                    ].map((row) => (
                                        <tr key={row.country} className="border-b border-neutral-800/50">
                                            <td className="p-4 font-medium whitespace-nowrap">{row.country}</td>
                                            <td className="p-4">{row.rate}</td>
                                            <td className="p-4 text-xs text-neutral-400">{row.vs}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-neutral-400 text-sm italic">
                            Rates are estimates based on publicly available data, <a href="https://clutch.co/lk/it-services" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Clutch listings</a>, <a href="https://www.goodfirms.co/software-development/sri-lanka" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">GoodFirms profiles</a>, and industry surveys as of Q1 2026. Actual rates vary by project complexity, seniority requirements, and engagement model.
                        </p>
                    </section>

                    {/* — Section 6: SL vs India vs Philippines —————————————————————————————————— */}
                    <section
                        id="sri-lanka-vs-india"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Scale className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka vs India vs Philippines: Which Should You Choose?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            This is one of the most common questions when evaluating offshore software development options. Each market has distinct advantages depending on your project requirements:
                        </p>

                        <div className="overflow-x-auto -mx-4 md:mx-0 my-8">
                            <table className="w-full text-sm border border-neutral-800 min-w-[700px]">
                                <thead>
                                    <tr className="border-b border-neutral-800 bg-neutral-950">
                                        <th className="p-4 text-left text-neutral-400 font-semibold">Factor</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇱🇰 Sri Lanka</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇮🇳 India</th>
                                        <th className="p-4 text-left text-neutral-400 font-semibold">🇵🇭 Philippines</th>
                                    </tr>
                                </thead>
                                <tbody className="text-neutral-300">
                                    {[
                                        { factor: "Talent Pool Size", sl: "175,000+ IT professionals", india: "5,000,000+ IT professionals", ph: "1,500,000+ in IT/BPO" },
                                        { factor: "English Proficiency", sl: "Very High (South Asia leading)", india: "High (varies by region)", ph: "Very High (US-influenced)" },
                                        { factor: "Average Hourly Rate", sl: "$20 – $60", india: "$15 – $50", ph: "$15 – $40" },
                                        { factor: "Timezone (UTC)", sl: "+5:30 (EU overlap)", india: "+5:30 (EU overlap)", ph: "+8:00 (APAC overlap)" },
                                        { factor: "Quality per Capita", sl: "Very High (selective)", india: "Varies widely", ph: "Good (BPO-focused)" },
                                        { factor: "Best For", sl: "Quality-focused teams of 3–30", india: "Scale: teams of 50–500+", ph: "BPO, support, content" },
                                        { factor: "Key Differentiator", sl: "Elite talent density, design quality", india: "Massive scale, every niche covered", ph: "Cultural alignment with US clients" },
                                        { factor: "Scalability Risk", sl: "Limited for 100+ teams", india: "Low — massive pipeline", ph: "Moderate — engineering talent thinner" },
                                    ].map((row) => (
                                        <tr key={row.factor} className="border-b border-neutral-800/50">
                                            <td className="p-4 font-medium text-white whitespace-nowrap">{row.factor}</td>
                                            <td className="p-4 text-sm">{row.sl}</td>
                                            <td className="p-4 text-sm">{row.india}</td>
                                            <td className="p-4 text-sm">{row.ph}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 my-8">
                            <h3 className="text-lg font-bold text-white mb-3 m-0">The Bottom Line</h3>
                            <p className="text-neutral-400 m-0 text-sm">
                                <strong className="text-white">Choose Sri Lanka</strong> when you need a high-quality team of 3–30 developers with excellent communication, design sensibility, and willingness to operate as a genuine extension of your team. The selective talent pipeline means higher average skill per developer.
                                <br /><br />
                                <strong className="text-white">Choose India</strong> when you need massive scale (50–500+ developers), hyper-specific niche skills, or the lowest possible entry-level rates. India's ecosystem covers virtually every technology and domain.
                                <br /><br />
                                <strong className="text-white">Choose the Philippines</strong> when your primary need is BPO, customer support, or content operations — especially if you need strong cultural alignment with US clientele. For deep software engineering, Sri Lanka and India typically offer stronger options.
                            </p>
                        </div>
                    </section>

                    {/* — Section 7: Tech Ecosystem ————————————————————————————————————————————— */}
                    <section
                        id="tech-ecosystem"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Landmark className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Sri Lanka's Tech Hubs & Ecosystem
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Understanding where <strong>software companies in Sri Lanka</strong> operate and the supporting ecosystem provides valuable context for evaluating potential partners:
                        </p>

                        <div className="space-y-6 my-8">
                            {[
                                {
                                    icon: Building2,
                                    name: "TRACE Expert City, Maradana",
                                    desc: "Sri Lanka's premier technology park and the heart of software companies in Colombo, purpose-built for IT companies. Houses Calcey Technologies, multiple startups, and innovation labs. Managed by the University of Moratuwa. Provides shared infrastructure, networking events, and incubation programmes.",
                                },
                                {
                                    icon: Building2,
                                    name: "Orion City, Colombo 09",
                                    desc: "A major IT tower in Colombo hosting several technology companies and BPO operations. Provides enterprise-grade office infrastructure, backup power, and connectivity for mission-critical operations.",
                                },
                                {
                                    icon: GraduationCap,
                                    name: "University Pipeline",
                                    desc: "The University of Moratuwa (ranked #1 for engineering in Sri Lanka), University of Colombo School of Computing (UCSC), and the Informatics Institute of Technology (IIT) produce approximately 10,000 IT graduates annually. Government-supported bootcamps and micro-credential programmes through the new GOVTECH initiative supplement the university pipeline.",
                                },
                                {
                                    icon: CircleDot,
                                    name: "SLASSCOM",
                                    desc: "The Sri Lanka Association of Software and Service Companies (slasscom.lk) is the national industry body representing 300+ member companies. SLASSCOM publishes annual industry reports, runs talent development initiatives, organises international trade missions, and advocates for policy reform to support the IT sector. Membership is a positive indicator of company standing.",
                                },
                                {
                                    icon: Globe,
                                    name: "Startup Ecosystem",
                                    desc: "Colombo's startup scene has matured significantly since 2020, with accelerators like Hatch (by Sri Lanka Telecom), Spiralation, and Blue Ocean Ventures supporting early-stage tech companies. The government has also established a Rs. 1.5 billion startup fund under the Ministry of Digital Economy to further support tech entrepreneurs.",
                                },
                            ].map((hub) => (
                                <div key={hub.name} className="flex gap-4">
                                    <div className="w-10 h-10 bg-[rgb(255,73,37)]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <hub.icon className="w-5 h-5 text-[rgb(255,73,37)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{hub.name}</h3>
                                        <p className="text-neutral-400 m-0 text-sm">{hub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* — Section 8: Why Outsource to SL —————————————————————————————————————— */}
                    <section
                        id="why-outsource"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Globe className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Why Outsource Software Development to Sri Lanka?
                        </h2>

                        <p className="text-neutral-300 mb-6">
                            Sri Lanka may not have the sheer scale of India or the Philippines, but that's increasingly seen as an advantage. Here is what sets Sri Lankan <strong>software companies</strong> apart in the global outsourcing landscape:
                        </p>

                        <div className="space-y-6 my-8">
                            {[
                                {
                                    icon: Users,
                                    title: "English Proficiency",
                                    desc: "Sri Lanka consistently ranks among the top English-speaking nations in South Asia. English is taught as a second language from primary school and used as the medium of instruction at most universities. This results in naturally fluent communication — not just competent translation — significantly reducing friction in remote collaborations.",
                                },
                                {
                                    icon: Award,
                                    title: "Quality Over Volume",
                                    desc: "Rather than competing on scale, Sri Lankan firms compete on quality. The country produces roughly 10,000 IT graduates annually — a manageable pipeline that allows companies to be highly selective in hiring. The result is teams with higher average skill levels per capita compared to mass-production talent markets. Several Sri Lankan engineers have won global competitive programming awards.",
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Competitive Cost Structure",
                                    desc: "Hourly rates of $20–$60 USD offer 50–70% savings over UK or US teams without compromising quality. Following the 2022 economic adjustment, the rupee has stabilised and the cost structure has become even more attractive for international clients while still supporting strong local engineering salaries.",
                                },
                                {
                                    icon: Globe,
                                    title: "Strategic Timezone (UTC+5:30)",
                                    desc: "Full-day overlap with European teams enables seamless standups, sprint reviews, and pair programming sessions. Partial overlap with US East Coast enables critical evening handoffs. This timezone advantage is frequently cited by UK, European, and Australian clients as a primary reason for choosing Sri Lanka.",
                                },
                                {
                                    icon: Building2,
                                    title: "Government-Backed Digital Growth",
                                    desc: "The 2026 national budget allocated ~US$98 million for digitisation projects. The new GOVTECH initiative (replacing ICTA) leads digital governance, TRACE Expert City offers purpose-built tech facilities, and BOI incentives attract international companies to establish R&D centres. This infrastructure commitment signals long-term stability for the sector.",
                                },
                                {
                                    icon: Shield,
                                    title: "Intellectual Property Safety",
                                    desc: "Sri Lanka has established IP protection frameworks and is a signatory to major international intellectual property treaties (Berne Convention, Paris Convention, TRIPS). This provides legal recourse for IP disputes — an important consideration for companies outsourcing proprietary software development.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="w-10 h-10 bg-[rgb(255,73,37)]/10 rounded-lg flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-[rgb(255,73,37)]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-neutral-400 m-0 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* — Industry Voices ————————————————————————————————————————————————————— */}
                    <section
                        id="industry-voices"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <Award className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Industry Voices & Data Points
                        </h2>
                        <p className="text-neutral-400 mb-8">
                            What industry bodies, analysts, and trade publications are saying about software companies in Sri Lanka in 2026.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    quote: "Sri Lanka's IT/BPM sector recorded US$177.83 million in export earnings in January 2026 — a 60.21% year-on-year increase — signalling a structural shift from cost-centre outsourcing to value-added digital engineering.",
                                    source: "Export Development Board of Sri Lanka (EDB)",
                                    url: "https://www.srilankabusiness.com/",
                                    context: "Monthly Export Performance Report, January 2026",
                                },
                                {
                                    quote: "The Sri Lankan IT workforce is shifting from execution-only outsourcing to intellectual property co-creation. Companies like WSO2 and 99x are now building products, not just providing staff augmentation.",
                                    source: "SLASSCOM Industry Report 2026",
                                    url: "https://slasscom.lk/",
                                    context: "Annual Industry Overview & Talent Pipeline Analysis",
                                },
                                {
                                    quote: "Sri Lanka produces approximately 10,000 IT graduates annually from a highly selective university system, competing on quality rather than volume — a fundamentally different proposition from India's scale-first model.",
                                    source: "University Grants Commission of Sri Lanka / SLASSCOM",
                                    url: "https://www.ugc.ac.lk/",
                                    context: "Higher Education Statistics, 2025",
                                },
                                {
                                    quote: "The government's 2026 digital budget of approximately 30 billion LKR (~US$98M) — including the Unique Digital Identity initiative and e-Grama Niladhari programme — represents the largest public-sector technology investment in Sri Lanka's history.",
                                    source: "National Budget 2026 / Central Bank of Sri Lanka",
                                    url: "https://www.cbsl.gov.lk/en/publications/economic-and-financial-reports/annual-economic-review",
                                    context: "Annual Economic Review 2025 & Budget Estimates 2026",
                                },
                                {
                                    quote: "ICT/BPM export revenue reached US$1,645 million in 2025 — up 8.8% year-on-year — and the industry is targeting US$3 billion in exports and a US$15 billion contribution to the digital economy by 2030, making software one of Sri Lanka's top export earners.",
                                    source: "Export Development Board (EDB) & SLASSCOM",
                                    url: "https://www.srilankabusiness.com/ict/",
                                    context: "ICT/BPM Export Performance & 2030 Industry Targets",
                                },
                            ].map((item) => (
                                <blockquote key={item.source} className="bg-neutral-950 border-l-4 border-[rgb(255,73,37)] rounded-r-xl p-6 m-0">
                                    <p className="text-neutral-200 mb-4 italic leading-relaxed">
                                        &ldquo;{item.quote}&rdquo;
                                    </p>
                                    <footer className="flex flex-wrap items-center gap-x-4 gap-y-1">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[rgb(255,73,37)] hover:underline no-underline">
                                            — {item.source}
                                        </a>
                                        <span className="text-xs text-neutral-600">{item.context}</span>
                                    </footer>
                                </blockquote>
                            ))}
                        </div>
                    </section>

                    {/* — Proven Results (Publisher Experience / Social Proof) ————————————————————— */}
                    <section
                        id="proven-results"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <BarChart3 className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Proven Results from This Market
                        </h2>

                        <p className="text-neutral-300 mb-4">
                            Research is only half the story. We don&apos;t just write about Sri Lanka&apos;s software industry — we build in it every week. The outcomes below come from our own client engagements across Sri Lanka and the UK. We include them for transparency about the hands-on experience behind this guide, and to illustrate what a capable <strong>software company in Sri Lanka</strong> can realistically deliver.
                        </p>
                        <p className="text-neutral-500 text-sm italic mb-8">
                            As stated in our <a href="#methodology" className="text-[rgb(255,73,37)] hover:underline no-underline">methodology</a>, ARC AI publishes this guide and is <em>deliberately excluded from the 21-company ranking above</em>. The figures here describe our own delivery record — not a competitive placement.
                        </p>

                        {/* Aggregate stats strip */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                            {[
                                { icon: Star, value: "4.9/5", label: "Average client rating" },
                                { icon: Briefcase, value: "100+", label: "Projects delivered" },
                                { icon: TrendingUp, value: "+67%", label: "Avg. lead increase" },
                                { icon: Rocket, value: "50+", label: "Products shipped" },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center">
                                    <stat.icon className="w-5 h-5 text-[rgb(255,73,37)] mx-auto mb-2" />
                                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                                    <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-neutral-600 -mt-4 mb-8">
                            Based on verified ARC AI client reviews and delivered projects across the UK and Sri Lanka.
                        </p>

                        {/* Result cards from real case studies */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {[
                                {
                                    client: "Tourism & Hospitality",
                                    location: "Sri Lanka",
                                    tags: ["AI Chatbot", "Smart Website"],
                                    summary: "A 24/7 multilingual (Sinhala, Tamil & English) AI assistant replaced 6–12 hour email response times.",
                                    metrics: [
                                        { label: "Booking enquiries", value: "+167%" },
                                        { label: "Response time", value: "99% faster" },
                                        { label: "Support cost", value: "−60%" },
                                    ],
                                },
                                {
                                    client: "Real Estate Agency",
                                    location: "Colombo, Sri Lanka",
                                    tags: ["AI Sales SDR", "Smart Website"],
                                    summary: "Automated lead qualification and viewing scheduling freed the sales team from manual follow-up.",
                                    metrics: [
                                        { label: "Qualified leads", value: "+247%" },
                                        { label: "Viewings booked", value: "+160%" },
                                        { label: "Agent admin time", value: "−75%" },
                                    ],
                                },
                                {
                                    client: "E-Commerce Retailer",
                                    location: "Birmingham, UK",
                                    tags: ["Next.js Rebuild", "SEO"],
                                    summary: "A full rebuild on Next.js plus a technical SEO overhaul turned a slow store into a revenue engine.",
                                    metrics: [
                                        { label: "Monthly revenue", value: "+183%" },
                                        { label: "Organic traffic", value: "+237%" },
                                        { label: "PageSpeed score", value: "32 → 94" },
                                    ],
                                },
                            ].map((cs) => (
                                <div key={cs.client} className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {cs.tags.map((t) => (
                                            <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-[rgb(255,73,37)]/10 text-[rgb(255,73,37)] border border-[rgb(255,73,37)]/20 uppercase tracking-wider font-semibold">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-0.5 m-0">{cs.client}</h3>
                                    <p className="text-xs text-neutral-500 mb-3 m-0">{cs.location}</p>
                                    <p className="text-sm text-neutral-400 mb-4 m-0">{cs.summary}</p>
                                    <div className="mt-auto space-y-2 border-t border-neutral-800 pt-4">
                                        {cs.metrics.map((m) => (
                                            <div key={m.label} className="flex items-center justify-between gap-2">
                                                <span className="text-xs text-neutral-500">{m.label}</span>
                                                <span className="text-sm font-bold text-[rgb(255,73,37)]">{m.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6">
                            <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(255,73,37)] hover:underline no-underline">
                                Read the full case studies
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(255,73,37)] hover:underline no-underline">
                                Browse client success stories &amp; reviews
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>

                    {/* — Section 9: FAQs —————————————————————————————————————————————————————— */}
                    <section
                        id="faq"
                        className="scroll-mt-24"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 flex items-center gap-3">
                            <HelpCircle className="w-8 h-8 text-[rgb(255,73,37)]" />
                            Frequently Asked Questions
                        </h2>

                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl px-6 md:px-8">
                            {faqs.map((faq) => (
                                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                            ))}
                        </div>
                    </section>

                    {/* — Related Articles ———————————————————————————————————————————————————— */}
                    <section
                        className="mt-16"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Related Reading</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    title: "Client Success Stories & Verified Reviews",
                                    href: "/success-stories",
                                    tag: "Social Proof",
                                },
                                {
                                    title: "Case Studies — Real Results & Metrics",
                                    href: "/case-studies",
                                    tag: "Case Studies",
                                },
                                {
                                    title: "How AI Is Transforming Sri Lankan Businesses in 2026",
                                    href: "/blog/how-ai-transforms-sri-lanka-businesses-2026",
                                    tag: "AI Case Studies",
                                },
                                {
                                    title: "Top Automation Companies in Sri Lanka",
                                    href: "/blog/automation-companies-sri-lanka",
                                    tag: "Process Automation",
                                },
                                {
                                    title: "AI Companies in Sri Lanka — Complete Guide",
                                    href: "/ai-companies-sri-lanka",
                                    tag: "AI Companies",
                                },
                                {
                                    title: "Smart Websites in Sri Lanka — The 2026 Standard",
                                    href: "/blog/smart-websites-sri-lanka-2026",
                                    tag: "Web Technology",
                                },
                                {
                                    title: "AI Agents for Sri Lankan Businesses",
                                    href: "/blog/ai-agents-sri-lanka",
                                    tag: "AI Agents",
                                },
                                {
                                    title: "Web Design Companies in Sri Lanka — 2026 Guide",
                                    href: "/web-design-sri-lanka",
                                    tag: "Web Design",
                                },
                            ].map((article) => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 hover:border-[rgb(255,73,37)]/30 transition-colors no-underline group"
                                >
                                    <span className="text-xs text-[rgb(255,73,37)] font-semibold uppercase tracking-wider">
                                        {article.tag}
                                    </span>
                                    <p className="text-white font-semibold mt-2 mb-0 group-hover:text-[rgb(255,73,37)] transition-colors text-sm">
                                        {article.title}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── Bottom CTA (subtle) ─────────────────── */}
                    <section
                        className="mt-16"
                    >
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-8 text-center">
                            <div className="flex items-center justify-center gap-1.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-[rgb(255,73,37)] fill-[rgb(255,73,37)]" />
                                ))}
                                <span className="text-sm text-neutral-400 ml-2">4.9/5 from 100+ projects delivered</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Need help choosing the right software partner?
                            </h3>
                            <p className="text-neutral-400 mb-6 max-w-xl mx-auto text-sm">
                                Every project has unique requirements — budget, timeline, technology stack, and team size. If you&apos;re evaluating software companies in Sri Lanka for your next project, we&apos;re happy to share our perspective based on years of operating in this market — no strings attached.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(255,73,37)] text-white font-semibold rounded-lg hover:bg-[rgb(255,73,37)]/90 transition-colors text-sm no-underline"
                                >
                                    Get a Free Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="/success-stories"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-700 text-neutral-200 font-semibold rounded-lg hover:border-[rgb(255,73,37)]/40 hover:text-[rgb(255,73,37)] transition-colors text-sm no-underline"
                                >
                                    See client success stories
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ── Author / E-E-A-T Section ─────────────── */}
                    <section
                        className="mt-16"
                    >
                        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8">
                            <div className="flex items-start gap-5">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[rgb(255,73,37)] to-orange-600 flex items-center justify-center p-2 shrink-0">
                                    <Image src="/favicon.png" alt="Shahid Shamir — Founder of ARC AI" width={64} height={64} className="w-full h-full object-contain" loading="lazy" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 m-0">About the Author</h3>
                                    <p className="text-sm text-[rgb(255,73,37)] font-medium mb-3 m-0">
                                        <a href="https://www.linkedin.com/in/shahid-shamir-2ab901105/" target="_blank" rel="noopener noreferrer" className="hover:underline">Shahid Shamir</a> &middot; Founder &amp; Lead Engineer, <a href="https://www.linkedin.com/company/105845719" target="_blank" rel="noopener noreferrer" className="hover:underline">ARC AI</a>
                                    </p>
                                    <p className="text-sm text-neutral-400 m-0">
                                        This guide was researched and compiled by Shahid Shamir, founder of ARC AI, with 4+ years of hands-on experience building software products across Colombo and Birmingham (UK). Having delivered 50+ projects for clients in tourism, real estate, fintech, and e-commerce, Shahid evaluates the Sri Lankan software landscape from direct industry participation — not desk research.
                                    </p>
                                    <p className="text-sm text-neutral-400 mt-3 m-0">
                                        Data sourced from the <a href="https://www.srilankabusiness.com/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Export Development Board (EDB)</a>, <a href="https://www.cbsl.gov.lk/en/publications/economic-and-financial-reports/annual-economic-review" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Central Bank Annual Economic Review 2025</a>, <a href="https://slasscom.lk/" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">SLASSCOM</a>, <a href="https://clutch.co/lk" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Clutch</a>, <a href="https://www.goodfirms.co/software-development/sri-lanka" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">GoodFirms</a>, and <a href="https://www.gartner.com/reviews" target="_blank" rel="noopener noreferrer" className="text-[rgb(255,73,37)] hover:underline">Gartner Peer Insights</a>. Companies were independently evaluated — readers are encouraged to verify all claims via the listed websites and third-party review platforms.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mt-4">
                                        <a href="https://www.linkedin.com/in/shahid-shamir-2ab901105/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">LinkedIn (Personal)</a>
                                        <span className="text-neutral-800">|</span>
                                        <a href="https://www.linkedin.com/company/105845719" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">LinkedIn (ARC AI)</a>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/about" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">About ARC AI</Link>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/contact" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">Contact Us</Link>
                                        <span className="text-neutral-800">|</span>
                                        <Link href="/blog" className="text-xs text-neutral-500 hover:text-[rgb(255,73,37)] transition-colors no-underline">More Articles</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Tags ─────────────────────────────────── */}
                    <div
                        className="mt-12 pt-8 border-t border-neutral-800"
                    >
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                            Topics Covered
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { tag: "Software Companies Sri Lanka", href: "/blog" },
                                { tag: "IT Outsourcing Sri Lanka", href: "/blog" },
                                { tag: "Software Development Colombo", href: "/web-design-sri-lanka" },
                                { tag: "AI Development Sri Lanka", href: "/ai-companies-sri-lanka" },
                                { tag: "Enterprise Software", href: "/blog" },
                                { tag: "Offshore Development", href: "/blog" },
                                { tag: "Sri Lanka vs India", href: "#comparison" },
                                { tag: "AI Automation", href: "/ai-automation-sri-lanka" },
                                { tag: "AI Consultants", href: "/ai-consultants-sri-lanka" },
                                { tag: "Web Design Sri Lanka", href: "/web-design-sri-lanka" },
                            ].map((item) => (
                                <Link
                                    key={item.tag}
                                    href={item.href}
                                    className="px-4 py-2 bg-neutral-900 text-neutral-300 text-sm rounded-full border border-neutral-800 hover:border-[rgb(255,73,37)]/30 hover:text-[rgb(255,73,37)] transition-colors no-underline"
                                >
                                    {item.tag}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-6">
                            <SocialShareButtons />
                        </div>
                    </div>

                    {/* ── Navigation ───────────────────────────── */}
                    <div
                        className="mt-12 pt-8 border-t border-neutral-800 flex items-center justify-between"
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Back</div>
                                <div className="font-semibold">All Articles</div>
                            </div>
                        </Link>
                        <Link
                            href="/ai-companies-sri-lanka"
                            className="group flex items-center gap-2 text-neutral-400 hover:text-[rgb(255,73,37)] transition-colors text-right"
                        >
                            <div>
                                <div className="text-xs uppercase tracking-wider mb-1">Related</div>
                                <div className="font-semibold">AI Companies Guide</div>
                            </div>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Cross-link to Web Design Guide */}
                    <div
                        className="mt-8 bg-gradient-to-br from-[rgb(255,73,37)]/10 via-neutral-950 to-black border border-[rgb(255,73,37)]/20 rounded-xl p-6"
                    >
                        <Link href="/web-design-sri-lanka" className="flex items-center justify-between gap-4 group no-underline">
                            <div>
                                <div className="text-xs font-bold text-[rgb(255,73,37)] uppercase tracking-widest mb-1">Related Pillar Guide</div>
                                <h4 className="text-lg font-bold text-white group-hover:text-[rgb(255,73,37)] transition-colors m-0">Web Design Companies in Sri Lanka — The Complete 2026 Guide</h4>
                                <p className="text-sm text-neutral-400 mt-1 m-0">12 agencies evaluated · Pricing benchmarks · WordPress vs Next.js</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-[rgb(255,73,37)] transition-colors shrink-0" />
                        </Link>
                    </div>
                </article>
            </div>
            <Footer />
        </div>
    );
}
