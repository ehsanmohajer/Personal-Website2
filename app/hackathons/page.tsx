import { Metadata } from "next"
import { HackathonsTimeline } from "@/components/hackathons/hackathons-timeline"

export const metadata: Metadata = {
  title: "Hackathons | Sani AI Studio",
  description: "Hackathon experiences, achievements, and the power of collaborative innovation.",
}

export default function HackathonsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container text-center">
          <p className="text-sm font-medium text-primary">Innovation Events</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hackathons <br />
          </h1>
            <small> Connecting talent, companies, and practical innovation. </small>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            I’ve hosted 3 hackathons and 2 AI hackathons in Central Finland, creating spaces where students and companies co‑create solutions.
            In bried Hackathons bring ideas transform into reality through collaboration and rapid innovation
          </p>
        </div>
      </section>

      <HackathonsTimeline />
    </div>
  )
}
