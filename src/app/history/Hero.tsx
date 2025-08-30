import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function HistoryHero() {
  return (
    <section className="">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="text-mint font-[300] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            History
          </p>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[600] sm:font-[400] leading-[1.2] mb-6">
            Metal-free <br /> for over 25 years
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            Dr. Ulrich Volz, a young dentist, envisioned revolutionizing
            dentistry with metal-free implants that were well-tolerated, robust,
            and durable. The current development of ceramic implants made from
            zirconium dioxide, as offered by SDS SWISS DENTAL SOLUTIONS AG
            today, began at the turn of the millennium. The first CE
            certification for the one-piece implant was granted in 2004. Dr.
            Ulrich Volz founded the company SDS SWISS DENTAL SOLUTIONS AG in
            2007. How within just 10 years, an idea transformed into global
            leadership in ceramic implant technology:
          </p>

          <Link href="/implants" className="">
            <Button
              variant="primary"
              size="lg"
              rounded="rounded-[100px]"
              className="text-[16px] font-[400]"
              icon={<ExternalLinkIcon />}
              iconPosition="right"
            >
              Watch Video
            </Button>
          </Link>
        </div>

        {/* Sağ: Background image */}
        <div
          className="order-1 lg:order-2 block  h-[546px] sm:bg-auto sm:h-[920px] w-full"
          style={{
            backgroundImage: "url(/images/company/Implantat-Background.jpg)",
            backgroundOrigin: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </section>
  );
}

export default HistoryHero;
