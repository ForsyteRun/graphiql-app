import { useCallback, useEffect } from 'react';
import { setResponse } from '../store/slice/requestSlice';
import { useAppDispatch, useAppSelector } from '../store/types';

export const useGraphqlRequest = (query: string) => {
  const { api, variables, headers } = useAppSelector((state) => state.request);
  const requestHeaders = headers as Headers;
  const getData = useCallback(
    async (query: string) => {
      return await fetch(api, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({ query, variables }),
      }).then((data) => data.json());
    },
    [api, requestHeaders, variables]
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    getData(query).then((response) => {
      dispatch(setResponse(JSON.stringify(response, null, 2)));
    });
  }, [dispatch, getData, query]);
};
