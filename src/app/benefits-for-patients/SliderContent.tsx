"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";

// Bu örnek veri yapısı – sen kendi kaynaklarından doldurabilirsin
type Testimonial = {
  imgSrc: string;
  name: string;
  country: string;
  quote: string;
  cta?: string;
  href?: string;
};

const ExternalLinkIcon = () => (
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
    className="d-inline-block ms-1 mt-n1-4"
  >
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
    <path d="M11 13l9 -9"></path>
    <path d="M15 4h5v5"></path>
  </svg>
);

const DATA: Testimonial[] = [
  {
    imgSrc: "/images/benefits-for-patients/bergmann_johannes_600.jpg", // DEĞİŞTİR
    name: "JOHANNES BERGMANN",
    country: "GERMANY",
    quote:
      "Only four weeks after the operation I was able to participate in the `Engadiner Ski Marathon`",
    cta: "Read more",
    href: "https://www.swiss-biohealth.com/en/testimonials/johannes-bergmann",
  },
  {
    imgSrc: "/images/benefits-for-patients/BerryMartha_600.jpg", // DEĞİŞTİR
    name: "MARTHA BERRY",
    country: "USA",
    quote:
      "I´ve resumed playing tennis (competitively) for the first time in even a year. I´ve returned to work fully and have resumed a full social life.",
    cta: "Read more",
    href: "https://www.swiss-biohealth.com/en/testimonials/martha-berry",
  },
  {
    imgSrc: "/images/benefits-for-patients/King-Dana-768x768.jpg", // 3. slide ekledim
    name: "Catherine Stewart",
    country: "SWITZERLAND",
    quote:
      "My new teeth and smile are absolutely beautiful. The precision are care that went into creating this perfect smile were nothing short of AMAZING!",
    cta: "Read more",
    href: "https://www.swiss-biohealth.com/en/testimonials/catherine-stewart",
  },
  {
    imgSrc: "/images/benefits-for-patients/Catherine-Steward.jpg", // 3. slide ekledim
    name: "Dana King",
    country: "USA",
    quote:
      "This is the most amazing medical care that I Have ever experienced from the surgeons to the adjucent therapies and even the food. It was an over all wonderful experience.",
    cta: "Read more",
    href: "https://www.swiss-biohealth.com/en/testimonials/dana-king",
  },
];

const LeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#3aa194] hover:text-[#2d7a6e] transition-colors"
  >
    <path d="M15 6l-6 6l6 6" />
  </svg>
);

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#3aa194] hover:text-[#2d7a6e] transition-colors"
  >
    <path d="M9 6l6 6l-6 6" />
  </svg>
);

