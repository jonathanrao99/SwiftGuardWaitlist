import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, feedback_rating, feedback_text, feedback_category } = body;

    console.log("Received data:", { email, feedback_rating, feedback_text, feedback_category });

    // Validate email
    if (!email || typeof email !== "string") {
      console.log("Email validation failed:", { email, type: typeof email });
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email format:", email);
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare the data to insert
    const waitlistData = {
      email: email.toLowerCase().trim(),
      ...(feedback_rating && { feedback_rating }),
      ...(feedback_text && { feedback_text }),
      ...(feedback_category && { feedback_category }),
    };

    console.log("Prepared waitlist data:", waitlistData);

    // Try to insert the data
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(waitlistData)
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: "No error details available" };
      }
      
      console.error("Supabase error:", errorData);
      console.error("Response status:", response.status);
      console.error("Response headers:", Object.fromEntries(response.headers.entries()));
      
      // Handle duplicate email error
      if (response.status === 409) {
        // If this is just an email submission (no feedback), that's fine
        if (!feedback_rating && !feedback_text && !feedback_category) {
          return NextResponse.json(
            { success: true, message: "Email already registered" },
            { status: 200 }
          );
        }
        // If this has feedback data, we need to handle it differently
        return NextResponse.json(
          { error: "Email already registered, cannot update with feedback" },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { error: "Failed to join waitlist", details: errorData },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Successfully joined the waitlist!" },
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