import Image from 'next/image';

export default function Hero({ profile, gallery }) {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url('${gallery.length>0 ? 'https://www.profilesuite.com/uploads/gallery/'+gallery[0].filename : 'https://www.profilesuite.com/uploads/profile/'+profile?.profile_image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container container-padding">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-md-7">
            <h1 className="display-2 mb-4">{profile.name}</h1>
            <p className="lead">
              {profile.slogan}
            </p>
            <div className='h-links'>
            <a href="#portfolio" className="text-white fs-5 mx-2">Portfolio</a>
            <a href="#about" className="text-white fs-5 mx-2">About</a>
            </div>
          </div>
          <div className="col-md-5">
            <Image
              src={`https://www.profilesuite.com/uploads/profile/${profile?.profile_image}`}
              alt={profile.name}
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
