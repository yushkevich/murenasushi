import type { Metadata } from 'next';
import { locales, type Locale } from '@/src/content/siteContent';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://murenasushi.pl'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
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
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
