"use client"

import { motion } from "framer-motion"
import { Leaf, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/10 to-background py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Web Design Services
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Minimal, sustainable websites
            <br />
            <span className="text-primary">that convert.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            I build high‑performance websites for companies that want clarity, credibility, 
            and long‑term value. Less clutter, less waste, more impact.
          </p>

          {/* Key Values */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">Sustainable</h3>
              <p className="text-sm text-muted-foreground">
                Energy-efficient, lightweight design for long-term use
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">High Performance</h3>
              <p className="text-sm text-muted-foreground">
                Fast load times, SEO-ready, optimized for conversions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">Built to Scale</h3>
              <p className="text-sm text-muted-foreground">
                Easy to maintain, designed for growth and evolution
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <a href="#pricing">View Pricing & Choose Your Package</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
