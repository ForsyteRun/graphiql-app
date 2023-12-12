import { ToastContentProps, toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import {
  TOAST_LOG_OUT_PENDING,
  TOAST_LOG_OUT_SUCCESS,
  TOAST_NO_CONNECTION,
  TOAST_REQUEST_PENDING,
  TOAST_REQUEST_SUCCESS,
  TOAST_SIGN_IN_PENDING,
  TOAST_SIGN_IN_SUCCESS,
  TOAST_SIGN_UP_PENDING,
  TOAST_SIGN_UP_SUCCESS,
} from '../constants/toastsConst';

export const toastSignUp = async (
  onRenderError: (error: FirebaseError) => string,
  signUp: () => Promise<unknown> | (() => Promise<unknown>)
) => {
  const response = await toast.promise(signUp(), {
    pending: TOAST_SIGN_UP_PENDING,
    success: TOAST_SIGN_UP_SUCCESS,
    error: {
      render(error) {
        const apiError = error as unknown as FirebaseError;
        return onRenderError(apiError);
      },
    },
  });
  return response;
};

export const toastForNoConnection = () => {
  if (!navigator.onLine) {
    toast.error(TOAST_NO_CONNECTION);
    return true;
  }
};

export const toastSignIn = async (
  onRenderError: (error: FirebaseError) => string,
  signIn: () => Promise<unknown> | (() => Promise<unknown>)
) => {
  const response = await toast.promise(signIn(), {
    pending: TOAST_SIGN_IN_PENDING,
    success: TOAST_SIGN_IN_SUCCESS,
    error: {
      render(error) {
        const apiError = error as unknown as FirebaseError;
        return onRenderError(apiError);
      },
    },
  });

  return response;
};

export const toastLogout = async (
  onRenderError: (error: FirebaseError) => string,
  logout: () => Promise<unknown> | (() => Promise<unknown>)
) => {
  const response = await toast.promise(logout(), {
    pending: TOAST_LOG_OUT_PENDING,
    success: TOAST_LOG_OUT_SUCCESS,
    error: {
      render(error) {
        const apiError = error as unknown as FirebaseError;
        return onRenderError(apiError);
      },
    },
  });

  return response;
};

export const toastRequest = async (
  onRenderError: (error: Partial<ToastContentProps>) => string,
  getData: () => Promise<Response> | (() => Promise<Response>)
) => {
  const response = await toast.promise(getData(), {
    pending: TOAST_REQUEST_PENDING,
    success: TOAST_REQUEST_SUCCESS,
    error: {
      render(error) {
        return onRenderError(error as Partial<ToastContentProps>);
      },
    },
  });
  return response;
};
