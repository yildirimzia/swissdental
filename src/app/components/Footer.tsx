'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFooterTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  // Translation hook - footer namespace kullanıyoruz
  const { t } = useFooterTranslation();



  // Navigation sections - çevirilerden al
  const getNavSections = () => {
    const sections = [];
    
    // PRODUCTS section
    sections.push({
      title: t('navigation.products.title'),
      links: [
        { href: '/benefits-patients', label: t('navigation.products.links.benefits_patients') },
        { href: '/benefits-dentists', label: t('navigation.products.links.benefits_dentists') },
        { href: '/product-lines', label: t('navigation.products.links.product_lines') },
        { href: '/science', label: t('navigation.products.links.science') },
        { href: '/top-user', label: t('navigation.products.links.top_user') },
        { href: '/sscp', label: t('navigation.products.links.sscp') },
      ]
    });

    // SERVICE section
    sections.push({
      title: t('navigation.service.title'),
      links: [
        { href: '/service-support', label: t('navigation.service.links.service_support') },
        { href: '/documents', label: t('navigation.service.links.documents') },
        { href: '/podcast', label: t('navigation.service.links.podcast') },
        { href: '/contact', label: t('navigation.service.links.contact') },
      ]
    });

    // ABOUT SDS section
    sections.push({
      title: t('navigation.about.title'),
      links: [
        { href: '/company', label: t('navigation.about.links.company') },
        { href: '/career', label: t('navigation.about.links.career') },
        { href: '/history', label: t('navigation.about.links.history') },
      ]
    });

    return sections;
  };

  const navSections = getNavSections();

  const footerLinks = [
    { href: '/imprint', label: t('footer_links.imprint') },
    { href: '/data-policy', label: t('footer_links.data_policy') },
    { href: '/gtc', label: t('footer_links.terms_conditions') },
  ];
  
  const socialIcons = [
    { href: '#', label: 'LinkedIn', icon: '/logo-linkedin.svg' },
    { href: '#', label: 'Instagram', icon: '/logo-instagram.svg' },
    { href: '#', label: 'YouTube', icon: '/mdi_youtube.svg' },
    { href: '#', label: 'Spotify', icon: '/Spotify-Logo.svg' },
    { href: '#', label: 'Apple', icon: '/Apple-Logo.svg' },
  ];

  return (
    <footer className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-between items-center pt-16 pb-8 mb-8 ">
          {/* Logo */}
          <div className="lg:flex items-center gap-4 hidden">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={263} 
                height={35}
                className="hidden lg:block"
                priority
              />
            </Link>
          </div>
          
          {/* Header Buttons */}
          <div className="flex gap-4 lg:flex-row flex-col mt-8">
            <Link 
              href="/education" 
              className="flex items-center gap-2 px-[20px] py-[13px] border bg-[#f9f9f9] border-[#e0e0e0] text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300  w-[152px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="d-inline-block me-1 me-lg-0 me-xl-1 mt-n1-4 shrink-0">
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
              </svg>
              {t('header_buttons.education')}
            </Link>
            <Link 
              href="/clinic" 
              className="flex items-center gap-2 px-[20px] py-[13px] border bg-[#f9f9f9] border-[#e0e0e0] text-primary-600 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="d-inline-block me-1 me-lg-0 me-xl-1 mt-n1-4">
                <path d="M3 21l18 0"></path>
                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                <path d="M10 9l4 0"></path>
                <path d="M12 7l0 4"></path>
              </svg>
              {t('header_buttons.clinic')}
            </Link>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex  py-12 gap-8 flex-wrap md:flex-nowrap">
          {navSections.map((section, index) => (
            <div key={index} className="">
              <h3 className="text-primary-600 font-extralight text-sm mb-6 tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-primary-500 text-base hover:text-primary-600 transition-all duration-300 block py-1 font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='mb-9 block  lg:hidden'>
          <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={263} 
                height={35}
                className="block  lg:hidden"
                priority
              />
            </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#F5F5F5] min-h-18">
        <div className='max-w-7xl mx-auto px-4'>
          <div className="flex justify-between items-center py-6 flex-col-reverse lg:flex-row lg:gap-0 gap-3">
            {/* Footer Links */}
            <div className="flex gap-2">
              {footerLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="text-primary-500 text-[16px] font-semibold hover:text-primary-600 transition-all duration-300 "
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className=""
                  aria-label={social.label}
                >
                <Image 
                  src={social.icon} 
                  alt={social.label} 
                  width={24} 
                  height={24}
                  className=""
                />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;