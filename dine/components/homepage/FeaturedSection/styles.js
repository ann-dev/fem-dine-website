import styled from 'styled-components';

export const FeaturedWrapper = styled.div`
  padding: 376px 0 48px;
  position: relative;
`;

export const FeaturedImageWrapper = styled.div`
  height: 400px;
  margin-bottom: 42px;
  object-fit: cover;
  position: ${(props) => (props.absolute ? 'absolute' : 'static')};
  top: -60px;
  width: 327px;
`;
