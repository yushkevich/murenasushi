import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteContent, locales, defaultLocale, type Locale } from '@/src/content/siteContent';
import HeroVideo from '@/src/components/HeroVideo';
import CtaButtons from '@/src/components/CtaButtons';
import InfoSection from '@/src/components/InfoSection';
import GalleryCollage from '@/src/components/GalleryCollage';
import SeoJsonLd from '@/src/components/SeoJsonLd';
import { instagramUrl, choiceQrUrl, reservationUrl } from '@/src/content/siteContent';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || defaultLocale;
  const content = siteContent[locale];
  const baseUrl = 'https://murenasushi.pl';

  const hreflangLinks = locales.map((loc) => ({
    url: `${baseUrl}/${loc}`,
    hreflang: loc,
  }));

  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        pl: `${baseUrl}/pl`,
        ru: `${baseUrl}/ru`,
        uk: `${baseUrl}/ua`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/pl`,
      },
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Murena Seafood Restaurant',
      locale: locale === 'pl' ? 'pl_PL' : locale === 'ru' ? 'ru_RU' : locale === 'ua' ? 'uk_UA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.seo.title,
      description: content.seo.description,
    },
  };
}

export default async function LangPage({ params }: PageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || defaultLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  const content = siteContent[locale];

  return (
    <>
      <SeoJsonLd locale={locale} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <HeroVideo />
        

        <div className="relative z-20 max-w-4xl mx-auto text-center text-text-primary">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            {content.h1}
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4 text-text-primary">
            {content.concept}
          </p>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-text-muted">
            <a
              href={reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
            >
              {content.note}
            </a>
          </p>
          
          <CtaButtons
            orderLabel={content.buttons.order}
            deliveryLabel={content.buttons.delivery}
            orderUrl={choiceQrUrl}
            deliveryModalTitle={content.buttons.deliveryModalTitle}
            deliveryModalCloseLabel={content.buttons.deliveryModalClose}
          />
        </div>
      </section>

      {/* Info Section */}
      <InfoSection
        hours={content.hours}
        address={content.address}
        phone={content.phone}
        callLabel={content.buttons.call}
        mapsLabel={content.buttons.maps}
      />

      {/* Gallery */}
      <GalleryCollage title={content.gallery.title} />
    </>
  );
}
