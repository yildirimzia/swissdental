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
                  A PODCAST BY SDS
                </span>
              </h1>

              {/* Supporting copy */}
              <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                In recent years, podcasts have become increasingly popular, not
                only because you can listen to them anywhere and anytime—be it
                while cooking or commuting—but also because they are a personal
                and authentic knowledge transfer platform.
              </p>
              <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                Various members of the SDS family will be inviting exciting
                guests to our SDS PODCAST episodes, where you will gain insights
                into the activities of different ceramic implant market players,
                e.g. implantologists, company or industry representatives, as
                well as the people driving research who want to jointly further
                develop biological dentistry, making it safer and better.
              </p>

              <p className="mx-auto mb-8 mt-11 text-center text-[16px] sm:text-xs  text-primary-600 uppercase">
                Follow us!
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
