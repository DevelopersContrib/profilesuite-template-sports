"use client";
import {
  Activity,
  Volleyball,
  Target,
  Ruler,
  Weight,
  Award,
  Zap,
} from "lucide-react";

const SEASON_STATS = [
  {
    label: "Points Per Game",
    short: "PPG",
    value: 18,
    max: 30,
    icon: Target,
  },
  {
    label: "Assists Per Game",
    short: "APG",
    value: 7,
    max: 15,
    icon: Zap,
  },
  {
    label: "Rebounds Per Game",
    short: "RPG",
    value: 4,
    max: 15,
    icon: Volleyball,
  },
];

function formatStatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function StatRing({ value, max }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="tw-relative tw-w-[64px] tw-h-[64px] tw-shrink-0">
      <svg
        viewBox="0 0 64 64"
        className="tw-w-full tw-h-full -tw-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="32"
          cy="32"
          r={radius}
          className="tw-stroke-white/10"
          strokeWidth="5"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          className="tw-stroke-[#c5f82a] tw-transition-all tw-duration-700"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
        <span className="tw-text-lg tw-font-extrabold tw-text-white tw-leading-none">
          {value}
        </span>
      </div>
    </div>
  );
}

export default function StatsPerformance({ profile, stats = [] }) {
  return (
    <section className="section-surface py-5" id="stats">
      <div className="container py-4">
        <p className="section-heading">
          <Activity
            size={14}
            className="tw-inline-block tw-mr-1 tw-align-middle"
          />
          Performance
        </p>
        <h2 className="section-title">Stats &amp; Performance</h2>
        <hr className="section-divider" />

        {(profile.sports_name || profile.sports_position) && (
          <div className="tw-mt-8 tw-flex tw-flex-wrap tw-items-center tw-gap-3">
            {profile.sports_name && (
              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-px-3 tw-py-1.5 tw-rounded-full tw-bg-[#c5f82a]/10 tw-border tw-border-[#c5f82a]/25 tw-text-[#c5f82a] tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.18em]">
                <Volleyball size={13} />
                {profile.sports_name}
              </span>
            )}
            {profile.sports_position && (
              <span className="tw-inline-flex tw-items-center tw-gap-2 tw-px-3 tw-py-1.5 tw-rounded-full tw-bg-white/[0.04] tw-border tw-border-white/10 tw-text-white tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.18em]">
                <Target size={13} className="tw-text-[#c5f82a]" />
                {profile.sports_position}
              </span>
            )}
          </div>
        )}

        {/* Physical attributes - individual list rows */}
        <div className="tw-mt-6 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-3">
          <div className="tw-group tw-relative tw-flex tw-items-center tw-gap-4 tw-rounded-xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-4 tw-transition-all tw-duration-300 hover:tw-border-[#c5f82a]/30 hover:tw-bg-white/[0.06]">
            <div className="tw-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-11 tw-h-11 tw-rounded-lg tw-bg-[#c5f82a]/10 tw-text-[#c5f82a] tw-transition-all tw-duration-300 group-hover:tw-bg-[#c5f82a]/20">
              <Ruler size={18} />
            </div>
            <div className="tw-flex-1 tw-min-w-0">
              <p className="tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-gray-500 tw-m-0">
                Height
              </p>
              <p className="tw-text-xl tw-font-extrabold tw-text-white tw-m-0 tw-leading-tight tw-font-mono">
                {profile.sports_height}
              </p>
            </div>
          </div>

          <div className="tw-group tw-relative tw-flex tw-items-center tw-gap-4 tw-rounded-xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-4 tw-transition-all tw-duration-300 hover:tw-border-[#c5f82a]/30 hover:tw-bg-white/[0.06]">
            <div className="tw-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-11 tw-h-11 tw-rounded-lg tw-bg-[#c5f82a]/10 tw-text-[#c5f82a] tw-transition-all tw-duration-300 group-hover:tw-bg-[#c5f82a]/20">
              <Weight size={18} />
            </div>
            <div className="tw-flex-1 tw-min-w-0">
              <p className="tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-gray-500 tw-m-0">
                Weight
              </p>
              <p className="tw-text-xl tw-font-extrabold tw-text-white tw-m-0 tw-leading-tight tw-font-mono">
                {profile.sports_weight}
              </p>
            </div>
          </div>
        </div>

        {/* Season stats - individual list with progress rings */}
        {/* <div className="tw-mt-6">
          <p className="tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-text-gray-500 tw-mb-3 tw-flex tw-items-center tw-gap-2">
            <span className="tw-w-6 tw-h-px tw-bg-[#c5f82a]/50" />
            Season Averages
          </p>
          <div className="tw-space-y-3">
            {SEASON_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              const pct = Math.min(
                100,
                Math.round((stat.value / stat.max) * 100),
              );
              return (
                <div
                  key={idx}
                  className="tw-group tw-relative tw-flex tw-items-center tw-gap-4 tw-rounded-xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-4 sm:tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-[#c5f82a]/30 hover:tw-bg-white/[0.06] hover:-tw-translate-y-0.5"
                >
                  <StatRing value={stat.value} max={stat.max} />

                  <div className="tw-flex-1 tw-min-w-0">
                    <div className="tw-flex tw-items-center tw-justify-between tw-gap-2 tw-mb-2 tw-flex-wrap">
                      <div className="tw-flex tw-items-center tw-gap-2 tw-min-w-0">
                        <Icon
                          size={14}
                          className="tw-text-[#c5f82a] tw-shrink-0"
                        />
                        <h3 className="tw-text-sm sm:tw-text-base tw-font-bold tw-text-white tw-m-0 tw-leading-snug tw-truncate">
                          {stat.label}
                        </h3>
                      </div>
                      <span className="tw-shrink-0 tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.15em] tw-text-[#c5f82a] tw-font-mono tw-px-2 tw-py-0.5 tw-rounded-full tw-bg-[#c5f82a]/10 tw-border tw-border-[#c5f82a]/20">
                        {stat.short}
                      </span>
                    </div>

                    
                    <div className="tw-relative tw-w-full tw-h-1.5 tw-rounded-full tw-bg-white/[0.06] tw-overflow-hidden">
                      <div
                        className="tw-absolute tw-left-0 tw-top-0 tw-h-full tw-rounded-full tw-bg-gradient-to-r tw-from-[#c5f82a]/60 tw-to-[#c5f82a] tw-transition-all tw-duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {stats.length > 0 && (
          <div className="tw-mt-8">
            <p className="tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.2em] tw-text-gray-500 tw-mb-3 tw-flex tw-items-center tw-gap-2">
              <span className="tw-w-6 tw-h-px tw-bg-[#c5f82a]/50" />
              Personal Bests
            </p>
            <div className="tw-space-y-3">
              {stats.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="tw-group tw-relative tw-flex tw-items-start tw-gap-4 tw-rounded-xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-4 sm:tw-p-5 tw-transition-all tw-duration-300 hover:tw-border-[#c5f82a]/30 hover:tw-bg-white/[0.06] hover:-tw-translate-y-0.5 tw-overflow-hidden"
                >
                  <div className="tw-absolute tw-left-0 tw-top-4 tw-bottom-4 tw-w-0.5 tw-rounded-full tw-bg-gradient-to-b tw-from-[#c5f82a]/0 tw-via-[#c5f82a] tw-to-[#c5f82a]/0 tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-500" />

                  <div className="tw-shrink-0 tw-flex tw-items-center tw-justify-center tw-w-11 tw-h-11 sm:tw-w-12 sm:tw-h-12 tw-rounded-lg tw-bg-[#c5f82a]/10 tw-text-[#c5f82a] tw-transition-all tw-duration-300 group-hover:tw-bg-[#c5f82a]/20 group-hover:tw-scale-105">
                    <Award size={18} />
                  </div>

                  <div className="tw-flex-1 tw-min-w-0">
                    <h3 className="tw-text-sm sm:tw-text-base tw-font-bold tw-text-white tw-m-0 tw-leading-snug">
                      {item.title}
                    </h3>
                    <p className="tw-text-xs tw-text-gray-400 tw-mt-1 tw-mb-0">
                      {item.stats}
                      {item.date && ` · ${formatStatDate(item.date)}`}
                    </p>
                  </div>

                  <span
                    className="tw-hidden sm:tw-inline-flex tw-shrink-0 tw-text-[10px] tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-gray-500 tw-font-mono tw-items-center tw-gap-1.5"
                    aria-hidden="true"
                  >
                    <span className="tw-w-1 tw-h-1 tw-rounded-full tw-bg-[#c5f82a]" />
                    #{String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
