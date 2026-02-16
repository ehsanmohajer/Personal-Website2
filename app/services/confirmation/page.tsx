import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"

export const dynamic = "force-dynamic"

const plans: Record<string, { name: string; price: string }> = {
  landing: { name: "Landing Page", price: "€1,500" },
  full: { name: "Full Website", price: "€2,500" },
  custom: { name: "AI-Enhanced Website", price: "Custom Pricing" },
}

export default async function ServicesConfirmationPage({
  searchParams,
}: {
  searchParams?: Promise<{ plan?: string }> | { plan?: string }
}) {
  const params = searchParams instanceof Promise ? await searchParams : searchParams
  const planKey = params?.plan || "landing"
  const plan = plans[planKey] || plans.landing

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Request Received!
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
            {plan.name} - {plan.price}
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold">
                1
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Invoice Generation</h3>
                <p className="text-sm text-muted-foreground">
                  I will prepare and send you an official invoice through Kassakartanen.fi using the
                  billing information you provided.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold">
                2
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Invoice Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive the invoice via your selected delivery method (email, e-invoice, or post)
                  within 1-2 business days.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold">
                3
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Payment & Project Start</h3>
                <p className="text-sm text-muted-foreground">
                  Once payment is received, I'll begin work on your project immediately. You'll receive
                  regular updates throughout the development process.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6 bg-muted/50">
          <CardContent className="pt-6">
            <p className="mb-2 font-semibold">Questions or Need Changes?</p>
            <p className="text-sm text-muted-foreground">
              Contact me at{" "}
              <a href="mailto:ehsanmohajer.fi@gmail.com" className="text-primary hover:underline">
                ehsanmohajer.fi@gmail.com
              </a>
              {" "}or WhatsApp:{" "}
              <a href="https://wa.me/358417146600" className="text-primary hover:underline">
                +358 41 714 6600
              </a>
            </p>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button asChild variant="outline" className="flex-1">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
