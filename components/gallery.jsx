import Image from "next/image";

export default function Gallery({ gallery }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="gallery-section py-5" id="portfolio">
      <div className="container py-4">
        <p className="section-heading">Showcase</p>
        <h2 className="section-title">Portfolio</h2>
        <hr className="section-divider" />

        <div className="gallery-container mt-4">
          {gallery.map((item, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={`https://profilesuite-assets.s3.us-west-2.amazonaws.com/${item.filename}`}
                alt={`Gallery Image ${index + 1}`}
                width={400}
                height={300}
                className="gallery-image"
                priority={index < 3}
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
