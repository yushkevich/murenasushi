'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { siteContent, instagramUrl, type Locale } from '@/src/content/siteContent';
import { trackGenerateLead } from '@/src/lib/ga';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const content = siteContent[locale];

  // Track general phone link click
  const handleGeneralPhoneClick = () => {
    trackGenerateLead({
      lead_source: 'call_general',
      placement: 'header',
      lang: locale,
      phone: content.phone.replace(/\s/g, ''),
    });
  };

  // Track delivery phone link click
  const handleDeliveryPhoneClick = () => {
    trackGenerateLead({
      lead_source: 'call_delivery',
      placement: 'header',
      lang: locale,
      phone: content.phoneDelivery.replace(/\s/g, ''),
    });
  };

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
              className="text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded p-1"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
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
              onClick={handleGeneralPhoneClick}
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1"
              aria-label="Call restaurant"
            >
              📞 {content.phone}
            </a>
            <span className="text-white/50">|</span>
            <a
              href={`tel:${content.phoneDelivery.replace(/\s/g, '')}`}
              onClick={handleDeliveryPhoneClick}
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
