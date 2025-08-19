"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Building2, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Role = "business" | "guard" | null;
type FeedbackData = {
  email: string;
  role: Role;
  businessChallenge?: string;
  businessElaboration?: string;
  guardChallenge?: string;
  guardElaboration?: string;
  guardAgencies?: string;
  city?: string;
  agency?: string;
  eventType?: string;
  securityType?: string;
};

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FeedbackData) => void;
  email: string;
}

export function FeedbackModal({ isOpen, onClose, onSubmit, email }: FeedbackModalProps) {
  const [step, setStep] = useState<"role" | "questions">("role");
  const [selectedRole, setSelectedRole] = useState<Role>(null);
  const [feedbackData, setFeedbackData] = useState<FeedbackData>({
    email,
    role: null,
  });

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setFeedbackData(prev => ({ ...prev, role }));
    setStep("questions");
  };

  const handleQuestionChange = (field: keyof FeedbackData, value: string) => {
    setFeedbackData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(feedbackData);
    onClose();
    // Reset state
    setStep("role");
    setSelectedRole(null);
    setFeedbackData({ email, role: null });
  };

  const handleSkip = () => {
    onClose();
    // Reset state
    setStep("role");
    setSelectedRole(null);
    setFeedbackData({ email, role: null });
  };

  const handleBack = () => {
    setStep("role");
    setSelectedRole(null);
    setFeedbackData({ email, role: null });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white dark:bg-zinc-950 backdrop-blur-md rounded-3xl p-6 md:p-8 max-w-[420px] w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 dark:border-zinc-800"
        >
        <div className="flex items-start justify-between mb-6">
          <div className="space-y-3">
            {step === "role" && (
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Step 1 of 2
              </div>
            )}
            {step === "questions" && (
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                Almost done!
              </div>
            )}
            <div className="space-y-2">
                          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-100 leading-snug tracking-tight">
              {step === "role" ? "Help us shape SwiftGuard for you" : "Help us understand your needs better"}
            </h2>
              {step === "role" && (
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-snug">
                  We&apos;re building SwiftGuard with real feedback from people like you. Let us know who you are so we can tailor your experience.
                </p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800"
          >
            <X size={20} />
          </button>
        </div>

        {step === "role" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRoleSelect("business")}
                className="group flex flex-col items-start gap-3 border-2 border-gray-200 dark:border-zinc-700 rounded-xl md:px-8 md:py-6 p-4 transition-all duration-200 ease-in-out hover:border-blue-500/60 hover:shadow-sm hover:bg-blue-50/50 dark:hover:bg-blue-950/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <Building2 size={20} />
                  </motion.div>
                  <span className="font-semibold text-gray-900 dark:text-zinc-100">I&apos;m a Business</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">Need trained guards for an event or venue.</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleRoleSelect("guard")}
                className="group flex flex-col items-start gap-3 border-2 border-gray-200 dark:border-zinc-700 rounded-xl md:px-8 md:py-6 p-4 transition-all duration-200 ease-in-out hover:border-blue-500/60 hover:shadow-sm hover:bg-blue-50/50 dark:hover:bg-blue-950/20 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-2 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <Shield size={20} />
                  </motion.div>
                  <span className="font-semibold text-gray-900 dark:text-zinc-100">I&apos;m a Guard</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">Looking for flexible, secure work shifts.</p>
              </motion.button>
            </div>
          </div>
        )}

        {step === "questions" && selectedRole === "business" && (
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-zinc-100 mb-3">
                What&apos;s the one thing you struggle with most when it comes to hiring security guards?
              </label>
              <div className="relative">
                <select
                  value={feedbackData.businessChallenge || ""}
                  onChange={(e) => handleQuestionChange("businessChallenge", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm appearance-none cursor-pointer pr-10"
                >
                  <option value="">Select your biggest challenge</option>
                  <option value="high-costs">High agency fees</option>
                  <option value="late-arrivals">Late arrivals or no-shows</option>
                  <option value="verification">Hard to verify credentials</option>
                  <option value="quality">Inconsistent quality</option>
                  <option value="other">Something else</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-zinc-100 mb-3 mt-[-15px]">
                Can you elaborate on your selection?
              </label>
              <textarea
                value={feedbackData.businessElaboration || ""}
                onChange={(e) => handleQuestionChange("businessElaboration", e.target.value)}
                placeholder="Feel free to provide any specific examples or context."
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-zinc-100 mb-3 mt-[-20px]">
                Who do you currently hire guards from? <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={feedbackData.agency || ""}
                onChange={(e) => handleQuestionChange("agency", e.target.value)}
                placeholder="e.g. Allied Universal or local agency"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm"
              />
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-zinc-700">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mb-4">
              Be a part of building a better way to hire.<br />
              Help us shape the future of staffing.
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  className="flex-1 py-3 font-semibold text-gray-700 hover:text-white dark:text-zinc-300 dark:hover:text-white transition-all duration-200"
                >
                  ← Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 py-3 font-semibold bg-black hover:bg-gray-800 text-white transition-all duration-200"
                >
                  Submit →
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "questions" && selectedRole === "guard" && (
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-zinc-100 mb-3">
                What&apos;s the biggest challenge you&apos;ve faced while working security jobs?
              </label>
              <div className="relative">
                <select
                  value={feedbackData.guardChallenge || ""}
                  onChange={(e) => handleQuestionChange("guardChallenge", e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm appearance-none cursor-pointer pr-10"
                >
                  <option value="">Select your biggest challenge</option>
                  <option value="low-pay">Low or delayed pay</option>
                  <option value="inconsistent-shifts">Inconsistent or unreliable shifts</option>
                  <option value="miscommunication">Miscommunication about job expectations</option>
                  <option value="unsafe-environments">Unsafe or unprofessional work environments</option>
                  <option value="last-minute-cancellations">Last-minute cancellations or no-show clients</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-zinc-100 mb-3 mt-[-15px]">
                Can you elaborate on your selection?
              </label>
              <textarea
                value={feedbackData.guardElaboration || ""}
                onChange={(e) => handleQuestionChange("guardElaboration", e.target.value)}
                placeholder="Feel free to provide any specific examples or context."
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 dark:text-zinc-100 mb-3 mt-[-20px]">
                Which security agencies or platforms have you worked with before? <span className="text-gray-500 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                value={feedbackData.guardAgencies || ""}
                onChange={(e) => handleQuestionChange("guardAgencies", e.target.value)}
                placeholder="e.g., Securitas, private gigs…"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm"
              />
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-zinc-700">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center mb-4">
              Let’s build a better platform for guards—together.<br />
              Help us shape the future of staffing
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  className="flex-1 py-3 font-semibold text-gray-700 hover:text-white dark:text-zinc-300 dark:hover:text-white transition-all duration-200"
                >
                  ← Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 py-3 font-semibold bg-black hover:bg-gray-800 text-white transition-all duration-200"
                >
                  Submit →
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="pt-6 text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSkip}
            className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 hover:underline transition-all duration-200 font-medium"
          >
            Just want to explore for now
          </motion.button>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 