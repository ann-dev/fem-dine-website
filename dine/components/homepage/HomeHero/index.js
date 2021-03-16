import Link from 'next/link';

import { HeroContainer } from 'components/common/Container';
import { GhostButton } from 'components/common/Button';
import DineLogo from 'components/common/DineLogo';
import ResponsivePicture from 'components/common/ResponsivePicture';
import Article from 'components/common/Article';

import { HomeHeroWrapper, HomeTextWrapper, HomeBgImage, HomeContentWrapper } from './styles';

const HomeHero = () => (
  <HomeHeroWrapper>
    <HeroContainer style={{ position: 'relative' }}>
      <HomeBgImage>
        <ResponsivePicture path="images/homepage/hero-bg" alt="" />
      </HomeBgImage>
      <HomeContentWrapper>
        <DineLogo />
        <HomeTextWrapper>
          <Article
            hero
            title="Exquisite dining since 1989"
            paragraph="Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse."
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
