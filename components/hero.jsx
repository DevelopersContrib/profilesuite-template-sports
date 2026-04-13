"use client";
import { Clock, Ruler, Weight } from "lucide-react";
import ImageSlider from "./slider/ImageSlider";
import { getGalleryUrl, getProfileUrl } from "@/lib/utils";

const SPORT = "Basketball";
const POSITION = "Forward";
const HEIGHT = "6'2\"";
const WEIGHT = "185 lbs";
const AGE = 21;

export default function Hero({ profile, gallery }) {
  const bgImage =
    gallery.length > 0
      ? getGalleryUrl(gallery[0].filename)
      : getProfileUrl(profile?.profile_image);

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-accent-line" />
      <div className="hero-bg-overlay" />

      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
            <div className="hero-tags-row">
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                Athlete Profile
              </div>
              <div className="hero-tag hero-tag-sport">
                <span className="hero-tag-dot hero-tag-dot-sport" />
                {SPORT}
              </div>
              <div className="hero-tag hero-tag-position">
                <span className="hero-tag-dot hero-tag-dot-position" />
                {POSITION}
              </div>
            </div>

            <h1 className="hero-name">
              {profile.name?.split(" ").map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="accent-underline">
                    {word}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                ),
              )}
            </h1>

            <p className="hero-slogan">{profile.slogan}</p>

            <div className="tw-inline-flex tw-items-center tw-gap-6 tw-mt-4 tw-mb-8">
              {[
                {
                  label: "Height",
                  value: HEIGHT,
                  icon: <Ruler size={14} />,
                },
                {
                  label: "Weight",
                  value: WEIGHT,
                  icon: <Weight size={14} />,
                },
                {
                  label: "Age",
                  value: `${AGE} yrs`,
                  icon: <Clock size={14} />,
                },
              ].map((stat, idx, arr) => (
                <div
                  key={stat.label}
                  className="tw-flex tw-items-center tw-gap-6"
                >
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <span className="tw-text-[#c5f82a]">{stat.icon}</span>
                    <span className="tw-text-[10px] tw-uppercase tw-tracking-[0.15em] tw-text-gray-500 tw-font-medium">
                      {stat.label}
                    </span>
                    <span className="tw-text-sm tw-font-bold tw-text-white">
                      {stat.value}
                    </span>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="tw-w-px tw-h-4 tw-bg-white/15" />
                  )}
                </div>
              ))}
            </div>

            <div className="hero-cta-group">
              <a href="#portfolio" className="btn-sport">
                View Portfolio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#about" className="btn-sport-outline">
                About Me
              </a>
            </div>

            {(profile.location || profile.hometown || profile.affiliations) && (
              <div className="hero-stats-bar">
                {profile.location && (
                  <div className="hero-stat">
                    <div className="hero-stat-value">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="hero-stat-label">{profile.location}</div>
                  </div>
                )}
                {profile.affiliations && (
                  <div className="hero-stat">
                    <div className="hero-stat-value">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div className="hero-stat-label">
                      {profile.affiliations}
                    </div>
                  </div>
                )}
                {profile.hometown && (
                  <div className="hero-stat">
                    <div className="hero-stat-value">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div className="hero-stat-label">{profile.hometown}</div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="col-lg-5">
            <ImageSlider profile={profile} gallery={gallery} />
          </div>
        </div>
      </div>
    </section>
  );
}
