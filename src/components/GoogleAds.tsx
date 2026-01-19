'use client';

import Script from 'next/script';

export default function GoogleAds() {
  const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  // Only load if at least one ID is provided
  if (!analyticsId && !adsId) {
    return null;
  }

  // Use Analytics ID as primary if available, fallback to Ads ID
  const primaryId = analyticsId || adsId;

  return (
    <>
      {/* Google Analytics / Google Ads / Google Tag */}
      <Script
        id="google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-tag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${analyticsId ? `gtag('config', '${analyticsId}');` : ''}
            ${adsId ? `gtag('config', '${adsId}');` : ''}
          `,
        }}
      />
    </>
  );
}
