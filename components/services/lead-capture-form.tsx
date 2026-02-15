"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface LeadCaptureFormProps {
  subject: string
  redirectUrl: string
  planName?: string
  ctaLabel?: string
}

export function LeadCaptureForm({
  subject,
  redirectUrl,
  planName,
  ctaLabel = "Submit",
}: LeadCaptureFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [invoiceMethod, setInvoiceMethod] = useState<string>("email")
  const [noBusinessId, setNoBusinessId] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(planName || "")

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    
    // Validate emails match
    const email = String(formData.get("email") || "").trim()
    const emailConfirm = String(formData.get("email_confirm") || "").trim()
    
    if (email !== emailConfirm) {
      setError("Email addresses do not match. Please check and try again.")
      setIsSubmitting(false)
      return
    }

    // Build invoice details based on delivery method
    let invoiceDetails = `
═══════════════════════════════════════
📦 SELECTED PACKAGE: ${selectedPackage}
═══════════════════════════════════════

BILLING INFORMATION:
Country: ${formData.get("country")}
Company/Subscriber: ${formData.get("company")}
Business ID: ${noBusinessId ? "❗ NO BUSINESS ID - Requires negotiation" : formData.get("business_id")}
Contact Person: ${formData.get("contact_person")}
Phone: ${formData.get("phone")}
Email: ${email}

INVOICE DELIVERY:
Method: ${formData.get("invoice_method")}`

    if (invoiceMethod === "email") {
      invoiceDetails += `\n  → Invoice Email: ${formData.get("invoice_email")}`
    } else if (invoiceMethod === "e-invoice") {
      invoiceDetails += `\n  → E-invoice Address: ${formData.get("einvoice_address")}
  → E-invoice Operator: ${formData.get("einvoice_operator")}`
    } else if (invoiceMethod === "post") {
      invoiceDetails += `\n  → Postal Code: ${formData.get("postal_code")}
  → Postal Address: ${formData.get("postal_address")}
  → City: ${formData.get("city")}`
    }

    const additionalNotes = String(formData.get("notes") || "").trim()
    if (additionalNotes) {
      invoiceDetails += `\n\nADDITIONAL NOTES:\n${additionalNotes}`
    }

    const payload = {
      name: String(formData.get("contact_person") || "").trim(),
      email,
      subject: `${subject} - Invoice Request`,
      message: invoiceDetails,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request")
      }

      // Determine the plan key based on selected package
      let planKey = "landing"
      if (selectedPackage.includes("Full Website")) {
        planKey = "full"
      } else if (selectedPackage.includes("AI-Enhanced") || selectedPackage.includes("Custom")) {
        planKey = "custom"
      }

      console.log("Selected package:", selectedPackage)
      console.log("Determined planKey:", planKey)
      console.log("Original redirectUrl:", redirectUrl)

      // Update redirect URL with correct plan parameter
      if (redirectUrl.includes("/confirmation")) {
        const finalUrl = `/services/confirmation?plan=${planKey}`
        console.log("Redirecting to:", finalUrl)
        router.push(finalUrl)
      } else {
        router.push(redirectUrl)
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to submit request"
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          <p className="font-semibold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {/* Package Selection - only show if no planName provided or if it's a standard package */}
        {(!planName || planName.includes("€1,500") || planName.includes("€2,500")) ? (
          <div className="rounded-lg border bg-muted/50 p-4">
            <Label className="mb-3 block text-base">Select Your Package *</Label>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  id="package_landing"
                  name="package"
                  value="Landing Page (€1,500)"
                  checked={selectedPackage === "Landing Page (€1,500)"}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  required
                  className="mt-1 h-4 w-4 border-gray-300 text-primary focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="package_landing" className="cursor-pointer flex-1">
                  <span className="font-semibold">Landing Page - €1,500</span>
                  <p className="text-sm text-muted-foreground">
                    Single-page website focused on conversion and speed
                  </p>
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  id="package_full"
                  name="package"
                  value="Full Website (€2,500)"
                  checked={selectedPackage === "Full Website (€2,500)"}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  required
                  className="mt-1 h-4 w-4 border-gray-300 text-primary focus:ring-2 focus:ring-primary"
                />
                <label htmlFor="package_full" className="cursor-pointer flex-1">
                  <span className="font-semibold">Full Website - €2,500</span>
                  <p className="text-sm text-muted-foreground">
                    Multi-page website with custom design system and CMS options
                  </p>
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border bg-primary/5 p-4">
            <Label className="mb-2 block text-base">Selected Package</Label>
            <p className="font-semibold text-lg">{selectedPackage}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Custom pricing will be provided based on your requirements
            </p>
          </div>
        )}

        <div>
          <Label htmlFor="country">Country *</Label>
          <Input id="country" name="country" placeholder="e.g., Finland" required />
        </div>

        <div>
          <Label htmlFor="company">Company/Subscriber Name *</Label>
          <Input id="company" name="company" placeholder="Company name" required />
        </div>

        <div>
          <Label htmlFor="business_id">Business ID {!noBusinessId && "*"}</Label>
          <Input
            id="business_id"
            name="business_id"
            placeholder="e.g., 1234567-8"
            required={!noBusinessId}
            disabled={noBusinessId}
          />
          <div className="mt-2 flex items-center space-x-2">
            <input
              type="checkbox"
              id="no_business_id"
              checked={noBusinessId}
              onChange={(e) => setNoBusinessId(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary"
            />
            <label
              htmlFor="no_business_id"
              className="text-sm text-muted-foreground cursor-pointer"
            >
              No Business ID? (Requires negotiation)
            </label>
          </div>
        </div>

        <div>
          <Label htmlFor="contact_person">Contact Person's Name *</Label>
          <Input id="contact_person" name="contact_person" placeholder="Your full name" required />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+358 XX XXX XXXX" required />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" required />
        </div>

        <div>
          <Label htmlFor="email_confirm">Confirm Email *</Label>
          <Input
            id="email_confirm"
            name="email_confirm"
            type="email"
            placeholder="Retype your email"
            required
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Please enter the same email address to confirm
          </p>
        </div>

        <div>
          <Label htmlFor="invoice_method">Invoice Delivery Method *</Label>
          <Select
            name="invoice_method"
            value={invoiceMethod}
            onValueChange={setInvoiceMethod}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select delivery method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">E-mail</SelectItem>
              <SelectItem value="e-invoice">E-Invoice</SelectItem>
              <SelectItem value="post">Post</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {invoiceMethod === "email" && (
          <div>
            <Label htmlFor="invoice_email">Invoice Email Address *</Label>
            <Input
              id="invoice_email"
              name="invoice_email"
              type="email"
              placeholder="invoicing@company.com"
              required
            />
          </div>
        )}

        {invoiceMethod === "e-invoice" && (
          <>
            <div>
              <Label htmlFor="einvoice_address">E-invoice Address *</Label>
              <Input
                id="einvoice_address"
                name="einvoice_address"
                placeholder="003712345678"
                required
              />
            </div>
            <div>
              <Label htmlFor="einvoice_operator">E-invoice Operator *</Label>
              <Input
                id="einvoice_operator"
                name="einvoice_operator"
                placeholder="e.g., Apix Messaging, OpusCapita"
                required
              />
            </div>
          </>
        )}

        {invoiceMethod === "post" && (
          <>
            <div>
              <Label htmlFor="postal_code">Postal Code *</Label>
              <Input id="postal_code" name="postal_code" placeholder="00100" required />
            </div>
            <div>
              <Label htmlFor="postal_address">Postal Address *</Label>
              <Input
                id="postal_address"
                name="postal_address"
                placeholder="Street address"
                required
              />
            </div>
            <div>
              <Label htmlFor="city">City *</Label>
              <Input id="city" name="city" placeholder="Helsinki" required />
            </div>
          </>
        )}

        <div>
          <Label htmlFor="notes">Additional Notes (Optional)</Label>
          <Textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Any special requirements or details about your project"
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : ctaLabel}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        You will receive an invoice from Kassakartanen.fi for payment
      </p>
    </form>
  )
}
