import Link from 'next/link';
import { instagramUrl, siteContent, type Locale } from '@/src/content/siteContent';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const content = siteContent[locale];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-text-primary py-12 sm:py-16" style={{ backgroundColor: 'rgba(27,31,34, 0.6)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Murena</h3>
            <p className="text-sm text-text-muted">{content.address}</p>
            <a
              href={`tel:${content.phone.replace(/\s/g, '')}`}
              className="text-sm text-text-muted hover:text-text-primary transition-colors mt-2 block focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
            >
              {content.phone}
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Hours</h3>
            <p className="text-sm text-text-muted">{content.hours}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Follow Us</h3>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
            >
              Instagram
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.08)] text-center text-sm text-text-muted">
          <p>&copy; {currentYear} Murena Seafood Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
