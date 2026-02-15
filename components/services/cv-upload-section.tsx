"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Upload, CheckCircle2 } from "lucide-react"

export function CVUploadSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsUploading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("/api/cv-upload", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to upload CV")
      }

      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to upload CV"
      setError(message)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <section className="bg-secondary/20 py-20">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload Your CV for Review
              </CardTitle>
              <CardDescription>
                Upload your CV and I'll get back to you within 48 hours with detailed feedback. 
                Completely free, no strings attached.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="mb-4 rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                  <p className="font-semibold">Error:</p>
                  <p>{error}</p>
                </div>
              )}
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input type="text" name="name" placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" name="email" placeholder="Your Email" required />
                  </div>
                  <div>
                    <Input 
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx" 
                      required 
                      className="cursor-pointer"
                    />
                    <p className="mt-2 text-xs text-muted-foreground">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>
                  <div>
                    <Textarea
                      name="notes"
                      placeholder="Additional notes (optional)" 
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isUploading}>
                    {isUploading ? "Uploading..." : "Upload CV for Review"}
                  </Button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                  <p className="mt-4 text-lg font-semibold">CV Uploaded Successfully!</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I'll review it and get back to you within 48 hours.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
