import styled from 'styled-components';
import { COLORS } from 'constants/COLORS';

export const Button = styled.button`
  background-color: ${COLORS.codGray};
  border: 2px solid ${COLORS.codGray};
  color: white;
  font-family: Spartan, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0 auto;
  padding: 24px 0 22px;
  text-transform: uppercase;
  width: 245px;
  &:hover {
    background-color: transparent;
    color: ${COLORS.codGray};
    cursor: pointer;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border: 1px solid white;
  &:hover {
    background-color: white;
    color: ${COLORS.codGray};
  }
`;
