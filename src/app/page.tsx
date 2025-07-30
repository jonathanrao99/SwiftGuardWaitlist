"use client";

import { FAQs } from "@/components/faqs/faqs";
import { Features } from "@/components/features/features";
import { Footer } from "@/components/footer/footer";
import { Hero } from "@/components/hero/hero";
import { Quote } from "@/components/quote/quote";
import { WhatIsSwiftGuard } from "@/components/what-is-swiftguard/what-is-swiftguard";
import { useRedirectWarning } from "@/lib/redirect";

export default function Home() {
  useRedirectWarning();

  return (
    <>
      <Hero />
      <WhatIsSwiftGuard />
      <Features />
      <FAQs />
      <Quote />
      <Footer />
    </>
  );
}
