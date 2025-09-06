"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";

export default function FounderAndPioneer() {
  const items = [
    {
      title: "Yılların Deneyimi",
      desc: "Biyolojik diş hekimliğinde",
      number: "25",
    },
    {
      icon: "/images/benefits-for-patients/Zahn.svg",
      title: "Kurucu ve öncü",
      desc: "Swiss Dental Solutions AG & Swiss Biohealth Clinic",
    },
    {
      title: "İmplantlar",
      desc: "yerleştirildi",
      number: "> 30.000",
    },
  ];

  return (
    <>
      <section className="py-20">
        <div className="max-w-[1320px] mx-auto px-4">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {items.map((it) => (
              <article
                key={it.title}
                className="text-center flex flex-col items-center"
              >
                {/* Number or Icon */}
                <div className="mb-8 flex items-center justify-center h-32">
                  {it.icon && (
                    <Image
                      src={it.icon}
                      alt=""
                      width={240}
                      height={240}
                      className="text-primary-500"
                    />
                  )}

                  {it.number && (
                    <p className="text-primary-500 text-6xl md:text-7xl font-light">
                      {it.number}
                    </p>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-primary-600 text-xl md:text-2xl font-semibold mb-2">
                  {it.title}
                </h3>

                {/* Description */}
                <p className="text-primary-500 text-sm font-light max-w-xs">
                  {it.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 pb-[100px]">
          <h1 className="text-primary-600 text-[32px] sm:text-[38px] font-[700] leading-[1.2] mb-8">
            Sürekli Eğitime Odaklanma
          </h1>
          <p className="text-primary-600 text-[16px] font-[300] max-w-[600px] mb-6">
            2017 yılından bu yana Dr. Ulrich Volz, diğer tanınmış konuşmacılar ve
            uzmanlarla birlikte Kreuzlingen'deki SWISS BIOHEALTH
            EDUCATION CENTRE'da Biyolojik Diş Hekimliği,
            Seramik İmplantlar ve Kan Konsantreleri konularındaki bilgilerini paylaşmaktadır. Sürekli iyileştirilen olağanüstü modern bir
            eğitim programı sunmaktadırlar. Eşsiz
            tedavi yöntemleri ve dünya çapında benzersiz cerrahi yaklaşım,
            tüm eğitim fırsatlarının temelini oluşturmaktadır.
          </p>
        </div>
      </section>
    </>
  );
}
