import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";
import BenefitsForDentistsView from "./BenefitsForDentistsView";
import Script from 'next/script'

export const metadata: Metadata = buildMetadata({
  path: "/benefits-for-dentists",
  canonical: "/dis-hekimleri-icin-seramik-implant-faydalari",
  titleOverride: "Diş Hekimleri İçin Seramik İmplant Avantajları",
  descriptionOverride:
    "Seramik implantların avantajlarını deneyimleyin: üstün estetik, zaman kazandıran anında implantasyon, minimal peri-implantit riski ve memnun hastalar.",
  ogImage: `/api/og?title=${encodeURIComponent("Diş Hekimleri İçin Seramik İmplant Avantajları")}`,
});

export default function Page() {
     const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://swissdentalsolutions.com.tr/dis-hekimleri-icin-seramik-implant-faydalari"
    },
    "headline": "Diş Hekimleri İçin Seramik İmplantın Faydaları",
    "description": "Swiss Dental Solutions - Seramik İmplant",
    "image": "https://swissdentalsolutions.com.tr/images/company/Implantat-Background.jpg",
    "author": {
      "@type": "Organization",
      "name": "Swiss Dental Solutions Türkiye",
      "url": "https://swissdentalsolutions.com.tr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Swiss Dental Solutions Türkiye",
      "logo": {
        "@type": "ImageObject",
        "url": "https://swissdentalsolutions.com.tr/images/turkey-logo.svg"
      }
    },
    "datePublished": "2025-09-14",
    "dateModified": "2025-09-16"
  };

  return (
    <>
      <Script
        id="article-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BenefitsForDentistsView />
    </>
  );
}