"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoContent() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const videoImageRef = useRef<HTMLDivElement>(null); // Video alanı
  const videoTextRef = useRef<HTMLDivElement>(null); // Text alanı
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
        y: 100, // Video daha aşağıdan başla
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
  return (
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
              Get off to a smart and clear start with our implant solutions and
              benefit from our SDS Planning Service. With the SDS Planning
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
  );
}
