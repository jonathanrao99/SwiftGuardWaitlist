import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";
import React from "react";

export function Quote() {
  const handleJoinWaitlist = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full py-24 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Background card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-muted/30 to-muted/10 p-12 md:p-16 text-center border border-border/50 shadow-lg backdrop-blur-sm">
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
          
          <div className="relative z-10">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-xs font-medium uppercase tracking-wider">
              <Zap className="w-3 h-3 mr-2" />
              Limited Time
            </Badge>
            
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-5xl mb-6 leading-[1.1]">
              Ready to revolutionize{" "}
              <span className="text-primary">security staffing?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Join <span className="font-semibold text-foreground">500+ security professionals</span> already on our waitlist 
              and be first to experience the future of on-demand security staffing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleJoinWaitlist} 
                size="lg" 
                className="group rounded-full px-8 py-6 text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Join Waitlist Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              a
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
