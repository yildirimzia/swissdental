"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BenefitsForDentistsHero from "./BenefitsForDentistsHero";
import DentalFeatureCards from "./DentalFeatureCards";
import SimpleEntry from "./SimpleEntry";
import SdsEdutaciton from "../components/SdsEdutaciton";
import Bright from "./Bright";
import { useEffect } from "react";



gsap.registerPlugin(ScrollTrigger);
export default function ProductLinesPage() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://swissdentalsolutions.com.tr/dis-hekimleri-icin-seramik-implant-faydalari"
    },
    "headline": "Diş Hekimleri İçin Seramik İmplantın Faydaları",
    "description": "Swiss Dental Solutions - Seramik İmplant",
    "image": "https://swissdentalsolutions.com.tr/images/company/Implantat-Background.jpg",
    "author": {
      "@type": "Organization",
      "name": "Swiss Dental Solutions Türkiye",
      "url": "https://swissdentalsolutions.com.tr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Swiss Dental Solutions Türkiye",
      "logo": {
        "@type": "ImageObject",
        "url": "https://swissdentalsolutions.com.tr/images/turkey-logo.svg"
      }
    },
    "datePublished": "2025-09-14",
    "dateModified": "2025-09-16"
  };

   useEffect(() => {
    // Component mount olduğunda script'i ekle
    const scriptId = 'benefits-dentists-structured-data';
    
    // Önceki script varsa kaldır
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // Yeni script oluştur
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function - component unmount olduğunda script'i kaldır
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
  return (
    <>
    <BenefitsForDentistsHero /> 
    <DentalFeatureCards />
    <SimpleEntry />
    <SdsEdutaciton />
    <Bright />
    </>
  );
}
