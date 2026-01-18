import { MetadataRoute } from 'next';
import { locales } from '@/src/content/siteContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://murenasushi.pl';
  
  // Main pages for each locale
  const mainRoutes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'pl' ? 1 : 0.8,
  }));

  // Delivery pages for each locale
  const deliveryRoutes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/delivery`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Terms pages for each locale
  const termsRoutes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/terms`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  // Regulamin pages for each locale
  const regulaminRoutes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/regulamin`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...mainRoutes, ...deliveryRoutes, ...termsRoutes, ...regulaminRoutes];
}
