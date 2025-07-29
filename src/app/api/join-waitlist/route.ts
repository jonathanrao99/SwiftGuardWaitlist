import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Send welcome email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SwiftGuard <noreply@yourdomain.com>",
        to: [email],
        subject: "Welcome to SwiftGuard Waitlist! 🛡️",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2563eb;">Welcome to SwiftGuard!</h1>
            <p>Thank you for joining our waitlist for the next generation of security.</p>
            <p>You'll be among the first to know when SwiftGuard launches with:</p>
            <ul>
              <li>Advanced scam protection</li>
              <li>Premium VPN service</li>
              <li>Real-time threat detection</li>
              <li>Cross-platform security</li>
            </ul>
            <p>We'll notify you as soon as SwiftGuard is ready!</p>
            <p>Best regards,<br>The SwiftGuard Team</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully joined waitlist" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error joining waitlist:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 