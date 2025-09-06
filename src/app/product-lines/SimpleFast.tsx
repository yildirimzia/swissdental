import React from "react";
import Image from "next/image";

function SimpleFast() {
  return (
    <section className="py-20 mb-24">
      <div className="container-dental max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 items-start">
          {/* Simple */}
          <article className="text-center max-w-[520px] mx-auto">
            {/* Icon */}
            <div className="mx-auto mb-6  flex items-center justify-center">
              <Image
                src="/images/product-lines/Easy.png"
                alt="Simple icon"
                width={354}
                height={169}
              />
            </div>

            <h3 className="text-primary-600 text-[28px] sm:text-[34px] font-bold leading-[1.2]">
              Basit
            </h3>
            <p className="mt-2 text-primary-500 text-[16px] font-extralight">
             Sadece birkaç tıklama
            </p>
            <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[480px] mx-auto">
Çevrimiçi olarak birkaç tıklamayla tedaviyi planlayın. Konfigüratör, gerekli tüm bileşenleri bir araya getirmenize yardımcı olur.
            </p>
          </article>

          {/* Fast */}
          <article className="text-center max-w-[520px] mx-auto">
            {/* Icon */}
            <div className="mx-auto mb-6  flex items-center justify-center">
              <Image
                src="/images/product-lines/Lightning.png"
                alt="Fast icon"
                width={354}
                height={169}
              />
            </div>

            <h3 className="text-primary-600 text-[28px] sm:text-[34px] font-bold leading-[1.2]">
              Hızlı
            </h3>
            <p className="mt-2 text-primary-500 text-[16px] font-extralight">
              Planlamayı sizin için SDS üstlenir.
            </p>
            <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[480px] mx-auto">
 Kutuya dahil edilen cerrahi şablon sayesinde implantlar kolayca ve mükemmel bir şekilde konumlandırılabilir.            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SimpleFast;
