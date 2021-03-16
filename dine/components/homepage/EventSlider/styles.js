import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';

export const SliderWrapper = styled.div`
  color: ${COLORS.codGray};
  padding: 80px 0 124px;
  @media ${DEVICES.tablet} {
    padding: 120px 0 124px;
  }
`;

export const Slider = styled.div``;

export const SlideImage = styled.div`
  margin: 0 auto;
  object-fit: cover;
  overflow: hidden;
  width: 327px;
  @media ${DEVICES.tablet} {
    height: 360px;
    width: 573px;
  }
  img {
    width: 100%;
  }
`;

export const SlideControls = styled.ul`
  list-style: none;
  margin-top: 48px;
  padding: 0;
`;

export const ControlItem = styled.li`
  color: ${COLORS.shuttleGray};
  display: block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
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
