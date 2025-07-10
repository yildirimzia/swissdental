'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP plugin'ini register et
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [shouldDetach, setShouldDetach] = useState(false)
  
  // GSAP animasyonları için ref
  const implantRef = useRef<HTMLDivElement>(null)
  const secondImplantRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      
      // Background attachment'ın kalkması gereken nokta
      const detachPoint = 1800
      setShouldDetach(currentScrollY > detachPoint)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    useEffect(() => {
        if (implantRef.current) {
            // Başlangıç değerlerini ayarla
            gsap.set(implantRef.current, {

            rotation: 15.2201,
            xPercent: -8,  // translate-x-[2%]
            yPercent: -10, // translate-y-[-29%]
            x: -0.0002,   // translate3d x değeri
            y: 0.0003,    // translate3d y değeri
            z: 0          // translate3d z değeri
            })

            // İlk timeline - Hero'dan BRIGHT'a kadar
            const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "+=850", // 800px scroll boyunca
                scrub: true,
                pin: implantRef.current,
                anticipatePin: 1,
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
                markers: true
            }
            })

            // Container'ı hareket ettir
            heroTimeline.to(implantRef.current, {
            duration: 1,
            // y: 490 * 0.3, // scroll mesafesinin %30'i kadar
            yPercent: 25,
            x: -200, // Sağa doğru hareket
            ease: "linear"
            })

            // Rotation animasyonu paralel olarak
            heroTimeline.to(implantRef.current, {
            duration: 1,
            rotation: 0, // 16.9998'den 0'a
            ease: "linear"
            }, "-=1") // Aynı anda başla

            // İkinci bölümde resmi değiştir
        //   gsap.timeline({
        //     scrollTrigger: {
        //       trigger: ".grid.grid-cols-1.lg\\:grid-cols-2:nth-child(2)", // İkinci section
        //       start: "top top",
        //       end: "top top",
        //       toggleActions: "play none none reverse",
        //       invalidateOnRefresh: true,
        //       onEnter: () => {
        //         console.log("İkinci bölüme geçildi")
        //       },
        //       onLeaveBack: () => {
        //         console.log("İlk bölüme geri dönüldü")
        //       }
        //     }
        //   })

        if (secondImplantRef.current) {
            // Başlangıçta opaklığını 0 yap
            gsap.set(secondImplantRef.current, { opacity: 0 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: secondImplantRef.current, // Bu görselin kendisi tetikleyici olsun
                    start: "top center", // Görselin üst kısmı viewport'un ortasına geldiğinde başla
                    end: "center center", // Görselin ortası viewport'un ortasına geldiğinde bitir
                    scrub: true, // Kaydırma ile senkronize et
                    toggleActions: "play none none reverse",
                    markers: true // Debug için açık bırakabilirsiniz
                }
            })
            .to(secondImplantRef.current, {
                opacity: 1,
                duration: 0.5, // Opaklık animasyonunun süresi (scrub true olduğu için bu süre görecelidir)
                ease: "power2.inOut"
            });
        }
        }

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [])
  return (
    <section className="relative min-h-screen">
      {/* Background with CSS background-attachment */}
      <div 
        className={`fixed inset-0 w-full h-full transition-all duration-500 ${
          shouldDetach ? 'bg-scroll absolute' : 'bg-fixed fixed'
        }`}
        style={{
          backgroundImage: 'url(/images/mesh.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      >
        {/* Gradient Overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-[125px] mt-[160px]">
            {/* Left Content */}
            <div className="text-white space-x-6">
              <div className="space-y-2">
                <p
                className={`relative
                    pl-[124px]
                    font-[500]
                    text-[16px]
                    tracking-wide 
                    uppercase
                    text-mint
                    before:content-[""]
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
                  World market
                   <br />
                  leader in ceramic
                  dental implants
                </h1>
              </div>
              
              <p className="text-[20px] font-[400] w-[80%] text-primary-600 transform translate-x-[120px] leading-8  mt-[2.875rem] max-w-[42rem]">
                SDS ceramic dental implants made from white zirconium dioxide meet the highest standards in terms of biocompatibility, tolerance, health, and aesthetics.
              </p>
              
              <div className="pt-6 translate-x-[120px] mt-[1.2rem]">
                <Link
                  href="/implants"
                  className=""
                >
                <Button variant="primary" size="lg" rounded="rounded-[100px]" className="text-[16px]">
                    To the Implants
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Implant Image */}
            <div  className="flex justify-center lg:justify-end">
              <div ref={implantRef}  className="relative w-full max-w-md lg:max-w-lg transform ">
                <Image
                  src="/images/implant-img.png"
                  alt="Ceramic Dental Implant"
                  width={381}
                  height={600}
                  className="object-contain "
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
            <div className="text-white space-x-6 z-[100] flex flex-col self-center mt-[245px]">
              <div className="space-y-2">
                <p
                className={`relative
                    pl-[124px]
                    font-[500]
                    text-[16px]
                    tracking-wide 
                    uppercase
                    text-mint
                    before:content-[""]
                    before:absolute
                    before:left-0
                    before:top-1/2
                    before:-translate-y-1/2
                    before:w-[100px]
                    before:h-[1px]
                    before:bg-[#3aa194]
                `}
                >
                Product
                </p>
                <h1 className="text-[clamp(36px,calc(-49.8461538462px+0.0865384615*100vw),54px)] leading-[1.125] uppercase  tracking-[-0.03em] font-[700]  text-primary-600  ">
                Bright
                </h1>
              </div>
              
              <p className="text-[20px] font-[400] w-[80%] text-primary-600  leading-8  mt-[2.875rem] max-w-[42rem]">
                With the BRIGHT premium implant series, you have an ideal implant system for immediate placement, designed with optimal material and shape considerations.
              </p>
              
              <div className="pt-6  mt-[1.2rem]">
                <Link
                  href="/implants"
                  className=""
                >
                <Button variant="primary" size="lg" rounded="rounded-[100px]" className="text-[16px]">
                    To the BRIGHT Product Line
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Implant Image */}
            <div className="flex justify-center lg:justify-end">
              <div ref={secondImplantRef} className="relative w-full max-w-md lg:max-w-lg">
                            <Image
                   // Bu ref'i buraya ekledik!
                  src="/images/Bright2-2-4555.png"
                  alt="Ceramic Dental Implant"
                  width={381}
                  height={600}
                  className="object-contain transform translate-x-[30%] translate-y-[16.9%] "
                  priority
                />
              </div>
            </div>
          </div>
          <div className='absolute top-0 left-0 bottom-0 w-[870px] bg-white z-10 h-screen transform translate-x-[-40%] translate-y-[0px]'></div>
        </div>

      </div>
      
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <p className="text-lg lg:text-xl font-light tracking-wide uppercase text-teal-300">
                  PROFESSIONAL SUPPORT
                </p>
                <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-tight">
                  Comprehensive
                  <br />
                  <span className="text-teal-300">training</span> &
                  <br />
                  support
                </h2>
              </div>
              
              <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                We provide comprehensive training programs and ongoing support to ensure successful implant procedures and optimal patient outcomes.
              </p>
              
              <div className="pt-6">
                <Link
                  href="/training"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors duration-200 text-lg"
                >
                  Training Programs
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
        
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 right-8 z-30">
        <div className="writing-vertical text-white/70 text-sm font-light tracking-wider">
          Scroll
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
  )
}

export default HeroSection