"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHomeTranslation } from "@/hooks/useTranslation";

// GSAP plugin'ini register et
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
  image: string;
}

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activate, setActivate] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Translation hook
  const { t, isLoaded } = useHomeTranslation();

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Testimonials data with images - çeviriler JSON'dan gelecek
  const testimonials: Testimonial[] = [
    {
      name: t('testimonials.data.0.name'),
      location: t('testimonials.data.0.location'),
      text: t('testimonials.data.0.text'),
      image: "/images/testimonial-1.jpg",
    },
    {
      name: t('testimonials.data.1.name'),
      location: t('testimonials.data.1.location'),
      text: t('testimonials.data.1.text'),
      image: "/images/testimonial-2.jpg",
    },
  ];

  // Mobil kontrol
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // GSAP Scroll Animation - İlk yüklenme
  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current || !isLoaded) return;

    // Başlangıç pozisyonları
    gsap.set(imageRef.current, {
      x: isMobile ? -100 : -200,
      opacity: 0,
    });

    gsap.set(textRef.current, {
      y: isMobile ? 80 : 120,
      opacity: 0,
    });

    // Scroll animasyonu
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center 50%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // Resim animasyonu (soldan sağa)
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
  }, [isMobile, isLoaded]);

  // Slide transition animation
  const slideTransition = (direction: "next" | "prev") => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const timeline = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    if (direction === "next") {
      // Sağ ok: mevcut content sola kayar, yeni content sağdan gelir
      timeline
        .to([imageRef.current, textRef.current], {
          x: -300,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        })
        .call(() => {
          setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        })
        .set([imageRef.current, textRef.current], {
          x: 300,
        })
        .to([imageRef.current, textRef.current], {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
    } else {
      // Sol ok: mevcut content sağa kayar, yeni content soldan gelir
      timeline
        .to([imageRef.current, textRef.current], {
          x: 300,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        })
        .call(() => {
          setCurrentSlide(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
          );
        })
        .set([imageRef.current, textRef.current], {
          x: -300,
        })
        .to([imageRef.current, textRef.current], {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
    }
  };

  // Dots ile slide değiştirme - GSAP animasyonlu
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);

    const direction = index > currentSlide ? "next" : "prev";
    
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      },
    });

    if (direction === "next") {
      timeline
        .to([imageRef.current, textRef.current], {
          x: -300,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        })
        .call(() => {
          setCurrentSlide(index);
        })
        .set([imageRef.current, textRef.current], {
          x: 300,
        })
        .to([imageRef.current, textRef.current], {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
    } else {
      timeline
        .to([imageRef.current, textRef.current], {
          x: 300,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        })
        .call(() => {
          setCurrentSlide(index);
        })
        .set([imageRef.current, textRef.current], {
          x: -300,
        })
        .to([imageRef.current, textRef.current], {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
    }
  };

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      slideTransition("next");
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      slideTransition("prev");
    }
  };


  const currentTestimonial = testimonials[currentSlide];

  const LeftArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3aa194"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ms-lg-1 "
    >
      <path d="M15 6l-6 6l6 6" />
    </svg>
  );

  const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3aa194"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ms-lg-1 -mt-1.4"
    >
      <path d="M9 6l6 6l-6 6"></path>
    </svg>
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#f6f6f6] py-20 relative overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto bg-white">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[600px]">
          {/* Left Side - Image */}
          <div ref={imageRef} className="order-1 lg:order-2">
            <div className="lg:absolute lg:bottom-[-190px] lg:left-[-24px]">
              <div className="w-full max-w-[502px] lg:max-w-lg">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={502}
                  height={610}
                  className="object-cover w-full h-[610px]"
                  priority
                />
              </div>
            </div>
            {/* Dots - GSAP animasyonlu */}
            <div className="lg:hidden flex justify-center mt-12 space-x-3 text-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    index === currentSlide
                      ? "bg-primary-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  } ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                  aria-label={`${t('testimonials.navigation.slide')} ${index + 1}`}
                />
              ))}
            </div>
            {/* Author Info */}
            <div className="lg:pt-8 flex items-center lg:absolute lg:top-[205px] lg:right-[265px] pr-[2.875rem] pl-[2.875rem] lg:*:pl-0 lg:pr-0 pt-0">
              <h3 className="text-[72px] lg:hidden block text-primary-500 mt-[25px]">
                "
              </h3>
              <p className="text-primary-500 tracking-[-0.05em] font-medium text-[12px] lg:text-[14px] uppercase  ml-[10px]">
                {currentTestimonial.name}, {currentTestimonial.location}
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            ref={textRef}
            className="order-1 lg:order-2 space-y-6 lg:pr-0 lg:pb-0 lg:pl-0 pr-[2.875rem] pl-[2.875rem] pb-[2.875rem] "
          >
            {/* Counter - Top Right */}
            <div className="hidden font-light text-primary-500 text-[80px] lg:flex justify-end mr-[80px] mt-[45px]">
              <div className="inline-block translate-y-[-25px]">
                {currentSlide + 1}
              </div>
              <div className="inline-block">/</div>
              <div className="translate-y-[30px] inline-block ">
                {testimonials.length}
              </div>
            </div>

            {/* TESTIMONIALS Label */}
            <div className="lg:flex hidden items-center">
              <h3 className="text-[72px] text-primary-500 mt-[25px]">"</h3>
              <span className="text-primary-500 font-medium text-sm tracking-wide uppercase ml-[36px]">
                {t('testimonials.title')}
              </span>
            </div>

            {/* Testimonial Text */}
            <blockquote className="font-bold text-[20px] lg:text-[32px] text-primary-600 tracking-[-0.03em] leading-[1.2]">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Navigation Arrows */}
            <div className="lg:flex hidden justify-end space-x-4 pt-8 mb-[46px] mr-[86px]">
              <button
                onClick={prevSlide}
                disabled={isTransitioning || currentSlide === 0}
                className={`${
                  currentSlide === 0 || isTransitioning
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:opacity-70"
                } transition-opacity duration-200`}
                aria-label={t('testimonials.navigation.previous')}
              >
                <LeftArrow />
              </button>

              <button
                onClick={nextSlide}
                disabled={
                  isTransitioning || currentSlide === testimonials.length - 1
                }
                className={`${
                  currentSlide === testimonials.length - 1 || isTransitioning
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer hover:opacity-70"
                } transition-opacity duration-200`}
                aria-label={t('testimonials.navigation.next')}
              >
                <RightArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;