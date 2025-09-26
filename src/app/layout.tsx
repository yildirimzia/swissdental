import "./globals.css";
import { Suspense } from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalLoading from "./components/GlobalLoading";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { JsonLd } from "@/seo/jsonld";
import { gotham } from "@/app/fonts";
import GlobalAnalytics from "./GlobalAnalytics";
import InteractionGTM from "./components/InteractionGTM";

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
  const isVercel = process.env.VERCEL === "1";
  const vercelEnv = process.env.VERCEL_ENV;
  const isProd = vercelEnv === "production";
  const isPreview = vercelEnv === "preview";
  const logoUrl = new URL("/images/turkey-logo.svg", SITE.baseUrl).toString();

  const shouldLoadGA = !!GA_ID && isVercel && (isProd || isPreview);

  return (
    <html lang="tr" className={gotham.className}>
      <body>
        {/* Lazy GTM Component - mobilde gecikmiş yükleme */}
        {shouldLoadGA && (
          <Suspense fallback={null}>
            <InteractionGTM gaId={GA_ID} />
            <GlobalAnalytics />
          </Suspense>
        )}

        {/* Website Schema */}
        <JsonLd
          id="website"
          data={{
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Swiss Dental Solutions Türkiye",
            url: "https://swissdentalsolutions.com.tr/",
            potentialAction: {
              "@type": "SearchAction",
              target: "{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }}
        />

        {/* Corporation Schema */}
        <JsonLd
          id="corporation"
          data={{
            "@context": "https://schema.org",
            "@type": "Corporation",
            name: "Swiss Dental Solutions Türkiye",
            alternateName: "SDS Türkiye",
            url: "https://swissdentalsolutions.com.tr/",
            logo: "https://swissdentalsolutions.com.tr/images/turkey-logo.svg",
            sameAs: "https://www.instagram.com/swissdentalsolutionsturkiye/"
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