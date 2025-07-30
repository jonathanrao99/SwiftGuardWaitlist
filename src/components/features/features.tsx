"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Shield, 
  Users, 
  Zap, 
  BarChart3, 
  FileText, 
  MapPin,
  Bell,
  Clock,
  CheckCircle,
  Star,
  DollarSign,
  Info
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  tooltip?: string;
};

const businessFeatures: Feature[] = [
  {
    icon: <Users size={20} />,
    title: "Verified Guard Network",
    description: "Access pre-vetted, licensed guards with verified backgrounds and experience.",
    image: "/app-image-1.png",
    tooltip: "All guards are background-checked and ID-verified",
  },
  {
    icon: <Zap size={20} />,
    title: "Real-Time Job Management",
    description: "Post, update, or cancel jobs instantly. No back-and-forth calls.",
    image: "/app-image-1.png",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Live Analytics",
    description: "Get insights into shift completion rates, guard reliability, and feedback.",
    image: "/app-image-1.png",
    tooltip: "Track guard history, feedback, and ratings",
  },
  {
    icon: <FileText size={20} />,
    title: "Smart Invoicing",
    description: "Automatically generated invoices tied to each guard's shift data.",
    image: "/app-image-1.png",
    tooltip: "Invoices include hours, guard name, and job site",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location-Based Dispatching",
    description: "Only notify guards in your job's vicinity",
    image: "/app-image-1.png",
    tooltip: "Only nearby guards receive job alerts",
  },
];

const guardFeatures: Feature[] = [
  {
    icon: <Bell size={20} />,
    title: "Instant Job Alerts",
    description: "Get notified about new gigs near you in real time.",
    image: "/app-image-1.png",
  },
  {
    icon: <Clock size={20} />,
    title: "Flexible Shifts",
    description: "Pick jobs that work with your schedule — no pressure.",
    image: "/app-image-1.png",
    tooltip: "Choose shifts that match your availability",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Verified Clients",
    description: "Work only with trusted, reviewed employers.",
    image: "/app-image-1.png",
    tooltip: "Clients are background-checked and ID-verified",
  },
  {
    icon: <Star size={20} />,
    title: "Performance Dashboard",
    description: "Track your ratings, completed jobs, and payout history.",
    image: "/app-image-1.png",
    tooltip: "Track guard history, feedback, and ratings",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Fast Payouts",
    description: "Get paid quickly with integrated Stripe or Cash App payouts.",
    image: "/app-image-1.png",
  },
];

export function Features() {
  const [activeView, setActiveView] = useState<"business" | "guard">("business");
  const [activeTab, setActiveTab] = useState(0);

  const features = activeView === "business" ? businessFeatures : guardFeatures;
  const tagline = activeView === "business" 
    ? "Built for event managers, club owners, and teams that demand reliability."
    : "Flexible, transparent, and built with guards in mind.";

  const handleViewChange = (view: "business" | "guard") => {
    setActiveView(view);
    setActiveTab(0); // Reset to first tab when switching views
  };

  return (
    <div id="features" className="flex w-full flex-col items-center gap-4 sm:gap-6 px-4 sm:px-6 py-10 sm:py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Features
      </Badge>
      <h2 className="text-center text-2xl sm:text-3xl leading-[1.1] font-medium tracking-tight md:text-5xl">
        Discover our<div className="text-muted-foreground">Exceptional Features. Unmatched Control.</div>
      </h2>
      <p className="mb-3 max-w-2xl text-center leading-6 tracking-tight text-base sm:text-lg md:text-xl lg:mb-8 px-4">
        We built SwiftGuard to make security staffing fast, efficient, and effortless — so you can focus on running safe, successful events.
      </p>

      {/* Toggle Buttons - Enhanced with sliding background animation */}
      <div className="flex items-center gap-1 sm:gap-2 rounded-full bg-gray-100 dark:bg-gray-800 p-1 mb-[-10px] relative w-full max-w-xs sm:max-w-none">
        {/* Sliding background indicator */}
        <div className={cn(
          "absolute top-1 bottom-1 rounded-full bg-white dark:bg-gray-700 shadow-sm transition-all duration-300 ease-in-out",
          activeView === "business" ? "left-1 w-[calc(52%)]" : "left-[calc(56%)] w-[calc(43%)]"
        )} />
        
        {/* Buttons with transparent backgrounds */}
        <Button
          onClick={() => handleViewChange("business")}
          variant="ghost"
          size="sm"
          className={cn(
            "relative z-10 rounded-full px-3 sm:px-6 py-2 transition-all duration-200 flex-shrink-0 min-w-0 transform active:scale-95 bg-transparent text-xs sm:text-sm",
            activeView === "business"
              ? "text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          )}
        >
          <Building2 size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
          <span className="truncate">For Businesses</span>
        </Button>
        <Button
          onClick={() => handleViewChange("guard")}
          variant="ghost"
          size="sm"
          className={cn(
            "relative z-10 rounded-full px-3 sm:px-6 py-2 transition-all duration-200 flex-shrink-0 min-w-0 transform active:scale-95 bg-transparent text-xs sm:text-sm",
            activeView === "guard"
              ? "text-gray-900 dark:text-white"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          )}
        >
          <Shield size={14} className="mr-1 sm:mr-2 flex-shrink-0" />
          <span className="truncate">For Guards</span>
        </Button>
      </div>

      {/* Tagline */}
      <p className="text-center text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl px-4">
        {tagline}
      </p>

      {/* Tabbed Features with Phone Image */}
      <div className="w-full max-w-6xl mt-[-25px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Feature Tabs */}
            <div className="grid h-auto w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-6 mb-8 px-4 sm:px-0">
              {features.map((feature, index) => (
                <motion.button
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  onClick={() => setActiveTab(index)}
                  className="group relative flex cursor-pointer flex-col items-center justify-start gap-3 sm:gap-5 px-2 py-4 sm:py-6 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-200"
                >
                  {/* Tab Line Indicator */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-gray-300 dark:bg-gray-600 transition-all duration-200">
                    <motion.div
                      className="h-full bg-black dark:bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeTab === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className={cn(
                      "bg-secondary text-foreground w-fit rounded-sm p-2 sm:p-3 transition-colors",
                      activeTab === index && "bg-foreground text-background"
                    )}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="text-center">
                    <p className="mb-1 sm:mb-2 text-xs sm:text-base font-medium">{feature.title}</p>
                    <div className="flex items-center justify-center gap-1">
                      <p className="text-muted-foreground text-xs sm:text-sm text-wrap">{feature.description}</p>
                      {feature.tooltip && (
                        <div className="relative group/tooltip">
                          <Info size={12} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-help transition-colors" />
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            {feature.tooltip}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white dark:border-t-gray-800"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Phone Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeView}-${activeTab}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-card flex w-full justify-center rounded-lg border p-4 sm:p-8 pb-0"
              >
                <Image 
                  src={features[activeTab].image} 
                  alt="App Image" 
                  width={304} 
                  height={445} 
                  className="w-48 sm:w-auto"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

