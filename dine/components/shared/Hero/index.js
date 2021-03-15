import Link from 'next/link';

import { HeroContainer } from 'components/common/Container';
import DineLogo from 'components/common/DineLogo';
import Article from 'components/common/Article';
import { GhostButton } from 'components/common/Button';
import { HeroWrapper } from './styles';

// TODO: remove this component alltogether
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
      <Article hero title={heading} paragraph={leading} />
      <Link href="/booking">
        <GhostButton>{buttonText}</GhostButton>
      </Link>
    </HeroContainer>
  </HeroWrapper>
);

export default Hero;
