'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  totalImages: number;
  imageSrc: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  currentIndex,
  totalImages,
  imageSrc,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      lightboxRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleArrow = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleArrow);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', handleArrow);
      };
    }
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const lightboxContent = (
    <div
      className="fixed inset-0 z-[100] bg-charcoal/95 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      <div
        ref={lightboxRef}
        className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center focus:outline-none"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-text-primary hover:text-text-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded p-2"
          aria-label="Close lightbox"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {currentIndex > 0 && (
          <button
            onClick={onPrev}
            className="absolute left-4 z-20 text-text-primary hover:text-text-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded p-2"
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {currentIndex < totalImages - 1 && (
          <button
            onClick={onNext}
            className="absolute right-4 z-20 text-text-primary hover:text-text-muted transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue rounded p-2"
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={`Gallery image ${currentIndex + 1} of ${totalImages}`}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          />
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-text-primary text-sm sm:text-base">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  );

  return createPortal(lightboxContent, document.body);
}
