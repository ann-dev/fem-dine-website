import styled from 'styled-components';
import { DEVICES } from '../../../constants/DEVICES';
import { Heading } from '../../../components/common/Heading';
import Container from '../../../components/common/Container';

export const CtaWrapper = styled.div`
  color: white;
  overflow: hidden;
  padding: 80px 0;
  position: relative;
  width: 100%;
  @media ${DEVICES.tablet} {
    padding: 64px 0;
  }
  @media ${DEVICES.laptopL} {
    padding: 86px 0;
  }
`;

export const BgImageWrapper = styled.div`
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 1px;
  @media ${DEVICES.laptopL} {
    top: 0;
  }
`;

export const CtaHeading = styled(Heading)`
  margin-top: 0;
  @media ${DEVICES.tablet} {
    max-width: 100%;
  }
  @media ${DEVICES.laptopL} {
    margin: 0;
    margin-top: 5px;
  }
`;

export const CtaContainer = styled(Container)`
  position: relative;
  z-index: 1;
  @media ${DEVICES.laptopL} {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
