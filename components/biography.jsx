import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Biography({ profile, social, links}) {
  const experiences = [
    { label: "Slogan", description: profile.slogan },
    { label: "Affiliations", description: profile.affiliations},
    { label: "Achievements", description: profile.achievements},
    { label: "Languages", description: profile.languages }
  ];

  const location = [
    { label: "Current Location", value: profile.location},
    { label: "Hometown", value: profile.hometown}
  ];

  const socials = [
    { socialName: "Twitter", url: social.twitter },
    { socialName: "Facebook", url: social.facebook },
    { socialName: "Instagram", url: social.instagram }
  ];

  

  return (
    <section className="aboutme-bg py-5" id="about">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="section-title mb-4">{profile.name}</h2>
            <p>
            {profile.introduction}
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
                social.url  && (
              <div key={index} className="social-item">
                <h5>
                 <a href={social.url} target="_blank" rel="noopener noreferrer">{social.url}</a>
                </h5>
              </div>
                )
            ))}
          </div>
          
          <div className="col-md-4 mb-4">
            <h2 className="section-title mb-4">Links</h2>
            {links.map((link, index) => (
               link.title  && (
              <div key={index} className="link-item">
                <h5>
                 <a href={link.link} target="_blank" rel="noopener noreferrer">{link.link}</a>
                </h5>
              </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
