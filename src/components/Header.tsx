'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { siteContent, instagramUrl, type Locale } from '@/src/content/siteContent';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const content = siteContent[locale];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-b from-black/60 via-black/40 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Top row: Logo, Links, and Language Switcher */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <Link 
            href={`/${locale}`}
            className="relative z-10 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="Murena home"
          >
            <div className="w-32 sm:w-40 lg:w-48 h-auto relative">
              <Image
                src="/brand/logo.png"
                alt="Murena"
                width={192}
                height={96}
                className="w-full h-auto"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href={`/${locale}/delivery`}
              className="text-sm sm:text-base font-medium text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
            >
              {content.footer.deliveryPage}
            </Link>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-medium text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
            >
              {content.buttons.instagram}
            </a>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Info row: Address, Hours, and Phone Numbers */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm sm:text-base text-white/90">
          <div className="flex flex-col gap-1">
            <span className="truncate">{content.address}</span>
            <span className="text-sm sm:text-base">{content.labels.restaurant}: {content.hours}</span>
            <span className="text-sm sm:text-base">{content.labels.dostawa}: {content.hoursDelivery}</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
            <a
              href={`tel:${content.phone.replace(/\s/g, '')}`}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              aria-label="Call restaurant"
            >
              📞 {content.phone}
            </a>
            <span className="text-white/50">|</span>
            <a
              href={`tel:${content.phoneDelivery.replace(/\s/g, '')}`}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              aria-label="Call delivery"
            >
              🛵 {content.phoneDelivery}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
