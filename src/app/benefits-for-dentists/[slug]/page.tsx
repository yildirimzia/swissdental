"use client"
import { notFound } from "next/navigation";
import { DETAIL_CONTENT } from "../data/detailContent"; // Path düzelt
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button"; // Path düzelt
import LevelSection from "./LevelSection";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import SdsEdutaciton from "../../components/SdsEdutaciton";
import DoctorBlock from "@/app/components/DoctorBlock";
interface PageProps {
  params: {
    slug: string;
  };
}

const CARD_INFO = {
  "tissue-level": {
    title: "Tissue level",
    icon: "/images/benefits-for-patients/tissueLevel.svg",
  },
  "zirconium-dioxide": {
    title: "Zirconium dioxide",
    icon: "/images/benefits-for-patients/tabler_affiliate.svg",
  },
  "dynamic-thread": {
    title: "Dynamic thread",
    icon: "/images/benefits-for-patients/Dynamic_Thread.svg",
  },
  "clean-sterile": {
    title: "Clean & sterile",
    icon: "/images/benefits-for-patients/CleanImplant.png",
  },
  "implant-design": {
    title: "Implant design",
    icon: "/images/benefits-for-patients/ImplantDesign.svg",
  },
  concept: {
    title: "Concept",
    icon: "/images/benefits-for-patients/Group.svg",
  },
} as const;

export default function CardDetailPage({ params }: PageProps) {
  const { slug } = params;
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get('scrollTo');

  if (!DETAIL_CONTENT[slug as keyof typeof DETAIL_CONTENT]) {
    notFound();
  }

  useEffect(() => {
    if (scrollTo) {
      // Sayfa yüklendikten sonra biraz bekle
      const timer = setTimeout(() => {
        // Title'ı ID'ye çevir
        const targetId = scrollTo.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(targetId);
        
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
      }, 500); // 500ms bekle

      return () => clearTimeout(timer);
    }
  }, [scrollTo]);

  const content = DETAIL_CONTENT[slug as keyof typeof DETAIL_CONTENT];
  const cardInfo = CARD_INFO[slug as keyof typeof CARD_INFO];

  return (
    <div className="min-h-scree">
      {/* Hero Section */}
      <section className="relative isolate">
        {/* Outer background (very light grey -> transparent) */}
        <div className="">
          {/* Inset white panel */}
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
            <div className="relative my-10 sm:my-14 md:my-20  bg-[linear-gradient(180deg,#fff_58.33%,#fff0_100%)]">
              {/* big top/bottom padding to match the spacing in the screenshot */}
              <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-24 sm:py-28 md:py-36">
                {/* Overline */}
                <p className="mx-auto mb-8 text-center text-[11px] sm:text-xs tracking-[0.25em] text-primary-500 uppercase">
                  {content.hero.title}
                </p>
                {/* Headline */}
                <h1 className="text-center sm:text-[130px] text-[68px] font-extrabold leading-[0.95] text-primary-600">
                  {content.hero.subtitle}
                </h1>

                {/* Supporting copy */}
                <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                  {content.hero.description}
                </p>
                <div className="flex justify-center">
                  <Link href="/supplements-ch">
                    <Button
                      variant="customOutline"
                      size="custom16"
                      rounded="rounded-full"
                      className="!shadow-none mt-8 !font-[400] cursor-pointer"
                      iconPosition="right"
                    >
                      {content.hero.button}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full"
        style={{
          // Görseldeki çok açık gri panel hissi
          background:
            "linear-gradient(180deg, rgba(246,247,246,1) 0%, rgba(246,247,246,1) 65%, rgba(246,247,246,0) 100%)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Üst boşluklar görsele göre */}
          <div className="pt-16 sm:pt-20 md:pt-24" />
          <h2
            className="text-center text-[26px] sm:text-[30px] leading-tight font-semibold uppercase"
            style={{ color: "#0F6F69", letterSpacing: "0.08em" }}
          >
            {content.hero.confirmTitle}
          </h2>

          {/* Sayılar */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 items-start">
            {content.confirm.map((it, i) => (
              <div className="flex flex-col items-center text-center">
                <div className="leading-none font-[300] text-primary-500 text-[80px]">
                  {it.number}
                </div>
                <div className="mt-6 font-[700] text-[20px] sm:text-[32px] text-primary-600">
                  {it.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Alt boşluklar */}
          <div className="pb-24 sm:pb-28 md:pb-32" />
        </div>
      </section>

        {Object.values(DETAIL_CONTENT)
        .filter(categoryContent => categoryContent.level && categoryContent.level.length > 0)
        .flatMap(categoryContent => categoryContent.level)
        .map((lvl, idx) => (
          <LevelSection
            key={idx}
            title={lvl.title}
            image={lvl.image}
            subtitle={lvl.subtitle}
            list={lvl.list}
          />
        ))}

        <SdsEdutaciton/>
        <DoctorBlock />
    </div>
  );
}
