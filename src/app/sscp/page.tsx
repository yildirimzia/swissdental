import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'

import type { Metadata } from "next";
import { buildMetadata } from "@/seo/config";



export const metadata: Metadata = buildMetadata({
  path: "/sscp",
  titleOverride: "SDS İmplantları için Güvenlik ve Klinik Performans Özeti (SSCP)",
  descriptionOverride:
    "Seramik implant portföyümüz için yasal olarak gerekli olan Güvenlik ve Klinik Performans Özeti'ne (SSCP) erişin. Diş hekimleri için temel klinik ve güvenlik bilgileri.",
  canonical: "/guvenlik-klinik-performans-ozeti",
  ogImage: "/images/SDS-SwissdentalsolutionsTR.jpg",
});


function Sscp() {
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
                 Güvenlik ve Klinik Performans Özeti (SSCP)


                </p>
                {/* Headline */}
                <h1 className="text-center sm:text-[130px] text-[68px] font-extrabold leading-[0.95] text-primary-600">
                  SSCP

                </h1>

                {/* Supporting copy */}
                <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                  Güvenlik ve Klinik Performans Özeti (SSCP), seramik implant portföyümüzün klinik performans verileri ve güvenlikle ilgili bilgilerini yapılandırılmış bir şekilde sunan, yasal olarak zorunlu bir belgedir. Bu belge, öncelikli olarak sağlık profesyonellerine endikasyonları, klinik etkinliği ve potansiyel riskleri değerlendirmeleri için güvenilir bir temel sağlar. Aynı zamanda, hastalar da kullanılan implantların güvenliği ve klinik değerlendirmesi hakkında değerli bilgiler bulabilirler. Bilinçli ve güvenli karar verme süreçleri için maksimum şeffaflığı sağlamak amacıyla, SSCP'yi açıkça erişilebilir hale getiriyoruz.

                </p>
                <div className="flex justify-center">
                  <Link target='_blank' href="https://sds.directus.app/assets/cc75ee61-e296-4a32-b2e9-2010bfc72a2d/SSCP-00324_Dental_Implant_Systems_v3.pdf">
                    <Button
                      variant="customOutline"
                      size="custom16"
                      rounded="rounded-full"
                      className="!shadow-none mt-8 !font-[400] cursor-pointer"
                      iconPosition="right"
                    >
                      Download Now
                    </Button>
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Sscp