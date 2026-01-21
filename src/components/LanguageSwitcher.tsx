'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/src/content/siteContent';

const localeLabels: Record<Locale, string> = {
  pl: 'PL',
  ru: 'RU',
  ua: 'UA',
  en: 'EN',
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1] as Locale || 'pl';
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleLocaleSelect = (locale: Locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <nav aria-label="Language switcher" className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm sm:text-base font-medium text-white transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 flex items-center gap-1"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{localeLabels[currentLocale]}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-32 bg-black/95 backdrop-blur-sm border border-white/20 rounded-md shadow-lg z-50"
          role="menu"
          aria-orientation="vertical"
        >
          {locales.map((locale) => {
            const isActive = locale === currentLocale;
            
            return (
              <button
                key={locale}
                type="button"
                onClick={() => handleLocaleSelect(locale)}
                className={`
                  w-full text-left px-4 py-2 text-sm sm:text-base font-medium transition-all duration-200
                  ${isActive 
                    ? 'text-white bg-white/10' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                  }
                  first:rounded-t-md last:rounded-b-md
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset
                `}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
              >
                {localeLabels[locale]}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
