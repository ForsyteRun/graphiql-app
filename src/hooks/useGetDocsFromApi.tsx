import { useCallback, useEffect, useState } from 'react';
import { IQuery } from '../types/interface';
import { getIntrospectionQuery } from 'graphql';
import { useAppSelector } from '../store/types';

// https://beta.pokeapi.co/graphql/v1beta
// 'https://rickandmortyapi.com/graphql'
// 'https://graphqlzero.almansi.me/api'
const useGetDocsFromApi = () => {
  const [query, setQuery] = useState<IQuery>({ data: null });
  const { api } = useAppSelector((state) => state.request);

  const getDocsData = useCallback(
    async <T extends string>(query: T): Promise<IQuery> => {
      const response: Response = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });

      return response.json();
    },
    [api]
  );

  useEffect(() => {
    setQuery({ data: null });

    const fetchDocs = async () => {
      try {
        const res: IQuery = await getDocsData(getIntrospectionQuery());

        setQuery(res);
      } catch (error) {
        console.log('error get docs');
      }
    };

    fetchDocs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  return { query };
};

export default useGetDocsFromApi;
