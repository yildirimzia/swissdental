import { useLanguage } from '@/contexts/LanguageContext'

export const useTranslation = (namespace?: string) => {
  const { t, currentLanguage, setLanguage, isLoaded } = useLanguage()
  
  // Namespace-specific translation function
  const tNamespace = (key: string) => {
    if (namespace) {
      return t(key, namespace)
    }
    return t(key)
  }
  
  return {
    t: tNamespace,
    currentLanguage,
    changeLanguage: setLanguage,
    isLoaded
  }
}

// Specific hooks for different namespaces
export const useCommonTranslation = () => useTranslation('common')
export const useNavigationTranslation = () => useTranslation('navigation')
export const useHomeTranslation = () => useTranslation('home')
export const useProductsTranslation = () => useTranslation('products')
export const useServiceTranslation = () => useTranslation('service')
export const useAboutTranslation = () => useTranslation('about')
export const useContactTranslation = () => useTranslation('contact')
export const useFooterTranslation = () => useTranslation('footer')
export const useProductLinesTranslation = () => useTranslation('productlines')