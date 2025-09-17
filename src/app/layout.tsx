// app/layout.tsx
import "./globals.css";
import { Suspense } from "react";
import Script from "next/script";
import GlobalAnalytics from "./GlobalAnalytics";
// ... diğer importlar

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

  // Vercel otomatik env'leri:
  const isVercel = process.env.VERCEL === "1"; // sadece Vercel deploylarında "1"
  const vercelEnv = process.env.VERCEL_ENV;     // 'production' | 'preview' | 'development'
  const isProd = vercelEnv === "production";
  const isPreview = vercelEnv === "preview";

  // 🔒 GA sadece Vercel preview/prod'da yüklensin (lokal/ci'de yüklenmesin)
  const shouldLoadGA = !!GA_ID && isVercel && (isProd || isPreview);

  return (
    <html lang="tr">
      <body>
        {shouldLoadGA && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GlobalAnalytics />
            </Suspense>
          </>
        )}

        {/* ... senin diğer içeriklerin */}
        {children}
      </body>
    </html>
  );
}
