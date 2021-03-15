import { Container } from 'components/common/Container';
import Article from 'components/common/Article';
import {
  FeaturedWrapper,
  FeaturedImageWrapper,
  FeaturedTextWrapper,
  ImageAnchor
} from './styles';

const FeaturedSection = () => (
  <FeaturedWrapper>
    <Container>
      <div>
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
      </div>
      <div>
        <FeaturedImageWrapper>
          <img src="/images/homepage/locally-sourced-mobile.jpg" />
        </FeaturedImageWrapper>
        <FeaturedTextWrapper>
          <Article
            divider
            title="The most locally sourced food"
            paragraph=" All our ingredients come directly from our farm or local fishery. So
        you can be sure that you’re eating the freshest, most sustainable
        food."
          />
        </FeaturedTextWrapper>
      </div>
    </Container>
  </FeaturedWrapper>
);

export default FeaturedSection;
