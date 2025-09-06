import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="M5 12l14 0"></path>
    <path d="M13 18l6 -6"></path>
    <path d="M13 6l6 6"></path>
  </svg>
);
function ServiceHero() {
  return (
    <section className="">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="text-mint font-[300] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            Hizmet
          </p>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[600] sm:font-[400] leading-[1.2] mb-6">
            Aynı derecede <br /> hizmet konusunda <br /> mükemmeliyetçi
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            Bir iş ortağı olarak, değerli uzmanlık sunmak, eğitimler düzenlemek
            ve vakalarınızı planlarken size aktif destek sağlamak için her zaman
            yanınızdayız.
          </p>

          <Link href="/contact">
            <Button
              variant="customOutline"
              size="custom16"
              rounded="rounded-full"
              className="!shadow-none mt-8 !font-[400]"
              icon={<ArrowRightIcon />}
              iconPosition="right"
            >
              Bize Ulaşın
            </Button>
          </Link>
        </div>

        {/* Sağ: Background image */}
        <div
          className="order-1 lg:order-2 block  h-[546px] sm:bg-auto sm:h-[920px] w-full"
          style={{
            backgroundImage: "url(/images/service/SDS-Service.jpg)",
            backgroundOrigin: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </section>
  );
}

export default ServiceHero;
