"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const handleHeaderDownload = (e: React.MouseEvent) => {
    const targetId = "patient-downloads";
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  };

  return (
    <section className="relative isolate">
      {/* Outer background (very light grey -> transparent) */}
      <div className="">
        {/* Inset white panel */}
        <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
          <div className="relative my-10 sm:my-14 md:my-20  bg-[linear-gradient(180deg,#fff_58.33%,#fff0_100%)]">
            {/* big top/bottom padding to match the spacing in the screenshot */}
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 py-24 sm:py-28 md:py-36">
              {/* Overline */}
              <p className="mx-auto mb-8 text-center text-[11px] sm:text-xs tracking-[0.25em] text-primary-500 uppercase">
                PODCAST
              </p>
              {/* Headline */}
              <h1 className="text-center font-extrabold leading-[0.95] text-primary-600">
                <span className="block text-[clamp(40px,8.5vw,120px)]">
                  SDS'TEN BİR PODCAST
                </span>
              </h1>

              {/* Supporting copy */}
              <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                Son yıllarda podcast'ler, yalnızca her yerde ve her zaman (yemek pişirirken veya işe gidip gelirken bile) dinlenebilmeleri nedeniyle değil, aynı zamanda kişisel ve otantik bir bilgi aktarım platformu olmaları nedeniyle de giderek daha popüler hale geldi1.

              </p>
              <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                SDS ailesinin çeşitli üyeleri, SDS PODCAST bölümlerine heyecan verici konuklar davet edecekler2. Bu podcast'lerde, biyolojik diş hekimliğini birlikte daha güvenli ve daha iyi hale getirmek isteyen implantologlar, şirket veya endüstri temsilcileri ve araştırmayı yürüten kişiler gibi seramik implant pazarındaki farklı aktörlerin faaliyetleri hakkında bilgiler edineceksiniz3.

              </p>

              <p className="mx-auto mb-8 mt-11 text-center text-[16px] sm:text-xs  text-primary-600 uppercase">
                Bizi takip edin!
              </p>

              <div className="flex flex-row justify-center items-center ">
                <Link
                  href={"https://open.spotify.com/show/20LitDYAFxk8QropA2EugL?si=1e25f70026b140cd&_ga=2.28110901.809342170.1710162415-283821518.1707122006&nd=1&dlsi=ad321ae23cda4129"}
                  className=" font-[600] text-center text-base leading-relaxed text-primary-500 flex justify-center items-center gap-2 underline cursor-pointer"
                >
                  <Image
                    src={"/images/brand-spotify.svg"}
                    width={46}
                    height={46}
                    alt={""}
                  />
                </Link>
                <Link
                  href={"https://podcasts.apple.com/de/podcast/der-sds-podcast/id1610124883?_ga=2.97785750.809342170.1710162415-283821518.1707122006"}
                  className="font-[600] text-center text-base leading-relaxed text-primary-500 flex justify-center items-center gap-2 underline cursor-pointer"
                >
                  <Image
                    src={"/images/brand-apple-filled.svg"}
                    width={46}
                    height={46}
                    alt={""}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
