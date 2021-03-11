import styled from 'styled-components';

export const Container = styled.div`
  max-width: 327px;
  margin: 0 auto;
  text-align: center;
`;

export const HeroContainer = styled(Container)`
  padding: ${(props) => (props.bookingHero ? '56px 0 228px' : '232px 0 152px')};
`;
