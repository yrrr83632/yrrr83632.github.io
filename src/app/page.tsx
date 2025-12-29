import { SocialLinks } from '@/components/social-links';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 font-headline text-6xl font-bold uppercase tracking-widest md:text-8xl lg:text-9xl">
            Bala Sankar
          </h1>
          <p className="mb-8 bg-primary px-2 py-1 text-lg font-bold uppercase tracking-wider text-primary-foreground md:text-xl">
            Innovator | Creator | Thinker
          </p>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
