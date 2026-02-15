import { Metadata } from "next"
import { IdeasGrid } from "@/components/ideas/ideas-grid"

export const metadata: Metadata = {
  title: "Ideas & Innovation | Sani AI Studio",
  description: "Innovative ideas and concepts exploring AI, automation, and future technologies.",
}

export default function IdeasPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container text-center">
          <p className="text-sm font-medium text-primary">Innovation Lab</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Ideas & Concepts
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Exploring the future of AI, automation, and digital innovation
          </p>
        </div>
      </section>

      <IdeasGrid />
    </div>
  )
}
