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
    title: 'Catalogs & flyers',
    description: 'The SDS Swiss Dental Solutions ceramic implant product range is divided into several catalogs. The catalogs each contain a list of the product groups, their descriptions as well as technical schematic drawings and the exact dimensions of the product. The drilling protocols are also included in the catalog. The individual catalogs can be found further down this page.',
    image:"/images/documents/Bright_2022.png",
    items: [
      {
        id: 'bright-catalog',
        title: 'BRIGHT product catalog',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5b953073-c3b1-4bf0-8999-ce96df4b3821/BRIGHT-Product-Catalog.pdf',
        target: '_blank'
      },
      {
        id: 'value-catalog',
        title: 'VALUE product catalog',
        icon: 'download',
        link: 'https://sds.directus.app/assets/8074b5e5-be63-41f1-b2fb-4ea0b9407615/Information-about-Dental-Hygiene.pdf',
        target: '_blank'
      },
      {
        id: 'usage-sds12-22',
        title: 'Usage instructions for SDS1.2 & SDS2.2 Implants and regions',
        icon: 'download',
        link: 'https://sds.directus.app/assets/41491b06-adea-44dd-8ea1-62b798c0b6e5/Ozone-Therapy.pdf',
        target: '_blank'
      },
      {
        id: 'usage-special-shape',
        title: 'Usage instructions for special shape Implants and regions',
        icon: 'download',
        link: 'https://sds.directus.app/assets/aa908197-a9fe-40ad-bc0f-7875a52a6791/Dental-Prothesis-with-SDS-Ceramic-Implants.pdf',
        target: '_blank'
      },
      {
        id: 'usage-sds21',
        title: 'Usage instructions for SDS2.1 Implants and regions',
        icon: 'download',
        link: 'https://sds.directus.app/assets/3121d4a6-bb2b-48f0-b7d7-174df8917a46/Vitamin-D3&Micronutrients.pdf',
        target: '_blank'
      },
      {
        id: 'baseline-boost',
        title: 'BASELINE & BOOST - Micro-nutrients',
        icon: 'download',
        link: 'https://sds.directus.app/assets/f2bc2450-43e4-4dbb-ab87-d23dc4e28da0',
        target: '_blank'
      },
      {
        id: 'bigs-supplement',
        title: 'BIGS Multi-nutrient supplement',
        icon: 'download',
        link: 'https://sds.directus.app/assets/fa47d00f-5fe8-4113-b84b-67a6fe1067a7/BIG5-Multi-nutrient-supplement.pdf',
        target: '_blank'
      },
      {
        id: 'sds-education',
        title: 'SDS EDUCATION continuing education Program',
        icon: 'download',
        link: 'https://education.swissdentalsolutions.com/media/cd/c2/fe/1741878392/SDS_Continuing_Education_Program_2025_EN%201.pdf?1741878392',
        target: '_blank'
      },
      {
        id: 'prosthodontics-manual',
        title: 'Prosthodontics manual',
        icon: 'download',
        link: 'https://sds.directus.app/assets/3ac9daad-7c79-48c6-8426-0fb262abcb4f/Prosthodontics-Manual.pdf',
        target: '_blank'
      },
      {
        id: 'dental-ozone',
        title: 'Dental ozone therapy for users',
        icon: 'download',
        link: 'https://sds.directus.app/assets/774a9697-eedf-453a-b1c0-61b8924db0fd/Dental-Ozone-therapy-for-users.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'concepts',
    title: 'Concepts',
    description: 'Our biological dentistry treatment form is based on the two following elementary concepts: THE SWISS BIOHEALTH CONCEPT and THE ALL IN ONE CONCEPT. The former describes the approach of looking at individuals as a whole — and thus also their health.',
    image:"/images/documents/Swiss-Biohealth-Concept.png",
    items: [
      {
        id: 'swiss-biohealth',
        title: 'THE SWISS BIOHEALTH CONCEPT',
        icon: 'download',
        link: 'https://sds.directus.app/assets/cffa87e3-cf65-491b-a3af-495b434c618b/THE-SWISS-BIOHEALTH-CONCEPT.pdf',
        target: '_blank'
      },
      {
        id: 'medical-protocol',
        title: 'Medical protocol',
        icon: 'download',
        link: 'https://sds.directus.app/assets/fb0e92a1-3a91-40c7-a670-168d30c22d56/Medical-Protocol.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'drilling-protocols',
    title: 'Drilling protocols',
    description: 'The drilling protocols provide precise instructions for the drilling procedure and selection of the correct drills, designed for four different bone classes.',
    image:"/images/documents/Bohrprotokoll.png",
    items: [
      {
        id: 'drilling-sds12-22',
        title: 'Drilling Protocol SDS1.2 & SDS2.2',
        icon: 'download',
        link: 'https://sds.directus.app/assets/2ff2b441-93d5-4547-a5d0-5a5f5c651329/Drilling-Protocol-SDS1.2&SDS2.2.pdf',
        target: '_blank'
      },
      {
        id: 'drilling-cycle',
        title: 'Drilling cycle protocol',
        icon: 'download',
        link: 'https://sds.directus.app/assets/01a46c73-f880-4463-a99e-0422b52d676e/Drilling-cycle-protocol.pdf',
        target: '_blank'
      },
      {
        id: 'op-case-equipping',
        title: 'OP case equipping',
        icon: 'download',
        link: 'https://sds.directus.app/assets/e611d15b-9ca8-4c8d-ab73-567a0b13dec2/OP-Case-Equipping.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'study-month',
    title: 'Study of the month',
    description: 'Here you can find our latest studies',
    image:"/images/documents/Studien.png",
    items: [
      {
        id: 'may-2024',
        title: 'May 2024 - Sofortbelastete Keramikimplantate: Eine kurz- und langfristige Nachuntersuchung',
        icon: 'check'
      },
      {
        id: 'april-2024',
        title: 'April 2024 - Interaction of Telomere Length and Inflammatory Biomarkers',
        icon: 'check'
      },
      {
        id: 'march-2024',
        title: 'March 2024 - Interaction of Telomere Length and Inflammatory Biomarkers',
        icon: 'check'
      },
      {
        id: 'january-2024',
        title: 'January 2024 - Overheating due to friction',
        icon: 'check'
      },
      {
        id: 'may-2023-01',
        title: 'May 2023 - Low temperature degradation of zirconia_01',
        icon: 'check'
      },
      {
        id: 'may-2023-02',
        title: 'May 2023 - Low temperature degradation of zirconia_02',
        icon: 'check'
      },
      {
        id: 'may-2023-03',
        title: 'May 2023 - Low temperature degradation of zirconia_03',
        icon: 'check'
      },
      {
        id: 'may-2023-04',
        title: 'May 2023 - Low temperature degradation of zirconia_04',
        icon: 'check'
      },
      {
        id: 'february-2023-01',
        title: 'February 2023 - FDOJ_01',
        icon: 'check'
      },
            {
        id: 'february-2023-02',
        title: 'February 2023 - FDOJ_02',
        icon: 'check'
      },
      {
        id: 'february-2023-03',
        title: 'February 2023 - FDOJ_03',
        icon: 'check'
      },
      {
        id: 'january-2023-01',
        title: 'January 2023 - BISS - Bone Stabilization System Ghanaati 2022',
        icon: 'check'
      },
      {
        id: 'january-2023-02',
        title: 'January 2023 - BISS - Bone Stabilization System Ghanaati 2020',
        icon: 'check'
      },
      {
        id: 'november-2023-01',
        title: 'November 2022 - Metronomic Breathing',
        icon: 'check'
      },
      {
        id: 'november-2023-02',
        title: 'November 2022 - VNS and Immune System',
        icon: 'check'
      },
      {
        id: 'october-2023-03',
        title: 'October 2022 - Success and patient satisfaction',
        icon: 'check'
      }

    ]
  },
  {
    id: 'additional-downloads',
    title: 'Additional downloads',
    description: 'Further links for you',
    image:"/images/documents/SDS1 2.png",
    width:323,
    height:531,
    items: [
      {
        id: 'scientific-status',
        title: 'Current scientific status',
        icon: 'download',
        link: 'https://sds.directus.app/assets/6a691c7e-e7cc-4c0e-bc2e-20bffbc92745/Current-scientific-status.pdf',
        target: '_blank'
      },
      {
        id: 'complaint-form',
        title: 'Complaint Form',
        icon: 'download',
        link: 'https://sds.directus.app/assets/66fceb1e-ea40-4b26-a805-5e226e0cb399',
        target: '_blank'
      },
      {
        id: 'cadcam-integration',
        title: 'CADCAM Integration',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      }
    ]
  },
  {
    id: 'patient-downloads',
    title: 'Downloads for patients',
    description: 'For patients information about NICO, root canal-treated teeth and vitamin D3 among others go to our patient downloads.',
    image:"/images/documents/SBC-Aktuelle-Ansicht.png",
    items: [
      {
        id: 'fdojs',
        title: 'FDOJs - Focal Points of Inflammation in the Jawbone',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'dental-hygiene',
        title: 'Information about dental hygiene',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'ozone-therapy',
        title: 'Ozone therapy',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'dental-prothesis',
        title: 'Dental Prothesis with SDS Ceramic Implants',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'vitamin-d3',
        title: 'Vitamin D3 & Micronutrients',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'baseline-boost-patient',
        title: 'Baseline & Boost',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'root-canal',
        title: 'Root Canal Treated Teeth',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'meridian-system',
        title: 'Meridian system for self-analysis',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'swiss-biohealth-patient',
        title: 'THE SWISS BIOHEALTH CONCEPT',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      },
      {
        id: 'safety-summary',
        title: 'Summary of safety and clinical performance (SSCP)',
        icon: 'download',
        link: 'https://sds.directus.app/assets/5099cfa8-a40f-48fd-821e-cf2021014790/CADCAM%20Integration%20SDS.pdf',
        target: '_blank'
      }
    ]
  }
];

export default DocumentSection;