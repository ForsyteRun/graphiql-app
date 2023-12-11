import classNames from 'classnames';
import useGetDocsFromApi from '../../hooks/useGetDocsFromApi';
import { useEffect, useState, memo } from 'react';
import {
  GraphQLNamedType,
  GraphQLObjectType,
  buildClientSchema,
} from 'graphql';
import useSchema from '../../hooks/useSchema';
import { FieldSchema } from './components';

const Docs = memo(() => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    query: { data },
    setHoverButton,
  } = useGetDocsFromApi();
  const {
    // rootTypes,
    isRootSchema,
    fieldsTypes,
    setSchema,
    setRootTypes,
    setFieldsTypes,
  } = useSchema();

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
        {/* <ul style={{ color: 'red' }}>
          <FieldSchema
            root
            data={rootTypes}
            handleChangeField={handleChangeField}
          />
        </ul> */}
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {fieldsTypes && (
            <FieldSchema
              data={fieldsTypes}
              isRootSchema={isRootSchema}
              handleChangeField={handleChangeField}
            />
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
});

export default Docs;
