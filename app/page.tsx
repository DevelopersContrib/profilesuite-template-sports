import Hero from "../components/hero";
import Gallery from "../components/gallery";
import Biography from "../components/biography";
import Footer from "../components/footer";
import {  getDomain, getProfile, updateProfile } from "../lib/data";

export default async function Home() {
  const updated = await updateProfile();
  const c = await getProfile();
  const domain = getDomain();
  const profile = c.data.profile;
  const education = c.data.education;
  const experience = c.data.experience;
  const skills = c.data.skills;
  const gallery = c.data.gallery;
  const links = c.data.links;
  const social = c.data.socials;

  return (
    <>
       <Hero profile={profile} gallery={gallery} />
      <Gallery gallery={gallery} />
      <Biography profile={profile} social={social} links={links} />
      <Footer domain={domain} social={social} />
    </>
  );
}
