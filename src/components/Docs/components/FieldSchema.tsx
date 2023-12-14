import {
  GraphQLLeafType,
  GraphQLNamedType,
  GraphQLOutputType,
  GraphQLType,
  isLeafType,
  isObjectType,
} from 'graphql/type';
import { memo, useCallback, useEffect, useState } from 'react';
import { FieldsType, IRootSchema, Maybe } from '../../../hooks/useSchema';
import DetailedField from './DetailedField';
import NextField from './NextField';

interface IFieldSchema {
  schema: Maybe<IRootSchema>;
  setRootSchema: (value: IRootSchema) => void;
}

const FieldSchema = memo(({ schema, setRootSchema }: IFieldSchema) => {
  const [fields, setFields] = useState<[string, GraphQLOutputType][]>();
  const [isDescription, setIsDescription] = useState(false);

  const handleClick = useCallback(
    (value: GraphQLType | GraphQLNamedType) => {
      if (isObjectType(value)) {
        const data = value.getFields();

        const modiFyData: IRootSchema = {
          fields: { ...data } as unknown as FieldsType,
        };

        setRootSchema(modiFyData);
        setIsDescription(false);
      } else if (isLeafType(value)) {
        const modiFyData: IRootSchema = {
          fields: { [value.name]: { ...value } } as unknown as FieldsType,
        };
        setRootSchema(modiFyData);
        setIsDescription(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schema]
  );

  useEffect(() => {
    if (schema) {
      const fieldsSchema = Object.entries(schema.fields);
      setFields(fieldsSchema);
    }
  }, [schema]);

  return (
    <>
      <ul>
        {fields &&
          fields.map(([fieldName, fieldType]: [string, GraphQLOutputType]) => (
            <li key={fieldName} style={{ cursor: 'pointer' }}>
              <li key={fieldName} style={{ cursor: 'pointer' }}>
                {isDescription ? (
                  <DetailedField value={fieldType as GraphQLLeafType} />
                ) : (
                  <NextField
                    handleClick={handleClick}
                    fieldName={fieldName}
                    fieldType={fieldType}
                  />
                )}
              </li>
            </li>
          ))}
      </ul>
    </>
  );
});

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

export default FieldSchema;
