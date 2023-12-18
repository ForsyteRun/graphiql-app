import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldName } from '../types/types';
import { schema, IForm } from '../utils/schema';
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
import { fields } from '../constants/fields';
import { DataForm } from '../types/interface';

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
    formState: { errors },
  } = useForm<IForm>({
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
      {fields.map(({ label, name, type, placeholder }) => (
        <label
          key={name}
          className={`label ${errors[name as FieldName] ? 'error' : ''}`}
          htmlFor={name}
        >
          <span>{label}</span>
          <input
            {...register(name as FieldName)}
            type={type}
            id={name}
            placeholder={placeholder}
          />
          {errors[name as FieldName] && (
            <div className="error-message">
              {errors[name as FieldName]?.message}
            </div>
          )}
        </label>
      ))}
      <button className="button button-second" type="submit">
        Регистрация
      </button>
    </form>
  );
};

export default RegistrationForm;
