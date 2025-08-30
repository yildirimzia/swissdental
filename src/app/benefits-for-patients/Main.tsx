"use client";

import Link from "next/link";
import Button from "../components/Button";

export default function BenefitsBlock() {

    const handleHeaderDownload = (e: React.MouseEvent) => {
      const targetId = "ceramic-advantages";
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with id "${targetId}" not found`);
      }
    };

  return (
    <section className="">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="text-mint font-[300] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            Benefits
          </p>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[500] sm:font-[400] leading-[1.2] mb-6">
            Ceramic implants <br /> as biological tooth <br /> replacements
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            Titanium alternatives made from zirconia are considered highly
            compatible and hygienic. The implants enable optimal gum adhesion,
            minimising tissue stress and making it ideal for allergies or
            intolerances.
          </p>

          <Link href="#">
            <Button
              variant="customOutline"
              size="custom16"
              rounded="rounded-full"
              className="!shadow-none mt-8 !font-[400] cursor-pointer"
              iconPosition="right"
              onClick={handleHeaderDownload}
            >
              View all benefitss
            </Button>
          </Link>
        </div>

        {/* Sağ: Background image */}
        <div
          className="order-1 lg:order-2 block  h-[546px] bg-cover sm:bg-auto sm:h-[920px] w-full bg-no-repeat bg-bottom"
          style={{
            backgroundImage:
              "url(/images/benefits-for-patients/Patientin-Vorteile.png)",
          }}
        ></div>
      </div>
    </section>
  );
}
