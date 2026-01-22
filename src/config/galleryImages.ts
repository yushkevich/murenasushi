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
  { src: '/gallery/1.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/2.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/3.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/4.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/5.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/6.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/7.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/8.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/9.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/10.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/11.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/12.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/13.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/14.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/15.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/16.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/17.jpg', blurDataURL: generateBlurDataURL() },
  { src: '/gallery/18.jpg', blurDataURL: generateBlurDataURL() },
];
