"use client";

export default function CeramicAdvantages() {
  return (
    <section className="sm:mt-[100px] mt-0 bg-[linear-gradient(to_bottom,#FFFFFF_0%,#FEFEFE_25%,#FDFDFD_50%,#FCFCFC_75%,#FBFBFB_100%)] pb-24">
      <div className="container-dental max-w-[1320px] px-6 sm:px-8 mx-auto py-20">
        {/* Ana başlık */}
        <h2 className="mt-4 text-center text-primary-600 font-bold leading-[1.15] text-[26px] sm:text-[40px]">
          SDS'e Kolay Giriş
        </h2>

        {/* Intro paragraf */}
        <p className="mx-auto mt-6 max-w-[615px] text-center text-primary-600 text-[16px] leading-7 font-[300]">
          SDS dünyasına giriş, yeni başlayanlara temel bilgileri öğretmek ve
          onları SDS implantlarının pratik uygulaması için nitelikli hale
          getirmek üzere tasarlanmış basit, üç adımlı bir süreçle
          kolaylaştırılmıştır.
        </p>

        {/* 1. satır (1–3) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {/* 1 */}
          <AdvCard
            no="1."
            title="Bir Kursa Kaydolun"
            desc="Sunulan İlk Adım (First Steps) kurslarından birine kaydolun. Bu kurslar, SDS dünyasına yolculuğunuza başlamak için özellikle uygundur ve sizi temel bilgilerle tanıştırır."
          />

          {/* 2 */}
          <AdvCard
            no="2."
            title="Bir SDS Hesabı Oluşturun"
            desc="İlk kursu başarıyla tamamladıktan sonra SDS implantları uygulamaya hazırsınız. Bizimle iletişime geçip ilk vakanızı planlayabiliriz."
          />

          {/* 3 */}
          <AdvCard
            no="3."
            title="SDS İmplantlarını Uygulayın"
            desc="Seçtiğiniz kursa bağlı olarak, implantları bağımsız olarak planlayabilir ve uygulayabilirsiniz ya da vaka planlama ve delme asistanı ile birlikte gelen SDSBOX'ı kullanabilirsiniz."
          />
        </div>
      </div>
    </section>
  );
}

type AdvProps = {
  no: string;
  title: string;
  desc: string;
};

function AdvCard({ no, title, desc }: AdvProps) {
  return (
    <article className="text-center">
      <div className="text-mint text-[64px] sm:text-[72px] leading-none font-light mb-2">
        {no}
      </div>
      <h3 className="text-primary-600 text-[26px] sm:text-[32px] font-bold leading-[1.2]">
        {title}
      </h3>
      <p className="mt-5 text-primary-600 text-[16px] leading-7 font-extralight max-w-[520px] mx-auto">
        {desc}
      </p>
    </article>
  );
}
