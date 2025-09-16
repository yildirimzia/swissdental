"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';

const GlobalLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const { isLanguageLoading } = useLoading();

  // Sayfa yüklenme loading'i
  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoading(false);
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsPageLoading(false);
      setIsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Route değişikliği loading'i
  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => setIsPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Herhangi bir loading aktifse göster
  const showLoading = isPageLoading || isLanguageLoading;

  // Body scroll kontrolü - loading gösterilirken scroll'u engelle
  useEffect(() => {
    if (showLoading) {
      // Mevcut scroll pozisyonunu kaydet
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      // HTML ve Body elementlerini sabitle
      const htmlElement = document.documentElement;
      const bodyElement = document.body;
      
      // Mevcut stilleri kaydet
      const originalHtmlOverflow = htmlElement.style.overflow;
      const originalBodyOverflow = bodyElement.style.overflow;
      const originalBodyPosition = bodyElement.style.position;
      const originalBodyTop = bodyElement.style.top;
      const originalBodyLeft = bodyElement.style.left;
      const originalBodyWidth = bodyElement.style.width;
      const originalBodyHeight = bodyElement.style.height;
      
      // Scroll'u engelle
      htmlElement.style.overflow = 'hidden';
      bodyElement.style.overflow = 'hidden';
      bodyElement.style.position = 'fixed';
      bodyElement.style.top = `-${scrollY}px`;
      bodyElement.style.left = `-${scrollX}px`;
      bodyElement.style.width = '100vw';
      bodyElement.style.height = '100vh';
      
      // Tüm scroll event'lerini engelle
      const preventScroll = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      const preventKeyScroll = (e: KeyboardEvent) => {
        // Arrow keys, Page Up/Down, Home, End, Space bar'ı engelle
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
        }
      };
      
      // Event listener'ları ekle
      window.addEventListener('scroll', preventScroll, { passive: false });
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeyScroll);
      
      // Cleanup: Loading bittiğinde scroll'u geri aç
      return () => {
        // Event listener'ları kaldır
        window.removeEventListener('scroll', preventScroll);
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('keydown', preventKeyScroll);
        
        // Stilleri geri yükle
        htmlElement.style.overflow = originalHtmlOverflow;
        bodyElement.style.overflow = originalBodyOverflow;
        bodyElement.style.position = originalBodyPosition;
        bodyElement.style.top = originalBodyTop;
        bodyElement.style.left = originalBodyLeft;
        bodyElement.style.width = originalBodyWidth;
        bodyElement.style.height = originalBodyHeight;
        
        // Scroll pozisyonunu geri yükle
        window.scrollTo(scrollX, scrollY);
      };
    }
  }, [showLoading]);

  // Loading text fonksiyonu
  const getLoadingText = () => {
    if (!isLoaded) {
      // Çeviriler yüklenmemişse fallback text
      return isLanguageLoading ? "Changing Language..." : "Yükleniyor...";
    }
    // Çeviriler yüklenmişse buraya i18n çevirilerini ekleyebilirsiniz
    return isLanguageLoading ? "Changing Language..." : "Yükleniyor...";
  };

  if (!showLoading) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      onWheel={(e) => e.preventDefault()} // Mouse wheel'i engelle
      onTouchMove={(e) => e.preventDefault()} // Touch scroll'unu engelle
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-primary-600">
          {getLoadingText()}
        </p>
        
        {/* Loading dots animation */}
        <div className="flex justify-center mt-2 space-x-1">
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLoading;