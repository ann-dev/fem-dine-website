import styled from 'styled-components';
import { DEVICES } from '../../../../constants/DEVICES';

export const Counter = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
  margin-bottom: 32px;
  margin-top: 16px;
  padding-bottom: 18px;
  @media ${DEVICES.tablet} {
    justify-content: space-between;
    margin-top: -15px;
    padding: 25px 20px;
  }
`;

export const CounterButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 10px !important;
`;
