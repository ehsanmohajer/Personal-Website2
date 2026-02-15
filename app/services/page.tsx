import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { WhyItWorks } from "@/components/services/why-it-works"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessSteps } from "@/components/services/process-steps"
import { PricingSection } from "@/components/services/pricing-section"
import { FAQSection } from "@/components/services/faq-section"
import { BookingSection } from "@/components/services/booking-section"

export const metadata: Metadata = {
  title: "Services | Sani AI Studio",
  description: "Minimal, sustainable websites that convert. High-performance web solutions with clarity, credibility, and long-term value.",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <WhyItWorks />
      <ServicesGrid />
      <ProcessSteps />
      <PricingSection />
      <FAQSection />
      <BookingSection />
    </div>
  )
}
