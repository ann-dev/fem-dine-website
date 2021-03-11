import Head from 'next/head';

import Hero from 'components/shared/Hero';
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

    <Hero
      imagePath="/images/homepage/hero-bg-mobile.jpg"
      heading="Exquisite dining since 1989"
      leading="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
      buttonText="Book a table"
    />
    <FeaturedSection />
    <MenuHighlights />
    <FeatureSlider />
    <Cta />
  </div>
);

export default Home;
