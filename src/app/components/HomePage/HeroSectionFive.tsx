"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from '../Button'
import { useHomeTranslation } from '@/hooks/useTranslation';

interface Doctor {
  id: number;
  name: string;
  title: string;
  implantsPerYear: string;
  image: string;
}

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Translation hook
  const { t, isLoaded } = useHomeTranslation();

  // Mobil kontrol
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Doctors data - JSON'dan çeviriyle
  const doctors: Doctor[] =  [
    {
      id: 1,
      name: t('success_stories.doctors.0.name'),
      title: t('success_stories.doctors.0.title'),
      implantsPerYear: t('success_stories.doctors.0.implants_count'),
      image: "/images/Thore-Santel.jpg"
    },
    {
      id: 2,
      name: t('success_stories.doctors.1.name'),
      title: t('success_stories.doctors.1.title'), 
      implantsPerYear: t('success_stories.doctors.1.implants_count'),
      image: "/images/Mario-Parra.jpg"
    }
  ];

  // Slider functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);
  };


  const currentDoctor = doctors[currentSlide];

  // Arrow Icons
  const LeftArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500">
      <path d="M15 18l-6-6 6-6"/>
    </svg>
  );

  const RightArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500">
      <path d="M9 18l6-6-6-6"/>
    </svg>
  );

  // Arrow Right Icon
  const ArrowRightIcon = () => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="ml-2"
    >
      <path d="M5 12l14 0"></path>
      <path d="M13 18l6 -6"></path>
      <path d="M13 6l6 6"></path>
    </svg>
  );

  return (
    <section className="bg-[#f6f6f6] pt-20 pb-[200px] relative overflow-hidden max-w-[1440px] mx-auto">
      <div className="px-4">
        
        {/* Header */}
        <div className="text-center mb-16 mt-[-80px] lg-[0]">
          <p className="text-primary-500 font-[200] text-[16px] tracking-wide uppercase mb-4">
            {t('success_stories.subtitle')}
          </p>
          <h2 className="lg:text-[40px] text-[26px] font-[400] text-primary-600">
            {t('success_stories.title')}
          </h2>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden lg:grid grid-cols-2 gap-12 mx-auto items-start">
          
          {/* Dr. Thore Santel - Sol taraf, yukarıda */}
          <div className="text-center mt-[100px] h-[482px]">
            {/* Container - 604px genişlik */}
            <div className="relative" style={{width: '604px', height: '482px'}}>
              
              {/* Doctor Image - Absolute positioned */}
              <div className="z-10 absolute left-[40%] top-[10%] translate-x-[-21%] translate-y-[-50%]">
                <Image
                  src={doctors[0].image}
                  alt={doctors[0].name}
                  width={400}
                  height={300}
                  className="object-cover lg:w-[462px] lg:h-[362px] shadow-lg"
                  priority
                />
              </div>

              {/* Beyaz card - Absolute positioned, resimden büyük */}
              <div className="absolute top-12 left-12 bg-white p-8 pt-[224px]" style={{width: '604px'}}>
                <div className="space-y-4 text-center">
                  <p className="text-primary-500 font-medium text-sm tracking-wide uppercase">
                    {doctors[0].title}
                  </p>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                    {t('success_stories.implants_per_year')}
                  </h3>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-primary-600">
                    {doctors[0].implantsPerYear}
                  </div>
                  
                  {/* More Success Stories Link */}
                  <div className="pt-6">
                     <Link href="/success-stories">
                        <Button
                        variant="customOutline"
                        size="custom16"
                        rounded="rounded-full"
                        className="!shadow-none mt-8 !font-[400]"
                        icon={<ArrowRightIcon />}
                        iconPosition="right"
                      >
                        {t('success_stories.button')}
                      </Button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dr. Mario Parra - Sağ taraf, aşağıda */}
          <div className="text-center mt-[200px] h-[482px]">
            {/* Container - 604px genişlik */}
            <div className="relative" style={{width: '604px', height: '482px'}}>
              
              {/* Doctor Image - Absolute positioned */}
              <div className="z-10 absolute left-[40%] top-[10%] translate-x-[-21%] translate-y-[-50%]">
                <Image
                  src={doctors[1].image}
                  alt={doctors[1].name}
                  width={400}
                  height={300}
                  className="object-cover w-[462px] h-[362px] shadow-lg"
                  priority
                />
              </div>

              {/* Beyaz card - Absolute positioned, resimden büyük */}
              <div className="absolute top-12 left-12 bg-white p-8 pt-[224px]" style={{width: '604px'}}>
                <div className="space-y-4 text-center">
                  <p className="text-primary-500 font-medium text-sm tracking-wide uppercase">
                    {doctors[1].title}
                  </p>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary-600">
                    {t('success_stories.implants_per_year')}
                  </h3>
                  
                  <div className="text-4xl lg:text-5xl font-bold text-primary-600">
                    {doctors[1].implantsPerYear}
                  </div>
                  
                  {/* More Success Stories Link */}
                  <div className="pt-6">
                      <Link href="/success-stories">
                        <Button
                        variant="customOutline"
                        size="custom16"
                        rounded="rounded-full"
                        className="!shadow-none mt-8 !font-[400]"
                        icon={<ArrowRightIcon />}
                        iconPosition="right"
                      >
                        {t('success_stories.button')}
                      </Button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Slider - Visible only on Mobile */}
        <div className="lg:hidden">
          {/* Mobile Card */}
          <div className=" mx-auto max-w-sm overflow-hidden">
                      {/* Doctor Image */}
            <div className="p-6 pb-4 flex justify-center absolute top-[10%] left-[18%]">
              <Image
                src={currentDoctor.image}
                alt={currentDoctor.name}
                width={300}
                height={250}
                className="object-cover  h-[228px] w-[228px] "
                priority
              />
            </div>
            {/* Doctor Info */}
            <div className="px-6 pb-6 text-center space-y-4 bg-white pt-[135px] mt-[75px]">
              <p className="text-primary-500 font-medium text-sm tracking-wide uppercase">
                {currentDoctor.title}
              </p>
              
              <h3 className="text-xl font-bold text-primary-600">
                {t('success_stories.implants_per_year')}
              </h3>
              
              <div className="text-3xl font-bold text-primary-600">
                {currentDoctor.implantsPerYear}
              </div>
              
              {/* More Success Stories Link */}
              <div className="pt-4">
                <Link href="/success-stories">
                  <Button
                    variant="customOutline"
                    size="custom16"
                    rounded="rounded-full"
                    className="!shadow-none !font-[400]"
                    icon={<ArrowRightIcon />}
                    iconPosition="right"
                  >
                    {t('success_stories.button')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex justify-center items-center mt-8 space-x-8">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary-500 transition-colors"
              aria-label={t('success_stories.navigation.previous')}
            >
              <LeftArrow />
            </button>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-primary-500 transition-colors"
              aria-label={t('success_stories.navigation.next')}
            >
              <RightArrow />
            </button>
          </div>
        </div>

      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-primary-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-primary-100 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-primary-200 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;