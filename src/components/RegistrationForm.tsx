import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { DataForm } from '../types/types';
import { schema } from '../utils/schema';
import { registerWithEmailAndPassword } from '../firebase/firebase';
import { toastForNoConnection, toastSignUp } from '../utils/toasts';
import {
  TOAST_INTERNAL_SERVER_ERROR,
  TOAST_SIGN_UP_ERROR,
} from '../constants/toastsConst';
import { FirebaseError } from 'firebase/app';
import { MAIN_ROUTE } from '../constants/route';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/types';
import { setIsLogin } from '../store/slice/userSlice';

const onRenderError = (error: FirebaseError) => {
  if (error.code === 'auth/email-already-in-use') {
    return TOAST_INTERNAL_SERVER_ERROR;
  } else {
    return TOAST_SIGN_UP_ERROR;
  }
};

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<DataForm>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: DataForm) => {
    try {
      if (toastForNoConnection()) {
        return;
      }
      await toastSignUp(onRenderError, () =>
        registerWithEmailAndPassword(data.email, data.password)
      );
      dispatch(setIsLogin(true));
      navigate(MAIN_ROUTE);
    } catch (error) {
      dispatch(setIsLogin(false));
      reset();
    }
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

export default RegistrationForm;
