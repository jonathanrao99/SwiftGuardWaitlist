import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, feedback_rating, feedback_text, feedback_category } = body;

    console.log("Updating feedback for:", email);
    console.log("Full request body:", body);

    if (!email || typeof email !== "string") {
      return new NextResponse(
        JSON.stringify({ error: "Email is required" }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    // Update the existing record with feedback data
    const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/waitlist?email=eq.${encodeURIComponent(email.toLowerCase().trim())}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({
        feedback_rating,
        feedback_text,
        feedback_category
      })
    });

    if (!response.ok) {
      let errorData;
      try {
        errorData = await response.json();
      } catch {
        errorData = { message: "No error details available" };
      }
      
      console.error("Supabase update error:", errorData);
      console.error("Response status:", response.status);
      
      return new NextResponse(
        JSON.stringify({ error: "Failed to update feedback", details: errorData }),
        { 
          status: response.status,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ success: true, message: "Feedback updated successfully!" }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error("Error updating feedback:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
} 