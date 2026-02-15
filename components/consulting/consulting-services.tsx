"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Lightbulb, Rocket } from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy Consulting",
    description: "Help your business leverage AI effectively with strategic planning and implementation guidance.",
    duration: "1-2 hours",
    price: "Book a session",
  },
  {
    icon: Users,
    title: "Career Mentoring",
    description: "One-on-one mentoring for international students and professionals navigating the Finnish job market.",
    duration: "30-60 min",
    price: "First session free",
  },
  {
    icon: Rocket,
    title: "Startup Advisory",
    description: "From idea validation to MVP development, get expert guidance on launching your startup.",
    duration: "Flexible",
    price: "Custom packages",
  },
  {
    icon: Calendar,
    title: "Workshop Facilitation",
    description: "Interactive workshops on AI, automation, and career development for teams and organizations.",
    duration: "Half/Full day",
    price: "Contact for pricing",
  },
]

export function ConsultingServices() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Consulting Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the service that fits your needs, or let's discuss a custom solution
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-medium text-primary">{service.price}</span>
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Duration: {service.duration}
                    </span>
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-lg border bg-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold">Ready to Get Started?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Book a free 30-minute consultation to discuss your needs and how I can help you achieve your goals.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a 
                href="https://calendar.app.google/wDbxE3rwsN65TtPH7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Free Consultation
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Send a Message</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
