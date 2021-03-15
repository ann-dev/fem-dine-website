import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

export const ArticleParagraph = styled.p`
  font-size: 15px;
  letter-spacing: -0.19px;
  line-height: 25px;
  margin-bottom: 32px;
  @media ${DEVICES.tablet} {
    font-size: 18px;
    letter-spacing: -0.22px;
    line-height: 30px;
    margin: 0 auto 32px;
  }
`;
