import { LeadCaptureForm } from "@/components/services/lead-capture-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesCustomPage() {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-3xl">
        <div className="mb-8 text-center">
          <Badge>Custom project</Badge>
          <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            AI-Enhanced Website
          </h1>
          <p className="mt-3 text-muted-foreground">
            Custom pricing based on your requirements. Let's discuss your project!
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <p className="text-sm text-muted-foreground">
              I'll review your requirements and send you a custom quote with invoice
            </p>
          </CardHeader>
          <CardContent>
            <LeadCaptureForm
              subject="Custom AI-Enhanced Website Request"
              planName="AI-Enhanced Website (Custom Pricing)"
              redirectUrl="https://calendar.app.google/wDbxE3rwsN65TtPH7"
              ctaLabel="Submit & Book Consultation"
            />
            <p className="mt-4 text-xs text-muted-foreground text-center">
              After submitting, you'll be redirected to my calendar to book a consultation session.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
