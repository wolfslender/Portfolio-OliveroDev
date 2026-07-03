"use client"

import { useAbout, useExperience, useEducation } from "@/hooks/use-about"

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
            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed mb-6">
              10+ years building for government, enterprise, and global platforms. I focus on speed, security, and making sure the site does what it's supposed to do — bring in results.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              No project managers, no junior devs, no handoffs. From discovery to deployment, I handle your project end-to-end. Government portals, global EdTech platforms, healthcare systems — I've shipped across industries and I know what works.
            </p>
          </div>
        </div>
      </section>

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
                      <span className="inline-flex text-xs font-bold uppercase tracking-widest text-muted-foreground">
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
                      <span className="inline-flex text-xs font-bold uppercase tracking-widest text-muted-foreground">
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

    </div>
  )
}
