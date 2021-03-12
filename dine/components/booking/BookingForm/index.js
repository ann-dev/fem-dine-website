import { Button } from 'components/common/Button';

import {
  FormContainer,
  Form,
  FormInputRow,
  FormRowWrapper,
  InputLabel,
  FormInput,
  FormSelect,
  GuestCounter,
  CounterButton
} from './styles';

const BookingForm = () => (
  <FormContainer>
    <Form>
      <FormRowWrapper>
        <FormInput type="text" placeholder="Name" />
      </FormRowWrapper>
      <FormInput type="email" placeholder="Email" />
      <FormRowWrapper>
        <InputLabel>Pick a date</InputLabel>
        <FormInputRow>
          <FormInput type="number" placeholder="MM" />
          <FormInput type="number" placeholder="DD" />
          <FormInput type="number" placeholder="YYYY" />
        </FormInputRow>
      </FormRowWrapper>
      <FormRowWrapper>
        <InputLabel>Pick a time</InputLabel>
        <FormInputRow>
          <FormInput type="number" placeholder="09" />
          <FormInput type="number" placeholder="00" />
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
