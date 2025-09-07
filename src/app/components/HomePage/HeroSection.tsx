"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHomeTranslation } from "@/hooks/useTranslation";

// GSAP plugin'ini register et
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [shouldDetach, setShouldDetach] = useState(false);
  const [removeHidden, setRemoveHidden] = useState(false);

  // Translation hook
  const { t, isLoaded } = useHomeTranslation();

  // GSAP animasyonları için ref
  const implantRef = useRef<HTMLDivElement>(null);
  const secondImplantRef = useRef<HTMLImageElement>(null);
  const brightImageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Benefits array'ini çeviri dosyasından al
  const benefits = {
      "0": "Yüksek Derecede Biyouyumlu",
      "1": "Dayanıklı ve Sağlam",
      "2": "Anında İmplantasyon İmkanı",
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Background attachment'ın kalkması gereken nokta
      const detachPoint = 2200;
      setShouldDetach(currentScrollY > detachPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (implantRef.current) {
      // Başlangıç değerlerini ayarla
      gsap.set(implantRef.current, {
        rotation: 15.2201,
        xPercent: -8, // translate-x-[2%]
        yPercent: -10, // translate-y-[-29%]
        x: -0.0002, // translate3d x değeri
        y: 0.0003, // translate3d y değeri
        z: 0, // translate3d z değeri
      });

      // İlk timeline - Hero'dan BRIGHT'a kadar
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: isMobile ? "+=1047" : "+=870", // 850px scroll boyunca
          scrub: true,
          pin: implantRef.current,
          anticipatePin: 1,
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      // Container'ı hareket ettir
      heroTimeline.to(implantRef.current, {
        duration: 1,
        // y: 490 * 0.3, // scroll mesafesinin %30'i kadar
        yPercent: 25,
        x: isMobile ? -100 : -200, // Sağa doğru hareket
        ease: "linear",
      });

      // Rotation animasyonu paralel olarak
      heroTimeline.to(
        implantRef.current,
        {
          duration: 1,
          rotation: 0, // 16.9998'den 0'a
          ease: "linear",
        },
        "-=1"
      ); // Aynı anda başla
    }

    if (secondImplantRef.current) {
      // Başlangıçta opaklığını 0 yap
      gsap.set(secondImplantRef.current, { opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: secondImplantRef.current, // Bu görselin kendisi tetikleyici olsun
            start: "top center", // Görselin üst kısmı viewport'un ortasına geldiğinde başla
            end: "center center", // Görselin ortası viewport'un ortasına geldiğinde bitir
            scrub: true, // Kaydırma ile senkronize et
            toggleActions: "play none none reverse",
          },
        })
        .to(secondImplantRef.current, {
          opacity: 1,
          duration: 0.5, // Opaklık animasyonunun süresi (scrub true olduğu için bu süre görecelidir)
          ease: "power2.inOut",
        });
    }

    if (brightImageRef.current) {
      const brightImageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: brightImageRef.current, // İkinci section
          start: "top 10%",
          end: isMobile ? "+=1200" : "+=700",
          scrub: true,
          pin: brightImageRef.current, // BRIGHT resminin kapsayıcı div'ini sabitle
          pinSpacing: false,
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
          onEnter: () => {
            setRemoveHidden(true);
            console.log("2 bölüme geçildi");
          },
          onLeaveBack: () => {
            setRemoveHidden(false);
            console.log("1 bölüme geçildi");
          },
        },
      });

      // Asıl Bright Image etiketini yakalıyoruz
      const actualBrightImageElement =
        brightImageRef.current.querySelector("img");
      if (!actualBrightImageElement) {
        // img etiketi bulunamazsa bu bloğu çalıştırma
        console.warn(
          "GSAP: brightImageRef içinde img etiketi bulunamadı! BRIGHT animasyonu başlatılamıyor."
        );
        return;
      }

      brightImageTimeline.to(actualBrightImageElement, {
        duration: 1, // scrub olduğu için göreceli süre
        scale: isMobile ? 1.8 : 3, // Hedef ölçek (4 kat büyüt)
        rotation: isMobile ? -42 : -14, // Hedef rotasyon (-18 derece)
        x: isMobile ? 100.5 : 330.5, // Hedef X translate
        y: 0, // Hedef Y translate
        ease: "linear",
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

 

  return (
    <section className="relative min-h-screen overflow-hidden lg:pb-[275px] pb-[0]">
      {/* Background with CSS background-attachment */}
      <div
        className={`lg:block hidden  inset-0 w-full h-full transition-all duration-500 ${
          shouldDetach ? "bg-scroll absolute" : "bg-fixed fixed"
        }`}
        style={{
          backgroundImage: "url(/images/mesh.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      >
        {/* Gradient Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-[125px] mt-[160px]">
            {/* Left Content */}
            <div className="text-white space-x-6 order-2 lg:order-1 backdrop-blur-sm bg-white/50 lg:backdrop-blur-none lg:bg-transparent p-[50px] lg:p-0 z-10">
              <div className="space-y-2">
                <p
                  className={`relative
                    lg:pl-[124px] pl-[0] 
                    font-[500]
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
                  SDS SWISS DENTAL SOLUTIONS
                </p>
                <h1 className="text-[clamp(36px,calc(-49.8461538462px+0.0865384615*100vw),54px)] leading-[1.125]  tracking-[-0.03em]  text-primary-600  font-light">
                 Seramik dental implantlarda dünya pazar lideri
                </h1>
              </div>

              <p className="lg:text-[20px] text-[18px] font-[400] lg:w-[80%] w-full text-primary-600 transform lg:translate-x-[120px] translate-x-[0] leading-8  mt-[2.875rem] max-w-[42rem]">
                Beyaz zirkonyum dioksitten üretilen SDS seramik dental implantlar biyouyumluluk, tolerans, sağlık ve estetik açısından en yüksek standartları karşılar.
              </p>

              <div className="pt-6 lg:translate-x-[120px] translate-x-0 mt-[1.2rem]">
                <Link href="/product-lines" className="">
                  <Button
                    variant="primary"
                    size="lg"
                    rounded="rounded-[100px]"
                    className="text-[16px]"
                  >
                    İmplantlara Git
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Implant Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div
                ref={implantRef}
                className="relative w-[182px] h-[310px] lg:w-full  lg:max-w-lg lg:h-auto transform"
              >
                <Image
                  src="/images/implant-img.png"
                  alt="Ceramic Dental Implant 1"
                  width={381}
                  height={600}
                  className="object-contain "
                  {...(removeHidden && { hidden: true })}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content Sections */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="text-white space-x-6 z-[100] backdrop-blur-sm bg-white/50 lg:backdrop-blur-none lg:bg-transparent order-2 lg:order-1 flex flex-col self-center mt-[245px] p-[50px] lg:p-0">
              <div className="space-y-2">
                <p
                  className={`relative
                    lg:pl-[124px] pl-[0] 
                    font-[500]
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
                  Ürün
                </p>
                <h1 className="text-[clamp(36px,calc(-49.8461538462px+0.0865384615*100vw),54px)] leading-[1.125] uppercase  tracking-[-0.03em] font-[700]  text-primary-600  ">
                  BRIGHT
                </h1>
              </div>

              <p className="lg:text-[20px] text-[18px] font-[400] lg:w-[80%] w-full text-primary-600  leading-8  mt-[2.875rem] max-w-[42rem]">
                BRIGHT premium implant serisi diş çekimi sonrası anında yerleştime için en optimal malzeme ve tasarım dikkate alınarak tasarlanmıştır.
              </p>

              <div className="pt-6  lg:mt-[1.2rem] mt-0">
                <Link href="/product-lines" className="">
                  <Button
                    variant="primary"
                    size="lg"
                    rounded="rounded-[100px]"
                    className="text-[16px]"
                  >
                    BRIGHT Ürün Serisine Git
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Implant Image */}
            <div className="flex justify-center lg:justify-end relative order-1 lg:order-2">
              <div
                ref={secondImplantRef}
                className="relative w-[182px] h-[310px] lg:w-full max-w-md lg:max-w-lg lg:ml-0 ml-24"
              >
                <Image
                  src="/images/Bright2-2-4555.png"
                  alt="Ceramic Dental Implant 2"
                  width={381}
                  height={600}
                  className="object-contain transform translate-x-[30%] translate-y-[16.9%] "
                  priority
                />
              </div>
              <div
                ref={brightImageRef}
                className="absolute  top-[17%] left-[-18%] w-full max-w-md lg:max-w-lg transform "
              >
                <Image
                  src="/images/Bright1-2-2560.png"
                  alt="Ceramic Dental Implant 3"
                  width={1200}
                  {...(!removeHidden && { hidden: true })}
                  height={1200}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="lg:block hidden absolute  top-0 left-0 bottom-0 w-[1020px] bg-white z-10 h-[119vh] transform translate-x-[-40%] translate-y-[0px]"></div>
        </div>
      </div>

      <div className="relative z-20 flex items-end  min-h-[930px] mt-40 lg:mt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-[50px] lg:p-0 backdrop-blur-sm bg-white/50 lg:backdrop-blur-none lg:bg-transparent ">
            {/* Left Content */}
            <div className="text-white space-x-6 ">
              <div className="space-y-2">
                <p
                  className={`relative
                    lg:pl-[124px] pl-[0] 
                    font-[500]
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
                  Neden SDS?
                </p>
                <h1 className="text-[clamp(36px,calc(-49.8461538462px+0.0865384615*100vw),54px)] leading-[1.125]  tracking-[-0.03em]  text-primary-600  font-light">
                  Uyumluluk, sağlık ve estetikte en yüksek standartlar!
                </h1>
              </div>

              <ul className="list-decimal text-[18px] ml-[10px] lg:ml-0	 lg:text-[20px] font-[400] lg:w-[80%] w-full text-primary-600 transform lg:translate-x-[120px] translate-x-0 leading-8  mt-[2.875rem] max-w-[42rem]">
                {Object.entries(benefits).map(([key, value]) => (
                  <li key={key} className="mb-2">
                    {value}
                  </li>
                ))}
              </ul>

              <div className="pt-6 lg:translate-x-[120px] translate-x-0 lg:mt-[1.2rem]">
                <Link href="/benefits-for-dentists" className="">
                  <Button
                    variant="primary"
                    size="lg"
                    rounded="rounded-[100px]"
                    className="text-[16px]"
                  >
                    Avantajları Keşfet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 right-8 z-30">
        <div className="writing-vertical text-white/70 text-sm font-light tracking-wider">
         Kaydırın
        </div>
      </div>

      {/* Mobile Optimizations */}
      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        @media (max-width: 768px) {
          .writing-vertical {
            writing-mode: horizontal-tb;
            text-orientation: initial;
          }

          /* Mobile'da background-attachment: fixed sorun yaratabilir */
          .bg-fixed {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;