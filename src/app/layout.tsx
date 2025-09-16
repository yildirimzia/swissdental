import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
import GlobalLoading from "./components/GlobalLoading";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { JsonLd } from "@/seo/jsonld";
import { gotham } from "@/app/fonts";

import type { Metadata } from "next";
import { buildMetadata, SITE } from "@/seo/config";

// (opsiyonel) SSG’yi zorlamak istersen: export const dynamic = 'force-static';

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
  // ✅ Sadece env ile belirle (headers() yok → statik kalır)
  const vercelEnv = process.env.VERCEL_ENV; // 'production' | 'preview' | 'development' (Vercel)
  const isProd = vercelEnv === "production" || process.env.NEXT_PUBLIC_ENV === "production";
  const isPreview = vercelEnv === "preview";
  const showComingSoon = !(isProd || isPreview); // prod/preview dışı ortamda göster

  const logoUrl = new URL("/images/turkey-logo.svg", SITE.baseUrl).toString();

  return (
    <html lang="tr" className={gotham.variable}>
      <body className="antialiased">
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

        <LanguageProvider>
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
        </LanguageProvider>
      </body>
    </html>
  );
}
