import styled from 'styled-components';

export const Heading = styled.span`
  color: inherit;
  display: block;
  font-size: 32px;
  font-weight: ${(props) => (props.light ? 300 : 700)};
  letter-spacing: -0.4px;
  line-height: 40px;
  margin: 32px 0 24px;
`;

export const SmallHeading = styled(Heading)`
    font-size: 18px;
    margin: 20px 0 0;
`
