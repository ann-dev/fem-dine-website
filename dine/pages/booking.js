import Head from 'next/head';

import Hero from 'components/shared/Hero';

const Booking = () => (
  <div>
    <Head>
      <title>Booking | Frontend Mentor | Dine Website</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    {/* <header
      style={{
        backgroundColor: 'black',
        color: 'white',
        backgroundImage: "url('./images/booking/hero-bg-mobile.jpg')",
        backgroundRepeat: 'no-repeat',
        paddingBottom: '50px',
        paddingTop: '200px'
      }}
    >
      <Link href="/">
        <img src="./logo.svg" alt="dine logo" />
      </Link>
      <h1>Reservations</h1>
      <p>
        We can’t wait to host you. If you have any special requirements please
        feel free to call on the phone number below. We’ll be happy to
        accommodate you.
      </p>
      <a style={{ border: '1px solid white' }}>Reserve a place</a>
    </header> */}

    <Hero
      fullImage
      bookingHero
      imagePath="/images/booking/hero-bg-mobile.jpg"
      heading="Reservations"
      leading=" We can’t wait to host you. If you have any special requirements please
      feel free to call on the phone number below. We’ll be happy to
      accommodate you."
      buttonText="Reserve place"
    />

    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <div>
          <span>Pick a date</span>
          <input type="number" placeholder="MM" />
          <input type="number" placeholder="DD" />
          <input type="number" placeholder="YYYY" />
        </div>
        <div>
          <span>Pick a time</span>
          <input type="number" placeholder="09" />
          <input type="number" placeholder="00" />
          <input type="number" placeholder="YYYY" />
          <select>
            <option value="am">AM</option>
            <option value="pm">PM</option>
          </select>
        </div>
        <div>
          <button>-</button>
          <span>4 people</span>
          <button>+</button>
        </div>
        <button>Make reservation</button>
      </form>
    </div>
  </div>
);

export default Booking;
