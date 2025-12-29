import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const coolstuffs = [
  PlaceHolderImages.find(p => p.id === 'cool-1'),
  PlaceHolderImages.find(p => p.id === 'cool-2'),
  PlaceHolderImages.find(p => p.id === 'cool-3'),
  PlaceHolderImages.find(p => p.id === 'cool-4'),
  PlaceHolderImages.find(p => p.id === 'cool-5'),
  PlaceHolderImages.find(p => p.id === 'cool-6'),
].filter(Boolean) as typeof PlaceHolderImages;

export default function CoolstuffsPage() {
  return (
    <div className="container mx-auto max-w-7xl p-8 animation-fade-in">
      <h1 className="mb-12 font-headline text-5xl font-bold uppercase tracking-widest md:text-7xl">
        Cool Stuffs
      </h1>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {coolstuffs.map((item) => (
          <div key={item.id} className="group relative mb-4 block break-inside-avoid">
            <Image
              src={item.imageUrl}
              alt={item.description}
              width={500}
              height={500}
              className="h-auto w-full object-cover border border-foreground"
              data-ai-hint={item.imageHint}
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center p-4">
              <p className="text-center text-sm font-medium text-white uppercase tracking-wider">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
