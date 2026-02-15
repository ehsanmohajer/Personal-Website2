"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const featuredProjects = [
  {
    title: "Saaren Pizza & Kebab",
    description: "A modern restaurant website & ordering system for Saaren Pizza & Kebab in Viitasaari, Finland. Built with React 19, TypeScript, and Tailwind CSS, it provides a seamless online ordering experience with real‑time tracking, reservations, and a bilingual interface.",
    highlights: [
      "Real‑time order tracking and staff dashboards",
      "Reservation flow with email verification",
      "Finnish + English user experience"
    ],
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Email Verification"],
    link: "https://saarenkebabpizza.fi/",
    github: "#", // Add actual GitHub link when available
    status: "Live product",
    statusColor: "bg-green-500",
    backgroundImage: "/assets/saaren.png",
  },
  {
    title: "Tourism Platform",
    description: "A digital tourism experience for Central Finland — connecting local businesses, stories, and travelers with AI‑assisted discovery and smart itinerary planning.",
    highlights: [
      "Experience design + content strategy",
      "Smart itinerary planning",
      "Community‑driven updates"
    ],
    currentWork: [
      "Researching regional tourism needs",
      "Prototype for AI‑guided exploration",
      "Stakeholder interviews"
    ],
    tags: ["AI", "Tourism", "React", "Smart Planning", "UX Design"],
    link: "#",
    github: "#",
    status: "In progress",
    statusColor: "bg-blue-500",
  },
]

const projects = [
  {
    title: "AI Content Generator",
    description: "An intelligent content creation platform powered by GPT-4, helping businesses create engaging content in minutes.",
    tags: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Smart Automation Dashboard",
    description: "A comprehensive dashboard for managing business workflows and automations with AI-driven insights.",
    tags: ["React", "Node.js", "MongoDB", "AI Agents"],
    link: "#",
    github: "#",
  },
  {
    title: "Student Success Platform",
    description: "Platform connecting international students with mentors, resources, and opportunities in Finland.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
    link: "#",
    github: "#",
  },
  {
    title: "Business Analytics AI",
    description: "AI-powered analytics tool that provides actionable insights from business data in real-time.",
    tags: ["Python", "FastAPI", "React", "Machine Learning"],
    link: "#",
    github: "#",
  },
  {
    title: "Hackathon Management System",
    description: "Complete solution for organizing and managing hackathons, from registration to judging.",
    tags: ["Next.js", "TypeScript", "Supabase", "Real-time"],
    link: "#",
    github: "#",
  },
  {
    title: "AI Chat Assistant",
    description: "Customizable AI chat assistant for businesses, trained on company-specific knowledge bases.",
    tags: ["OpenAI", "LangChain", "Vector DB", "React"],
    link: "#",
    github: "#",
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-20">
      <div className="container">
        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex h-full flex-col transition-all hover:shadow-xl hover:border-primary/50 overflow-hidden relative">
                  {project.backgroundImage && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={project.backgroundImage}
                        alt={project.title}
                        fill
                        className="object-cover opacity-10"
                      />
                    </div>
                  )}
                  <CardHeader className="relative z-10">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge className={`${project.statusColor} text-white`}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between space-y-4 relative z-10">
                    {project.highlights && (
                      <div>
                        <p className="mb-2 text-sm font-semibold">Highlights:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {project.highlights.map((highlight) => (
                            <li key={highlight}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.currentWork && (
                      <div>
                        <p className="mb-2 text-sm font-semibold">Current Work:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {project.currentWork.map((work) => (
                            <li key={work}>• {work}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="default" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="mb-8 text-3xl font-bold">Other Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex h-full flex-col transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
