"use client";
import { useState } from "react";
import Image from "next/image";
import { getGalleryUrl } from "@/lib/utils";
import GalleryLightbox from "./gallery-lightbox";

export default function Gallery({ gallery }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!gallery || gallery.length === 0) return null;

  const total = gallery.length;

  const openAt = (i) => setActiveIndex(i);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + total) % total));
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % total));

  return (
    <section className="gallery-section py-5" id="portfolio">
      <div className="container py-4">
        <p className="section-heading">Showcase</p>
        <h2 className="section-title">Portfolio</h2>
        <hr className="section-divider" />

        <div className="gallery-container mt-4">
          {gallery.map((item, index) => (
            <button
              key={index}
              type="button"
              className="gallery-item"
              onClick={() => openAt(index)}
              aria-label={`Open image ${index + 1}`}
            >
              <Image
                src={getGalleryUrl(item.filename)}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                className="gallery-image"
                priority={index < 3}
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <GalleryLightbox
        gallery={gallery}
        activeIndex={activeIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
        onSelect={setActiveIndex}
      />
    </section>
  );
}
