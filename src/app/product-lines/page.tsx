"use client"
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { useProductLinesTranslation } from '@/hooks/useTranslation';
import { useState } from "react";
import { useScrollAnimation } from '../components/useScrollAnimation'; // Bu satırı güncelledik

export default function ProductLinesPage() {
  const { t: tProductLines } = useProductLinesTranslation();
  const { ref: scrollRef, isVisible } = useScrollAnimation(0.1); // Destructuring olarak kullanım


  return (
    <>
      <main className="pb-[150px] p-[10px] bg-[linear-gradient(180deg,#EAF4F3_58.33%,rgba(255,255,255,0)_100%)]">
        <div className="pb-[100px] pt-[110px] w-full flex">
          <p className="pt-[100px] text-[44px] sm:text-[100px] whitespace-nowrap inline-block text-[#3aa194] font-bold left-0 sm:tracking-[1.1em] sm:leading-[0.9] tracking-[0.3em] leading-[.9]  opacity-10 relative text-center uppercase top-0 sm:w-[calc(100%+0.8em)] w-[100%]">
            {tProductLines("product_lines.line_1.modelsInfo_1")}
            <br />
            {tProductLines("product_lines.line_1.modelsInfo_2")}
          </p>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 pb-[100px]">
          <div className="relative">
            <Image
              src="/images/SDS1_Plines.png"
              alt="Product Image"
              width={160}
              height={500}
              className="absolute bottom-[-250px] left-[5%] w-[160px] z-[0] sm:block hidden
                            transition-all duration-700 ease-in-out 
                            transform scale-100 
                            filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] 
                            hover:scale-110 
                            hover:drop-shadow-[30px_30px_30px_rgba(0,0,0,0.2)] 
                            text-transparent"
            />

            <Image
              src="/images/SDS1 2_Plines.png"
              alt="Product Image"
              width={160}
              height={500}
              className="absolute bottom-[-130px] left-[0] sm:bottom-[-93px] sm:left-[17%] sm:w-[160px] w-[125px]  z-[0]
                            transition-all duration-700 ease-in-out 
                            transform scale-100 
                            filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] 
                            hover:scale-110 
                            hover:drop-shadow-[30px_30px_30px_rgba(0,0,0,0.2)] 
                            text-transparent"
            />
            <Image
              src="/images/clean-implant.png"
              alt="Product Image"
              width={160}
              height={500}
              className="absolute rotate-[10deg] sm:block hidden  sm:bottom-[-30px] sm:left-[38%] w-[90px] z-[0] text-transparent"
            />
          </div>
          <div className="sm:mt-[106px] mt-[-25%] ml-[36%] sm:ml-[25%]">
            <div className="text-primary-600 text-[50px] sm:text-[70px] font-bold leading-[1.3]">
              BRIGHT
            </div>
            <p className="text-primary-600 text-[16px] font-[200]">
              {tProductLines("product_lines.line_1.title")}
            </p>
            <Link href="/supplements-ch">
              <Button
                variant="customOutline"
                size="custom16"
                rounded="rounded-full"
                className="!shadow-none mt-8 !font-[500]"
                iconPosition="right"
              >
                {tProductLines("product_lines.line_1.button")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <div ref={scrollRef} className={`
          transition-all duration-1000 ease-out
          ${isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
          }
        `}>
        <div className="sm:p-24 p-16 space-y-2 max-w-[55rem] mx-auto sm:px-4 px-6 text-left">
          <p
            className={`relative inline-block
      lg:pl-[124px] pl-0
      font-[500] text-[16px] tracking-wide uppercase text-mint
      before:content-none lg:before:content-[""]
      before:absolute lg:before:left-0 before:top-1/2
      before:-translate-y-1/2 before:w-[100px] before:h-[1px]
      before:bg-[#3aa194] lg:before:block before:hidden
    `}
          >
            {tProductLines("product_lines.line_1.modelLines")}
          </p>

          <p className="leading-[1.4] tracking-[-.96px] font-extralight text-primary-600  mx-auto max-w-prose text-[clamp(20px,calc(-37.2307692308px_+_.0576923077_*_100vw),32px)]">
            {tProductLines("product_lines.line_1.modelLinesDescription")}
          </p>
        </div>
      </div>
      <section
        className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      >
        <div className="container-dental text-center bg-[linear-gradient(180deg,#fff_58.33%,#fff0)] pb-[200px] pt-[200px]">
          {/* Eyebrow */}
          <p className="text-mint tracking-wide font-[400] text-sm sm:text-base">
            {tProductLines("product_lines.line_1.premiumCeramicImplants")}
          </p>

          {/* Heading */}
          <h1
            className="
            font-heading font-bold uppercase text-primary-600
            leading-[0.9]
            text-[clamp(56px,9vw,144px)]
            mt-2
          "
          >
            BRIGHT
          </h1>

          {/* Description */}
          <p
            className="
          mx-auto max-w-2xl
          text-primary-600/85 font-extralight
          leading-relaxed
          text-[clamp(16px,2vw,16px)]
          mt-6 px-[32px]
        "
          >
            {tProductLines("product_lines.line_1.premiumCeramicImplantsDescription")}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/supplements-ch">
              <Button
                variant="customOutline"
                size="custom16"
                rounded="rounded-full"
                className="!font-[400]"
                iconPosition="right"
              >
                {tProductLines("product_lines.line_1.brightCatalog")}
              </Button>
            </Link>

            <Link href="/supplements-ch">
              <Button
                variant="customOutline"
                size="custom16"
                rounded="rounded-full"
                className="!font-[400]"
              >
                {tProductLines("product_lines.line_1.implantShop")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative implants (overflow-hidden ile taşma yok) */}
        <Image
          src="/images/Bright2-2-455.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          width={200}
          height={560}
          className="
          pointer-events-none select-none
          absolute right-[-7px] sm:right-[24px] top-[35px] sm:top-[75px]
          w-[120px] sm:w-[180px] md:w-[200px]
        "
          priority
          sizes="(min-width:1024px) 220px, (min-width:640px) 180px, 120px"
        />

        <Image
          src="/images/Bright1-2-455.png"
          alt=""
          aria-hidden="true"
          draggable={false}
          width={300}
          height={600}
          className="
          pointer-events-none select-none
          absolute left-[0] sm:left-[110px] bottom-[25px] sm:bottom-[94px]
          w-[150px] sm:w-[200px] md:w-[200px]
        "
          sizes="(min-width:1024px) 260px, (min-width:640px) 200px, 150px"
        />

        {/* (Opsiyonel) Sağ-alt köşe rozet/stamp için buraya ekstra Image ekleyebilirsin */}

        
      </section>
      <section className="pt-48 mb-20 p-6">
        <div className="product-lines mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          <div className="flex sm:flex-row flex-col gap-0 sm:gap-10 bg-white">
            <div className="sm:w-[204px] w-full">
              <div className="flex items-center flex-col justify-around h-auto  sm:h-[calc(100%+123px)] mt-[-123px]  bg-[linear-gradient(180deg,#e0e0e0,#e0e0e0_18.75%,#e0e0e000)]">
               <div className="mt-[67px] lg:mt-[-115px]">
                 <Image src="/images/1.2.png" alt="" width={90} height={230} />
               </div>
               <div>
                 <Image src="/images/CleanImplant.svg" alt="" width={76} height={76} />
               </div>
              </div>
            </div>
            <div className="flex-1 pl-8 sm:pl-0 pt-18 sm:pr-14 pr-11 pb-8">
              <div className="">
                <h2>
                  <strong className="font-bold text-[26px] sm:text-[40px] text-primary-600">SDS 1.2</strong>
                  <span className="text-[26px] sm:text-[40px] block text-sm text-primary-600">One-piece</span>
                  <p className="text-[16px] mt-8 font-extralight text-primary-600">The one-piece dental implants are indicated for immediate loading when good primary stability is achieved and with appropriate occlusal loading.</p>
                </h2>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-8">
                <div className="text-[16px] font-bold text-primary-600">Diameter</div>
                <div className="text-[16px] font-extralight text-primary-600">
                  <p>3.25 mm</p>
                  <p>3.8 mm</p>
                  <p>4.6 mm</p>
                  <p>5.4 mm</p>
                </div>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-5">
                <div className="text-[16px] font-bold text-primary-600">Lengths</div>
                <div className="text-[16px] font-extralight text-primary-600">
                  <p>8 mm</p>
                  <p>11 mm</p>
                  <p>14 mm</p>
                  <p>17 mm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ kolon */}
          <div className="flex sm:flex-row flex-col gap-0 sm:gap-10 bg-white mt-[5.375rem]">
            <div className="sm:w-[204px] w-full">
              <div className="flex items-center flex-col justify-around h-auto  sm:h-[calc(100%+123px)] mt-[-123px]  bg-[linear-gradient(180deg,#e0e0e0,#e0e0e0_18.75%,#e0e0e000)]">
               <div className="mt-[67px] lg:mt-[-115px]">
                 <Image src="/images/1.2.png" alt="" width={90} height={230} />
               </div>
               <div>
                 <Image src="/images/CleanImplant.svg" alt="" width={76} height={76} />
               </div>
              </div>
            </div>
            <div className="flex-1 pl-8 sm:pl-0 pt-18 sm:pr-14 pr-11 pb-8">
              <div className="">
                <h2>
                  <strong className="font-bold text-[26px] sm:text-[40px] text-primary-600">SDS 2.2</strong>
                  <span className="text-[26px] sm:text-[40px] block text-sm text-primary-600">two-piece</span>
                  <p className="text-[16px] mt-8 font-extralight text-primary-600">The two-piece dental implants are indicated for transgingival healing. The implants are indicated for immediate loading when good primary stability is achieved and with appropriate occlusal loading.</p>
                </h2>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-8">
                <div className="text-[16px] font-bold text-primary-600">Diameter</div>
                <div className="text-[16px] font-extralight text-primary-600">
                  <p>3.8 mm</p>
                  <p>4.6 mm</p>
                  <p>5.4 mm</p>
                  <p>7.0 mm</p>
                </div>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-5">
                <div className="text-[16px] font-bold text-primary-600">Lengths</div>
                <div className="text-[16px] font-extralight text-primary-600">
                  <p>6 mm</p>
                  <p>8 mm</p>
                  <p>11 mm</p>
                  <p>14 mm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
