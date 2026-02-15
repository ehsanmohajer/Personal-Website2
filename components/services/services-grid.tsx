"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bot, Code, Users, Sparkles, Rocket, MessageSquare } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Integration",
    description: "Implement AI agents and automation solutions to streamline your business processes.",
    features: ["ChatGPT Integration", "Custom AI Agents", "Workflow Automation"],
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Full-stack web development with modern technologies and best practices.",
    features: ["Next.js & React", "TypeScript", "API Development"],
  },
  {
    icon: Users,
    title: "Consulting & Mentoring",
    description: "One-on-one guidance for students and professionals navigating their careers.",
    features: ["Career Strategy", "Technical Mentoring", "Network Building"],
  },
  {
    icon: Sparkles,
    title: "AI Content Creation",
    description: "Leverage AI for content creation, digital marketing, and social media.",
    features: ["Content Strategy", "AI-Powered Writing", "Social Media"],
  },
  {
    icon: Rocket,
    title: "Startup Support",
    description: "Help turn your business ideas into reality with strategic planning and execution.",
    features: ["Idea Validation", "MVP Development", "Growth Strategy"],
  },
  {
    icon: MessageSquare,
    title: "Project Management",
    description: "End-to-end project management from ideation to delivery.",
    features: ["Agile Methodology", "Team Coordination", "Delivery Management"],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
