import Link from 'next/link';

import { GhostButton } from 'components/common/Button';
import DineLogo from 'components/common/DineLogo';
import ResponsivePicture from 'components/common/ResponsivePicture';
import Article from 'components/common/Article';

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
      <ResponsivePicture path="images/booking/hero-bg" alt="" tablet />
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
