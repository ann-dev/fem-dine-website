import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

export const FeaturedWrapper = styled.div`
  padding: 0 0 48px;
  position: relative;
  @media ${DEVICES.tablet} {
    padding-bottom: 88px;
  }
`;

export const ImageAnchor = styled.div`
  height: 370px;
  margin: 0 auto;
  position: relative;
  width: 327px;
  @media ${DEVICES.tablet} {
    height: 320px;
    width: 573px;
  }
`;

export const LeftPatternBg = styled.img`
  display: none;
  position: absolute;
  right: calc(100vw / 2 + 5px);
  top: 105px;
  @media ${DEVICES.tablet} {
    display: block;
  }
`;

export const PatternAnchor = styled.div`
  bottom: 0;
  display: none;
  left: calc(100vw / 2);
  overflow: hidden;
  position: absolute;
  width: 50vw;
  @media ${DEVICES.tablet} {
    display: block;
  }
`;

export const RightPatternBg = styled.img`
  height: 325px;
`;

export const FeaturedItem = styled.div`
  position: relative;
`;

export const FeaturedImageWrapper = styled.div`
  height: 400px;
  left: 0;
  margin: 0 auto 42px;
  object-fit: cover;
  overflow: hidden;
  position: ${(props) => (props.absolute ? 'absolute' : 'static')};
  top: -70px;
  width: 327px;
  img {
    height: 100%;
  }
  @media ${DEVICES.tablet} {
    height: 360px;
    margin-top: ${(props) => (props.absolute ? 0 : '120px')};
    top: -90px;
    width: 573px;
  }
`;

export const PatternWrapper = styled.img`
  display: none;
  position: absolute;
  right: 0;
  top: 228px;
  @media ${DEVICES.tablet} {
    display: block;
  }
`;

export const FeaturedTextWrapper = styled.div`
  margin: 0 auto;
  @media ${DEVICES.tablet} {
    max-width: 457px;
  }
`;
