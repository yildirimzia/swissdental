/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://swissdentalsolutions.com.tr',           // ana domain (slashesiz)
  generateRobotsTxt: true,                                   // robots.txt üret
  generateIndexSitemap: false,       
  productionBrowserSourceMaps: true,                        // index sitemap (sitemap.xml → sitemap-0.xml…)
  outDir: 'public',                                          // dosyaları public/ altına yaz
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/api/*',           // API’ler
    '/_next/*',
    '/404', '/500',     // varsa özel error sayfaları
    // İngilizce yol skeleton’larını zaten 301’e atıyorsun; yine de hariç tutabiliriz:
    '/benefits-for-patients',
    '/benefits-for-dentists',
    '/product-lines',
    '/sscp',
    '/service',
    '/documents',
    '/contact',
    '/company',
    '/company-krea',
    '/history',
  ],
  // Dinamik sayfaları eklemek veya resim site-map’i beslemek istersen:
  transform: async (config, path) => {
    // Varsayılan meta
    const entry = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        // Çok dillilik yoksa boş bırak. (TR kanonikallere geçtiniz.)
      ],
    };

    // Örnek: /hizmetler için image eklemek
    if (path === '/hizmetler') {
      entry.images = [
        { loc: 'https://swissdentalsolutions.com.tr/images/SDS-SwissdentalsolutionsTR.jpg' },
      ];
    }
    return entry;
  },
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://swissdentalsolutions.com.tr/sitemap.xml',
    ],
    policies: [
      { userAgent: '*', allow: '/' },
      // istersen admin-tarzı yolları kapat:
      // { userAgent: '*', disallow: ['/admin', '/drafts'] },
    ],
  },
};
