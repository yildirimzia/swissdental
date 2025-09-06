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
            TARİH
          </p>

          <h2 className="text-primary-600 text-[26px] sm:text-[40px] font-[600] sm:font-[400] leading-[1.2] mb-6">
            25 yılı aşkın <br />  bir süredir metalsiz

          </h2>

          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
           Genç bir diş hekimi olan Dr. Ulrich Volz, biyouyumlu, sağlam ve dayanıklı metal içermeyen implantlarla diş hekimliğinde devrim yaratmayı hayal etti2. Bugün SDS SWISS DENTAL SOLUTIONS AG'nin sunduğu zirkonyum dioksitten yapılmış seramik implantların bugünkü gelişimi, milenyumun başında başladı3. Tek parçalı implant için ilk CE sertifikası 2004 yılında verildi444. Dr. Ulrich Volz, 2007 yılında SDS SWISS DENTAL SOLUTIONS AG şirketini kurdu5. 10 yıl gibi kısa bir sürede bir fikrin seramik implant teknolojisinde küresel bir liderliğe nasıl dönüştüğünü gösteren bir video da izleyebilirsiniz
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
              Videoyu izle
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
