import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const TEAL = "#0F6F69";

const CARDS = [
  {
    id: "tissue-level",
    icon: "/images/benefits-for-patients/tissueLevel.svg",
    title: "Tissue level",
    bullets: [
      "zirconia-epithelial connection",
      "customizable tulip", 
      "time savings for patient and practitioner",
      "perfect for digital impressions and workflow",
      "hardly any/no prosthetic parts",
    ],
  },
  {
    id: "zirconium-dioxide",
    icon: "/images/benefits-for-patients/tabler_affiliate.svg",
    title: "Zirconium dioxide",
    bullets: [
      'biologically/immunologically neutral "biomaterial"',
      "metal-free",
      "extremely good aesthetics even in difficult situations", 
      "no peri-implantitis",
    ],
  },
  {
    id: "dynamic-thread",
    icon: "/images/benefits-for-patients/Dynamic_Thread.svg",
    title: "Dynamic thread",
    bullets: [
      "implant system developed by surgeons for surgeons",
      "optimal shape for immediate implantation",
      "socket preservation 2.0",
      "healing chambers in bone AI. I"
    ],
  },
  {
    id: "clean-sterile",
    icon: "/images/benefits-for-patients/CleanImplant.png",
    title: "Clean & sterile",
    bullets: [
      "implant double certified", 
      "only two accredited navigation systems"
    ],
  },
  {
    id: "implant-design", 
    icon: "/images/benefits-for-patients/ImplantDesign.svg",
    title: "Implant design",
    bullets: [
      "immediate implantation in all alveoli while preserving the anatomy", 
      "special shapes such as balcony, oval, sinus implant"
    ],
  },
  {
    id: "concept",
    icon: "/images/benefits-for-patients/Group.svg", 
    title: "Concept",
    bullets: [
      "professional education center with attached clinic",
      "biological drilling protocol", 
      "clear algorithms for safe use",
      "biological-immunological approach",
      "optimized supplements",
      "constant innovation and user training"
    ],
  },
] as const;

function Card({ id, icon, title, bullets, i }: (typeof CARDS)[number] & { i: number }) {
  return (
    <article
      aria-label={title}
      className={`group relative flex min-h-[530px] flex-col bg-white ${
        [1, 3, 5].includes(i) ? "mt-[5.375rem] mb-[-5.375rem]" : ""
      }`}
    >
      <div className="p-8 md:p-12">
        <div className="mb-8">
          <Image src={icon} alt="" width={67} height={67} className="h-[67px] w-[67px] object-contain" />
        </div>

        <h3 className="mb-5 text-[32px] leading-[1.15] font-semibold text-primary-600">
          {title}
        </h3>

        <ul
          className="list-disc pl-5 text-[15px] leading-[1.7] space-y-[6px] min-h-[157px]"
          style={{
            color: `${TEAL}CC`,
            ["--tw-marker-color" as any]: TEAL,
          } as React.CSSProperties}
        >
          {bullets.map((b, i) => (
            <li key={i} className="text-primary-600">
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-end">
          {/* Path'i düzelt - benefits-for-dentists kullan */}
          <Link href={`/benefits-for-dentists/${id}`}>
            <Button
              variant="customOutline"
              size="custom16"
              rounded="rounded-full"
              className="!shadow-none mt-8 !font-[400]"
              iconPosition="right"
            >
              More Details
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