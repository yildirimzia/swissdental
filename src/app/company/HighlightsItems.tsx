"use client";

export default function HighlightsItems() {
  return (
    <section className="sm:mt-[100px] mt-0 pb-24">
      <div className="container-dental max-w-[1320px] px-6 sm:px-8 mx-auto py-20">

        {/* 1. satır (1–3) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {/* 1 */}
          <AdvCard
            no=">100"
            title="Employees"
            subTitle="worldwide"
            desc="Whether in product development, customer support, training, back office, marketing, or logistics, the areas of responsibility are very diverse."
          />

          {/* 2 */}
          <AdvCard
            no=">30"
            title="active"
            subTitle="markets"
            desc="Our sales for SDS ceramic dental implants operate in over 30 countries worldwide, and we place great importance on our international customer relationships."
          />

          {/* 3 */}
          <AdvCard
            no="12"
            title="nationalities"
            subTitle="represented in the team
"
            desc="The diversity of our team not only enhances our creativity and innovation, but also fosters an open and inclusive work environment where every employee has the opportunity to fulfill their full potential and succeed."
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
  subTitle: string;
};

function AdvCard({ no, title, desc, subTitle }: AdvProps) {
  return (
    <article className="text-center">
      <div className="text-mint text-[64px] sm:text-[72px] leading-none font-light mb-2">
        {no}
      </div>
      <h3 className="text-primary-600 text-[26px] sm:text-[32px] font-bold leading-[1.2]">
        {title}
      </h3>
      <p className="mt-2 text-primary-500 text-[18px] leading-7 font-extralight max-w-[520px] mx-auto">
        {subTitle}
      </p>
      <p className="mt-5 text-primary-600 text-[16px] leading-7 font-extralight max-w-[520px] mx-auto">
        {desc}
      </p>
    </article>
  );
}
