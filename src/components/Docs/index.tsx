import classNames from 'classnames';
import useGetDocsFromApi from '../../hooks/useGetDocsFromApi';
import { Button } from './components';

const Docs = () => {
  const { data, open, setOpen } = useGetDocsFromApi();

  console.log(data);

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
