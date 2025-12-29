import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import { SocialLinks } from '@/components/social-links';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-body',
        )}
        suppressHydrationWarning={true}
      >
        <div className="flex min-h-screen">
          <main className="flex-1 overflow-y-auto">{children}</main>
          <aside className="w-64 border-l border-foreground/20 p-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <Header />
              </div>
              <div className="flex flex-col items-center space-y-4">
                <SocialLinks />
                <p className="text-sm text-foreground/50">
                  &copy; {new Date().getFullYear()} Bala Sankar
                </p>
              </div>
            </div>
          </aside>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
