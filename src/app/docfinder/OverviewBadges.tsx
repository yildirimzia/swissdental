"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";

export default function WhyCeramic() {
  const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="d-inline-block ms-1 mt-n1-4">
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
      <path d="M11 13l9 -9"></path>
      <path d="M15 4h5v5"></path>
    </svg>
  );

  const items = [
    {
      icon: "/images/Specialist.png",
      title: "Uzman",
      desc: "Certified dentists who have completed our curriculum and are specially trained in SDS ceramic implants.",
    },
    {
      icon: "/images/TopUser.png",
      title: "En Çok Kullanılan",
      desc: (
        <>
          Dentists or dental practices that place at least{" "}
          <strong className="font-bold">200 ceramic implants per year</strong>
          {" "}– highly experienced in implantology.
        </>
      ),
    },
    {
      icon: "/images/Ambassador.png",
      title: "Büyükelçi",
      desc: <> <strong className="font-bold">Experts</strong> who also provide training and lectures on ceramic implantology, actively sharing their knowledge.</>,
    }
  ];

  return (
    <section className="py-20 sm:py-52">
      <div className="container-dental max-w-[1320px] mx-auto">
        <p className="text-center text-primary-600 tracking-[.2em] text-[18px] sm:text-[21px] font-[700] uppercase mb-12 leading-[.05em]">
          Rozetlere genel bakış
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-10">
          {items.map((it) => (
            <article key={it.title} className="text-center flex flex-col items-center mx-auto max-w-[320px]">
              <div className="mb-8 grid place-items-center">
                <Image src={it.icon} alt="" width={140} height={140} className="w-[235px] h-[175px] object-contain" draggable={false} />
              </div>
              <h3 className="text-primary-600 text-[26px] sm:text-[28px] font-bold leading-[1.2]">{it.title}</h3>
              <p className="mt-4 text-primary-600 text-[16px] font-extralight leading-7">
                {it.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
