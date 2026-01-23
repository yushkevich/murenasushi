'use client';

import Link from 'next/link';
import { instagramUrl, siteContent, type Locale } from '@/src/content/siteContent';
import { trackGenerateLead } from '@/src/lib/ga';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const content = siteContent[locale];
  const currentYear = new Date().getFullYear();

  // Track footer phone clicks
  const handleGeneralPhoneClick = () => {
    trackGenerateLead({
      lead_source: 'call_general',
      placement: 'footer',
      lang: locale,
      phone: content.phone.replace(/\s/g, ''),
    });
  };

  const handleDeliveryPhoneClick = () => {
    trackGenerateLead({
      lead_source: 'call_delivery',
      placement: 'footer',
      lang: locale,
      phone: content.phoneDelivery.replace(/\s/g, ''),
    });
  };

  return (
    <footer className="text-text-primary py-12 sm:py-16" style={{ backgroundColor: 'rgba(27,31,34, 0.6)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">Murena</h3>
            <p className="text-sm text-text-muted">{content.address}</p>
            <div className="mt-3 space-y-2">
              <a
                href={`tel:${content.phone.replace(/\s/g, '')}`}
                onClick={handleGeneralPhoneClick}
                className="text-sm text-text-muted hover:text-text-primary transition-colors block focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
              >
                {content.labels.restaurant}: {content.phone}
              </a>
              <a
                href={`tel:${content.phoneDelivery.replace(/\s/g, '')}`}
                onClick={handleDeliveryPhoneClick}
                className="text-sm text-text-muted hover:text-text-primary transition-colors block focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
              >
                {content.labels.delivery}: {content.phoneDelivery}
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">{content.labels.hours}</h3>
            <div className="text-sm text-text-muted space-y-3">
              <div>
                <p className="font-semibold text-text-primary mb-1">{content.labels.restaurant}</p>
                <p>{content.hours}</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">{content.labels.delivery}</p>
                <p>{content.hoursDelivery}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">{content.footer.links}</h3>
            <div className="space-y-2">
              <Link
                href={`/${locale}/delivery`}
                className="text-sm text-text-muted hover:text-text-primary transition-colors block focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
              >
                {content.footer.deliveryPage}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-sm text-text-muted hover:text-text-primary transition-colors block focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
              >
                {content.footer.terms}
              </Link>
              <Link
                href={`/${locale}/regulamin`}
                className="text-sm text-text-muted hover:text-text-primary transition-colors block focus:outline-none focus:ring-2 focus:ring-accent-blue rounded"
              >
                {content.footer.regulamin}
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-text-primary">{content.labels.followUs}</h3>
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
