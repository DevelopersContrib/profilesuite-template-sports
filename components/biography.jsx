import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Biography({ profile, social, links }) {
  const infoItems = [
    { label: "Slogan", value: profile.slogan },
    { label: "Affiliations", value: profile.affiliations },
    { label: "Achievements", value: profile.achievements },
    { label: "Languages", value: profile.languages },
  ].filter((item) => item.value);

  const locations = [
    { label: "Current Location", value: profile.location },
    { label: "Hometown", value: profile.hometown },
  ].filter((item) => item.value);

  const socialItems = [
    { name: "Twitter", url: social.twitter, icon: faTwitter },
    { name: "Facebook", url: social.facebook, icon: faFacebookF },
    { name: "Instagram", url: social.instagram, icon: faInstagram },
  ].filter((item) => item.url);

  return (
    <section className="about-section py-5" id="about">
      <div className="container py-4">
        <p className="section-heading">Get to know</p>
        <h2 className="section-title">{profile.name}</h2>
        <hr className="section-divider" />

        {profile.introduction && (
          <p className="about-intro">{profile.introduction}</p>
        )}

        {infoItems.length > 0 && (
          <div className="row mb-4">
            {infoItems.map((item, index) => (
              <div key={index} className="col-md-6">
                <div className="info-card">
                  <div className="info-card-label">{item.label}</div>
                  <p className="info-card-value">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="row g-4">
          {locations.length > 0 && (
            <div className="col-md-4">
              <div className="detail-block">
                <h3 className="detail-block-title">Location</h3>
                {locations.map((loc, index) => (
                  <div key={index} className="mb-3">
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {loc.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {loc.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {socialItems.length > 0 && (
            <div className="col-md-4">
              <div className="detail-block">
                <h3 className="detail-block-title">Socials</h3>
                <div className="d-flex flex-wrap">
                  {socialItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-badge"
                    >
                      <FontAwesomeIcon icon={item.icon} />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {links.length > 0 && (
            <div className="col-md-4">
              <div className="detail-block">
                <h3 className="detail-block-title">Links</h3>
                {links
                  .filter((l) => l.title)
                  .map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-link"
                    >
                      <span className="detail-link-icon" />
                      {link.title || link.link}
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
