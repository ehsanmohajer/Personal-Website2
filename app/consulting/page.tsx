import { Metadata } from "next"
import { ConsultingServices } from "@/components/consulting/consulting-services"
import { MentoringSection } from "@/components/consulting/mentoring-section"
import { CVUploadSection } from "@/components/services/cv-upload-section"

export const metadata: Metadata = {
  title: "Consulting & Mentoring | Sani AI Studio",
  description: "Professional consulting services and mentoring for students, businesses, and individuals looking to grow.",
}

export default function ConsultingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container text-center">
          <p className="text-sm font-medium text-primary">Work With Me</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Consulting & Mentoring
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Expert guidance for your AI projects, career development, and business growth
          </p>
        </div>
      </section>

      <ConsultingServices />
      <MentoringSection />
      <CVUploadSection />
    </div>
  )
}
