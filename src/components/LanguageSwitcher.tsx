'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/src/content/siteContent';

const localeLabels: Record<Locale, string> = {
  pl: 'PL',
  ru: 'RU',
  ua: 'UA',
  en: 'EN',
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1] as Locale || 'pl';

  return (
    <nav aria-label="Language switcher" className="flex items-center gap-2 sm:gap-3">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = `/${locale}`;
        
        return (
          <Link
            key={locale}
            href={href}
            className={`
              text-sm sm:text-base font-medium transition-all duration-200
              ${isActive 
                ? 'text-white underline underline-offset-4 decoration-2' 
                : 'text-white/70 hover:text-white hover:underline hover:underline-offset-4 hover:decoration-1'
              }
            `}
            aria-current={isActive ? 'page' : undefined}
          >
            {localeLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
