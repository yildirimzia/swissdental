import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const TEAL = "#0F6F69";

const CARDS = [
  {
    id: "tissue-level",
    icon: "/images/benefits-for-patients/tissueLevel.svg",
    title: "Doku seviyesi",
    bullets: [
      "Zirkonya-epitel bağlantısı",
      "Özelleştirilebilir tulip",
      "Hasta ve hekim için zamandan tasarruf",
      "Dijital ölçü ve iş akışına mükemmel uyum",
      "Neredeyse hiç/hiç protez parçası yok",
    ],
  },
  {
    id: "zirconium-dioxide",
    icon: "/images/benefits-for-patients/tabler_affiliate.svg",
    title: "Zirkonyum Dioksit",
    bullets: [
      'Biyolojik/İmmünolojik olarak nötr "biyomateryal"',
      "Metal içermez",
      "Zor durumlarda bile çok iyi estetik",
      "Peri-implantitis yok:",
    ],
  },
  {
    id: "dynamic-thread",
    icon: "/images/benefits-for-patients/Dynamic_Thread.svg",
    title: "Dinamik Diş Tasarımı (Dynamic Thread)",
    bullets: [
      "Cerrahlar için cerrahlar tarafından geliştirilmiş implant sistemi",
      "Hemen yerleştirme için en uygun şekil",
      "Soket koruma 2.0",
      "Kemikte iyileşme odacıkları",
    ],
  },
  {
    id: "clean-sterile",
    icon: "/images/benefits-for-patients/CleanImplant.png",
    title: "Temiz ve Steril",
    bullets: [
      "Çift sertifikalı implant:",
      "Sadece iki akredite navigasyon sistemi",
    ],
  },
  {
    id: "implant-design",
    icon: "/images/benefits-for-patients/ImplantDesign.svg",
    title: "İmplant Tasarımı",
    bullets: [
      "Anatomiyi koruyarak tüm soketlere anında yerleştirme",
      "Balkon, oval, sinüs implantı gibi özel şekiller",
    ],
  },
  {
    id: "concept",
    icon: "/images/benefits-for-patients/Group.svg",
    title: "Konsept",
    bullets: [
      "Kliniği olan profesyonel eğitim merkezi",
      "Biyolojik delme protokolü",
      "Güvenli kullanım için net algoritmalar",
      "Biyolojik-immünolojik yaklaşım",
      "Optimize edilmiş takviyeler",
      "Sürekli yenilik ve kullanıcı eğitimi",
    ],
  },
] as const;

function Card({
  id,
  icon,
  title,
  bullets,
  i,
}: (typeof CARDS)[number] & { i: number }) {
  return (
    <article
      aria-label={title}
      className={`group relative flex min-h-[530px] flex-col bg-white ${
        [1, 3, 5].includes(i)
          ? "sm:mt-[5.375rem] mt-0 mb-0 sm:mb-[-5.375rem]"
          : ""
      }`}
    >
      <div className="p-8 md:p-12">
        <div className="mb-8">
          <Image
            src={icon}
            alt=""
            width={67}
            height={67}
            className="h-[67px] w-[67px] object-contain"
          />
        </div>

        <h3 className="mb-5 text-[32px] leading-[1.15] font-semibold text-primary-600">
          {title}
        </h3>

        <ul
          className="list-disc pl-5 text-[15px] leading-[1.7] space-y-[6px] min-h-[157px]"
          style={
            {
              color: `${TEAL}CC`,
              ["--tw-marker-color" as any]: TEAL,
            } as React.CSSProperties
          }
        >
          {bullets.map((b, i) => (
            <li key={i} className="text-primary-600">
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-end">
          {/* Path'i düzelt - benefits-for-dentists kullan */}
          <Link
            href={`/benefits-for-dentists/${id}?scrollTo=${encodeURIComponent(
              title
            )}`}
          >
            <Button
              variant="customOutline"
              size="custom16"
              rounded="rounded-full"
              className="!shadow-none mt-8 !font-[400]"
              iconPosition="right"
            >
              Daha Fazla
            </Button>
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-b-[14px] bg-primary-500" />
    </article>
  );
}

export default function DentalFeatureCards() {
  return (
    <section className="relative isolate py-12 sm:py-16 md:py-20 pb-[200px]">
      <div className="mx-auto max-w-[1320px] p-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {CARDS.map((c, i) => (
            <Card key={c.id} {...c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
