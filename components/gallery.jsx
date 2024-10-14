import Image from 'next/image';

export default function Gallery({ domain }) {
  const imageUrls = [
    "https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg",
    "https://images.pexels.com/photos/3558072/pexels-photo-3558072.jpeg",
    "https://images.pexels.com/photos/538694/pexels-photo-538694.jpeg"
  ];

  return (
    <section className="py-5 text-white" id="portfolio">
      <div className="container container-padding">
        <h2>Portfolio</h2>
        <div className="gallery-container">
          {imageUrls.map((url, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={url}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="gallery-image"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
