import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';
import Container from 'components/common/Container';

export const HomeHeroWrapper = styled.div`
  background-color: ${COLORS.codGray};
  color: white;
  overflow: hidden;
`;

export const HomeHeroContainer = styled(Container)`
  padding: 232px 0 152px;
  position: relative;
  @media ${DEVICES.tablet} {
    padding: 374px 0 216px;
  }
`;

export const HomeContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const HomeBgImage = styled.div`
  img {
    height: auto;
    left: -15%;
    position: absolute;
    top: -10px;
    width: 130%;
    z-index: 0;
    @media ${DEVICES.tablet} {
      left: -10%;
      width: 120%;
      top: -5px;
    }
  }
`;

export const HomeTextWrapper = styled.div`
  margin: 0 auto;
  @media ${DEVICES.tablet} {
    max-width: 575px;
  }
`;
