"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Snowflake, Laptop, Car, Mic } from "lucide-react"

const milestones = [
  {
    icon: Snowflake,
    title: "Arrived in Finland",
    description: "Started at -30°C with a two-year-old, learned that degrees alone don't guarantee jobs",
  },
  {
    icon: Laptop,
    title: "Hackathon Breakthrough",
    description: "Viitasaari Hackathon became my 'high-stakes audition' that changed everything",
  },
  {
    icon: Car,
    title: "100km Commute",
    description: "Accepted a trainee role with no credits, just hope—it turned into my career launch",
  },
  {
    icon: Mic,
    title: "Giving Back",
    description: "Now sharing my story with ELY-Keskus to help other international students succeed",
  },
]

export function CareerBriefSection() {
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
            My Career Journey
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            From -30°C winters to professional success in Finland — a story of persistence and strategic networking.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <milestone.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <Link href="/careerpath">Read My Full Story →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
