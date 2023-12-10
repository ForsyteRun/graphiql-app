import classNames from 'classnames';
import useGetDocsFromApi from '../../hooks/useGetDocsFromApi';
import { useEffect, useState } from 'react';
import { buildClientSchema } from 'graphql';

const Docs = () => {
  const {
    query: { data },
    setHoverButton,
  } = useGetDocsFromApi();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      const response = buildClientSchema(data);
      console.log(response);
    }
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
