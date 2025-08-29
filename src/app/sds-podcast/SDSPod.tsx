import React from "react";
import Image from "next/image";
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

function SDSPod() {
  return (
    <section className="mt-32 mb-52 sm:mt-[300px] lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[50%_50%] items-center mx-auto">
      <div className="relative flex sm:min-h-[220px] min-h-[220px] mb-[200px]">
        {/* FOTOĞRAF – üstte, kartın dışına taşır */}
        <div
          className={[
            "absolute z-10",
            // Resmi daha yukarı çıkardık ve ortaladık
            "-top-24 md:-top-[192px]",
            "left-1/2 transform -translate-x-1/2",
          ].join(" ")}
        >
          {/* Image container'ı düzelttik */}
          <div className="w-[280px] md:w-[362px] h-[280px] md:h-[362px] relative overflow-hidden ">
            <Image
              src='/images/podcast/SDSPOD-EN-Small.jpg'
              alt='SDSPOD-EN'
              fill
              className="object-cover"
              sizes="(max-width: 768px) 228px, 362px"
            />
          </div>
        </div>

        {/* KART */}
        <article
          className={[
            "bg-white   relative text-center z-0 mt= pl-[80px]",
            "max-w-[605px] w-full",
            // Görselin taşıntısını temizlemek için üst padding
            "pt-40 md:pt-48",
            // İç pedler
            "px-8 md:px-12 pb-12",
            // Kartı ortala
            "mx-auto",
          ].join(" ")}
        >
          {/* İsim / ülke */}
          <p className="text-[12px] tracking-[.15em] text-[#3aa194] uppercase mb-4 mt-11">
           Season 1, Episode 6
          </p>

          {/* Alıntı */}
          <h3 className="sm:min-h-[120px] min-h-[160px] text-primary-600 text-[20px] md:text-[34px] font-bold leading-[1.2]">
            Prof. Dr. Etyene Schnurr, <br /> Dr. Kurt Mosetter
          </h3>

          {/* CTA */}

            <Link target="_blank" href="https://open.spotify.com/episode/1RPFvoWluoZYNWZwHxyWYT?si=ZCyj8ElEQUem633YxqqTIg">
              <Button
                variant="customOutline"
                size="custom16"
                rounded="rounded-full"
                className="!shadow-none mt-8 !font-[400] cursor-pointer"
                icon={<ExternalLinkIcon />}
                iconPosition="right"
              >
                Play
              </Button>
            </Link>
          
        </article>
      </div>
      <div className="relative flex sm:min-h-[220px] min-h-[220px] sm:pt-[90px] mb-[52px] p-0">
        {/* FOTOĞRAF – üstte, kartın dışına taşır */}
        <div
          className={[
            "absolute z-10",
            // Resmi daha yukarı çıkardık ve ortaladık
            "-top-24 md:-top-[80px]",
            "left-1/2 transform -translate-x-1/2",
          ].join(" ")}
        >
          {/* Image container'ı düzelttik */}
          <div className="w-[280px] md:w-[362px] h-[280px] md:h-[362px] relative overflow-hidden ">
            <Image
              src='/images/podcast/SDSPOD-EN-Small.jpg'
              alt='SDSPOD-EN'
              fill
              className="object-cover"
              sizes="(max-width: 768px) 228px, 362px"
            />
          </div>
        </div>

        {/* KART */}
        <article
          className={[
            "bg-white   relative text-center z-0  pl-[80px]",
            "max-w-[605px] w-full",
            // Görselin taşıntısını temizlemek için üst padding
            "pt-40 md:pt-48",
            // İç pedler
            "px-8 md:px-12 pb-12",
            // Kartı ortala
            "mx-auto",
          ].join(" ")}
        >
          {/* İsim / ülke */}
          <p className="text-[12px] tracking-[.15em] text-[#3aa194] uppercase mb-4 mt-11">
           Season 1, Episode 4
          </p>

          {/* Alıntı */}
          <h3 className="sm:min-h-[120px] min-h-[160px] text-primary-600 text-[20px] md:text-[34px] font-bold leading-[1.2]">
            Future Talks with<br />  Prof.  Dr. Florian Beuer, <br />President of the DGI
          </h3>

          {/* CTA */}
          
            <Link target="_blank" href="https://open.spotify.com/episode/3tEwiJvAXtaq0bjNWPMHt1?si=mQyKHwqzSM-TNeAcHKqtJQ&nd=1&dlsi=6e403740c26b43b4">
              <Button
                variant="customOutline"
                size="custom16"
                rounded="rounded-full"
                className="!shadow-none mt-8 !font-[400] cursor-pointer"
                icon={<ExternalLinkIcon />}
                iconPosition="right"
              >
               Play
              </Button>
            </Link>
          
        </article>
    
      </div>
    
    <div className="relative flex sm:min-h-[220px] min-h-[220px] mt-52 ">
        {/* FOTOĞRAF – üstte, kartın dışına taşır */}
        <div
          className={[
            "absolute z-10",
            // Resmi daha yukarı çıkardık ve ortaladık
            "-top-24 md:-top-[192px]",
            "left-1/2 transform -translate-x-1/2",
          ].join(" ")}
        >
          {/* Image container'ı düzelttik */}
          <div className="w-[280px] md:w-[362px] h-[280px] md:h-[362px] relative overflow-hidden ">
            <Image
              src='/images/podcast/SDSPOD-EN-Small.jpg'
              alt='SDSPOD-EN'
              fill
              className="object-cover"
              sizes="(max-width: 768px) 228px, 362px"
            />
          </div>
        </div>

        {/* KART */}
        <article
          className={[
            "bg-white   relative text-center z-0 mt= pl-[80px]",
            "max-w-[605px] w-full",
            // Görselin taşıntısını temizlemek için üst padding
            "pt-40 md:pt-48",
            // İç pedler
            "px-8 md:px-12 pb-12",
            // Kartı ortala
            "mx-auto",
          ].join(" ")}
        >
          {/* İsim / ülke */}
          <p className="text-[12px] tracking-[.15em] text-[#3aa194] uppercase mb-4 mt-11">
           Season 1, Episode 3
          </p>

          {/* Alıntı */}
          <h3 className="sm:min-h-[120px] min-h-[160px] text-primary-600 text-[20px] md:text-[34px] font-bold leading-[1.2]">
            Dr. Rebekka Hueber on the advantages of ceramic implants, in particular SDS implants
          </h3>

          {/* CTA */}
          
            <Link target="_blank" href="https://open.spotify.com/episode/2Hi7nlxuKLjlmqBmcijZFu?si=Ke0B1qTOQei-NBqCDsNznw">
              <Button
                variant="customOutline"
                size="custom16"
                rounded="rounded-full"
                className="!shadow-none mt-8 !font-[400] cursor-pointer"
                icon={<ExternalLinkIcon />}
                iconPosition="right"
              >
                Play
              </Button>
            </Link>
          
        </article>
      </div>
      <div className="relative flex sm:min-h-[220px] min-h-[220px] sm:pt-[90px] p-0 mt-52 ">
        {/* FOTOĞRAF – üstte, kartın dışına taşır */}
        <div
          className={[
            "absolute z-10",
            // Resmi daha yukarı çıkardık ve ortaladık
            "-top-24 md:-top-[80px]",
            "left-1/2 transform -translate-x-1/2",
          ].join(" ")}
        >
          {/* Image container'ı düzelttik */}
          <div className="w-[280px] md:w-[362px] h-[280px] md:h-[362px] relative overflow-hidden ">
            <Image
              src='/images/podcast/SDSPOD-EN-Small.jpg'
              alt='SDSPOD-EN'
              fill
              className="object-cover"
              sizes="(max-width: 768px) 228px, 362px"
            />
          </div>
        </div>

        {/* KART */}
        <article
          className={[
            "bg-white   relative text-center z-0  pl-[80px]",
            "max-w-[605px] w-full",
            // Görselin taşıntısını temizlemek için üst padding
            "pt-40 md:pt-48",
            // İç pedler
            "px-8 md:px-12 pb-12",
            // Kartı ortala
            "mx-auto",
          ].join(" ")}
        >
          {/* İsim / ülke */}
          <p className="text-[12px] tracking-[.15em] text-[#3aa194] uppercase mb-4 mt-11">
           Season 1, Episode 2
          </p>

          {/* Alıntı */}
          <h3 className="sm:min-h-[120px] min-h-[160px] text-primary-600 text-[20px] md:text-[34px] font-bold leading-[1.2]">
            Dr. Dirk Duddeck talks about Implant Contamination
          </h3>

          {/* CTA */}
          
            <Link target="_blank" href="https://open.spotify.com/episode/6lNxZo3TUmQXwQUuIVUpS3?si=-fSqK4IbT7immqjY9Lhjeg">
              <Button
                variant="customOutline"
                size="custom16"
                rounded="rounded-full"
                className="!shadow-none mt-8 !font-[400] cursor-pointer"
                icon={<ExternalLinkIcon />}
                iconPosition="right"
              >
               Play
              </Button>
            </Link>
          
        </article>
      </div>
    </section>
  );
}

export default SDSPod;
