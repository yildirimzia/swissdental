"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button"; // kendi butonun
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function ServiceBlock() {
  return (
    // ÖNEMLİ: overflow-visible ki görsel yukarı taşabilsin
    <section className="bg-white  overflow-visible">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="text-mint font-[400] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            Dentists
          </p>

          <h1 className="text-primary-600 text-[32px] sm:text-[48px] font-[700] leading-[1.2]">
            Service
          </h1>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
            as special as our products
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            SDS is much more than just a product provider. We are always available for you, offering valuable knowledge, organizing further education events, and actively supporting you in planning your cases.
          </p>

  
                        <Link href="/implants" className="">
                <Button
                  variant="primary"
                  size="lg"
                  rounded="rounded-[100px]"
                  className="text-[16px] font-[400]"
                  icon={
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="22" 
                      height="22" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l14 0"></path>
                      <path d="M13 18l6 -6"></path>
                      <path d="M13 6l6 6"></path>
                    </svg>
                  }
                  iconPosition="right"
                >
                  Find an SDS dentist now
                </Button>
              </Link>
        </div>

        {/* Sağ: Background image */}
       <div
  className="order-1 lg:order-2 block w-full bg-no-repeat bg-cover 
             h-[546px] sm:h-[920px] 
             -translate-y-0 sm:-translate-y-30" 
  style={{
    backgroundImage:
      "url(/images/benefits-for-patients/Beratungsgespraech.jpg)",
  }}
></div>
      </div>
    </section>
  );
}
