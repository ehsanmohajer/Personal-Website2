"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "A landing page typically takes 2-3 weeks, while a full website takes 4-8 weeks. Timeline depends on project complexity, feedback cycles, and content availability.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! I work with clients worldwide. All meetings can be conducted remotely via video calls, and I'm experienced in async collaboration across time zones.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "All projects include a support period (1-6 months depending on package). After that, I offer maintenance packages or hourly rates for updates and improvements.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All websites are fully responsive and tested on mobile, tablet, and desktop. Mobile-first design is standard in every project.",
  },
  {
    question: "Can you help with content and copywriting?",
    answer: "Yes! I can help structure your content and messaging. For full copywriting services, I can also connect you with trusted partners.",
  },
  {
    question: "What about hosting and domain?",
    answer: "I can guide you through hosting setup and recommend providers (Vercel, Netlify, etc.). Domain registration is typically handled by you, but I'm happy to assist.",
  },
  {
    question: "Do you offer ongoing SEO services?",
    answer: "All websites are built SEO-ready with proper structure, metadata, and performance optimization. For ongoing SEO campaigns, I can connect you with specialists.",
  },
  {
    question: "What makes your approach sustainable?",
    answer: "I focus on lightweight code, optimized assets, energy-efficient hosting, and timeless design that doesn't need constant rebuilds. This reduces carbon footprint and saves you money.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-secondary/20 py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about working with me
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6">
                  <h3 className="mb-3 font-semibold text-lg">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
