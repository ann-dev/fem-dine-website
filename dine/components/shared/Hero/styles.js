import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';

export const HeroWrapper = styled.div`
  background-color: ${COLORS.codGray};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.fullImage ? 'cover' : '')};
  color: white;
`;
