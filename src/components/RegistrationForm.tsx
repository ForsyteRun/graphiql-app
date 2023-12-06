import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { DataForm } from '../types/types';
import { schema } from '../utils/schema';
import { registerWithEmailAndPassword } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../constants/route';

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<DataForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: DataForm) => {
    console.log(data);
    registerWithEmailAndPassword(data.email, data.password);
    navigate(MAIN_ROUTE);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label>Email </label>
      {errors.email && (
        <span className="form__error">{errors.email.message}</span>
      )}
      <input
        className="form__input"
        id="email"
        {...register('email')}
        placeholder="email@gmail.com"
      />

      <label htmlFor="password">Password </label>
      {errors.password && (
        <span className="form__error">{errors.password.message}</span>
      )}
      <input
        {...register('password')}
        type="password"
        id="password"
        className="form__input"
      />

      <label htmlFor="confirmPassword">Confirm Password </label>
      {errors.confirmPassword && (
        <span className="form__error">{errors.confirmPassword?.message}</span>
      )}
      <input
        type="password"
        {...register('confirmPassword')}
        id="conformPassword"
        className="form__input"
      />
      <button className="form__btn" type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export { RegistrationForm };
