'use client';

import { getGoogleMapsUrl } from '@/src/content/siteContent';

interface InfoSectionProps {
  hours: string;
  address: string;
  phone: string;
  callLabel: string;
  mapsLabel: string;
}

export default function InfoSection({ hours, address, phone, callLabel, mapsLabel }: InfoSectionProps) {
  const googleMapsUrl = getGoogleMapsUrl(address);

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'rgba(27,31,34, 0.6)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-text-primary">{hours}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-text-primary">{address}</p>
          </div>
          
          <div className="space-y-2">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-lg sm:text-xl text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded px-2"
            >
              {callLabel}: {phone}
            </a>
          </div>
          
          <div className="pt-4">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-text-primary font-semibold rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-4"
            >
              {mapsLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
