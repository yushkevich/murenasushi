'use client';

import { useState } from 'react';
import DeliveryModal from './DeliveryModal';

interface CtaButtonsProps {
  orderLabel: string;
  deliveryLabel: string;
  orderUrl: string;
  deliveryModalTitle?: string;
  deliveryModalCloseLabel?: string;
}

export default function CtaButtons({ 
  orderLabel, 
  deliveryLabel, 
  orderUrl,
  deliveryModalTitle,
  deliveryModalCloseLabel
}: CtaButtonsProps) {
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);
  
  const uberUrl = process.env.NEXT_PUBLIC_UBER_EATS_URL || '#';
  const boltUrl = process.env.NEXT_PUBLIC_BOLT_FOOD_URL || '#';

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
        <a
          href={orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border-2 text-text-primary font-semibold text-lg rounded-full hover:opacity-90 transition-opacity focus:outline-none focus:ring-4 text-center"
        >
          {orderLabel}
        </a>
        <button
          onClick={() => setIsDeliveryModalOpen(true)}
          className="px-8 py-4 bg-transparent border-2 text-text-primary font-semibold text-lg rounded-full hover:bg-white/10 hover:border-[rgba(255,255,255,0.15)] transition-all focus:outline-none focus:ring-4 focus:ring-accent-blue/50"
        >
          {deliveryLabel}
        </button>
      </div>
      <DeliveryModal
        isOpen={isDeliveryModalOpen}
        onClose={() => setIsDeliveryModalOpen(false)}
        uberUrl={uberUrl}
        boltUrl={boltUrl}
        title={deliveryModalTitle}
        closeLabel={deliveryModalCloseLabel}
      />
    </>
  );
}
