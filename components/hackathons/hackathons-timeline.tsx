"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Code, Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const hackathons = [
  {
    id: 1,
    title: "Viitasaari AI Hackathon Vol 4.0",
    date: "October 1-2, 2025",
    description: "Organized and led the 4th iteration of the Viitasaari AI Hackathon at Lennätin Viitasaari Digikeskus. This was an incredible two-day event where students and friends demonstrated exceptional creativity and hard work. The event showcased brilliant ideas and brought the community together. Led the pre-hackathon AI workshop introducing students to AI tools, agents, and real-world use cases. Students embraced the technologies and applied them creatively during the event. You see a group of students that they worked on WITAS Company case and I was their mentors during the hackathon. It was an amazing experience and I am so proud of all the students who participated and made it a success!",
    role: "Organizer & Mentor",
    achievement: "Successfully Organized",
    icon: Trophy,
    tags: ["AI/ML", "Community Leadership", "Mentoring", "Event Organization"],
    highlights: [
      "Led organization with project manager Mirva Jäntti",
      "Mentored student teams through ideation and pitching",
      "Received guidance from Oleksiy Kovalenko on pitch optimization",
      "Students applied AI creatively to solve real-world problems",
      "Post-hackathon camping retreat for team bonding and reflection",
      "mentored a team working on WITAS Company case during the hackathon",
      "Collaborated with JAMK Talent Boost project team",
    ],
    image: "HackathonVol4-01.jpeg",
    images: ["HackathonVol4-01.jpeg", "HackathonVol4-02.jpeg"],
    highlights_people: "Mirva Jäntti (Project Manager), Aktiivipoika Tatu (Support), Anna Tenhunen (JAMK Talent Boost), Oleksiy Kovalenko (Pitch Guidance)",
    links: [
      { label: "Hackathon Insights", url: "https://ehsanmohajer.github.io/ViitasaariHackathon/" },
    ],
    highlighted: true,
  },
  {
    id: 2,
    title: "Viitasaari AI Hackathon Vol 3",
    date: "May 7-8, 2025",
    description: "Part of organizing one of Finland's first AI Hackathons in Viitasaari. Led the pre-hackathon AI workshop introducing students to AI tools, agents, and real-world use cases. Students embraced the technologies and applied them creatively during the event.",
    role: "Co-Organizer & Workshop Leader",
    achievement: "Successfully Organized",
    icon: Trophy,
    tags: ["AI/ML", "Workshop Leadership", "Student Education", "Event Organization"],
    highlights: [
      "Organized pre-hackathon AI workshop introducing AI tools and agents",
      "Guided students in exploring AI power and real-world applications",
      "Led intensive coding and teamwork day",
      "Post-hackathon camping retreat for team reconnection and reflection",
      "First of Finland's early AI Hackathons combining emerging tech with learning",
    ],
    image: "HackathonVol3-01.jpeg",
    images: ["HackathonVol3-01.jpeg", "HackathonVol3-02.jpeg"],
    links: [],
    highlighted: true,
  },
  {
    id: 3,
    title: "Viitasaari Hackathon Camp Vol 2",
    date: "September 18-19, 2024",
    description: "JAMK Talent Boost organized this hackathon camp in collaboration with Kehittämisyhtiö Witas Oy, Lennätin Viitasaari Digikeskus, and Viitasaari City. The goal was to introduce JAMK students to local companies, provide real-life cases matching their skills and learning goals, and educate about job market opportunities in Central Finland. Over two days, students created meaningful connections with companies, participated in a gaming tournament, toured vibrant Viitasaari, and experienced traditional Finnish culture including sauna, lake swimming, and outdoor activities at Hännilänsalmi Camping.",
    role: "JAMK Talent Boost Co-Organizer",
    achievement: "Successfully Organized",
    icon: Trophy,
    tags: ["Talent Integration", "Career Development", "Local Business", "Student Education", "Cultural Exchange"],
    highlights: [
      "Introduced JAMK students to local Finnish companies and job market",
      "Organized company case challenges: Startup Refugees, SisuBusiness, Kolima Distillery, HetApu",
      "Gaming Tournament with GamePit by JAMK as event culmination",
      "City tour showcasing Viitasaari as a place to live and work",
      "Traditional Finnish experience at Hännilänsalmi Camping with grill, sauna, and lake activities",
      "Keynote speech on pitching and self-presentation by Oleksiy Kovalenko",
      "Positive student feedback and successful integration outcomes",
    ],
    image: "HackathonVol2-01.jpeg",
    images: ["HackathonVol2-01.jpeg", "HackathonVol2-02.jpeg"],
    highlights_people: "Mirva Jäntti, Aktiivipoika Tatu, Tapani Laitinen, Talent Boost Trainees (Dibya Uprety, Hasan Chaudry, Md Nazmul Alom, Saeed Jassas), Bushra Faruque, Oleksiy Kovalenko, Ilona Ukkonen, Elmo Hämäläinen, Veerti Pekonniemi, Anne Christabel de Leon, and all Viitasaari Digikeskus staff",
    links: [],
    highlighted: true,
  },
]

