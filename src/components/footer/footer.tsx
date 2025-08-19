import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "SwiftGuard",
    links: [
      {
        label: "Features",
        href: "/#features",
        title: "See our features",
      },
      {
        label: "How It Works", 
        href: "/#what-is-swiftguard",
        title: "Learn how SwiftGuard works",
      },
      {
        label: "FAQs",
        href: "/#faqs", 
        title: "Frequently asked questions",
      },
    ],
  },
  {
    title: "For Users",
    links: [
      {
        label: "For Businesses",
        href: "/#features",
        title: "SwiftGuard for event organizers",
      },
      {
        label: "For Guards",
        href: "/#features",
        title: "SwiftGuard for security professionals",
      },
      {
        label: "Join Waitlist",
        href: "/#hero",
        title: "Join our early access waitlist",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        title: "Read our Terms & Conditions",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "Read our Privacy Policy",
      },
      {
        label: "Refund Policy",
        href: "/refund-policy",
        title: "Read our Refund Policy",
      },
    ],
  },
  {
    title: "Connect",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "https://x.com/swiftguardapp",
        title: "Follow SwiftGuard on Twitter",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "https://www.linkedin.com/company/swiftguard",
        title: "Connect with SwiftGuard on LinkedIn",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>Github</span>
          </div>
        ),
        href: "https://github.com/swiftguard",
        title: "View SwiftGuard on GitHub",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-8 sm:py-12 pt-20 sm:pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:grid-cols-5 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <img src="/logo.png" alt="SwiftGuard" className="w-8 h-8" />
              <h3 className="text-xl font-bold">SwiftGuard</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto md:mx-0 mb-6">
              Revolutionizing security staffing with on-demand, real-time connections between businesses and verified security professionals.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link 
                href="https://x.com/swiftguardapp" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                title="Follow SwiftGuard on Twitter"
              >
                <XIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/swiftguard" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                title="Connect with SwiftGuard on LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com/swiftguard" 
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
                title="View SwiftGuard on GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          {links.slice(0, 3).map((link) => (
            <div key={link.title} className="text-center md:text-left">
              <h4 className="font-semibold mb-4 text-sm">{link.title}</h4>
              <ul className="space-y-3">
                {link.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      title={link.title}
                      target={link.href.startsWith("https://") ? "_blank" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-muted/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © 2024 SwiftGuard. All rights reserved. Launching soon.
            </p>
            <div className="flex items-center gap-6 text-xs">
              <Link 
                href="/terms-and-conditions" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <Link 
                href="/privacy-policy" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">Built for security professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
