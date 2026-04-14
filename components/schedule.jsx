"use client";
import { Calendar, MapPin } from "lucide-react";

const DEFAULT_COLORS = {
  bg: "tw-bg-emerald-500/15",
  text: "tw-text-emerald-400",
  dot: "tw-bg-emerald-400",
  border: "tw-border-emerald-500/20",
};

const TYPE_COLORS = {
  Training: {
    bg: "tw-bg-amber-500/15",
    text: "tw-text-amber-400",
    dot: "tw-bg-amber-400",
    border: "tw-border-amber-500/20",
  },
  Tryout: {
    bg: "tw-bg-cyan-500/15",
    text: "tw-text-cyan-400",
    dot: "tw-bg-cyan-400",
    border: "tw-border-cyan-500/20",
  },
  Match: {
    bg: "tw-bg-emerald-500/15",
    text: "tw-text-emerald-400",
    dot: "tw-bg-emerald-400",
    border: "tw-border-emerald-500/20",
  },
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const day = d.getDate();
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const full = d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return { day, month, full };
}

export default function Schedule({ events = [] }) {
  return (
    <section className="section-surface py-5" id="schedule">
      <div className="container py-4">
        <p className="section-heading">
          <Calendar
            size={14}
            className="tw-inline-block tw-mr-1 tw-align-middle"
          />
          Schedule
        </p>
        <h2 className="section-title">Events</h2>
        <hr className="section-divider" />

        <div className="row g-3 tw-mt-8">
          {events.map((event, idx) => {
              const { day, month, full } = formatDate(event.date);
              const colors = TYPE_COLORS[event.type] || DEFAULT_COLORS;

              return (
                <div key={idx} className="col-lg-4 col-md-6">
                  <div className="tw-flex tw-items-start tw-gap-4 tw-rounded-xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-4 tw-h-full tw-transition-all tw-duration-300 hover:tw-border-[#c5f82a]/25 hover:tw-bg-white/[0.06] tw-group tw-cursor-default">
                    {/* Date block */}
                    <div
                      className={`tw-flex tw-flex-col tw-items-center tw-justify-center tw-min-w-[56px] tw-h-[56px] tw-rounded-xl tw-border ${colors.border} ${colors.bg} tw-transition-all tw-duration-300`}
                    >
                      <span
                        className={`tw-text-xl tw-font-extrabold tw-leading-none ${colors.text}`}
                      >
                        {day}
                      </span>
                      <span className="tw-text-[9px] tw-font-bold tw-uppercase tw-tracking-widest tw-text-gray-400 tw-mt-0.5">
                        {month}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="tw-flex-1 tw-min-w-0">
                      <div className="tw-flex tw-items-center tw-justify-between tw-gap-2 tw-mb-2">
                        <h3 className="tw-text-[13px] tw-font-bold tw-text-white tw-m-0 tw-leading-snug">
                          {event.title}
                        </h3>
                        <span
                          className={`tw-shrink-0 tw-inline-flex tw-items-center tw-gap-1 tw-px-2 tw-py-0.5 tw-rounded-full tw-text-[9px] tw-font-bold tw-uppercase tw-tracking-wider ${colors.bg} ${colors.text}`}
                        >
                          <span
                            className={`tw-w-1.5 tw-h-1.5 tw-rounded-full ${colors.dot}`}
                          />
                          {event.type}
                        </span>
                      </div>

                      {event.location && (
                        <div className="tw-flex tw-items-center tw-gap-1.5 tw-mb-1">
                          <MapPin
                            size={11}
                            className="tw-text-gray-500 tw-shrink-0"
                          />
                          <span className="tw-text-xs tw-text-gray-400">
                            {event.location}
                          </span>
                        </div>
                      )}

                      <span className="tw-text-[11px] tw-text-gray-600">
                        {full}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
