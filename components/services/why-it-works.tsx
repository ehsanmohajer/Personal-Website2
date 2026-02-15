"use client"

import { motion } from "framer-motion"
import { Check, Leaf } from "lucide-react"

const benefits = [
  "Clear messaging and navigation that guide decisions",
  "Fast load times and energy‑efficient design choices",
  "SEO‑ready structure so you can be found on Google",
  "Minimal UI that feels premium and timeless",
  "Built to scale, easy to maintain",
]

export function WhyItWorks() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why my websites work
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Your website is a product, not a brochure. I design with structure, 
              accessibility, and clear storytelling — so visitors understand your 
              value in seconds.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Sustainability Note */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="rounded-xl border-l-4 border-green-500 bg-gradient-to-br from-green-500/10 to-primary/5 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <Leaf className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Sustainability Mindset</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I reduce unnecessary assets, keep pages lightweight, and design for 
                long‑term use instead of constant redesigns.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Lower carbon footprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Faster page loads save energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">Timeless design reduces waste</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
