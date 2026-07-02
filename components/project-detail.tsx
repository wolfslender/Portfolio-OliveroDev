"use client"

import { ArrowLeft, ArrowRight, ExternalLink, Github, TrendingUp, Users, Zap, Target } from "lucide-react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { CTABanner } from "@/components/cta-banner"
import type { Project } from "@/lib/types"

interface ProjectDetailProps {
  project: Project
  related: Project[]
}

const metricIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  performance: Zap,
  impact: Target,
}

export function ProjectDetail({ project, related }: ProjectDetailProps) {
  const { title, description, image, tags, github, demo, industry, projectType, metrics, challenge, solution, impactStatement } = project

  return (
    <main className="pt-24 pb-20">
      {/* Back link */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10">
            <ExportedImage
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.slice(0, 5).map((tag) => (
                  <Badge key={tag} className="bg-background/80 backdrop-blur-sm text-foreground border-white/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-4">
              {industry && (
                <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 text-primary">
                  {industry}
                </Badge>
              )}
              {projectType && (
                <Badge variant="outline" className="rounded-full border-primary/20 bg-primary/5 text-primary">
                  {projectType}
                </Badge>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      {metrics && (
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(metrics).map(([key, value]) => {
                const Icon = metricIcons[key] || TrendingUp
                const val = typeof value === "string" ? value : (value as { value: string }).value
                const label = typeof value === "string"
                  ? key.charAt(0).toUpperCase() + key.slice(1)
                  : (value as { label: string }).label

                return (
                  <ScrollReveal key={key}>
                    <div className="p-8 rounded-2xl bg-card border border-border/50 text-center hover:shadow-lg transition-all duration-300">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-primary mb-1">{val}</div>
                      <div className="text-sm text-muted-foreground font-medium">{label}</div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Challenge / Solution / Impact */}
      {(challenge || solution || impactStatement) && (
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto space-y-12">
            {challenge && (
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center text-sm font-black">01</span>
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{challenge}</p>
                </div>
              </ScrollReveal>
            )}
            {solution && (
              <ScrollReveal delay={100}>
                <div>
                  <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-black">02</span>
                    The Solution
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">{solution}</p>
                </div>
              </ScrollReveal>
            )}
            {impactStatement && (
              <ScrollReveal delay={200}>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                  <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center text-sm font-black">03</span>
                    The Impact
                  </h2>
                  <p className="text-foreground text-lg leading-relaxed font-medium">{impactStatement}</p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="px-5 py-2 rounded-full text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 border-primary/10 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Links */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {demo && demo !== "#" && (
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href={demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View Live Site
                </Link>
              </Button>
            )}
            {github && github !== "#" && (
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 w-4 h-4" />
                  View Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden bg-primary/[0.03]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {related.map((project, index) => (
                <div key={project.slug} className="group">
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden mb-4">
                      <ExportedImage
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 45vw, 640px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-x-1.5 text-xs text-muted-foreground font-medium">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={tag}>
                            {tag}{i < Math.min(2, project.tags.slice(0, 3).length - 1) ? " ·" : ""}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                        View Project <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        badge="Let&apos;s Build Something Great"
        title="Have a similar project in mind?"
        description="Let&apos;s talk about how we can bring your vision to life."
        buttonText="Start a Project"
        buttonHref="/contact"
      />
    </main>
  )
}
