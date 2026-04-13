"use client";
import { History, Trophy, Medal, Star } from "lucide-react";

const CAREER = [
  {
    team: "Ateneo Lady Eagles",
    position: "Outside Hitter",
    year: "2021–2024",
    icon: Trophy,
  },
  {
    team: "Philippine Youth National Team",
    position: "Team Captain",
    year: "2022–2023",
    icon: Medal,
  },
  {
    team: "Shakey's V-League All-Stars",
    position: "Outside Hitter",
    year: "2023",
    icon: Star,
  },
];

export default function CareerTimeline() {
  return (
    <section className="section-surface py-5" id="career">
      <div className="container py-4">
        <p className="section-heading">
          <History
            size={14}
            className="tw-inline-block tw-mr-1 tw-align-middle"
          />
          Journey
        </p>
        <h2 className="section-title">Career Timeline</h2>
        <hr className="section-divider" />

        <div className="tw-relative tw-mt-10">
          {/* Vertical spine - runs through the dots */}
          <div
            className="tw-absolute tw-top-0 tw-bottom-0 tw-w-0.5 tw-bg-gradient-to-b tw-from-[#c5f82a]/0 tw-via-[#c5f82a]/40 tw-to-[#c5f82a]/0"
            style={{ left: "19px" }}
            aria-hidden="true"
          />

          <div className="tw-space-y-5 sm:tw-space-y-6">
            {CAREER.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className="tw-group tw-relative tw-flex tw-items-stretch tw-gap-4 sm:tw-gap-5"
                >
                  {/* Node */}
                  <div className="tw-relative tw-shrink-0 tw-w-10 tw-flex tw-justify-center tw-pt-5">
                    <div className="tw-relative tw-w-4 tw-h-4 tw-flex tw-items-center tw-justify-center">
                      {/* Outer ping ring */}
                      <div className="tw-absolute tw-inset-0 tw-rounded-full tw-bg-[#c5f82a]/40 tw-animate-ping" />
                      {/* Solid dot */}
                      <div className="tw-relative tw-w-4 tw-h-4 tw-rounded-full tw-bg-[#0a0a0a] tw-ring-2 tw-ring-[#c5f82a] tw-flex tw-items-center tw-justify-center tw-transition-all tw-duration-300 group-hover:tw-scale-110">
                        <div className="tw-w-1.5 tw-h-1.5 tw-rounded-full tw-bg-[#c5f82a]" />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="tw-relative tw-flex-1 tw-min-w-0 tw-rounded-xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-4 sm:tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-[#c5f82a]/30 hover:tw-bg-white/[0.06] hover:-tw-translate-y-0.5">
                    {/* Accent line */}
                    <div className="tw-absolute tw-left-0 tw-top-4 tw-bottom-4 tw-w-0.5 tw-rounded-full tw-bg-gradient-to-b tw-from-[#c5f82a]/0 tw-via-[#c5f82a]/40 tw-to-[#c5f82a]/0 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500" />

                    <div className="tw-flex tw-items-start tw-gap-3 sm:tw-gap-4">
                      <div className="tw-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 sm:tw-w-11 sm:tw-h-11 tw-rounded-lg tw-bg-[#c5f82a]/10 tw-text-[#c5f82a] tw-transition-all tw-duration-300 group-hover:tw-bg-[#c5f82a]/20">
                        <Icon size={18} />
                      </div>

                      <div className="tw-flex-1 tw-min-w-0">
                        <div className="tw-flex tw-items-start tw-justify-between tw-gap-2 tw-flex-col sm:tw-flex-row sm:tw-items-center">
                          <h3 className="tw-text-sm sm:tw-text-base tw-font-bold tw-text-white tw-m-0 tw-leading-snug">
                            {item.team}
                          </h3>
                          <span className="tw-shrink-0 tw-text-[10px] sm:tw-text-[11px] tw-font-bold tw-uppercase tw-tracking-[0.15em] tw-text-[#c5f82a] tw-font-mono tw-px-2 tw-py-0.5 tw-rounded-full tw-bg-[#c5f82a]/10 tw-border tw-border-[#c5f82a]/20">
                            {item.year}
                          </span>
                        </div>

                        <p className="tw-text-xs tw-text-gray-400 tw-mt-1.5 tw-mb-0 tw-uppercase tw-tracking-wider">
                          {item.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
