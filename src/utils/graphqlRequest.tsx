import { useCallback, useEffect } from 'react';
import { setResponse } from '../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../store/types';

export const useGraphqlRequest = () => {
  const { api, variables, headers, query } = useAppSelector(
    (state) => state.request
  );
  const requestHeaders = headers as Headers;
  const ver = variables ? JSON.parse(variables) : '';
  const getData = useCallback(
    async (query: string, ver: string, api: string, requestHeaders: object) => {
      return await fetch(api, {
        method: 'POST',
        headers: requestHeaders as Headers,
        body: JSON.stringify({ query, variables: ver }),
      }).then((data) => data.json());
    },
    []
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    getData(query, ver, api, requestHeaders).then((response) => {
      console.log(response);
      dispatch(setResponse(JSON.stringify(response, null, 2)));
    });
  }, [dispatch, getData, query, api, requestHeaders, ver]);
};
