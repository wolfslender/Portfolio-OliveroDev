"use client"

import { Card } from "@/components/ui/card"
import { useSkills, useSkillsSection } from "@/hooks/use-skills"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Shield, Users, Globe, Award, ArrowRight } from "lucide-react"

export function SkillsSection() {
  const skills = useSkills()
  const skillsSection = useSkillsSection()

  const outcomeCategories = [
    {
      title: "Frontend & Performance",
      icon: Zap,
      outcome: "Fast, responsive interfaces that users actually enjoy",
      impact: "Optimized apps serving 150K+ concurrent users",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      title: "Backend & Architecture",
      icon: TrendingUp,
      outcome: "APIs and systems that scale without constant fixes",
      impact: "Zero-downtime deployments for critical systems",
      skills: ["Node.js", "PostgreSQL", "Docker", "REST APIs"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      title: "Security & Accessibility",
      icon: Shield,
      outcome: "Sites that are secure and usable by everyone",
      impact: "WCAG 2.1 AA compliance & security best practices",
      skills: ["Azure", "AWS", "Security Audits", "WCAG"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
    },
    {
      title: "Full Stack",
      icon: Globe,
      outcome: "End-to-end delivery from database to UI",
      impact: "Seamless integration across the whole stack",
      skills: ["TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
    {
      title: "CMS & Platforms",
      icon: Users,
      outcome: "Content management that non-devs can actually use",
      impact: "Custom WordPress & Webflow for enterprise clients",
      skills: ["WordPress", "Webflow", "Sanity", "Headless CMS"],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
    },
    {
      title: "SEO & Analytics",
      icon: Award,
      outcome: "More organic traffic, better rankings",
      impact: "SEO implementations that actually move the needle",
      skills: ["Technical SEO", "Google Analytics", "Schema Markup", "Core Web Vitals"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight">
              What <span className="text-primary">I work with</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The tools and technologies I use day to day to get the job done.
            </p>
          </div>
        </ScrollReveal>

        {/* Premium Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {outcomeCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div className={`group relative p-8 bg-card rounded-3xl border-2 ${category.borderColor} hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 h-full`}>
                  {/* Subtle gradient overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${category.bgColor} rounded-3xl -z-10`} />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 ${category.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-7 h-7 ${category.color}`} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{category.title}</h3>
                        </div>
                      </div>
                      <ArrowRight className={`w-5 h-5 ${category.color} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`} />
                    </div>

                    {/* Outcome Box */}
                    <div className="mb-6 p-5 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl border-l-4 border-primary">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">What this means</p>
                      <p className="text-base font-semibold text-foreground leading-relaxed">{category.outcome}</p>
                    </div>

                    {/* Impact Statement */}
                    <div className="mb-6 pl-4 border-l-2 border-border/50">
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        {category.impact}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 text-sm font-semibold rounded-full bg-muted/50 text-foreground border border-border/50 group-hover:border-primary/30 group-hover:bg-background transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Tech Stack */}
        <ScrollReveal delay={500}>
          <div className="relative p-12 bg-gradient-to-br from-slate-950 to-slate-900 rounded-[3rem] border border-white/5 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-white mb-3">Full tech stack</h3>
                <p className="text-slate-400 text-lg">Everything I use to build and ship</p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {skills.flatMap(cat => cat.skills).map((skill, index) => (
                  <Badge
                    key={index}
                    className="px-5 py-2.5 text-sm font-bold bg-white/10 text-white border-white/20 hover:bg-white hover:text-slate-950 transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
