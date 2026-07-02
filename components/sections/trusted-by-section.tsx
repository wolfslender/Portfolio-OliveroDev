"use client"

import ExportedImage from "next-image-export-optimizer"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/scroll-reveal"

const partners = [
  {
    name: "Cybernetips",
    logo: "/logos/logo_cybernetips.png",
    industry: "Cybersecurity",
  },
  {
    name: "Co-Active",
    logo: "/logos/CTI_Logo_Primary-1-png.webp",
    industry: "Global EdTech",
  },
  {
    name: "Dmed Health Care",
    contact: "Jana del Rosario",
    industry: "Healthcare",
  },
  {
    name: "Gov PR",
    logo: "/logos/DEPR-Logo-2025-1.svg",
    industry: "Government",
  },
  {
    name: "AESAN",
    logo: "/logos/aesan-espanol-logo.svg",
    industry: "Public Health",
  },
  {
    name: "CST",
    logo: "/logos/cst-logo-white-2025.svg",
    industry: "GovTech",
  },
]

export function TrustedBySection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">
              Past Collaborations
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Organizations I have worked with throughout my career.
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
                  <div className="relative h-12 w-full max-w-[120px] transition-all duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100">
                    <ExportedImage
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain dark:brightness-0 dark:invert"
                    />
                  </div>
                  <div className="text-center space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {partner.industry}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center h-12 transition-all duration-300">
                    <p className="text-lg font-bold text-foreground/60 group-hover:text-foreground transition-colors text-center leading-tight">
                      {partner.name}
                    </p>
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {partner.industry}
                    </p>
                    {'contact' in partner && (
                      <p className="text-[10px] text-muted-foreground font-medium">
                        {partner.contact}
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
