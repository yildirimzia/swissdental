'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Custom SVG Icon Components
const DownloadIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);


const CheckIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="studies__item-icon text-secondary" ><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>
);


// Icon mapping (artık sadece custom SVG iconlar)
const iconMap = {
  download: DownloadIcon,
  check: CheckIcon,
};

// Tip tanımlamaları
export interface DocumentItem {
  id: string;
  title: string;
  description?: string;
  icon: keyof typeof iconMap;
  link?: string;
  target?: string;
}

export interface DocumentSectionData {
  id: string;
  title: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  items: DocumentItem[];
  image: string;
  width?: number;
  height?: number;
}

interface DocumentSectionProps {
  data: DocumentSectionData;
  onItemClick?: (item: DocumentItem) => void;
  id?: string;
}

const DocumentSection: React.FC<DocumentSectionProps> = ({ 
  data, 
  onItemClick,
}) => {
  const {
    title,
    description,
    bgColor = '',
    textColor = 'text-primary-600',
    items,
    image,
    width,
    height,
    id
  } = data;

  return (

    <section id={id} className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[60%_40%] items-center">
    <div className={`flex flex-col justify-start p-6 order-2 lg:order-2 ${bgColor} ${textColor}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-primary-700">
          {title}
        </h2>
        
        {description && (
          <p className="text-primary-600 mb-8 leading-relaxed">
            {description}
          </p>
        )}

        <div className="space-y-4">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                onClick={() => onItemClick?.(item)}
                className="flex items-center gap-4 pt-2 pl-0  cursor-pointer group"
              >
                <div className="flex-shrink-0 w-6 h-6 text-primary-600 ">
                  <IconComponent size={18} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold text-primary-700 ">
                    {item.link ? (
                      <Link href={item.link} target={item.target}>
                        {item.title}
                      </Link>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </h3>
                  {item.description && (
                    <p className="text-primary-600 text-sm mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div
          className="order-1 bg-center bg-no-repeat flex items-center justify-center lg:order-1  h-[546px] bg-cover sm:bg-auto sm:h-[920px] w-full"
          style={{
            backgroundImage:
              "url(/images/documents/Abstract-background.png)",
          }}
        >
          <Image src={image} alt="Abstract Background" className='object-cover ' width={width ? width : 850} height={height ? height : 851}/>
        </div>
    
    </section>
  );
};

// Örnek data yapısı
export const sampleData: DocumentSectionData[] = [
  {
    id: 'catalogs',
    title: 'Kataloglar ve Broşürler',
    description: 'SDS Swiss Dental Solutions seramik implant ürün yelpazesi birkaç kataloğa ayrılmıştır6. Katalogların her biri, ürün gruplarının bir listesini, açıklamalarını, teknik şematik çizimlerini ve ürünün tam boyutlarını içerir7. Delme protokolleri de kataloğa dahildir',
    image:"/images/documents/Bright_2022.png",
    items: [
      {
        id: 'bright-catalog',
        title: 'BRIGHT ürün kataloğu',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5b953073-c3b1-4bf0-8999-ce96df4b3821/BRIGHT-Product-Catalog.pdf',
        target: '_blank'
      },
      {
        id: 'value-catalog',
        title: 'VALUE ürün kataloğu ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/8074b5e5-be63-41f1-b2fb-4ea0b9407615/Information-about-Dental-Hygiene.pdf',
        target: '_blank'
      },
      {
        id: 'usage-sds12-22',
        title: 'SDS1.2 & SDS2.2 İmplantları ve bölgelerine ait kullanım talimatları',
        icon: 'download',
        link: 'https://sds.directus.app/assets/41491b06-adea-44dd-8ea1-62b798c0b6e5/Ozone-Therapy.pdf',
        target: '_blank'
      },
      {
        id: 'usage-special-shape',
        title: 'Özel şekilli İmplantlar ve bölgelerine ait kullanım talimatları ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/aa908197-a9fe-40ad-bc0f-7875a52a6791/Dental-Prothesis-with-SDS-Ceramic-Implants.pdf',
        target: '_blank'
      },
      {
        id: 'usage-sds21',
        title: 'SDS2.1 İmplantları ve bölgelerine ait kullanım talimatları',
        icon: 'download',
        link: 'https://sds.directus.app/assets/3121d4a6-bb2b-48f0-b7d7-174df8917a46/Vitamin-D3&Micronutrients.pdf',
        target: '_blank'
      },
      {
        id: 'baseline-boost',
        title: 'BASELINE & BOOST - Mikro besinler ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/f2bc2450-43e4-4dbb-ab87-d23dc4e28da0',
        target: '_blank'
      },
      {
        id: 'bigs-supplement',
        title: 'BIGS Çoklu besin takviyesi',
        icon: 'download',
        link: 'https://sds.directus.app/assets/fa47d00f-5fe8-4113-b84b-67a6fe1067a7/BIG5-Multi-nutrient-supplement.pdf',
        target: '_blank'
      },
      {
        id: 'sds-education',
        title: 'SDS EĞİTİM programı ',
        icon: 'download',
        link: 'https://education.swissdentalsolutions.com/media/cd/c2/fe/1741878392/SDS_Continuing_Education_Program_2025_EN%201.pdf?1741878392',
        target: '_blank'
      },
      {
        id: 'prosthodontics-manual',
        title: 'Protetik kılavuz ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/3ac9daad-7c79-48c6-8426-0fb262abcb4f/Prosthodontics-Manual.pdf',
        target: '_blank'
      },
      {
        id: 'dental-ozone',
        title: 'Kullanıcılar için dental ozon tedavisi',
        icon: 'download',
        link: 'https://sds.directus.app/assets/774a9697-eedf-453a-b1c0-61b8924db0fd/Dental-Ozone-therapy-for-users.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'concepts',
    title: 'Konseptler',
    description: 'Biyolojik diş hekimliği tedavi yöntemimiz, iki temel konsepte dayanmaktadır: SWISS BIOHEALTH KONSEPTİ ve HEPSİ BİR ARADA KONSEPTİ19. İlki, bireye bir bütün olarak ve dolayısıyla sağlığına bütünsel bir bakış açısıyla yaklaşmayı açıklar',
    image:"/images/documents/Swiss-Biohealth-Concept.png",
    items: [
      {
        id: 'swiss-biohealth',
        title: 'SWISS BIOHEALTH KONSEPTİ ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/cffa87e3-cf65-491b-a3af-495b434c618b/THE-SWISS-BIOHEALTH-CONCEPT.pdf',
        target: '_blank'
      },
      {
        id: 'medical-protocol',
        title: 'Tıbbi protokol l',
        icon: 'download',
        link: 'https://sds.directus.app/assets/fb0e92a1-3a91-40c7-a670-168d30c22d56/Medical-Protocol.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'drilling-protocols',
    title: 'Delme Protokolleri',
    description: 'Delme protokolleri, dört farklı kemik sınıfı için tasarlanmış delme prosedürü ve doğru delgilerin seçimi konusunda kesin talimatlar sunar',
    image:"/images/documents/Bohrprotokoll.png",
    items: [
      {
        id: 'drilling-sds12-22',
        title: 'SDS1.2 & SDS2.2 için Delme Protokolü',
        icon: 'download',
        link: 'https://sds.directus.app/assets/2ff2b441-93d5-4547-a5d0-5a5f5c651329/Drilling-Protocol-SDS1.2&SDS2.2.pdf',
        target: '_blank'
      },
      {
        id: 'drilling-cycle',
        title: 'Delme döngüsü protokolü',
        icon: 'download',
        link: 'https://sds.directus.app/assets/01a46c73-f880-4463-a99e-0422b52d676e/Drilling-cycle-protocol.pdf',
        target: '_blank'
      },
      {
        id: 'op-case-equipping',
        title: 'OP vaka ekipmanı ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/e611d15b-9ca8-4c8d-ab73-567a0b13dec2/OP-Case-Equipping.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'study-month',
    title: 'Ayın Çalışması',
    description: 'En son çalışmalarımızı burada bulabilirsiniz',
    image:"/images/documents/Studien.png",
    items: [
      {
        id: 'may-2024',
        title: 'ofortbelastete Keramikimplantate: Eine kurz- und langfristige Nachuntersuchung (Hemen Yüklenen Seramik İmplantlar: Kısa ve Uzun Vadeli Takip) ',
        icon: 'check'
      },
      {
        id: 'april-2024',
        title: 'Nisan 2024 - Interaction of Telomere Length and Inflammatory Biomarkers (Telomer Uzunluğu ve Enflamatuar Biyobelirteçlerin Etkileşimi) ',
        icon: 'check'
      },
      {
        id: 'march-2024',
        title: 'Mart 2024 - Interaction of Telomere Length and Inflammatory Biomarkers (Telomer Uzunluğu ve Enflamatuar Biyobelirteçlerin Etkileşimi) ',
        icon: 'check'
      },
      {
        id: 'january-2024',
        title: 'Ocak 2024 - Overheating due to friction (Sürtünme nedeniyle aşırı ısınma) ',
        icon: 'check'
      },
      {
        id: 'may-2023-01',
        title: 'Mayıs 2023 -  Low temperature degradation of zirconia_01 (Zirkonyanın düşük sıcaklıkta bozulması)',
        icon: 'check'
      },
      {
        id: 'may-2023-02',
        title: 'Mayıs 2023 -  Low temperature degradation of zirconia_02 (Zirkonyanın düşük sıcaklıkta bozulması)',
        icon: 'check'
      },
      {
        id: 'may-2023-03',
        title: 'Mayıs 2023 - Low temperature degradation of zirconia_03 (Zirkonyanın düşük sıcaklıkta bozulması)',
        icon: 'check'
      },
      {
        id: 'may-2023-04',
        title: 'Mayıs 2023 - Low temperature degradation of zirconia_04 (Zirkonyanın düşük sıcaklıkta bozulması)',
        icon: 'check'
      },
      {
        id: 'february-2023-01',
        title: 'Şubat 2023 - FDOJ_01 (Çene Kemiğindeki Odaksal Enflamasyon Noktaları)',
        icon: 'check'
      },
            {
        id: 'february-2023-02',
        title: 'Şubat 2023 - FDOJ_02 (Çene Kemiğindeki Odaksal Enflamasyon Noktaları)',
        icon: 'check'
      },
      {
        id: 'february-2023-03',
        title: 'Şubat 2023 - FDOJ_03 (Çene Kemiğindeki Odaksal Enflamasyon Noktaları)',
        icon: 'check'
      },
      {
        id: 'january-2023-01',
        title: 'Ocak 2023 - BISS - Bone Stabilization System Ghanaati 2022 (Kemik Stabilizasyon Sistemi Ghanaati)',
        icon: 'check'
      },
      {
        id: 'january-2023-02',
        title: 'Ocak 2023 - BISS - Bone Stabilization System Ghanaati 2020 (Kemik Stabilizasyon Sistemi Ghanaati) ',
        icon: 'check'
      },
      {
        id: 'november-2023-01',
        title: 'Kasım 2022 - Metronomic Breathing (Metronomik Nefes) ',
        icon: 'check'
      },
      {
        id: 'november-2023-02',
        title: 'Kasım 2022 - VNS and Immune System (VNS ve Bağışıklık Sistemi) 3',
        icon: 'check'
      },
      {
        id: 'october-2023-03',
        title: 'Ekim 2022 - Success and patient satisfaction (Başarı ve hasta memnuniyeti)',
        icon: 'check'
      }

    ]
  },
  {
    id: 'additional-downloads',
    title: 'Ek İndirilebilir Dosyalar',
    description: 'Sizin için diğer bağlantılar ',
    image:"/images/documents/SDS1 2.png",
    width:323,
    height:531,
    items: [
      {
        id: 'scientific-status',
        title: 'Güncel bilimsel durum',
        icon: 'download',
        link: 'https://sds.directus.app/assets/6a691c7e-e7cc-4c0e-bc2e-20bffbc92745/Current-scientific-status.pdf',
        target: '_blank'
      },
      {
        id: 'complaint-form',
        title: 'Şikayet Formu',
        icon: 'download',
        link: 'https://sds.directus.app/assets/66fceb1e-ea40-4b26-a805-5e226e0cb399',
        target: '_blank'
      },
      {
        id: 'cadcam-integration',
        title: 'CADCAM Entegrasyonu ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'patient-downloads',
    title: 'Hastalar için İndirilebilir Dosyalar',
    description: 'Hastalar için NICO, kanal tedavisi görmüş dişler ve D3 vitamini gibi konularda bilgi edinmek için hasta indirilebilir dosyalarımıza bakabilirsiniz',
    image:"/images/documents/SBC-Aktuelle-Ansicht.png",
    items: [
      {
        id: 'fdojs',
        title: 'FDOJs - Çene Kemiğindeki Odaksal Enflamasyon Noktaları',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'dental-hygiene',
        title: 'Diş hijyeni hakkında bilgiler',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'ozone-therapy',
        title: 'Ozon tedavisi',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'dental-prothesis',
        title: 'SDS Seramik İmplantlarla Diş Protezi',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'vitamin-d3',
        title: 'D3 Vitamini ve Mikro besinler ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'baseline-boost-patient',
        title: 'Baseline & Boost ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'root-canal',
        title: 'Kanal Tedavisi Görmüş Dişler',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'meridian-system',
        title: 'Kişisel analiz için meridyen sistemi',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'swiss-biohealth-patient',
        title: 'SWISS BIOHEALTH KONSEPTİ',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'safety-summary',
        title: 'Güvenlik ve klinik performans özeti (SSCP)',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      }
    ]
  }
];

export default DocumentSection;