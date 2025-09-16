"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);


  // Refs for GSAP animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Mobil kontrol
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // GSAP Scroll Animation
  useEffect(() => {
    if (
      !sectionRef.current ||
      !imageRef.current ||
      !textRef.current
    )
      return;

    // Başlangıç pozisyonları
    gsap.set(imageRef.current, {
      x: isMobile ? 100 : 200, // Sağdan başla
      opacity: 0,
    });

    gsap.set(textRef.current, {
      y: isMobile ? 80 : 120, // Aşağıdan başla
      opacity: 0,
    });

    // Scroll animasyonu
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        end: "center 50%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // Resim animasyonu (sağdan sola)
    timeline.to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Text animasyonu (aşağıdan yukarı)
    timeline.to(
      textRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  // External Link Icon
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

  return (
    <section
      ref={sectionRef}
      className="bg-[#fff] relative overflow-hidden max-w-[1440px] mx-auto"
    >
      <div className=" ">
        <div className="flex flex-col lg:flex-row  items-center">
          {/* Left Content - Text */}
          <div
            ref={textRef}
            className="order-2 lg:order-1 space-y-6 lg:p-[120px] mb-[46px] mt-[46px] pb-4 pt-4 px-[24px] "
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="mb-3.5">
                <Image
                  src="/images/SDSEducationLogo.png"
                  alt='SDS Eğitim'
                  width={422}
                  height={32}
                  className="object-cover "
                  priority
                />
              </div>

              <h3 className="lg:text-[40px] text-[26px] tracking-[-0.03em] leading-[1.2]  text-primary-600">
                SDS eğitimleriyle bir uzman olun.

              </h3>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed max-w-lg text-primary-600">
              SDS eğitim kurslarında, deneyimli diş hekimlerinin bilgisinden doğrudan faydalanma fırsatınız vardır. Uzmanlaşmış yerinde veya çevrimiçi eğitim seanslarımızla uzmanlaşın ve becerilerinizi geliştirin.

            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <Link href="https://education.swissdentalsolutions.com/" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  rounded="rounded-full"
                  className="!text-red-500 !border-red-500 hover:!bg-red-500 hover:!text-white !font-[400] px-8  "
                  icon={<ExternalLinkIcon />}
                  iconPosition="right"
                >
                  SDS Eğitim web sitesine git
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div ref={imageRef} className="order-1 lg:order-2">
            <div className="relative">
              <Image
                src="/images/SDSEducation.jpg"
                alt='SDS Eğitim'
                width={830}
                height={996}
                className="object-cover lg:w-[830px] lg:h-[996px] w-[430px] h-[546px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 right-10 w-4 h-4 bg-red-300 rounded-full"></div>
        <div className="absolute top-40 left-20 w-2 h-2 bg-primary-300 rounded-full"></div>
        <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-red-200 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-primary-200 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
