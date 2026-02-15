"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Brain, Users, Rocket } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Full-stack development with modern technologies and best practices.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing AI agents and automation to solve real-world problems.",
  },
  {
    icon: Users,
    title: "Mentoring",
    description: "Helping students and professionals achieve their career goals.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Turning creative ideas into successful digital products.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            A software engineer who loves identifying real-world problems and crafting smart, 
            meaningful solutions. I work as a Project Specialist at Kehittämisyhtiö Witas Oy, 
            focusing on innovation, collaboration, and turning creative ideas into real results.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
