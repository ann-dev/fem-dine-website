import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

import { SubmitButton } from '../../common/Button';
import FormSelect from './FormSelect';
import GuestCounter from './GuestCounter';
import * as Styled from './styles';

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();
  // const maxYear = currentYear + 1;

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
    <Styled.FormContainer>
      <Styled.FormPattern
        src="/images/patterns/pattern-lines.svg"
        alt=""
        role="presentation"
      />
      <Styled.FormBgPattern
        src="/images/patterns/pattern-curve-bottom-right.svg"
        alt=""
        role="presentation"
      />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.InputWrapper>
          <Styled.FormInput
            {...register('fullName', {
              required: true,
              pattern: /^[A-Za-z]+$/
            })}
            type="text"
            name="fullName"
            placeholder="Name"
          />
          {errors.fullName && errors.fullName?.type === 'required' && (
            <Styled.InputError>This field is required</Styled.InputError>
          )}
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.FormInput
            {...register('email', {
              required: true,
              pattern: /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
            })}
            type="email"
            name="email"
            placeholder="Email"
          />
          {errors.email && errors.email?.type === 'required' && (
            <Styled.InputError>This field is required</Styled.InputError>
          )}
          {errors.email && errors.email?.type === 'pattern' && (
            <Styled.InputError>Enter a valid email address</Styled.InputError>
          )}
        </Styled.InputWrapper>
        <Styled.FormRowWrapper>
          <Styled.InputLabel>Pick a date</Styled.InputLabel>
          <Styled.FormInputRow>
            <Styled.InputWrapper>
              <Styled.FormInput
                {...register('month', {
                  required: true,
                  min: 1,
                  max: 12
                })}
                type="number"
                name="month"
                placeholder="MM"
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.FormInput
                {...register('day', {
                  required: true,
                  min: 1,
                  max: 31
                })}
                type="number"
                name="day"
                placeholder="DD"
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.FormInput
                {...register('year', {
                  required: true
                  // min: { currentYear },
                  // max: { maxYear }
                })}
                type="number"
                name="year"
                placeholder="YYYY"
              />
            </Styled.InputWrapper>
            {((errors.month && errors.month?.type === 'required') ||
              (errors.day && errors.day?.type === 'required') ||
              (errors.year && errors.year?.type === 'required')) && (
              <Styled.InputRowError>
                This field is incomplete
              </Styled.InputRowError>
            )}
          </Styled.FormInputRow>
        </Styled.FormRowWrapper>
        <Styled.FormRowWrapper>
          <Styled.InputLabel>Pick a time</Styled.InputLabel>
          <Styled.FormInputRow>
            <Styled.InputWrapper>
              <Styled.FormInput
                {...register('hour', {
                  required: true
                })}
                type="number"
                name="hour"
                placeholder="09"
              />
            </Styled.InputWrapper>
            <Styled.InputWrapper>
              <Styled.FormInput
                {...register('minutes', {
                  required: true
                })}
                type="number"
                name="minutes"
                placeholder="00"
              />
            </Styled.InputWrapper>
            <FormSelect />
            {((errors.month && errors.hour?.type === 'required') ||
              (errors.day && errors.minutes?.type === 'required')) && (
              <Styled.InputRowError>
                This field is incomplete
              </Styled.InputRowError>
            )}
          </Styled.FormInputRow>
        </Styled.FormRowWrapper>
        <GuestCounter />
        <SubmitButton type="submit" value="Make reservation" />
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default BookingForm;
