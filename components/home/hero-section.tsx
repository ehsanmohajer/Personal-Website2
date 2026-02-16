"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const textChangerStyle = `
  .roles-container {
    display: inline-block;
    height: 1.2em;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
  }

  .role {
    display: block;
    height: 100%;
    padding-left: 6px;
    color: var(--primary-color, #3b82f6);
    animation: role-change 8s infinite;
    font-weight: 600;
  }

  @keyframes role-change {
    0% {
      transform: translateY(0);
    }
    22% {
      transform: translateY(0);
    }
    24% {
      transform: translateY(-102%);
    }
    25% {
      transform: translateY(-100%);
    }
    47% {
      transform: translateY(-100%);
    }
    49% {
      transform: translateY(-202%);
    }
    50% {
      transform: translateY(-200%);
    }
    72% {
      transform: translateY(-200%);
    }
    74% {
      transform: translateY(-302%);
    }
    75% {
      transform: translateY(-300%);
    }
    97% {
      transform: translateY(-300%);
    }
    99% {
      transform: translateY(-402%);
    }
    100% {
      transform: translateY(-400%);
    }
  }
`

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-12 md:py-20 lg:py-32">
      <style>{textChangerStyle}</style>
      {/* Gradient Orb */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      
      {/* Animated background glow that follows cursor */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -z-10 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      </div>
      
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center rounded-full border bg-background/50 backdrop-blur-md px-3 py-1 text-sm hover:bg-background/70 transition-all duration-300 w-fit">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="text-muted-foreground">AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Sani AI Studio
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
              Software Engineer specializing in AI agents, automation, and innovative solutions.
              Turning ideas into reality through technology and creativity.
            </p>
            
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
              I am a <span className="roles-container font-semibold text-primary">
                <span className="role">Software Developer</span>
                <span className="role">AI Specialist</span>
                <span className="role">Project Specialist</span>
                <span className="role">Mentor</span>
              </span>
            </div>
            
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row pt-4 relative z-10">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-sm sm:text-base">
                <Link href="/consulting">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="backdrop-blur-md bg-background/50 border-primary/30 hover:bg-background/70 transition-all duration-300 text-sm sm:text-base">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-4 md:pt-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="rounded-lg backdrop-blur-md bg-primary/5 border border-primary/20 p-2 sm:p-3 md:p-4 hover:bg-primary/10 transition-all duration-300"
              >
                <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-xs md:text-sm text-muted-foreground">Years</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="rounded-lg backdrop-blur-md bg-primary/5 border border-primary/20 p-2 sm:p-3 md:p-4 hover:bg-primary/10 transition-all duration-300"
              >
                <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary">50+</div>
                <div className="text-xs sm:text-xs md:text-sm text-muted-foreground">Projects</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="rounded-lg backdrop-blur-md bg-primary/5 border border-primary/20 p-2 sm:p-3 md:p-4 hover:bg-primary/10 transition-all duration-300"
              >
                <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-primary">100+</div>
                <div className="text-xs sm:text-xs md:text-sm text-muted-foreground">Clients</div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column - Your Photo with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none lg:h-[500px] lg:w-[500px]">
              {/* Your Avatar with glassmorphic border */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-full w-full overflow-hidden rounded-3xl lg:rounded-full border-4 border-primary/30 shadow-2xl">
                <Image
                  src="/assets/avatar.png"
                  alt="Sani - Software Engineer & AI Specialist"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Badge 1 - AI Powered */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 sm:top-8 -right-4 sm:right-0 md:right-8 lg:right-0 lg:top-10 rounded-xl backdrop-blur-md bg-background/60 border border-primary/20 p-3 sm:p-4 shadow-lg hover:bg-background/80 transition-all duration-300 w-auto"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="text-xs sm:text-sm font-medium whitespace-nowrap">AI Powered</div>
                </div>
              </motion.div>
              
              {/* Floating Badge 2 - Innovation */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 sm:bottom-8 -left-4 sm:left-0 md:left-8 lg:left-0 lg:bottom-10 rounded-xl backdrop-blur-md bg-background/60 border border-primary/20 p-3 sm:p-4 shadow-lg hover:bg-background/80 transition-all duration-300 w-auto"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="text-xs sm:text-sm font-medium whitespace-nowrap">Innovation</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
