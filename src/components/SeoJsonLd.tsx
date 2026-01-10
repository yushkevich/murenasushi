import { siteContent, instagramUrl, reservationUrl, type Locale } from '@/src/content/siteContent';

interface SeoJsonLdProps {
  locale: Locale;
}

export default function SeoJsonLd({ locale }: SeoJsonLdProps) {
  const content = siteContent[locale];
  const baseUrl = 'https://murenasushi.pl';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Murena Seafood Restaurant',
    url: `${baseUrl}/${locale}`,
    telephone: content.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Solec 46',
      addressLocality: 'Warsaw',
      postalCode: '00-384',
      addressCountry: 'PL',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Thursday'],
        opens: '17:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '17:00',
        closes: '00:00',
      },
    ],
    servesCuisine: 'Seafood',
    sameAs: [instagramUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
