"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20 md:py-32">
      {/* Gradient Orb */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="text-muted-foreground">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Sani AI Studio
            </h1>
            
            <p className="text-xl text-muted-foreground md:text-2xl">
              Software Engineer specializing in AI agents, automation, and innovative solutions.
              Turning ideas into reality through technology and creativity.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/consulting">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Your Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative h-[500px] w-[500px]">
              {/* Your Avatar */}
              <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-primary/30 shadow-2xl">
                <Image
                  src="/assets/avatar.png"
                  alt="Sani - Software Engineer & AI Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute right-0 top-10 rounded-lg border bg-background p-4 shadow-lg"
              >
                <div className="text-sm font-medium">AI Powered</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-0 rounded-lg border bg-background p-4 shadow-lg"
              >
                <div className="text-sm font-medium">Innovation</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
