import { notFound } from "next/navigation";
import { DETAIL_CONTENT } from "../data/detailContent"; // Path düzelt
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button"; // Path düzelt
import LevelSection from "./LevelSection";

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

  if (!DETAIL_CONTENT[slug as keyof typeof DETAIL_CONTENT]) {
    notFound();
  }

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
        .filter(
          (categoryContent) =>
            categoryContent.level && categoryContent.level.length > 0
        )
        .flatMap((categoryContent) => categoryContent.level)
        .map((lvl, idx) => (
          <LevelSection
            key={idx}
            title={lvl.title}
            image={lvl.image}
            subtitle={lvl.subtitle}
            list={lvl.list}
          />
        ))}

      {/* Content Sections */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {content.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-6">
                {section.title}
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {section.content}
              </p>

              {/* Features */}
              {section.features && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary-600 mb-4">
                    Key Features
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image */}
              {section.image && (
                <div className="mb-8">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={800}
                    height={400}
                    className="w-full rounded-xl"
                  />
                </div>
              )}

              {/* Stats */}
              {section.stats && (
                <div className="grid md:grid-cols-3 gap-6">
                  {section.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="text-center bg-primary-50 p-6 rounded-xl"
                    >
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact our team for detailed information about{" "}
            {cardInfo.title.toLowerCase()} solutions.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-primary-600"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
