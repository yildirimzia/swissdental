"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";


export default function WhyCeramic() {
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

  const items = [
    {
      icon: "/images/benefits-for-patients/Heart.svg",
      title: "Biocompatible",
      desc: "SDS implants are very easily tolerated and integrate securely into the bone.",
      href: "/studies/biocompatible",
    },
    {
      icon: "/images/benefits-for-patients/Weight.svg",
      title: "Durable and robust",
      desc: "Ceramic implants now surpass titanium implants in terms of stability and longevity.",
      href: "/studies/durable",
    },
    {
      icon: "/images/benefits-for-patients/Zahn.svg",
      title: "Aesthetic",
      desc: "Our implants are naturally white. The aesthetic solution for a beautiful smile.",
      href: "/studies/aesthetic",
    },
    {
      icon: "/images/benefits-for-patients/Rocket.svg",
      title: "Minimal radiation",
      desc: "Careful selection of raw materials ensures minimal radiation compared to titanium.",
      href: "/studies/minimal-radiation",
    },
  ];

  return (
    <>
      <section className=" py-20 sm:py-52">
        <div className="container-dental max-w-[1320px] mx-auto">
          {/* Eyebrow */}
          <p className="text-center text-mint tracking-[.2em] text-[12px] sm:text-[16px] font-[700] uppercase mb-12 leading-[.05em]">
            Why ceramic?
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-16 gap-x-10">
            {items.map((it) => (
              <article
                key={it.title}
                className="text-center flex flex-col items-center mx-auto max-w-[320px]"
              >
                {/* Icon */}
                <div className="mb-8 grid place-items-center">
                  <Image
                    src={it.icon}
                    alt=""
                    width={140}
                    height={140}
                    className="w-[235px] h-[175px] object-contain"
                    draggable={false}
                  />
                </div>

                {/* Title */}
                <h3 className="text-primary-600 text-[26px] sm:text-[28px] font-bold leading-[1.2]">
                  {it.title}
                </h3>

                {/* Desc */}
                <p className="mt-4 text-primary-600 text-[16px] font-extralight leading-7">
                  {it.desc}
                </p>

                {/* CTA */}
                <Link href={it.href} className="mt-6">
                  <Button
                    variant="customOutline"
                    size="custom16"
                    rounded="rounded-full"
                    className="!font-[400]"
                    icon={<ExternalLinkIcon />}
                    iconPosition="right"
                  >
                    See study
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
