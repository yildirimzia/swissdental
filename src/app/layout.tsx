import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComingSoon from "./components/ComingSoon";
import GlobalLoading from "./components/GlobalLoading";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LoadingProvider } from "@/contexts/LoadingContext";

export const metadata: Metadata = {
  title: "Swiss Dental Solutions - SDS tarafından üretilen seramik implantlar | Biyouyumlu",
  description: "SDS Seramik İmplantları keşfedin: Biyouyumlu, dayanıklı ve hemen implante edilebilir. En yüksek uyumluluk ve estetik için en uygun titanyum alternatifi.",
  icons: {
    icon: "/public/favicon.ico",
  },
};

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

  return (
    <html lang="tr">
      <body className="antialiased">
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
