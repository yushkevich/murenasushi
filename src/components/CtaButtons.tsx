'use client';

import { useState } from 'react';
import Link from 'next/link';
import WoltGlovoModal from './WoltGlovoModal';

interface CtaButtonsProps {
  reservationLabel: string;
  deliveryLabel: string;
  woltGlovoLabel: string;
  reservationUrl: string;
  deliveryUrl: string;
  woltUrl: string;
  glovoUrl: string;
  locale: string;
}

export default function CtaButtons({ 
  reservationLabel,
  deliveryLabel,
  woltGlovoLabel,
  reservationUrl,
  deliveryUrl,
  woltUrl,
  glovoUrl,
  locale,
}: CtaButtonsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Check if delivery URL is internal
  const isInternalDelivery = deliveryUrl.startsWith('/');

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-stretch max-w-md mx-auto w-full px-4">
        {/* Reservation Button */}
        <a
          href={reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border-2 border-white text-text-primary font-semibold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/90 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
        >
          {reservationLabel}
        </a>

        {/* Delivery Button */}
        {isInternalDelivery ? (
          <Link
            href={`/${locale}${deliveryUrl}`}
            className="px-8 py-4 border-2 border-white text-text-primary font-semibold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/90 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
          >
            {deliveryLabel}
          </Link>
        ) : (
          <a
            href={deliveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-text-primary font-semibold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/90 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
          >
            {deliveryLabel}
          </a>
        )}

        {/* Wolt/Glovo Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 border-2 border-white text-text-primary font-semibold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/90 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
        >
          {woltGlovoLabel}
        </button>
      </div>

      <WoltGlovoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        woltUrl={woltUrl}
        glovoUrl={glovoUrl}
        title={woltGlovoLabel}
      />
    </>
  );
}
