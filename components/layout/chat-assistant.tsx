"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm here to help. What can I assist you with today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickActions = [
    "Book a session",
    "View pricing",
    "Learn about services",
    "Contact info",
  ]

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: inputValue }])

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Thanks for your message! For the best experience, please use the contact form or book directly on my calendar. I'll get back to you within 24 hours!",
        },
      ])
    }, 1000)

    setInputValue("")
  }

  const handleQuickAction = (action: string) => {
    setMessages((prev) => [...prev, { type: "user", text: action }])
    
    setTimeout(() => {
      let response = ""
      if (action.includes("Book")) {
        response = "Great! You can book a session directly on my Google Calendar: https://calendar.app.google/wDbxE3rwsN65TtPH7"
      } else if (action.includes("pricing")) {
        response = "My pricing starts at €1,500 for landing pages and €2,500 for full websites. Check the Services page for detailed pricing!"
      } else if (action.includes("services")) {
        response = "I offer sustainable web design, AI integration, consulting, and mentoring. Visit the Services page to learn more!"
      } else {
        response = "You can reach me at ehsanmohajer.fi@gmail.com or use the contact form on my website!"
      }
      setMessages((prev) => [...prev, { type: "bot", text: response }])
    }, 1000)
  }

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
          >
            <Card className="shadow-2xl">
              <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4">
                <CardTitle className="text-lg">Chat Assistant</CardTitle>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages */}
                <div className="flex h-[300px] flex-col gap-3 overflow-y-auto p-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="border-t p-3">
                  <div className="mb-2 text-xs text-muted-foreground">Quick actions:</div>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action) => (
                      <Button
                        key={action}
                        size="sm"
                        variant="outline"
                        onClick={() => handleQuickAction(action)}
                        className="text-xs"
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="border-t p-3">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      className="flex-1"
                    />
                    <Button size="icon" onClick={handleSend}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat FAB */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full shadow-lg hover:scale-105 transition-transform"
          aria-label="Open chat assistant"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Bot className="h-7 w-7" />
          )}
        </Button>
      </motion.div>
    </>
  )
}
