import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="d-inline-block ms-1 mt-n1-4"
  >
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
    <path d="M11 13l9 -9"></path>
    <path d="M15 4h5v5"></path>
  </svg>
);

export default function TrainingCompany() {
  return (
    <section className="py-20 bg-[#f7f7f7] mt-24 mb-24px">
      <div className="container-dental max-w-[1320px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Card 1 */}
          <article className="relative bg-white">
            {/* İçerik */}
            <div className="px-8 sm:px-16 py-12 sm:py-16">
              {/* Icon */}
              <div className="mb-8">
                <Image
                  src="/images/product-lines/Hat.svg"
                  alt="First steps"
                  width={44}
                  height={44}
                />
              </div>

              <h3 className="text-primary-600 text-[20px] sm:text-[32px] font-[400] leading-[1.2]">
               First Steps at SDS
              </h3>

              <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[560px]">
                Through our wide range of courses, both online and in person, we support not only experienced dentists but also by providing beginners to familiarise themselves with ceramic implantology and benefit from our knowledge.


              </p>

              <Link href="/supplements-ch">
                <Button
                  variant="customOutline" // Yeni variant
                  size="custom16"
                  rounded="rounded-full"
                  className="!shadow-none mt-8 !font-[400]" // Shadow'u kaldır
                  icon={<ExternalLinkIcon />}
                  iconPosition="right"
                >
                  Get Started with SDS
                </Button>
              </Link>
            </div>

            {/* Alt kırmızı çizgi */}
            <div className="absolute left-0 right-0 bottom-0 h-[4px] bg-[#e31b23]" />
          </article>

          {/* Card 2 */}
          <article className="relative bg-white mt-[86px] h-[calc(100%+10px)]">
            <div className="px-8 sm:px-16 py-12 sm:py-16 pb-0">
              {/* Icon */}
              <div className="mb-8">
                <Image
                  src="/images/product-lines/Trophy.svg"
                  alt="Become a specialist"
                  width={44}
                  height={44}
                />
              </div>

              <h3 className="text-primary-600 text-[20px] sm:text-[32px] font-[400] leading-[1.2]">
                Become a Specialist
              </h3>

              <p className="mt-6 text-primary-600 text-[16px] leading-7 font-extralight max-w-[560px]">
                Our training courses offer experienced users the chance to advance their education and become experts in ceramic implantology. Upon successfully completing the curriculum, you can be appointed as a ‘Specialist in Biological Dentistry and Ceramic Implants.’
              </p>

              <Link href="/supplements-ch">
                <Button
                  variant="customOutline" // Yeni variant
                  size="custom16"
                  rounded="rounded-full"
                  className="!shadow-none mt-8 !font-[400]" // Shadow'u kaldır
                  icon={<ExternalLinkIcon />}
                  iconPosition="right"
                >
                  Discover the Curriculum
                </Button>
              </Link>
            </div>

            {/* Alt kırmızı çizgi */}
            <div className="absolute left-0 right-0 bottom-0 h-[4px] bg-[#e31b23]" />
          </article>
        </div>
      </div>
    </section>
  );
}
