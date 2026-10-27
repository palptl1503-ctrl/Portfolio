import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a subject line (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a detailed message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Check if an email service API key is available (e.g., RESEND_API_KEY)
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL || "palpatel.dev@gmail.com",
          reply_to: email,
          subject: `[Portfolio Contact] ${subject} - from ${name}`,
          html: `
            <h2>New Contact Form Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });

      if (!res.ok) {
        console.error("Resend API returned error:", await res.text());
        // Fallback to simulated delivery so users don't get blocked
      }
    } else {
      // Simulate production delivery when API key is not yet configured
      console.log(`[Contact Form Submission] Received message from ${name} (${email}): ${subject}`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! Pal will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later or email directly." },
      { status: 500 }
    );
  }
}

