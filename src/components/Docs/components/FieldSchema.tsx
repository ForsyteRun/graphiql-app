import { GraphQLFieldMap, GraphQLObjectType } from 'graphql/type';
import { useCallback, useEffect, useState } from 'react';
import { FieldsType, IRootSchema, Maybe } from '../../../hooks/useSchema';
import DetailedField from './DetailedField';

interface IFieldSchema {
  schema: Maybe<IRootSchema>;
  setRootSchema: (value: IRootSchema) => void;
}
const FieldSchema = ({ schema, setRootSchema }: IFieldSchema) => {
  const [fields, setFields] = useState<[string, GraphQLObjectType][]>();
  const [isDescription, setIsDescription] = useState(false);

  const handleClick = useCallback(
    (value: GraphQLObjectType | GraphQLFieldMap<object, object>) => {
      if (typeof value === 'string' || typeof value === 'undefined') {
        return;
      } else if (
        typeof value === 'object' &&
        value instanceof GraphQLObjectType
      ) {
        const data = value.getFields();

        const modiFyData: IRootSchema = {
          fields: { ...data } as unknown as FieldsType,
        };

        setRootSchema(modiFyData);
        setIsDescription(false);
      } else if (
        typeof value === 'object' &&
        !(value instanceof GraphQLObjectType)
      ) {
        const modiFyData: IRootSchema = {
          fields: { ...value } as unknown as FieldsType,
        };
        setRootSchema(modiFyData);
        setIsDescription(false);
      } else {
        const modiFyData: IRootSchema = {
          fields: { ...value } as unknown as FieldsType,
        };

        setRootSchema(modiFyData);
        setIsDescription(true);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schema]
  );

  useEffect(() => {
    if (schema) {
      const fieldsSchema = Object.entries(schema.fields as FieldsType);
      setFields(fieldsSchema);
    }
  }, [schema]);

  // let rootKeys: string[] = [];

  // rootSchema.forEach((obj: [string, GraphQLObjectType]) => {
  //   const [key] = obj;
  //   if (key.includes('_')) {
  //     return;
  //   }
  //   rootKeys = [...rootKeys, key];
  // });

  return (
    <>
      {schema?.queries && (
        <div
          onClick={() => {
            if (!schema.queries) return;
            const { fields } = schema.queries;
            handleClick(fields);
          }}
        >
          Main query: {schema?.queries.name}
        </div>
      )}
      <ul>
        {fields &&
          fields.map(([key, value]: [string, GraphQLObjectType]) => (
            <li
              key={key}
              onClick={
                isDescription
                  ? undefined
                  : () => handleClick(value as GraphQLObjectType)
              }
            >
              {isDescription ? (
                typeof value !== 'object' ? (
                  <>
                    <DetailedField value={value} />
                  </>
                ) : null
              ) : (
                <span>{key}</span>
              )}
            </li>
          ))}
      </ul>
    </>
  );

  // return (
  //   <>
  //     <div
  //       style={{
  //         display: 'flex',
  //         flexDirection: 'column',
  //         gap: '0.5rem',
  //         justifyContent: 'flex-start',
  //       }}
  //     >
  //       {/* {!root && <div>Field name: {data?.name}2</div>}
  //       {!root && <div>Field description: {data?.description}</div>} */}
  //       {/* {!root && typeof value?.getFields === 'function' && (
  //         <>
  //           <span>Fields:</span>
  //           <ul>
  //             {Object.entries(value.getFields()).map(([key, value]) => (
  //               <li key={key}>{key}</li>
  //             ))}
  //           </ul>
  //         </>
  //       )} */}
  //       {rootKeys.map((key) => (
  //         <button key={key} onClick={() => handleClick(key)}>
  //           {key}
  //         </button>
  //       ))}
  //       {!isRootSchema &&
  //         rootKeys.map((key: string) => (
  //           <DetailFieldSchema
  //             key={key}
  //             value={data[key] as GraphQLObjectType}
  //             handleChangeField={handleChangeField}
  //           />
  //         ))}
  //     </div>
  //   </>
  // );
};

export default FieldSchema;
