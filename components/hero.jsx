import Image from 'next/image';

export default function Hero({ domain }) {
  return (
    <section className="hero-section">
      <div className="container container-padding">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-md-7">
            <h1 className="display-2 mb-4">Jack Taylor</h1>
            <p className="lead">
              Hi, I help businesses grow their online presence and market better for their business. I am an entrepreneur who loves to learn and try new ventures. Always open to connecting!
            </p>
            <div className='h-links'>
            <a href="#portfolio" className="text-white fs-5 mx-2">Portfolio</a>
            <a href="#about" className="text-white fs-5 mx-2">About</a>
            </div>
          </div>
          <div className="col-md-5">
            <Image
              src="https://images.pexels.com/photos/220383/pexels-photo-220383.jpeg"
              alt="Profile of Bryan Rammel"
              width={500}
              height={500}
              className="img-fluid rounded-circle"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
