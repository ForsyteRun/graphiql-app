import { useCallback, useEffect, useState } from 'react';
import { IQuery } from '../types/interface';
import { getIntrospectionQuery } from 'graphql';

// https://beta.pokeapi.co/graphql/v1beta
// 'https://rickandmortyapi.com/graphql'
// 'https://graphqlzero.almansi.me/api'
const useGetDocsFromApi = () => {
  const [query, setQuery] = useState<IQuery>({ data: null });
  const [hoverButton, setHoverButton] = useState<boolean>(false);

  const getDocsData = useCallback(
    async <T extends string>(query: T): Promise<IQuery> => {
      const response: Response = await fetch(
        'https://rickandmortyapi.com/graphql',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query }),
        }
      );

      return response.json();
    },
    []
  );

  useEffect(() => {
    if (hoverButton && !query.data) {
      const fetchDocs = async () => {
        try {
          const res: IQuery = await getDocsData(getIntrospectionQuery());

          setQuery(res);
        } catch (error) {
          alert('error get docs'); //TODO: modal error
        }
      };

      fetchDocs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverButton]);

  return { query, setHoverButton };
};

export default useGetDocsFromApi;
