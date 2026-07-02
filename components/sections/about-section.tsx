"use client"

import { useAbout, useExperience, useEducation } from "@/hooks/use-about"
import { cn } from "@/lib/utils"

const whatIDo = [
  {
    icon: "01",
    title: "I care about results",
    description: "Every decision I make is about what actually moves the needle for your business — more leads, faster load times, less headache.",
  },
  {
    icon: "02",
    title: "Done this before",
    description: "Government portals, global platforms, e-commerce, SaaS — I've built for all of them. I know what works and what doesn't.",
  },
  {
    icon: "03",
    title: "No handoffs",
    description: "When you work with me, you get me — not a project manager, not a junior dev. One person handling your project from start to finish.",
  },
]

const softSkillItems = [
  "Communication",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Creativity",
]

export function AboutSection() {
  const about = useAbout()
  const experience = useExperience()
  const education = useEducation()

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 mb-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/[0.07] to-transparent -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">About</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Building websites and tools{" "}
              <span className="text-primary">that actually work</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10">
              10+ years building for government, enterprise, and global platforms. I focus on speed, security, and making sure the site does what it's supposed to do — bring in results.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <span className="text-3xl font-black text-primary">150K+</span>
                <span className="block text-sm text-muted-foreground">Users Served</span>
              </div>
              <div>
                <span className="text-3xl font-black text-primary">20+</span>
                <span className="block text-sm text-muted-foreground">Projects Delivered</span>
              </div>
              <div>
                <span className="text-3xl font-black text-primary">4</span>
                <span className="block text-sm text-muted-foreground">Industries</span>
              </div>
              <div>
                <span className="text-3xl font-black text-primary">99.9%</span>
                <span className="block text-sm text-muted-foreground">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do — Editorial Sections */}
      {whatIDo.map((item, index) => (
        <section
          key={index}
          className={cn(
            "px-4 sm:px-6 lg:px-8 py-24 md:py-28 relative overflow-hidden",
            index % 2 === 0 ? "bg-primary/[0.03]" : "bg-secondary/[0.03]"
          )}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
              <div className="lg:col-span-3">
                <span className={cn(
                  "text-[10rem] md:text-[12rem] font-black leading-none select-none",
                  index % 2 === 0 ? "text-primary/[0.04]" : "text-secondary/[0.04]"
                )}>
                  {item.icon}
                </span>
              </div>
              <div className="lg:col-span-9 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-[1.1]">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Experience + Education */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
            Where <span className="text-primary">I've worked</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Experience */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-8">
                {about.experienceTitle}
              </h3>
              <div className="space-y-10 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border/60">
                {experience.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />
                    <div className="space-y-1.5">
                      <span className="inline-flex text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        {item.period}
                      </span>
                      <h4 className="font-bold text-lg">{item.position}</h4>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-secondary mb-8">
                {about.educationTitle}
              </h3>
              <div className="space-y-10 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border/60">
                {education.map((item, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-secondary -translate-x-[3.5px]" />
                    <div className="space-y-1.5">
                      <span className="inline-flex text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        {item.period}
                      </span>
                      <h4 className="font-bold text-lg">{item.degree}</h4>
                      <p className="text-sm text-muted-foreground">{item.school}</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="relative flex items-center justify-center py-10">
        <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-border/60 to-transparent" />
        <div className="absolute w-2.5 h-2.5 rotate-45 border border-border/50 bg-background" />
      </div>

      {/* Soft Skills */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How <span className="text-primary">I collaborate</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The soft skills that make working with me a smooth experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkillItems.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium border border-border/50 bg-muted/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
