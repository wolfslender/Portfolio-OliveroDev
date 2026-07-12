export interface LandingPageData {
  slug: string
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
  problem: {
    title: string
    symptoms: string[]
  }
  whatICheck: {
    title: string
    items: string[]
  }
  process: {
    title: string
    steps: { number: string; title: string; description: string }[]
  }
  proof: {
    title: string
    items: { company: string; description: string }[]
  }
  deliverables: {
    title: string
    items: string[]
  }
  faq: {
    title: string
    items: { question: string; answer: string }[]
  }
  finalCta: {
    title: string
    description: string
    primaryCta: { label: string; href: string }
  }
}

export const landingPages: LandingPageData[] = [
  {
    slug: "website-audit",
    hero: {
      eyebrow: "Website Audit",
      title: "Know exactly what is holding your website back",
      description:
        "A focused technical and conversion audit for business owners who know their website has problems, but do not know what to fix first. I review speed, security, SEO basics, UX friction, plugins, hosting, and maintenance risks, then give you a prioritized plan.",
      primaryCta: { label: "Request an audit", href: "/contact?service=Website%20Audit%20and%20Action%20Plan" },
      secondaryCta: { label: "See my work", href: "/work" },
    },
    problem: {
      title: "Sound familiar?",
      symptoms: [
        "Your site feels slow, but you don't know whether the problem is the hosting, images, plugins, or theme.",
        "You are unsure whether to optimize, rebuild, migrate, or secure the site first.",
        "You keep hearing about PageSpeed, Core Web Vitals, and security risks, but nothing is being measured.",
        "You have no clear priority list — everything feels urgent and nothing gets done.",
      ],
    },
    whatICheck: {
      title: "What the audit covers",
      items: [
        "Performance and Core Web Vitals measurement",
        "Security basics: plugins, users, access, exposed endpoints",
        "WordPress and plugin risk review",
        "SEO technical fundamentals: sitemap, robots, structured data",
        "UX friction and conversion blockers",
        "Hosting and server red flags",
        "Priority roadmap with clear next steps",
      ],
    },
    process: {
      title: "How it works",
      steps: [
        { number: "01", title: "Review", description: "I analyze your site's performance, security, plugins, hosting, and technical setup." },
        { number: "02", title: "Prioritize", description: "I separate urgent risks from nice-to-have improvements based on business impact." },
        { number: "03", title: "Deliver", description: "You receive a clear written audit with a prioritized action plan." },
        { number: "04", title: "Decide", description: "You choose whether to implement the fixes yourself, hire me, or keep the plan as a reference." },
      ],
    },
    proof: {
      title: "Why this works",
      items: [
        { company: "Co-Active Training Institute", description: "Security and access review work across a global WordPress platform with 150K+ users." },
        { company: "Truenorth Corporation", description: "Technical audits across WordPress, Webflow, and public-sector websites during 3 years of employment." },
        { company: "Departamento de Educación PR", description: "Performance and accessibility review for a public-sector WordPress website." },
      ],
    },
    deliverables: {
      title: "What you receive",
      items: ["Audit summary", "Priority fix list", "Risk notes", "Recommended next step"],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "What does the audit include?", answer: "Performance, security, SEO technical basics, plugin risk, user access, hosting, and UX friction review. Everything is documented in a prioritized action plan." },
        { question: "Do you implement the fixes too?", answer: "Yes. After the audit, you can decide whether to implement the fixes yourself or hire me to handle them." },
        { question: "How long does it take?", answer: "Most audits are delivered within 3-5 business days after I receive full access to your site and hosting." },
        { question: "Is this only for WordPress?", answer: "No. The audit covers any website platform — WordPress, Webflow, Next.js, or custom builds." },
        { question: "Will I get a written report?", answer: "Yes. You receive a clear document with findings, risk notes, and a prioritized roadmap." },
      ],
    },
    finalCta: {
      title: "Ready to know what's holding your website back?",
      description: "Request your audit and get a prioritized action plan within days.",
      primaryCta: { label: "Request an audit", href: "/contact?service=Website%20Audit%20and%20Action%20Plan" },
    },
  },
  {
    slug: "wordpress-speed-optimization",
    hero: {
      eyebrow: "WordPress Speed Optimization",
      title: "Make your WordPress site faster without rebuilding everything",
      description:
        "Slow load times, poor PageSpeed scores, and heavy plugins are costing you visitors and trust. I improve performance by targeting the real bottlenecks — not just surface-level fixes.",
      primaryCta: { label: "Request optimization", href: "/contact?service=WordPress%20Speed%20Optimization" },
      secondaryCta: { label: "See my work", href: "/work" },
    },
    problem: {
      title: "Is your site slowing your business down?",
      symptoms: [
        "Your pages take too long to load and visitors leave before seeing your content.",
        "PageSpeed scores are low and you don't know what's causing the problem.",
        "Heavy page builders, large images, and too many plugins are dragging performance down.",
        "Your hosting feels slow, but you're not sure if it's the server or the site.",
      ],
    },
    whatICheck: {
      title: "What I optimize",
      items: [
        "Performance audit with Core Web Vitals measurement",
        "Plugin and theme bottleneck review",
        "Image and asset optimization",
        "Cache and CDN configuration review",
        "Database and server-level improvements",
        "Before and after measurements",
      ],
    },
    process: {
      title: "How it works",
      steps: [
        { number: "01", title: "Audit", description: "I measure your current performance and identify the biggest bottlenecks." },
        { number: "02", title: "Prioritize", description: "I focus on changes with the highest impact first — no unnecessary rebuilds." },
        { number: "03", title: "Implement", description: "I apply targeted fixes to images, plugins, cache, code, and server config." },
        { number: "04", title: "Measure", description: "You receive before and after comparisons showing real improvements." },
      ],
    },
    proof: {
      title: "Proven across real projects",
      items: [
        { company: "Co-Active Training Institute", description: "Performance optimization for a global WordPress platform serving 150K+ users across 60 countries." },
        { company: "Truenorth Corporation", description: "Achieved PageSpeed scores up to 98 across public-sector websites during 3 years of employment." },
      ],
    },
    deliverables: {
      title: "What you receive",
      items: ["Performance audit", "Optimization fixes", "Before and after reports", "Recommendations for ongoing speed"],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "How much faster will my site be?", answer: "Results depend on the current state, but most sites see meaningful improvement after targeted fixes. I measure before and after so you can see the difference." },
        { question: "Do you rebuild the site?", answer: "No. I focus on targeted optimization — fixing the real bottlenecks without unnecessary rebuilds." },
        { question: "Is this only for WordPress?", answer: "This service is focused on WordPress, but I can optimize other platforms as well." },
        { question: "Do you fix Core Web Vitals?", answer: "Yes. I review and improve LCP, INP, and CLS as part of the optimization process." },
      ],
    },
    finalCta: {
      title: "Ready to make your WordPress site faster?",
      description: "Request a performance audit and get a clear plan to improve load times.",
      primaryCta: { label: "Request optimization", href: "/contact?service=WordPress%20Speed%20Optimization" },
    },
  },
  {
    slug: "wordpress-security",
    hero: {
      eyebrow: "WordPress Security",
      title: "Harden your WordPress site before a small risk becomes a real incident",
      description:
        "Outdated plugins, public endpoints, old user accounts, and weak maintenance are common vulnerabilities I find across WordPress environments. A security review helps you reduce risk before something goes wrong.",
      primaryCta: { label: "Request a security review", href: "/contact?service=WordPress%20Security" },
      secondaryCta: { label: "See my work", href: "/work" },
    },
    problem: {
      title: "Is your WordPress site exposed?",
      symptoms: [
        "You have outdated plugins, themes, or WordPress core versions that haven't been updated in months.",
        "Old team members or inactive users still have admin access to your site.",
        "Public endpoints or login pages are exposed without protection.",
        "You have no visibility into security risks, backup status, or recent changes.",
      ],
    },
    whatICheck: {
      title: "What I review",
      items: [
        "Security review of plugins, themes, and WordPress core",
        "User access cleanup and role review",
        "Plugin and theme update risk assessment",
        "Basic hardening: login protection, headers, file permissions",
        "Backup and restore readiness check",
        "Maintenance recommendations",
      ],
    },
    process: {
      title: "How it works",
      steps: [
        { number: "01", title: "Review", description: "I scan your site for outdated plugins, exposed endpoints, and access risks." },
        { number: "02", title: "Prioritize", description: "I rank vulnerabilities by risk level so you know what needs attention first." },
        { number: "03", title: "Harden", description: "I apply targeted fixes to reduce exposure and improve your security posture." },
        { number: "04", title: "Document", description: "You receive a summary of what was found, what was fixed, and what to maintain." },
      ],
    },
    proof: {
      title: "Based on real security work",
      items: [
        { company: "Co-Active Training Institute", description: "Security hardening across a global WordPress platform — exposed endpoints, outdated plugins, inactive users, and access reviews." },
        { company: "Truenorth Corporation", description: "Security maintenance and hardening across WordPress and Azure environments for 3 years." },
      ],
    },
    deliverables: {
      title: "What you receive",
      items: ["Security review report", "Vulnerability priority list", "Hardening fixes", "Maintenance recommendations"],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "Will this guarantee my site won't be hacked?", answer: "No service can guarantee zero risk. This review reduces known vulnerabilities and improves your security posture significantly." },
        { question: "Do you fix the issues during the review?", answer: "Yes. I apply targeted hardening fixes during the process. The scope depends on what's found." },
        { question: "Is this only for WordPress?", answer: "This service is focused on WordPress, but security principles apply across platforms." },
        { question: "How often should I do this?", answer: "I recommend at least once a year, or whenever there are changes in plugins, users, or hosting." },
      ],
    },
    finalCta: {
      title: "Ready to reduce your WordPress security risk?",
      description: "Request a security review and get a clear picture of where you stand.",
      primaryCta: { label: "Request a security review", href: "/contact?service=WordPress%20Security" },
    },
  },
  {
    slug: "hacked-wordpress-recovery",
    hero: {
      eyebrow: "Hacked WordPress Recovery",
      title: "Recover your hacked WordPress site and close the door behind the attacker",
      description:
        "Malware, redirects, browser warnings, suspicious admin users, or spam pages — I help you recover your WordPress site and harden it to reduce the chance of it happening again.",
      primaryCta: { label: "Request recovery help", href: "/contact?service=Hacked%20WordPress%20Recovery" },
      secondaryCta: { label: "See my work", href: "/work" },
    },
    problem: {
      title: "Is your WordPress site compromised?",
      symptoms: [
        "Your site is showing browser warnings, redirecting visitors, or displaying spam content.",
        "You see admin users you don't recognize or login attempts from unknown locations.",
        "Google has flagged your site as unsafe or removed it from search results.",
        "You can't access your dashboard, or files keep changing without your action.",
      ],
    },
    whatICheck: {
      title: "What I handle",
      items: [
        "Malware cleanup and suspicious file removal",
        "Suspicious user account review and cleanup",
        "Vulnerability patching and plugin/theme risk review",
        "Backup and restore if needed",
        "Post-recovery hardening to reduce future risk",
        "Communication with hosting if required",
      ],
    },
    process: {
      title: "How it works",
      steps: [
        { number: "01", title: "Assess", description: "I review your site's current state, access, backups, and infection severity." },
        { number: "02", title: "Clean", description: "I remove malware, suspicious files, and compromised user accounts." },
        { number: "03", title: "Harden", description: "I apply security fixes to close the vulnerabilities the attacker used." },
        { number: "04", title: "Verify", description: "I verify the site is clean and provide documentation of what was done." },
      ],
    },
    proof: {
      title: "Based on real recovery work",
      items: [
        { company: "Co-Active Training Institute", description: "Security cleanup across WordPress environments with outdated plugins, exposed endpoints, and abandoned user access." },
        { company: "Cybernetips", description: "Incident response and digital recovery work across WordPress and server environments." },
      ],
    },
    deliverables: {
      title: "What you receive",
      items: ["Malware cleanup", "Vulnerability report", "Security hardening", "Recovery documentation"],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "Can you guarantee recovery?", answer: "Most cases can be triaged quickly, but response depends on access, hosting, backups, and infection severity. I will assess your situation honestly." },
        { question: "How long does recovery take?", answer: "Most sites can be cleaned and hardened within 24-72 hours. Complex cases may take longer." },
        { question: "Will my site be hacked again?", answer: "No recovery service can guarantee this. I focus on closing the vulnerabilities used and hardening the site to reduce future risk." },
        { question: "Do I need to provide hosting access?", answer: "Yes. I need access to the site files, database, and ideally hosting panel to perform a thorough cleanup." },
      ],
    },
    finalCta: {
      title: "Need help recovering your hacked WordPress site?",
      description: "Request recovery assistance and get a clear assessment of your situation.",
      primaryCta: { label: "Request recovery help", href: "/contact?service=Hacked%20WordPress%20Recovery" },
    },
  },
  {
    slug: "website-migration",
    hero: {
      eyebrow: "Website Migration",
      title: "Migrate or rebuild your website without losing the things that matter",
      description:
        "Moving from WordPress to Webflow, upgrading your CMS, or switching hosting? I plan and execute migrations with attention to content, SEO, redirects, integrations, and post-launch QA.",
      primaryCta: { label: "Request a migration plan", href: "/contact?service=Website%20Migration" },
      secondaryCta: { label: "See my work", href: "/work" },
    },
    problem: {
      title: "Is your current platform holding you back?",
      symptoms: [
        "Your WordPress installation uses an outdated theme or fragile page builder that keeps breaking.",
        "You're afraid of losing content, rankings, or integrations during a migration.",
        "Your current CMS is difficult to use and your team struggles to make updates.",
        "Performance and maintenance costs keep increasing without clear improvement.",
      ],
    },
    whatICheck: {
      title: "What I plan and execute",
      items: [
        "Migration strategy and content inventory",
        "Redirect plan to preserve SEO fundamentals",
        "Analytics and tracking migration",
        "Integration review: forms, APIs, third-party tools",
        "QA and launch support",
        "Post-launch monitoring and fixes",
      ],
    },
    process: {
      title: "How it works",
      steps: [
        { number: "01", title: "Plan", description: "I audit your current site, map content, and create a migration strategy." },
        { number: "02", title: "Migrate", description: "I transfer content, set up redirects, and configure the new platform." },
        { number: "03", title: "Test", description: "I run QA checks on content, SEO, integrations, and performance." },
        { number: "04", title: "Launch", description: "I support the launch and monitor for issues in the first days." },
      ],
    },
    proof: {
      title: "Proven migration experience",
      items: [
        { company: "Truenorth Corporation", description: "Corporate website migration from WordPress to Webflow as part of a 3-person delivery team." },
        { company: "CST Puerto Rico", description: "WordPress to Webflow migration for a government traffic-safety website with API integrations." },
      ],
    },
    deliverables: {
      title: "What you receive",
      items: ["Migration strategy", "Content transfer", "Redirect plan", "SEO preservation", "Post-launch support"],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "Will I lose my SEO rankings?", answer: "I plan migrations to preserve SEO fundamentals — content, metadata, redirects, and analytics. Rankings can never be guaranteed, but the migration is handled carefully and measured." },
        { question: "How long does a migration take?", answer: "Depends on the size and complexity. Simple migrations take 2-4 weeks. Complex cross-CMS migrations can take 6-8 weeks." },
        { question: "Will there be downtime?", answer: "I plan migrations to reduce downtime risk. Most migrations are executed with minimal or no visible downtime." },
        { question: "Do you handle the full migration?", answer: "Yes. I handle strategy, content transfer, redirects, QA, and launch support end-to-end." },
      ],
    },
    finalCta: {
      title: "Ready to migrate your website with confidence?",
      description: "Request a migration plan and get a clear strategy before moving anything.",
      primaryCta: { label: "Request a migration plan", href: "/contact?service=Website%20Migration" },
    },
  },
  {
    slug: "wordpress-maintenance",
    hero: {
      eyebrow: "WordPress Maintenance",
      title: "Keep your WordPress site healthy without hiring a full-time developer",
      description:
        "Constant small fixes, plugin updates, security worries, layout issues, and no technical owner — I provide monthly WordPress maintenance so your site stays healthy while you focus on your business.",
      primaryCta: { label: "Request a maintenance plan", href: "/contact?service=WordPress%20Maintenance" },
      secondaryCta: { label: "See my work", href: "/work" },
    },
    problem: {
      title: "Is your WordPress site consuming your time?",
      symptoms: [
        "Plugin updates keep piling up and you're afraid of breaking something.",
        "Small layout issues, broken forms, or performance problems appear regularly.",
        "You have no one technically responsible for the website.",
        "Security concerns keep growing but nothing is being monitored.",
      ],
    },
    whatICheck: {
      title: "What I handle monthly",
      items: [
        "WordPress, plugin, and theme updates",
        "Security and access review",
        "Small fixes and bug resolution",
        "Performance monitoring",
        "Technical recommendations",
        "Coordination with hosting and server teams",
      ],
    },
    process: {
      title: "How it works",
      steps: [
        { number: "01", title: "Assess", description: "I review your current site health, plugin status, and maintenance needs." },
        { number: "02", title: "Plan", description: "I create a monthly maintenance plan based on priority and risk." },
        { number: "03", title: "Maintain", description: "I handle updates, fixes, security checks, and performance monitoring." },
        { number: "04", title: "Report", description: "You receive a monthly summary of what was done and what needs attention." },
      ],
    },
    proof: {
      title: "Based on ongoing maintenance work",
      items: [
        { company: "Co-Active Training Institute", description: "Ongoing contractor support across WordPress, PHP, SEO, servers, security, layout fixes, and maintenance — contract through March 2027." },
      ],
    },
    deliverables: {
      title: "What you receive",
      items: ["Monthly priority list", "Maintenance tasks", "Security and access review", "Technical recommendations"],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { question: "What's included in monthly maintenance?", answer: "Updates, security checks, small fixes, performance monitoring, and technical recommendations. The scope depends on your site's needs." },
        { question: "How many hours per month?", answer: "That depends on your site's complexity and needs. I recommend starting with an audit to determine the right level." },
        { question: "Do you handle emergency fixes?", answer: "Yes. Maintenance clients get priority response for urgent issues." },
        { question: "Can I cancel anytime?", answer: "Yes. I don't lock you into long-term contracts. The goal is to provide value every month." },
      ],
    },
    finalCta: {
      title: "Ready to keep your WordPress site healthy?",
      description: "Request a maintenance plan and get a clear monthly scope.",
      primaryCta: { label: "Request a maintenance plan", href: "/contact?service=WordPress%20Maintenance" },
    },
  },
]

export function getLandingPageBySlug(slug: string): LandingPageData | undefined {
  return landingPages.find((page) => page.slug === slug)
}

export const landingPageSlugs = landingPages.map((page) => page.slug)
