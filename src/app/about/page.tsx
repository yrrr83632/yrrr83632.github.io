import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
    const aboutImage = PlaceHolderImages.find(p => p.id === 'homepage-bg');

  return (
    <div className="container mx-auto max-w-5xl animate-fade-in p-8">
      <h1 className="mb-8 font-headline text-5xl font-bold uppercase tracking-widest md:text-7xl">
        About Me
      </h1>
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-1">
          {aboutImage && (
             <Image
             src={aboutImage.imageUrl}
             alt={aboutImage.description}
             width={400}
             height={400}
             className="h-auto w-full object-cover border border-black"
             data-ai-hint={aboutImage.imageHint}
           />
          )}
        </div>
        <div className="space-y-6 text-lg text-foreground/80 md:col-span-2">
          <p>
            Hello there! I'm Bala Sankar, a passionate creator and innovator with a knack for turning bold ideas into reality. My journey is fueled by a relentless curiosity and a desire to build things that are not only functional but also beautiful and inspiring.
          </p>
          <p>
            With a background in technology and a heart for design, I find myself at the intersection of logic and creativity. I thrive on challenges, whether it's diving deep into complex codebases, designing a user-centric product, or exploring the latest frontiers of artificial intelligence.
          </p>
          <p>
            This space is my digital playground—a collection of my work, thoughts, and the 'cool stuff' that catches my eye. From passion projects born out of late-night coding sessions to explorations in art and culture, I invite you to look around and get a glimpse into my world.
          </p>
          <p>Let's build something amazing together.</p>
        </div>
      </div>
    </div>
  );
}
