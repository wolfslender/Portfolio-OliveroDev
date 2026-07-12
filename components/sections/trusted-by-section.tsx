"use client"

import ExportedImage from "next-image-export-optimizer"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useTranslation } from "react-i18next"

const partners: {
  name: string
  logo?: string
  contact?: string
  industry: string
  context: string
}[] = [
  {
    name: "Cybernetips",
    logo: "/logos/logo_cybernetips.png",
    industry: "Cybersecurity",
    context: "Brand identity and web presence for a cybersecurity startup.",
  },
  {
    name: "Co-Active",
    logo: "/logos/CTI_Logo_Primary-1-png.webp",
    industry: "Global EdTech",
    context: "Ongoing WordPress development, security, performance, and maintenance support.",
  },
  {
    name: "Dmed Health Care",
    logo: "/logos/dmedhealthcare-logo-blue-166x64.webp",
    industry: "Healthcare",
    context: "Corporate WordPress development and ongoing technical maintenance.",
  },
  {
    name: "Gov PR",
    logo: "/logos/DEPR-Logo-2025-1.svg",
    industry: "Government",
    context: "Public-sector WordPress development and government file integrations for Puerto Rico education services.",
  },
  {
    name: "AESAN",
    logo: "/logos/aesan-espanol-logo.svg",
    industry: "Public Health",
    context: "Public-sector WordPress website for a Puerto Rico education program.",
  },
  {
    name: "CST",
    logo: "/logos/cst-logo-white-2025.svg",
    industry: "GovTech",
    context: "Traffic-safety platform with accident-statistics API integrations and Webflow migration.",
  },
]

export function TrustedBySection() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">
              {t('trustedBy.title')}
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('trustedBy.description')}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-border/60 bg-card overflow-hidden">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={cn(
                "group relative p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-muted/50 border-r border-b border-border/50 last:border-r-0 lg:[&:nth-child(6)]:border-r-0 lg:[&:nth-child(n+1)]:border-b-0",
                index % 6 === 5 && "border-r-0"
              )}
            >
              {partner.logo ? (
                <>
                  <div className="relative h-12 w-full max-w-[120px] transition-all duration-300 group-hover:scale-105 opacity-70 hover:opacity-100">
                    <ExportedImage
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center space-y-1 opacity-70 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      {partner.industry}
                    </p>
                    {'contact' in partner && (
                      <p className="text-xs text-muted-foreground font-medium">
                        {partner.contact}
                      </p>
                    )}
                    {'context' in partner && (
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-[130px] mx-auto">
                        {partner.context}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center h-12 transition-all duration-300">
                    <p className="text-lg font-bold text-foreground/80 group-hover:text-foreground transition-colors text-center leading-tight">
                      {partner.name}
                    </p>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      {partner.industry}
                    </p>
                    {'contact' in partner && (
                      <p className="text-xs text-muted-foreground font-medium">
                        {partner.contact}
                      </p>
                    )}
                    {'context' in partner && (
                      <p className="text-xs text-muted-foreground leading-relaxed max-w-[130px] mx-auto">
                        {partner.context}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
