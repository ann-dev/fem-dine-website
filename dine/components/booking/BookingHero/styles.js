import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';
import Container from 'components/common/Container';

export const BookingHeroWrapper = styled.div`
  background-color: ${COLORS.codGray};
  color: white;
  height: 600px;
  overflow: hidden;
  position: relative;
  width: 100vw;
`;

export const BookingBgImage = styled.div`
  height: auto;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

export const BookingHeroContainer = styled(Container)`
  padding: 56px 0 228px;
  position: relative;
  @media ${DEVICES.tablet} {
    padding: 56px 0 270px;
    text-align: left;
    button {
      display: none;
    }
  }
  @media ${DEVICES.laptopL} {
    padding: 65px 0 84px;
  }
`;

export const BookingContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const BookingTextWrapper = styled.div`
  margin: 0 auto;
  @media ${DEVICES.tablet} {
    margin-top: 64px;
    max-width: 575px;
    text-align: center;
  }
  @media ${DEVICES.laptopL} {
    text-align: left;
    margin: 0;
  }
`;
