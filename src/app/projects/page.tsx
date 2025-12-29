import { ProjectCard } from "@/components/project-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Project Alpha",
    description: "A groundbreaking approach to decentralized finance, leveraging AI for predictive market analysis.",
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
    link: "#"
  },
  {
    title: "Creative Canvas",
    description: "An interactive web application that allows users to generate and collaborate on digital pop art in real-time.",
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
    link: "#"
  },
  {
    title: "Future Forge",
    description: "An experimental platform for building and testing next-generation user interfaces with gesture controls.",
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
    link: "#"
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl animate-fade-in px-4 py-12 md:py-20">
      <h1 className="mb-12 font-headline text-5xl font-bold tracking-tighter md:text-7xl">
        <span className="bg-cyan-500 px-2 text-black">PASSION</span> PROJECTS
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          project.image && <ProjectCard key={index} project={{...project, image: project.image}} />
        ))}
      </div>
    </div>
  );
}
