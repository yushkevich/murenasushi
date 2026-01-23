'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';
import { galleryImages } from '@/src/config/galleryImages';
import { trackSelectContent } from '@/src/lib/ga';

interface GalleryCollageProps {
  title: string;
  locale: string;
}

const imageCount = 18;

export default function GalleryCollage({ title, locale }: GalleryCollageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastScrollPosition = useRef<number>(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const openLightbox = (index: number) => {
    // Track lightbox open event
    trackSelectContent({
      content_type: 'gallery',
      content_id: 'open',
      index,
    });
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null && lightboxIndex < imageCount - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  // Track mobile carousel swipe
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Debounce scroll events - only track after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        const currentScroll = carousel.scrollLeft;
        const itemWidth = carousel.scrollWidth / galleryImages.length;
        const currentIndex = Math.round(currentScroll / itemWidth);
        const lastIndex = Math.round(lastScrollPosition.current / itemWidth);

        // Only track if index changed
        if (currentIndex !== lastIndex) {
          const direction = currentIndex > lastIndex ? 'left' : 'right';
          trackSelectContent({
            content_type: 'gallery',
            content_id: 'swipe',
            direction,
            from_index: lastIndex,
            to_index: currentIndex,
          });
        }

        lastScrollPosition.current = currentScroll;
      }, 150);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Grid layout configuration for collage effect
  // Using explicit classes for Tailwind to include them
  const gridClasses = [
    'lg:col-span-4 lg:row-span-4', // 1
    'lg:col-span-3 lg:row-span-3', // 2
    'lg:col-span-2 lg:row-span-2', // 3
    'lg:col-span-6 lg:row-span-4', // 4
    'lg:col-span-3 lg:row-span-4', // 5
    'lg:col-span-3 lg:row-span-3', // 6
    'lg:col-span-6 lg:row-span-3', // 7
    'lg:col-span-3 lg:row-span-3', // 8
    'lg:col-span-3 lg:row-span-3', // 9
    'lg:col-span-3 lg:row-span-3', // 10
    'lg:col-span-2 lg:row-span-2', // 11
    'lg:col-span-2 lg:row-span-2', // 12
    'lg:col-span-2 lg:row-span-2', // 13
    'lg:col-span-2 lg:row-span-2', // 14
    'lg:col-span-4 lg:row-span-4', // 15
    'lg:col-span-4 lg:row-span-4', // 16
    'lg:col-span-4 lg:row-span-4', // 17
    'lg:col-span-4 lg:row-span-4', // 18
  ];

  const tabletClasses = [
    'md:col-span-4 md:row-span-4', // 1
    'md:col-span-3 md:row-span-3', // 2
    'md:col-span-2 md:row-span-2', // 3
    'md:col-span-4 md:row-span-3', // 4
    'md:col-span-3 md:row-span-4', // 5
    'md:col-span-3 md:row-span-3', // 6
    'md:col-span-4 md:row-span-3', // 7
    'md:col-span-3 md:row-span-3', // 8
    'md:col-span-3 md:row-span-3', // 9
    'md:col-span-3 md:row-span-3', // 10
    'md:col-span-2 md:row-span-2', // 11
    'md:col-span-2 md:row-span-2', // 12
    'md:col-span-2 md:row-span-2', // 13
    'md:col-span-2 md:row-span-2', // 14
    'md:col-span-4 md:row-span-4', // 15
    'md:col-span-4 md:row-span-4', // 16
    'md:col-span-4 md:row-span-4', // 17
    'md:col-span-4 md:row-span-4', // 18
  ];

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: 'rgba(27,31,34, 0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-12 sm:mb-16 text-center">
            {title}
          </h2>
          
          {/* Desktop: 12-column grid */}
          <div className="hidden lg:grid grid-cols-12 gap-4 auto-rows-[120px]">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className={`${gridClasses[index]} relative overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-accent-blue`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={galleryImages[index].src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL={galleryImages[index].blurDataURL}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load gallery image: ${galleryImages[index].src}`);
                  }}
                />
              </button>
            ))}
          </div>

          {/* Tablet: 8-column grid */}
          <div className="hidden md:grid lg:hidden grid-cols-8 gap-3 auto-rows-[100px]">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className={`${tabletClasses[index]} relative overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-accent-blue`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={galleryImages[index].src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL={galleryImages[index].blurDataURL}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load gallery image: ${galleryImages[index].src}`);
                  }}
                />
              </button>
            ))}
          </div>

          {/* Mobile: Swipeable carousel with snap points */}
          <div className="md:hidden">
            <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-4 scrollbar-hide -mx-4 px-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative flex-shrink-0 w-[85vw] h-[60vh] overflow-hidden rounded-lg border border-[rgba(255,255,255,0.08)] snap-center focus:outline-none focus:ring-4 focus:ring-accent-blue"
                  aria-label={`View image ${index + 1}`}
                >
                  <Image
                    src={galleryImages[index].src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="85vw"
                    placeholder="blur"
                    blurDataURL={galleryImages[index].blurDataURL}
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load gallery image: ${galleryImages[index].src}`);
                    }}
                  />
                </button>
              ))}
            </div>
            {/* Scroll indicator */}
            <div className="flex justify-center gap-1 mt-4">
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-white/30"
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          isOpen={true}
          currentIndex={lightboxIndex}
          totalImages={imageCount}
          imageSrc={galleryImages[lightboxIndex].src}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          locale={locale}
        />
      )}
    </>
  );
}
