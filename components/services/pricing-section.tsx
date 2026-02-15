"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Rocket } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Landing Page",
    icon: Zap,
    price: "€1,500",
    originalPrice: "€2,500",
    description: "Perfect for startups and product launches",
    features: [
      "Single page design",
      "Mobile responsive",
      "SEO optimization",
      "Fast loading speed",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Full Website",
    icon: Sparkles,
    price: "€2,500",
    originalPrice: "€5,000",
    description: "Complete solution for established businesses",
    features: [
      "Up to 10 pages",
      "Custom design system",
      "SEO optimization",
      "Performance optimization",
      "CMS integration",
      "Contact forms & analytics",
      "3 rounds of revisions",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "AI-Enhanced",
    icon: Rocket,
    price: "Custom pricing",
    description: "Advanced features with AI integration",
    features: [
      "Everything in Full Website",
      "AI chatbot integration",
      "Personalization features",
      "Advanced analytics",
      "API integrations",
      "Ongoing optimization",
      "Unlimited revisions",
      "6 months support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5">
            <span className="text-2xl">🇫🇮</span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Made in Finland</span>
          </div>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Transparent Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Clear, honest pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            No hidden fees. No surprises. Just quality work at fair prices.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-foreground">
            Huge discount: Landing pages now €1,500 (was €2,500) and full websites now €2,500 (was €5,000).
          </p>
          <div className="mt-4 inline-block rounded-lg bg-green-500/10 px-4 py-2 text-sm font-medium text-green-600 dark:text-green-500">
            🎉 Limited time offer: Up to 50% off on all packages!
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">{plan.name}</CardTitle>
                    <div className="mt-2">
                      {plan.originalPrice && (
                        <div className="mb-1">
                          <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                          <span className="ml-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-semibold text-white">
                            Save {parseInt(plan.originalPrice.replace(/[€,]/g, '')) - parseInt(plan.price.replace(/[€,]/g, ''))}€
                          </span>
                        </div>
                      )}
                      <span className="text-3xl font-bold text-green-600 dark:text-green-500">{plan.price}</span>
                      {!plan.originalPrice && <span className="text-3xl font-bold">{plan.price}</span>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className={`mt-6 w-full ${plan.popular ? '' : 'variant-outline'}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      <Link
                        href={
                          plan.name === "Landing Page"
                            ? "/services/start?plan=landing"
                            : plan.name === "Full Website"
                              ? "/services/start?plan=full"
                              : "/services/custom"
                        }
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            All prices are estimates. Final cost depends on project scope and requirements.
            <br />
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Contact me
            </Link>{" "}
            for a custom quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
