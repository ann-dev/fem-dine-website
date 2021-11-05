import Link from 'next/link';
import { GhostButton } from '../../common/Button';
import DineLogo from '../../common/DineLogo';
import ResponsivePicture from '../../common/ResponsivePicture';
import Article from '../../common/Article';

import {
  BookingHeroWrapper,
  BookingHeroContainer,
  BookingTextWrapper,
  BookingBgImage,
  BookingContentWrapper
} from './styles';

const BookingHero = () => (
  <BookingHeroWrapper>
    <BookingBgImage>
      <ResponsivePicture path="/images/booking/hero-bg" alt="" tablet desktop />
    </BookingBgImage>
    <BookingHeroContainer style={{ position: 'relative' }}>
      <BookingContentWrapper>
        <DineLogo />
        <BookingTextWrapper>
          <Article
            hero
            title="Reservations"
            paragraph="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."
          />
        </BookingTextWrapper>
        <Link href="/booking">
          <GhostButton>Reserve place</GhostButton>
        </Link>
      </BookingContentWrapper>
    </BookingHeroContainer>
  </BookingHeroWrapper>
);

export default BookingHero;
