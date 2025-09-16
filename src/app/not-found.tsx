// app/not-found.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "./components/Button";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  // (Opsiyonel) GA4 / dataLayer event’i
  useEffect(() => {
    // @ts-ignore
    window?.dataLayer?.push?.({
      event: "page_404",
      page_path: window.location.pathname,
      page_title: "404 Not Found",
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 ">
        <div className="container h-full px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
            <div className="w-full lg:w-1/2">
                <p className="text-[42px] font-medium text-primary-500 ">404</p>
                <h1 className="mt-3 text-2xl font-semibold text-primary-600 dark:text-white md:text-3xl">Sayfa bulunamadı</h1>
                <p className="mt-4 text-primary-600 ">Üzgünüz, aradığınız sayfa mevcut değil.</p>

                <div className="flex items-center mt-6 gap-x-3">
                <Link href="/">
                  <Button
                    variant="customOutline"
                    size="custom16"
                    rounded="rounded-full"
                    className="!shadow-none mt-8 !font-[400] cursor-pointer"
                    iconPosition="right"
                  >
                    Ana Sayfa
                  </Button>
                </Link>
                </div>
            </div>

<div
  className="bg-no-repeat bg-bottom bg-contain w-full min-h-[560px] lg:w-1/2 lg:min-h-[560px] mt-8 lg:mt-0"
  style={{ backgroundImage: "url('/images/404.jpg')" }} // basePath varsa "/sds/images/404.jpg" gerekebilir
/>
        </div>
    </section>
  );
}
