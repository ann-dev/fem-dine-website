import { Button } from 'components/common/Button';

import {
  FormContainer,
  Form,
  FormPattern,
  FormBgPattern,
  FormInputRow,
  FormRowWrapper,
  InputLabel,
  InputWrapper,
  FormInput,
  FormSelect,
  GuestCounter,
  CounterButton
} from './styles';

const BookingForm = () => (
  <FormContainer>
    <FormPattern
      src="/images/patterns/pattern-lines.svg"
      alt=""
      role="presentation"
    />
    <FormBgPattern
      src="/images/patterns/pattern-curve-bottom-right.svg"
      alt=""
      role="presentation"
    />
    <Form>
      <InputWrapper>
        <FormInput type="text" placeholder="Name" />
      </InputWrapper>
      <InputWrapper>
        <FormInput type="email" placeholder="Email" />
      </InputWrapper>
      <FormRowWrapper>
        <InputLabel>Pick a date</InputLabel>
        <FormInputRow>
          <InputWrapper>
            <FormInput type="number" placeholder="MM" />
          </InputWrapper>
          <InputWrapper>
            <FormInput type="number" placeholder="DD" />
          </InputWrapper>
          <InputWrapper>
            <FormInput type="number" placeholder="YYYY" />
          </InputWrapper>
        </FormInputRow>
      </FormRowWrapper>
      <FormRowWrapper>
        <InputLabel>Pick a time</InputLabel>
        <FormInputRow>
          <InputWrapper>
            <FormInput type="number" placeholder="09" />
          </InputWrapper>
          <InputWrapper>
            <FormInput type="number" placeholder="00" />
          </InputWrapper>
          <FormSelect>
            <select>
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </FormSelect>
        </FormInputRow>
      </FormRowWrapper>
      <GuestCounter>
        <CounterButton>
          <img src="/icons/icon-minus.svg" alt="" role="presentation" />
        </CounterButton>
        <span>4 people</span>
        <CounterButton>
          <img src="/icons/icon-plus.svg" alt="" role="presentation" />
        </CounterButton>
      </GuestCounter>
      <Button>Make reservation</Button>
    </Form>
  </FormContainer>
);

export default BookingForm;
