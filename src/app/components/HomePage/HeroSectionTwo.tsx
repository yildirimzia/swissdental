'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Button from '../Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useHomeTranslation } from '@/contexts/LanguageContext'


const HeroSection: React.FC = () => {
  // Animation refs
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null) // Sol taraftaki background image
  const textRef = useRef<HTMLDivElement>(null) // Sağ taraftaki text content
  const [isMobile, setIsMobile] = useState(false)

  // Translation hook - home namespace kullanıyoruz çünkü service_hero orada
  const { t } = useHomeTranslation()

  // Mobil kontrol
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // GSAP Animasyon
  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return

    // Başlangıç pozisyonları - mobilde farklı
    if (isMobile) {
      // MOBİLDE: Her iki element de aşağıdan yukarı
      gsap.set(imageRef.current, {
        x: 0, // Aşağıdan başla
        opacity: 0
      })

      gsap.set(textRef.current, {
        y: 100, // Aşağıdan başla
        opacity: 0
      })
    } else {
      // DESKTOP'TA: Resim soldan, text aşağıdan
      gsap.set(imageRef.current, {
        x: -300, // Soldan başla
        opacity: 0
      })

      gsap.set(textRef.current, {
        y: 120, // Aşağıdan başla
        opacity: 0
      })
    }

    // Animasyon timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "center 50%",
        scrub: 1,
        toggleActions: "play none none reverse",
      }
    })

    if (isMobile) {
      // MOBİL ANIMASYON: Her ikisi de aşağıdan yukarı
      timeline.to(imageRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      })

      timeline.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5") // Hafif overlap
    } else {
      // DESKTOP ANIMASYON: Resim soldan, text aşağıdan
      timeline.to(imageRef.current, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      })

      timeline.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.7") // 0.7 saniye overlap
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isMobile])

  

  return (
    <section ref={sectionRef} className="bg-white text-black relative overflow-hidden">
      <div className="relative z-20 min-h-screen">
        <div className="flex items-center justify-between flex-col md:flex-row ">
          
          {/* Left Content - Background Image */}
          <div 
            ref={imageRef}
            className="order-2 lg:order-1 lg:h-[940px] lg:w-[610px] h-[546px] w-[430px]" 
            style={{
              backgroundImage: "url(/images/Unser_SDS_Service.png)",
              backgroundSize: "cover",
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            }}
          />

          {/* Right Content - Text */}
          <div 
            ref={textRef}
            className="text-white lg:py-0 lg:px-0 py-[16px] px-[24px] my-[46px] lg:my-[0]  space-x-6 order-2 lg:order-1 bg-white p-[50px]  z-10"
          >
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
                SDS Destek
              </p>
              <h1 className="lg:text-[clamp(36px,calc(-49.8461538462px+0.0865384615*100vw),40px)] text-[clamp(26px,calc(-49.8461538462px+0.0865384615*100vw),26px)]  leading-[1.125] tracking-[-0.03em] text-primary-600 font-medium">
                
              <strong className='font-bold text-[26px] lg:text-[40px] text-primary-600'>
                Hizmet – <br />
              </strong>
                Ürünlerimiz kadar özel
              </h1>
            </div>

            <p className="lg:text-[20px] text-[15px] font-[400] lg:w-[80%] w-full text-primary-600 mt-[2.875rem] max-w-[42rem]">
              SDS yalnızca bir ürün sağlayıcısı değil. Biz sürekli irtibat noktanız olarak seramik implantlar hakkında sizlere bilgiler sunuyor, eğitim etkinlikleri düzenliyor ve vaka planlamanızda aktif destek sağlıyoruz.
            </p>

            <div className="pt-6 mt-[1.2rem]">
              <Link href="/service" className="">
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
                    >
                      <path d="M5 12l14 0"></path>
                      <path d="M13 18l6 -6"></path>
                      <path d="M13 6l6 6"></path>
                    </svg>
                  }
                  iconPosition="right"
                >
                  SDS Destek
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection