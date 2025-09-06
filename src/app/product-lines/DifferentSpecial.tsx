import React from "react";
import Image from "next/image";

function DifferentSpecial() {
  return (
    <section className="py-20">
      {/* Üst metin alanı */}
      <div className="container-dental max-w-[1320px]">
        <h3 className="text-center tracking-[.05em] font-bold text-primary-500  text-[12px] sm:text-[14px]">
          Özel Şekiller
        </h3>

        <p className="mb-16 mx-auto mt-6 max-w-[860px] text-center text-primary-600 text-[16px] leading-7 font-extralight  w-full sm:w-2/4">
          SDS, 50'den fazla farklı özel şekliyle tedavileriniz için doğru implanta sahip olmanızı sağlar. Bu çeşitlilik, seramik implantolojide benzersizdir ve hastalarınız için en uygun bakımı garanti eder.
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
              İmplant
            </span>

            <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
Özellikle maksiller/mandibular premolar ve maksiller/mandibular molar dişlerin merkezi olarak desteklenmesine yardımcı olur.

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
             Balkon 
            </h4>
            <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
              İmplant
            </span>

            <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
             Emerjans profilini geliştirir. Özellikle üst premolarlar ile maksiller/mandibular molarlar için hedefe yönelik destek sağlar.

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
              Kısa 
            </h4>
            <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
              İmplant
            </span>

            <p className="mt-4 text-primary-600 text-[15px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
              Dikey kemik miktarının az olduğu vakalarda kullanılmak üzere özel olarak tasarlanmıştır.

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
             Sinüs 
            </h4>
            <span className="mt-2 block text-primary-500 text-[16px] font-extralight">
              İmplant
            </span>

            <p className="mt-4 text-primary-600 text-[16px] leading-7 font-extralight w-full sm:max-w-[280px] mx-auto">
             Kemik yerine geçen malzeme kullanılmadan, harici sinüs lifting için özel olarak tasarlanmış biyolojik sinüs kaldırma prosedürü için kullanılır
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default DifferentSpecial;
