import classNames from 'classnames';
import { buildClientSchema } from 'graphql';
import { memo, useEffect, useState } from 'react';
import useGetDocsFromApi from '../../hooks/useGetDocsFromApi';
import useSchema from '../../hooks/useSchema';
import { FieldSchema } from './components';

const Docs = memo(() => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    query: { data },
  } = useGetDocsFromApi();
  const { rootSchema, setSchema, setRootSchema } = useSchema();

  useEffect(() => {
    setRootSchema(null);

    if (data) {
      const response = buildClientSchema(data);

      setSchema(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <aside className={classNames({ openAside: open })}>
      <div className="docs-container">
        <FieldSchema schema={rootSchema} setRootSchema={setRootSchema} />
      </div>
      <button className="docs-button" onClick={() => setOpen(!open)}>
        Docs
      </button>
    </aside>
  );
});

export default Docs;
