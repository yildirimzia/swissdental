import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { useScrollAnimation } from "../components/useScrollAnimation"; // Bu satırı güncelledik

function LifetimeWarranty() {
  const { ref: warrantyRef, isVisible: warrantyVisible } =
    useScrollAnimation(0.3);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );
  return (
    <section
      ref={warrantyRef}
      className="flex sm:justify-around sm:flex-row flex-col-reverse items-center"
    >
      <div className="items-center gap-12 flex">
        {/* Sol taraf */}
        <div
          className={`
            transition-all duration-1000 ease-out p-8
            ${
              warrantyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <h2 className="text-primary-600 text-[26px] mb-11 sm:text-[40px] font-[400] tracking-[-0.03em] leading-[1.2]">
            Lifetime Warranty
          </h2>
          <p className="mt-4 text-primary-600 text-[16px] font-extralight leading-7 mb-8">
            Claims processing for SDS implants and abutments
          </p>

          <Link href="https://sds.directus.app/assets/64ab10ca-fbec-441d-a037-e5c96a49d1a6">
            <Button
              variant="primary"
              size="lg"
              rounded="rounded-[100px]"
              className="text-[16px] font-[400]"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline-block"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                  <path d="M11 13l9 -9"></path>
                  <path d="M15 4h5v5"></path>
                </svg>
              }
              iconPosition="right"
            >
              Warranty conditions
            </Button>
          </Link>
        </div>
      </div>

      {/* Sağ taraf: container dışında, full sağa yaslı */}
      <div
        className={`
          h-full sm:w-1/2 w-full flex items-center justify-center
          transition-all duration-1000 ease-out
          ${
            warrantyVisible
              ? "opacity-100 sm:translate-x-0 translate-y-0"
              : "opacity-0 sm:translate-x-8 translate-y-8"
          }
        `}
      >
        <Image
          src="/images/product-lines/Lifetime-Warranty.png"
          alt="Lifetime Warranty Logo"
          width={851}
          height={800}
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default LifetimeWarranty;
