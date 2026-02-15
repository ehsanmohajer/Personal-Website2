import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/layout/back-to-top"
import { ChatAssistant } from "@/components/layout/chat-assistant"
import { Analytics } from "@/lib/analytics"
import { AnalyticsWrapper } from "@/components/analytics-wrapper"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Sani AI Studio | Software Engineer & AI Specialist",
  description: "Portfolio of Sani (Ehsan Mohajer) - Software Engineer specializing in AI agents, automation, and innovative solutions. Based in Finland.",
  keywords: ["AI", "Software Engineer", "Finland", "Portfolio", "Automation", "AI Agents"],
  authors: [{ name: "Sani (Ehsan Mohajer)" }],
  openGraph: {
    title: "Sani AI Studio",
    description: "Software Engineer specializing in AI and innovation",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <AnalyticsWrapper />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <BackToTop />
          <ChatAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}
