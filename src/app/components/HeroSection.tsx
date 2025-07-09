'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [shouldDetach, setShouldDetach] = useState(false)

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

  return (
    <section className="relative min-h-screen overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="text-white space-x-6 mt-[109px]">
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
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/images/implant-img.png"
                  alt="Ceramic Dental Implant"
                  width={500}
                  height={600}
                  className="object-contain"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="space-y-2">
                <p className="text-lg lg:text-xl font-light tracking-wide uppercase text-teal-300">
                  INNOVATION & QUALITY
                </p>
                <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light leading-tight">
                  Advanced
                  <br />
                  <span className="text-teal-300">ceramic</span>
                  <br />
                  technology
                </h2>
              </div>
              
              <p className="text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                Our cutting-edge manufacturing process ensures superior quality and precision in every implant, providing dentists with reliable solutions for their patients.
              </p>
              
              <div className="pt-6">
                <Link
                  href="/technology"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full transition-colors duration-200 text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <Image
                  src="/implant-image.png"
                  alt="Ceramic Technology"
                  width={500}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
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
                <Image
                  src="/implant-image.png"
                  alt="Professional Training"
                  width={500}
                  height={600}
                  className="object-contain"
                  priority
                />
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