import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const TEAL = "#0F6F69";

const CARDS = [
  {
    id: "tissue-level",
    icon: "/images/service/dental.svg",
    title: "Ürün ve Sistem Tanıtımı",
    button:"Demo Talep Et",
    link: "/demonstration",
    description: [
      "Kliniğinizi ziyaret ederek SDS sisteminin sunduğu olanakları ve faydaları size sunmaktan memnuniyet duyarız. Belirli bir konuyla ilgileniyorsanız, lütfen mesajınızda belirtin, sunumumuzu ihtiyaçlarınıza göre uyarlamaktan memnuniyet duyarız. Bir demo talep edebilirsiniz.",
    ],
  },
  {
    id: "zirconium-dioxide",
    icon: "/images/service/vaccine.svg",
    title: "Cerrahi Gözetmenlik (Surgical Shadowing):",
    button:"Gözetmenlik Talep Et",
    link: "mailto:info@swissdentalsolutions.com?subject=Request: Shadowing",
    description: [
      "İmplantolojide yeni başlayan biri olarak, kliniğinizde SDS seramik implantları ile yapacağınız ilk operasyonunuzda size deneyimli personelimizle destek oluyoruz. Bunun için, lütfen mevcut tüm verileri ve röntgen görüntüsünü aşağıdaki forma girin.",
    ],
  },
  {
    id: "dynamic-thread",
    icon: "/images/service/bottomarow.svg",
    title: "Marketing material",
    button: "Download",
    link: "https://sds.directus.app/assets/494c5a2a-c174-46f6-bbe5-31c9a852f593",
    description: [
      "Images, videos and further information for users",
    ],
  },
  {
    id: "clean-sterile",
    icon: "/images/service/Group.svg",
    title: "Pazarlama Materyalleri",
    button: "Daha Fazla Bilgi",
    link: "/media-package",
    description: [
      "Kullanıcılar için resimler, videolar ve daha fazla bilgiye erişim sağlayabilirsiniz. İndirme yapabileceğiniz bir medya paketi mevcuttur. Bu paket, kişiselleştirilmiş hasta broşürleri veya roll-up'lar gibi, müşterilerinizi ve ekibinizi SDS dünyasıyla hızlı ve kolay bir şekilde tanıştırmak için ihtiyacınız olan her şeyi sunar.",
    ],
  },
  {
    id: "implant-design",
    icon: "/images/service/help.svg",
    title: "Profesyonel Destek",
    button:"Destek Bul",
    link: "/professional-support",
    description: [
      "Seramik implant üreticinizin sunduğu normal müşteri hizmetlerinin çok ötesine geçen ücretsiz hizmetler sunuyoruz. Destek bulmak için sayfaya göz atabilirsiniz.",
    ],
  },
  {
    id: "concept",
    icon: "/images/service/bottomarow.svg",
    title: "Bildirim Formu",
    button: "İndir ",
    link: "/https://sds.directus.app/assets/66fceb1e-ea40-4b26-a805-5e226e0cb399",
    description: [
      "Bir talep durumunda, ekteki formu doldurabilirsiniz.",
    ],
  },
    {
    id: "concept",
    icon: "/images/service/bottomarow.svg",
    title: "Exchange form",
    button: "İndir",
    link: "/https://sds.directus.app/assets/37389f8d-a445-41e1-9ce5-8935b2798c45.pdfxw", 
    description: [
      "Değişim talebi için formu burada bulabilirsiniz.",
    ],
  },
] as const;

function InfoCard({
  id,
  icon,
  title,
  button,
  description,
  i,
  link, // use the card's link property
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
            href={link || '#'}
            className="text-primary-600"
          >
            <Button
              variant="customOutline"
              size="custom16"
              rounded="rounded-full"
              className="!shadow-none mt-8 !font-[400]"
              iconPosition="right"
            >
              {button}
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
