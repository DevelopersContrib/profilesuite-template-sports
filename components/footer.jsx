import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({ domain, social }) {
  return (
    <footer className="footer-section">
      <div className="container py-5">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="text-center text-md-start mb-3 mb-md-0">
            <div className="footer-brand">
              {domain}
              <span style={{ color: "var(--accent-primary)" }}>.</span>
            </div>
            <p className="footer-text">Athlete Profile</p>
          </div>

          <div className="d-flex align-items-center">
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            )}
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()}{" "}
            <span className="accent">{domain}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
