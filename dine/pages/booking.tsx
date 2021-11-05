import Head from 'next/head';
import BookingHero from '../components/_booking/BookingHero';
import BookingForm from '../components/_booking/BookingForm';

const Booking = () => {
  return (
    <div>
      <Head>
        <title>Booking | Frontend Mentor | Dine Website</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <BookingHero />
      <BookingForm />
    </div>
  );
};

export default Booking;
