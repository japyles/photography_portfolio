import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Morgan Photography | Professional Portrait & Wedding Photographer',
  description: 'Professional photographer specializing in portraits, weddings, and lifestyle photography. Capturing your most precious moments with artistic vision and technical expertise.',
  keywords: 'photographer, photography, portraits, weddings, lifestyle, professional photography, photo session',
  authors: [{ name: 'Alex Morgan' }],
  openGraph: {
    title: 'Alex Morgan Photography',
    description: 'Professional photographer capturing life\'s precious moments',
    url: 'https://alexmorganphotography.com',
    siteName: 'Alex Morgan Photography',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alex Morgan Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Morgan Photography',
    description: 'Professional photographer capturing life\'s precious moments',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen">
            <Navbar />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}