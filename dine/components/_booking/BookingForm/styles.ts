import styled from 'styled-components';
import { COLORS } from '../../../constants/COLORS';
import { DEVICES } from '../../../constants/DEVICES';

export const FormContainer = styled.div`
  height: 534px;
  position: relative;
  margin: 0 auto;
  width: 327px;
  @media ${DEVICES.tablet} {
    height: 435px;
    width: 540px;
  }
  @media ${DEVICES.laptopL} {
    height: 320px;
  }
`;

export const FormPattern = styled.img`
  display: none;
  left: 220px;
  position: absolute;
  top: 185px;
  @media ${DEVICES.laptopL} {
    display: block;
  }
`;

export const FormBgPattern = styled.img`
  display: none;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), transparent);
  position: absolute;
  right: -20px;
  width: 993px;
  z-index: -1;
  @media ${DEVICES.laptopL} {
    display: block;
  }
`;

export const Form = styled.form`
  background-color: white;
  box-shadow: 0 75px 100px -50px rgba(56, 66, 85, 50.32%);
  font-size: 18px;
  height: auto;
  left: 0;
  padding: 32px;
  position: absolute;
  text-align: center;
  top: -130px;
  width: 327px;
  z-index: 2;
  @media ${DEVICES.tablet} {
    left: 0;
    padding: 48px;
    top: -250px;
    width: 540px;
    button {
      width: 100%;
    }
    @media ${DEVICES.laptopL} {
      left: 300px;
      top: -345px;
    }
  }
`;

export const FormRowWrapper = styled.div`
  text-align: left;
  @media ${DEVICES.tablet} {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const InputLabel = styled.span`
  color: inherit;
  display: block;
  margin-bottom: 12px;
  @media ${DEVICES.tablet} {
    margin-top: -20px;
  }
`;

export const FormInputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 73px) 88px;
  grid-column-gap: 14px;
  position: relative;
  @media ${DEVICES.tablet} {
    grid-template-columns: repeat(2, 80px) 97px;
  }
`;

export const InputWrapper = styled.div`
  border-bottom: 1px solid black;
  height: auto;
  margin-bottom: 32px;
  position: relative;
  @media ${DEVICES.tablet} {
    margin-bottom: 36px;
  }
`;

export const FormInput = styled.input`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  -moz-appearance: textfield;
  border: none;
  border-radius: 0;
  caret-color: ${COLORS.beaver};
  color: inherit;
  font-family: inherit;
  font-size: 18px;
  height: 45px;
  letter-spacing: -0.22px;
  outline: none;
  padding-bottom: 16px;
  padding-left: 16px;
  width: 100%;
  &::placeholder {
    color: rgba(17, 17, 17, 0.5);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputError = styled.span`
  color: ${COLORS.error};
  font-size: 10px;
  left: 16px;
  position: absolute;
  top: 54px;
`;

export const InputRowError = styled(InputError)`
  left: -159px;
  position: absolute;
  top: 38px;
  visibility: hidden;
  @media ${DEVICES.tablet} {
    visibility: visible;
  }
`;
