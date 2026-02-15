"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Sparkles } from "lucide-react"
import Image from "next/image"

const studentStories = [
  {
    name: "Oksana Ostapova",
    program: "Logistics Engineering, JAMK",
    story: "Deeply interested in teamwork and innovation, Oksana is eager to learn how Lennätin Viitasaari and DigiKeskus can help international students develop their ideas.",
    highlight: "Learning Finnish for months — a true sign of dedication",
    tags: ["Teamwork", "Innovation", "Finnish Language"],
    image: "/assets/Oksana.jpeg",
  },
  {
    name: "Sandun Nishan",
    program: "Master's ICT, Jyväskylä",
    story: "With strong development skills and passion for solving real business problems, Sandun joined our Hackathon believing it's about connecting with people.",
    highlight: "Success in Finland is built on connections, not just technical skills",
    tags: ["Development", "Hackathons", "Networking"],
    image: "/assets/Sandun.jpeg",
  },
]

export function MentoringSection() {
  return (
    <section className="bg-secondary/20 py-20">
      <div className="container">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Mentoring Students
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Guiding passionate students who want to turn their ideas into reality and create meaningful impact
          </p>
        </div>

        {/* Student Stories */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {studentStories.map((student, index) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        <CardTitle className="text-xl">{student.name}</CardTitle>
                      </div>
                      <CardDescription>{student.program}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{student.story}</p>
                  <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-3">
                    <p className="text-sm">
                      <strong className="text-primary">Key:</strong> {student.highlight}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {student.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mentoring Includes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>What Mentoring Sessions Include</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-primary mb-2">For Students:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Career strategy for Finnish job market</li>
                    <li>• CV and portfolio review</li>
                    <li>• Interview preparation</li>
                    <li>• Networking guidance</li>
                    <li>• Project idea development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">For Professionals:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Technical skill development</li>
                    <li>• AI integration strategies</li>
                    <li>• Project management coaching</li>
                    <li>• Career transition support</li>
                    <li>• Leadership development</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-primary/5 p-4">
                <p className="text-sm">
                  <strong className="text-primary">💡 For Students:</strong> First mentoring session is always free!
                  I'll help you map out your path and connect you with opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg">
            <a 
              href="https://calendar.app.google/wDbxE3rwsN65TtPH7" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Free Mentoring Session
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
