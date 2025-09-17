import "./globals.css";
import { Suspense } from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
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
  const vercelEnv = process.env.VERCEL_ENV; 
  const isProd = vercelEnv === "production" || process.env.NEXT_PUBLIC_ENV === "production";
  const isPreview = vercelEnv === "preview";
  const showComingSoon = !(isProd || isPreview);

  const logoUrl = new URL("/images/turkey-logo.svg", SITE.baseUrl).toString();
  const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="tr" className={gotham.variable}>
      <body className="antialiased">
        {GA_ID && (isProd || isPreview) && (
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

        {/* Organization JSON-LD */}
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
            {showComingSoon ? (
              <ComingSoon />
            ) : (
              <>
                <Header />
                {children}
                <Footer />
              </>
            )}
          </div>
        </LoadingProvider>
      </body>
    </html>
  );
}
