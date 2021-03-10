import styled from 'styled-components';
import { COLORS } from 'constants/COLORS';

export const SliderWrapper = styled.div`
  color: ${COLORS.codGray};
  padding: 80px 24px 124px;
  position: relative;
  text-align: center;
`;

export const Slide = styled.div``;

export const SlideImage = styled.div`
  object-fit: cover;
  width: 100%auto;
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

export const SlideText = styled.div`
  margin-top: 30px;
`;

export const SlideHeading = styled.span`
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

export const SlideDescription = styled.p`
    font-size: 15px;
    letter-spacing: -0.19px;
    line-height: 25px;
    margin: 16px 0 32px;
`
