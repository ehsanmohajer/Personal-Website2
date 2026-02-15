"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Snowflake, GraduationCap, Map, Laptop, Car, Mic } from "lucide-react"

const journeySteps = [
  {
    icon: Snowflake,
    title: "The -30°C Reality Check",
    description: "Arriving in Finland in the dead of winter at -30 degrees Celsius with a two-year-old child was a visceral shock—both climatically and professionally. Like many international talents, I sought shelter in academia, enrolling in language courses and then a Master's degree. But I quickly learned that a Finnish degree alone isn't the silver bullet for employment.",
    insight: "Academic excellence in a vacuum is insufficient. In Finland's 'hidden job market,' social capital is the primary currency.",
  },
  {
    icon: GraduationCap,
    title: "High Scores Are Only Half the Battle",
    description: "Achieving high scores in my ICT Master's program at JAMK did nothing to alleviate professional isolation. When courses are remote and online, students lose the opportunity for accidental professional endorsements—those organic interactions that build trust.",
    insight: "High scores are merely a baseline; without a network, they are invisible. Remote learning doesn't just hinder networking; it kills the 'visibility' required for a referral.",
  },
  {
    icon: Map,
    title: "The Geography of Opportunity",
    description: "Most international graduates fail because they restrict their search to major urban centers. Through the JAMK Talent Boost program, I shifted from passive applications to active 'career trips,' physically visiting regional companies in places like Viitasaari.",
    insight: "Smaller municipalities are often more desperate for specialized talent and offer a faster track to integration. By visiting regional companies, you stop being a name on a PDF and start being a solution to a local business need.",
  },
  {
    icon: Laptop,
    title: "The Hackathon as a High-Stakes Audition",
    description: "The Viitasaari Hackathon was the strategic pivot that changed my trajectory. Traditional applications are static, but a hackathon is a live demonstration of agility, craft, and collaborative problem-solving.",
    insight: "Hackathons function as high-stakes auditions, allowing you to 'de-risk' yourself in the eyes of an employer. They provide a platform to demonstrate real-time problem-solving that a CV can never replicate.",
  },
  {
    icon: Car,
    title: "The 100km Commute: Investing in Hope",
    description: "I accepted a trainee position at Digikeskus (Witas Company) that offered zero university credits and required a 100-kilometer commute from Jyväskylä. While many students refuse any work that doesn't count toward their degree, I knew this was my chance to prove my value.",
    insight: "This wasn't a loss of time; it was a three-month 'test drive.' While on vacation, I saw a vacancy for the remainder of the project and dared to apply. That proactive move, built on a successful trainee period, secured me the contract.",
  },
  {
    icon: Mic,
    title: "Sharing the Journey: ELY-Keskus Presentation",
    description: "I was honored to receive an invitation from ELY-Keskus to share my success story as an international student in Finland. My message was simple: the path from student to professional is built through connection and opportunity.",
    insight: "These programs and events are more than just items on a calendar. They are genuine pathways to meaningful careers. Persistence and networking facilitate success.",
    highlighted: true,
  },
]

export function JourneySection() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          The Journey: From Survival to Success
        </h2>
        
        <div className="mt-12 space-y-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={step.highlighted ? "border-primary shadow-lg" : ""}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <step.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {step.description}
                      </p>
                      {step.insight && (
                        <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                          <p className="text-sm">
                            <strong className="text-primary">Key Insight:</strong>{" "}
                            {step.insight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
