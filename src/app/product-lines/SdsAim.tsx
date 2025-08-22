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
    <section className="py-20 bg-white">
      <div className="2xl:ml-80 lg:ml-[60px] grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-12 items-center">
        {/* Sol metin */}
        <div className="sm:mb-[193px] mb-[230px]">
          <p className="text-mint tracking-wide font-[400] text-[16px] flex items-center gap-4  sm:p-0 pl-[24px] pr-[24px]">
            <span className=" w-[100px] h-[1px] bg-mint sm:inline-block hidden" />
            SDS AIM
          </p>

          <h2 className="mt-6 mb-11 sm:pl-0 pl-[24px] pr-[24px] sm:pr-18 text-primary-600 text-[26px] sm:text-[40px] font-[400] leading-[1.2] tracking-[-0.01em]">
            Especially suitable for the use of SDS ceramic implants
          </h2>

          <Link href="/implants">
            <Button
              variant="primary"
              size="lg"
              rounded="rounded-[100px] sm:m-0 ml-[24px] mr-[24px]"
              className="text-[16px] font-[400]"
              icon={
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
                  className="inline-block"
                >
                  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                  <path d="M11 13l9 -9"></path>
                  <path d="M15 4h5v5"></path>
                </svg>
              }
              iconPosition="right"
            >
              Buy Now
            </Button>
          </Link>
        </div>

        {/* Sağ görsel + Play butonu (tasarımdaki kart görünümü) */}
        <div className="relative">
          <div className="relative w-full sm:h-[467px] h-[220px] overflow-hidden ring-1 ring-black/5 bg-gray-100 translate-y-[-205px]">
            {/* Next/Image'i fill ile kullan: */}
            <Image
              src="/images/product-lines/SDS-AIM.jpg"
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
              className="absolute left-[130px] p-8 cursor-pointer bottom-0 backdrop-blur-[25px] bg-white/50 text-primary-600  px-5 py-4 flex items-center gap-3 transition"
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
                <span className="block font-semibold">SDS AIM</span>
                <span className="block text-sm opacity-70">demonstration</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <VideoModal
        open={open}
        onClose={closeModal}
        youtubeId="zGwMANi9ny0" // YouTube video ID'ni buraya koy
      />
    </section>
  );
}
