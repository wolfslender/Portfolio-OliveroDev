"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useProjects } from "@/hooks/use-projects"
import { useWorkPage } from "@/hooks/use-work-page"
import { useCommon } from "@/hooks/use-common"
import { CTABanner } from "@/components/cta-banner"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import ExportedImage from "next-image-export-optimizer"

export default function WorkContent() {
  const projects = useProjects()
  const workPage = useWorkPage()
  const common = useCommon()
  const [categoryFilter, setCategoryFilter] = useState("all")

  const featuredProject = projects.find(p => p.title.includes("Co-Active"))

  const filterOptions = [
    { id: "all", label: workPage.filters.all },
    { id: "fullstack", label: workPage.filters.fullstack },
    { id: "frontend", label: workPage.filters.frontend },
  ]

  const filteredProjects = projects
    .filter(p => p.title !== featuredProject?.title)
    .filter(p => categoryFilter === "all" || p.category === categoryFilter)

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/[0.07] to-transparent -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              {workPage.title}
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed">
              {workPage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project — Editorial Section */}
      {featuredProject && (
        <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative overflow-hidden bg-primary/[0.03]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-7">
                <div className="relative aspect-video overflow-hidden">
                  <ExportedImage
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 55vw, 750px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                  Featured Case Study
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  {featuredProject.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-border/50 bg-background/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                    <Link href={`/work/${featuredProject.slug}`}>
                      View Case Study <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-bold group">
                    <Link href={featuredProject.demo} target="_blank" rel="noopener noreferrer">
                      Live Site <ExternalLink className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Separator */}
      <div className="relative flex items-center justify-center py-10 md:py-14">
        <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <div className="absolute w-2.5 h-2.5 rotate-45 border border-border/50 bg-background" />
      </div>

      {/* Filters + Projects */}
      <section className="px-4 sm:px-6 lg:px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {workPage.gridTitle}
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              {workPage.gridDescription}
            </p>
          </div>

          {/* Filters — Minimal Pills */}
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border/30">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setCategoryFilter(filter.id)}
                className={cn(
                  "px-5 py-2 text-sm font-medium transition-all rounded-full",
                  categoryFilter === filter.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Project Grid — Editorial 2-Column */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group">
                  <Link href={`/work/${project.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden mb-5">
                      <ExportedImage
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1400px) 45vw, 640px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-x-1.5 text-xs text-muted-foreground font-medium">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span key={tag}>
                            {tag}{i < Math.min(2, project.tags.slice(0, 3).length - 1) ? " ·" : ""}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
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
          ) : (
            <div className="text-center py-20">
              <h4 className="text-xl font-bold mb-2">No projects found</h4>
              <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        badge="Ready to Scale?"
        title={<>{workPage.cta.title} <br /><span className="text-primary italic">{workPage.cta.highlight}</span></>}
        description={workPage.cta.description}
        buttonText={workPage.cta.button}
        buttonHref="/contact?audit=true"
      />
    </div>
  )
}
