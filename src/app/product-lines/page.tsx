import Image from "next/image"
import Button from "../components/Button"
import Link from "next/link"

export default function ProductLinesPage() {
  return (
    <>
    <main className="pb-[150px] p-[10px] bg-[linear-gradient(180deg,#EAF4F3_58.33%,rgba(255,255,255,0)_100%)]">
      <div className="pb-[100px] pt-[110px]">
        <p className="pt-[100px] text-[61px] sm:text-[100px] whitespace-nowrap inline-block text-[#3aa194] font-bold left-0 sm:tracking-[1.1em] sm:leading-[0.9] tracking-[0.3em] leading-[.9]  opacity-10 relative text-center uppercase top-0 sm:w-[calc(100%+0.8em)] w-full">MODELL<br />SERIES</p>
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 pb-[100px]">
        <div className="relative">
            <Image
            src="/images/SDS1_Plines.png"
            alt="Product Image"
            width={160}
            height={500}
            className="absolute bottom-[-250px] left-[5%] w-[160px] z-[0] sm:block hidden
                        transition-all duration-700 ease-in-out 
                        transform scale-100 
                        filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] 
                        hover:scale-110 
                        hover:drop-shadow-[30px_30px_30px_rgba(0,0,0,0.2)] 
                        text-transparent"
            />

            <Image
            src="/images/SDS1 2_Plines.png"
            alt="Product Image"
            width={160}
            height={500}
            className="absolute bottom-[-130px] left-[0] sm:bottom-[-93px] sm:left-[17%] sm:w-[160px] w-[125px]  z-[0]
                        transition-all duration-700 ease-in-out 
                        transform scale-100 
                        filter drop-shadow-[10px_10px_10px_rgba(0,0,0,0.2)] 
                        hover:scale-110 
                        hover:drop-shadow-[30px_30px_30px_rgba(0,0,0,0.2)] 
                        text-transparent"
            />
            <Image
            src="/images/clean-implant.png"
            alt="Product Image"
            width={160}
            height={500}
            className="absolute rotate-[10deg] sm:block hidden  sm:bottom-[-30px] sm:left-[38%] w-[90px] z-[0] text-transparent"
            />
        </div>
            <div className="sm:mt-[106px] mt-[-25%] ml-[36%] sm:ml-[25%]">
                <div className="text-primary-600 text-[50px] sm:text-[70px] font-bold leading-[1.3]">
                    BRIGHT
                </div>
                <p className="text-primary-600 text-[16px] font-[200]">Premium ceramic implants</p>
                    <Link href="/supplements-ch">
                        <Button
                        variant="customOutline"
                        size="custom16"
                        rounded="rounded-full"
                        className="!shadow-none mt-8 !font-[500]"
                        iconPosition="right"
                      >
                        Go to BRIGHT
                      </Button>
                    </Link>
            </div>
      </div>
    </main>
    </> 
  )
}