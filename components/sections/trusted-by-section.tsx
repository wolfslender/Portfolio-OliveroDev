import Link from "next/link"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

const partners = [
  { name: "Co-Active", industry: "Global EdTech", industryEs: "EdTech global", href: "/work/co-active-training-institute/" },
  { name: "Truenorth", industry: "Digital delivery", industryEs: "Entrega digital", href: "/work/truenorth-corporation/" },
  { name: "DE Puerto Rico", industry: "Government education", industryEs: "Educación pública", href: "/work/departamento-de-educacion-pr/" },
  { name: "CST Puerto Rico", industry: "Traffic safety", industryEs: "Seguridad vial", href: "/work/cst-puerto-rico-website/" },
  { name: "GovValue", industry: "Security recovery", industryEs: "Recuperación web", href: "/work/govvalue/" },
  { name: "Cybernetips", industry: "Cybersecurity", industryEs: "Ciberseguridad", href: "/work/cybernetips/" },
]

interface TrustedBySectionProps {
  locale?: "en" | "es"
}

export function TrustedBySection({ locale }: TrustedBySectionProps = {}) {
  const copy = locale === "es" ? es.trustedBy : en.trustedBy

  return (
    <section className="relative border-y border-border/70 bg-card/60 py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_2.28fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              {copy.eyebrow}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {copy.description}
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-border/70 sm:grid-cols-3 lg:grid-cols-6 lg:border-t-0">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group min-h-24 border-b border-r border-border/70 px-4 py-4 transition-colors hover:bg-primary/[0.06] lg:border-b-0"
              >
                <span className="block font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {partner.name}
                </span>
                <span className="mt-2 block text-[11px] leading-snug text-muted-foreground">
                  {locale === "es" ? partner.industryEs : partner.industry}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
