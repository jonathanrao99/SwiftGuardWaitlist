"use client";

import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Pill, PillAvatar, PillAvatarGroup } from "@/components/ui/pill";
import { FeedbackModal } from "@/components/feedback/feedback-modal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Show feedback modal immediately
    setShowFeedbackModal(true);
    setIsSubmitting(false);
    
    // For now, just show success message
    setSubmitStatus("success");
    setEmail("");
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleFeedbackSubmit = async (feedbackData: any) => {
    try {
      // Send feedback data to your API
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully");
      } else {
        console.error("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6 mt-30">
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          SwiftGuard<span className="text-muted-foreground block text-6xl">On-Demand Security Staffing. Simplified.</span>
        </h1>
        <p className="max-w-3xl text-center leading-6 tracking-tight sm:text-xl">
        Whether you're organizing events or looking for work, SwiftGuard connects guards and businesses with real-time staffing—no agencies, no delays.
        </p>
        
        <p className="max-w-2xl text-center text-sm text-muted-foreground mt-30">
        SwiftGuard is still in early development. We’re building this with your feedback. Join the waitlist and help us shape the future of security staffing.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-10 rounded-full px-6 py-2 text-sm font-medium bg-background border border-input shadow-xs hover:border-blue-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-ring/50 transition-all"
            required
            disabled={isSubmitting}
          />
          <Button type="submit" className="w-full sm:w-auto" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
        
        {submitStatus === "success" && (
          <p className="text-green-600 text-sm font-medium">Successfully joined the waitlist!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 text-sm font-medium">Something went wrong. Please try again.</p>
        )}

        <Pill>
          <PillAvatarGroup className="hidden sm:flex">
            <PillAvatar src="/avatars/1.jpg" />
            <PillAvatar src="/avatars/2.jpg" />
            <PillAvatar src="/avatars/3.jpg" />
            <PillAvatar src="/avatars/4.jpg" />
          </PillAvatarGroup>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:border-l-1 sm:text-sm">
            Join <span className="text-foreground">3 Million</span> other users already on board
          </p>
        </Pill>
        
        <Image src="/app-image-1.png" alt="Hero" width={304} height={445} className="mt-15" />
      </div>
      
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        onSubmit={handleFeedbackSubmit}
        email={email}
      />
    </div>
  );
}
