"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Search, Route, Code, Rocket } from "lucide-react"

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    description: "We talk about your goals, your current setup, and what success looks like for you. No jargon, no pitch.",
    details: ["Current state audit", "Goal alignment", "Scope definition"],
    duration: "1–2 weeks",
    deliverable: "Discovery report",
  },
  {
    step: 2,
    icon: Route,
    title: "Strategy",
    description: "I map out the architecture, tech stack, and timeline before writing a single line of code.",
    details: ["Architecture design", "Tech selection", "Milestone plan"],
    duration: "1–2 weeks",
    deliverable: "Architecture blueprint",
  },
  {
    step: 3,
    icon: Code,
    title: "Build & Iterate",
    description: "Development in stages with regular check-ins. You see progress as it happens, not just at the end.",
    details: ["Sprint-based delivery", "Regular demos", "Feedback loops"],
    duration: "4–8 weeks",
    deliverable: "Production-ready codebase",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Launch & Beyond",
    description: "Deploy with confidence, monitor performance, and I stay around for support. No ghosting after launch.",
    details: ["Production deployment", "Performance monitoring", "Ongoing support"],
    duration: "1–2 weeks",
    deliverable: "Live deployed site",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              How <span className="text-primary">I deliver</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              A transparent process built around communication and results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative group p-8 bg-card border border-border/60 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                      0{step.step}
                    </span>
                    <div className="p-3 bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                      <span className="w-1.5 h-1.5 bg-primary shrink-0" />
                      Duration: {step.duration}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                      <span className="w-1.5 h-1.5 bg-secondary shrink-0" />
                      Deliverable: {step.deliverable}
                    </div>
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                        <div className="w-1.5 h-1.5 bg-foreground/20 shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
