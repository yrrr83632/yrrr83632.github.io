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
    <div className="container mx-auto max-w-7xl p-8 animation-fade-in">
      <h1 className="mb-12 font-headline text-5xl font-bold uppercase tracking-widest md:text-7xl">
        Passion Projects
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          project.image && <ProjectCard key={index} project={{...project, image: project.image}} />
        ))}
      </div>
    </div>
  );
}
