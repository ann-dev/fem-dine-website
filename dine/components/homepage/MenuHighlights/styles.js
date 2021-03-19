import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';
import { DEVICES } from 'constants/DEVICES';
import Container from 'components/common/Container';

export const HighlightsWrapper = styled.div`
  background-color: ${COLORS.codGray};
  color: white;
  padding: 72px 0 50px;
  @media ${DEVICES.tablet} {
    padding: 96px 0;
  }
  @media ${DEVICES.laptopL} {
    padding: 200px 0 120px;
  }
`;

export const HighlightsContainer = styled(Container)`
  @media ${DEVICES.laptopL} {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }
`

export const ArticleWrapper = styled.div`
  margin: 0 auto;
  max-width: 445px;
  @media ${DEVICES.laptopL} {
    margin-left: 0;
  }
`;

export const MenuItemsWrapper = styled.div`
  padding: 32px 0 10px;
  @media ${DEVICES.tablet} {
    margin: 0 auto;
    max-width: 573px;
  }
  @media ${DEVICES.laptopL} {
    margin-right: 0;
    padding-right: 0;
  }
`;

export const ItemDivider = styled.div`
  background-color: #979797;
  height: 1px;
  margin: 25px 0;
  opacity: 30%;
  width: 100%;
`;
