import styled from 'styled-components';
import { COLORS } from 'constants/COLORS';

export const HeroWrapper = styled.div`
  background-color: ${COLORS.codGray};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: ${props => props.fullImage ? 'cover' : ''};
  color: white;
`;

export const HeroParagraph = styled.p`
  font-size: 15px;
  letter-spacing: -0.19px;
  line-height: 25px;
  margin-bottom: 36px;
`;
