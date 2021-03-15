import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';

export const HighlightsWrapper = styled.div`
  background-color: ${COLORS.codGray};
  color: white;
  padding: 72px 0 50px;
  @media ${DEVICES.tablet} {
    padding: 96px 0;
  }
`;

export const MenuItemsWrapper = styled.div`
  padding: 32px 0 10px;
  @media ${DEVICES.tablet} {
    margin: 0 auto;
    max-width: 573px;
  }
`;

export const ArticleWrapper = styled.div`
  margin: 0 auto;
  max-width: 445px;
`;

export const ItemDivider = styled.div`
  background-color: #979797;
  height: 1px;
  margin: 25px 0;
  opacity: 30%;
  width: 100%;
`;
