"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

function sendPageView(url: string) {
  // @ts-ignore
  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  });
}

export default function GlobalAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastUrlRef = useRef<string>("");

  // İlk yüklemede: gtag hazır olana kadar bekle ve bir kez gönder
  useEffect(() => {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".local")) return;

    const url = pathname + (searchParams?.size ? `?${searchParams.toString()}` : "");

    let tries = 0;
    const trySend = () => {
      // @ts-ignore
      if (typeof window.gtag === "function") {
        if (lastUrlRef.current !== url) {
          sendPageView(url);
          lastUrlRef.current = url;
        }
      } else if (tries < 20) {
        tries += 1;
        setTimeout(trySend, 250); 
      }
    };

    trySend();
  }, []); // sadece ilk mount

  // Route değişimlerinde gönder
  useEffect(() => {
    const host = window.location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".local")) return;

    const url = pathname + (searchParams?.size ? `?${searchParams.toString()}` : "");
    if (url && lastUrlRef.current !== url) {
      sendPageView(url);
      lastUrlRef.current = url;
    }
  }, [pathname, searchParams]);

  return null;
}
