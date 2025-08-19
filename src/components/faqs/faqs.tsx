"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Building2, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";

type FAQ = {
  question: string;
  answer: string;
  tooltip?: string;
};

const guardFAQs: FAQ[] = [
  {
    question: "How do I get job alerts?",
    answer: "You'll be notified instantly for nearby shifts that match your availability and qualifications.",
  },
  {
    question: "When do I get paid?",
    answer: "Payments are processed via Stripe or Cash App daily, with funds typically available within 24 hours.",
  },
  {
    question: "Can I choose who I work for?",
    answer: "Yes, you can skip or block employers. You have full control over which jobs you accept.",
  },
  {
    question: "What qualifications do I need?",
    answer: "You'll need a valid security license and background check. We'll help verify your credentials.",
    tooltip: "Verified credentials include ID, license & training docs",
  },
  {
    question: "How do I track my earnings?",
    answer: "Your Performance Dashboard shows completed jobs, ratings, and payout history in real-time.",
  },
];

const businessFAQs: FAQ[] = [
  {
    question: "How do I post a job?",
    answer: "Use the dashboard to post instantly or schedule later. Jobs go live immediately to nearby guards.",
  },
  {
    question: "Can I invite specific guards?",
    answer: "Yes, favorites can be prioritized. You can also invite guards you've worked with before.",
    tooltip: "Specific guards can be invited from your favorites list",
  },
  {
    question: "What if a guard doesn't show up?",
    answer: "We have backup guards ready. If someone cancels, we'll immediately notify available replacements.",
  },
  {
    question: "Will guards see my contact info?",
    answer: "No, guard-apps don't reveal business details directly. All communication goes through SwiftGuard.",
    tooltip: "Verified contact info is kept private between parties",
  },
  {
    question: "How do I verify guard credentials?",
    answer: "All guards are pre-vetted with verified licenses and background checks. You can see their ratings and history.",
    tooltip: "Verified credentials include ID, license & training docs",
  },
];

export function FAQs() {
  const [activeView, setActiveView] = useState<"guard" | "business">("business");

  const faqs = activeView === "guard" ? guardFAQs : businessFAQs;

  // Set default expanded question
  const [defaultValue, setDefaultValue] = useState("item-0");

  useEffect(() => {
    setDefaultValue("item-0");
  }, [activeView]);

  return (
    <div id="faqs" className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      {/* Left Side - Title and Description */}
      <div className="flex flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQs
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Got questions? We&apos;ve got answers. Everything you need to know about SwiftGuard.
        </p>

        {/* Toggle Buttons - Enhanced with sliding background animation */}
        <div className="self-center inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 p-1 mb-4 relative">
          {/* Sliding background indicator */}
          <div className={cn(
            "absolute top-1 bottom-1 rounded-full bg-white dark:bg-gray-700 shadow-sm transition-all duration-300 ease-in-out",
            activeView === "business" ? "left-1 w-[calc(52%)]" : "left-[calc(56%)] w-[calc(43%)]"
          )} />
          
          {/* Buttons with transparent backgrounds */}
          <Button
            onClick={() => setActiveView("business")}
            variant="ghost"
            size="sm"
            className={cn(
              "relative z-10 rounded-full px-4 py-2 transition-all duration-200 flex-shrink-0 min-w-0 transform active:scale-95 bg-transparent",
              activeView === "business"
                ? "text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            )}
          >
            <Building2 size={16} className="mr-2 flex-shrink-0" />
            <span className="truncate">For Businesses</span>
          </Button>
          <Button
            onClick={() => setActiveView("guard")}
            variant="ghost"
            size="sm"
            className={cn(
              "relative z-10 rounded-full px-4 py-2 transition-all duration-200 flex-shrink-0 min-w-0 transform active:scale-95 bg-transparent",
              activeView === "guard"
                ? "text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            )}
          >
            <Shield size={16} className="mr-2 flex-shrink-0" />
            <span className="truncate">For Guards</span>
          </Button>
        </div>

        {/* Removed the Dynamic Tagline section entirely */}

      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Accordion type="single" collapsible defaultValue={defaultValue} className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border-b border-gray-200 dark:border-gray-700 group"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6 transition-all duration-300 ease-in-out group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 rounded-lg px-4 -mx-4 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {faq.question}
                        </span>
                        {faq.tooltip && (
                          <div className="relative group/tooltip">
                            <HelpCircle 
                              size={15} 
                              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-help transition-colors duration-200 transform translate-y-[1px]" 
                            />
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-xs text-gray-700 dark:text-gray-300 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover/tooltip:opacity-100 transition-all duration-200 ease-in pointer-events-none whitespace-nowrap z-10 delay-200">
                              {faq.tooltip}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95 dark:border-t-gray-800/95"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 px-4 -mx-4 transition-all duration-300 ease-in-out">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
