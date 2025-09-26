"use client";

import Link from "next/link";
import Button from "../components/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ExternalLinkIcon = () => (
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
    className="d-inline-block ms-1 mt-n1-4"
  >
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
    <path d="M11 13l9 -9"></path>
    <path d="M15 4h5v5"></path>
  </svg>
);

gsap.registerPlugin(ScrollTrigger);
export default function PioneeringWork() {
  return (
    // ÖNEMLİ: overflow-visible ki görsel yukarı taşabilsin
    <section className="bg-white  overflow-visible">
      <div className="lg:max-w-[1380px]  relative gap-11 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[44%_50%] 2xl:grid-cols-[60%_40%] items-center mr-auto">
        {/* Sol: Metin */}
        <div
          className="order-1 lg:order-1 block w-full bg-no-repeat bg-cover 
             h-[546px] sm:h-[920px]  bg-center
             -translate-y-0 sm:-translate-y-30"
          style={{
            backgroundImage:
              "url(/images/benefits-for-patients/Beratungsgespraech.jpg)",
          }}
        >
            <div className="absolute bottom-0 left-7 bg-[#ffffff80] backdrop-blur-sm flex flex-col p-4 ">
                <span className="text-primary-600 text-[16px] font-[700]">Dr. Karl Ulrich Volz</span>
                <span className="text-primary-600 text-[16px] font-[300]">Dr. Karl Ulrich Volz, Seramik İmplantoloji Öncüsü</span>
            </div>
        </div>

        {/* Sağ: Background image */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-2">
          {/* Eyebrow */}
          <p className="text-mint font-[400] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            ÖNCÜ ÇALIŞMALAR
          </p>

          <h1 className="text-primary-600 text-[32px] sm:text-[48px] font-[700] leading-[1.2]">
            SWISS BIOHEALTH KLİNİĞİ
          </h1>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
            Öncü bir tıbbi felsefe 
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
Kreuzlingen'deki SWISS BIOHEALTH KLİNİĞİ, biyolojik diş hekimliğinde mükemmeliyet merkezinizdir. En iyi dental tedavileri, modern teknolojileri, sağlığınıza bireysel odaklanmayı, mükemmel hizmeti ve optimal sonuçlar için sürekli eğitim ve öğretimi sunuyoruz
          </p>

          <Link href="/implants" className="">
            <Button
              variant="primary"
              size="lg"
              rounded="rounded-[100px]"
              className="text-[16px] font-[400]"
              icon={<ExternalLinkIcon />}
              iconPosition="right"
            >
              SWISS BIOHEALTH CLINIC'e
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
