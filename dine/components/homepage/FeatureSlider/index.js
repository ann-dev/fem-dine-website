import Link from 'next/link';

import { Button } from 'components/common/Button';
import { Heading } from 'components/common/Heading';
import { Container } from 'components/common/Container';

import {
  SliderWrapper,
  Slide,
  SlideImage,
  SlideControls,
  ControlItem,
  SlideText,
  SlideDescription
} from './styles';

const FeatureSlider = () => (
  <SliderWrapper>
    <Container>
      <Slide>
        <SlideImage>
          <img src="./images/homepage/family-gathering-mobile.jpg" />
        </SlideImage>
        <SlideControls>
          <ControlItem>Family Gathering</ControlItem>
          <ControlItem>Special Events</ControlItem>
          <ControlItem>Social Events</ControlItem>
        </SlideControls>
        <SlideText>
          <Heading>Family Gathering</Heading>
          <SlideDescription>
            We love catering for entire families. So please bring everyone along
            for a special meal with your loved ones. We’ll provide a memorable
            experience for all.
          </SlideDescription>
        </SlideText>
      </Slide>

      <Link href="/booking">
        <Button>Book a table</Button>
      </Link>
    </Container>
  </SliderWrapper>
);

export default FeatureSlider;
