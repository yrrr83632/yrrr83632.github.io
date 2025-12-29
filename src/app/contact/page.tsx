import { ContactForm } from './form';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-3xl p-8 animation-fade-in">
       <h1 className="mb-4 text-center font-headline text-5xl font-bold uppercase tracking-widest md:text-7xl">
        Get in Touch
      </h1>
      <p className="mb-12 text-center text-lg text-foreground/70">
        Have a question, a project idea, or just want to say hi? Drop me a line!
      </p>

      <ContactForm />
    </div>
  );
}
