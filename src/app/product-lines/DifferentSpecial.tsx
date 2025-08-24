import React from "react";
import Image from "next/image";

function DifferentSpecial() {
  return (
    <section className="py-20">
      {/* Üst metin alanı */}
      <div className="container-dental max-w-[1320px]">
        <h3 className="text-center tracking-[.05em] font-bold text-primary-500  text-[12px] sm:text-[14px]">
          DIFFERENT SPECIAL SHAPES
        </h3>

        <p className="mb-16 mx-auto mt-6 max-w-[860px] text-center text-primary-600 text-[16px] leading-7 font-extralight  w-full sm:w-2/4">
          With over 50 different special shapes, you can be sure that we have
          the right implant for your treatment cases. This incredible variety is
          unique in ceramic implantology and ensures optimal care for your
          patients.
        </p>
      </div>

      {/* Kartlar */}
      <div className="container-dental max-w-[1320px] mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 sm:gap-y-16 gap-y-8">
          {/* Item */}
          <article className="text-center">
            <div className="mx-auto relative">
              {/* Placeholder görseli: kendi ikonunu buraya koy */}
              <Image
                src="/images/product-lines/Oval.png"
                alt="Oval implant"
                width={706}
                height={492}
              />
            </div>

            <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
              Oval
            </h4>
            <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
              Series
            </span>

            <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
              The implant series ‘Oval’ specifically aids in centrally supplying
              the premolars maxillary/mandibular and molars
              maxillary/mandibular.
            </p>
          </article>

          {/* Item */}
          <article className="text-center">
            <div className="mx-auto relative">
              <Image
                src="/images/product-lines/Balcony.png"
                alt="Balcony implant"
                width={706}
                height={492}
              />
            </div>

            <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
              Balcony
            </h4>
            <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
              Series
            </span>

            <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
              The ‘Balcony’ enhances the emergence profile, facilitating
              targeted provision for premolars, especially upper premolars, and
              maxillary/mandibular molars.
            </p>
          </article>

          {/* Item */}
          <article className="text-center">
            <div className="mx-auto relative">
              <Image
                src="/images/product-lines/Short.png"
                alt="Short implant"
                width={706}
                height={492}
              />
            </div>

            <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
              Short
            </h4>
            <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
              Series
            </span>

            <p className="mt-4 text-primary-600 text-[15px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
              The ‘Short’ implant series is specifically designed to address
              cases with reduced vertical bone availability.
            </p>
          </article>

          {/* Item */}
          <article className="text-center">
            <div className="mx-auto relative">
              <Image
                src="/images/product-lines/Sinus.png"
                alt="Sinus implant"
                width={706}
                height={492}
              />
            </div>

            <h4 className="mt-8 text-primary-600 font-bold text-[20px] sm:text-[32px]  leading-[1.2]">
              Sinus
            </h4>
            <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
              Series
            </span>

            <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
              Biological sinus lift without the use of bone replacement
              material, specifically designed for external sinus lift.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default DifferentSpecial;
