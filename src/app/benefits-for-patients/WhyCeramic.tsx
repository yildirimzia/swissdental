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
      title: "Biyouyumlu",
      desc: "SDS implantları çok kolay tolere edilir ve kemiğe güvenli bir şekilde entegre olur.",
      href: "https://pubmed.ncbi.nlm.nih.gov/37436947/",
    },
    {
      icon: "/images/benefits-for-patients/Weight.svg",
      title: "Dayanıklı ve Sağlam",
      desc: "Seramik implantlar artık stabilite ve uzun ömürlülük açısından titanyum implantları geride bırakmıştır.",
      href: "https://www.dginet.de/wp-content/uploads/sites/4/2024/02/20240130_LL_083-039_S3_Keramikimplantate_lang_2022_meta.pdf",
    },
    {
      icon: "/images/benefits-for-patients/Zahn.svg",
      title: "Estetik",
      desc: "İmplantlarımız doğal olarak beyazdır. Güzel bir gülümseme için estetik çözüm sunar.",
      href: "https://pubmed.ncbi.nlm.nih.gov/35606734/",
    },
    {
      icon: "/images/benefits-for-patients/Rocket.svg",
      title: "Minimal Radyasyon",
      desc: "Hammaddelerin özenle seçilmesi sayesinde, titanyuma kıyasla minimal radyasyon sağlar.",
      href: "https://www.dinmedia.de/de/norm/din-en-iso-13356/232848189",
    },
  ];

  return (
    <>
      <section className=" py-20 sm:py-52">
        <div className="container-dental max-w-[1320px] mx-auto">
          {/* Eyebrow */}
          <p className="text-center text-mint tracking-[.2em] text-[12px] sm:text-[16px] font-[700] uppercase mb-12 leading-[.05em]">
            NEDEN SERAMİK?
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
                <Link href={it.href} target="_blank" className="mt-6">
                  <Button
                    variant="customOutline"
                    size="custom16"
                    rounded="rounded-full"
                    className="!font-[400]"
                    icon={<ExternalLinkIcon />}
                    iconPosition="right"
                  >
                     Görüntüle
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
