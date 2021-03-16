import { Container } from 'components/common/Container';
import Article from 'components/common/Article';

import {
  FeaturedWrapper,
  LeftPatternBg,
  RightPatternBg,
  FeaturedItem,
  FeaturedImageWrapper,
  FeaturedTextWrapper,
  ImageAnchor,
  PatternAnchor,
  PatternWrapper,
} from './styles';

const FeaturedSection = () => (
  <FeaturedWrapper>
    <LeftPatternBg
      src="/images/patterns/pattern-curve-top-right.svg"
      alt=""
      role="presentation"
    />
    <PatternAnchor>
      <RightPatternBg
        src="/images/patterns/pattern-curve-top-left.svg"
        alt=""
        role="presentation"
      />
    </PatternAnchor>
    <Container>
      <FeaturedItem>
        <ImageAnchor>
          <FeaturedImageWrapper absolute>
            <img
              src="/images/homepage/enjoyable-place-mobile.jpg"
              alt="rural village landscape"
            />
          </FeaturedImageWrapper>
        </ImageAnchor>
        <FeaturedTextWrapper>
          <Article
            divider
            title="Enjoyable place for all the family"
            paragraph="Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal."
          />
        </FeaturedTextWrapper>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedImageWrapper>
          <img
            src="/images/homepage/locally-sourced-mobile.jpg"
            alt=""
            role="presentation"
          />
        </FeaturedImageWrapper>
          <PatternWrapper
            src="/images/patterns/pattern-lines.svg"
            alt=""
            role="presentation"
          />
        <FeaturedTextWrapper>
          <Article
            divider
            title="The most locally sourced food"
            paragraph=" All our ingredients come directly from our farm or local fishery. So
        you can be sure that you’re eating the freshest, most sustainable
        food."
          />
        </FeaturedTextWrapper>
      </FeaturedItem>
    </Container>
  </FeaturedWrapper>
);

export default FeaturedSection;
