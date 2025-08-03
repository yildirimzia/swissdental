"use client";

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const timelineData = [
  // ... (verileriniz burada)
  {
    year: "2014",
    title: "Development of the SCC Short Cut Concept according to Dr. Karl Karl Ulrich Volz",
    description: ""
  },
  {
    year: "2015",
    title: "Formulation of Dr. Volz Biological Dentistry concept",
    description: ""
  },
  {
    year: "2016",
    title: "Founding of the SWISS BIOHEALTH CLINIC and development of the ALL IN ONE concept",
    description: ""
  },
  {
    year: "2017",
    title: "Foundation of SDS SWISS DENTAL SOLUTIONS AG EDUCATION CENTER",
    description: ""
  },
  {
    year: "2004",
    title: "First CE certification for a ceramic implant",
    description: "Revolutionary ceramic materials receive regulatory approval for medical implants"
  },
  {
    year: "2004-2012", 
    title: "Development of the first two-part reversibly screwed ceramic implant SDS2.0",
    description: "Advanced engineering creates modular ceramic implant systems"
  },
  {
    year: "2006",
    title: "Insertion of the first implants with ultrasound under polylactide welding", 
    description: "Innovative surgical techniques improve implant integration"
  },
  {
    year: "2007",
    title: "Foundation of Swiss Oral Implants (SOI)",
    description: "Establishment of leading ceramic implant manufacturer"
  },
  {
    year: "2009",
    title: "Launch of PURE Ceramic Implant System",
    description: "First commercially available one-piece ceramic implant system"
  },
  {
    year: "2011", 
    title: "Introduction of tissue-level ceramic implants",
    description: "Development of implants designed for soft tissue integration"
  },
  {
    year: "2013",
    title: "FDA approval for ceramic dental implants",
    description: "US regulatory approval opens American market"
  },
  {
    year: "2015",
    title: "Advanced surface treatment technologies", 
    description: "Enhanced surface modifications improve osseointegration"
  },
  {
    year: "2016",
    title: "Founding of the SWISS BIOHEALTH CLINIC and development of the ALL IN ONE concept",
    description: "Comprehensive approach to ceramic implant treatment and patient care"
  },
  {
    year: "2017",
    title: "Foundation of SDS SWISS DENTAL SOLUTIONS AG EDUCATION CENTER",
    description: "Educational initiatives and training programs for ceramic implant procedures"
  },
  {
    year: "2019",
    title: "Immediate loading protocols established",
    description: "Clinical protocols enable same-day implant placement and loading"
  },
  {
    year: "2021",
    title: "AI-assisted implant design",
    description: "Artificial intelligence optimizes implant geometry and placement"
  },
  {
    year: "2022",
    title: "Bioactive ceramic coatings", 
    description: "New coating technologies accelerate healing and integration"
  },
  {
    year: "2024",
    title: "Smart implant monitoring systems",
    description: "IoT integration allows real-time monitoring of implant health"
  }
];


const CeramicTimeline = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    <div className="bg-[#f6f6f6] pb-[100px] min-h-screen relative w-full overflow-hidden">
      <div className="w-full">
        
        {/* Header - başlık merkezde kalabilir */}
        <div className="text-center mt-[200px] lg:mt-[100px] lg:mb-24 px-4 md:px-8">
          <h2 className="text-teal-600 text-sm font-medium tracking-widest uppercase mb-4">
            HISTORY
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
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesOffsetBefore: 16 // 1rem
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                slidesOffsetBefore: 32 // 2rem
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 32,
                slidesOffsetBefore: 64 // 4rem
              },
              1536: {
                slidesPerView: 4.5,
                spaceBetween: 32,
                slidesOffsetBefore: 96 // 6rem
              },
            }}
            className="timeline-swiper"
          >
            {timelineData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full bg-white">
                  
                  {/* Individual Card */}
                  <div className=" bg-white p-[42px] min-h-[530px] flex flex-col">
                    {/* Yıl ve çizgi buraya taşındı */}
                    <div className="flex items-center gap-3 h-[128px] min-h-[120px]">
                      {/* Vertical line (çizgi) */}
                      <div  className={`relative 
                    text-[24px]
                    pl-[65px]
                    ml-[24px] pl:ml-[0]
                    font-[500]
                    tracking-wide 
                    rotate-[-90deg] translate-x-[-24px]
                    uppercase
                    text-mint
                    before:content-[""]
                    before:absolute
                    before:left-0
                    before:top-1/2
                    before:-translate-y-1/2
                    before:w-[48px]
                    before:h-[2px]
                    before:bg-[#3aa194]
                    
                `}
                      
                      >{item.year}</div>
                      
                     
                    </div>

                    <h3 className="text-primary-600 mt-[42px] font-bold text-[32px] leading-tight mb-6">
                      {item.title}
                    </h3>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="absolute hidden md:flex bottom-[-40px] right-[80px] flex gap-3 z-10">
            <button
              ref={prevRef}
              className="cursor-pointer"
            >
              <LeftArrow />
            </button>

            <button
              ref={nextRef}
              className="cursor-pointer"
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
      `}</style>
    </div>
  );
};

export default CeramicTimeline;