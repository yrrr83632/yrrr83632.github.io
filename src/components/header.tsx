"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { SocialLinks } from "./social-links";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container mx-auto flex h-24 items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold uppercase tracking-widest">
          Bala Sankar
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex items-center space-x-6">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
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
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-24 left-0 w-full border-t-4 border-b-4 border-foreground bg-background md:hidden">
          <nav>
            <ul className="flex flex-col items-center space-y-6 p-8">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-medium uppercase tracking-wider transition-colors hover:font-bold",
                      pathname === item.href ? "font-bold" : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center pb-8">
            <SocialLinks />
          </div>
        </div>
      )}
    </header>
  );
}
