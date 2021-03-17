import Head from 'next/head';

// import Hero from 'components/shared/Hero';
import BookingForm from 'components/booking/BookingForm';

const Booking = () => (
  <div>
    <Head>
      <title>Booking | Frontend Mentor | Dine Website</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>

    {/* <Hero
      fullImage
      bookingHero
      imagePath="/images/booking/hero-bg-mobile.jpg"
      heading="Reservations"
      leading=" We can’t wait to host you. If you have any special requirements please
      feel free to call on the phone number below. We’ll be happy to
      accommodate you."
      buttonText="Reserve place"
    /> */}
    <BookingForm />
  </div>
);

export default Booking;
