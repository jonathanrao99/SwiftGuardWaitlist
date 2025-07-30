"use client";

import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import { FeedbackModal } from "@/components/feedback/feedback-modal";
import Image from "next/image";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackStatus, setFeedbackStatus] = useState<"idle" | "success" | "error">("idle");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // First, submit the email to the waitlist
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmittedEmail(email); // Store the email for feedback
        setEmail("");
        // Show feedback modal after successful email submission
        setShowFeedbackModal(true);
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        console.error("Failed to join waitlist:", errorData);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error joining waitlist:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleFeedbackSubmit = async (feedbackData: {
    email: string;
    role: string | null;
    businessChallenge?: string;
    businessElaboration?: string;
    guardChallenge?: string;
    guardElaboration?: string;
    guardAgencies?: string;
    city?: string;
    agency?: string;
    eventType?: string;
    securityType?: string;
  }) => {
    try {
      console.log("Submitting feedback for:", feedbackData.email);
      console.log("Stored submittedEmail:", submittedEmail);
      
      // Prepare feedback data for the API
      const feedbackPayload = {
        email: submittedEmail, // Use the stored email
        feedback_rating: 5, // Default rating since we don't have a rating field in the modal
        feedback_text: JSON.stringify({
          role: feedbackData.role,
          businessChallenge: feedbackData.businessChallenge,
          businessElaboration: feedbackData.businessElaboration,
          guardChallenge: feedbackData.guardChallenge,
          guardElaboration: feedbackData.guardElaboration,
          guardAgencies: feedbackData.guardAgencies,
          city: feedbackData.city,
          agency: feedbackData.agency,
          eventType: feedbackData.eventType,
          securityType: feedbackData.securityType,
        }),
        feedback_category: feedbackData.role || "general"
      };

      console.log("Feedback payload:", feedbackPayload);

      // Update the waitlist entry with feedback data
      const response = await fetch("/api/update-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackPayload),
      });

      console.log("Feedback response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        try {
          const result = await response.json();
          console.log("Feedback submitted successfully:", result);
          setFeedbackStatus("success");
          setTimeout(() => setFeedbackStatus("idle"), 3000);
        } catch {
          console.log("Feedback submitted successfully (no response body)");
          setFeedbackStatus("success");
          setTimeout(() => setFeedbackStatus("idle"), 3000);
        }
      } else {
        try {
          const errorData = await response.json();
          console.error("Failed to submit feedback:", errorData);
          setFeedbackStatus("error");
          setTimeout(() => setFeedbackStatus("idle"), 3000);
        } catch {
          console.error("Failed to submit feedback: HTTP", response.status);
          setFeedbackStatus("error");
          setTimeout(() => setFeedbackStatus("idle"), 3000);
        }
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="z-1 grid w-full place-items-center p-4 sm:p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-8 sm:mt-16 flex flex-col items-center gap-4 sm:gap-6 mt-20 sm:mt-30">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-[1.1] font-medium tracking-tight">
          SwiftGuard<span className="text-muted-foreground block text-2xl sm:text-4xl md:text-5xl lg:text-6xl">On-Demand Security Staffing. Simplified.</span>
        </h1>
        <p className="max-w-3xl text-center leading-6 tracking-tight text-base sm:text-lg md:text-xl px-4">
        Whether you're organizing events or looking for work, SwiftGuard connects guards and businesses with real-time staffing—no agencies, no delays.
        </p>
        
        <p className="max-w-2xl text-center text-sm text-muted-foreground mt-40">
        SwiftGuard is still in early development. We’re building this with your feedback. Join the waitlist and help us shape the future of security staffing.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md px-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 sm:h-10 rounded-full px-6 py-2 text-sm font-medium bg-background border border-input shadow-xs hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-ring/50 transition-all"
            required
            disabled={isSubmitting}
          />
          <Button type="submit" className="w-full sm:w-auto h-12 sm:h-10 rounded-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
        
        {submitStatus === "success" && (
          <p className="text-green-600 text-sm font-medium">Successfully joined the waitlist!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again.</p>
        )}
        {feedbackStatus === "success" && (
          <p className="text-green-600 text-sm font-medium">Thank you for your feedback!</p>
        )}
        {feedbackStatus === "error" && (
          <p className="text-red-600 text-sm font-medium">Failed to submit feedback. Please try again.</p>
        )}

        <Pill className="px-4 sm:px-0">
          <PillAvatarGroup className="hidden sm:flex">
            <PillAvatar src="/avatars/1.jpg" />
            <PillAvatar src="/avatars/2.jpg" />
            <PillAvatar src="/avatars/3.jpg" />
            <PillAvatar src="/avatars/4.jpg" />
          </PillAvatarGroup>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm text-center">
            Join <span className="text-foreground">3 Million</span> other users already on board
          </p>
        </Pill>
        
        <Image src="/app-image-1.png" alt="Hero" width={304} height={445} className="mt-15" />
      </div>
      
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => {
          setShowFeedbackModal(false);
          setSubmittedEmail(""); // Reset the stored email
        }}
        onSubmit={handleFeedbackSubmit}
        email={submittedEmail}
      />
    </div>
  );
}
