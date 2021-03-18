import Head from 'next/head';

import BookingHero from 'components/booking/BookingHero';
import BookingForm from 'components/booking/BookingForm';

const Booking = () => (
  <div>
    <Head>
      <title>Booking | Frontend Mentor | Dine Website</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    <BookingHero />
    <BookingForm />
  </div>
);

export default Booking;
