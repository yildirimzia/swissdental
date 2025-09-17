import "./globals.css";
import { Suspense } from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalLoading from "./components/GlobalLoading";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { JsonLd } from "@/seo/jsonld";
import { gotham } from "@/app/fonts";
import GlobalAnalytics from "./GlobalAnalytics";
import Script from "next/script"; 

import type { Metadata } from "next";
import { buildMetadata, SITE } from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/",
  titleOverride:
    "Swiss Dental Solutions Türkiye - SDS tarafından üretilen seramik implantlar | Biyouyumlu",
  descriptionOverride:
    "SDS Seramik İmplantları keşfedin: Biyouyumlu, dayanıklı ve hemen implante edilebilir. En yüksek uyumluluk ve estetik için en uygun titanyum alternatifi.",
  canonical: "/",
  ogImage: `/api/og?title=${encodeURIComponent("Swiss Dental Solutions Türkiye")}`,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

  // Vercel otomatik env'leri:
  const isVercel = process.env.VERCEL === "1"; // sadece Vercel deploylarında "1"
  const vercelEnv = process.env.VERCEL_ENV;     // 'production' | 'preview' | 'development'
  const isProd = vercelEnv === "production";
  const isPreview = vercelEnv === "preview";
  const logoUrl = new URL("/images/turkey-logo.svg", SITE.baseUrl).toString();


  // 🔒 GA sadece Vercel preview/prod'da yüklensin (lokal/ci'de yüklenmesin)
  const shouldLoadGA = !!GA_ID && isVercel && (isProd || isPreview);

  return (
    <html lang="tr" className={gotham.className}>
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

        <JsonLd
          id="org"
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE.name,
            url: SITE.baseUrl,
            logo: logoUrl,
            sameAs: [
              "https://www.instagram.com/swissdentalsolutionsturkiye",
              "https://www.linkedin.com/company/swissdentalsolutions/",
            ],
          }}
        />


                <LoadingProvider>
          <div>
            <GlobalLoading />
            <>
                <Header />
                {children}
                <Footer />
              </>
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
