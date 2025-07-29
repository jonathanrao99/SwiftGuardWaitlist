import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const feedbackData = await request.json();

    // Log the feedback data (you can replace this with database storage)
    console.log("Feedback received:", feedbackData);

    // Here you can:
    // 1. Store in your database
    // 2. Send to your CRM
    // 3. Add to Resend audience with custom fields
    // 4. Send to analytics service

    // For now, we'll just log it and return success
    // You can implement the actual storage logic later

    return NextResponse.json(
      { message: "Feedback submitted successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error processing feedback:", error);
    return NextResponse.json(
      { error: "Failed to submit feedback" },
      { status: 500 }
    );
  }
} 