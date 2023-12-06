import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import {
  TOAST_NO_CONNECTION,
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
