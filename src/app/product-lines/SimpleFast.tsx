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
              Simple
            </h3>
            <p className="mt-2 text-primary-500 text-[16px] font-extralight">
              Just a few clicks
            </p>
            <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[480px] mx-auto">
              Plan your treatment online. The configurator helps you to put
              together all the necessary components.
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
              Fast
            </h3>
            <p className="mt-2 text-primary-500 text-[16px] font-extralight">
              We handle the planning for you
            </p>
            <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[480px] mx-auto">
              Thanks to the additional drilling template it contains, the
              implants can be easily positioned perfectly.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SimpleFast;
