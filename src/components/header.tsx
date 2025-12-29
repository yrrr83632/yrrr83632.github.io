"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-background p-6 border-b-4 border-foreground">
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      
      <nav className={cn(
        "absolute top-full left-0 w-full bg-background border-b-4 border-foreground md:border-none md:static md:w-auto md:flex md:items-center md:space-x-6",
        isOpen ? "block" : "hidden"
      )}>
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-6 md:p-0">
          {siteConfig.navItems.map((item) => (
            <li key={item.href} className="mb-4 md:mb-0">
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium uppercase tracking-wider transition-colors hover:font-bold",
                  pathname === item.href ? "font-bold" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* This empty div helps to keep the nav centered on larger screens when the mobile menu button is hidden */}
      <div className="hidden md:flex w-[32px]"></div>
    </header>
  );
}