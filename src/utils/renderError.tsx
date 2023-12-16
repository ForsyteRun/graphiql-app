import { TOAST_API_ERROR, TOAST_REQUSET_ERROR } from '../constants/toastsConst';

export const onRenderError = (error: string | undefined) => {
  if (error?.match('TypeError')) {
    return TOAST_API_ERROR;
  } else {
    return TOAST_REQUSET_ERROR;
  }
};
