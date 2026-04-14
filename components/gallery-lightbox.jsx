"use client";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { getGalleryUrl } from "@/lib/utils";

export default function GalleryLightbox({
  gallery,
  activeIndex,
  onClose,
  onPrev,
  onNext,
  onSelect,
}) {
  const isOpen = activeIndex !== null && activeIndex >= 0;

  const handleKey = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [isOpen, onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, handleKey]);

  if (!isOpen) return null;

  const total = gallery.length;
  const current = gallery[activeIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="tw-fixed tw-inset-0 tw-z-[9999] tw-flex tw-items-center tw-justify-center tw-bg-black/95 tw-backdrop-blur-md tw-animate-in tw-fade-in"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-flex tw-items-center tw-justify-between tw-px-4 sm:tw-px-6 tw-py-4 tw-z-10 tw-bg-gradient-to-b tw-from-black/80 tw-to-transparent">
        <div className="tw-flex tw-items-center tw-gap-3">
          <span className="tw-inline-flex tw-items-center tw-gap-2 tw-px-3 tw-py-1.5 tw-rounded-full tw-bg-[#c5f82a]/10 tw-border tw-border-[#c5f82a]/25 tw-text-[#c5f82a] tw-text-[10px] sm:tw-text-[11px] tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-font-mono">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="tw-text-gray-500">/</span>
            {String(total).padStart(2, "0")}
          </span>
          <span className="tw-hidden sm:tw-inline tw-text-xs tw-text-gray-400 tw-font-mono tw-uppercase tw-tracking-[0.18em]">
            Portfolio
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close viewer"
          className="tw-inline-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 sm:tw-w-11 sm:tw-h-11 tw-rounded-full tw-border tw-border-white/15 tw-bg-white/[0.04] tw-text-white tw-transition-all tw-duration-300 hover:tw-bg-[#c5f82a] hover:tw-text-[#0a0a0a] hover:tw-border-[#c5f82a] hover:tw-rotate-90"
        >
          <X size={18} />
        </button>
      </div>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="tw-absolute tw-left-3 sm:tw-left-6 tw-top-1/2 -tw-translate-y-1/2 tw-z-10 tw-inline-flex tw-items-center tw-justify-center tw-w-11 tw-h-11 sm:tw-w-12 sm:tw-h-12 tw-rounded-full tw-border tw-border-white/15 tw-bg-white/[0.04] tw-text-white tw-transition-all tw-duration-300 hover:tw-bg-[#c5f82a] hover:tw-text-[#0a0a0a] hover:tw-border-[#c5f82a] hover:-tw-translate-x-0.5"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="tw-absolute tw-right-3 sm:tw-right-6 tw-top-1/2 -tw-translate-y-1/2 tw-z-10 tw-inline-flex tw-items-center tw-justify-center tw-w-11 tw-h-11 sm:tw-w-12 sm:tw-h-12 tw-rounded-full tw-border tw-border-white/15 tw-bg-white/[0.04] tw-text-white tw-transition-all tw-duration-300 hover:tw-bg-[#c5f82a] hover:tw-text-[#0a0a0a] hover:tw-border-[#c5f82a] hover:tw-translate-x-0.5"
      >
        <ChevronRight size={22} />
      </button>

      {/* Main image */}
      <div
        className="tw-relative tw-w-[92vw] tw-h-[70vh] sm:tw-w-[85vw] sm:tw-h-[78vh] tw-max-w-6xl tw-flex tw-items-center tw-justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={current?.filename || activeIndex}
          src={getGalleryUrl(current?.filename)}
          alt={`Gallery Image ${activeIndex + 1}`}
          fill
          sizes="90vw"
          className="tw-object-contain"
          priority
        />
      </div>

      {/* Thumbnail strip */}
      <div
        className="tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-px-4 sm:tw-px-6 tw-pb-4 sm:tw-pb-5 tw-pt-6 tw-bg-gradient-to-t tw-from-black/80 tw-to-transparent tw-z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tw-flex tw-gap-2 tw-overflow-x-auto tw-scroll-smooth tw-justify-start sm:tw-justify-center tw-pb-1">
          {gallery.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect?.(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`tw-relative tw-shrink-0 tw-w-16 tw-h-12 sm:tw-w-20 sm:tw-h-14 tw-rounded-md tw-overflow-hidden tw-border tw-transition-all tw-duration-300 ${
                i === activeIndex
                  ? "tw-border-[#c5f82a] tw-opacity-100 tw-scale-105"
                  : "tw-border-white/10 tw-opacity-50 hover:tw-opacity-90"
              }`}
            >
              <Image
                src={getGalleryUrl(item.filename)}
                alt=""
                fill
                sizes="80px"
                className="tw-object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
