import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const plans: Record<string, { name: string; price: string }> = {
  landing: { name: "Landing Page", price: "€1,500" },
  full: { name: "Full Website", price: "€2,500" },
}

export default function ServicesPaymentPage({
  searchParams,
}: {
  searchParams?: { plan?: string }
}) {
  const planKey = searchParams?.plan || "landing"
  const plan = plans[planKey] || plans.landing

  const bankName = process.env.NEXT_PUBLIC_BANK_NAME || "Your bank"
  const bankRecipient = process.env.NEXT_PUBLIC_BANK_RECIPIENT || "Your name"
  const bankIban = process.env.NEXT_PUBLIC_BANK_IBAN || "IBAN"
  const bankBic = process.env.NEXT_PUBLIC_BANK_BIC || "BIC"
  const paypalMe = process.env.NEXT_PUBLIC_PAYPAL_ME || ""

  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-3xl">
        <div className="mb-8 text-center">
          <Badge>Step 2 of 2</Badge>
          <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl">
            Payment for {plan.name}
          </h1>
          <p className="mt-3 text-muted-foreground">
            Complete payment to start. I’ll confirm your project within 24 hours.
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Selected package</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{plan.name}</p>
            <p className="text-muted-foreground">Total: {plan.price}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Bank transfer</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">Bank:</span> {bankName}</p>
              <p><span className="font-medium text-foreground">Recipient:</span> {bankRecipient}</p>
              <p><span className="font-medium text-foreground">IBAN:</span> {bankIban}</p>
              <p><span className="font-medium text-foreground">BIC:</span> {bankBic}</p>
              <p className="mt-3">Reference: {plan.name}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PayPal</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {paypalMe ? (
                <p>
                  Pay securely via PayPal: {""}
                  <Link href={paypalMe} target="_blank" className="text-primary hover:underline">
                    {paypalMe}
                  </Link>
                </p>
              ) : (
                <p>Add your PayPal.me link in NEXT_PUBLIC_PAYPAL_ME.</p>
              )}
            </CardContent>
          </Card>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Need help? <Link href="/contact" className="text-primary hover:underline">Contact me</Link>
        </p>
      </div>
    </section>
  )
}
