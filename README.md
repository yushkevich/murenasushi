# Murena Seafood Restaurant Website

Production-ready, mobile-first, responsive restaurant website built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will automatically redirect to `/pl`.

## 📁 Project Structure

```
murenasushi/
├── app/
│   ├── [lang]/          # Locale-specific pages (pl, ru, ua, en)
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx        # Root redirect to /pl
│   ├── robots.ts        # Robots.txt
│   └── sitemap.ts      # Sitemap generation
├── src/
│   ├── components/     # React components
│   └── content/        # Translations and content
├── public/
│   ├── brand/          # Brand assets
│   ├── gallery/        # Gallery images (18 images)
│   └── media/          # Media files
│       └── hero/       # Hero video carousel files
├── src/
│   ├── components/     # React components
│   ├── config/         # Configuration files
│   │   ├── heroVideos.ts    # Hero video carousel config
│   │   └── galleryImages.ts # Gallery images with blur placeholders
│   └── content/        # Translations and content
└── middleware.ts       # Locale routing middleware
```

## 🎨 Assets Setup

### 1. Logo
Place your logo image at:
```
/public/brand/logo.png
```
- Recommended size: 192x96px (2:1 ratio) or larger
- Format: PNG with transparency
- The logo will be displayed in white (using CSS filter) at exactly 12rem (192px) width
- Logo appears in header with transparent background

### 2. Hero Video Carousel
Place your hero video files at:
```
/public/media/hero/
  - hero1.mp4
  - hero1.webm (optional)
  - hero1-poster.jpg
  - hero2.mp4
  - hero2.webm (optional)
  - hero2-poster.jpg
  - hero3.mp4
  - hero3.webm (optional)
  - hero3-poster.jpg
  ... (add more as needed)
```

**Requirements:**
- Videos should be high quality (1920x1080 or similar)
- Format: MP4 (H.264) and optionally WebM
- Poster images: JPG, same dimensions as videos
- The carousel autoplays with smooth cross-fade transitions (10 seconds per video)
- Videos loop individually, then advance to the next
- Respects `prefers-reduced-motion` (shows first poster image)
- Optimized loading: only first video loads eagerly, others lazy-load after initial paint

**Configuration:**
- Edit `src/config/heroVideos.ts` to add/remove videos or change paths
- Default: 3 videos configured

**Note:** Do NOT copy videos from umai.pl. Use your own original video content.

### 3. Gallery Images
Place exactly 18 gallery images at:
```
/public/gallery/01.jpg
/public/gallery/02.jpg
...
/public/gallery/18.jpg
```

