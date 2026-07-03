"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, BarChart3, Smartphone } from "lucide-react"
import Link from "next/link"

const problems = [
  {
    icon: Clock,
    title: "Your site is slow",
    description: "Every second of load time costs you visitors. I build for speed from the ground up.",
  },
  {
    icon: Shield,
    title: "Security keeps you up at night",
    description: "Outdated plugins, vulnerable dependencies, no backup plan. I fix that.",
  },
  {
    icon: BarChart3,
    title: "It's not converting",
    description: "Beautiful but broken. I focus on what actually drives results — not just aesthetics.",
  },
  {
    icon: Smartphone,
    title: "The mobile experience is an afterthought",
    description: "Over 60% of traffic comes from phones. I design mobile-first, not mobile-last.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Is your website{" "}
            <span className="text-primary">working for you?</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Most sites I see have the same problems. Here is how I fix them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2.5 bg-primary/5 text-primary shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold">{problem.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="h-12 px-8 font-bold group">
            <Link href="/services">
              See how I solve these
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
