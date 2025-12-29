import { ContactForm } from './form';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl animate-fade-in px-4 py-12 md:py-20">
       <h1 className="mb-4 text-center font-headline text-5xl font-bold tracking-tighter md:text-7xl">
        <span className="relative inline-block">
          GET IN
          <svg
            className="absolute -bottom-2 left-0 h-4 w-full text-yellow-400"
            preserveAspectRatio="none"
            viewBox="0 0 100 10"
          >
            <path
              d="M0,5 Q25,0 50,5 T100,5"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-primary"> TOUCH</span>
      </h1>
      <p className="mb-12 text-center text-lg text-foreground/70">
        Have a question, a project idea, or just want to say hi? Drop me a line!
      </p>

      <ContactForm />
    </div>
  );
}
