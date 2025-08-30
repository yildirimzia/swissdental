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
                {/* Headline */}
                <h1 className="text-center sm:text-[130px] text-[68px] font-extrabold leading-[0.95] text-primary-600">
                  Application

                </h1>

                {/* Supporting copy */}
                <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                 We look forward to receiving your meaningful application, including information on your earliest availability and salary expectations. Please use our job portal.
                </p>
                <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                    SDS Swiss Dental Solutions AG <br />
                    Konstanzerstrasse 11 <br />
                    CH-8280 Kreuzlingenbr <br />
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
                      Unsolicited Application 
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