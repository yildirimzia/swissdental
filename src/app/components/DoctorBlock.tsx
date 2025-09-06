import Image from "next/image";

export default function DoctorBlock() {
  return (
    <section className="bg-[#f6f7f7] py-16 mt-[194px] mb-8 sm:p-0 p-6">
      <div className="mx-auto max-w-[1272px]">
        <div className="grid grid-cols-1 lg:grid-cols-[424px_1fr] gap-10 items-start bg-white">
          {/* SOL: Görsel  */}
          <div className="sm:h-[calc(100%+123px)] mt-[-123px]">
            <div className="relative w-full h-[548px] sm:h-[460px] lg:h-[535px] ">
              <Image
                src="/images/product-lines/Dr-Ulrich-Volz.jpg"
                alt="Dr. med. dent. Karl Ulrich Volz"
                fill
                className="object-cover "
                priority
              />
            </div>
          </div>

          {/* SAĞ */}
          <article className="px-6 sm:px-12 lg:px-20 py-10 lg:py-16 ">
            <h2 className="text-primary-600 font-bold tracking-[-0.02em] leading-[1.05] text-[34px] sm:text-[42px] lg:text-[48px]">
              Dr. med. dent.
            </h2>
            <p className="text-primary-600 font-[400] tracking-[-0.01em] text-[26px] sm:text-[34px] lg:text-[40px] mt-2">
              Karl Ulrich Volz
            </p>

            <p className="mt-8 text-primary-600/90 text-[16px] leading-7 font-[300] max-w-[780px]">
SDS SWISS DENTAL SOLUTIONS AG ve Kreuzlingen'deki SWISS BIOHEALTH CLINIC'in kurucusu ve sahibi olarak, yerleştirdiği yaklaşık 30.000 seramik implant ile seramik implantoloji ve biyolojik diş hekimliği alanında dünya lideri olarak kabul edilmektedir.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
