import ImageSlider from "./slider/ImageSlider";

export default function Hero({ profile, gallery }) {
  const bgImage =
    gallery.length > 0
      ? `https://profilesuite-assets.s3.us-west-2.amazonaws.com/uploads/gallery/${gallery[0].filename}`
      : `https://profilesuite-assets.s3.us-west-2.amazonaws.com/uploads/profile/${profile?.profile_image}`;

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
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Athlete Profile
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
