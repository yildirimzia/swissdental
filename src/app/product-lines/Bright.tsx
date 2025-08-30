"use client";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { useProductLinesTranslation } from "@/hooks/useTranslation";
import React, { useState, useEffect, useRef } from "react";

function Bright() {
  const { t: tProductLines } = useProductLinesTranslation();

  return (
    <section id="bright" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
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
          {tProductLines(
            "product_lines.line_1.premiumCeramicImplantsDescription"
          )}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link href="https://sds.directus.app/assets/5b953073-c3b1-4bf0-8999-ce96df4b3821/BRIGHT-Product-Catalog.pdf">
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

          <Link href="https://portal.swissdentalsolutions.com/en/">
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
    </section>
  );
}

export default Bright;
