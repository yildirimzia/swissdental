"use client";
import Image from "next/image";


export default function AnEmployer() {

  const items = [
    {
    icon: "/images/Light.svg",
      title: "Innovative",
      desc: "Diverse and innovative activities in a modern, technologically appealing work environment.",
      href: "/studies/biocompatible",
    },
    {

    icon: "/images/Settings.svg",
      title: "Flexible",
      desc: "A collegial and familial working atmosphere with flat hierarchies and flexible working conditions, including opportunities, with remote work possible.",
      href: "/studies/durable",
    },
    {
      icon: "/images/benefits-for-patients/Heart.svg",
      title: "Meaningful",
      desc: "",
      href: "/studies/aesthetic",
    }
  ];

  return (
    <>
      <section className=" py-20 sm:py-52">
        <div className="container-dental max-w-[1320px] mx-auto">
          {/* Eyebrow */}
          <p className="text-center text-mint tracking-[.2em] text-[12px] sm:text-[16px] font-[700] uppercase mb-12 leading-[.05em]">
            SDS as an employer
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-10">
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
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
