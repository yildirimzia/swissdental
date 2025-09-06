"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="M5 12l14 0"></path>
    <path d="M13 18l6 -6"></path>
    <path d="M13 6l6 6"></path>
  </svg>
);

export default function TeamBehind() {
  return (
    // ÖNEMLİ: overflow-visible ki görsel yukarı taşabilsin
    <section className="overflow-visible mb-[200px] mt-[300px]">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1 sm:pl-[100px]">
          {/* Eyebrow */}
          <p className="text-mint font-[400] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            SDS'NİN ARKASINDAKİ EKİP
          </p>

          <h1 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[700] leading-[1.2] mb-6">
            Motivasyonumuz
          </h1>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
           size en iyi ürünü sunmaktır
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
Hastalarımızdan gelen sürekli geri bildirimler, Swiss Dental Solutions'taki SDS seramik implantlarının gelişiminin temel taşlarından biridir6. Şu anda 180'den fazla kişiden oluşan ekibimizin her bir üyesi, implantlarımızın en yüksek standartları karşılamasını ve hastalarımızın ihtiyaçlarını gidermesini sağlamak için benzersiz becerileriyle katkıda bulunur7. Kullanıcılarımızdan ve hastalarımızdan gelen olumlu geri bildirimler, günlük itici gücümüzdür.          </p>


          <Link href="https://www.swiss-biohealth.com/en" className="">
            <Button
              variant="primary"
              size="lg"
              rounded="rounded-[100px]"
              className="text-[16px] font-[400]"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              SDS'deki işler
            </Button>
          </Link>
        </div>

        {/* Sağ: Background image */}
        <div
          className="order-1 lg:order-2 block w-full bg-no-repeat bg-cover 
             h-[546px] sm:h-[920px] 
             -translate-y-0 sm:-translate-y-30 bg-center"
          style={{
            backgroundImage: "url(/images/company/Mitarbeiter.jpg)",
          }}
        ></div>
      </div>
    </section>
  );
}
