"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-end bg-background p-6">
      <nav className="flex items-center space-x-6">
        {siteConfig.navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-lg font-medium uppercase tracking-wider transition-colors hover:font-bold",
              pathname === item.href ? "font-bold" : "text-foreground/60"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
