"use client"

import { useProjects, useFeaturedProjectsSection } from "@/hooks/use-projects"
import { FeaturedProjectCard } from "@/components/featured-project-card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FeaturedProjects() {
  const projects = useProjects()
  const featuredProjectsSection = useFeaturedProjectsSection()
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                {featuredProjectsSection.titlePrefix}{" "}
                <span className="text-primary">{featuredProjectsSection.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                {featuredProjectsSection.description}
              </p>
            </div>

            <Button asChild variant="ghost" className="group text-lg font-bold">
              <Link href="/work">
                {featuredProjectsSection.viewAll}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <FeaturedProjectCard
                {...project}
                size="large"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
