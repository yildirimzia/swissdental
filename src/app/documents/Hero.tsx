'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Hero() {

    const handleHeaderDownload = (e: React.MouseEvent) => {
        const targetId = 'patient-downloads';
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
                                Downloads
                            </p>
                            {/* Headline */}
                            <h1 className="text-center font-extrabold leading-[0.95] text-primary-600">
                                <span className="block text-[clamp(40px,8.5vw,120px)]">
                                    INFO TO GO
                                </span>
                            </h1>

                            {/* Supporting copy */}
                            <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                                All important documents, such as catalogs, drilling protocols and instructions can be found here.
                            </p>
                            <Link href={'/documents'} className="mx-auto font-[600] mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-500 flex justify-center items-center gap-2 underline cursor-pointer">
                                Video library
                                <Image src={'/images/mdi_youtube.svg'} width={38} height={38} alt={''} />
                            </Link>

                            <h3 onClick={handleHeaderDownload}  className="mx-auto font-[600] max-w-3xl mt-0 text-center text-base leading-relaxed text-primary-500 flex justify-center items-center gap-2 underline cursor-pointer">
                                Downloads for patients
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero