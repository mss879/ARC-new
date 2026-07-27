/* ── Single source of truth for /software-companies-sri-lanka ──
 * The visible page (content.tsx) and the JSON-LD structured data (page.tsx)
 * both read from this file so they can never drift apart.
 */

export const PAGE_DATES = {
    published: "2026-04-19",
    // Only bump `modified` when the page content substantively changes.
    modified: "2026-07-27",
};

export function formatDisplayDate(iso: string): string {
    return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}

export interface Company {
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

export const companies: Company[] = [
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
        hq: "Colombo (Global HQ: Linköping, Sweden)",
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
            "With over two and a half decades of experience, Creative Software is one of the pioneering IT outsourcing companies in Sri Lanka. They specialise in providing dedicated, long-term software development teams to global clients. Rather than project-based work, their model centres on embedding engineers within client organisations for extended periods — often years. This makes them a reliable partner for companies needing to scale their engineering teams without the overhead of direct recruitment in high-cost markets. As one of the island's oldest software firms, they bring unmatched institutional knowledge about operating successful offshore teams.",
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
        name: "Loons Lab",
        tagline: "Emerging-Tech Studio — AR/VR, ML & IoT",
        founded: "2016",
        hq: "Colombo (World Trade Center)",
        size: "11–50",
        specialty: "Custom Software with Emerging Tech",
        description:
            "Loons Lab is a compact Colombo studio operating from the World Trade Center under the tagline \"Building Digital Systems of National Importance\". The team pairs conventional custom web and mobile development with emerging technologies — augmented and virtual reality, machine learning, IoT, and blockchain — an unusual breadth for a firm of its size. Their portfolio spans university, public-sector, and donor-funded programmes, including an intellectual property management system built for the University of Sri Jayewardenepura (company-attributed) alongside occupational health and safety and health information systems. A UN Global Compact participant, Loons Lab suits organisations that want a small senior team rather than a large offshore delivery factory.",
        services: ["Custom Web & Mobile Development", "AR/VR & Mixed Reality", "Machine Learning Solutions", "IoT Development"],
        bestFor: "SMEs, universities and public-sector programmes wanting a small senior team with emerging-tech expertise.",
        notableClients: "Universities, public-sector and donor-funded programmes in Sri Lanka",
        projectExample: "Built an intellectual property management system for the University of Sri Jayewardenepura — the Sri Lankan university filing the most patents annually (company-attributed).",
    },
    {
        name: "Xeynergy",
        tagline: "Dedicated Teams & Staff Augmentation from Colombo",
        founded: "2021",
        hq: "Colombo 03",
        size: "10–49",
        specialty: "Staff Augmentation & Dedicated Teams",
        description:
            "Xeynergy is one of the youngest firms in this guide — a Colombo-based provider of vetted Sri Lankan developers for US and European companies, engaged through staff augmentation or fully managed dedicated teams. Alongside team extension, they take on project-based custom development, low/no-code builds, QA and application support, UI/UX design, DevOps and cloud migration, and data engineering with Power BI. The firm maintains a US registered presence while running engineering operations from Colombo, and its leadership brings prior Fortune 500 delivery experience across travel, education, telecom, and finance. A pragmatic option for extending an existing engineering team rather than commissioning a fixed-scope product build.",
        services: ["IT Staff Augmentation", "Dedicated Development Teams", "QA & Application Support", "DevOps & Cloud Migration"],
        bestFor: "US/EU companies extending an existing engineering team with vetted Sri Lankan developers.",
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

export const companyWebsites: Record<string, string> = {
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
    "Loons Lab": "https://loonslab.com",
    "Xeynergy": "https://www.xeynergy.com",
    "CodeGen International": "https://codegen.co.uk",
    "Zone24x7": "https://zone24x7.com",
    "Fortude": "https://fortude.co",
    "Cambio Software Engineering": "https://cambio.lk",
    "Fcode Labs": "https://fcodelabs.com",
    "Insighture": "https://insighture.com",
    "Allion Technologies": "https://www.alliontechnologies.com",
    "LSEG Technology (MillenniumIT)": "https://www.lseg.com",
};

export const companyCategories: Record<string, string> = {
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
    "Loons Lab": "Boutique & Specialist",
    "Xeynergy": "Boutique & Specialist",
};

export const categoryOrder = ["Enterprise & Global", "Mid-Market & Growth", "Boutique & Specialist"];

export const categoryDescriptions: Record<string, string> = {
    "Enterprise & Global": "Large-scale companies with 500+ employees, global operations, and enterprise-grade platforms.",
    "Mid-Market & Growth": "Established firms with 100–500 employees delivering specialised software services.",
    "Boutique & Specialist": "Agile, focused teams under 100 employees with deep specialisation in specific technology domains.",
};

/* Companies ordered exactly as they render on the page (by category, then array order).
 * Used to generate the ItemList structured data so schema order always matches the DOM. */
export const companiesInRenderOrder: Company[] = categoryOrder.flatMap((category) =>
    companies.filter((c) => companyCategories[c.name] === category)
);

export const faqs = [
    {
        q: "What are the top-rated software development companies in Sri Lanka for 2026?",
        a: "The top-rated software companies in Sri Lanka for 2026 include WSO2, Virtusa, IFS, 99x, LSEG Technology, Calcey Technologies, Rootcode, and Surge Global. The full list of 23 reviewed companies spans enterprise middleware, digital engineering, ERP, product engineering, capital markets technology, cloud-native development, IoT, and travel tech.",
    },
    {
        q: "Why is Sri Lanka considered a good destination for software outsourcing?",
        a: "Sri Lanka offers strong English proficiency (higher than many South Asian neighbours), a well-educated STEM workforce of 175,000+ IT professionals, hourly rates of $20–$60 USD (50–70% savings over UK/US), a convenient UTC+5:30 timezone that overlaps with European and Middle Eastern business hours, and growing government commitment including a 30 billion LKR (~US$98M) digital budget allocation in 2026. Unlike larger outsourcing markets, Sri Lanka competes on quality over volume — producing ~10,000 selective IT graduates annually.",
    },
    {
        q: "How much does it cost to hire a software development company in Sri Lanka?",
        a: "Hourly rates for software development in Sri Lanka typically range from $20 to $60 USD depending on the company size, specialisation, and seniority of developers. Boutique agencies and startups charge $20–$35/hour, mid-market firms charge $35–$50/hour, and established enterprise-grade companies charge $45–$60/hour. Monthly retainers for dedicated developers typically range from $2,500 to $5,000/month. This represents significant savings compared to UK rates ($80–$150/hour), US rates ($100–$200/hour), and is competitive with Indian rates ($18–$50/hour) while often offering higher per-capita quality.",
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
        a: "SLASSCOM (Sri Lanka Association of Software and Service Companies) is the national chamber representing the IT/BPM industry in Sri Lanka. It serves as the primary industry body advocating for policy, talent development, and international market access. Most major Sri Lankan software firms are SLASSCOM members. The organisation publishes industry reports, organises events, and runs initiatives supporting startup growth and talent pipeline development. Being a SLASSCOM member is generally considered a positive indicator of a company's standing in the local industry.",
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