export default function SatisfiedPatientsSlider() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const handlePrevClick = () => {
    swiperInstance?.slidePrev();
  };

  const handleNextClick = () => {
    swiperInstance?.slideNext();
  };

  return (
    <section className="relative bg-[#f6f6f6] py-10 md:py-20 sm:pb-44 overflow-hidden pb-32">
      {/* Container'a üst boşluk ekledik resimlerin taşması için */}
      <div className="pt-24 md:pt-32">
        {/* Kenar fade – sol */}
        <div className="sm:block hidden pointer-events-none absolute left-0 top-0 h-full w-[420px] z-20 bg-gradient-to-r from-[#f6f6f6] to-transparent" />
        {/* Kenar fade – sağ */}
        <div className="sm:block hidden pointer-events-none absolute right-0 top-0 h-full w-[420px] z-20 bg-gradient-to-l from-[#f6f6f6] to-transparent" />

        <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6">
          <h2 className="text-center text-[16px]  text-teal-600 font-[300] uppercase mb-10">
            Satisfied Patients
          </h2>

          {/* Swiper container'a overflow visible ekledik */}
          <div className=" mt-52">
            <Swiper
              modules={[Navigation]}
              className="patients-swiper "
              slidesPerView={2}
              slidesPerGroup={1}
              spaceBetween={48}
              speed={600}
              grabCursor
              centeredSlides={false}
              loop={false}
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 40 },
                1440: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 48 },
              }}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {DATA.map((item, index) => {
                const isEven = index % 2 === 0; // 0,2,4... sol; 1,3,5... sağ

                return (
                  <SwiperSlide key={index} className="!h-auto  ">
                    {/* Her slide'ın tam düzeni - overflow visible ekledik */}
                    <div className="relative flex sm:min-h-[635px] min-h-[388px] ">
                      {/* FOTOĞRAF – üstte, kartın dışına taşır */}
                      <div
                        className={[
                          "absolute z-10",
                          // Resmi daha yukarı çıkardık ve ortaladık
                          "-top-24 md:-top-[192px]",
                          "left-1/2 transform -translate-x-1/2",
                        ].join(" ")}
                      >
                        {/* Image container'ı düzelttik */}
                        <div className="w-[280px] md:w-[362px] h-[280px] md:h-[362px] relative overflow-hidden ">
                          <Image
                            src={item.imgSrc}
                            alt={`${item.name} testimonial`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 228px, 362px"
                          />
                        </div>
                      </div>

                      {/* KART */}
                      <article
                        className={[
                          "bg-white   relative text-center z-0 mt= pl-[80px]",
                          "max-w-[605px] w-full",
                          // Görselin taşıntısını temizlemek için üst padding
                          "pt-40 md:pt-48",
                          // İç pedler
                          "px-8 md:px-12 pb-12",
                          // Kartı ortala
                          "mx-auto",
                        ].join(" ")}
                      >
                        {/* İsim / ülke */}
                        <p className="text-[12px] tracking-[.15em] text-[#3aa194] uppercase mb-4 mt-11">
                          {item.name}, {item.country}
                        </p>

                        {/* Alıntı */}
                        <h3 className="sm:min-h-60 min-h-[160px] text-primary-600 text-[20px] md:text-[34px] font-bold leading-[1.2]">
                          "{item.quote}"
                        </h3>

                        {/* CTA */}
                        {item.cta && item.href && (
                          <Link href={item.href} className="">
                            <Button
                              variant="customOutline"
                              size="custom16"
                              rounded="rounded-full"
                              className="!shadow-none mt-8 !font-[400] cursor-pointer"
                              icon={<ExternalLinkIcon />}
                              iconPosition="right"
                            >
                              Read More
                            </Button>
                          </Link>
                        )}
                      </article>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/* Navigation buttons */}
          <div className=" absolute md:flex bottom-[-60px] 2xl:bottom-[-50px] sm:bottom-[-130px] right-[30%] sm:right-[80px] gap-3 z-10 translate-x-[-25%] translate-y-[5%]   md:translate-x-0 md:translate-y-0 ">
            <button
              onClick={handlePrevClick}
              className={`cursor-pointer transition-opacity ${
                isBeginning ? "opacity-30" : "hover:opacity-80"
              }`}
              type="button"
              disabled={isBeginning}
            >
              <LeftArrow />
            </button>

            <button
              onClick={handleNextClick}
              className={`cursor-pointer transition-opacity ${
                isEnd ? "opacity-30" : "hover:opacity-80"
              }`}
              disabled={isEnd}
              type="button"
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx global>{`
        .patients-swiper {
          overflow: visible !important;
        }

        .patients-swiper .swiper-wrapper {
          align-items: stretch;
        }

        .patients-swiper .swiper-slide {
          height: auto;
          overflow: visible !important;
        }

        /* Swiper'ın default navigation butonlarını gizle */
        .patients-swiper .swiper-button-next,
        .patients-swiper .swiper-button-prev {
          display: none !important;
        }

        /* Custom button'ları görünür yap */
        .custom-swiper-button-prev,
        .custom-swiper-button-next {
          display: flex !important;
          align-items: center;
          justify-content: center;
          width: auto;
          height: auto;
        }
      `}</style>
    </section>
  );
}
