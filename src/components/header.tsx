"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-border bg-background">
      <div className="container flex h-20 items-center">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold uppercase tracking-wider">{siteConfig.name}</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors hover:text-primary",
                pathname === item.href ? "text-primary border-b-2 border-primary" : "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
