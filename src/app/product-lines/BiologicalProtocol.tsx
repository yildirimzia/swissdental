"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  youtubeId: string; // ör: "dQw4w9WgXcQ"
};

function VideoModal({ open, onClose, youtubeId }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <button
        aria-label="Close video"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-5xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/90 hover:text-white z-10"
        >
          ✕
        </button>

        {/* Video */}
        <div className="w-full rounded-xl overflow-hidden bg-black aspect-video shadow-xl">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1`}
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function AimBlock() {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return (
    <section className="py-20 bg-white mt-40 sm:mt-80">
      <div className="2xl:ml-80 lg:ml-[60px] grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-12 items-center">
        {/* Sol metin */}
        <div className="sm:mb-[193px] mb-0">
          <p className="text-mint tracking-wide font-[400] text-[16px] flex items-center gap-4  sm:p-0 pl-[24px] pr-[24px]">
            <span className=" w-[100px] h-[1px] bg-mint sm:inline-block hidden" />
            HOW TO ...
          </p>

          <h2 className="text-primary-600 sm:pl-0 pl-[24px] pr-[24px] mt-2 text-[26px] sm:text-[40px] font-[700] leading-[1.2] tracking-[-0.01em]">
            Tümü Seramik
          </h2>

          <p className="text-[16px] font-[200] leading-[1.6] text-primary-600 p-6 sm:p-0">
            SDS implantolojisinde kullanılan tüm aletler seramiktir. Tamamen
            seramik olan yüksek performanslı seramik ATZ'den yapılmış delgilerle
            metalsiz implantasyon yapılır. Hastayla temas eden tüm aletler
            seramikten yapılmıştır. ATZ seramiğinden yapılan döner aletler,
            sürekli keskin kenarlarıyla yüksek dayanıklılık gösterir.
          </p>
          <br />
          <p className="text-[16px] font-[200] leading-[1.6] text-primary-600 p-6 sm:p-0">
            Delme protokollerine uymayı basitleştiren ameliyat tepsisi, kemik
            sınıflarına göre (IV-III-II-I) tasarlanmıştır.
          </p>
          <br />
          <p className="text-[16px] font-[200] leading-[1.6] text-primary-600 p-6 sm:p-0">
            Tepsi, SDS tarafından daha önce satılan tüm implantlar ve şu anda
            geliştirilmekte olan implantlar için uyumludur.
          </p>
          <br />
          <p className="text-[16px] font-[200] leading-[1.6] text-primary-600 p-6 sm:p-0">
            Delgiler, lazerle gravürlenmiş (tip ve çap) ve renk kodludur, bu
            sayede delme sekanslarını her zaman kolayca takip edebilirsiniz.
          </p>
        </div>

        {/* Sağ görsel + Play butonu (tasarımdaki kart görünümü) */}
        <div className="relative">
          <div className="relative w-full sm:h-[467px] h-[220px] overflow-hidden ring-1 ring-black/5 bg-gray-100 sm:translate-y-[-343px]">
            {/* Next/Image'i fill ile kullan: */}
            <Image
              src="/images/product-lines/dr-volz-op.png"
              alt="SDS AIM"
              fill
              priority
              sizes=""
              className="cursor-pointer sm:p-0 pl-[24px] pr-[24px]"
              onClick={openModal}
              draggable={false}
            />

            {/* Play kartı */}
            <button
              onClick={openModal}
              className="absolute left-[24px] sm:left-[130px] p-8 cursor-pointer bottom-0 backdrop-blur-[25px] bg-white/50 text-primary-600  px-5 py-4 flex items-center gap-3 transition"
            >
              <span className="flex  items-center justify-center w-11 h-11 rounded-full border border-primary-600">
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
                  className=""
                >
                  <path d="M7 4v16l13 -8z"></path>
                </svg>
              </span>
              <span className="text-left">
                <span className="block font-semibold">
                  Biological drilling protocol
                </span>
                <span className="block text-sm opacity-70">
                  according to Dr. Ulrich Volz
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <VideoModal open={open} onClose={closeModal} youtubeId="hqMv97ACkwU" />
    </section>
  );
}
