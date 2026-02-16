import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10",
        className
      )}
    >
      {children}
    </div>
  )
}
