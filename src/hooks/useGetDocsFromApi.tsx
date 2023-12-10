import { useCallback, useEffect, useState } from 'react';
import { introspectionQuery } from '../constants/introspectionQuery';

const useGetDocsFromApi = () => {
  const [data, setData] = useState<string | null>(null);
  const [hoverButton, setHoverButton] = useState(false);

  const getDocsData = useCallback(
    async <T extends string>(query: T): Promise<T> => {
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
    if (hoverButton && !data) {
      const fetchDocs = async () => {
        try {
          const res = await getDocsData(introspectionQuery);
          setData(res);
        } catch (error) {
          alert('error get docs');
        }
      };
      fetchDocs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverButton]);

  return { data, setHoverButton };
};

export default useGetDocsFromApi;
