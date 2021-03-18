import styled from 'styled-components';
import { DEVICES } from 'constants/DEVICES';

export const FormContainer = styled.div`
  height: 534px;
  position: relative;
  @media ${DEVICES.tablet} {
    height: 435px;
  }
`;

export const Form = styled.form`
  background-color: white;
  box-shadow: 0 75px 100px -50px rgba(56, 66, 85, 50.32%);
  font-size: 18px;
  height: auto;
  left: calc((100vw - 327px) / 2);
  padding: 32px;
  position: absolute;
  text-align: center;
  top: -130px;
  width: 327px;
  @media ${DEVICES.tablet} {
    left: calc((100vw - 540px) / 2);
    padding: 48px;
    top: -250px;
    width: 540px;
    button {
      width: 100%;
    }
  }
`;

export const FormRowWrapper = styled.div`
  text-align: left;
  @media ${DEVICES.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const InputLabel = styled.span`
  display: block;
  margin-bottom: 12px;
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
