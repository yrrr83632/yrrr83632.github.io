import Link from "next/link";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A groundbreaking approach to decentralized finance, leveraging AI for predictive market analysis.",
    githubLink: "#"
  },
  {
    title: "Creative Canvas",
    description: "An interactive web application that allows users to generate and collaborate on digital pop art in real-time.",
    githubLink: "#"
  },
  {
    title: "Future Forge",
    description: "An experimental platform for building and testing next-generation user interfaces with gesture controls.",
    githubLink: "#"
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl p-8 pt-24 animation-fade-in">
      <h1 className="mb-12 text-5xl font-bold uppercase tracking-widest md:text-7xl">
        Passion Projects
      </h1>

      <div className="border-4 border-foreground">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col md:flex-row justify-between items-start md:items-center p-6 space-y-4 md:space-y-0 ${index < projects.length - 1 ? 'border-b-4 border-foreground' : ''}`}
          >
            <div className="flex-grow">
              <h2 className="text-2xl font-bold uppercase tracking-wider">{project.title}</h2>
              <p className="mt-2 text-base text-foreground/80 max-w-2xl">{project.description}</p>
            </div>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-colors px-4 py-2 mt-4 md:mt-0">
              <Github size={20} />
              <span className="font-bold uppercase">GitHub</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
