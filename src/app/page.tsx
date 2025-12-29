import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <section className="flex h-full items-center justify-center p-8">
      <div className="text-center">
        <div className="mb-8 inline-block bg-primary p-4">
          <h1 className="font-headline text-6xl font-bold uppercase tracking-widest text-primary-foreground md:text-8xl lg:text-9xl">
            Bala Sankar
          </h1>
        </div>
        <p className="text-2xl font-bold uppercase tracking-wider text-foreground/80 md:text-3xl">
          Innovator | Creator | Thinker
        </p>
      </div>
    </section>
  );
}
