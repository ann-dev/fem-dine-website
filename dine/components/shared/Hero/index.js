import Link from 'next/link';

import { HeroWrapper, HeroParagraph } from './styles';

import { HeroContainer } from 'components/common/Container';
import DineLogo from 'components/common/DineLogo';
import { HeroHeading } from 'components/common/Heading';
import { GhostButton } from 'components/common/Button';

const Hero = ({
  heading,
  fullImage,
  imagePath,
  leading,
  bookingHero,
  buttonText
}) => (
  <HeroWrapper
    fullImage={fullImage}
    style={{ backgroundImage: `url(${imagePath})` }}
  >
    <HeroContainer bookingHero={bookingHero}>
      <DineLogo />
      <HeroHeading>{heading}</HeroHeading>
      <HeroParagraph>{leading}</HeroParagraph>
      <Link href="/booking">
        <GhostButton>{buttonText}</GhostButton>
      </Link>
    </HeroContainer>
  </HeroWrapper>
);

export default Hero;
