import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BottomNavigation } from '@/components/bottom-navigation';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/components/language-context';

export const metadata: Metadata = {
  title: 'Portfolio | Benjamin Urbano - Full-Stack Developer',
  description: 'Professional portfolio of Benjamin Urbano. Full-Stack Developer specialized in modern web applications.',
  keywords: 'developer, full-stack, web, portfolio, Benjamin Urbano',
  authors: [{ name: 'Benjamin Urbano' }],
  openGraph: {
    title: 'Portfolio | Benjamin Urbano',
    description: 'Professional portfolio of Full-Stack Developer',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white min-h-screen flex flex-col transition-colors duration-300">
              <Header />
              <main className="flex-1 md:pb-0 pb-28">
                {children}
              </main>
              <Footer />
              <BottomNavigation />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}