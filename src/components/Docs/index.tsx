import classNames from 'classnames';
import useOpen from '../../hooks/useOpen';
import { Button } from './components';

const Docs = () => {
  const { setOpen, open } = useOpen();

  return (
    <aside className={classNames('docs-container', { closeModal: open })}>
      qqqscscscscscscscscs qqqscscscscscscscscs qqqscscscscscscscscs
      qqqscscscscscscscscs qqqscscscscscscscscs qqqscscscscscscscscs
      qqqscscscscscscscscs
      <Button setOpen={setOpen} open={open} />
    </aside>
  );
};

export default Docs;
