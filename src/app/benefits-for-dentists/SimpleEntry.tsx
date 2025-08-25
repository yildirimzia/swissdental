"use client";

export default function CeramicAdvantages() {
  return (
    <section className="sm:mt-[100px] mt-0 bg-[linear-gradient(to_bottom,#FFFFFF_0%,#FEFEFE_25%,#FDFDFD_50%,#FCFCFC_75%,#FBFBFB_100%)] pb-24">
      <div className="container-dental max-w-[1320px] px-6 sm:px-8 mx-auto py-20">
        {/* Ana başlık */}
        <h2 className="mt-4 text-center text-primary-600 font-bold leading-[1.15] text-[26px] sm:text-[40px]">
          SIMPLE ENTRY
        </h2>

        {/* Intro paragraf */}
        <p className="mx-auto mt-6 max-w-[615px] text-center text-primary-600 text-[16px] leading-7 font-[300]">
Entering the world of SDS is made easy through a straightforward, three-step process designed to teach newcomers the basics and qualify them for the practical application of SDS implants.
        </p>

        {/* 1. satır (1–3) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
          {/* 1 */}
          <AdvCard
            no="1."
            title="Enroll in a Course"
            desc="Enroll in one of our listed First Steps courses. These are especially suitable for starting your journey into the world of SDS and will introduce you to the fundamentals.."
          />

          {/* 2 */}
          <AdvCard
            no="2."
            title="Receive an SDS Account"
            desc="After successfully completing the first course, you will gain access to our B2B shop and SDSBOX. You are ready to install your first SDS implant."
          />

          {/* 3 */}
          <AdvCard
            no="3."
            title="Apply SDS Implants"
            desc="Depending on the course you choose, you can independently plan and apply implants, or you can use our SDSBOX, which comes with case planning and drilling assistance."
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
