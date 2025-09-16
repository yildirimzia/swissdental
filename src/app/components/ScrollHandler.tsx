"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get('scrollTo');

  useEffect(() => {
    if (scrollTo) {
      const timer = setTimeout(() => {
        const targetId = scrollTo.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(targetId);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [scrollTo]);

  return null; // Görsel render etmez
}