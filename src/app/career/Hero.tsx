import React from "react";
import Link from "next/link";
import Button from "../components/Button";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="d-inline-block ms-1 mt-n1-4"
  >
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
    <path d="M11 13l9 -9"></path>
    <path d="M15 4h5v5"></path>
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
            CAREER
          </p>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[600] sm:font-[400] leading-[1.2] mb-6">
            Together for a Healthy <br /> Future
          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
As a rapidly growing group of companies, we are currently seeking to expand our team in various areas. Below you can find our job postings. We look forward to receiving a meaningful application from you including your possible start date through our
          </p>

          <Link href="/success-stories">
            <Button
              variant="customOutline"
              size="custom16"
              rounded="rounded-full"
              className="!shadow-none mt-8 !font-[400]"
              icon={<ExternalLinkIcon />}
              iconPosition="right"
            >
            View Jobs
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

export default ServiceHero;
