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
    setHoverButton,
  } = useGetDocsFromApi();
  const { rootSchema, setSchema, setRootSchema } = useSchema();

  const handleChangeField = (data: GraphQLNamedType) => {
    setFieldsTypes({ [data.name]: data });
    setRootTypes(data as GraphQLObjectType);
  };

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
        <FieldSchema schema={rootSchema} setRootSchema={setRootSchema} />
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
});

export default Docs;
