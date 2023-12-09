import classNames from 'classnames';
import useOpen from '../../hooks/useOpen';
import { Button } from './components';
import { useEffect } from 'react';

const Docs = () => {
  const { setOpen, open } = useOpen();

  useEffect(() => {
    if (open) {
      console.log(111);
    }
  }, [open]);

  return (
    <aside className={classNames('docs-container', { openModal: open })}>
      qqqscscscscscscscscs qqqscscscscscscscscs qqqscscscscscscscscs
      qqqscscscscscscscscs qqqscscscscscscscscs qqqscscscscscscscscs
      qqqscscscscscscscscs
      <Button setOpen={setOpen} open={open} />
    </aside>
  );
};

export default Docs;
