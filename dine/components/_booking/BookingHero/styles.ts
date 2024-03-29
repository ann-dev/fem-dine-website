import styled from 'styled-components';
import { COLORS } from '../../../constants/COLORS';
import { DEVICES } from '../../../constants/DEVICES';
import Container from '../../common/Container';

export const BookingHeroWrapper = styled.div`
  background-color: ${COLORS.codGray};
  color: white;
  overflow: hidden;
  position: relative;
`;

export const BookingBgImage = styled.div`
  object-fit: cover;
  img {
    left: 0;
    position: absolute;
    top: 0;
    z-index: 0;
    @media ${DEVICES.tablet} {
      left: -10%;
      width: 120%;
    }
    @media ${DEVICES.tablet} {
      left: 0;
    }
  }
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
