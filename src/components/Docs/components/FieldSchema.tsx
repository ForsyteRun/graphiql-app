import {
  GraphQLLeafType,
  GraphQLNamedType,
  GraphQLOutputType,
  GraphQLType,
  isLeafType,
} from 'graphql/type';
import { memo, useCallback, useEffect, useState } from 'react';
import { IRootSchema } from '../../../types/interface';
import { FieldsType } from '../../../types/types';
import { IFieldSchema } from '../types/interfaces';
import DetailedField from './DetailedField';
import NextField from './NextField';

const FieldSchema = memo(({ schema, setRootSchema }: IFieldSchema) => {
  const [isDescription, setIsDescription] = useState(false);

  const handleClick = useCallback(
    (value: GraphQLType | GraphQLNamedType) => {
      if ('getFields' in value) {
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
    if (!schema) setIsDescription(false);
  }, [schema]);

  return (
    <>
      <ul className="fieldSchema-container">
        {schema &&
          Object.entries(schema.fields).map(
            ([fieldName, fieldType]: [string, GraphQLOutputType]) => (
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
            )
          )}
      </ul>
    </>
  );
});

export default FieldSchema;
