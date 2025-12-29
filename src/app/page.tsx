import Image from 'next/image';
import { SocialLinks } from '@/components/social-links';
import { siteConfig } from '@/config/site';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const homepageImage = PlaceHolderImages.find(p => p.id === 'homepage-bg');

  return (
    <section className="relative h-screen w-full">
      {homepageImage && (
        <Image
          src={homepageImage.imageUrl}
          alt={homepageImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={homepageImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 font-headline text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl bg-primary text-primary-foreground p-2 inline-block">
            Bala Sankar
          </h1>
          <p className="mb-8 text-lg md:text-xl bg-background text-foreground p-2 inline-block">
            Innovator | Creator | Thinker
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