export function HackathonsTimeline() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold">What I deliver</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• End-to-end event design and program structure</li>
              <li>• Challenge definition with local companies</li>
              <li>• Mentoring, judging criteria, and team support</li>
              <li>• Workshops on AI and prototyping</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold">Impact highlights</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• 5 hackathons hosted in Central Finland</li>
              <li>• Dozens of students connected to local employers</li>
              <li>• AI workshops that turned ideas into demos</li>
            </ul>
          </div>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold">AI Hackathon (Viitasaari)</h3>
            <p className="mt-1 text-sm font-medium text-primary">Organizer</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Focused on real challenges from local businesses, with AI workshops, mentoring,
              and project delivery within 48 hours.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-xl font-semibold">Regional Innovation Hackathon</h3>
            <p className="mt-1 text-sm font-medium text-primary">Organizer</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Students, startups, and companies collaborating to build practical prototypes
              for the Central Finland region.
            </p>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold">My Hackathon Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hackathons have been instrumental in my career growth, helping me build connections,
            demonstrate skills, and learn through rapid iteration.
          </p>
        </div>

        <div className="space-y-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`${
                hackathon.highlighted ? "border-primary shadow-lg" : ""
              } transition-all hover:shadow-lg overflow-hidden`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <hackathon.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{hackathon.title}</CardTitle>
                        <CardDescription>{hackathon.date}</CardDescription>
                      </div>
                    </div>
                    {hackathon.highlighted && (
                      <Badge className="bg-primary">🌟 Organized</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hackathon.images && hackathon.images.length > 0 ? (
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                      {hackathon.images.map((img, idx) => (
                        <div key={idx} className="relative h-64 w-full overflow-hidden rounded-lg bg-secondary">
                          <Image
                            src={`/assets/${img}`}
                            alt={`${hackathon.title} - Photo ${idx + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : hackathon.image ? (
                    <div className="relative h-64 w-full overflow-hidden rounded-lg bg-secondary">
                      <Image
                        src={`/assets/${hackathon.image}`}
                        alt={hackathon.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  
                  <p className="text-muted-foreground">{hackathon.description}</p>
                  
                  {hackathon.highlights && (
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <h4 className="font-semibold text-sm mb-3">Highlights:</h4>
                      <ul className="space-y-2">
                        {hackathon.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground">• {highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {hackathon.highlights_people && (
                    <div className="rounded-lg bg-primary/5 p-4 border border-primary/20">
                      <h4 className="font-semibold text-sm text-primary mb-2">Thanks to:</h4>
                      <p className="text-sm text-muted-foreground">{hackathon.highlights_people}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <span className="text-sm font-medium">Role:</span>
                      <span className="ml-2 text-sm text-muted-foreground">{hackathon.role}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Achievement:</span>
                      <span className="ml-2 text-sm text-primary font-medium">{hackathon.achievement}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {hackathon.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {hackathon.links && hackathon.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {hackathon.links.map((link) => (
                        <Link
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          {link.label}
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Hackathons Matter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 rounded-lg border-l-4 border-primary bg-card p-8"
        >
          <h3 className="text-2xl font-bold">Why Hackathons Matter</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="font-semibold text-primary">For Your Career</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Demonstrate skills in real-time</li>
                <li>• Build professional connections</li>
                <li>• Learn new technologies quickly</li>
                <li>• Get noticed by employers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary">For Your Growth</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Practice rapid problem-solving</li>
                <li>• Experience team collaboration</li>
                <li>• Build portfolio projects</li>
                <li>• Gain confidence in abilities</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
