"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 right-0 z-50 p-8">
       <nav className="flex items-center space-x-6">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium uppercase tracking-wider transition-all hover:font-bold",
                pathname === item.href ? "font-bold" : "font-normal"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
    </header>
  );
}
