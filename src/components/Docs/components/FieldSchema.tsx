import {
  GraphQLObjectType,
  GraphQLOutputType,
  isObjectType,
} from 'graphql/type';
import { useCallback, useEffect, useState } from 'react';
import {
  FieldsType,
  IQueries,
  IRootSchema,
  Maybe,
} from '../../../hooks/useSchema';
import DetailedField from './DetailedField';

interface IFieldSchema {
  schema: Maybe<IRootSchema>;
  setRootSchema: (value: IRootSchema) => void;
}
const FieldSchema = ({ schema, setRootSchema }: IFieldSchema) => {
  const [fields, setFields] = useState<[string, GraphQLObjectType][]>();
  const [isDescription, setIsDescription] = useState(false);

  const handleClick = useCallback(
    (value: { [key: string]: GraphQLOutputType } | GraphQLObjectType) => {
      if (typeof value === 'string' || typeof value === 'undefined') {
        return;
      } else if (isObjectType(value)) {
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

  const modifyType = (
    schemaObj: IQueries | FieldsType
  ): { [key: string]: GraphQLOutputType } => {
    const { fields } = schemaObj;

    const data = Object.entries(fields);

    const queries = data.map(([queryKey, queryValue]) => {
      return {
        [queryKey]: { ...queryValue },
      } as unknown as GraphQLOutputType;
    });

    const combinedObject = queries.reduce(
      (acc, curr) => {
        const [key, innerObject] = Object.entries(curr)[0] as [
          string,
          GraphQLOutputType,
        ];
        acc[key] = innerObject;
        return acc;
      },
      {} as { [key: string]: GraphQLOutputType }
    );

    return combinedObject;
  };

  return (
    <>
      {schema?.queries && (
        <div
          onClick={() => {
            if (schema.queries) {
              const value = modifyType(schema.queries);
              handleClick(value);
            }
          }}
        >
          Main query: {schema?.queries.name}
        </div>
      )}
      <ul>
        {/* Assuming 'fields' is defined somewhere in your code */}
        {fields &&
          fields.map(
            (
              [fieldName, fieldType]: [string, GraphQLObjectType],
              index: number
            ) => (
              <li key={index}>
                {isDescription ? (
                  <>
                    <DetailedField value={fieldType} />
                  </>
                ) : (
                  <span
                    onClick={() => {
                      handleClick(fieldType);
                    }}
                  >
                    {fieldName}
                  </span>
                )}
              </li>
            )
          )}
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
