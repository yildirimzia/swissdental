// ❌ "use client" KALDIR
import { notFound } from "next/navigation";
import { DETAIL_CONTENT } from "../data/detailContent";
import Link from "next/link";
import Button from "../../components/Button";
import LevelSection from "./LevelSection";
import ScrollHandler from "../../components/ScrollHandler";
import SdsEdutaciton from "../../components/SdsEdutaciton";
import DoctorBlock from "@/app/components/DoctorBlock";
import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";

// ---- SEO yardımcı: slug -> title/desc
const CARD_INFO = {
  "tissue-level": { title: "Doku seviyesi", icon: "/images/benefits-for-patients/tissueLevel.svg" },
  "zirconium-dioxide": { title: "Zirkonyum dioksit", icon: "/images/benefits-for-patients/tabler_affiliate.svg" },
  "dynamic-thread": { title: "Dinamik iş parçacığı", icon: "/images/benefits-for-patients/Dynamic_Thread.svg" },
  "clean-sterile": { title: "Temiz ve steril", icon: "/images/benefits-for-patients/CleanImplant.png" },
  "implant-design": { title: "İmplant tasarımı", icon: "/images/benefits-for-patients/ImplantDesign.svg" },
  concept: { title: "Kavram", icon: "/images/benefits-for-patients/Group.svg" },
} as const;

type Params = { slug: string };

// ✅ Dinamik SEO
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;

  // slug yoksa 404 metadata döndürme yerine sayfada notFound çalışacak
  const content = (DETAIL_CONTENT as any)[slug];
  const info = (CARD_INFO as any)[slug];

  // Varsayılan başlık/açıklama: içerikten ya da map’ten türet
  const title = info?.title
    ? `${info.title} – Güncel Çalışmalar ve Araştırma Sonuçları`
    : "Hastalar İçin Seramik İmplant Faydaları";

  const description =
    content?.hero?.description ??
    "Seramik implantların avantajları hakkında kapsamlı çalışmalarımızı okuyun: düşük peri-implantitis riski, optimal osseointegrasyon ve yüksek estetik.";

  return buildMetadata({
    path: "/benefits-for-patients",                 // temel rota
    titleOverride: title,
    descriptionOverride: description,
    canonical: `/benefits-for-patients/${slug}`,    // dinamik canonical
    ogImage: content?.hero?.ogImage ?? "/og-default.png",
  });
}

// ✅ Server Component
export default async function CardDetailPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;

  if (!(slug in DETAIL_CONTENT)) {
    notFound();
  }

  const content = (DETAIL_CONTENT as any)[slug];
  // const cardInfo = (CARD_INFO as any)[slug]; // (gerekirse kullan)

  return (
    <div>
      <ScrollHandler />
      {/* Hero */}
      <section className="relative isolate">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="relative my-10 sm:my-14 md:my-20 bg-[linear-gradient(180deg,#fff_58.33%,#fff0_100%)]">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-24 sm:py-28 md:py-36">
              <p className="mx-auto mb-8 text-center text-[11px] sm:text-xs tracking-[0.25em] text-primary-500 uppercase">
                {content.hero.title}
              </p>
              <h1 className="text-center sm:text-[130px] text-[68px] font-extrabold leading-[0.95] text-primary-600">
                {content.hero.subtitle}
              </h1>
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
      </section>

      {/* Sayılar */}
      <section
        className="relative w-full"
        style={{ background: "linear-gradient(180deg, rgba(246,247,246,1) 0%, rgba(246,247,246,1) 65%, rgba(246,247,246,0) 100%)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="pt-16 sm:pt-20 md:pt-24" />
          <h2
            className="text-center text-[26px] sm:text-[30px] leading-tight font-semibold uppercase"
            style={{ color: "#0F6F69", letterSpacing: "0.08em" }}
          >
            {content.hero.confirmTitle}
          </h2>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 items-start">
            {content.confirm.map((it: any, i: number) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="leading-none font-[300] text-primary-500 text-[80px]">
                  {it.number}
                </div>
                <div className="mt-6 font-[700] text-[20px] sm:text-[32px] text-primary-600">
                  {it.subtitle}
                </div>
              </div>
            ))}
          </div>
          <div className="pb-24 sm:pb-28 md:pb-32" />
        </div>
      </section>

      {/* Level blokları */}
      {Object.values(DETAIL_CONTENT)
        .filter((c: any) => c.level?.length)
        .flatMap((c: any) => c.level)
        .map((lvl: any, idx: number) => (
          <LevelSection key={idx} title={lvl.title} image={lvl.image} subtitle={lvl.subtitle} list={lvl.list} />
        ))}

      <SdsEdutaciton />
      <DoctorBlock />
    </div>
  );
}
