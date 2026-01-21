// Gallery images configuration with blur placeholders
// These are base64-encoded tiny blurred placeholders (1x1 or 2x2 pixel images)
// In production, you can generate these using a tool like plaiceholder or sharp

const generateBlurDataURL = (): string => {
  // This is a minimal 1x1 transparent PNG as base64
  // In production, replace with actual blurred versions of your images
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
};

export interface GalleryImageConfig {
  src: string;
  blurDataURL: string;
  width?: number;
  height?: number;
}

// Explicitly define all 18 gallery images to ensure correct paths
export const galleryImages: GalleryImageConfig[] = [
  { src: '/gallery/01.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/02.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/03.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/04.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/05.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/06.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/07.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/08.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/09.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/10.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/11.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/12.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/13.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/14.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/15.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/16.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/17.webp', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/18.webp', blurDataURL: generateBlurDataURL() },
];
