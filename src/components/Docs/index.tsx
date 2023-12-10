import classNames from 'classnames';
import useGetDocsFromApi from '../../hooks/useGetDocsFromApi';
import { useEffect, useState } from 'react';

const Docs = () => {
  const { data, setHoverButton } = useGetDocsFromApi();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <aside className={classNames('docs-container', { openModal: open })}>
      qqqscscscscscscscscs qqqscscscscscscscscs qqqscscscscscscscscs
      qqqscscscscscscscscs qqqscscscscscscscscs qqqscscscscscscscscs
      qqqscscscscscscscscs
      <button
        className="docs-button"
        onMouseEnter={() => setHoverButton(true)}
        onMouseLeave={() => setHoverButton(false)}
        onClick={() => setOpen(!open)}
      >
        Docs
      </button>
    </aside>
  );
};

export default Docs;
