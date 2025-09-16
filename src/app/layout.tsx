import { headers } from "next/headers";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
import GlobalLoading from "./components/GlobalLoading";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { JsonLd } from "@/seo/jsonld";

import type { Metadata } from "next";
import { buildMetadata , SITE} from "@/seo/config";

export const metadata: Metadata = buildMetadata({
  path: "/",
  titleOverride: "Swiss Dental Solutions Türkiye - SDS tarafından üretilen seramik implantlar | Biyouyumlu",
  descriptionOverride:
    "SDS Seramik İmplantları keşfedin: Biyouyumlu, dayanıklı ve hemen implante edilebilir. En yüksek uyumluluk ve estetik için en uygun titanyum alternatifi.",
  canonical: "/",
  ogImage: `/api/og?title=${encodeURIComponent("Swiss Dental Solutions Türkiye")}`,
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const hdrs = await headers();
  const host = hdrs.get("host") || "";

  // ENV (Vercel > Project Settings > Environment Variables)
  const isProdEnv = process.env.NEXT_PUBLIC_ENV !== "production";

  // vercel preview domainlerini ayıkla
  const isVercelPreview = host.endsWith(".vercel.app"); // örn: swissdental.vercel.app

  // sadece prod ortam + vercel preview DEĞİLSE coming soon göster
  const showComingSoon = isProdEnv && !isVercelPreview;

  const logoUrl = new URL("/images/turkey-logo.svg", SITE.baseUrl).toString();

  return (
    <html lang="tr">
      <body className="antialiased">
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
              "https://www.linkedin.com/company/swissdentalsolutions/"
            ],
          }}
        />
        <LanguageProvider>
          <LoadingProvider>
            <div>
              {/* Global Loading - Her zaman render et */}
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
