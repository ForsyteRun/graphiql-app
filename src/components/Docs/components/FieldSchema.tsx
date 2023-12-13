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
        setIsDescription(true);
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
            <>
              {isDescription ? (
                <DetailedField value={fieldType as GraphQLLeafType} />
              ) : (
                <li key={fieldName} style={{ cursor: 'pointer' }}>
                  <NextField
                    handleClick={handleClick}
                    fieldName={fieldName}
                    fieldType={fieldType}
                  />
                  {/* <span
                    onClick={() => {
                      handleClick(fieldType);
                    }}
                  >
                    {fieldName}
                  </span>
                  {'type' in fieldType && fieldType.type ? (
                    <span
                      style={{ color: 'blue' }}
                      onClick={() => {
                        handleClick(fieldType.type as GraphQLNamedType);
                      }}
                    >
                      :{(fieldType.type as GraphQLNamedType).name}
                    </span>
                  ) : (
                    ''
                  )} */}
                </li>
              )}
            </>
          ))}
      </ul>
    </>
  );
});

export default FieldSchema;
