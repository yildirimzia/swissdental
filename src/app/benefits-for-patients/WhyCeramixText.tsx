import React from "react";
import { useScrollAnimation } from "../components/useScrollAnimation";
function WhyCeramixText() {
  const { ref: scrollRef, isVisible } = useScrollAnimation(0.2);
  return (
    <section>
      <div
        ref={scrollRef}
        className={`
          transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
      >
        <div className="sm:p-24 p-16 space-y-2 max-w-[55rem] mx-auto sm:px-4 px-6 text-left">
          <p className="leading-[1.4] tracking-[-.96px] font-extralight text-primary-600  mx-auto max-w-prose text-[clamp(20px,calc(-37.2307692308px_+_.0576923077_*_100vw),32px)]">
            SDS ekibimiz seramik implant geliştirme alanında öncü olarak 20 yılı aşkın deneyime sahiptir.
İsviçre Biohealth Kliniğimizde binlerce implantın başarılı kullanımı bize geniş bir deneyim kazandırmıştır.
Bu deneyim yalnızca doğrudan optimal hasta bakımına katkı sağlamaz, aynı zamanda ürünlerimizin sürekli gelişimini de destekler.
Yenilik ve en yüksek kaliteye olan bağlılığımız, seramik implantolojideki başarımızın temelini oluşturur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyCeramixText;
