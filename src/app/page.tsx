import { SocialLinks } from '@/components/social-links';

export default function Home() {
  return (
    <section className="flex h-full min-h-screen flex-col items-center justify-center p-8">
      <div className="flex-grow text-center flex flex-col items-center justify-center">
        <div className="mb-8 inline-block bg-primary p-4">
          <h1 className="font-headline text-6xl font-bold uppercase tracking-widest text-primary-foreground md:text-8xl lg:text-9xl">
            Bala Sankar
          </h1>
        </div>
        <p className="mb-8 text-2xl font-bold uppercase tracking-wider text-foreground/80 md:text-3xl">
          Innovator | Creator | Thinker
        </p>
        <SocialLinks />
      </div>
      <div className="flex flex-col items-center space-y-4 pb-8">
        <p className="text-sm text-foreground/50">
          &copy; {new Date().getFullYear()} Bala Sankar
        </p>
      </div>
    </section>
  );
}
