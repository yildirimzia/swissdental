
import Image from "next/image";
import { useEffect } from "react";

interface LevelItem {
  listTitle: string;
}

interface LevelSectionProps {
  title: string;
  image: string;
  subtitle: string;
  list: LevelItem[];
  className?: string;
}

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-primary-500 min-h-[18px] flex-shrink-0 mt-0.5"
  >
    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
    <path d="M9 12l2 2l4 -4"></path>
  </svg>
);

export default function LevelSection({ 
  title, 
  image, 
  subtitle, 
  list, 
  className = "" 
}: LevelSectionProps) {
  // Title'ı ID için slug'a çevir
  const titleId = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <section
      id={titleId}  // ID ekle
      className={`lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[50%_50%] items-center mx-auto gap-12 lg:gap-8 px-4 sm:px-6 py-16 lg:py-20 ${className}`}
    >
      {/* Sol taraf - Görsel */}
      <div
        className="lg:order-1 order-2 flex justify-center p-8 lg:p-12 rounded-2xl"
        style={{
          backgroundImage:
            "url(/images/benefits-for-patients/Abstract-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image
          src={image}
          width={323}
          height={531}
          alt={`${title} illustration`}
          className="max-w-full h-auto"
        />
      </div>

      {/* Sağ taraf - İçerik */}
      <div className="lg:order-2 order-1 space-y-6 px-4 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-primary-600">
          {title}
        </h2>
        
        <p className="text-base lg:text-lg text-primary-600 leading-relaxed">
          {subtitle}
        </p>

        <ul className="space-y-4 mt-8">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span className="leading-relaxed text-primary-600 font-medium">
                {item.listTitle}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}