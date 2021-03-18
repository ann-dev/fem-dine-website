import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

const Container = styled.div`
  max-width: 327px;
  margin: 0 auto;
  text-align: center;
  @media ${DEVICES.tablet} {
    max-width: 689px;
  }
  @media ${DEVICES.laptopL} {
    max-width: 1110px;
  }
  @media ${DEVICES.desktopL} {
    max-width: 1400px;
  }
`;

export default Container;