**Requirements:**
- Exactly 18 images (numbered 01-18)
- Format: JPG (recommended) or PNG
- Recommended: High resolution, optimized for web
- Images will be displayed in a responsive collage grid layout
- **LQIP (Low Quality Image Placeholder)**: Images use blur placeholders for smooth loading
  - Blur placeholders are generated automatically (minimal 1x1 transparent PNG)
  - For production, consider generating actual blurred versions using tools like:
    - [plaiceholder](https://plaiceholder.co/)
    - [sharp](https://sharp.pixelplumbing.com/)
    - Update `src/config/galleryImages.ts` with real blur data URLs

## 🌍 Environment Variables

No environment variables required for basic functionality. All configuration is managed through code.

## 📝 Content & Translations

All translations are managed in:
```
src/content/siteContent.ts
```

### Supported Languages
- **pl** (Polish) - Default
- **ru** (Russian)
- **ua** (Ukrainian)
- **en** (English)

### Updating Content

1. **Text Content**: Edit `siteContent.ts` to update translations
2. **SEO**: Update the `seo` object for each locale (title, description, keywords)
3. **Business Info**: Update hours, address, phone in the content object

### Routes
- `/pl` - Polish (default)
- `/ru` - Russian
- `/ua` - Ukrainian
- `/en` - English
- `/` - Redirects to `/pl` (308 permanent redirect)

## 🎯 Features

- ✅ Multi-language support (PL, RU, UA, EN)
- ✅ Mobile-first responsive design
- ✅ **Hero video carousel** with smooth cross-fade transitions (3-5 videos)
- ✅ **Optimized video loading** (lazy-loads after initial paint)
- ✅ **White logo** rendering (always white, fixed 12rem width)
- ✅ **Centered CTAs** in hero section
- ✅ **Gallery LQIP** (Low Quality Image Placeholder) for smooth loading
- ✅ Accessible (keyboard navigation, ARIA labels, focus states)
- ✅ SEO optimized (metadata, JSON-LD, sitemap, robots.txt)
- ✅ Gallery with lightbox (18 images, collage layout)
- ✅ Delivery modal (Wolt / Glovo)
- ✅ Language switcher in header
- ✅ Respects `prefers-reduced-motion`

## 🔧 Customization

### Styling
- TailwindCSS is used for all styling
- Customize colors, fonts, and spacing in `tailwind.config.ts`
- Global styles in `app/globals.css`

### Components
All components are in `src/components/`:
- `Header.tsx` - Logo and language switcher
- `HeroVideo.tsx` - Background video component
- `CtaButtons.tsx` - Primary and secondary CTAs
- `DeliveryModal.tsx` - Delivery options modal
- `InfoSection.tsx` - Hours, address, phone
- `GalleryCollage.tsx` - Gallery grid with lightbox
- `Lightbox.tsx` - Fullscreen image viewer
- `Footer.tsx` - Footer with contact info

## 📱 Responsive Breakpoints

- Mobile: < 640px (2-column gallery)
- Tablet: 640px - 1024px (8-column gallery)
- Desktop: >= 1024px (12-column gallery)

## 🔍 SEO

- Automatic sitemap generation (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- JSON-LD structured data (Restaurant schema)
- OpenGraph and Twitter Card meta tags
- Hreflang tags for all locales
- Canonical URLs per locale

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Ensure Node.js 18+ is available

## 📄 License

This project is proprietary. All rights reserved.

## 🎨 Advanced: Generating Blur Placeholders

For production, you can generate actual blurred placeholders for gallery images:

### Using plaiceholder (Recommended)
```bash
npm install plaiceholder
```

Create a script to generate blur data URLs:
```javascript
// scripts/generate-blur.js
const { getPlaiceholder } = require('plaiceholder');
const fs = require('fs');
const path = require('path');

async function generateBlurPlaceholders() {
  const images = [];
  for (let i = 1; i <= 18; i++) {
    const imagePath = path.join(__dirname, '../public/gallery', `${String(i).padStart(2, '0')}.jpg`);
    const { base64 } = await getPlaiceholder(imagePath);
    images.push({
      src: `/gallery/${String(i).padStart(2, '0')}.jpg`,
      blurDataURL: base64,
    });
  }
  // Update src/config/galleryImages.ts with the generated data
  console.log(JSON.stringify(images, null, 2));
}
```

### Using sharp
```bash
npm install sharp
```

Similar approach - resize image to 10px width, convert to base64.

## 🆘 Troubleshooting

### Images not loading
- Ensure images are in the correct directories (`/public/...`)
- Check file names match exactly (case-sensitive)
- Verify image formats are supported (JPG, PNG, WebP)

### Hero videos not playing
- Check video format (MP4 H.264)
- Verify file paths match `src/config/heroVideos.ts`
- Check browser console for errors
- Ensure `prefers-reduced-motion` is not enabled (video will show poster instead)
- Verify videos are in `/public/media/hero/` directory

### Video not playing
- Check video format (MP4 H.264)
- Verify file paths are correct
- Check browser console for errors
- Ensure `prefers-reduced-motion` is not enabled (video will show poster instead)

### Language switcher not working
- Clear browser cache
- Check middleware is working (should redirect `/` to `/pl`)
- Verify locale routes exist in `app/[lang]/page.tsx`

## 📞 Support

For issues or questions, contact the development team.

---

Built with ❤️ using Next.js 14, TypeScript, and TailwindCSS.
