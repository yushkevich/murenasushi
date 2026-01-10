'use client';

import { useEffect, useState, useRef } from 'react';
import { heroVideos } from '@/src/config/heroVideos';

export default function HeroVideo() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0]));
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadTimeoutRef = useRef<number | ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Lazy load next videos after initial paint
  useEffect(() => {
    if (prefersReducedMotion) return;

    const loadNextVideos = () => {
      // Load next 2 videos after initial paint
      const nextIndices = [
        (currentIndex + 1) % heroVideos.length,
        (currentIndex + 2) % heroVideos.length,
      ];

      nextIndices.forEach((idx) => {
        if (!loadedVideos.has(idx)) {
          setLoadedVideos((prev) => new Set([...prev, idx]));
        }
      });
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      loadTimeoutRef.current = window.requestIdleCallback(loadNextVideos, { timeout: 2000 }) as number;
    } else {
      loadTimeoutRef.current = setTimeout(loadNextVideos, 2000);
    }

    return () => {
      if (loadTimeoutRef.current !== null) {
        if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
          window.cancelIdleCallback(loadTimeoutRef.current as number);
        } else {
          clearTimeout(loadTimeoutRef.current);
        }
      }
    };
  }, [currentIndex, prefersReducedMotion, loadedVideos]);

  // Auto-advance videos with cross-fade
  useEffect(() => {
    if (prefersReducedMotion) return;

    const video = videoRefs.current[currentIndex];
    if (!video) return;

    // Play the current video
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Ignore autoplay errors
      }
    };

    playVideo();

    // Advance to next video after a set duration (5 seconds)
    fadeTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    }, 5000); // 5 seconds per video

    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, [currentIndex, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroVideos[0].poster})`,
          }}
          role="img"
          aria-label="Murena restaurant hero image"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
      {heroVideos.map((videoConfig, index) => {
        const isActive = index === currentIndex;
        const shouldLoad = loadedVideos.has(index);

        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
          >
            {shouldLoad ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                autoPlay={isActive}
                muted
                loop
                playsInline
                preload={index === 0 ? 'metadata' : 'none'}
                className="absolute inset-0 w-full h-full object-cover"
                aria-label={`Murena restaurant hero video ${index + 1}`}
              >
                {videoConfig.srcWebm && (
                  <source src={videoConfig.srcWebm} type="video/webm" />
                )}
                <source src={videoConfig.srcMp4} type="video/mp4" />
                <img 
                  src={videoConfig.poster} 
                  alt="Murena restaurant" 
                  className="w-full h-full object-cover"
                />
              </video>
            ) : (
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${videoConfig.poster})`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
