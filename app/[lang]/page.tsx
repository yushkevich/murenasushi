import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { siteContent, locales, defaultLocale, type Locale } from '@/src/content/siteContent';
import HeroVideo from '@/src/components/HeroVideo';
import CtaButtons from '@/src/components/CtaButtons';
import InfoSection from '@/src/components/InfoSection';
import GalleryCollage from '@/src/components/GalleryCollage';
import SeoJsonLd from '@/src/components/SeoJsonLd';
import { ctaLinks } from '@/src/config/ctaLinks';

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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-14 lg:px-14">
        <HeroVideo />
        

        <div className="relative z-20 max-w-4xl mx-auto text-center text-text-primary">
          <h1 className="font-rangoflys text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 pt-24 sm:pt-16 md:pt-20 lg:pt-24">
            {content.h1}
          </h1>
          
          <CtaButtons
            reservationLabel={content.buttons.reservation}
            deliveryLabel={content.buttons.delivery}
            woltGlovoLabel={content.buttons.woltGlovo}
            reservationUrl={ctaLinks.reservation}
            deliveryUrl={ctaLinks.delivery}
            woltUrl={ctaLinks.wolt}
            glovoUrl={ctaLinks.glovo}
            locale={locale}
          />
        </div>
      </section>

      {/* Info Section */}
      <InfoSection
        hours={content.hours}
        hoursDelivery={content.hoursDelivery}
        address={content.address}
        phone={content.phone}
        phoneDelivery={content.phoneDelivery}
        callLabel={content.buttons.call}
        mapsLabel={content.buttons.maps}
        instagramLabel={content.buttons.instagram}
        restaurantHoursLabel={content.labels.restaurantHours}
        deliveryHoursLabel={content.labels.deliveryHours}
        deliveryLabel={content.labels.delivery}
      />

      {/* Gallery */}
      <GalleryCollage title={content.gallery.title} />
    </>
  );
}
