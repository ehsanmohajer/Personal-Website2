"use client"

import { motion } from "framer-motion"
import { Check, Leaf, Zap, TrendingUp } from "lucide-react"

const benefits = [
  "Clear messaging and navigation that guide decisions",
  "Fast load times and energy‑efficient design choices",
  "SEO‑ready structure so you can be found on Google",
  "Minimal UI that feels premium and timeless",
  "Built to scale, easy to maintain",
]

const highlights = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Energy-efficient, lightweight design for long-term use",
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Fast load times, SEO-ready, optimized for conversions",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description: "Easy to maintain, designed for growth and evolution",
  },
]

const animatedBorderStyle = `
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  .gradient-card::after,
  .gradient-card::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: conic-gradient(
      from var(--angle),
      #3b82f6,
      #8b5cf6,
      #3b82f6
    );
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    padding: 2px;
    border-radius: 0.75rem;
    animation: 3s spin linear infinite;
  }

  .gradient-card::before {
    filter: blur(1.5rem);
    opacity: 0.4;
  }

  @keyframes spin {
    from {
      --angle: 0deg;
    }
    to {
      --angle: 360deg;
    }
  }

  .gradient-card {
    position: relative;
  }

  :is(.light) .gradient-card::after,
  :is(.light) .gradient-card::before {
    background-image: conic-gradient(
      from var(--angle),
      #22c55e,
      #84cc16,
      #22c55e
    );
  }
`

export function WhyItWorks() {
  return (
    <>
      <style>{animatedBorderStyle}</style>
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

            {/* Right Column - Gradient Border Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4 mt-[30px] pt-[40px]"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="gradient-card"
                  >
                    <div className="relative rounded-xl backdrop-blur-md bg-background/40 border border-foreground/10 p-4 hover:bg-background/60 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary mt-0.5">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{highlight.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}