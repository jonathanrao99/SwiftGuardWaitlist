import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "Acme",
    links: [
      {
        label: "Download App",
        href: "https://apps.apple.com/",
        title: "Download the app from the App Store",
      },
      {
        label: "Features",
        href: "/#features",
        title: "See our features",
      },

    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "For Android",
        href: "https://play.google.com/store",
        title: "Download on Android",
      },
      {
        label: "For iPhone",
        href: "https://apps.apple.com/",
        title: "Download on iOS",
      },
    ],
  },
  {
    title: "Company",
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
    title: "Follow Us",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "https://x.com/",
        title: "Follow us on Twitter",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "https://www.linkedin.com/",
        title: "Connect with us on LinkedIn",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>Github</span>
          </div>
        ),
        href: "https://github.com/",
        title: "View our GitHub repository",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-8 sm:py-12 pt-20 sm:pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-6 sm:mb-10 text-center">
            <h3 className="text-muted-foreground mb-4 sm:mb-8 text-sm sm:text-base">{link.title}</h3>
            <ul className="flex flex-col items-center gap-4 sm:gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                    className="text-sm sm:text-base hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
