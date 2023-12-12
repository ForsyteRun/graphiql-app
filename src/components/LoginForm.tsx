import React from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { IFormLogin } from '../utils/schema';
import { DataLogin } from '../types/types';
import { schemaLogin } from '../utils/schema';
import { logInWithEmailAndPassword } from '../firebase/firebase';
import { toastForNoConnection, toastSignIn } from '../utils/toasts';
import {
  TOAST_INTERNAL_SERVER_ERROR,
  TOAST_SIGN_IN_ERROR,
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
    return TOAST_SIGN_IN_ERROR;
  }
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormLogin>({
    mode: 'onChange',
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data: DataLogin) => {
    try {
      if (toastForNoConnection()) {
        return;
      }
      await toastSignIn(onRenderError, () =>
        logInWithEmailAndPassword(data.email, data.password)
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

      <button className="form__btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
