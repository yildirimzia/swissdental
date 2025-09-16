"use client";

import Link from "next/link";
import Button from "../components/Button";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Episode() {
  return (
    // ÖNEMLİ: overflow-visible ki görsel yukarı taşabilsin
    <section className="bg-white  overflow-visible mb-[200px]">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="text-mint font-[400] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            1. Sezon, 1. Bölüm
          </p>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
            Dr. Karl Ulrich Volz ile Seramik İmplant Pazarı{" "}
          </h2>

          <Link
            href="https://open.spotify.com/episode/4Ot0hFswaDYYFKrhRrad9U?si=A-k7XV7LSL-VGydRIr2OIQ"
            target="_blank"
            className=""
          >
            <Button
              variant="primary"
              size="lg"
              rounded="rounded-[100px]"
              className="text-[16px] font-[400]"
              icon={<ExternalLinkIcon />}
              iconPosition="right"
            >
              Play
            </Button>
          </Link>
        </div>

        {/* Sağ: Background image */}
        <div
          className="order-1 lg:order-2 block w-full bg-no-repeat bg-cover 
             h-[546px] sm:h-[920px] 
             -translate-y-0 sm:-translate-y-30 bg-center"
          style={{
            backgroundImage: "url(/images/podcast/SDSPOD-EN.jpg)",
          }}
        ></div>
      </div>
    </section>
  );
}
