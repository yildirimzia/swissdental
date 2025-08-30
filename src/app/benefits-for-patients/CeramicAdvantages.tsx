"use client";

export default function CeramicAdvantages() {
  return (
    <section id="ceramic-advantages" className="bg-[linear-gradient(to_bottom,#FFFFFF_0%,#FEFEFE_25%,#FDFDFD_50%,#FCFCFC_75%,#FBFBFB_100%)] pb-24">
      <div className="container-dental max-w-[1320px] px-6 sm:px-8 mx-auto py-20">
        {/* Eyebrow */}
        <p className="text-center text-mint sm:text-[16px] font-[400] uppercase">
          Benefits for patients
        </p>

        {/* Ana başlık */}
        <h2 className="mt-4 text-center text-primary-600 font-bold leading-[1.15] text-[26px] sm:text-[40px]">
          Advantages of ceramic
        <span className="text-primary-600 font-[400]"> over   <br className="font" />  titanium implants</span>
        </h2>

        {/* Intro paragraf */}
        <p className="mx-auto mt-6 max-w-[615px] text-center text-primary-600 text-[16px] leading-7 font-[400]">
          Ceramic implants are the best alternative to the commonly used titanium implants, which can lead to intolerances and put metal strain on the organism. In terms of aesthetics, ceramic implants are also clearly ahead of titanium implants, where the gray of the implant often shines through. All-ceramic dentures are much less noticeable, even if your gums recede slightly.
        </p>

        {/* 1. satır (1–3) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {/* 1 */}
          <AdvCard
            no="1."
            title="A holistic approach"
            subtitle="Biological dentistry"
            desc="The SWISS BIOHEALTH concept is a holistic, biologically-medical approach that focuses on the patient and their health."
          />

          {/* 2 */}
          <AdvCard
            no="2."
            title="Shorter treatment time"
            subtitle="Immediate implantation"
            desc="The innovative treatment often allows for the placement of implants immediately after extraction. Fast, gentle, and usually without the need for bone building or antibiotic administration."
          />

          {/* 3 */}
          <AdvCard
            no="3."
            title="Aesthetics"
            subtitle="No dark margins"
            desc="The natural tooth color of SDS ceramic implants avoid annoying grey margins at the gum line or grey translucency. This applies even even when gums are extremely thin or receding."
          />
        </div>

        {/* 2. satır (4–6) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {/* 4 */}
          <AdvCard
            no="4."
            title="Ceramics are healthier"
            subtitle="Completely metal-free"
            desc="The use of metals in the oral cavity can negatively affect the entire body. Since ceramic is a biocompatible material, optimal compatibility is ensured."
          />

          {/* 5 */}
          <AdvCard
            no="5."
            title="From practice"
            subtitle="Pioneers of ceramic implantology"
            desc="Founded by ceramic pioneer and implantologist Dr. Ulrich Volz, SDS SWISS DENTAL SOLUTIONS is now recognized as a leader of innovation in the field of ceramic implants. Nearly 30,000 ceramic implants personally placed by Dr. Ulrich Volz stand for outstanding treatment outcomes, in short: for the best dental solutions."
          />

          {/* 6 */}
          <AdvCard
            no="6."
            title="Minimal pain"
            subtitle="Pre- and post-treatment"
            desc="The key element is strengthening the immune system and promoting bone healing using natural means to avoid side effects and negative effects."
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
