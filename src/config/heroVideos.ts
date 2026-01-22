export interface HeroVideoConfig {
  srcMp4: string;
  srcWebm?: string;
  poster: string;
  duration: number; // Duration in seconds
}

export const heroVideos: HeroVideoConfig[] = [
  {
    srcMp4: '/media/hero/hero1.mp4',
    srcWebm: '/media/hero/hero1.webm',
    poster: '/media/hero/hero1-poster.png',
    duration: 1,
  },
  {
    srcMp4: '/media/hero/hero2.mp4',
    srcWebm: '/media/hero/hero2.webm',
    poster: '/media/hero/hero2-poster.png',
    duration: 4,
  },
  {
    srcMp4: '/media/hero/hero3.mp4',
    srcWebm: '/media/hero/hero3.webm',
    poster: '/media/hero/hero3-poster.png',
    duration: 4,
  },
  {
    srcMp4: '/media/hero/hero4.mp4',
    srcWebm: '/media/hero/hero4.webm',
    poster: '/media/hero/hero4-poster.png',
    duration: 1,
  },
  {
    srcMp4: '/media/hero/hero5.mp4',
    srcWebm: '/media/hero/hero5.webm',
    poster: '/media/hero/hero5-poster.png',
    duration: 5,
  },
];
