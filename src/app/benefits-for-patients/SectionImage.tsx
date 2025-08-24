"use client";

import Image from "next/image";

export default function SplitBackgroundBlock() {
  return (
    <section className="relative flex justify-center w-full overflow-hidden mx-auto">
      {/* Arka plan resmi */}
      <Image
        src="/images/benefits-for-patients/Swiss-Biohealth-Clinic.jpg" // kendi resmini buraya ekle
        alt="Background"
        className="object-cover z-1 p-6 sm:p-0"
        width={1272}
        height={537}
      />

      {/* Overlay: üst yarı beyaz, alt yarı kırmızı */}
      <div className="absolute inset-0">
        <div className="h-1/2 " /> {/* üst yarısı beyaz */}
        <div className="h-1/2 bg-white" /> {/* alt yarısı kırmızı */}
      </div>
    </section>
  );
}
