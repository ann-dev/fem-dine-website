import Head from 'next/head';
import Link from 'next/link';

import { GhostButton } from 'components/common/Button';
import Cta from 'components/homepage/Cta';
import FeatureSlider from 'components/homepage/FeatureSlider';
import MenuHighlights from 'components/homepage/MenuHighlights';

const Home = () => (
  <div>
    <Head>
      <title>Home | Frontend Mentor | Dine Website</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    <main>
      <header
        style={{
          backgroundColor: 'black',
          color: 'white',
          backgroundImage: "url('./images/homepage/hero-bg-mobile.jpg')",
          backgroundRepeat: 'no-repeat',
          paddingBottom: '50px',
          paddingTop: '200px'
        }}
      >
        <Link href="/">
          <img src="./logo.svg" alt="dine logo" />
        </Link>
        <h1>Exquisite dining since 1989</h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings.
          <br /> Eat the freshest produce from the comfort of our farmhouse.
        </p>
        <Link href="/booking">
          <GhostButton>Book a table</GhostButton>
        </Link>
      </header>

      <div>
        <img
          src="./images/homepage/enjoyable-place-mobile.jpg"
          alt="rural village landscape"
        />
        <h3>Enjoyable place for all the family</h3>
        <p>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </div>

      <div>
        <img src="./images/homepage/locally-sourced-mobile.jpg" />
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
