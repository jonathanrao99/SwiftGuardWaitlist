import { Button } from "@/components/ui/button";
import React from "react";

export function Quote() {
  const handleJoinWaitlist = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16 text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl my-16">
      <h2 className="mb-6 text-center text-3xl leading-[1.1] font-medium tracking-tight md:text-5xl">
        Be Among the First to Experience SwiftGuard
      </h2>
      <p className="mb-8 text-center text-muted-foreground leading-6 tracking-tight sm:text-xl max-w-2xl">
        Join our exclusive waitlist and get early access to the platform that will revolutionize security staffing. 
        Early members receive special launch benefits and priority onboarding.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button onClick={handleJoinWaitlist} size="lg" className="rounded-full px-8">
          🎯 Join Waitlist Now
        </Button>
        <p className="text-sm text-muted-foreground">
          ⚡ Get notified first • 💰 Special launch pricing • 🎁 Exclusive perks
        </p>
      </div>
    </div>
  );
}
