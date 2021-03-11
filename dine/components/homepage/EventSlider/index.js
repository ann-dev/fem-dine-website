import Link from 'next/link';

import Article from 'components/common/Article';
import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';

import {
  SliderWrapper,
  Slider,
  SlideImage,
  SlideControls,
  ControlItem,
} from './styles';

const FeatureSlider = () => (
  <SliderWrapper>
    <Container>
      <Slider>
        <SlideImage>
          <img src="./images/homepage/family-gathering-mobile.jpg" />
        </SlideImage>
        <SlideControls>
          <ControlItem>Family Gathering</ControlItem>
          <ControlItem>Special Events</ControlItem>
          <ControlItem>Social Events</ControlItem>
        </SlideControls>
        <Article
          title="Family Gathering"
          paragraph="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
        />
      </Slider>

      <Link href="/booking">
        <Button>Book a table</Button>
      </Link>
    </Container>
  </SliderWrapper>
);

export default FeatureSlider;
