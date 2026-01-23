'use client';

import { getGoogleMapsUrl, instagramUrl } from '@/src/content/siteContent';
import { trackGenerateLead } from '@/src/lib/ga';

interface InfoSectionProps {
  hours: string;
  hoursDelivery: string;
  address: string;
  phone: string;
  phoneDelivery: string;
  callLabel: string;
  mapsLabel: string;
  instagramLabel: string;
  restaurantHoursLabel: string;
  deliveryHoursLabel: string;
  deliveryLabel: string;
  locale: string;
}

export default function InfoSection({ 
  hours, 
  hoursDelivery,
  address, 
  phone,
  phoneDelivery, 
  callLabel, 
  mapsLabel, 
  instagramLabel,
  restaurantHoursLabel,
  deliveryHoursLabel,
  deliveryLabel,
  locale
}: InfoSectionProps) {
  const googleMapsUrl = getGoogleMapsUrl(address);

  // Track info section phone clicks
  const handleGeneralPhoneClick = () => {
    trackGenerateLead({
      lead_source: 'call_general',
      placement: 'info_section',
      lang: locale,
      phone: phone.replace(/\s/g, ''),
    });
  };

  const handleDeliveryPhoneClick = () => {
    trackGenerateLead({
      lead_source: 'call_delivery',
      placement: 'info_section',
      lang: locale,
      phone: phoneDelivery.replace(/\s/g, ''),
    });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'rgba(21, 20, 51, 0.2)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-text-primary">{address}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-base sm:text-lg text-text-primary font-semibold">{restaurantHoursLabel}</p>
            <p className="text-base sm:text-lg text-text-muted">{hours}</p>
            <p className="text-base sm:text-lg text-text-primary font-semibold mt-3">{deliveryHoursLabel}</p>
            <p className="text-base sm:text-lg text-text-muted">{hoursDelivery}</p>
          </div>
          
          <div className="space-y-3">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              onClick={handleGeneralPhoneClick}
              className="block text-lg sm:text-xl text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded px-2"
            >
              {callLabel}: {phone}
            </a>
            <a
              href={`tel:${phoneDelivery.replace(/\s/g, '')}`}
              onClick={handleDeliveryPhoneClick}
              className="block text-lg sm:text-xl text-text-muted hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded px-2"
            >
              {deliveryLabel}: {phoneDelivery}
            </a>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white text-text-primary font-semibold rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-4"
            >
              {mapsLabel}
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 border-2 border-white text-text-primary font-semibold rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-4"
            >
              📸 {instagramLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
