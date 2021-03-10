import styled from 'styled-components';
import { COLORS } from 'constants/COLORS';

export const Button = styled.button`
  background-color: ${COLORS.codGray};
  border: none;
  color: white;
  font-family: Spartan, sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 24px 0 22px;
  text-transform: uppercase;
  width: 245px;
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border: 1px solid white;
`;
