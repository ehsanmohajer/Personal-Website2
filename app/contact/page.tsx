import { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact | Sani AI Studio",
  description: "Get in touch for consultations, collaborations, or just to say hello!",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container text-center">
          <p className="text-sm font-medium text-primary">Let's Connect</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
