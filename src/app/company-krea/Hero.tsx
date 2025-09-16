function ServiceHero() {
  return (
    <section className="">
      <div className="lg:max-w-[1380px] 2xl:max-w-[1620px] grid grid-cols-1 lg:grid-cols-[40%_60%] items-center ml-auto">
        {/* Sol: Metin */}
        <div className="flex flex-col justify-start p-6 order-2 lg:order-1">
          {/* Eyebrow */}
          <p className="text-mint font-[300] text-[16px] tracking-[.05em] uppercase mb-4 relative flex items-center">
            <span className="hidden sm:inline-block w-[100px] h-[1px] bg-mint mr-4" />
            KREA
          </p>
          <p className="text-primary-600 text-[16px] font-[300] max-w-[420px] mb-8">
            Krea olarak diş hekimi Tuğba Duymaz’ın öncülüğünde 2019 dan beri seramik implantların Türkiyede uygulanması ve yayılması için çalışıyoruz.  Bu süreçte 2025 yılından itibaren seramik implant üretiminde dünya lideri Swiss Dental Solutions firmasının Türkiyedeki tek yetkili distribütörü olarak hizmet vermeye devam ediyoruz.
          </p>

        </div>

        {/* Sağ: Background image */}
        <div
          className="order-1 lg:order-2 block  h-[546px] sm:bg-auto sm:h-[920px] w-full"
          style={{
            backgroundImage: "url(/images/company/Implantat-Background.jpg)",
            backgroundOrigin: "50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </section>
  );
}

export default ServiceHero;
