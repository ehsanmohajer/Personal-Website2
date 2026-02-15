import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { CareerBriefSection } from "@/components/home/career-brief-section"
import { ExpertiseSection } from "@/components/home/expertise-section"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <CareerBriefSection />
      <ExpertiseSection />
    </div>
  )
}
