"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useHomeTranslation } from '@/hooks/useTranslation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CeramicTimeline = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // Translation hook
  const { t, isLoaded } = useHomeTranslation();

  // Navigation fonksiyonları
  const handlePrevClick = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

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
      className="inline-block ms-lg-1"
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
      className="inline-block ms-lg-1"
    >
      <path d="M9 6l6 6l-6 6"></path>
    </svg>
  );

  // Timeline data tipini tanımla
  interface TimelineEvent {
    year: string;
    title: string;
    description: string;
  }

  // Timeline data tipini tanımla
  interface TimelineEvent {
    year: string;
    title: string;
    description: string;
  }

  // Timeline data'yı çevirilerden al - her event'i ayrı ayrı çek
  const getTimelineData = (): TimelineEvent[] => {
    const events: TimelineEvent[] = [];
    
    // JSON dosyanızda 16 event var, onları tek tek çekelim
    for (let i = 0; i < 16; i++) {
      try {
        const year = t(`timeline.events.${i}.year`);
        const title = t(`timeline.events.${i}.title`);
        const description = t(`timeline.events.${i}.description`);
        
        // Eğer çeviri bulunamadıysa (key'in kendisi dönerse) dur
        if (year === `timeline.events.${i}.year` || !year) {
          break;
        }
        
        events.push({ year, title, description });
      } catch (error) {
        console.log(`Event ${i} could not be loaded`);
        break;
      }
    }
    
    console.log(`Loaded ${events.length} timeline events from translations`);
    return events;
  };

  const timelineData = getTimelineData();

  return (
    <div className="bg-[#f6f6f6] pb-[100px] min-h-screen relative w-full overflow-hidden">
      <div className="w-full">
        
        {/* Header - başlık merkezde kalabilir */}
        <div className="text-center mt-[200px] lg:mt-[100px] lg:mb-24 px-4 md:px-8">
          <h2 className="text-teal-600 text-sm font-medium tracking-widest uppercase mb-4">
            {t('timeline.category')}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pb-20">
          
          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            slidesPerGroup={1}
            speed={700}
            onSwiper={setSwiperInstance}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesOffsetBefore: 16
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                slidesOffsetBefore: 32
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 32,
                slidesOffsetBefore: 64
              },
              1536: {
                slidesPerView: 4.5,
                spaceBetween: 32,
                slidesOffsetBefore: 96
              },
            }}
            className="timeline-swiper"
          >
            {timelineData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full bg-white">
                  
                  {/* Individual Card */}
                  <div className="bg-white p-[42px] min-h-[530px] flex flex-col">
                    {/* Yıl ve çizgi buraya taşındı */}
                    <div className="flex items-center gap-3 h-[128px] min-h-[120px]">
                      {/* Vertical line (çizgi) */}
                      <div className={`relative 
                        text-[24px]
                        pl-[65px]
                        ml-[24px] pl:ml-[0]
                        font-[500]
                        tracking-wide 
                        rotate-[-90deg] translate-x-[-24px]
                        uppercase
                        text-[#3aa194]
                        before:content-[""]
                        before:absolute
                        before:left-0
                        before:top-1/2
                        before:-translate-y-1/2
                        before:w-[48px]
                        before:h-[2px]
                        before:bg-[#3aa194]
                      `}>
                        {item.year}
                      </div>
                    </div>

                    <h3 className="text-[#3aa194] mt-[42px] font-bold text-[32px] leading-tight mb-6">
                      {item.title}
                    </h3>
                    
                    {item.description && (
                      <p className="text-gray-600 text-base leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="absolute hidden md:flex bottom-[-40px] right-[80px] gap-3 z-10">
            <button
              ref={prevRef}
              onClick={handlePrevClick}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              type="button"
            >
              <LeftArrow />
            </button>

            <button
              ref={nextRef}
              onClick={handleNextClick}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              type="button"
            >
              <RightArrow />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .timeline-swiper {
          padding-top: 6rem;
        }
        
        .timeline-swiper .swiper-button-disabled {
          opacity: 0.3 !important;
          cursor: not-allowed !important;
        }
        
        .timeline-swiper .swiper-slide {
          height: auto;
        }

        .timeline-swiper .swiper-wrapper {
          align-items: stretch;
        }

        /* Swiper navigation tuşlarını gizle */
        .timeline-swiper .swiper-button-next,
        .timeline-swiper .swiper-button-prev {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CeramicTimeline;