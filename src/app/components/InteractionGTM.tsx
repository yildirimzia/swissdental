// components/InteractionGTM.tsx
"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function InteractionGTM({ gaId }: { gaId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    let hasLoaded = false; // Duplicate loading'i önle

    const handleInteraction = () => {
      if (hasLoaded) return;
      
      hasLoaded = true;
      setShouldLoad(true);
      
      // Event listener'ları temizle
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    // Çoklu etkileşim türleri
    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction); // Klavye navigasyonu için

    // Fallback: 3 saniye sonra yükle (5'ten daha hızlı)
    const fallbackTimer = setTimeout(handleInteraction, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="lazyOnload"
        onLoad={() => {
          console.log('GTM loaded after interaction');
        }}
        onError={(e) => {
          console.error('GTM failed to load:', e);
        }}
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { 
            send_page_view: false,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}