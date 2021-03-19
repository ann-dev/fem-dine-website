import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

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
`;

export const InputWrapper = styled.div`
  border-bottom: 1px solid black;
  height: auto;
  margin-bottom: 32px;
  @media ${DEVICES.tablet} {
    margin-bottom: 30px;
  }
`;

export const FormInput = styled.input`
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  -moz-appearance: textfield;
  border: none;
  border-radius: 0;
  font-family: inherit;
  font-size: 18px;
  height: 45px;
  letter-spacing: -0.22px;
  outline: none;
  padding-bottom: 16px;
  padding-left: 18px;
  width: 100%;
`;

export const FormSelect = styled.div`
  border-bottom: 1px solid black;
  height: 46px;
  padding-bottom: 16px;
  padding-left: 18px;
  position: relative;
  &::after {
    content: url(/icons/icon-arrow.svg);
    height: 8px;
    left: 60px;
    position: absolute;
    width: 16px;
  }
  select {
    -webkit-appearance: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    outline: none;
  }
`;

export const GuestCounter = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
  margin-bottom: 32px;
  padding-bottom: 18px;
  @media ${DEVICES.tablet} {
    justify-content: space-between;
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
