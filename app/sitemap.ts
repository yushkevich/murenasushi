import { MetadataRoute } from 'next';
import { locales } from '@/src/content/siteContent';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://murenasushi.pl';
  
  const routes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: locale === 'pl' ? 1 : 0.8,
  }));

  return routes;
}
