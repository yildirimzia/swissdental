import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const TEAL = "#0F6F69";

const CARDS = [
  {
    id: "tissue-level",
    icon: "/images/service/dental.svg",
    title: "Product and System Presentation",
    button:"Request Demo",
    description: [
      "We're happy to visit your practice and present the possibilities and benefits of the SDS system. If you're interested in a specific topic, please let us know in your message, and we'll be glad to tailor our presentation to your needs.",
    ],
  },
  {
    id: "zirconium-dioxide",
    icon: "/images/service/vaccine.svg",
    title: "Surgical Shadowing",
    button:"Request Shadowing",
    description: [
      "As a beginner in implantology, we support you during your first case with SDS ceramic implants in your practice, providing experienced personnel during the surgery. Please enter all available data and the X-ray image in the form below.",
    ],
  },
  {
    id: "dynamic-thread",
    icon: "/images/service/bottomarow.svg",
    title: "Marketing material",
    button: "Download",
    description: [
      "Images, videos and further information for users",
    ],
  },
  {
    id: "clean-sterile",
    icon: "/images/service/Group.svg",
    title: "Media Package",
    button: "More Information",
    description: [
      "Whether it's personalized patient flyers or roll-ups, this package provides everything you need to introduce your clients and team to the SDS world quickly and easily.",
    ],
  },
  {
    id: "implant-design",
    icon: "/images/service/help.svg",
    title: "Professional support",
    button:"Find support",
    description: [
      "We offer free services that go far beyond the normal customer service provided by your ceramic implant manufacturer",
    ],
  },
  {
    id: "concept",
    icon: "/images/service/bottomarow.svg",
    title: "Notification form",
    button: "Download",
    description: [
      "In the event of a claim, please fill out the attached form",
    ],
  },
    {
    id: "concept",
    icon: "/images/service/bottomarow.svg",
    title: "Exchange form",
    button: "Download",
    description: [
      "Here you will find the form for an exchange request",
    ],
  },
] as const;

function InfoCard({
  id,
  icon,
  title,
  description,
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

        <h3 className="mb-5 text-[32px] leading-[1.15] font-[400] text-primary-600">
          {title}
        </h3>

        <p className="text-primary-600 text-[16px] font-[300]">
          {description}
        </p>

        <div className="mt-10 flex justify-end">
          {/* Path'i düzelt - benefits-for-dentists kullan */}
          <Link
            href={``} 
            className="text-primary-600"
          >
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
            <InfoCard key={c.id} {...c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
