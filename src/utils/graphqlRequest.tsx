import { useCallback, useEffect } from 'react';
import { setResponse } from '../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../store/types';
import { checkVariables } from './checkVariables';
import {
  TOAST_INTERNAL_SERVER_ERROR,
  TOAST_REQUSET_ERROR,
} from '../constants/toastsConst';
import { toastForNoConnection, toastRequest } from './toasts';
import { ToastContentProps } from 'react-toastify';

const onRenderError = (error: Partial<ToastContentProps>) => {
  if (error.data) {
    return TOAST_REQUSET_ERROR;
  } else {
    return TOAST_INTERNAL_SERVER_ERROR;
  }
};

export const useGraphqlRequest = () => {
  const { api, variables, headers, query } = useAppSelector(
    (state) => state.request
  );
  const requestHeaders = headers as Headers;
  const dispatch = useAppDispatch();

  const getData = useCallback(
    async (
      query: string,
      variables: string,
      api: string,
      requestHeaders: object
    ) => {
      const res = await fetch(api, {
        method: 'POST',
        headers: requestHeaders as Headers,
        body: JSON.stringify({ query, variables: checkVariables(variables) }),
      });
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return res;
    },
    []
  );

  const getResponse = useCallback(
    async (
      query: string,
      variables: string,
      api: string,
      requestHeaders: object
    ) => {
      try {
        if (toastForNoConnection()) {
          return;
        }
        const response = await toastRequest(onRenderError, () =>
          getData(query, variables, api, requestHeaders)
        );
        return response.json();
      } catch (error) {
        console.log(error);
      }
    },
    [getData]
  );

  useEffect(() => {
    getResponse(query, variables, api, requestHeaders).then((response) => {
      dispatch(setResponse(JSON.stringify(response, null, 2)));
    });
  }, [dispatch, getData, query, api, requestHeaders, variables, getResponse]);
};
