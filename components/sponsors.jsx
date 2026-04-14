"use client";
import { useState } from "react";
import { Handshake, ExternalLink, Building } from "lucide-react";

const SPONSORS = [
  {
    title: "Nike Philippines",
    website: "https://www.nike.com/ph",
    logo: "",
  },
  {
    title: "Gatorade Sports Fuel",
    website: "https://www.gatorade.com",
    logo: "",
  },
  {
    title: "Under Armour",
    website: "https://www.underarmour.com",
    logo: "",
  },
  {
    title: "Wilson Sporting Goods",
    website: "https://www.wilson.com",
    logo: "",
  },
  {
    title: "PLDT Home Fibr",
    website: "https://pldthome.com",
    logo: "",
  },
  {
    title: "Philippine Sports Commission",
    website: "https://psc.gov.ph",
    logo: "",
  },
];

function getInitials(title) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function formatHost(url) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function SponsorLogo({ logo, title }) {
  const [failed, setFailed] = useState(false);
  const hasLogo = logo && !failed;

  if (hasLogo) {
    return (
      <img
        src={logo}
        alt={`${title} logo`}
        onError={() => setFailed(true)}
        className="tw-max-w-full tw-max-h-full tw-object-contain tw-transition-all tw-duration-500 group-hover:tw-scale-105"
      />
    );
  }

  return (
    <div
      className="tw-relative tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-rounded-xl tw-overflow-hidden"
      aria-hidden="true"
    >
      <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-br tw-from-[#c5f82a]/15 tw-via-transparent tw-to-white/[0.03]" />
      {/* Grid backdrop */}
      <div
        className="tw-absolute tw-inset-0 tw-opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,248,42,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(197,248,42,0.08) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <span className="tw-relative tw-text-2xl sm:tw-text-3xl tw-font-extrabold tw-text-[#c5f82a] tw-font-mono tw-tracking-tighter">
        {getInitials(title)}
      </span>
    </div>
  );
}

export default function Sponsors() {
  return (
    <section className="section-surface py-5" id="sponsors">
      <div className="container py-4">
        <p className="section-heading">
          <Handshake
            size={14}
            className="tw-inline-block tw-mr-1 tw-align-middle"
          />
          Partnerships
        </p>
        <h2 className="section-title">Sponsors &amp; Affiliations</h2>
        <hr className="section-divider" />

        <div className="tw-mt-10 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 sm:tw-gap-5">
          {SPONSORS.map((sponsor, idx) => (
            <a
              key={idx}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-group tw-relative tw-block tw-no-underline tw-overflow-hidden tw-rounded-2xl tw-border tw-border-white/[0.08] tw-bg-white/[0.03] tw-backdrop-blur-sm tw-p-5 tw-transition-all tw-duration-500 hover:tw-border-[#c5f82a]/35 hover:tw-bg-white/[0.06] hover:-tw-translate-y-1"
            >
              {/* Corner glow */}
              <div
                className="tw-absolute -tw-top-20 -tw-right-20 tw-w-48 tw-h-48 tw-rounded-full tw-bg-[#c5f82a]/10 tw-blur-3xl tw-opacity-0 group-hover:tw-opacity-100 tw-transition-opacity tw-duration-700"
                aria-hidden="true"
              />

              {/* Partner tag */}
              <div className="tw-absolute tw-top-4 tw-right-4 tw-inline-flex tw-items-center tw-gap-1 tw-px-2 tw-py-0.5 tw-rounded-full tw-bg-white/[0.04] tw-border tw-border-white/10 tw-text-[9px] tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-gray-500 tw-transition-all tw-duration-300 group-hover:tw-bg-[#c5f82a]/10 group-hover:tw-border-[#c5f82a]/25 group-hover:tw-text-[#c5f82a]">
                <Building size={9} />
                Partner
              </div>

              {/* Logo frame */}
              <div className="tw-relative tw-mt-6 tw-mb-4 tw-mx-auto tw-w-full tw-max-w-[200px] tw-aspect-[16/9] tw-rounded-xl tw-border tw-border-white/[0.08] tw-bg-[#0a0a0a]/60 tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-p-3 tw-transition-all tw-duration-500 group-hover:tw-border-[#c5f82a]/25">
                <SponsorLogo logo={sponsor.logo} title={sponsor.title} />
              </div>

              {/* Content */}
              <div className="tw-relative tw-text-center">
                <h3 className="tw-text-sm sm:tw-text-base tw-font-bold tw-text-white tw-m-0 tw-leading-snug tw-transition-colors tw-duration-300 group-hover:tw-text-[#c5f82a]">
                  {sponsor.title}
                </h3>

                <div className="tw-mt-2 tw-inline-flex tw-items-center tw-gap-1.5 tw-text-[11px] tw-font-mono tw-text-gray-500 tw-transition-colors tw-duration-300 group-hover:tw-text-[#c5f82a]">
                  <span className="tw-w-4 tw-h-px tw-bg-gradient-to-r tw-from-transparent tw-to-[#c5f82a]/60" />
                  {formatHost(sponsor.website)}
                  <ExternalLink
                    size={10}
                    className="tw-transition-transform tw-duration-300 group-hover:tw-translate-x-0.5 group-hover:-tw-translate-y-0.5"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
