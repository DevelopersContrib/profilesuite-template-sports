"use client";
import {
  Sparkles,
  Crown,
  Medal,
  Trophy,
  Star,
  Gem,
  Rocket,
} from "lucide-react";

const ACHIEVEMENTS = [
  {
    date: "2025-03-15",
    title: "League MVP — 2024-25 Season",
    desc: "Named Most Valuable Player after leading the team in points, assists, and win share.",
    icon: Crown,
  },
  {
    date: "2025-02-02",
    title: "All-Star Game Starter",
    desc: "Voted as a starting guard by fans and coaches for the national All-Star Weekend.",
    icon: Star,
  },
  {
    date: "2024-11-20",
    title: "Scoring Title — Conference Leader",
    desc: "Finished the regular conference with a league-leading 26.4 points per game.",
    icon: Trophy,
  },
  {
    date: "2024-07-08",
    title: "Gold Medal — SEA Games",
    desc: "Helped secure the gold medal for the national team in the basketball finals.",
    icon: Medal,
  },
  {
    date: "2024-04-10",
    title: "Rookie of the Year",
    desc: "Recognized as the top first-year performer with record-breaking debut stats.",
    icon: Rocket,
  },
  {
    date: "2023-12-01",
    title: "Hall of Fame Nomination",
    desc: "Nominated to the collegiate Hall of Fame for a decorated university career.",
    icon: Gem,
  },
];

function formatAchievementDate(dateStr) {
  const d = new Date(dateStr);
  const year = d.getFullYear();
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const day = String(d.getDate()).padStart(2, "0");
  return { year, month, day };
}

export default function Achievements() {
  return (
    <section className="section-surface py-5" id="achievements">
      <div className="container py-4">
        <p className="section-heading">
          <Sparkles
            size={14}
            className="tw-inline-block tw-mr-1 tw-align-middle"
          />
          Honors
        </p>
        <h2 className="section-title">Achievements</h2>
        <hr className="section-divider" />

        <div className="tw-mt-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 sm:tw-gap-5">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = item.icon;
            const { year, month, day } = formatAchievementDate(item.date);
            const isFeatured = idx === 0;

            return (
              <article
                key={idx}
                className={`tw-group tw-relative tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-5 sm:tw-p-6 tw-transition-all tw-duration-500 hover:tw-border-[#c5f82a]/35 hover:tw-bg-white/[0.06] hover:-tw-translate-y-1 ${
                  isFeatured ? "md:tw-col-span-2" : ""
                }`}
              >
                {/* Corner glow */}
                <div
                  className="tw-absolute -tw-top-16 -tw-right-16 tw-w-48 tw-h-48 tw-rounded-full tw-bg-[#c5f82a]/10 tw-blur-3xl tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-700"
                  aria-hidden="true"
                />

                {/* Diagonal ribbon for featured */}
                {isFeatured && (
                  <div
                    className="tw-absolute tw-top-4 tw-right-4 tw-inline-flex tw-items-center tw-gap-1.5 tw-px-2.5 tw-py-1 tw-rounded-full tw-bg-[#c5f82a] tw-text-[#0a0a0a] tw-text-[9px] tw-font-extrabold tw-uppercase tw-tracking-[0.2em] tw-shadow-lg tw-shadow-[#c5f82a]/20"
                    aria-label="Featured achievement"
                  >
                    <Sparkles size={10} />
                    Featured
                  </div>
                )}

                <div
                  className={`tw-relative tw-flex tw-gap-4 sm:tw-gap-5 ${
                    isFeatured
                      ? "tw-flex-col sm:tw-flex-row sm:tw-items-center"
                      : "tw-flex-row tw-items-start"
                  }`}
                >
                  {/* Date block — stacked like a "stamp" */}
                  <div
                    className={`tw-shrink-0 tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tw-rounded-xl tw-border tw-border-[#c5f82a]/25 tw-bg-[#c5f82a]/[0.06] tw-transition-all tw-duration-500 group-hover:tw-border-[#c5f82a]/50 group-hover:tw-bg-[#c5f82a]/[0.12] ${
                      isFeatured
                        ? "tw-w-[88px] tw-h-[88px] sm:tw-w-[104px] sm:tw-h-[104px]"
                        : "tw-w-[68px] tw-h-[68px]"
                    }`}
                  >
                    <span
                      className={`tw-font-extrabold tw-text-[#c5f82a] tw-leading-none tw-font-mono ${
                        isFeatured ? "tw-text-3xl sm:tw-text-4xl" : "tw-text-xl"
                      }`}
                    >
                      {day}
                    </span>
                    <span
                      className={`tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-[#c5f82a]/80 tw-mt-1 ${
                        isFeatured ? "tw-text-[10px]" : "tw-text-[8px]"
                      }`}
                    >
                      {month}
                    </span>
                    <span
                      className={`tw-font-mono tw-text-gray-500 tw-mt-0.5 ${
                        isFeatured ? "tw-text-[10px]" : "tw-text-[9px]"
                      }`}
                    >
                      {year}
                    </span>

                    {/* Notch */}
                    <span
                      className="tw-absolute -tw-bottom-1 tw-left-1/2 -tw-translate-x-1/2 tw-w-6 tw-h-1 tw-rounded-full tw-bg-[#c5f82a]/40"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="tw-flex-1 tw-min-w-0">
                    <div className="tw-flex tw-items-center tw-gap-2 tw-mb-2">
                      <div className="tw-inline-flex tw-items-center tw-justify-center tw-w-7 tw-h-7 tw-rounded-md tw-bg-[#c5f82a]/10 tw-text-[#c5f82a] tw-transition-all tw-duration-300 group-hover:tw-rotate-6 group-hover:tw-bg-[#c5f82a]/20">
                        <Icon size={14} />
                      </div>
                      <span className="tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-text-gray-500 tw-font-mono">
                        #{String(idx + 1).padStart(2, "0")} · Award
                      </span>
                    </div>

                    <h3
                      className={`tw-font-bold tw-text-white tw-m-0 tw-leading-snug tw-transition-colors tw-duration-300 group-hover:tw-text-[#c5f82a] ${
                        isFeatured
                          ? "tw-text-lg sm:tw-text-xl"
                          : "tw-text-sm sm:tw-text-base"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`tw-text-gray-400 tw-leading-relaxed tw-mb-0 tw-mt-2 ${
                        isFeatured
                          ? "tw-text-sm sm:tw-text-[15px]"
                          : "tw-text-xs sm:tw-text-[13px]"
                      }`}
                    >
                      {item.desc}
                    </p>

                    {/* Bottom marker */}
                    <div className="tw-mt-3 tw-flex tw-items-center tw-gap-2">
                      <span
                        className="tw-w-8 tw-h-px tw-bg-gradient-to-r tw-from-[#c5f82a] tw-to-transparent tw-transition-all tw-duration-500 group-hover:tw-w-14"
                        aria-hidden="true"
                      />
                      <span className="tw-text-[9px] tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-text-gray-600 tw-font-mono">
                        Unlocked
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
