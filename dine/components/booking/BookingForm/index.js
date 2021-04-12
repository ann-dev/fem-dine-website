import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

import FormSelect from './FormSelect';
import { Button } from 'components/common/Button';

import {
  FormContainer,
  Form,
  FormPattern,
  FormBgPattern,
  FormInputRow,
  InputRowError,
  FormInput,
  InputError,
  FormRowWrapper,
  InputLabel,
  InputWrapper
} from './styles';
import GuestCounter from './GuestCounter';

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
  };

  return (
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper error={errors.fullName}>
          <FormInput
            {...register('fullName', {
              required: true,
              pattern: /^[A-Za-z]+$/
            })}
            error={errors.fullName}
            type="text"
            name="fullName"
            placeholder="Name"
          />
          {errors.fullName && errors.fullName?.type === 'required' && (
            <InputError>This field is required</InputError>
          )}
        </InputWrapper>
        <InputWrapper error={errors.email}>
          <FormInput
            {...register('email', {
              required: true,
              pattern: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
            })}
            error={errors.email}
            type="email"
            name="email"
            placeholder="Email"
          />
          {errors.email && errors.email?.type === 'required' && (
            <InputError>This field is required</InputError>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <InputError className="text-error">
              Enter a valid email address
            </InputError>
          )}
        </InputWrapper>
        <FormRowWrapper>
          <InputLabel>Pick a date</InputLabel>
          {errors.email && errors.email.type === 'pattern' && (
            <InputRowError className="text-error">
              Enter a valid email address
            </InputRowError>
          )}
          <FormInputRow>
            <InputWrapper>
              <FormInput
                {...register('month', {
                  min: 1,
                  max: 12
                })}
                type="number"
                name="month"
                placeholder="MM"
              />
            </InputWrapper>
            <InputWrapper>
              <FormInput
                {...register('day', {
                  min: 1,
                  max: 31
                })}
                type="number"
                name="day"
                placeholder="DD"
              />
            </InputWrapper>
            <InputWrapper>
              <FormInput
                {...register('year')}
                type="number"
                name="year"
                placeholder="YYYY"
              />
            </InputWrapper>
          </FormInputRow>
        </FormRowWrapper>
        <FormRowWrapper>
          <InputLabel>Pick a time</InputLabel>
          <FormInputRow>
            <InputWrapper>
              <FormInput
                {...register('hour')}
                type="number"
                name="hour"
                placeholder="09"
              />
            </InputWrapper>
            <InputWrapper>
              <FormInput
                {...register('minutes')}
                type="number"
                name="minutes"
                placeholder="00"
              />
            </InputWrapper>
            <FormSelect />
          </FormInputRow>
        </FormRowWrapper>
        <GuestCounter />
        <Button type="submit">Make reservation</Button>
      </Form>
    </FormContainer>
  );
};

export default BookingForm;
