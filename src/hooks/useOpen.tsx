import { useState } from 'react';

const useOpen = () => {
  const [open, setOpen] = useState(true);

  return { open, setOpen };
};

export default useOpen;
