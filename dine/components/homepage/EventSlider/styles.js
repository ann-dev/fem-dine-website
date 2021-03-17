import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';

export const SliderWrapper = styled.div`
  color: ${COLORS.codGray};
  padding: 80px 0 124px;
  position: relative;
  @media ${DEVICES.tablet} {
    padding: 120px 0 124px;
  }
`;

export const BgLeftPattern = styled.img`
  display: none;
  right: calc(100vw / 2);
  position: absolute;
  top: 0;
  @media ${DEVICES.tablet} {
    display: block;
  }
`;

export const Slider = styled.div`
  position: relative;
`;

export const SliderPattern = styled.img`
  left: 0;
  position: absolute;
  top: -37px;
  z-index: 2;
`;

export const SlideImage = styled.div`
  margin: 0 auto;
  object-fit: cover;
  overflow: hidden;
  width: 327px;
  @media ${DEVICES.tablet} {
    height: 360px;
    position: relative;
    width: 573px;
  }
  img {
    width: 100%;
    @media ${DEVICES.tablet} {
      left: 0;
      position: absolute;
      top: -25px;
    }
  }
`;

export const SlideImageBlur = styled.div`
  background-image: url(images/homepage/family-gathering-tablet.jpg);
  background-position: 0 -25px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 -70px 70px 0px white;
  display: none;
  height: 430px;
  left: 58px;
  position: absolute;
  top: 0px;
  width: 573px;
  z-index: -1;
  @media ${DEVICES.tablet} {
    display: block;
  }
`;

export const SlideControls = styled.ul`
  list-style: none;
  margin-top: 48px;
  padding: 0;
  @media ${DEVICES.tablet} {
    display: flex;
    justify-content: space-around;
    margin: 56px auto 40px;
  }
`;

export const SlideTextWrapper = styled.div`
  margin: 0 auto;
  max-width: 455px;
`;

export const ControlItem = styled.li`
  color: ${COLORS.shuttleGray};
  display: block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 28px;
  opacity: 50%;
  text-transform: uppercase;
  @media ${DEVICES.tablet} {
    display: inline-block;
  }
  &::after {
    background-color: ${COLORS.beaver};
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    margin: 5px auto 15px;
    opacity: 0;
    width: 30px;
  }
  &:hover {
    cursor: pointer;
    opacity: 100%;
  }
  &:hover::after {
    opacity: 100%;
  }
`;

export const SlideDescription = styled.p`
  font-size: 15px;
  letter-spacing: -0.19px;
  line-height: 25px;
  margin: 16px 0 32px;
`;
