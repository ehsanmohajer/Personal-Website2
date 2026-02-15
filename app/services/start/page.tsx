import { LeadCaptureForm } from "@/components/services/lead-capture-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const plans = {
  landing: {
    name: "Landing Page",
    price: "€1,500",
    description: "Single-page website focused on conversion and speed.",
  },
  full: {
    name: "Full Website",
    price: "€2,500",
    description: "Multi-page website with custom design system and CMS options.",
  },
}

type PlanKey = keyof typeof plans

export default function ServicesStartPage({
  searchParams,
}: {
  searchParams?: { plan?: string }
}) {
  const planKey = (searchParams?.plan as PlanKey) || "landing"
  const plan = plans[planKey] || plans.landing

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-3xl">
        <div className="mb-8 text-center">
          <Badge>Step 1 of 2</Badge>
          <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            Start your {plan.name}
          </h1>
          <p className="mt-3 text-muted-foreground">
            Share your details and I'll send you an invoice through Kassakartanen.fi.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{plan.name}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {plan.description} · <span className="font-semibold">{plan.price}</span>
            </p>
          </CardHeader>
          <CardContent>
            <LeadCaptureForm
              subject={`Website package: ${plan.name}`}
              planName={`${plan.name} (${plan.price})`}
              redirectUrl={`/services/confirmation?plan=${planKey}`}
              ctaLabel="Submit Request"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
