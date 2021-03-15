import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 534px;
  position: relative;
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
`;

export const FormRowWrapper = styled.div`
  text-align: left;
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
`;

export const FormInput = styled.input`
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  -moz-appearance: textfield;
  border: none;
  border-radius: 0px;
  font-family: inherit;
  font-size: 18px;
  height: 45px;
  outline: none;
  letter-spacing: -0.22px;
  padding-bottom: 16px;
  padding-left: 18px;
  width: 100%;
`;

export const FormSelect = styled.div`
  border-bottom: 1px solid black;
  height: 46px;
  padding-left: 18px;
  padding-bottom: 16px;
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
`;

export const CounterButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
  border: none;
  cursor: pointer;
`;
