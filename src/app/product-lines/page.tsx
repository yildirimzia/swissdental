"use client";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { useProductLinesTranslation } from "@/hooks/useTranslation";
import { useScrollAnimation } from "../components/useScrollAnimation"; // Bu satırı güncelledik
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SdsAim from './SdsAim'
import SdsEducation from "./SdsEducation";
import TrainingCards from "./TrainingCards";

gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {
  const { t: tProductLines } = useProductLinesTranslation();
  const { ref: scrollRef, isVisible } = useScrollAnimation(0.6); // Destructuring olarak kullanım
  const { ref: warrantyRef, isVisible: warrantyVisible } =
    useScrollAnimation(0.3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // Sol taraftaki background image
  const textRef = useRef<HTMLDivElement>(null); // Sağ taraftaki text content
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoImageRef = useRef<HTMLDivElement>(null); // Video alanı
  const videoTextRef = useRef<HTMLDivElement>(null); // Text alanı

  // Video useEffect'ini mevcut GSAP useEffect'inden sonra ekleyin:
  useEffect(() => {
    if (
      !videoSectionRef.current ||
      !videoImageRef.current ||
      !videoTextRef.current
    )
      return;

    // Video section animasyonu için başlangıç pozisyonları
    if (isMobile) {
      // MOBİLDE: Her iki element de aşağıdan yukarı
      gsap.set(videoImageRef.current, {
        y: 150, // Video daha aşağıdan başla
        opacity: 0,
      });

      gsap.set(videoTextRef.current, {
        y: 100, // Text aşağıdan başla
        opacity: 0,
      });
    } else {
      // DESKTOP'TA: Video sağdan, text aşağıdan
      gsap.set(videoImageRef.current, {
        x: 400, // Video daha sağdan başla
        opacity: 0,
      });

      gsap.set(videoTextRef.current, {
        y: 150, // Text daha aşağıdan başla
        opacity: 0,
      });
    }

    // Video section animasyon timeline
    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: videoSectionRef.current,
        start: "top 60%", // Daha geç tetiklenir
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    if (isMobile) {
      // MOBİL ANIMASYON: Text önce, video sonra
      videoTimeline.to(videoTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 2, // Çok daha yavaş
        ease: "power3.out",
      });

      videoTimeline.to(
        videoImageRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 2, // Çok daha yavaş
          ease: "power3.out",
        },
        "-=1.2" // 1.2 saniye overlap
      );
    } else {
      // DESKTOP ANIMASYON: Text önce, video sonra
      videoTimeline.to(videoTextRef.current, {
        y: 0,
        opacity: 1,
        duration: 2, // Çok daha yavaş
        ease: "power3.out",
      });

      videoTimeline.to(
        videoImageRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 2, // Çok daha yavaş
          ease: "power3.out",
        },
        "-=1.2" // 1.2 saniye overlap
      );
    }

    // Cleanup fonksiyonu
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === videoSectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Video yüklendiğinde otomatik başlat
      const handleCanPlay = () => {
        video.play().catch((error) => {
          console.log("Video autoplay failed:", error);
        });
      };

      video.addEventListener("canplay", handleCanPlay);

      // Component unmount'ta temizle
      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, []);

  // Mobil kontrol
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // GSAP Animasyon
  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // Başlangıç pozisyonları - mobilde farklı
    if (isMobile) {
      // MOBİLDE: Her iki element de aşağıdan yukarı
      gsap.set(imageRef.current, {
        y: 100, // Y ekseninde aşağıdan başla
        opacity: 0,
      });

      gsap.set(textRef.current, {
        y: 100, // Aşağıdan başla
        opacity: 0,
      });
    } else {
      // DESKTOP'TA: Resim soldan, text aşağıdan
      gsap.set(imageRef.current, {
        x: -300, // Soldan başla
        opacity: 0,
      });

      gsap.set(textRef.current, {
        y: 120, // Aşağıdan başla
        opacity: 0,
      });
    }

    // Animasyon timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse", // scrub kaldırıldı
      },
    });

    if (isMobile) {
      // MOBİL ANIMASYON: Her ikisi de aşağıdan yukarı
      timeline.to(imageRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5, // Daha yavaş
        ease: "power2.out",
      });

      timeline.to(
        textRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.5, // Daha yavaş
          ease: "power2.out",
        },
        "-=1" // 1 saniye overlap
      );
    } else {
      // DESKTOP ANIMASYON: Resim soldan, text aşağıdan
      timeline.to(imageRef.current, {
        x: 0,
        opacity: 1,
        duration: 1.5, // Daha yavaş
        ease: "power2.out",
      });

      timeline.to(
        textRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.5, // Daha yavaş
          ease: "power2.out",
        },
        "-=1" // 1 saniye overlap
      );
    }

    // Cleanup fonksiyonu
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [isMobile]);

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
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
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
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
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
      <section className="pt-48 mb-20 p-6">
        <div className="product-lines mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          <div className="flex sm:flex-row flex-col gap-0 sm:gap-10 bg-white">
            <div className="sm:w-[204px] w-full">
              <div className="flex items-center flex-col justify-around h-auto  sm:h-[calc(100%+123px)] mt-[-123px]  bg-[linear-gradient(180deg,#e0e0e0,#e0e0e0_18.75%,#e0e0e000)]">
                <div className="mt-[67px] lg:mt-[-115px]">
                  <Image src="/images/1.2.png" alt="" width={90} height={230} />
                </div>
                <div>
                  <Image
                    src="/images/CleanImplant.svg"
                    alt=""
                    width={76}
                    height={76}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 pl-8 sm:pl-0 pt-18 sm:pr-14 pr-11 pb-8">
              <div className="">
                <h2>
                  <strong className="font-bold text-[26px] sm:text-[40px] text-primary-600">
                    SDS 1.2
                  </strong>
                  <span className="text-[26px] sm:text-[40px] block text-sm text-primary-600">
                    One-piece
                  </span>
                  <p className="text-[16px] mt-8 font-extralight text-primary-600">
                    The one-piece dental implants are indicated for immediate
                    loading when good primary stability is achieved and with
                    appropriate occlusal loading.
                  </p>
                </h2>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-8">
                <div className="text-[16px] font-bold text-primary-600">
                  Diameter
                </div>
                <div className="text-[16px] font-extralight text-primary-600">
                  <p>3.25 mm</p>
                  <p>3.8 mm</p>
                  <p>4.6 mm</p>
                  <p>5.4 mm</p>
                </div>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-5">
                <div className="text-[16px] font-bold text-primary-600">
                  Lengths
                </div>
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
                  <Image
                    src="/images/CleanImplant.svg"
                    alt=""
                    width={76}
                    height={76}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 pl-8 sm:pl-0 pt-18 sm:pr-14 pr-11 pb-8">
              <div className="">
                <h2>
                  <strong className="font-bold text-[26px] sm:text-[40px] text-primary-600">
                    SDS 2.2
                  </strong>
                  <span className="text-[26px] sm:text-[40px] block text-sm text-primary-600">
                    two-piece
                  </span>
                  <p className="text-[16px] mt-8 font-extralight text-primary-600">
                    The two-piece dental implants are indicated for
                    transgingival healing. The implants are indicated for
                    immediate loading when good primary stability is achieved
                    and with appropriate occlusal loading.
                  </p>
                </h2>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-8">
                <div className="text-[16px] font-bold text-primary-600">
                  Diameter
                </div>
                <div className="text-[16px] font-extralight text-primary-600">
                  <p>3.8 mm</p>
                  <p>4.6 mm</p>
                  <p>5.4 mm</p>
                  <p>7.0 mm</p>
                </div>
              </div>
              <div className="grid w-full grid-cols-[41%_59%] mt-5">
                <div className="text-[16px] font-bold text-primary-600">
                  Lengths
                </div>
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

      <section className="py-20">
        {/* Üst metin alanı */}
        <div className="container-dental max-w-[1320px]">
          <h3 className="text-center tracking-[.05em] font-bold text-primary-500  text-[12px] sm:text-[14px]">
            DIFFERENT SPECIAL SHAPES
          </h3>

          <p className="mb-16 mx-auto mt-6 max-w-[860px] text-center text-primary-600 text-[16px] leading-7 font-extralight  w-full sm:w-2/4">
            With over 50 different special shapes, you can be sure that we have
            the right implant for your treatment cases. This incredible variety
            is unique in ceramic implantology and ensures optimal care for your
            patients.
          </p>
        </div>

        {/* Kartlar */}
        <div className="container-dental max-w-[1320px] mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 sm:gap-y-16 gap-y-8">
            {/* Item */}
            <article className="text-center">
              <div className="mx-auto relative">
                {/* Placeholder görseli: kendi ikonunu buraya koy */}
                <Image
                  src="/images/product-lines/Oval.png"
                  alt="Oval implant"
                  width={706}
                  height={492}
                />
              </div>

              <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
                Oval
              </h4>
              <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
                Series
              </span>

              <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
                The implant series ‘Oval’ specifically aids in centrally
                supplying the premolars maxillary/mandibular and molars
                maxillary/mandibular.
              </p>
            </article>

            {/* Item */}
            <article className="text-center">
              <div className="mx-auto relative">
                <Image
                  src="/images/product-lines/Balcony.png"
                  alt="Balcony implant"
                  width={706}
                  height={492}
                />
              </div>

              <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
                Balcony
              </h4>
              <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
                Series
              </span>

              <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
                The ‘Balcony’ enhances the emergence profile, facilitating
                targeted provision for premolars, especially upper premolars,
                and maxillary/mandibular molars.
              </p>
            </article>

            {/* Item */}
            <article className="text-center">
              <div className="mx-auto relative">
                <Image
                  src="/images/product-lines/Short.png"
                  alt="Short implant"
                  width={706}
                  height={492}
                />
              </div>

              <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
                Short
              </h4>
              <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
                Series
              </span>

              <p className="mt-4 text-primary-600 text-[15px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
                The ‘Short’ implant series is specifically designed to address
                cases with reduced vertical bone availability.
              </p>
            </article>

            {/* Item */}
            <article className="text-center">
              <div className="mx-auto relative">
                <Image
                  src="/images/product-lines/Sinus.png"
                  alt="Sinus implant"
                  width={706}
                  height={492}
                />
              </div>

              <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
                Sinus
              </h4>
              <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
                Series
              </span>

              <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
                Biological sinus lift without the use of bone replacement
                material, specifically designed for external sinus lift.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        ref={warrantyRef}
        className="flex sm:justify-around sm:flex-row flex-col-reverse items-center"
      >
        <div className="items-center gap-12 flex">
          {/* Sol taraf */}
          <div
            className={`
            transition-all duration-1000 ease-out p-8
            ${
              warrantyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
          >
            <h2 className="text-primary-600 text-[26px] mb-11 sm:text-[40px] font-[400] tracking-[-0.03em] leading-[1.2]">
              Lifetime Warranty
            </h2>
            <p className="mt-4 text-primary-600 text-[16px] font-extralight leading-7 mb-8">
              Claims processing for SDS implants and abutments
            </p>

            <Link href="/implants">
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
                    className="inline-block"
                  >
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                }
                iconPosition="right"
              >
                Warranty conditions
              </Button>
            </Link>
          </div>
        </div>

        {/* Sağ taraf: container dışında, full sağa yaslı */}
        <div
          className={`
          h-full sm:w-1/2 w-full flex items-center justify-center
          transition-all duration-1000 ease-out
          ${
            warrantyVisible
              ? "opacity-100 sm:translate-x-0 translate-y-0"
              : "opacity-0 sm:translate-x-8 translate-y-8"
          }
        `}
        >
          <Image
            src="/images/product-lines/lifetime-warranty.png"
            alt="Lifetime Warranty Logo"
            width={851}
            height={800}
            className="object-contain"
          />
        </div>
      </section>
      <section
        ref={sectionRef}
        className="bg-white text-black relative overflow-hidden"
      >
        <div className="relative z-20 min-h-screen">
          <div className="flex items-center flex-col md:flex-row md:justify-between 2xl:justify-around ">
            {/* Left Content - Background Image */}
            <div
              ref={imageRef}
              className="order-2 lg:order-1 lg:h-[940px] lg:w-[610px] h-[546px] w-[430px]"
              style={{
                backgroundImage:
                  "url(/images/product-lines/productlinesbg.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                zIndex: 1,
              }}
            />

            {/* Right Content - Text */}
            <div
              ref={textRef}
              className=" lg:py-0 lg:px-0 py-[16px] px-[24px] my-[46px] lg:my-[0]  space-x-6 order-2 lg:order-1  p-[50px]  z-10"
            >
              <div className="space-y-2">
                <p
                  className={`relative
                    lg:pl-[124px] pl-[0] 
                    font-[200]
                    text-[16px]
                    tracking-wide 
                    uppercase
                    text-mint
                    before:content-none lg:before:content-[""]
                    before:absolute
                    before:left-0
                    before:top-1/2
                    before:-translate-y-1/2
                    before:w-[100px]
                    before:h-[1px]
                    before:bg-[#3aa194]
                  `}
                >
                  Certified
                </p>
                <h1 className="lg:text-[clamp(36px,calc(-49.8461538462px+0.0865384615*100vw),40px)] text-[clamp(26px,calc(-49.8461538462px+0.0865384615*100vw),26px)]  leading-[1.2] tracking-[-0.03em] text-primary-600 font-[300]">
                  Cleanest Implant
                  <strong className="font-bold block text-[26px] lg:text-[40px] text-primary-600">
                    Company in the World
                  </strong>
                </h1>
              </div>

              <p className="lg:text-[16px] text-[16px] font-[400] lg:w-[80%] w-full text-primary-600 mt-[2.875rem] max-w-[42rem]">
                Only implant systems that meet the highest standards of purity
                are awarded the ‘Trusted Quality’ mark by the CleanImplant
                Foundation. As the only implant manufacturer worldwide (as of
                07/2022), SDS SWISS DENTAL SOLUTIONS has earned this award for
                the BRIGHT ceramic implant series, both at the production and
                manufacturer levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* video content */}
      <section
        ref={videoSectionRef}
        className=" text-black relative overflow-hidden"
      >
        <div className="relative z-20 min-h-screen">
          <div className="flex items-center flex-col-reverse sm:flex-col md:flex-row md:justify-between 2xl:justify-around ">
            {/* Left Content - Background Image */}
            <div
              ref={videoTextRef}
              className="text-white sm:ml-[60px] lg:py-0 lg:px-0 py-[16px] px-[24px] my-[46px] lg:my-[0]  space-x-6 order-2 lg:order-1 p-[50px]  z-10"
            >
              <div className="space-y-2">
                <p
                  className={`relative
                    lg:pl-[124px] pl-[0] 
                    font-[200]
                    text-[16px]
                    tracking-wide 
                    uppercase
                    text-mint
                    before:content-none lg:before:content-[""]
                    before:absolute
                    before:left-0
                    before:top-1/2
                    before:-translate-y-1/2
                    before:w-[100px]
                    before:h-[1px]
                    before:bg-[#3aa194]
                  `}
                >
                  SDSBOX
                </p>
                <h1 className="lg:text-[clamp(36px,calc(-49.8461538462px+0.0865384615*100vw),40px)] text-[clamp(26px,calc(-49.8461538462px+0.0865384615*100vw),26px)]  leading-[1.2] tracking-[-0.03em] text-primary-600 font-[300]">
                  <strong className="font-bold block text-[26px] lg:text-[40px] text-primary-600">
                    Ceramic implants
                  </strong>
                  as simple as ever.
                </h1>
              </div>

              <p className="lg:text-[16px] mb-[46px] text-[16px] font-[400] lg:w-[80%] w-full text-primary-600 mt-[2.875rem] max-w-[42rem]">
                Get off to a smart and clear start with our implant solutions
                and benefit from our SDS Planning Service. With the SDS Planning
                Service, you get the components you need for your implantation.
              </p>

              <Link href="/implants">
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
                      className="inline-block"
                    >
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                      <path d="M11 13l9 -9"></path>
                      <path d="M15 4h5v5"></path>
                    </svg>
                  }
                  iconPosition="right"
                >
                  Open SDSBox
                </Button>
              </Link>
            </div>

            {/* Right Content - Text */}
            <div
              ref={videoImageRef}
              className="order-2 lg:order-1 w-full max-w-full h-auto lg:w-[1037px] lg:h-[940px]"
            >
              <video
                className="img-fluid w-full h-full object-cover"
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
              >
                <source
                  src="https://sds.directus.app/assets/b702fdbb-ea61-4774-9240-3a9ae4a9a0fd.MP4"
                  type="video/mp4"
                />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 mb-24">
      <div className="container-dental max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 items-start">
          
          {/* Simple */}
          <article className="text-center max-w-[520px] mx-auto">
            {/* Icon */}
            <div className="mx-auto mb-6  flex items-center justify-center">
              <Image
                src="/images/product-lines/Easy.png" 
                alt="Simple icon"
                width={354}
                height={169}
              />
            </div>

            <h3 className="text-primary-600 text-[28px] sm:text-[34px] font-bold leading-[1.2]">
              Simple
            </h3>
            <p className="mt-2 text-primary-500 text-[16px] font-extralight">
              Just a few clicks
            </p>
            <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[480px] mx-auto">
              Plan your treatment online. The configurator helps you to put
              together all the necessary components.
            </p>
          </article>

          {/* Fast */}
          <article className="text-center max-w-[520px] mx-auto">
            {/* Icon */}
            <div className="mx-auto mb-6  flex items-center justify-center">
              <Image
                src="/images/product-lines/Lightning.png" 
                alt="Fast icon"
                width={354}
                height={169}
              />
            </div>

            <h3 className="text-primary-600 text-[28px] sm:text-[34px] font-bold leading-[1.2]">
              Fast
            </h3>
            <p className="mt-2 text-primary-500 text-[16px] font-extralight">
              We handle the planning for you
            </p>
            <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[480px] mx-auto">
              Thanks to the additional drilling template it contains, the
              implants can be easily positioned perfectly.
            </p>
          </article>
        </div>
      </div>
    </section>

    <SdsAim />
    <SdsEducation />
    <TrainingCards />

  </>
  );
}
