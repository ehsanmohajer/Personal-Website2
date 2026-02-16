import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const formData = await request.formData()
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const notes = formData.get("notes") as string
    const file = formData.get("cv") as File

    if (!name || !email || !file) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Send email with CV attachment
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "noreply@ehsanmohajer.fi",
      to: process.env.CONTACT_EMAIL_TO || "ehsanmohajer.fi@gmail.com",
      subject: `CV Review Request from ${name}`,
      text: `
CV Review Request

Name: ${name}
Email: ${email}
Additional Notes: ${notes || "None"}

Please find the CV attached.
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json(
        { error: "Failed to send CV. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "CV uploaded successfully", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("CV upload error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
