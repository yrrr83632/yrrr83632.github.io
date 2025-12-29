import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type Project = {
    title: string;
    description: string;
    image: {
      imageUrl: string;
      description: string;
      imageHint: string;
    };
    link: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={project.link} className="group block">
      <Card className="h-full overflow-hidden bg-secondary transition-all group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              data-ai-hint={project.image.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2 font-headline text-2xl">
            {project.title}
          </CardTitle>
          <CardDescription className="mb-4 text-foreground/70">
            {project.description}
          </CardDescription>
          <div className="flex items-center text-sm font-semibold text-primary">
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
