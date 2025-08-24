import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { useProductLinesTranslation } from "@/hooks/useTranslation";
import { useScrollAnimation } from "../components/useScrollAnimation";
import React, { useState, useEffect, useRef } from "react";

function Main() {
  const { t: tProductLines } = useProductLinesTranslation();
  const { ref: scrollRef, isVisible } = useScrollAnimation(0.2);
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
      <div
        ref={scrollRef}
        className={`
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
      >
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
    </>
  );
}

export default Main;
