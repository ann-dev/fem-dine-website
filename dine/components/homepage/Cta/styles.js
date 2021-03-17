import styled from 'styled-components';

import { DEVICES } from 'constants/DEVICES';
import { Container } from 'components/common/Container';

export const CtaWrapper = styled.div`
  color: white;
  overflow: hidden;
  padding: 80px 0;
  position: relative;
  width: 100%;
  @media ${DEVICES.tablet} {
    padding: 64px 0;
  }
`;

export const BgImageWrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
`;

export const CtaContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;
