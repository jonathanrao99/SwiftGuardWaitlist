"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/hero/nav";
import { Footer } from "@/components/footer/footer";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Shield, Users, Zap, Heart, Target, Globe } from "lucide-react";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Us - SwiftGuard";
  }, []);

  const handleJoinWaitlist = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Every professional on our platform undergoes rigorous verification and background checks."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Connection",
      description: "Real-time matching technology connects businesses with available security professionals in minutes."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "Building a trusted network where both businesses and security professionals thrive together."
    }
  ];

  const stats = [
    { number: "500+", label: "Security Professionals" },
    { number: "50+", label: "Cities Ready" },
    { number: "24/7", label: "Platform Availability" },
    { number: "2025", label: "Launch Year" }
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundBlur className="-top-40 md:-top-0" />
      {/* Navigation */}
      <header className="relative z-50 w-full py-6 px-4 sm:px-6">
        <Nav />
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-xs font-medium uppercase tracking-wider">
              <Heart className="w-3 h-3 mr-2" />
              Our Story
            </Badge>
            
            <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-6xl mb-6 leading-[1.1]">
              Revolutionizing{" "}
              <span className="text-primary">Security Staffing</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              SwiftGuard was born from a simple belief: security staffing should be as reliable, 
              fast, and professional as the security professionals themselves.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-xs font-medium uppercase tracking-wider">
                <Target className="w-3 h-3 mr-2" />
                Our Mission
              </Badge>
              
              <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-6">
                Connecting businesses with verified security professionals instantly
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Traditional security staffing is broken. Long lead times, unreliable communication, 
                and inconsistent quality have plagued the industry for too long. We&apos;re changing that.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                SwiftGuard leverages cutting-edge technology to create instant connections between 
                businesses needing security services and qualified professionals ready to work.
              </p>

              <Button 
                onClick={handleJoinWaitlist}
                className="rounded-full px-8 py-6 text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                Join Our Mission
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 p-8 border border-border/50">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center">
                  <Globe className="w-24 h-24 text-primary/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-xs font-medium uppercase tracking-wider">
              Our Values
            </Badge>
            
            <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-6">
              What drives us forward
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              These core principles guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 p-8 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-xs font-medium uppercase tracking-wider">
            The Future
          </Badge>
          
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-6">
            Building the future of security staffing
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            We envision a world where businesses can access reliable security professionals instantly, 
            and security professionals can find meaningful work opportunities with the tap of a button. 
            This isn&apos;t just about technology—it&apos;s about empowering people and protecting communities.
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 border border-border/50">
            <p className="text-xl font-medium text-foreground mb-4">
              &quot;Security shouldn&apos;t be an afterthought. It should be as accessible and reliable as any other essential service.&quot;
            </p>
            <p className="text-muted-foreground">
              — SwiftGuard Team
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mb-6">
            Ready to be part of the revolution?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Join our growing community of security professionals and forward-thinking businesses.
          </p>

          <Button 
            onClick={handleJoinWaitlist}
            size="lg"
            className="group rounded-full px-8 py-6 text-base font-medium bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join the Waitlist
            <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
