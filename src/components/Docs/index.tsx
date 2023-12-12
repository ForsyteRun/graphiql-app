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

  // const [selectFfield, setSelectField] =
  //   useState<GraphQLFieldMap<object, object>>();

  // const handleChangeField = (data: IRootSchema) => {
  //   // const modiFyData: IRootSchema = {
  //   //   fields: { ...data } as unknown as FieldsType,
  //   // };

  //   setRootSchema(data);
  // };

  useEffect(() => {
    if (data) {
      const response = buildClientSchema(data);

      setSchema(response);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // useEffect(() => {
  //   if (rootSchema) {
  //     const fieldsSchema = Object.entries(rootSchema.fields as FieldsType);
  //     setFields(fieldsSchema);
  //   }
  // }, [rootSchema]);

  // console.log(rootSchema, fields);

  return (
    <aside className={classNames({ openModal: open })}>
      <div className="docs-container">
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {<FieldSchema schema={rootSchema} setRootSchema={setRootSchema} />}
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
});

export default Docs;
