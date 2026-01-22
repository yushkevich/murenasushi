'use client';

import { useEffect, useState, useRef } from 'react';
import { heroVideos } from '@/src/config/heroVideos';

export default function HeroVideo() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set([0]));
  const [videoReady, setVideoReady] = useState<Set<number>>(new Set());
  const [failedVideos, setFailedVideos] = useState<Set<number>>(new Set());
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

  // Lazy load all videos progressively
  useEffect(() => {
    if (prefersReducedMotion) return;

    const loadNextVideos = () => {
      // Load all videos progressively
      const unloadedVideos = heroVideos
        .map((_, idx) => idx)
        .filter(idx => !loadedVideos.has(idx));
      
      if (unloadedVideos.length > 0) {
        // Load next 2 unloaded videos
        const nextToLoad = unloadedVideos.slice(0, 2);
        nextToLoad.forEach((idx) => {
          setLoadedVideos((prev) => new Set([...prev, idx]));
        });
      }
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

  // Manage video playback and auto-advance
  useEffect(() => {
    if (prefersReducedMotion) return;

    const currentVideo = videoRefs.current[currentIndex];
    
    // Pause all other videos
    videoRefs.current.forEach((video, idx) => {
      if (video && idx !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (!currentVideo) return;

    // Play the current video if ready
    const playVideo = async () => {
      try {
        currentVideo.currentTime = 0;
        await currentVideo.play();
      } catch (error) {
        console.warn('Autoplay failed for video:', currentIndex, error);
      }
    };

    // Play immediately if video is ready, otherwise wait for it
    if (videoReady.has(currentIndex)) {
      playVideo();
    }

    // Set timeout to advance to next video
    fadeTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    }, heroVideos[currentIndex].duration * 1000); 

    return () => {
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
      // Pause current video on cleanup
      if (currentVideo) {
        currentVideo.pause();
      }
    };
  }, [currentIndex, prefersReducedMotion, videoReady]);

  const handleVideoLoaded = (index: number) => {
    setVideoReady((prev) => new Set([...prev, index]));
    
    // If this is the current video, play it
    if (index === currentIndex) {
      const video = videoRefs.current[index];
      if (video) {
        video.play().catch(() => {
          // Ignore autoplay errors
        });
      }
    }
  };

  const handleVideoError = (index: number) => {
    console.error('Video failed to load:', heroVideos[index].srcMp4);
    setFailedVideos((prev) => new Set([...prev, index]));
  };

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
        const hasFailed = failedVideos.has(index);

        return (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
          >
            {hasFailed || !shouldLoad ? (
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${videoConfig.poster})`,
                }}
              />
            ) : (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                muted
                loop
                playsInline
                preload={index === 0 ? 'metadata' : 'auto'}
                poster={videoConfig.poster}
                className="absolute inset-0 w-full h-full object-cover"
                aria-label={`Murena restaurant hero video ${index + 1}`}
                onLoadedData={() => handleVideoLoaded(index)}
                onError={() => handleVideoError(index)}
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
            )}
          </div>
        );
      })}
    </div>
  );
}
