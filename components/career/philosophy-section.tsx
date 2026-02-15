"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users2, BookOpen, Bot, Coffee } from "lucide-react"

const philosophies = [
  {
    icon: Users2,
    title: "Connecting People & Technology",
    description: "Being a project specialist means connecting people, technology, and business together—from the very first idea to the final delivery. I work hands-on with both software development and project management, helping teams and companies transform their digital goals into successful outcomes.",
  },
  {
    icon: BookOpen,
    title: "Mentoring & Motivation",
    description: "Mentoring and motivating students to reach their goals is something I'm truly passionate about. With nearly a decade of experience working with clients, I've developed a strong ability to consult, advise, and align software solutions with customer goals. I love the process of listening, brainstorming, and finding that 'aha!' moment where everything starts to make sense.",
  },
  {
    icon: Bot,
    title: "AI as a Partner, Not a Replacement",
    description: "Every day, I test new AI tools and technologies to explore how they can help people start new businesses, grow existing ones, or fill the gaps in their work processes. Yes — AI is a big part of my life. I use it every minute, but I never fully rely on it. I believe that when the human brain and AI creativity work together, BOOM 💥 — faster, smarter, and more innovative results appear.",
  },
  {
    icon: Coffee,
    title: "Let's Build Together",
    description: "So, if you're thinking about growing your business or starting something new from scratch, I'd love to help. Let's grab a coffee, share ideas, and make great things happen. 🚀",
  },
]

export function PhilosophySection() {
  return (
    <section className="bg-secondary/20 py-20">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          My Work Philosophy
        </h2>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {philosophies.map((philosophy, index) => {
            const IconComponent = philosophy.icon
            return (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{philosophy.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {philosophy.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-lg border bg-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold">Ready to Start Your Own Journey?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Whether you're an international student navigating the Finnish job market or a business 
            looking for AI-powered solutions, I'm here to help.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/consulting">Book a Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
