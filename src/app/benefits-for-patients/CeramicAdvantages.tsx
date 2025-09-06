"use client";

export default function CeramicAdvantages() {
  return (
    <section id="ceramic-advantages" className="bg-[linear-gradient(to_bottom,#FFFFFF_0%,#FEFEFE_25%,#FDFDFD_50%,#FCFCFC_75%,#FBFBFB_100%)] pb-24">
      <div className="container-dental max-w-[1320px] px-6 sm:px-8 mx-auto py-20">
        {/* Eyebrow */}
        <p className="text-center text-mint sm:text-[16px] font-[400] uppercase">
          HASTALAR İÇİN FAYDALAR
        </p>

        {/* Ana başlık */}
        <h2 className="mt-4 text-center text-primary-600 font-bold leading-[1.15] text-[26px] sm:text-[40px]">
          Seramik implantların 
        <span className="text-primary-600 font-[400]"><br className="font" /> titanyuma üstünlükleri </span>
        </h2>

        {/* Intro paragraf */}
        <p className="mx-auto mt-6 max-w-[615px] text-center text-primary-600 text-[16px] leading-7 font-[400]">
Seramik implantlar, yaygın olarak kullanılan titanyum implantlara en iyi alternatiftir.
Titanyum implantlar intoleranslara yol açabilir ve organizmaya metal yükü bindirebilir.
Estetik açıdan da seramik implantlar titanyum implantların önündedir; çünkü titanyum implantların griliği sıklıkla yansır.
Tam seramik protezler ise diş etleriniz biraz çekilse bile çok daha az fark edilir.
        </p>

        {/* 1. satır (1–3) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {/* 1 */}
          <AdvCard
            no="1."
            title="Bütüncül yaklaşım"
            subtitle="Biyolojik diş hekimliği"
            desc="SWISS BIOHEALTH konsepti, hastaya ve sağlığına odaklanan bütüncül, biyolojik-tıbbi bir yaklaşımdır."
          />

          {/* 2 */}
          <AdvCard
            no="2."
            title="Daha kısa tedavi süresi"
            subtitle="Anında implantasyon"
            desc="Yenilikçi tedavi, genellikle çekimden hemen sonra implant yerleştirilmesine imkân tanır. Hızlı, nazik ve çoğu zaman kemik grefti veya antibiyotik gerektirmeden."
          />

          {/* 3 */}
          <AdvCard
            no="3."
            title="Estetik"
            subtitle="Koyu kenarlar yok"
            desc="SDS seramik implantların doğal diş rengi, diş eti hattında rahatsız edici gri kenarların ya da gri yarı saydamlığın oluşmasını engeller. Bu, diş etleri çok ince veya çekilmiş olsa bile geçerlidir."
          />
        </div>

        {/* 2. satır (4–6) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {/* 4 */}
          <AdvCard
            no="4."
            title="Seramik daha sağlıklıdır"
            subtitle="Tamamen metalsiz"
            desc="Ağız boşluğunda metal kullanımı tüm vücudu olumsuz etkileyebilir. Seramik biyouyumlu bir materyal olduğu için optimal uyumluluk sağlanır."
          />

          {/* 5 */}
          <AdvCard
            no="5."
            title="Uygulamadan"
            subtitle="Seramik implantolojisinin öncüleri"
            desc="Seramik öncüsü ve implantolog Dr. Ulrich Volz tarafından kurulan SDS SWISS DENTAL SOLUTIONS, seramik implantlar alanında yeniliğin lideri olarak tanınmaktadır. Dr. Volz’un kişisel olarak yerleştirdiği yaklaşık 30.000 seramik implant, olağanüstü tedavi sonuçlarını temsil eder; kısaca en iyi diş çözümleri için bir garantidir."
          />

          {/* 6 */}
          <AdvCard
            no="6."
            title="Minimal ağrı"
            subtitle="Tedavi öncesi ve sonrası"
            desc="Temel unsur, bağışıklık sistemini güçlendirmek ve yan etkilerden kaçınmak için doğal yollarla kemik iyileşmesini teşvik etmektir."
          />
        </div>
      </div>
    </section>
  );
}

type AdvProps = {
  no: string;
  title: string;
  subtitle: string;
  desc: string;
};

function AdvCard({ no, title, subtitle, desc }: AdvProps) {
  return (
    <article className="text-center">
      <div className="text-mint text-[64px] sm:text-[72px] leading-none font-light mb-2">
        {no}
      </div>
      <h3 className="text-primary-600 text-[26px] sm:text-[32px] font-bold leading-[1.2]">
        {title}
      </h3>
      <div className="mt-2 text-primary-500 text-[15px] font-[400]t">
        {subtitle}
      </div>
      <p className="mt-5 text-primary-600 text-[16px] leading-7 font-extralight max-w-[520px] mx-auto">
        {desc}
      </p>
    </article>
  );
}
