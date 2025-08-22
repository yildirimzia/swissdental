'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'

type Language = 'en' | 'tr'

interface LanguageContextType {
  currentLanguage: Language
  setLanguage: (lang: Language) => void
  t: (key: string, namespace?: string) => string
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// localStorage'dan güvenli dil okuma - client-side only
const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en'
  
  try {
    const stored = localStorage.getItem('language')
    return (stored && ['en', 'tr'].includes(stored)) ? stored as Language : 'en'
  } catch {
    return 'en'
  }
}

// i18next configuration - lazy initialization
let i18nPromise: Promise<void> | null = null;

const initI18n = (initialLang: Language = 'en') => {
  if (i18nPromise) return i18nPromise;
  
  console.log('Initializing i18n with language:', initialLang);
  
  i18nPromise = i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
      lng: initialLang,
      fallbackLng: 'en',
      debug: false, // Debug'ı kapat performans için

      ns: ['home', 'footer', 'common', 'navigation', 'productlines'],
      defaultNS: 'home',
      
      preload: ['en', 'tr'],
      
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        allowMultiLoading: false,
      },
      
      interpolation: {
        escapeValue: false,
      },
      
      react: {
        useSuspense: false,
      },

      load: 'languageOnly',
      
      cache: {
        enabled: true, // Cache'i aç performans için
      }
    })
    .then(() => {
      console.log('i18n initialized successfully with language:', initialLang);
    });
    
  return i18nPromise;
};

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [isHydrated, setIsHydrated] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language | null>(null) // null ile başla
  const [isLoaded, setIsLoaded] = useState(false)

  // İlk hydration - bu SSR/CSR uyumsuzluğunu önler
  useEffect(() => {
    const storedLang = getStoredLanguage();
    setCurrentLanguage(storedLang);
    setIsHydrated(true);
    
    // i18n'i doğru dille başlat
    initI18n(storedLang).then(() => {
      setIsLoaded(true);
    }).catch((error) => {
      console.error('i18n initialization error:', error);
      setIsLoaded(true); // Hata olsa bile yüklendi işaretle
    });
  }, []);

  // Dil değişimi event listener'ı
  useEffect(() => {
    if (!isHydrated) return;

    const handleLanguageChanged = (lng: string) => {
      console.log('Language changed event:', lng);
      setCurrentLanguage(lng as Language);
    }

    i18n.on('languageChanged', handleLanguageChanged);
    return () => i18n.off('languageChanged', handleLanguageChanged);
  }, [isHydrated]);

  const setLanguage = async (lang: Language) => {
    try {
      console.log('Changing language to:', lang);
      
      // localStorage'a kaydet
      localStorage.setItem('language', lang);
      
      // State'i güncelle
      setCurrentLanguage(lang);
      
      // i18n'i güncelle
      if (i18n.isInitialized) {
        await i18n.changeLanguage(lang);
      }
      
      // Force refresh kaldırıldı - component'ler otomatik güncellenecek
      
    } catch (error) {
      console.error('Language change error:', error);
    }
  }

  const t = (key: string, namespace?: string): string => {
    if (!isLoaded || !isHydrated || !i18n.isInitialized || !currentLanguage) {
      return key; // Fallback - key'i döndür
    }

    try {
      const targetNamespace = namespace || 'home';
      const result = i18n.t(key, { 
        ns: targetNamespace, 
        lng: currentLanguage,
        fallbackLng: 'en'
      });
      
      return result !== key ? result : key;
    } catch (error) {
      console.warn('Translation error:', error);
      return key;
    }
  }

  const value: LanguageContextType = {
    currentLanguage: currentLanguage || 'en', // Fallback to 'en'
    setLanguage,
    t,
    isLoaded: isLoaded && isHydrated && currentLanguage !== null
  }

  // Normal render - invisible wrapper kaldırıldı
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook'ları namespace ile tanımla
export const useTranslation = (namespace?: string) => {
  const { t, currentLanguage, setLanguage, isLoaded } = useLanguage()
  
  const tNamespace = (key: string) => {
    return t(key, namespace)
  }
  
  return {
    t: tNamespace,
    currentLanguage,
    changeLanguage: setLanguage,
    isLoaded
  }
}

// Specific hooks
export const useCommonTranslation = () => useTranslation('common')
export const useNavigationTranslation = () => useTranslation('navigation')
export const useHomeTranslation = () => useTranslation('home')
export const useProductsTranslation = () => useTranslation('products')
export const useServiceTranslation = () => useTranslation('service')
export const useAboutTranslation = () => useTranslation('about')
export const useContactTranslation = () => useTranslation('contact')
export const useFooterTranslation = () => useTranslation('footer')
export const useProductLinesTranslation = () => useTranslation('productlines')