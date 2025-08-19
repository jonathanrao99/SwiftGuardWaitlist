"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Shield, 
  Building2, 
  CheckCircle
} from "lucide-react";

const step1Business = [
  "Post your job with details and requirements",
  "Get instantly matched with verified guards",
  "Track everything in real-time with live updates",
  "Pay securely through our platform"
];

const step2Guard = [
  "Receive instant alerts for nearby opportunities",
  "Choose shifts that fit your schedule perfectly",
  "Build your reputation with ratings and reviews",
  "Get paid quickly with instant transfers"
];

export function WhatIsSwiftGuard() {
  return (
    <>
      {/* What is SwiftGuard Section */}
      <div id="what-is-swiftguard" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
        <Badge variant="secondary" className="uppercase">
          About SwiftGuard
        </Badge>
        
        <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          What is <span className="text-primary">SwiftGuard</span>?
        </h2>
        
        <p className="mb-3 max-w-3xl text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
          SwiftGuard connects businesses with verified security guards instantly. Post a job, get matched with qualified professionals, and fill shifts in minutes.
        </p>

        {/* Visual Flow Diagram */}
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
          >
            {/* Business Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Building2 size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Businesses</h3>
              <p className="text-muted-foreground text-sm max-w-32">Post jobs & get matched instantly</p>
            </motion.div>

            {/* Connection Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden md:flex flex-col items-center"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mb-2" />
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/logo.png" alt="SwiftGuard" className="w-18 h-18 object-contain" />
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mt-2" />
            </motion.div>

            {/* Guard Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Shield size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Guards</h3>
              <p className="text-muted-foreground text-sm max-w-32">Accept shifts & get paid fast</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25 bg-muted/20">
        <Badge variant="secondary" className="uppercase">
          How It Works
        </Badge>
        
        <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          How <span className="text-primary">SwiftGuard</span> Works
        </h2>
        
        <p className="mb-12 max-w-2xl text-center text-muted-foreground text-lg">
          Two simple steps to transform your security staffing experience.
        </p>

        <div className="w-full max-w-6xl">
          {/* Step 1: Business Text Left, Points Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16"
          >
            {/* Business Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="bg-primary/10 w-fit rounded-full p-3">
                  <Building2 size={24} className="text-primary" />
                </div>
                <span className="text-lg font-semibold">For Businesses</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Post a Job → Get Matched Instantly
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Stop wasting time on traditional staffing agencies. SwiftGuard connects you with qualified, 
                verified security professionals in minutes, not days.
              </p>
            </motion.div>

            {/* Business Points */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-primary/10">
                <CardContent className="space-y-4 pt-6">
                  {step1Business.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 bg-primary/10 w-fit rounded-lg p-2 mt-0.5">
                        <CheckCircle size={16} className="text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Step 2: Guard Points Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Guard Points */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <Card className="rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-primary/10">
                <CardContent className="space-y-4 pt-6">
                  {step2Guard.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-shrink-0 bg-primary/10 w-fit rounded-lg p-2 mt-0.5">
                        <CheckCircle size={16} className="text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Guard Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="bg-primary/10 w-fit rounded-full p-3">
                  <Shield size={24} className="text-primary" />
                </div>
                <span className="text-lg font-semibold">For Guards</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Set Your Schedule → Earn on Your Terms
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Take control of your security career. Choose when and where you work, 
                build your reputation, and get paid faster than ever before.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 