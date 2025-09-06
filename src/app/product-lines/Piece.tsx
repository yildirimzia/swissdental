import React from "react";
import Image from "next/image";

function Piece() {
  return (
    <section className="pt-48 mb-20 p-6">
      <div className="product-lines mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
        <div className="flex sm:flex-row flex-col gap-0 sm:gap-10 bg-white">
          <div className="sm:w-[204px] w-full">
            <div className="flex items-center flex-col justify-around h-auto  sm:h-[calc(100%+123px)] mt-[-123px]  bg-[linear-gradient(180deg,#e0e0e0,#e0e0e0_18.75%,#e0e0e000)]">
              <div className="mt-[67px] lg:mt-[-115px]">
                <Image src="/images/1.2.png" alt="" width={90} height={230} />
              </div>
              <div>
                <Image
                  src="/images/CleanImplant.svg"
                  alt=""
                  width={76}
                  height={76}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 pl-8 sm:pl-0 pt-18 sm:pr-14 pr-11 pb-8">
            <div className="">
              <h2>
                <strong className="font-bold text-[26px] sm:text-[40px] text-primary-600">
                  SDS 1.2
                </strong>
                <span className="text-[26px] sm:text-[40px] block text-sm text-primary-600">
                  Tek Parça İmplantlar
                </span>
                <p className="text-[16px] mt-8 font-extralight text-primary-600">
                 Bu dental implantlar, iyi bir birincil stabilite sağlandığında ve uygun oklüzal yükleme yapıldığında hemen yükleme için uygundur. Tek parçalı SDS1.2 implantlar, abutment postu ile optimum iyileşmeyi sağlar.

                </p>
              </h2>
            </div>
            <div className="grid w-full grid-cols-[41%_59%] mt-8">
              <div className="text-[16px] font-bold text-primary-600">
                Çap
              </div>
              <div className="text-[16px] font-extralight text-primary-600">
                <p>3.25 mm</p>
                <p>3.8 mm</p>
                <p>4.6 mm</p>
                <p>5.4 mm</p>
              </div>
            </div>
            <div className="grid w-full grid-cols-[41%_59%] mt-5">
              <div className="text-[16px] font-bold text-primary-600">
                Uzunluklar
              </div>
              <div className="text-[16px] font-extralight text-primary-600">
                <p>8 mm</p>
                <p>11 mm</p>
                <p>14 mm</p>
                <p>17 mm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sağ kolon */}
        <div className="flex sm:flex-row flex-col gap-0 sm:gap-10 bg-white mt-[5.375rem]">
          <div className="sm:w-[204px] w-full">
            <div className="flex items-center flex-col justify-around h-auto  sm:h-[calc(100%+123px)] mt-[-123px]  bg-[linear-gradient(180deg,#e0e0e0,#e0e0e0_18.75%,#e0e0e000)]">
              <div className="mt-[67px] lg:mt-[-115px]">
                <Image src="/images/1.2.png" alt="" width={90} height={230} />
              </div>
              <div>
                <Image
                  src="/images/CleanImplant.svg"
                  alt=""
                  width={76}
                  height={76}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 pl-8 sm:pl-0 pt-18 sm:pr-14 pr-11 pb-8">
            <div className="">
              <h2>
                <strong className="font-bold text-[26px] sm:text-[40px] text-primary-600">
                  SDS 2.2
                </strong>
                <span className="text-[26px] sm:text-[40px] block text-sm text-primary-600">
                  İki Parçalı İmplantlar
                </span>
                <p className="text-[16px] mt-8 font-extralight text-primary-600">
                  Bu implantlar, gingiva seviyesinde iyileşme için uygundur. İyi bir birincil stabilite ve uygun oklüzal yükleme sağlandığında hemen yükleme yapılabilir. İki parçalı implant sistemi, 18 yılı aşkın deneyime dayanır ve molar bölgeler için bile sağlam bir yapı sunar. İmplant-abutment bağlantısı, implantın içinde değil, tulip kısmında yer alır.

                </p>
              </h2>
            </div>
            <div className="grid w-full grid-cols-[41%_59%] mt-8">
              <div className="text-[16px] font-bold text-primary-600">
                Çap
              </div>
              <div className="text-[16px] font-extralight text-primary-600">
                <p>3.8 mm</p>
                <p>4.6 mm</p>
                <p>5.4 mm</p>
                <p>7.0 mm</p>
              </div>
            </div>
            <div className="grid w-full grid-cols-[41%_59%] mt-5">
              <div className="text-[16px] font-bold text-primary-600">
                Uzunluklar
              </div>
              <div className="text-[16px] font-extralight text-primary-600">
                <p>6 mm</p>
                <p>8 mm</p>
                <p>11 mm</p>
                <p>14 mm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Piece;
