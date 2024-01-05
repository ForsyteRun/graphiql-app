import { useCallback, useEffect, useState } from 'react';
import { IQuery } from '../types/interface';
import { getIntrospectionQuery } from 'graphql';
import { useAppSelector } from '../store/types';

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
        console.info('error get docs');
      }
    };

    fetchDocs();
  }, [api]);

  return { query };
};

export default useGetDocsFromApi;
