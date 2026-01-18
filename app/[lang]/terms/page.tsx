import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteContent, locales, defaultLocale, type Locale } from '@/src/content/siteContent';
import { pageContent } from '@/src/content/pageContent';
import SeoJsonLd from '@/src/components/SeoJsonLd';

interface TermsPageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: TermsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || defaultLocale;
  const content = siteContent[locale];
  const baseUrl = 'https://murenasushi.pl';

  return {
    title: `${content.footer.terms} | Murena`,
    description: content.seo.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/terms`,
      languages: {
        pl: `${baseUrl}/pl/terms`,
        en: `${baseUrl}/en/terms`,
        ua: `${baseUrl}/ua/terms`,
        ru: `${baseUrl}/ru/terms`,
        'x-default': `${baseUrl}/pl/terms`,
      },
    },
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || defaultLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const content = pageContent[locale].terms;

  return (
    <>
      <SeoJsonLd locale={locale} />
      <section className="min-h-screen py-56 sm:py-56 text-text-primary" style={{ backgroundColor: 'rgba(27,31,34, 0.2)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            {content.title}
          </h1>
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index} className="bg-charcoal/40 p-6 sm:p-8 rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-text-primary">
                  {section.heading}
                </h2>
                <div className="space-y-3 text-text-muted">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`/${locale}`} className="text-accent-blue hover:underline text-lg">
              &larr; Powrót do strony głównej
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
