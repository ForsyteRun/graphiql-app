import { useCallback, useEffect } from 'react';
import { setResponse } from '../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../store/types';
import { checkVariables } from './checkVariables';
import { setErrorMessage } from '../store/slice/errorSlice';

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
      try {
        const res = await fetch(api, {
          method: 'POST',
          headers: requestHeaders as Headers,
          body: JSON.stringify({ query, variables: checkVariables(variables) }),
        });
        if (!res.ok) {
          throw new Error(`Error! status: ${res.status}`);
        }
        const data = await res.json();
        dispatch(setErrorMessage(''));
        return data;
      } catch (error) {
        error &&
          dispatch(setErrorMessage('Response not successful: check your API'));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getData(query, variables, api, requestHeaders).then((response) => {
      dispatch(setResponse(JSON.stringify(response, null, 2)));
    });
  }, [dispatch, getData, query, api, requestHeaders, variables]);
};
