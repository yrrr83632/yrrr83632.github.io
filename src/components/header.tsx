"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
      <div className="flex flex-col space-y-8">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold uppercase tracking-widest">{siteConfig.name}</span>
        </Link>
        <nav className="flex flex-col items-start space-y-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium uppercase tracking-wider transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground/60"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
  );
}
