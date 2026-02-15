"use client"

import { motion } from "framer-motion"
import { Search, Layout, Palette, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Discovery",
    description: "Clarify goals, audience, and the story your site must tell.",
    icon: Search,
  },
  {
    number: "2",
    title: "Structure",
    description: "Create a clean, minimal architecture that guides decisions.",
    icon: Layout,
  },
  {
    number: "3",
    title: "Design",
    description: "Premium visuals with a sustainable, lightweight UI system.",
    icon: Palette,
  },
  {
    number: "4",
    title: "Build",
    description: "High‑performance code, SEO‑ready, and easy to maintain.",
    icon: Code,
  },
  {
    number: "5",
    title: "Launch",
    description: "Deploy with analytics, testing, and continuous improvement.",
    icon: Rocket,
  },
]

export function ProcessSteps() {
  return (
    <section className="bg-secondary/20 py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How we build your site
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A clear, structured process that delivers results
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
              >
                {/* Step Number */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl font-bold text-primary/20 transition-colors group-hover:text-primary/40">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden w-full translate-x-1/2 lg:block">
                    <div className="h-0.5 w-6 bg-border"></div>
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
