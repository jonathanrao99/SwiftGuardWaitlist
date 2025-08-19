import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";

type Props = {
  items: {
    label: string;
    href: string;
  }[];
  className?: string;
};

export function MobileNav({ items, className }: Props) {
  return (
    <nav className={cn("flex w-full max-w-7xl items-center justify-between gap-4", className)}>
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
          SwiftGuard
        </Link>
      </div>
      <Drawer direction="top">
        <DrawerTrigger className="relative -m-2 cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition-colors">
          <span className="sr-only">Open menu</span>
          <Menu className="h-6 w-6" />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-6 p-8">
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          {items.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
