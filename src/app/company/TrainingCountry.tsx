import Image from "next/image";
import Link from "next/link";

export default function DoctorBlock() {
  return (
    <section className="bg-[#f6f7f7] py-16 mt-[194px] mb-8 sm:p-0 p-6">
      <div className="mx-auto max-w-[1272px] grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-[172px_1fr] gap-10 items-start bg-white mb-[125px] sm:mb-0 p-[20px] sm:p-0">
          {/* SOL: Görsel  */}
          <div className="sm:h-[calc(100%+123px)] mt-[-123px]">
            <div className="relative flex justify-center p-[20px] items-baseline bg-gradient-to-b from-[#f0f0f0] to-[#f0f0f000] w-full h-[248px] sm:h-[460px] lg:h-[535px] ">
              <Image
                src="/images/company/standort-deutschland.png"
                alt="Dr. med. dent. Karl Ulrich Volz"
                className="object-cover "
                width={140}
                height={192}
              />
            </div>
          </div>

          {/* SAĞ */}
          <article className="flex flex-col self-center">
            <h2 className="text-primary-600 font-bold tracking-[-0.02em] leading-[1.05] text-[34px] sm:text-[42px] lg:text-[48px]">
              Germany
              Almanya
            </h2>

            <ul className="text-primary-600 mt-4">
              <li>SDS Deutschland GmbH</li>
              <li>Bücklestraße 5a78467 Konstanz</li>
            </ul>

            <div className="flex flex-row gap-4 mt-4">
              <span className="text-primary-600">Telefon</span>
              <Link
                href="tel:+4975318916860"
                className="text-primary-600 text-[16px] font-[300] cursor-pointer underline"
              >
                +4975318916860
              </Link>
            </div>

            <div className="flex flex-row gap-4 sm:gap-[45px] mt-4">
              <span className="text-primary-600">E-posta</span>
              <Link
                href="mailto:info@swissdentalsolutions.de"
                className="text-primary-600 text-[16px] font-[300] cursor-pointer underline"
              >
                info@swissdentalsolutions.de
              </Link>
            </div>
          </article>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[172px_1fr] gap-10 items-start bg-white mb-[125px] sm:mb-0 p-[20px] sm:p-0">
          {/* SOL: Görsel  */}
          <div className="sm:h-[calc(100%+123px)] mt-[-123px]">
            <div className="relative flex justify-center p-[20px] items-baseline bg-gradient-to-b from-[#f0f0f0] to-[#f0f0f000] w-full h-[248px] sm:h-[460px] lg:h-[535px] ">
              <Image
                src="/images/company/standort-usa.png"
                alt="Dr. med. dent. Karl Ulrich Volz"
                className="object-cover "
                width={140}
                height={192}
              />
            </div>
          </div>

          {/* SAĞ */}
          <article className="flex flex-col self-center">
            <h2 className="text-primary-600 font-bold tracking-[-0.02em] leading-[1.05] text-[34px] sm:text-[42px] lg:text-[48px]">
              USA
            </h2>

            <ul className="text-primary-600 mt-4">
              <li>SDS Swiss Dental Solutions USA, Inc</li>
              <li>34 Main Street Ext. Suite 202</li>
              <li>Plymouth MA 02360 | USA</li>
            </ul>

            <div className="flex flex-row gap-4 mt-4">
              <span className="text-primary-600">Telefon</span>
              <Link
                href="tel:+18337947787"
                className="text-primary-600 text-[16px] font-[300] cursor-pointer underline"
              >
                +18337947787
              </Link>
            </div>

            <div className="flex flex-row gap-4 sm:gap-[45px] mt-4">
              <span className="text-primary-600">E-posta</span>
              <Link
                href="mailto:info@swissdentalsolutions.com"
                className="text-primary-600 text-[16px] font-[300] cursor-pointer underline"
              >
                info.us@swissdentalsolutions.com
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
