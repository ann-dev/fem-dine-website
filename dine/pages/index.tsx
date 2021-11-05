import Head from 'next/head';
import HomeHero from '../components/_homepage/HomeHero';
import FeaturedSection from '../components/_homepage/FeaturedSection';
import MenuHighlights from '../components/_homepage/MenuHighlights';
import FeatureSlider from '../components/_homepage/EventSlider';
import Cta from '../components/_homepage/Cta';

const Home = () => (
  <div>
    <Head>
      <title>Home | Frontend Mentor | Dine Website</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
    <HomeHero />
    <FeaturedSection />
    <MenuHighlights />
    <FeatureSlider />
    <Cta />
  </div>
);

export default Home;
