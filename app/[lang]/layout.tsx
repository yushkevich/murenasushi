import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { locales, type Locale } from '@/src/content/siteContent';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import Preloader from '@/src/components/Preloader';
import GoogleAds from '@/src/components/GoogleAds';
import '../globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://murenasushi.pl'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || 'pl';

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${roboto.variable} antialiased`}>
        <GoogleAds />
        <Preloader />
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
