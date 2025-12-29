import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
      <h1 className="mb-12 text-5xl font-bold uppercase tracking-widest md:text-7xl">
        Passion Projects
      </h1>

      <div className="border-4 border-foreground">
        <Table>
          <TableCaption>A list of my recent projects.</TableCaption>
          <TableHeader>
            <TableRow className="border-b-4 border-foreground">
              <TableHead className="w-[30%] text-xl uppercase text-foreground">Project</TableHead>
              <TableHead className="text-xl uppercase text-foreground">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.title} className="border-b-2 border-foreground last:border-b-0">
                <TableCell className="font-medium uppercase text-lg text-foreground">{project.title}</TableCell>
                <TableCell className="text-base text-foreground/80">{project.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}