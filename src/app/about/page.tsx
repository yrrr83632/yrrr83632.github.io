import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type TimelineItem = {
  year: string;
  title: string;
  description: string[];
};

const timelineData: TimelineItem[] = [
  {
    year: "2019 – 2021",
    title: "Kendriya Vidyalaya",
    description: [
      "Completed Class 11 and 12 in the science stream",
      "Experimented with computers, scripts, and basic systems",
      "Developed habit of breaking and understanding how things work",
      "Built early interest in cybersecurity and machine learning"
    ],
  },
  {
    year: "2022 – Present",
    title: "Vellore Institute of Technology, Vellore",
    description: [
      "Pursuing Integrated M.Tech in Computer Science and Engineering",
      "Active member of Anchoring Club, LEO Club, and Bulls & Bears",
      "Founder and Secretary of The WhiteHat’s Club (Cybersecurity)",
      "Hands-on work in security, ML, and system experimentation",
      "Exploring entrepreneurship and real-world product building"
    ],
  },
];

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'homepage-bg');

  return (
    <div className="container mx-auto max-w-5xl p-8 animation-fade-in">
      <h1 className="mb-12 font-headline text-5xl font-bold uppercase tracking-widest md:text-7xl">
        About Me
      </h1>

      {/* TOP SECTION */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          {aboutImage && (
            <div className="border border-foreground p-1">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={400}
                height={400}
                className="h-auto w-full object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
        </div>

        <div className="space-y-6 text-base text-foreground/80 md:col-span-2">
          <p>
            I’m an Integrated M.Tech student in Computer Science and Engineering at VIT, Vellore.
            I enjoy breaking systems, understanding their failure points, and teaching machines
            how to do useful things.
          </p>

          <p>
            My main interests sit at the intersection of cybersecurity and machine learning,
            but I actively experiment with any technical idea that looks interesting.
          </p>

          <p>
            Most of my time goes into coding, testing ideas, and pushing systems under pressure.
            Outside tech, I watch films, read books, explore anime, and spend time with friends.
          </p>

          <p>
            I’m deeply interested in entrepreneurship and consistently think about how today’s
            experiments can evolve into real, usable products.
          </p>
        </div>
      </div>

      {/* TIMELINE SECTION */}
      <section className="mt-20">
        <h2 className="mb-10 text-3xl font-bold uppercase tracking-widest">
          Timeline
        </h2>

        <div className="relative border-l-2 border-foreground pl-8">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-12">
              <div className="absolute -left-[9px] mt-1.5 h-4 w-4 border-2 border-foreground bg-background"></div>
              <p className="mb-1 font-mono text-sm uppercase tracking-wider text-foreground/60">
                {item.year}
              </p>
              <h3 className="mb-3 text-xl font-semibold uppercase tracking-wider text-foreground">
                {item.title}
              </h3>
              <ul className="list-inside list-['-_'] space-y-2 pl-2 text-base text-foreground/80">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
