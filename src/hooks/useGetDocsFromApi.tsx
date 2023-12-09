import { useCallback, useEffect, useState } from 'react';
import { introspectionQuery } from '../constants/introspectionQuery';
import useOpen from './useOpen';

const useGetDocsFromApi = () => {
  const [data, setData] = useState<string>('');
  const { setOpen, open } = useOpen();

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
    if (open) {
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
  }, [open]);

  return { data, open, setOpen };
};

export default useGetDocsFromApi;
