export default function BenefitsForDentistsHero() {
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
                Professionals
              </p>
              {/* Headline */}
              <h1 className="text-center font-extrabold leading-[0.95] text-primary-600">
                <span className="block text-[clamp(40px,8.5vw,120px)]">
                  BENEFITS FOR
                </span>
                <span className="block text-[clamp(40px,8.5vw,120px)]">
                  DENTISTS
                </span>
              </h1>

              {/* Supporting copy */}
              <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-primary-600">
                Opt for ceramic implants for your implantology needs. Our
                selection of full ceramic implants covers a variety of dental
                applications, providing optimal care for your patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
