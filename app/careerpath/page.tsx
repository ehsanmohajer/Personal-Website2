import { Metadata } from "next"
import { JourneySection } from "@/components/career/journey-section"
import { PhilosophySection } from "@/components/career/philosophy-section"

export const metadata: Metadata = {
  title: "My Career Path | Sani AI Studio",
  description: "From -30°C winters to professional success — the journey of persistence, networking, and strategic pivots that shaped my career in Finland.",
}

export default function CareerPathPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container text-center">
          <p className="text-sm font-medium text-primary">My Journey</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            From -30°C to Professional Success
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            The journey of persistence, networking, and strategic pivots that shaped my career in Finland.
          </p>
        </div>
      </section>

      <JourneySection />
      <PhilosophySection />
    </div>
  )
}
