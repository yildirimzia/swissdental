"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function CleanestImplant() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null); // Sol taraftaki background image
  const textRef = useRef<HTMLDivElement>(null); // Sağ taraftaki text content

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
              backgroundImage: "url(/images/product-lines/productlinesbg.jpg)",
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
              Only implant systems that meet the highest standards of purity are
              awarded the ‘Trusted Quality’ mark by the CleanImplant Foundation.
              As the only implant manufacturer worldwide (as of 07/2022), SDS
              SWISS DENTAL SOLUTIONS has earned this award for the BRIGHT
              ceramic implant series, both at the production and manufacturer
              levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CleanestImplant;
