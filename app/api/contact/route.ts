import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const contactEmailTo = process.env.CONTACT_EMAIL_TO || "ehsanmohajer.fi@gmail.com"
    const contactEmailFrom = process.env.CONTACT_EMAIL_FROM || "noreply@sanimohajer.com"

    // Send email using Resend
    const data = await resend.emails.send({
      from: contactEmailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (data.error) {
      console.error("Resend error details:", {
        error: data.error,
        message: data.error?.message,
        statusCode: data.error?.code,
      })
      return NextResponse.json(
        { error: `Failed to send email: ${data.error?.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", data.id)

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    console.error("Contact form error:", {
      message: errorMessage,
      error,
    })
    return NextResponse.json(
      { error: `Failed to process your request: ${errorMessage}` },
      { status: 500 }
    )
  }
}
