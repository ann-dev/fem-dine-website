import Link from 'next/link';

import { HeroContainer } from 'components/common/Container';
import DineLogo from 'components/common/DineLogo';
import Article from 'components/common/Article';
import { GhostButton } from 'components/common/Button';
import {
  HomeHeroWrapper,
  HomeBgImage,
  HomeTextWrapper,
  HomeContentWrapper
} from './styles';

const HomeHero = () => (
  <HomeHeroWrapper>
    <HeroContainer style={{ position: 'relative' }}>
      <HomeBgImage
        src="/images/homepage/hero-bg-mobile.jpg"
        alt=""
        role="presentation"
      />
      <HomeContentWrapper>
        <DineLogo />
        <HomeTextWrapper>
          <Article
            hero
            title="Exquisite dining since 1989"
            paragraph="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
          />
        </HomeTextWrapper>

        <Link href="/booking">
          <GhostButton>Book a table</GhostButton>
        </Link>
      </HomeContentWrapper>
    </HeroContainer>
  </HomeHeroWrapper>
);

export default HomeHero;
