import React from 'react'
import Link from 'next/link'
import Button from '../components/Button'

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
                 Summary of Safety and Clinical Performance

                </p>
                {/* Headline */}
                <h1 className="text-center sm:text-[130px] text-[68px] font-extrabold leading-[0.95] text-primary-600">
                  SSCP

                </h1>

                {/* Supporting copy */}
                <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                  The Summary of Safety and Clinical Performance (SSCP) is a legally mandated document providing a structured overview of clinical performance data and safety-related information for our ceramic implant portfolio.
It primarily serves healthcare professionals as a reliable basis for assessing indications, clinical effectiveness, and potential risks.
At the same time, patients may also find valuable insights regarding the safety and clinical evaluation of the implants used. We make the SSCP openly available to ensure maximum transparency – for informed, safe decision-making.
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