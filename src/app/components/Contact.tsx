import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-16 mt-[194px] mb-8 sm:p-0 p-6">
      <div className="mx-auto max-w-[1272px]">
        <div className="grid grid-cols-1 lg:grid-cols-[424px_1fr] gap-10 items-start bg-white">
          {/* SOL: Görsel (üstten biraz taşıyor) */}
          <div className="sm:h-[calc(100%+114px)] mt-[-114px]">
            <div className="relative flex justify-center items-baseline w-full h-[248px] sm:h-[460px] lg:h-[535px] bg-[linear-gradient(#f0f0f0,#f0f0f000)]">
              <Image
                src="/images/standort-schweiz.png"
                alt="Standort Schweiz"
                width={328}
                height={207}
                className="object-cover pt-[30px]"
              />
            </div>
          </div>

          {/* SAĞ: Beyaz panel */}
          <article className="px-6 sm:px-12 lg:px-20 py-10 lg:py-16 ">
                   <p className="text-mint font-[300] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            Merkez
        </p>
            <h2 className="text-primary-600 font-bold tracking-[-0.02em] leading-[1.05] text-[34px] sm:text-[42px] lg:text-[48px]">
              İsviçre 
            </h2>
            <p className="text-primary-600 font-[400] tracking-[-0.01em] text-[26px] sm:text-[34px] lg:text-[40px] mt-2">
              Genel Merkezi
            </p>

            <ul className="text-primary-600 mt-4">
                <li>SDS SWISS DENTAL SOLUTIONS AG</li>
                <li>Konstanzerstrasse 11</li>
                <li>CH-8280 Kreuzlingen</li>
            </ul>

            <div className="flex flex-row gap-4 mt-4">
                <span className="text-primary-600">Telefon</span>
                <Link href="tel:+41715563670" className="text-primary-600 text-[16px] font-[300] cursor-pointer underline">
                +41715563670
                </Link>
            </div>

            <div className="flex flex-row gap-4 sm:gap-[45px] mt-4">
                <span className="text-primary-600">E-posta</span>
                <Link href="mailto:info@swissdentalsolutions.com" className="text-primary-600 text-[16px] font-[300] cursor-pointer underline">
                info@swissdentalsolutions.com
                </Link>
            </div>

          </article>
        </div>
      </div>
    </section>
  );
}
