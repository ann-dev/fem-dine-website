import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

export const Heading = styled.span`
  color: inherit;
  display: block;
  font-size: 32px;
  font-weight: ${(props) => (props.light ? 300 : 700)};
  letter-spacing: -0.4px;
  line-height: 40px;
  margin: 32px auto 24px;
  @media ${DEVICES.tablet} {
    font-size: 40px;
    line-height: 56px;
    max-width: 400px;
  }
`;

export const SmallHeading = styled(Heading)`
  font-size: 18px;
  margin: 20px 0 0;
  @media ${DEVICES.tablet} {
    line-height: 28px;
    margin: 0 0 8px;
  }
`;

export const HeroHeading = styled(Heading)`
  font-weight: 300;
  @media ${DEVICES.tablet} {
    font-size: 48px;
    letter-spacing: -0.6px;
    line-height: 64px;
    max-width: 385px;
  }
  @media ${DEVICES.laptopL} {
    font-size: 64px;
    letter-spacing: -0.8px;
    line-height: 72px;
    margin: 153px 0 28px;
    max-width: 525px;
  }
`;
