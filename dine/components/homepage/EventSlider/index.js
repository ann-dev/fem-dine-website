import Link from 'next/link';

import Article from 'components/common/Article';
import { Button } from 'components/common/Button';
import { Container } from 'components/common/Container';
import ResponsivePicture from 'components/common/ResponsivePicture';

import {
  SliderWrapper,
  BgLeftPattern,
  Slider,
  SliderPattern,
  SlideImage,
  SlideImageBlur,
  SlideTextWrapper,
  SlideControls,
  ControlItem
} from './styles';

const FeatureSlider = () => (
  <SliderWrapper>
    <BgLeftPattern
      src="/images/patterns/pattern-curve-top-right.svg"
      alt=""
      role="presentation"
    />
    <Container>
      <Slider>
        <SliderPattern
          src="/images/patterns/pattern-lines.svg"
          alt=""
          role="presentation"
        />
        <SlideImage>
          <ResponsivePicture
            path="images/homepage/family-gathering"
            alt=""
            tablet
          />
        </SlideImage>
        <SlideImageBlur />
        <SlideControls>
          <ControlItem>Family Gathering</ControlItem>
          <ControlItem>Special Events</ControlItem>
          <ControlItem>Social Events</ControlItem>
        </SlideControls>
        <SlideTextWrapper>
          <Article
            title="Family Gathering"
            paragraph="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
          />
        </SlideTextWrapper>
      </Slider>

      <Link href="/booking">
        <Button>Book a table</Button>
      </Link>
    </Container>
  </SliderWrapper>
);

export default FeatureSlider;
