"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '@/contexts/LoadingContext';
import { useCommonTranslation } from '@/hooks/useTranslation';

const GlobalLoading = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  const pathname = usePathname();
  const { isLanguageLoading } = useLoading();
  const { t: tCommon, isLoaded } = useCommonTranslation();

  // Sayfa yüklenme loading'i
  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsPageLoading(false);
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

  // Fallback text fonksiyonu
  const getLoadingText = () => {
    if (!isLoaded) {
      // Çeviriler yüklenmemişse fallback text
      return isLanguageLoading ? "Changing Language..." : "Yükleniyor...";
    }
    
    // Çeviriler yüklenmişse çeviri kullan
    return isLanguageLoading 
      ? tCommon("changeLanguage.language_one") 
      : 'Yükleniyor...'
  };

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
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