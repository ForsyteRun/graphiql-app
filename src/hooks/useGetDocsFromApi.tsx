import { IntrospectionQuery } from 'graphql';
import { useCallback, useEffect, useState } from 'react';
import { introspectionQuery } from '../constants/introspectionQuery';

interface IQuery {
  data: IntrospectionQuery | null;
}

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
          const res: IQuery = await getDocsData(introspectionQuery);

          setQuery(res);
        } catch (error) {
          alert('error get docs');
        }
      };

      fetchDocs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverButton]);

  return { query, setHoverButton };
};

export default useGetDocsFromApi;
