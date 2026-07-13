import { Server, Palette, Rocket, Search, Globe, Layout, Shield, Brain, MessageSquare, Clock, Users2 } from "lucide-react"

export const services = [
  {
    id: "audit-action-plan",
    landingPageHref: "/website-audit",
    title: "Website Audit & Action Plan",
    description: "A focused technical and conversion audit for business owners who know their website has problems, but do not know what to fix first. I review speed, security, SEO basics, UX friction, plugins, hosting, and maintenance risks, then give you a prioritized plan.",
    icon: Search,
    features: ["Performance Review", "Security Review", "SEO Basics", "UX Friction", "Technical Roadmap"],
    technologies: ["PageSpeed Insights", "Lighthouse", "WordPress", "Webflow", "Analytics"],
    caseStudyTitle: "Co-Active Training Institute",
    painPoint: "You are unsure whether to optimize, rebuild, migrate, or secure the site first.",
    evidence: "Based on the same type of review work used across WordPress, Webflow, and public-sector projects.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    bestFor: "Established websites with performance, security, SEO, or maintenance doubts.",
    timeline: "3-5 business days",
    outcome: "A clear action plan that separates urgent fixes from nice-to-have improvements.",
    deliverables: ["Audit Summary", "Priority Fix List", "Risk Notes", "Recommended Next Step"],
    regionPrices: {
      latam: [
        { label: "Audit", min: 200, max: 350 },
      ],
      usa: [
        { label: "Audit", min: 400, max: 600 },
      ],
    },
  },
  {
    id: "optimize-protect",
    landingPageHref: "/wordpress-speed-optimization",
    title: "Optimize & Protect Your Website",
    description: "For websites that already exist but feel slow, fragile, outdated, or risky. I improve performance, clean technical debt, update risky pieces, harden the site, and make the platform easier to maintain.",
    icon: Shield,
    features: ["Core Web Vitals", "Security Hardening", "Plugin Cleanup", "Access Review", "Technical SEO"],
    technologies: ["WordPress", "PHP", "JavaScript", "Caching", "Security Headers"],
    caseStudyTitle: "Co-Active Training Institute",
    painPoint: "Your site works, but it is slow, exposed, hard to maintain, or quietly costing trust.",
    evidence: "Ongoing contractor work supporting performance, security, maintenance, SEO, and visual fixes for a global training platform with 150K+ users.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    bestFor: "Businesses that want to improve the current website without rebuilding everything.",
    timeline: "2-4 weeks",
    outcome: "A faster, safer, cleaner website with fewer hidden risks and a stronger technical base.",
    deliverables: ["Performance Fixes", "Security Hardening", "Plugin and Access Cleanup", "Before/After Notes"],
    pricingNote: "Scope depends on site size, platform, user roles, plugin risk, hosting setup, and how much implementation is needed after the audit.",
  },
  {
    id: "hacked-site-recovery",
    landingPageHref: "/hacked-wordpress-recovery",
    title: "Hacked Site Recovery",
    description: "Your site's been hacked. Don't panic. I'll clean the malware, close the vulnerabilities, restore your content, and implement protections to prevent it from happening again. Fast response, minimal downtime.",
    icon: Server,
    features: ["Emergency Malware Cleanup", "Vulnerability Patching", "Content Restoration", "Security Hardening", "Post-Recovery Monitoring"],
    technologies: ["Malware Detection", "Backup Recovery", "File Integrity Monitoring", "Security Scanning"],
    caseStudyTitle: "Cybernetips",
    painPoint: "Your website is infected, redirecting users, showing warnings, or has suspicious access.",
    evidence: "Security and cleanup experience across WordPress environments with outdated plugins, exposed endpoints, and abandoned user access.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    bestFor: "Site owners whose website has been compromised, defaced, or infected with malware.",
    timeline: "24-72 hours (emergency)",
    outcome: "A clean, restored website with strengthened security to prevent future attacks.",
    deliverables: ["Malware Cleanup", "Vulnerability Report", "Security Hardening", "Recovery Documentation"],
    regionPrices: {
      latam: [
        { label: "Recuperación", min: 120, max: 300 },
      ],
      usa: [
        { label: "Recovery", min: 300, max: 800 },
      ],
    },
  },
  {
    id: "rebuild-migrate",
    landingPageHref: "/website-migration",
    title: "Rebuild & Platform Migration",
    description: "When the current platform is holding the business back, I rebuild or migrate the site with a plan for content, SEO, redirects, integrations, performance, and maintainability.",
    icon: Globe,
    features: ["SEO Preservation", "Content Migration", "Redirect Planning", "CMS Strategy", "Post-Launch QA"],
    technologies: ["WordPress", "Webflow", "Next.js", "Sanity", "API Integration"],
    caseStudyTitle: "Truenorth Corporation",
    painPoint: "Your site is trapped in an old setup, difficult CMS, heavy theme, or fragile builder.",
    evidence: "Migration work across Truenorth, Puerto Rico traffic-safety, and other public-sector/corporate websites.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    bestFor: "Companies stuck on outdated platforms who want better performance, usability, and maintainability.",
    timeline: "3-8 weeks",
    outcome: "A modern, faster, more maintainable platform with zero data loss and preserved SEO rankings.",
    deliverables: ["Migration Strategy", "Data Migration", "SEO Preservation", "Post-Launch Support"],
    regionPrices: {
      latam: [
        { label: "Migración mismo CMS", min: 250, max: 700 },
        { label: "Migración cambio de CMS", min: 1200, max: 3000 },
      ],
      usa: [
        { label: "Same CMS Migration", min: 600, max: 1500 },
        { label: "Cross-CMS Migration", min: 2500, max: 6000 },
      ],
    },
  },
  {
    id: "websites-mvps",
    landingPageHref: "/website-audit",
    title: "Websites & MVPs",
    description: "A new website, landing page, CMS build, or MVP for businesses that need something clear, fast, maintainable, and credible. I handle strategy, UX direction, development, launch, and the technical setup behind it.",
    icon: Layout,
    features: ["Conversion-Focused UX", "CMS or App Build", "Responsive Development", "Technical SEO", "Launch Support"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress"],
    caseStudyTitle: "Departamento de Educación PR",
    painPoint: "You need a professional website or MVP, but you do not want a bloated build that becomes hard to maintain.",
    evidence: "Includes from-scratch WordPress builds, public-sector websites, corporate sites, and custom web platforms.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    bestFor: "Founders, service businesses, and teams that need a new site or MVP with a real launch path.",
    timeline: "4-8 weeks",
    outcome: "A fast, credible website or MVP built to explain the offer, support SEO, and capture qualified leads.",
    deliverables: ["Strategy Sprint", "UX/UI Direction", "CMS or Product Build", "Analytics and Launch Support"],
    quoteOptions: [
      { id: "landing-wordpress", name: "Landing Page / CMS Website", description: "Ideal for business sites, blogs, and content-driven projects. Built on a CMS or modern frontend depending on the use case." },
      { id: "mvp-framework", name: "MVP with Framework", description: "Custom-built web app with React, Next.js, or Node. Useful for SaaS products, internal tools, and interactive platforms." },
    ],
  },
  {
    id: "ongoing-partner",
    landingPageHref: "/wordpress-maintenance",
    title: "Ongoing Website Partner",
    description: "Monthly technical support for businesses that need someone to keep the site healthy: updates, fixes, security checks, performance improvements, small feature work, and technical coordination.",
    icon: Clock,
    features: ["Monthly Maintenance", "Small Feature Work", "Security Checks", "Performance Monitoring", "Technical Support"],
    technologies: ["WordPress", "Webflow", "PHP", "JavaScript", "Hosting"],
    caseStudyTitle: "Co-Active Training Institute",
    painPoint: "Your website keeps needing technical decisions, fixes, or support, but hiring a full-time developer is not the right move.",
    evidence: "Current long-term contractor support across WordPress, PHP, SEO, servers, security, layout fixes, and maintenance.",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    bestFor: "Teams with an active website that needs steady technical ownership.",
    timeline: "Monthly retainer",
    outcome: "A more stable website with a reliable technical partner who understands the business over time.",
    deliverables: ["Monthly Priority List", "Maintenance Tasks", "Security and Access Review", "Technical Recommendations"],
    pricingNote: "Retainers depend on response time, monthly hours, platform complexity, and whether server support is included.",
  },
]

export const hero = {
  title: {
    prefix: "Websites that actually",
    highlight: "bring in business.",
  },
  roles: ["UI/UX that converts", "SEO + Speed", "Webflow / WordPress / Next.js", "I do the work myself"],
  description: "I build and fix websites for businesses that need them to load fast, look legit, and turn visitors into paying customers. No fluff, no agencies — just me.",
  proof: ["I reply within 24h", "Built for SEO from day one", "Launch support included"],
  location: "Based in Santo Domingo · Working worldwide",
  buttons: {
    primary: "Book a Strategy Call",
    secondary: "Get a Free Audit",
    downloadCv: "Download My Resume",
  },
}

export const softSkills = [
  { icon: MessageSquare, label: "Communication" },
  { icon: Brain, label: "Problem Solving" },
  { icon: Users2, label: "Teamwork" },
  { icon: Clock, label: "Time Management" },
  { icon: Rocket, label: "Adaptability" },
  { icon: Palette, label: "Creativity" },
]

export const projects = [
  {
    title: "Media Audit",
    slug: "media-audit",
    description: "A WordPress media cleanup product I created after encountering years of accumulated uploads on a large public-sector website. It helps teams find unused files while reducing the risk of deleting media that is still in use.",
    image: "/projects/media-audit-pro.png",
    tags: ["WordPress", "PHP", "MySQL", "AJAX", "Freemius"],
    category: "fullstack",
    github: "https://github.com/oliverodev/media-audit",
    demo: "https://wordpress.org/plugins/oliverodev-media-audit/",
    featured: true,
    size: "medium",
    industry: "WordPress Plugins",
    projectType: "Plugin Development",
    role: "Creator and developer",
    engagement: "Independent product · Ongoing",
    metrics: {
      users: {
        value: "Official directory",
        label: "Published on WordPress.org"
      },
      performance: {
        value: "Version 3.4.8",
        label: "Active product"
      },
      impact: {
        value: "Free + PRO",
        label: "Product model"
      }
    },
    challenge: "A large WordPress installation had accumulated years of media uploads. Existing cleanup workflows made it difficult to distinguish genuinely unused files from assets referenced in page builders, metadata, widgets, or theme settings.",
    solution: "I built a scanning engine that checks multiple WordPress content locations, processes large libraries in batches, shows where files are used, and keeps deletion under the administrator's control. The PRO version adds deeper builder integrations, storage analysis, bulk cleanup, and a recoverable trash workflow.",
    impactStatement: "The tool evolved from an internal solution into a publicly available product with free and premium versions, published in the official WordPress plugin directory and supported by public user reviews.",
    responsibilities: [
      "Product strategy, architecture, and full plugin development",
      "Media reference detection across WordPress content and metadata",
      "Batch scanning, background schedules, filters, and CSV export",
      "PRO integrations, storage analysis, and recoverable trash workflow",
      "Ongoing maintenance, releases, support, and product improvements"
    ]
  },
  {
    title: "Cybernetips",
    slug: "cybernetips",
    description: "Cybersecurity company focused on incident response, digital asset recovery, and protection services.",
    image: "/projects/cybernetips.png",
    tags: ["Cybersecurity", "Incident Response", "Digital Recovery", "Fullstack"],
    category: "fullstack",
    github: "#",
    demo: "https://cybernetips.com/",
    featured: true,
    size: "large",
    industry: "Cybersecurity",
    projectType: "MVP Launch",
    metrics: {
      users: "Global enterprise clients",
      performance: "24/7 incident response",
      impact: "Digital asset recovery services"
    }
  },
  {
    title: "Co-Active Training Institute",
    slug: "co-active-training-institute",
    description: "Ongoing fullstack development and maintenance for a global leadership training platform. Responsible for SEO strategies, performance optimization, and implementing new features for a site serving over 150k professionals worldwide.",
    image: "/projects/coactive.jpg",
    tags: ["Wordpress", "JS", "PHP", "Arlo", "Moodle", "SEO", "Performance"],
    category: "fullstack",
    github: "#",
    demo: "https://coactive.com/",
    featured: true,
    size: "large",
    industry: "EdTech",
    projectType: "Technical Partnership",
    role: "Web development contractor",
    engagement: "11 months and ongoing · Contract through March 2027",
    metrics: {
      users: {
        value: "150,000+",
        label: "Platform users"
      },
      performance: {
        value: "Ongoing",
        label: "Technical partnership"
      },
      impact: {
        value: "60+ countries",
        label: "Global platform reach"
      }
    },
    challenge: "The WordPress platform had performance issues, visual inconsistencies, outdated and inactive plugins, publicly exposed endpoints, and former team members who still retained access.",
    solution: "My work has focused on security hardening, access reviews, plugin maintenance, performance optimization, new functionality, visual fixes, technical SEO, and a clearer mega menu. I collaborate with the specialists responsible for Arlo, Moodle, and server operations when cross-system support is needed.",
    impactStatement: "The ongoing engagement has strengthened the security, maintainability, performance, and visual consistency of a global training platform serving more than 150,000 users across approximately 60 countries.",
    responsibilities: [
      "WordPress, PHP, JavaScript, HTML, and CSS development",
      "Security hardening and user access reviews",
      "Plugin updates, removal audits, and ongoing maintenance",
      "Performance optimization and technical SEO support",
      "Visual corrections and mega-menu usability improvements"
    ]
  },
  {
    title: "Departamento de Educación PR",
    slug: "departamento-de-educacion-pr",
    description:
      "Led end-to-end development of a government website for Puerto Rico. Delivered a responsive, accessible, and CMS-integrated solution aligned with public sector standards.",
    image: "/projects/departamento-educacion.jpg",
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    category: "fullstack",
    github: "#",
    demo: "https://de.pr.gov/",
    industry: "Government",
    projectType: "Custom Development",
    role: "Employee developer at Truenorth",
    engagement: "Built from scratch during a 3-year employment",
    metrics: {
      users: "Public-sector platform",
      performance: "PageSpeed up to 98",
      impact: "Puerto Rico education services"
    },
    challenge: "The project required a new public-facing website capable of organizing and delivering educational information and government files through a maintainable WordPress platform.",
    solution: "I built the website from the ground up in WordPress using PHP, JavaScript, HTML, and CSS, and integrated APIs used to manage educational government files.",
    impactStatement: "The result is a production WordPress platform supporting public access to information from Puerto Rico's Department of Education.",
    featured: true,
    size: "medium",
  },
  {
    title: "D.Med Healthcare Group",
    slug: "dmed-healthcare-group",
    description: "Corporate website for an international healthcare group, built to present its services clearly across devices and give its team a reliable content platform.",
    image: "/projects/dmed.jpg",
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    category: "fullstack",
    github: "https://github.com/wolfslender",
    demo: "https://dmed-healthcare.com/",
    featured: false,
    size: "medium",
  },
  {
    title: "Acuastock",
    slug: "acuastock",
    description: "Specialized e-commerce for ornamental fish, aquariums, and accessories. Features product catalog, import services, and comprehensive aquatic supplies.",
    image: "/projects/acuastock.jpg",
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    category: "fullstack",
    github: "#",
    demo: "https://acuastock.com/",
    featured: false,
    size: "large",
  },
  {
    title: "Keitel De Luna - Cybersecurity Analyst | IT Portfolio",
    slug: "keitel-de-luna-cybersecurity-analyst",
    description: "Certified professional with credentials from IBM and Google. Expert in building secure systems, vulnerability management, and fostering efficient technical environments.",
    image: "/projects/Keitel-De-Luna.png",
    tags: ["Cybersecurity", "IT Support", "Vulnerability Management"],
    category: "fullstack",
    github: "#",
    demo: "https://keiteldeluna.com/",
    featured: false,
    size: "large",
  },
  {
    title: "CST Puerto Rico Website",
    slug: "cst-puerto-rico-website",
    description: "Government project focused on traffic safety. Includes CMS, incident reports, interactive maps, and community feedback tools.",
    image: "/projects/cst-puerto-rico.jpg",
    tags: ["Webflow", "JS", "Tailwind CSS"],
    category: "fullstack",
    github: "#",
    demo: "https://www.cst.pr.gov/",
    featured: true,
    industry: "Government",
    projectType: "Custom Development",
    role: "Employee developer at Truenorth",
    engagement: "WordPress build and later Webflow migration",
    metrics: {
      users: "Public-sector platform",
      performance: "PageSpeed up to 98",
      impact: "Traffic-safety data access"
    },
    challenge: "The traffic-safety website needed a stable public experience and a reliable way to present accident counts and related government information.",
    solution: "I worked on the original WordPress implementation, integrated APIs for accident statistics, and later migrated the website to Webflow as part of the Truenorth team.",
    impactStatement: "The project provides a clearer, faster public channel for traffic-safety information in Puerto Rico.",
    size: "large",
  },
  {
    title: "Truenorth Corporation",
    slug: "truenorth-corporation",
    description: "Migrated corporate website from WordPress to Webflow, rebuilding the frontend and integrating custom API functionalities for better performance.",
    image: "/projects/truenorth.jpg",
    tags: ["Webflow", "WordPress", "HTML", "CSS", "JavaScript", "PHP", "Azure"],
    category: "frontend",
    github: "#",
    demo: "https://www.truenorth.pr/",
    industry: "Enterprise",
    projectType: "Migration",
    role: "Employee developer",
    engagement: "3 years · Small 3-person delivery team",
    metrics: {
      users: {
        value: "3 years",
        label: "Employment"
      },
      performance: {
        value: "Up to 98",
        label: "PageSpeed score"
      },
      impact: {
        value: "3 major platforms",
        label: "Corporate and public sector"
      }
    },
    challenge: "The corporate WordPress installation used a poorly configured Avada setup, suffered from severe performance and stability problems, and contained outdated plugins and years of accumulated data.",
    solution: "As an employee on a three-person delivery team, I worked across development, maintenance, security, Azure operations, and migration. I created a custom cleanup plugin, hardened the WordPress installation, and helped migrate the corporate website to Webflow.",
    impactStatement: "The engagement improved platform stability and security, produced PageSpeed scores of up to 98 on selected projects, and led to continued responsibility across major corporate and Puerto Rico public-sector websites.",
    responsibilities: [
      "WordPress maintenance, security hardening, and custom PHP development",
      "Custom cleanup plugin for years of accumulated WordPress data",
      "Corporate website migration from WordPress to Webflow",
      "Azure-related technical operations and troubleshooting",
      "Delivery support for education and traffic-safety government projects"
    ],
    featured: false,
    size: "medium",
  },
  {
    title: "GovValue",
    slug: "govvalue",
    description: "WordPress recovery and SEO cleanup after a severe hack involving a database backdoor, spam-page injection, and redirects to suspicious external pages.",
    image: "/projects/govvalue.jpg",
    tags: ["WordPress", "Security", "Malware Cleanup", "SEO Recovery"],
    category: "fullstack",
    github: "https://github.com/wolfslender",
    demo: "https://govvalue.com/",
    industry: "Government Services",
    projectType: "Security Recovery & SEO Cleanup",
    challenge: "The site had been fully compromised. A database-level backdoor was injecting spam pages that redirected visitors and search crawlers to suspicious Chinese-language destinations, creating both security and SEO damage.",
    solution: "I investigated the infection, cleaned the backdoor and injected content, hardened the WordPress environment, optimized the site, improved SEO foundations, and handled the Google Search Console cleanup process so the harmful indexed URLs could be reviewed and removed.",
    impactStatement: "After nearly two weeks of technical cleanup, verification, and search-console remediation, the site was restored to a clean, stable state with stronger security and a healthier SEO foundation.",
    responsibilities: [
      "Backdoor investigation and database cleanup",
      "Malware and injected spam-page removal",
      "WordPress hardening and post-recovery security checks",
      "SEO optimization and Google Search Console remediation",
      "Post-cleanup verification to confirm the site was stable"
    ],
    featured: false,
    size: "medium",
  },
  {
    title: "AESAN Website",
    slug: "aesan-website",
    description: "Official website for the Government of Puerto Rico. Responsive, accessible platform aligned with public health communication standards.",
    image: "/projects/aesan.jpg",
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    category: "fullstack",
    github: "https://github.com/wolfslender",
    demo: "https://aesan.dde.pr/",
    industry: "Government",
    projectType: "Custom Development",
    featured: false,
    size: "medium",
  },
  {
    title: "Centro de Sonografía PRE-VUE",
    slug: "centro-de-sonografia-pre-vue",
    description: "Official website for PRE-VUE Sonography Center in Puerto Rico. Features AI-powered 4D/HD Live imaging services, appointment scheduling, and a holistic wellness center integration.",
    image: "/projects/pre-vue.webp",
    tags: ["WordPress", "PHP", "CSS", "JavaScript"],
    category: "fullstack",
    github: "https://github.com/wolfslender",
    demo: "https://pre-vue.com/",
    featured: false,
    size: "medium",
  },
]

export const experience = [
  {
    company: "Co-Active Training Institute",
    position: "Frontend Web Developer (Part-time)",
    period: "2025 - Present",
    location: "Remote",
    description: "Collaborating on the maintenance and evolution of the main digital platform.",
    technologies: ["React", "JavaScript", "UI/UX", "Agile"],
    achievements: [
      "Contributing to the improvement of the user interface",
      "Participating in agile development cycles",
    ],
  },
  {
    company: "Dmed health care",
    position: "WordPress Specialist & Web Developer",
    period: "2018 - 2022",
    location: "Remote",
    description: "Led the development and maintenance of corporate websites using WordPress, focusing on custom themes and performance.",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Custom Themes"],
    achievements: [
      "Developed and maintained custom WordPress themes and plugins",
      "Optimized site performance and security protocols",
      "Managed content updates and technical troubleshooting",
    ],
  },
  {
    company: "TRUENORTH Corp.",
    position: "Frontend Web Developer",
    period: "2022 - 2025",
    location: "Santo Domingo",
    description: "Specializing in web security, maintenance, SEO, and site management on Azure servers. Focused on performance optimization and usability.",
    technologies: ["WordPress", "WebFlow", "SEO", "Azure", "JavaScript", "CSS3"],
    achievements: [
      "Achieved a 25% increase in user retention",
      "Reduced loading times by 30% through optimization",
      "Implemented custom CMS solutions boosting efficiency by 40%",
      "Developed 15+ web projects with WebFlow",
    ],
  },
  {
    company: "CYBERNETIPS",
    position: "Fullstack Web Developer",
    period: "2017 - 2018",
    location: "Miami, FL (Remote)",
    description: "Specializing in backend development from scratch for high-traffic, large-scale projects and server administration.",
    technologies: ["HTML", "CSS", "JavaScript", "CPanel", "Cloud Architecture"],
    achievements: [
      "Managed and optimized servers in CPanel and Cloud environments",
      "Led optimization and maintenance of Cloud-based systems",
      "Ensured high availability and security of digital assets",
    ],
  },
]

export const education = [
  {
    school: "Liceo Minerva Mirabal",
    degree: "Computer Science, Bachelor's Degree",
    period: "Jun 2012 - Sep 2015",
    location: "Santo Domingo",
    description: "Graduated with a strong foundation in programming, algorithms, and information systems.",
  },
]

export const contact = {
  email: "contact@oliverodev.com",
  phone: "(829) 983-2502",
  location: "Santo Domingo, Dominican Republic",
  social: {
    github: "https://github.com/wolfslender",
    linkedin: "https://linkedin.com/in/alexis-olivero",
    instagram: "https://www.instagram.com/alexisfit97/",
  },
  calendly: "https://calendly.com/contact-oliverodev/30min",
}

export const plugins = {
  hero: {
    title: "WordPress Plugins",
    highlight: "Built to Scale",
    description: "Premium WordPress plugins designed to solve real problems. Clean code, regular updates, and dedicated support.",
  },
  plugins: [
    {
      title: "OliveroDev Media Audit",
      tagline: "Find unused media. Recover storage. Zero guesswork.",
      description: "The WordPress media library cleaner that actually works. Smart scanning detects unused files across posts, page builders, ACF fields, and WooCommerce — then lets you safely remove them with a risk-scoring system that prevents costly mistakes.",
      features: [
        "Smart scan: posts, pages, widgets, theme mods",
        "Used vs Unused dashboard with storage breakdown",
        "\"Where is it used?\" location finder per file",
        "Real-time scan progress counter",
        "Safe delete modal with thumbnail preview",
        "Export unused files as CSV",
        "Batch scanning & WP-Cron auto-scans",
      ] as string[],
      proFeatures: [
        "Deep Detection: Elementor, ACF, Divi, WooCommerce",
        "Risk Scoring (0–100) — know before you delete",
        "PRO Trash: restore files before permanent delete",
        "Bulk Cleanup by risk level (Low / Medium / All)",
        "Storage Analytics with visual charts",
        "Automated email reports (daily / weekly)",
        "Advanced exclusion rules (folder, size, author, MIME)",
        "3-day free trial — no credit card required",
      ] as string[],
      price: "From $29/year",
      plans: [
        { name: "1 Site", price: "$29", period: "/year", checkoutUrl: "https://checkout.freemius.com/plugin/23055/plan/47886/?trial=free" },
        { name: "Unlimited Sites", price: "$79", period: "/year", checkoutUrl: "https://checkout.freemius.com/plugin/23055/plan/49313/?trial=free" },
      ],
      url: "https://wordpress.org/plugins/oliverodev-media-audit/",
      freemiusUrl: "https://checkout.freemius.com/plugin/23055/plan/47886/?trial=free",
      icon: "🧹",
      color: "violet",
      bgColor: "bg-violet-500/5",
      stats: [
        { label: "Active Installs", value: "—", icon: "Users" },
        { label: "WordPress.org Rating", value: "—★", icon: "Star" },
        { label: "Last Updated", value: "May 2026", icon: "Clock" },
      ],
    },
  ],
}
