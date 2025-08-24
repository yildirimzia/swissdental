"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button"; // kendi butonun
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function PioneeringWork() {
  return (
    // ÖNEMLİ: overflow-visible ki görsel yukarı taşabilsin
    <section className="bg-white sm:mt-[200px] mt-[50px]   overflow-visible">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="text-mint font-[400] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            PIONEERING WORK
          </p>

          <h1 className="text-primary-600 text-[32px] sm:text-[48px] font-[700] leading-[1.2]">
            SWISS BIOHEALTH CLINIC
          </h1>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
            A pioneering medical philosophy
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            The SWISS BIOHEALTH CLINIC in Kreuzlingen is your centre of
            excellence in biological dentistry. We offer top-notch dental
            treatments, modern technologies, individual focus on your health,
            excellent service, and continuous training and education for optimal
            results.
          </p>

          <Link href="/implants" className="">
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
                >
                  <path d="M5 12l14 0"></path>
                  <path d="M13 18l6 -6"></path>
                  <path d="M13 6l6 6"></path>
                </svg>
              }
              iconPosition="right"
            >
              To the SWISS BIOHEALTH CLINIC
            </Button>
          </Link>
        </div>

        {/* Sağ: Background image */}
        <div
          className="order-1 lg:order-2 block w-full bg-no-repeat bg-cover 
             h-[546px] sm:h-[920px] 
             -translate-y-0 sm:-translate-y-30"
          style={{
            backgroundImage:
              "url(/images/benefits-for-patients/Klinik.jpg)",
          }}
        ></div>
      </div>
    </section>
  );
}
