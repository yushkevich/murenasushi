'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after a maximum of 1.5 seconds or when page is loaded
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    // Also hide when page is fully loaded (whichever comes first)
    const handleLoad = () => {
      setIsVisible(false);
    };

    if (document.readyState === 'complete') {
      setIsVisible(false);
      clearTimeout(timer);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal transition-opacity duration-500"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-48 h-auto animate-pulse">
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
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
