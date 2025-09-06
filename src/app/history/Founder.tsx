"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
export default function Founder() {
  return (
    // ÖNEMLİ: overflow-visible ki görsel yukarı taşabilsin
    <section className="bg-white  overflow-visible mt-[100px]">
      <div className="lg:max-w-[1380px]  relative gap-11 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[44%_50%] 2xl:grid-cols-[60%_40%] items-center mr-auto">
        {/* Sol: Metin */}
        <div
          className="order-1 lg:order-1 block w-full bg-no-repeat bg-cover 
             h-[546px] sm:h-[920px]  bg-center
             -translate-y-0 sm:-translate-y-30"
          style={{
            backgroundImage:
              "url(/images/Dr.Karl-Ulrich-Volz.jpg)",
          }}
        >
        </div>

        {/* Sağ: Background image */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-2">
          {/* Eyebrow */}
          <p className="text-mint font-[400] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            KURUCU
          </p>

          <h1 className="text-primary-600 text-[32px] sm:text-[48px] font-[700] leading-[1.2]">
            Dr. med.
          </h1>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
            Karl Ulrich Volz

          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            2020 yılında Dr. Karl Ulrich Volz, ISMI (Uluslararası Metal İçermeyen İmplantoloji Derneği) başkanlığına yeniden seçildi. Kreuzlingen'deki SWISS BIOHEALTH CLINIC ve SDS SWISS DENTAL SOLUTIONS AG'nin kurucusu ve sahibi olan Dr. Volz, seramik implantoloji ve biyolojik diş hekimliği alanındaki öncü çalışmalarıyla dünya çapında en deneyimli ve tanınmış biyolojik diş hekimi olarak kabul edilmektedir.          </p>

                    <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
Dr. Karl Ulrich Volz, SWISS BIOHEALTH CLINIC'in biyolojik diş hekimliği bölümünün başındadır. 30.000'den fazla seramik implant yerleştirmiş olan Dr. Volz, alanında dünya lideridir.

          </p>
        </div>
      </div>
    </section>
  );
}
