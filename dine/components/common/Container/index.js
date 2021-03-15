import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

export const Container = styled.div`
  max-width: 327px;
  margin: 0 auto;
  text-align: center;
  @media ${DEVICES.tablet} {
    max-width: 689px;
  }
`;

export const HeroContainer = styled(Container)`
  padding: ${(props) => (props.bookingHero ? '56px 0 228px' : '232px 0 152px')};
  @media ${DEVICES.tablet} {
    padding: ${(props) =>
      props.bookingHero ? '56px 0 270px' : '374px 0 216px'};
  }
`;
