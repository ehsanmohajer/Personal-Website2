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
    github: "https://github.com/ehsanmohajer", // Main GitHub profile
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
    github: "https://github.com/ehsanmohajer", // Main GitHub profile
    status: "In progress",
    statusColor: "bg-blue-500",
  },
]

const projects = [

  {
    title: "🚀 Sani AI Studio - Portfolio",
    description: "Modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Lucide Icons", "Vercel", "Google Gemini API", "AI Chatbot", "React Hook Form", "Zod"],
    link: "https://ehsanmohajer.fi",
    github: "https://github.com/ehsanmohajer/Personal-Website2",
  },
  {
    title: "🚀 Full-Stack Weblog Application for Students",
    description: "A full-featured blog application designed for Full-Stack students at JAMK University. It provides a platform for students to create, share, and engage with blog posts in an interactive environment. Students can post about thesis sessions, and others can respond with comments or likes.",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
    link: "https://student-weblog-page.vercel.app/",
    github: "https://github.com/ehsanmohajer/StudentWeblogPage",
  },
  {
    title: "🚀 Interactive AI Business Plan Agent",
    description: "A bilingual (Finnish/English) web application that helps entrepreneurs and students create a structured business plan. It guides users through plan sections, generates real-time financial charts, and can use Google Gemini to draft a complete business plan and export it as a PDF.",
    tags: ["HTML5", "CSS", "JS", "Tailwind CSS", "Google Gemini API", "Chart.js", "jsPDF","Node.js", "Express.js"],
    link: "#",
    github: "https://github.com/ehsanmohajer/Visionary-Business-Plan-Agent",
  },
  {
        title: "🚀 Ehsan Mohajer's Personal old fashion Portfolio",
    description: "A classic portfolio website showcasing my work and skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://ehsanmohajer.github.io/Personal-Website/",
    github: "https://github.com/ehsanmohajer/Personal-Website",
  },

  {
        title: "🏗️ Project Interactive Map Finland (Still Under Development)",
    description: "An interactive map showcasing various locations in Finland. Engaging users with dynamic content and visual storytelling.",
    tags: ["React", "Tailwind CSS", "Vite", "Mapbox GL JS", "Firebase", "gemini API", "Node.js", "Express.js"],
    link: "#",
    github: "#",
  },


  {
    title: "🏗️ Local Eats Hub Project - Chinese Restaurant (Still Under Development)",
    description: "A modern, full-featured restaurant website with online ordering, reservations, and customer engagement features.",
    tags: ["vite", "TypeScript", "Tailwind CSS", "React", "shadcn/ui", "Supabase", "Lucide Icons"],
    link: "#",
    github: "https://github.com/ehsanmohajer/Project-ChineesRestaurant",
  },
  {
    title: "🏗️ Hackathon Management System (Still Under Development)",
    description: "Complete solution for organizing and managing hackathons, from registration to judging.",
    tags: ["Next.js", "TypeScript", "Supabase", "Real-time"],
    link: "#",
    github: "https://github.com/ehsanmohajer",
  },
  {
    title: "🏗️ Trainee Management System (Still Under Development)",
    description: "A comprehensive system for managing trainees in educational and corporate settings. This project is a web-based task management application for communication between employers and trainees.",
    tags: ["HTML", "JavaScript", "Tailwind CSS", "MongoDB"],
    link: "https://ehsanmohajer.github.io/Dashboard/",
    github: "https://github.com/ehsanmohajer/Dashboard-Under-Development",
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
