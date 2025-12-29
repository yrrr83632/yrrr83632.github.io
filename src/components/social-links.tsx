import { siteConfig } from "@/config/site";
import {
  Instagram,
  Linkedin,
  Mail,
  Newspaper,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const iconMap = {
  instagram: Instagram,
  medium: Newspaper,
  x: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
  email: Mail,
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {Object.entries(siteConfig.links).map(([key, href]) => {
        const Icon = iconMap[key as keyof typeof iconMap];
        const isEmail = key === 'email';
        return (
          <Button key={key} variant="ghost" size="icon" asChild>
            <Link href={href} target={isEmail ? '_self' : '_blank'} rel="noopener noreferrer">
              <Icon className="h-5 w-5 text-foreground/60 transition-colors hover:text-primary" />
              <span className="sr-only">{key}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
