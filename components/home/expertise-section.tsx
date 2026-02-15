"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = {
  "AI & Automation": ["AI Agents", "Machine Learning", "Automation", "ChatGPT Integration"],
  "Development": ["Next.js", "React", "TypeScript", "Node.js", "Python"],
  "Tools & Platforms": ["Git", "Docker", "Vercel", "AWS", "Tailwind CSS"],
  "Soft Skills": ["Mentoring", "Project Management", "Public Speaking", "Networking"],
}

export function ExpertiseSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Technologies and skills I work with to create innovative solutions
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-lg border bg-card p-6"
            >
              <h3 className="mb-4 text-xl font-semibold">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
