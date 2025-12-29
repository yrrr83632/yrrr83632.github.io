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
    <div className="flex items-center justify-center gap-2">
      {Object.entries(siteConfig.links).map(([key, href]) => {
        const Icon = iconMap[key as keyof typeof iconMap];
        return (
          <Button key={key} variant="ghost" size="icon" asChild>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="h-5 w-5 transition-colors hover:text-accent" />
              <span className="sr-only">{key}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
