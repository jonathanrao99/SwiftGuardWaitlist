"use client";

import { cn } from "@/lib/utils";
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
      <div className="flex items-center">
        <span className="text-xl font-bold text-black">SwiftGuard</span>
      </div>
      <div className="flex items-center gap-8">
        {items.map((item) => {
          const isActive = pathname === item.href || 
            (item.href === "/terms-and-conditions" && (pathname === "/privacy-policy" || pathname === "/terms-and-conditions" || pathname === "/refund-policy"));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative text-sm font-medium transition-colors hover:text-black text-black",
                isActive ? "text-black" : "text-black"
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
    </nav>
  );
}
