'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '../Button'
import Image from 'next/image'
import { useHomeTranslation } from '@/hooks/useTranslation'

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Translation hook
  const { t, isLoaded } = useHomeTranslation()

  // Mobil kontrol
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Icon components - artık Image kullanacağız
  const CheckIcon = () => (
    <div className="  flex items-center justify-center mb-8">
      <Image
        src="/images/Check.png" // Kendi check icon resminizi koyun
        alt={t('quicklinks.benefits.title')}
        width={180}
        height={180}
        className="object-contain"
      />
    </div>
  )

  const GraduationCapIcon = () => (
    <div className="  flex items-center justify-center mb-8">
      <Image
        src="/images/hut.png" 
        alt={t('quicklinks.studies.title')}
        width={180}
        height={180}
        className="object-contain"
      />
    </div>
  )

  const HeartIcon = () => (
    <div className=" flex items-center justify-center mb-8" style={{borderRadius: '12px'}}>
      <Image
        src="/images/heart.png" 
        alt={t('quicklinks.supplements.title')}
        width={180}
        height={180}
        className="object-contain"
      />
    </div>
  )

  const ArrowRightIcon = () => (
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
  )

  const ExternalLinkIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="d-inline-block ms-1 mt-n1-4"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
  )


  return (
    <section className="bg-[#f8f8f8] py-20 relative overflow-hidden lg:pt-[220px] pt-[100px]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary-500 tracking-[0.05em]  mb-2 font-bold text-[12px] lg:text-sm">
            {t('quicklinks.subtitle')}
          </p>
          <h2 className="text-[clamp(26px,calc(-49.8461538462px+0.0865384615*100vw),40px)]  text-primary-600">
            <span className="text-primary-600 font-bold ">{t('quicklinks.title')}</span> {t('quicklinks.title_suffix')}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Benefits Card */}
          <div className="text-center">
            <CheckIcon />
            
            <h3 className="text-[clamp(20px,calc(-49.8461538462px+0.0865384615*100vw),32px)] font-bold text-primary-600 lg:mb-4 mb-1">
              {t('quicklinks.benefits.title')}
            </h3>
            <p className="text-primary-500  text-[16px] font-[200] mt-0 lg:mt-2 mb-4">
              {t('quicklinks.benefits.subtitle')}
            </p>
            <p className="text-primary-600 max-h-[75px] h-[75px] font-[300] text-base  mb-8 max-w-sm mx-auto">
              {t('quicklinks.benefits.description')}
            </p>
            
            <Link href="/benefits-for-patients">
              <Button
                variant="primary"
                size="lg"
                rounded="rounded-full"
                className="!text-[16px] !font-[400]"
                icon={<ArrowRightIcon />}
                iconPosition="right"
              >
                {t('quicklinks.benefits.button')}
              </Button>
            </Link>
          </div>

          {/* Studies Card */}
          <div className="text-center">
            <GraduationCapIcon />
            
            <h3 className="text-[clamp(20px,calc(-49.8461538462px+0.0865384615*100vw),32px)] font-bold text-primary-600 lg:mb-4 mb-1">
              {t('quicklinks.studies.title')}
            </h3>
            <p className="text-primary-500  text-[16px] font-[200] mt-0 lg:mt-2 mb-4">
              {t('quicklinks.studies.subtitle')}
            </p>
            <p className="text-primary-600 max-h-[75px] h-[75px] font-[300] text-base  mb-8 max-w-sm mx-auto">
              {t('quicklinks.studies.description')}
            </p>
            
            <Link href="/benefits-for-dentists/tissue-level">
              <Button
                variant="primary"
                size="lg"
                rounded="rounded-full"
                className="!text-[16px] !font-[400]"
                icon={<ArrowRightIcon />}
                iconPosition="right"
              >
                {t('quicklinks.studies.button')}
              </Button>
            </Link>
          </div>

          {/* Supplements Card */}
          <div className="text-center">
            <HeartIcon />
            
            <h3 className="text-[clamp(20px,calc(-49.8461538462px+0.0865384615*100vw),32px)] font-bold text-primary-600 lg:mb-4 mb-1">
              {t('quicklinks.supplements.title')}
            </h3>
            <p className="text-primary-500  text-[16px] font-[200] mt-0 lg:mt-2 mb-4">
              {t('quicklinks.supplements.subtitle')}
            </p>
            <p className="text-primary-600 max-h-[75px] h-[75px] font-[300] text-base  mb-8 max-w-sm mx-auto">
              {t('quicklinks.supplements.description')}
            </p>
            
            <div className="space-y-4">
              <Link href="https://www.swiss-biohealth-vital.com/">
                <Button
                  variant="primary"
                  size="lg"
                  rounded="rounded-full"
                  className="!text-[16px] !font-[400]"
                  icon={<ExternalLinkIcon />}
                  iconPosition="right"
                >
                  {t('quicklinks.supplements.button_de')}
                </Button>
              </Link>
              
              <Link href="https://www.swiss-biohealth-vital.ch/">
                <Button
                variant="customOutline" // Yeni variant
                size="custom16"
                rounded="rounded-full"
                className="!shadow-none mt-8 !font-[400]" // Shadow'u kaldır
                icon={<ExternalLinkIcon />}
                iconPosition="right"
              >
                {t('quicklinks.supplements.button_ch')}
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