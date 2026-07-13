import { ScrollReveal } from "@/components/scroll-reveal"
import { MetricBar } from "@/components/visuals/metric-bar"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import en from "@/locales/en.json"
import es from "@/locales/es.json"

interface FeaturedCaseStudyProps {
  locale?: "en" | "es"
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    slug?: string
    demo: string
    industry?: string
    metrics?: {
      users?: string | { value: string; label: string }
      performance?: string | { value: string; label: string }
      impact?: string | { value: string; label: string }
    }
    challenge?: string
    solution?: string
    impactStatement?: string
  }
}

export function FeaturedCaseStudy({ project, locale }: FeaturedCaseStudyProps) {
  const isSpanish = locale === "es"
  const copy = isSpanish ? es.featuredCaseStudy : en.featuredCaseStudy
  const common = isSpanish ? es.common : en.common

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              {copy.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {copy.titlePrefix}{" "}
              <span className="text-primary">{copy.titleHighlight}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col">
                <p className="text-sm font-semibold text-secondary mb-4">{project.industry || copy.caseStudy}</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-balance">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>
                {project.metrics && (
                  <div className="space-y-3">
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                      {copy.results}
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {Object.values(project.metrics).map((metric, i) => {
                        const m = typeof metric === "string" ? { value: metric, label: `${common.impact} ${i + 1}` } : metric
                        return (
                          <div key={m.label} className="rounded-xl border border-border/50 bg-background/60 p-4">
                            <span className="block text-2xl font-bold text-primary">{m.value}</span>
                            <span className="text-xs text-muted-foreground leading-tight">{m.label}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
                <div className="mt-auto pt-8">
                  <Button asChild className="h-11 px-6 font-bold group">
                    <Link href={project.slug ? `/work/${project.slug}` : project.demo} target={project.slug ? undefined : "_blank"} rel={project.slug ? undefined : "noopener noreferrer"}>
                      {common.viewProject}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted/40 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-border/40">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/50 mb-8 bg-background">
                  <ExportedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                  {copy.performanceImpact}
                </h4>
                <div className="space-y-5">
                  {project.metrics && Object.values(project.metrics).map((metric, i) => {
                    const m = typeof metric === "string" ? { value: metric, label: "" } : metric
                    const val = parseInt(m?.value?.replace(/[^0-9]/g, "") || "0", 10)
                    const color = (i === 0 ? "primary" : i === 1 ? "secondary" : "emerald") as "primary" | "secondary" | "emerald"
                    return (
                      <MetricBar
                        key={m?.label || i}
                        label={m?.label || ""}
                        value={Math.min(val, 100)}
                        max={100}
                        color={color}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
