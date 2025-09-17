import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  // ⬇️ GA4 ve DoubleClick için ağ isteklerine izin ver
  "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
  // (GTM kullanırsan iframe’ler için gerekebilir)
  // "frame-src https://www.googletagmanager.com",
].join("; ");

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/benefits-for-patients", destination: "/hastalar-icin-seramik-implant-faydalari", permanent: true },
      { source: "/benefits-for-dentists", destination: "/dis-hekimleri-icin-seramik-implant-faydalari", permanent: true },
      { source: "/product-lines", destination: "/seramik-implant-urun-serileri", permanent: true },
      { source: "/sscp", destination: "/guvenlik-klinik-performans-ozeti", permanent: true },
      { source: "/service", destination: "/hizmetler", permanent: true },
      { source: "/documents", destination: "/dokumanlar", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/company", destination: "/kurumsal", permanent: true },
      { source: "/company-krea", destination: "/krea-sds-turkiye", permanent: true },
      { source: "/history", destination: "/sds-tarihcesi", permanent: true },

      // alt sayfa örneği
      { source: "/benefits-for-dentists/tissue-level", destination: "/dis-hekimleri-icin-seramik-implant-faydalari/doku-seviyesi", permanent: true },
      // (opsiyonel genelleme)
      // { source: "/benefits-for-dentists/:slug*", destination: "/dis-hekimleri-icin-seramik-implant-faydalari/:slug*", permanent: true },
      // { source: "/benefits-for-patients/:slug*", destination: "/hastalar-icin-seramik-implant-faydalari/:slug*", permanent: true },
    ];
  },

  async rewrites() {
    return [
      // Kod tarafında route'ların İngilizce kalması için ters eşleme:
      { source: "/hastalar-icin-seramik-implant-faydalari", destination: "/benefits-for-patients" },
      { source: "/dis-hekimleri-icin-seramik-implant-faydalari", destination: "/benefits-for-dentists" },
      { source: "/seramik-implant-urun-serileri", destination: "/product-lines" },
      { source: "/guvenlik-klinik-performans-ozeti", destination: "/sscp" },
      { source: "/hizmetler", destination: "/service" },
      { source: "/dokumanlar", destination: "/documents" },
      { source: "/sds-podcast", destination: "/sds-podcast" },
      { source: "/iletisim", destination: "/contact" },
      { source: "/kurumsal", destination: "/company" },
      { source: "/krea-sds-turkiye", destination: "/company-krea" },
      { source: "/sds-tarihcesi", destination: "/history" },
      { source: "/dis-hekimleri-icin-seramik-implant-faydalari/doku-seviyesi", destination: "/benefits-for-dentists/tissue-level" },
    ];
  },

    async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
