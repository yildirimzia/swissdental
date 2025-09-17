"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GlobalAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url =
      pathname + (searchParams?.size ? `?${searchParams.toString()}` : "");

    // SPA page_view
    // @ts-ignore
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
