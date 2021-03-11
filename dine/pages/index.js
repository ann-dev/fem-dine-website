import Head from 'next/head';

import Hero from 'components/shared/Hero';
import MenuHighlights from 'components/homepage/MenuHighlights';
import FeatureSlider from 'components/homepage/FeatureSlider';
import Cta from 'components/homepage/Cta';

const Home = () => (
  <div>
    <Head>
      <title>Home | Frontend Mentor | Dine Website</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    <main>
      <Hero
        imagePath="/images/homepage/hero-bg-mobile.jpg"
        heading="Exquisite dining since 1989"
        leading="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
        buttonText="Book a table"
      />

      <div>
        <img
          src="/images/homepage/enjoyable-place-mobile.jpg"
          alt="rural village landscape"
        />
        <h3>Enjoyable place for all the family</h3>
        <p>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>

      <div>
        <img src="/images/homepage/locally-sourced-mobile.jpg" />
        <h3>The most locally sourced food</h3>
        <p>
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </div>

      <MenuHighlights />
      <FeatureSlider />
      <Cta />
    </main>
  </div>
);

export default Home;
