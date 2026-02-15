"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle2, Sparkles } from "lucide-react"

const offerings = [
  "Landing pages and full websites",
  "Brand refreshes and UI redesign",
  "AI‑enhanced product experiences",
]

export function BookingSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Ready to Start?</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to build?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If you need a website that feels premium, sustainable, and conversion‑focused, 
              let's talk.
            </p>

            <ul className="mt-8 space-y-4">
              {offerings.map((offering, index) => (
                <motion.li
                  key={offering}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground">{offering}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Card className="w-full border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Book a session</h3>
                </div>

                <p className="mb-6 text-muted-foreground">
                  Book a time directly on my Google Calendar. Let's discuss your project 
                  and see how I can help bring your vision to life.
                </p>

                <Button asChild size="lg" className="w-full">
                  <a
                    href="https://calendar.app.google/wDbxE3rwsN65TtPH7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book on Google Calendar
                  </a>
                </Button>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  <CheckCircle2 className="mr-1 inline h-4 w-4 text-green-500" />
                  No payment required for the first intro call.
                </p>

                {/* Alternative Contact */}
                <div className="mt-6 border-t pt-6">
                  <p className="text-center text-sm text-muted-foreground">
                    Prefer email?{" "}
                    <Link href="/contact" className="font-medium text-primary hover:underline">
                      Send a message
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
