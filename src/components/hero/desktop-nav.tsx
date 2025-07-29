"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function DesktopNav({ items, className }: Props) {
  const pathname = usePathname();

  return (
    <nav className={cn("mx-auto flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
      </Link>
      <div className="flex items-center gap-8">
        {items.map((item) => {
          const isActive = pathname === item.href || 
            (item.href === "/pricing" && pathname === "/pricing") ||
            (item.href === "/terms-and-conditions" && (pathname === "/privacy-policy" || pathname === "/terms-and-conditions" || pathname === "/refund-policy"));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative text-sm font-medium transition-colors hover:text-foreground",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 w-full bg-foreground transition-transform duration-300 ease-in-out",
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}
              />
            </Link>
          );
        })}
      </div>
      <Button asChild>
        <Link href="/pricing">Join Waitlist</Link>
      </Button>
    </nav>
  );
}
