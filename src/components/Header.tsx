'use client';

import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/pl" 
          className="relative z-10 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
          aria-label="Murena home"
        >
          <div className="w-48 h-auto relative">
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
        <LanguageSwitcher />
      </div>
    </header>
  );
}
