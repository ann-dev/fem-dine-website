import Head from 'next/head';

import HomeHero from 'components/homepage/HomeHero';
import FeaturedSection from 'components/homepage/FeaturedSection';
import MenuHighlights from 'components/homepage/MenuHighlights';
import FeatureSlider from 'components/homepage/EventSlider';
import Cta from 'components/homepage/Cta';

const Home = () => (
  <div>
    <Head>
      <title>Home | Frontend Mentor | Dine Website</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    <HomeHero
      imagePath="/images/homepage/hero-bg-mobile.jpg"
      buttonText="Book a table"
    />
    <FeaturedSection />
    <MenuHighlights />
    <FeatureSlider />
    <Cta />
  </div>
);

export default Home;
