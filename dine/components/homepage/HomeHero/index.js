import Link from 'next/link';

import { GhostButton } from 'components/common/Button';
import DineLogo from 'components/common/DineLogo';
import ResponsivePicture from 'components/common/ResponsivePicture';
import Article from 'components/common/Article';

import {
  HomeHeroWrapper,
  HomeHeroContainer,
  HomeTextWrapper,
  HomeBgImage,
  HomeContentWrapper,
  DesktopFullBg
} from './styles';

const HomeHero = () => (
  <HomeHeroWrapper>
    <DesktopFullBg>
      <source
        srcSet="images/homepage/hero-bg-desktop@2x.jpg 2560w"
        media="(min-width: 2560px)"
      />
      <img
        src="images/homepage/hero-bg-desktop.jpg"
        alt=""
        role="presentation"
      />
    </DesktopFullBg>
    <HomeHeroContainer>
      <HomeBgImage>
        <ResponsivePicture path="images/homepage/hero-bg" alt="" tablet />
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
    </HomeHeroContainer>
  </HomeHeroWrapper>
);

export default HomeHero;
