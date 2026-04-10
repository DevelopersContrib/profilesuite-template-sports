"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

const ImageSlider = ({ profile, gallery }) => {
  const hasGallery = gallery && gallery.length > 0;

  if (!hasGallery) {
    return (
      <div className="hero-image-wrapper">
        <div className="hero-image-frame">
          <Image
            src={`https://profilesuite-assets.s3.us-west-2.amazonaws.com/uploads/profile/${profile?.profile_image}`}
            alt={profile?.name || "Profile"}
            width={500}
            height={500}
            className="hero-profile-img"
            priority
          />
        </div>
      </div>
    );
  }

  if (gallery.length === 1) {
    return (
      <div className="slider-wrapper">
        <div className="slider-glow" />
        <div className="cards-single">
          <Image
            src={`https://profilesuite-assets.s3.us-west-2.amazonaws.com/uploads/gallery/${gallery[0].filename}`}
            alt={`${profile?.name || "Gallery"} - Photo`}
            width={400}
            height={500}
            className="cards-slide-img"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="slider-wrapper">
      <div className="slider-glow" />
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="cards-swiper"
        cardsEffect={{
          perSlideOffset: 8,
          perSlideRotate: 2,
          rotate: true,
          slideShadows: false,
        }}
      >
        {gallery.map((item, index) => (
          <SwiperSlide key={index} className="cards-slide">
            <Image
              src={`https://profilesuite-assets.s3.us-west-2.amazonaws.com/uploads/gallery/${item.filename}`}
              alt={`${profile?.name || "Gallery"} - Photo ${index + 1}`}
              width={400}
              height={500}
              className="cards-slide-img"
              priority={index < 2}
            />
            <div className="cards-slide-overlay">
              <span className="cards-slide-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="cards-slide-total">
                / {String(gallery.length).padStart(2, "0")}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="slider-hint">Drag to explore</p>
    </div>
  );
};

export default ImageSlider;
