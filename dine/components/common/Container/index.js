import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

const Container = styled.div`
  margin: 0 auto;
  max-width: 327px;
  text-align: center;
  @media ${DEVICES.tablet} {
    max-width: 689px;
  }
  @media ${DEVICES.laptopL} {
    max-width: 1110px;
  }
`;

export default Container;
