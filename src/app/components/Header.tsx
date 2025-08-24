'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { useNavigationTranslation, useCommonTranslation } from '@/hooks/useTranslation'
import { useLoading } from '@/contexts/LoadingContext'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null)
  const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState<string | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Translation hooks for different namespaces
  const { t: tNav, currentLanguage, changeLanguage, isLoaded } = useNavigationTranslation()
  const { t: tCommon } = useCommonTranslation()
  
  // Loading context
  const { setLanguageLoading } = useLoading()

  // Body scroll lock effect - mobile menü açıldığında
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Scroll'u engelle
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = '0'
      document.body.style.left = '0'
      document.body.style.right = '0'
    } else {
      // Scroll'u geri aç
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
    }

    // Cleanup - component unmount edildiğinde
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
    }
  }, [isMobileMenuOpen])

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close desktop menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      // Sadece desktop menü için dış tıklama kontrolü
      if (activeDesktopSubmenu && !target.closest('.desktop-menu-item')) {
        setActiveDesktopSubmenu(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [activeDesktopSubmenu])

  // Language switch handler with loading
  const handleLanguageSwitch = () => {
    const newLanguage = currentLanguage === 'en' ? 'tr' : 'en'
    
    // Loading'i başlat
    setLanguageLoading(true)
    
    // Dil değiştir
    changeLanguage(newLanguage)
    
    // Mobile menüyü kapat (eğer açıksa)
    if (isMobileMenuOpen) {
      toggleMobileMenu()
    }
    
    // Loading'i bitir (çeviriler yüklendikten sonra)
    setTimeout(() => {
      setLanguageLoading(false)
    }, 800) // Çevirilerin yüklenmesi için yeterli süre
  }

  // Mobile menu toggle function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Submenu'yu da kapat
    setActiveMobileSubmenu(null)
  }

  // Mobile submenu toggle - mobile menü kapatılmasın
  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu)
  }

  // Icons
  const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6l6 -6"></path>
    </svg>
  )

  const ChevronLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6l6 6l-6 6"></path>
    </svg>
  )

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5"></path>
      <path d="M12 19l-7-7 7-7"></path>
    </svg>
  )

  const WordIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mt-n1-4">
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
      <path d="M3.6 9h16.8"></path>
      <path d="M3.6 15h16.8"></path>
      <path d="M11.5 3a17 17 0 0 0 0 18"></path>
      <path d="M12.5 3a17 17 0 0 1 0 18"></path>
    </svg>
  )

  const toggleDesktopSubmenu = (menu: string) => {
    if (activeDesktopSubmenu === menu) {
      // Aynı menüye tıklandıysa kapat
      setActiveDesktopSubmenu(null)
    } else if (activeDesktopSubmenu) {
      // Farklı menüye tıklandıysa animasyon ile değiştir
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveDesktopSubmenu(menu)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50) // Yeni içerik için kısa delay
      }, 200) // Eski içeriğin kaybolma süresi
    } else {
      // Hiç menü açık değilse direkt aç
      setActiveDesktopSubmenu(menu)
    }
  }

  // Menu content renderer
  const renderMenuContent = () => {
    if (!isLoaded) return null

    switch (activeDesktopSubmenu) {
      case 'products':
        return (
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4 mt-[26px] ml-[11px]">
              <Link href="benefits-for-patients" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('products.benefits_patients')}
              </Link>
              <Link href="benefits-for-dentists" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('products.benefits_dentists')}
              </Link>
              <Link href="/product-lines" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('products.product_lines')}
              </Link>
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('products.science')}
              </Link>
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('products.user')}
              </Link>
            </div>
          </div>
        )
      case 'service':
        return (
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4 mt-[26px] ml-[11px]">
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('service.technical_support')}
              </Link>
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('service.customer_service')}
              </Link>
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('service.documentation')}
              </Link>
            </div>
          </div>
        )
      case 'about':
        return (
          <div className="grid grid-cols-1 gap-8">
            <div className="space-y-4 mt-[26px] ml-[11px]">
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('about.our_story')}
              </Link>
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('about.leadership_team')}
              </Link>
              <Link href="#" className="block py-2 text-[45px] text-primary-600 hover:text-primary-500 font-light transition-colors">
                {tNav('about.careers')}
              </Link>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  // Mobile submenu content renderer
  const renderMobileSubmenuContent = () => {
    if (!isLoaded) return null

    switch (activeMobileSubmenu) {
      case 'products':
        return (
          <div className="space-y-4">
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('products.benefits_patients')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('products.benefits_dentists')}
            </Link>
            <Link 
              href="/product-lines" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('products.product_lines')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('products.science')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('products.top_user')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('products.sscp')}
            </Link>
          </div>
        )
      case 'service':
        return (
          <div className="space-y-4">
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('service.technical_support')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('service.customer_service')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('service.documentation')}
            </Link>
          </div>
        )
      case 'about':
        return (
          <div className="space-y-4">
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('about.our_story')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('about.leadership_team')}
            </Link>
            <Link 
              href="#" 
              className="block py-3 text-primary-600 hover:text-primary-500 transition-colors text-lg"
              onClick={() => toggleMobileMenu()}
            >
              {tNav('about.careers')}
            </Link>
          </div>
        )
      default:
        return null
    }
  }

  const renderLanguageToggle = () => {
    if (!isLoaded) return null

    return (
      <Button
        variant="customOutline" // Yeni variant
        size="custom16"
        rounded="rounded-full"
        className="!shadow-none mt-8 !font-[400] flex cursor-pointer" // Shadow'u kaldır ve cursor eklendi
        iconPosition="right"
        onClick={handleLanguageSwitch}
      >
        <div className='flex items-center gap-0.5'>
          <WordIcon />
          <div>
            {currentLanguage === 'en' ? (
              <>{tCommon('language.switch_to_turkish')}</>
            ) : (
              <>{tCommon('language.switch_to_english')}</>
            )}
          </div>
        </div>
      </Button>
    )
  }

  // Loading state - çeviriler yüklenene kadar basit header göster
  if (!isLoaded) {
    return (
      <header className="relative z-50 bg-transparent container-dental">
        <div className="header-logo h-[75px] lg:h-31 flex items-center">
          <div className="">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={263} 
                height={35}
                className="hidden lg:block"
              />
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={165} 
                height={22}
                className="block lg:hidden ml-[5px]"
              />
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      {/* Fixed Navigation Section */}
      <header className="relative z-50 bg-transparent container-dental">
        <div className="header-logo h-[75px] lg:h-31 flex items-center">
          <div className="sm:ml-[-11px] ml-0">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={263} 
                height={35}
                className="hidden lg:block"
              />
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={165} 
                height={22}
                className="block lg:hidden ml-[5px]"
              />
            </Link>
          </div>
        </div>

        <div className="">
          {/* Desktop Navigation Section - Right Half (Fixed) */}
          <div className="duration-30 hidden lg:flex items-center fixed top-0 right-0 bg-white h-31 w-[57.5%] 2xl:w-[55.5%]">
            <div className="container-dental w-full">
              <div className="flex items-center justify-between">
                {/* Navigation Menu */}
                <div className="flex items-center space-x-8">
                  {/* Products */}
                  <div className="relative desktop-menu-item">
                    <button 
                      onClick={() => toggleDesktopSubmenu('products')}
                      className={`ml-[10px] flex items-center space-x-1 font-normal text-base transition-colors ${
                        activeDesktopSubmenu === 'products' 
                          ? 'text-primary-500' 
                          : 'text-primary-600 hover:text-primary-600'
                      }`}
                    >
                      <span className='mr-[5px]'>{tNav('main.products')}</span>
                      <ChevronDownIcon />
                    </button>
                  </div>

                  {/* Service */}
                  <div className="relative desktop-menu-item">
                    <button 
                      onClick={() => toggleDesktopSubmenu('service')}
                      className={`flex items-center space-x-1 font-normal text-base transition-colors ${
                        activeDesktopSubmenu === 'service' 
                          ? 'text-primary-500' 
                          : 'text-primary-600 hover:text-primary-500'
                      }`}
                    >
                      <span className='mr-[5px]'>{tNav('main.service')}</span>
                      <ChevronDownIcon />
                    </button>
                  </div>

                  {/* About SDS */}
                  <div className="relative desktop-menu-item">
                    <button 
                      onClick={() => toggleDesktopSubmenu('about')}
                      className={`flex items-center space-x-1 font-normal text-base transition-colors ${
                        activeDesktopSubmenu === 'about' 
                          ? 'text-primary-500' 
                          : 'text-primary-600 hover:text-primary-600'
                      }`}
                    >
                      <span className='mr-[5px]'>{tNav('main.about')}</span>
                      <ChevronDownIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Single Desktop Menu Container - Shared for all menus */}
          <div className={`fixed top-30 right-0 w-[57.5%] 2xl:w-[55.5%] backdrop-filter backdrop-blur-[35px] bg-[#fafafae6] h-[calc(100vh-124px)] shadow-2xl transition-all duration-300 z-[-1] ${
            activeDesktopSubmenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}>
            <div className="p-8 h-full overflow-y-auto">
              {/* Content transition wrapper */}
              <div className={`transition-all duration-300 ease-in-out ${
                isTransitioning 
                  ? 'opacity-0 transform -translate-y-4' 
                  : 'opacity-100 transform translate-y-0'
              }`}>
                {!isTransitioning && renderMenuContent()}
                {renderLanguageToggle()}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden fixed top-0 right-0 z-50 bg-white lg:h-31 h-[75px] flex items-center">
            <div className="px-4">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-primary-600 hover:text-primary-500 transition-colors mobile-menu-container"
                aria-label={tCommon('buttons.menu')}
              >
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden fixed lg:top-31 top-18 left-0 right-0 bg-[#f4f4f4] shadow-2xl transition-all duration-300 ease-in-out z-50 mobile-menu-container ${
            isMobileMenuOpen ? 'h-[calc(100vh-0px)] opacity-100 visible' : 'h-0 opacity-0 invisible'
          } overflow-hidden`}>
            <div className="relative h-full">
              {/* Main Menu */}
              <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                activeMobileSubmenu ? '-translate-x-full' : 'translate-x-0'
              }`}>
                <div className="p-6 space-y-6 h-full overflow-y-auto mt-[26px]">
                  {/* Products */}
                  <div className="border-gray-200 mb-[13px]">
                    <button
                      onClick={() => toggleMobileSubmenu('products')}
                      className="flex text-[32px] font-[300] items-center justify-between w-full text-left text-primary-600 hover:text-primary-500 transition-colors text-lg"
                    >
                      <span>{tNav('main.products')}</span>
                      <ChevronLeftIcon />
                    </button>
                  </div>

                  {/* Service */}
                  <div className="border-gray-200 mb-[13px]">
                    <button
                      onClick={() => toggleMobileSubmenu('service')}
                      className="flex text-[32px] font-[300] items-center justify-between w-full text-left text-primary-600 hover:text-primary-500 transition-colors text-lg"
                    >
                      <span>{tNav('main.service')}</span>
                      <ChevronLeftIcon />
                    </button>
                  </div>

                  {/* About SDS */}
                  <div className="border-gray-200 mb-[13px]">
                    <button
                      onClick={() => toggleMobileSubmenu('about')}
                      className="flex text-[32px] font-[300] items-center justify-between w-full text-left text-primary-600 hover:text-primary-500 transition-colors text-lg"
                    >
                      <span>{tNav('main.about')}</span>
                      <ChevronLeftIcon />
                    </button>
                  </div>

                  {/* Language Toggle for Mobile */}
                  <div className="mt-8">
                    {renderLanguageToggle()}
                  </div>
                </div>
              </div>

              {/* Submenu */}
              <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
                activeMobileSubmenu ? 'translate-x-0' : 'translate-x-full'
              }`}>
                <div className="p-6 h-full overflow-y-auto">
                  {/* Back Button */}
                  <div className="mb-6">
                    <button
                      onClick={() => setActiveMobileSubmenu(null)}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-500 transition-colors"
                    >
                      <BackIcon />
                      <span className="text-lg font-medium">{tCommon('buttons.back')}</span>
                    </button>
                  </div>

                  {/* Submenu Content */}
                  <div className="space-y-2">
                    {renderMobileSubmenuContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header