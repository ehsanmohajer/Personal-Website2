"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Rocket, Brain, Zap, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ideas = [
  {
    icon: Rocket,
    title: "AI‑Powered Business Launchpad",
    description: "A guided platform that helps founders create a business plan, validate a market, and launch with AI‑assisted workflows.",
    status: "Concept",
    nextStep: "MVP research + prototyping",
    potential: "High",
  },
  {
    icon: Globe,
    title: "Local Tourism Experience Studio",
    description: "Tools for local tourism operators to publish stories, routes, and AI‑assisted itineraries for visitors.",
    status: "Prototype",
    nextStep: "pilot partners",
    potential: "High",
  },
  {
    icon: Users,
    title: "AI Mentoring for Students",
    description: "Mentoring programs that help international students connect with businesses, build skills, and find jobs using AI guidance.",
    status: "In validation",
    nextStep: "program design",
    potential: "High",
  },
]

export function IdeasGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-muted-foreground">
            These are concepts and ideas I'm exploring. Interested in collaborating? Let's chat!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <motion.div
              key={idea.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <idea.icon className="h-6 w-6" />
                    </div>
                    <div className="flex gap-2">
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                        {idea.status}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="mt-4 text-xl">{idea.title}</CardTitle>
                  <CardDescription>{idea.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Potential Impact:</span>
                      <span className={`text-sm font-semibold ${
                        idea.potential === "High" ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {idea.potential}
                      </span>
                    </div>
                    {idea.nextStep && (
                      <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
                        <p className="text-xs font-semibold text-primary mb-1">Next:</p>
                        <p className="text-sm text-muted-foreground">{idea.nextStep}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 rounded-lg border bg-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold">Have an Idea to Discuss?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I'm always open to exploring new concepts and collaborating on innovative projects.
            Let's connect and see what we can build together!
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
