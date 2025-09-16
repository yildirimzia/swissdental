// src/seo/config.ts
import type { Metadata } from "next";

export const SITE = {
  name: "Swiss Dental Solutions Türkiye",
  domain: "www.swissdentalsolutions.com.tr",
  baseUrl: "https://swissdentalsolutions.com.tr/",
  locale: "tr_TR",
  defaultOg: "/src/app/favicon.ico",
};

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: "Biyouyumlu Seramik İmplantlar | Swiss Dental Solutions",
    template: "%s | Swiss Dental Solutions",
  },
  description:
    "SDS seramik implantları: biyouyumlu, estetik ve güvenilir çözümler. Türkiye’de yetkili doktorlar ve güncel klinik kaynaklar.",
  metadataBase: new URL(SITE.baseUrl),
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    images: [{ url: SITE.defaultOg, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

// Route bazlı varsayılanlar (title & description)
export const ROUTE_SEO: Record<
  string,
  { title: string; description: string; ogImage?: string }
> = {
  "/": {
    title: "Biyouyumlu Seramik İmplantlar",
    description:
      "SDS seramik implantları ile doğal görünüm ve yüksek uyumluluk. Dokümanlar, doktor bulucu ve ürün serileri.",
  },
  "/benefits-for-patients": {
    title: "Hastalar İçin Seramik İmplant Faydaları",
    description:
      "Hastalar için seramik implantların biyouyumlu ve estetik avantajlarını keşfedin.",
  },
  "/benefits-for-dentists": {
    title: "Diş Hekimleri İçin Seramik İmplant Avantajları",
    description:
      "Klinik açıdan seramik implantların sunduğu faydalar ve SDS desteği.",
  },
  "/company": {
    title: "Swiss Dental Solutions Hakkında",
    description:
      "SDS’nin vizyonu, kalite yaklaşımı ve seramik implant alanındaki öncülüğü.",
  },
  "/company-krea": {
    title: "KREA & SDS Türkiye İş Birliği",
    description:
      "KREA ile SDS Türkiye arasındaki iş birliği ve sunduğu olanaklar.",
  },
  "/service": {
    title: "Hizmetlerimiz",
    description:
      "Eğitim, danışmanlık ve klinik destek hizmetlerimiz hakkında bilgi alın.",
  },
  "/sscp": {
    title: "Güvenlik ve Klinik Performans Özeti (SSCP)",
    description:
      "SDS seramik implantlarının güvenlik ve klinik performans verileri.",
  },
  "/documents": {
    title: "Belgeler ve Kaynaklar",
    description:
      "Kılavuzlar, klinik veriler ve resmi dokümanlar tek sayfada.",
  },
  "/doctors": {
    title: "Yetkili Doktorlar",
    description:
      "SDS seramik implant uygulayan yetkili diş hekimlerini bulun.",
  },
  "/contact": {
    title: "İletişim",
    description:
      "SDS Türkiye ile iletişime geçin; en yakın klinik ve distribütör bilgisi alın.",
  },
  "/career": {
    title: "Kariyer Fırsatları",
    description:
      "SDS Türkiye’de açık pozisyonlar ve başvuru süreçleri.",
  },
  "/history": {
    title: "SDS Tarihçesi",
    description:
      "Kuruluş hikayemiz ve seramik implantlarda öncü gelişmeler.",
  },
  "/product-lines": {
    title: "Seramik İmplant Ürün Serileri",
    description:
      "Farklı klinik ihtiyaçlara uygun SDS serileri: dayanıklı ve estetik çözümler.",
  },
  "/sds-podcast": {
    title: "SDS Podcast",
    description:
      "İmplantoloji ve diş hekimliğinde güncel konular.",
  },
  "/docfinder": {
    title: "Doktor Bulucu",
    description:
      "Konumunuza göre SDS yetkili diş hekimi bulun.",
  },
};

// Yardımcı: route + opsiyonel override ile Metadata üret
export function buildMetadata(params: {
  path: string;                 // örn: "/service"
  titleOverride?: string;
  descriptionOverride?: string;
  ogImage?: string;             // absolute veya public path
  noIndex?: boolean;            // true ise robots noindex
  canonical?: string;           // absolute ya da path
}): Metadata {
  const base = ROUTE_SEO[params.path] ?? ROUTE_SEO["/"];
  const title = params.titleOverride ?? base?.title ?? DEFAULT_METADATA.title;
  const description =
    params.descriptionOverride ?? base?.description ?? DEFAULT_METADATA.description;

  const ogImageUrl = params.ogImage ?? base?.ogImage ?? SITE.defaultOg;
  const canonicalUrl = params.canonical
    ? params.canonical.startsWith("http")
      ? params.canonical
      : `${SITE.baseUrl}${params.canonical}`
    : `${SITE.baseUrl}${params.path}`;

  return {
    ...DEFAULT_METADATA,
    title: { default: title, template: "%s | Swiss Dental Solutions" },
    description,
    openGraph: {
      ...DEFAULT_METADATA.openGraph,
      title,
      description,
      url: canonicalUrl,
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      ...DEFAULT_METADATA.twitter,
      title,
      description,
      images: [ogImageUrl],
    },
    alternates: { canonical: canonicalUrl },
    robots: params.noIndex
      ? { index: false, follow: false, nocache: true }
      : DEFAULT_METADATA.robots,
  };
}
