import styled from 'styled-components';

import { COLORS } from 'constants/COLORS';

export const Select = styled.div`
  border-bottom: 1px solid black;
  height: 46px;
  padding-bottom: 16px;
  padding-left: 18px;
`;

export const SelectWrapper = styled.div`
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  outline: none;
  position: relative;
`;

export const SelectTrigger = styled.div`
  padding-top: 5px;
  &::after {
    content: url(/icons/icon-arrow.svg);
    height: 8px;
    left: 45px;
    position: absolute;
    width: 16px;
  }
`;

export const OptionsWrapper = styled.div`
  background: white;
  box-shadow: 0 15px 20px 0 rgba(56, 66, 85, 24.62%);
  display: flex;
  flex-direction: column;
  height: 103px;
  justify-content: space-between;
  left: -18px;
  padding: 16px;
  position: absolute;
  right: 0;
  top: 52px;
`;

export const OptionsItem = styled.div`
  display: block;
  padding-left: 18px;
  position: relative;
  &:hover {
    color: ${COLORS.beaver};
  }
  &::after {
    content: url(/icons/icon-check.svg);
    height: 8px;
    left: 0;
    position: absolute;
    visibility: ${(props) => (props.selected ? 'visible' : 'hidden')};
    width: 16px;
  }
`;
