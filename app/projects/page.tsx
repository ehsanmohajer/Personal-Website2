import { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects | Sani AI Studio",
  description: "Portfolio of AI-powered projects, web applications, and innovative solutions built by Sani.",
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container text-center">
          <p className="text-sm font-medium text-primary">Portfolio</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            AI-powered solutions and web applications that solve real-world problems
          </p>
        </div>
      </section>

      <ProjectsGrid />
    </div>
  )
}
