"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Calendar, Linkedin, Github, MessageSquare, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "ehsanmohajer.fi@gmail.com",
    link: "mailto:ehsanmohajer.fi@gmail.com",
    action: "Send Email",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat: +358 41 714 6600",
    link: "https://wa.me/358417146600",
    action: "Message Now",
  },
  {
    icon: Calendar,
    title: "Book a Session",
    description: "Schedule a consultation or mentoring session",
    link: "https://calendar.app.google/wDbxE3rwsN65TtPH7",
    action: "Book Now",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Connect with me professionally",
    link: "https://www.linkedin.com/in/ehsan-mohajer-k/",
    action: "Connect",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Check out my code and projects",
    link: "https://github.com/ehsanmohajer",
    action: "View Profile",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold">Let's Connect</h2>
        <p className="mt-2 text-muted-foreground">
          Say hello — I respond quickly and will point you to the right next step.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Based in Jyväskylä, Finland — open to remote collaborations.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="transition-all hover:shadow-lg hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {method.description}
                    </p>
                    <Button
                      asChild
                      variant="link"
                      className="mt-2 h-auto p-0 text-primary"
                    >
                      <a
                        href={method.link}
                        target={method.link.startsWith("http") ? "_blank" : undefined}
                        rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.action} →
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Response Info */}
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <div className="flex gap-3">
            <MessageSquare className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold">I Respond Quickly</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                I typically respond within 24 hours. For urgent matters, reach out via WhatsApp.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Availability */}
      <div className="rounded-lg border bg-card p-6">
        <h3 className="font-semibold">Availability</h3>
        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <div className="flex justify-between">
            <span>Consultations:</span>
            <span className="font-medium text-foreground">Mon-Fri, 9:00-17:00 (EET)</span>
          </div>
          <div className="flex justify-between">
            <span>Mentoring Sessions:</span>
            <span className="font-medium text-foreground">Flexible scheduling</span>
          </div>
          <div className="flex justify-between">
            <span>Time Zone:</span>
            <span className="font-medium text-foreground">Helsinki (UTC+2/+3)</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
