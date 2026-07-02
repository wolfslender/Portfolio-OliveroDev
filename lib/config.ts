export const siteConfig = {
  name: "Alexis Olivero",
  title: "Full-Stack Developer — Webflow, WordPress & Next.js",
  description:
    "I build websites that load fast, look professional, and actually bring in business. Based in Santo Domingo, working with clients worldwide.",
  url: "https://oliverodev.com",
  ogImage: "https://oliverodev.com/opengraph-image",
  links: {
    instagram: "https://www.instagram.com/alexisfit97/",
    github: "https://github.com/wolfslender",
    linkedin: "https://linkedin.com/in/alexis-olivero",
    email: "contact@oliverodev.com",
  },
  author: "Alexis Olivero",
  keywords: [
    "frontend developer",
    "desarrollador frontend",
    "web developer",
    "desarrollador web",
    "react developer",
    "programador react",
    "next.js expert",
    "typescript",
    "javascript",
    "tailwind css",
    "wordpress specialist",
    "experto wordpress",
    "webflow developer",
    "desarrollador webflow",
    "seo optimization",
    "posicionamiento seo",
    "web performance",
    "optimización web",
    "ui/ux design",
    "diseño web",
    "freelance developer",
    "programador freelance",
    "hire web developer",
    "hire frontend developer",
    "contratar desarrollador web",
    "contratar desarrollador frontend",
    "web developer for hire",
    "frontend freelancer",
    "alexis olivero",
    "portfolio",
  ],
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  testimonials: [
    {
      quote: "Alexis rebuilt our entire site from scratch. Finally, a dev who actually listens to what you need instead of pushing their own agenda. Page speed went from awful to 95, and our team can finally update content without calling him every time.",
      author: "Antonio Gonzales",
      role: "CEO, Cybernetips",
      image: "/logos/logo_cybernetips.png"
    },
    {
      quote: "I was tired of agencies that overpromise and underdeliver. Alexis just... did the work. No drama, no delays. Our organic traffic jumped 40% in three months after the SEO overhaul.",
      author: "Maria Arentz",
      role: "Founder, GovValue",
      image: "/logos/GovValue-Logo.png"
    },
    {
      quote: "We needed a government portal that worked for 3 million people — accessibility, uptime, the whole deal. Alexis delivered ahead of schedule and under budget. Would hire again without hesitation.",
      author: "Sergio de los Santos",
      role: "Former Manager, Truenorth Corp",
    }
  ],
  agencyMethodology: [
    {
      step: 1,
      title: "Kickoff & Discovery",
      description: "We sit down and figure out what you actually need. No jargon, just goals, timeline, and budget.",
      details: ["Goals Review", "Technical Assessment", "Timeline Planning"]
    },
    {
      step: 2,
      title: "Plan & Design",
      description: "I map out the architecture and design the UX before touching any code. You see everything before I build it.",
      details: ["Tech Decisions", "UX Prototyping", "Content Structure"]
    },
    {
      step: 3,
      title: "Build & Review",
      description: "I build in stages and share progress every two weeks. You're never left wondering what's happening.",
      details: ["Agile Sprints", "Regular Check-ins", "QA Testing"]
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "We go live together, and I stick around to make sure everything runs smoothly — no ghosting after launch.",
      details: ["Deployment", "Performance Monitoring", "Ongoing Support"]
    }
  ],
}

export type SiteConfig = typeof siteConfig
