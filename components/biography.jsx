import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Biography({ domain }) {
  const experiences = [
    { label: "Slogan", description: "Say less, Do more" },
    { label: "Affiliations", description: "Member of Team Sports Ministries, FAU Alumni, American Marketing Association Alumni" },
    { label: "Achievements", description: "2x HS State Champion, Won Class Clown in HS, Awarded Board Member at Many Organizations," },
    { label: "Languages", description: "English" }
  ];

  const location = [
    { label: "Current Location", value: "United States" },
    { label: "Hometown", value: "Hialeah" }
  ];

  const socials = [
    { socialName: "Twitter", url: "https://twitter.com/JackTaylor" },
    { socialName: "Facebook", url: "https://facebook.com/JackTaylor" },
    { socialName: "Instagram", url: "https://instagram.com/JackTaylor" }
  ];

  const links = [
    { linkName: "JackTaylor", url: "https://teetribe21.com/" },
    { linkName: "JackTaylor eBay Shop", url: "https://www.ebay.com/str/JackTaylor" }
  ];

  return (
    <section className="aboutme-bg py-5" id="about">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="section-title mb-4">Jack Taylor</h2>
            <p>
            Hi, I help businesses grow their online presence and market better for their business. I am an entrepreneur who loves to learn and try new ventures. Always open to connecting!
            </p>
            {experiences.map((item, index) => (
              <div key={index} className="experience-item">
                <p className="experience-label">
                  <span><FontAwesomeIcon icon={faChevronRight} /></span> {item.label}:
                </p>
                <h5 className="experience-description">{item.description}</h5>
              </div>
            ))}
          </div>
        </div>
        
        <div className="row"> 
          <div className="col-md-4 mb-4">
            <h2 className="section-title mb-4">Location</h2>
            {location.map((loc, index) => (
              <div key={index} className="location-item">
                <p className="location-label"><span><FontAwesomeIcon icon={faChevronRight} /></span> {loc.label}</p>
                <h5 className="location-value">{loc.value}</h5>
              </div>
            ))}
          </div>
          
          <div className="col-md-4 mb-4">
            <h2 className="section-title mb-4">Socials</h2>
            {socials.map((social, index) => (
              <div key={index} className="social-item">
                <h5>
                  {social.socialName}: <a href={social.url} target="_blank" rel="noopener noreferrer">{social.url}</a>
                </h5>
              </div>
            ))}
          </div>
          
          <div className="col-md-4 mb-4">
            <h2 className="section-title mb-4">Links</h2>
            {links.map((link, index) => (
              <div key={index} className="link-item">
                <h5>
                  {link.linkName}: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
