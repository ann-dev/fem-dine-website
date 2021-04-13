import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import FormSelect from './FormSelect';
import { SubmitButton } from 'components/common/Button';

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
  InputWrapper,
} from './styles';
import GuestCounter from './GuestCounter';

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const maxYear = currentYear + 1;

  const onSubmit = () => {
    Swal.fire({
      title: 'Success!',
      text:
        'Your booking has been confirmed. Check your email for more details.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
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
          {errors.email && errors.email?.type === 'pattern' && (
            <InputError>Enter a valid email address</InputError>
          )}
        </InputWrapper>
        <FormRowWrapper>
          <InputLabel error={errors.month || errors.day || errors.year}>
            Pick a date
          </InputLabel>
          <FormInputRow>
            <InputWrapper error={errors.month}>
              <FormInput
                {...register('month', {
                  required: true,
                  min: 1,
                  max: 12
                })}
                type="number"
                name="month"
                placeholder="MM"
                error={errors.month}
              />
            </InputWrapper>
            <InputWrapper error={errors.day}>
              <FormInput
                {...register('day', {
                  required: true,
                  min: 1,
                  max: 31
                })}
                type="number"
                name="day"
                placeholder="DD"
                error={errors.day}
              />
            </InputWrapper>
            <InputWrapper error={errors.year}>
              <FormInput
                {...register('year', {
                  required: true,
                  min: { currentYear },
                  max: { maxYear }
                })}
                type="number"
                name="year"
                placeholder="YYYY"
                error={errors.year}
              />
            </InputWrapper>
            {((errors.month && errors.month?.type === 'required') ||
              (errors.day && errors.day?.type === 'required') ||
              (errors.year && errors.year?.type === 'required')) && (
              <InputRowError>This field is incomplete</InputRowError>
            )}
          </FormInputRow>
        </FormRowWrapper>
        <FormRowWrapper>
          <InputLabel error={errors.hour || errors.minutes}>
            Pick a time
          </InputLabel>
          <FormInputRow>
            <InputWrapper error={errors.hour}>
              <FormInput
                {...register('hour', {
                  required: true
                })}
                type="number"
                name="hour"
                placeholder="09"
                error={errors.hour}
              />
            </InputWrapper>
            <InputWrapper error={errors.minutes}>
              <FormInput
                {...register('minutes', {
                  required: true
                })}
                type="number"
                name="minutes"
                placeholder="00"
                error={errors.minutes}
              />
            </InputWrapper>
            <FormSelect />
            {((errors.month && errors.hour?.type === 'required') ||
              (errors.day && errors.minutes?.type === 'required')) && (
              <InputRowError>This field is incomplete</InputRowError>
            )}
          </FormInputRow>
        </FormRowWrapper>
        <GuestCounter />
        <SubmitButton type="submit" value="Make reservation" />
      </Form>
    </FormContainer>
  );
};

export default BookingForm;
