import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

export const FeaturedWrapper = styled.div`
  padding: 0 0 48px;
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
    width: 100%;
  }
  @media ${DEVICES.tablet} {
    height: 360px;
    margin-top: ${(props) => (props.absolute ? 0 : '120px')};
    top: -90px;
    width: 573px;
  }
`;

export const FeaturedTextWrapper = styled.div`
  margin: 0 auto;
  @media ${DEVICES.tablet} {
    max-width: 457px;
  }
`;
