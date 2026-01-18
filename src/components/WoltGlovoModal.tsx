'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface WoltGlovoModalProps {
  isOpen: boolean;
  onClose: () => void;
  woltUrl: string;
  glovoUrl: string;
  title?: string;
  closeLabel?: string;
}

export default function WoltGlovoModal({ 
  isOpen, 
  onClose, 
  woltUrl, 
  glovoUrl,
  title = 'Order Delivery',
  closeLabel = 'Close modal'
}: WoltGlovoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
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

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/95 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="woltglovo-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 sm:p-8 focus:outline-none"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="woltglovo-modal-title" className="text-2xl font-semibold text-gray-900">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 rounded p-1"
            aria-label={closeLabel}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <a
            href={woltUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 bg-[#009DE0] text-white text-center font-semibold rounded-lg hover:bg-[#0086C3] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Wolt
          </a>
          <a
            href={glovoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 bg-[#FFC244] text-black text-center font-semibold rounded-lg hover:bg-[#FFB020] transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          >
            Glovo
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
