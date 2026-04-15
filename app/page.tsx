import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Gallery from "../components/gallery";
import Biography from "../components/biography";
import Schedule from "../components/schedule";
import Sponsors from "../components/sponsors";
import CareerTimeline from "../components/career-timeline";
import StatsPerformance from "../components/stats-performance";
import Achievements from "../components/achievements";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { getDomain, getProfile, updateProfile } from "../lib/data";

export default async function Home() {
  const updated = await updateProfile();
  const c = await getProfile();
  const domain = getDomain();
  const profile = c.data.profile;
  const gallery = c.data.gallery;
  const links = c.data.links;
  const social = c.data.socials;
  const timeline = c.data.timeline;
  const events = c.data.events;
  const stats = c.data.stats;
  const achievements = c.data.achievements;
  const sponsors = c.data.sponsors;

  return (
    <>
      <Navigation profile={profile} />
      <Hero profile={profile} gallery={gallery} />
      <Gallery gallery={gallery} />
      <Biography profile={profile} social={social} links={links} />
      <CareerTimeline timeline={timeline} />
      <StatsPerformance profile={profile} stats={stats} />
      <Achievements achievements={achievements} />
      <Schedule events={events} />
      <Sponsors sponsors={sponsors} />
      <Contact profile={profile} />
      <Footer domain={domain} social={social} />
    </>
  );
}
