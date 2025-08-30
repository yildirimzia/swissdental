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
            FOUNDER
          </p>

          <h1 className="text-primary-600 text-[32px] sm:text-[48px] font-[700] leading-[1.2]">
            Dr. med.
          </h1>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
            Karl Ulrich Volz

          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            In 2020, Dr. Karl Ulrich Volz was once again elected as the President of the ISMI (International Society of Metal-free Implantology e.V.). As the founder and owner of the SWISS BIOHEALTH CLINIC in Kreuzlingen and the SDS SWISS DENTAL SOLUTIONS AG, he is recognized as the most experienced and renowned biological dentist globally due to his pioneering work in ceramic implantology and biological dentistry.
          </p>

                    <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
Dr. Karl Ulrich Volz heads the biological dental department at the SWISS BIOHEALTH CLINIC. With over 30,000 ceramic implants placed, he is a world leader in his field.

          </p>
        </div>
      </div>
    </section>
  );
}
