import styled from 'styled-components';
import { COLORS } from 'constants/COLORS';

export const HighlightsWrapper = styled.div`
  background-color: ${COLORS.codGray};
  color: white;
  padding: 72px 0 50px;
  text-align: center;
`;

export const SectionDivider = styled.img`
  width: 71px;
`;

export const ItemDivider = styled.div`
  background-color: #979797;
  height: 1px;
  margin: 25px 0;
  opacity: 30%;
  width: 100%;
`;

export const HighlightsDescription = styled.p`
  font-size: 15px;
  letter-spacing: -0.19px;
  line-height: 25px;
  margin-bottom: 64px;
`;
