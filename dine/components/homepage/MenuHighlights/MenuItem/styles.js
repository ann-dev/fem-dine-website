import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';

export const ItemWrapper = styled.div`
  position: relative;
  @media ${DEVICES.tablet} {
    display: flex;
    text-align: left;
  }
`;

export const ItemImage = styled.div`
  margin: 0 auto;
  @media ${DEVICES.tablet} {
    margin-right: 62px;
  }
  img {
    width: 327px;
    @media ${DEVICES.tablet} {
      height: 96px;
      width: 128px;
    }
  }
`;

export const ImageDecorator = styled.div`
  background-color: ${COLORS.beaver};
  display: none;
  height: 1px;
  left: 128px;
  position: absolute;
  top: 18px;
  width: 32px;
  @media ${DEVICES.tablet} {
    display: block;
  }
`;

export const ItemTextWrapper = styled.div`
  @media ${DEVICES.tablet} {
  }
`;

export const ItemDescription = styled.p`
  font-size: 15px;
  line-height: 28px;
  margin: 0 auto;
  max-width: 90%;
  @media ${DEVICES.tablet} {
    margin: 0;
  }
  @media ${DEVICES.laptopL} {
    max-width: 100%;
  }
`;
