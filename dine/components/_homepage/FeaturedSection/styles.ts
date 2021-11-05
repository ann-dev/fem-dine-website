import styled from 'styled-components';
import { DEVICES } from '../../../constants/DEVICES';

export const FeaturedWrapper = styled.div`
  padding: 0 0 48px;
  position: relative;
  @media ${DEVICES.tablet} {
    padding-bottom: 88px;
  }
  @media ${DEVICES.laptopL} {
    padding-bottom: 0;
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
  @media ${DEVICES.laptopL} {
    height: 177px;
    margin: 0;
    width: 540px;
  }
`;

export const LeftPatternBg = styled.img`
  display: none;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
  position: absolute;
  right: calc(100vw / 2 + 5px);
  top: 105px;
  @media ${DEVICES.tablet} {
    display: block;
  }
  @media ${DEVICES.laptopL} {
    right: 44vw;
    top: 250px;
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
  @media ${DEVICES.laptopL} {
    bottom: 70px;
    left: 44vw;
    width: 56vw;
  }
`;

export const RightPatternBg = styled.img`
  height: 325px;
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1), transparent);
`;

export const FeaturedItem = styled.div`
  position: relative;
  @media ${DEVICES.laptopL} {
    display: ${(props) => (props.flex ? 'flex' : 'block')};
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: ${(props) => (props.flex ? '321px' : 0)};
  }
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
  @media ${DEVICES.tablet} {
    height: 360px;
    margin-top: ${(props) => (props.absolute ? 0 : '120px')};
    top: -90px;
    width: 573px;
  }
  @media ${DEVICES.laptopL} {
    height: 720px;
    margin: 0;
    top: -70px;
    width: 540px;
  }
  img {
    height: 100%;
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
  @media ${DEVICES.laptopL} {
    right: -100px;
    top: 282px;
  }
`;

export const FeaturedTextWrapper = styled.div`
  margin: 0 auto;
  @media ${DEVICES.tablet} {
    max-width: 457px;
  }
  @media ${DEVICES.laptopL} {
    margin: 0;
    margin-left: ${(props) => (props.right ? 'auto' : 0)};
    padding-top: ${(props) => (props.right ? 0 : '200px')};
    text-align: left;
  }
`;
