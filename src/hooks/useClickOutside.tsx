import { MutableRefObject, useEffect, useState } from 'react';

const useClickOutside = (ref: MutableRefObject<null | HTMLElement>) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !(event.target as Element)?.closest('aside')) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);
  return { open, setOpen };
};

export default useClickOutside;
