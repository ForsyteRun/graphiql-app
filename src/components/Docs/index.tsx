import classNames from 'classnames';
import useGetDocsFromApi from '../../hooks/useGetDocsFromApi';
import { useEffect, useState } from 'react';
import { buildClientSchema } from 'graphql';
import useSchema from '../../hooks/useSchema';

const Docs = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    query: { data },
    setHoverButton,
  } = useGetDocsFromApi();
  const { rootTypes, fieldsTypes, setSchema } = useSchema();

  useEffect(() => {
    if (data) {
      const response = buildClientSchema(data);
      setSchema(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <aside className={classNames({ openModal: open })}>
      <div className="docs-container">
        <ul>
          <li>{rootTypes && rootTypes.name}</li>
        </ul>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {fieldsTypes &&
            Object.keys(fieldsTypes).map(
              (value) =>
                !value.includes('_') && (
                  <li key={value} style={{ margin: '2rem' }}>
                    {value}
                  </li>
                )
            )}
        </ul>
      </div>
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
